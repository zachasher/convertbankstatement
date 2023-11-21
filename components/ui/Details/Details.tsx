import React from 'react'

function Details() {
  return (
    <div className='flex flex-col items-center justify-center bg-white p-4'>
      <h2 className='text-black text-3xl font-bold p-4'>How to convert bank statements to Excel (XLS) or CSV</h2>
      <div className='flex flex-row mb-8'>
        <ol className='text-black w-1/2'>
          <li className='text-black pb-8'>1. Click the "Choose File" button on our homepage or drag and drop your file into the designated area.</li>
          <li className='text-black pb-8'>2. Choose the PDF file you need to convert.</li>
          <li className='text-black pb-8'>3. Download your converted file in CSV or Excel format and make your financial management easier!</li>
        </ol>
        <p className='text-black bg-red-500 w-1/2'>Image</p>
      </div>
      <div className='flex w-1/2'>
        <div className='px-2 flex flex-col text-center justify-center'>
          <p className='text-black mb-4 bg-red-500'>Image</p>
          <h3 className='text-black mb-2 font-bold'>Conversion is safe</h3>
          <p className='text-black'>Your financial data is in safe hands. Every conversion is encrypted using advanced SSL technology and all files are automatically deleted from our servers after conversion.</p>
        </div>
        <div className='px-2 flex flex-col text-center justify-center'>
          <p className='text-black mb-4 bg-red-500'>Image</p>
          <h3 className='text-black mb-2 font-bold'>Accurate AI Conversion</h3>
          <p className='text-black'>Our AI-powered tool transforms PDFs to Excel with exceptional accuracy, outperforming traditional methods. 
Experience precise data conversion for easier financial management.</p>
        </div>
        <div className='px-2 flex flex-col text-center justify-center'>
          <p className='text-black mb-4 bg-red-500'>Image</p>
          <h3 className='text-black mb-2 font-bold'>Worldwide Banking Compatibility</h3>
          <p className='text-black'>Convert statements from any bank in the world with our user-friendly converter, it’s ideal for international finance management</p>
        </div>
      </div>
    </div>
  )
}

export default Details