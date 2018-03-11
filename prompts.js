const path = require('path')
const vueConfig = require(path.join(process.cwd(), 'vue.config.js')).pluginOptions.meta

var prompts = [
  {
    type: 'input',
    name: 'projectName',
    message: 'Please enter the name of your project:'
  }
]

for (var key in vueConfig) {
  var promptIndex = prompts.findIndex(question => question.name === key)
  if (promptIndex !== -1) prompts[promptIndex].default = vueConfig[key]
}

module.exports = prompts
