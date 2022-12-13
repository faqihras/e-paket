<?php
namespace Admin\Unit;

use BasicModels;

class Permintaanmutasikegudangheader extends BasicModels {

  protected $table = 'trMintaMutasiKeGudangHeader';

        /**
        * The attributes that are mass assignable.
        *
        * @var array
        */
    protected $fillable = array('mintahNoTrans','mintahTanggal','mintahKdUnit','mintahNmUnit','mintahStatus','mintahGudang');
        
  /**
   * The attributes excluded from the model's JSON form.
   *
   * @var array
   */
    protected $primaryKey = 'mintahId';

    public $timestamps = true;
   public $companystamps = false;
   
   /**
    * The name of the "created at" column.
    *
    * @var string
    */
   const CREATED_AT = 'mintahCreateTime';
   
   /**
    * The name of the "created by" column.
    *
    * @var string
    */
   const CREATED_BY = 'mintahCreateUser';

   /**
    * The name of the "updated at" column.
    *
    * @var string
    */
   const UPDATED_AT = 'mintahUpdateTime';
   
   /**
    * The name of the "updated by" column.
    *
    * @var string
    */
   const UPDATED_BY = 'mintahUpdateUser';
   
   /**
    * The name of the "deleted at" column.
    *
    * @var string
    */
   const DELETED_AT = 'mintahDeleteTime';
   
   /**
    * The name of the "deleted by" column.
    *
    * @var string
    */
   const DELETED_BY = 'mintahDeleteUser';

}