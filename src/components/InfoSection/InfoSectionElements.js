import styled from 'styled-components';

export const InfoSection = styled.section`
    min-height: 100vh;
    width: 90vw;
    padding: 4rem 0;
`;

export const InfoContainer = styled.div`
    width: 98vw;
    padding: 3rem 0;
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 100vh;
    
    @media screen and (max-width: 720px){
        grid-template-columns: 1fr;
        padding: 3rem 0;
    }
`;

export const InfoColumnLeft = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    line-height: 1.4;
    padding: 1rem 2rem;
    order: ${({ start }) => (start ? '1' : '2')};
`;

export const InfoTitle = styled.h2`
    margin-bottom: 1rem;
    font-size: clamp(1rem, 8vw, 2rem);
`;

export const InfoParag = styled.p`
    margin-bottom: 2rem;
`;

export const InfoColumnRight = styled.div`
    padding: 1rem 2rem;
    order: ${({ start }) => (start ? '2' : '1')};
    display: flex;
    justify-content: center;
    align-items: center;

    @media screen and (max-width: 720px){
        order: ${({ start }) => (start ? '1' : '2')};
    }
`;

export const InfoImg = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;

    @media screen and (max-width: 720px){
        width: 90%;
        height: 90%;
    }

`;