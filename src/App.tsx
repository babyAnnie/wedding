import musicLogo from './assets/music.png'
import './App.css';
import { useEffect, useState } from 'react';
import Home from './pages/Home';
import Imgs from './pages/Imgs';
import Vindicate from './pages/Vindicate';
import Map from './pages/Map';
import User from './pages/User';
import Love from './pages/Love';
import music from './assets/music.mp3'

// https://animate.style/
// https://reactcommunity.org/react-transition-group/css-transition
// https://www.gaoding.com/editor/odyssey?mode=user&template_id=24876120416084018
const pages: any[] = [
  <Home />,
  <Vindicate />,
  <Love />,
  <Imgs />,
  <Map />,
  <User />,
]
function App() {
  const [tabInd, setTabInd] = useState<number>(0);
  const [isMusicPlay, setIsMusicPlay] = useState(true);

  useEffect(() => {
    setIsMusicPlay(true)
  }, [])

  useEffect(() => {
    const bgMusic: any = document.getElementById('bgMusic');
    if (!bgMusic) return
    try {
      if (isMusicPlay) {
        // eslint-disable-next-line @typescript-eslint/no-unsafe-call, @typescript-eslint/no-unsafe-member-access
        bgMusic?.play();
      } else {
        // eslint-disable-next-line @typescript-eslint/no-unsafe-call, @typescript-eslint/no-unsafe-member-access
        bgMusic?.puase();
      }
    } catch { /* empty */ }
  }, [isMusicPlay])

  const createTab = () => {
    return <div className="app-content">
      {pages[tabInd]}
    </div>
  }


  // document.getElementById("id").addEventListener("touchstart", function (e) {
  //   e.preventDefault();
  //   startX = e.originalEvent.changedTouches[0].pageX,
  //     startY = e.originalEvent.changedTouches[0].pageY;
  // });
  // document.getElementById("id").addEventListener("touchmove", function (e) {
  //   e.preventDefault();
  //   moveEndX = e.originalEvent.changedTouches[0].pageX,
  //     moveEndY = e.originalEvent.changedTouches[0].pageY,
  //     X = moveEndX - startX,
  //     Y = moveEndY - startY;

  //   if (Math.abs(X) > Math.abs(Y) && X > 0) {
  //     alert("左往右滑");
  //   }
  //   else if (Math.abs(X) > Math.abs(Y) && X < 0) {
  //     alert("右往左滑");
  //   }
  //   else if (Math.abs(Y) > Math.abs(X) && Y > 0) {
  //     alert("上往下滑");
  //   }
  //   else if (Math.abs(Y) > Math.abs(X) && Y < 0) {
  //     alert("下往上滑");
  //   }
  //   else {
  //     alert("滑了个寂寞");
  //   }
  // });




  return (
    <div className='app-wrapper'
      onDoubleClick={() => {
        // console.log('e', e, e?.clientY);
        if (tabInd < pages?.length - 1) {
          setTabInd(tabInd + 1);
        } else {
          setTabInd(0);
        }
      }}>
      <audio id='bgMusic' controls={false} autoPlay={true} loop={true}>
        <source src={music} type="audio/mpeg" />
        <p>你的浏览器不支持 HTML5 音频，可点击<a href="viper.mp3">此链接</a>收听。</p>
      </audio>
      {createTab()}
      <div className='music-wrapper' onClick={() => { setIsMusicPlay(!isMusicPlay) }}>
        <img src={musicLogo} className="logo" alt="" />
      </div>
    </div>
  )
}

export default App
