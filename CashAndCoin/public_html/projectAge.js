function myFunctionOne() {
  var i;
  var age;

  i = document.getElementById("ageone").value;

  if (isNaN(i) || i < 0 || i > 19) {
    age = "Valid Age";
  } else {
    age = "Invalid Age";
  }
  document.getElementById("agetwo").innerHTML = age;
}