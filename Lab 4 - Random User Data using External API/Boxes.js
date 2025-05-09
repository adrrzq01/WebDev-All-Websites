const loadDataFromSource = () => {
  console.log("Hello world!");
  fetch("https://jsonplaceholder.typicode.com/users")
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      const userContainer = document.getElementById("userContainer");
      for (let index = 0; index < data.length; index++) {
        const element = data[index];
        console.log(element.email);

        const userItem = document.createElement("div");
        const labelName = document.createElement("div");
        const labelEmail = document.createElement("div");
        const labelPhone = document.createElement("div");
        const labelUsername = document.createElement("div");
        const labelWebsite = document.createElement("div");

        userItem.classList.add("box");

        labelName.innerText = element.name;
        labelEmail.innerText = element.email;
        labelPhone.innerText = element.phone;
        labelUsername.innerText = element.username;
        labelWebsite.innerText = element.website;

        userItem.append(
          labelName,
          labelEmail,
          labelPhone,
          labelUsername,
          labelWebsite
        );
        userContainer.appendChild(userItem);
      }
    });
};
