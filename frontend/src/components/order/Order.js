import React, { useState, useEffect } from 'react';
import codImg from '../../assets/cod.png'
import paypalImg from '../../assets/paypal.png'
import momoImg from '../../assets/momo.jpg'

function Order(props) {


  
  useEffect(() => {
    return () => {};
  }, []);

  return (
    <>
      <div className='flex mx-20 my-10 gap-5 font-raleway'>
        <div className='flex-[2]'>
          <div className='border-[1px] p-4 mb-5'>
            <h1 className='font-[600] text-[24px]'>Review Items</h1>
            <div></div>
          </div>
          <div className='border-[1px] p-4'>
            <h1 className='font-[600] text-[24px]'>Delivery Infomation</h1>
            <div></div>
          </div>
        </div>
        <div className='flex-1 border-[1px] p-4 mb-5'>
          <h1 className='font-[600] text-[24px] border-b-[1px] pb-2'>
            Order Summary: <span className='font-sans'>155555</span>
          </h1>
          <h1 className='font-[600] text-[18px] border-b-[1px] py-2'>
            Payment Methods
          </h1>
          <div className='flex flex-col my-2 border-b-[1px]'>
            <div className='my-2'>
              <input type="radio" className='mr-2' name="payment_method" id="paypal" />
              <label htmlFor="paypal">Paypal</label>
            </div>
            <div className='my-2'>
              <input type="radio" className='mr-2' name="payment_method" id="momo" />
              <label htmlFor="momo">Momo</label>
            </div>
            <div className='my-2'>
              <input type="radio" className='mr-2' name="payment_method" id="cash" />
              <label htmlFor="cash">Cash on Delivery</label>
            </div>
          </div>
          <div className='flex gap-2'>
            <img src={momoImg} className='w-[50px] aspect-[1/1] object-fit' alt="" />
            <img src={paypalImg} className='w-[50px] aspect-[1/1] object-fit' alt="" />
            <img src={codImg} className='w-[50px] aspect-[1/1] object-fit' alt="" />
          </div>
        </div>
      </div>
    </>
  );
}

export default Order;
