import { FormContainer, ProductsH2, ProductsSection } from './styles';
import Product from "./Product";
import React, { useState } from 'react';
import card01 from "../../assets/card01.jpg";
import card02 from "../../assets/card02.jpg";
import card03 from "../../assets/card03.jpg";
import card04 from "../../assets/card04.jpg";
import card05 from "../../assets/card05.png";
import card06 from "../../assets/card06.png";
import card07 from "../../assets/card07.jpg";
import card08 from "../../assets/card08.jpg";

const AddTaskForm = () => {
    return(
        <>
        <ProductsH2>･ CARTAS DISPONIBLES ･</ProductsH2>
        <FormContainer>
            <ProductsSection>
            <Product name="Owlbear Cub" description="$80" image={card01} />
            <Product name="Last Chance" description="$160" image={card02} />
            <Product name="Ancient Grudge" description="$250" image={card03} />
            <Product name="Pantlaza, Sun-Favored" description="$80" image={card04} />
            <Product name="Baleful Strix" description="$140" image={card05} />
            <Product name="Mirri, Weatherlight Duelist" description="$700" image={card06} />
            <Product name="Sol Ring" description="$50" image={card07} />
            <Product name="Headless Rider" description="$100" image={card08} />
            </ProductsSection>
        </FormContainer>
        </>
    )
}

export default AddTaskForm;