import React from 'react';
import { Outlet } from 'react-router-dom';

const Main = () => {
    return (
        <div className='bg-[#fffff]'>
            <Outlet></Outlet>
        </div>
    );
};

export default Main;