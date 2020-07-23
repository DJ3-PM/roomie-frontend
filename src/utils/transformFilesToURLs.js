const transformFilesToURLs = ({ files }) => {
  const auxArray = [];
  // TODO

  // algo que evita el uso de push al array para manejar métodos inmutables seria poder
  // hacer un map
  // const auxArray = Object.keys(files).map((entry) => {
  //   return URL.createObjectURL(files[entry]);
  // });
  Object.keys(files).forEach((entry) => {
    auxArray.push(URL.createObjectURL(files[entry]));
  });
  return auxArray;
};

export default transformFilesToURLs;
