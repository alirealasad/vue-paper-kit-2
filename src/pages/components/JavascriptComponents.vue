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
          <button type="button" class="btn btn-outline-danger btn-round" data-toggle="modal" data-target="#myModal">
            Launch demo modal
          </button>
          <!-- Modal -->
          <div class="modal fade" id="myModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog" role="document">
              <div class="modal-content">
                <div class="modal-header">
                  <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">×</span>
                  </button>
                  <h5 class="modal-title text-center" id="exampleModalLabel">Modal title</h5>
                </div>
                <div class="modal-body"> Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean. A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth. Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic life One day however a small line of blind text by the name of Lorem Ipsum decided to leave for the far World of Grammar.
                </div>
                <div class="modal-footer">
                  <div class="left-side">
                    <button type="button" class="btn btn-default btn-link" data-dismiss="modal">Never mind</button>
                  </div>
                  <div class="divider"></div>
                  <div class="right-side">
                    <button type="button" class="btn btn-danger btn-link">Delete</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="col-md-6">
          <div class="title">
            <h3>Popovers</h3>
          </div>
          <button type="button" class="btn btn-round btn-outline-danger" data-toggle="popover" data-placement="top" title="Popover on top" data-content="Here will be some very useful information about this popover.">On top</button>
          <button type="button" class="btn btn-round btn-outline-danger" data-toggle="popover" data-placement="bottom" title="Popover on bottom" data-content="Here will be some very useful information about this popover.">On bottom</button>
          <button type="button" class="btn btn-round btn-outline-danger" data-toggle="popover" data-placement="left" title="Popover on left" data-content="Here will be some very useful information about this popover.">On left</button>
          <button type="button" class="btn btn-round btn-outline-danger" data-toggle="popover" data-placement="right" title="Popover on right" data-content="Here will be some very useful information about this popover.">On right</button>
        </div>
        <br>
        <div class="col-md-6">
          <div class="title">
            <h3>Datepicker</h3>
          </div>
          <div class="row">
            <div class="col-sm-6">
              <div class="form-group">
                <div class="input-group date" id="datetimepicker">
                  <input type="text" class="form-control datetimepicker" placeholder="27/03/2019" />
                  <div class="input-group-append">
                    <span class="input-group-text">
                      <span class="glyphicon glyphicon-calendar"><i class="fa fa-calendar" aria-hidden="true"></i></span>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="col-md-6">
          <div class="title">
            <h3>Tooltips</h3>
          </div>
          <button type="button" class="btn btn-outline-danger btn-round" data-toggle="tooltip" data-placement="left" title="On left">On left</button>
          <button type="button" class="btn btn-outline-danger btn-round" data-toggle="tooltip" data-placement="right" title="On right">On right</button>
          <button type="button" class="btn btn-outline-danger btn-round" data-toggle="tooltip" data-placement="top" title="On top">On top</button>
          <button type="button" class="btn btn-outline-danger btn-round" data-toggle="tooltip" data-placement="bottom" title="On bottom">On bottom</button>
        </div>
      </div>
      <div class="title">
        <h3>Carousel</h3>
      </div>
    </div>
  </div>
</template>

<script>
export default {
}
</script>

<style lang="css" scoped>
</style>
