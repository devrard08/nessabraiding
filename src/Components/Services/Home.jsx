import React from 'react'
// import { Link } from "react-router-dom";
import { NavHashLink } from 'react-router-hash-link';
import styled from 'styled-components';
import '../Services/Home.css'

const Section = styled.section`
    display: grid;
    grid-template-columns: 1fr 3fr;
    gap: 1rem;
    margin: 3rem;
    // padding: 1rem;
    // border: 2px solid red;
    // min-height: 100vh;

    @media only screen and (max-width: 600px) {
      grid-template-columns: 1fr;
      margin: 1rem;
      gap: 1rem;
  }
`
const Sidebar = styled.div`
    padding: 1rem 2rem;


    @media only screen and (max-width: 600px) {
        width: 100%;
    }
`

const Content = styled.div`
    padding: 1rem 0;
    overflow-y: scroll;
    height: 70vh;
    width: 100%;

    @media only screen and (max-width: 600px) {
        height: 100vh;
        overflow-y: unset;
    }
`

const Styles = styled.div`
    min-width: 100%;
    padding: 0 0 4rem 0;
    // border: 1px solid var(--dark);
    margin-bottom: 1rem;

    @media only screen and (max-width: 600px) {
        padding: 1rem;
    }
`

const SectionTitle = styled.h2`
    font-size: 3rem;
    background-color: var(--dark);
    color: var(--light);
    padding: .75rem;

    @media only screen and (max-width: 600px) {
        position: sticky;
        text-align: center;
    }
`

const Cards = styled.div`
    display: flex;
    flex-wrap: wrap;
    width: 100%;

    @media only screen and (max-width: 600px) {
        overflow-y: scroll;
        height: 500px; 
    }
`

// const Button = styled.button`
//   background-color: var(--dark);
//   border: 0;
//   border-radius: 3px;
//   color: var(--light);
//   padding: 12px 32px;
//   font-size: 1.2rem;
//   margin-bottom: 1.2rem;
//   white-space: nowrap;
//   float: center;
// `

const Home = () => {

  return (
    <Section>
          
          <Sidebar id='top'>
              <nav>
                  <ul >
                      <li>
                          <NavHashLink smooth to="/services/#services">Services</NavHashLink>
                      </li>
                      <li>
                          <NavHashLink smooth to="/services/#faux-locs">Faux Locs</NavHashLink>
                      </li>
                      <li>
                          <NavHashLink smooth to="/services/#knotless-braids">Knotless Braids</NavHashLink>
                      </li>
                      <li>
                          <NavHashLink smooth to="/services/#box-braids">Box Braids</NavHashLink>
                      </li>
                      <li>
                          <NavHashLink smooth to="/services/#senegalese-twists">Senegalese Twists</NavHashLink>
                      </li>
                      <li>
                          <NavHashLink smooth to="/services/#kinky-twists">Kinky Twists</NavHashLink>
                      </li>
                      <li>
                          <NavHashLink smooth to="/services/#goddess-braids">Goddess Braids</NavHashLink>
                      </li>
                      <li>
                          <NavHashLink smooth to="/services/#fulani-braids">Fulani Braids</NavHashLink>
                      </li>
                      <li>
                          <NavHashLink smooth to="/services/#crochet-braids">Crochet Braids</NavHashLink>
                      </li>
                      <li>
                          <NavHashLink smooth to="/services/#nubian-twists">Nubian Twists</NavHashLink>
                      </li>
                      <li>
                          <NavHashLink smooth to="/services/#stitch-braids">Stich Braids</NavHashLink>
                      </li>
                      <li>
                          <NavHashLink smooth to="/services/#micro-braids">Micro Braids</NavHashLink>
                      </li>
                      <li>
                          <NavHashLink smooth to="/services/#tree-braids">Tree Braids</NavHashLink>
                      </li>
                      <li>
                          <NavHashLink smooth to="/services/#butterfly-locs">Butterfly Locs</NavHashLink>
                      </li>
                      <li>
                          <NavHashLink smooth to="/services/#dreadlocks">Dreadlocks</NavHashLink>
                      </li>
                      <li>
                          <NavHashLink smooth to="/services/#cornrows">Cornrows</NavHashLink>
                      </li>
                  </ul>
              </nav>

              
          </Sidebar>

          <Content>
              
              {/* Services Section */}
              <Styles id='services'>
                  <SectionTitle>Services</SectionTitle>
                  <Cards>
                      <Card
                          title="Natural Style"
                          subtitle="$60 and up for 120 minutes"
                          body="Rock your natural hair. We'll talk about what look you want and bring the style to life. Please call or text to confirm pricing for desired style. Wash - $10 additional"
                      />
                      <Card
                          title="Cornrows"
                          subtitle="$40 and up for 180 minutes"
                          body="Hair not Included. Message or call for firm pricing. Wash - $10 additional"
                      />
                      <Card
                          title="Havana Twists"
                          subtitle="$150 and up for 300 minutes"
                          body="Hair not Included. Message or call for firm pricing. Wash - $10 additional"
                      />
                      <Card
                          title="Natural Twists"
                          subtitle="$60 and up for 90 minutes"
                          body="Beachy and natural. This style twists two strands of hair around each other from root to tip. Wash - $10 additional"
                      />
                      <Card
                          title="Kid's Braids"
                          subtitle="$60 and up for 120 minutes"
                          body="Braids for the little ones in your life. Hair not Included. Message or call for firm pricing Wash - $10 additional"
                      />
                      <Card
                          title="Yarn Braids"
                          subtitle="$150 and up for 360 minutes"
                          body="Hair not Included. Message or call for firm pricing Wash - $10 additional"
                      />
                  </Cards>
                  {/* <Button className='backToTop'><HashLink to='#top'>Back to top</HashLink></Button> */}
              </Styles>

                {/* Faux Locs Section */}
              <Styles id='faux-locs'>
                  <SectionTitle>Faux Locs</SectionTitle>
                  <Cards>
                      <Card
                          title="Faux/Boho Locs Using Crochet Locs"
                          subtitle="$150 and up for 240 minutes"
                          body="Locs not provided. Spring twist hair provided for an additional $30. Wash is an additional $10"
                      />
                      <Card
                          title="Faux Locs without Crochet Locs - Midback Length"
                          subtitle="$180 and up for 300 minutes"
                          body="We will need Marley hair and spring twists hair. This is not included in the cost above. Marley and spring twists hair can be provided at an additional cost. Wash is an additional $10"
                      />
                      <Card
                          title="Faux Locs without crochet locs - Waist Length"
                          subtitle="$220 and up for 330 minutes"
                          body="We will need Marley hair and spring twists hair. This is not included in the cost above. Marley and spring twists hair can be provided at an additional cost. Wash is an additional $10"
                      />
                      <Card
                          title="Faux Locs without crochet locs - Butt Length"
                          subtitle="$220 and up for 330 minutes"
                          body="We will need Marley hair and spring twists hair. This is not included in the cost above. Marley and spring twists hair can be provided at an additional cost. Wash is an additional $10"
                      />
                      <Card
                          title="Boho Locs without Crochet Locs - Midback Length"
                          subtitle="$200 and up for 300 minutes"
                          body="We will need Marley hair, spring twists hair and curly hair. This is not included in the cost above. Marley and spring twists hair can be provided at an additional cost. Wash is an additional $10"
                      />
                      <Card
                          title="Boho Locs without Crochet Locs - Waist Length"
                          subtitle="$250 and up for 300 minutes"
                          body="We will need Marley hair, spring twists hair and curly hair. This is not included in the cost above. Marley and spring twists hair can be provided at an additional cost. Wash is an additional $10"
                      />
                      <Card
                          title="Boho Locs without Crochet Locs - Butt Length"
                          subtitle="$300 and up for 360 minutes"
                          body="We will need Marley hair, spring twists hair and curly hair. This is not included in the cost above. Marley and spring twists hair can be provided at an additional cost. Wash is an additional $10"
                      />
                  </Cards>
              </Styles>

              {/* Knotless Braids Section */}
              <Styles id='knotless-braids'>
                  <SectionTitle>Knotless Braids</SectionTitle>
                  <Cards>
                      <Card
                          title="Small Knotless braids Mid-back Length"
                          subtitle="$180 and up for 300 minutes"
                          body="Hair not included but can be provided for an additional $30. Wash - $10 additional"
                      />
                      <Card
                          title="Medium Knotless Braids Mid-back Length"
                          subtitle="$160 and up for 240 minutes"
                          body="Hair not included but can be provided for an additional $30. Wash - $10 additional"
                      />
                      <Card
                          title="Large Knotless Braids Mid-back Length"
                          subtitle="$140 and up for 240 minutes"
                          body="Hair not included but can be provided for an additional $30. Wash - $10 additional"
                      />
                      <Card
                          title="Small Knotless braids Waist Length"
                          subtitle="$210 and up for 420 minutes"
                          body="Hair not included but can be provided for an additional $40. Wash - $10 additional"
                      />
                      <Card
                          title="Medium Knotless Braids Waist Length"
                          subtitle="$190 and up for 300 minutes"
                          body="Hair not included but can be provided for an additional $40. Wash - $10 additional"
                      />
                      <Card
                          title="Large Knotless braids Waist Length"
                          subtitle="$170 and up for 240 minutes"
                          body="Hair not included but can be provided for an additional $40 Wash - $10 additional"
                      />
                      <Card
                          title="Small Knotless braids Butt Length"
                          subtitle="$250 and up for 360 minutes"
                          body="Hair not included but can be provided for an additional $50. Wash - $10 additional"
                      />
                      <Card
                          title="Medium Knotless braids Butt Length"
                          subtitle="$230 and up for 300 minutes"
                          body="Hair not included but can be provided for an additional $50 Wash - $10 additional"
                      />
                      <Card
                          title="Large Knotless Braids Butt Length"
                          subtitle="$210 and up for 300 minutes"
                          body="Hair not included but can be provided for an additional $50. Wash - $10 additional"
                      />
                      <Card
                          title="Small Knotless Braids Thigh Length"
                          subtitle="$300 and up for 480 minutes"
                          body="Hair not included but can be provided for an additional $50. Wash - $10 additional"
                      />
                      <Card
                          title="Medium Knotless Braids Thigh Length"
                          subtitle="$280 and up for 480 minutes"
                          body="Hair not included but can be provided for an additional $50. Wash - $10 additional"
                      />
                      <Card
                          title="Large Knotless braids thigh length"
                          subtitle="$260 and up for 360 minutes"
                          body="Hair not included but can be provided for an additional $50. Wash - $10 additional"
                      />
                      <Card
                          title="Small Knotless braids Knee Length"
                          subtitle="$360 and up for 480 minutes"
                          body="Hair not included but can be provided for an additional $60. Wash - $10 additional"
                      />
                      <Card
                          title="Medium Knotless Braids Knee Length"
                          subtitle="$340 and up for 360 minutes"
                          body="Hair not included but can be provided for an additional $60. Wash - $10 additional"
                      />
                      <Card
                          title="Large Knotless Braids Knee Length"
                          subtitle="$320 and up for 360 minutes"
                          body="Hair not included but can be provided for an additional $60. Wash - $10 additional"
                      />
                      <Card
                          title="Small Knotless braids Floor Length"
                          subtitle="$500 and up for 480 minutes"
                          body="Hair not included but can be provided for an additional $80. Wash - $10 additional"
                      />
                      <Card
                          title="Medium Knotless Braids Floor Length"
                          subtitle="$480 and up for 480 minutes"
                          body="Hair not included but can be provided for an additional $80. Wash - $10 additional"
                      />
                      <Card
                          title="Large Knotless braids floor length"
                          subtitle="$460 and up for 420 minutes"
                          body="Hair not included but can be provided for an additional $80. Wash - $10 additional"
                      />
                      <Card
                          title="French Curls Knotless Braids - Small"
                          subtitle="$280 and up for 360 minutes"
                          body="Hair not included but can be provided for an additional $80. Wash - $10 additional"
                      />
                      <Card
                          title="French Curls Knotless Braids - Extra Small"
                          subtitle="$350 and up for 360 minutes"
                          body="Hair not included but can be provided for an additional $80. Wash - $10 additional"
                      />
                  </Cards>
              </Styles>

              {/* Box Braids Section */}
              <Styles id='box-braids'>
                  <SectionTitle>Box Braids</SectionTitle>
                  <Cards>
                      <Card
                          title="Small Box Braids Mid-back length"
                          subtitle="$180 and up for 360 minutes"
                          body="Hair not included but can be provided for an additional $30. Wash - $10 additional"
                      />
                      <Card
                          title="Medium Box Braids Mid-back length"
                          subtitle="$160 and up for 240 minutes"
                          body="Hair not included but can be provided for an additional $30. Wash is an additional $10"
                      />
                      <Card
                          title="Big Box Braids Mid- back Length"
                          subtitle="$140 and up for 240 minutes"
                          body="Hair not included but can be provided for an additional $30. Wash is an additional $10"
                      />
                      <Card
                          title="Small box braids Waist length"
                          subtitle="$220 and up for 420 minutes"
                          body="Hair not included but can be provided for an additional $40. Wash is an additional $10"
                      />
                      <Card
                          title="Medium Box Braids Waist Length"
                          subtitle="$200 and up for 300 minutes"
                          body="Hair not included but can be provided for an additional $40. Wash is an additional $10"
                      />
                      <Card
                          title="Big Box Braids Waist Length"
                          subtitle="$180 and up for 240 minutes"
                          body="Hair not included but can be provided for a. Additional $30. Wash is an additional $10"
                      />
                      <Card
                          title="Small Box Braids Butt length"
                          subtitle="$260 and up for 480 minutes"
                          body="Hair not included but can be provided for an additional $50. Wash is an additional $10"
                      />
                      <Card
                          title="Medium Box Braids Butt Length"
                          subtitle="$240 and up for 360 minutes"
                          body="Hair not included but can be provided for an additional $50. Wash is additional $10"
                      />
                      <Card
                          title="Big Box Braids Butt Length"
                          subtitle="$220 and up for 300 minutes"
                          body="Hair not included but can be provided for an additional $50. Wash is an additional $10"
                      />
                      <Card
                          title="Small box braids Knee length"
                          subtitle="$350 and up for 480 minutes"
                          body="Hair not included but can be provided for an additional $60. Wash is an additional $10"
                      />
                      <Card
                          title="Medium Box Braids Knee Length"
                          subtitle="$330 and up for 480 minutes"
                          body="Hair not included but can be provided for an additional $60. Wash is an additional $10"
                      />
                      <Card
                          title="Big Box Braids Knee Length"
                          subtitle="$310 and up for 360 minutes"
                          body="Hair not included but can be provided for an additional $60. Wash is an additional $10"
                      />
                  </Cards>
              </Styles>

              {/* Senegalese Twists Section */}
              <Styles id='senegalese-twists'>
                  <SectionTitle>Senegalese Twists</SectionTitle>
                  <Cards>
                      <Card
                          title="Small Senegalese Twist Mid-back Length"
                          subtitle="$200 and up for 300 minutes"
                          body="Hair is not included but can be provided for an additional $30. Wash - $10 additional"
                      />
                      <Card
                          title="Medium Senegalese Twist Mid-back Length"
                          subtitle="$180 and up for 300 minutes"
                          body="Hair is not included but can be provided for an additional $30. Wash - $10 additional"
                      />
                      <Card
                          title="Big Senegalese Twist Mid-back Length"
                          subtitle="$160 and up for 300 minutes"
                          body="Hair is not included but can be provided for an additional $30. Wash - $10 additional"
                      />
                      <Card
                          title="Small Senegalese Twist Waist Length"
                          subtitle="$230 and up for 300 minutes"
                          body="Hair is not included but can be provided for an additional $40. Wash - $10 additional"
                      />
                      <Card
                          title="Medium Senegalese Twist Waist Length"
                          subtitle="$210 and up for 360 minutes"
                          body="Hair is not included but can be provided for an additional $40. Wash - $10 additional"
                      />
                      <Card
                          title="Big Senegalese Twist Waist Length"
                          subtitle="$190 and up for 360 minutes"
                          body="Hair is not included but can be provided for an additional $40. Wash - $10 additional"
                      />
                      <Card
                          title="Small Senegalese Twist Butt Length"
                          subtitle="$300 and up for 420 minutes"
                          body="Hair is not included but can be provided for an additional $50. Wash - $10 additional"
                      />
                      <Card
                          title="Medium Senegalese Twist Butt Length"
                          subtitle="$280 and up for 360 minutes"
                          body="Hair is not included but can be provided for an additional $50. Wash - $10 additional"
                      />
                      <Card
                          title="Big Senegalese Twist Butt Length"
                          subtitle="$260 and up for 360 minutes"
                          body="Hair is not included but can be provided for an additional $50. Wash - $10 additional"
                      />
                      <Card
                          title="Small Senegalese Twist Knee Length"
                          subtitle="$450 and up for 480 minutes"
                          body="Hair is not included but can be provided for an additional $80. Wash - $10 additional"
                      />
                      <Card
                          title="Medium Senegalese Twist Knee Length"
                          subtitle="$400 and up for 480 minutes"
                          body="Hair is not included but can be provided for an additional $80. Wash - $10 additional"
                      />
                      <Card
                          title="Big Senegalese Twist Knee Length"
                          subtitle="$350 and up for 360 minutes"
                          body="Hair is not included but if needed can be provided at an extra cost. Wash - $10 additional"
                      />
                  </Cards>
              </Styles>

              {/* Kinky Twists Section */}
              <Styles id='kinky-twists'>
                  <SectionTitle>Kinky Twists</SectionTitle>
                  <Cards>
                      <Card
                          title="Small Kinky Twist"
                          subtitle="$180 and up for 240 minutes"
                          body="Hair is not included but if needed can be provided for $30 additional cost. Wash - $10 additional"
                      />
                      <Card
                          title="Medium Kinky Twist"
                          subtitle="$160 and up for 240 minutes"
                          body="Hair is not included but if needed can be provided for $30 additional cost. Wash - $10 additional"
                      />
                      <Card
                          title="Big Kinky Twist"
                          subtitle="$140 and up for 240 minutes"
                          body="Hair is not included but if needed can be provided for $30 additional cost. Wash - $10 additional"
                      />
                  </Cards>
              </Styles>

              {/* Goddess Braids Section */}
              <Styles id='goddess-braids'>
                      <SectionTitle>Goddess Braids</SectionTitle>
                  <Cards>
                      <Card
                          title="Large Goddess Braids Knee Length"
                          subtitle="$360 and up for 240 minutes"
                          body="We will need regular braiding hair and curly hair. Curly hair is not provided. Regular hair can be provided for an additional $50. Wash - $10 additional"
                      />
                      <Card
                          title="Medium Goddess Braids Knee Length"
                          subtitle="$380 and up for 360 minutes"
                          body="We will need regular braiding hair and curly hair. Curly hair is not provided. Regular hair can be provided for an additional $50. Wash - $10 additional"
                      />
                      <Card
                          title="Small Goddess Braids Knee Length"
                          subtitle="$400 and up for 420 minutes"
                          body="We will need regular braiding hair and curly hair. Curly hair is not provided. Regular hair can be provided for an additional $50. Wash - $10 additional"
                      />
                      <Card
                          title="Large Goddess Braids Butt Length"
                          subtitle="$240 and up for 240 minutes"
                          body="We will need regular braiding hair and curly hair. Curly hair is not provided. Regular hair can be provided for an additional $40. Wash - $10 additional"
                      />
                      <Card
                          title="Medium Goddess Braids Butt Length"
                          subtitle="$260 and up for 300 minutes"
                          body="We will need regular braiding hair and curly hair. Curly hair is not provided. Regular hair can be provided for an additional $40. Wash - $10 additional"
                      />
                      <Card
                          title="Small Goddess Braids Butt Length"
                          subtitle="$280 and up for 300 minutes"
                          body="We will need regular braiding hair and curly hair. Curly hair is not provided. Regular hair can be provided for an additional $40. Wash - $10 additional"
                      />
                      <Card
                          title="Large Goddess Braids Waist Length"
                          subtitle="$200 and up for 180 minutes"
                          body="We will need regular braiding hair and curly hair. Curly hair is not provided. Regular hair can be provided for an additional $30. Wash - $10 additional"
                      />
                      <Card
                          title="Medium Goddess Braids Waist Length"
                          subtitle="$220 and up for 240 minutes"
                          body="We will need regular braiding hair and curly hair. Curly hair is not provided. Regular hair can be provided for an additional $30. Wash - $10 additional"
                      />
                      <Card
                          title="Small Goddess Braids Waist Length"
                          subtitle="$240 and up for 300 minutes"
                          body="We will need regular braiding hair and curly hair. Curly hair is not provided. Regular hair can be provided for an additional $30. Wash - $10 additional"
                      />
                      <Card
                          title="Large Goddess Braids Mid-back Length"
                          subtitle="$170 and up for 180 minutes"
                          body="We will need regular braiding hair and curly hair. Curly hair is not provided. Regular hair can be provided for an additional $30. Wash - $10 additional"
                      />
                      <Card
                          title="Medium Goddess Braids Mid-back Length"
                          subtitle="$190 and up for 240 minutes"
                          body="We will need regular braiding hair and curly hair. Curly hair is not provided. Regular hair can be provided for an additional $30. Wash - $10 additional"
                      />
                      <Card
                          title="Small Goddess Braids Mid-back Length"
                          subtitle="$210 and up for 300 minutes"
                          body="We will need regular braiding hair and curly hair. Curly hair is not provided. Regular hair can be provided for an additional $30. Wash - $10 additional"
                      />
                  </Cards>
              </Styles>

              {/* Fulani Braids Section */}
              <Styles id='fulani-braids'>
                  <SectionTitle>Fulani Braids</SectionTitle>
                  <Cards>
                      <Card
                          title="Fulani braids with crochet"
                          subtitle="$150 and up for 180 minutes"
                          body="Regular Hair can be provided for an additional $20. Wash is an additional $10."
                      />
                      <Card
                          title="Fulani braids Midback Length"
                          subtitle="$180 and up for 180 minutes"
                          body="Hair not included but can be provided for an additional $40 Wash - $10 additional"
                      />
                      <Card
                          title="Fulani Braids Waist Length"
                          subtitle="$200 and up for 240 minutes"
                          body="Hair not included but can be provided for an additional $40 Wash - $10 additional"
                      />
                      <Card
                          title="Fulani Braids Butt Length"
                          subtitle="$240 and up for 300 minutes"
                          body="Hair not included but can be provided for an additional $40 Wash - $10 additional"
                      />
                      <Card
                          title="Fulani Braids Thigh Length"
                          subtitle="$280 and up for 300 minutes"
                          body="Hair not included but can be provided for an additional $50. Wash - $10 additional"
                      />
                      <Card
                          title="Fulani Braids Knee Length"
                          subtitle="$360 and up for 360 minutes"
                          body="Hair not included but can be provided for an additional $60. Wash - $10 additional"
                      />
                  </Cards>
              </Styles>

              {/* Crochet Braids Section */}
              <Styles id='crochet-braids'>
                  <SectionTitle>Crochet Braids</SectionTitle>
                  <Cards>
                      <Card
                          title="Crochet Braids with Non-braided Hair"
                          subtitle="$100 and up for 240 minutes"
                          body="Stylish and protective. We'll attach extensions through your natural hair for a full-bodied look. Hair not Included. Wash - $10 additional"
                      />
                      <Card
                          title="Crochet Braids with Braided Hair"
                          subtitle="$60 and up for 150 minutes"
                          body="Stylish and protective. We'll attach extensions through your natural hair for a full-bodied look. Hair not Included. Wash - $10 additional"
                      />
                      <Card
                          title="Invisible Crochet Braids - Full Head"
                          subtitle="$180 and up for 240 minutes"
                          body="Stylish and protective. We'll attach extensions through your natural hair for a full-bodied look."
                      />
                      <Card
                          title="Invisible Crochet Braids - Half Head"
                          subtitle="$150 and up for 180 minutes"
                          body="Stylish and protective. We'll attach extensions through your natural hair for a full-bodied look."
                      />
                      <Card
                          title=""
                          subtitle=""
                          body=""
                      />
                  </Cards>
              </Styles>

              {/* Nubian Twists Section */}
              <Styles id='nubian-twists'>
                  <SectionTitle>Nubian Twists</SectionTitle>
                  <Cards>
                      <Card
                          title="Spring Twists Shoulder Length"
                          subtitle="$150 and up for 240 minutes"
                          body="Hair is not included but if needed can be provided for an additional $50. Wash - $10 additional"
                      />
                      <Card
                          title="Spring Twists Mid-back Length"
                          subtitle="$180 and up for 240 minutes"
                          body="Hair is not included but if needed can be provided for an additional $80. Wash - $10 additional"
                      />
                  </Cards>
              </Styles>

              {/* Stich Braids Section */}
              <Styles id='stitch-braids'>
                  <SectionTitle>Stich Braids</SectionTitle>
                  <Cards>
                      <Card
                          title="Stich Braids"
                          subtitle="$60 and up for 150 minutes"
                          body="$15 per braid. Waist length - extra $20 Butt length - extra $40 Knee length - extra $70 Wash is an additional $10"
                      />
                  </Cards>
              </Styles>

              {/* Micro Braids Section */}
              <Styles id='micro-braids'>
                  <SectionTitle>Micro Braids</SectionTitle>
                  <Cards>
                      <Card
                          title="Extra Small Micro Braids"
                          subtitle="$250 and up for 480 minutes"
                          body="Hair is not included. Wash - $10 additional"
                      />
                      <Card
                          title="Small Micro Braids"
                          subtitle="$200 and up for 420 minutes"
                          body="Hair is not included. Wash - $10 additional"
                      />
                      <Card
                          title="Medium Micro Braids"
                          subtitle="$180 and up for 360 minutes"
                          body="Hair is not included. Wash - $10 additional"
                      />
                  </Cards>
              </Styles>

              {/* Tree Braids Section */}
              <Styles id='tree-braids'>
                  <SectionTitle>Tree Braids</SectionTitle>
                  <Cards>
                      <Card
                          title="Tree Braids"
                          subtitle="$150 and up for 180 minutes"
                          body=""
                      />
                  </Cards>
              </Styles>

              {/* Butterfly Locs Section */}
              <Styles id='butterfly-locs'>
                  <SectionTitle>Butterfly Locs</SectionTitle>
                  <Cards>
                      <Card
                          title="butterfly locs Shoulder length"
                          subtitle="$150 and up for 240 minutes"
                          body="Hair not included but can be provided for an additional $50. Wash - $10 additional"
                      />
                      <Card
                          title="Butterfly locs Mid-back length"
                          subtitle="$180 and up for 240 minutes"
                          body="Hair is not included but can be provided for an additional $50. Wash is an additional $10."
                      />
                      <Card
                          title="Butterfly locs waist length"
                          subtitle="$250 and up for 360 minutes"
                          body="Hair is not included but can be provided for an additional $80. Wash is an additional $10."
                      />
                  </Cards>
              </Styles>

              {/* Dreadlocks Section */}
              <Styles id='dreadlocks'>
                  <SectionTitle>Dreadlocks</SectionTitle>
                  <Cards>
                      <Card
                          title="Dreadlocks - Starting"
                          subtitle="$80 and up for 180 minutes"
                          body="Wash is additional $10. Simple Styling available for an additional $10."
                      />
                      <Card
                          title="Dreadlocks Loc Re-twist"
                          subtitle="$60 and up for 180 minutes"
                          body="Wash is an additional $10. Simple Styling available for an additional $10"
                      />
                  </Cards>
              </Styles>

              {/* Cornrows Section */}
              <Styles id='cornrows'>
                  <SectionTitle>Cornrows</SectionTitle>
                  <Cards>
                      <Card
                          title="Small Lemonade braids Midback Length"
                          subtitle="$150 and up for 300 minutes"
                          body="Hair not included but can be provided for an additional $30 Wash - $10 additional"
                      />
                      <Card
                          title="Medium Lemonade Braids Midback Length"
                          subtitle="$130 and up for 240 minutes"
                          body="Hair not included but can be provided for an additional $30 Wash - $10 additional"
                      />
                      <Card
                          title="Large Lemonade Braids Midback Length"
                          subtitle="$100 and up for 180 minutes"
                          body="Hair not included but can be provided for an additional $30 Wash - $10 additional"
                      />
                      <Card
                          title="Small Lemonade Braids Waist Length"
                          subtitle="$180 and up for 300 minutes"
                          body="Hair not included but can be provided for an additional $30 Wash - $10 additional"
                      />
                      <Card
                          title="Medium Lemonade Braids Waist Length"
                          subtitle="$160 and up for 240 minutes"
                          body="Hair not included but can be provided for an additional $30 Wash - $10 additional"
                      />
                      <Card
                          title="Large Lemonade Braids Waist Length"
                          subtitle="$130 and up for 180 minutes"
                          body="Hair not included but can be provided for an additional $30 Wash - $10 additional"
                      />
                      <Card
                          title="Small Lemonade Braids Butt Length"
                          subtitle="$220 and up for 360 minutes"
                          body="Hair not included but can be provided for an additional $40 Wash - $10 additional"
                      />
                      <Card
                          title="Medium Lemonade Braids Butt Length"
                          subtitle="$200 and up for 300 minutes"
                          body="Hair not included but can be provided for an additional $40 Wash - $10 additional"
                      />
                      <Card
                          title="Large Lemonade Braids Butt Length"
                          subtitle="$170 and up for 240 minutes"
                          body="Hair not included but can be provided for an additional $40 Wash - $10 additional"
                      />
                      <Card
                          title="Small Lemonade Braids Thigh Length"
                          subtitle="$280 and up for 360 minutes"
                          body="Hair not included but can be provided for an additional $40 Wash - $10 additional"
                      />
                      <Card
                          title="Medium Lemonade Braids Thigh Length"
                          subtitle="$260 and up for 360 minutes"
                          body="Hair not included but can be provided for an additional $40 Wash - $10 additional"
                      />
                      <Card
                          title="Large Lemonade Braids Thigh Length"
                          subtitle="$230 and up for 300 minutes"
                          body="Hair not included but can be provided for an additional $40 Wash - $10 additional"
                      />
                      <Card
                          title="Small Lemonade Braids Knee Length"
                          subtitle="$320 and up for 420 minutes"
                          body="Hair not included but can be provided for an additional $50 Wash - $10 additional"
                      />
                      <Card
                          title="Medium Lemonade Braids Knee Length"
                          subtitle="$300 and up for 360 minutes"
                          body="Hair not included but can be provided for an additional $50 Wash - $10 additional"
                      />
                      <Card
                          title="Large Lemonade Braids Knee Length"
                          subtitle="$270 and up for 300 minutes"
                          body="Hair not included but can be provided for an additional $50 Wash - $10 additional"
                      />
                      <Card
                          title="Small Lemonade Braids Floor Length"
                          subtitle="$380 and up for 480 minutes"
                          body="Hair not included but can be provided for an additional $80 Wash - $10 additional"
                      />
                      <Card
                          title="Medium Lemonade Braids Floor Length"
                          subtitle="$360 and up for 420 minutes"
                          body="Hair not included but can be provided for an additional $80 Wash - $10 additional"
                      />
                      <Card
                          title="Large Lemonade Braids Floor Length"
                          subtitle="$330 and up for 360 minutes"
                          body="Hair not included but can be provided for an additional $80 Wash - $10 additional"
                      />
                  </Cards>
              </Styles>

          </Content>
    </Section>
      
    //   <div>hello</div>
  )
}


function Card(props) {
  return (
    <div className="card">
          <h3 className="card-title">{props.title}</h3>
          <h4 className="card-subtitle">{props.subtitle}</h4>
        <p className="card-body">{props.body}</p>
    </div>
  );
}


export default Home