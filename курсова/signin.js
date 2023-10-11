function real_vhid_email_pass(){
    let email_vhid = document.getElementById(`email_vhid`)
    let pass_vhid = document.getElementById('pass_vhid')
    event.preventDefault();
    firebase.auth().signInWithEmailAndPassword(email_vhid.value, pass_vhid.value)
    .then((userCredential) => {
      // Signed in
      var user = userCredential.user;
      localStorage.setItem('user_id',user.uid);
      setTimeout(function(){
        window.location.href = `tbn.html?id=${user.uid}`
      },3000)
      // ...
    })
    .catch((error) => {
      var errorCode = error.code;
      var errorMessage = error.message;
      console.log(errorCode, errorMessage)
    });
  }