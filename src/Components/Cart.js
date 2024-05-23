import React, { useState } from 'react';
import '../Stylesheets/Cart.css';


const Cart = () => {
    const [termsChecked, setTermsChecked] = useState(false);

    const handleTermsChange = () => {
        setTermsChecked(!termsChecked);
    };

    const items = JSON.parse(localStorage.getItem('product'));
    const uniqueItems = Array.from(new Set(items.map((a) => a.id))).map((id) => {
        let count = items.filter((a) => a.id === id).length;
        let item = items.find((a) => a.id === id);
        let price = item.price.replace('$', '');
        let total = price * count;
        return { ...item, count: count, total: total };
    });
    console.log(uniqueItems);

    const removeItem = (id) => () => {
        const newItems = items.filter((item) => item.id !== id);
        localStorage.setItem('product', JSON.stringify(newItems));
        window.location.reload();
    } 

    return (
        <div className="container" style={{padding: '8% 0'}}>
            <div className="row mt-5">
                <div className="col-md-12">
                    <h2>Your Cart</h2>
                </div>
            </div>
            <div class="row mt-0">
                <div class="col-md-12">
                <table class="table">
                    <thead>
                    <tr>
                        <th scope="col">Product</th>
                        <th scope="col">Quantity</th>
                        <th scope="col">Total</th>
                    </tr>
                    </thead>
                    <tbody>
                        {items.length === 0 && 
                            <tr> 
                                <td colspan= '3' style={{textAlign: 'center', fontSize: '0.9rem'}}>Cart is empty</td>
                            </tr>
                        }
                        {uniqueItems.map((item) => (
                            <tr>
                                <td style={{display: 'flex', alignItems: 'center'}}>
                                <img
                                    src={item.image}
                                    alt="t-shirt"
                                    className='cart-img'
                                />
                                <ul style={{listStyle: 'none'}}>
                                    <li style={{fontWeight: 'bold', textTransform: 'uppercase'}}>{item.title}</li>
                                    <li style={{fontWeight: 'bold', fontSize: '0.7rem'}}>SIZE: MEDIUM</li>
                                    <li 
                                        style={{
                                            fontWeight: 'bold', 
                                            fontSize: '0.6rem', 
                                            color: 'red', 
                                            cursor: 'pointer'
                                        }}
                                        onClick={removeItem(item.id)}
                                    >REMOVE</li>
                                </ul>
                                
                                </td>
                                <td>
                                <input
                                    type="number"
                                    className="qty-input mt-4"
                                    aria-label="Quantity"
                                    defaultValue={item.count}
                                    id={item.id}
                                    name={item.id}
                                    min='1'
                                    max='10'
                                    style={{
                                        width: '75px',
                                        textAlign: 'center',
                                        borderRadius: '25px',
                                        border: '1px solid #ced4da',
                                        padding: '5px 10px',
                                    }}
                                />
                                </td>
                                <td>
                                    <h5 className="mt-4" style={{fontSize: '1rem'}}>
                                        {item.total.toFixed(2)}
                                    </h5>
                                </td>
                            </tr>
                        ))}

                    </tbody>
                </table>
                </div>
            </div>
            <div className="row mt-4">
                <div className="col-md-6">
                <a href="/" className="btn btn-outline-dark checkout-btn fw-bolder"
                    >Continue Shopping</a>
                </div>
            </div>
            <div className="row mt-5">
                <div className="col-md-6 d-flex">
                    <div className="form-check form-switch">
                        <input
                            className="form-check-input"
                            type="checkbox"
                            id="termsCheckbox"
                            checked={termsChecked}
                            onChange={handleTermsChange}
                        />
                        <label className="form-check-label" htmlFor="termsCheckbox">
                            I agree with the terms and conditions
                        </label>
                    </div>
                </div>
            </div>

            <div className="mt-3">
                <button
                    type="submit"
                    className="btn btn-dark fw-bolder checkout-btn"
                    disabled={!termsChecked}
                    style={{fontWeight: 'lighter'}}
                    >
                    PROCEED TO CHECKOUT
                </button>
            </div>
        </div>
    );
    };

export default Cart;