export const products = [
    // Стулья (5 шт)
    {
        id: 1,
        name: "Скандинавский стул",
        category: "chair",
        price: "12 900",
        image: "/images/products/chair3.jpg",
        description: "Легкий и элегантный стул в скандинавском стиле. Сиденье из массива березы, спинка с натуральным шпоном.",
        isNew: true,
        isHit: false,
        discount: null
    },
    {
        id: 2,
        name: "Барный стул высокий",
        category: "chair",
        price: "15 900",
        image: "/images/products/chair2.jpg",
        description: "Высокий стул для кухонного острова или барной стойки. Регулировка высоты, мягкое сиденье.",
        isNew: false,
        isHit: true,
        discount: null
    },
    {
        id: 3,
        name: "Стул с мягкой спинкой",
        category: "chair",
        price: "14 900",
        image: "/images/products/chair3.jpg",
        description: "Удобный стул с мягкой спинкой и сиденьем. Обивка из велюра, каркас из массива дуба.",
        isNew: false,
        isHit: false,
        discount: 10
    },
    {
        id: 4,
        name: "Венский стул классический",
        category: "chair",
        price: "9 900",
        image: "/images/products/chair2.jpg",
        description: "Классический венский стул из гнутой древесины. Легкий, прочный, элегантный.",
        isNew: true,
        isHit: false,
        discount: null
    },
    {
        id: 5,
        name: "Стул с подлокотниками",
        category: "chair",
        price: "18 900",
        image: "/images/products/chair3.jpg",
        description: "Удобный стул с подлокотниками для столовой или кабинета. Массив ясеня, натуральное масло.",
        isNew: false,
        isHit: true,
        discount: null
    },

    // Столы (5 шт)
    {
        id: 6,
        name: "Обеденный стол дубовый",
        category: "table",
        price: "45 900",
        image: "/images/products/sofa.jpg",
        description: "Массивный обеденный стол из массива дуба. Размер 180x90 см. Покрытие маслом.",
        isNew: true,
        isHit: false,
        discount: null
    },
    {
        id: 7,
        name: "Журнальный столик",
        category: "table",
        price: "22 900",
        image: "/images/products/sofa.jpg",
        description: "Стильный журнальный столик из массива ясеня. Два уровня, удобные полки.",
        isNew: false,
        isHit: true,
        discount: 15
    },
    {
        id: 8,
        name: "Письменный стол",
        category: "table",
        price: "34 900",
        image: "/images/products/sofa.jpg",
        description: "Удобный письменный стол с выдвижными ящиками. Массив сосны, покрытие лаком.",
        isNew: false,
        isHit: false,
        discount: null
    },
    {
        id: 9,
        name: "Консольный стол",
        category: "table",
        price: "19 900",
        image: "/images/products/sofa.jpg",
        description: "Изящный консольный стол для прихожей или гостиной. Массив бука, белая эмаль.",
        isNew: true,
        isHit: false,
        discount: null
    },
    {
        id: 10,
        name: "Раскладной стол",
        category: "table",
        price: "39 900",
        image: "/images/products/sofa.jpg",
        description: "Практичный раскладной стол. В сложенном виде 120 см, в разложенном - 200 см.",
        isNew: false,
        isHit: true,
        discount: null
    },

    // Диваны (5 шт)
    {
        id: 11,
        name: "Двухместный диван",
        category: "sofa",
        price: "65 900",
        image: "/images/products/sofa.jpg",
        description: "Компактный двухместный диван с деревянными подлокотниками. Обивка - рогожка.",
        isNew: true,
        isHit: false,
        discount: null
    },
    {
        id: 12,
        name: "Угловой диван",
        category: "sofa",
        price: "89 900",
        image: "/images/products/sofa.jpg",
        description: "Просторный угловой диван с механизмом трансформации. Обивка - велюр.",
        isNew: false,
        isHit: true,
        discount: 20
    },
    {
        id: 13,
        name: "Диван-кровать",
        category: "sofa",
        price: "79 900",
        image: "/images/products/sofa.jpg",
        description: "Удобный диван-кровать с ортопедическим матрасом. Механизм еврокнижка.",
        isNew: false,
        isHit: false,
        discount: null
    },
    {
        id: 14,
        name: "Диван с деревянным каркасом",
        category: "sofa",
        price: "59 900",
        image: "/images/products/sofa.jpg",
        description: "Диван с открытым деревянным каркасом из массива ясеня. Минималистичный дизайн.",
        isNew: true,
        isHit: false,
        discount: null
    },
    {
        id: 15,
        name: "Кресло-качалка",
        category: "sofa",
        price: "24 900",
        image: "/images/products/sofa.jpg",
        description: "Уютное кресло-качалка из массива сосны. Мягкое сиденье, удобная спинка.",
        isNew: false,
        isHit: true,
        discount: null
    },

    // Кровати (4 шт)
    {
        id: 16,
        name: "Двуспальная кровать",
        category: "bed",
        price: "89 900",
        image: "/images/products/sofa.jpg",
        description: "Просторная двуспальная кровать из массива дуба. Размер 160x200 см.",
        isNew: true,
        isHit: false,
        discount: null
    },
    {
        id: 17,
        name: "Односпальная кровать",
        category: "bed",
        price: "49 900",
        image: "/images/products/sofa.jpg",
        description: "Компактная односпальная кровать из массива сосны. Размер 90x200 см.",
        isNew: false,
        isHit: false,
        discount: 10
    },
    {
        id: 18,
        name: "Кровать с подъемным механизмом",
        category: "bed",
        price: "79 900",
        image: "/images/products/sofa.jpg",
        description: "Кровать с подъемным механизмом и вместительным ящиком для белья.",
        isNew: true,
        isHit: true,
        discount: null
    },
    {
        id: 19,
        name: "Детская кровать",
        category: "bed",
        price: "39 900",
        image: "/images/products/sofa.jpg",
        description: "Уютная детская кровать с бортиками из массива березы. Размер 80x160 см.",
        isNew: false,
        isHit: true,
        discount: null
    },

    // Шкафы (3 шт)
    {
        id: 20,
        name: "Шкаф-купе",
        category: "wardrobe",
        price: "79 900",
        image: "/images/products/sofa.jpg",
        description: "Вместительный шкаф-купе с раздвижными дверями. Внутреннее наполнение на заказ.",
        isNew: true,
        isHit: false,
        discount: null
    },
    {
        id: 21,
        name: "Комод деревянный",
        category: "wardrobe",
        price: "34 900",
        image: "/images/products/sofa.jpg",
        description: "Стильный комод из массива ясеня. 4 просторных ящика, металлические ручки.",
        isNew: false,
        isHit: true,
        discount: 15
    },
    {
        id: 22,
        name: "Стеллаж открытый",
        category: "wardrobe",
        price: "29 900",
        image: "/images/products/sofa.jpg",
        description: "Открытый стеллаж из массива сосны. 5 полок, идеально для книг и декора.",
        isNew: false,
        isHit: false,
        discount: null
    },

    // Полки (3 шт)
    {
        id: 23,
        name: "Навесная полка",
        category: "shelf",
        price: "5 900",
        image: "/images/products/sofa.jpg",
        description: "Компактная навесная полка из массива дуба. Длина 80 см, глубина 20 см.",
        isNew: true,
        isHit: false,
        discount: null
    },
    {
        id: 24,
        name: "Угловая полка",
        category: "shelf",
        price: "4 900",
        image: "/images/products/sofa.jpg",
        description: "Удобная угловая полка из массива сосны. Экономит пространство в комнате.",
        isNew: false,
        isHit: true,
        discount: null
    },
    {
        id: 25,
        name: "Стеллаж для цветов",
        category: "shelf",
        price: "8 900",
        image: "/images/products/sofa.jpg",
        description: "Стеллаж для цветов и растений из массива ясеня. 3 полки, высота 120 см.",
        isNew: false,
        isHit: false,
        discount: null
    }
];