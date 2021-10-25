import styled from 'styled-components';
import { RiArrowRightSLine, RiArrowLeftCircleLine, RiArrowRightCircleLine } from 'react-icons/ri'

export const HeroSection = styled.section`
    min-height: 100vh;
    position: relative;
    overflow:hidden;
    `;

export const HeroWrapper = styled.div`
    width: 100%;
    height: 100%;
    position: relative;
    display:flex;
    justify-content: center;
    align-items: center;
    overflow:hidden;
    `;

export const HeroSlide = styled.div`
    z-index:1;
    width:100vw;
    height:100vh;
    `;

export const HeroSlider = styled.div`
    position:absolute;
    top: 0;
    left: 0;
    width:100%;
    height: 100%;
    display:flex;
    justify-content: flex-start;
    align-items: center;
    
    &::before{
        content: '';
        position: absolute;
        z-index:2;
        width: 100%;
        height: 100vh;
        bottom: 0vh;
        left:0;
        overflow: hidden;
        opacity: 0.4;
        background: linear-gradient(0deg, rgba(0,0,0,1) 0%, rgba(0,0,0,1) 50%, rgba(0,0,0,0.5) 100%);
    }
    `;

export const HeroImg = styled.img`
    align-self: center;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height:100%;
    object-fit: cover;
    `;

export const HeroContent = styled.div`
    position: relative;
    margin: 3rem;
    z-index: 10;
    display:flex;
    flex-direction: column;
    justify-content: flex-start;
    width: calc(100%-100px);
    max-width: 1600px;
    
    `;

export const HeroContentTitle = styled.h2`
color: var(--light);
    font-size: clamp(1rem, 8vw, 2rem);
    font-weight: 400;
    text-transform: uppercase;
    text-align: left;
    text-shadow: 0px 0px 20px rgba(0,0,0,0.4);
    margin-bottom: 0.8rem;
    `;

export const HeroContentPrice = styled.p`
color: var(--light);
text-shadow: 0px 0px 20px rgba(0,0,0,0.4);
    margin-bottom: 1.2rem;
`;

export const HeroContentBtn = styled.div`
    width: fit-content;
    font-weight: bold;
`;

export const BtnArrow = styled(RiArrowRightSLine)`
    margin-left: 0.5rem;
`;

export const SliderBtns = styled.div`
    position: absolute;
    bottom: 2rem;
    right: 2rem;
    display:flex;
    z-index: 10;
`;


export const ArrowForward = styled(RiArrowRightCircleLine)`
    width: clamp(1rem, 8vw, 2rem);
    height: clamp(1rem, 8vw, 2rem);
    color: var(--light);
    background-color: var(--blue);
    cursor: pointer;
    border-radius: 50%;
    padding: 0.5rem;
    margin-right: 1rem;
    user-select: none;
    transition: 0.3s;

    &:hover{
        background: var(--red);
        transform: scale(1.05);
    }
`;

export const ArrowBackward = styled(RiArrowLeftCircleLine)`
    width: clamp(1rem, 8vw, 2rem);
    height: clamp(1rem, 8vw, 2rem);
    color: var(--light);
    background-color: var(--blue);
    cursor: pointer;
    border-radius: 50%;
    padding: 0.5rem;
    margin-right: 1rem;
    user-select: none;
    transition: 0.3s;

    &:hover{
        background: var(--red);
        transform: scale(1.05);
    }
`;