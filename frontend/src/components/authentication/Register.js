import React, { useState, useEffect } from 'react';
import bg from '../../assets/register-bg.jpg';
import { Link } from 'react-router-dom';

function Register(props) {
  const [state, setState] = useState('');

  useEffect(() => {
    return () => {
      document.placeholder = 'Fkm Bakery | Register';
    };
  }, []);

  return (
    <>
      <main className='font-raleway h-screen flex flex-col justify-center items-center bg-gradient-to-r from-[#E58C8A] to-[#EEC0C6]'>
        <div className='p-4 bg-white flex rounded-xl w-[70%]'>
          <div className='w-full h-[90vh] flex justify-center items-center flex-1 relative'>
            <img src={bg} alt='' className='w-full h-[100%]' />
            <div className='absolute bottom-0'>
              Photo by{' '}
              <a
                className='text-blue-600'
                href='https://unsplash.com/@biglaughkitchen?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText'>
                Deva Williamson
              </a>{' '}
              on{' '}
              <a
                className='text-blue-600'
                href='https://unsplash.com/photos/S2jw81lfrG0?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText'>
                Unsplash
              </a>
            </div>
          </div>
          <form className='font-sans flex flex-col justify-center flex-1 px-8'>
            <p className='text-2xl font-raleway font-[700] mb-2'>Register</p>
            <div className='my-2'>
              <label
                htmlFor='fullname'
                className='text-xs font-raleway font-[700]'>
                Full Name
              </label>
              <input
                name='fullname'
                id='fullname'
                className='w-full border-b-[1px] border-[#ccc] py-2 focus:outline-none'
                type='text'
                placeholder='e.g. John Doe'
                required
              />
            </div>
            <div className='my-2'>
              <label
                htmlFor='username'
                className='text-xs font-raleway font-[700]'>
                Username
              </label>
              <input
                name='username'
                id='username'
                className='w-full border-b-[1px] border-[#ccc] py-2 focus:outline-none'
                type='text'
                placeholder='e.g. jdoe115'
                required
              />
            </div>
            <div className='my-2'>
              <label
                htmlFor='email'
                className='text-xs font-raleway font-[700]'>
                Email
              </label>
              <input
                name='email'
                id='email'
                className='w-full border-b-[1px] border-[#ccc] py-2 focus:outline-none'
                type='email'
                placeholder='e.g. jdoe115@gmail.com'
                required
              />
            </div>
            <div className='my-2'>
              <label
                htmlFor='phone'
                className='text-xs font-raleway font-[700]'>
                Phone Number
              </label>
              <input
                name='phone'
                id='phone'
                className='w-full border-b-[1px] border-[#ccc] py-2 focus:outline-none'
                type='tel'
                pattern='[0-9]{4}-[0-9]{3}-[0-9]{3}'
                placeholder='e.g. 0900001002'
                required
              />
            </div>
            <div className='my-2'>
              <label
                htmlFor='address'
                className='text-xs font-raleway font-[700]'>
                Address
              </label>
              <input
                name='address'
                id='address'
                className='w-full border-b-[1px] border-[#ccc] py-2 focus:outline-none'
                type='text'
                placeholder='e.g. HCM City'
              />
            </div>
            <div className='my-2'>
              <label
                htmlFor='password'
                className='text-xs font-raleway font-[700]'>
                Password
              </label>
              <input
                name='password'
                id='password'
                className='w-full border-b-[1px] border-[#ccc] py-2 focus:outline-none'
                type='password'
                placeholder='••••••••'
                required
              />
            </div>
            <div className='my-2'>
              <label
                htmlFor='confirm'
                className='text-xs font-raleway font-[700]'>
                Confirm Password
              </label>
              <input
                name='confirm'
                id='confirm'
                className='w-full border-b-[1px] border-[#ccc] py-2 focus:outline-none'
                type='password'
                placeholder='••••••••'
                required
              />
            </div>
            <div className='flex items-center my-1'>
              <input type='checkbox' name='accept' id='accept' required />
              <label htmlFor='accept' className='text-sm ml-2 font-raleway'>
                I agree with{' '}
                <a href='#' className='text-blue-600'>
                  Term of User
                </a>
              </label>
            </div>
            <button
              type='submit'
              className='font-raleway p-3 mt-2 rounded-lg bg-[#F56EB3] uppercase font-[600] text-[#EEEEEE]'>
              Sign Up
            </button>
            <div className='text-center mt-3'>
              <i>
                Already have an account ?{' '}
                <Link to='/' className='text-blue-500'>
                  Log In
                </Link>
              </i>
            </div>
          </form>
        </div>
      </main>
    </>
  );
}

export default Register;
