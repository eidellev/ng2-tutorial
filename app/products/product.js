"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var moment = require("moment");
var Product = (function () {
    function Product(productId, productName, productCode, releaseDate, description, price, starRating, imageUrl) {
        this.productId = productId;
        this.productName = productName;
        this.productCode = productCode;
        this.description = description;
        this.price = price;
        this.starRating = starRating;
        this.imageUrl = imageUrl;
        this.releaseDate = moment(releaseDate, 'MMM DD, YYYY').toDate();
    }
    Object.defineProperty(Product.prototype, "formattedReleaseDate", {
        get: function () {
            return moment(this.releaseDate).format('MMM DD, YYYY');
        },
        enumerable: true,
        configurable: true
    });
    Product.prototype.calculateDiscount = function (percent) {
        return this.price - (this.price * percent / 100);
    };
    return Product;
}());
exports.Product = Product;
//# sourceMappingURL=product.js.map