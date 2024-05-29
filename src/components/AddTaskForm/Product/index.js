import { ProductImg, ProductArticle, ProductH3, ProductP, ProductButton } from "./styles";
import { addTask } from "../../../actions";
import { useDispatch } from "react-redux";

const Product = ({ name, description, image }) => {

const dispatch = useDispatch();

const handleAddTask = () => {
  dispatch(addTask(name, description));
};

    return(
        <>
            <ProductArticle>
                <ProductImg src={image} />
                <ProductH3>{name}</ProductH3>
                <ProductP>{description}</ProductP>
                <ProductButton type="submit" onClick={handleAddTask({name}, {description})}>
                     Añadir Al Carrito </ProductButton>
            </ProductArticle>
        </>
    )
}

export default Product;
