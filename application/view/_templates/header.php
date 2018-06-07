<!doctype html>
<html lang="en">
<head>
    <title>Crecimiento Fetal</title>
    <!-- META -->
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    <!-- send empty favicon fallback to prevent user's browser hitting the server for lots of favicon requests resulting in 404s -->
    <link rel="icon" href="data:;base64,=">
    <!-- CSS -->
   <link rel="stylesheet" href="//maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous">    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
    <link rel="stylesheet" href="<?php echo Config::get('URL'); ?>css/style.css">
    <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.0.13/css/all.css" integrity="sha384-DNOHZ68U8hZfKXOrtjWvjxusGo9WQnrNx2sqG0tfsghAvtVlRW3tvkXWZh58N9jp" crossorigin="anonymous">
    <!-- JS -->
    <script src="//code.jquery.com/jquery-3.2.1.min.js"></script>
    <script src="//cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.9/umd/popper.min.js" integrity="sha384-ApNbgh9B+Y1QKtv3Rn7W3mgPxhU9K/ScQsAP7hUibX39j7fakFPskvXusvfa0b4Q" crossorigin="anonymous"></script>
    <script src="//maxcdn.bootstrapcdn.com/bootstrap/4.0.0-beta.3/js/bootstrap.min.js" integrity="sha384-a5N7Y/aK3qNeh15eJKGWxsqtnX/wWdSZSKp+81YjTmS15nvnvxKHuzaWwXHDli+4" crossorigin="anonymous"></script>
</head>
<body>
    <nav class="navbar navbar-expand-lg navbar-dark bg-primary">
        <div class="container">
            <a class="navbar-brand" href="<?php echo Config::get('URL'); ?>"><i class="fa fa-hospital-o" aria-hidden="true"></i> Crecimiento Fetal</a>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarHome" aria-controls="navbarHome" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarHome">
                <ul class="navbar-nav mr-auto">
                    <li class="nav-item <?php if (View::checkForActiveController($filename, "index")) { echo 'active'; } ?>">
                        <a class="nav-link" id="InicioLink" href="<?php echo Config::get('URL'); ?>">Inicio <span class="sr-only">(current)</span></a>
                    </li>
                    <li class="nav-item <?php if (View::checkForActiveController($filename, "profile")) { echo 'active'; } ?>">
                        <a class="nav-link" href="<?php echo Config::get('URL'); ?>profile/index">Médicos</a>
                    </li>
                    <?php if (Session::userIsLoggedIn()) { ?>
                        <li class="nav-item <?php if (View::checkForActiveController($filename, "dashboard")) { echo 'active'; } ?>">
                            <a class="nav-link" href="<?php echo Config::get('URL'); ?>dashboard/index">Dashboard</a>
                        </li>
                        <li class="nav-item <?php if (View::checkForActiveController($filename, "note")) { echo 'active'; } ?>">
                            <a class="nav-link" href="<?php echo Config::get('URL'); ?>note/index">My Notes</a>
                        </li>
                    <?php } else { ?>
                        <li class="nav-item <?php if (View::checkForActiveController($filename, "register/index")) { echo 'active'; } ?>">
                            <a class="nav-link" href="<?php echo Config::get('URL'); ?>register/index"><i class="fa fa-user-plus" aria-hidden="true"></i> Registrarse</a>
                        </li>
                    <?php } ?>
                </ul>
                <?php if (Session::userIsLoggedIn()) { ?>
                    <ul class="navbar-nav">
                        <li class="nav-item dropdown">
                            <a class="nav-link dropdown-toggle" href="#" id="navbarUser" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"><?php echo Session::get('user_name'); ?> </a>
                            <div class="dropdown-menu" aria-labelledby="navbarUser">
                                <a class="dropdown-item" href="<?php echo Config::get('URL'); ?>user/index">Mi cuenta</a>
                                <div class="dropdown-divider"></div>
                                <a class="dropdown-item" href="<?php echo Config::get('URL'); ?>user/changeUserRole">Cambiar el tipo de cuenta</a>
                                <a class="dropdown-item" href="<?php echo Config::get('URL'); ?>user/editAvatar">Cambiar mi imagen</a>
                                <a class="dropdown-item" href="<?php echo Config::get('URL'); ?>user/editusername">Cambiar mi nombre de usuario</a>
                                <a class="dropdown-item" href="<?php echo Config::get('URL'); ?>user/edituseremail">Cambiar mi correo electrónico</a>
                                <a class="dropdown-item" href="<?php echo Config::get('URL'); ?>user/changePassword">Cambiar contraseña</a>
                                <a class="dropdown-item" href="<?php echo Config::get('URL'); ?>login/logout">Salir</a>
                                <div class="dropdown-divider"></div>
                                <?php if (Session::get("user_account_type") == 7) : ?>
                                    <a class="dropdown-item <?php if (View::checkForActiveController($filename, "admin")) {echo 'active';} ?>" href="<?php echo Config::get('URL'); ?>admin/">Administración</a>
                                <?php endif; ?>
                            </div>
                        </li>
                    </ul>
                <?php } else { ?>
                    <ul class="navbar-nav">
                        <li class="nav-item <?php if (View::checkForActiveController($filename, "login/index")) { echo 'active'; } ?>">
                            <a class="btn btn-outline-light my-2 my-sm-0" href="<?php echo Config::get('URL'); ?>login/index"><i class="fa fa-sign-in" aria-hidden="true"></i> Ingresar a plataforma</a>
                        </li>
                    </ul>
                <?php } ?>
            </div>
        </div>
    </nav>