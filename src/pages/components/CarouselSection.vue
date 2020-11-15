<template>
  <div class="section pt-o" id="carousel">
    <div class="container">
      <div class="title">
        <h4>Carousel</h4>
      </div>
      <div class="row">
        <div class="col-md-8 ml-auto mr-auto">
          <el-carousel class="card page-carousel" height="487px" :autoplay="false" >
            <el-carousel-item>
              <img class="d-block img-fluid" src="img/soroush-karimi.jpg" alt="First slide">
              <div class="carousel-caption d-none d-md-block">
                <p>Somewhere</p>
              </div>
            </el-carousel-item>
            <el-carousel-item>
              <img class="d-block img-fluid" src="img/federico-beccari.jpg" alt="Second slide">
              <div class="carousel-caption d-none d-md-block">
                <p>Somewhere else</p>
              </div>
            </el-carousel-item>
            <el-carousel-item>
              <img class="d-block img-fluid" src="img/joshua-stannard.jpg" alt="Third slide">
              <div class="carousel-caption d-none d-md-block">
                <p>Here it is</p>
              </div>
            </el-carousel-item>
          </el-carousel>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { Carousel, CarouselItem } from 'element-ui';

export default {
  components: {
    [Carousel.name]: Carousel,
    [CarouselItem.name]: CarouselItem
  }
};
</script>
<style></style>
