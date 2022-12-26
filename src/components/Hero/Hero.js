import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = (props) => (
  <Section>
    <SectionTitle main center>
      Welcome to <br/>
      My Personal portfolio
    </SectionTitle>
    <SectionText>
      I love Coding! wants to take my development skills to the next level and build awsome apps.
    </SectionText>
    <Button onClick={()=> window.location = 'https://google.com'}>Learn more</Button>
  </Section>
);

export default Hero;