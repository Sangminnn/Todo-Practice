import React from 'react';
import styled from 'styled-components';

import { shadow } from '../lib/styleUtils';


const Container = styled.section`
  display: flex;
  flex-direction: column;
  margin: 4rem auto;

  width: 500px;
  min-height: 500px;
  height: auto;

  ${shadow(2)}
`;

const Title = styled.header`
  display: flex;
  margin: 1.5rem auto;
`;

type TodoWrapperProps = {
  children: any
}

const TodoWrapper = ({ children }: TodoWrapperProps) => (
  <Container>
    <Title>
      My Todo
    </Title>
    { children }
  </Container>
);

export default TodoWrapper;