import React, { useState, useEffect } from 'react';
import MainHeader from '../main/MainHeader';
import { useSelector } from 'react-redux';
import codImg from '../../assets/cod.png';
import paypalImg from '../../assets/paypal.png';
import momoImg from '../../assets/momo.jpg';
import { getCity, getCityByCode, postRequestToken } from '../../utils/api';
import { useLocation } from 'react-router-dom';

function Order(props) {
  const { user } = useSelector((state) => state.userData);

  const {access_token} = useSelector(state => state.userData)

  const { state } = useLocation();
  let { recent_order, recent_summary } = state;
  const { payItems } = useSelector((state) => state.cartPayment);
  const [useAddress, setUseAddress] = useState(false);

  const [cities, setCity] = useState([]);
  const [districts, setDistrict] = useState([]);
  const [wards, setWard] = useState([]);

  const [orderCity, setOrderCity] = useState('');
  const [orderDistrict, setOrderDistrict] = useState('');
  const [orderWard, setOrderWard] = useState('');
  const [orderAddress, setOrderAddress] = useState('');
  const [paymentMethod, setPaymentMethod] = useState('');

  const getDistrict = (e) => {
    if (e.target.value !== 0) {
      getCityByCode(e.target.value).then((res) => {
        setDistrict([...res.data.districts]);
      });
    } else {
      setDistrict([]);
      setWard([]);
    }
  };

  const getWard = (code) => {
    if (code !== 0) {
      let district = districts.find((el) => el.code === Number(code));
      setWard([...district.wards]);
    } else {
      setWard([]);
    }
  };

  const getFullOrderAddress = () => {
    let city = cities.find((el) => el.code === Number(orderCity));
    let district = districts.find((el) => el.code === Number(orderDistrict));
    let ward = wards.find((el) => el.code === Number(orderWard));
    return (
      orderAddress + ', ' + ward.name + ', ' + district.name + ', ' + city.name
    );
  };

  const readyToPay = () => {
    let fullAddress = getFullOrderAddress();
    let body = {
      order_id: recent_order,
      order_summary: recent_summary,
      user_id: user.user_id,
      order_address: fullAddress,
      order_payment: paymentMethod,
      order_detail: JSON.stringify(payItems)
    };
    postRequestToken('/createOrder', body, access_token).then(res => console.log(res));
  };

  useEffect(() => {
    document.title = 'Fkm Bakery | Order';
    getCity().then((res) => {
      setCity([...res.data]);
    });

    return () => {};
  }, []);

  return (
    <>
      <MainHeader></MainHeader>
      <div className='flex mx-20 my-10 gap-5 font-raleway'>
        <div className='flex-[2]'>
          <div className='border-[1px] rounded-md p-4 mb-5'>
            <h1 className='font-[600] text-[24px]'>Review Yours Order</h1>
            <h1 className='font-[600] text-[12px] mt-1'>
              ID: <span className='font-sans'>{recent_order}</span>
            </h1>
            <div>
              {payItems.map((item) => {
                return (
                  <div
                    key={item.cake_id}
                    className='flex justify-between font-sans font-[600] my-2'>
                    <div className='flex'>
                      <p className='w-[200px]'>{item.cake_name}</p>
                      <p className=''>x {item.cake_quantity}</p>
                    </div>
                    <p>
                      {Number(item.cake_price) * Number(item.cake_quantity)} $
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
          <div className='border-[1px] rounded-md p-4'>
            <div className='flex justify-between items-center'>
              <h1 className='font-[600] text-[24px]'>Delivery Infomation</h1>
              <button className='py-1 px-6 font-[600] rounded-2xl bg-[#ebedec]'>
                Edit Infomation
              </button>
            </div>
            <div className='mt-3 text-[16px]'>
              <div className='my-3 flex'>
                <p className='font-[600] w-[100px]'>Name: </p>
                <p className='font-sans text-[#666] w-[300px]'>
                  {user.user_fullname}
                </p>
              </div>
              <div className='my-3 flex'>
                <p className='font-[600] w-[100px]'>City: </p>
                <select
                  onChange={(e) => {
                    getDistrict(e);
                    setOrderCity(e.target.value);
                  }}
                  name='city'
                  id='city'
                  disabled={useAddress}
                  className='py-1 px-5 border-[1px] rounded-2xl text-[14px] text-[#666] text-center w-[300px] focus:outline-none'>
                  <option value='0' selected className=''>
                    --------- City ---------
                  </option>
                  {cities.map((item) => {
                    return (
                      <option key={item.code} value={item.code}>
                        {item.name}
                      </option>
                    );
                  })}
                </select>
              </div>
              <div className='my-3 flex'>
                <p className='font-[600] w-[100px]'>District: </p>
                <select
                  onChange={(e) => {
                    getWard(e.target.value);
                    setOrderDistrict(e.target.value);
                  }}
                  name='district'
                  id='district'
                  disabled={
                    !useAddress && districts.length !== 0 ? false : true
                  }
                  className='py-1 px-5 border-[1px] rounded-2xl text-[14px] text-[#666] text-center w-[300px] focus:outline-none'>
                  <option value='0' selected>
                    --------- District ---------
                  </option>
                  {districts.length === 0 ? (
                    <></>
                  ) : (
                    districts.map((item) => {
                      return (
                        <option key={item.code} value={item.code}>
                          {item.name}
                        </option>
                      );
                    })
                  )}
                </select>
              </div>
              <div className='my-3 flex'>
                <p className='font-[600] w-[100px]'>Ward: </p>
                <select
                  onChange={(e) => setOrderWard(e.target.value)}
                  name='ward'
                  id='ward'
                  disabled={!useAddress && wards.length !== 0 ? false : true}
                  className='py-1 px-5 border-[1px] rounded-2xl text-[14px] text-[#666] text-center w-[300px] focus:outline-none'>
                  <option value='0' selected className=''>
                    --------- Ward ---------
                  </option>
                  {wards.length === 0 ? (
                    <></>
                  ) : (
                    wards.map((item) => {
                      return (
                        <option value={item.code} key={item.code}>
                          {item.name}
                        </option>
                      );
                    })
                  )}
                </select>
              </div>
              <div className='my-3 flex'>
                <p className='font-[600] w-[100px]'>Address: </p>
                <input
                  onChange={(e) => setOrderAddress(e.target.value)}
                  className='w-[300px] focus:outline-none text-[14px] border-[1px] rounded-sm px-4'
                  type='text'
                  name='address'
                  id='address'
                  disabled={!useAddress && wards.length !== 0 ? false : true}
                />
              </div>
              <div className='my-3 flex items-center'>
                <input
                  type='checkbox'
                  name='instead'
                  id='instead'
                  onChange={() => {
                    setUseAddress(!useAddress);
                  }}
                />
                <label htmlFor='instead' className='ml-2 text-[#666]'>
                  use your address instead
                </label>
              </div>
              <div className='my-3 flex'>
                <p className='font-[600] w-[100px]'>Mobile: </p>
                <p className='font-sans text-[#666] w-[300px]'>
                  {user.user_telephone}
                </p>
              </div>
              <div className='my-3 flex'>
                <p className='font-[600] w-[100px]'>Email: </p>
                <p className='font-sans text-[#666] w-[300px]'>
                  {user.user_email}
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className='flex flex-col flex-1 border-[1px] rounded-md p-4 mb-5'>
          <h1 className='font-[600] text-[24px] border-b-[1px] pb-2'>
            Order Summary: <span className='font-sans'>{recent_summary}$</span>
          </h1>
          <h1 className='font-[600] text-[18px] border-b-[1px] py-2'>
            Payment Methods
          </h1>
          <div className='flex flex-col my-2 border-b-[1px]'>
            <div className='my-2'>
              <input
                onChange={(e) => setPaymentMethod(e.target.value)}
                type='radio'
                className='mr-2'
                name='payment_method'
                id='paypal'
                value='paypal'
              />
              <label htmlFor='paypal'>Paypal</label>
            </div>
            <div className='my-2'>
              <input
                onChange={(e) => setPaymentMethod(e.target.value)}
                type='radio'
                className='mr-2'
                name='payment_method'
                id='momo'
                value='momo'
              />
              <label htmlFor='momo'>Momo</label>
            </div>
            <div className='my-2'>
              <input
                onChange={(e) => setPaymentMethod(e.target.value)}
                type='radio'
                className='mr-2'
                name='payment_method'
                id='cash'
                value='cash'
              />
              <label htmlFor='cash'>Cash on Delivery</label>
            </div>
          </div>
          <div className='flex gap-2'>
            <img
              src={momoImg}
              className='w-[50px] aspect-[1/1] object-fit'
              alt=''
            />
            <img
              src={paypalImg}
              className='w-[50px] aspect-[1/1] object-fit'
              alt=''
            />
            <img
              src={codImg}
              className='w-[50px] aspect-[1/1] object-fit'
              alt=''
            />
          </div>
          <button
            onClick={readyToPay}
            className='mt-auto text-center p-2 bg-[#03C988] rounded-md text-white font-[600] hover:bg-[#1F8A70]'>
            Order
          </button>
        </div>
      </div>
    </>
  );
}

export default Order;
