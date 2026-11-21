const myShoppiongList = ["bananas", "apples", "milk", "cookies", "bread"];
const btnShow = document.querySelector("button");
const myList = document.querySelector("ol");

btnShow.addEventListener("click", () => {
    for(let i = 0; i < myShoppiongList.length; i++) {

        let listElement = document.createElement("li");
        listElement.innerText = myShoppiongList[i]

        myList.appendChild(listElement)

    }

})


