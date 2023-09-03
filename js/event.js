const events = document.querySelectorAll(".event_cover .pic");
const selection = document.querySelector(".selection", ".version2");
const item = document.querySelectorAll(".selection .item", ".version2 .item");
const mask = document.querySelectorAll(".mask");



for (let i = 0; i < item.length; i++) {

    mask[i].addEventListener("click", function(e) {

        for (let j = 0; j < item.length; j++) {
            item[j].classList.remove("active");
        }

        item[i].classList.add("active");


        events.forEach((e_events, index) => {

            for (let j = 0; j < item.length; j++) {
                e_events.classList.remove("active");
            }

            if (e_events.dataset.num == index && item[index].classList.contains("active")) {
                e_events.classList.add("active");
            }
        })
    })

}