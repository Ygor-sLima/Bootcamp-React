import React from 'react';
import notFoundImg from '../assets/images/not-found.png';
import NavBar from '../components/NavBar';

function NotFound() {
    return (
        <>
            <NavBar />
            <div class="container index ">
                <div class="index-content">
                    <div class="box-text-index">
                        <div class="info-index not-found">
                            <h1>Oops!</h1>
                            <h3>A página que você procura não foi encontrada.</h3>
                        </div>
                        <div class="img-index"></div>
                        <button class="btn-green">Voltar</button>
                    </div>
                    <img src={notFoundImg} alt="" class="index-img" />
                </div>
            </div>
        </>
    );
}

export default NotFound;