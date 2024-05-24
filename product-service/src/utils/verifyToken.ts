import jwt from 'jsonwebtoken'

export const verifyToken = (token: string): any => {

    const secretKey: jwt.Secret = process.env.AUTH_JWT_SECRET as jwt.Secret;

    try {

        const decodedToken = jwt.verify(token, secretKey);

        return decodedToken;

    } catch (error: any) {
        throw new Error(error.message);
    }
}