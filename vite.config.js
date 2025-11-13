import { defineConfig } from 'vite';
export default defineConfig(
    { 
        base: '/get-my-adrian/', 
        server: {
            watch: {
                usePolling: true
            }
        
        }
    });