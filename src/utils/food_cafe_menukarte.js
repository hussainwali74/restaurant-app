const data = {
    "restaurant": {
      "name": "Pizzeria La Locanta",
      "description": "Eine fusion von Aromen aus Ost und West",
      "social_media": ["Instagram", "Facebook", "Twitter"],
      "location": "Senserstr. 4, 82140 Olching",
      "phone": "08142-4443484",
      "mobile": ["+4917622237996", "+4917632058606"],
      "opening_hours": {
        "Monday": "Closed",
        "Tuesday-Thursday": "12:00-22:00",
        "Friday-Sunday": "12:00-22:30"
      },
      "special_offer": {
        "details": "20% Rabatt auf Ihr Essen – nur an unseren ersten 3 Tagen!",
        "valid_from": "01.02.2025",
        "valid_until": "03.02.2025"
      }
    },
    "menu": {
      "snacks": [
        {
          "id": 1,
          "name": "Chicken Nuggets",
          "description": "mit Sauce nach Wahl",
          "price": "5.50",
          "prices": [5.50, 6.50, 9.50]
        },
        {
          "id": 2,
          "name": "Chicken Wings",
          "description": "Barbecue sauce",
          "price": "7.50",
          "prices": [7.50, 8.50, 12.50]
        },
        {
          "id": 3,
          "name": "Spring Rolls (8 Pcs)",
          "description": "mit Süßsauersauce",
          "price": 5.50
        },
        {
          "id": 4,
          "name": "Chilli Cheese Nuggets",
          "description": "mit Sauce nach Wahl",
          "price": 5.90
        },
        {
          "id": 5,
          "name": "Mozzarella Sticks",
          "description": "mit Sauce nach Wahl",
          "price": 5.90
        },
        {
          "id": 6,
          "name": "Onion Rings (5 Stück)",
          "price": 5.90
        },
        {
          "id": 7,
          "name": "Snack Box",
          "description": "2 Mozzarella Sticks, 2 Chili Cheese Nuggets, 2 Onion Rings, 2 Chicken Nuggets mit Sauce nach Wahl",
          "price": 8.90
        },
        {
          "id": 8,
          "name": "Chicken Box",
          "description": "5 Chicken Nuggets, 5 Chicken Wings inkl. Süß Sauer und BBQ sauce",
          "price": 11.90
        },
        {
          "id": 9,
          "name": "Cheese Box",
          "description": "5 Mozzarella Sticks, 5 Chili Cheese Nuggets inkl. Curry Creme und Ajvar Dip",
          "price": 11.90
        },
        {
          "id": 10,
          "name": "Pommes klein",
          "price": 3.50
        },
        {
          "id": 11,
          "name": "Pommes groß",
          "price": 5.00
        },
        {
          "id": 12,
          "name": "Ketchup/Mayonnaise",
          "price": 0.50
        }
      ],
      "salads": [
        {
          "id": 13,
          "name": "Gemischter Salat (klein)",
          "description": "Tomaten, Gurke, Paprika, Iceberg Salat",
          "price": 3.50
        },
        {
          "id": 14,
          "name": "Gemischter Salat (groß)",
          "price": 5.50
        },
        {
          "id": 15,
          "name": "Mozzarella Salat",
          "description": "mit Tomaten und Essig-Öl Dressing",
          "price": 8.50
        },
        {
          "id": 16,
          "name": "Tandoori Chicken Salat",
          "description": "Gemischter Salat mit gegrilltem Hühnerbrustfilet",
          "price": 9.50
        },
        {
          "id": 17,
          "name": "Chilli Salat",
          "description": "Gemischter Salat, Jalapenos und Käse (scharf)",
          "price": 9.50
        },
        {
          "id": 18,
          "name": "Fitness Salat",
          "description": "Gemischter Salat mit gekochtem Ei, Mais, Käse und gegrilltem Hühnerbrustfilet",
          "price": 11.50
        },
        {
          "id": 19,
          "name": "Spezial Salat",
          "description": "Oliven, Tomaten, Gurke, Schafkäse, Paprika. Salat kann mit Joghurtsauce oder Balsamico-Dressing serviert werden.",
          "price": 10.50
        }
      ],
      "pizza": [
        {
          "id": 51,
          "name": "Pizza Margherita",
          "price": 8.00,
          "prices": [8.00, 11.90, 26.50],
          "sizes": {
            "Klassik (30cm)": 8.00,
            "Medium (36cm)": 11.90,
            "Party (50cm)": 26.50
          },
          "description": "mit Tomatensauce und Käse"
        },
        {
          "id": 52,
          "name": "Pizza Salami",
          "price": 8.50,
          "prices": [8.50, 13.50, 26.50],
          "sizes": {
            "Klassik (30cm)": 8.50,
            "Medium (36cm)": 13.50,
            "Party (50cm)": 26.50
          },
          "description": "mit Rinder Salami"
        },
        {
          "id": 53,
          "name": "Pizza Funghi",
          "price": 8.50,
          "prices": [8.50, 13.50, 26.50],
          "sizes": {
            "Klassik (30cm)": 8.50,
            "Medium (36cm)": 13.50,
            "Party (50cm)": 26.50
          },
          "description": "mit frischen Champignons"
        },
        {
          "id": 54,
          "name": "Pizza Tonno",
          "price": 10.90,
          "prices": [10.90, 16.50, 35.50],
          "sizes": {
            "Klassik (30cm)": 10.90,
            "Medium (36cm)": 16.50,
            "Party (50cm)": 35.50
          },
          "description": "mit Thunfisch und Zwiebeln"
        },
        {
          "id": 55,
          "name": "Prosciutto",
          "price": 8.90,
          "prices": [8.90, 13.50, 26.50],
          "sizes": {
            "Klassik (30cm)": 8.90,
            "Medium (36cm)": 13.50,
            "Party (50cm)": 26.50
          },
          "description": "mit Rinderschinken"
        },
        {
          "id": 56,
          "name": "Pizza Regina",
          "price": 9.50,
          "prices": [9.50, 14.50, 30.50],
          "sizes": {
            "Klassik (30cm)": 9.50,
            "Medium (36cm)": 14.50,
            "Party (50cm)": 30.50
          },
          "description": "mit Putenschinken und frischen Champignons"
        },
        {
          "id": 57,
          "name": "Pizza Hawaii",
          "price": 9.50,
          "prices": [9.50, 14.50, 30.50],
          "sizes": {
            "Klassik (30cm)": 9.50,
            "Medium (36cm)": 14.50,
            "Party (50cm)": 30.50
          },
          "description": "mit Rinderschinken und Ananas"
        },
        {
          "id": 58,
          "name": "Pizza Diabolo",
          "price": 11.50,
          "prices": [11.50, 17.50, 35.50],
          "sizes": {
            "Klassik (30cm)": 11.50,
            "Medium (36cm)": 17.50,
            "Party (50cm)": 35.50
          },
          "description": "mit scharfer Rindersalami, Rinderschinken, Zwiebeln und Jalapenos"
        },
        {
          "id": 59,
          "name": "Pizza Sucuk",
          "price": 11.50,
          "prices": [11.50, 17.50, 35.50],
          "sizes": {
            "Klassik (30cm)": 11.50,
            "Medium (36cm)": 17.50,
            "Party (50cm)": 35.50
          },
          "description": "mit Zwiebeln, aufgeschlagenem Ei und Paprika"
        },
        {
          "id": 60,
          "name": "Pizza Chicken Curry",
          "price": 11.50,
          "prices": [11.50, 17.50, 35.50],
          "sizes": {
            "Klassik (30cm)": 11.50,
            "Medium (36cm)": 17.50,
            "Party (50cm)": 35.50
          },
          "description": "mit gebratener Hähnchenbrust und Ananas"
        },
        {
          "id": 61,
          "name": "Pizza (vegetarisch)",
          "price": 11.50,
          "prices": [11.50, 17.50, 35.50],
          "sizes": {
            "Klassik (30cm)": 11.50,
            "Medium (36cm)": 17.50,
            "Party (50cm)": 35.50
          },
          "description": "mit frischen Champignons, Artischocken, Spinat, Paprika, Zwiebeln und Knoblauch"
        },
        {
          "id": 62,
          "name": "Pizza Quattro Formaggi",
            "price": 13.50,
          "prices": [13.50, 19.50, 36.50],
          "sizes": {
            "Klassik (30cm)": 13.50,
            "Medium (36cm)": 19.50,
            "Party (50cm)": 36.50
          },
          "description": "mit vier Sorten von Käse"
        },
        {
          "id": 63,
          "name": "Pizza Pollo BBQ",
          "price": 11.50,
          "prices": [11.50, 17.50, 35.50],
          "sizes": {
            "Klassik (30cm)": 11.50,
            "Medium (36cm)": 17.50,
            "Party (50cm)": 35.50
          },
          "description": "mit BBQ-Soße und gegrillten Hähnchenstreifen"
        }
      ],
      "pasta": [
        {
          "id": 91,
          "name": "Pasta Carbonara",
          "description": "mit Rinderschinken, Ei und Sahnesauce",
          "price": 11.90
        },
        {
          "id": 92,
          "name": "Pasta Pesto",
          "description": "mit Basilikum, Olivenöl und Pinienkernen",
          "price": 10.90
        },
        {
          "id": 93,
          "name": "Pasta Pomodoro",
          "description": "mit hausgemachter Tomatensauce",
          "price": 8.50
        },
        {
          "id": 94,
          "name": "Pasta Chicken Curry",
          "description": "mit Hähnchenbrust, Ananas und Sahnesauce",
          "price": 12.90
        },
        {
          "id": 95,
          "name": "Pizza Quattro Formaggi (Pasta Variant)",
          "description": "mit Gorgonzola, Edamer, Mozzarella und Schafskäse",
          "price": 7.90
        },
        {
          "id": 96,
          "name": "Pasta Funghicrema",
          "description": "mit frischen Champignons und Sahnesauce",
          "price": 8.90,
          "note": "Wird mit der Nudelsorte nach Wahl (Rigatoni oder Spaghetti) zubereitet"
        }
      ],
      "burgers": [
        {
          "id": 110,
          "name": "Crispy Chicken Burger",
          "description": "mit Salat, Zwiebeln, Tomaten und Cocktailsauce",
          "price": 7.90
        },
        {
          "id": 112,
          "name": "Cheesy Chicken Burger",
          "description": "mit Salat, Cheddar Cheese, Zwiebeln, Tomaten und verschiedenen Burgersaucen",
          "price": 8.90
        },
        {
          "id": 113,
          "name": "Chicken Chilli Cheese Burger",
          "description": "Frische Jalapeños, würzige Chili-Käse-Sauce, knackiger Salat, Zwiebeln, Tomaten und schmelzender Cheddar",
          "price": 9.40
        },
        {
          "id": 114,
          "name": "Klassischer Beef Burger",
          "description": "180g Rindfleisch, verschiedene Burgersaucen, frischer Salat, Zwiebeln, Tomaten und Gurken",
          "price": 8.90
        },
        {
          "id": 115,
          "name": "Cheese Burger",
          "description": "180g Rindfleisch, würziger Cheddar, Burgersaucen, knackiger Salat, Zwiebeln, Tomaten und frische Gurken",
          "price": 9.90
        },
        {
          "id": 116,
          "name": "BBQ Crunchy Burger",
          "description": "180g Beef, paniertem Onion Ring, rauchiger BBQ Sauce, Zwiebeln, Salat und Tomaten",
          "price": 11.90
        },
        {
          "id": 117,
          "name": "BBQ Beast Burger",
          "description": "mit 540g Rindfleisch, Spiegelei, rauchiger Barbecuesauce und Cheddar",
          "price": 20.50,
          "extras": {
            "180g Rindfleisch": 3.20,
            "Cheddarkäse": 1.10,
            "Spiegelei": 1.30,
            "Gorgonzola": 1.60,
            "Mozzarella": 1.60,
            "Paniertes Hähnchenfleisch": 2.80,
            "Parmesan": 1.60
          }
        },
        {
          "id": 120,
          "name": "Crispy Chicken Burger (Extras)",
          "description": "mit Salat, Zwiebeln, Tomaten und Cocktailsauce",
          "price": 11.50
        },
        {
          "id": 121,
          "name": "Cheesy Chicken Burger (Extras)",
          "description": "mit Salat, Cheddar Cheese, Zwiebeln, Tomaten und verschiedenen Burgersaucen",
          "price": 12.50
        },
        {
          "id": 122,
          "name": "Chicken Chilli Cheese Burger (Extras)",
          "description": "Frische Jalapeños, würzige Chili-Käse-Sauce, knackiger Salat, Zwiebeln, Tomaten und schmelzender Cheddar",
          "price": 12.90
        },
        {
          "id": 123,
          "name": "Klassischer Beef Burger (Extras)",
          "description": "180g Rindfleisch, verschiedene Burgersaucen, frischer Salat, Zwiebeln, Tomaten und Gurken",
          "price": 12.40
        },
        {
          "id": 124,
          "name": "Cheese Burger (Extras)",
          "description": "180g Rindfleisch, würziger Cheddar, Burgersaucen, knackiger Salat, Zwiebeln, Tomaten und frische Gurken",
          "price": 13.40
        },
        {
          "id": 125,
          "name": "BBQ Crunchy Burger (Extras)",
          "description": "180g Beef, paniertem Onion Ring, rauchiger BBQ Sauce, Zwiebeln, Salat und Tomaten",
          "price": 13.90
        },
        {
          "id": 126,
          "name": "BBQ Beast Burger (Extras)",
          "description": "mit 540g Rindfleisch, Spiegelei, rauchiger Barbecuesauce und Cheddar",
          "price": 25.50,
          "extras": {
            "180g Rindfleisch": 3.20,
            "Cheddarkäse": 1.10,
            "Spiegelei": 1.30,
            "Gorgonzola": 1.60,
            "Mozzarella": 1.60,
            "Paniertes Hähnchenfleisch": 2.80,
            "Parmesan": 1.60
          }
        }
      ],
      "burger_menu": {
        "note": "Alle Burger können als Menü mit Pommes und einem 0,33l Softdrink bestellt werden. Extras Auf Wunsch verfügbar."
      },
      "indian_cuisine": {
        "vegetarian_specialties": [
          {
            "id": 200,
            "name": "Daal Tadka",
            "description": "Gelbe Linsen mit Butter, Ingwer und Gewürzen",
            "price": 10.90
          },
          {
            "id": 201,
            "name": "Karahi Paneer",
            "description": "Frischkäse, gekocht mit Zwiebeln, Paprika und Tomaten",
            "price": 12.90
          },
          {
            "id": 202,
            "name": "Vegetable Qorma",
            "description": "Verschiedenes Gemüse, mild gewürzt in Cashewsauce nach Mogul-Art",
            "price": 11.90
          },
          {
            "id": 203,
            "name": "Paneer Butter Masala",
            "description": "Frischkäse in cremiger, buttriger Tomatensauce",
            "price": 12.90
          },
          {
            "id": 204,
            "name": "Palak Paneer",
            "description": "Frischkäse, gekocht mit Spinat und pikanten Gewürzen",
            "price": 12.90
          },
          {
            "id": 205,
            "name": "Vegetable Jalfrezi",
            "description": "Frisches Gemüse mit Zwiebeln, Tomaten, Chili, Ingwer und Koriander in würzig-pikanter Sauce",
            "price": 11.90
          }
        ],
        "chicken_specialties": [
          {
            "id": 220,
            "name": "Chicken Curry",
            "description": "Hühnerbrustfilet in feiner Sauce",
            "price": 12.90
          },
          {
            "id": 222,
            "name": "Butter Chicken",
            "description": "Zartes Hähnchen in cremiger, buttriger Tomatensauce",
            "price": 14.50
          },
          {
            "id": 223,
            "name": "Chicken Qorma",
            "description": "Hühnerbrustfilet in Mandel-Cashew-Joghurt-Sauce",
            "price": 14.50
          },
          {
            "id": 224,
            "name": "Chicken Jalfrezi",
            "description": "Hühnerbrustfilet, sautiert mit Paprika, Zwiebeln und Tomaten in einer würzig-pikanten Sauce",
            "price": 13.50
          },
          {
            "id": 225,
            "name": "Mango Chicken",
            "description": "Hühnerbrustfilet in einer exotischen, Cashew-Mandel-Mango Sauce",
            "price": 13.50
          },
          {
            "id": 226,
            "name": "Palak Chicken",
            "description": "Zarte Hühner in Spinat und aromatischen Gewürzen",
            "price": 13.50
          }
        ],
        "lamb_specialties": [
          {
            "id": 230,
            "name": "Mutton Kadhai",
            "description": "Lammfleisch in gewürzter Tomatensauce",
            "price": 15.00
          },
          {
            "id": 231,
            "name": "Mutton Qorma",
            "description": "Lammfleisch in Mandel-Cashew-Joghurt-Sauce",
            "price": 14.90
          },
          {
            "id": 232,
            "name": "Mutton Butter Masala",
            "description": "Zartes Lammfleisch in cremiger, buttriger Tomatensauce",
            "price": 14.50
          },
          {
            "id": 233,
            "name": "Mutton Palak",
            "description": "Zartes Lammfleisch in Spinat und aromatischen Gewürzen",
            "price": 13.50
          },
          {
            "id": 234,
            "name": "Mutton Jalfrezi",
            "description": "Lammfleisch, sautiert mit Paprika, Zwiebeln und Tomaten in einer würzig-pikanten Sauce",
            "price": 13.90
          }
        ],
        "note": "Diese Gerichte werden mit original Basmati-Reis serviert."
      },
      "french_tacos": {
        "title":"French Tacos (a, e, g, j, m i)",
        "note": "Alles Tacos warden mit Pommes frites, cheddar und Sauce nach wahl zubereitet.",
        "data": [
            {
              "id": 140,
              "name": "Tacos mit Hänchen",
              "price": 8.50
            },
            {
              "id": 141,
              "name": "Tacos mit Falafel",
              "price": 7.50,
              "note": "Vegetarisch"
            },
            {
              "id": 142,
              "name": "Tacos mit Gemüse",
              "price": 7.50,
              "note": "Vegetarisch"
            },
            {
              "id": 143,
              "name": "Tacos mit Sucuk",
              "price": 8.50
            },
            {
              "id": 144,
              "name": "Tacos mit Rindersalami",
              "price": 8.50
            },
            {
              "id": 145,
              "name": "Tacos mit Putenschinken",
              "price": 8.50
            },
            {
              "id": 146,
              "name": "Tacos mit Tonno",
              "price": 8.50,
              "description": "mit Thunfisch und Zwiebeln"
            }
          ]
      },
      "turkish_specialties": {
        "title": "Türkische Spezialitäten",
        "data": [
        {
          "id": 147,
          "name": "Falafel Sandwich",
          "description": "mit (a, e) Kennzeichnung, vegetarisch 🌱",
          "price": 6.50
        },
        {
          "id": 148,
          "name": "Falafel Dürüm",
          "description": "mit (a) Kennzeichnung, vegetarisch 🌱",
          "price": 7.50
        },
        {
          "id": 149,
          "name": "Falafel Teller",
          "description": "mit Pommes/Reis, vegetarisch 🌱",
          "price": 12.50
        },
        {
          "id": 150,
          "name": "Vegetarisch Dürüm mit Käse",
          "description": "mit (a, i) Kennzeichnung, vegetarisch 🌱",
          "price": 7.50
        },
        {
          "id": 151,
          "name": "Vegetarisch Sandwich mit Käse",
          "description": "mit (a, i, e) Kennzeichnung, vegetarisch 🌱",
          "price": 6.50
        },
        {
          "id": 152,
          "name": "Pide mit Spinat und Käse",
          "description": "Frisch gebackener Teig in Schiffchenform (a, e, I, m), vegetarisch 🌱",
          "price": 7.00
        },
        {
          "id": 153,
          "name": "Pide mit Gouda und Mozzarella",
          "description": "mit (i) Kennzeichnung, vegetarisch 🌱",
          "price": 6.50
        },
        {
          "id": 154,
          "name": "Pide mit Käse und Sucuk",
          "description": "mit (i) Kennzeichnung",
          "price": 8.00
        },
        {
          "id": 155,
          "name": "Pide mit Käse und Gemüse",
          "description": "mit (i) Kennzeichnung, vegetarisch 🌱",
          "price": 7.00
        }
      ]
    },
    "tandoori_brot_spezialitaeten": {
      "title": "Tandoori-Brot-Spezialitäten (a)",
      "data": [
        {
          "id": 250,
          "name": "Naan",
          "description": "Ovales Brot aus Haferteig",
          "price": 2.50
        },
        {
          "id": 251,
          "name": "Butter Naan",
          "description": "Ovales Brot aus Haferteig mit Butter (i)",
          "price": 3.00
        },
        {
          "id": 252,
          "name": "Knoblauch Naan",
          "description": "Ovales Brot aus Haferteig mit Knoblauchbutter (i)",
          "price": 3.50
        }
      ],
    },
      "desserts": {
        "title": "Desserts",
        "data": [
        {
          "id": 260,
          "name": "Tiramisu",
          "description": "mit (a, i, m) Kennzeichnung",
          "price": 5.50
        },
        {
          "id": 261,
          "name": "Gulab Jamun",
          "description": "Bällchen aus Milch und Quark in Honig zubereitet",
          "price": 5.50
        },
        {
          "id": 262,
          "name": "Baklawa (4 pc)",
          "description": "mit (a, i, l, m) Kennzeichnung",
          "price": 5.00
        }
        ],
      },
      "drinks": {
        "title": "Drinks",
        "data": [
        {
          "id": 600,
          "name": "Ayran",
          "price": 1.50
        },
        {
          "id": 601,
          "name": "Red Bull",
          "price": 3.00,
          "sizes": ["0,33l", "1l"]
        },
        {
          "id": 602,
          "name": "Coca Cola",
          "sizes": {
            "0.33l": 2.00,
            "1l": 3.75
          }
        },
        {
          "id": 603,
          "name": "Sprite",
          "price": 3.75,
          "sizes": [2]
        },
        {
          "id": 604,
          "name": "Fanta",
          "price": 3.75,
          "sizes": [2]
        },
        {
          "id": 605,
          "name": "Spezi",
          "price": 3.75,
          "sizes": [2]
        },
        {
          "id": 606,
          "name": "Wasser (spritzig)",
          "price": 3.75,
          "sizes": [2]
        },
        {
          "id": 607,
          "name": "Wasser (still)",
          "price": 3.75,
          "sizes": [2]
        }
      ]
    },
      "allergens": {
        "A": "Glutenhaltiges",
        "B": "Sellerie",
        "C": "Krebstiere",
        "D": "Lupinen",
        "E": "Sesamsamen",
        "F": "Fisch",
        "G": "Senf",
        "H": "Erdnüsse",
        "I": "Milch",
        "J": "Schwefeldioxid",
        "K": "Sojabohnen",
        "L": "Schalenfrüchte",
        "M": "Eier",
        "N": "Weichtiere"
      }
    }
  }
  
export default data;