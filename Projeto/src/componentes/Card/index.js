import React from 'react';
import './style.css';
import ConstrucaoCivil from './construcao_civil.jpg';
import Eletricas from './eletricas.jpg';
import Informatica from './informatica.jpeg';

function Card() {
    return (
        <section>
        <div className="card-container">
            <h3>REVIT ARCHITECTURE</h3>
            <img src={ConstrucaoCivil} className="ConstrucaoCivil" alt="ConstrucaoCivil" />
            <p>Carga Horaria: 40 HORAS</p>
            <p>Valor Total: 990,00</p>
        </div>
        <div className="card-container">
            <h3>COMANDOS ELÉTRICOS</h3>
            <img src={Eletricas} className="Eletricas" alt="Eletricas" />
            <p>Carga Horaria: 120 HORAS</p>
            <p>Valor Total: 1.500,00</p>
        </div>
        <div className="card-container">
            <h3>INFORMÁTICA BÁSICA</h3>
            <img src={Informatica} className="Informatica" alt="Informatica" />
            <p>Carga Horaria: 80 HORAS</p>
            <p>Valor Total: Grátis</p>
        </div>
        </section>
    );
}

export default Card;