import { Observable } from '@nativescript/core';
import { Camera, requestPermissions } from '@nativescript/camera';
import { ImageSource } from '@nativescript/core';
import { identifyDogBreed } from './services/ai-service';
import { PaymentService } from './services/payment-service';

export function createViewModel() {
    const viewModel = new Observable();

    viewModel.dogImage = null;
    viewModel.breedResult = "Take a photo of your dog to begin";
    viewModel.isLoading = false;
    viewModel.showPaymentUI = false;
    
    // Initialize services lazily
    let paymentService;
    try {
        paymentService = new PaymentService();
    } catch (error) {
        console.error('Payment service initialization error:', error);
    }

    viewModel.takePhoto = async () => {
        try {
            // Request camera permissions
            const permission = await requestPermissions();
            if (!permission) {
                viewModel.set('breedResult', 'Camera permission is required');
                return;
            }

            // Reset state if retaking photo
            viewModel.set('showPaymentUI', false);
            viewModel.set('breedResult', '');

            const options = {
                width: 300,
                height: 300,
                keepAspectRatio: true,
                saveToGallery: false
            };

            const imageAsset = await Camera.takePicture(options);
            const imageSource = await ImageSource.fromAsset(imageAsset);
            
            viewModel.set('dogImage', imageSource);
            viewModel.set('showPaymentUI', true);
            viewModel.set('breedResult', '');
        } catch (error) {
            console.error('Error taking photo:', error);
            viewModel.set('breedResult', 'Error taking photo. Please try again.');
        }
    };

    viewModel.processPayment = async () => {
        try {
            viewModel.set('isLoading', true);
            
            // Process payment
            if (!paymentService) {
                paymentService = new PaymentService();
            }
            
            // Test mode - skip actual payment for now
            // await paymentService.processPayment(1.99);
            
            // Convert image to base64
            const base64Image = viewModel.dogImage.toBase64String('jpg');
            
            // Identify breed
            const result = await identifyDogBreed(base64Image);
            
            viewModel.set('breedResult', `Identified breed: ${result.breed}`);
            viewModel.set('showPaymentUI', false);
        } catch (error) {
            console.error('Error:', error);
            viewModel.set('breedResult', '❌ Error processing request. Please try again.');
        } finally {
            viewModel.set('isLoading', false);
        }
    };

    return viewModel;
}
