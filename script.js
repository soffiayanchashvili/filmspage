const sitcoms = [
  {
    id: 0,
    name: "Friends",
    releaseYear: 1994,
    rating: 8.5,
    url: "https://netflix.com/sitcom",
  },
  {
    id: 1,
    name: "The Office",
    releaseYear: 2005,
    rating: 8.9,
    url: "https://netflix.com/sitcom",
  },
  {
    id: 2,
    name: "Parks and Recreation",
    releaseYear: 2009,
    rating: 8.6,
    url: "https://netflix.com/sitcom",
  },
  {
    id: 3,
    name: "Brooklyn Nine-Nine",
    releaseYear: 2013,
    rating: 8.4,
    url: "https://netflix.com/sitcom",
  },
  {
    id: 4,
    name: "How I Met Your Mother",
    releaseYear: 2005,
    rating: 8.3,
    url: "https://netflix.com/sitcom",
  },
  {
    id: 5,
    name: "The Big Bang Theory",
    releaseYear: 2007,
    rating: 8.1,
    url: "https://netflix.com/sitcom",
  },
  {
    id: 6,
    name: "Modern Family",
    releaseYear: 2009,
    rating: 8.4,
    url: "https://netflix.com/sitcom",
  },
  {
    id: 7,
    name: "The Simpsons",
    releaseYear: 1989,
    rating: 8.6,
    url: "https://netflix.com/sitcom",
  },
  {
    id: 8,
    name: "Seinfeld",
    releaseYear: 1989,
    rating: 8.8,
    url: "https://netflix.com/sitcom",
  },
  {
    id: 9,
    name: "The IT Crowd",
    releaseYear: 2006,
    rating: 8.5,
    url: "https://netflix.com/sitcom",
  },
];

// console.log(sitcoms[0].name);

const getFilms = (arrayItem) => {
  const table = document.getElementById("table");
  table.style.width = "100%";
  const titles = document.getElementById("titles")
  titles.style.textAlign = "justify"
  arrayItem.forEach((arrayItem) => {
    const tr = document.createElement("tr");

    const nameTd = document.createElement("td");
    const yearTd = document.createElement("td");
    const ratingTd = document.createElement("td");
    const linkTd = document.createElement("td");
    const removeButton = document.createElement("button");
    // removeButton.onclick(remove)
    // function remove(el) {
    //     var element = el;
    //     element.remove();
    //   }

    nameTd.innerHTML = `${arrayItem.name} `;
    yearTd.innerHTML = `${arrayItem.releaseYear}`;
    ratingTd.innerHTML = `${arrayItem.rating}`;
    linkTd.innerHTML = ` ${arrayItem.url}`;
    removeButton.innerHTML = `remove`;

    tr.appendChild(nameTd);
    tr.appendChild(yearTd);
    tr.appendChild(ratingTd);
    tr.appendChild(linkTd);
    tr.appendChild(removeButton);

    table.appendChild(tr);
  });
};

getFilms(sitcoms);
