function schemaTableGenerator() {
  const tableQuerySelectors = {
    schema: '.attributes',
    arguments: '.arguments'
  };
  const jsonBody = {
    ...argumentsTableJSONGenerator(tableQuerySelectors.arguments),
    "schema": tableJSONGenerator(tableQuerySelectors.schema)[0]
  };
  return JSON.stringify(jsonBody);
}

function tableJSONGenerator(selector) {
  return [...document.querySelectorAll(selector)].map(arg => {
    const argumentsList = [...arg.querySelectorAll('td')];
    const fieldContent = argumentsList.filter((td, index) => {
      if (index % 2 !== 0) {
        return td.innerText;
      }
    }).map(td => td.innerText);
    const fieldName = argumentsList.filter((td, index) => {
      if (index % 2 === 0) {
        return td.querySelector('code').textContent;
      }
    }).map((td) => {
      const returnBuilder = (fieldKey, fieldType) => {
        return {
          name: fieldKey,
          type: fieldType
        };
      };
      const spanTypeList = td.querySelector('.type');
      if (spanTypeList) {
        return returnBuilder(td.querySelector('code').textContent, spanTypeList.innerText);
      }
      return returnBuilder(td.querySelector('code').textContent);
    }).map((content, index) => {
      if (content.type) {
        fieldContent[index] = {
          type: content.type,
          content: fieldContent[index]
        };
      }
      return content.name;
    });
    return fieldName.reduce((acc, field, index) => {
      acc[field] = fieldContent[index];
      return acc;
    }, {});
  });
}

function argumentsTableJSONGenerator(selector) {
  const jsonObject = {
    "list": {},
    "create": {},
    "retrieve": {},
    "update": {},
    "delete": {}
  };
  const argumentsElement = [...document.querySelectorAll('.arguments')];
  Object.keys(jsonObject).forEach((field, index) => {
    const definitionElement = [
      ...argumentsElement[index]
        .parentElement
        .parentElement
        .querySelector('.secondary')
        .querySelectorAll('.toc-heading')];
    jsonObject[field]["definition"] = definitionElement[0].nextElementSibling.innerText;
    jsonObject[field]["arguments"] = tableJSONGenerator(selector)[index];
  });
  return jsonObject;
}

schemaTableGenerator('.attributes');


// JSON.stringify(Array.prototype.filter.call(document.querySelector('.arguments').querySelectorAll('td'), (td, index) => {
//   if (index % 2 === 0) {
//     return td;
//   }
// }).reduce((acc, td) => {
//   acc[td.querySelector('code').textContent] = td.querySelector('code').textContent;
//   return acc;
// }, {}))

// [...document.querySelectorAll('.arguments')].map(arg => {
//   return JSON.stringify(Array.prototype.filter.call(arg.querySelectorAll('td'), (td, index) => {
//     if (index % 2 === 0) {
//       return td;
//     }
//   }).reduce((acc, td) => {
//     acc[td.querySelector('code').textContent] = td.querySelector('code').textContent;
//     return acc;
//   }, {}))
// })

// [...document.querySelectorAll('.arguments')].map(arg => {
//   const fieldName = [...arg.querySelectorAll('td')].filter((td, index) => {
//     if (index % 2 === 0) {
//       return td.querySelector('code').textContent;
//     }
//   });
//   const fieldContent = [...arg.querySelectorAll('td')].filter((td, index) => {
//     if (index % 2 !== 0) {
//       return td.innerText;
//     }
//   });
//   return JSON.stringify(fieldName.reduce((acc, field, index) => {
//     acc[field.querySelector('code').textContent] = fieldContent[index].innerText;
//     return acc;
//   }, {}));
// });

// function tableJSONGenerator() {
//   const jsonObject = {
//     "list": {},
//     "create": {},
//     "retrieve": {},
//     "update": {},
//     "delete": {}
//   };
//   const generatedArguments = [...document.querySelectorAll('.arguments')].map(arg => {
//     const fieldName = [...arg.querySelectorAll('td')].filter((td, index) => {
//       if (index % 2 === 0) {
//         return td.querySelector('code').textContent;
//       }
//     });
//     const fieldContent = [...arg.querySelectorAll('td')].filter((td, index) => {
//       if (index % 2 !== 0) {
//         return td.innerText;
//       }
//     });
//     return fieldName.reduce((acc, field, index) => {
//       acc[field.querySelector('code').textContent] = fieldContent[index].innerText;
//       return acc;
//     }, {});
//   });
//   Object.keys(jsonObject).forEach((field, index) => {
//     jsonObject[field]["arguments"] = generatedArguments[index]
//   });
//   return JSON.stringify(jsonObject);
// }
// tableJSONGenerator();
