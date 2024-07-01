import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { Container, Image, Button } from 'react-bootstrap';
import { CartContext } from '../context/CartContext';

const Detail = () => {
    const { id } = useParams();
    const [product, setProduct] = useState(null);
    const { addToCart } = useContext(CartContext);

    useEffect(() => {
        axios.get(`https://fakestoreapi.com/products/${id}`)
            .then(res => setProduct(res.data))
            .catch(error => console.log(error));
    }, [id]);

    if (!product) return <div>Loading.......</div>;

    return (
        <Container>
            <Image src={product.image} rounded className='w-50' />
            <h1>{product.title}</h1>
            <p>{product.description}</p>
            <p>${product.price}</p>
            <Button onClick={() => addToCart(product)} variant="primary">Add to Cart</Button>
        </Container>
    );
}

export default Detail;
