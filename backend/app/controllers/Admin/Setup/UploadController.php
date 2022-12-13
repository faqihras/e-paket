<?php
namespace Admin\Setup;

use BasicController;
use DB;
use Lang;
use Input;
use Image;


class UploadController extends BasicController {
    /**
     * Set Model's Repository
     */

     function store(){

        if (Input::hasFile('srtLamp1')) { 
            $fname=Input::file('srtLamp1')->getClientOriginalName();
            $path=public_path().'/upload/';
            $ext =Input::file('srtLamp1')->getClientOriginalExtension();
            Input::file('srtLamp1')->move($path,$fname);


            $img = Image::make($path.$fname);
            $img->fit(200);
            $img->save($path.'thumb/'.$fname);


            $id=Input::get('mohonId');
            DB::table('mspemohon')
                ->where('mohonId','=', $id)
                ->update(array('srtLamp1' => $fname));            
        }

        if (Input::hasFile('srtLamp2')) { 
            $fname=Input::file('srtLamp2')->getClientOriginalName();
            $path=public_path().'/upload/';
            $ext =Input::file('srtLamp2')->getClientOriginalExtension();
            Input::file('srtLamp2')->move($path,$fname);

            $img = Image::make($path.$fname);
            $img->fit(200);
            $img->save($path.'thumb/'.$fname);

            $id=Input::get('mohonId');
            DB::table('mspemohon')
                ->where('mohonId','=', $id)
                ->update(array('srtLamp2' => $fname));            
        }

        if (Input::hasFile('srtLamp3')) { 
            $fname=Input::file('srtLamp3')->getClientOriginalName();
            $path=public_path().'/upload/';
            $ext =Input::file('srtLamp3')->getClientOriginalExtension();
            Input::file('srtLamp3')->move($path,$fname);

            $img = Image::make($path.$fname);
            $img->fit(200);
            $img->save($path.'thumb/'.$fname);

            $id=Input::get('mohonId');
            DB::table('mspemohon')
                ->where('mohonId','=', $id)
                ->update(array('srtLamp3' => $fname));            
        }

        if (Input::hasFile('srtLamp4')) { 
            $fname=Input::file('srtLamp4')->getClientOriginalName();
            $path=public_path().'/upload/';
            $ext =Input::file('srtLamp4')->getClientOriginalExtension();
            Input::file('srtLamp4')->move($path,$fname);

            $img = Image::make($path.$fname);
            $img->fit(200);
            $img->save($path.'thumb/'.$fname);

            $id=Input::get('mohonId');
            DB::table('mspemohon')
                ->where('mohonId','=', $id)
                ->update(array('srtLamp4' => $fname));            
        }

        return array('status'=>'no error');

     }

}