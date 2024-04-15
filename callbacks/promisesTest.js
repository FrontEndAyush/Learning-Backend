function DownloadingDataFromUrl(url) {
  return new Promise(function dowloadingData(resolve, reject) {
    console.log("Started downloading data from " + url);
    setTimeout(function downloading() {
      let content = "AForApple";
      resolve(content);
      console.log("Done Downloading");
    }, 5000);
  });
}
DownloadingDataFromUrl("www.apple.com")
  .then(function onFulFillMent(value) {
    return new Promise(function writtingDataFromFile(resolve, reject) {
      console.log("Started writing Data from " + value);
      setTimeout(function writingData() {
        console.log("Writing Done!");
        let FileName = "Data.txt";
        resolve(FileName);
      }, 3000);
    });
  })

  .then(function onFulFillMent3(value) {
    return new Promise(function uploadingData(resolve, reject) {
      console.log("Started uploading " + value);
      setTimeout(function upload() {
        console.log("Uploaded");
        let response = "SUCCESS";
        resolve(response);
      }, 3000);
    });
  })
  .then(function onFulFillMent4(response) {
    console.log(response);
  });
