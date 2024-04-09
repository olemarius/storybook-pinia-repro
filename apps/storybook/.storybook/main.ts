import type { StorybookConfig } from "@storybook/vue3-vite";
import { mergeConfig } from 'vite';
const config: StorybookConfig = {
  stories: ["../src/**/*.mdx", "../src/**/*.stories.@(js|jsx|mjs|ts|tsx)"],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@chromatic-com/storybook",
    "@storybook/addon-interactions",
  ],
  framework: {
    name: "@storybook/vue3-vite",
    options: {},
  },
  async viteFinal(config, { configType }) {
    return mergeConfig(config, {
      build:{
        minify: false,
        sourcemap: true,
      },
    });
  },
  docs: {
    autodocs: "tag",
  },
};
export default config;
