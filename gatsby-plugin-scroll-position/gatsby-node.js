const path = require('path')
const fs = require('fs')

const SCROLL_POSITION_SCRIPT = fs.readFileSync(
  path.resolve(__dirname, './compiled/script.js'),
  'utf-8'
)

exports.pluginOptionsSchema = ({ Joi }) => {
  return Joi.object({
    elements: Joi.array().required(),
  })
}

exports.onCreateWebpackConfig = function (
  { actions, plugins },
  pluginOptions
) {
  actions.setWebpackConfig({
    plugins: [
      plugins.define({
        'window.__SP_ELEMENTS__': JSON.stringify(pluginOptions.elements),
        'globalThis.__SP_SCRIPT__': JSON.stringify(SCROLL_POSITION_SCRIPT),
      }),
    ],
  })
}
