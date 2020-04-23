import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashAlt as remove } from '@fortawesome/free-solid-svg-icons';
import oc from 'open-color';

const Wrapper = styled.article`
  display: flex;
  flex-direction: column;

  margin: 1rem 1.5rem;
`;

const Icon = styled(FontAwesomeIcon)`
  margin-left: auto;
  display: none;
  
  transition: 0.4s all;
  cursor: pointer;

  color: ${oc.blue[2]};
  :hover {
    font-size: 1.2rem;
  }
`;

const Content = styled.div`
  display: flex;
  padding: 0.5rem;
  align-items: center;

  font-size: 1.2rem;
  transition: 0.3s all;

  cursor: pointer;

  :hover {
    background: ${oc.blue[0]};
    ${Icon} {
      display: block;
    }
  }
`;

const TodoItem = () => {
  return (
    <Wrapper>
      <Content>
        hello
        <Icon icon={remove} />
      </Content>
      <Content>
        hello
        <Icon icon={remove} />
      </Content>
      <Content>
        hello
        <Icon icon={remove} />
      </Content>
      <Content>
        hello
        <Icon icon={remove} />
      </Content>
      <Content>
        hello
        <Icon icon={remove} />
      </Content>
    </Wrapper>
  )
};

export default TodoItem;
