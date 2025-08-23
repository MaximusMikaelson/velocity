const tabsBtns = document.querySelectorAll(".tabs__nav button");
//console.log(tabsBtns);
const tabsItems = document.querySelectorAll(".tabs__item");
//console.log(tabsItems);

// функция скрывает все табы и убирает активный класс у кнопок
function hideTabs() {
    tabsItems.forEach((item) => {
        item.classList.add("hide");
    });

    tabsBtns.forEach((btn) => {
        btn.classList.remove("active");
    });
}

// функция показывает переданный номер таба и добавляет активный класс кнопке
function showTab(i) {
    tabsItems[i].classList.remove("hide");
    tabsBtns[i].classList.add("active");
}

// навешиваем обработчик клика на каждую кнопку
tabsBtns.forEach((btn, i) =>
    btn.addEventListener("click", () => {
        hideTabs();
        showTab(i);
    })
);

// anchors smooth scroll
/*const anchors = document.querySelectorAll("header__nav a");

anchors.forEach((anchor) => {
    anchor.addEventListener("click", (e) => {
        e.preventDefault();

        const blockID = anchor.getAttribute("href").substr(1);

        document.getElementById(blockID).scrollIntoView({
            behavior: "smooth",
            block: "start",
        });
    });
});*/

// show first tab by default
hideTabs();
showTab(0);
