<?php
/*
 * Langguage mapping for Role
 */

return array( 
       "form"=>array(
                    array(
                            'id'    => 'paketId',
                            'name'  => 'ID',
                            'type'  => 'hidden',
                            'readonly'  => '1',
                        ),
                    array(
                            'id'    => 'paketNama',
                            'name'  => 'Nama Paket',
                            'type'  => 'text',
                            'readonly'  => '0',
                        ),

                     array(
                            'id'    => 'paketTanggal',
                            'name'  => 'Tanggal Terima',
                             'type'  => 'date',
                            'readonly'  => '0',
                        ),
                  array(
                            'id'    => 'paketKategori',
                            'name'  => 'Kategori',
                            'type'  => 'autocomplete',
                            'comboapi'  => 'backend/public/api/admin/master/kategoriforcombo',
                            'readonly'  => '0',
                        ),
                    array(
                            'id'    => 'paketPenerima',
                            'name'  => 'Penerima',
                            'type'  => 'autocomplete',
                            'comboapi'  => 'backend/public/api/admin/master/santriforcombo',
                            'readonly'  => '0',
                        ),
                    array(
                            'id'    => 'paketAsrama',
                            'name'  => 'Asrama',
                            'type'  => 'autocomplete',
                            'comboapi'  => 'backend/public/api/admin/master/asramaforcombo',
                            'readonly'  => '0',
                        ),

                     array(
                            'id'    => 'paketPengirim',
                            'name'  => 'Pengirim',
                            'type'  => 'text',
                            'readonly'  => '0',
                        ),
                     array(
                            'id'    => 'paketSita',
                            'name'  => 'Paket Yang Disita',
                            'type'  => 'text',
                            'readonly'  => '0',
                        ),
                     array(
                            'id'    => 'paketStatus',
                            'name'  => 'Status Paket',
                           'type'  => 'autocomplete',
                            'comboapi'  => 'backend/public/api/admin/master/statusforcombo',
                            'readonly'  => '0',
                        ),

                )
);
