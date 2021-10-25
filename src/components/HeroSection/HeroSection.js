import React, { useState, useRef, useEffect } from 'react';
import * as ELEM from './HeroSectionElements';
import { heroData as data } from '../../data';
import { Button } from '../../GlobalStyle';


const HeroSection = () => {
    const [current, setCurrent] = useState(0);

    const lenght = data.length;
    const timeout = useRef(null);

    const nextSlide = () => {
        if (timeout.current) {
            clearTimeout(timeout.current)
        }
        setCurrent(current === lenght - 1 ? 0 : current + 1);

    }
    const prevSlide = () => {
        if (timeout.current) {
            clearTimeout(timeout.current)
        }
        setCurrent(current === 0 ? lenght - 1 : current - 1);
    }

    useEffect(() => {
        const nextSlide = () => {
            setCurrent(current === lenght - 1 ? 0 : current + 1);
        };

        timeout.current = setTimeout(nextSlide, 5000);

        return function () {
            if (timeout.current) {
                clearTimeout(timeout.current)
            }
        }

    }, [current, lenght])


    return (
        <ELEM.HeroSection>
            <ELEM.HeroWrapper>
                {data.map((data, index) => {
                    return <ELEM.HeroSlide key={index}>
                        {index === current && (
                            <ELEM.HeroSlider>
                                <ELEM.HeroImg src={data.imgSrc} alt={data.alt} />
                                <ELEM.HeroContent>
                                    <ELEM.HeroContentTitle>
                                        {data.title}
                                    </ELEM.HeroContentTitle>
                                    <ELEM.HeroContentPrice>
                                        {data.price}
                                    </ELEM.HeroContentPrice>
                                    <ELEM.HeroContentBtn>
                                        <Button to={data.path}>
                                            {data.btnTxt}
                                            <ELEM.BtnArrow />
                                        </Button>
                                    </ELEM.HeroContentBtn>
                                </ELEM.HeroContent>
                            </ELEM.HeroSlider>
                        )}
                    </ELEM.HeroSlide>
                })}
                <ELEM.SliderBtns>
                    <ELEM.ArrowBackward onClick={prevSlide} />
                    <ELEM.ArrowForward onClick={nextSlide} />
                </ELEM.SliderBtns>
            </ELEM.HeroWrapper>
        </ELEM.HeroSection>
    )
}

export default HeroSection
