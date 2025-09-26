
import React, { use } from 'react';

const Cardsec = ({fetchData}) => {
    const data=use(fetchData);
  
    return (
        <>
        {
            <div className='bg-[#f5f5f5] pb-5'>
                <div className='container mx-auto   '>
                    <h1 className='text-2xl font-bold mb-[5px]'>Cutomer Tickets</h1>
                </div>
                <div className='container mx-auto md:flex  '>
                <div className='w-9/12 md:grid grid-cols-2 gap-y-6 '>
                 
                      {
                       data.map(data=>(
                        <div className='card md:w-[450px] h-auto  bg-white p-5'>
                        <div className='flex justify-between  gap-5'>
                             <h1 className='text-[20px] font-semibold'>{data.title}</h1>
                             <button>
                               <div className=' p-2 w-[100px] h-[30px] rounded-2xl flex justify-center items-center gap-1 bg-green-300'>
                                <div className='  h-[20px] w-[20px] bg-green-600 rounded-full'></div>
                                <h1 className='text-green-800'>Open</h1>
                               </div>
                             </button>
                        </div>
                        <p className='opacity-90'>{data.description}</p>
                        <div className='flex justify-between items-center mt-4'>
                            <div className='flex justify-center items-center gap-4'>
                                <h1 className='opacity-90'>#{data.id}</h1>
                            <h1 className='text-rose-500 opacity-90'>{data.priority}</h1>
                            </div>
                            <div className='flex justify-center items-center gap-4'>
                                <h1 className='opacity-90'>{data.customer}</h1>
                                <h1 className='opacity-90'><i class="fa-solid fa-calendar"></i>{data.createdAt}</h1>
                            </div>
                        </div>
                      </div>
                       ))
                      }
                </div>
                <div className='3/12 bg-amber-700'>
                 <h1>div2</h1>
                </div>
            </div>
            </div>
        }
        </>
        
    );
};

export default Cardsec;