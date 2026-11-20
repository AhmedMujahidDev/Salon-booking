import expert5 from"../../../assets/images/expert-img-05.jpg"
import expert6 from"../../../assets/images/expert-img-06.jpg"
import expert7 from"../../../assets/images/expert-img-07.jpg"
import expert8 from"../../../assets/images/expert-img-08.jpg"

const ExpertCard = () => {
  return (
        <div className='container-custom mt-10'>
            <div>
                <div className='grid grid-cols-1 md:grid-cols-2 items-start gap-4 sm:gap-5 lg:grid-cols-4'>
                    {ExpertData.map((items, index)=>(
                        <div key={index} className='flex min-w-0 flex-col items-center gap-2 text-center transition-transform duration-500 hover:scale-105'>
                            <img src={items.img} alt={items.title} className='aspect-[3/4] w-full rounded-md object-cover' />
                            <h2 className='text-fluid-xl font-bold'>{items.title}</h2>
                            <p className='text-fluid-base'>{items.role}</p>
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