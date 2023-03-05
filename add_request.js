function addRequest() {
    let points = document.getElementById("points").innerHTML;
    console.log(points)
    if(points>=10){
    let target = document.getElementById("request_container")
    let new_request_container = document.createElement("div")
    let new_request_content = document.createElement("p")
    let resetButton = document.getElementById("reset")
    let name = document.getElementById("Name").value
    let contactNumber = document.getElementById("Contact_number").value
    let vendor = document.getElementById("Vendors").value
    new_request_content.innerHTML = `Name: ${name}<br>Contact Number: ${contactNumber}<br>Vendor: ${vendor}`
    new_request_container.appendChild(new_request_content)
    target.appendChild(new_request_container)
    document.getElementById("request_container").appendChild(new_request_container) 
    resetButton.click()
    console.log(name)   
    document.getElementById("points").innerHTML -= 10;
    }
    else{
        alert("You don't have enough points")
    }
}