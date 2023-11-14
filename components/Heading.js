import React from 'react'

const Heading = ({ title }) => {
    return (
        <div className='text-[#23290] text-[32px] font-medium flex item-center gap-4 py-16'>
            {title}

            <div className='line bg-[#000] h-[2px] 2-[40px] trans-y-1'>

            </div>

        </div>
    )
}

export default Heading