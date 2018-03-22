# vue-cli-plugin-meta

**Give your new Vue app some meta love**

A Vue-cli plugin to add social media tags and other metadata to your project. Because while vue-cli 3.x lets you get started with a new project real quick, it will leave you with a rather 'barebones' index.html file. This plugin fixes that. By answering just a few questions about your project, you will benefit from:

- A visual representation of your project when shared on Twitter, Facebook, Slack... This includes a title, description and image.
- An automatically included link to your Twitter account or that of your client when shared by anyone on Twitter.
- Google Analytics tracking (more providers to follow soon).

## Getting started

:warning: Make sure you're working with vue-cli 3.x. Earlier versions do not support plugins such as this one:

```
vue --version
```

Create a new project if you haven't done so:

```
vue create my-new-app
```

Switch to your (new) project and add the plugin:

```
cd my-new-app
vue add meta
```

## What we need to know

Well, that was the hard part. Now it's just a matter of answering a few prompts. Here's what vue-cli-plugin-meta will want to know.

- The **name** of your project: used as the title of the page and when shared on social media.
- The **homepage** of your published project. This needs to be a full and absolute url.
- A **description** of your project, used for social media. There's no hard limit when it comes to the length of this field, but Facebook will abbreviate it depending on where your shared content is being shown.
- A **Twitter handle** associated with the project. No need to include the initial @. This will be linked backed to when shared, leave blank if not applicable.
- A link to the **image** that you want to show up when shared. Facebook and Twitter expect an absolute and full url here, but you'll only need to provide whatever follows the homepage url you've provided earlier.
- The **tracking ID** you want to use for Google Analytics. Including UA- at the start.

## Providing data through vue.config.js

If some of this data is shared across projects or you just prefer not to use the prompting system, you can always add some or all of it in the optional `vue.config.js` file in the root of your project. Data found there will be shown as pre-filled when you're being prompted which means you can still change it at that point or just press enter to accept it as is.

`vue.config.js` needs to export an object with the following structure and keys:

``` js
module.exports = {
  pluginOptions: {
    meta: {
      projectName: 'My project',
      url: 'https://example.com',
      description: 'Lorem ipsum dolor sid amet',
      twitterHandle: 'example',
      socialImage: 'images/social.jpg',
      googleAnalytics: 'UA-12345678-1'
    }
  }
}
```

Make sure to include the data in the same format as described above (e.g. no @ in front of the Twitter handle). Again, you can 'pre-fill' any number of prompts this way.
