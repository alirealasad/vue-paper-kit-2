<template>
  <div>
    <div class="section section-navbars">
      <div class="container" id="menu-dropdown">
        <div class="title">
          <h3>Menu</h3>
        </div>
        <br/>
        <div class="row">
          <div class="col-md-6">
            <nav class="navbar navbar-expand-lg bg-primary">
              <a class="navbar-brand" href="#">Menu</a>
              <button class="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbar-menu" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-bar"></span>
                <span class="navbar-toggler-bar"></span>
                <span class="navbar-toggler-bar"></span>
              </button>
              <div class="collapse navbar-collapse" id="navbar-menu">
                <ul class="navbar-nav mr-auto">
                  <li class="nav-item">
                    <a class="nav-link" href="#pk">Link</a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" href="#pk">Link</a>
                  </li>
                  <drop-down class="nav-item" type="info" title="Dropdown">
                    <li class="dropdown-header">Dropdown header</li>
                    <a class="dropdown-item" href="#pk">Action</a>
                    <a class="dropdown-item" href="#pk">Another action</a>
                    <a class="dropdown-item" href="#pk">Something else here</a>
                    <div class="dropdown-divider"></div>
                    <li class="dropdown-header">Another header</li>
                    <a class="dropdown-item" href="#pk">Separated link</a>
                    <div class="dropdown-divider"></div>
                    <a class="dropdown-item" href="#pk">Another separated link</a>
                  </drop-down>
                </ul>
              </div>
            </nav>
          </div>
          <div class="col-md-6">
            <nav class="navbar navbar-expand-lg bg-danger">
              <a class="navbar-brand" href="#">Icons</a>
              <button class="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbar-menu-icon" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-bar"></span>
                <span class="navbar-toggler-bar"></span>
                <span class="navbar-toggler-bar"></span>
              </button>
              <div class="collapse navbar-collapse" id="navbar-menu-icon">
                <ul class="navbar-nav ml-auto">
                  <li class="nav-item active">
                    <a class="nav-link" href="#pk"><i class="nc-icon nc-email-85" aria-hidden="true"></i></a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" href="#pk"><i class="nc-icon nc-single-02" aria-hidden="true"></i></a>
                  </li>
                  <drop-down class="nav-item" type="info" title="Dropdown">
                    <li class="dropdown-header" href="#pk">Dropdown header</li>
                    <a class="dropdown-item" href="#pk">Another action</a>
                    <a class="dropdown-item" href="#pk">Something else here</a>
                    <div class="dropdown-divider"></div>
                    <a class="dropdown-item" href="#pk">Separated link</a>
                  </drop-down>
                </ul>
              </div>
            </nav>
          </div>
        </div>
      </div>
    </div>
    <div class="section section-navigation">
      <div class="container tim-container">
        <div class="title">
          <h3>Navigation Areas</h3>
        </div>
      </div>
      <div id="navbar">
        <div class="navigation-example" style="background-image: url('img/ilya-yakover.jpg');">
          <nav class="navbar navbar-expand-lg bg-primary">
            <div class="container">
              <a class="navbar-brand" href="#">Primary Color</a>
              <button class="navbar-toggler navbar-toggler-right burger-menu" type="button" data-toggle="collapse" data-target="#navbar-primary" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-bar"></span>
                <span class="navbar-toggler-bar"></span>
                <span class="navbar-toggler-bar"></span>
              </button>
              <div class="collapse navbar-collapse" id="navbar-primary">
                <ul class="navbar-nav ml-auto">
                  <li class="nav-item">
                    <a class="nav-link" href="#"><i class="nc-icon nc-compass-05" aria-hidden="true"></i>&nbsp;Discover</a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" href="#"><i class="nc-icon nc-single-02" aria-hidden="true"></i>&nbsp;Profile</a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" href="#"><i class="nc-icon nc-settings-gear-65" aria-hidden="true"></i>&nbsp;Settings</a>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
          <nav class="navbar navbar-expand-lg bg-info">
            <div class="container">
              <a class="navbar-brand" href="#">Info Color</a>
              <button class="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbar-info" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-bar"></span>
                <span class="navbar-toggler-bar"></span>
                <span class="navbar-toggler-bar"></span>
              </button>
              <div class="collapse navbar-collapse" id="navbar-info">
                <ul class="navbar-nav ml-auto">
                  <li class="nav-item">
                    <a class="nav-link" href="#">Discover</a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" href="#">Profile</a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" href="#">Settings</a>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
          <nav class="navbar navbar-expand-lg bg-success">
            <div class="container">
              <a class="navbar-brand" href="#">Success Color</a>
              <button class="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbar-success" aria-controls="navbarNav" aria-expanded="true" aria-label="Toggle navigation">
                <span class="navbar-toggler-bar"></span>
                <span class="navbar-toggler-bar"></span>
                <span class="navbar-toggler-bar"></span>
              </button>
              <div class="navbar-collapse collapse show" id="navbar-success" style="">
                <ul class="navbar-nav ml-auto">
                  <li class="nav-item">
                    <a class="nav-link" href="#"><i class="nc-icon nc-compass-05" aria-hidden="true"></i></a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" href="#"><i class="nc-icon nc-single-02" aria-hidden="true"></i> </a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" href="#"><i class="nc-icon nc-settings-gear-65" aria-hidden="true"></i></a>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
          <nav class="navbar navbar-expand-lg bg-warning">
            <div class="container">
              <a class="navbar-brand" href="#">Warning Color</a>
              <button class="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbar-warning" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-bar"></span>
                <span class="navbar-toggler-bar"></span>
                <span class="navbar-toggler-bar"></span>
              </button>
              <div class="collapse navbar-collapse" id="navbar-warning">
                <ul class="navbar-nav ml-auto">
                  <li class="nav-item">
                    <a class="nav-link" href="#"><i class="fa fa-facebook-official" aria-hidden="true"></i></a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" href="#"><i class="fa fa-twitter" aria-hidden="true"></i></a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" href="#"><i class="fa fa-google-plus" aria-hidden="true"></i></a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" href="#"><i class="fa fa-instagram" aria-hidden="true"></i></a>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
          <nav class="navbar navbar-expand-lg bg-danger">
            <div class="container">
              <a class="navbar-brand" href="#">Danger Color</a>
              <button class="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbar-danger" aria-controls="navbarNav" aria-expanded="true" aria-label="Toggle navigation">
                <span class="navbar-toggler-bar"></span>
                <span class="navbar-toggler-bar"></span>
                <span class="navbar-toggler-bar"></span>
              </button>
              <div class="navbar-collapse collapse show" id="navbar-danger" style="">
                <ul class="navbar-nav ml-auto">
                  <li class="nav-item">
                    <a class="nav-link" href="#"><i class="fa fa-facebook-official" aria-hidden="true"></i> Share</a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" href="#"><i class="fa fa-twitter" aria-hidden="true"></i> Tweet</a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" href="#"><i class="fa fa-pinterest" aria-hidden="true"></i> Pin</a>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
          <nav class="navbar navbar-expand-lg navbar-transparent pt-0">
            <div class="container">
              <a class="navbar-brand" href="#">Transparent</a>
              <button class="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbar-transparent" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-bar"></span>
                <span class="navbar-toggler-bar"></span>
                <span class="navbar-toggler-bar"></span>
              </button>
              <div class="collapse navbar-collapse" id="navbar-transparent">
                <ul class="navbar-nav ml-auto">
                  <li class="nav-item">
                    <a class="nav-link" href="#"><i class="fa fa-facebook-official" aria-hidden="true"></i> Facebook</a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" href="#"><i class="fa fa-twitter" aria-hidden="true"></i> Twitter</a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" href="#"><i class="fa fa-instagram" aria-hidden="true"></i> Instagram</a>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
        </div>
      </div>
    </div>
  </div>

</template>

<script>
import { DropDown } from '@/components';

export default {
  components: {
    DropDown
  }
}
</script>

<style lang="css" scoped>
</style>
