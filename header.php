<!DOCTYPE html>
<html>
  <head>
    <title>Photon</title>

    <!-- Stylesheets -->
    <link rel="stylesheet" href="../css/photon.min.css">
    <link rel="stylesheet" href="style.css">

    <!-- Javascript -->
    <script src="js/menu.js" charset="utf-8"></script>
  </head>
  <body>
    <div class="window">

      <!-- .toolbar-header sits at the top of your app -->
      <header class="toolbar toolbar-header">
        <h1 class="title">Photon</h1>
      </header>

      <!-- Your app's content goes inside .window-content -->
      <div class="window-content">
        <div class="pane-group">
          <div class="pane pane-sm sidebar">
            <nav class="nav-group">
              <span class="nav-group-item">
                <span class="icon icon-home"></span>
                <a href="profile.php">User  <?php echo $_POST["user"]; ?></a>
              </span>
              <span class="nav-group-item active">
                <span class="icon icon-light-up"></span>
                <a href="drive.php">Drive</a>
              </span>
              <span class="nav-group-item">
                <span class="icon icon-download"></span>
                <a href="drive.php">Shared</a>
              </span>
              <span class="nav-group-item">
                <span class="icon icon-folder"></span>
                <a href="drive.php">Favorites</a>
              </span>
              <span class="nav-group-item">
                <span class="icon icon-window"></span>
                <a href="drive.php">Trash</a>
              </span>
              <span class="nav-group-item">
                <span class="icon icon-signal"></span>
                <a href="drive.php">Settings</a>
              </span>
              <span class="nav-group-item">
                <span class="icon icon-monitor"></span>
                <a href="drive.php">Upgrade</a>
              </span>
            </nav>
          </div>