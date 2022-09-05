const fetchApi = async () => {
  try {
    const res = await fetch(
      "https://raw.githubusercontent.com/ProgrammingHero1/ranga-store-api/main/ranga-api.json"
    );
    const data = await res.json();
    showStar(data);
  } catch (error) {
    console.log(error);
  }
};
fetchApi();

interface Rating {
  rate: number;
  count: number;
}

interface Data {
  category: string;
  description: string;
  id: number;
  image: string;
  price: number;
  rating: Rating;
  title: string;
}

const showStar = (data: Data[]) => {
  data.forEach((element) => {
    console.log(element.rating.rate);
    const initialRating = element.rating.rate.toString().split(".");
    let [firstRating, secondRating] = initialRating;
    if (secondRating === undefined) {
      secondRating = "0";
    }
    const newFirstRating = +firstRating;
    const newSecondRating = +secondRating;

    const ol = document.querySelector("#star") as HTMLOListElement;
    const li = document.createElement("li");

    for (let i = 1; i <= newFirstRating; i++) {
      const span = document.createElement("span");
      span.classList.add("star-color");
      span.innerHTML = `<i class="fas fa-star"></i>`;
      li.append(span);
    }

    const span = document.createElement("span");
    span.classList.add("star-color");

    if (newSecondRating > 0 && newSecondRating <= 5) {
      span.innerHTML = `<i class="far fa-star"></i>`;
    } else if (newSecondRating > 5 && newSecondRating < 10) {
      span.innerHTML = `<i class="fas fa-star-half-alt"></i>`;
    }
    li.appendChild(span);
    ol.appendChild(li);
  });
};
