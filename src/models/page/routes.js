import { generateRequestParameters } from '../../utils/requestParser';
import { BaseConfiguration } from '../../config/settings';
import { RoutesConfigurator } from '../../config/routes';
import Page from './page';

export function getPage(config) {
  return (data = {}) => {
    const dataToQueries = generateRequestParameters(data, ['type', 'id']);
    const { type = 'page', id } = data;
    return config.request.get(`/${type}s/${id}${dataToQueries}`)
      .then(response => new Page(response.data))
      .catch(error => error.data);
  };
}

export function getPages(config) {
  return (data = {}) => {
    const dataToQueries = generateRequestParameters(data, ['type']);
    const { type = 'page' } = data;
    return config.request.get(`/${type}s${dataToQueries}`)
      .then(response => new Page(response.data))
      .catch(error => error.data);
  };
}

export function createPage(config) {
  return (data = {}) => {
    const { type = 'page' } = data;
    return config.request.post(`/${type}s`, data)
      .then(response => new Page(response.data))
      .catch(error => error.data);
  };
}

export function updatePage(config) {
  return (data = {}) => {
    const { type = 'page', id } = data;
    return config.request.post(`/${type}s/${id}`)
      .then(response => new Page(response.data))
      .catch(error => error.data);
  };
}

export function deletePage(config) {
  return (id, type = 'page') => {
    return config.request.delete(`/${type}s/${id}`)
      .then(() => true)
      .catch(error => error.data);
  };
}

export function PageRoutes(config = new BaseConfiguration()) {
  return RoutesConfigurator(
    config,
    [
      getPage,
      getPages,
      createPage,
      updatePage,
      deletePage
    ]
  );
}