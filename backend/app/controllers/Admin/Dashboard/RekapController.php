<?php
namespace Admin\Dashboard;

use BasicController;
use DB;
use Lang;
use Input;

class RekapController extends BasicController {
    /**
     * Set Model's Repository
     */
     public function __construct() {
         $this->model = new \Admin\Master\Paket();
     }

     public function index()
     {

       try {

            $res=array();

            $ang1 = DB::table('trpaket')
                    // ->leftjoin('ms_eselon','pegEselon','=','eselonKd')
                    ->select(DB::raw('count(paketId) as angTotal'))
                    // ->where('pegEselon','like','2%')
                    ->get();
                    ;
            $angTotal=$ang1[0]->angTotal;   

             $ang2 = DB::table('trpaket')
                    // ->leftjoin('ms_eselon','pegEselon','=','eselonKd')
                    ->select(DB::raw('count(paketStatus) as satTotal'))
                    ->where('paketStatus','like','1%')
                    ->get();
                    ;
            $unitTotal=$ang2[0]->satTotal; 

            $ang3 =  DB::table('trpaket')
                    // ->leftjoin('ms_eselon','pegEselon','=','eselonKd')
                    ->select(DB::raw('count(paketStatus) as pegTotal'))
                    ->where('paketStatus','like','3%')
                    ->get();
                    ;
            $pegawaiTotal=$ang3[0]->pegTotal;      
            // $realTotal=$ang1[0]->realTotal;        
            // $sisabelanja=$angTotal-$realTotal;        

            // $ang2 = DB::table('ms_satuankerja')
            //          ->select(DB::raw('count(satkerId) as angTotal1'))
            //         ->get();
            //         ;
            // $xangTotal=$ang2[0]->angTotal;        
            // $xrealTotal=$ang2[0]->realTotal;        
            // $xsisadapat=$angTotal-$realTotal;        

            $res=array(
                  'belanja'=>number_format($angTotal),
                  // 'rbelanja'=>number_format($realTotal),
                  // 'sbelanja'=>number_format($sisabelanja),
                  'pendapatan'=>number_format($unitTotal),
                  'pegawai'=>number_format($pegawaiTotal),
                  // 'rpendapatan'=>number_format($xrealTotal),
                  // 'spendapatan'=>number_format($xsisadapat),
              );


           return $res;                

       }catch(Exception $e){
           return Response::exception($e);
       }    
     }

}