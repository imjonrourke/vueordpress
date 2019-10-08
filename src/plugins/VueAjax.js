/**
 * VueAjax Vue plugin.
 * Access `BaseConfiguration` throughout application via `this.$ajax`
 * Register header information and scope to routes if needed
 */
import BaseConfiguration from '../config/settings';

export default {
  install(Vue, options) {
    Vue.prototype.$ajax = {
      $ajax: BaseConfiguration(options),
      get() {
        return this.$ajax;
      },
      registerModule(pageName, headers = []) {
        if (pageName && !this.$ajax.headers[pageName]) {
          this.$ajax.registerHeader(pageName, headers);
          this.$ajax.registerModule(pageName);
        }
      }
    };
    Vue.prototype.$ajax = BaseConfiguration(options);
    Vue.$ajax.registerHeader();
  }
};
