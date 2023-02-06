import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { success, fail } from '../redux/UserSlice';
import { MdEmail, MdLock } from 'react-icons/md';
import { Link } from 'react-router-dom';
import { postRequest } from '../../helpers/api';

function Login(props) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();

  useEffect(() => {
    document.title = 'Fkm Bakery | Login';
  }, []);

  const login = async (e) => {
    e.preventDefault()
    let body = {
      username: username,
      password: password,
    };
    try {
      const res = await postRequest('/login', body).catch(error => alert(error.response.data.message + ''));
      dispatch(success(res.data))
    } catch (error) {
    }
  };

  return (
    <>
      <main className='font-raleway h-screen flex flex-col justify-center items-center bg-gradient-to-r from-[#E58C8A] to-[#EEC0C6]'>
        <h1 className='font-dancing-script text-[28px] mb-5'>
          Fkm <span className='text-pink-600'>Bakery</span>
        </h1>
        <div className='bg-white p-12 w-[500px] rounded-xl shadow-lg'>
          {/* Start Login Form */}
          <div className='text-center'>
            <h1 className='text-[36px] font-[600]'>Login</h1>
            <h4 className='mb-5 mt-2 text-[#aaa]'>
              Login to fully use all the features on the website
            </h4>
          </div>
          <form onSubmit={login} className='flex flex-col font-sans'>
            <div className='mb-5'>
              <div className='mb-2'>
                <label htmlFor='username' className='text-sm font-[600]'>
                  Username
                </label>
              </div>
              <div className='relative'>
                <MdEmail
                  color='#F56EB3'
                  className='absolute top-0 bottom-0 my-auto mx-0 left-3'></MdEmail>
                <input
                  type='text'
                  name='username'
                  id='username'
                  placeholder='Enter your username'
                  required
                  title='Enter your username'
                  className='w-full outline outline-1 outline-[#ccc] rounded-md px-10 py-2'
                  onChange={(e) => setUsername(e.target.value)}
                />
              </div>
            </div>
            <div className=''>
              <div className='mb-2'>
                <label htmlFor='password' className='text-sm font-[600]'>
                  Password
                </label>
              </div>
              <div className='relative'>
                <MdLock
                  color='#F56EB3'
                  className='absolute top-0 bottom-0 my-auto mx-0 left-3'></MdLock>
                <input
                  type='password'
                  name='password'
                  id='password'
                  placeholder='Enter your password'
                  required
                  title='Enter your password'
                  className='w-full outline outline-1 outline-[#ccc] rounded-md px-10 py-2'
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
            </div>
            <a href='#' className='mt-2 text-blue-500 font-[600] text-right'>
              Forgot Password ?
            </a>
            <button
              type='submit'
              className='p-3 mt-2 rounded-lg bg-[#F56EB3] uppercase font-[600] text-[#EEEEEE] hover:bg-[#e064a4] active:bg-[#c85a93]'>
              Log In
            </button>
          </form>
          {/* End Login Form */}
          <div className='text-center mt-5'>
            <i>
              Don't have an account ?{' '}
              <Link to='/register' className='text-blue-500'>
                Sign up
              </Link>
            </i>
          </div>
        </div>
      </main>
    </>
  );
}

export default Login;
