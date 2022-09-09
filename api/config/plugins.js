module.exports = {
  'wysiwyg': {
    enabled: true,
    resolve: './src/plugins/wysiwyg' // path to plugin folder
  },
  'transformer': {
    enabled: true,
    config: {
      prefix: '/api/',
      responseTransforms: {
        removeAttributesKey: true,
        removeDataKey: true,
      }
    }
  },
}
