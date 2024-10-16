import * as React from "react"
import styled from '@emotion/styled'

import Navbar from '../components/navbar'
import Layout from '../components/layout'
import { HeaderAccentText, HeaderText } from "."
import story from '../images/story/ourstory.jpeg'

const Container = styled.div`
  position: relative;
  max-width: 1400px;
  margin: 32px auto;

  img {
    float: right;
    margin-left: 32px;
    margin-bottom: 32px;
  }
`

const StoryPage = () => {
  return (
    <Layout>
      <Navbar />
      <Container>
        <div className="relative text-black p-12">
          <HeaderAccentText className="mb-2">OUR STORY</HeaderAccentText>
          <HeaderText>Learn about us</HeaderText>
          <br />
          <img src={story} width={600} className="rounded" />
            <p>Founded in 2004, MorningStar Dance Academy of Atlanta (MSDA) offers high quality training in classical ballet, pointe, contemporary dance, jazz, character dance, Chinese traditional and folk dance, and Kpop. The founder and artistic director of MSDA is Mr. Chen Xiao, a former professional dancer with almost thirty years of experience performing and teaching and a recipient of the top award at the International Ballet Competition in Osaka, Japan. The Academy’s teaching methods offer students an age-appropriate, challenging, and enjoyable program that combines personal enrichment with technical preparation for professional work.</p>
            <br />
            <p>MSDA students have competed at various regional,  national and international dance competitions including Youth America Grand Prix (YAGP), World Ballet Competition (WBC), Universal Ballet Competition (UBC), Valentina Kozlova International Ballet Competition, American Dance Competition, American Ballet Competition, National Ballet Competition, Showstopper, International Dance Challenge, and Stage One National Dance Competition. Students have also qualified and won many top awards at various age groups from prestigious professional ballet competitions, including Prix de Lausanne, Helsinki International Ballet Competition, and Beijing International Ballet and Choreography Competition (IBCC). Past honors include Top Three and the Hope award in YAGP regionals, 3rd place and the “Shelly King Award” from YAGP international finals, 1st place in WBC international finals, “Legend Award” and “Rising Star Award” in UBC, prizewinners (bronze award and special award) of IBCC.  Besides recognitions received for individual dancers, the Academy’s ensemble pieces have also won multiple first places in YAGP, WBC, UBC, ADC, and Showstopper etc. MSDA was invited to perform its ensemble pieces “Jasmine” and “Water Lily” in the YAGP International Final Gala in 2014 and 2020, respectively. Consequently, students have received full scholarships to many top professional ballet schools such as American Ballet School, The Royal Ballet School, Bolshoi Ballet Academy, English National Ballet, Princess Grace Academy of Classical Dance, Boston Ballet School, Ballet West, Joffrey Ballet School, and more.</p>
          <br />
          <p>Over the years, MSDA received the "Most Outstanding School" award at the YAGP regional competition in 2014, 2017, 2018, 2020, 2022and 2023, and also at the WBC finals in 2022 for its consistent superior quality in performance.  Mr. Chen received the “Outstanding Teacher” award in 2013, 2015, 2016, 2019, and 2021 from YAGP regional for his dedication and special contribution to ballet education, He was also awarded “Outstanding Coach” by Universal Ballet Competition in 2016 and 2022. Another one of the Academy’s faculty, Wynne Huo, received the “Best Choreographer” award.  Subsequently, MSDA has become well known in the nation.</p>
          <br />
          <p>Students at MSDA are offered many performance opportunities throughout the year. Besides the annual Morning Stars Dance Evening shows, the Academy receives frequent invitations to perform in community festivals and celebrations. In 2016, forty nine students were invited to perform “Jasmine Flower” at the Chinese New Year’s Gala in Beijing hosted by China Central Television. The show reached over 900 million viewers globally. Three students were invited to perform in “Amazing Kids'', a TV show hosted by Hunan Television in 2017. In 2019, twenty-five students performed “Water Lily”' at “Beyond Show”, a TV talent show hosted by Jiangsu Television. MSDA has also performed renowned ballet productions such as *Coppelia, Sleeping Beauty, Swan Lake,* and *Paquita* that create valuable opportunities for students to gain stage experience and confidence in multiple aspects of their lives.</p>
        </div>
      </Container>
    </Layout>
  )
}

export default StoryPage
