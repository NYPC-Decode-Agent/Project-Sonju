import React, { useState } from 'react'
import { Schedule } from './page/schedule/Schedule';

const time = (h: number, m: number) => h * 60 + m;
const sampleSchedule = [time(15, 0), -1, -1, time(12, 0), -1, -1, time(9, 0)];

export default function Home() {
    return <main><Schedule schedule={sampleSchedule} /></main>;

    /*
    return (
        <div>
            <div className="h-96" style={{backgroundImage: `url("./landing1.png")`}}></div>
            <div className="h-96" style={{backgroundImage: `url("./landing2.png")`}}></div>
            <div className="h-96" style={{backgroundImage: `url("./landing3.png")`}}></div>
            <div className="h-96 bg-white"></div>
            <div className="h-96" style={{backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.375), rgba(0, 0, 0, 0.375)), url("./landing4.png")`}}></div>
        </div>
    );
    */
}

// <textarea className="flex w-full rounded-md outline-none transition border border-gray-400 hover:border-gray-900 focus:border-gray-900">{script}</textarea>
