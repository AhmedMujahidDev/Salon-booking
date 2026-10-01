import React from 'react'
import expert5 from"../../../assets/images/expert-img-05.jpg"
import expert6 from"../../../assets/images/expert-img-06.jpg"
import expert7 from"../../../assets/images/expert-img-07.jpg"
import expert8 from"../../../assets/images/expert-img-08.jpg"

const ExpertCard = () => {
  return (
        <div className=' mt-10 container-custom'>
            <div>
                <div className='flex justify-between items-center gap-5'>
                    {ExpertData.map((items, index)=>(
                        <div key={index} className='flex flex-col items-center gap-2 transition-transform duration-500 hover:scale-105'>
                            <img src={items.img} alt={items.title} className='rounded-md w-full' />
                            <h2 className='text-2xl font-bold'>{items.title}</h2>
                            <p className='text-base'>{items.role}</p>
                        </div>
                    ))}
                </div>
                
            </div>
        </div>
  )
}

export default ExpertCard

const ExpertData =[
    {
        img: expert5,
        title:"Ava Thompson",
        role:"Nail Art Specialist",
    },
    {
        img: expert6,
        title:"Mia Anderson",
        role:"Professional Hair Designer",
    },
    {
        img: expert7,
        title:"Charlotte Wilson",
        role:"Bridal Hair Artist",
    },
    {
        img: expert8,
        title:"Amelia Harris",
        role:"Beauty & Skin Consultant",
    },
]