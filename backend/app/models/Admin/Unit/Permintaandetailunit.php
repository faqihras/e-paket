<?php
namespace Admin\Unit;

use BasicModels;

class Permintaandetailunit extends BasicModels {

  protected $table = 'trMintaUnitDetail';

        /**
        * The attributes that are mass assignable.
        *
        * @var array
        */
    protected $fillable = array('mintaNoTrans','mintaTanggal','mintaUnit','mintaKdBarang','mintaNmBarang','mintaSatuan','mintaQty','mintahGudang','mintaSkpd','mintaBidangSkpd'
      //,'mintaKeterangan'
      );
        
  /**
   * The attributes excluded from the model's JSON form.
   *
   * @var array
   */
    protected $primaryKey = 'mintaId';

    public $timestamps = true;
   public $companystamps = false;
   
   /**
    * The name of the "created at" column.
    *
    * @var string
    */
   const CREATED_AT = 'mintaCreateTime';
   
   /**
    * The name of the "created by" column.
    *
    * @var string
    */
   const CREATED_BY = 'mintaCreateUser';

   /**
    * The name of the "updated at" column.
    *
    * @var string
    */
   const UPDATED_AT = 'mintaUpdateTime';
   
   /**
    * The name of the "updated by" column.
    *
    * @var string
    */
   const UPDATED_BY = 'mintaUpdateUser';
   
   /**
    * The name of the "deleted at" column.
    *
    * @var string
    */
   const DELETED_AT = 'mintaDeleteTime';
   
   /**
    * The name of the "deleted by" column.
    *
    * @var string
    */
   const DELETED_BY = 'mintaDeleteUser';

}