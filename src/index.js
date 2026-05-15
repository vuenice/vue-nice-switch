import VueNiceSwitch from './VueNiceSwitch.vue';

export { VueNiceSwitch };

export default {
  install(app) {
    app.component('VueNiceSwitch', VueNiceSwitch);
  },
};