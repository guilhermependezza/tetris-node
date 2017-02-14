module.exports = function rotate(data, deg) {
  const rotations = {
    0: data => data,
    90: data => {
      const rotatedData = [ [], [], [], [], [] ];
      data.forEach(i => {
        rotatedData.forEach((val, index) => val.unshift(i[index]));
      });
      return rotatedData;
    },
    180: data => {
      const rotatedData = [];
      data.forEach(i => rotatedData.unshift(i.reverse()));
      return rotatedData;
    },
    270: data => {
      const rotatedData = [ [], [], [], [], []];
      data.forEach(i => {
        i.reverse().forEach((val, index) => { rotatedData[index].push(val); })
      });
      return rotatedData;
    }
  }
  return rotations[deg](data);
}
