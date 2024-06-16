async function getUserData(userName) {
  try {
    let response = await fetch(`https://api.github.com/users/${userName}`);
    let data = await response.json();
    ShowDataToUI(data);
  } catch (e) {
    console.log("Error in getting data");
  }
}

async function ShowDataToUI(user) {
  let main = document.getElementById("main");

  main.innerHTML = `
    <div id="card">
        <div>
          <img src="${user.avatar_url}" alt="User image" />
        </div>
        <div class="user-details">
          <h2>${user.name}</h2>
          ${user.bio}
          <ul>
            <li>Followers:${user.followers}</li>
            <li>Following:${user.following}</li>
            <li>Repos:${user.public_repos}</li>
          </ul>
          <ul>
            <li>Twitter:${user.twitter_username}</li>
            <li>Location:${user.location}</li>
          </ul>
        </div>
      </div>
    `;
}

let form = document.getElementById("form");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const user = search.value;
  if (user) {
    getUserData(user);
    search.value = "";
  }
});
