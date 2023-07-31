import musicLogo from '../public/assets/music.png'
import './App.css';
import { useEffect, useState } from 'react';
import Home from './pages/Home';
import Imgs from './pages/Imgs';
import Vindicate from './pages/Vindicate';
import Map from './pages/Map';
import User from './pages/User';
import Love from './pages/Love';
import music from '../public/music.mp3'

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
  const [startX, setStartX] = useState(0);
  const [startY, setStartY] = useState(0);
  const [isup, setIsUp] = useState<boolean | undefined>(undefined);

  useEffect(() => {
    if (typeof isup === 'undefined') return;
    if (isup) {
      if (tabInd > 0) {
        setTabInd(tabInd - 1);
      } else {
        setTabInd(pages?.length - 1);
      }
    } else {
      if (tabInd < pages?.length - 1) {
        setTabInd(tabInd + 1);
      } else {
        setTabInd(0);
      }
    }
    setIsUp(undefined);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isup])

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

  return (
    <div className='app-wrapper'
      onTouchStart={(e) => {
        const tempStartX = e.targetTouches[0].pageX;
        setStartX(tempStartX);
        const tempStartY = e.targetTouches[0].pageY;
        setStartY(tempStartY);
      }}
      onTouchMove={(e) => {
        const moveEndX = e.targetTouches[0].pageX;
        const moveEndY = e.targetTouches[0].pageY;
        const X = moveEndX - startX;
        const Y = moveEndY - startY;
        if (Math.abs(Y) > Math.abs(X) && Y > 0) {
          setIsUp(true);
        }
        else if (Math.abs(Y) > Math.abs(X) && Y < 0) {
          setIsUp(false);
        }
        else {
          setIsUp(undefined);
        }
      }}
      onDoubleClick={() => {
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
