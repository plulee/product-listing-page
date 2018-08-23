import * as col from "../constants/ColorsNames";
import * as cat from "../constants/Categories";

const products = [
    {
        id: "1", name: "Sport Car",
        categories: [cat.CARS],
        versions: [
            {
                color: col.RED,
                url: "/images/car-1-red.jpg",
                price: "2$"
            },
            {
                color: col.BLUE,
                url: "/images/car-1-blue.jpg",
                price: "3$"
            },
            {
                color: col.GREEN,
                url: "/images/car-1-green.jpg",
                price: "3.5$"
            },
            {
                color: col.ORANGE,
                url: "/images/car-1-orange.jpg",
                price: "2$"
            }
        ]
    },
    {
        id: "2", name: "Porsche Cabrio",
        categories: [cat.CARS],
        versions: [
            {
                color: col.RED,
                url: "/images/car-2-red.jpg",
                price: "2$"
            },
            {
                color: col.PINK,
                url: "/images/car-2-pink.jpg",
                price: "1$"
            },
            {
                color: col.BLUE,
                url: "/images/car-2-blue.jpg",
                price: "4$"
            },
            {
                color: col.GREEN,
                url: "/images/car-2-green.jpg",
                price: "7$"
            },
            {
                color: col.YELLOW,
                url: "/images/car-2-yellow.jpg",
                price: "4$"
            }
        ]
    },
    {
        id: "3", name: "Old car",
        categories: [cat.CARS],
        versions: [
            {
                color: col.RED,
                url: "/images/car-3-red.jpg",
                price: "299$"
            },
            {
                color: col.BLUE,
                url: "/images/car-3-blue.jpg",
                price: "299$"
            },
            {
                color: col.GREEN,
                url: "/images/car-3-green.jpg",
                price: "799$"
            },
            {
                color: col.YELLOW,
                url: "/images/car-3-yellow.jpg",
                price: "499$"
            }
        ]
    },
    {
        id: "4", name: "Boxing Gloves",
        categories: [cat.GLOVES],
        versions: [
            {
                color: col.RED,
                url: "/images/gloves-1-red.jpg",
                price: "26$"
            },
            {
                color: col.BLUE,
                url: "/images/gloves-1-blue.jpg",
                price: "29$"
            },
            {
                color: col.GREEN,
                url: "/images/gloves-1-green.jpg",
                price: "28$"
            },
            {
                color: col.PINK,
                url: "/images/gloves-1-pink.jpg",
                price: "27$"
            },
            {
                color: col.YELLOW,
                url: "/images/gloves-1-yellow.jpg",
                price: "25$"
            }
        ]
    },
    {
        id: "5", name: "Work Gloves 2000",
        categories: [cat.GLOVES],
        versions: [
            {
                color: col.BLUE,
                url: "/images/gloves-2-blue.jpg",
                price: "19$"
            },
            {
                color: col.GREEN,
                url: "/images/gloves-2-green.jpg",
                price: "20$"
            },
            {
                color: col.PINK,
                url: "/images/gloves-2-pink.jpg",
                price: "22$"
            },
            {
                color: col.ORANGE,
                url: "/images/gloves-2-orange.jpg",
                price: "21$"
            }
        ]
    },
    {
        id: "6", name: "Chair Supreme",
        categories: [cat.CHAIRS],
        versions: [
            {
                color: col.RED,
                url: "/images/chair-1-red.jpg",
                price: "98$"
            },
            {
                color: col.BLUE,
                url: "/images/chair-1-blue.jpg",
                price: "68$"
            },
            {
                color: col.GRAY,
                url: "/images/chair-1-gray.jpg",
                price: "67$"
            },
            {
                color: col.ORANGE,
                url: "/images/chair-1-orange.jpg",
                price: "68$"
            }
        ]
    },
];

export default products;
