class Carousel {
  constructor() {
    this.arrowPrev = document.querySelector(".carousel__arrow_prev");
    this.arrowNext = document.querySelector(".carousel__arrow_next");
    this.carouselItems = document.querySelectorAll(".carousel__item");
    this.dots = document.querySelectorAll(".carousel__indicator");
    this.events();
    this.currentIndex = 0;
    this.nextIndex = 1;
  }

  events() {
    this.arrowPrev.addEventListener("click", this.displayPrevItem.bind(this));
    this.arrowNext.addEventListener("click", this.displayNextItem.bind(this));
  }

  displayPrevItem() {
    this.carouselItems[this.currentIndex].classList.remove(
      "carousel__item_active"
    );
    this.carouselItems[this.nextIndex].classList.remove("carousel__item_next");
    this.dots[this.currentIndex].classList.remove("carousel__indicator_active");

    this.nextIndex = this.currentIndex;
    if (this.currentIndex === 0) {
      this.currentIndex = this.carouselItems.length - 1;
    } else {
      this.currentIndex--;
    }

    this.dots[this.currentIndex].classList.add("carousel__indicator_active");
    this.carouselItems[this.currentIndex].classList.add(
      "carousel__item_active"
    );
    this.carouselItems[this.nextIndex].classList.add("carousel__item_next");
  }

  displayNextItem() {
    this.carouselItems[this.currentIndex].classList.remove(
      "carousel__item_active"
    );
    this.carouselItems[this.nextIndex].classList.remove("carousel__item_next");
    this.dots[this.currentIndex].classList.remove("carousel__indicator_active");

    this.currentIndex = this.nextIndex;
    if (this.currentIndex === this.carouselItems.length - 1) {
      this.nextIndex = 0;
    } else {
      this.nextIndex++;
    }

    this.dots[this.currentIndex].classList.add("carousel__indicator_active");
    this.carouselItems[this.currentIndex].classList.add(
      "carousel__item_active"
    );
    this.carouselItems[this.nextIndex].classList.add("carousel__item_next");
  }
}

const carousel = new Carousel();
