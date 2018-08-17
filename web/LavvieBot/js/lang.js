function lang(){
  var type= navigator.appName
  if(type=="Netscape")
  var lang = navigator.language
  else
  var lang = navigator.userLanguage
  var lang = lang.substr(0,2)
  if(lang == "ko")
  window.location.href = "home.html"
  else
  window.location.href = "en/home.html"
}
