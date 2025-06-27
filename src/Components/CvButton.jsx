import React from 'react';
import styled from 'styled-components';

const CvButton = ({ text, img, extraClasses }) => {
    return (
        <StyledWrapper>
            <button>
                <div className={`svg-wrapper-1 ${extraClasses}`}>
                    <div className="svg-wrapper">
                        <img src={img} alt="" width={20} height={20}/>
                    </div>
                </div>
                <span>{text}</span>
            </button>
        </StyledWrapper>
    );
}

const StyledWrapper = styled.div`
  button {
    font-family: inherit;
    font-size: 20px;
    background: white;
    color: black;
    fill: rgb(155, 153, 153);
    padding: 0.7em;
    padding-left: 0.9em;
    display: flex;
    align-items: center;
    cursor: pointer;
    border: none;
    border-radius: 4px;
  }

  button span {
    display: block;
    margin-left: 0.3em;
    transition: all 0.3s ease-in-out;
  }

  button img {
    display: block;
    transform-origin: center center;
    transition: transform 0.3s ease-in-out;
  }

  button:hover {
    background: white;
  }

  button:hover .svg-wrapper {
    transform: scale(1.25);
    transition: 0.5s linear;
  }

  button:hover img {
    transform: translateX(1.2em) scale(1.1);
    fill: #fff;
  }

  button:hover span {
    opacity: 0;
    transition: 0.5s linear;
  }

  button:active {
    transform: scale(0.95);
  }`;

export default CvButton;
