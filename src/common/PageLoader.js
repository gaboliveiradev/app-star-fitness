import React, { useContext } from 'react';
import './style.css';
import MainContext from '../context/MainContext';

export default function PageLoader() {
    const { isLoadingText } = useContext(MainContext);

    return (
        <section class="h-screen w-full flex flex-col justify-center items-center bg-[#d3d3d3]">
            <div class="loadingio-spinner-eclipse-82jtl98cjwx"><div class="ldio-ho4xpq9c2yo">
                <div></div>
            </div></div>
            <h1 className='text-[24px] font-bold'>{isLoadingText}</h1>
        </section>
    )
}