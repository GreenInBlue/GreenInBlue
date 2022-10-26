var form = new FormData();
form.append("source", "pc");
form.append("province", "重庆市");
form.append("city", "重庆市");
form.append("weather_type", "tips");
var weatherTips;
var settings = {
  "url": "https://wis.qq.com/weather/common",
  "method": "POST",
  "timeout": 0,
  "processData": false,
  "mimeType": "multipart/form-data",
  "contentType": false,
  "data": form
};

$.ajax(settings).done(function (response) {
    weatherTips = response["data"]["tips"]["forecast_24h"]["0"];
});