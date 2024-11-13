import * as Cesium from 'cesium'
// import LightWallMaterialProperty from "./material/LightWallMaterialProperty";
import WallDiffuseMaterialProperty from './material/WallDiffuseMaterialProperty'
import { getCenter } from '@/utils/mapUtils'
// import CircleWave from "./material/WaterMaterialProperty";
import {
  type200,
  type201,
  type202,
  type203,
  type204,
  type205,
  type206,
  type400,
  type401,
  type402,
  type403,
  type404,
  type405,
  type406
} from './Container'
/**
 * 使用setTimeout模拟setInterval
 * @param {*} callback
 * @param {*} interval
 * @returns
 */
export function createTimer(callback, interval) {
  let timerId = null

  function start() {
    timerId = setTimeout(function tick() {
      callback()

      timerId = setTimeout(tick, interval)
    }, interval)
  }

  function stop() {
    clearTimeout(timerId)
    timerId = null
  }

  return { start, stop }
}

/**
 * 函数防抖
 * @param {*} func
 * @param {*} wait
 * @returns
 */
export function debounce(func, wait) {
  let timeout
  return function () {
    clearTimeout(timeout)
    timeout = setTimeout((...args) => {
      func.apply(this, args)
    }, wait)
  }
}

export const timeFuns = {}

export const resetTimeFuns = () => {
  for (const key of Object.keys(timeFuns)) {
    timeFuns[key] = {}
  }
}

/**
 * 添加底图
 * @param {} param0
 */
export const addDitu = ({ viewer, url = './model/dYditu/tileset.json' }) => {
  return new Promise((resolve, reject) => {
    const tileset = new Cesium.Cesium3DTileset({
      url
    })
    viewer.scene.primitives.add(tileset)
    tileset.readyPromise
      .then(function () {
        // console.log('3D Tileset 已经加载完成');
        // 在这里添加你希望在3D Tileset 加载完成后执行的代码
        resolve('ditu')
      })
      .catch(function (error) {
        reject()
        console.error(error)
      })
  })
}

// 保存弹框信息
export const popupLists = []
/**
 * 自定义弹出框
 * @param {*} id
 * @param {*} position
 * @param {*} dom
 * @param {*} innerHTML
 * @returns
 */
export const customPopupBox = (id, position, dom, innerHTML) => {
  const item = popupLists.find(list => list.id == id)
  if (item) {
    return item
  }
  // 新增弹框   创建 HTML 元素用作自定义的弹出框
  const popup = document.createElement('div')
  popup.innerHTML = `
  <div class="mapboxgl-popup-tip" style="transform: scaleY(-1);top: -33px;"></div>
  <div class="mapboxgl-popup-content">
  ${innerHTML}
  </div>
  `
  popup.className = 'warn-mapboxgl-popup'
  // popup.style.backgroundColor = 'white';
  // popup.style.padding = '10px';
  popup.style.position = 'absolute'
  popup.style.zIndex = 100
  popup.style.left = '-1000px'
  popup.style.top = '-1000px'
  // popup.style.width = '230px';
  popup.style.whiteSpace = 'nowrap' /*内容在超过宽度时不会自动换行*/
  dom.appendChild(popup)
  popupLists.push({
    id,
    popup,
    position
  })
}

export const deleteCustomPopupBox = id => {
  const itemIndex = popupLists.findIndex(list => list.id == id)
  if (itemIndex == -1) return 0
  return popupLists.splice(itemIndex, 1)
}

export const removeAllCustomPopupBox = () => {
  return popupLists.splice(0, popupLists.length)
}

/**
 *  设置模型方位
 * @param {*} longitude
 * @param {*} latitude
 * @param {*} direction
 * @returns
 */
export function setModelDirection(longitude, latitude, direction) {
  const center = Cesium.Cartesian3.fromDegrees(longitude, latitude, 0)
  const heading = Cesium.Math.toRadians(direction)
  const pitch = 0
  const roll = 0
  const hpr = new Cesium.HeadingPitchRoll(heading, pitch, roll)
  const orientation = Cesium.Transforms.headingPitchRollQuaternion(center, hpr)
  return orientation
}

export const polylineMapping = {}
/**
 * 画线
 * @param {*} viewer
 * @param {*} position
 */
export const addorUpdateorDeleteLine = (viewer, position, id, isDash = false) => {
  const flag = position && position.length
  if (!flag && !polylineMapping[id])
    // 坐标为空且还未添加到场景中 直接返回
    return
  if (!flag) {
    // 清空
    // console.log(polylineMapping[id],'polylineMapping[id]')
    polylineMapping[id].removeAll()
    polylineMapping[id] = null
    return
  }
  const positions = Cesium.Cartesian3.fromDegreesArray(position)
  // 更新
  if (polylineMapping[id]) {
    polylineMapping[id].removeAll()
    polylineMapping[id].add({
      positions: positions,
      width: 5,
      material: isDash
        ? Cesium.Material.fromType('PolylineDash', {
          color: Cesium.Color.fromCssColorString('#2aff6a')
        })
        : Cesium.Material.fromType('Color', {
          color: Cesium.Color.fromCssColorString('#2aff6a')
        })
    })
  } else {
    // 新建
    if (flag) {
      const polylines = viewer.scene.primitives.add(new Cesium.PolylineCollection())
      // 保存到对象中
      polylineMapping[id] = polylines
    }
  }
}

/**
 * 释放资源
 */
export const releaseLines = () => {
  for (let item of Object.keys(polylineMapping)) {
    polylineMapping[item] && !polylineMapping[item].isDestroyed() && polylineMapping[item].destroy()
    polylineMapping[item] = null
  }
}

/**
 * 导入模型
 * @param {*} param0
 */
export const addModel = (
  viewer,
  {
    longitude = '',
    latitude = '',
    url = './model/Air.glb',
    scale = 1,
    direction = 0,
    name = '',
    id = '',
    color = '',
    type = ''
  } = {}
) => {
  // console.log(direction,'direction')
  // 添加文字标签和广告牌
  viewer.entities.add({
    type: type,
    id: id,
    name: name,
    position: Cesium.Cartesian3.fromDegrees(longitude, latitude, 0),
    orientation: setModelDirection(longitude, latitude, direction),
    label: {
      text: `
      ${name}
      `,
      font: '15px sans-serif',
      fillColor: color ? Cesium.Color.fromCssColorString(color) : Cesium.Color.WHITE,
      outlineColor: Cesium.Color.BLACK,
      outlineWidth: 4,
      // FILL填充文字，OUTLINE勾勒标签，FILL_AND_OUTLINE填充文字和勾勒标签
      style: Cesium.LabelStyle.FILL_AND_OUTLINE,
      // 设置文字的偏移量
      pixelOffset: new Cesium.Cartesian2(0, -30),
      // 设置文字的显示位置,  LEFT/RIGHT /CENTER
      horizontalOrigin: Cesium.HorizontalOrigin.CENTER, // 这里进行了居中设置 ,
      // 设置文字的显示位置
      verticalOrigin: Cesium.VerticalOrigin.CENTER,
      disableDepthTestDistance: Number.POSITIVE_INFINITY // 禁止对该标签进行深度测试
    },
    model: {
      uri: url,
      scale: scale,
      // scaleByDistance: new Cesium.NearFarScalar(0, 1, maxHeight, 0),
      color: color ? Cesium.Color.fromCssColorString(color) : Cesium.Color.WHITE
    }
  })
}

/**
 * 水波纹
 *  * @param {*} viewer
 * @param {*} config
 */
export const CircleWaveEntity = (
  viewer,
  {
    position = [117.97428049694189, 24.459462798229204, 100],
    color = '#f6a21d',
    maxRadius = 20,
    duration = 1500,
    id = 'cirCleWave1'
  } = {}
) => {
  // console.log(position, "position");
  // 水波纹扩散
  let circleWave = new CircleWave(viewer, id)
  circleWave.add(position, color, maxRadius, duration)
}

/**
 * 使用ModelInstanceCollection优化
 * @param {*} param0
 */
export const addModelCollection = ({
  viewer,
  positions,
  url,
  type = '',
  scale = 1,
  degree = 102.85
} = {}) => {
  return new Promise((resolve, reject) => {
    try {
      let instances = []
      for (let i = 0; i < positions.length; i++) {
        // 设置模型位置矩阵
        const modelMatrix = Cesium.Transforms.headingPitchRollToFixedFrame(
          // 位置
          Cesium.Cartesian3.fromDegrees(
            positions[i].longitube,
            positions[i].latiude,
            !positions[i].height ? 0 : positions[i].height
          ),
          // 模型旋转情况
          new Cesium.HeadingPitchRoll(
            Cesium.Math.toRadians(degree !== 102.85 ? degree : 102.85),
            0,
            0
          )
        )
        // 设置scale
        Cesium.Matrix4.multiplyByUniformScale(modelMatrix, +scale, modelMatrix)

        instances.push({
          batchId: `${type}${i}`, // 点击时候属性是 _instanceId
          modelMatrix: modelMatrix
        })
      }
      const entities = viewer.scene.primitives.add(
        new Cesium.ModelInstanceCollection({
          url,
          instances: instances,
          allowPicking: true
        })
      )
      entities.readyPromise.then(function (model) {
        // console.log('模型已经加载完毕');
        resolve(type)
      })
    } catch {
      reject()
    }
  })
}

/**
 *
 */
export let lightWallIdList = []
export const clearWallList = () => {
  lightWallIdList = []
}

/**
 * 光墙
 * @param {*} param0
 */
export const lightWall = (
  viewer,
  { position = [], id = '', text = '', isHeights = false, color = '#fff' } = {}
) => {
  lightWallIdList.push(id)
  color = Cesium.Color.fromCssColorString(color)
  const textPosition = [[]]
  let gap = isHeights ? 3 : 2
  for (let index = 0; index < position.length; index += gap) {
    textPosition[0].push([position[index], position[index + 1]])
  }
  const center = getCenter(textPosition)

  const entity = viewer.entities.add({
    id: id,
    name: 'lightWall',
    position: Cesium.Cartesian3.fromDegrees(...center, 0),
    wall: {
      positions: isHeights
        ? Cesium.Cartesian3.fromDegreesArrayHeights(position)
        : Cesium.Cartesian3.fromDegreesArray(position),
      height: 10,
      maximumHeights: isHeights ? null : Array(position.length / 2).fill(2),
      minimumHeights: isHeights ? null : Array(position.length / 2).fill(0),
      // 扩散墙材质
      material: new WallDiffuseMaterialProperty({
        color
      })
    },
    label: {
      text: text,
      font: '12px sans-serif',
      style: Cesium.LabelStyle.FILL_AND_OUTLINE,
      // outlineWidth: 2,
      verticalOrigin: Cesium.VerticalOrigin.BOTTOM,
      pixelOffset: new Cesium.Cartesian2(0, -20),
      fillColor: Cesium.Color.WHITE,
      // outlineColor: Cesium.Color.BLACK,
      distanceDisplayCondition: new Cesium.DistanceDisplayCondition(0, 100)
    }
  })
}

/**
 * 生成marker
 * @param {} param0
 */
export const markerFac = ({ image, viewer, location, id }) => {
  viewer.entities.add({
    id,
    position: Cesium.Cartesian3.fromDegrees(...location, 10),
    billboard: {
      image, //这里替换成任意的图像url
      width: 12,
      height: 12
    }
  })
}

/**
 * 路灯位置
 */
export const StreetLamp = {
  value: 'StreetLamp',
  url: 'StreetLamp.glb',
  position: [
    { longitube: 117.9694086, latiude: 24.4561364 },
    { longitube: 117.9696639, latiude: 24.4571713 }
  ]
}

/**
 * 船舶位置
 */
export const Boat = {
  value: 'Boat',
  url: 'Boat.glb',
  degree: 0,
  position: [{ longitube: 117.97005, latiude: 24.454739 }]
}

/**
 * 岸桥位置
 */
export const AnQiao = {
  value: 'AnQiao',
  url: 'AnQiao.glb',
  scale: '0.006',
  // [117.9734750582137, 24.45443381084621]
  position: [
    { longitube: 117.973465, latiude: 24.454371 },
    { longitube: 117.9747, latiude: 24.45412 },
    { longitube: 117.971588, latiude: 24.454755 }
  ]
}

// 场桥
export const ChangQiao = {
  value: 'ChangQiao',
  url: 'ChangQiao.glb',
  scale: '0.007',
  degree: 12.85,
  position: [
    { longitube: 117.974304, latiude: 24.456032 },
    { longitube: 117.973636, latiude: 24.456479 },
    { longitube: 117.971797, latiude: 24.458722 },
    { longitube: 117.974251, latiude: 24.45582 },
    { longitube: 117.971109, latiude: 24.455915 },
    { longitube: 117.970744, latiude: 24.45655 },
    { longitube: 117.970176, latiude: 24.456888 },
    { longitube: 117.971054, latiude: 24.457553 },
    { longitube: 117.969512, latiude: 24.456495 },
    { longitube: 117.96785, latiude: 24.45715 }
  ]
}

// 小号箱子 0 1 2
// 集装箱 200
export const Container200 = {
  value: 'Container200',
  url: 'Container200.glb',
  scale: '1',
  degree: 102.85,
  position: type200
}

// 集装箱 201
export const Container201 = {
  value: 'Container201',
  url: 'Container201.glb',
  scale: '1',
  degree: 102.85,
  position: type201
}

// 集装箱 202
export const Container202 = {
  value: 'Container202',
  url: 'Container202.glb',
  scale: '1',
  degree: 102.85,
  position: type202
}

// 集装箱 203
export const Container203 = {
  value: 'Container202',
  url: 'Container202.glb',
  scale: '1',
  degree: 102.85,
  position: type203
}

// 集装箱 204
export const Container204 = {
  value: 'Container200',
  url: 'Container200.glb',
  scale: '1',
  degree: 102.85,
  position: type204
}

// 集装箱 205
export const Container205 = {
  value: 'Container201',
  url: 'Container201.glb',
  scale: '1',
  degree: 102.85,
  position: type205
}

// 集装箱 206
export const Container206 = {
  value: 'Container202',
  url: 'Container202.glb',
  scale: '1',
  degree: 102.85,
  position: type206
}

// 大号箱子  6 5 4 3
// 集装箱 400
export const Container400 = {
  value: 'Container406',
  url: 'Container406.glb',
  scale: '1',
  degree: 102.85,
  position: type400
}

// 集装箱 401
export const Container401 = {
  value: 'Container405',
  url: 'Container405.glb',
  scale: '1',
  degree: 102.85,
  position: type401
}

// 集装箱 402
export const Container402 = {
  value: 'Container404',
  url: 'Container404.glb',
  scale: '1',
  degree: 102.85,
  position: type402
}

// 集装箱 403
export const Container403 = {
  value: 'Container403',
  url: 'Container403.glb',
  scale: '1',
  degree: 102.85,
  position: type403
}

// 集装箱 404
export const Container404 = {
  value: 'Container405',
  url: 'Container405.glb',
  scale: '1',
  degree: 102.85,
  position: type404
}

// 集装箱 405
export const Container405 = {
  value: 'Container403',
  url: 'Container403.glb',
  scale: '1',
  degree: 102.85,
  position: type405
}

// 集装箱 406
export const Container406 = {
  value: 'Container404',
  url: 'Container404.glb',
  scale: '1',
  degree: 102.85,
  position: type406
}

export const statisticsArea = {
  箱区: {
    箱区F: {
      '箱区F05-F06': {
        车道3: [
          [117.96983460943147, 24.457206245793824],
          [117.96778798984917, 24.457631707150004],
          [117.96777668848777, 24.45758596415371],
          [117.96982349978204, 24.457160772553884],
          [117.96983460943147, 24.457206245793824]
        ],
        车道2: [
          [117.96982349978204, 24.457160772553884],
          [117.96777668848777, 24.45758596415371],
          [117.96776560452267, 24.457541051268894],
          [117.96981273428943, 24.45711671177117],
          [117.96982349978204, 24.457160772553884]
        ],
        车道1: [
          [117.96981273428943, 24.45711671177117],
          [117.96776560452267, 24.457541051268894],
          [117.9677544337462, 24.457495876336658],
          [117.96980157682249, 24.457071045835637],
          [117.96981273428943, 24.45711671177117]
        ]
      },
      '箱区F01-F02': {
        车道3: [
          [117.9695810815133, 24.456168583156213],
          [117.96753142039653, 24.456594561221852],
          [117.96752034715291, 24.45654831572163],
          [117.9695698407555, 24.45612257631302],
          [117.9695810815133, 24.456168583156213]
        ],
        车道2: [
          [117.9695698407555, 24.45612257631302],
          [117.96752034715291, 24.45654831572163],
          [117.96750917724283, 24.45650310004089],
          [117.96955906322454, 24.456078464123696],
          [117.9695698407555, 24.45612257631302]
        ],
        车道1: [
          [117.96955906322454, 24.456078464123696],
          [117.96750917724283, 24.45650310004089],
          [117.96749788637206, 24.45645818673615],
          [117.96954819916759, 24.456033998710673],
          [117.96955906322454, 24.456078464123696]
        ]
      }
    }
  },
  主干道: {
    经六路: {
      车道6: [
        [117.96987463424148, 24.457197465546656],
        [117.96983460943147, 24.457206245793824],
        [117.96950543837251, 24.455858980233618],
        [117.96954200348715, 24.455850983182664],
        [117.96987463424148, 24.457197465546656]
      ],
      车道5: [
        [117.96991387168737, 24.45718910417412],
        [117.96987463424148, 24.457197465546656],
        [117.96954209202485, 24.455851340997846],
        [117.96957942703611, 24.45584356016883],
        [117.96991387168737, 24.45718910417412]
      ],
      车道4: [
        [117.9699581276193, 24.45718005139038],
        [117.96991387168737, 24.45718910417412],
        [117.96958011430283, 24.45584341674099],
        [117.96962384247463, 24.455834303095376],
        [117.9699581276193, 24.45718005139038]
      ],
      车道3: [
        [117.96999588892322, 24.45717257364886],
        [117.9699581276193, 24.45718005139038],
        [117.96962384247463, 24.455834303095376],
        [117.96966148468313, 24.455826458890535],
        [117.96999588892322, 24.45717257364886]
      ],
      车道2: [
        [117.97003439704179, 24.457164488239556],
        [117.96999588892322, 24.45717257364886],
        [117.96966148468313, 24.455826458890535],
        [117.96969939187774, 24.455818189597363],
        [117.97003439704179, 24.457164488239556]
      ],
      车道1: [
        [117.9700722672805, 24.45715717337718],
        [117.97003439704179, 24.457164488239556],
        [117.96969947937444, 24.455818540197313],
        [117.9697380687743, 24.45581049761709],
        [117.9700722672805, 24.45715717337718]
      ]
    }
  }
}

export const roadTypeEnum = {
  1: '主干道',
  2: '箱区',
  3: '码头面'
}
export const congestionStatusEnum = {
  0: '畅通',
  1: '轻度拥堵',
  2: '中度拥堵',
  3: '严重拥堵'
}

/**
 * id 批量删除元素
 * @param {*} viewer
 * @param {*} idArray 数组
 */
export const removeEntitiesById = (viewer, idArray) => {
  for (let i = 0; i < idArray.length; i++) {
    let entity = viewer.entities.getById(idArray[i])
    if (entity) {
      viewer.entities.remove(entity)
    }
  }
}

/**
 * 查找实例id
 * @param {*} viewer
 * @param {*} id
 */
export const findEntitiesById = (viewer, id) => {
  let entity = viewer.entities.getById(id)
  return entity
}

/**
 * 集卡类型
 */
export const mapCarType = {
  1: '无人集卡',
  2: '外集卡',
  3: '其他车辆',
  4: '测试车辆',
  5: '内集卡（有人）'
}

/**
 * 变道信息
 */
export let carAction = {}

/**
 * 保存集卡
 */
export let carTypeObj = {
  1: {},
  2: {},
  3: {},
  4: {},
  5: {}
}

/**
 * 重置carTypeObj
 */
export const resetCarTypeObj = () => {
  for (let key of Object.keys(carTypeObj)) {
    carTypeObj[key] = {}
  }
}

/*
 *
 */
export const positionList = {}

/**
 * 重置positionList
 */
export const resetPositionList = () => {
  for (let key of Object.keys(positionList)) {
    positionList[key] = {}
  }
}

// 添加或者更新模型
export const addOrUpdateCar = (viewer, car) => {
  const entity = findEntitiesById(viewer, car.id)

  if (entity) {
    // 更新
    const position2 = Cesium.Cartesian3.fromDegrees(car.longitude, car.latitude)
    // entity.position = position2;
    entity.position.setValue(position2)
    entity.orientation = Cesium.Transforms.headingPitchRollQuaternion(
      position2,
      new Cesium.HeadingPitchRoll(Cesium.Math.toRadians(car.orientation || 0), 0, 0)
    )
  } else {
    positionList[car.id] = [car.longitude, car.latitude]
    // 添加模型
    addModel(viewer, {
      url: `./model/AVG.glb`,
      scale: 0.0006,
      direction: car.orientation,
      longitude: car.longitude,
      latitude: car.latitude,
      name: car.name,
      id: car.id,
      color: car.color,
      type: 'car'
    })
  }
}


let selectedEntity = null; // 用于保存当前高亮的模型实体
/**
 *  鼠标点击到模型  调用回调函数
 * @param {*} viewer
 * @param {*} callback
 * @returns
 */
export const handlerClickEntityModel = (viewer, callback) => {
  // 拾取
  const handler = new Cesium.ScreenSpaceEventHandler(viewer.scene.canvas)

  handler.setInputAction(movement => {
    const pickPosition = viewer.scene.pickPosition(movement.position) // 获取拾取的坐标位置
    const pickModel = viewer.scene.pick(movement.position) // 获取拾取的模型
    console.log(pickModel, 'pickModel')

    // 先取消之前模型的高亮效果
    if (selectedEntity) {
      selectedEntity.model.silhouetteColor = Cesium.Color.TRANSPARENT;
      selectedEntity.model.silhouetteSize = 0;
    }

    // 使用ModelInstanceCollection批量加载的模型
    if (
      Cesium.defined(pickPosition) &&
      Cesium.defined(pickModel) &&
      pickModel._instanceId
    ) {
      // 点击到模型上，改变鼠标形状
      viewer.canvas.style.cursor = 'pointer'
      let windowPosition = Cesium.SceneTransforms.wgs84ToWindowCoordinates(viewer.scene, pickPosition)
      // 转换为经纬度
      const cartographic = Cesium.Cartographic.fromCartesian(pickPosition);
      const longitude = Cesium.Math.toDegrees(cartographic.longitude);
      const latitude = Cesium.Math.toDegrees(cartographic.latitude);
      const height = cartographic.height; // 地形高度

      let coord = {
        ...windowPosition,
        longitude,
        latitude,
        height,
        id: pickModel._instanceId,
        position: pickPosition,
        model: pickModel
      }
      callback?.(coord)
    } else if (
      // 使用viewer.entities.add 添加的模型
      Cesium.defined(pickPosition) &&
      Cesium.defined(pickModel) &&
      pickModel.id &&
      pickModel.id instanceof Cesium.Entity
    ) {

      // 悬停到模型上，改变鼠标形状
      viewer.canvas.style.cursor = 'pointer'

      // 高亮当前点击的模型
      selectedEntity = pickModel.id;
      selectedEntity.model.silhouetteColor = Cesium.Color.RED;
      selectedEntity.model.silhouetteSize = 3.0;

    }

  }, Cesium.ScreenSpaceEventType.LEFT_CLICK)

  return handler
}

/**
 *  鼠标悬浮到模型  调用回调函数
 * @param {*} viewer
 * @param {*} type
 * @param {*} callback
 * @returns
 */
export const handlerHoverEntityModel = (viewer, type, callback) => {
  // 拾取
  const handler = new Cesium.ScreenSpaceEventHandler(viewer.scene.canvas)
  handler.setInputAction(movement => {
    const pickModel = viewer.scene.pick(movement.endPosition) // 获取拾取的模型
    console.log(pickModel, 'pickModel')
    if (Cesium.defined(pickModel) && pickModel._instanceId?.includes(type)) {
      // 悬停到模型上，改变鼠标形状
      viewer.canvas.style.cursor = 'pointer'
      callback?.(pickModel._instanceId)
    } else if (
      Cesium.defined(pickModel) &&
      pickModel.id &&
      pickModel.id.type &&
      pickModel.id.type.includes(type) &&
      pickModel.id instanceof Cesium.Entity
    ) {
      // 悬停到模型上，改变鼠标形状
      viewer.canvas.style.cursor = 'pointer'
      callback?.(pickModel.id.id)
    } else {
      // 鼠标离开模型，恢复默认形状
      viewer.canvas.style.cursor = 'default'
      callback?.('')
    }
  }, Cesium.ScreenSpaceEventType.MOUSE_MOVE)
  return handler
}

/**
 * 获取屏幕坐标
 */
export const updatePopupPosition = (scene, position) => {
  let windowPositionposition = Cesium.SceneTransforms.wgs84ToWindowCoordinates(
    scene,
    position
  );
  return {
    ...windowPositionposition
  }
}
