import React from 'react';
import { Logo } from '../../../svg';

const WhatsappHome = () => {
    return (
        <div className='h-full w-full dark:bg-dark_bg_4 select-none border-l dark:border-l-darkborder_1
        border-b-[6px] border-b-green_2'>

            <div className='mt-1,5 w-full h-full flex flex-col gap-y-8 items-center justify-center'>
                <span >
                    <Logo/>
                </span>
                <div className='mt-1 text-center space-y-[12px]'>
                    <h1 className="text-[32px] dark:text-dark_text_4 font-extralight">
                        WhatsApp Web
                    </h1>
                    <p className='text-sm dark:text-dark_text_3'>
                        Send and receive messages without keeping your phone online.<br/>
                        Use Whatsapp on up to 4 linked devices and 1 phone at the same time.
                    </p>
                </div>
            </div>

        </div>
    );
}

export default WhatsappHome;
