<?php
namespace Admin\Master;

use BasicModels;

class Pegawai extends BasicModels {

  protected $table = 'mspegawai';

        /**
        * The attributes that are mass assignable.
        *
        * @var array
        */
    protected $fillable = array('pgwNip','pgwNama','pgwLevel', 'pgwTglLahir', 'pgwTglMasuk','pgwAgama', 'pgwStatus');
        
  /**
   * The attributes excluded from the model's JSON form.
   *
   * @var array
   */
    protected $primaryKey = 'pgwId';

    public $timestamps = true;
   public $companystamps = false;
   
   /**
    * The name of the "created at" column.
    *
    * @var string
    */
   const CREATED_AT = 'pgwCreateTime';
   
   /**
    * The name of the "created by" column.
    *
    * @var string
    */
   const CREATED_BY = 'pgwCreateUser';

   /**
    * The name of the "updated at" column.
    *
    * @var string
    */
   const UPDATED_AT = 'pgwUpdateTime';
   
   /**
    * The name of the "updated by" column.
    *
    * @var string
    */
   const UPDATED_BY = 'pgwUpdateUser';
   
   /**
    * The name of the "deleted at" column.
    *
    * @var string
    */
   const DELETED_AT = 'pgwDeleteTime';
   
   /**
    * The name of the "deleted by" column.
    *
    * @var string
    */
   const DELETED_BY = 'pgwDeleteUser';

}