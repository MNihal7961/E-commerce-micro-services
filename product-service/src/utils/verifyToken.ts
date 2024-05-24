import jwt from 'jsonwebtoken';

export const verifyToken = (token: string): any | null => {
    console.log(`called`);
    const secretKey: jwt.Secret | undefined = process.env.AUTH_JWT_SECRET;
    if (!secretKey) {
        throw new Error("JWT secret key is not defined in environment variables");
    }
    try {
        const decodedToken = jwt.verify(token, secretKey) as any;
        if (!decodedToken) {
            console.log("Invalid token");
            return null;
        }
        return decodedToken;
    } catch (error: any) {
        if (error instanceof jwt.JsonWebTokenError) {
            console.error("JWT verification error:", error.message);
            return null;
        } else {
            console.error("Unexpected error during JWT verification:", error);
            throw new Error("Unexpected error during JWT verification");
        }
    }
}
