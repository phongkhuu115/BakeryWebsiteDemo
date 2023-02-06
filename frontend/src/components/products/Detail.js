import React, { useState, useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';
import { getRequest, postRequest } from '../../helpers/api';
import MainHeader from '../main/MainHeader';
import { FaStar, FaWeightHanging, FaIceCream } from 'react-icons/fa';
import { HiColorSwatch } from 'react-icons/hi';
import { MdOutlineKeyboardArrowRight } from 'react-icons/md';
import { NumericInput } from '../others/NumericInput';
import { Link } from 'react-router-dom';

function Detail(props) {
  const { state } = useLocation();

  const quantityRef = useRef(0);

  const { id } = state;

  const [detail, setDetail] = useState({
    cake: {
      Cake_ID: '',
      Cake_Name: '',
      Cake_Price: 15.73,
      Cake_Quantity: 0,
      Cake_InfomationID: '',
      Cake_NutritionID: '',
      Cake_IngredientID: '',
      Cake_Image: '',
      Cake_CategoryID: '',
    },
    info: {
      Infomation_ID: '',
      Information_Weight: 0,
      Infomation_Cream: 0,
      Infomation_Color: '',
    },
    nutrition: {
      Nutrition_ID: '',
      Nutrition_Fat: 0,
      Nutrition_Sugar: 0,
      Nutrition_Calo: 0,
      Nutrition_Carbohydrate: 0,
    },
  });

  function add_to_cart(id) {
    let body = {
      Cart_ID: sessionStorage.getItem('user_cart'),
      Cake_ID: id,
      Cake_Quantity: quantityRef.current.value,
    };
    console.log(body)
    postRequest('/addtocart', body).then((res) => {
      console.log(res.data.message);
    });
  }

  useEffect(() => {
    getRequest(`/detail?id=${id}`).then((res) => {
      setDetail({ ...res.data.product });
      document.title = 'Fkm Bakery | ' + res.data.product.cake.Cake_Name;
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
        <li>{detail.cake.Cake_Name}</li>
      </ul>
      <main className='flex flex-col px-10 gap-10 lg:flex lg:flex-row lg:gap-20'>
        <div className='flex flex-col sm:max-lg:justify-center gap-5'>
          <img
            src={detail.cake.Cake_Image}
            alt='cake'
            className='h-[600px] aspect-[1/1] object-cover rounded-xl'
          />
          <div className='flex justify-between'>
            <img
              src={detail.cake.Cake_Image}
              alt='cake'
              className='h-[120px] aspect-[1/1] object-cover rounded-xl'
            />
            <img
              src={detail.cake.Cake_Image}
              alt='cake'
              className='h-[120px] aspect-[1/1] object-cover rounded-xl'
            />
            <img
              src={detail.cake.Cake_Image}
              alt='cake'
              className='h-[120px] aspect-[1/1] object-cover rounded-xl'
            />
            <img
              src={detail.cake.Cake_Image}
              alt='cake'
              className='h-[120px] aspect-[1/1] object-cover rounded-xl'
            />
          </div>
        </div>
        <div className='flex-1'>
          <div className='font-[600] pb-2 text-[#333]'>
            <h1 className='text-[32px] font-raleway'>
              {detail.cake.Cake_Name}
            </h1>
            <h3 className='text-[24px] font-sans'>
              $ {detail.cake.Cake_Price}
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
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima,
              itaque quos provident dignissimos eum nisi deserunt ipsum tempora
              corrupti ipsam et similique excepturi consequuntur exercitationem
              labore hic nihil magni distinctio.
            </p>
            <div className='flex gap-x-5 text-[#ECF9FF] mb-2'>
              <div className='flex items-center gap-1 px-3 py-2 rounded-3xl bg-[#354259]'>
                <FaWeightHanging size={20}></FaWeightHanging>{' '}
                {detail.info.Information_Weight} gram
              </div>
              <div className='flex items-center gap-1 px-3 py-2 rounded-3xl bg-[#B2A4FF]'>
                <FaIceCream size={20}></FaIceCream>{' '}
                {detail.info.Infomation_Cream} %
              </div>
              <div className='flex items-center gap-1 px-3 py-2 rounded-3xl bg-gradient-to-r from-purple-500 to-pink-500'>
                <HiColorSwatch size={20}></HiColorSwatch>{' '}
                {detail.info.Infomation_Color}
              </div>
            </div>
          </div>
          <div className='pb-2'>
            <h1 className='text-[#333] font-[600] font-raleway text-[28px]'>
              Nutrition Facts
            </h1>
            <div className='flex justify-between items-center font-bold'>
              <p className='text-[26px]'>Calo</p>
              <p className='text-[38px]'>{detail.nutrition.Nutrition_Calo}</p>
            </div>
            <div className='flex justify-between py-1'>
              <p>Fat</p>
              <p>{detail.nutrition.Nutrition_Fat} gram</p>
            </div>
            <div className='flex justify-between py-1'>
              <p>Sugar</p>
              <p>{detail.nutrition.Nutrition_Sugar} gram</p>
            </div>
            <div className='flex justify-between py-1'>
              <p>Carbohydrate</p>
              <p>{detail.nutrition.Nutrition_Carbohydrate} gram</p>
            </div>
          </div>
          <div className='border-t-2 py-2 flex flex-col gap-4'>
            <div className='flex gap-5 items-center'>
              <NumericInput ref={quantityRef}></NumericInput>
              <p className='text-[22px]'>
                <span className='text-[#F2921D] font-[600]'>
                  {detail.cake.Cake_Quantity > 1
                    ? detail.cake.Cake_Quantity + ' cakes'
                    : detail.cake.Cake_Quantity + ' cake'}
                </span>{' '}
                Available
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
    </>
  );
}

export default Detail;
