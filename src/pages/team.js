import React, { useState } from "react"
import Navbar from '../components/navbar'
import { GoldHR } from '../components/styles'
import styled from '@emotion/styled'
import xiaochen from '../images/xiaochen_c.png'
import wynnehuo from '../images/wynnehuo_c.png'
import huijuyoung from '../images/huijuyoung_c.png'
import mrswang from '../images/mrswang_c.png'
import jessicawash from '../images/jessicawash_c.png'
import nurzhankulybaev from '../images/nurzhankulybaev_c.png'

const Container = styled.div`
  position: relative;
`;

const People = styled.div`
  div {
    opacity: .4;
    width: 180px;
    height: 212px;
    margin-left: 16px;
    margin-right: 16px;
    margin-bottom: 32px;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
  }
  div:not(.selected):hover {
    opacity: 1;
    cursor: pointer;
  }
  div.selected {
    opacity: 1;
  }
  img {
    width: 124px;
    height: 124px;
  }
`

const ImageCrop = styled.div`
  width: 100px;
  height: 100px;
  position: relative;
  overflow: hidden;
  border-radius: 50%;
  img {
    display: inline;
    margin: 0 auto;
    height: 100%;
    width: auto;
  }
`

const PERSON_MAP = [
  <>Founder, artistic director and choreographer, graduated from Beijing Dance Academy, China. He received the Best Individual Award at the International Ballet Competition in Osaka, Japan in 1991. As a leading dancer, he worked with National Ballet of China and Shanghai Ballet. From 1992 to 2003, he was a principal dancer with the Atlanta Ballet. For more than twenty years, he played various roles in well over a hundred ballet performances. Throughout his career, he toured many countries and was repeatedly invited as guest dancer by international ballet troupes. In 2002, he was invited to dance at the World Ballet Top Performers Event in Seoul, South Korea. In 2004, he founded MorningStar Dance Academy of Atlanta (MSDA). With his unique qualifications, effective training methods, and a vision for ballet education, he is leading MSDA onto the path of success and rapid growth. Students of MSDA have successfully performed in numerous events and have been awarded with many international, national and regional top awards from different dance competitions including Beijing International Ballet and Choreography Competition, Youth America Grand Prix (YAGP), World Ballet Competition, Universal Ballet Competition (UBC), American Dance Competition, American Ballet Competition, ShowStopper, and International Dance Challenge. Xiao Chen received the “Outstanding Teacher” recognition from YAGP in 2013, 2015, and 2016, and “Outstanding Coach” award from UBC in 2016 for his dedication and special contribution to ballet education.</>,
  <>Born and raised in Atlanta, Wynne Huo began her training at MorningStar Dance Academy at age 10. She attended the Governor's Honors Program of Georgia in 2013, and graduated from New York University with a Tisch scholarship in 2017. Huo has performed with Crystal Pite's company Kidd Pivot in Lincoln Center's White Light Festival, Amy Marshall Dance at New York Live Arts, Cherylyn Lavagnino Dance Company at Alvin Ailey Theater, and Off-Broadway production Soundstage at HERE Arts Center. Outside of performing, Huo assisted the Ballet Tech Foundation, founded by Eliot Feld, by introducing children in New York City to ballet.
Huo has had many of her choreographies awarded top placements at competitions such as YAGP, UBC, ADC/IBC, and Showstopper. She was awarded UBC Atlanta’s Best Choreography Award in 2022. She teaches ballet and contemporary at MSDA.</>,
  <>She began her ballet training at the Secondary School of Beijing Dance Academy in 2000 and after graduating, joined Guangzhou Ballet Company in 2007. She continued her studies at Beijing Dance Academy, focusing on both ballet and dance education from 2010 to 2014 and became a dance faculty at the Art School of Guang Zhou university in 2003.  She returned to Beijing Dance Academy again as a graduate student after three years of teaching and received her Masters degree with a concentration in Character Dance in 2019. Sherry served in the judging panel of Asian Elite Dance Competition in 2021.  She has won various awards both as a dancer and a choreographer. Her honorary awards include “Outstanding Performer” and “Outstanding Choreographer” in “Academy Cup'' hosted by Beijing Dance Academy, 1st place in the ensemble category of the 6th HuaBei dance competition, and “Best Stage Presentation” in Beijing Dance Competition.  During her professional career, she has performed various roles, including Swan Lake, Sylvia, Romeo and Juliet, Sleeping Beauty, Le Corsaire, and Mei Lan Fang. In 2012, she performed a leading role in “Outside Window '' directed by artistic director Frank Anderson of Denmark National Ballet. Her choreographic pieces include "Dong Huang Impression '' and "Winter Trip". Sherry has also participated in many workshops in Japan, Russia, and various cities of China as a dancer, teacher, and choreographer. She teaches ballet, Character, and Chinese dance at MSDA.</>,
  <>She received professional training at GinHwa Dance Troupe in Taiwan under the direction of Yong Jia Chen and Si Ya Young. She furthered her training and received a certificate in traditional Chinese Dance from the Dance Institute of Central University for Nationalities in China in 1999. She has participated in many dance competitions across Taiwan, mainland China, and Japan. She won first place for both the traditional and classical Chinese dance divisions at the Taiwan National Dance Competition in 2002 and 2003, and the Judges’ Special Award from the Tao Li Cup Dance Competition in 2000. From 2003 to 2004, she toured with the GinHwa Dance Troupe as champion of the Taiwan National Group Dance Competition. Ms. Young has also been invited to perform as a soloist on different occasions. She teaches Chinese traditional and folk dances at MSDA.</>,
]

const TeamPage = () => {
  const [selected, setSelected] = useState(0);

  return (
    <>
    <Navbar theme="light" />
      <Container className="relative text-black p-12">
        <h1 style={{ fontFamily: 'Belgiano' }}
          className="text-headlineorg text-6xl whitespace-nowrap mb-12 text-center">Meet our team</h1>
        <GoldHR />
        <People className="flex flex-wrap justify-center items-end mx-auto -mt-6" style={{ maxWidth: 900 }}>
          <div className={selected === 0 && 'selected'} onClick={() => setSelected(0)}>
            <h3 style={{ fontFamily: 'Belgiano' }} className="text-3xl mb-4 text-center">Xiao Chen</h3>
            <img src={xiaochen} className="mx-auto" />
          </div>
          <div className={selected === 1 && 'selected'} onClick={() => setSelected(1)}>
            <h3 style={{ fontFamily: 'Belgiano' }} className="text-3xl mb-4 text-center">Wynne Huo</h3>
            <img src={wynnehuo} className="mx-auto" />
          </div>
          <div className={selected === 2 && 'selected'} onClick={() => setSelected(2)}>
            <h3 style={{ fontFamily: 'Belgiano' }} className="text-3xl mb-4 text-center">Sherry Cheng</h3>
            <img src={xiaochen} className="mx-auto" />
          </div>
          <div className={selected === 3 && 'selected'} onClick={() => setSelected(3)}>
            <h3 style={{ fontFamily: 'Belgiano' }} className="text-3xl mb-4 text-center">Hui-Ju Young</h3>
            <img src={huijuyoung} className="mx-auto" />
          </div>
          <div className={selected === 2 && 'selected'} onClick={() => setSelected(2)}>
            <h3 style={{ fontFamily: 'Belgiano' }} className="text-3xl mb-4 text-center">Mrs.<br/>Wang</h3>
            <img src={mrswang} className="mx-auto" />
          </div>
          <div className={selected === 2 && 'selected'} onClick={() => setSelected(2)}>
            <h3 style={{ fontFamily: 'Belgiano' }} className="text-3xl mb-4 text-center">Jessica Washington</h3>
            <img src={jessicawash} className="mx-auto" />
          </div>
          <div className={selected === 2 && 'selected'} onClick={() => setSelected(2)}>
            <h3 style={{ fontFamily: 'Belgiano' }} className="text-3xl mb-4 text-center">Nurzhan Kulybaev</h3>
            <img src={nurzhankulybaev} className="mx-auto" />
          </div>
        </People>
        <p className="mt-10 mb-8 mx-auto" style={{ maxWidth: 900 }}>{PERSON_MAP[selected]}</p>
      </Container>
    </>
  )
}

export default TeamPage
