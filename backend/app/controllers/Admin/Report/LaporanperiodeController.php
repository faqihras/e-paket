<?php
namespace Admin\Report;

use BasicController;
use DB;
use Lang;
use Input;

class LaporanperiodeController extends BasicController {
    /**
     * Set Model's Repository
     */
     // public function __construct() {
     //     $this->model = new Agama();
     // }
     public function index()
     {
           $param=Input::all();        
           $tgawal=!empty($param['tgawal'])?$this->reversdate($param['tgawal']):'0000-00-00';
           $tgahir=!empty($param['tgahir'])?$this->reversdate($param['tgahir']):'0000-00-00';           
           $jenis =$param['jenis'];
          // 
           $tgawal2=!empty($param['tgawal2'])?$this->reversdate($param['tgawal2']):'0000-00-00';
           $tgahir2=!empty($param['tgahir2'])?$this->reversdate($param['tgahir2']):'0000-00-00';           
           $poli=!empty($param['rawatPoli'])?$param['rawatPoli']:'xxxxxxxx';
           $x=!empty($param['x'])?$param['x']:'xxxxxxxx';

      if ($x == 1) {
           $query = DB::table('trpaket')
                  /* ->select('*','rawatRm as kode','rawatNama as nama','rawatAlamat as alamat','rawatJenis as jenis'
                    )*/
                   ->select('*','paketId as kode','paketNama as nama','paketTanggal as tanggal',
                     DB::raw('if(paketStatus=1,"Belum Diambil",if(paketStatus=2,"Diambil",if(paketStatus=3,"Paket Disita",""))) as jenis')
                    )
                ->leftjoin('mssantri','santriNis','=','paketId')
                ->leftjoin('mskategori','kategoriId','=','paketId')
                 ->leftjoin('msasrama','asramaId','=','paketId')
                // ->leftjoin('msJaminanHeader','msjHeadId','=','rawatJaminanId')
                 ->where('paketStatus','=',$jenis)
                 ->where('paketTanggal','>=',$tgawal)
                 ->where('paketTanggal','<=',$tgahir)
                  // ->orderby('rawatUpdateTime','asc')
                  ->orderby('paketId','asc')
                  ->get()
                  ;
            }
          else{
             $query = DB::table('trpaket')
                  /* ->select('*','rawatRm as kode','rawatNama as nama','rawatAlamat as alamat','rawatJenis as jenis'
                    )*/
                   ->select('*','paketId as kode','paketNama as nama','paketTanggal as tanggal',
                     DB::raw('if(paketStatus=1,"Paket Masuk",if(paketStatus=2,"Paket Keluar","")) as jenis')
                    )
                ->leftjoin('mssantri','santriNis','=','paketId')
                ->leftjoin('mskategori','kategoriId','=','paketId')
                // ->leftjoin('msJaminanHeader','msjHeadId','=','rawatJaminanId')
                 ->where('paketKategori','=',$jenis)
                 ->where('paketTanggal','>=',$tgawal)
                 ->where('paketTanggal','<=',$tgahir)
                  // ->orderby('rawatUpdateTime','asc')
                  ->orderby('paketId','asc')
                  ->get()
                  ;
          }
                   return $query;

            /*$saldoawal=$this->getSaldoAwal($tgawal,$kode);
          }

msJaminanHeader

            $res[]=array(
                    'krtsKode'=>'',
                    'krtsNama'=>'SALDO AWAL',
                    'krtsIdTrans'=>'',
                    'krtsTanggal'=>'',
                    'krtsNoTrans'=>'',
                    'krtsInStok'=>'0',
                    'krtsInHarga'=>'',
                    'krtsOutStok'=>'0',
                    'krtsOutHarga'=>'0',
                    'krtsSatuan'=>'',
                    'krtsSaldoStok'=>$saldoawal,
                    'krtsSaldoHarga'=>'0',
                    'krtsKeterangan'=>'',
                  );*/


           /* $i=0;
            $tmpkode='';*/
            foreach ($query as $key => $val) {
                $rawatGender=$val->rawatGender;
                if ($rawatGender=='1') {
                  $klm='Laki-laki';
                } else {
                  $klm='Perempuan';
                }
                
                /*$kode=$val->rawatJenis;
                $nota=$val->krtsNoTrans;

                $inStok=$val->krtsInStok;
                $inHarga=$val->krtsInHarga;

                $outStok=$val->krtsOutStok;
                $outHarga=$val->krtsOutHarga;
                

                $saldoawal +=$inStok-$outStok;*/ 


                /*if($tmpkode==$kode){
                  $val->rawatJenis='';
                  $val->rawatNama='';
                }
            


                $res[]=array(
                        'rawatId'=>$val->rawatId,
                        'rawatNama'=>$val->rawatNama,
                        'rawatTglDaftar'=>$val->rawatTglDaftar,
                        'rawatKartu'=>$val->rawatKartu,
                        'rawatAlamat'=>$val->rawatAlamat,
                        'rawatUrutDaftar'=>$val->rawatUrutDaftar,
                        'rawatKtp'=>$val->rawatKtp,
                         'rawatUmur'=>$val->rawatUmur,

                        'krtsInStok'=>$inStok,
                        'krtsInHarga'=>$inHarga,
                        'krtsOutStok'=>$outStok,
                        'krtsOutHarga'=>$outHarga,

                        'krtsSaldoStok'=>$saldoawal,
                        'krtsSaldoHarga'=>$inHarga+$outHarga,
                        'krtsKeterangan'=>$val->krtsKeterangan,
                      );


                $tmpkode=$kode;


                $i++;*/
            }
            /*
            $res[]=array(
                    'krtsNoTrans'=>'',
                    'krtsKode'=>'',
                    'krtsNama'=>'<b style="color:red;">SALDO AKHIR</b>',
                    'krtsIdTrans'=>'',
                    'krtsTanggal'=>'',
                    'krtsInStok'=>'',
                    'krtsInHarga'=>'',
                    'krtsOutStok'=>'',
                    'krtsOutHarga'=>'',
                    'krtsSaldoStok'=>'<b style="color:red;">'.$saldoawal.'</b>',
                    'krtsSatuan'=>'',
                    'krtsKeterangan'=>'',
                    'krtsSaldoHarga'=>'krtsInHarga',
                  );*/  

           /* return $klm; */         
     }

     /*public function getSaldoAwal($tgawal,$kode){
           $tahun=substr($tgawal, 0,4);
           $query = DB::table('trKartuStok')
                  ->select(DB::raw('sum(krtsInStok-krtsOutStok) as salAwal'))
                  ->where('krtsGudang','=',1)
                  ->where('krtsKode','=',$kode)
                  ->where('krtsTanggal','<',$tgawal)
                  ->where(DB::raw('year(krtsTanggal)'),'<=',$tahun)
                  ->get();
           return !empty($query[0]->salAwal)?$query[0]->salAwal:0;       
     }*/

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