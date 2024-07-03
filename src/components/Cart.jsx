import React, { useContext } from 'react';
import { Button, Container, Image, Table } from 'react-bootstrap';
import { CartContext } from '../context/CartContext';

const Cart = () => {
  const { cart, removeFromCart, incrementQTY, decrementQTY, getTotalPrice } = useContext(CartContext);

  return (
    <div>
      <Container>
        <h1>Cart Page</h1>
        {
          cart.length === 0
            ? (<h3>Cart is Empty</h3>)
            : (
              <>
                <Table>                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             
                  <thead>
                    <tr>
                      <th>Product Name</th>
                      <th>Image</th>
                      <th>Price</th>
                      <th>Quantity</th>
                      <th>Total</th>
                      <th>Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {
                      cart.map((item) => (
                        <tr key={item.id}> {/* Added 'key=' to 'tr' element */}
                          <td>{item.title}</td>
                          <td>
                            <Image src={item.image} width={40} height={45} />
                          </td>
                          <td>${item.price.toFixed(2)}</td> {/* Fixed price display */}
                          <td>{item.quantity}</td>
                          <td>${(item.price * item.quantity).toFixed(2)}</td> {/* Fixed total display */}
                          <td>
                            <Button onClick={() => decrementQTY(item.id)} className='mx-1' size='sm' variant='primary'>Decrement</Button>
                            <Button onClick={() => incrementQTY(item.id)} className='mx-1' size='sm' variant='primary'>Increment</Button>
                            <Button onClick={() => removeFromCart(item.id)} className='mx-1' size='sm' variant='primary'>Delete Item</Button>
                          </td>
                        </tr>
                      ))
                    }
                  </tbody>
                </Table>
                <h1 className='my-2'>Total: ${getTotalPrice().toFixed(2)}</h1>
              </>
            )
        }
      </Container>
    </div>
  );
};

export default Cart;
