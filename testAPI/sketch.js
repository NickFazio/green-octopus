function setup() {
  $.get("https://api.open-elevation.com/api/v1/lookup?locations=41.161758,-8.583933", function(data) {
      console.log(data);
  });
}

function gotData(data) {
  console.log(data);
}
