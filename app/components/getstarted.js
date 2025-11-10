import React from 'react';
import styled from 'styled-components';

const Button = () => {
  return (
    <StyledWrapper className='joe'>
      <button className="cta">
        <span className="span text-2xl sm:text-3xl">Get started with <span className='underline'>Github</span></span>
        
      </button>
    </StyledWrapper>
  );
}

const StyledWrapper = styled.div`
  .cta {
    display: flex;
    padding: 11px 33px;
    text-decoration: none;
    border-color: black;
    border-width: 1px;
    font-size: 25px;
    color: white;
    background: #4CAF50;
    transition: 0.5s;
    color:black;
    transition: 0.3s;
   box-shadow:
    4px 4px 0px blue,        /* First shadow (main outline) */
    8px 8px 0px red; /* Second shadow (blurred soft shadow) */
  
    transform: skewX(-15deg);
    
    cursor: pointer;
  }

  .cta:focus {
    outline: none;
  }

  .cta:hover {
    transition: 0.3s;
   box-shadow:
    7px 7px 0px blue,        /* First shadow (main outline) */
    13px 13px 0px red; /* Second shadow (blurred soft shadow) */
  }

  .cta .second {
    transition: 0.5s;
    margin-right: 0px;
  }

  .cta:hover .second {
    transition: 0.5s;
    margin-right: 45px;
  }

  .span {
    transform: skewX(15deg);
  }

  .second {
    width: 20px;
    margin-left: 30px;
    position: relative;
    top: 12%;
  }

  .one {
    transition: 0.4s;
    transform: translateX(-60%);
  }

  .two {
    transition: 0.5s;
    transform: translateX(-30%);
  }

  .cta:hover .three {
    animation: color_anim 1s infinite 0.2s;
  }

  .cta:hover .one {
    transform: translateX(0%);
    animation: color_anim 1s infinite 0.6s;
  }

  .cta:hover .two {
    transform: translateX(0%);
    animation: color_anim 1s infinite 0.4s;
  }

  @keyframes color_anim {
    0% {
      fill: white;
    }

    50% {
      fill: #fbc638;
    }

    100% {
      fill: white;
    }
  }`;

export default Button;
