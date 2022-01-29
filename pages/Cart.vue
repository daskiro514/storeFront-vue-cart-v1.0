<template>
  <div id="cart">
    <LazyHydrate when-visible>
      <!-- Added by Daskiro
      It shows rotating spinner when data is not ready and the page is getting data -->
      <SfLoader v-if="cartLoading" />

      <div class="detailed-cart" v-else>
        <div v-if="totalItems" class="detailed-cart__aside">
          <SfOrderSummary
            orderTitle="Totals"
            :order="{orderItems: products, shipping: {shippingMethod: shippingMethods[2]}}"
            :propertiesNames='["Products","Subtotal","Shipping","Total price"]'
          />
        </div>
        <div class="detailed-cart__main">
          <transition name="sf-fade" mode="out-in">
            <div
              v-if="totalItems"
              key="detailed-cart"
              class="collected-product-list"
            >
              <transition-group name="sf-fade" tag="div">
                <SfCollectedProduct
                  v-for="product in products"
                  :key="product.id"
                  v-model="product.qty"
                  :image="product.image"
                  :title="product.title"
                  :regular-price="
                    product.price.regular && `$${product.price.regular}`
                  "
                  :special-price="
                    product.price.special && `$${product.price.special}`
                  "
                  class="sf-collected-product--detailed collected-product"
                  @click:remove="removeHandler(product)"
                >
                  <template #configuration>
                    <div class="collected-product__properties">
                      <SfProperty
                        v-for="(property, key) in product.configuration"
                        :key="key"
                        :name="property.name"
                        :value="property.value"
                      />
                    </div>
                  </template>
                  <template #actions>
                    <div class="actions desktop-only">
                      <SfButton class="sf-button--text actions__button"
                        >Edit</SfButton
                      >
                      <SfButton class="sf-button--text actions__button"
                        >Save for later</SfButton
                      >
                      <SfButton class="sf-button--text actions__button"
                        >Add to compare</SfButton
                      >
                    </div>
                  </template>
                </SfCollectedProduct>
              </transition-group>
            </div>
            <div v-else key="empty-cart" class="empty-cart">
              <SfImage
                :src="require('@storefront-ui/shared/icons/empty_cart.svg')"
                alt="Empty cart"
                class="empty-cart__image"
                :width="140"
                :height="200"
              />
              <SfHeading
                title="Your cart is empty"
                :level="2"
                description="Looks like you haven't added any items to the cart yet. Start
                  shopping to fill it in."
              />
              <SfButton
                class="sf-button--full-width color-primary empty-cart__button"
                >Start shopping
              </SfButton>
            </div>
          </transition>
        </div>
      </div>
    </LazyHydrate>
  </div>
</template>
<script>
import {
  SfCollectedProduct,
  SfButton,
  SfImage,
  SfLoader,
  SfProperty,
  SfHeading,
  SfBreadcrumbs,
  SfOrderSummary,
} from "@storefront-ui/vue";
import LazyHydrate from "vue-lazy-hydration";
import { useCart } from "~/stubVueStorefrontIntegration/composables";
import { onSSR } from "@vue-storefront/core";

export default {
  name: "Cart",
  components: {
    SfCollectedProduct,
    SfBreadcrumbs,
    SfImage,
    SfButton,
    SfLoader,
    SfHeading,
    SfProperty,
    SfOrderSummary,
    LazyHydrate
  },
  setup() {
    const {
      load: getCartContent,
      cart,
      loading: cartLoading,
    } = useCart('cart');

    onSSR(async () => {
      await getCartContent({});
    });

    return {
      cart,
      cartLoading
    };
  },
  data() {
    return {
      products: [],
      shippingMethods: [],
    };
  },
  // Waiting the cart data changed
  watch: {
    cart: function (val) {
      this.products = [...this.cart.products];
      this.shippingMethods = [...this.cart.shippingMethods];
    }
  },
  computed: {
    totalItems() {
      return this.products.reduce((totalItems, product) => totalItems + parseInt(product.qty, 10), 0);
    },
  },
  methods: {
    removeHandler(product) {
      const products = [...this.products];
      this.products = products.filter((element) => element.id !== product.id);
    },
  },
  // Assigning the data value when the page loaded
  mounted: function () {
    if (this.cart) {
      this.products = [...this.cart.products];
      this.shippingMethods = [...this.cart.shippingMethods];
    }
  }
};
</script>
<style lang="scss" scoped>
@import "~@storefront-ui/vue/styles";
#detailed-cart {
  box-sizing: border-box;
  @include for-desktop {
    max-width: 1272px;
    margin: 0 auto;
    padding: 0 var(--spacer-sm);
  }
}
.breadcrumbs {
  padding: var(--spacer-base) 0;
}
.detailed-cart {
  &__main {
    padding: 0 var(--spacer-sm);
    @include for-desktop {
      padding: 0;
    }
  }
  &__aside {
    box-sizing: border-box;
    width: 100%;
    background: var(--c-light);
    padding: var(--spacer-base) var(--spacer-sm);
  }
  @include for-desktop {
    display: flex;
    &__main {
      flex: 1;
    }
    &__aside {
      flex: 0 0 26.8125rem;
      order: 1;
      margin: 0 0 0 var(--spacer-xl);
      padding: var(--spacer-xl);
    }
  }
}
.collected-product {
  --collected-product-padding: var(--spacer-sm) 0;
  --collected-product-actions-display: flex;
  border: 1px solid var(--c-light);
  border-width: 1px 0 0 0;
  &:first-of-type {
    border-top: none;
  }
  &__properties {
    --property-value-font-weight: var(--font-weight--normal);
    margin: var(--spacer-sm) 0 0 0;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    align-items: flex-start;
    flex: 2;
  }
  @include for-mobile {
    --collected-product-remove-bottom: var(--spacer-sm);
  }
  @include for-desktop {
    --collected-product-padding: var(--spacer-lg) 0;
  }
}
.actions {
  &__button {
    display: block;
    margin: 0 0 var(--spacer-xs) 0;
    color: var(--c-text);
    &:hover {
      color: var(--c-text-muted);
    }
  }
  &__description {
    font-family: var(--font-family--primary);
    font-size: var(--font-size--sm);
    font-weight: var(--font-weight--light);
    color: var(--c-text-muted);
    position: absolute;
    bottom: 0;
    padding-bottom: var(--spacer-lg);
  }
}
.empty-cart {
  --heading-title-color: var(--c-primary);
  --heading-title-margin: 0 0 var(--spacer-base) 0;
  --heading-description-margin: 0 0 var(--spacer-xl) 0;
  --heading-title-font-weight: var(--font-weight--semibold);
  display: flex;
  flex: 1;
  align-items: center;
  flex-direction: column;
  &__image {
    --image-width: 13.1875rem;
    margin: var(--spacer-2xl) 0;
  }
  @include for-desktop {
    &__image {
      --image-width: 22rem;
    }
    &__button {
      --button-width: 20.9375rem;
    }
  }
}
// .sf-order-summary__promo-code {
//   display: none !important;
// }
</style>