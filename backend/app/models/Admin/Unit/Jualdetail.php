<?php
namespace Admin\Unit;

use BasicModels;

class Jualdetail extends BasicModels {

  protected $table = 'trJualDetail';

        /**
        * The attributes that are mass assignable.
        *
        * @var array
        */
    protected $fillable = array('jualdNoTrans','jualdUnitPengguna','jualdTanggal','jualdKode','jualdNmBarang','jualdSatuan','jualdQty','jualdQty2','jualdHarga','jualdDisPersen','jualdDiskon','jualdJumlah','jualdKet','jualdRincian','jualdSkpd');
        
  /**
   * The attributes excluded from the model's JSON form.
   *
   * @var array
   */
    protected $primaryKey = 'jualdId';

    public $timestamps = true;
   public $companystamps = false;
   
   /**
    * The name of the "created at" column.
    *
    * @var string
    */
   const CREATED_AT = 'jualdCreateTime';
   
   /**
    * The name of the "created by" column.
    *
    * @var string
    */
   const CREATED_BY = 'jualdCreateUser';

   /**
    * The name of the "updated at" column.
    *
    * @var string
    */
   const UPDATED_AT = 'jualdUpdateTime';
   
   /**
    * The name of the "updated by" column.
    *
    * @var string
    */
   const UPDATED_BY = 'jualdUpdateUser';
   
   /**
    * The name of the "deleted at" column.
    *
    * @var string
    */
   const DELETED_AT = 'jualdDeleteTime';
   
   /**
    * The name of the "deleted by" column.
    *
    * @var string
    */
   const DELETED_BY = 'jualdDeleteUser';

}