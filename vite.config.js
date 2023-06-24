import { defineConfig, loadEnv } from 'vite'
import vue from '@vitejs/plugin-vue'
import Components from 'unplugin-vue-components/vite';
import { AntDesignVueResolver } from 'unplugin-vue-components/resolvers';

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd())
  return {
    plugins: [
      vue(),
      Components({
        resolvers: [AntDesignVueResolver()],
      }),
    ],
    server:{
      host:true,
      port: 3000,
      proxy: { 
        "/api": {
         target: env.VITE_BASE_URL,
         changeOrigin: true,
         rewrite: (path) => path.replace(/^\/api/, '')
        }
      }
    },
  }

})
