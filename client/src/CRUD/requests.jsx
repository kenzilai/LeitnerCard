const API = 'http://localhost:8000/api/flashcards/'

export async function GET() {
    const response = await fetch(API);
    return await response.json();
};

export async function POST(card) {
    const response = await fetch(API, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(card)
    });
    return await response.json();
};

export async function PUT(card) {
    const response = await fetch(API + card.id + '/', {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(card)
    });
    return await response.json();
}

export async function DELETE(id) {
    return await fetch(API + id, {
        method: 'DELETE'
    });
};