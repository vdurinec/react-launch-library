// eslint-disable-next-line
module.exports = {
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      issuer: {
        test: /\.(js|ts)x?$/,
      },
      use: ['@svgr/webpack'],
    });

    config.module.rules.push({
      test: /\.js$/,
      include: [/node_modules/],
      loader: 'babel-loader',
    });

    return config;
  },
};
