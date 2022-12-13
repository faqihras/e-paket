<?php
namespace Admin\Master;
use BasicController;
use DB;
use Lang;
use Input;

class KategoriforcomboController extends BasicController {
    /**
     * Set Model's Repository
     */
     public function __construct() {
         $this->model = new Kategori();
     }
     public function index(){
          $param=Input::all();
          $param['term']=!empty($param['term'])? $param['term'] :'';
          $param['kode']=!empty($param['kode'])? $param['kode'] :'';

           try {
                $query = DB::table($this->model->getTable())
                        ->select('kategoriId as id','kategoriNama as nama','kategoriNama as text')
                        ->where('kategoriNama','like','%'.$param['term'].'%')
                        ->where(function($query) use($param){
                                    $query->where('kategoriId', 'like','%'.$param['kode'].'%');
                                         
                                })
                        ->limit(100)
                        ->get();
                
               return $query;                
           }catch(Exception $e){
               return Response::exception($e);
           }

     }
}