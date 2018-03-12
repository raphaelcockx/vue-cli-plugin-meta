const path = require('path')
var vueConfig

try {
  vueConfig = require(path.join(process.cwd(), 'vue.config.js')).pluginOptions.meta
}
catch(err) {
  vueConfig = {}
}

var prompts = [
  {
    type: 'input',
    name: 'projectName',
    message: 'Name of your project:'
  },
  {
    type: 'input',
    name: 'url',
    message: 'Homepage (url) of your project, including http(s):',
    filter: (url) => {
      var hasIndex = url.match(/index.html$/)
      if (hasIndex !== null) url = url.substr(0, hasIndex.index)
      return url
    }
  },
  {
    type: 'input',
    name: 'description',
    message: 'Description of your project:'
  },
  {
    type: 'input',
    name: 'twitterHandle',
    message: 'Twitter handle associated with this project (leave blank if none): @'
  }
]

for (var key in vueConfig) {
  var promptIndex = prompts.findIndex(question => question.name === key)
  if (promptIndex !== -1) prompts[promptIndex].default = vueConfig[key]
}

module.exports = prompts
