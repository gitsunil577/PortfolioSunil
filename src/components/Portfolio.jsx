import React from 'react'

function Portfolio() {
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
    <div name="Portfolio" className="max-w-screen-2xl container mx-auto px-4 md:px-20 mt-10">
        <div>
            <h1 className='text-3xl font-bold mb-5'>Portfilo</h1>
            <span className='underline font-semibold'>Featured Projects</span>
            <div className='grid grid-cols-1 md:grid-cols-4 gap-5 my-5'>
                {
                    cardItems.map(({id,logo,name})=>(
                        <div className="md:w-[300px] md:h-[300px] border-[2px] rounded-lg shadow-lg p-1 cursor-pointer hover:scale-105 duration-300" key={id}>
                            <img src={logo}  className="w-[120px] p-1 rounded-full border-[2px] " alt="" />
                            <div>
                            <div className='px-2 font-bold text-x1 mb-2'>{name}</div>
                            <p className='px-2 text-gray-700'>Lorem ipsum,dolor sit amet consector</p>
                            <div className='px-6 py-4 space-x-3 justify-around'>
                                <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold px-4 py-2 rounded'>Video</button>
                                <button className='bg-green-500 hover:bg-green-700 text-white font-bold px-4 py-2 rounded'>Source Code</button>
                            </div>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    </div>
  )
}

export default Portfolio