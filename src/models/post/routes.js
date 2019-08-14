import { generateRequestParameters } from '../../utils/requestParser';
import { BaseConfiguration } from '../../config/settings';
import { RoutesConfigurator } from '../../config/routes';
import Post from './post';

export function getPost(config) {
  return (data = {}) => {
    const dataToQueries = generateRequestParameters(data, ['type', 'id']);
    const { type = 'post', id } = data;
    return config.request.get(`/${type}s/${id}?${dataToQueries}`)
      .then(response => new Post(response.data))
      .catch(error => error.data);
  };
}

export function getPosts(config) {
  return (data = {}) => {
    const dataToQueries = generateRequestParameters(data, ['type']);
    const { type = 'post' } = data;
    return config.request.get(`/${type}s?${dataToQueries}`)
      .then(response => new Post(response.data))
      .catch(error => error.data);
  };
}

export function createPost(config) {
  return (data = {}) => {
    const { type = 'post' } = data;
    return config.request.post(`/${type}s`, data)
      .then(response => new Post(response.data))
      .catch(error => error.data);
  };
}

export function updatePost(config) {
  return (data = {}) => {
    const { type = 'post', id } = data;
    return config.request.post(`/${type}s/${id}`)
      .then(response => new Post(response.data))
      .catch(error => error.data);
  };
}

export function deletePost(config) {
  return (id, type = 'post') => {
    return config.request.delete(`/${type}s/${id}`)
      .then(() => true)
      .catch(error => error.data);
  };
}

export function PostRoutes(config = new BaseConfiguration()) {
  return RoutesConfigurator(
    config,
    [
      getPost,
      getPosts,
      createPost,
      updatePost,
      deletePost
    ]
  );
}