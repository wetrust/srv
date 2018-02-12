<div class="container mt-3">
	<div class="row justify-content-center">
		<div class="col-6">
			<div class="card">
  <div class="card-body">
    <h5 class="card-title">Ingresar a la plataforma de datos</h5>
    <?php $this->renderFeedbackMessages(); ?>


<form action="<?php echo Config::get('URL'); ?>login/login" method="post">
  <div class="form-group">
    <label for="exampleInputEmail1">Correo electrónico</label>
    <input type="email" class="form-control" id="exampleInputEmail1" name="user_name" aria-describedby="emailHelp" placeholder="Enter email">
    <small id="emailHelp" class="form-text text-muted">Nunca compartiremos tu correo con terceros</small>
  </div>
  <div class="form-group">
    <label for="exampleInputPassword1">Contraseña</label>
    <input type="password" class="form-control" name="user_password" id="exampleInputPassword1" placeholder="Password">
  </div>
  <div class="form-check">
    <input type="checkbox" class="form-check-input" name="set_remember_me_cookie" id="exampleCheck1">
    <label class="form-check-label" for="exampleCheck1">Recordarme</label>
  </div>
		<?php if (!empty($this->redirect)) { ?>
                        <input type="hidden" name="redirect" value="<?php echo $this->encodeHTML($this->redirect); ?>" />
                    <?php } ?>
<input type="hidden" name="csrf_token" value="<?= Csrf::makeToken(); ?>" />
  <button type="submit" class="btn btn-primary"><i class="fa fa-sign-in" aria-hidden="true"></i> Ingresar</button>
</form>


  </div>
</div>
		</div>
	</div>
</div>


</div>
