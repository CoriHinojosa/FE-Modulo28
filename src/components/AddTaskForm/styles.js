import styled from "styled-components";

const FormContainer = styled.article`
display: flex;
margin-bottom: 25px;
`;

const Input = styled.input`
flex-grow: 1;
padding: 10px;
box-sizing: border-box;
border: none;
border-radius: 5px;
`;

const Button = styled.button`
padding: 10px;
box-sizing: border-box;
background-color: beige;
border: none;
border-radius: 7px;
cursor: pointer;
`;

const ProductsH2 = styled.h2`
text-align: center;
font-size: 30px;
padding-bottom: 30px;
`;

const ProductsSection = styled.section`
display: flex;
flex-wrap: wrap;
justify-content: center;
gap: 15px;
`;

export { FormContainer, Input, Button, ProductsH2, ProductsSection };
