import React from 'react'

interface InfoServiceProps {
    title: string
    descriptions: Array<string>
    icon: string
}

export const InfoService = (props: InfoServiceProps) => {


    return (
        <div className='flex flex-col space-y-[20px] justify-center items-center' >
            <img src={props.icon} alt="" width="90px" />
            <h4 className='text-[18px] leading-[24px] font-bold' >{props.title}</h4>
            <div className='flex flex-col' >
                {props?.descriptions?.map((description: string, index: number) => (
                    <div className='pb-[10px] text-center inline-block max-w-full' >
                        <p className='opacity-50' >{description}</p>
                    </div>
                ))}
            </div>
        </div>
    )
}