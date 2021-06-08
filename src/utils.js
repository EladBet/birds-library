export function fetchData(url) {
  return fetch(url).then((res) => {
    if (res.statusText !== "OK") {
      const err = new Error();
      err.message = res.statusText;
      err.status = res.status;
      return Promise.reject(err);
    }
    return res.json();
  });
}

export function onImageLoadError(e) {
  e.target.onerror = null;
  e.target.src =
    "https://nationalzoo.si.edu/sites/default/files/conservation/migratory-birds/ftb-placeholder-image.png";
}
