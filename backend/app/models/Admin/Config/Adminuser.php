<?php
namespace Admin\Config;

use BasicModels; 

class Adminuser extends BasicModels {
    /**
    * The database table used by the model.
    *
    * @var string
    */
   protected $table = 'admin_users';

   /**
    * The primary key for the model.
    *
    * @var string
    */
   protected $fillable = array('ausrId','ausrUsername','ausrName','ausrPassword','ausrActive');

   protected $primaryKey = 'ausrId';

   /**
    * The name of the company id column.
    *
    * @var string
    */
   public $companystamps = false;
   
   /**
    * The number of models to return for pagination.
    *
    * @var int
    */
//   protected $perPage = -1;
   
   /**
    * The name of the "deleted by" column.
    *
    * @var string
    */
//   const DELETED_BY = 'menuDeletedUserId';
}