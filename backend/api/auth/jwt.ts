import jwt from 'jsonwebtoken';

const SECRET_KEY = process.env.JWT_SECRET as string;
const REFRESH_SECRET_KEY = process.env.JWT_REFRESH_SECRET as string;

if (!SECRET_KEY) {
  throw new Error('La variabile d\'ambiente JWT_SECRET non è definita.');
}

if (!REFRESH_SECRET_KEY) {
  throw new Error('La variabile d\'ambiente JWT_REFRESH_SECRET non è definita.');
}

interface UserPayload {
  username: string;
  email: string;
}

const ACCESS_TOKEN_EXPIRY = '1h';
const REFRESH_TOKEN_EXPIRY = '7d';

export function generateToken(payload: UserPayload): string {
  return jwt.sign(payload, SECRET_KEY, { expiresIn: ACCESS_TOKEN_EXPIRY });
}

export function generateRefreshToken(payload: UserPayload): string {
  return jwt.sign(payload, REFRESH_SECRET_KEY, { expiresIn: REFRESH_TOKEN_EXPIRY });
}

export function getUser(token: string): UserPayload | null {
  try {
    const user = jwt.verify(token, SECRET_KEY) as unknown as UserPayload;
    return user;
  } catch (error) {
    console.error(error); // Gestisci l'errore o registra dettagli per il debug
    return null;
  }
}