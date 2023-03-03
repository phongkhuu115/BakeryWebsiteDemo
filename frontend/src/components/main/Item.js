import { useEffect, useState } from 'react';
import { useSelector} from 'react-redux'
import { FaStar } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import { getRequest, postRequest, postRequestToken } from '../../utils/api';

function Item({ props }) {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false)
  const { access_token} = useSelector(state => state.userData)
  const { cartID } = useSelector(state => state.cart)
  function viewDetail(id) {
    navigate('/shop/detail', {
      state: {
        id: id,
      },
    });
  }

  function add_to_cart(e) {
    e.stopPropagation();
    let body = {
      Cart_ID: cartID,
      Cake_ID: props.cake_id,
      Cake_Quantity: 1
    }
    postRequestToken('/addtocart', body, access_token).then(res => {
      console.log(res.data.message)
    }) 
  }

  useEffect(() => {
    
  })

  return (
    <>
      <div
        onClick={() => viewDetail(props.cake_id)}
        className='font-sans cursor-pointer p-4 outline outline-1 outline-[#eee] rounded-sm shadow-md hover:-translate-y-2 transition-transform'>
        <img
          src={props.cake_img}
          alt='cake img'
          className='w-[full] aspect-[1/1] rounded-md object-cover'
        />
        <div className='mt-2'>
          <div className='flex justify-between'>
            <p className='font-[500]'>{props.cake_name}</p>
            <p className='font-[500]'>{props.cake_price}$</p>
          </div>
          <div className='flex gap-2 my-2'>
            <FaStar color='#03C988'></FaStar>
            <FaStar color='#03C988'></FaStar>
            <FaStar color='#03C988'></FaStar>
            <FaStar color='#03C988'></FaStar>
            <FaStar color='#03C988'></FaStar>
          </div>
          <button onClick={(e) => {add_to_cart(e)}} className='px-4 py-2 outline outline-2 outline-[#333] rounded-3xl mt-2 font-[500] hover:outline-none hover:bg-green-800 hover:text-[#fff]'>
            Add to Cart
          </button>
        </div>
      </div>
    </>
  );
}

export default Item;
