const getElementById = (id, elementList) => {
    return elementList.find((element) => {
      return element.id === Number(id);
    });
  };


const updateElement = (id, queryArguments, elementList) => {
    const elementIndex = getIndexById(id, elementList);
    if (elementIndex === -1) {
      throw new Error('updateElement must be called with a valid id parameter');
    }
    if (queryArguments.id) {
      queryArguments.id = Number(queryArguments.id);
    }
    Object.assign(elementList[elementIndex], queryArguments);
    return elementList[elementIndex];
  };

  const createElement = (queryArguments, id) => {
    if (checkElementValues(queryArguments)) {


      
      
      return {
        'id': id,
        'name': queryArguments.name,
        'img': queryArguments.img,
        'url': queryArguments.url,
        'description': queryArguments.description,
        'location': {
            'address': queryArguments.location.address,
            'lat': queryArguments.location.lat,
            'lng': queryArguments.location.lng,
        }
         
        
      };
    } else {
      return false;
    }
  };

  const getIndexById = (id, elementList) => {
    return elementList.findIndex((element) => {
      return element.id === Number(id);
    });
  };

  const checkElementValues = (queryArguments) => {
    if (queryArguments.hasOwnProperty('name') &&
        queryArguments.hasOwnProperty('img') &&
        queryArguments.hasOwnProperty('url') &&
        queryArguments.hasOwnProperty('description') &&
        queryArguments.hasOwnProperty('location')) {
            if (queryArguments.hasOwnProperty('location.address') &&
            queryArguments.hasOwnProperty('location.lat') &&
            queryArguments.hasOwnProperty('location.lng')) {
                return true
            } else {
                return false
            }
            
        } else {
            return false
        }
  }

  module.exports = {
    createElement: createElement,
    getIndexById: getIndexById,
    getElementById: getElementById,
    updateElement: updateElement,
  };