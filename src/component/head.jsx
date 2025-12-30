import React from 'react';
import '../index.css';
export default function Head(){
    return(
    <div className='w-screen h-[10vh] flex flex-col bg-blue-500 relative'>
        <h2 id='jumlah_responden' className='text-[26px] text-right mr-[20px] mt-[10px]'>Test</h2>
        <div className='flex flex-row w-[100%] h-[30px] absolute bottom-0 text-center'>
            <div className='w-[50%] h-inherit bg-blue-400 border-r'>Quiz</div>
            <div className='w-[50%] h-inherit bg-blue-400 border-l'>Responden</div>
        </div>
    </div>);
};