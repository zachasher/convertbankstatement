import React from 'react'

function Hero() {
  return (
    <div className='flex flex-col items-center justify-center bg-white p-4'>
      <h1 className='text-center text-black text-5xl py-4 font-bold'>Bank Statment Converter</h1>
      <p className='text-center text-black pb-4'>Convert your bank statements to Excel (XLS) or CSV</p>
      <div className='bg-green-200 px-80 py-20 border-2 border-dashed border-green-600 rounded-xl'>
        <div className='bg-green-600 px-20 py-6 rounded-full'>Upload File</div>
      </div>
    </div>
  )
}

export default Hero