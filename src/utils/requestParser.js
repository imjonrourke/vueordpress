export function filterRequestKeys(requestKeys, filteredKeys =[]) {
  return requestKeys.filter(key => {
    const filterKey = !!filteredKeys.filter(filteredKey => {
      if (key === filteredKey) {
        return filteredKey;
      }
    }).length;
    if (!filterKey) {
      return key;
    }
  });
}

export function generateRequestParameters(request, filterKeys) {
  const requestParamsString = filterRequestKeys(Object.keys(request), filterKeys)
    .map(key => `${key}=${request[key]}`)
    .join('&');
  return `?${requestParamsString}`;
}
