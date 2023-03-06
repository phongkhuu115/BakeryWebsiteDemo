import React, { useState, useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';
import { getRequest, postRequest, postRequestToken } from '../../utils/api';
import MainHeader from '../main/MainHeader';
import { FaStar, FaWeightHanging, FaIceCream } from 'react-icons/fa';
import { HiColorSwatch } from 'react-icons/hi';
import { MdOutlineKeyboardArrowRight } from 'react-icons/md';
import { NumericInput } from '../others/NumericInput';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Comment from './Comment';

function Detail(props) {
  const { state } = useLocation();

  const { cartID } = useSelector((state) => state.cart);

  const quantityRef = useRef(0);

  const { id } = state;

  const { access_token } = useSelector((e) => e.userData);

  const { user } = useSelector((state) => state.userData);

  const [ratings, setRatings] = useState([]);

  const [detail, setDetail] = useState({
    cake: {
      cake_id: '',
      cake_name: '',
      cake_price: 15.73,
      cake_quantity: 0,
      cake_infomationID: '',
      cake_nutritionID: '',
      cake_img: '',
    },
    info: {
      cake_infomationID: '',
      cake_weight: 0,
      cake_cream: 0,
      cake_color: '',
    },
    nutrition: {
      cake_nutritionID: '',
      cake_fat: 0,
      cake_sugar: 0,
      cake_calo: 0,
    },
  });

  const add_to_cart = (id) => {
    let body = {
      Cart_ID: cartID,
      Cake_ID: id,
      Cake_Quantity: quantityRef.current.value,
    };
    postRequestToken('/addtocart', body, access_token).then((res) => {});
  };

  console.log(id);

  useEffect(() => {
    getRequest(`/detail?id=${id}`).then((res) => {
      setDetail({ ...res.data.product });
      document.title = 'Fkm Bakery | ' + res.data.product.cake.cake_name;
    });
    getRequest(`/getallrating?id=${id}`).then((res) => {
      if (res.data.message === 'success') {
        setRatings([...res.data.rating]);
      }
    });
    return () => {};
  }, []);

  return (
    <>
      <MainHeader></MainHeader>
      <ul className='flex mx-10 my-5 gap-1'>
        <li>
          <Link
            to='/shop'
            className='flex items-center gap-1 text-blue-700 hover:underline'>
            Shop <MdOutlineKeyboardArrowRight></MdOutlineKeyboardArrowRight>
          </Link>
        </li>
        <li>{detail.cake.cake_name}</li>
      </ul>
      <main className='flex flex-col px-10 gap-10 lg:flex lg:flex-row lg:gap-20'>
        <div className='flex flex-col sm:max-lg:justify-center gap-5'>
          <img
            src={detail.cake.cake_img}
            alt='cake'
            className='h-[600px] aspect-[1/1] object-cover rounded-xl'
          />
          <div className='flex justify-between'>
            <img
              src={detail.cake.cake_img}
              alt='cake'
              className='h-[120px] aspect-[1/1] object-cover rounded-xl'
            />
            <img
              src={detail.cake.cake_img}
              alt='cake'
              className='h-[120px] aspect-[1/1] object-cover rounded-xl'
            />
            <img
              src={detail.cake.cake_img}
              alt='cake'
              className='h-[120px] aspect-[1/1] object-cover rounded-xl'
            />
            <img
              src={detail.cake.cake_img}
              alt='cake'
              className='h-[120px] aspect-[1/1] object-cover rounded-xl'
            />
          </div>
        </div>
        <div className='flex-1'>
          <div className='font-[600] pb-2 text-[#333]'>
            <h1 className='text-[32px] font-raleway'>
              {detail.cake.cake_name}
            </h1>
            <h3 className='text-[24px] font-sans'>
              $ {detail.cake.cake_price}
            </h3>
            <div className='flex gap-2 mt-2 items-center'>
              <FaStar color='#03C988'></FaStar>
              <FaStar color='#03C988'></FaStar>
              <FaStar color='#03C988'></FaStar>
              <FaStar color='#03C988'></FaStar>
              <FaStar color='#03C988'></FaStar>
              (121)
            </div>
          </div>
          <div className='font-[600] border-y-2 pb-2'>
            <h1 className='text-[#333] font-raleway text-[28px]'>Infomation</h1>
            <p className='font-normal mb-2 text-[#333]'>
              {detail.cake.cake_desc}
            </p>
            <div className='flex gap-x-5 text-[#ECF9FF] mb-2'>
              <div className='flex items-center gap-1 px-3 py-2 rounded-3xl bg-[#354259]'>
                <FaWeightHanging size={20}></FaWeightHanging>{' '}
                {detail.info.cake_weight} gram
              </div>
              <div className='flex items-center gap-1 px-3 py-2 rounded-3xl bg-[#B2A4FF]'>
                <FaIceCream size={20}></FaIceCream> {detail.info.cake_cream} %
              </div>
              <div className='flex items-center gap-1 px-3 py-2 rounded-3xl bg-gradient-to-r from-purple-500 to-pink-500'>
                <HiColorSwatch size={20}></HiColorSwatch>{' '}
                {detail.info.cake_color}
              </div>
            </div>
          </div>
          <div className='pb-2'>
            <h1 className='text-[#333] font-[600] font-raleway text-[28px]'>
              Nutrition Facts
            </h1>
            <div className='flex justify-between items-center font-bold'>
              <p className='text-[26px]'>Calo</p>
              <p className='text-[38px]'>{detail.nutrition.cake_calo}</p>
            </div>
            <div className='flex justify-between py-1'>
              <p>Fat</p>
              <p>{detail.nutrition.cake_fat} gram</p>
            </div>
            <div className='flex justify-between py-1'>
              <p>Sugar</p>
              <p>{detail.nutrition.cake_sugar} gram</p>
            </div>
          </div>
          <div className='border-t-2 py-2 flex flex-col gap-4'>
            <div className='flex gap-5 items-center'>
              <NumericInput
                style='px-5 py-2'
                value={0}
                ref={quantityRef}></NumericInput>
              <p className='text-[22px]'>
                <span className='text-[#F2921D] font-[600]'>
                  {detail.cake.cake_quantity}
                </span>{' '}
                available in store
              </p>
            </div>
            <div className='flex text-white font-[600] gap-10'>
              <button
                onClick={() => {
                  add_to_cart(id);
                }}
                className='px-6 py-3 rounded-3xl bg-green-800 flex-1'>
                Add to Cart
              </button>
              <button className='px-6 py-3 rounded-3xl outline outline-green-800 text-green-800 flex-1'>
                Buy Now
              </button>
            </div>
          </div>
        </div>
      </main>
      <div className='p-10'>
        <h1 className='text-[32px] font-[600]'>Customer Thoughts</h1>
        <div className='mt-5'>
          {ratings.map((item) => {
            return <Comment user={user} rating={item}></Comment>;
          })}
        </div>
      </div>
    </>
  );
}

export default Detail;
