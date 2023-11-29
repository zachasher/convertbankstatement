import React from 'react';

function Hero() {
  return (
    <div className="w-full flex flex-col items-center justify-center bg-white md:py-8">
      <h1 className="text-center text-black text-5xl py-4 font-bold font-sans">
        Bank Statement Converter
      </h1>
      <p className="text-center text-black pb-4 font-sans">
        Convert your bank statements to Excel (XLS) or CSV
      </p>
      <div className="flex flex-col items-center justify-center bg-[#D7FBE8] md:px-80 w-full py-8 md:py-20 border-2 border-dashed border-[#1FAB89] rounded-xl mb-8 md:mb-0">
        <div className="flex justify-center items-center bg-[#1FAB89] md:w-80 px-4 py-4 rounded-full hover:bg-[#62D2A2] cursor-pointer">
          <img src='pdf-logo.png' className='px-2 mr-4 w-16'/>
          <p className='px-2 text-xl font-bold whitespace-nowrap'>Choose File</p>
        </div>
        <p className='text-[#1FAB89] pt-2 font-bold md:w-80 text-center'>or drop files here</p>
      </div>
    </div>
  );
}

export default Hero;
