<div class="bienvenida mb-3 rounded-bottom">
<div class="container">
<div class="media">
<img class="d-flex ml-3" src="https://servidor.crecimientofetal.cl/img/ic_launcher-web.png" alt="logo" style="max-width: 76px;">
<div class="media-body mt-2">
<h4 class="mt-0 mb-1"><em>Ecografía Obstétrica de 2° / 3° trimestre</em></h4>
<p><em>Ultrasonografía obstétrica básica para profesionales</em></p>
</div>
<div class="media-body mt-4">
<p class="float-right" name="fechaHora" style="color: #f0df90;">Martes, 1 de Mayo 2018</p>
</div>
</div>
</div>
</div>
<section class="container">
    <div class="row">
    

        <div class="col-10"><h5 class="card-title">Juana Peres Perez</h5><h6 class="card-subtitle mb-2 text-muted">FUM: 02-02-2017 | FPP: 20-20-2020</h6>


    
    </div>
<div class="col-2 pt-3">
<button type="button" class="btn btn-outline-primary">Volver</button>

    
    </div>
        
    
</div>
<hr></section>
<section class="container">
    <div class="row">
    

        <div class="col-12 col-sm-9"><div class="card mb-3">
  
  <div class="card-body">
    <h5 class="card-title">EXÁMEN</h5>
    
<div class="form-group row">
<div class="col-4">
<label for="dbp" class="col-form-label">Feto</label><select id="semanasEcoObs" class="form-control">
<option value="1">1</option>
<option value="2">2</option>
<option value="3">3</option>














</select>
</div>



<div class="col-4">
<label for="dof" class="col-form-label">Fecha Exámen</label>
    <input class="form-control" type="text" data-date-format="dd/mm/yyyy" onfocus="blur();" name="fum" id="fum-cinco">
</div><div class="col-4">
<label for="cc" class="col-form-label">EG</label>
<input type="text" class="form-control" id="cc"></div></div>
    
    
  </div>
</div><div class="card mb-3">
  
  <div class="card-body">
    <h5 class="card-title">BIOMETRÍA FETAL</h5>
    <h6 class="card-subtitle mb-2 text-muted">Hadlock FP. y col. Radiology 152: 497 - 501; 1984. *Hill LM. y col. Obstet Gynecol. 1990; 75(6) : 981-5</h6>
<div class="form-group row">
<div class="col-5">
<label for="dbp" class="col-form-label">DBP</label>
<div class="input-group mb-2 mr-sm-2 mb-sm-0">
<input type="text" class="form-control" id="dbp">
<div class="input-group-append">
<button type="button" class="btn btn-outline-info" id="graficoDbp"><i class="fa fa-bar-chart" aria-hidden="true"></i></button>
</div>
</div></div>

<div class="col-5 pt-5">
<div class="progress mr-sm-2 mb-sm-0" id="dbpDE">
<div class="progress-bar bg-light text-primary pivote-cero" role="progressbar" style="width: 10%" aria-valuemin="0" aria-valuemax="100">|</div>
<div class="progress-bar bg-light text-primary pivote-uno" role="progressbar" style="width: 17%" aria-valuemin="0" aria-valuemax="100"></div>
<div class="progress-bar bg-light text-primary pivote-dos" role="progressbar" style="width: 17%" aria-valuemin="0" aria-valuemax="100"></div>
<div class="progress-bar bg-light text-primary pivote-centro" role="progressbar" style="width: 10%" aria-valuemin="0" aria-valuemax="100">|</div>
<div class="progress-bar bg-light text-primary pivote-tres" role="progressbar" style="width: 17%" aria-valuemin="0" aria-valuemax="100"></div>
<div class="progress-bar bg-light text-primary pivote-cuatro" role="progressbar" style="width: 17%" aria-valuemin="0" aria-valuemax="100"></div>
<div class="progress-bar bg-light text-primary pivote-cien" role="progressbar" style="width: 10%" aria-valuemin="0" aria-valuemax="100">|</div>
</div>
<input type="hidden" id="dbpPct">
<input type="hidden" id="dbpRango">
</div>

</div><div class="form-group row">
<div class="col-5">
<label for="dof" class="col-form-label">DOF</label>
<div class="input-group mb-2 mr-sm-2 mb-sm-0">
<input type="text" class="form-control" id="dof">
<div class="input-group-append">
<div class="input-group-text">mm</div>
</div>
</div></div>

<div class="col-5 pt-5">
<div class="progress mt-2 mb-2 mr-sm-2 mb-sm-0" id="dofPct">
<div class="progress-bar bg-light text-primary pivote-cero" role="progressbar" style="width: 10%" aria-valuemin="0" aria-valuemax="100">|</div>
<div class="progress-bar bg-light text-primary pivote-uno" role="progressbar" style="width: 17%" aria-valuemin="0" aria-valuemax="100"></div>
<div class="progress-bar bg-light text-primary pivote-dos" role="progressbar" style="width: 17%" aria-valuemin="0" aria-valuemax="100"></div>
<div class="progress-bar bg-light text-primary pivote-centro" role="progressbar" style="width: 10%" aria-valuemin="0" aria-valuemax="100">|</div>
<div class="progress-bar bg-light text-primary pivote-tres" role="progressbar" style="width: 17%" aria-valuemin="0" aria-valuemax="100"></div>
<div class="progress-bar bg-light text-primary pivote-cuatro" role="progressbar" style="width: 17%" aria-valuemin="0" aria-valuemax="100"></div>
<div class="progress-bar bg-light text-primary pivote-cien" role="progressbar" style="width: 10%" aria-valuemin="0" aria-valuemax="100">|</div>
</div>
<input type="hidden" id="dofPctRpt">
<input type="hidden" id="dofRango">
</div>
<div class="col">
<div class="input-group">
<div class="input-group-prepend">
<div class="input-group-text">IC</div>
</div>
<input type="text" class="form-control" id="ic" readonly="">
</div>
</div>
</div><div class="form-group row">
<div class="col-5">
<label for="cc" class="col-form-label">CC</label>
<div class="input-group mb-2 mr-sm-2 mb-sm-0">
<input type="text" class="form-control" id="cc">
<div class="input-group-append">
<button type="button" class="btn btn-outline-info" id="graficoCc"><i class="fa fa-bar-chart" aria-hidden="true"></i></button>
</div>
</div></div>

<div class="col-5 pt-5">
<div class="progress mt-2 mb-2 mr-sm-2 mb-sm-0" id="ccPct">
<div class="progress-bar bg-light text-primary pivote-cero" role="progressbar" style="width: 10%" aria-valuemin="0" aria-valuemax="100">|</div>
<div class="progress-bar bg-light text-primary pivote-uno" role="progressbar" style="width: 17%" aria-valuemin="0" aria-valuemax="100"></div>
<div class="progress-bar bg-light text-primary pivote-dos" role="progressbar" style="width: 17%" aria-valuemin="0" aria-valuemax="100"></div>
<div class="progress-bar bg-light text-primary pivote-centro" role="progressbar" style="width: 10%" aria-valuemin="0" aria-valuemax="100">|</div>
<div class="progress-bar bg-light text-primary pivote-tres" role="progressbar" style="width: 17%" aria-valuemin="0" aria-valuemax="100"></div>
<div class="progress-bar bg-light text-primary pivote-cuatro" role="progressbar" style="width: 17%" aria-valuemin="0" aria-valuemax="100"></div>
<div class="progress-bar bg-light text-primary pivote-cien" role="progressbar" style="width: 10%" aria-valuemin="0" aria-valuemax="100">|</div>
</div>
<input type="hidden" id="ccPctRpt">
<input type="hidden" id="ccRango">
</div>

</div><div class="form-group row">
<div class="col-5">
<label for="ca">CA</label>
<div class="input-group mb-2 mr-sm-2 mb-sm-0">
<input type="text" class="form-control" id="ca">
<div class="input-group-append">

<button type="button" class="btn btn-outline-info" id="graficoCa"><i class="fa fa-bar-chart" aria-hidden="true"></i></button></div>
</div></div>

<div class="col-5 pt-5">
<div class="progress mt-2 mb-2 mr-sm-2 mb-sm-0" id="caPct">
<div class="progress-bar bg-light text-primary pivote-cero" role="progressbar" style="width: 10%" aria-valuemin="0" aria-valuemax="100">|</div>
<div class="progress-bar bg-light text-primary pivote-uno" role="progressbar" style="width: 17%" aria-valuemin="0" aria-valuemax="100"></div>
<div class="progress-bar bg-light text-primary pivote-dos" role="progressbar" style="width: 17%" aria-valuemin="0" aria-valuemax="100"></div>
<div class="progress-bar bg-light text-primary pivote-centro" role="progressbar" style="width: 10%" aria-valuemin="0" aria-valuemax="100">|</div>
<div class="progress-bar bg-light text-primary pivote-tres" role="progressbar" style="width: 17%" aria-valuemin="0" aria-valuemax="100"></div>
<div class="progress-bar bg-light text-primary pivote-cuatro" role="progressbar" style="width: 17%" aria-valuemin="0" aria-valuemax="100"></div>
<div class="progress-bar bg-light text-primary pivote-cien" role="progressbar" style="width: 10%" aria-valuemin="0" aria-valuemax="100">|</div>
</div>
<input type="hidden" id="caPctRpt">
<input type="hidden" id="caRango">
</div>

</div><div class="form-group row">
<div class="col-5">
<label for="lf" class="col-form-label">LF</label>
<div class="input-group mb-2 mr-sm-2 mb-sm-0">
<input type="text" class="form-control" id="lf">
<div class="input-group-append">

<button type="button" class="btn btn-outline-info" id="graficoLf"><i class="fa fa-bar-chart" aria-hidden="true"></i></button></div>
</div></div>

<div class="col-5 pt-5">
<div class="progress mt-2 mb-2 mr-sm-2 mb-sm-0" id="lfPct">
<div class="progress-bar bg-light text-primary pivote-cero" role="progressbar" style="width: 10%" aria-valuemin="0" aria-valuemax="100">|</div>
<div class="progress-bar bg-light text-primary pivote-uno" role="progressbar" style="width: 17%" aria-valuemin="0" aria-valuemax="100"></div>
<div class="progress-bar bg-light text-primary pivote-dos" role="progressbar" style="width: 17%" aria-valuemin="0" aria-valuemax="100"></div>
<div class="progress-bar bg-light text-primary pivote-centro" role="progressbar" style="width: 10%" aria-valuemin="0" aria-valuemax="100">|</div>
<div class="progress-bar bg-light text-primary pivote-tres" role="progressbar" style="width: 17%" aria-valuemin="0" aria-valuemax="100"></div>
<div class="progress-bar bg-light text-primary pivote-cuatro" role="progressbar" style="width: 17%" aria-valuemin="0" aria-valuemax="100"></div>
<div class="progress-bar bg-light text-primary pivote-cien" role="progressbar" style="width: 10%" aria-valuemin="0" aria-valuemax="100">|</div>
</div>
<input type="hidden" id="lfPctRpt">
<input type="hidden" id="lfRango">
</div>

</div><div class="form-group row">
<div class="col-5">
<label for="lh" class="col-form-label">LH</label>
<div class="input-group mb-2 mr-sm-2 mb-sm-0">
<input type="text" class="form-control" id="lh">
<div class="input-group-append">

<button type="button" class="btn btn-outline-info" id="graficoLh"><i class="fa fa-bar-chart" aria-hidden="true"></i></button></div>
</div></div>

<div class="col-5 pt-5">
<div class="progress mt-2 mb-2 mr-sm-2 mb-sm-0" id="lhPct">
<div class="progress-bar bg-light text-primary pivote-cero" role="progressbar" style="width: 10%" aria-valuemin="0" aria-valuemax="100">|</div>
<div class="progress-bar bg-light text-primary pivote-uno" role="progressbar" style="width: 17%" aria-valuemin="0" aria-valuemax="100"></div>
<div class="progress-bar bg-light text-primary pivote-dos" role="progressbar" style="width: 17%" aria-valuemin="0" aria-valuemax="100"></div>
<div class="progress-bar bg-light text-primary pivote-centro" role="progressbar" style="width: 10%" aria-valuemin="0" aria-valuemax="100">|</div>
<div class="progress-bar bg-light text-primary pivote-tres" role="progressbar" style="width: 17%" aria-valuemin="0" aria-valuemax="100"></div>
<div class="progress-bar bg-light text-primary pivote-cuatro" role="progressbar" style="width: 17%" aria-valuemin="0" aria-valuemax="100"></div>
<div class="progress-bar bg-light text-primary pivote-cien" role="progressbar" style="width: 10%" aria-valuemin="0" aria-valuemax="100">|</div>
</div>
<input type="hidden" id="lhPctRpt">
<input type="hidden" id="lhRango">
</div>

</div><div class="form-group row">
<div class="col-5">
<label for="cerebelo" class="col-form-label">Diámetro cerebeloso transverso</label>
<div class="input-group mb-2 mr-sm-2 mb-sm-0">
<input type="text" class="form-control" id="cerebelo">
<div class="input-group-append">

<button type="button" class="btn btn-outline-info" id="graficoCerebelo"><i class="fa fa-bar-chart" aria-hidden="true"></i></button></div>
</div></div>

<div class="col-5 pt-5">
<div class="progress mt-2 mb-2 mr-sm-2 mb-sm-0" id="cerebeloPct">
<div class="progress-bar bg-light text-primary pivote-cero" role="progressbar" style="width: 10%" aria-valuemin="0" aria-valuemax="100">|</div>
<div class="progress-bar bg-light text-primary pivote-uno" role="progressbar" style="width: 17%" aria-valuemin="0" aria-valuemax="100"></div>
<div class="progress-bar bg-light text-primary pivote-dos" role="progressbar" style="width: 17%" aria-valuemin="0" aria-valuemax="100"></div>
<div class="progress-bar bg-light text-primary pivote-centro" role="progressbar" style="width: 10%" aria-valuemin="0" aria-valuemax="100">|</div>
<div class="progress-bar bg-light text-primary pivote-tres" role="progressbar" style="width: 17%" aria-valuemin="0" aria-valuemax="100"></div>
<div class="progress-bar bg-light text-primary pivote-cuatro" role="progressbar" style="width: 17%" aria-valuemin="0" aria-valuemax="100"></div>
<div class="progress-bar bg-light text-primary pivote-cien" role="progressbar" style="width: 10%" aria-valuemin="0" aria-valuemax="100">|</div>
</div>
<input type="hidden" id="cerebeloPctRpt">
<input type="hidden" id="cerebeloRango">
</div>

</div>
    
    
  </div>
</div>
    <div class="card mb-3">
<div class="card-body">
<h5 class="card-title">CRECIMIENTO INTRAUTERINO <span class="float-right text-muted" id="cccaController"><small>Opcional CC/CA</small></span></h5>
<div class="form-group row">
<div class="col mb-2">
<label for="pfe" class="col-form-label"><strong>Peso Fetal Estimado</strong> (&gt; 15 sem)
<br><small class="text-muted">Hadlock FP. y col. Radiology 181: 129 - 133; 1991</small>
</label>
</div>
<div class="col mb-2">
<div class="input-group mb-2 mr-sm-2 mb-sm-0">
<input type="text" class="form-control" id="pfe" readonly="">
<div class="input-group-append">
<button type="button" class="btn btn-outline-info" id="graficoPFE"><i class="fa fa-bar-chart" aria-hidden="true"></i></button>
</div>
</div>
</div>
<div class="col mb-2">
<div class="progress mt-2 mb-2 mr-sm-2 mb-sm-0" id="pfePct">
<div class="progress-bar bg-light text-primary pivote-cero" role="progressbar" style="width: 10%" aria-valuemin="0" aria-valuemax="100">|</div>
<div class="progress-bar bg-light text-primary pivote-uno" role="progressbar" style="width: 17%" aria-valuemin="0" aria-valuemax="100"></div>
<div class="progress-bar bg-light text-primary pivote-dos" role="progressbar" style="width: 17%" aria-valuemin="0" aria-valuemax="100"></div>
<div class="progress-bar bg-light text-primary pivote-centro" role="progressbar" style="width: 10%" aria-valuemin="0" aria-valuemax="100">|</div>
<div class="progress-bar bg-light text-primary pivote-tres" role="progressbar" style="width: 17%" aria-valuemin="0" aria-valuemax="100"></div>
<div class="progress-bar bg-light text-primary pivote-cuatro" role="progressbar" style="width: 17%" aria-valuemin="0" aria-valuemax="100"></div>
<div class="progress-bar bg-light text-primary pivote-cien" role="progressbar" style="width: 10%" aria-valuemin="0" aria-valuemax="100">|</div>
</div>
<input type="hidden" id="pfePctRpt">
<input type="hidden" id="pfeRango">
</div>

</div><div class="form-group row d-none" id="cccaView">
<div class="col mb-2">
<label for="ccca" class="col-form-label">Relación Cráneo Abdómen<br><small class="text-muted">Hadlock FP. y col. Radiology 181: 129 - 133; 1991</small></label>
</div>
<div class="col mb-2">
<input type="text" class="form-control" id="ccca" readonly="">
</div>
<div class="col mb-2">
<div class="progress mt-2 mb-2 mr-sm-2 mb-sm-0" id="cccaPct">
<div class="progress-bar bg-light text-primary pivote-cero" role="progressbar" style="width: 10%" aria-valuemin="0" aria-valuemax="100">|</div>
<div class="progress-bar bg-light text-primary pivote-uno" role="progressbar" style="width: 17%" aria-valuemin="0" aria-valuemax="100"></div>
<div class="progress-bar bg-light text-primary pivote-dos" role="progressbar" style="width: 17%" aria-valuemin="0" aria-valuemax="100"></div>
<div class="progress-bar bg-light text-primary pivote-centro" role="progressbar" style="width: 10%" aria-valuemin="0" aria-valuemax="100">|</div>
<div class="progress-bar bg-light text-primary pivote-tres" role="progressbar" style="width: 17%" aria-valuemin="0" aria-valuemax="100"></div>
<div class="progress-bar bg-light text-primary pivote-cuatro" role="progressbar" style="width: 17%" aria-valuemin="0" aria-valuemax="100"></div>
<div class="progress-bar bg-light text-primary pivote-cien" role="progressbar" style="width: 10%" aria-valuemin="0" aria-valuemax="100">|</div>
</div>
<input type="hidden" id="cccaPct">
<input type="hidden" id="cccaRango">
</div>
<div class="col mb-2">
<button type="button" class="btn btn-outline-info" id="graficoCCCA"><i class="fa fa-bar-chart" aria-hidden="true"></i></button>
</div>
</div><div class="form-group row d-none">
<div class="col mb-2">
<label for="tallaFetal" class="col-form-label">Talla Fetal Estimada (&gt; 23 sem)
<br><small class="text-muted">Referencias neonatales SOCHIPE*</small>
</label>
</div>
<div class="col mb-2">
<div class="input-group mb-2 mr-sm-2 mb-sm-0">
<input type="number" class="form-control" id="tallaFetal" readonly="">
<div class="input-group-append">
<div class="input-group-text">cm</div>
</div>
</div>
</div>
<div class="col">
<div class="progress mt-2 mb-2 mr-sm-2 mb-sm-0" id="tallaPct">
<div class="progress-bar bg-light text-primary pivote-cero" role="progressbar" style="width: 10%" aria-valuemin="0" aria-valuemax="100">|</div>
<div class="progress-bar bg-light text-primary pivote-uno" role="progressbar" style="width: 17%" aria-valuemin="0" aria-valuemax="100"></div>
<div class="progress-bar bg-light text-primary pivote-dos" role="progressbar" style="width: 17%" aria-valuemin="0" aria-valuemax="100"></div>
<div class="progress-bar bg-light text-primary pivote-centro" role="progressbar" style="width: 10%" aria-valuemin="0" aria-valuemax="100">|</div>
<div class="progress-bar bg-light text-primary pivote-tres" role="progressbar" style="width: 17%" aria-valuemin="0" aria-valuemax="100"></div>
<div class="progress-bar bg-light text-primary pivote-cuatro" role="progressbar" style="width: 17%" aria-valuemin="0" aria-valuemax="100"></div>
<div class="progress-bar bg-light text-primary pivote-cien" role="progressbar" style="width: 10%" aria-valuemin="0" aria-valuemax="100">|</div>
</div>
<input type="hidden" id="tallaPctRpt">
<input type="hidden" id="tallaRango">
</div>
<div class="col">
<button type="button" class="btn btn-outline-info" id="graficoTalla"><i class="fa fa-bar-chart" aria-hidden="true"></i></button>
</div>
</div><div class="form-group row">
<div class="col mb-2">
<label for="bvm" class="col-form-label"><strong class="text-primary">BVM</strong></label>
</div>
<div class="col mb-2">
<div class="input-group mb-2 mr-sm-2 mb-sm-0">
<input type="text" class="form-control" id="bvm">
<div class="input-group-append">

<button type="button" class="btn btn-outline-info" id="graficoBVM"><i class="fa fa-bar-chart" aria-hidden="true"></i></button></div>
</div>
</div>
<div class="col mb-2">
<div class="progress mt-2 mb-2 mr-sm-2 mb-sm-0" id="bvmPct">
<div class="progress-bar bg-light text-primary pivote-cero" role="progressbar" style="width: 10%" aria-valuemin="0" aria-valuemax="100">|</div>
<div class="progress-bar bg-light text-primary pivote-uno" role="progressbar" style="width: 17%" aria-valuemin="0" aria-valuemax="100"></div>
<div class="progress-bar bg-light text-primary pivote-dos" role="progressbar" style="width: 17%" aria-valuemin="0" aria-valuemax="100"></div>
<div class="progress-bar bg-light text-primary pivote-centro" role="progressbar" style="width: 10%" aria-valuemin="0" aria-valuemax="100">|</div>
<div class="progress-bar bg-light text-primary pivote-tres" role="progressbar" style="width: 17%" aria-valuemin="0" aria-valuemax="100"></div>
<div class="progress-bar bg-light text-primary pivote-cuatro" role="progressbar" style="width: 17%" aria-valuemin="0" aria-valuemax="100"></div>
<div class="progress-bar bg-light text-primary pivote-cien" role="progressbar" style="width: 10%" aria-valuemin="0" aria-valuemax="100">|</div>
</div>
<input type="hidden" id="bvmPct">
<input type="hidden" id="bvmRango">
</div>

</div>
<p class="text-muted d-none" style="float:left">* SOCHIPE: Sociedad Chilena de Pedratría.</p>
<p class="text-muted d-none" style="float:right">Artículo de referencia: Rev. Chil. Pediat 2010; 81 (3): 264-274</p>
</div>
</div>
<div class="card mb-3">
<div class="card-body">
<h5 class="card-title">OPCIONAL DETERMINACIÓN DE EDAD GESTACIONAL</h5>
<div class="form-group row">
<div class="col mb-2">
<label for="egP50" class="col-form-label">Calculo de Edad Gestacional según BP50</label>
</div>
<div class="col mb-2">
<div class="input-group mb-2 mr-sm-2 mb-sm-0">
<input type="text" class="form-control bg-secondary text-white text-center" id="egP50" readonly="">
<div class="input-group-append">
<div class="input-group-text">semanas</div>
</div>
</div>
</div>
<div class="col"></div>
</div>
<div class="form-group row">
<div class="col">
<ul>
<li>La variabilidad en el crecimiento fetal, es directamente proporcional a la edad gestacional, variando el rango desde ± 7 días sobre las 12 semanas hasta ± 21 días en el 3er trimestre.</li>
<li>Dado que el rango de variabilidad entre las 9 a 11 semanas es mínimo (+ - 3 días), es el periodo ideal para determinación ecográfica de la Edad gestacional.</li>
</ul>
</div>
</div>
<div class="row" id="preguntaAjusteEcoSegTrim" style="">
<div class="col">
<h5 class="alert-heading">¿Desea ajustar la edad gestacional referida?</h5>
</div>
<div class="col">
<div class="btn-group btn-group-toggle" data-toggle="buttons">
<label class="btn btn-outline-info p-3 active">
<input type="radio" name="ajustarEcoSegTrim" value="0" checked=""> NO
</label>
<label class="btn btn-outline-info p-3">
<input type="radio" name="ajustarEcoSegTrim" value="1"> SI
</label>
</div>
</div>
</div>
<div class="form-group row">
<div class="col">
<ul>
<li>Para mayor precisión el software excluye perímetro abdominal, es recomendable adicionar el largo humeral y diámetro de cerebelo.</li>
</ul>
</div>
</div>
</div>
</div>
    </div>
        <div class="col-12 col-sm-3">
<div class="card mb-3">
  
  <div class="btn-group-vertical" role="group" aria-label="First group">
<button type="button" class="btn btn-info">Nuevo</button><button type="button" class="btn btn-secondary">Modificar</button><button type="button" class="btn btn-secondary">Guardar</button><button type="button" class="btn btn-secondary">Cancelar</button><button type="button" class="btn btn-danger">Eliminar</button>
</div>
</div><div class="card mb-3">
  
  <div class="btn-group-vertical" role="group" aria-label="First group">
<button type="button" class="btn btn-outline-info"><i class="fa fa-file-text-o" aria-hidden="true"></i> Crecimiento</button><button type="button" class="btn btn-outline-info"><i class="fa fa-bar-chart" aria-hidden="true"></i> Crecimiento</button><button type="button" class="btn btn-outline-info"><i class="fa fa-file-text-o" aria-hidden="true"></i> Edad Gestacional</button><button type="button" class="btn btn-outline-info"><i class="fa fa-bar-chart" aria-hidden="true"></i> Edad Gestacional</button>
</div>
</div></div>
    
</div>
</section>
<section class="container">
    <div class="row">
    

        
        
    
<div class="col-12">
    <div class="card"><div class="card-body">
<h5 class="card-title">Exámenes</h5>



<table class="table table-hover">
  <thead class="thead-dark">
    <tr>
      <th scope="col">#</th>
      <th scope="col">Fecha</th>
      <th scope="col">EG</th>
      <th scope="col">DBP</th>
<th scope="col">CC</th>
<th scope="col">CA</th>
<th scope="col">LF</th>
<th scope="col">Peso</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">1</th>
      <td>Mark</td>
      <td>Otto</td>
      
<td>@mdo</td><td>@mdo</td><td>@mdo</td>
<td>@mdo</td><td>@mdo</td>


    </tr>
    
    
  <tr>
      <th scope="row">1</th>
      <td>Mark</td>
      <td>Otto</td>
      
<td>@mdo</td><td>@mdo</td><td>@mdo</td>
<td>@mdo</td><td>@mdo</td>


    </tr></tbody>
</table></div></div>

</div></div>
</section>
