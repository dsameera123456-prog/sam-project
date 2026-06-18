
function addComplaint() {

  let title = document.getElementById("title").value;
  let location = document.getElementById("location").value;
  let desc = document.getElementById("desc").value;

  if(title === "" || location === "" || desc === "") {
    alert("Please fill all fields");
    return;
  }

  let li = document.createElement("li");

  li.innerHTML =
    "<b>" + title + "</b><br>" +
    "📍 " + location + "<br>" +
    "📝 " + desc +
    "<br><small>Status: Submitted</small>";

  document.getElementById("list").appendChild(li);

  document.getElementById("title").value = "";
  document.getElementById("location").value = "";
  document.getElementById("desc").value = "";
}
