import * as turf from "@turf/turf";

//判断点是否在多边形内
export function isPointInPolygon(p1, pArray){
  var pt = turf.point(p1);
  var poly = turf.polygon([pArray]);
  return turf.booleanPointInPolygon(pt, poly)
};

//判断点是否在线上
export function isPointOnLine(p1, line1){
  var pt = turf.point(p1);
  var line = turf.lineString(line1);
  return turf.booleanPointOnLine(pt, line);
};

//计算点到线的距离
export function getPointToLineDist(p1, line1){
  const pt = turf.point(p);
  const line = turf.lineString(line1);
  const distance = turf.pointToLineDistance(pt, line1, { units: "kilometers" }); 
  return distance
};

//计算点到点的方向角
export function getBearingOfPoints(p1, p2){
  var point1 = turf.point([-75.343, 39.984]);
  var point2 = turf.point([-75.534, 39.123]);
  return turf.rhumbBearing(point1, point2);
};

//知道起始点、方向、距离，计算目标点
export function getPointSimple(p1, dist, bearing){
  dist = dist / 1000
  const point = turf.rhumbDestination(p1,dist,bearing,{ units: "kilometers" }).geometry.coordinates;
  return point;
};

export const getMidpoint = (p1, p2) => {
  // 定义两个坐标点
  const pt1 = turf.point(p1);
  const pt2 = turf.point(p2);

  // 获取中间点
  const midpoint = turf.midpoint(pt1, pt2);
  return midpoint.geometry.coordinates;
};


export const getCenter = (points) => {
  const center = turf.center(
    turf.polygon(points)).geometry.coordinates
  return center
}


//参数
export function calcDist(p1, p2) {
  return turf.distance(p1, p2, { units: "kilometers" }) * 1000;
}

/**
 *
 * @param {*} eventLocationP  [lon,lat]
 * @param {*} westPP  [lon,lat]
 * @param {*} eastPP  [lon,lat]
 * @returns
 */
export const getPoint = (eventLocation, westP, eastP, invert = false) => {
  const pt = turf.point(eventLocation);
  const line = turf.lineString([westP, eastP]);

  const distance = turf.pointToLineDistance(pt, line, { units: "kilometers" }); // 69.11854715938406

  const point = turf.rhumbDestination(
    eventLocation,
    distance,
    invert ? 192.85 : 12.85,
    { units: "kilometers" }
  ).geometry.coordinates;
  return point;
};

// 画点

export const drawPoints = function (routeGeoData) {
  const pointGeoFeature = routeGeoData.map((item) => {
    return {
      type: "Feature",
      geometry: {
        type: "Point",
        coordinates: item.slice(0, 2),
      },
      properties: {
        description: decodeURIComponent(item[2] ? item[2] : ''),
      },
    };
  });

  const geojson = {
    type: "FeatureCollection",
    features: pointGeoFeature,
  };

  this.map.addSource("points", {
    type: "geojson",
    data: geojson,
  });

  this.map.addLayer({
    id: "points",
    type: "circle",
    source: "points",
    paint: {
      "circle-radius": 10,
      "circle-color": "#000000",
    },
  });

  this.map.addLayer({
    id: "pointlabels",
    type: "symbol",
    source: "points",
    layout: {
      "text-field": ["get", "description"],
      "text-variable-anchor": ["top", "bottom", "left", "right"],
      "text-radial-offset": 0.5,
      "text-justify": "auto",
    },
    paint: {
      "text-color": "#000",
    },
  });
};
