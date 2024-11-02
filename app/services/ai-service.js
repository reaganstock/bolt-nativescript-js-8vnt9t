import axios from 'axios';

export async function identifyDogBreed(base64Image) {
    try {
        // Test mode - return mock response
        return {
            breed: 'Test Mode: Golden Retriever',
            confidence: 0.95
        };
        
    } catch (error) {
        console.error('Error identifying dog breed:', error);
        throw error;
    }
}