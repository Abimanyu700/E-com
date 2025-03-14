
const products = [
  //Men Dress
  { id: 1, name: "Men's Casual Shirt", category: "dress", subcategory: "mens", image: "/Product-image/Dress-Image/Men/dress1.jpg", rating: 4.5, price: 999, offer: 20 },
  { id: 2, name: "Men's Formal Shirt", category: "dress", subcategory: "mens", image: "/Product-image/Dress-Image/Men/dress2.jpg", rating: 4.4, price: 1299, offer: 25 },
  { id: 3, name: "Men's T-shirt", category: "dress", subcategory: "mens", image: "/Product-image/Dress-Image/Men/dress3.jpg", rating: 4.3, price: 699, offer: 15 },
  { id: 4, name: "Men's Polo T-shirt", category: "dress", subcategory: "mens", image: "/Product-image/Dress-Image/Men/dress4.jpg", rating: 4.2, price: 799, offer: 10 },
  { id: 5, name: "Men's Jeans", category: "dress", subcategory: "mens", image: "/Product-image/Dress-Image/Men/dress5.jpg", rating: 4.6, price: 1999, offer: 30 },
  { id: 6, name: "Men's Chinos", category: "dress", subcategory: "mens", image: "/Product-image/Dress-Image/Men/dress6.jpg", rating: 4.7, price: 1799, offer: 20 },
  { id: 7, name: "Men's Blazer", category: "dress", subcategory: "mens", image: "/Product-image/Dress-Image/Men/dress7.jpg", rating: 4.8, price: 3499, offer: 35 },
  { id: 8, name: "Men's Sweatshirt", category: "dress", subcategory: "mens", image: "/Product-image/Dress-Image/Men/dress8.jpg", rating: 4.5, price: 1499, offer: 25 },
  { id: 9, name: "Men's Kurta", category: "dress", subcategory: "mens", image: "/Product-image/Dress-Image/Men/dress9.jpg", rating: 4.6, price: 1899, offer: 20 },
  { id: 10, name: "Men's Suit", category: "dress", subcategory: "mens", image: "/Product-image/Dress-Image/Men/dress10.jpg", rating: 4.9, price: 5999, offer: 40 },

// Women Dress
{ id: 11, name: "Women's Floral Dress", category: "dress", subcategory: "womens", image: "/Product-image/Dress-Image/Women/dress1.jpg", rating: 4.7, price: 1899, offer: 15 },
{ id: 14, name: "Women's Anarkali", category: "dress", subcategory: "womens", image: "/Product-image/Dress-Image/Women/dress4.jpg", rating: 4.5, price: 1999, offer: 25 },
{ id: 15, name: "Women's Saree", category: "dress", subcategory: "womens", image: "/Product-image/Dress-Image/Women/dress5.jpg", rating: 4.7, price: 2999, offer: 30 },
{ id: 16, name: "Women's Lehenga", category: "dress", subcategory: "womens", image: "/Product-image/Dress-Image/Women/dress6.jpg", rating: 4.8, price: 4999, offer: 35 },
{ id: 17, name: "Women's Jeans", category: "dress", subcategory: "womens", image: "/Product-image/Dress-Image/Women/dress7.jpg", rating: 4.6, price: 2199, offer: 20 },
{ id: 18, name: "Women's Jumpsuit", category: "dress", subcategory: "womens", image: "/Product-image/Dress-Image/Women/dress8.jpg", rating: 4.5, price: 1799, offer: 15 },
{ id: 19, name: "Women's Sweatshirt", category: "dress", subcategory: "womens", image: "/Product-image/Dress-Image/Women/dress9.jpg", rating: 4.4, price: 1499, offer: 10 },
{ id: 20, name: "Women's Blazer", category: "dress", subcategory: "womens", image: "/Product-image/Dress-Image/Women/dress10.jpg", rating: 4.7, price: 3599, offer: 25 },
{ id: 12, name: "Women's Party Gown", category: "dress", subcategory: "womens", image: "/Product-image/Dress-Image/Women/dress2.jpg", rating: 4.8, price: 2599, offer: 20 },
{ id: 13, name: "Women's Ethnic Kurti", category: "dress", subcategory: "womens", image: "/Product-image/Dress-Image/Women/dress3.jpg", rating: 4.6, price: 1299, offer: 15 },

// Kids Dress
{ id: 21, name: "Kids Cartoon T-Shirt", category: "dress", subcategory: "kids", image: "/Product-image/Dress-Image/Kid/dress (1).jpg", rating: 4.3, price: 699, offer: 10 },
{ id: 22, name: "Kids Jeans", category: "dress", subcategory: "kids", image: "/Product-image/Dress-Image/Kid/dress (2).jpg", rating: 4.2, price: 1299, offer: 15 },
{ id: 23, name: "Kids Sweatshirt", category: "dress", subcategory: "kids", image: "/Product-image/Dress-Image/Kid/dress (3).jpg", rating: 4.5, price: 999, offer: 20 },
{ id: 24, name: "Kids Frock", category: "dress", subcategory: "kids", image: "/Product-image/Dress-Image/Kid/dress (4).jpg", rating: 4.6, price: 1399, offer: 25 },
{ id: 25, name: "Kids Ethnic Kurta", category: "dress", subcategory: "kids", image: "/Product-image/Dress-Image/Kid/dress (5).jpg", rating: 4.7, price: 1599, offer: 30 },
{ id: 26, name: "Kids Shorts", category: "dress", subcategory: "kids", image: "/Product-image/Dress-Image/Kid/dress (6).jpg", rating: 4.3, price: 899, offer: 10 },
{ id: 27, name: "Kids Nightwear", category: "dress", subcategory: "kids", image: "/Product-image/Dress-Image/Kid/dress (7).jpg", rating: 4.4, price: 1199, offer: 20 },
{ id: 28, name: "Kids Party Dress", category: "dress", subcategory: "kids", image: "/Product-image/Dress-Image/Kid/dress (8).jpg", rating: 4.6, price: 1899, offer: 25 },
{ id: 29, name: "Kids Jumpsuit", category: "dress", subcategory: "kids", image: "/Product-image/Dress-Image/Kid/dress (9).jpg", rating: 4.2, price: 1699, offer: 15 },
{ id: 30, name: "Kids Blazer", category: "dress", subcategory: "kids", image: "/Product-image/Dress-Image/Kid/dress (10).jpg", rating: 4.5, price: 2499, offer: 30 },

// Men Footwear
{ id: 91, name: "Men's Running Shoes", category: "footwear", subcategory: "mens", image: "/Product-image/Foot-Image/Men/foot (1).png", rating: 4.7, price: 2499, offer: 20 },
{ id: 92, name: "Men's Casual Sneakers", category: "footwear", subcategory: "mens", image: "/Product-image/Foot-Image/Men/foot (2).png", rating: 4.6, price: 1999, offer: 25 },
{ id: 93, name: "Men's Leather Formal Shoes", category: "footwear", subcategory: "mens", image: "/Product-image/Foot-Image/Men/foot (3).png", rating: 4.8, price: 3299, offer: 30 },
{ id: 94, name: "Men's Loafers", category: "footwear", subcategory: "mens", image: "/Product-image/Foot-Image/Men/foot (4).png", rating: 4.9, price: 2799, offer: 15 },
{ id: 95, name: "Men's Sports Sandals", category: "footwear", subcategory: "mens", image: "/Product-image/Foot-Image/Men/foot (5).png", rating: 4.7, price: 1599, offer: 20 },
{ id: 96, name: "Men's Flip-Flops", category: "footwear", subcategory: "mens", image: "/Product-image/Foot-Image/Men/foot (6).png", rating: 4.6, price: 799, offer: 25 },
{ id: 97, name: "Men's Hiking Boots", category: "footwear", subcategory: "mens", image: "/Product-image/Foot-Image/Men/foot (7).png", rating: 4.5, price: 4999, offer: 15 },
{ id: 98, name: "Men's Chelsea Boots", category: "footwear", subcategory: "mens", image: "/Product-image/Foot-Image/Men/foot (8).png", rating: 4.8, price: 3799, offer: 20 },
{ id: 99, name: "Men's Canvas Sneakers", category: "footwear", subcategory: "mens", image: "/Product-image/Foot-Image/Men/foot (9).png", rating: 4.7, price: 1899, offer: 25 },
{ id: 100, name: "Men's Running Sandals", category: "footwear", subcategory: "mens", image: "/Product-image/Foot-Image/Men/foot (10).png", rating: 4.6, price: 1699, offer: 20 },

// Women Footwear
{ id: 101, name: "Women's High Heels", category: "footwear", subcategory: "womens", image: "/Product-image/Foot-Image/Women/foot (1).png", rating: 4.7, price: 2999, offer: 20 },
{ id: 102, name: "Women's Sneakers", category: "footwear", subcategory: "womens", image: "/Product-image/Foot-Image/Women/foot (3).png", rating: 4.6, price: 2499, offer: 25 },
{ id: 103, name: "Women's Ballet Flats", category: "footwear", subcategory: "womens", image: "/Product-image/Foot-Image/Women/foot (3).png", rating: 4.8, price: 1999, offer: 30 },
{ id: 104, name: "Women's Sandals", category: "footwear", subcategory: "womens", image: "/Product-image/Foot-Image/Women/foot (4).png", rating: 4.9, price: 1599, offer: 15 },
{ id: 105, name: "Women's Wedge Heels", category: "footwear", subcategory: "womens", image: "/Product-image/Foot-Image/Women/foot (5).png", rating: 4.7, price: 2799, offer: 20 },
{ id: 106, name: "Women's Running Shoes", category: "footwear", subcategory: "womens", image: "/Product-image/Foot-Image/Women/foot (6).png", rating: 4.6, price: 2299, offer: 25 },
{ id: 107, name: "Women's Loafers", category: "footwear", subcategory: "womens", image: "/Product-image/Foot-Image/Women/foot (7).png", rating: 4.5, price: 1899, offer: 15 },
{ id: 108, name: "Women's Flip-Flops", category: "footwear", subcategory: "womens", image: "/Product-image/Foot-Image/Women/foot (8).png", rating: 4.8, price: 999, offer: 20 },
{ id: 109, name: "Women's Hiking Boots", category: "footwear", subcategory: "womens", image: "/Product-image/Foot-Image/Women/foot (9).png", rating: 4.7, price: 3499, offer: 25 },
{ id: 110, name: "Women's Ankle Boots", category: "footwear", subcategory: "womens", image: "/Product-image/Foot-Image/Women/foot (10).png", rating: 4.6, price: 3199, offer: 20 },

// Kid Footwear
{ id: 111, name: "Kids' LED Sneakers", category: "footwear", subcategory: "kids", image: "/Product-image/Foot-Image/Kid/foot (1).png", rating: 4.8, price: 1999, offer: 20 },
{ id: 112, name: "Kids' Running Shoes", category: "footwear", subcategory: "kids", image: "/Product-image/Foot-Image/Kid/foot (2).png", rating: 4.7, price: 1599, offer: 25 },
{ id: 113, name: "Kids' Velcro Sandals", category: "footwear", subcategory: "kids", image: "/Product-image/Foot-Image/Kid/foot (3).png", rating: 4.6, price: 999, offer: 30 },
{ id: 114, name: "Kids' Formal Shoes", category: "footwear", subcategory: "kids", image: "/Product-image/Foot-Image/Kid/foot (4).png", rating: 4.9, price: 1899, offer: 15 },
{ id: 115, name: "Kids' Slip-On Sneakers", category: "footwear", subcategory: "kids", image: "/Product-image/Foot-Image/Kid/foot (5).png", rating: 4.7, price: 1299, offer: 20 },
{ id: 116, name: "Kids' Flip-Flops", category: "footwear", subcategory: "kids", image: "/Product-image/Foot-Image/Kid/foot (6).png", rating: 4.6, price: 699, offer: 25 },
{ id: 117, name: "Kids' School Shoes", category: "footwear", subcategory: "kids", image: "/Product-image/Foot-Image/Kid/foot (7).png", rating: 4.5, price: 1499, offer: 15 },
{ id: 118, name: "Kids' Winter Boots", category: "footwear", subcategory: "kids", image: "/Product-image/Foot-Image/Kid/foot (8).png", rating: 4.8, price: 2499, offer: 20 },
{ id: 119, name: "Kids' Cartoon Sandals", category: "footwear", subcategory: "kids", image: "/Product-image/Foot-Image/Kid/foot (9).png", rating: 4.7, price: 1199, offer: 25 },
{ id: 120, name: "Kids' Sport Sandals", category: "footwear", subcategory: "kids", image: "/Product-image/Foot-Image/Kid/foot (10).png", rating: 4.6, price: 1399, offer: 20 },

//Men Bag
{ id: 31, name: "Men's Leather Wallet", category: "bag", subcategory: "mens", image: "/Product-image/Bag-Image/Men/bag (1).webp", rating: 4.6, price: 999, offer: 20 },
{ id: 32, name: "Men's Laptop Bag", category: "bag", subcategory: "mens", image: "/Product-image/Bag-Image/Men/bag (2).webp", rating: 4.7, price: 2499, offer: 30 },
{ id: 33, name: "Men's Office Messenger Bag", category: "bag", subcategory: "mens", image: "/Product-image/Bag-Image/Men/bag (3).webp", rating: 4.5, price: 1999, offer: 25 },
{ id: 34, name: "Men's Travel Backpack", category: "bag", subcategory: "mens", image: "/Product-image/Bag-Image/Men/bag (4).webp", rating: 4.8, price: 2999, offer: 35 },
{ id: 35, name: "Men's Gym Duffel Bag", category: "bag", subcategory: "mens", image: "/Product-image/Bag-Image/Men/bag (5).webp", rating: 4.4, price: 1499, offer: 20 },
{ id: 36, name: "Men's Shoulder Sling Bag", category: "bag", subcategory: "mens", image: "/Product-image/Bag-Image/Men/bag (6).webp", rating: 4.3, price: 1299, offer: 15 },

//Women Bag
{ id: 41, name: "Women's Tote Bag", category: "bag", subcategory: "womens", image: "/Product-image/Bag-Image/Women/bag (1).webp", rating: 4.7, price: 1999, offer: 25 },
{ id: 42, name: "Women's Shoulder Handbag", category: "bag", subcategory: "womens", image: "/Product-image/Bag-Image/Women/bag (2).webp", rating: 4.6, price: 2499, offer: 30 },
{ id: 43, name: "Women's Crossbody Bag", category: "bag", subcategory: "womens", image: "/Product-image/Bag-Image/Women/bag (3).webp", rating: 4.5, price: 1799, offer: 20 },
{ id: 44, name: "Women's Clutch Purse", category: "bag", subcategory: "womens", image: "/Product-image/Bag-Image/Women/bag (4).webp", rating: 4.8, price: 1299, offer: 15 },
{ id: 45, name: "Women's Sling Bag", category: "bag", subcategory: "womens", image: "/Product-image/Bag-Image/Women/bag (5).webp", rating: 4.4, price: 1599, offer: 20 },
{ id: 46, name: "Women's Backpack Purse", category: "bag", subcategory: "womens", image: "/Product-image/Bag-Image/Women/bag (6).webp", rating: 4.7, price: 2199, offer: 25 },

//Kid Bag
{ id: 51, name: "Kids' School Backpack", category: "bag", subcategory: "kids", image: "/Product-image/Bag-Image/Kid/bag (1).webp", rating: 4.8, price: 1499, offer: 20 },
{ id: 52, name: "Kids' Cartoon Backpack", category: "bag", subcategory: "kids", image: "/Product-image/Bag-Image/Kid/bag (2).webp", rating: 4.7, price: 1299, offer: 15 },
{ id: 53, name: "Kids' Trolley School Bag", category: "bag", subcategory: "kids", image: "/Product-image/Bag-Image/Kid/bag (3).webp", rating: 4.6, price: 1799, offer: 25 },
{ id: 54, name: "Kids' Lunch Bag", category: "bag", subcategory: "kids", image: "/Product-image/Bag-Image/Kid/bag (4).webp", rating: 4.5, price: 799, offer: 10 },
{ id: 55, name: "Kids' Travel Backpack", category: "bag", subcategory: "kids", image: "/Product-image/Bag-Image/Kid/bag (5).webp", rating: 4.4, price: 1699, offer: 20 },
{ id: 56, name: "Kids' Shoulder Sling Bag", category: "bag", subcategory: "kids", image: "/Product-image/Bag-Image/Kid/bag (6).webp", rating: 4.3, price: 999, offer: 15 },

  // Men Watch
{ id: 61, name: "Men's Analog Watch", category: "watch", subcategory: "mens", image: "/Product-image/Watch-Image/Men/watch (1).webp", rating: 4.7, price: 2999, offer: 20 },
{ id: 62, name: "Men's Digital Sports Watch", category: "watch", subcategory: "mens", image: "/Product-image/Watch-Image/Men/watch (2).webp", rating: 4.6, price: 2499, offer: 25 },
{ id: 63, name: "Men's Chronograph Watch", category: "watch", subcategory: "mens", image: "/Product-image/Watch-Image/Men/watch (3).webp", rating: 4.8, price: 3999, offer: 30 },
{ id: 64, name: "Men's Smartwatch", category: "watch", subcategory: "mens", image: "/Product-image/Watch-Image/Men/watch (4).webp", rating: 4.9, price: 5999, offer: 15 },
{ id: 65, name: "Men's Luxury Leather Watch", category: "watch", subcategory: "mens", image: "/Product-image/Watch-Image/Men/watch (5).webp", rating: 4.7, price: 4499, offer: 20 },
{ id: 66, name: "Men's Diver Watch", category: "watch", subcategory: "mens", image: "/Product-image/Watch-Image/Men/watch (6).webp", rating: 4.6, price: 5299, offer: 25 },

// Women Watch
{ id: 71, name: "Women's Analog Watch", category: "watch", subcategory: "womens", image: "/Product-image/Watch-Image/Women/watch (1).webp", rating: 4.7, price: 2499, offer: 20 },
{ id: 72, name: "Women's Digital Sports Watch", category: "watch", subcategory: "womens", image: "/Product-image/Watch-Image/Women/watch (2).webp", rating: 4.6, price: 1999, offer: 25 },
{ id: 73, name: "Women's Luxury Diamond Watch", category: "watch", subcategory: "womens", image: "/Product-image/Watch-Image/Women/watch (3).webp", rating: 4.9, price: 5999, offer: 30 },
{ id: 74, name: "Women's Smartwatch", category: "watch", subcategory: "womens", image: "/Product-image/Watch-Image/Women/watch (4).webp", rating: 4.8, price: 4999, offer: 15 },
{ id: 75, name: "Women's Bracelet Watch", category: "watch", subcategory: "womens", image: "/Product-image/Watch-Image/Women/watch (5).webp", rating: 4.7, price: 3499, offer: 20 },
{ id: 76, name: "Women's Vintage Leather Watch", category: "watch", subcategory: "womens", image: "/Product-image/Watch-Image/Women/watch (6).webp", rating: 4.6, price: 2899, offer: 25 },

// Kid Watch
{ id: 81, name: "Kids' Cartoon Analog Watch", category: "watch", subcategory: "kids", image: "/Product-image/Watch-Image/Kid/watch (1).webp", rating: 4.7, price: 999, offer: 20 },
{ id: 82, name: "Kids' Digital LED Watch", category: "watch", subcategory: "kids", image: "/Product-image/Watch-Image/Kid/watch (2).webp", rating: 4.6, price: 799, offer: 25 },
{ id: 83, name: "Kids' Waterproof Sports Watch", category: "watch", subcategory: "kids", image: "/Product-image/Watch-Image/Kid/watch (3).webp", rating: 4.8, price: 1299, offer: 30 },
{ id: 84, name: "Kids' Smartwatch with Games", category: "watch", subcategory: "kids", image: "/Product-image/Watch-Image/Kid/watch (4).webp", rating: 4.9, price: 1999, offer: 15 },
{ id: 85, name: "Kids' Glow-in-the-Dark Watch", category: "watch", subcategory: "kids", image: "/Product-image/Watch-Image/Kid/watch (5).webp", rating: 4.7, price: 899, offer: 20 },
{ id: 86, name: "Kids' Silicone Strap Watch", category: "watch", subcategory: "kids", image: "/Product-image/Watch-Image/Kid/watch (6).webp", rating: 4.6, price: 749, offer: 25 },

// OnePlus Phones
{ id: 121, name: "OnePlus 12 Pro", category: "phone", subcategory: "one plus", image: "/Product-image/Phone-Image/Oneplus/phone (1).webp", rating: 4.8, price: 69999, offer: 10 },
{ id: 122, name: "OnePlus 11R", category: "phone", subcategory: "one plus", image: "/Product-image/Phone-Image/Oneplus/phone (2).webp", rating: 4.7, price: 49999, offer: 15 },
{ id: 123, name: "OnePlus Nord 3", category: "phone", subcategory: "one plus", image: "/Product-image/Phone-Image/Oneplus/phone (3).webp", rating: 4.6, price: 32999, offer: 20 },
{ id: 124, name: "OnePlus 10T", category: "phone", subcategory: "one plus", image: "/Product-image/Phone-Image/Oneplus/phone (4).webp", rating: 4.7, price: 45999, offer: 10 },

// Xiaomi Phones
{ id: 131, name: "Redmi 13 Pro", category: "phone", subcategory: "redmi", image: "/Product-image/Phone-Image/Redmi/phone (1).webp", rating: 4.8, price: 79999, offer: 12 },
{ id: 132, name: "Redmi 12T", category: "phone", subcategory: "redmi", image: "/Product-image/Phone-Image/Redmi/phone (2).webp", rating: 4.7, price: 56999, offer: 15 },
{ id: 133, name: "Redmi Note 12", category: "phone", subcategory: "redmi", image: "/Product-image/Phone-Image/Redmi/phone (3).webp", rating: 4.6, price: 20999, offer: 18 },
{ id: 134, name: "Redmi K50", category: "phone", subcategory: "redmi", image: "/Product-image/Phone-Image/Redmi/phone (4).webp", rating: 4.7, price: 35999, offer: 10 },

// Realme Phones
{ id: 141, name: "Realme GT Neo 3", category: "phone", subcategory: "realme", image: "/Product-image/Phone-Image/Realme/phone (1).webp", rating: 4.8, price: 36999, offer: 15 },
{ id: 142, name: "Realme Narzo 50 Pro", category: "phone", subcategory: "realme", image: "/Product-image/Phone-Image/Realme/phone (2).webp", rating: 4.7, price: 21999, offer: 18 },
{ id: 143, name: "Realme 9 Pro+", category: "phone", subcategory: "realme", image: "/Product-image/Phone-Image/Realme/phone (3).webp", rating: 4.6, price: 25999, offer: 12 },
{ id: 144, name: "Realme 10", category: "phone", subcategory: "realme", image: "/Product-image/Phone-Image/Realme/phone (4).webp", rating: 4.5, price: 18999, offer: 20 },

// Vivo Phones
{ id: 151, name: "Vivo X80 Pro", category: "phone", subcategory: "vivo", image: "/Product-image/Phone-Image/Vivo/phone (1).webp", rating: 4.9, price: 79999, offer: 10 },
{ id: 152, name: "Vivo V25 Pro", category: "phone", subcategory: "vivo", image: "/Product-image/Phone-Image/Vivo/phone (2).webp", rating: 4.7, price: 35999, offer: 15 },
{ id: 153, name: "Vivo T1 5G", category: "phone", subcategory: "vivo", image: "/Product-image/Phone-Image/Vivo/phone (3).webp", rating: 4.5, price: 16999, offer: 20 },
{ id: 154, name: "Vivo Y75", category: "phone", subcategory: "vivo", image: "/Product-image/Phone-Image/Vivo/phone (4).webp", rating: 4.4, price: 20999, offer: 18 },

// Poco
{ id: 161, name: "Poco F4 5G", category: "phone", subcategory: "poco", image: "/Product-image/Phone-Image/Poco/phone (1).webp", rating: 4.8, price: 27999, offer: 15 },
{ id: 162, name: "Poco X4 Pro", category: "phone", subcategory: "poco", image: "/Product-image/Phone-Image/Poco/phone (2).webp", rating: 4.7, price: 19999, offer: 18 },
{ id: 163, name: "Poco M4 Pro", category: "phone", subcategory: "poco", image: "/Product-image/Phone-Image/Poco/phone (3).webp", rating: 4.5, price: 16999, offer: 20 },
{ id: 164, name: "Poco C31", category: "phone", subcategory: "poco", image: "/Product-image/Phone-Image/Poco/phone (4).webp", rating: 4.3, price: 8999, offer: 25 },

// Apple
{ id: 171, name: "iPhone 15 Pro Max", category: "phone", subcategory: "apple", image: "/Product-image/Phone-Image/Apple/phone (1).webp", rating: 4.9, price: 159999, offer: 5 },
{ id: 172, name: "iPhone 15", category: "phone", subcategory: "apple", image: "/Product-image/Phone-Image/Apple/phone (2).webp", rating: 4.8, price: 79999, offer: 10 },
{ id: 173, name: "iPhone 14 Pro", category: "phone", subcategory: "apple", image: "/Product-image/Phone-Image/Apple/phone (3).webp", rating: 4.7, price: 129999, offer: 8 },
{ id: 174, name: "iPhone 14", category: "phone", subcategory: "apple", image: "/Product-image/Phone-Image/Apple/phone (4).webp", rating: 4.6, price: 69999, offer: 12 },

// Samsung
{ id: 181, name: "Samsung Galaxy S23 Ultra", category: "phone", subcategory: "samsung", image: "/Product-image/Phone-Image/Samsung/phone (1).webp", rating: 4.9, price: 124999, offer: 7 },
{ id: 182, name: "Samsung Galaxy S23", category: "phone", subcategory: "samsung", image: "/Product-image/Phone-Image/Samsung/phone (2).webp", rating: 4.8, price: 79999, offer: 10 },
{ id: 183, name: "Samsung Galaxy Z Fold 5", category: "phone", subcategory: "samsung", image: "/Product-image/Phone-Image/Samsung/phone (3).webp", rating: 4.7, price: 154999, offer: 5 },
{ id: 184, name: "Samsung Galaxy Z Flip 5", category: "phone", subcategory: "samsung", image: "/Product-image/Phone-Image/Samsung/phone (4).webp", rating: 4.6, price: 99999, offer: 8 },

// IQOO
{ id: 191, name: "iQOO 11 5G", category: "phone", subcategory: "iqoo", image: "/Product-image/Phone-Image/IQOO/phone (1).webp", rating: 4.8, price: 59999, offer: 10 },
{ id: 192, name: "iQOO Neo 7 Pro", category: "phone", subcategory: "iqoo", image: "/Product-image/Phone-Image/IQOO/phone (2).webp", rating: 4.7, price: 34999, offer: 12 },
{ id: 193, name: "iQOO Neo 7", category: "phone", subcategory: "iqoo", image: "/Product-image/Phone-Image/IQOO/phone (3).webp", rating: 4.6, price: 29999, offer: 15 },
{ id: 194, name: "iQOO Z7 5G", category: "phone", subcategory: "iqoo", image: "/Product-image/Phone-Image/IQOO/phone (4).webp", rating: 4.5, price: 18999, offer: 18 },

// Oppo
{ id: 201, name: "Oppo Find X5 Pro", category: "phone", subcategory: "oppo", image: "/Product-image/Phone-Image/Oppo/phone (1).webp", rating: 4.8, price: 74999, offer: 10 },
{ id: 202, name: "Oppo Reno 8 Pro", category: "phone", subcategory: "oppo", image: "/Product-image/Phone-Image/Oppo/phone (2).webp", rating: 4.7, price: 45999, offer: 12 },
{ id: 203, name: "Oppo Reno 8", category: "phone", subcategory: "oppo", image: "/Product-image/Phone-Image/Oppo/phone (3).webp", rating: 4.6, price: 34999, offer: 15 },
{ id: 204, name: "Oppo Reno 7", category: "phone", subcategory: "oppo", image: "/Product-image/Phone-Image/Oppo/phone (4).webp", rating: 4.5, price: 28999, offer: 18 },

// HP Laptop
{ id: 211, name: "HP Pavilion x360", category: "laptop", subcategory: "hp", image: "/Product-image/Laptop-Image/Hp/laptop (1).webp", rating: 4.8, price: 67999, offer: 10 },
{ id: 212, name: "HP Spectre x360", category: "laptop", subcategory: "hp", image: "/Product-image/Laptop-Image/Hp/laptop (2).webp", rating: 4.9, price: 129999, offer: 12 },
{ id: 213, name: "HP Envy 13", category: "laptop", subcategory: "hp", image: "/Product-image/Laptop-Image/Hp/laptop (3).webp", rating: 4.7, price: 84999, offer: 15 },
{ id: 214, name: "HP Victus 16", category: "laptop", subcategory: "hp", image: "/Product-image/Laptop-Image/Hp/laptop (4).webp", rating: 4.6, price: 75999, offer: 18 },

// Dell Laptop
{ id: 221, name: "Dell XPS 13", category: "laptop", subcategory: "dell", image: "/Product-image/Laptop-Image/Dell/laptop (1).webp", rating: 4.9, price: 129999, offer: 12 },
{ id: 222, name: "Dell XPS 15", category: "laptop", subcategory: "dell", image: "/Product-image/Laptop-Image/Dell/laptop (2).webp", rating: 4.8, price: 149999, offer: 10 },
{ id: 223, name: "Dell Inspiron 15", category: "laptop", subcategory: "dell", image: "/Product-image/Laptop-Image/Dell/laptop (3).webp", rating: 4.5, price: 59999, offer: 20 },
{ id: 224, name: "Dell Inspiron 14", category: "laptop", subcategory: "dell", image: "/Product-image/Laptop-Image/Dell/laptop (4).webp", rating: 4.4, price: 52999, offer: 18 },

// Acer Laptop
{ id: 231, name: "Acer Aspire 7", category: "laptop", subcategory: "acer", image: "/Product-image/Laptop-Image/Acer/laptop (1).webp", rating: 4.6, price: 65999, offer: 15 },
{ id: 232, name: "Acer Nitro 5", category: "laptop", subcategory: "acer", image: "/Product-image/Laptop-Image/Acer/laptop (2).jpwebpg", rating: 4.7, price: 79999, offer: 12 },
{ id: 233, name: "Acer Predator Helios 300", category: "laptop", subcategory: "acer", image: "/Product-image/Laptop-Image/Acer/laptop (3).webp", rating: 4.8, price: 125999, offer: 10 },
{ id: 234, name: "Acer Swift 3", category: "laptop", subcategory: "acer", image: "/Product-image/Laptop-Image/Acer/laptop (4).webp", rating: 4.5, price: 57999, offer: 18 },

// Apple Laptop
{ id: 271, name: "MacBook Air M1", category: "laptop", subcategory: "apple", image: "/Product-image/Laptop-Image/Apple/laptop (1).webp", rating: 4.8, price: 92000, offer: 10 },
{ id: 272, name: "MacBook Air M2", category: "laptop", subcategory: "apple", image: "/Product-image/Laptop-Image/Apple/laptop (2).webp", rating: 4.9, price: 112000, offer: 12 },
{ id: 273, name: "MacBook Pro 13 M2", category: "laptop", subcategory: "apple", image: "/Product-image/Laptop-Image/Apple/laptop (3).webp", rating: 4.7, price: 129999, offer: 8 },
{ id: 274, name: "MacBook Pro 14 M2 Pro", category: "laptop", subcategory: "apple", image: "/Product-image/Laptop-Image/Apple/laptop (4).webp", rating: 5.0, price: 199999, offer: 15 },

// Asus Laptop
{ id: 261, name: "Asus VivoBook 15", category: "laptop", subcategory: "asus", image: "/Product-image/Laptop-Image/Asus/laptop (1).webp", rating: 4.5, price: 45000, offer: 10 },
{ id: 262, name: "Asus VivoBook Flip 14", category: "laptop", subcategory: "asus", image: "/Product-image/Laptop-Image/Asus/laptop (2).webp", rating: 4.6, price: 62000, offer: 12 },
{ id: 263, name: "Asus TUF Gaming F15", category: "laptop", subcategory: "asus", image: "/Product-image/Laptop-Image/Asus/laptop (3).webp", rating: 4.8, price: 95000, offer: 15 },
{ id: 264, name: "Asus ROG Strix G17", category: "laptop", subcategory: "asus", image: "/Product-image/Laptop-Image/Asus/laptop (4).webp", rating: 4.9, price: 135000, offer: 18 },

// Lenovo Laptop
{ id: 281, name: "Lenovo IdeaPad Slim 3", category: "laptop", subcategory: "lenovo", image: "/Product-image/Laptop-Image/lenovo/laptop (1).webp", rating: 4.5, price: 42000, offer: 10 },
{ id: 282, name: "Lenovo IdeaPad Flex 5", category: "laptop", subcategory: "lenovo", image: "/Product-image/Laptop-Image/lenovo/laptop (2).webp", rating: 4.6, price: 58000, offer: 12 },
{ id: 283, name: "Lenovo ThinkPad E14", category: "laptop", subcategory: "lenovo", image: "/Product-image/Laptop-Image/lenovo/laptop (3).webp", rating: 4.7, price: 75000, offer: 15 },
{ id: 284, name: "Lenovo ThinkPad X1 Carbon", category: "laptop", subcategory: "lenovo", image: "/Product-image/Laptop-Image/lenovo/laptop (4).webp", rating: 4.8, price: 135000, offer: 18 },

// Yamaha Bike
{ id: 1, name: "Yamaha R15 V4", category: "bike", subcategory: "yamaha", image: "/Product-image/Bike-Image/yamaha/bike (1).webp", rating: 4.9, price: 180000, offer: 10 },  
{ id: 2, name: "Yamaha MT-15", category: "bike", subcategory: "yamaha", image: "/Product-image/Bike-Image/yamaha/bike (2).webp", rating: 4.8, price: 170000, offer: 12 },  
{ id: 3, name: "Yamaha FZ-S Fi", category: "bike", subcategory: "yamaha", image: "/Product-image/Bike-Image/yamaha/bike (3).webp", rating: 4.7, price: 125000, offer: 8 },  
{ id: 4, name: "Yamaha FZ-X", category: "bike", subcategory: "yamaha", image: "/Product-image/Bike-Image/yamaha/bike (4).webp", rating: 4.6, price: 135000, offer: 11 },  

// Bajaj Bike
{ id: 5, name: "Bajaj Pulsar NS200", category: "bike", subcategory: "pulsar", image: "/Product-image/Bike-Image/pulsar/bike (1).webp", rating: 4.8, price: 160000, offer: 10 },  
{ id: 6, name: "Bajaj Pulsar 220F", category: "bike", subcategory: "pulsar", image: "/Product-image/Bike-Image/pulsar/bike (2).webp", rating: 4.7, price: 140000, offer: 8 },  
{ id: 7, name: "Bajaj Dominar 400", category: "bike", subcategory: "pulsar", image: "/Product-image/Bike-Image/pulsar/bike (3).webp", rating: 4.9, price: 230000, offer: 12 },  
{ id: 8, name: "Bajaj Avenger Cruise 220", category: "bike", subcategory: "pulsar", image: "/Product-image/Bike-Image/pulsar/bike (4).webp", rating: 4.6, price: 138000, offer: 9 },  

// Hero Bike
{ id: 9, name: "Hero Splendor Plus", category: "bike", subcategory: "hero", image: "/Product-image/Bike-Image/hero/bike (1).webp", rating: 4.7, price: 78000, offer: 5 },
{ id: 10, name: "Hero HF Deluxe", category: "bike", subcategory: "hero", image: "/Product-image/Bike-Image/hero/bike (2).webp", rating: 4.6, price: 65000, offer: 7 },
{ id: 11, name: "Hero Passion Pro", category: "bike", subcategory: "hero", image: "/Product-image/Bike-Image/hero/bike (3).webp", rating: 4.5, price: 74000, offer: 6 },
{ id: 12, name: "Hero Xtreme 160R", category: "bike", subcategory: "hero", image: "/Product-image/Bike-Image/hero/bike (4).webp", rating: 4.8, price: 120000, offer: 8 },

// Royal Enfield
{ id: 261, name: "Royal Enfield Classic 350", category: "bike", subcategory: "royal enfield", image: "/Product-image/Bike-Image/Men/bike(1).webp", rating: 4.8, price: 210000, offer: 5 },
{ id: 262, name: "Royal Enfield Bullet 350", category: "bike", subcategory: "royal enfield", image: "/Product-image/Bike-Image/Men/bike(2).webp", rating: 4.7, price: 190000, offer: 4 },
{ id: 263, name: "Royal Enfield Meteor 350", category: "bike", subcategory: "royal enfield", image: "/Product-image/Bike-Image/Men/bike(3).webp", rating: 4.8, price: 220000, offer: 6 },
{ id: 264, name: "Royal Enfield Himalayan 450", category: "bike", subcategory: "royal enfield", image: "/Product-image/Bike-Image/Men/bike(4).webp", rating: 4.9, price: 270000, offer: 7 },

// KTM
{ id: 271, name: "KTM Duke 125", category: "bike", subcategory: "ktm", image: "/Product-image/Bike-Image/ktm/bike (1).webp", rating: 4.6, price: 180000, offer: 5 },
{ id: 272, name: "KTM Duke 200", category: "bike", subcategory: "ktm", image: "/Product-image/Bike-Image/ktm/bike (2).webp", rating: 4.7, price: 220000, offer: 6 },
{ id: 273, name: "KTM Duke 250", category: "bike", subcategory: "ktm", image: "/Product-image/Bike-Image/ktm/bike (3).webp", rating: 4.8, price: 280000, offer: 7 },
{ id: 274, name: "KTM Duke 390", category: "bike", subcategory: "ktm", image: "/Product-image/Bike-Image/ktm/bike (4).webp", rating: 4.9, price: 320000, offer: 8 },

// TVS
{ id: 281, name: "TVS Apache RTR 160", category: "bike", subcategory: "tvs", image: "/Product-image/Bike-Image/tvs/bike (1).webp", rating: 4.6, price: 120000, offer: 5 },
{ id: 282, name: "TVS Apache RTR 180", category: "bike", subcategory: "tvs", image: "/Product-image/Bike-Image/tvs/bike (2).webp", rating: 4.7, price: 130000, offer: 6 },
{ id: 283, name: "TVS Apache RTR 200", category: "bike", subcategory: "tvs", image: "/Product-image/Bike-Image/tvs/bike (3).webp", rating: 4.8, price: 140000, offer: 7 },
{ id: 284, name: "TVS Apache RR 310", category: "bike", subcategory: "tvs", image: "/Product-image/Bike-Image/tvs/bike (4).webp", rating: 4.9, price: 270000, offer: 8 },
// Honda
{ id: 291, name: "Honda Shine 125", category: "bike", subcategory: "honda", image: "/Product-image/Bike-Image/honda/bike (1).webp", rating: 4.6, price: 90000, offer: 5 },
{ id: 292, name: "Honda SP 125", category: "bike", subcategory: "honda", image: "/Product-image/Bike-Image/honda/bike (2).webp", rating: 4.7, price: 95000, offer: 6 },
{ id: 293, name: "Honda Unicorn 160", category: "bike", subcategory: "honda", image: "/Product-image/Bike-Image/honda/bike (3).webp", rating: 4.8, price: 110000, offer: 7 },
{ id: 294, name: "Honda CB200X", category: "bike", subcategory: "honda", image: "/Product-image/Bike-Image/honda/bike (4).webp", rating: 4.9, price: 150000, offer: 8 },

// BMW Cars
{ id: 1, name: "BMW X1", category: "car", subcategory: "bmw", image: "/Product-image/Car-Image/bmw/car (1).webp", rating: 4.7, price: 4500000, offer: 8 },  
{ id: 2, name: "BMW X3", category: "car", subcategory: "bmw", image: "/Product-image/Car-Image/bmw/car (2).webp", rating: 4.8, price: 6700000, offer: 7 },  
{ id: 3, name: "BMW X5", category: "car", subcategory: "bmw", image: "/Product-image/Car-Image/bmw/car (3).webp", rating: 4.9, price: 8500000, offer: 10 },  
{ id: 4, name: "BMW X7", category: "car", subcategory: "bmw", image: "/Product-image/Car-Image/bmw/car (4).webp", rating: 5.0, price: 12500000, offer: 6 },  

// Audi Cars
{ id: 5, name: "Audi A3", category: "car", subcategory: "audi", image: "/Product-image/Car-Image/audi/car (1).webp", rating: 4.7, price: 3500000, offer: 8 },  
{ id: 6, name: "Audi A4", category: "car", subcategory: "audi", image: "/Product-image/Car-Image/audi/car (2).webp", rating: 4.8, price: 4700000, offer: 7 },  
{ id: 7, name: "Audi A6", category: "car", subcategory: "audi", image: "/Product-image/Car-Image/audi/car (3).webp", rating: 4.9, price: 6500000, offer: 10 },  
{ id: 8, name: "Audi A8", category: "car", subcategory: "audi", image: "/Product-image/Car-Image/audi/car (4).webp", rating: 5.0, price: 12000000, offer: 6 },  

// Bentley Cars
{ id: 9, name: "Bentley Continental GT", category: "car", subcategory: "bentley", image: "/Product-image/Car-Image/bentley/car (1).webp", rating: 5.0, price: 32000000, offer: 5 },  
{ id: 10, name: "Bentley Flying Spur", category: "car", subcategory: "bentley", image: "/Product-image/Car-Image/bentley/car (2).webp", rating: 4.9, price: 28000000, offer: 6 },  
{ id: 11, name: "Bentley Bentayga", category: "car", subcategory: "bentley", image: "/Product-image/Car-Image/bentley/car (3).webp", rating: 4.8, price: 26000000, offer: 7 },  
{ id: 12, name: "Bentley Mulsanne", category: "car", subcategory: "bentley", image: "/Product-image/Car-Image/bentley/car (4).webp", rating: 5.0, price: 50000000, offer: 4 },  

// Rolls-Royce Cars
{ id: 13, name: "Rolls-Royce Phantom", category: "car", subcategory: "rolls royce", image: "/Product-image/Car-Image/rolls royce/car (1).webp", rating: 5.0, price: 100000000, offer: 3 },  
{ id: 14, name: "Rolls-Royce Ghost", category: "car", subcategory: "rolls royce", image: "/Product-image/Car-Image/rolls royce/car (2).webp", rating: 4.9, price: 70000000, offer: 4 },  
{ id: 15, name: "Rolls-Royce Cullinan", category: "car", subcategory: "rolls royce", image: "/Product-image/Car-Image/rolls royce/car (3).webp", rating: 4.8, price: 80000000, offer: 5 },  
{ id: 16, name: "Rolls-Royce Wraith", category: "car", subcategory: "rolls royce", image: "/Product-image/Car-Image/rolls royce/car (4).webp", rating: 4.9, price: 75000000, offer: 6 },  
// Ford Cars
{ id: 1, name: "Ford Mustang", category: "car", subcategory: "ford", image: "/Product-image/Car-Image/ford/car (1).webp", rating: 4.8, price: 7500000, offer: 10 },  
{ id: 2, name: "Ford Endeavour", category: "car", subcategory: "ford", image: "/Product-image/Car-Image/ford/car (2).webp", rating: 4.7, price: 3600000, offer: 8 },  
{ id: 3, name: "Ford EcoSport", category: "car", subcategory: "ford", image: "/Product-image/Car-Image/ford/car (3).webp", rating: 4.6, price: 1200000, offer: 12 },  
{ id: 4, name: "Ford Figo", category: "car", subcategory: "ford", image: "/Product-image/Car-Image/ford/car (4).webp", rating: 4.5, price: 800000, offer: 15 },  

// Jaguar Cars
{ id: 5, name: "Jaguar F-Type", category: "car", subcategory: "jaguar", image: "/Product-image/Car-Image/jaguar/car (1).webp", rating: 4.9, price: 9800000, offer: 8 },  
{ id: 6, name: "Jaguar XF", category: "car", subcategory: "jaguar", image: "/Product-image/Car-Image/jaguar/car (2).webp", rating: 4.7, price: 7100000, offer: 10 },  
{ id: 7, name: "Jaguar XE", category: "car", subcategory: "jaguar", image: "/Product-image/Car-Image/jaguar/car (3).webp", rating: 4.6, price: 5500000, offer: 12 },  
{ id: 8, name: "Jaguar I-PACE", category: "car", subcategory: "jaguar", image: "/Product-image/Car-Image/jaguar/car (4).webp", rating: 4.8, price: 11000000, offer: 7 },  

// Benz Cars
{ id: 9, name: "Mercedes-Benz A-Class", category: "car", subcategory: "benz", image: "/Product-image/Car-Image/benz/car (1).webp", rating: 4.7, price: 4200000, offer: 10 },  
{ id: 10, name: "Mercedes-Benz C-Class", category: "car", subcategory: "benz", image: "/Product-image/Car-Image/benz/car (2).webp", rating: 4.8, price: 5500000, offer: 12 },  
{ id: 11, name: "Mercedes-Benz E-Class", category: "car", subcategory: "benz", image: "/Product-image/Car-Image/benz/car (3).webp", rating: 4.9, price: 8600000, offer: 8 },  
{ id: 12, name: "Mercedes-Benz S-Class", category: "car", subcategory: "benz", image: "/Product-image/Car-Image/benz/car (4).webp", rating: 5.0, price: 17000000, offer: 5 },  

// Volvo Cars
{ id: 13, name: "Volvo XC40", category: "car", subcategory: "volvo", image: "/Product-image/Car-Image/volvo/car (1).webp", rating: 4.7, price: 4500000, offer: 10 },  
{ id: 14, name: "Volvo XC60", category: "car", subcategory: "volvo", image: "/Product-image/Car-Image/volvo/car (2).webp", rating: 4.8, price: 6700000, offer: 12 },  
{ id: 15, name: "Volvo XC90", category: "car", subcategory: "volvo", image: "/Product-image/Car-Image/volvo/car (3).webp", rating: 4.9, price: 9800000, offer: 8 },  
{ id: 16, name: "Volvo S60", category: "car", subcategory: "volvo", image: "/Product-image/Car-Image/volvo/car (4).webp", rating: 4.7, price: 5200000, offer: 11 },  

// Toyota Cars
{ id: 17, name: "Toyota Fortuner", category: "car", subcategory: "toyota", image: "/Product-image/Car-Image/toyota/car (1).webp", rating: 4.8, price: 5000000, offer: 10 },  
{ id: 18, name: "Toyota Innova Crysta", category: "car", subcategory: "toyota", image: "/Product-image/Car-Image/toyota/car (2).webp", rating: 4.7, price: 3500000, offer: 12 },  
{ id: 19, name: "Toyota Camry", category: "car", subcategory: "toyota", image: "/Product-image/Car-Image/toyota/car (3).webp", rating: 4.9, price: 4600000, offer: 8 },  
{ id: 20, name: "Toyota Hilux", category: "car", subcategory: "toyota", image: "/Product-image/Car-Image/toyota/car (4).webp", rating: 4.7, price: 4500000, offer: 11 },  

  ];
  
  export default products;
  