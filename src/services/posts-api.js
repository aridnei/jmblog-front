const apiURL =
  "http://jmblog-api/api";

export function getPosts(callback) {
  let xmlHttp = new XMLHttpRequest();
  const requestURL = apiURL + "/post";

  xmlHttp.onreadystatechange = function() {
    if (xmlHttp.readyState == 4) {
      if (xmlHttp.responseText) {
        let result = JSON.parse(xmlHttp.responseText);
        callback(result);
      } else {
        callback([]);
      }
    }
  };

  xmlHttp.open("GET", requestURL, true);
  xmlHttp.send(null);
}

export function getPost(permalink, callback) {
  let xmlHttp = new XMLHttpRequest();
  const requestURL = apiURL + "/post/permalink/" + permalink;

  xmlHttp.onreadystatechange = function() {
    if (xmlHttp.readyState == 4) {
      if (xmlHttp.responseText) {
        let result = JSON.parse(xmlHttp.responseText);
        callback(result);
      } else {
        callback([]);
      }
    }
  };

  xmlHttp.open("GET", requestURL, true);
  xmlHttp.send(null);
}
