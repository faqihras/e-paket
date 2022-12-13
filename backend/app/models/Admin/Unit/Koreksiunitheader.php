<?php
namespace Admin\Unit;

use BasicModels;

class Koreksiunitheader extends BasicModels {

  protected $table = 'trKoreksiUnitHeader';

        /**
        * The attributes that are mass assignable.
        *
        * @var array
        */
    protected $fillable = array('hreturNoTrans','hreturJualNoTrans','hreturTanggal','hreturKdUnit','hreturPasien','hreturGudang','hreturTotal','hreturSkpd');
        
  /**
   * The attributes excluded from the model's JSON form.
   *
   * @var array
   */
    protected $primaryKey = 'hreturId';

    public $timestamps = true;
   public $companystamps = false;
   
   /**
    * The name of the "created at" column.
    *
    * @var string
    */
   const CREATED_AT = 'hreturCreateTime';
   
   /**
    * The name of the "created by" column.
    *
    * @var string
    */
   const CREATED_BY = 'hreturCreateUser';

   /**
    * The name of the "updated at" column.
    *
    * @var string
    */
   const UPDATED_AT = 'hreturUpdateTime';
   
   /**
    * The name of the "updated by" column.
    *
    * @var string
    */
   const UPDATED_BY = 'hreturUpdateUser';
   
   /**
    * The name of the "deleted at" column.
    *
    * @var string
    */
   const DELETED_AT = 'hreturDeleteTime';
   
   /**
    * The name of the "deleted by" column.
    *
    * @var string
    */
   const DELETED_BY = 'hreturDeleteUser';

}