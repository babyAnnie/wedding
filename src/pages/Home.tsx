import topBg from '../assets/imgs/topBg.png'
import titleBg from '../assets/imgs/titleBg.png';
import '../pages.css';
import heartPng from '../assets/imgs/heart.png'

function Home() {
  return (
    <div className='wrapper homeWrapper'>
      <img className='homeImg animate__animated animate__slideInDown' src={topBg} alt='' />
      <div className='center enTitle'>WEDDING</div>
      <div className='center titleImgWrapper'>
        <img className='titleImg' src={titleBg} alt='' />
        <div className='homeCnTitle animate__animated animate__rollIn'>婚礼请柬</div>
      </div>
      <div className='blessWrapper'>
        <div className='center bless animate__animated animate__backInDown' style={{ alignItems: 'flex-end' }}>喜结良缘&nbsp;&nbsp;佳偶天成</div>
        <div className='center name animate__animated animate__slideInLeft'>
          阮韦斌&nbsp;
          <span className='center' style={{ width: 18 }}>
            <img style={{ width: 16, height: 16 }} src={heartPng} alt="" />
          </span>
          &nbsp;董丹燕</div>
        <div className='center info animate__animated animate__slideInRight' style={{ alignItems: 'flex-start' }}>2023年08月20日&nbsp;12:00&nbsp;茂名</div>
      </div>
    </div>
  );
}

export default Home;