import React from 'react'
import { assets } from '../assets/assets'
import Title from '../components/Title'
import { NewsLetterBox } from '../components/NewsLetterBox'

const About = () => {
  return (
    <div>
       <div className='text-2xl text-center pt-8 border-t'>
         <Title text1={'ABOUT'} text2={'US'}/>
       </div>

       <div className='my-10 flex flex-col md:flex-row gap-16'>
          <img src={assets.about_img} className='w-full md:max-w-[450px]'/>
          <div className='flex flex-col justify-center gap-6 md:w-2/4 text-gray-600'>
            <p>Forever is a modern eCommerce website designed to provide users with a seamless and engaging online shopping experience. The platform allows customers to browse a wide range of products, apply filters and sorting options, and view detailed product information with multiple variants such as size and color.</p>
            <p>Users can add products to the cart, manage quantities, and place orders by providing delivery details. The website supports secure checkout with multiple payment options, including Cash on Delivery and online payment methods, ensuring convenience and reliability</p>
            <b className='text-gray-800'>Our Mission</b>
            <p>Forever’s mission is to deliver a seamless, secure, and user-friendly online shopping experience by combining modern technology with intuitive design. The platform aims to empower customers with flexible purchasing options while enabling efficient product and order management.</p>
          </div>
       </div>

       <div className='text-xl py-4'>
          <Title text1={'WHY'} text2={'CHOOSE US'}/>
       </div>

       <div className='flex flex-col md:flex-row text-sm mb-20'>
          <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
            <b>Quality Assurance</b>
            <p className='text-gray-600'>We meticulously select and vet each product to ensure it meets our stringment qulity standards .</p>
          </div>
          <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
            <b>Convenience</b>
            <p className='text-gray-600'>With our user-freindly interface and hassle-free ordering process,shopping has never been easier.</p>
          </div>
          <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
            <b>Exceptional Customer Service</b>
            <p className='text-gray-600'>Our Team of dedicated professionals is here to assist you the way,ensuring your satisfaction is our top priority .</p>
          </div>
        </div>
        <NewsLetterBox/>
    </div>
  )
}

export default About