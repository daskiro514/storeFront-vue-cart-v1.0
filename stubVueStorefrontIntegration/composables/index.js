const {
  useCategoryFactory,
  useCartFactory,
  useContentFactory,
} = require("@vue-storefront/core");

const categoryMethods = {
  categorySearch: async () =>
    new Promise((resolve) => {
      setTimeout(
        () =>
          resolve([
            {
              id: 1,
              name: "Accessories",
              slug: "accessories",
              items: [],
            },
            {
              id: 2,
              name: "Brakes",
              slug: "brakes",
              items: [],
            },
            {
              id: 3,
              name: "Tools",
              slug: "tools",
              items: [],
            },
          ]),
        800
      );
    }),
};

// ADDED by Daskiro
// Products and Shipping Methods are predefined to be used in cart page.
const cartMethods = {
  load: async () =>
    new Promise((resolve) => {
      setTimeout(() =>
        resolve({
          products: [
            {
              title: "Cocktail & Party",
              id: "CBB1",
              image: "https://cdn.shopify.com/s/files/1/0407/1902/4288/files/bannerB_328x343.jpg",
              price: { regular: "50.00" },
              configuration: [
                { name: "Size", value: "XS" },
                { name: "Color", value: "White" },
              ],
              qty: 1,
              sku: "MSD23-345-324"
            },
            {
              title: "Linen Dresses",
              id: "CBB2",
              image: "https://cdn.shopify.com/s/files/1/0407/1902/4288/files/bannerE_328x343.jpg",
              price: { regular: "50.00" },
              configuration: [
                { name: "Size", value: "XS" },
                { name: "Color", value: "White" },
              ],
              qty: 2,
              sku: "MSD23-345-324"
            },
            {
              title: "Summer Sandals",
              id: "CBB3",
              image: "https://cdn.shopify.com/s/files/1/0407/1902/4288/files/bannerG_332x400.jpg",
              price: { regular: "50.00" },
              configuration: [
                { name: "Size", value: "XS" },
                { name: "Color", value: "White" },
              ],
              qty: 1,
              sku: "MSD23-345-324"
            },
          ],
          shippingMethods: [
            {
              isOpen: false,
              price: "Free",
              delivery: "Delivery from 3 to 7 business days",
              label: "Pickup in the store",
              value: "store",
              description:
                "Novelty! From now on you have the option of picking up an order in the selected InPack parceled. Just remember that in the case of orders paid on delivery, only the card payment will be accepted.",
            },
            {
              isOpen: false,
              price: "$15.90",
              delivery: "Delivery from 4 to 6 business days",
              label: "Delivery to home",
              value: "home",
              description:
                "Novelty! From now on you have the option of picking up an order in the selected InPack parceled. Just remember that in the case of orders paid on delivery, only the card payment will be accepted.",
            },
            {
              isOpen: false,
              price: "$9.90",
              delivery: "Delivery from 4 to 6 business days",
              label: "Paczkomaty InPost",
              value: "inpost",
              description:
                "Novelty! From now on you have the option of picking up an order in the selected InPack parceled. Just remember that in the case of orders paid on delivery, only the card payment will be accepted.",
            },
            {
              isOpen: false,
              price: "$11.00",
              delivery: "Delivery within 48 hours",
              label: "48 hours coffee",
              value: "coffee",
              description:
                "Novelty! From now on you have the option of picking up an order in the selected InPack parceled. Just remember that in the case of orders paid on delivery, only the card payment will be accepted.",
            },
            {
              isOpen: false,
              price: "$14.00",
              delivery: "Delivery within 24 hours",
              label: "Urgent 24h",
              value: "urgent",
              description:
                "Novelty! From now on you have the option of picking up an order in the selected InPack parceled. Just remember that in the case of orders paid on delivery, only the card payment will be accepted.",
            },
          ],
        }
        ), 1);
    }),
};

const contentMethods = {
  search: async () =>
    new Promise((resolve) => {
      setTimeout(() => {
        resolve({
          heroes: [
            {
              title: "Colorful summer dresses are already in store",
              subtitle: "SUMMER COLLECTION 2021",
              buttonText: "Learn more",
              background: "#eceff1",
              image: {
                mobile:
                  "https://cdn.shopify.com/s/files/1/0407/1902/4288/files/bannerB_328x224.jpg",
                desktop:
                  "https://cdn.shopify.com/s/files/1/0407/1902/4288/files/bannerB_1240x400.jpg",
              },
              link: "/c/women/women-clothing-shirts",
            },
            {
              title: "Colorful summer dresses are already in store",
              subtitle: "SUMMER COLLECTION 2021",
              buttonText: "Learn more",
              background: "#fce4ec",
              image: {
                mobile:
                  "https://cdn.shopify.com/s/files/1/0407/1902/4288/files/bannerH_328x224.jpg",
                desktop:
                  "https://cdn.shopify.com/s/files/1/0407/1902/4288/files/bannerH_1240x400.jpg",
              },
              link: "/c/women/women-clothing-dresses",
            },
            {
              title: "Colorful summer dresses are already in store",
              subtitle: "SUMMER COLLECTION 2021",
              buttonText: "Learn more",
              background: "#efebe9",
              image: {
                mobile:
                  "https://cdn.shopify.com/s/files/1/0407/1902/4288/files/bannerA_328x224.jpg",
                desktop:
                  "https://cdn.shopify.com/s/files/1/0407/1902/4288/files/bannerA_1240x400.jpg",
              },
              link: "/c/women/women-shoes-sandals",
              className:
                "sf-hero-item--position-bg-top-left sf-hero-item--align-right",
            },
          ],
          banners: [
            {
              slot: "banner-A",
              subtitle: "Dresses",
              title: "Cocktail & Party",
              description:
                "Find stunning women's cocktail dresses and party dresses. Stand out in lace and metallic cocktail dresses from all your favorite brands.",
              buttonText: "Shop now",
              image: {
                mobile:
                  "https://cdn.shopify.com/s/files/1/0407/1902/4288/files/bannerB_328x343.jpg",
                desktop:
                  "https://cdn.shopify.com/s/files/1/0407/1902/4288/files/bannerF_332x840.jpg",
              },
              class: "sf-banner--slim desktop-only",
              link: "/c/women/women-clothing-skirts",
            },
            {
              slot: "banner-B",
              subtitle: "Dresses",
              title: "Linen Dresses",
              description:
                "Find stunning women's cocktail dresses and party dresses. Stand out in lace and metallic cocktail dresses from all your favorite brands.",
              buttonText: "Shop now",
              image: {
                mobile:
                  "https://cdn.shopify.com/s/files/1/0407/1902/4288/files/bannerE_328x343.jpg",
                desktop:
                  "https://cdn.shopify.com/s/files/1/0407/1902/4288/files/bannerE_496x840.jpg",
              },
              class: "sf-banner--slim banner-central desktop-only",
              link: "/c/women/women-clothing-dresses",
            },
            {
              slot: "banner-C",
              subtitle: "T-Shirts",
              title: "The Office Life",
              image: {
                mobile:
                  "https://cdn.shopify.com/s/files/1/0407/1902/4288/files/bannerC_328x343.jpg",
                desktop:
                  "https://cdn.shopify.com/s/files/1/0407/1902/4288/files/bannerC_332x400.jpg",
              },
              class: "sf-banner--slim banner__tshirt",
              link: "/c/women/women-clothing-shirts",
            },
            {
              slot: "banner-D",
              subtitle: "Summer Sandals",
              title: "Eco Sandals",
              image: {
                mobile:
                  "https://cdn.shopify.com/s/files/1/0407/1902/4288/files/bannerG_328x343.jpg",
                desktop:
                  "https://cdn.shopify.com/s/files/1/0407/1902/4288/files/bannerG_332x400.jpg",
              },
              class: "sf-banner--slim",
              link: "/c/women/women-shoes-sandals",
            },
          ],
        });
      }, 800);
    }),
};

module.exports = {
  useCategory: useCategoryFactory(categoryMethods),
  useCart: useCartFactory(cartMethods),
  useContent: useContentFactory(contentMethods),
};
