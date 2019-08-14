import axios from 'axios';

const Namespace = (path, headers = []) => ({
    path,
    headers
  });

export class BaseConfiguration {
  constructor({
    siteUrl,
    namespace,
    username,
    password,
    connectionKey = '',
    connectionToken = ''
  }) {
    this.load({ siteUrl, namespace, username, password });
    this.connectionKey = connectionKey;
    this.connectionToken = connectionToken;
    this.modules = {};
    this.headers = {};
    this._request = axios.create({
      baseURL: this.apiUrl
    });
  }
  get apiUrl() {
    return `${this.siteUrl}${this.namespace}`;
  }
  load({
     siteUrl = 'http://localhost/wp-json',
     namespace = '/wp/v2',
     username = 'admin',
     password = 'admin'
  }) {
    this.siteUrl = siteUrl;
    this.namespace = namespace;
    this.username = username;
    this.password = password;
  }
  // eslint-disable-next-line
  request(requestUrl) {
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
  /*
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
}

export let base = new BaseConfiguration();
