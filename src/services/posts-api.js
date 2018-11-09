const apiURL =
  "http://test-jmblog-api-425578905.us-east-2.elb.amazonaws.com/api";

export function getPosts(callback) {
  let xmlHttp = new XMLHttpRequest();
  const requestURL = apiURL + "/post";

  xmlHttp.onreadystatechange = function() {
    if (xmlHttp.readyState == 4) {
      let result = JSON.parse(xmlHttp.responseText);
      callback(result);
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
      let result = JSON.parse(xmlHttp.responseText);
      callback(result);
    }
  };

  xmlHttp.open("GET", requestURL, true);
  xmlHttp.send(null);
}
