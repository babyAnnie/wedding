import '../pages.css'
import bottomBg from '../assets/bottomBg.png'
import ledImg from '../assets/led.png'
import q1 from '../assets/w1.png'

const invitationStrList = [
  `红烛月好，灯影憧憧。`,
  `佳人天成，宜世修好。`,
  `合卺之饮，交拜之礼。`,
  `执手同心，结发之诺。`,
]

function Vindicate() {
  return (
    <div className='wrapper vindicateWrapper'>
      <div className='center vindicateTopImg animate__animated animate__lightSpeedInRight'>
        <img className='q1' src={q1} alt="" />
      </div>
      <div className='invitationContent'>
        <div className='center invitationStr'>{
          invitationStrList.map(v => {
            return <div className='center invitationStrItem animate__animated animate__lightSpeedInLeft' key={Math.random().toString(32)}>{v}</div>
          })
        }</div>
        <img className='ledImg' src={ledImg} alt="" />
        <div className='center invitationStrBottom animate__animated animate__jackInTheBox'>❤❤❤❤❤❤</div>
      </div>
      <img className='vindicateBottomImg animate__animated animate__slideInUp' src={bottomBg} alt="" />
    </div>
  );
}

export default Vindicate;