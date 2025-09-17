const productCards = (() => {
    // Массив данных карточек (в реали из бекенда)
    const cards = [
        {
            id: 0,
            title: "Пицца плюс",
            time: 50,
            raiting: 4.5,
            price: 900,
            type: "Пицца",
            cardImg: "rest-1.jpg"
        },
        {
            id: 1,
            title: "Тануки",
            time: 50,
            raiting: 4.5,
            price: 900,
            type: "Пицца",
            cardImg: "rest-3.jpg"
        },
        {
            id: 2,
            title: "FoodBand",
            time: 50,
            raiting: 4.5,
            price: 900,
            type: "Пицца",
            cardImg: "rest-5.jpg"
        },
        {
            id: 3,
            title: "Жадина-пицца",
            time: 50,
            raiting: 4.5,
            price: 900,
            type: "Пицца",
            cardImg: "rest-2.jpg"
        },
        {
            id: 4,
            title: "Точка еды",
            time: 50,
            raiting: 4.5,
            price: 900,
            type: "Пицца",
            cardImg: "rest-4.jpg"
        },
        {
            id: 5,
            title: "PizzaBurger",
            time: 50,
            raiting: 4.5,
            price: 900,
            type: "Пицца",
            cardImg: "rest-6.jpg"
        }
    ];
    // Получаем контейнер в котором лежат карточки
    const cardsContainer = document.querySelector("#cards-container");

    // Функция для показа надписи "загрузка", пока грузятся карточки
    const showLoading = (() => {
        cardsContainer.innerHTML = "<p style='width: 100%; text-align: center;'>Загрузка..</p>";
    })

    // Функция для отображения карточек, с переданными данными
    const showCards = ((cards) => {
        // Очищаем контейнер от надписи "загрузка", перед тем как выводить карточки
        cardsContainer.innerHTML = "";
        
        // Поочерёдно отрисовываем каждую карточку
        cards.forEach(card => {
            cardsContainer.insertAdjacentHTML("beforeend", 
                `
                    <div class="products-card">
                        <div class="products-card__img">
                            <img src="images/rest/${card.cardImg}" alt="${card.cardImg}">
                        </div>
                        <div class="products-card__description">
                            <div class="products-card__description-row">
                                <h4 class="products-card__description--title">${card.title}</h4>
                                <div class="products-card__description--badge">${card.time} мин</div>
                            </div>
                            <div class="products-card__description-row">
                                <div class="products-card__description-info">
                                    <div class="products-card__description-info--raiting">
                                        <img src="images/icons/star.svg" alt="star">
                                        ${card.raiting}
                                    </div>
                                    <div class="products-card__description-info--price">
                                        От ${card.price} ₽
                                    </div>
                                    <div class="products-card__description-info--type">
                                        ${card.type}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                `
            );
        });
    })

    // Если на странице найден такой контейнер
    if (cardsContainer) {
        showLoading();
        setTimeout(() => {
            showCards(cards);
        }, 1000); // Вызываем time-out на 1 секунду, а потом все карточки
    }
})

productCards();