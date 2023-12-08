const Background = () => {
  return (
    <div className="absolute w-full h-screen z-1">
      <div className='absolute top-[5%] w-full py-10 flex justify-center text-zinc-600 font-semibold text-xl '>
        Documents
      </div>
      <h1 className=' absolute left-1/2 top-1/2 -translate-x-[50%] -translate-y-[50%] text-[12vw] leading-none tracking-tighter font-semibold text-zinc-900'>
        Docs
      </h1>
    </div>
  );
};
export default Background;
