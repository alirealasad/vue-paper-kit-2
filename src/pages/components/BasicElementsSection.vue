<template>
  <div class="section section-buttons">
    <div class="container">
      <div class="title">
        <h2>Basic Elements</h2>
      </div>
      <div id="buttons">
        <div class="title">
          <h3>Buttons
            <br/>
            <small>Pick your style</small>
          </h3>
        </div>
        <div class="row">
          <div class="col-md-8">
            <n-button type="info">Default</n-button>
            <n-button type="info" round>Default</n-button>
            <n-button type="info" round>
              <i class="fa fa-heart"></i> With Icon
            </n-button>
            <n-button type="info" round icon>
              <i class="fa fa-heart"></i>
            </n-button>
            <n-button type="info" round link>Link</n-button>
          </div>
        </div>
        <div class="title">
          <h3>
            <small>Pick your size</small>
          </h3>
        </div>
        <div class="row">
          <div class="col-md-8">
            <n-button type="danger" size="sm" simple>Small</n-button>
            <n-button type="danger" simple>Regular</n-button>
            <n-button type="danger" size="lg" simple>Large</n-button>
          </div>
        </div>
        <div class="title">
          <h3>
            <small>Pick your color</small>
          </h3>
        </div>
        <div class="row">
          <div class="col-md-8">
            <n-button type="default" simple round>Default</n-button>
            <n-button type="primary" simple round>Primary</n-button>
            <n-button type="info" simple round>Info</n-button>
            <n-button type="success" simple round>Success</n-button>
            <n-button type="warning" simple round>Warning</n-button>
            <n-button type="danger" simple round>Danger</n-button>
            <n-button type="neutral" simple round>Neutral</n-button>
          </div>
        </div>
        <br/>
        <div class="row">
          <div class="col-md-8">
            <n-button type="default" round>Default</n-button>
            <n-button type="primary" round>Primary</n-button>
            <n-button type="info" round>Info</n-button>
            <n-button type="success" round>Success</n-button>
            <n-button type="warning" round>Warning</n-button>
            <n-button type="danger" round>Danger</n-button>
            <n-button type="neutral" round>Neutral</n-button>
          </div>
        </div>
      </div>
      <div class="title">
        <h3>Links</h3>
      </div>
      <div class="row">
        <div class="col-md-8">
          <n-button type="default" link>Default</n-button>
          <n-button type="primary" link>Primary</n-button>
          <n-button type="info" link>Info</n-button>
          <n-button type="success" link>Success</n-button>
          <n-button type="warning" link>Warning</n-button>
          <n-button type="danger" link>Danger</n-button>
          <n-button type="neutral" link>Neutral</n-button>
        </div>
      </div>
      <div class="title">
        <h3>Inputs</h3>
      </div>
      <div class="row">
        <div class="col-sm-3">
          <div class="form-group">
            <input type="text" class="form-control" placeholder="Default">
          </div>
        </div>
        <div class="col-sm-3">
          <div class="form-group has-success">
            <input type="text" class="form-control form-control-success" id="inputSuccess1" value="Success">
          </div>
        </div>
        <div class="col-sm-3">
          <div class="form-group has-danger">
            <input type="text" class="form-control form-control-danger" id="inputDanger1" value="Error">
            <div class="form-control-feedback">Sorry, that username's taken. Try another?</div>
          </div>
        </div>
        <div class="col-sm-3">
          <div class="input-group">
            <div class="input-group-prepend">
              <span class="input-group-text">
                <i class="fa fa-group"></i>
              </span>
            </div>
            <input type="text" class="form-control" placeholder="Username">
          </div>
        </div>
      </div>
      <br/>
      <div class="row">
        <div class="col-sm-6 col-lg-3">
          <div class="title">
            <h3>Checkboxes</h3>
          </div>
          <div class="form-check">
            <label class="form-check-label">
              <input class="form-check-input" type="checkbox" value=""> Unchecked
              <span class="form-check-sign"></span>
            </label>
          </div>
          <div class="form-check">
            <label class="form-check-label">
              <input class="form-check-input" type="checkbox" value="" checked> Checked
              <span class="form-check-sign"></span>
            </label>
          </div>
          <div class="form-check disabled">
            <label class="form-check-label">
              <input class="form-check-input" type="checkbox" value="" disabled> Disabled unchecked
              <span class="form-check-sign"></span>
            </label>
          </div>
          <div class="form-check disabled">
            <label class="form-check-label">
              <input class="form-check-input" type="checkbox" value="" disabled checked> Disabled checked
              <span class="form-check-sign"></span>
            </label>
          </div>
        </div>
        <div class="col-sm-6 col-lg-3">
          <div class="title">
            <h3>Radio Buttons</h3>
          </div>
          <div class="form-check-radio">
            <label class="form-check-label">
              <input class="form-check-input" type="radio" name="exampleRadios" id="exampleRadios1" value="option1"> Radio is off
              <span class="form-check-sign"></span>
            </label>
          </div>
          <div class="form-check-radio">
            <label class="form-check-label">
              <input class="form-check-input" type="radio" name="exampleRadios" id="exampleRadios2" value="option2" checked> Radio is on
              <span class="form-check-sign"></span>
            </label>
          </div>
          <div class="form-check-radio disabled">
            <label class="form-check-label">
              <input class="form-check-input" type="radio" name="exampleRadios" id="exampleRadios3" value="option3" disabled> Disabled radio is off
              <span class="form-check-sign"></span>
            </label>
          </div>
          <div class="form-check-radio disabled">
            <label class="form-check-label">
              <input class="form-check-input" type="radio" name="exampleRadioz" id="exampleRadios4" value="option4" checked disabled> Disabled radio is on
              <span class="form-check-sign"></span>
            </label>
          </div>
        </div>
        <div class="col-sm-6 col-lg-3">
          <div class="title">
            <h3>Toggle Buttons</h3>
          </div>
          <div id="switches">
            <label>
              <input type="checkbox" data-toggle="switch" checked="" data-on-color="primary" data-off-color="primary">
              <span class="toggle"></span>
            </label>
            <br/>
            <label>
              <input type="checkbox" data-toggle="switch" data-off-color="primary" data-on-color="primary">
              <span class="toggle"></span>
            </label>
          </div>
        </div>
        <div class="col-sm-6 col-lg-3">
          <div class="title">
            <h3>Sliders</h3>
          </div>
          <div id="sliderRegular" class="slider"></div>
          <br>
          <div id="sliderDouble" class="slider slider-primary"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {
  Button
} from '@/components';

export default {
  components: {
    [Button.name]: Button
  },
}
</script>

<style scoped>
</style>
