export class BaseConfiguration {
  constructor({
    siteUrl = '',
    apiUrl = '',
    username = '',
    password = '',
    connectionKey = '',
    connectionToken = ''
  }) {
    this.siteUrl = siteUrl;
    this.apiUrl = apiUrl;
    this.username = username;
    this.password = password;
    this.connectionKey = connectionKey;
    this.connectionToken = connectionToken;
  }
}
