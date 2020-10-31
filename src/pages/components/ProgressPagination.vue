<template>
  <div class="section">
    <div class="container">
      <div class="row">
        <div class="col-md-6">
          <div class="title">
            <h3>Progress Bar</h3>
            <br>
          </div>
          <n-progress value="25" type="success"></n-progress>
          <br>
          <n-progress value="50" type="info"></n-progress>
          <br>
          <n-progress value="100" type="danger"></n-progress>
          <br>
          <div class="progress">
            <div class="progress-bar" role="progressbar" style="width: 15%" aria-valuenow="15" aria-valuemin="0" aria-valuemax="100"></div>
            <div class="progress-bar progress-bar-success" role="progressbar" style="width: 30%" aria-valuenow="30" aria-valuemin="0" aria-valuemax="100"></div>
            <div class="progress-bar progress-bar-warning" role="progressbar" style="width: 20%" aria-valuenow="20" aria-valuemin="0" aria-valuemax="100"></div>
          </div>
        </div>
        <div class="col-md-6">
          <div class="title">
            <h3>Pagination</h3>
            <br>
          </div>
          <nav aria-label="Page navigation example">
          <n-pagination
            type="danger"
            :page-count="10"
            v-model="pagination.default"
          >
          </n-pagination>
          </nav>
            <nav aria-label="Page navigation example">
            <n-pagination
              type="info"
              :page-count="10"
              v-model="pagination.simple"
            >
            </n-pagination>
          </nav>
          <br>
        </div>
      </div>
      <br>
      <div class="row">
        <div class="col-md-6">
          <div class="title">
            <h3>Navigation Tabs</h3>
          </div>
          <tabs
            slot="raw-content"
            tab-content-classes="tab-content-padding text-center"
          >
            <tab-pane>
              <template slot="label">
                <i class="now-ui-icons objects_umbrella-13"></i> Home
              </template>
              <p>
                I think that’s a responsibility that I have, to push
                possibilities, to show people, this is the level that things
                could be at. So when you get something that has the name Kanye
                West on it, it’s supposed to be pushing the furthest
                possibilities. I will be the leader of a company that ends up
                being worth billions of dollars, because I got the answers. I
                understand culture. I am the nucleus.
              </p>
            </tab-pane>
            <tab-pane>
              <template slot="label">
                <i class="now-ui-icons shopping_cart-simple"></i> Profile
              </template>
              <p>
                I will be the leader of a company that ends up being worth
                billions of dollars, because I got the answers. I understand
                culture. I am the nucleus. I think that’s a responsibility
                that I have, to push possibilities, to show people, this is
                the level that things could be at. I think that’s a
                responsibility that I have, to push possibilities, to show
                people, this is the level that things could be at.
              </p>
            </tab-pane>
            <tab-pane>
              <template slot="label">
                <i class="now-ui-icons shopping_shop"></i> Messages
              </template>
              <p>
                I think that’s a responsibility that I have, to push
                possibilities, to show people, this is the level that things
                could be at. So when you get something that has the name Kanye
                West on it, it’s supposed to be pushing the furthest
                possibilities. I will be the leader of a company that ends up
                being worth billions of dollars, because I got the answers. I
                understand culture. I am the nucleus.
              </p>
            </tab-pane>
            <tab-pane>
              <template slot="label">
                <i class="now-ui-icons ui-2_settings-90"></i> Settings
              </template>
              <p>
                "I will be the leader of a company that ends up being worth
                billions of dollars, because I got the answers. I understand
                culture. I am the nucleus. I think that’s a responsibility
                that I have, to push possibilities, to show people, this is
                the level that things could be at."
              </p>
            </tab-pane>
          </tabs>
        </div>
        <div class="col-md-6">
          <div class="title">
            <h3>Labels</h3>
          </div>
          <Label>default</Label>
          <Label type="primary">Primary</Label>
          <Label type="info">Info</Label>
          <Label type="success">Success</Label>
          <Label type="warning">Warning</Label>
          <Label type="danger">Danger</Label>
        </div>
      </div>
      <div class="col-md-6">

      </div>
    </div>
  </div>
</template>

<script>
import {
  Progress,
  Pagination,
  Label,
  Tabs,
  TabPane
} from '@/components';
export default {
  components: {
    [Progress.name]: Progress,
    [Pagination.name]: Pagination,
    Label,
    Tabs,
    TabPane
  },
  data() {
    return {
      pagination: {
        simple: 1,
        default: 2,
        full: 3
      }
    };
  }
}
</script>

<style lang="css" scoped>
</style>
