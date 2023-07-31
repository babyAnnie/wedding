import w3Png from '../../public/assets/w3.png';
function Love() {
  return (
    <div className='wrapper'>
      <div className='center imgsText animate__animated animate__bounceIn'>愿得一心人</div>
      <div className='center loveName animate__animated animate__heartBeat'>阮韦斌 & 董丹燕</div>
      <div className='center' style={{ flex: 1, overflow: 'visible' }}>
        <div className='center loveImgWrapper'>
          <img className='loveImg animate__animated animate__zoomIn' src={w3Png} alt="" />
          <div className='loveImgLabel animate__animated animate__fadeIn'>相守到白头，恩爱永不弃</div>
        </div>
      </div>
      <div className='center loveBlessContent animate__animated animate__lightSpeedInRight'>
        <div className='loveBlessItem'>
          全世界的人都知道
        </div>
        <div className='loveBlessItem'>我不在乎付出多少</div>
        <div className='loveBlessItem'>
          我想这就是幸福的写照
        </div>
        <div className='loveBlessItem'>我爱你到永远</div>
      </div>
    </div>
  );
}

export default Love;