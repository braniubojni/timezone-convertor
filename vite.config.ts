import react from '@vitejs/plugin-react';
import { defineConfig, type PluginOption, type UserConfig } from 'vite';
import checker from 'vite-plugin-checker';
import tsconfigPaths from 'vite-tsconfig-paths';

// https://vite.dev/config/
export default defineConfig(({ mode }) => {
  const plugins: PluginOption[] = [
    react({
      babel: {
        plugins: [['babel-plugin-react-compiler']],
      },
    }),
    tsconfigPaths(),
  ];
  if (mode === 'development') {
    plugins.push(
      checker({
        typescript: true,
      })
    );
  }
  const usrConfig = {
    plugins,
    build: {
      sourcemap: mode === 'development',
      rollupOptions: {
        output: {
          manualChunks: {
            react: ['react', 'react-dom'],
            mui: ['@mui/material', '@mui/icons-material'],
          },
        },
      },
    },
  } satisfies UserConfig;
  return usrConfig;
});
