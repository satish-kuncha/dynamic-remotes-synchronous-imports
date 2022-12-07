const moduleFileName = 'remoteEntry.js';

// Host module
const app1Module = {
  fileName: moduleFileName,
  name: 'app1',
  port: 3001,
};

// Remote module
const remoteNeodashModule = {
  fileName: moduleFileName,
  name: 'remoteNeodash',
  port: 3005,
  get url() {
    return `https://cloned-neo-dash-gg8ludmsz-satish-kuncha.vercel.app/`;
  },
  urlGlobalVariable: 'remoteNeodashUrl',
  get federationConfig() {
    // remoteNeodash@[window.remoteNeodashUrl]/remoteEntry.js
    return `${this.name}@[window.${this.urlGlobalVariable}]/${this.fileName}`;
  },
};

module.exports = {
  app1Module,
  remoteNeodashModule,
};
