import AMapLoader from '@amap/amap-jsapi-loader';
import '../pages.css'
import { useEffect, } from 'react';

function MapContainer() {
  useEffect(() => {
    AMapLoader.load({
      key: '115d5b18eef457aa337eeec4545c366c', // 申请好的Web端开发者Key，首次调用 load 时必填
      version: '2.0', // 指定要加载的 JSAPI 的版本，缺省时默认为 1.4.15
      plugins: [''], // 需要使用的的插件列表，如比例尺'AMap.Scale'等
    })
      .then(AMap => {
        // eslint-disable-next-line @typescript-eslint/no-unsafe-argument, @typescript-eslint/no-unsafe-call, @typescript-eslint/no-unsafe-member-access
        new AMap.Map('container', {
          // 设置地图容器id
          viewMode: '3D', // 是否为3D地图模式
          zoom: 12, // 初始化地图级别
          center: [110.929023, 21.64336], // 初始化地图中心点位置
        })
      })
      .catch(e => {
        console.log(e);
      });
  }, [])

  return (
    <div id="container" style={{ width: '85vw', height: '80%', borderRadius: 2 }}></div>
  );
}

export default MapContainer;