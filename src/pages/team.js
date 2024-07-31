import React, { useState, useEffect } from "react"
import styled from '@emotion/styled'

import Layout from '../components/layout'
import Navbar from '../components/navbar'
import xiaochen from '../images/team/xiaochen.jpeg'
import sherry from '../images/team/sherry.png'
import wynnehuo from '../images/team/wynne.jpeg'
import huijuyoung from '../images/team/huiju.jpeg'
import mrswang from '../images/team/milan.jpeg'
import jessicawash from '../images/team/jessica.png'
import nurzhankulybaev from '../images/team/nurzhan.png'
import { HeaderAccentText, HeaderText } from "."

const Container = styled.div`
  position: relative;
  max-width: 1400px;
  margin: 0 auto;
  margin-top: 32px;
`;

const CircleCrop = styled.div`
  width: 400px;
  height: 400px;
  position: relative;
  overflow: hidden;
  border-radius: 50%;
  img {
    display: inline;
    margin: 0 auto;
    height: 100%;
    width: auto;
  }
`;

const Description = styled.div`
  font-size: 18px;
  font-weight: 300;
  color: #333;
`;

const PERSON_MAP = [
  {
    name: 'Xiao Chen',
    img: xiaochen,
    desc: <>Founder, artistic director and choreographer, graduated from Beijing Dance Academy, China. He received the Best Individual Award at the International Ballet Competition in Osaka, Japan in 1991. As a leading dancer, he worked with National Ballet of China and Shanghai Ballet. From 1992 to 2003, he was a principal dancer with the Atlanta Ballet. For more than twenty years, he played various roles in well over a hundred ballet performances. Throughout his career, he toured many countries and was repeatedly invited as guest dancer by international ballet troupes. In 2002, he was invited to dance at the World Ballet Top Performers Event in Seoul, South Korea.<br/><br/> In 2004, he founded MorningStar Dance Academy of Atlanta (MSDA). With his unique qualifications, effective training methods, and a vision for ballet education, he is leading MSDA onto the path of success and rapid growth. Students of MSDA have successfully performed in numerous events and have been awarded with many international, national and regional top awards from different dance competitions including Beijing International Ballet and Choreography Competition, Youth America Grand Prix (YAGP), World Ballet Competition, Universal Ballet Competition (UBC), American Dance Competition, American Ballet Competition, ShowStopper, and International Dance Challenge. Xiao Chen received the “Outstanding Teacher” recognition from YAGP in 2013, 2015, and 2016, and “Outstanding Coach” award from UBC in 2016 for his dedication and special contribution to ballet education.</>,
  },
  {
    name: 'Sherry Cheng',
    img: sherry,
    desc: <>She began her ballet training at the Secondary School of Beijing Dance Academy in 2000 and after graduating, joined Guangzhou Ballet Company in 2007. She continued her studies at Beijing Dance Academy, focusing on both ballet and dance education from 2010 to 2014 and became a dance faculty at the Art School of Guang Zhou university in 2003.  She returned to Beijing Dance Academy again as a graduate student after three years of teaching and received her Masters degree with a concentration in Character Dance in 2019. Sherry served in the judging panel of Asian Elite Dance Competition in 2021.  She has won various awards both as a dancer and a choreographer. Her honorary awards include “Outstanding Performer” and “Outstanding Choreographer” in “Academy Cup'' hosted by Beijing Dance Academy, 1st place in the ensemble category of the 6th HuaBei dance competition, and “Best Stage Presentation” in Beijing Dance Competition.<br /><br />During her professional career, she has performed various roles, including Swan Lake, Sylvia, Romeo and Juliet, Sleeping Beauty, Le Corsaire, and Mei Lan Fang. In 2012, she performed a leading role in "Outside Window" directed by artistic director Frank Anderson of Denmark National Ballet. Her choreographic pieces include "Dong Huang Impression" and "Winter Trip". Sherry has also participated in many workshops in Japan, Russia, and various cities of China as a dancer, teacher, and choreographer. She teaches ballet, Character, and Chinese dance at MSDA.</>,
  },
  {
    name: 'Wynne Huo',
    img: wynnehuo,
    desc: <>Born and raised in Atlanta, Wynne Huo began her training at MorningStar Dance Academy at age 10. She attended the Governor's Honors Program of Georgia in 2013, and graduated from New York University with a Tisch scholarship in 2017. Huo has performed with Crystal Pite's company Kidd Pivot in Lincoln Center's White Light Festival, Amy Marshall Dance at New York Live Arts, Cherylyn Lavagnino Dance Company at Alvin Ailey Theater, and Off-Broadway production Soundstage at HERE Arts Center. Outside of performing, Huo assisted the Ballet Tech Foundation, founded by Eliot Feld, by introducing children in New York City to ballet.
      Huo has had many of her choreographies awarded top placements at competitions such as YAGP, UBC, ADC/IBC, and Showstopper. She was awarded UBC Atlanta’s Best Choreography Award in 2022. She teaches ballet and contemporary at MSDA.</>,
  },
  {
    name: 'Nurzhan Kulybaev',
    img: nurzhankulybaev,
    desc: <>Born in Tashkent, Nurzhan Kulybaev received a full scholarship to the National Academy of Ballet and Choreography in 1994. He began his career at the Bolshoi Opera and Ballet Theater in Tashkent at 16, later becoming a Principal dancer in 2003. In 2007, he joined Yacobson's Ballet in St. Petersburg, Russia. In 2011, he moved to Canada and joined the Royal Winnipeg as a Principal dancer. In 2019, he became the Artistic Director of Ballet Le Reve in the United States, choreographing ballets like Alice in Wonderland and Giselle. He also served as Ballet Master at Fort Wayne Ballet before relocating to Georgia in 2022.<br /><br />Throughout his career, Nurzhan received numerous awards, including the Honorary award at the International Ballet competition in Kiev (2001), the "Golden Sofit'' in St. Petersburg (2009), the Special Jury Prix "Inspiration" at the XI International Ballet Competition in Perm (2010), and a Laureate at the prestigious International Ballet Competition in Rieti, Italy. He was invited to perform for Alla Osipenko at her 80th anniversary Gala concert. In October 2010, Nurzhan was invited to be a part of the Gala Concert in Donetsk, Ukraine called "International Stars of Ballet”.  He performed many leading roles and toured many countries including the United States, Canada, Israel, Mexico, Germany, Italy, Japan, Turkey, and China. Some of his notable roles are in the ballets Coppelia, Don Quixote, The Fountain of Bakhchisarai, Raymonda, Sleeping Beauty, Spartacus, Giselle, Swan Lake, Romeo and Juliet, The Nutcracker. Nurzhan has also been an ABT certified teacher since 2019 and currently teaches ballet at MSDA.</>,
  },
  {
    name: 'Hui-Ju Young',
    img: huijuyoung,
    desc: <>Hui-Ju Young received professional training at GinHwa Dance Troupe in Taiwan under the direction of Yong Jia Chen and Si Ya Young. She furthered her training and received a certificate in traditional Chinese Dance from the Dance Institute of Central University for Nationalities in China in 1999. She has participated in many dance competitions across Taiwan, mainland China, and Japan. She won first place for both the traditional and classical Chinese dance divisions at the Taiwan National Dance Competition in 2002 and 2003, and the Judges’ Special Award from the Tao Li Cup Dance Competition in 2000. From 2003 to 2004, she toured with the GinHwa Dance Troupe as champion of the Taiwan National Group Dance Competition. Ms. Young has also been invited to perform as a soloist on different occasions. She teaches Chinese traditional and folk dances at MSDA.</>,
  },
  {
    name: 'Milan Wang',
    img: mrswang,
    desc: <>Milan Wang graduated from the Dance Department of the PLA Academy of Arts in China and joined the General Political Department Song and Dance Troupe after graduation. During sixteen years with the troupe, she toured many countries and regions, including the United State, Canada, Russian, German, and some countries in Asia and performed at many dancing events, galas, festivals and ceremonies. She has also been teaching and choreographing Chinese traditional and folk dances in various dance schools. Currently, she teaches Chinese traditional and folk dance at MSDA.</>,
  },
  {
    name: 'Jessica Washington',
    img: jessicawash,
    desc: <>Founder, artistic director and choreographer, graduated from Beijing Dance Academy, China. He received the Best Individual Award at the International Ballet Competition in Osaka, Japan in 1991. As a leading dancer, he worked with National Ballet of China and Shanghai Ballet. From 1992 to 2003, he was a principal dancer with the Atlanta Ballet. For more than twenty years, he played various roles in well over a hundred ballet performances. Throughout his career, he toured many countries and was repeatedly invited as guest dancer by international ballet troupes. In 2002, he was invited to dance at the World Ballet Top Performers Event in Seoul, South Korea. In 2004, he founded MorningStar Dance Academy of Atlanta (MSDA). With his unique qualifications, effective training methods, and a vision for ballet education, he is leading MSDA onto the path of success and rapid growth. Students of MSDA have successfully performed in numerous events and have been awarded with many international, national and regional top awards from different dance competitions including Beijing International Ballet and Choreography Competition, Youth America Grand Prix (YAGP), World Ballet Competition, Universal Ballet Competition (UBC), American Dance Competition, American Ballet Competition, ShowStopper, and International Dance Challenge. Xiao Chen received the “Outstanding Teacher” recognition from YAGP in 2013, 2015, and 2016, and “Outstanding Coach” award from UBC in 2016 for his dedication and special contribution to ballet education.</>,
  },
]

const images = PERSON_MAP.map(({ img }) => img)


const TeamPage = () => {
  const [imagesLoaded, setImagesLoaded] = useState(false);

  useEffect(() => {
    const preloadImages = async (srcArray) => {
      const promises = await srcArray.map(src => {
        return new Promise((resolve, reject) => {
          const img = new Image()
          img.src = src
          img.onload = resolve()
          img.onerror = reject()
        })
      })

      await Promise.all(promises)

      setImagesLoaded(true)
    }
    preloadImages(images)
  }, []);

  if (!imagesLoaded) {
    return <></>
  }

  return (
    <Layout>
      <Navbar />
      <Container className="relative text-black p-12">
        <HeaderAccentText className="mb-2">OUR TEAM</HeaderAccentText>
        {PERSON_MAP.map(({ name, img, desc }, i) => {
          const left = 
            <div>
              <HeaderText>{name}</HeaderText>
              <br />
              <Description>{desc}</Description>
            </div>
          const space = <div className="m-8"></div>
          const right = 
            <CircleCrop className="grow shrink-0">
              <img src={img} />
            </CircleCrop>
          return (
            <div className="flex mb-24 items-center">
              {i % 2 === 0 ? <>{left}{space}{right}</> : <>{right}{space}{left}</>}
            </div>
          )
        })}
      </Container>
    </Layout>
  )
}

export default TeamPage
