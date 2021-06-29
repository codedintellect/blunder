var usr;
firebase.auth().onAuthStateChanged((user) => {
  if (user) {
    usr = user;
    createSticks();
  }
});
