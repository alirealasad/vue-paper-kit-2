<template>
  <div class="section">
    <div class="container">
      <div class="row">
        <div class="col-md-6">
          <div class="title">
            <h3>Progress Bar</h3>
            <br>
          </div>
          <div class="progress">
            <div class="progress-bar progress-bar-success" role="progressbar" style="width: 25%" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
          </div>
          <br>
          <div class="progress">
            <div class="progress-bar progress-bar-info" role="progressbar" style="width: 50%" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100"></div>
          </div>
          <br>
          <div class="progress">
            <div class="progress-bar progress-bar-danger" role="progressbar" style="width: 100%" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100"></div>
          </div>
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
            <ul class="pagination">
              <li class="page-item">
                <a class="page-link" href="#" aria-label="Previous">
                  <i class="fa fa-angle-left" aria-hidden="true"></i>
                  <span class="sr-only">Previous</span>
                </a>
              </li>
              <li class="page-item">
                <a class="page-link" href="#">1</a>
              </li>
              <li class="page-item">
                <a class="page-link" href="#">2</a>
              </li>
              <li class="page-item">
                <a class="page-link" href="#">3</a>
              </li>
              <li class="page-item">
                <a class="page-link" href="#">4</a>
              </li>
              <li class="page-item">
                <a class="page-link" href="#">5</a>
              </li>
              <li class="page-item">
                <a class="page-link" href="#" aria-label="Next">
                  <i class="fa fa-angle-right" aria-hidden="true"></i>
                  <span class="sr-only">Next</span>
                </a>
              </li>
            </ul>
          </nav>
          <br>
          <nav aria-label="...">
            <ul class="pagination">
              <li class="page-item">
                <a class="page-link" href="#" tabindex="-1">Previous</a>
              </li>
              <li class="page-item">
                <a class="page-link" href="#">1</a>
              </li>
              <li class="page-item">
                <a class="page-link" href="#">2</a>
              </li>
              <li class="page-item active">
                <a class="page-link" href="#">3
                  <span class="sr-only">(current)</span>
                </a>
              </li>
              <li class="page-item">
                <a class="page-link" href="#">4</a>
              </li>
              <li class="page-item">
                <a class="page-link" href="#">5</a>
              </li>
              <li class="page-item">
                <a class="page-link" href="#">Next</a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
      <br>
      <div class="row">
        <div class="col-md-6">
          <div class="title">
            <h3>Navigation Tabs</h3>
          </div>
          <div class="nav-tabs-navigation">
            <div class="nav-tabs-wrapper">
              <ul id="tabs" class="nav nav-tabs" role="tablist">
                <li class="nav-item">
                  <a class="nav-link active" data-toggle="tab" href="#home" role="tab">Home</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" data-toggle="tab" href="#profile" role="tab">Profile</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" data-toggle="tab" href="#messages" role="tab">Messages</a>
                </li>
              </ul>
            </div>
          </div>
          <div id="my-tab-content" class="tab-content text-center">
            <div class="tab-pane active" id="home" role="tabpanel">
              <p>Larger, yet dramatically thinner. More powerful, but remarkably power efficient. With a smooth metal surface that seamlessly meets the new Retina HD display.</p>
            </div>
            <div class="tab-pane" id="profile" role="tabpanel">
              <p>Here is your profile.</p>
            </div>
            <div class="tab-pane" id="messages" role="tabpanel">
              <p>Here are your messages.</p>
            </div>
          </div>
        </div>
        <div class="col-md-6">
          <div class="title">
            <h3>Labels</h3>
          </div>
          <span class="label label-default">Default</span>
          <span class="label label-primary">Primary</span>
          <span class="label label-info">Info</span>
          <span class="label label-success">Success</span>
          <span class="label label-warning">Warning</span>
          <span class="label label-danger">Danger</span>
        </div>
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
