<?php
namespace Admin\Master;


class StatusController extends  \BasicController {
    /**
     * Set Model's Repository
     */

     public function index(){
          $data = array(
                      array(
                               "id"=>"1", 
                               "kode"=>"1",
                               "nama"=>"Belum Diambil",
                               "text"=>"Belum Diambil"
                               ),
                        array(
                               "id"=>"2", 
                               "kode"=>"2",
                               "nama"=>"Diambil",
                               "text"=>"Diambil"
                               ),
                      
                         array(
                               "id"=>"3", 
                               "kode"=>"3",
                               "nama"=>"Disita",
                               "text"=>"Disita"
                               ),
                      
                      );

          return $data;

     }
}