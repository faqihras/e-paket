<?php
namespace Admin\Master;
use BasicController;
use DB;
use Lang;
use Input;

class AsramaforcomboController extends BasicController {
    /**
     * Set Model's Repository
     */
     public function __construct() {
         $this->model = new Asrama();
     }
     public function index(){
          $param=Input::all();
          $param['term']=!empty($param['term'])? $param['term'] :'';
          $param['kode']=!empty($param['kode'])? $param['kode'] :'';

           try {
                $query = DB::table($this->model->getTable())
                        ->select('asramaId as id','asramaNama as nama','asramaNama as text')
                        ->where('asramaNama','like','%'.$param['term'].'%')
                        ->where(function($query) use($param){
                                    $query->where('asramaId', 'like','%'.$param['kode'].'%');
                                         
                                })
                        ->limit(100)
                        ->get();
                
               return $query;                
           }catch(Exception $e){
               return Response::exception($e);
           }

     }
}