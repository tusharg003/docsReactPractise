import { FaRegFileAlt } from 'react-icons/fa';
import { MdOutlineFileDownload } from 'react-icons/md';

const Card = ({ data }) => {
  return (
    <div className=' relative w-60 h-72 rounded-[45px] bg-zinc-900 px-8 py-9 text-white overflow-hidden'>
      <FaRegFileAlt />
      <p className='text-sm mt-5 font-semibold leading-tight'>{data.desc}</p>
      <div className='footer absolute bottom-0 left-0 w-full  '>
        <div className='flex items-center justify-between px-8 py-2 mb-2'>
          <h5>{data.filesize}</h5>
          <span className='w-6 h-6 rounded-full flex justify-center items-center bg-zinc-800'>
            <MdOutlineFileDownload size='.7em ' color='white' />
          </span>
        </div>
        <div className='tag  w-full py-3 bg-green-600 '>
          <h3 className='flex items-center justify-center text-sm font-semibold'>
            Download Now
          </h3>
        </div>
      </div>
    </div>
  );
};
export default Card;
