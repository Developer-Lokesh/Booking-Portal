import {  PanelLeftOpen } from 'lucide-react'

const Header = () => {
    return (
        <div className='bg-gray-300 flex h-[60px] items-center'>
            <div className='flex gap-2 items-center'>
                <div><PanelLeftOpen className='w-10 h-10 ml-2 text-black ' /></div>
                <div className='flex gap-2 items-center'>
                    {/* <Car className='w-16 h-14 text-black'/> */}
                    <h1 className='text-black text-3xl font-bold'>cabXpress</h1>
                </div>
            </div>

        </div>
    )
}

export default Header