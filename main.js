let money = 200;

function processOrder() {
    alert(
        " \n 1) Кофе \n 2) Американо \n 3) Капучино \n 4) Турецкий кофе \n 5) Шоколадный кофе"
    );

    let product = prompt("Введите номер продукта");
    let sum = prompt("Введите сумму");

    if (sum > 0) {
        let productName = getProductName(product);
        let paid = parseInt(sum);
        let productPrice = getProductPrice(product);

        if (money >= productPrice) {
            console.log("=======================");
            console.log("Ваш продукт:", productName);
            console.log("Цена:", productPrice + "$");

            if (paid >= productPrice) {
                let change = paid - productPrice;
                console.log("Вы заплатили:", paid + "$");

                if (change > 0) {
                    console.log("Ваша сдача:", change + "$");
                }

                console.log("Спасибо за покупку");
                console.log("=======================");

                money -= productPrice;

                if (change > 0) {
                    let addition = confirm(
                        "У вас осталось " +
                        change +
                        "$. Хотите что-то еще купить?"
                    );

                    if (addition) {
                        processOrder();
                    } else {
                        console.log("Спасибо за покупку!");
                    }
                }
            } else {
                alert("Не хватает денег");
                console.log("Попробуйте снова с достаточной суммой");
            }

            if (money > 0) {
                let confirmation = confirm(
                    "B кармане осталось" +
                    money +
                    "$. Хотите что-то еще купить?"
                );
                if (confirmation) {
                    processOrder();
                } else {
                    console.log("Спасибо за покупку!");
                }
            } else {
                console.log("У вас больше нет денег");
            }
        } else {
            alert("Не хватает денег");
            console.log("Попробуйте снова с достаточной суммой");
        }
    } else {
        console.log("Введите сумму больше 0");
    }
                     
    console.log("Осталось средств:", money + "$");
}

function getProductName(product) {
    switch (product) {
        case "1":
            return "Кофе";
        case "2":
            return "Американо";
        case "3":
            return "Капучино";
        case "4":
            return "Турецкий кофе";
        case "5":
            return "Шоколадный кофе";
        default:
            return "Неизвестный продукт";
    }
}

function getProductPrice(product) {
    switch (product) {
        case "1":
            return 15;
        case "2":
            return 20;
        case "3":
            return 25;
        case "4":
            return 30;
        case "5":
            return 35;
        default:
            return 0;
    }
}
// ABDULLOX KRASSAVCHIK
processOrder();