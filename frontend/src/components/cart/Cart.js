import React, { useState, useEffect, useCallback } from 'react';
import CartItem from './CartItem';
import MainHeader from '../main/MainHeader';
import { getRequest, getRequestToken, postRequestToken } from '../../utils/api';
import { useSelector } from 'react-redux';
import { MdPayment } from 'react-icons/md';
import { useNavigate } from 'react-router-dom';

const Cart = (props) => {
  const [cartItem, setCartItem] = useState([]);

  const { cartID } = useSelector((state) => state.cart);
  const { access_token } = useSelector((state) => state.userData);

  const [checkboxValues, setCheckboxValues] = useState({});

  const {payItems} = useSelector(state => state.cartPayment)

  const navigate = useNavigate();

  const handleInputCheck = (id) => {
    setCheckboxValues({
      ...checkboxValues,
      [id]: !checkboxValues[id],
    });
  };

  const handleCheckAll = (e) => {
    if (e.target.checked) {
      console.log('checked');
      const newCheckboxValues = {};
      setCheckboxValues({});
      cartItem.forEach((item) => {
        newCheckboxValues[item.cake_id] = true;
      });
      setCheckboxValues({ ...newCheckboxValues });
    } else {
      cartItem.forEach((item) => {
        setCheckboxValues({});
      });
    }
  };

  const createPreOrder = () => {
    let summary = 0
    let prices = []
    for (let i = 0; i < payItems.length; i++) {
      prices.push(payItems[i].cake_price*payItems[i].cake_quantity)
    }
    let body = {
      orderPrices: JSON.stringify(prices)
    };
    postRequestToken('/createPreOrder', body, access_token).then((res) => {
      console.log(res.data)
      if (res.data.order_id) {
        navigate('/order', { state: { recent_order: res.data.order_id, recent_summary: res.data.order_summary } });
      }
    });
  };

  useEffect(() => {
    getRequestToken(`/getitems?id=${cartID}`, access_token).then((res) => {
      setCartItem([...res.data.cart]);
    });
  }, []);

  return (
    <>
      <div className='bg-[#f2f4f5] h-screen'>
        <MainHeader></MainHeader>
        <div className='mx-20 my-10 font-raleway p-4 rounded-md shadow-lg bg-[#ffffff]'>
          <h2 className='text-[28px] font-[600] text-[#333]'>Cart</h2>
          <div>
            {cartItem.map((item) => {
              return (
                <CartItem
                  key={item.cake_id}
                  data={item}
                  checked={checkboxValues[item.cake_id]}
                  handleCheck={handleInputCheck}></CartItem>
              );
            })}
          </div>
          <div className='flex justify-between items-center p-4'>
            <div>
              <input
                type='checkbox'
                name='all'
                id='all'
                onChange={handleCheckAll}
              />
              <label htmlFor='all' className='font-[600] ml-2 text-[#00FFAB]'>
                Select All
              </label>
            </div>
            <button
              className='flex justify-end items-center gap-1 mt-3 font-[600] text-[24px] text-[#00FFAB]'
              onClick={() => {
                createPreOrder();
              }}>
              <p>Pay</p>
              <p>
                <MdPayment size={25}></MdPayment>
              </p>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Cart;
