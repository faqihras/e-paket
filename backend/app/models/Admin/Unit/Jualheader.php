<?php
namespace Admin\Unit;

use BasicModels;

class Jualheader extends BasicModels {

  protected $table = 'trJualHeader';

        /**
        * The attributes that are mass assignable.
        *
        * @var array
        */
    protected $fillable = array('jualNoTrans','jualUnitPengguna','jualNoRm','jualNoReg','jualNoResep','jualNamaPejabat','jualNip','jualPangkat','jualJabatan','jualSisBayar','jualTipe','jualPoli','jualDokter','jualTanggal','jualTotalHarga','jualBayar','jualSisa','jualKet','jualSkpd');
        
  /**
   * The attributes excluded from the model's JSON form.
   *
   * @var array
   */
    protected $primaryKey = 'jualId';

    public $timestamps = true;
   public $companystamps = false;
   
   /**
    * The name of the "created at" column.
    *
    * @var string
    */
   const CREATED_AT = 'jualCreateTime';
   
   /**
    * The name of the "created by" column.
    *
    * @var string
    */
   const CREATED_BY = 'jualCreateUser';

   /**
    * The name of the "updated at" column.
    *
    * @var string
    */
   const UPDATED_AT = 'jualUpdateTime';
   
   /**
    * The name of the "updated by" column.
    *
    * @var string
    */
   const UPDATED_BY = 'jualUpdateUser';
   
   /**
    * The name of the "deleted at" column.
    *
    * @var string
    */
   const DELETED_AT = 'jualDeleteTime';
   
   /**
    * The name of the "deleted by" column.
    *
    * @var string
    */
   const DELETED_BY = 'jualDeleteUser';

}