<?php
/*
 * Langguage mapping for Role
 */

return array( 
       "form"=>array(
                    array(
                            'id'    => 'rka0',
                            'index' => '0',
                            'name'  => 'CETAK LAK',
                            'field' => array(
                                          array(
                                                'id'    => 'skpd0',
                                                'name'  => 'SKPD',
                                                'type'  => 'autocomplete',
                                                'comboapi'  => 'backend/public/api/admin/anggaran/masterskpdforcombo',
                                                'readonly'  => '0',
                                                'param'  => '',                                                
                                            ),
                                          array(
                                                'id'    => 'date0',
                                                'name'  => 'TANGGAL',
                                                'type'  => 'date',
                                                'readonly'  => '0',
                                            ),
                                       ),
                            'apilaporan' => 'backend/public/api/admin/laporan/cetaklak/lak1',
                        ),
                    // array(
                    //         'id'    => 'rka1',
                    //         'index' => '1',
                    //         'name'  => 'CETAK RKA 1',
                    //         'field' => array(
                    //                       array(
                    //                             'id'    => 'skpd1',
                    //                             'name'  => 'SKPD',
                    //                             'type'  => 'autocomplete',
                    //                             'comboapi'  => '/api/admin/anggaran/masterskpdforcombo',
                    //                             'readonly'  => '0',
                    //                             'param'  => '',                                                
                    //                         ),
                    //                       array(
                    //                             'id'    => 'date1',
                    //                             'name'  => 'TANGGAL',
                    //                             'type'  => 'date',
                    //                             'readonly'  => '0',
                    //                         ),
                    //                    ),
                    //         'apilaporan' => '/api/admin/anggaran/cetakrka/rka1',
                    //     ),
                    // array(
                    //         'id'    => 'rka2',
                    //         'index' => '2',
                    //         'name'  => 'CETAK RKA 2.1',
                    //         'field' => array(
                    //                       array(
                    //                             'id'    => 'skpd2',
                    //                             'name'  => 'SKPD',
                    //                             'type'  => 'autocomplete',
                    //                             'comboapi'  => '/api/admin/anggaran/masterskpdforcombo',
                    //                             'readonly'  => '0',
                    //                             'param'  => '',                                                
                    //                         ),
                    //                       array(
                    //                             'id'    => 'date2',
                    //                             'name'  => 'TANGGAL',
                    //                             'type'  => 'date',
                    //                             'readonly'  => '0',
                    //                         ),
                    //                    ),
                    //         'apilaporan' => '/api/admin/anggaran/cetakrka/rka21',
                    //     ),
                    // array(
                    //         'id'    => 'rka3',
                    //         'index' => '3',
                    //         'name'  => 'CETAK RKA 2.2',
                    //         'field' => array(
                    //                       array(
                    //                             'id'    => 'skpd3',
                    //                             'name'  => 'SKPD',
                    //                             'type'  => 'autocomplete',
                    //                             'comboapi'  => '/api/admin/anggaran/masterskpdforcombo',
                    //                             'readonly'  => '0',
                    //                             'param'  => '',                                                
                    //                         ),
                    //                       array(
                    //                             'id'    => 'date3',
                    //                             'name'  => 'TANGGAL',
                    //                             'type'  => 'date',
                    //                             'readonly'  => '0',
                    //                         ),
                    //                    ),
                    //         'apilaporan' => '/api/admin/anggaran/cetakrka/rka22',
                    //     ),
                    // array(
                    //         'id'    => 'rka4',
                    //         'index' => '4',
                    //         'name'  => 'CETAK RKA 2.2.1',
                    //         'field' => array(
                    //                       array(
                    //                             'id'    => 'skpd4',
                    //                             'name'  => 'SKPD',
                    //                             'type'  => 'autocomplete',
                    //                             'comboapi'  => '/api/admin/anggaran/masterskpdforcombo',
                    //                             'readonly'  => '0',
                    //                             'param'  => '',                                                
                    //                         ),
                    //                       array(
                    //                             'id'    => 'kegiatan4',
                    //                             'name'  => 'KEGIATAN',
                    //                             'type'  => 'autocomplete',
                    //                             'comboapi'  => '/api/admin/anggaran/angkegiatanforcombo',
                    //                             'readonly'  => '0',
                    //                             'param'  => 'skpd4',                                                
                    //                         ),
                    //                       array(
                    //                             'id'    => 'date4',
                    //                             'name'  => 'TANGGAL',
                    //                             'type'  => 'date',
                    //                             'readonly'  => '0',
                    //                         ),
                    //                    ),
                    //         'apilaporan' => '/api/admin/anggaran/cetakrka/rka221',
                    //     ),                
        )
);
