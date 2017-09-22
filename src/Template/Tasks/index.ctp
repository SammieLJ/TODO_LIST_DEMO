<?php
/**
  * @var \App\View\AppView $this
  */
?>
<nav class="large-3 medium-4 columns" id="actions-sidebar">
    <ul class="side-nav">
        <li class="heading"><?= __('Actions') ?></li>
        <li><?= $this->Html->link(__('New Task'), ['action' => 'add']) ?></li>
    </ul>
</nav>
<div class="tasks index large-9 medium-8 columns content">
    <h3><?= __('Tasks') ?></h3>
    <table cellpadding="0" cellspacing="0">
        <thead>
            <tr>
                <th scope="col"><?= $this->Paginator->sort('Id') ?></th>
                <th scope="col"><?= $this->Paginator->sort('TaskDesc') ?></th>
                <th scope="col"><?= $this->Paginator->sort('Completed') ?></th>
                <th scope="col"><?= $this->Paginator->sort('Deleted') ?></th>
                <th scope="col"><?= $this->Paginator->sort('EntryTime') ?></th>
                <th scope="col"><?= $this->Paginator->sort('TaskOwner') ?></th>
                <th scope="col" class="actions"><?= __('Actions') ?></th>
            </tr>
        </thead>
        <tbody>
            <?php foreach ($tasks as $task): ?>
            <tr>
                <td><?= $this->Number->format($task->Id) ?></td>
                <td><?= h($task->TaskDesc) ?></td>
                <td><?= h($task->Completed) ?></td>
                <td><?= h($task->Deleted) ?></td>
                <td><?= h($task->EntryTime) ?></td>
                <td><?= h($task->TaskOwner) ?></td>
                <td class="actions">
                    <?= $this->Html->link(__('View'), ['action' => 'view', $task->Id]) ?>
                    <?= $this->Html->link(__('Edit'), ['action' => 'edit', $task->Id]) ?>
                    <?= $this->Form->postLink(__('Delete'), ['action' => 'delete', $task->Id], ['confirm' => __('Are you sure you want to delete # {0}?', $task->Id)]) ?>
                </td>
            </tr>
            <?php endforeach; ?>
        </tbody>
    </table>
    <div class="paginator">
        <ul class="pagination">
            <?= $this->Paginator->first('<< ' . __('first')) ?>
            <?= $this->Paginator->prev('< ' . __('previous')) ?>
            <?= $this->Paginator->numbers() ?>
            <?= $this->Paginator->next(__('next') . ' >') ?>
            <?= $this->Paginator->last(__('last') . ' >>') ?>
        </ul>
        <p><?= $this->Paginator->counter(['format' => __('Page {{page}} of {{pages}}, showing {{current}} record(s) out of {{count}} total')]) ?></p>
    </div>
</div>
