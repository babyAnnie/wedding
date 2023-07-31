import MapContainer from './MapContainer';
import ledImg from '../assets/led.png'
const invitationStrList = [
  `沉浸在幸福日子中的我们将于`,
  `2023年08月20日`,
  `“广东茂名市茂南区公馆镇造腾新塘村”`,
  `举办婚礼`,
  `诚邀您来参加~`,
]
function Map() {
  return (
    <div className='wrapper'>
      <div className='center imgsText animate__animated animate__bounceIn'>地址导航</div>
      <div style={{ flex: 1 }}>
        <MapContainer />
      </div>
      <div className='mapBless animate__animated animate__fadeInUp'>
        {
          invitationStrList.map(v => {
            return <div style={{
              flex: 1,
            }} key={Math.random().toString(32)}>{v}</div>
          })
        }
      </div>
      <img className='ledImg' src={ledImg} alt="" />
      <div className='mapBlessBottom animate__animated animate__fadeInRight'>期待您的到来</div>
    </div>
  );
}

export default Map;