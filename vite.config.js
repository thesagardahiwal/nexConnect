import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // define: {
  //   __DEFINES__: '{}',
  //   __BASE__: '{}',
  //   __HMR_CONFIG_NAME__: '{}',
  //   __HMR_PROTOCOL__: '"ws"',
  //    __HMR_PORT__: '10000',
  //   __SERVER_HOST__: '""',
  //   __HMR_HOSTNAME__: '"appwrite-fun.onrender.com"',
  //   __HMR_BASE__: '"/"',
  //   __HMR_DIRECT_TARGET__: '{}',
  //   __HMR_ENABLE_OVERLAY__: '{}',
  //   __HMR_CLIENT_URL__: '{}',
  //   __HMR_WS_URL__: '{}',
  //   __HMR_ENABLE__: '{}',
  // },
})

