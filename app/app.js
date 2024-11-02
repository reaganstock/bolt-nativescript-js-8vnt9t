import { Application, Trace } from '@nativescript/core';

// Enable debug logging
if (global.isDebug) {
    Trace.enable();
    Trace.write('App starting...', 'App', Trace.messageType.info);
}

// Handle uncaught errors
Application.on(Application.uncaughtErrorEvent, (args) => {
    if (global.isDebug) {
        console.log('Uncaught error:', args.error);
    }
});

Application.run({ moduleName: 'app-root' });
