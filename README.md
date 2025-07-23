# bolt-nativescript-js-8vnt9t

> Demo NativeScript v8 app showcasing AI-based dog breed identification and test Stripe payments.

[Edit in StackBlitz next generation editor ⚡️](https://stackblitz.com/~/github.com/reaganstock/bolt-nativescript-js-8vnt9t)

## Features

- Capture a photo using the device camera and identify dog breeds (mock response).
- Simulate a Stripe payment flow in test mode.

## Prerequisites

- Node.js (>= 12.x)
- NativeScript CLI: `npm install -g @nativescript/cli`

## Installation

```bash
npm install
```

## Running the App

```bash
npm start
```

This command uses the `.stackblitzrc` configuration to install dependencies and launch the NativeScript Preview environment.

## Usage

1. Grant camera permissions when prompted.
2. Tap **Take Photo** to capture an image of your dog.
3. After the photo is loaded, tap **Pay** to simulate a Stripe payment and identify the breed.
4. View the result displayed on the screen.

## Project Structure

- `app/app.js` — application entry point and global error handling.
- `app/main-page.*` — UI markup and navigation setup.
- `app/main-view-model.js` — view model handling camera, AI service, and payment logic.
- `app/services/ai-service.js` — stubbed AI‐based dog breed identification.
- `app/services/payment-service.js` — stubbed Stripe test‐mode payment flow.
- `app/app.css` & `tailwind.config.js` — Tailwind CSS setup.

## Notes

- The public Stripe key in `payment-service.js` is for **test mode only**.
- AI and payment calls are mocked; replace with real endpoints as needed.

## License

MIT
