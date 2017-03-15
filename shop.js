var name, desc, desc2, desc3, price, image, image2, image3, size, weight, colors, quantity;

function productObject(name, desc, desc2, desc3, price, image, image2, image3, size, weight, color, color2, color3, quantity) {
    this.name = name;
    this.desc = desc;
    this.desc2 = desc2;
    this.desc3 = desc3;
    this.price = price;
    this.image = image;
    this.image2 = image2;
    this.image3 = image3;
    this.size = size;
    this.weight = weight;
    this.color = color;
    this.color2 = color2;
    this.color3 = color3;
    this.quantity = quantity;
}
var products = new Array();
var descriptions = new Array();
descriptions[0] = "test1";
descriptions[1] = "test2";
products[0] = new productObject("Longboard", "Drop-Through style", "Made with Bamboo", "Sturdy Construction", "139.99", "images/longboard.jpg", "images/longboard2.jpg", "images/longboard3.jpg", "41&quot &#215; 9.5&quot &#215; 18mm", "3lbs", "blue", "green", "", "");
products[1] = new productObject("Skateboard", "Classic Skateboard", "9 layers", "Sturdy Construction", "99.99", "images/skateboard.jpg", "images/skateboard2.jpg", "images/skateboard3.jpg", "36&quot &#215; 8&quot &#215; 15mm", "2lbs", "black", "red", "", "");
products[2] = new productObject("Pennyboard", "Easy to Ride", "Made with Plastic", "Sturdy Construction", "79.99", "images/pennyboard.jpg", "images/pennyboard2.jpg", "images/pennyboard3.jpg", "20&quot &#215; 7&quot &#215; 10mm", "2lbs", "orange", "blue", "", "");
var len = products.length;

function Submit() {
    products[pageItem].color3 = document.getElementById("myForm").color.value;
    products[pageItem].quantity = document.getElementById("myForm").quant.value;
}

function ProductDisplay() {
    for (var i = 0; i <= len; i++) {
        var productDisplay = "";
        productDisplay += "<a href='" + products[i].name + ".html'>";
        productDisplay += "<div class='col-sm-4' id='productItem'>";
        productDisplay += "<h3 class='h3'>" + products[i].name + "</h3>";
        productDisplay += "<img src='" + products[i].image + "' alt='" + products[i].name + "'>";
        productDisplay += "<p class='col-sm-10 p'>" + products[i].desc + "</p>";
        productDisplay += "<p class='col-sm-10 p'>" + products[i].desc2 + "</p>";
        productDisplay += "<p class='col-sm-10 p'>" + products[i].desc3 + "</p>";
        productDisplay += "<div> <p class='col-sm-4 p col-sm-offset-2'>$" + products[i].price + "</p>";
        productDisplay += "<button class='col-sm-4 button'>Add to Cart</button></div>";
        productDisplay += "</div></a>";
        document.write(productDisplay);
    }
}

function ProductDetail() {
    var productDetail = "";
    productDetail += "<div class='col-sm-6' id='productImages'>";
    productDetail += "<div id='myCarousel' class='carousel slide'>";
    productDetail += "<ol class='carousel-indicators'>";
    productDetail += "<li data-target='#myCarousel' data-slide-to='0' class='actice'></li>";
    productDetail += "<li data-target='#myCarousel' data-slide-to='1'></li>";
    productDetail += "<li data-target='#myCarousel' data-slide-to='2'></li></ol>";
    productDetail += "<div class='carousel-inner' role='listbox'>";
    productDetail += "<div class='item active'>";
    productDetail += "<img src='" + products[pageItem].image + "' alt='Chania'></div>";
    productDetail += "<div class='item'>";
    productDetail += "<img src='" + products[pageItem].image2 + "' alt='Chania'></div>";
    productDetail += "<div class='item'>";
    productDetail += "<img src='" + products[pageItem].image3 + "' alt='Flower'></div>";
    productDetail += "</div></div></div>";
    productDetail += "<div class='col-sm-6' id='productInfo'>";
    productDetail += "<h1 class='h1' style='text-align: center;'>" + products[pageItem].name + "</h1>";
    productDetail += "<div> <h3 class='col-sm-4 col-sm-offset-2'>$" + products[pageItem].price + "</h3>";
    productDetail += "<button class='col-sm-4 button' onclick=Submit();>Add to Cart</button></div>";
    productDetail += "<div class='col-sm-2'><h3>&#8291;</h3></div>"
    productDetail += "<h3 class='col-sm-3'>Quantity: </h3>";
    productDetail += "<h3><form id='myForm'><select class='col-sm-3' name='quant'>";
    for (var i = 0; i <= 20; i++) {
        productDetail += "<option value='" + i + "'>" + i + "</option>";
    }
    productDetail += "</select><h3>";
    productDetail += "<h3 class='col-sm-3'>Color: </h3>";
    productDetail += "<h3><select class='col-sm-3' name='color'><option value=" + products[pageItem].color + ">" + products[pageItem].color + "</option>";
    productDetail += "<option value=" + products[pageItem].color2 + ">" + products[pageItem].color2 + "</option></select></form></h3>";
    productDetail += "<h3 class='col-sm-12'>&#8226;" + products[pageItem].desc + "</h3>";
    productDetail += "<h3 class='col-sm-12'>&#8226;" + products[pageItem].desc2 + "</h3>";
    productDetail += "<h3 class='col-sm-12'>&#8226;" + products[pageItem].desc3 + "</h3>";
    productDetail += "<h3 class='col-sm-7'>Size: " + products[pageItem].size + "</h3>";
    productDetail += "<h3 class='col-sm-5'>Weight: " + products[pageItem].weight + "</h3>";
    productDetail += "</div>";
    document.write(productDetail);
}

function ProductsInCart() {
    for (var i = 0; i <= len; i++) {
        var productsInCart = "";
        productsInCart += "<div class='col-sm-12 cartItem'><div class='col-sm-4'>";
        productsInCart += "<img src='" + products[i].image + "' alt='" + products[i].name + "'></div>";
        productsInCart += "<div class='col-sm-8'>";
        productsInCart += "<p class='col-sm-6'>" + products[i].name + "</p>";
        productsInCart += "<p class='col-sm-6'>$" + products[i].price + "</p>";
        productsInCart += "<form id='myForm'><div class='col-sm-12'><p class='col-sm-4'>Quantity: </p><select class='col-sm-4' name='quant'>";
        for (var j = 0; j <= 20; j++) {
            productsInCart += "<option value='" + j + "'>" + j + "</option>";
        }
        productsInCart += "</select></div>";
        productsInCart += "<div class='col-sm-12'><p class='col-sm-4'>Color: </p><select class='col-sm-4' name='color'><option value=" + products[i].color + ">" + products[i].color + "</option>";
        productsInCart += "<option value=" + products[i].color2 + ">" + products[i].color2 + "</option></select></div></form>";
        productsInCart += "<button class='col-sm-4 button' onclick=Submit();>Update</button>";
        productsInCart += "</div>";
        productsInCart += "<div class='col-sm-10 col-sm-offset-1 sandwich " + toString(i) + "'></div>";
        productsInCart += "<div class='col-sm-10 col-sm-offset-1 sandwich " + toString(i) + "'></div>";
        productsInCart += "</div>";
        document.write(productsInCart);
    }
}