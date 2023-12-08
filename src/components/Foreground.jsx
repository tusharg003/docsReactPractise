import Card from './Card';

const Foreground = () => {
  const data = [
    {
      desc: 'hello there this is just for ppractise',
      filesize: '.9mb',
      close: true,
      tag: { isOpen: true, tagTitle: 'Download Now', tagColor: 'green' },
    },
  ];

  return (
    <div className='fixed top-0 left-0 w-full h-screen z-2'>
      {data.map((item, index) => (
        <Card data={item} key={index} />
      ))}
    </div>
  );
};
export default Foreground;
