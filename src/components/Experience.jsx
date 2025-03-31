import React from 'react'

function Experience() {
    const cardItems=[
        {
            id:1,
            logo:'mongodb.jpg',
            name:'MongoDB'
        },
        {
            id:2,
            logo:'express.png',
            name:'Express'
        },
        {
            id:3,
            logo:'node.png',
            name:'NodeJS'
        },
        {
            id:4,
            logo:'html.png',
            name:'HTML5'
        },
        {
            id:5,
            logo:'java.png',
            name:'Java'
        },
        {
            id:6,
            logo:'oracle.png',
            name:'Oracle'
        },
    ]
  return (
    <div name="Experience" className="max-w-screen-2xl container mx-auto px-4 md:px-20 mt-10">
        <div>
            <h1 className='text-3xl font-bold mb-5'>Experience</h1>
            <span className='underline font-semibold'>I've more than 2 years of Experience in the below technology</span>
            <div className='grid grid-cols-2 md:grid-cols-5 gap-7 my-3'>
                {
                    cardItems.map(({id,logo,name})=>(
                        <div className=" flex flex-col items-center justify-center border-2px md:w-[200px] md:h-[200px] border-[2px] rounded-full p-1 cursor-pointer hover:scale-105 duration-300" key={id}>
                            <img src={logo}  className="w-[150px] p-1 rounded-full " alt="" />
                            <div>
                            <div className='px-2 font-bold text-x1 mb-2'>{name}</div>        
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    </div>
  )
}

export default Experience