import type { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.evrecharge.india',
  appName: 'EVRecharge India',
  webDir: 'www/browser',
  server: {
    androidScheme: 'https',
  },
};

export default config;
