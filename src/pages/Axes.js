import React from "react";
import { guitar_list } from "../guitars_list";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Axes = () => {
  return (
    <Wrapper className="section-center">
      <div className="guitar-container">
        {guitar_list.map((guitar) => {
          const { id, image, model } = guitar;
          return (
            <div key={id} className="single-guitar container">
              <div>
                  <img src={image} alt={model} />
              </div>
              <div className="overlay">
                <Link to={`/${id}`}>
                  <h2>Info</h2>
                </Link>
              </div>
            </div>
          );
        })}
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  min-height: 60vh;
  height: calc(100vh - 13px);
  display: grid;
  place-items: center;
  background: var(--clr-primary-3);
  width: 100%;

  .guitar-container {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 0.25rem;
    margin-bottom: 8px;
  }

  .single-guitar {
    width: 50%;
    display: flex;
    margin-bottom: 16px;
    margin-top: 8px;
    margin-left: 5rem;
  }
  .links {
    -webkit-filter: brightness(100%);
  }
  .links:hover {
    -webkit-filter: brightness(70%);
    -webkit-transition: all 0.5s ease;
    -moz-transition: all 0.5s ease;
    -o-transition: all 0.5s ease;
    -ms-transition: all 0.5s ease;
    transition: all 0.5s ease;
    
  }
  .container {
    position: relative;
    width: 50%;
  }
  .image {
    display: block;
    width: 100%;
    height: auto;
  }
  .container:hover .overlay {
    opacity: 1;
  }

  .overlay {
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    height: 100%;
    width: 100%;
    opacity: 0;
    transition: 0.5s ease;
    background-color: transparent;
  }

  span {
    color: var(--clr-grey-6);
  }

  img {
    width: 100%;
    border-radius: 0.5rem;
    box-shadow: 3px 3px 5px var(--clr-grey-1);
  }
  .img:hover {
    position: relative;
    top: -5px;
  }

  p,
  h5 {
    color: var(--clr-primary-10);
  }
  h2 {
    color: var(--clr-primary-10);
    font-size: 25px;
    position: absolute;
    top: 50%;
    left: 50%;
    -webkit-transform: translate(-50%, -50%);
    -ms-transform: translate(-50%, -50%);
    transform: translate(-50%, -50%);
    text-align: center;
  }

  @media screen and (min-width: 992px) {
    .guitar-container {
      grid-template-columns: repeat(3, 1fr);
      width: 100%;
      margin: 0.75rem 8px;
    }
  }

  @media screen and (max-width: 992px) {
    .guitar-container {
      grid-template-columns: 1fr;
      width: 70%;
      margin: auto auto;
    }
  }
`;

export default Axes;
