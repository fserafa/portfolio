import React from 'react';
import './FlipCard.css';
import { Card } from 'react-bootstrap';

export default function FlipCard(props) {
    return (
        <div class="flip-card">
            <div class="flip-card-inner">
                <div class="flip-card-front" style={{background: `url(${props.img}) center no-repeat`}}>
                    <img src={props.img} alt="Avatar" style={{width: 300, height: 200}} />
                    <p>{props.title}</p>

                </div>
                <div class="flip-card-back card-img">
                    {props.children}
                </div>
            </div>
        </div>

    )
}
