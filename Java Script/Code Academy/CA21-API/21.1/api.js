const renderUserCard = (user) => {
  const img = document.createElement(`img`);
  img.src = user.picture.large;
  img.alt = `${user.name.first}profile picture`;
  console.log(img);

  const intro = document.createElement("h4");
  intro.innerText = `${user.name.first} ${user.name.last},${user.dob.age}`;

  const contacts = document.createElement("h5");
  contacts.innerText = user.email;

  const card = document.createElement("div");
  card.append(img, intro, contacts);
  document.body.append(card);
};

const fetchRandomUser = async () => {
  try {
    const response = await fetch("https://randomuser.me/api/");
    if (response.ok) {
      const data = await response.json();
      renderUserCard(data.result[0]);
    }
  } catch (error) {
    console.error(error);
  }
};
fetchRandomUser();
