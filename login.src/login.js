let validate = () => {
  let username = document.getElementById("username").value;
  let password = document.getElementById("password").value;
  if (username == "admin" && password == "password") {
    alert("login succesfully");
    return false;
  } else {
    alert("login failed");
  }
};
