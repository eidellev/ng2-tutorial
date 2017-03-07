"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var product_1 = require("./product");
var ProductService = (function () {
    function ProductService() {
    }
    ProductService.prototype.getProducts = function () {
        return [
            new product_1.Product(1, 'Leaf Rake', 'GDN-0011', 'March 19, 2016', 'Leaf rake with 48-inch wooden handle.', 19.95, 3, 'http://openclipart.org/image/300px/svg_to_png/26215/Anonymous_Leaf_Rake.png'),
            new product_1.Product(2, 'Garden Cart', 'GDN-0023', 'March 18, 2016', '15 gallon capacity rolling garden cart', 32.99, 4, 'http://openclipart.org/image/300px/svg_to_png/58471/garden_cart.png'),
            new product_1.Product(5, 'Hammer', 'TBX-0048', 'May 21, 2016', 'Curved claw steel hammer', 8.9, 5, 'http://openclipart.org/image/300px/svg_to_png/73/rejon_Hammer.png')
        ];
    };
    return ProductService;
}());
ProductService = __decorate([
    core_1.Injectable()
], ProductService);
exports.ProductService = ProductService;
//# sourceMappingURL=product.service.js.map