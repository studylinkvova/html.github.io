var provider = new firebase.auth.GoogleAuthProvider();

function googleVhid() {
  firebase.auth().signInWithPopup(provider)
    .then((result) => {
      var user = result.user;
      console.log(result);
      console.log(user);
      createUser(user.uid, user.name);
      localStorage.setItem('user_id',user.uid);
      setTimeout(function () {
        window.location.href = `tbn.html?id=${user.uid}`;
      }, 3000);
    })
    .catch((error) => {
      console.error("Google Sign-In Error:", error);
    });
}

function emailVhid() {
  var emailInput = document.getElementById("email");
  var passInput = document.getElementById("pass");
  var nameInput = document.getElementById("namee");

  event.preventDefault();

  firebase.auth().createUserWithEmailAndPassword(emailInput.value, passInput.value)
    .then((userCredential) => {
      var user = userCredential.user;
      console.log(userCredential);
      console.log(user);
      createUser(user.uid, nameInput.value);
      setTimeout(function () {
        window.location.href = `tbn.html?id=${user.uid}`;
      }, 5000);
    })
    .catch((error) => {
      console.error("Email/Password Sign-Up Error:", error);
    });
}

function createUser(id, nam) {
  let user = {
    name: nam,
    lastname: ''
  };
  db.collection('users').doc(id).set(user)
    .then(res => {
      console.log(res);
    })
    .catch((error) => {
      console.error("Firestore Error:", error);
    });
}
