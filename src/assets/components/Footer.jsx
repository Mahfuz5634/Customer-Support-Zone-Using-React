import React from 'react';

const Footer = () => {
    return (
        <div className='bg-black'>
            <div className='md:flex md:gap-3 p-15  justify-between items-center container mx-auto'>
                <div  className='flex-1 md:mr-15'>
                    <h1 className='text-white md:text-[25px] font-bold'>CS-Ticket System</h1>
                    <p className='text-white text-[9px] opacity-70 text-justify'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                </div>
                <div className='flex-1'>
                    <h1 className='text-[20px] text-white font-bold'>Company</h1>
                    <p className='text-white text-[9px] opacity-70'>About Us</p>
                    <p  className='text-white text-[9px] opacity-70' > Our Mission</p>
                    <p  className='text-white text-[9px] opacity-70'>Contact Saled</p>
                </div>
                <div className='flex-1'>
                    <h1 className='text-[20px] text-white font-bold'>Services</h1>
                    <p  className='text-white text-[9px] opacity-70'>Product & Sevices</p>
                    <p  className='text-white text-[9px] opacity-70'>Customer Stories</p>
                    <p  className='text-white text-[9px] opacity-70'>Download Apps</p>
                </div>
                <div className='flex-1'>
                    <h1 className='text-[20px] text-white font-bold'>Information</h1>
                    <p  className='text-white text-[9px] opacity-70'>Terms & Condition</p>
                    <p  className='text-white text-[9px] opacity-70'>Join Us</p>
                    <p  className='text-white text-[9px] opacity-70'>Privacy Policy</p>
                </div>
                <div className='flex-1'>
                    <h1 className='text-[20px] text-white font-bold'>Social Links</h1>
                    <p  className='text-white text-[9px] opacity-70'><i class="fa-brands fa-facebook"></i>@CS-Ticket-System</p>
                    <p  className='text-white text-[9px] opacity-70'><i class="fa-brands fa-twitter"></i>@CS-Ticket-System</p>
                    <p className='text-white text-[9px] opacity-70'><i class="fa-brands fa-youtube"></i>@CS-Ticket-System</p>
                </div>
            </div>
        </div>
    );
};

export default Footer;