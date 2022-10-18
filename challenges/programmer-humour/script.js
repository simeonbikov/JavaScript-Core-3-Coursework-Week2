let img = document.getElementById("image");

  fetch("https://xkcd.now.sh/?comic=latest")
    .then((response) => {
      if (response.status >= 200 && response.status <= 299) {
        return response.json();
      } else {
        throw new Error(
          `Encountered something unexpected: ${response.status} ${response.statusText}`
        );
      }
    })
    .then((data) => {
        console.log(data);
        img.src = data.img;
        img.alt = data.alt;
    })
    .catch((err) => console.log(err.message));