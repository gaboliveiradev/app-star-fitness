import React from 'react';
import StaticsInfoData from '../components/StaticsInfoData';

export default function Dashboard() {
    return (
        <section>
            <div>
                <h1 class="title">Dashboard</h1>
                <ul class="breadcrumbs">
                    <li><a href="#">Home</a></li>
                    <li class="divider">/</li>
                    <li><a href="#" class="active">Dashboard</a></li>
                </ul>
            </div>

            <div className='pt-[20px]'>
                <StaticsInfoData />
            </div>
        </section>
    )
}