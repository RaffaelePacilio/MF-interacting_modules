// vite.config.js
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import federation from "@originjs/vite-plugin-federation";

export default defineConfig({
    plugins: [
        react(),
        federation({
            name: 'mfe1',
            filename: 'remoteEntry.js',
            exposes: {
                './App': './src/App',
                './styles': './src/index.css',
            },
            shared: ['react', 'react-dom'],
        }),
    ],
    css: {
        extract: true, // Opzione per estrarre i file CSS
    },
    build: {
        target: 'esnext',
    },
});
