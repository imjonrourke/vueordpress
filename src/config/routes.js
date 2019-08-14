import { BaseConfiguration } from './settings';

/**
 * @function RoutesConfigurator
 * Function to automatically apply configuration to routes functions
 * @param {Object} config
 * @param {Array<Function>} methodsList
 * @returns {Object} - Object with key of function name and value of returned function
 */
export const RoutesConfigurator = (
  config = new BaseConfiguration(),
  methodsList = []
) => {
  const returnObject = {};
  methodsList.forEach(method => {
    returnObject[method.name] = method(config)
  });
  return returnObject;
};