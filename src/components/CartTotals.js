import React from 'react'
import styled from 'styled-components'
import { formatPrice } from '../utils/helpers'
import { useCartContext } from '../store/cart_context'
import { useUserContext } from '../store/user_context'
import { Link } from 'react-router-dom'
const CartTotals = () => {
  const { total_amount, shipping_fee } = useCartContext()
  const { myUser, loginWithRedirect } = useUserContext()

  return (
    <Wrapper>
      <div>
        <article>
          <h5 className='total'>
          subtotal :<span>{formatPrice(total_amount)}</span>
          </h5>
          <p className='shipping-fee'>
          shipping fee :<span>{formatPrice(shipping_fee)}</span>
          </p>
          <hr />
          <h4 className='total'>
          order total :<span>{formatPrice(total_amount + shipping_fee)}</span>
          </h4>
        </article>
        {myUser ? (
          <Link to='/checkout' className='btn'>
            proceed to checkout
          </Link>
        ) : (
          <button onClick={loginWithRedirect} className='btn'>
            login
          </button>
        )}
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.section`
  margin-top: 3rem;
  display: flex;
  justify-content: center;
  article {
    border: 1px solid var(--clr-grey-8);
    border-radius: var(--radius);
    padding: 1.5rem 3rem;
  }
  h4,
  h5,
  p {
    display: grid;
    grid-template-columns: 200px 1fr;
  }
  p {
    text-transform: capitalize;
  }
  h4 {
    margin-top: 2rem;
  }
  @media (min-width: 776px) {
    justify-content: flex-end;
  }
  .btn {
    width: 100%;
    margin-top: 1rem;
    text-align: center;
    font-weight: 700;
  }
  .total {
    color: var(--clr-primary-9);
  }
  .shipping-fee {
    color: var(--clr-grey-6);
  }
`

export default CartTotals
