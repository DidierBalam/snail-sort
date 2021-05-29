const snailSort = async (dimensionalArray) => {
  try {
    if (dimensionalArray.length != 0) {
      let response = [];
      let { concatenatedArray, dimension } = await preparateData(
        dimensionalArray
      );

      for (let x = dimension; x > 0; x--) {
        let backup = [...concatenatedArray];
        for (let y = 0; y <= concatenatedArray.length; y++) {
          y < concatenatedArray.length
            ? (async () => {
                if (y + 1 <= x || (y + 1) % x == 0) {
                  backup.splice(backup.indexOf(concatenatedArray[y]), 1);
                  response.push(await getItem(concatenatedArray, y)); //force wait for answer*.
                }
              })()
            : (() => {
                concatenatedArray = backup.reverse();
              })();
        }
      }
      return response;
    } else throw 'empty array';
  } catch (e) {
    throw `:( sorry => ${e}`;
  }
};

const preparateData = async (array) => {
  try {
    let concatenatedArray = [];
    let dimension = 0;

    for (let x = 0; x < array.length; x++) {
      x == 0
        ? (dimension = array[x].length)
        : (() => {
            if (array[x].length != dimension) {
              throw 'invalid dimension';
            }
          })();

      concatenatedArray = concatenatedArray.concat(
        await getItem(array, x) /*force wait for answer*/
      );
    }
    return { concatenatedArray, dimension };
  } catch (e) {
    throw e;
  }
};

const getItem = (array, index) => {
  return new Promise((resolve) => {
    resolve(array[index]);
  });
};

export { snailSort };
