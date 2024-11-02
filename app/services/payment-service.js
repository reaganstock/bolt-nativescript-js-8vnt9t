import { Stripe } from '@nativescript/stripe';

export class PaymentService {
    constructor() {
        try {
            // Initialize in test mode
            Stripe.init('pk_test_51QGWED2XS76yKIDilG5LEfnsHTQopdUzb85W3nqed0B3ANWoIu7jaoNKheMO5IN8aSamDHnAwkC6LDPUplOYM5D100MYzN5Ejx');
        } catch (error) {
            console.error('Stripe initialization error:', error);
            throw error;
        }
    }

    async processPayment(amount) {
        try {
            // Test mode - return mock payment method
            return { id: 'test_payment_method' };
            
            /* Commented out for initial testing
            const paymentMethod = await Stripe.createPaymentMethod({
                card: {
                    number: '4242424242424242',
                    expMonth: 12,
                    expYear: 2025,
                    cvc: '123'
                }
            });
            */
            // Here you would typically send the paymentMethod.id to your backend
            // to complete the payment. This is a simplified example.
            return paymentMethod;
        } catch (error) {
            console.error('Payment error:', error);
            throw error;
        }
    }
}