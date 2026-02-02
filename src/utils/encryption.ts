import CryptoJS from 'crypto-js';

const ENCRYPTION_KEY = process.env.NEXT_PUBLIC_ENCRYPTION_KEY || '';

if (!ENCRYPTION_KEY) {
    console.warn('Encryption key is missing from environment variables! Messages will not be properly encrypted.');
}

export const encryptMessage = (text: string): string => {
    if (!text) return '';
    try {
        return CryptoJS.AES.encrypt(text, ENCRYPTION_KEY).toString();
    } catch (error) {
        console.error('Encryption failed:', error);
        return text;
    }
};

export const decryptMessage = (cipherText: string): string => {
    if (!cipherText) return '';
    try {
        const bytes = CryptoJS.AES.decrypt(cipherText, ENCRYPTION_KEY);
        const originalText = bytes.toString(CryptoJS.enc.Utf8);
        return originalText || cipherText; // Return cipherText if decryption yields empty string (likely not encrypted)
    } catch (error) {
        console.error('Decryption failed:', error);
        return cipherText; // Fallback to original text if decryption fails
    }
};
