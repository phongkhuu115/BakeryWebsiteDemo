import React, { useState, useEffect } from 'react';
import logo from '../../assets/logo.png';
import { FaSearch, FaShoppingCart, FaUser } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { getRequest } from '../../utils/api';
import { useSelector } from 'react-redux';

function MainHeader(props) {
  const [categories, setCategories] = useState([]);

  const { user } = useSelector((state) => state.userData);

  useEffect(() => {
    getRequest('/category').then((res) => {
      setCategories(res.data);
    });
  }, []);

  return (
    <>
      <header className='flex justify-around items-center font-raleway shadow-lg py-2 bg-white'>
        <div className='flex items-center'>
          <img src={logo} alt='' className='w-[80px] mr-2' />
          <p className='font-dancing-script text-[20px] font-[700]'>
            Fkm <span className='text-pink-400'>Bakery</span>
          </p>
        </div>
        <ul className='flex font-raleway font-[600]'>
          <li className='mx-6'>
            <select name='category' id='category'>
              <option value='' selected disabled hidden>
                Categories
              </option>
              {categories.map((item) => {
                return (
                  <option key={item.cake_category} value={item.cake_category}>
                    {item.cake_category}
                  </option>
                );
              })}
            </select>
          </li>
          <li className='mx-6'>Blog</li>
          <li className='mx-6'>What's New</li>
          <li className='mx-6'>For You</li>
        </ul>
        <div className='relative'>
          <input
            type='text'
            placeholder='Search...'
            className='py-2 px-6 bg-[#eee] rounded-xl w-[400px] focus:outline-none'
          />
          <FaSearch className='absolute top-[50%] translate-y-[-50%] right-4'></FaSearch>
        </div>
        <ul className='flex items-center'>
          <li>
            <div className='flex items-center font-[700] mx-8'>
              <div className='mr-3 rounded-full border-[1px] p-2'>
                {user.user_image ? <img className='w-[20px] aspect-[1/1] object-cover' src={ user.user_image} alt="user avatar" /> : <FaUser size={20} className='mr-2'></FaUser> }
              </div>
              {user ? user.user_fullname : 'Account'}
            </div>
          </li>
          <li>
            <div>
              <Link to='/shop/cart' className='flex items-center font-[700] mx-8'>
                <FaShoppingCart size={20} className='mr-2'></FaShoppingCart>
                Cart
              </Link>
            </div>
          </li>
        </ul>
      </header>
    </>
  );
}

export default MainHeader;
