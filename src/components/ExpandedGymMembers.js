import React, { useContext } from 'react';
import MainContext from './../context/MainContext';

export default function ExpandedeGymMembers() {

    const {selectedRow} = useContext(MainContext);

    return (
        <section>
            {/* =======@ DESKTOP @======= */}
            <article className='bg-white max-w-[862px] py-[30px] rounded-xl px-[30px] hidden lg:block'>
                oi desktop
            </article>

             {/* =======@ MOBILE @======= */}
             <article className='bg-white py-[30px] rounded-xlmb-[40px] px-[30px] mx-[16px] lg:hidden'>
                oi mobile
             </article>
        </section>
    )
}