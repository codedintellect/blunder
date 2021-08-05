function invite(_uid, _gameId) {
  if (_uid == firebase.auth().currentUser.uid) return;
  return firebase.firestore().collection("users").doc(_uid).collection("invites").add({
    i: firebase.auth().currentUser.uid,
    id: _gameId,
    t: firebase.firestore.FieldValue.serverTimestamp()
  })
  .then(() => {
      console.log("Document successfully updated!");
  })
  .catch((error) => {
      console.error("Error updating document: ", error);
  });
}

function subToInvites() {
  firebase.firestore().collection("users").doc(firebase.auth().currentUser.uid).collection("invites")
    .onSnapshot((snapshot) => {
      snapshot.forEach((doc) => {
        console.log(doc.data());
      });
    });
}
