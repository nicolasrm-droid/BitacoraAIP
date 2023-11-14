import React from 'react'
import TypeWriter from "typewriter-effect"



const hero = () => {
    return (
        <div className='image h-screen md:h-screen md:bg-cover bg-center bg-local flex item-center'>
            <div className='container mx-auto px-4  flex justify-center items-center h-screen ' >
                <div className='max-w-[450px] flex flex-col gap-[40px] '>
                    <div>
                        <h1 className='title text-center text-[70px]'>¡Hola!</h1>
                        <h2 className='name text-5xl'>Soy Nicolas Rojas</h2>
                        <h4 className=' text-2xl mt-2 '>
                            <TypeWriter
                                options={{
                                    strings: [
                                        "Ingeniero de sistemas",
                                        "Desarrollador Junior ",
                                        "Apasionado por la ciberseguridad",
                                        "Ingeniero de ciberseguridad"
                                    ],
                                    changeDelay: 2,
                                    changeDeleteSpeed: 0.5,
                                    autoStart: true,
                                    loop: true,
                                }} />
                                
                        </h4>


                    </div>



                </div>



            </div>

        </div>


    )
}

export default hero
// En la linea 8 es para modificar el texto posicionamiento tamaño
