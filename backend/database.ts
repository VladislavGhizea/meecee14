import { Pool } from 'pg';

class DatabaseConfig {
    user: string;
    host: string;
    database: string;
    password: string;
    port: number;

    constructor(user: string, host: string, database: string, password: string, port: number) {
        this.user = user;
        this.host = host;
        this.database = database;
        this.password = password;
        this.port = port;
    }
}

const dbConfig = new DatabaseConfig('your_username', 'localhost', 'your_database', 'your_password', 5432);

const pool = new Pool({
    user: dbConfig.user,
    host: dbConfig.host,
    database: dbConfig.database,
    password: dbConfig.password,
    port: dbConfig.port,
});

export default pool;

(async () => {
    const client = await pool.connect();
    try {
        await client.query(`
            CREATE TABLE IF NOT EXISTS users (
                username VARCHAR(20) PRIMARY KEY,
                email VARCHAR(50),
                password VARCHAR(50),
                nome VARCHAR(30),
                cognome VARCHAR(30),
                CF VARCHAR(16),
                indirizzo VARCHAR(50),
                CAP INTEGER,
                citta VARCHAR(30)
            )
        `);
        
        await client.query(`
            CREATE TABLE IF NOT EXISTS descriptions (
            id SERIAL PRIMARY KEY,
            weight NUMERIC(4, 2),
            attitude VARCHAR(30),
            fur VARCHAR(30),
            breed VARCHAR(30)
            )
        `);
        
        await client.query(`
            CREATE TABLE IF NOT EXISTS cats (
                id SERIAL PRIMARY KEY,
                name VARCHAR(30),
                age INTEGER,
                description_id INTEGER REFERENCES descriptions(id),
                photoUrl TEXT
            )
        `);
        
        await client.query(`
            CREATE TABLE IF NOT EXISTS matches (
                id SERIAL PRIMARY KEY,
                cat INTEGER REFERENCES cats(id),
                username VARCHAR(20) REFERENCES users(username),
                date DATE
            )
        `);
        
        await client.query(`
            CREATE TABLE IF NOT EXISTS likes (
                id SERIAL PRIMARY KEY,
                cat INTEGER REFERENCES cats(id),
                username VARCHAR(20) REFERENCES users(username),
                date DATE
            )
        `);
        
        await client.query(`
            CREATE TABLE IF NOT EXISTS dislikes (
                id SERIAL PRIMARY KEY,
                cat INTEGER REFERENCES cats(id),
                username VARCHAR(20) REFERENCES users(username),
                date DATE
            )
        `);
    } finally {
        client.release();
    }
})();

interface User {
    username: string;
    email: string;
    password: string;
    nome: string;
    cognome: string;
    CF: string;
    indirizzo: string;
    CAP: number;
    citta: string;
}

export async function addUser(user: User) {
    const client = await pool.connect();
    try {
        await client.query('INSERT INTO users (username, email, password, nome, cognome, CF, indirizzo, CAP, citta) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9)', 
            [user.username, user.email, user.password, user.nome, user.cognome, user.CF, user.indirizzo, user.CAP, user.citta]);
    } finally {
        client.release();
    }
}

export async function addCat(name: string, description: { weight: number, attitude: string, fur: string, breed: string }, photoUrl: string) {
    const client = await pool.connect();
    try {
        const res = await client.query('INSERT INTO descriptions (weight, attitude, fur, breed) VALUES ($1, $2, $3, $4) RETURNING id', 
            [description.weight, description.attitude, description.fur, description.breed]);
        const description_id = res.rows[0].id;
        await client.query('INSERT INTO cats (name, description_id, photoUrl) VALUES ($1, $2, $3)', [name, description_id, photoUrl]);
    } finally {
        client.release();
    }
}

export async function getCats() {
    const client = await pool.connect();
    try {
        const res = await client.query('SELECT * FROM cats');
        return res.rows;
    } finally {
        client.release();
    }
}

export async function getCatById(id: number) {
    const client = await pool.connect();
    try {
        const res = await client.query('SELECT * FROM cats WHERE id = $1', [id]);
        return res.rows[0];
    } finally {
        client.release();
    }
}

export async function addMatch(cat_id: number, username: string, date: string) {
    const client = await pool.connect();
    try {
        await client.query('INSERT INTO matches (cat_id, username, date) VALUES ($1, $2, $3)', [cat_id, username, date]);
    } finally {
        client.release();
    }
}

export async function addLike(cat_id: number, username: string, date: string) {
    const client = await pool.connect();
    try {
        await client.query('INSERT INTO likes (cat_id, username, date) VALUES ($1, $2, $3)', [cat_id, username, date]);
    } finally {
        client.release();
    }
}

export async function addDislike(cat_id: number, username: string, date: string) {
    const client = await pool.connect();
    try {
        await client.query('INSERT INTO dislikes (cat_id, username, date) VALUES ($1, $2, $3)', [cat_id, username, date]);
    } finally {
        client.release();
    }
}

export async function getUsers() {
    const client = await pool.connect();
    try {
        const res = await client.query('SELECT * FROM users');
        return res.rows;
    } finally {
        client.release();
    }
}

export async function getUserByUsername(username: string) {
    const client = await pool.connect();
    try {
        const res = await client.query('SELECT * FROM users WHERE username = $1', [username]);
        return res.rows[0];
    } finally {
        client.release();
    }
}

export async function getMatches() {
    const client = await pool.connect();
    try {
        const res = await client.query('SELECT * FROM matches');
        return res.rows;
    } finally {
        client.release();
    }
}

export async function getLikes() {
    const client = await pool.connect();
    try {
        const res = await client.query('SELECT * FROM likes');
        return res.rows;
    } finally {
        client.release();
    }
}

export async function getDislikes() {
    const client = await pool.connect();
    try {
        const res = await client.query('SELECT * FROM dislikes');
        return res.rows;
    } finally {
        client.release();
    }
}