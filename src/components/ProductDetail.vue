<template>
  <div class="container">
    <div class="col-lg-8 p-3 main-section bg-white">
      <div class="row m-0">
        <div class="col-lg-4 left-side-product-box pb-3">
          <img
            :src="getDetail.image"
            class="border p-3"
          />
          <span class="sub-img">
            <img
            :src="getDetail.image"
              class="border p-2"
            />
            <img
            :src="getDetail.image"
              class="border p-2"
            />
            <img
            :src="getDetail.image"
              class="border p-2"
            />
          </span>
        </div>
        <div class="col-lg-8">
          <div class="right-side-pro-detail border p-3 m-0">
            <div class="row">
              <div class="col-lg-12">
                <p class="m-0 p-0">{{getDetail.name}}</p>
              </div>
              <div class="col-lg-12">
                <p class="m-0 p-0 price-pro">${{getDetail.price}}</p>
                <hr class="p-0 m-0" />
              </div>
              <div class="col-lg-12 pt-2">
                <h5>Description</h5>
                <span>{{getDetail.description}}</span>
                <hr class="m-0 pt-2 mt-2" />
              </div>
              <div class="col-lg-12">
                <p class="tag-section">
                  <strong>Type : </strong><span>{{getDetail.type}}</span>
                </p>
              </div>
              <div class="col-lg-12">
                <h6>Quantity :</h6>
                <input
                  type="number"
                  class="form-control text-center w-100"
                  value="1"
                />
              </div>
              <div class="col-lg-12 mt-3">
                <div class="row">
                  <div class="col-lg-6 pb-2">
                    <span class="btn btn-danger w-100">Add To Cart</span>
                  </div>
                  <div class="col-lg-6">
                    <span class="btn btn-success w-100">Shop Now</span>
                  </div>
                </div>
              </div>
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
  name: "ProductDetail",
  computed: {
    ...mapGetters(["getDetail"]),
  },
  created () {
    console.log(this.getDetail);
  }
};
</script>

<style scoped>
body {
    font-family: 'Roboto Condensed', sans-serif;
    background-color: #f5f5f5
}

.hedding {
    font-size: 20px;
    color: #ab8181;
}

.main-section {
    position: absolute;
    left: 50%;
    transform: translate(-50%, 5%);
}

.left-side-product-box img {
    width: 100%;
}

.left-side-product-box .sub-img img {
    margin-top: 5px;
    width: 83px;
    height: 100px;
}

.right-side-pro-detail span {
    font-size: 15px;
}

.right-side-pro-detail p {
    font-size: 25px;
    color: #a1a1a1;
}

.right-side-pro-detail .price-pro {
    color: #E45641;
}

.right-side-pro-detail .tag-section {
    font-size: 18px;
    color: #5D4C46;
}
</style>
