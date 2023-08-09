import React from 'react';
import { guitar_list } from '../guitars_list';
import styled from "styled-components"

const Axes = () => {
  console.log('Axes component rendering...');
  console.log('guitar_list:', guitar_list);
  return (
    <Wrapper className='section-center'>
    <div>
      {guitar_list.map((guitar) => {
        const { id, brand, description, image, model, price } = guitar;
        return (
          <div key={id}>
            <h3>Brand: {brand}</h3>
            <h3>Model: {model}</h3>
            <h3>Price: {price}</h3>
            <img src={image} alt={model} /> 
            <p>Description: {description}</p>
          </div>
        );
      })}
    </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  min-height: 60vh;
  display: grid;
  place-items: center;

  img {
    height: 200px;
  }

  h3 {
    color: var(--clr-primary-5);
  }
`


export default Axes;
