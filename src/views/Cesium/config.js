// 地图配置
// 中心位置 最大/小高度
export const mapConfig = {
  longitude: 117.96959,
  latitude: 24.462924,
  initHeight: 655,
  maxCameraHeight: 5000,
  minCameraHeight: 10
}

// 设置导航罗盘的配置
export const options = {
  // 启用罗盘
  enableCompass: true,
  // 是否启用缩放
  enableZoomControls: true,
  // 是否启用指南针外环
  enableCompassOuterRing: true,
  // 是否启用距离的图例
  enableDistanceLegend: true
}

// 配置显示哪些模型
export const configSwitch = {
  StreetLamp: true,
  Boat: true,
  AnQiao: true,
  ChangQiao: true,
  Container200: true,
  Container201: true,
  Container202: true,
  Container203: true,
  Container204: true,
  Container205: true,
  Container206: true,
  Container400: true,
  Container401: true,
  Container402: true,
  Container403: true,
  Container404: true,
  Container405: true,
  Container406: true,
  mouse: false,
  navigator: false,
  liveSituation: true,
  clickEntityModel: false,
  enableCreateOrUpdateTruckMarker: true
}

// 电子围栏
export const wallConfig = [
  {
    positions: [
      [117.9695375, 24.45602117],
      [117.9693631, 24.45605358],
      [117.9694025, 24.45620117],
      [117.9695737, 24.45616504]
    ],
    id: '1',
    laneName: 'F01-F02',
    color: '#FF0000'
  },
  {
    positions: [
      [117.9696573, 24.45656329],
      [117.9694838, 24.456594],
      [117.9695125, 24.4567368],
      [117.9696906, 24.45670302]
    ],
    id: '2',
    laneName: 'F03-F04',
    color: '#00FF00'
  },
  {
    positions: [
      [117.9697837, 24.45708424],
      [117.9696094, 24.45711572],
      [117.9696424, 24.45725621],
      [117.9698151, 24.45722167]
    ],
    id: '3',
    laneName: 'F05-F06',
    color: '#0000FF'
  }
]
