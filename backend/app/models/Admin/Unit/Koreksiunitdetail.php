<?php
namespace Admin\Unit;

use BasicModels;

class Koreksiunitdetail extends BasicModels {

  protected $table = 'trKoreksiUnitDetail';

        /**
        * The attributes that are mass assignable.
        *
        * @var array
        */
    protected $fillable = array('retNotrans','retTanggal','retKdBarang','retNmBarang','retSatuan','retPengembalian','retKdUnit','retSkpd', 'retNoJual');
        
  /**
   * The attributes excluded from the model's JSON form.
   *
   * @var array
   */
    protected $primaryKey = 'retId';

    public $timestamps = true;
   public $companystamps = false;
   
   /**
    * The name of the "created at" column.
    *
    * @var string
    */
   const CREATED_AT = 'retCreateTime';
   
   /**
    * The name of the "created by" column.
    *
    * @var string
    */
   const CREATED_BY = 'retCreateUser';

   /**
    * The name of the "updated at" column.
    *
    * @var string
    */
   const UPDATED_AT = 'retUpdateTime';
   
   /**
    * The name of the "updated by" column.
    *
    * @var string
    */
   const UPDATED_BY = 'retUpdateUser';
   
   /**
    * The name of the "deleted at" column.
    *
    * @var string
    */
   const DELETED_AT = 'retDeleteTime';
   
   /**
    * The name of the "deleted by" column.
    *
    * @var string
    */
   const DELETED_BY = 'retDeleteUser';

}