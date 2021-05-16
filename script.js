function compute() {
  var principal = document.getElementById("principal").value;
  if (principal <= 0) {
    alert("Enter a positive number");
    document.getElementById("principal").value = "";
    document.getElementById("principal").focus();
  } else {
    var rate = document.getElementById("rate").value;
    var years = document.getElementById("years").value;
    var interest = (principal * years * rate) / 100;
    var year = new Date().getFullYear() + parseInt(years);

    var result = "If you deposit <span>" + principal;
    result += "</span>,<br> at an interest of <span>" + rate;
    result += "%</span>.<br> You will receive an amount of <span>" + interest;
    result += "</span>,<br>in the year <span>" + year + "</span>.";
    document.getElementById("result").innerHTML = result;
  }
}

function updateRate() {
  var rateval = document.getElementById("rate").value;
  document.getElementById("rate_val").innerText = rateval + "%";
}
