import React, { useEffect, useState } from "react";
import { GET } from '../CRUD/requests';
import CardForm from '../components/Pages/Create_Update/CardForm';
import All from './Pages/Read/All';

export default function Body() {
    const [cards, setCards] = useState([]);
    
    useEffect(() => {
        GET().then(setCards);
    }, []);

    function addCard(card) {
        setCards([card, ...cards]);
    };

    function updateCard(card) {
        setCards(cards.map((currentCard) => currentCard.id === card.id ? card : currentCard));
    };

    function removeCard(id) {
        setCards(cards.filter((card) => card.id !== id))
    };

    return (
        <div>
            <CardForm saveCard={addCard} />
            {cards.map((card) =>
                <All
                    key={card.id}
                    {...card}
                    updateCard={updateCard}
                    removeCard={removeCard}
                />
            )}
        </div>
    );
};