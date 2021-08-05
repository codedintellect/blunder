firebase.auth().onAuthStateChanged((user) => {
  if (user) {
    console.log(user);
    $('#auth').hide();
    $('.wbg').hide();
    $('#user').show();
    $('#user').html(user.displayName);
    //try {
      subToInvites();
    //} catch (e) {
    //  console.warn("No 'invites' script!");
    //}
  } else {
    console.log('OH NO! LOGIN, PLEASE');
    $('#auth').show();
    $('.wbg').show();
    $('#user').hide();
    $('#user').html('');
  }
});
