import React from 'react'
import styled from "styled-components"
import { useParams } from 'react-router-dom';
import { guitar_list } from '../guitars_list';
import { Link } from 'react-router-dom';
import AddToCart from '../components/AddToCart';
import { formatPrice } from '../utils/helpers';


const SingleGuitar = () => {
    const {id} = useParams();
console.log("id: ", id)
    const guitar = guitar_list.find((guitar) => guitar.id === id)

  return (
    <Wrapper>
      <div className='section section-center page'>
        <Link to='/axes' className='btn'>
          back to axes
        </Link>
        <div className='guitar-center'>
          <img src={guitar.image} alt={guitar.model} />
          <section className='content'>
            <h2 className='model'>{guitar.model}</h2>
            <h5 className='price'>{formatPrice(guitar.price)}</h5>
            <p className='desc'>{guitar.description}</p>
            <p className='info'>
              <span>Brand :</span>
              {guitar.brand}
            </p>
            <hr />
            <AddToCart guitar={guitar} />
          </section>
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.main`
    
    img {
        width: 80%;
        height: auto;
    }

  .guitar-center {
    display: grid;
    gap: 4rem;
    margin-top: 2rem;
  }
  .model {
    color: var(--clr-primary-7);
  }
  .price {
    color: white;
  }
  .desc {
    line-height: 2;
    max-width: 45em;
    color: var(--clr-primary-8);
  }
  .info {
    text-transform: capitalize;
    width: 300px;
    display: grid;
    grid-template-columns: 125px 1fr;
    color: var(--clr-white);
    span {
      font-weight: 700;
      color: var(--clr-primary-7);
    }
  }

  @media (min-width: 992px) {
    .guitar-center {
      grid-template-columns: 1fr 1fr;
      align-items: center;
    }
    .price {
      font-size: 1.25rem;
    }
  }
`;


export default SingleGuitar