<div class="container">
    <h1 class="my-4">Administración de Profesionales en la plataforma</h1>
    <?php $this->renderFeedbackMessages(); ?>


<table class="table table-hover">
  <thead>
    <tr>
      <th scope="col">Id</th>
      <th scope="col">Avatar</th>
                    <th scope="col">Username</th>
                    <th scope="col">User's email</th>
                    <th scope="col">Activated ?</th>
                    <th scope="col">suspension Time in days</th>
                    <th scope="col">Soft delete</th>
                    <th scope="col">Guardar</th>
    </tr>
  </thead>
  <tbody>
<?php foreach ($this->users as $user) { ?>
                    <tr class="<?= ($user->user_active == 0 ? 'inactive' : 'active'); ?>">
                        <th scope="row"><?= $user->user_id; ?></th>
                        <td class="avatar">
                            <?php if (isset($user->user_avatar_link)) { ?>
                                <img src="<?= $user->user_avatar_link; ?>"/>
                            <?php } ?>
                        </td>
                        <td><?= $user->user_name; ?></td>
                        <td><?= $user->user_email; ?></td>
                        <td><?= ($user->user_active == 0 ? 'No' : 'Yes'); ?></td>
                        <form action="<?= config::get("URL"); ?>admin/actionAccountSettings" method="post">
                            <td><input type="number" name="suspension" /></td>
                            <td><input type="checkbox" name="softDelete" <?php if ($user->user_deleted) { ?> checked <?php } ?> /></td>
                            <td>
                                <input type="hidden" name="user_id" value="<?= $user->user_id; ?>" />
                                <input type="submit" />
                            </td>
                        </form>
                    </tr>
                <?php } ?>
  </tbody>
</table>
</div>
