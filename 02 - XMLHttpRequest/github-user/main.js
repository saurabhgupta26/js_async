{/* <div class="wrapper box">
    <div class="flex">
        <img src="pic.jpg" alt="img" class="image">
    </div>
    <div class="detail">
        <p> Name : Saurabh </p>
        <p> Id : 3122626 </p>
        <p> Bio : Intro to JS</p>
    </div>
</div> */}

// Your code goes here
let input = document.querySelector(".input_field");
let wrapper = document.querySelector(".outerWrapper");

function searching(e) {
    // input.value = "";
    if(e.keyCode == 13) {        
        var user = input.value; 
        console.log(user);
        var xhr = new XMLHttpRequest();
        xhr.open("GET", `https://api.github.com/users/${user}`);
        xhr.onload = function() {
            if(this.status ==  404) {
                noUserFound();
            }
            else {
            var obj = JSON.parse(xhr.response);
            console.log(obj);
            console.log(obj.id);
            createUI(obj);
            }
        }
        xhr.send();
    }
}

function createUI(obj) {
    var box = document.createElement("div");
    box.classList.add("wrapper","box");
    var flex = document.createElement("div");
    flex.classList.add("flex");
    var image = document.createElement("img");
    image.setAttribute("src", obj.avatar_url);
    image.classList.add("image");

    let ul = document.createElement("ul");
    ul.classList.add("detail");
    let name = document.createElement("li");
    name.innerText = `Name: ${obj.name}`;
    let id = document.createElement("li");
    id.innerText = `ID: ${obj.id}`;
    let bio = document.createElement("li");
    bio.innerText = `Bio : ${obj.bio}`;
    let followers = document.createElement("li");
    followers.innerText = `Followers: ${obj.followers}`;
    let following = document.createElement("li");
    following.innerText = `Following: ${obj.following}`;
    ul.append(name, id, bio, followers, following);
    flex.append(image);
    box.append(flex, ul);
    wrapper.append(box);
}

function noUserFound() {
    wrapper.innerHTML = "";
    let noUser = document.createElement("p");
    noUser.classList.add("caution");
    noUser.textContent = "No user found";
    wrapper.append(noUser);

}
input.addEventListener("keyup", searching);