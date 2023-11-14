import React from 'react'
import Heading from './Heading'


function About() {
    return (
        <div className='bg-special md:h-screen bg-cover bg-center bg-local flex item-center'>
            <section id='title' className='md:container md:mx-auto py-7 px-3'>
                <Heading title="About me" />
                <div className='grid grid-cols-1 md:grid-cols-2 gap-[60px]'>
                    <div className='me'>
                        <img src='a yo.jpeg' className="w-[350px]" />

                    </div>
                    <div className='border flex justify-between w-[400px]  '>
                        <div className='box flex flex-col gap-4  '>

                            <div className=' flex gap-4 items-center font-medium '>
                                Carrera: Ing Sistemas

                            </div>
                            <div>
                                Cumpleaños: 23-ago

                            </div>

                            <div>
                                Hobbies: Ciclismo, Peliculas(Terror), Ciberseguridad, Programacion, Carros

                            </div>
                            <div>
                                Idiomas: Español, Ingles, Portugues
                            </div>
                            <div>
                                <p>

                                    Soy apacionado de la ciberseguridad,  hablo
                                    tres idiomas español, ingles y portugues no a la perfeccion pero es una de mis metas es hablar perfecto estos idiomas.

                                </p>
                            </div>

                        </div>

                    </div>

                </div>


            </section>
        </div>
    )
}

export default About