import { useRef } from 'react';
import Card from './Card';

const Foreground = () => {
  const ref = useRef(null);

  const data = [
    {
      desc: 'hello there this is just for ppractise',
      filesize: '.9mb',
      close: true,
      tag: { isOpen: true, tagTitle: 'Download Now', tagColor: 'green' },
    },
    {
      desc: 'hello there this is just for ppractise',
      filesize: '.9mb',
      close: true,
      tag: { isOpen: true, tagTitle: '99% done', tagColor: 'blue' },
    },
    {
      desc: 'hello there this is just for ppractise',
      filesize: '.9mb',
      close: true,
      tag: { isOpen: true, tagTitle: 'Play Now', tagColor: 'blue' },
    },
    {
      desc: 'hello there this is just for ppractise',
      filesize: '.9mb',
      close: true,
      tag: { isOpen: false, tagTitle: 'Download Now', tagColor: 'green' },
    },
  ];

  return (
    <div
      ref={ref}
      className='fixed top-0 left-0 w-full h-screen z-2 flex gap-7 flex-wrap p-10'>
      {data.map((item, index) => (
        <Card data={item} key={index} reference={ref} />
      ))}
    </div>
  );
};
export default Foreground;
