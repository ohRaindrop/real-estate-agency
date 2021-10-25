import styled, { createGlobalStyle } from "styled-components";
import { Link } from 'react-router-dom';

const GlobalStyle = createGlobalStyle`
*{
    margin:0;
    padding:0;
    font-family: 'Montserrat', sans-serif;
}

:root{
    --light: #E4D6A7;
    --dark: #1C110A;
    --blue: #2F6690;
    --red:#9E2B25;
    --lightblue: #6CA6C1;
}

`;

export const LinkDefault = styled.div`
   color: var(--dark);
   display: flex;
   align-items: center;
   padding: 0 1rem;
   height: 100%;
   cursor: pointer;

    @media screen and (max-width: 720px){
        padding: 0 0.7rem;
    }
`;

export const ArrowBtnDefault = styled.div`
    width: 100px;
    height: 100px;
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


export const Button = styled(Link)`
  border-radius: 5px;
  text-transform: capitalize;
  color: ${({ primary }) => (primary ? 'var(--blue)' : 'var(--light)')};
  background: ${({ primary }) => (primary ? 'var(--light)' : 'var(--blue)')};
  padding: ${({ big }) => (big ? '1rem 3rem' : '1rem 2rem')};
  font-size: ${({ big }) => (big ? '24px' : '1rem')};
  white-space: no-wrap;
  text-decoration: none;
  cursor: pointer;
  outline:none;
  border: none;

  display:flex;
  justify-content: center;
  align-items: center;

  &:hover{
    transition: ${({ transition }) => (transition ? 'all 0.5s ease-out' : 'none')};
    background: var(--blue);
    background: ${({ primary }) => (primary ? 'var(--lightblue)' : 'var(--blue)')};
    color: ${({ primary }) => (primary ? 'var(--light)' : 'var(--light)')};
    transform: ${({ transition }) => (transition ? 'translateY(-1vh)' : 'none')};
}

@media screen and (max-width: 720px){
    width: 100%;
}
`;

export default GlobalStyle;