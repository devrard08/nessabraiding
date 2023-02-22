import React from 'react'
import styled from 'styled-components';
import { FaStar } from 'react-icons/fa';

const Section = styled.div`
    padding: 5rem;

    @media only screen and (max-width: 600px) {
      padding: 1rem;
  }
`

const Cards = styled.div`
    display: flex;
    flex-wrap: wrap;
    padding: 3rem;

    @media only screen and (max-width: 600px) {
        padding: 1rem;
      flex-direction: column;
  }
`

const Card = styled.div`
    flex: 1;
    width: 500px;
    margin: 1rem;
    // border: 2px solid var(--dark);

    @media only screen and (max-width: 600px) {
      width: 100%;
  }
`

const CardHeader = styled.div`
    // display: flex;
    padding: 1rem;
`

const Title = styled.h3`
    font-size: 1rem;
    font-weight: 900;
    margin-bottom: 1rem;

`

const Stars = styled.div`
    color: #E10984;
`

const CardBody = styled.div`
    flex: 1;
    padding: 1rem;
`

const Text = styled.p`
`

const CardFooter = styled.div`
    display: flex;
    justify-content: space-between;
    margin-top: auto;
    padding: 1rem;
`

const Author = styled.h4`
`
const Date = styled.p`
`

const Testimonials = () => {
    return (
        <Section>
            <Cards>
                <Card>
                    <CardHeader>
                        <Title>Crochet Braids with Braided Hair</Title>
                        <Stars>
                            <FaStar></FaStar>
                            <FaStar></FaStar>
                            <FaStar></FaStar>
                            <FaStar></FaStar>
                            <FaStar></FaStar>
                        </Stars>
                    </CardHeader>
                    <CardBody>
                        <Text>Always a pleasant experience.</Text>
                    </CardBody>
                    <CardFooter>
                        <Author>
                            Marquita R.
                        </Author>
                        <Date>
                            Nov 27, 2022
                        </Date>
                    </CardFooter>
                </Card>
                <Card>
                    <CardHeader>
                        <Title>Kid's Braids</Title>
                        <Stars>
                            <FaStar></FaStar>
                            <FaStar></FaStar>
                            <FaStar></FaStar>
                            <FaStar></FaStar>
                            <FaStar></FaStar>
                        </Stars>
                    </CardHeader>
                    <CardBody>
                        <Text></Text>
                    </CardBody>
                    <CardFooter>
                        <Author>
                            Latia S
                        </Author>
                        <Date>
                            Aug 21, 2022
                        </Date>
                    </CardFooter>
                </Card>
                <Card>
                    <CardHeader>
                        <Title>Faux Locs waist length</Title>
                        <Stars>
                            <FaStar></FaStar>
                            <FaStar></FaStar>
                            <FaStar></FaStar>
                            <FaStar></FaStar>
                            <FaStar></FaStar>
                        </Stars>
                    </CardHeader>
                    <CardBody>
                        <Text>Nessa did a great job on my hair as usual! She did half crotchet and half individuals! It didn't take long at all and she's always super sweet!</Text>
                    </CardBody>
                    <CardFooter>
                        <Author>
                            Kari P.
                        </Author>
                        <Date>
                            Aug 1, 2022
                        </Date>
                    </CardFooter>
                </Card>
                <Card>
                    <CardHeader>
                        <Title>Crochet Braids with Braided Hair</Title>
                        <Stars>
                            <FaStar></FaStar>
                            <FaStar></FaStar>
                            <FaStar></FaStar>
                            <FaStar></FaStar>
                            <FaStar></FaStar>
                        </Stars>
                    </CardHeader>
                    <CardBody>
                        <Text>Message was amazing! She really listened to my concerns about my damaged edges and created a style that was amazing!!! I will be using her from now on! I'm new to Richmond and glad I found my stylist!!!</Text>
                    </CardBody>
                    <CardFooter>
                        <Author>
                            Kari P.
                        </Author>
                        <Date>
                            Jun 30, 2022
                        </Date>
                    </CardFooter>
                </Card>
            </Cards>
        </Section>

  )
}

export default Testimonials