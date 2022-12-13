<?php
namespace Admin\Master;

use BasicModels;

class Status extends BasicModels {

  protected $table = 'msstatus';

        /**
        * The attributes that are mass assignable.
        *
        * @var array
        */
    protected $fillable = array('statusId','statusNama');
        
  /**
   * The attributes excluded from the model's JSON form.
   *
   * @var array
   */
    protected $primaryKey = 'statusId';

    public $timestamps = true;
   public $companystamps = false;
   
   /**
    * The name of the "created at" column.
    *
    * @var string
    */
   const CREATED_AT = 'statusCreateTime';
   
   /**
    * The name of the "created by" column.
    *
    * @var string
    */
   const CREATED_BY = 'statusCreateUser';

   /**
    * The name of the "updated at" column.
    *
    * @var string
    */
   const UPDATED_AT = 'statusUpdateTime';
   
   /**
    * The name of the "updated by" column.
    *
    * @var string
    */
   const UPDATED_BY = 'statusUpdateUser';
   
   /**
    * The name of the "deleted at" column.
    *
    * @var string
    */
   const DELETED_AT = 'statusDeleteTime';
   
   /**
    * The name of the "deleted by" column.
    *
    * @var string
    */
   const DELETED_BY = 'statusDeleteUser';

}