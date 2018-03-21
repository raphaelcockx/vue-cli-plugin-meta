const path = require('path')
var vueConfig

try {
  vueConfig = require(path.join(process.cwd(), 'vue.config.js')).pluginOptions.meta
} catch (err) {
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
    filter: removeIndex
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
  },
  {
    type: 'input',
    name: 'socialImage',
    message: function (answers) {
      return `Url of the image to be shown when shared on social media: ${addTrailingSlash(answers.url)}`
    }
  },
  {
    type: 'input',
    name: 'googleAnalytics',
    message: 'Google analytics Tracking ID (starts with UA-, leave blank if none):'
  }
]

function removeIndex (url) {
  return url.match(/index.html$/) == null ? url : url.slice(0, -10)
}

function addTrailingSlash (url) {
  return url.match(/\/$/) == null ? `${url}/` : url
}

for (var key in vueConfig) {
  var promptIndex = prompts.findIndex(question => question.name === key)
  if (promptIndex !== -1) prompts[promptIndex].default = vueConfig[key]
}

module.exports = prompts
