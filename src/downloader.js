class Downloader {

  download(URI) {
    let blob;
    let arrayBuffer;
    return {
      asBlob: async () => {
        const response = await fetch(URI, { cache: "no-cache" });
        blob = await response.blob();
        return blob;
      },
      asArrayBuffer: async () => {
        const response = await fetch(URI, { cache: "no-cache" });
        arrayBuffer = await response.arrayBuffer();
        return arrayBuffer;
      }
    }
  }

}

module.exports = {
  Downloader
};
