import pool, { addUser, addCat, addMatch, addLike, addDislike } from './database';

(async () => {
    const client = await pool.connect();
    try {
        // Add test users
        await addUser({
            username: 'john_doe',
            email: 'john@example.com',
            password: 'password123',
            nome: 'John',
            cognome: 'Doe',
            CF: 'JHNDOE1234567890',
            indirizzo: '123 Main St',
            CAP: 12345,
            citta: 'Anytown'
        });

        await addUser({
            username: 'jane_smith',
            email: 'jane@example.com',
            password: 'password123',
            nome: 'Jane',
            cognome: 'Smith',
            CF: 'JANSMI1234567890',
            indirizzo: '456 Elm St',
            CAP: 67890,
            citta: 'Othertown'
        });

        // Add test cats
        await addCat('Whiskers', { weight: 4.5, attitude: 'Friendly', fur: 'Short', breed: 'Siamese' }, 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS-YIGV8GTRHiW_KACLMhhi9fEq2T5BDQcEyA&s');
        await addCat('Fluffy', { weight: 5.0, attitude: 'Playful', fur: 'Long', breed: 'Persian' }, 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS-YIGV8GTRHiW_KACLMhhi9fEq2T5BDQcEyA&s');

        // Add test matches
        await addMatch(1, 'john_doe', '2023-10-01');
        await addMatch(2, 'jane_smith', '2023-10-02');

        // Add test likes
        await addLike(1, 'john_doe', '2023-10-01');
        await addLike(2, 'jane_smith', '2023-10-02');

        // Add test dislikes
        await addDislike(2, 'john_doe', '2023-10-03');
        await addDislike(1, 'jane_smith', '2023-10-04');
    } finally {
        client.release();
    }
})();