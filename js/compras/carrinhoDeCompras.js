var compras;

function mais() {
    if (!document.getElementById("carrinho").value) {
        compras++;
        document.getElementById("carrinho").value = 1;
    } else {
        compras++;
        document.getElementById("carrinho").value = parseInt(document.getElementById("carrinho").value) + 1;
    }
}

function menos() {
    if (parseInt(document.getElementById("carrinho").value) - 1 <= 0) {
        document.getElementById("carrinho").value = 0;
    } else {
        compras = parseInt(document.getElementById("carrinho").value) - 1;
        document.getElementById("carrinho").value = compras;
    }
}
