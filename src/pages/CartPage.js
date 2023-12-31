import React from 'react';
import styled from 'styled-components';
import { useCartContext } from '../store/cart_context';
import CartContent from "../components/CartContent";
import { Link } from 'react-router-dom';


const CartPage = () => {
  const { cart } = useCartContext();
  if (cart.length < 1) {
    return (
      <Wrapper className='page-100'>
        <div className='empty'>
          <h2>Your cart is empty</h2>
          <Link to='/axes' className='btn'>
            fill it
          </Link>
        </div>
      </Wrapper>
    );
  }
  return (
    <main>
      {/* <PageHero title='cart' /> */}
      <Wrapper className='page'>
        <CartContent />
      </Wrapper>
    </main>
  );
};

const Wrapper = styled.main`
  .empty {
    text-align: center;
    h2 {
      margin-bottom: 1rem;
      text-transform: none;
      color: var(--clr-primary-9)
    }
  }
`

export default CartPage