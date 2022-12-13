<?php
namespace Admin\Master;

use BasicController;
use DB;
use Lang;
use Input;

class PaketController extends BasicController {
    /**
     * Set Model's Repository
     */
     public function __construct() {
         $this->model = new Paket ();
     }
     public function index(){


           $param=Input::all();        
           $search=!empty($param['search']['value'])?$param['search']['value']:'';

            $query = DB::table($this->model->getTable())
                    ->select('*',
                             DB::raw('if(paketStatus=1,"Belum Diambil ",if(paketStatus=2,"Diambil",if(paketStatus=3,"Disita",""))) as jenis')
                        )
                     ->leftjoin('mssantri', 'paketPenerima', '=', 'santriNis')
                     ->leftjoin('msasrama', 'paketAsrama', '=', 'asramaId')
                     ->leftjoin('mskategori', 'paketKategori', '=', 'kategoriId')
                    ->where('paketId','like','%'.$search.'%')
                    ->orwhere('paketNama','like','%'.$search.'%')
                    ;
            
           return $this->getDataGrid($query);                

     }

      public function beforeStore(){

        $param=Input::all();        
        $tanggal    =!empty($param['paketTanggal']) ? $param['paketTanggal'] : '00/00/0000';
        

        Input::merge(array(
                            'paketTanggal' => $this->reversdate($tanggal),
                          ));                    

     }
      public function beforeUpdate(){

        $param=Input::all();        
       $tanggal    =!empty($param['paketTanggal']) ? $param['paketTanggal'] : '00/00/0000';
        Input::merge(array(
                             'paketTanggal' => $this->reversdate($tanggal),
                          ));                  

     }

      public function reversdate($tanggal){
        if(substr($tanggal, 2,1)=="/"){
            $a=explode("/",$tanggal);
            $result=$a[2].'-'.$a[0].'-'.$a[1];
        }else{
            $a=explode("-",$tanggal);
            $result=$a[2].'-'.$a[1].'-'.$a[0];
        }
        return $result;
     }
}