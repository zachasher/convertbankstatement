import React from 'react'

function Details() {
  return (
    <div className='flex flex-col items-center justify-center bg-white py-4'>
      <h2 className='text-black text-3xl font-bold md:p-8'>How to convert bank statements to Excel (XLS) or CSV</h2>
      <div className='w-full flex flex-col-reverse md:flex-row items-center justify-center mb-16'>
        <ol className='text-black md:w-1/2 flex flex-col justify-center'>
          <li className='text-black pb-8'>1. Click the "Choose File" button on our homepage or drag and drop your file into the designated area.</li>
          <li className='text-black pb-8'>2. Select either CSV or Excel output format then wait for the system to convert your file.</li>
          <li className='text-black'>3. Download your converted file and make your financial management easier!</li>
        </ol>
        <div className='md:w-1/2 flex items-center justify-center'>
          <img src="bs-graphic.jpg" alt="File converter graphic"
              className="md:w-96 object-contain md:pl-4"/>
        </div>
        
        {/* <p className='text-black bg-red-500 w-1/2'>Image</p> */}
      </div>
      <div className='flex flex-col md:flex-row'>
        <div className='pb-4 md:px-2 flex flex-col text-center items-center justify-center'>
          {/* <p className='text-black mb-4 bg-red-500'>Image</p> */}
          <img src="./SecurityShield.jpg" className='w-12 mb-4'/>
          <h3 className='text-black mb-2 font-bold'>Conversion is safe</h3>
          <p className='text-black'>Your financial data is in safe hands. Every conversion is encrypted using advanced SSL technology and all files are automatically deleted from our servers after conversion.</p>
        </div>
        <div className='pb-4 md:px-8 flex flex-col text-center items-center justify-center'>
          {/* <p className='text-black mb-4 bg-red-500'>Image</p> */}
          <img src="./Services.jpg" className='w-12 mb-4'/>
          <h3 className='text-black mb-2 font-bold'>Accurate AI Conversion</h3>
          <p className='text-black'>Our AI-powered tool transforms PDFs to Excel with exceptional accuracy, outperforming traditional methods. 
Experience precise data conversion for easier financial management.</p>
        </div>
        <div className='pb-4 md:px-2 flex flex-col text-center items-center justify-center'>
          {/* <p className='text-black mb-4 bg-red-500'>Image</p> */}
          <img src="./BankBuilding.jpg" className='w-12 mb-4'/>
          <h3 className='text-black mb-2 font-bold'>Worldwide Banking Compatibility</h3>
          <p className='text-black'>Convert statements from any bank in the world with our user-friendly converter, it’s ideal for international finance management</p>
        </div>
      </div>
    </div>
  )
}

export default Details