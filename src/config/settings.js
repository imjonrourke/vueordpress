import axios from 'axios';

const Namespace = (path, headers = []) => ({
    path,
    headers
  });

export class BaseConfiguration {
  constructor({
    siteUrl = 'http://localhost/wp-json',
    namespace = '/wp/v2',
    username = 'admin',
    password = 'admin',
    connectionKey = '',
    connectionToken = ''
  }) {
    this.siteUrl = siteUrl;
    this.namespace = namespace;
    this.username = username;
    this.password = password;
    this.connectionKey = connectionKey;
    this.connectionToken = connectionToken;
    this.modules = {};
    this.headers = {};
    this._request = axios;
  }
  get apiUrl() {
    return `${this.siteUrl}${this.namespace}`;
  }
  // eslint-disable-next-line
  request(requestUrl) {
    return this._request;
  }
  registerModule(namespace = '/') {
    if (namespace !== '/') {
      this.modules[namespace] = Namespace(namespace);
      return this.apiUrl + namespace;
    }
  }
  registerHeader(headerName = '', value = '', namespaces = []) {
    if (headerName.length && value.length) {
      this.headers[headerName] = value;
      namespaces.forEach(namespace => {
        if (this.modules[namespace]) {
          this.modules[namespace].headers.push(headerName);
        }
      });
    }
  }
}
