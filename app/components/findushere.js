import React from 'react';
import styled from 'styled-components';

const Button = () => {
  return (
    <StyledWrapper>
      <div className="main">
        <div className="up">
          <a href='https://www.linkedin.com/company/celtrixio/' className="card card1">
            <svg viewBox="0 0 24 24" fill="#0072b1" className="h-8 w-8 text-white" xmlns="http://www.w3.org/2000/svg">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
              </svg>
          </a>
          <a href='https://discord.gg/GkDcAErQbD' className="card card2">
            <svg viewBox="-2 -1 19 20 " fill="white" className="twitter h-12 w-12 items-center justify-center" xmlns="http://www.w3.org/2000/svg" > <path d="M13.545 2.907a13.227 13.227 0 0 0-3.257-1.011.05.05 0 0 0-.052.025c-.141.25-.297.577-.406.833a12.19 12.19 0 0 0-3.658 0 8.258 8.258 0 0 0-.412-.833.051.051 0 0 0-.052-.025c-1.125.194-2.22.534-3.257 1.011a.041.041 0 0 0-.021.018C.356 6.024-.213 9.047.066 12.032c.001.014.01.028.021.037a13.276 13.276 0 0 0 3.995 2.02.05.05 0 0 0 .056-.019c.308-.42.582-.863.818-1.329a.05.05 0 0 0-.01-.059.051.051 0 0 0-.018-.011 8.875 8.875 0 0 1-1.248-.595.05.05 0 0 1-.02-.066.051.051 0 0 1 .015-.019c.084-.063.168-.129.248-.195a.05.05 0 0 1 .051-.007c2.619 1.196 5.454 1.196 8.041 0a.052.052 0 0 1 .053.007c.08.066.164.132.248.195a.051.051 0 0 1-.004.085 8.254 8.254 0 0 1-1.249.594.05.05 0 0 0-.03.03.052.052 0 0 0 .003.041c.24.465.515.909.817 1.329a.05.05 0 0 0 .056.019 13.235 13.235 0 0 0 4.001-2.02.049.049 0 0 0 .021-.037c.334-3.451-.559-6.449-2.366-9.106a.034.034 0 0 0-.02-.019Zm-8.198 7.307c-.789 0-1.438-.724-1.438-1.612 0-.889.637-1.613 1.438-1.613.807 0 1.45.73 1.438 1.613 0 .888-.637 1.612-1.438 1.612Zm5.316 0c-.788 0-1.438-.724-1.438-1.612 0-.889.637-1.613 1.438-1.613.807 0 1.451.73 1.438 1.613 0 .888-.631 1.612-1.438 1.612Z" /> </svg>         
          </a>
       </div>
        <div className="down">
          <a href='https://github.com/celtrix-os/Celtrix' className="card card3">
            <svg className="github" height="38px" width="38px" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
            </svg>
          </a>
          <a href='mailto:celtrix.org@gmail.com' className="card card4">
           <svg height={32} width={32} viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
              <path d="M28 5H4c-1.104 0-2 .896-2 2v18c0 1.104.896 2 2 2h24c1.104 0 2-.896 2-2V7c0-1.104-.896-2-2-2zm0 4.879L16 18 4 9.879V7l12 8 12-8v2.879zM4 23V11.885l11.446 7.63c.269.18.594.274.921.274s.652-.094.92-.274L28 11.885V23H4z" fill="#FF7F7F" />
            </svg>
          </a>
        </div>
      </div>
    </StyledWrapper>
  );
}

const StyledWrapper = styled.div`
  .main {
    display: flex;
    flex-direction: column;
    gap: 0.75em;
  }

  .up,
  .down {
    display: flex;
    flex-direction: row;
    gap: 0.75em;
  }

  .card {
    width: 90px;
    height: 90px;
    background: white;
    border-radius: 5px;

    border: 3px solid #2d2d2d;
    box-shadow: 6px 6px 0px #2d2d2d;

    transition: all 0.2s cubic-bezier(0.68, -0.55, 0.27, 1.55);

    display: flex;
    align-items: center;
    justify-content: center;
  }

  .card1 {
    border-radius: 90px 5px 5px 5px;
    padding-top: 12px;
    padding-left: 12px;
  }

  .card2 {
    border-radius: 5px 90px 5px 5px;
    padding-top: 12px;
    padding-right: 12px;
  }

  .card3 {
    border-radius: 5px 5px 5px 90px;
    padding-bottom: 10px;
    padding-left: 12px;
  }

  .card4 {
    border-radius: 5px 5px 90px 5px;
    padding-bottom: 12px;
    padding-right: 12px;
  }

  .instagram,
  .twitter,
  .github,
  .discord {
    transition: fill 0.2s ease-in-out;
  }

  .instagram {
    fill: #0072b1;
  }
  .twitter {
    fill: #7289da;
  }
  .github {
    fill: #333;
  }
  .whatsapp {
    fill: black;
  }

  .card:hover {
    cursor: pointer;
    transform: translate(-6px, -6px);
    box-shadow: 12px 12px 0px #2d2d2d;
  }

  .card1:hover {
    background-color: #0072b1;
  }
  .card2:hover {
    background-color: #7289da;
  }
  .card3:hover {
    background-color: #363737;
  }
  .card4:hover {
    background-color: #FF7F7F;
  }

  .card:hover svg path{
    fill: white;
  }`;

export default Button;
