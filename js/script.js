window.addEventListener("DOMContentLoaded",() => {

    //Info

    class InfoCard {
        constructor(text,img,parentSelector) {
            this.text = text
            this.img = img
            this.parentSelector = document.querySelector(parentSelector) 
        }

        render() {
            const elem = document.createElement('div')

            elem.innerHTML = `
                <div class="new__wrapper-item">
                    <img src="img/info/${this.img}" alt="">
                    <div class="subtitle">
                        ${this.text}
                    </div>
                </div>
            `
            this.parentSelector.append(elem)
        }
    }

    new InfoCard("Мой театр. Книга 2","info_img_1.png",".new__wrapper").render()
    new InfoCard("Многогранный 2.0","info_img_2.png",".new__wrapper").render()
    new InfoCard("Karmalogic. Краткая версия","info_img_3.png",".new__wrapper").render()
    new InfoCard("Действенный подход. Задачи психотерапии XX века","info_img_4.png",".new__wrapper").render()
    new InfoCard("Психотерапия и поиски счатья","info_img_5.png",".new__wrapper").render()
    new InfoCard("The book. Как создать цивилизацию заново","info_img_6.png",".new__wrapper").render()


    //Articles

    class ArticlesCard {
        constructor(text,parentSelector) {
            this.text = text
            this.parentSelector = document.querySelector(parentSelector)
        }

        render() {
            const elem = document.createElement('div')

            elem.innerHTML = `
            <div class="articles__wrapper-item">
                <h3 class="information">
                    ${this.text}
                </h3>
            </div>
            `
            this.parentSelector.append(elem)
        }
    }

    new ArticlesCard ("Общие исследования, относящиеся к интегрированию в конечном виде дифференциальных уравнений первого порядка / Д. Мордухай-Болтовского",".articles__wrapper").render()
    new ArticlesCard ("Об эфиратах галоидных соединений магния. Статья 12: Статья 12. — 24 стр.",".articles__wrapper").render()
    new ArticlesCard ("Английская психология / Н. Страхов]. Статья 1. — [1867]. — С. 35―53",".articles__wrapper").render()
    new ArticlesCard ("Екатерина II в переписке с Гриммом [Ф. М.] / Я. К. Грота. Статья 3. — [4], 339 с. — (... ; т. 33, № 4)",".articles__wrapper").render()
    new ArticlesCard ("О духовном образовании земледельческого класса в России к его благосостоянию / (сочинение) Дм. Дмитриева",".articles__wrapper").render()
    new ArticlesCard ("О главных наречиях Северной Индии / П. Петров]. [Статья] 2. — [1868]. — 20 с.",".articles__wrapper").render()   


    //Events

    class EventsCard {
        constructor(img,data,title,info,parentSelector) {
            this.img = img
            this.data = data
            this.title = title
            this.info = info
            this.parentSelector = document.querySelector(parentSelector)
        }

        render() {
            const elem = document.createElement('div')

            elem.innerHTML = `
                 <div class="events__wrapper-item">
                    <img src="img/events/${this.img}" alt="" class="events__wrapper-img">

                    <div class="info__wrapper">
                    <div class="events__wrapper-data">
                        ${this.data}
                    </div>
                    <div class="events__wrapper-title">
                        ${this.title}
                    </div>
                    <div class="events__wrapper-info">
                        ${this.info}
                    </div>
                    </div>
                </div>
            `

            this.parentSelector.append(elem)
        }
    }

    new EventsCard("image 4.png","12.02.2023","Творческое занятие «Папин кораблик»","10 февраля в детской комнате прошло творческое занятие «Папин кораблик», на котором его участники сделали объёмную аппликацию из цветной бумаги",".events__wrapper").render();

    new EventsCard("image 4-1.png", "12.02.2023","Учитель-новатор, основатель Гродненского зоопарка","12 февраля исполняется 130 лет со дня рождения Яна (Ивана Иосифовича) Кохановского (1894–1942), биолога, учителя и создателя Гродненского зоопарка",".events__wrapper").render();

    new EventsCard ("image 4-2.png","12.02.2023","Приглашаем на выставку «Беларусь освобожденная: заповедь 1944-го»","14 февраля в  библиотеке состоялось торжественное открытие выставки «Беларусь освобожденная: заповедь 1944-го», посвященной 80-летию освобождения Беларуси от немецко-фашистских захватчиков",".events__wrapper").render();

    new EventsCard("image 4-3.png","12.02.2023","Танцы народов мира","10 февраля состоялась первая в сезоне 2024 года лекция-концерт «Любительского музыкального салона»",".events__wrapper").render()

    new EventsCard ("image 4-2.png","12.02.2023","Приглашаем на выставку «Беларусь освобожденная: заповедь 1944-го»","14 февраля в  библиотеке состоялось торжественное открытие выставки «Беларусь освобожденная: заповедь 1944-го», посвященной 80-летию освобождения Беларуси от немецко-фашистских захватчиков",".events__wrapper").render();

    new EventsCard("image 4.png","12.02.2023","Творческое занятие «Папин кораблик»","10 февраля в детской комнате прошло творческое занятие «Папин кораблик», на котором его участники сделали объёмную аппликацию из цветной бумаги",".events__wrapper").render();


    //Carousel

    const slides = document.querySelectorAll(".carousel__wrapper-slide"),
    prev = document.querySelector(".carousel__prev"),
    next = document.querySelector(".carousel__next"),
    wrapper = document.querySelector(".carousel__wrapper"),
    field = document.querySelector(".carousel__inner");

let slideIndex = 1;
let offset = 0;

field.style.transition = '0.5s all';

function updatePosition() {
  offset = 192 * (slideIndex - 1);  
  field.style.transform = `translateX(-${offset}px)`;
}

next.addEventListener('click', () => {
  if (slideIndex < slides.length) {
      slideIndex++;
  } else {
      slideIndex = 1;
  }
  updatePosition();
});

prev.addEventListener('click', () => {
  if (slideIndex > 1) {
      slideIndex--;
  } else {
      slideIndex = slides.length;
  }
  updatePosition();
});




})