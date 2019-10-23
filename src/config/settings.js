const Namespace = (path, headers = []) => ({
    path,
    headers
  });
const Header = (name, value) => ({
  name,
  value,
});

const UseAxios = ({ load = false, attempts = 3 }) => ({
  load,
  attempts,
});

class BaseConfiguration {
  constructor(siteUrl, baseUrl, username, password, useAxios, connectionKey = '', connectionToken = '') {
    this.load({ siteUrl, baseUrl, username, password, useAxios });
    this.connectionKey = connectionKey;
    this.connectionToken = connectionToken;
    this.modules = {};
    this.headers = {};
  }
  get apiUrl() {
    return `${this.siteUrl}${this.baseUrl}`;
  }
  load({
     /**
       * - Register headers for requests
       * @property {String} siteUrl - URL for WP site instance
       * @property {String} baseUrl - Directory for REST API
       * @property {String} username - Username for WP REST request
       * @property {String} password - Password for WP REST request
       * @property {Boolean|Object} useAxios - Lazy-load import axios
      */
     siteUrl = 'http://one.wordpress.test',
     baseUrl = '/wp-json/wp/v2',
     username = 'admin',
     password = 'admin',
     useAxios = false,
  }) {
    this.siteUrl = siteUrl;
    this.baseUrl = baseUrl;
    this.username = username;
    this.password = password;
    this._request = null;
    if (typeof useAxios === 'boolean') {
      this.useAxios = UseAxios({ load: useAxios })
    } else if (typeof useAxios !== 'boolean' && useAxios.load) {
      this.useAxios = UseAxios(useAxios);
    } else {
      this.useAxios = UseAxios({ load: false });
    }
    if (this.useAxios.load) {
      this.importAxios(this.useAxios.attempts);
    }
  }
  get request() {
    return this._request;
  }

  /**
   * Asynchronously load Axios based on implementation
   * Dynamically import axios on demand to keep initial bundle smaller
   */
  importAxios(attemptCount = 3) {
    // Create recursive function for errored import reattempts
    // Errored import can be due to network failure after this bundle is loaded
    const dynamicallyImportAxios = (decrementor = 0) => {
      return import('axios')
        .then((axios) => {
          this._request = axios.create({
            baseUrl: this.apiUrl,
          });
          return {
            status: 200,
            message: 'SUCCESS',
          };
        })
        .catch(() => {
          if (decrementor > 0) {
            return dynamicallyImportAxios(decrementor - 1);
          }
          return {
            status: 404,
            message: 'NOT FOUND',
          };
        });
    };
    return dynamicallyImportAxios(attemptCount);
  }
  // NOTE: TO BE USED AT A LATER DATE
  // Idea would be to allow namespace -> header associations
  // - e.g. '/account' could use 'Authorization' header, etc
  registerModule(namespace = '/', headers = []) {
    if (namespace !== '/') {
      this.modules[namespace] = Namespace(namespace, headers);
      return this.apiUrl + namespace;
    }
  }
  /**
   * Register headers for requests
   * @params {String} headerName - name of the header
   * @params {String} value - the value for that specific header
   * @params {Array<String>} namespaces - a list of namespaces header is associated to
   */
  registerHeader(headerName = '', value = '', namespaces = []) {
    if (headerName.length && value.length) {
      this.headers[headerName] = value;
      this._request.defaults.headers.common[headerName] = value;
      namespaces.forEach(namespace => {
        if (this.modules[namespace]) {
          this.modules[namespace].headers.push(headerName);
        }
      });
    }
  }
  /**
   * Set Site URL externally
   * @param {String} siteUrl - Site URL to use for application
   */
  setSiteUrl(siteUrl) {
    this.siteUrl = siteUrl;
  }
  /**
   * Set Base URL used for API's root externally
   * @param {String} baseUrl - Base URL to use for application
   */
  setBaseUrl(baseUrl) {
    this.baseUrl = baseUrl;
  }
}

export default function(config) {
  const { siteUrl, baseUrl, username, password, connectionKey = '', connectionToken = '' } = config;
  return new BaseConfiguration(siteUrl, baseUrl, username, password, connectionKey, connectionToken);
}
