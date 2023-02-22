import React from 'react'
// import { Link } from "react-router-dom";
import { NavHashLink, HashLink } from 'react-router-hash-link';
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
    // border: 1px solid red;

    @media only screen and (max-width: 600px) {
        width: 70%;
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
    border: 1px solid var(--dark);
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
`

const Cards = styled.div`
    display: flex;
    flex-wrap: wrap;
`

const Button = styled.button`
  background-color: var(--dark);
  border: 0;
  border-radius: 3px;
  color: var(--light);
  padding: 12px 32px;
  font-size: 1.2rem;
  margin-bottom: 1.2rem;
  white-space: nowrap;
  float: center;
`

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
                          <NavHashLink smooth to="/services/#services">Knotless Braids</NavHashLink>
                      </li>
                      <li>
                          <NavHashLink smooth to="/services/#services">Box Braids</NavHashLink>
                      </li>
                      <li>
                          <NavHashLink smooth to="/services/#services">Senegalese Twists</NavHashLink>
                      </li>
                      <li>
                          <NavHashLink smooth to="/services/#services">Kinky Twists</NavHashLink>
                      </li>
                      <li>
                          <NavHashLink smooth to="/services/#services">Goddess Braids</NavHashLink>
                      </li>
                      <li>
                          <NavHashLink smooth to="/services/#services">Fulani Braids</NavHashLink>
                      </li>
                      <li>
                          <NavHashLink smooth to="/services/#services">Crochet Braids</NavHashLink>
                      </li>
                      <li>
                          <NavHashLink smooth to="/services/#services">Nubian Twists</NavHashLink>
                      </li>
                      <li>
                          <NavHashLink smooth to="/services/#services">Stich Braids</NavHashLink>
                      </li>
                      <li>
                          <NavHashLink smooth to="/services/#services">Butterfly Locs</NavHashLink>
                      </li>
                      <li>
                          <NavHashLink smooth to="/services/#services">Dreadlocks</NavHashLink>
                      </li>
                      <li>
                          <NavHashLink smooth to="/services/#services">Cornrows</NavHashLink>
                      </li>
                  </ul>
              </nav>
          </Sidebar>
          <Content>
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
                  <Button className='backToTop'><HashLink to='#top'>Back to top</HashLink></Button>
              </Styles>


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