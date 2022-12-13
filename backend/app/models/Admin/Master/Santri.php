<?php
namespace Admin\Master;

use BasicModels;

class Santri extends BasicModels {

  protected $table = 'mssantri';

        /**
        * The attributes that are mass assignable.
        *
        * @var array
        */
    protected $fillable = array('santriNis','santriNama','santriAlamat', 'santriAsrama', 'santriTotalpaket');
        
  /**
   * The attributes excluded from the model's JSON form.
   *
   * @var array
   */
    protected $primaryKey = 'santriNis';

    public $timestamps = true;
   public $companystamps = false;
   
   /**
    * The name of the "created at" column.
    *
    * @var string
    */
   const CREATED_AT = 'santriCreateTime';
   
   /**
    * The name of the "created by" column.
    *
    * @var string
    */
   const CREATED_BY = 'santriCreateUser';

   /**
    * The name of the "updated at" column.
    *
    * @var string
    */
   const UPDATED_AT = 'santriUpdateTime';
   
   /**
    * The name of the "updated by" column.
    *
    * @var string
    */
   const UPDATED_BY = 'santriUpdateUser';
   
   /**
    * The name of the "deleted at" column.
    *
    * @var string
    */
   const DELETED_AT = 'santriDeleteTime';
   
   /**
    * The name of the "deleted by" column.
    *
    * @var string
    */
   const DELETED_BY = 'santriDeleteUser';

}