<?php
namespace Admin\Master;

use BasicModels;

class Paket extends BasicModels {

  protected $table = 'trpaket';

        /**
        * The attributes that are mass assignable.
        *
        * @var array
        */
    protected $fillable = array('paketNama','paketTanggal', 'paketKategori', 'paketPengirim','paketStatus','paketSita','paketAsrama','paketPenerima');
        
  /**
   * The attributes excluded from the model's JSON form.
   *
   * @var array
   */
    protected $primaryKey = 'paketId';

    public $timestamps = true;
   public $companystamps = false;
   
   /**
    * The name of the "created at" column.
    *
    * @var string
    */
   const CREATED_AT = 'paketCreateTime';
   
   /**
    * The name of the "created by" column.
    *
    * @var string
    */
   const CREATED_BY = 'paketCreateUser';

   /**
    * The name of the "updated at" column.
    *
    * @var string
    */
   const UPDATED_AT = 'paketUpdateTime';
   
   /**
    * The name of the "updated by" column.
    *
    * @var string
    */
   const UPDATED_BY = 'paketUpdateUser';
   
   /**
    * The name of the "deleted at" column.
    *
    * @var string
    */
   const DELETED_AT = 'paketDeleteTime';
   
   /**
    * The name of the "deleted by" column.
    *
    * @var string
    */
   const DELETED_BY = 'paketDeleteUser';

}