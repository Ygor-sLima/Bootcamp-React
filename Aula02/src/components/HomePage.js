import React from 'react';
import image from '../assets/images/index-img.png';

function HomePage() {
    return (
        <div class="container index">
            <div class="index-content">
                <div class="box-text-index">
                    <div class="info-index">
                        <h1>Faça parte do nosso dicionário de música </h1>
                        <h3>Contribua e fique por dentro das novidades  </h3>
                    </div>
                    <div class="img-index"></div>
                    <button class="btn-green">Conhecer agora</button>
                </div>
                <img src={image} alt="" class="index-img" />
            </div>
        </div>
    );
}

export default HomePage;