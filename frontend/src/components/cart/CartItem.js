import React, { useEffect, useRef } from 'react';
import { NumericInput } from '../others/NumericInput';
import { TiDeleteOutline } from 'react-icons/ti';
import { useDispatch } from 'react-redux';
import { storePayItems, removePayItems } from '../redux/CartPayment';

const CartItem = (props) => {
  const data = { ...props.data };

  const inputRef = useRef();

  const dispatch = useDispatch();

  let ifPayData = {
    cake_id: data.cake_id,
    cake_name: data.cake_name,
    cake_price: data.cake_price,
  };

  useEffect(() => {
    ifPayData = {
      ...ifPayData,
      cake_quantity: inputRef.current.value,
    };
    if (props.checked) {
      dispatch(storePayItems(ifPayData));
    } else {
      dispatch(removePayItems(ifPayData));
    }
    return () => {};
  }, [props.checked]);

  return (
    <>
      <div className='p-4 flex border-b-[1px]'>
        <input
          type='checkbox'
          name=''
          id=''
          className='mr-5'
          checked={props.checked}
          onClick={(e) => {
            props.handleCheck(data.cake_id);
            ifPayData = {
              ...ifPayData,
              cake_quantity: inputRef.current.value,
            };
            if (e.target.checked) {
              dispatch(storePayItems(ifPayData));
            } else {
              dispatch(removePayItems(ifPayData));
            }
          }}
        />
        <img
          src={data.cake_img}
          alt='cake'
          className='w-[100px] aspect-[1/1] rounded-xl object-cover'
        />
        <div
          className='flex flex-col gap-1 text-[20px] font-sans font-[600] w-[350px] ml-3
        '>
          <p className=''>{data.cake_name}</p>
          <p className='text-[16px]'>{data.cake_price}$</p>
        </div>
        <NumericInput
          ref={inputRef}
          style='px-5 py-2 my-6'
          inputStyle='my-6'
          value={data.cake_quantity}></NumericInput>
        <button className='flex justify-end items-center ml-auto'>
          <TiDeleteOutline color='#FF0032' size={25}></TiDeleteOutline>
        </button>
      </div>
    </>
  );
};

export default CartItem;
