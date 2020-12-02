import React, { useEffect } from 'react';
import Aos from 'aos';
import 'aos/dist/aos.css';
import {
  ProductsContainer,
  ProductsWrapper,
  ProductsHeading,
  ProductTitle,
  ProductCard,
  ProductImg,
  ProductInfo,
  ProductDesc,
  ProductPrice,
  ProductButton,
} from './ProductsElements';

const Products = ({ heading, data }) => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  return (
    <ProductsContainer>
      <ProductsHeading data-aos='fade-down'>{heading}</ProductsHeading>
      <ProductsWrapper>
        {data.map((product, index) => {
          return (
            <ProductCard key={index} id={product.id}>
              <ProductImg
                src={product.img}
                alt={product.alt}
                data-aos='fade-up'
              />
              <ProductInfo>
                <ProductTitle data-aos='fade-up'>{product.name}</ProductTitle>
                <ProductDesc data-aos='fade-up'>{product.desc}</ProductDesc>
                <ProductPrice data-aos='fade-up'>{product.price}</ProductPrice>
                <ProductPrice data-aos='fade-up'>{product.price2}</ProductPrice>
                <ProductPrice data-aos='fade-up'>{product.price3}</ProductPrice>
                <ProductButton
                  href='https://wa.me/6289688589354'
                  target='_blank'
                  rel='noopener noreferrer'
                  data-aos='fade-up'
                >
                  {product.button}
                </ProductButton>
              </ProductInfo>
            </ProductCard>
          );
        })}
      </ProductsWrapper>
    </ProductsContainer>
  );
};

export default Products;
