import { defineConfig } from 'dumi';

export default defineConfig({
  publicPath: process.env.NODE_ENV === 'production' ? './' : '/',
  runtimePublicPath: {},
  themeConfig: {
    name: 'LanFeng',
  },
});
