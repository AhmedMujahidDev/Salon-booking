import React from 'react'
import PurposeImg from '../About Us/PurposeImg'
import PurposeContent from '../About Us/PurposeContent'
import img1 from "../../../assets/images/purpose-img-1.jpg"
import img2 from "../../../assets/images/purpose-img-2.jpg"
import img3 from "../../../assets/images/purpose-img-3.jpg"

const Purpose = () => {
  return (
    <section className='section-padding bg-[#fff9f6]'>
        <div className='container-custom'>
            <div className='grid grid-cols-1 items-center gap-40 lg:grid-cols-2'>
                <PurposeImg  images={[img1, img2, img3]}/>
                <PurposeContent />
            </div>
        </div>
    </section>
  )
}

export default Purpose