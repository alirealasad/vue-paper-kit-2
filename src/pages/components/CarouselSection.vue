<template>
  <div class="section pt-o" id="carousel">
    <div class="container">
      <div class="row">
        <div class="col-md-8 ml-auto mr-auto">
          <div class="card page-carousel">
            <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
              <ol class="carousel-indicators">
                <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
                <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
              </ol>
              <div class="carousel-inner" role="listbox">
                <div class="carousel-item active">
                  <img class="d-block img-fluid" src="img/soroush-karimi.jpg" alt="First slide">
                  <div class="carousel-caption d-none d-md-block">
                    <p>Somewhere</p>
                  </div>
                </div>
                <div class="carousel-item">
                  <img class="d-block img-fluid" src="img/federico-beccari.jpg" alt="Second slide">
                  <div class="carousel-caption d-none d-md-block">
                    <p>Somewhere else</p>
                  </div>
                </div>
                <div class="carousel-item">
                  <img class="d-block img-fluid" src="img/joshua-stannard.jpg" alt="Third slide">
                  <div class="carousel-caption d-none d-md-block">
                    <p>Here it is</p>
                  </div>
                </div>
              </div>
              <a class="left carousel-control carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                <span class="fa fa-angle-left"></span>
                <span class="sr-only">Previous</span>
              </a>
              <a class="right carousel-control carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                <span class="fa fa-angle-right"></span>
                <span class="sr-only">Next</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="container">
      <div class="title">
        <h4>Carousel</h4>
      </div>
      <div class="row justify-content-center">
        <div class="col-8">
          <el-carousel height="500px" :autoplay="false">
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
