export const menuData = [
  // Appetizers
  {
    id: 1,
    name: "Greek Salad",
    price: "$12.99",
    category: "appetizers",
    description:
      "The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons.",
    image:
      "https://images.unsplash.com/photo-1599021419847-d8a7a6aba5b4?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Z3JlZWslMjBzYWxhZHxlbnwwfHwwfHx8MA%3D%3D",
    dietary: ["vegetarian", "gluten-free"],
    ingredients: [
      "lettuce",
      "tomatoes",
      "cucumbers",
      "onions",
      "olives",
      "feta cheese",
      "olive oil",
      "lemon juice",
    ],
    popular: true,
  },
  {
    id: 2,
    name: "Bruschetta",
    price: "$7.99",
    category: "appetizers",
    description:
      "Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil.",
    image:
      "https://images.unsplash.com/photo-1721137565555-64a77c9cd009?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8YnJ1cyUyMGNoZXR0YSUyMGZvb2R8ZW58MHx8MHx8fDA%3D",
    dietary: ["vegan"],
    ingredients: [
      "grilled bread",
      "tomatoes",
      "garlic",
      "basil",
      "olive oil",
      "balsamic vinegar",
    ],
  },
  {
    id: 3,
    name: "Hummus Platter",
    price: "$9.99",
    category: "appetizers",
    description:
      "Creamy homemade hummus served with warm pita bread, fresh vegetables, and a drizzle of olive oil.",
    image:
      "https://images.unsplash.com/photo-1637949385162-e416fb15b2ce?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8aHVtbXVzfGVufDB8fDB8fHww",
    dietary: ["vegan", "gluten-free"],
    ingredients: [
      "chickpeas",
      "tahini",
      "lemon juice",
      "garlic",
      "olive oil",
      "paprika",
    ],
  },
  {
    id: 4,
    name: "Stuffed Grape Leaves",
    price: "$8.99",
    category: "appetizers",
    description:
      "Traditional dolmades filled with seasoned rice, herbs, and spices.",
    image:
      "https://images.unsplash.com/photo-1738409329865-9bc6ffa7c02f?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8ZG9sbWFkZXMlMjBmb29kfGVufDB8fDB8fHww",
    dietary: ["vegan", "gluten-free"],
    ingredients: [
      "grape leaves",
      "rice",
      "onions",
      "dill",
      "mint",
      "lemon juice",
    ],
  },

  // Main Courses
  {
    id: 5,
    name: "Mediterranean Fish",
    price: "$25.99",
    category: "mains",
    description:
      "Fresh catch of the day grilled to perfection with Mediterranean herbs, served with roasted vegetables.",
    image:
      "https://images.unsplash.com/photo-1620894580123-466ad3a0ca06?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZmlzaCUyMGZvb2R8ZW58MHx8MHx8fDA%3D",
    dietary: ["gluten-free"],
    ingredients: [
      "fresh fish",
      "herbs",
      "lemon",
      "olive oil",
      "seasonal vegetables",
    ],
    popular: true,
  },
  {
    id: 6,
    name: "Lamb Souvlaki",
    price: "$22.99",
    category: "mains",
    description:
      "Tender marinated lamb skewers served with tzatziki sauce, pita bread, and Greek salad.",
    image:
      "https://images.unsplash.com/photo-1633321702518-7feccafb94d5?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8c291dmxha2l8ZW58MHx8MHx8fDA%3D",
    dietary: [],
    ingredients: [
      "lamb",
      "yogurt marinade",
      "herbs",
      "pita bread",
      "tzatziki sauce",
    ],
  },
  {
    id: 7,
    name: "Moussaka",
    price: "$18.99",
    category: "mains",
    description:
      "Traditional Greek casserole with layers of eggplant, seasoned ground beef, and creamy béchamel sauce.",
    image:
      "https://images.unsplash.com/photo-1606516073760-d86ffd6f56ef?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fG1vdXNzYWthJTIwZm9vZHxlbnwwfHwwfHx8MA%3D%3D",
    dietary: [],
    ingredients: [
      "eggplant",
      "ground beef",
      "tomatoes",
      "onions",
      "béchamel sauce",
      "cheese",
    ],
  },
  {
    id: 8,
    name: "Vegetarian Pasta",
    price: "$16.99",
    category: "mains",
    description:
      "Fresh pasta tossed with seasonal vegetables, herbs, and our house-made tomato sauce.",
    image:
      "https://images.unsplash.com/photo-1621996346565-e3dbc646d9a9?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8cGFzdGF8ZW58MHx8MHx8fDA%3D",
    dietary: ["vegetarian"],
    ingredients: [
      "pasta",
      "zucchini",
      "bell peppers",
      "tomatoes",
      "basil",
      "garlic",
      "olive oil",
    ],
  },
  {
    id: 9,
    name: "Grilled Chicken Shawarma",
    price: "$19.99",
    category: "mains",
    description:
      "Marinated chicken breast with Middle Eastern spices, served with rice pilaf and tahini sauce.",
    image:
      "https://images.unsplash.com/photo-1662116765994-1e4200c43589?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c2hhd2FybWF8ZW58MHx8MHx8fDA%3D",
    dietary: ["gluten-free"],
    ingredients: [
      "chicken breast",
      "shawarma spices",
      "rice",
      "tahini sauce",
      "pickled vegetables",
    ],
  },

  // Desserts
  {
    id: 10,
    name: "Lemon Dessert",
    price: "$6.99",
    category: "desserts",
    description:
      "This comes straight from grandma's recipe book, every last ingredient has been sourced and is as authentic as can be imagined.",
    image:
      "https://images.unsplash.com/photo-1730672558646-c65c4784dd16?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bGVtb24lMjBkZXNzZXJ0fGVufDB8fDB8fHww",
    dietary: ["vegetarian"],
    ingredients: ["lemons", "butter", "eggs", "sugar", "cream"],
    popular: true,
  },
  {
    id: 11,
    name: "Baklava",
    price: "$7.99",
    category: "desserts",
    description:
      "Layers of crispy phyllo dough filled with chopped nuts and sweetened with honey syrup.",
    image:
      "https://images.unsplash.com/photo-1617806501553-d3a6a3a7b227?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8YmFrbGF2YXxlbnwwfHwwfHx8MA%3D%3D",
    dietary: ["vegetarian"],
    ingredients: [
      "phyllo dough",
      "walnuts",
      "pistachios",
      "honey",
      "cinnamon",
      "butter",
    ],
  },
  {
    id: 12,
    name: "Greek Yogurt Parfait",
    price: "$5.99",
    category: "desserts",
    description:
      "Creamy Greek yogurt layered with honey, fresh berries, and crunchy granola.",
    image:
      "https://images.unsplash.com/photo-1550594645-25c5bd703258?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cGFyZmFpdHxlbnwwfHwwfHx8MA%3D%3D",
    dietary: ["vegetarian", "gluten-free"],
    ingredients: ["Greek yogurt", "honey", "berries", "granola", "mint"],
  },

  // Beverages
  {
    id: 13,
    name: "Fresh Lemonade",
    price: "$4.99",
    category: "beverages",
    description: "House-made lemonade with fresh lemons and a hint of mint.",
    image:
      "https://images.unsplash.com/photo-1507281549113-040fcfef650e?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8bGVtb25hZGV8ZW58MHx8MHx8fDA%3D",
    dietary: ["vegan", "gluten-free"],
    ingredients: ["lemons", "water", "sugar", "mint"],
  },
  {
    id: 14,
    name: "Greek Coffee",
    price: "$3.99",
    category: "beverages",
    description:
      "Traditional Greek coffee served in a small cup with foam on top.",
    image:
      "https://images.unsplash.com/photo-1461023058943-07fcbe16d735?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8Y29mZmVlfGVufDB8fDB8fHww",
    dietary: ["vegan", "gluten-free"],
    ingredients: ["coffee", "water", "sugar (optional)"],
  },
  {
    id: 15,
    name: "House Wine",
    price: "$8.99",
    category: "beverages",
    description:
      "Selection of red or white wine from local Mediterranean vineyards.",
    image:
      "https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8d2luZXxlbnwwfHwwfHx8MA%3D%3D",
    dietary: ["vegan", "gluten-free"],
    ingredients: ["grapes"],
  },
];
