<template>
  <div ref="canvasContainer" style="width: 100%; height: 100vh"></div>
  <div class="tool">
    <div class="btn" @click="toggleExplode">
      {{ !isExploded ? '拆解' : '合并' }}
    </div>
    <hr />
    <div class="btn">
      颜色： <el-color-picker v-model="color" />
      {{ color }}
    </div>
  </div>
</template>

<script setup>
import { onMounted, ref, onUnmounted } from 'vue'
import * as THREE from 'three'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js'
import { ElColorPicker } from 'element-plus'

const canvasContainer = ref(null)
let scene, camera, renderer, controls
let originalPositions = new Map()
let modelCenter = new THREE.Vector3()
let isExploded = ref(false) // 跟踪模型是否已炸裂
let color = ref('') // 跟踪模型是否已炸裂

onMounted(() => {
  initThreeJS()
})

onUnmounted(() => {
  renderer.dispose()
  renderer.domElement.removeEventListener('click', onDocumentMouseClick)
})

function initThreeJS() {
  scene = new THREE.Scene()
  scene.background = new THREE.Color(0x263238) // 设置背景色

  camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000)
  camera.position.set(100, 100, 100)
  camera.lookAt(scene.position)

  renderer = new THREE.WebGLRenderer()
  renderer.setSize(window.innerWidth, window.innerHeight)
  canvasContainer.value.appendChild(renderer.domElement)

  const axesHelper = new THREE.AxesHelper(500)
  scene.add(axesHelper)

  const light = new THREE.HemisphereLight(0xffffbb, 0x080820, 1)
  scene.add(light)

  controls = new OrbitControls(camera, renderer.domElement)
  controls.enableDamping = true

  // 添加鼠标点击事件监听器
  renderer.domElement.addEventListener('click', onDocumentMouseClick, false)

  loadModel()

  animate()
}

function animate() {
  requestAnimationFrame(animate)
  controls.update()
  renderer.render(scene, camera)
}

function loadModel() {
  const loader = new GLTFLoader()
  loader.load(
    '/model/ChangQiao.glb',
    gltf => {
      scene.add(gltf.scene)
      gltf.scene.scale.set(0.05, 0.05, 0.05) // 调整模型大小
      const box = new THREE.Box3().setFromObject(gltf.scene)
      box.getCenter(modelCenter) // 计算模型中心
      modelCenter.negate() // 获取中心到原点的向量
      gltf.scene.position.add(modelCenter) // 移动模型，使其中心与原点对齐
      recordOriginalPositions(gltf.scene)
    },
    undefined,
    error => {
      console.error(error)
    }
  )
}

function recordOriginalPositions(object) {
  object.traverse(child => {
    if (child.isMesh) {
      originalPositions.set(child, child.position.clone())
    }
  })
}

function onDocumentMouseClick(event) {
  event.preventDefault()

  // 将鼠标点击的屏幕位置转换为Three.js中的标准化设备坐标(NDC)
  const mouse = new THREE.Vector2(
    (event.clientX / window.innerWidth) * 2 - 1,
    -(event.clientY / window.innerHeight) * 2 + 1
  )

  // 设置raycaster来检测点击位置
  const raycaster = new THREE.Raycaster()
  raycaster.setFromCamera(mouse, camera)

  // 获取与raycaster相交的所有对象，确保递归检查所有子对象
  const intersects = raycaster.intersectObjects(scene.children, true)
  console.log(intersects)

  const firstIntersectedObject = intersects[0]?.object

  // 检查被点击的对象是否是Mesh
  if (firstIntersectedObject.isMesh) {
    // 为被点击的Mesh创建一个新的材质副本
    const newMaterial = firstIntersectedObject.material.clone()
    let color1 = color.value.slice(1) || '0xffffff'
    console.log('color', color1)
    newMaterial.color.set(+`0x${color1}`) // 设置新材质为随机颜色
    firstIntersectedObject.material = newMaterial // 应用新材质到被点击的Mesh
  }
}

function toggleExplode(e) {
  applyExplodeEffect(!isExploded.value)
  isExploded.value = !isExploded.value
}

function applyExplodeEffect(shouldExplode) {
  scene.traverse(child => {
    if (child.isMesh) {
      let originalPosition = originalPositions.get(child)
      if (shouldExplode && originalPosition) {
        let direction = child.position.clone().sub(modelCenter).normalize()
        child.position.add(direction.multiplyScalar(1000 * Math.random())) // 调整为可见的炸裂效果
      } else if (!shouldExplode && originalPosition) {
        child.position.copy(originalPosition)
      }
    }
  })
}
</script>

<style lang="scss" scoped>
.tool {
  position: fixed;
  top: 200px;
  left: 200px;
  color: #333;
  background-color: #fff;
  border: 1px solid #333;
  border-radius: 4px;
  padding: 10px 20px;
  cursor: pointer;
  user-select: none;
  text-align: center;

  .btn {
    margin: 10px 0;
  }

  .btn:hover {
    background-color: #eee;
  }
}
</style>
