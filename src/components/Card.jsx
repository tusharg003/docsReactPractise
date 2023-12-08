import { FaRegFileAlt } from 'react-icons/fa';
import { MdOutlineFileDownload } from 'react-icons/md';
import { motion } from 'framer-motion';

const Card = ({ data, reference }) => {
  return (
    <motion.div
      drag
      dragConstraints={reference}
      dragElastic={1}
      whileDrag={{ scale: 1.1 }}
      dragTransition={{ bounceStiffness: 350, bounceDamping: 15 }}
      dragMomentum={false}
      className=' relative flex-shrink-0 w-60 h-72 rounded-[45px] bg-zinc-900 px-8 py-9 text-white overflow-hidden'>
      <FaRegFileAlt />
      <p className='text-sm mt-5 font-semibold leading-tight'>{data.desc}</p>
      <div className='footer absolute bottom-0 left-0 w-full  '>
        <div className='flex items-center justify-between px-8 py-2 mb-3'>
          <h5>{data.filesize}</h5>
          <span className='w-6 h-6 rounded-full flex justify-center items-center bg-zinc-800 '>
            <MdOutlineFileDownload size='.7em ' color='white' />
          </span>
        </div>
        {data.tag.isOpen && (
          <div
            className={`tag w-full py-3 ${
              data.tag.tagColor === 'blue' ? 'bg-blue-600' : 'bg-green-600'
            } `}>
            <h3 className='flex items-center justify-center text-sm font-semibold'>
              {data.tag.tagTitle}
            </h3>
          </div>
        )}
      </div>
    </motion.div>
  );
};
export default Card;
