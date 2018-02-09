<div class="container mt-3 mb-5">
   <div class="row justify-content-center">
      <div class="col-8">
         <div class="card">
            <div class="card-body">
               <h5 class="card-title text-center mb-3">Sección restringida, solo disponible para usuarios capacitados en la plataforma</h5>
	       <?php $this->renderFeedbackMessages(); ?>
               <form method="post" action="<?php echo Config::get('URL'); ?>register/register_action">
                  <h5 class="text-center">Formulario solicitud de ingreso</h5>
                  <div class="row">
		     <div class="form-group col"> <label for="contact-username">Nombre de usuario</label> <input type="text" pattern="[a-zA-Z0-9]{2,64}" name="user_name" class="form-control" id="contact-username"><small class="form-text text-muted">Un nombre para identificar tu cuenta en la plataforma, sin espacios (ej: drJuan)</small></div>
                     <div class="form-group col"> <label for="contact-name">Nombre, Apellido</label> <input type="text" class="form-control" id="contact-name"><small class="form-text text-muted">Tu nombre real</small></div>
                     <div class="form-group col"> <label for="contact-id">RUT o DNI</label> <input type="text" class="form-control" id="contact-id"><small class="form-text text-muted">RUT Chileno o pasaporte</small></div>
                  </div>
                  <div class="row">
                     <div class="form-group col"> <label for="contact-country">Nacionalidad</label> <input type="text" class="form-control" id="contact-country"> </div>
                     <div class="form-group col"> <label for="contact-job-location">Pais</label> <input type="text" class="form-control" id="contact-job-location"> </div>
                     <div class="form-group col"> <label for="contact-grade">Año de título profesional</label> <input type="text" class="form-control" id="contact-grade"> </div>
		  </div>
                  <div class="row">
                     <div class="form-group col"> <label for="contact-register">N° de registro profesional</label> <input type="text" class="form-control" id="contact-register"> </div>
                     <div class="form-group col"> <label for="contact-expertise">Años de experiencia en US Obstétrico</label> <input type="text" class="form-control" id="contact-expertise"> </div>
                  </div>
                  <div class="row">
                     <div class="form-group col">
                        <label for="contact-job">Profesión</label> 
                        <select class="form-control" id="contact-job">
                           <option>Médico con especialidad en perinatología</option>
                           <option>Médico con especialidad en gineco-obstetricia</option>
                           <option>Médico sin especialidad en gineco-obstetricia</option>
                           <option>Médico en formación de la especialidad</option>
                           <option>Otros, ultrosonografistas gineco - obstétrico</option>
                        </select>
                     </div>
                     <div class="form-group col"> <label for="contact-phone">Teléfono de contacto</label> <input type="number" class="form-control" id="contact-phone"> </div>
                  </div>
		  <div class="row">
                     <div class="form-group col"> <label for="contact-email">Correo electrónico</label> <input type="email" name="user_email" class="form-control" id="contact-email"> <small class="form-text text-muted">Nunca compartiremos tu correo con terceros</small></div>
                     <div class="form-group col"> <label for="contact-email-dos">Repetir Correo electrónico</label> <input type="email" name="user_email_repeat" class="form-control" id="contact-email-dos"> <small class="form-text text-muted">Para verificar si escribiste bien tu correo</small></div>
                  </div>
		  <div class="row">
                     <div class="form-group col"> <label for="contact-contrasena">Contraseña</label> <input type="password" name="user_password_new" class="form-control" id="contact-contrasena"> <small class="form-text text-muted">Una contraseña para que puedas acceder a tu cuenta</small></div>
		     <div class="form-group col"> <label for="contact-contrasena-dos">Repetir contraseña</label> <input type="password" name="user_password_repeat" class="form-control" id="contact-contrasena-dos"> <small class="form-text text-muted">verifica tu contraseña</small></div>
                  </div>
                  <div class="row">
                     <div class="col">
                        <h5>Lugar de desempeño laboral</h5>
                     </div>
                  </div>
                  <div class="row">
                     <div class="form-group col"> <label for="contact-city">Ciudad</label> <input type="text" class="form-control" id="contact-city"> </div>
                     <div class="form-group col"> <label for="contact-ss">Servicio de salud / Clínica</label>  <input type="text" class="form-control" id="contact-ss"></div>
                     <div class="form-group col"><label for="contact-h">Hospital / Unidad académica</label>   <input type="text" class="form-control" id="contact-h"></div>
                  </div>
                  <div class="row">
                     <div class="form-group col"> <label for="contact-consultorio">Consultorio público</label> <input type="text" class="form-control" id="contact-consultorio"> </div>
                     <div class="form-group col"> <label for="contact-private-job">Consulta privada</label> <input type="text" class="form-control" id="contact-private-job"> </div>
                  </div>
                  <div class="form-group"> <label for="contact-comments">Comentarios y sugerencias</label> <input type="text" class="form-control" id="contact-comments"> </div>
		  <img id="captcha" class="rounded mx-auto d-block" src="<?php echo Config::get('URL'); ?>register/showCaptcha" />
		<a href="#" class="d-block text-center" onclick="document.getElementById('captcha').src = '<?php echo Config::get('URL'); ?>register/showCaptcha?' + Math.random(); return false">Cambiar imágen</a>
		  <div class="form-group"> <label for="contact-comments" class="text-center">Escriba las palabras y numeros de la imágen</label>  <input type="text" class="form-control" name="captcha" required /> </div>

           

            <!-- quick & dirty captcha reloader -->
            
		  <button type="submit" class="btn btn-primary"><i class="fa fa-user-plus" aria-hidden="true"></i> Enviar solicitud de registro</button>
               </form>
            </div>
         </div>
      </div>
   </div>
</div>