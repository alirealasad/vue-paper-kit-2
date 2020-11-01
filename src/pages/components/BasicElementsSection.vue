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
          <fg-input placeholder="Regular"></fg-input>
        </div>
        <div class="col-sm-3">
          <fg-input value="Success" class="has-success"></fg-input>
        </div>
        <div class="col-sm-3">
          <div class="form-group has-danger">
            <fg-input value="Error Input" class="has-danger" error="Sorry, that username's taken. Try another?"></fg-input>
          </div>
        </div>
        <div class="col-sm-3">
          <fg-input
            addon-right-icon="fa fa-group"
            placeholder="Username"
          >
          </fg-input>
        </div>
      </div>
      <br/>
      <div class="row">
        <div class="col-sm-6 col-lg-3">
          <div class="title">
            <h3>Checkboxes</h3>
          </div>
          <n-checkbox v-model="checkboxes.unchecked">Unchecked</n-checkbox>
          <n-checkbox v-model="checkboxes.checked">Checked</n-checkbox>
          <n-checkbox v-model="checkboxes.disabledUnchecked" disabled
            >Disabled Unchecked</n-checkbox
          >
          <n-checkbox v-model="checkboxes.disabledChecked" disabled
            >Disabled Checked</n-checkbox
          >
        </div>
        <div class="col-sm-6 col-lg-3">
          <div class="title">
            <h3>Radio Buttons</h3>
          </div>
          <n-radio v-model="radios.radioOn" label="1">Radio is On</n-radio>
          <n-radio v-model="radios.radioOn" label="2">Radio is Off</n-radio>
          <n-radio v-model="radios.radioOff" label="1" disabled
            >Disabled radio is on</n-radio
          >
          <n-radio v-model="radios.radioOff" label="2" disabled
            >Disabled radio is off</n-radio
          >
        </div>
        <div class="col-sm-6 col-lg-3">
          <div class="title">
            <h3>Toggle Buttons</h3>
          </div>
          <div id="switches">
            <n-switch type="success" v-model="switches.defaultOn"></n-switch>
            <br />
            <n-switch
              v-model="switches.defaultOff"
              on-text="ON"
              off-text="OFF"
            ></n-switch>
          </div>
        </div>
        <div class="col-sm-6 col-lg-3">
          <div class="title">
            <h3>Sliders</h3>
          </div>
          <slider v-model="sliders.simple"> </slider>
          <br>
          <slider v-model="sliders.rangeSlider" type="primary" :connect="true">
          </slider>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {
  Button,
  FormGroupInput,
  Checkbox,
  Switch,
  Slider,
  Radio
} from '@/components';

export default {
  components: {
    [FormGroupInput.name]: FormGroupInput,
    [Checkbox.name]: Checkbox,
    [Button.name]: Button,
    [Switch.name]: Switch,
    [Radio.name]: Radio,
    Slider
  },
  data() {
    return {
      radios: {
        radioOn: '2',
        radioOff: '2'
      },
      checkboxes: {
        unchecked: false,
        checked: true,
        disabledUnchecked: false,
        disabledChecked: true
      },
      switches: {
        defaultOn: true,
        defaultOff: false
      },
      sliders: {
        simple: 30,
        rangeSlider: [20, 60]
      }
    };
  }
}
</script>

<style scoped>
</style>
