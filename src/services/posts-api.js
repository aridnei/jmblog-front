export function getPosts(callback) {
  let xmlHttp = new XMLHttpRequest();
  const apiURL = "https://localhost:5001/api/post";

  xmlHttp.onreadystatechange = function() {
    if (xmlHttp.readyState == 4) {
      let result = JSON.parse(xmlHttp.responseText);
      callback(result);
    }
  };

  xmlHttp.open("GET", apiURL, true);
  xmlHttp.send(null);
}

export function getPost(permalink, callback) {
  let xmlHttp = new XMLHttpRequest();
  const apiURL = "https://localhost:5001/api/post/permalink" + permalink;

  xmlHttp.onreadystatechange = function() {
    if (xmlHttp.readyState == 4) {
      let result = JSON.parse(xmlHttp.responseText);
      callback(result);
    }
  };

  xmlHttp.open("GET", apiURL, true);
  xmlHttp.send(null);
}
