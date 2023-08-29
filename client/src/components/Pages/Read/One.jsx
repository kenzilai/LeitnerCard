import React, { useState } from 'react';

const API = 'http://localhost:8000/api/flashcards/'

export default function One(props) {
    const [isFront, setIsFront] = useState(true);

    function handleFlip() {
        setIsFront(flip => !flip);
    }

    return (
        <form>
            <div className='row my-3'>
                <div className='col-sm-6'>
                    <div className='card'>
                        {/* Below Line is textarea */}
                        <div
                            id='front-read'
                            className='form-control'
                            rows='6'
                        >
                            {isFront ? props.front : props.back}
                        </div>
                        {/* Above Line is textarea */}
                    </div>
                    <button type='button' onClick={handleFlip}>Flip</button>
                </div>
            </div>
        </form>
    );
};