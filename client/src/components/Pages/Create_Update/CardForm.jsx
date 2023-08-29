import React, { useState } from "react";
import { POST, PUT } from '../../../CRUD/requests'

export default function CardForm({saveCard, card, editMode, editToggle}) {
    const id = card && card.id ? card.id : undefined
    
    const [front, setFront] = useState(id ? card.front : '');
    const [back, setBack] = useState(id ? card.back : '');

    function handlePOST(event) {
        event.preventDefault();
        POST({ front, back }).then((card) => {
            saveCard(card);
        });
        setFront('');
        setBack('');
    };

    function handlePUT(event) {
        event.preventDefault();
        PUT({ id, front, back }).then((card) => {
            saveCard(card);
            editToggle(false);
        });
    };

    return (
        <form onSubmit={!editMode ? handlePOST : handlePUT}>
            {!editMode
                ?   <div className='row' >
                        <label htmlFor="front-add" className="form-label col-sm-5">
                            <h5>Front</h5>
                        </label>
                        <label htmlFor="back-add" className="form-label col-sm-5">
                            <h5>Back</h5>
                        </label>
                        <div className="form-label col-sm-2">
                            <h5>Action</h5>
                        </div>
                    </div>
                :   <br />
            }
            <div className='row' >
                <div className='col-sm-5'>
                    <textarea
                        id='front-add'
                        className='form-control'
                        onChange={(event) => setFront(event.target.value)}
                        value={front}
                        rows='6'
                        required
                    />
                </div>
                <div className='col-sm-5'>
                    <textarea
                        id='back-add'
                        className='form-control'
                        onChange={(event) => setBack(event.target.value)}
                        value={back}
                        rows='6'
                        required
                    />
                </div>
                <div className='col-sm-2'>
                    {!editMode
                        ?
                        <div>
                            <button
                                className='btn btn-primary'
                                type="submit"
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-plus-lg" viewBox="0 0 16 16">
                                    <path fillRule="evenodd" d="M8 2a.5.5 0 0 1 .5.5v5h5a.5.5 0 0 1 0 1h-5v5a.5.5 0 0 1-1 0v-5h-5a.5.5 0 0 1 0-1h5v-5A.5.5 0 0 1 8 2Z"/>
                                </svg>
                            </button>
                        </div>
                        :
                        <div>
                            <button
                                aria-label='cancel'
                                className='btn btn-outline-secondary'
                                type='reset'
                                onClick={editToggle}
                            >
                                <svg xmlns='http://www.w3.org/2000/svg' width='20' height='20' fill='currentColor' className='bi bi-x-circle' viewBox='0 0 16 16'>
                                    <path d='M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z' />
                                    <path d='M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z' />
                                </svg>
                            </button>
                            <button
                                aria-label='save'
                                className='btn btn-outline-success'
                                type='submit'
                                onSubmit={editToggle}
                            >
                                <svg xmlns='http://www.w3.org/2000/svg' width='20' height='20' fill='currentColor' className='bi bi-check-circle' viewBox='0 0 16 16'>
                                    <path d='M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z' />
                                    <path d='M10.97 4.97a.235.235 0 0 0-.02.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-1.071-1.05z' />
                                </svg>
                            </button>
                        </div>
                    }
                </div>
            </div>
        </form>
    );
};