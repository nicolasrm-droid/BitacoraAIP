import React from "react";



const Plegable = () => {
    return (

        <div className="flex items-center justify-center h-screen bg-[#0b1011]">

            <input type="checkbox" id="checkbox-cover" />
            <input type="checkbox" id="checkbox-page1" />
            <input type="checkbox" id="checkbox-page2" />
            <input type="checkbox" id="checkbox-page3" />

            <div className="book">
                <div className="cover">


                    <div className="portada">
                        <h1 className='text-4xl md:text-6xl font-bold mb-4 text-center'>Plegable semana 11</h1>
                    </div>

                    <label for="checkbox-cover"></label>
                </div>
                <div className="page" id="page1">
                    <div className="front-page">
                        <p>En la semana 11 se realizaron diferentes arreglos y trabajos como el arreglo del logo, mapa de ruta y de la simulación,tambien organizamos como ibamos a realizar la experiencia nos preparamos para ello. </p>
                        <img src='imagen1aip.jpeg' className="frontp" />
                        <label className="next" for="checkbox-page1"><i className="fas fa-chevron-right"></i></label>
                    </div>
                    <div className="back-page">
                        <label className="prev" for="checkbox-page1"><i className="fas fa-chevron-left"></i></label>
                    </div>
                </div>
                <div className="page" id="page2">
                    <div className="front-page">
                        <h2>Page 2</h2>
                        <p>Aunque al principio fue un poco complicado hallar tiempo para realizar los trabajos y entregas y poder organizarnos para poder realizar todas las entregas nos intentamos arreglas lo mejor posible para poder realizar las entregas a tiempo y lo necesario.    </p>
                        <img src='Logo-def2-_2_.png' className="frontp" />
                        <label className="next" for="checkbox-page2"><i className="fas fa-chevron-right"></i></label>
                    </div>
                    <div className="invisible back-page">
                        <label className="prev" for="checkbox-page2"><i className="fas fa-chevron-left"></i></label>
                    </div>
                </div>

                <div className="back-cover"></div>
            </div>
        </div>
    );
}


export default Plegable;
