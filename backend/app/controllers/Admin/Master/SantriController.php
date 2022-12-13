<?php
namespace Admin\Master;

use BasicController;
use DB;
use Lang;
use Input;

class SantriController extends BasicController {
    /**
     * Set Model's Repository
     */
     public function __construct() {
         $this->model = new Santri ();
     }
     public function index(){


           $param=Input::all();        
           $search=!empty($param['search']['value'])?$param['search']['value']:'';

            $query = DB::table($this->model->getTable())
                    ->select('santriNis','santriNama','santriAlamat','santriAsrama','santriTotalpaket','asramaNama'

                            //   DB::raw('if(pgwPic<>"",concat("<a class=\'fancybox\' rel=\'gallery1\' title=\'\' href=\'backend/public/upload/",pgwPic,"\'><img class=\'img-responsive\' src=\'backend/public/upload/thumb/",pgwPic,"\' ></a>"),"") as pgwPic')
                        )
                     ->leftjoin('msasrama', 'santriAsrama', '=', 'asramaId')
                    ->where('santriNis','like','%'.$search.'%')
                    ->orwhere('santriNama','like','%'.$search.'%')
                    ;
            
           return $this->getDataGrid($query);                

     }
}