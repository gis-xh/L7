import { Scene, EarthLayer, LineLayer } from '@antv/l7';
import { Earth } from '@antv/l7-maps';
const scene = new Scene({
  id: 'map',
  map: new Earth({})
});

// TODO: 地球模式下背景色默认为 #000 通过 setBgColor 方法我们可以设置可视化层的背景色
scene.setBgColor('#333');

const flydata = [{ coord: [[ 104.195397, 35.86166 ], [ 100.992541, 15.870032 ]] }, { coord: [[ 104.195397, 35.86166 ], [ 114.727669, 4.535277 ]] }, { coord: [[ 104.195397, 35.86166 ], [ 9.501785, 56.26392 ]] }, { coord: [[ 104.195397, 35.86166 ], [ -66.590149, 18.220833 ]] }, { coord: [[ 104.195397, 35.86166 ], [ 174.885971, -40.900557 ]] }, { coord: [[ 104.195397, 35.86166 ], [ 104.990963, 12.565679 ]] }, { coord: [[ 104.195397, 35.86166 ], [ 6.129582999999999, 49.815273 ]] }, { coord: [[ 104.195397, 35.86166 ], [ 8.468945999999999, 60.47202399999999 ]] }, { coord: [[ 104.195397, 35.86166 ], [ 108.277199, 14.058324 ]] }, { coord: [[ 104.195397, 35.86166 ], [ -95.712891, 37.09024 ]] }, { coord: [[ 104.195397, 35.86166 ], [ 121.49917, 25.12653 ]] }, { coord: [[ 104.195397, 35.86166 ], [ -9.429499000000002, 6.428055 ]] }, { coord: [[ 104.195397, 35.86166 ], [ 127.766922, 35.907757 ]] }, { coord: [[ 104.195397, 35.86166 ], [ 10.451526, 51.165691 ]] }, { coord: [[ 104.195397, 35.86166 ], [ 23.881275, 55.169438 ]] }, { coord: [[ 104.195397, 35.86166 ], [ 34.851612, 31.046051 ]] }, { coord: [[ 104.195397, 35.86166 ], [ 53.847818, 23.424076 ]] }, { coord: [[ 104.195397, 35.86166 ], [ 102.495496, 19.85627 ]] }, { coord: [[ 104.195397, 35.86166 ], [ 21.824312, 39.074208 ]] }, { coord: [[ 104.195397, 35.86166 ], [ 25.48583, 42.733883 ]] }, { coord: [[ 104.195397, 35.86166 ], [ 15.472962, 49.81749199999999 ]] }, { coord: [[ 104.195397, 35.86166 ], [ 78.96288, 20.593684 ]] }, { coord: [[ 104.195397, 35.86166 ], [ -3.435973, 55.378051 ]] }, { coord: [[ 104.195397, 35.86166 ], [ 33.429859, 35.126413 ]] }, { coord: [[ 104.195397, 35.86166 ], [ 8.227511999999999, 46.818188 ]] }, { coord: [[ 104.195397, 35.86166 ], [ 114.066662, 22.588638 ]] }, { coord: [[ 104.195397, 35.86166 ], [ 14.550072, 47.516231 ]] }, { coord: [[ 104.195397, 35.86166 ], [ 2.213749, 46.227638 ]] }, { coord: [[ 104.195397, 35.86166 ], [ 12.56738, 41.87194 ]] }, { coord: [[ 104.195397, 35.86166 ], [ 105.318756, 61.52401 ]] }, { coord: [[ 104.195397, 35.86166 ], [ 80.77179699999999, 7.873053999999999 ]] }, { coord: [[ 104.195397, 35.86166 ], [ 5.291265999999999, 52.132633 ]] }, { coord: [[ 104.195397, 35.86166 ], [ 35.243322, 38.963745 ]] }, { coord: [[ 104.195397, 35.86166 ], [ 18.643501, 60.12816100000001 ]] }, { coord: [[ 104.195397, 35.86166 ], [ 25.748151, 61.92410999999999 ]] }, { coord: [[ 104.195397, 35.86166 ], [ -3.74922, 40.46366700000001 ]] }, { coord: [[ 104.195397, 35.86166 ], [ 113.551538, 22.109432 ]] }, { coord: [[ 104.195397, 35.86166 ], [ 4.469936, 50.503887 ]] }, { coord: [[ 104.195397, 35.86166 ], [ -106.346771, 56.130366 ]] }, { coord: [[ 104.195397, 35.86166 ], [ 138.252924, 36.204824 ]] }, { coord: [[ 104.195397, 35.86166 ], [ 17.679076, 43.915886 ]] }, { coord: [[ 104.195397, 35.86166 ], [ -88.49765, 17.189877 ]] }, { coord: [[ 104.195397, 35.86166 ], [ 25.013607, 58.595272 ]] }, { coord: [[ 104.195397, 35.86166 ], [ 101.975766, 4.210484 ]] }, { coord: [[ 104.195397, 35.86166 ], [ -8.24389, 53.41291 ]] }, { coord: [[ 104.195397, 35.86166 ], [ -8.224454, 39.39987199999999 ]] }, { coord: [[ 104.195397, 35.86166 ], [ 133.775136, -25.274398 ]] }, { coord: [[ 104.195397, 35.86166 ], [ 121.774017, 12.879721 ]] }];
const flyLine = new LineLayer({ blend: 'normal' })
  .source(flydata, {
    parser: {
      type: 'json',
      coordinates: 'coord'
    }
  })
  .color('#b97feb')
  .shape('arc3d')
  .size(0.5)
  .active(true)
  .animate({
    interval: 2,
    trailLength: 2,
    duration: 1
  })
  .style({
    opacity: 1,
    segmentNumber: 60,
    globalArcHeight: 20
  });


const earthlayer = new EarthLayer()
  .source(
    'https://gw.alipayobjects.com/mdn/rms_23a451/afts/img/A*3-3NSpqRqUoAAAAAAAAAAAAAARQnAQ',
    {
      parser: {
        type: 'image'
      }
    }
  )
  .color('#2E8AE6')
  .shape('fill')
  .style({
    globelOtions: {
      ambientRatio: 0.6, // 环境光
      diffuseRatio: 0.4, // 漫反射
      specularRatio: 0.1 // 高光反射
    }
  })
  .animate(true);

const atomLayer = new EarthLayer()
  .color('#2E8AE6')
  .shape('atomSphere')
  .style({
    opacity: 1
  });

const bloomLayer = new EarthLayer().color('#fff').shape('bloomSphere')
  .style({
    opacity: 0.7
  });

scene.on('loaded', () => {
  scene.addLayer(earthlayer);

  scene.addLayer(atomLayer);
  scene.addLayer(bloomLayer);

  scene.addLayer(flyLine);

  earthlayer.setEarthTime(4.0);
});