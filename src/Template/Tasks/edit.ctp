<?php
/**
  * @var \App\View\AppView $this
  */
?>
<nav class="large-3 medium-4 columns" id="actions-sidebar">
    <ul class="side-nav">
        <li class="heading"><?= __('Actions') ?></li>
        <li><?= $this->Form->postLink(
                __('Delete'),
                ['action' => 'delete', $task->Id],
                ['confirm' => __('Are you sure you want to delete # {0}?', $task->Id)]
            )
        ?></li>
        <li><?= $this->Html->link(__('List Tasks'), ['action' => 'index']) ?></li>
    </ul>
</nav>
<div class="tasks form large-9 medium-8 columns content">
    <?= $this->Form->create($task) ?>
    <fieldset>
        <legend><?= __('Edit Task') ?></legend>
        <?php
            echo $this->Form->input('TaskDesc');
            echo $this->Form->input('Completed');
            echo $this->Form->input('Deleted');
            echo $this->Form->input('EntryTime');
            echo $this->Form->input('TaskOwner');
        ?>
    </fieldset>
    <?= $this->Form->button(__('Submit')) ?>
    <?= $this->Form->end() ?>
</div>
