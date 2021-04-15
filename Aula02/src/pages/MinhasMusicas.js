import React from 'react';
import Navbar from '../components/NavBar';
import CardMusica from '../components/CardMusica';

function MinhasMusicas() {
    return (
        <>
            <Navbar />
            <div className="container">
                <div className="filter">
                    <button className="btn-green right">Adicionar</button>
                </div>
            </div>
            <div className="container">
                <div className="music-boxes">
                    <CardMusica 
                        nome="Assalto ao Trap"
                        genero="Shittrap"
                        ano="2020"/>
                </div>
            </div>

        </>
    );
}

export default MinhasMusicas;