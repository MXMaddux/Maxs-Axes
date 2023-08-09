import React from 'react'
import styled from 'styled-components'
const Footer = () => {
  return (
    <Container>
      <h5>
        &copy; {new Date().getFullYear()}
        <span> Max's Axes </span>
      </h5>
      <h5>All rights reserved</h5>
    </Container>
  )
}

const Container = styled.footer`
  height: 5rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: var(--clr-black);
  text-align: center;
  span {
    color: var(--clr-primary-6);
  }
  h5 {
    color: var(--clr-white);
    margin: 0.1rem;

    font-weight: 400;
    text-transform: none;
    line-height: 1.25;
  }
  button {
    border-radius: var(--radius);
    font-size: 1rem;
    padding: 0.5rem 1rem;
    background: var(--clr-primary-5);
    margin-left: 5px;
  }
  @media (min-width: 776px) {
    flex-direction: row;
  }
`

export default Footer
