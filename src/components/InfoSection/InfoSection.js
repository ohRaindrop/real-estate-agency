import React from 'react';
import * as ELEM from './InfoSectionElements';
import { Button } from '../../GlobalStyle';
import { infoData as data } from '../../data';

const InfoSections = () => {
    return (
        <ELEM.InfoSection>
            {data.map((data, index) => {
                return <ELEM.InfoContainer>
                    <ELEM.InfoColumnLeft start={data.start}>
                        <ELEM.InfoTitle>
                            {data.title}
                        </ELEM.InfoTitle>
                        {data.parag.map((data, index) => {
                            return <ELEM.InfoParag>
                                {data}
                            </ELEM.InfoParag>
                        })}
                        <Button to=''>
                            {data.btnTxt}
                        </Button>
                    </ELEM.InfoColumnLeft>
                    <ELEM.InfoColumnRight start={data.start}>
                        <ELEM.InfoImg src={data.imgSrc} alt={data.alt} />
                    </ELEM.InfoColumnRight>
                </ELEM.InfoContainer>

            })}

        </ELEM.InfoSection>
    )
}

export default InfoSections
