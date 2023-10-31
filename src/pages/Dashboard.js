import React from 'react';
import StaticsInfoData from '../components/StaticsInfoData';
import DashboardCard04 from '../components/GraphInfo01/DashboardCard04';
import DashboardCard08 from '../components/GraphInfo02/DashboardCard08';

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

            <div className="pt-[40px] grid grid-cols-12 gap-6">
                <DashboardCard04 />
                <DashboardCard08 />
            </div>
           
            
        </section>
    )
}