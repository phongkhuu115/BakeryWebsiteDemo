import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { storeCartID, failFetch } from '../redux/CartIDSlice';
import { getRequest, getRequestToken, postRequestToken } from '../../utils/api';
import MainHeader from './MainHeader';
import Item from './Item';
import { MdFilterList } from 'react-icons/md';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function MainPage(props) {
  const [prods, setProds] = useState([]);

  const currentUser = useSelector((state) => state.userData.user.user_id);
  const { access_token } = useSelector((state) => state.userData);
  const { cartItem } = useSelector((state) => state.cartAdd);
  const { cartID } = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  useEffect(() => {
    getRequestToken(`/getcart?id=${currentUser}`, access_token).then((res) => {
      if (res.data.message === 'success') {
        dispatch(storeCartID(res.data));
      }
    });
    getRequest('/products?page=1&limit=8').then((res) =>
      setProds(res.data.cake)
    );
  }, []);

  function add_to_cart(id, name) {
    let body = {
      Cart_ID: cartID,
      Cake_ID: id,
      Cake_Quantity: 1,
    };
    postRequestToken('/addtocart', body, access_token).then((res) => {
      if (res.status === 200) {
        toast.success(`${name} added to cart`, {
          position: 'top-right',
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: 'colored',
        });
      }
    });
  }

  return (
    <>
      <MainHeader></MainHeader>
      <ToastContainer></ToastContainer>
      <div className='font-dancing-script my-10'>
        <p className='text-center text-[36px]'>Bakery</p>
        <p className='text-center text-[24px]'>Find your special cake</p>
      </div>
      <main className='m-5'>
        <div className='flex gap-x-4 mb-5 font-[600]'>
          <select
            className='py-1 px-3 rounded-3xl bg-[#eee] '
            name='fill_cate'
            id='fill_cate'>
            <option value='' selected disabled hidden>
              Categories
            </option>
          </select>
          <select
            className='py-1 px-3 rounded-3xl bg-[#eee] '
            name='fill_color'
            id='fill_color'>
            <option value='' selected disabled hidden>
              Color
            </option>
          </select>
          <select
            className='py-1 px-3 rounded-3xl bg-[#eee] '
            name='fill_weight'
            id='fill_weight'>
            <option value='' selected disabled hidden>
              Weight
            </option>
          </select>
          <select
            className='py-1 px-3 rounded-3xl bg-[#eee] '
            name='fill_cream'
            id='fill_cream'>
            <option value='' selected disabled hidden>
              Cream
            </option>
          </select>
          <div className='py-1 px-3 rounded-3xl bg-[#eee] flex items-center'>
            Reset Filters
            <MdFilterList className='ml-2'></MdFilterList>
          </div>
        </div>
        <div className='grid grid-cols-4 gap-4'>
          {prods.map((item) => {
            return <Item key={item.cake_id} data={item} add={add_to_cart}></Item>;
          })}
        </div>
      </main>
    </>
  );
}

export default MainPage;
