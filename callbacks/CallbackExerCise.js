function DownloadingDataFromUrl(
  url,
  nameDownloadedFile,
  SavingDataFile,
  uploadingFileFunctionality
) {
  console.log("Starting Downloading... " + url);
  setTimeout(function downloadFromUrl() {
    console.log(
      "Done Downloading from" + url + " your File Name is " + "Data.pdf"
    );
    SavingDataFile("Data.pdf", nameDownloadedFile, uploadingFileFunctionality);
  }, 5000);
}

DownloadingDataFromUrl(
  "www.google.com",
  function nameDownloadedFile(dataFile, uploadingFileFunctionality) {
    uploadingFileFunctionality(dataFile);
  },
  function SavingDataFile(
    dataFile,
    nameDownloadedFile,
    uploadingFileFunctionality
  ) {
    console.log("Data Saved! and name of the file is ", + dataFile);
    nameDownloadedFile(dataFile, uploadingFileFunctionality);
  },
  function uploadingFileFunctionality(dataFile) {
    console.log("Starting Uploading " + dataFile + " to Another Url");
    setTimeout(() => {
      console.log("Data File is Successfully Uploaded on Another Url");
    }, 5000);
  }
);
