<template>
  <div class="section javascript-components">
    <div class="container">
      <div class="title">
        <h2>Javascript Components</h2>
      </div>
      <div class="row" id="modals">
        <div class="col-md-6">
          <div class="title">
            <h3>Modal</h3>
          </div>
          <!-- Button trigger modal -->
          <n-button type="danger" @click.native="modals.classic = true" round simple>
            Launch Modal
          </n-button>
        </div>
        <div class="col-md-6">
          <div class="title">
            <h3>Popovers</h3>
          </div>
          <el-popover
            ref="popover1"
            popper-class="popover popover-primary"
            placement="left"
            width="200"
            trigger="click"
          >
            <h3 class="popover-header">Popover On Left</h3>
            <div class="popover-body">
              Here will be some very useful information about his popover.
            </div>
          </el-popover>

          <el-popover
            ref="popover2"
            popper-class="popover popover-success"
            placement="top-start"
            width="200"
            trigger="click"
          >
            <h3 class="popover-header">Popover On Top</h3>
            <div class="popover-body">
              Here will be some very useful information about his popover.
            </div>
          </el-popover>

          <el-popover
            ref="popover3"
            popper-class="popover popover-danger"
            placement="right"
            width="200"
            trigger="click"
          >
            <h3 class="popover-header">Popover On Right</h3>
            <div class="popover-body">
              Here will be some very useful information about his popover.
            </div>
          </el-popover>

          <el-popover
            ref="popover4"
            popper-class="popover"
            placement="bottom"
            width="200"
            trigger="click"
          >
            <h3 class="popover-header">Popover On Bottom</h3>
            <div class="popover-body">
              Here will be some very useful information about his popover.
            </div>
          </el-popover>
          <n-button v-popover:popover1 type="danger" simple round>
            On left
          </n-button>
          <n-button v-popover:popover2 type="danger" simple round>
            On top
          </n-button>
          <n-button v-popover:popover3 type="danger" simple round>
            On right
          </n-button>
          <n-button v-popover:popover4 type="danger" simple round>
            On bottom
          </n-button>
        </div>
        <br>
        <div class="col-md-6">
          <div class="title">
            <h3>Datepicker</h3>
          </div>
          <div class="row">
            <div class="col-md-6">
              <div class="datepicker-container">
                <fg-input>
                  <el-date-picker
                    type="date"
                    popper-class="date-picker date-picker-primary"
                    placeholder="Date Time Picker"
                    v-model="pickers.datePicker"
                  >
                  </el-date-picker>
                </fg-input>
              </div>
            </div>
          </div>
        </div>
        <div class="col-md-6">
          <div class="title">
            <h3>Tooltips</h3>
          </div>
          <el-tooltip
            class="item"
            content="Tooltip on the left"
            placement="left"
          >
            <n-button type="danger" simple round>On left</n-button>
          </el-tooltip>
          <el-tooltip class="item" content="Tooltip on top" placement="top">
            <n-button type="danger" simple round>On top</n-button>
          </el-tooltip>
          <el-tooltip
            class="item"
            content="Tooltip on bottom"
            placement="bottom"
          >
            <n-button type="danger" simple round>On bottom</n-button>
          </el-tooltip>
          <el-tooltip
            class="item"
            content="Tooltip on right"
            placement="right"
          >
            <n-button type="danger" simple round>On right</n-button>
          </el-tooltip>
        </div>
      </div>
      <div class="title">
        <h3>Carousel</h3>
      </div>
    </div>
        <!-- Classic Modal -->
    <modal :show.sync="modals.classic" headerClasses="justify-content-center">
      <div slot="header">
        <h5 class="modal-title text-center" id="exampleModalLabel">Modal title</h5>
      </div>
        Far far away, behind the word mountains, far from the countries Vokalia
        and Consonantia, there live the blind texts. Separated they live in
        Bookmarksgrove right at the coast of the Semantics, a large language
        ocean. A small river named Duden flows by their place and supplies it
        with the necessary regelialia. It is a paradisematic country, in which
        roasted parts of sentences fly into your mouth.
      <template slot="footer">
        <n-button>Nice Button</n-button>
        <n-button type="danger" @click.native="modals.classic = false"
          >Close</n-button
        >
      </template>
    </modal>
  </div>
</template>

<script>
import { Button, Modal, FormGroupInput } from '@/components';
import {
  Popover,
  Tooltip,
  DatePicker
 } from 'element-ui';



export default {
  components: {
    Modal,
    [Button.name]: Button,
    [Popover.name]: Popover,
    [Tooltip.name]: Tooltip,
    [DatePicker.name]: DatePicker,
    [FormGroupInput.name]: FormGroupInput
  },
  data() {
    return {
      modals: {
        classic: false,
        mini: false
      },
      pickers: {
        datePicker: ''
      }
    };
  }
};
</script>

<style lang="scss">
#javascriptComponents {
  .modal-buttons,
  .popover-buttons,
  .tooltip-buttons {
    .btn + .btn {
      margin-left: 3px;
    }
  }
}
</style>
