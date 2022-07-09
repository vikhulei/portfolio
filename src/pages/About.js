import { Title } from "../styles/Common";

import {
  Wrapper,
  TextWrapper,
  PreText,
  CurrentStack,
  NowLearning,
  Heading,
  Bullet
} from "../styles/AboutStyles";

const About = () => {
  return (
    <Wrapper>
      <Title>About me</Title>
      <TextWrapper>
        <PreText>
          My coding jorney started in July 2020 with the completion of HTM/CSS/JS
          course.
        </PreText>
        <CurrentStack>
          <Heading>Current stack:</Heading>
          <Bullet>HTML/CSS/JS</Bullet>
          <Bullet>SASS</Bullet>
          <Bullet>React, React Router</Bullet>
          <Bullet>VS Code/CodeSandbox</Bullet>
          <Bullet>Figma</Bullet>
          <Bullet>Styled Components</Bullet>
          <Bullet>Git, GitHub</Bullet>
        </CurrentStack>
        <NowLearning>
          <Heading>Now learning:</Heading>
          <Bullet>React Redux</Bullet>
          <Bullet>Testing using Jest</Bullet>
          <Bullet>Node.JS/Express</Bullet>
          <Bullet>MongoDB</Bullet>
        </NowLearning>
      </TextWrapper>
    </Wrapper>
  );
};

export default About;
