<?php
namespace Admin\Master;
use BasicController;
use DB;
use Lang;
use Input;

class SantriforcomboController extends BasicController {
    /**
     * Set Model's Repository
     */
     public function __construct() {
         $this->model = new Santri();
     }
     public function index(){
          $param=Input::all();
          $param['term']=!empty($param['term'])? $param['term'] :'';
          $param['kode']=!empty($param['kode'])? $param['kode'] :'';

           try {
                $query = DB::table($this->model->getTable())
                        ->select('santriNis as id','santriNama as nama','santriNama as text')
                        ->where('santriNama','like','%'.$param['term'].'%')
                        ->where(function($query) use($param){
                                    $query->where('santriNis', 'like','%'.$param['kode'].'%');
                                         
                                })
                        ->limit(100)
                        ->get();
                
               return $query;                
           }catch(Exception $e){
               return Response::exception($e);
           }

     }
}