var database = firebase.database();

function createSticks() {
  firebase.database().ref('sticks').push({
    h: 10,
    w: 10,
    p: [usr.uid, 'bJnSOn8ZUqTZYtaWsgwSH6RATv53']
  });
}
