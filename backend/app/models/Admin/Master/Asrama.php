<?php
namespace Admin\Master;

use BasicModels;

class Asrama extends BasicModels {

  protected $table = 'msasrama';

        /**
        * The attributes that are mass assignable.
        *
        * @var array
        */
    protected $fillable = array('asramaId','asramaNama','asramaGedung');
        
  /**
   * The attributes excluded from the model's JSON form.
   *
   * @var array
   */
    protected $primaryKey = 'asramaId';

    public $timestamps = true;
   public $companystamps = false;
   
   /**
    * The name of the "created at" column.
    *
    * @var string
    */
   const CREATED_AT = 'asramaCreateTime';
   
   /**
    * The name of the "created by" column.
    *
    * @var string
    */
   const CREATED_BY = 'asramaCreateUser';

   /**
    * The name of the "updated at" column.
    *
    * @var string
    */
   const UPDATED_AT = 'asramaUpdateTime';
   
   /**
    * The name of the "updated by" column.
    *
    * @var string
    */
   const UPDATED_BY = 'asramaUpdateUser';
   
   /**
    * The name of the "deleted at" column.
    *
    * @var string
    */
   const DELETED_AT = 'asramaDeleteTime';
   
   /**
    * The name of the "deleted by" column.
    *
    * @var string
    */
   const DELETED_BY = 'asramaDeleteUser';

}