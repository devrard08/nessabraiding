import React from 'react'
import styled from 'styled-components';

const Section = styled.div`
    // background-color: var(--dark);
    // color: var(--light);
    padding: 5rem;

    @media only screen and (max-width: 600px) {
      padding: 1rem;
  }
`

const Title = styled.h2`
  font-size: 5rem;
  font-family: var(--font-title);
  margin-left: 5rem;
  margin-bottom: 2.5rem;

  @media only screen and (max-width: 600px) {
    margin-top: 2rem;
      margin-left: 1rem;
  }
`

const Text = styled.p`
    font-size: 2rem;
    font-weight: 300;
    margin: 0 5rem;

    @media only screen and (max-width: 600px) {
      font-size: 1.5rem;
      margin: 0 1rem;
  }
`

const About = () => {
  return (
      <Section>
          <Title>About</Title>
          <Text>
              Having been in the braiding business for over ten years and working for different African braiding shops, I decided to launch my own. I specialize in box braids, Knotless, Senegalese twists, Nubian twists, Havana twists, cornrows, locks, and a few other styles.
          </Text>
    </Section>
  )
}

export default About