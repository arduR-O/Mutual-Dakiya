function addRequest() {
  let points = document.getElementById("points").innerHTML;
  console.log(points);
  if (points >= 10) {
    let target = document.getElementById("request_container");
    let new_request_container = document.createElement("div");
    let new_request_content = document.createElement("p");
    let resetButton = document.getElementById("reset");
    let name = document.getElementById("Name").value;
    let contactNumber = document.getElementById("Contact_number").value;
    let vendor = document.getElementById("Vendors").value;
    new_request_container.setAttribute("class", "card");
    new_request_content.innerHTML = `Name: ${name}<br>Contact Number: ${contactNumber}<br>Vendor: ${vendor}`;
    new_request_container.appendChild(new_request_content);
    target.appendChild(new_request_container);
    document
      .getElementById("request_container")
      .appendChild(new_request_container);
    resetButton.click();
    console.log(name);
  } else {
    alert("You don't have enough points");
  }
}
let flag = 1;
function addRequest2() {
  let points = document.getElementById("points").innerHTML;
  let target = document.getElementById("request_container");
  let resetButton = document.getElementById("reset");
  let name = document.getElementById("Name").value;
  let contactNumber = document.getElementById("Contact_number").value;
  let vendor = document.getElementById("Vendors").value;
  let additionalInfo = document.getElementById("desc");
  if (points > 9) {
    if (additionalInfo.value) {
      target.innerHTML += `<div class="card m-3 col-12 bg-light border-warning requestCards">
      <ul class="list-group list-group-flush">
          <li class="list-group-item text-black bg-light border-warning"><b>Name: </b>${name}</li>
          <li class="list-group-item text-black bg-light border-warning"><b>Contact Number: </b>${contactNumber}</li>
          <li class="list-group-item text-black bg-light border-warning"><b>Vendor: </b>${vendor}</li>
          <li class="list-group-item text-black bg-light border-warning"><b>Additional Info: </b>${additionalInfo.value}</li>
          </ul>
  </div>`;
    } else {
      // console.log("here2")
      target.innerHTML += `<div class="card m-3 col-12 bg-light border-warning requestCards">
      <ul class="list-group list-group-flush">
          <li class="list-group-item text-black bg-light border-warning"><b>Name: </b>${name}</li>
          <li class="list-group-item text-black bg-light border-warning"><b>Contact Number: </b>${contactNumber}</li>
          <li class="list-group-item text-black bg-light border-warning"><b>Vendor: </b>${vendor}</li>
        </ul>
  </div>`;
    }
    document.getElementById("points").innerHTML -= 10;
  } else if (flag) {
      let alertTarget = document.getElementById("request_header");
      let alert = document.createElement("div");
      alert.setAttribute(
        "class",
        "col alert alert-info col-lg-6 col-12 text-center"
      );
      alert.setAttribute("role", "alert");
      alert.innerHTML = "You don't have enough points :<";
      alertTarget.appendChild(alert);
      flag = 0;
    }
  resetButton.click();
}
