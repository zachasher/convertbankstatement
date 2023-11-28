import React from 'react'

function Hero() {
  return (
    <div className='w-full flex flex-col items-center justify-center bg-white py-8'>
      <h1 className='text-center text-black text-5xl py-4 font-bold font-sans'>Bank Statement Converter</h1>
      <p className='text-center text-black pb-4 font-sans'>Convert your bank statements to Excel (XLS) or CSV</p>
      <div className='flex items-center justify-center bg-[#D7FBE8] md:px-80 w-full py-8 md:py-20 border-2 border-dashed border-[#1FAB89] rounded-xl mb-8'>
        <div className='bg-[#1FAB89] px-20 py-6 rounded-full hover:bg-[#62D2A2] cursor-pointer'>Upload File</div>
      </div>
    </div>
  )
}

export default Hero