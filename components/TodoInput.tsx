import React from 'react';
import styled from 'styled-components';
import oc from 'open-color';

const Wrapper = styled.div`
  display: flex;
  align-items: center;

  margin-left: 1rem;
  margin-right: 1rem;
`;

const Input = styled.input`
  flex: 1;
  
  padding-left: 0.5rem;
  font-size: 1.2rem;
  height: 2rem;
  
  border-color: white;

  :focus {
    outline: 1px; 
    outline-color: ${oc.blue[2]};
    outline-style: solid;
  }
`;

const Button = styled.div`
  margin-left: 1rem;
  padding: 0.5rem;
  border: 1px solid ${oc.blue[0]};
  border-radius: 5px; 
  color: ${oc.blue[3]};
  cursor: pointer;

  transition: 0.3s all;

  :hover {
    background-color: ${oc.blue[2]};
    color: #FFFFFF; 
  }
`;

const TodoInput = () => (
  <Wrapper>
    <Input/>
    <Button>추가</Button>
  </Wrapper>
);

export default TodoInput;