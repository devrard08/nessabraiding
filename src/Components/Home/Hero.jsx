import React from 'react'
import styled from 'styled-components';
// import '../Home/Hero.css'

const LandingSection = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    padding: 3rem 5rem;
    height: 70vh;

    @media only screen and (max-width: 600px) {
      padding: 2rem;
    }
`


const Title = styled.h1`
  font-size: 5rem;
  text-align: center;
  color: var(--dark);
  font-family: var(--font-title);

  @media only screen and (max-width: 600px) {
      display: none;
  }
`

const Text = styled.p`
    font-size: 2.5rem;
    text-align: center;
    color: var(--dark);
    font-weight: 300;
    margin: 3rem 0;



    @media only screen and (max-width: 600px) {
      font-size: 1.75rem;
  }

`

const Button = styled.button`
  /* Adapt the colors based on primary prop */
  background: ${props => props.primary ? 'var(--dark)' : 'var(--light)'};
  color: ${props => props.primary ? 'var(--light)' : 'var(--dark)'};

  font-size: 1rem;
  margin: 1rem;
  padding: 0.75rem 2rem;
  border: 2px solid var(--dark);
  border-radius: 3px;
  cursor: pointer;
  &:hover {
    opacity: ${props => props.primary ? ".7" : "1" }
  }
`


const Hero = () => {
  return (
    
      <>
          <LandingSection>
              <Title>Nessa's Braiding</Title>
              <Text>Hair professional specializing in braids - Box Braids, knotless braids, twists, micro braids, locs, crochet, cornrows, for kids and adults.</Text>
              <div>
                  <Button primary>Book an Appointment</Button>
              </div>
          </LandingSection>
      </>
  )
}

export default Hero