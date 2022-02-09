const fromNx = require('@nrwl/react/plugins/bundle-rollup');

module.exports = (options) => {
  options = fromNx(options);

  const postcssPluginIdx = options.plugins.findIndex(
    (p) => p.name === 'postcss'
  );

  // Replace the postcss plugin with our own.
  options.plugins.splice(
    postcssPluginIdx,
    1,
    require('rollup-plugin-postcss')({
      inject: true,
      extract: true,
      autoModules: true,
      plugins: [require('autoprefixer')],
      use: [
        [
          'sass',
          {
            includePaths: ['libs/shared-styles/lib'],
          },
        ],
      ],
    })
  );

  return options;
};
