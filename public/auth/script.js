var params = window.location.search.substring(1)
function submit() {
  var email = $("#email").val();
  var password = $("#pass").val();
  if (params == "login") {
    firebase.auth().signInWithEmailAndPassword(email, password)
      .then((userCredential) => {
        var user = userCredential.user;
      })
      .catch((error) => {
        var errorCode = error.code;
        var errorMessage = error.message;
      });
  }
  else if (params == "register") {
    firebase.auth().createUserWithEmailAndPassword(email, password)
      .then((userCredential) => {
        var user = userCredential.user;
      })
      .catch((error) => {
        var errorCode = error.code;
        var errorMessage = error.message;
      });
  }
}

firebase.auth().onAuthStateChanged((user) => {
  if (user) {
    window.location.replace("/")
  }
});
