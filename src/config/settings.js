import axios from 'axios';

const Namespace = (path, headers = []) => ({
    path,
    headers
  });

class BaseConfiguration {
  constructor({
    siteUrl,
    baseUrl,
    username,
    password,
    connectionKey = '',
    connectionToken = ''
  }) {
    this.load({ siteUrl, baseUrl, username, password });
    this.connectionKey = connectionKey;
    this.connectionToken = connectionToken;
    this.modules = {};
    this.headers = {};
    this._request = axios.create({
      baseURL: this.apiUrl
    });
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
      */
     siteUrl = 'http://one.wordpress.test',
     baseUrl = '/wp-json/wp/v2',
     username = 'admin',
     password = 'admin'
  }) {
    this.siteUrl = siteUrl;
    this.baseUrl = baseUrl;
    this.username = username;
    this.password = password;
  }
  get request() {
    return this._request;
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
  return new BaseConfiguration(config);
}
