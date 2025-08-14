let userInput = document.getElementById("user-search");
let userContainer = document.querySelector(".user-list");

const userData = [
  {
    id: 1,
    name: "Hussain",
    imgUrl: "../assets/user3.png",
    email: "hussainilyas@gmail.com",
  },
  {
    id: 2,
    name: "Zaryab",
    imgUrl: "../assets/user2.png",
    email: "zaryabhaider@gmail.com",
  },
  {
    id: 3,
    name: "Suleman",
    imgUrl: "../assets/user1.png",
    email: "sulemanamjad@gmail.com",
  },
  {
    id: 4,
    name: "Asadullah",
    imgUrl: "../assets/user3.png",
    email: "asadullahhanif@gmail.com",
  },
  {
    id: 5,
    name: "Shahran",
    imgUrl: "../assets/user2.png",
    email: "shahranali@gmail.com",
  },
  {
    id: 6,
    name: "Khuzaima",
    imgUrl: "../assets/user1.png",
    email: "khuzaimanaveed@gmail.com",
  },
];

const renderedUser = (arr) => {
  userContainer.innerHTML = "";
  arr.map((user) => {
    const { id, name, imgUrl, email } = user;
    let div = document.createElement("div");
    div.className = "user-box";
    div.innerHTML = `
        <figure class="user-image">
          <img src=${imgUrl} alt="Error uploading image" />
        </figure>
        <div class="user-detail">
          <h4 class="user-name">${name}</h4>
          <p class="user-email">${email}</p>
        </div>
    `;
    userContainer.append(div);
  });
};

renderedUser(userData);

const handleUserSearch = (e) => {
  let searchValue = e.target.value;
  let newUserData = userData.filter((user) => {
    return user.name.toLowerCase().includes(searchValue.toLowerCase());
  });
  renderedUser(newUserData);
};

userInput.addEventListener("input", handleUserSearch);
