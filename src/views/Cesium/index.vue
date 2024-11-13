<template>
  <div id="cesiumContainer" ref="cesiumContainer"></div>
  <Context :text="currentTarget" />
  <div></div>
</template>

<script setup>
import { onMounted, onUnmounted, ref } from 'vue'
import * as Cesium from 'cesium'
import CesiumNavigaion from 'cesium-navigation-es6'
import './widgets.css'

import initViewer from './initViewer'
import MousePosition from './MousePosition'

import { options, configSwitch, mapConfig, wallConfig } from './config'

import Spriteline1MaterialProperty from './material/Spriteline1MaterialProperty'

// 封装的弹出框函数 可以手动调用，支持传递字符串、组件
import { useDialog, Context } from '@/components'
import ShowTemplate from './ShowTemplate/index.vue'

import {
  addDitu,
  addModel,
  addModelCollection,
  StreetLamp,
  Boat,
  AnQiao,
  ChangQiao,
  Container200,
  Container201,
  Container202,
  Container203,
  Container204,
  Container205,
  Container206,
  Container400,
  Container401,
  Container402,
  Container403,
  Container404,
  Container405,
  Container406,
  lightWall,
  createTimer,
  addOrUpdateCar,
  handlerClickEntityModel,
  handlerHoverEntityModel,
  updatePopupPosition
} from './utils'

const currentTarget = ref('')
let open,
  close,
  handleHover,
  viewer,
  preRenderListener,
  registerPreRenderListener,
  unregisterPreRenderListener,
  stop,
  start

onMounted(async () => {
  viewer = initViewer(mapConfig)
  // 根据鼠标位置生成经纬度值
  let mousePosition = new MousePosition(viewer)
  // 初始化导航罗盘
  let navigation = new CesiumNavigaion(viewer, options)
  // 加载地图
  const diTuPromise = addDitu({ viewer })

  // 加载模型
  const collections = [
    StreetLamp,
    Boat,
    AnQiao,
    ChangQiao,
    Container200,
    Container201,
    Container202,
    Container203,
    Container204,
    Container205,
    Container206,
    Container400,
    Container401,
    Container402,
    Container403,
    Container404,
    Container405,
    Container406
  ]

  let allPromises = [diTuPromise]
  for (let collection of collections) {
    if (configSwitch[collection.value]) {
      allPromises.push(
        addModelCollection({
          viewer,
          positions: collection.position,
          url: `./model/${collection.url}`,
          type: `${collection.value}`,
          scale: collection.scale,
          degree: collection.degree
        })
      )
    }
  }

  // 模型加载完毕后才进行下面的事件
  await Promise.all(allPromises)

  // 鼠标悬浮
  handleHover = handlerHoverEntityModel(viewer, '', id => {
    currentTarget.value = id
  })

  let global = ''
  // 鼠标点击
  const clickHandler = handlerClickEntityModel(viewer, args => {
    global = args
    preRenderListener(viewer.scene)
    console.log(global, 'args')
  })

  preRenderListener = function (scene, time) {
    if (!global) return
    // 自定义逻辑
    const { x, y } = updatePopupPosition(scene, global.position)

    ;({ open, close } = useDialog())

    console.log(x, y)
    // 打开一个包含HTML内容的对话框
    open(ShowTemplate, {
      id: global.id,
      dialogProps: {
        visible: true,
        top: y + 'px',
        left: x + 'px',
        'onUpdate:visible': newVal => {
          if (!newVal) {
            global = null
          }
        }
      }, // 传递给DialogComponent的属性
      contentProps: {
        id: global.id,
        position: {
          longitude: global.longitude,
          latitude: global.latitude,
          height: global.height
        }
      } // 传递给内容组件的属性
    })
  }

  // 定义函数来注册和注销preRender监听器
  registerPreRenderListener = function () {
    // 监听场景渲染之前发生的事件的方法
    viewer.scene.preRender.addEventListener(preRenderListener)
  }

  unregisterPreRenderListener = function () {
    viewer.scene.preRender.removeEventListener(preRenderListener)
  }

  // 监听相机开始和结束移动事件
  viewer.camera.moveStart.addEventListener(registerPreRenderListener)
  viewer.camera.moveEnd.addEventListener(unregisterPreRenderListener)

  // 电子围栏
  for (let config of wallConfig) {
    lightWall(viewer, {
      position: [...config.positions.flat(), ...config.positions[0]],
      id: config.id,
      text: config.laneName,
      color: config.color
    })
  }

  // 道路穿梭线
  Cesium.GeoJsonDataSource.load('/road.json').then(function (dataSource) {
    viewer.dataSources.add(dataSource)
    const entities = dataSource.entities.values
    for (let i = 0; i < entities.length; i++) {
      let entity = entities[i]
      entity.polyline.width = 1.7
      entity.polyline.material = new Spriteline1MaterialProperty(1000, '/spriteline.png')
    }
  })

  // 模拟车辆运动
  fetch('/carData.json')
    .then(response => response.json())
    .then(data => {
      const keys = Object.keys(data)
      let length = data[keys[0]].length,
        index = 0
      // 模拟一个无人集卡的定时器任务
      ;({ start, stop } = createTimer(() => {
        for (let key of keys) {
          data[key][index % length].id = key
          data[key][index % length].orientation *= 180 / Math.PI
          data[key][index % length].name = key
          addOrUpdateCar(viewer, data[key][index % length])
        }
        index++
      }, 1 * 1000))
      start()
    })
    .catch(error => console.error('获取数据失败', error))
})

onUnmounted(() => {
  close()
  stop() // 关闭定时器
  handleHover.destroy() // 清除悬浮监听
  handleHover = null
  viewer.scene.preRender.removeEventListener(preRenderListener)
  viewer.camera.moveStart.removeEventListener(registerPreRenderListener)
  viewer.camera.moveEnd.removeEventListener(unregisterPreRenderListener)
  viewer = null
  preRenderListener = null
  registerPreRenderListener = null
  unregisterPreRenderListener = null
})
</script>

<style>
#cesiumContainer {
  width: 100vw;
  height: 100vh;
}

.showContainer {
  position: fixed;
  left: 50%;
  top: 100px;
  background-color: rgba(0, 0, 0, 0.6);
}
</style>
