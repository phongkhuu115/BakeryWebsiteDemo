import { FaStar } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

function Item({ props }) {
  const navigate = useNavigate();
  function viewDetail(id) {
    navigate('/shop/detail', {
      state: {
        id: id,
      },
    });
  }

  return (
    <>
      <div
        onClick={() => viewDetail(props.Cake_ID)}
        className='font-sans cursor-pointer p-4 outline outline-1 outline-[#eee] rounded-sm shadow-md hover:-translate-y-2 transition-transform'>
        <img
          src={props.Cake_Image}
          alt='cake img'
          className='w-[full] aspect-[1/1] rounded-md object-cover'
        />
        <div className='mt-2'>
          <div className='flex justify-between'>
            <p className='font-[500]'>{props.Cake_Name}</p>
            <p className='font-[500]'>{props.Cake_Price}$</p>
          </div>
          <div className='flex gap-2 my-2'>
            <FaStar color='#03C988'></FaStar>
            <FaStar color='#03C988'></FaStar>
            <FaStar color='#03C988'></FaStar>
            <FaStar color='#03C988'></FaStar>
            <FaStar color='#03C988'></FaStar>
          </div>
          <button className='px-4 py-2 outline outline-2 outline-[#333] rounded-3xl mt-2 font-[500] hover:outline-none hover:bg-green-800 hover:text-[#fff]'>
            Add to Cart
          </button>
        </div>
      </div>
    </>
  );
}

export default Item;
