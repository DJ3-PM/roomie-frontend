const transformFilesToURLs = ({ files }) => {
  const auxArray = [];
  Object.keys(files).forEach((entry) => {
    auxArray.push(URL.createObjectURL(files[entry]));
  });
  return auxArray;
};

export default transformFilesToURLs;
