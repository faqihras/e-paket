function setTanggalLahir() {
    var dd  = $('#DD').val();
    if( dd.length == 1) {
        dd  = '0'+dd;
    }
    var mm  = $('#MM').val();
    if( mm.length == 1) {
        mm  = '0'+mm;
    }
    var yy  = $('#YYYY').val();
    // var tgl = mm+'/'+dd+'/'+yy;
    var tgl = dd+'/'+mm+'/'+yy;
    $('#msPasLahir').val(tgl);
}

$(document).ready(function() {
    var oTable;
    setGrid2(0);

});

function tableMaster(modulx){
    $.ajax({
        type: "GET",
        url: "backend/public/api/admin/config/getapimenu",
        data:({modul:modulx}),
        dataType:"json",
        success:function(data){

            getLangGrid(data[0].apiLangGrid,data[0].apiData,data[0].apiLangForm);
            getLangForm(data[0].apiLangForm);


        }
    });
}

function getLangGrid(apiLang,apiData,apiLangForm){
    $.ajax({
        type: "GET",
        url: apiLang,
        dataType:"json",
        success:function(data){
            setGrid(data.kolom,apiData,apiLangForm);

        }
    });
}

function setGrid(kolom,apiData,apiLangForm){


    var table=$('#tData').DataTable({
        "sorting": [[ 0, "asc" ]],
        "dom": "<'box-content'<'col-sm-6'f><'col-sm-6 text-right'l><'clearfix'>>rt<'box-content'<'col-sm-6'i><'col-sm-6 text-right'p><'clearfix'>>",
        "paginationType": "bootstrap",
        "paging":   true,
        "info"  :   true,
        "language": {
                        "lengthMenu": "",
                        "zeroRecords": "No records available",
                        "info": "Page _PAGE_ of _PAGES_",
                        "infoEmpty": "No records available",
                        "infoFiltered": "(filtered from _MAX_ total records)",
                        "search": "SEARCH :  ",
                        "paginate": {"next": "","previous": ""}
        },
        "processing": false,
        "serverSide": true,
        "ajax": {
                    "url" : apiData,
                    "dataType" : "json",
                },

        "columns": kolom,
    });


    $('#tData tbody').on('click', 'tr', function () {
        var idData = $(this).find('td:eq(0)').text();

        setFormData(apiData,idData,apiLangForm);
    });

}


function setGrid2(id){
    console.log('tes:'+id);

    var kolom=[];
    //var id = document.getElementById('pasienId').value;
    $.ajax({
        type: "GET",
        url: 'backend/public/lang/admin/master/paket/grid',
        dataType:"json",
        async:false,
        success:function(data){
            console.log(data);
            kolom=data.kolom;
        }
    });

    var table=$('#tData2').DataTable({
        "sorting": [[ 0, "asc" ]],
        "dom": "<'box-content'<'col-sm-6'f><'col-sm-6 text-right'l><'clearfix'>>rt<'box-content'<'col-sm-6'i><'col-sm-6 text-right'p><'clearfix'>>",
        "paginationType": "bootstrap",
        "paging":   true,
        "info"  :   true,
        "language": {
                        "lengthMenu": "",
                        "zeroRecords": "No records available",
                        "info": "", 
                        "infoEmpty": "No records available",
                        "infoFiltered": "(filtered from _MAX_ total records)",
                        "search": "SEARCH :  ",
                        "paginate": {"next": "","previous": ""}
        },
        "processing": false,
        "serverSide": true,
        "ajax": {
                    "url" : "backend/public/api/admin/master/paket",
                    "data" : ({'paketId':id}),
                    "dataType" : "json",
                },

        "columns": kolom,
        "aoColumnDefs": [
            {'bSortable': false, 'aTargets': [0, 1, 2, 3, 4]},
        ],
    });

}

function getMspasien(id){

    // $('#tData2').dataTable().fnDraw();
    // setGrid2(id);

}

function setGrid2search(kolom,apiData,apiLangForm,norm,nama,alamat,tgllahir){

    console.log("sukses");

    var table=$('#tData').DataTable({
        "sorting": [[ 0, "asc" ]],
        "dom": "<'box-content'<'col-sm-6'f><'col-sm-6 text-right'l><'clearfix'>>rt<'box-content'<'col-sm-6'i><'col-sm-6 text-right'p><'clearfix'>>",
        "paginationType": "bootstrap",
        "paging":   true,
        "info"  :   true,
        "language": {
                "lengthMenu": "",
                "zeroRecords": "No records available",
                "info": "Page _PAGE_ of _PAGES_",
                "infoEmpty": "No records available",
                "infoFiltered": "(filtered from _MAX_ total records)",
                "search": "SEARCH :  ",
                "paginate": {"next": "","previous": ""}
        },
        "processing": false,
        "serverSide": true,
        "ajax": {
                    "url" : "backend/public/api/admin/pasien/pasiencari",
                    "data": ({'norm':norm,'nama':nama,'alamat':alamat,'tgllahir':tgllahir}),
                    "dataType" : "json",
                },

        "columns": kolom,
    });


   $('#tData tbody').on('click', 'tr', function () {
        // var data = $(this).parents('tr').context.cells;
        // var idData=data[0].innerText;
        var idData = $(this).find('td:eq(0)').text();
        setFormData(apiData,idData,apiLangForm);
    })


}
function setFormData(apiData,idData,apiLangForm){

    $.ajax({
        type: "GET",
        url: apiData+'/'+idData,
        dataType:"json",
        success:function(data){
            // console.log(idData);
            var isi=data.data;
            // console.log(isi);
            var key=Object.keys(isi);
            // alert(apiLangForm);
            $.ajax({
                type: "GET",
                url: apiLangForm,
                dataType:"json",
                success:function(data2){
                       // console.log(data2);

                    for (i = 0; i <= data2.form.length-1; i++) {

                        var nmfield=data2.form[i].id;
                        var iData='isi.'+nmfield;

                        if(data2.form[i].type=='text'){
                            document.getElementById(nmfield).value=eval(iData);
                        } else if ( data2.form[i].type=='angka' ) {
                            document.getElementById(nmfield).value=eval(iData);
                        }else if(data2.form[i].type=='hidden'){
                            if ( data2.form[i].id == 'msPasLahir' ) {
        var tg = new Date();
        var day = tg.getDate();
        var mon = tg.getMonth();
        var yee = tg.getFullYear();
        mon = mon + 1;
                                var nilai   = eval(iData);
                                var dd      = nilai.substr(8,2);
                                var mm      = nilai.substr(5,2);
                                var yy      = nilai.substr(0,4);
                                $('#MM').val(mm);
                                $('#DD').val(dd);
                                $('#YYYY').val(yy);
                                // var tgl = mm+'/'+dd+'/'+yy;
                                var tgl =  mon + '/' + day + '/' + yee;
                                $('#'+data2.form[i].id).val(tgl);
                            } else {
                                document.getElementById(nmfield).value=eval(iData);
                            }
                        }else if(data2.form[i].type=='textarea'){
                            document.getElementById(nmfield).value=eval(iData);
                        }else if(data2.form[i].type=='combo'){

                            $("#"+nmfield).val(eval(iData));
                        }else if(data2.form[i].type=='autocomplete'){
                            var kodecombo=eval(iData);
                            var comboapi=data2.form[i].comboapi;
                            setAutocompleteVal(comboapi,kodecombo,nmfield);
                        }else if(data2.form[i].type=='date'){
                            var dataxx=eval(iData);
                            var res = dataxx.split("-");
                            var hasil = res[1]+'/'+res[2]+'/'+res[0];
                            // $("#"+nmfield).attr('value',hasil);
                            document.getElementById(nmfield).value=hasil;

                        }

                        if(i==1){
                            var rm=eval(iData);
                            var iframe = document.getElementById('frameriwayat');
                            iframe.setAttribute("src","laporan/apotek/riwayatmed.php?norm="+rm);
                        }
                        if(i==0){
                            var idPasien=eval(iData);
                            $('#tData2').dataTable().fnDestroy();
                            setGrid2(idPasien);
                        }

                    }
                }
            });
        }
    });
}


function setAutocompleteVal(comboapi,kodecombo,nmfield){
    $.ajax({
        type: "GET",
        url: comboapi,
        data:({kode:kodecombo}),
        dataType:"json",
        success:function(data3){
            $("#"+nmfield).select2("data", { id: kodecombo, text:data3[0].text});
            if ( nmfield == 'msPasKelurahan' ) {
                setAlamat(kodecombo);
            }
        }
    });
}


function getLangForm(apiLang){
    $.ajax({
        type: "GET",
        url: apiLang,
        dataType:"json",
        success:function(data){
            //console.log(data);
            var input_group = '';
            var result      = "";
            for (i = 0; i <= data.form.length-1; i++) {

                if(data.form[i].readonly=='1'){
                    var ro='readonly';
                }else{
                    var ro='';
                }


                if(data.form[i].type=='date'){
                    result +='<div class="col-md-3">';
                    result +='<div class="form-group">';
                    result +='     <label class="control-label">'+data.form[i].name+'</label>';
                    result +='     <input type="text" class="form-control" name="'+data.form[i].id+'" id="'+data.form[i].id+'" '+ro+' placeholder="Pilih Tanggal" />';
                    result +='</div>';
                    result +='</div>';
                }


                if(data.form[i].type=='hidden'){
                    result +='<div class="form-group">';
                    result +='     <input type="hidden" class="form-control" name="'+data.form[i].id+'" id="'+data.form[i].id+'" />';
                    result +='</div>';
                }

                if(data.form[i].type=='text'){
                    if ( data.form[i].id == 'YYYY' ) {
                        input_group  = '<div class="col-md-12" style="padding-left:0px;padding-right:0px">';
                        input_group += '<div class="col-md-3" style="padding-left:0px;padding-right:6px">';
                        input_group += '<input id="DD" type="text" min="1" max="31"  class="form-control text-center" maxlength="2" name="DD" onkeyup="validasiTgl(event)">';
                        input_group += '</div>';
                        input_group += '<div class="col-md-3" style="padding-left:0px;padding-right:6px">';
                        input_group += '<input id="MM" type="text" min="1" max="12"  class="form-control text-center" maxlength="2" name="MM" onkeyup="validasiTgl(event)">';
                        input_group += '</div>';
                        input_group += '<div class="col-md-6" style="padding-left:0px;padding-right:0px">';
                        input_group += '<input id="' + data.form[i].id + '" type="text" class="form-control text-center" maxlength="4" value="" onblur="setTanggalLahir()">';
                        input_group += '</div>';
                        input_group += '</div>';

                        result +='<div class="col-md-3"><div class="form-group">';
                        result +='<label class="control-label">' + data.form[i].name + '</label>';
                        result += input_group;
                        result +='</div></div>';
                    }  else  {
                        result +='<div class="col-md-3">';
                        result +='<div class="form-group">';
                        result +='     <label class="control-label">'+data.form[i].name+'</label>';
                        result +='     <input type="text" class="form-control" name="'+data.form[i].id+'" id="'+data.form[i].id+'" '+ro+' />';
                        result +='</div>';
                        result +='</div>';
                    }
                }


                if(data.form[i].type=='angka'){
                    result +='<div class="col-md-3">';
                    result +='<div class="form-group">';
                    result +='     <label class="control-label">'+data.form[i].name+'</label>';
                    result +='     <input type="text" class="form-control" style="text-align:right" name="'+data.form[i].id+'" id="'+data.form[i].id+'"  '+ro+' />';
                    result +='</div>';
                    result +='</div>';

                }


                if(data.form[i].type=='textarea'){
                    result +='<div class="col-md-3">';
                    result +='<div class="form-group">';
                    result +='     <label class="control-label">'+data.form[i].name+'</label>';
                    result +='     <textarea class="form-control" name="'+data.form[i].id+'" id="'+data.form[i].id+'" '+ro+' row="'+data.form[i].row+'" style="height:'+data.form[i].height+'"/></textarea>';
                    result +='</div>';
                    result +='</div>';
                }

                if(data.form[i].type=='password'){
                    result +='<div class="col-md-3">';
                    result +='<div class="form-group">';
                    result +='     <label class="control-label">'+data.form[i].name+'</label>';
                    result +='     <input type="password" class="form-control" name="'+data.form[i].id+'" id="'+data.form[i].id+'" '+ro+' />';
                    result +='</div>';
                    result +='</div>';
                }

                if(data.form[i].type=='combo'){
                    var comboapi=data.form[i].comboapi;

                    result +='<div class="col-md-3">';
                    result +='<div class="form-group">';
                    result +='    <label class="control-label">'+data.form[i].name+'</label>';
                    result +='    <select class="form-control" name="'+data.form[i].id+'" id="'+data.form[i].id+'" '+ro+'>';
                    result +='        <option></option>';

                    $.ajax({
                        type: "GET",
                        url: comboapi,
                        dataType:"json",
                        async: false,
                        success:function(datacombo){
                            for(j=0;j<=datacombo.length-1;j++){
                                result +='<option value="'+datacombo[j].kode+'">'+datacombo[j].nama+'</option>';
                            }
                        }
                    });

                    result +='    </select>';
                    result +='</div>';
                    result +='</div>';
                }


                if(data.form[i].type=='autocomplete'){
                    var comboapi=data.form[i].comboapi;

                    if(data.form[i].id =='msPasKelurahan'){
                       var change="setAlamat(this.value)";
                       console.log("sukses cok");
                    }
                    else{
                       var change="";
                    }

                    result +='<div class="col-md-3">';
                    result +='<div class="form-group">';
                    result +='    <label class="control-label">'+data.form[i].name+'</label>';
                    result +='    <input type="hidden" class="populate placeholder" name="'+data.form[i].id+'" id="'+data.form[i].id+'" onchange="'+change+'">';
                    result +='    <input type="hidden" name="'+data.form[i].id+'_hidden" id="'+data.form[i].id+'_hidden">';
                    result +='</div>';
                    result +='</div>';

                }

            }

            $('#forminput').html(result);


            for (i = 0; i <= data.form.length-1; i++) {


                if(data.form[i].type=='angka'){
                    $('#'+data.form[i].id).keypress(function(){
                      return(numbersonly(event));
                    });
                }


                if(data.form[i].type=='autocomplete'){
                    var comboapi=data.form[i].comboapi;

                    $('#'+data.form[i].id)
                        .on("change", function(e) {
                              var id=e.added.id;
                              var txt=e.added.nama;
                              var nmhidden=this.id+'_hidden';
                              //console.log(nmhidden);
                              $('#'+nmhidden).attr('value',txt);
                        })
                        .select2({

                        placeholder: "Pilih Data",
                        ajax: {
                                url: comboapi,
                                dataType: 'json',
                                quietMillis: 100,
                                data: function (term, page) {
                                    return {
                                        term: term, //search term
                                        page_limit: 10 // page size
                                    };
                                },
                                results: function (data, page) {
                                    return { results: data };
                                },
                            }
                    });

                }

                if(data.form[i].type=='date'){
                    $('#'+data.form[i].id).datepicker({
                        format: 'dd/mm/yyyy',
                    });
                }
            }


        }
    });
}


function newdata(){
    var modulx=document.getElementById('modul').value;

    $.ajax({
        type: "GET",
        url: "backend/public/api/admin/config/getapimenu",
        data:({modul:modulx}),
        dataType:"json",
        async: false,
        success:function(data){
            var apiForm=data[0].apiLangForm;
            var apiGrid=data[0].apiLangGrid;
            var apiData=data[0].apiData;

            $.ajax({
                type: "GET",
                url: apiForm,
                dataType:"json",
                success:function(data2){
                    var fElement=data2.form;

                    for (i = 0; i <= fElement.length-1; i++) {

                        if(fElement[i].type=='autocomplete'){
                            $("#"+fElement[i].id).select2("data", { id: '', text:''});
                        }else{
                            document.getElementById(fElement[i].id).value='';
                        }

                    }

                }
            });
        }
    });
}

function deleteData(){


    var modulx=document.getElementById('modul').value;
    $.ajax({
        type: "GET",
        url: "backend/public/api/admin/config/getapimenu",
        data:({modul:modulx}),
        dataType:"json",
        async: false,
        success:function(data){
            var apiForm=data[0].apiLangForm;
            var apiGrid=data[0].apiLangGrid;
            var apiData=data[0].apiData;


            $.ajax({
                type: "GET",
                url: apiForm,
                dataType:"json",
                success:function(data2){
                    //console.log(data2);
                    var postData=new Object();
                    var fElement=data2.form;
                    var idData =document.getElementById(fElement[0].id).value

                    if(idData==''){
                        alert('Data Belum Dipilih !!!');
                    }else{
                        var method='DELETE';
                        var apiUrl=apiData+'/'+idData;

                        if(confirm("Anda Akan Menghapus Data Ini?")){
                            $.ajax({
                                type: method,
                                url: apiUrl,
                                dataType:"json",
                                data:postData,
                                success:function(data3){

                                    newdata();
                                    var oTableToUpdate =  $('#tData').dataTable( { bRetrieve : true } );
                                        oTableToUpdate .fnDraw();
                                    //console.log(data3);
                                }
                            });
                        }
                    }


                }
            });


        }
    });

}

function save(){
    var modulx=document.getElementById('modul').value;
    // var rm=document.getElementById('msPasRm').value;

    // if(rm==''){
    //     alert('RM Pasien Tidak Boleh Kosong');
    //     return;
    // }
    $.ajax({
        type: "GET",
        url: "backend/public/api/admin/config/getapimenu",
        data:({modul:modulx}),
        dataType:"json",
        async: false,
        success:function(data){
            var apiForm=data[0].apiLangForm;
            var apiGrid=data[0].apiLangGrid;
            var apiData=data[0].apiData;

            $.ajax({
                type: "GET",
                url: apiForm,
                dataType:"json",
                success:function(data2){
                    //console.log(data2);
                    var postData=new Object();
                    var fElement=data2.form;
                    var idData =document.getElementById(fElement[0].id).value

                    for (i = 0; i <= fElement.length-1; i++) {
                        postData[fElement[i].id]=document.getElementById(fElement[i].id).value;
                        if(fElement[i].type=='autocomplete'){
                            postData[fElement[i].id+'_hidden']=document.getElementById(fElement[i].id+'_hidden').value;
                        }
                    }


                    $('#DD').val('');
                    $('#MM').val('');

                    if(idData==''){
                        var method='POST';
                        var apiUrl=apiData;
                        postData['method']=2;
                    }else{
                        var method='PUT';
                        var apiUrl=apiData+'/'+idData;
                        postData['method']=2;
                    }

                    $.ajax({
                        type: method,
                        url: apiUrl,
                        dataType:"json",
                        data:postData,
                        success:function(data3){
                            newdata();
                            var oTableToUpdate =  $('#tData').dataTable( { bRetrieve : true } );
                                oTableToUpdate .fnDraw();
                                //console.log(data3);
                        },
                        error: function(XMLHttpRequest, textStatus, errorThrown) {
                            alert(textStatus+" : " + errorThrown+" -> Kode Sudah Terpakai");
                        }
                    });
                }
            });


        }
    });
}


function cetakanggota(idpasien){

    if(idpasien==''){
        return;
    }

    var param='?id='+idpasien;
    var url="backend/public/api/admin/report/kartuanggota";
    window.open(url+param, '_blank');
}

function cetaktracer(idpasien){

    if(idpasien==''){
        return;
    }

    var param='?id='+idpasien;
    var url="backend/public/api/admin/report/cetaktracer";
    window.open(url+param, '_blank');
}

function cari_detail(){
    $.ajax({
        type: "GET",
        url: "backend/public/lang/admin/master/paket/grid",
        dataType:"json",
        success:function(data){


            norm=document.getElementById("cari_norm").value;
            nama=document.getElementById("cari_nama").value;
            alamat=document.getElementById("cari_alamat").value;
            tgllhr=document.getElementById("cari_tgllahir").value;

            var table = $('#tData').DataTable();
            table.destroy();

            setGrid2search(data.kolom,"backend/public/api/admin/master/paket","backend/public/lang/admin/master/paket/form",norm,nama,alamat,tgllhr);
        }
    });
}

function refresh_detail(){
   $.ajax({
        type: "GET",
        url: "backend/public/lang/admin/master/paket/grid",
        dataType:"json",
        success:function(data){
    document.getElementById("cari_norm").value="";
    document.getElementById("cari_nama").value="";
    document.getElementById("cari_alamat").value="";
    document.getElementById("cari_tgllahir").value="";
    var table = $('#tData').DataTable();
    table.destroy();

    setGrid(data.kolom,"backend/public/api/admin/master/paket","backend/public/lang/admin/master/paket/form");

        }
    });

}

function setAlamat(idx){
    $.ajax({
        type: "GET",
        url: "backend/public/api/admin/master/setkelurahan",
        data:({'id':idx}),
        dataType:"json",
        async: false,
        success:function(data){
        // var dat=JSON.parse(data);
           console.log("sukses 2");

           $("#msPasKecamatan").select2("data", { id: data[0].kecId, text:data[0].kecNama});
           $("#msPasKab").select2("data", { id: data[0].kabId, text:data[0].kabNama});
           $("#msPasProv").select2("data", { id: data[0].provId, text:data[0].provNama});

        }
    });

}
