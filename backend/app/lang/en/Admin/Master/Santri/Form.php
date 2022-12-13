<?php
/*
 * Langguage mapping for Role
 */

return array( 
       "form"=>array(
                    array(
                            'id'    => 'santriNis',
                            'name'  => 'ID',
                            'type'  => 'hidden',
                            'readonly'  => '1',
                        ),
                    array(
                            'id'    => 'santriNama',
                            'name'  => 'Nama Santri',
                            'type'  => 'text',
                            'readonly'  => '0',
                        ),

                     array(
                            'id'    => 'santriAlamat',
                            'name'  => 'Alamat',
                             'type'  => 'text',
                            'readonly'  => '0',
                        ),
                  array(
                            'id'    => 'santriAsrama',
                            'name'  => 'Asrama',
                            'type'  => 'autocomplete',
                            'comboapi'  => 'backend/public/api/admin/master/asramaforcombo',
                            'readonly'  => '0',
                        ),
                    array(
                            'id'    => 'santriTotalpaket',
                            'name'  => 'Total Paket',
                            'type'  => 'text',
                            'readonly'  => '0',
                        ),

                )
);
