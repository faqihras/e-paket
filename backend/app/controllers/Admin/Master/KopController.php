<?php
namespace Admin\Master;

use BasicController;
use DB;
use Lang;
use Input;

class KopController extends BasicController {
    /**
     * Set Model's Repository
     */
     public function __construct() {
         $this->model = new Kop();
     }
     public function index()
     {
     	 $param=Input::all();        
       $search=$param['search']['value'];

       try {
            $query = DB::table($this->model->getTable())
                    ->select('kopId', 'kopNama', 'kopAlamat', 'kopKdPos','kopWeb','kopEmail','kopTelp','kopKab',                      
DB::raw('if(kopGambar1<>"",concat("<a class=\'fancybox\' rel=\'gallery1\' title=\'\' href=\'backend/public/upload/",kopGambar1,"\'><img class=\'img-responsive\' src=\'backend/public/upload/thumb/",kopGambar1,"\' ></a>"),"") as kopGambar1') ,
DB::raw('if(kopGambar2<>"",concat("<a class=\'fancybox\' rel=\'gallery1\' title=\'\' href=\'backend/public/upload/",kopGambar2,"\'><img class=\'img-responsive\' src=\'backend/public/upload/thumb/",kopGambar2,"\' ></a>"),"") as kopGambar2')      )
                    // ->where('mspenandatanganNm','like','%'.$search.'%')
                    ;
            
           return $this->getDataGrid($query);                
       }catch(Exception $e){
           return Response::exception($e);
       }    
     }
}