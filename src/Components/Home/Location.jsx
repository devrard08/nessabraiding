import React from 'react'
// import { Link } from 'react-router-dom'
import styled from 'styled-components'
import '../Home/Location.css'

const Section = styled.div`
    padding: 5rem;

    @media only screen and (max-width: 600px) {
        padding: 0;
  }
`

const Map = styled.div`
  display: grid;
  place-items: center;
  margin-bottom: 5rem;

    @media only screen and (max-width: 600px) {
      display: block;
  }
`

const Info = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-evenly;

  @media only screen and (max-width: 600px) {
    // align-item: center;
    // justify-content: center;
      flex-direction: column;
      padding: 2rem;
  }
`

const Contact = styled.div`
  margin: 2rem 0;
`

const Address = styled.div`
    margin: 2rem 0;
`

const Hours = styled.div`
  margin: 2rem 0;
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
`

const Title = styled.h3`
  font-size: 1.5rem;
  margin-bottom: 1.2rem;
`

const Text = styled.p`
  font-size: 1.2rem;
  line-height: 1.4;
`

const Location = () => {
    
    return (
        <Section>
            <Map>
                <a href="https://www.google.com/maps/place/Nessa's+Braiding/@37.4170829,-77.4572864,17.84z/data=!4m6!3m5!1s0x89b10f91bfba268f:0xa3b5db2f925989b0!8m2!3d37.4176854!4d-77.4577613!16s%2Fg%2F11rtrcbl6y" target="_blank" rel="noopener noreferrer">
                    <iframe className='map-location' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1773.3264630471583!2d-77.45728641570831!3d37.41708292866846!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89b10f91bfba268f%3A0xa3b5db2f925989b0!2sNessa&#39;s%20Braiding!5e0!3m2!1sen!2sus!4v1676159233289!5m2!1sen!2sus" width="750" height="450" style={{border:`0`}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade" title="Nessa's Braiding Map"></iframe>
                </a>
            </Map>
            <Info>
                <Contact>
                    <Title>Contact</Title>
                    <a href="tel:+1-804-243-4080"><Button>Call</Button></a>
                    <Text>(804) 243-4080</Text>
                </Contact>
                <Address>
                    <Title>Address</Title>
                    <a href="https://www.google.com/maps/dir//Nessa's+Braiding,+3730+Sterling+Woods+Ln,+Richmond,+VA+23237/@37.4170829,-77.4572864,17z/data=!4m9!4m8!1m0!1m5!1m1!1s0x89b10f91bfba268f:0xa3b5db2f925989b0!2m2!1d-77.4576923!2d37.4176385!3e0" target="_blank" rel="noopener noreferrer"><Button>Directions</Button></a>
                    <Text>
                        <address style={{ fontStyle: `normal` }}>
                            3730 Sterling Woods Ln, <br /> Richmond, VA 23237
                        </address>
                    </Text>
                </Address>
                <Hours>
                    <Title>Business Hours</Title>
                    <ul>
                        <li className="sun">
                              <span >Sunday</span>
                              <span >6AM - 5PM</span>
                          </li>
                          <li className="mon">
                              <span >Monday</span>
                              <span >9AM - 6PM</span>
                          </li>
                          <li className="tue">
                              <span >Tuesday</span>
                              <span >9AM - 6PM</span>
                          </li>
                          <li className="wed">
                              <span >Wednesday</span>
                              <span >9AM - 6PM</span>
                          </li>
                          <li className="thu">
                              <span >Thursday</span>
                              <span >9AM - 6PM</span>
                          </li>
                          <li className="fri">
                              <span >Friday</span>
                              <span >9AM - 9PM</span>
                          </li>
                          <li className="sat">
                              <span >Saturday</span>
                              <span >6AM - 9PM</span>
                          </li>
                      </ul>
                </Hours>
            </Info>
        </Section>
  )
}



export default Location