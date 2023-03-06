import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { storeCartID, failFetch } from '../redux/CartIDSlice';
import { getRequest, getRequestToken } from '../../utils/api';
import MainHeader from './MainHeader';
import Item from './Item';
import { MdFilterList } from 'react-icons/md';

function MainPage(props) {
  const [prods, setProds] = useState([]);

  const currentUser = useSelector(state => state.userData.user.user_id)
  const { access_token } = useSelector(state => state.userData)
  const dispatch = useDispatch()
  useEffect(() => {
    getRequestToken(`/getcart?id=${currentUser}`, access_token).then(res => {
      if (res.data.message === 'success') {
        dispatch(storeCartID(res.data))
      }
    })
    getRequest('/products?page=1&limit=8').then((res) =>
      setProds(res.data.cake)
    );
  }, []);

  return (
    <>
      <MainHeader></MainHeader>
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
            return <Item key={item.cake_id} props={item}></Item>;
          })}
        </div>
      </main>
    </>
  );
}

export default MainPage;
