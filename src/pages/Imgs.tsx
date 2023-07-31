import '../pages.css'
import ledImg from '../assets/imgs/led.png'
import w4Png from '../assets/imgs/w4.png'
import w5Png from '../assets/imgs/w5.png'
import w6Png from '../assets/imgs/w6.png'

function Imgs() {
  return (
    <div className='wrapper imgsWrapper'>
      <div className='center imgsText animate__animated animate__bounceIn'>甜蜜时刻</div>
      <div className='imgsContent'>
        <div className='imgsBig'>
          <img className='animate__animated animate__slideInUp' style={{ width: '100%', borderRadius: 4, }} src={w4Png} alt="" />
        </div>
        <div className='imgsSmalls'>
          <div className='imgsSmall'>
            <img className='animate__animated animate__slideInLeft' style={{ width: '100%', height: '100%', }} src={w5Png} alt="" />
          </div>
          <div className='imgsSmall'>
            <img className='animate__animated animate__slideInRight' style={{ width: '100%', height: '100%', }} src={w6Png} alt="" />
          </div>
        </div>
      </div>
      <div className='center imgsInviteText'>
        <img className='ledImg' src={ledImg} alt="" />
        <div className='animate__animated animate__fadeInUp'>
          <div style={{ minHeight: 22 }}>未来的漫漫长路</div>
          <div style={{ minHeight: 22 }}>只想你在身侧</div>
          <div style={{ minHeight: 22 }}>我愿与你不止一世的白头</div>
        </div>
      </div>
    </div>
  );
}

export default Imgs;