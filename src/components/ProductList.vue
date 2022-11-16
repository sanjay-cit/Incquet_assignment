<template>
  <div class="container">
    <div class="row">
      <div class="card" v-for="product in getProducts" :key="product.id" @click="viewDetail(product.id)">
        <div class="image-container">
          <div class="first">
            <div class="d-flex justify-content-between align-items-center">
              <span class="discount">-{{randomDiscount()}}%</span>
            </div>
          </div>

          <img
            :src="product.image"
            class="img-fluid rounded thumbnail-image"
          />
        </div>
        <div class="product-detail-container p-2">
          <div class="d-flex justify-content-between align-items-center">
            <h5 class="dress-name">{{product.name}}</h5>
            <div class="d-flex flex-column mb-2">
              <span class="new-price">${{product.price}}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "ProductList",
  computed: {
    ...mapGetters(["getProducts"]),
  },
  created() {
    this.$store.dispatch("handleProducts");
    console.log('sfsg',this.getProducts);
  },
  methods: {
    randomDiscount () {
        return Math.floor(Math.random() * (1 - 75 + 1) + 1)
    },
    viewDetail (id) {
      this.$store.dispatch("handleDetail",id)
      console.log('dds',this.getDetail);
      this.$router.push('/pdp')
    }
  }
};
</script>

<style scoped>
.container {
  width: 100%;
  margin-right: 65px;
}
.row {
  justify-content: space-around;
}
.card {
  background-color: #fff;
  border: none;
  border-radius: 10px;
  width: 234px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  margin-right: 30px;
  margin-bottom: 30px;
}

.card:hover {
  cursor: pointer;
}

.image-container {
  position: relative;
  padding-top: 13px;
}

.thumbnail-image {
  border-radius: 10px !important;
}

.discount {
  background-color: red;
  padding-top: 1px;
  padding-bottom: 1px;
  padding-left: 4px;
  padding-right: 4px;
  font-size: 10px;
  border-radius: 6px;
  color: #fff;
}

.first {
  position: absolute;
  width: 100%;
  padding: 9px;
}

.dress-name {
  font-size: 13px;
  font-weight: bold;
  width: 75%;
}

.new-price {
  font-size: 13px;
  font-weight: bold;
  color: red;
}

.btn {
  width: 14px;
  height: 14px;
  border-radius: 50%;
  padding: 3px;
}
</style>
