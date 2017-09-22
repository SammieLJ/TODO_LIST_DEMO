<?php
namespace App\Model\Table;

use Cake\ORM\Query;
use Cake\ORM\RulesChecker;
use Cake\ORM\Table;
use Cake\Validation\Validator;

/**
 * Tasks Model
 *
 * @method \App\Model\Entity\Task get($primaryKey, $options = [])
 * @method \App\Model\Entity\Task newEntity($data = null, array $options = [])
 * @method \App\Model\Entity\Task[] newEntities(array $data, array $options = [])
 * @method \App\Model\Entity\Task|bool save(\Cake\Datasource\EntityInterface $entity, $options = [])
 * @method \App\Model\Entity\Task patchEntity(\Cake\Datasource\EntityInterface $entity, array $data, array $options = [])
 * @method \App\Model\Entity\Task[] patchEntities($entities, array $data, array $options = [])
 * @method \App\Model\Entity\Task findOrCreate($search, callable $callback = null, $options = [])
 */
class TasksTable extends Table
{

    /**
     * Initialize method
     *
     * @param array $config The configuration for the Table.
     * @return void
     */
    public function initialize(array $config)
    {
        parent::initialize($config);

        $this->table('tasks');
        $this->displayField('Id');
        $this->primaryKey('Id');
    }

    /**
     * Default validation rules.
     *
     * @param \Cake\Validation\Validator $validator Validator instance.
     * @return \Cake\Validation\Validator
     */
    public function validationDefault(Validator $validator)
    {
        $validator
            ->integer('Id')
            ->allowEmpty('Id', 'create');

        $validator
            ->allowEmpty('TaskDesc');

        $validator
            ->boolean('Completed')
            ->allowEmpty('Completed');

        $validator
            ->boolean('Deleted')
            ->allowEmpty('Deleted');

        $validator
            ->dateTime('EntryTime')
            ->requirePresence('EntryTime', 'create')
            ->notEmpty('EntryTime');

        $validator
            ->allowEmpty('TaskOwner');

        return $validator;
    }
}
