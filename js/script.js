"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
const fetchApi = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const res = yield fetch("https://raw.githubusercontent.com/ProgrammingHero1/ranga-store-api/main/ranga-api.json");
        const data = yield res.json();
        showStar(data);
    }
    catch (error) {
        console.log(error);
    }
});
fetchApi();
const showStar = (data) => {
    data.forEach((element) => {
        console.log(element.rating.rate);
        const initialRating = element.rating.rate.toString().split(".");
        let [firstRating, secondRating] = initialRating;
        if (secondRating === undefined) {
            secondRating = "0";
        }
        const newFirstRating = +firstRating;
        const newSecondRating = +secondRating;
        const ol = document.querySelector("#star");
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
        }
        else if (newSecondRating > 5 && newSecondRating < 10) {
            span.innerHTML = `<i class="fas fa-star-half-alt"></i>`;
        }
        li.appendChild(span);
        ol.appendChild(li);
    });
};
