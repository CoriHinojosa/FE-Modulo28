import styled from 'styled-components';

const ProductImg = styled.img`
width: 300px;
border-radius: 15px;
`;

const ProductArticle = styled.article`
display: flex;
flex-direction: column;
align-items: center;
`;

const ProductH3 = styled.h3`
font-size: 22px;
margin-bottom: 0px;
`;

const ProductP = styled.p`
font-size: 20px;
`;

const ProductButton = styled.button`
width: 250px;
height: 40px;
font-size: 16px;
font-weight: 600;
border-style: solid;
border-radius: 10px;
margin-bottom: 30px;
cursor: pointer;
`;

export { ProductImg, ProductArticle, ProductH3, ProductP, ProductButton };
