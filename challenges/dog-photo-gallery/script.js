let list = document.getElementById("imgList");
let button = document.getElementById("btnDog");

button.addEventListener("click", e => {
    let imageList = document.createElement("li");
    list.append(imageList);
    let image = document.createElement("img");
    image.alt = "Dog";
    image.width = 250;

  fetch("https://dog.ceo/api/breeds/image/random")
    .then((response) => {
      if (response.status >= 200 && response.status <= 299) {
        return response.json();
      } else {
        throw new Error(
          `Encountered something unexpected: ${response.status} ${response.statusText}`
        );
      }
    })
    .then((data) => (image.src = data.message))
    .catch((err) => console.log(err.message));

    imageList.append(image);
});
