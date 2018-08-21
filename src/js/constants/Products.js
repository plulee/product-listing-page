import * as col from "../constants/Colors";
import * as cat from "../constants/Categories";

const products = [
    {
        id: "1", name: "Sport Car",
        urls: [
            "/images/car-1-blue.jpg",
            "/images/car-1-green.jpg",
            "/images/car-1-orange.jpg",
            "/images/car-1-red.jpg"
        ],
        categories: [cat.CARS], colors: [col.BLUE, col.GREEN, col.ORANGE, col.RED]
    },
    {
        id: "2", name: "Porsche Cabrio",
        urls: [
            "/images/car-2-blue.jpg",
            "/images/car-2-green.jpg",
            "/images/car-2-pink.jpg",
            "/images/car-2-red.jpg",
            "/images/car-2-yellow.jpg",
        ],
        categories: [cat.CARS], colors: [col.BLUE, col.GREEN, col.PINK, col.RED, col.YELLOW]
    },
    {
        id: "3", name: "Old car",
        urls: [
            "/images/car-3-blue.jpg",
            "/images/car-3-green.jpg",
            "/images/car-3-red.jpg",
            "/images/car-3-yellow.jpg",
        ],
        categories: [cat.CARS], colors: [col.BLUE, col.GREEN, col.RED, col.YELLOW]
    },
    {
        id: "4", name: "Boxing Gloves",
        urls: [
            "/images/gloves-1-blue.jpg",
            "/images/gloves-1-green.jpg",
            "/images/gloves-1-pink.jpg",
            "/images/gloves-1-red.jpg",
            "/images/gloves-1-yellow.jpg",
        ],
        categories: [cat.GLOVES], colors: [col.BLUE, col.GREEN, col.PINK, col.RED, col.YELLOW]
    },
    {
        id: "5", name: "Work Gloves 2000",
        urls: [
            "/images/gloves-2-blue.jpg",
            "/images/gloves-2-green.jpg",
            "/images/gloves-2-orange.jpg",
            "/images/gloves-2-pink.jpg",
        ],
        categories: [cat.GLOVES], colors: [col.BLUE, col.GREEN, col.ORANGE, col.PINK]
    },
    {
        id: "6", name: "Chair Supreme",
        urls: [
            "/images/chair-1-blue.jpg",
            "/images/chair-1-gray.jpg",
            "/images/chair-1-orange.jpg",
            "/images/chair-1-red.jpg",
        ],
        categories: [cat.CHAIRS], colors: [col.BLUE, col.GRAY, col.ORANGE, col.RED]
    },
];

export default products;
