module.exports = {
  stories: ['../src/**/*.stories.mdx', '../src/**/*.stories.@(js|jsx|ts|tsx)'],
  addons: ['@storybook/addon-links', '@storybook/addon-essentials'],
  framework: '@storybook/react',
  // webpackFinal: async (config) => ({
  //   ...config,
  //   module: {
  //     ...config.module,
  //     rules: [
  //       {
  //         test: /\.less$/,
  //         use: [
  //           'style-loader',
  //           'css-loader',
  //           {
  //             loader: 'less-loader',
  //             options: { javascriptEnabled: true },
  //           },
  //         ],
  //       },
  //       { test: /\.css$/, use: ['style-loader', 'css-loader'] },
  //     ],
  //   },
  // }),
}
