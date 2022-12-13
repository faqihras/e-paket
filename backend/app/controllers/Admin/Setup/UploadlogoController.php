<?php
namespace Admin\Setup;

use BasicController;
use DB;
use Lang;
use Input;
use Image;


class UploadlogoController extends BasicController {
    /**
     * Set Model's Repository
     */

     function store(){

        if (Input::hasFile('kopGambar1')) { 
            $fname=Input::file('kopGambar1')->getClientOriginalName();
            $path=public_path().'/upload/';
            $ext =Input::file('kopGambar1')->getClientOriginalExtension();
            Input::file('kopGambar1')->move($path,$fname);


            $img = Image::make($path.$fname);
            $img->fit(200);
            $img->save($path.'thumb/'.$fname);


            $id=Input::get('kopId');
            DB::table('msKop')
                ->where('kopId','=', $id)
                ->update(array('kopGambar1' => $fname));            
        }
        if (Input::hasFile('kopGambar2')) { 
            $fname=Input::file('kopGambar2')->getClientOriginalName();
            $path=public_path().'/upload/';
            $ext =Input::file('kopGambar2')->getClientOriginalExtension();
            Input::file('kopGambar2')->move($path,$fname);


            $img = Image::make($path.$fname);
            $img->fit(200);
            $img->save($path.'thumb/'.$fname);


            $id=Input::get('kopId');
            DB::table('msKop')
                ->where('kopId','=', $id)
                ->update(array('kopGambar2' => $fname));            
        }

        // if (Input::hasFile('mspenandatanganTTD2')) { 
        //     $fname=Input::file('mspenandatanganTTD2')->getClientOriginalName();
        //     $path=public_path().'/upload/';
        //     $ext =Input::file('mspenandatanganTTD2')->getClientOriginalExtension();
        //     Input::file('mspenandatanganTTD2')->move($path,$fname);

        //     $img = Image::make($path.$fname);
        //     $img->fit(200);
        //     $img->save($path.'thumb/'.$fname);

        //     $id=Input::get('mspenandatanganId');
        //     DB::table('mspenandatangan')
        //         ->where('mspenandatanganId','=', $id)
        //         ->update(array('mspenandatanganTTD2' => $fname));            
        // }

        // if (Input::hasFile('mspenandatanganTTD3')) { 
        //     $fname=Input::file('mspenandatanganTTD3')->getClientOriginalName();
        //     $path=public_path().'/upload/';
        //     $ext =Input::file('mspenandatanganTTD3')->getClientOriginalExtension();
        //     Input::file('mspenandatanganTTD3')->move($path,$fname);

        //     $img = Image::make($path.$fname);
        //     $img->fit(200);
        //     $img->save($path.'thumb/'.$fname);

        //     $id=Input::get('mspenandatanganId');
        //     DB::table('mspenandatangan')
        //         ->where('mspenandatanganId','=', $id)
        //         ->update(array('mspenandatanganTTD3' => $fname));            
        // }

        // if (Input::hasFile('mspenandatanganTTD4')) { 
        //     $fname=Input::file('mspenandatanganTTD4')->getClientOriginalName();
        //     $path=public_path().'/upload/';
        //     $ext =Input::file('mspenandatanganTTD4')->getClientOriginalExtension();
        //     Input::file('mspenandatanganTTD4')->move($path,$fname);

        //     $img = Image::make($path.$fname);
        //     $img->fit(200);
        //     $img->save($path.'thumb/'.$fname);

        //     $id=Input::get('mspenandatanganId');
        //     DB::table('mspenandatangan')
        //         ->where('mspenandatanganId','=', $id)
        //         ->update(array('mspenandatanganTTD4' => $fname));            
        // }

        return array('status'=>'no error');

     }

}