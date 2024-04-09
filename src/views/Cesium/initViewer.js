import * as Cesium from 'cesium'

export default function initViewer(config) {
  // 设置cesium token
  Cesium.Ion.defaultAccessToken =
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJqdGkiOiJhMzNkNTE5Zi1mMjY4LTRiN2QtOTRlZC1lOTUyM2NhNDYzNWYiLCJpZCI6NTU0OTYsImlhdCI6MTYyNTAyNjMyOX0.a2PEM4hQGpeuMfeB9-rPp6_Gkm6O-02Dm4apNbv_Dlk'

  // 设置cesium静态资源路径
  window.CESIUM_BASE_URL = '/'

  // 设置cesium默认视角
  Cesium.Camera.DEFAULT_VIEW_RECTANGLE = Cesium.Rectangle.fromDegrees(
    // 西边的经度
    89.5,
    // 南边维度
    20.4,
    // 东边经度
    110.4,
    // 北边维度
    61.2
  )

  const viewer = new Cesium.Viewer('cesiumContainer', {
    // 是否显示信息窗口
    infoBox: false, // 鼠标左键单击，选中Entity，鼠标左键双击，则会追踪到Entity
    // 关闭选择控件
    selectionIndicator: false,
    //  在页面不变化时，暂停渲染
    requestRenderMode: false,
    // 是否显示查询按钮
    geocoder: false,
    // 是否显示home按钮
    homeButton: true,
    // 控制查看器的显示模式
    sceneModePicker: false,
    // 是否显示图层选择
    baseLayerPicker: false,
    // 是否显示帮助按钮
    navigationHelpButton: false,
    // 是否播放动画
    animation: false,
    // 是否显示时间轴
    timeline: false,
    // 是否显示全屏按钮
    fullscreenButton: false,
    shouldAnimate: false,
    // 天空大气
    skyAtmosphere: false
  })

  // 修改homeButton的默认返回位置
  viewer.homeButton.viewModel.command.beforeExecute.addEventListener(function (e) {
    e.cancel = true
    viewer.camera.flyTo({
      destination: Cesium.Cartesian3.fromDegrees(
        config.longitude,
        config.latitude,
        config.initHeight
      ),
      // 指定相机视角
      orientation: {
        // 指定相机的朝向,偏航角
        heading: 2.5740720580595147,
        // 指定相机的俯仰角, 90度是竖直向上,-90度是向下
        pitch: -0.6298203618976057,
        // 指定相机的滚转角,翻滚角
        roll: 6.283139825443039
      }
    })
  })

  // 设置沙箱允许使用js
  // const iframe = document.getElementsByClassName("cesium-infoBox-iframe")[0];
  // iframe.setAttribute(
  //   "sandbox",
  //   "allow-same-origin allow-scripts allow-popups allow-forms"
  // );
  // iframe.setAttribute("src", "");

  // 隐藏logo
  viewer.cesiumWidget.creditContainer.style.display = 'none'
  viewer.scene.screenSpaceCameraController.maximumZoomDistance = config.maxCameraHeight
  viewer.scene.screenSpaceCameraController.minimumZoomDistance = config.minCameraHeight

  // 创建所需的日期/时间
  const time = Cesium.JulianDate.fromIso8601('2023-08-16T02:15:39Z')
  // 设置钟表的当前时间
  viewer.clock.currentTime = time
  // 确保停止动画
  viewer.clock.shouldAnimate = false

  // 取消太阳 月亮等
  viewer.scene.moon.show = false
  viewer.scene.fog.enabled = false
  viewer.scene.sun.show = false
  viewer.scene.skyBox.show = false
  viewer.scene.globe.enableLighting = false
  viewer.shadow = false
  viewer.scene.highDynamicRange = false

  //  取消光照
  viewer.scene.globe.enableLighting = false
  // 取消天空盒显示
  viewer.scene.skyBox.show = false
  // 设置背景
  viewer.scene.backgroundColor = new Cesium.Color(
    0.0392156862745098,
    0.16862745098039217,
    0.23921568627450981
  )

  // 优化
  // 设置抗锯齿
  //是否开启抗锯齿
  viewer.scene.fxaa = true
  viewer.scene.postProcessStages.fxaa.enabled = true

  viewer.scene.globe.enableLighting = false //关闭光照
  viewer.shadows = false //关闭阴影

  // 关闭地表大气层，默认是 true
  viewer.scene.globe.showGroundAtmosphere = false
  // 不显示底图
  viewer.imageryLayers.get(0).show = false
  // 地球球体透明
  viewer.scene.globe.baseColor = Cesium.Color.TRANSPARENT
  viewer.scene.globe.translucency.enabled = true
  viewer.scene.globe.undergroundColor = undefined

  // 控制鼠标的交互方式
  // 滚轮缩放，右键旋转
  viewer.scene.screenSpaceCameraController.zoomEventTypes = [
    Cesium.CameraEventType.WHEEL,
    Cesium.CameraEventType.PINCH
  ]
  viewer.scene.screenSpaceCameraController.tiltEventTypes = [
    Cesium.CameraEventType.PINCH,
    Cesium.CameraEventType.RIGHT_DRAG
  ]

  viewer.camera.setView({
    destination: Cesium.Cartesian3.fromDegrees(
      config.longitude,
      config.latitude,
      config.initHeight
    ),
    // 指定相机视角
    orientation: {
      // 指定相机的朝向,偏航角
      heading: 2.5740720580595147,
      // 指定相机的俯仰角, 90度是竖直向上,-90度是向下
      pitch: -0.6298203618976057,
      // 指定相机的滚转角,翻滚角
      roll: 6.283139825443039
    }
  })

  return viewer
}
