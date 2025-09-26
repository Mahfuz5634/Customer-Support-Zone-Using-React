import React from 'react';

const Navbar = () => {
    return (
        <div className=' flex justify-between items-center container mx-auto'>
            <div className='p-5' >
               <h1 className='text-2xl font-bold'>CS-Ticket System</h1>
            </div>
            <div className='mr-3 gap-5 flex justify-center items-center'>
                <p>Home</p>
                <p>FAQ</p>
                <p>ChangeLog</p>
                <p>Blog</p>
                <p>Download</p>
                <p>Contact</p>
                <button className='btn border-none font-bold text-white bg-gradient-to-r from-[#713be7] to-[#9559f0b1]'>+ New Ticket</button>
            </div>
        </div>
    );
};

export default Navbar;