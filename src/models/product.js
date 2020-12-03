export default class Product{
    constructor(name, price, imgList,category, subCategory, gender, inventory, description, rating, review) {
        this.name = name;
        this.price = +price;
        this.imgList = imgList;
        this.category = category;
        this.subCategory = subCategory;
        this.gender = gender;
        this.inventory = +inventory;
        this.description = description;
        this.rating = rating;
        this.review = review;
    }
}