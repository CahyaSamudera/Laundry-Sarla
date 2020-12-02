import styled from 'styled-components';

export const ProductsContainer = styled.div`
  width: 100vw;
  min-height: 100vh;
  padding: 5rem calc((100vw - 1300px) / 2);
  background: #cc0e74;
  color: #fff;
`;

export const ProductsWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin: 0 auto;
`;

export const ProductCard = styled.div`
  margin: 0 2rem;
  line-height: 2;
  width: 300px;
`;

export const ProductImg = styled.img`
  height: 300px;
  min-width: 300px;
  max-width: 100%;
  box-shadow: 8px 8px #fdc500;
  transition: all 0.2s ease-in-out;

  &:hover {
    transform: scale(1.05) !important;
    transition: all 0.5s ease-in-out !important;
    cursor: pointer;
  }
`;

export const ProductsHeading = styled.h1`
  font-size: clamp(2rem, 2.5vw, 3rem);
  text-align: center;
  margin-bottom: 5rem;
`;

export const ProductTitle = styled.h2`
  font-weight: 400;
  font-size: 1.5rem;
`;

export const ProductInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 2rem;
  text-align: center;
`;

export const ProductDesc = styled.p`
  margin-bottom: 1rem;
`;
export const ProductPrice = styled.p`
  margin-bottom: 1rem;
  font-size: 1rem;
`;

export const ProductButton = styled.a`
  font-size: 1rem;
  padding: 1rem 4rem;
  border: none;
  background: #ffc500;
  color: #000;
  transition: 0.5s ease-out;

  &:hover {
    text-decoration: none;
    background: #deeppink;
    transition: 0.5s ease-out;
    cursor: pointer;
    color: #fff;
  }
`;
