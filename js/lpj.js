
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
            setGrid(data.kolom,apiData,apiLangForm,apiLang);

            $.ajax({
                type: "GET",
                url: apiLang+'detail',
                dataType:"json",
                success:function(data2){
                    var key=data2.key[0].id;
                    getDetailRekening(data2.kolom,apiData+'detail',key);
                }
            });
        }
    });          
}

function setGrid(kolom,apiData,apiLangForm,apiLangGrid){

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
        var data = $(this).parents('tr').context.cells;
        var idData=data[0].innerText; 
        setFormData(apiData,idData,apiLangForm,apiLangGrid);
    })

    $('#tData tbody').on('dblclick', 'tr', function () {
        $('#btpopup').click();
    });
}

function setFormData(apiData,idData,apiLangForm,apiLangGrid){

    $.ajax({
        type: "GET",
        url: apiData+'/'+idData,
        dataType:"json",
        success:function(data){
            var isi=data.data;
            var key=Object.keys(isi);

            // console.log(key[0]);

            $.ajax({
                type: "GET",
                url: apiLangForm,
                dataType:"json",
                success:function(data2){
                       // console.log(data2);    

                    for (i = 0; i <= data2.form.length-1; i++) {


                        var nmfield=data2.form[i].id;
                        var iData='isi.'+nmfield;

                        if(nmfield=='lpjKdRek'){
                            sumNilaiRek(eval(iData));
                        }



                        if(data2.form[i].type=='text'){
                            document.getElementById(nmfield).value=eval(iData);
                        }else if(data2.form[i].type=='textarea'){
                            document.getElementById(nmfield).value=eval(iData);
                        }else if(data2.form[i].type=='hidden'){
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
                            $("#"+nmfield).attr('value',hasil);
                            // console.log('tgl '+hasil);
                        }    

                    }

                    $.ajax({
                        type: "GET",
                        url: apiLangGrid+'detail',
                        dataType:"json",
                        success:function(data2){

                            var key=data2.key[0].id;
        
                            $('#tData2').dataTable().fnDestroy();
                            getDetailRekening(data2.kolom,apiData+'detail',key);
                            var oTableToUpdate =  $('#tData2').dataTable( { bRetrieve : true } );
                                oTableToUpdate .fnDraw();                            

                        }
                    });

                }
            });          
        }
    });          
}


function setAutocompleteVal(comboapi,kodecombo,nmfield){
    $.ajax({
        type: "GET",
        url: comboapi,
        data:({term:kodecombo}),
        dataType:"json",
        success:function(data3){
            $("#"+nmfield).select2("data", { id: kodecombo, text:data3[0].text});
        }
    });    
}


function getLangForm(apiLang){
    $.ajax({
        type: "GET",
        url: apiLang,
        dataType:"json",
        success:function(data){
            // console.log(data);
            var result="";
            for (i = 0; i <= data.form.length-1; i++) {

                if(data.form[i].readonly=='1'){
                    var ro='readonly';
                }else{
                    var ro='';
                }


                if(data.form[i].type=='date'){
                    result +='<div class="col-md-6">';
                    result +='<div class="form-group">';
                    result +='     <label class="control-label">'+data.form[i].name+'</label>';
                    result +='     <input type="text" class="form-control"  name="'+data.form[i].id+'" id="'+data.form[i].id+'" '+ro+' placeholder="Pilih Tanggal" />';
                    result +='</div>';
                    result +='</div>';
                }


                if(data.form[i].type=='hidden'){
                    result +='<div class="form-group">';
                    result +='     <input type="hidden" class="form-control" name="'+data.form[i].id+'" id="'+data.form[i].id+'" />';
                    result +='</div>';
                }
                
                if(data.form[i].type=='text'){
                    result +='<div class="col-md-6">';
                    result +='<div class="form-group">';
                    result +='     <label class="control-label">'+data.form[i].name+'</label>';
                    result +='     <input type="text" class="form-control" name="'+data.form[i].id+'" id="'+data.form[i].id+'" '+ro+' />';
                    result +='</div>';
                    result +='</div>';
                }

                if(data.form[i].type=='kosong'){
                    result +='<div class="col-md-6">';
                    result +='<div class="form-group">';
                    result +='     <label class="control-label">&nbsp;</label>';
                    result +='     &nbsp;';
                    result +='</div>';
                    result +='</div>';
                }


                if(data.form[i].type=='textarea'){
                    result +='<div class="col-md-6">';
                    result +='<div class="form-group">';
                    result +='     <label class="control-label">'+data.form[i].name+'</label>';
                    result +='     <textarea class="form-control" rows="'+data.form[i].rows+'" name="'+data.form[i].id+'" id="'+data.form[i].id+'" '+ro+' /></textarea>';
                    result +='</div>';
                    result +='</div>';
                }

                if(data.form[i].type=='password'){
                    result +='<div class="col-md-6">';
                    result +='<div class="form-group">';
                    result +='     <label class="control-label">'+data.form[i].name+'</label>';
                    result +='     <input type="password" class="form-control" name="'+data.form[i].id+'" id="'+data.form[i].id+'" '+ro+' />';
                    result +='</div>';
                    result +='</div>';
                }

                if(data.form[i].type=='combo'){
                    var comboapi=data.form[i].comboapi;

                    result +='<div class="col-md-6">';
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

                    result +='<div class="col-md-6">';
                    result +='<div class="form-group">';
                    result +='    <label class="control-label">'+data.form[i].name+'</label>';
                    result +='    <input type="hidden" class="populate placeholder" name="'+data.form[i].id+'" id="'+data.form[i].id+'" >';
                    result +='    <input type="hidden" name="'+data.form[i].id+'_hidden" id="'+data.form[i].id+'_hidden" >';
                    result +='</div>';
                    result +='</div>';

                }

            }

            $('#forminput').html(result);


            for (i = 0; i <= data.form.length-1; i++) {

                if(data.form[i].type=='autocomplete'){
                    var comboapi=data.form[i].comboapi;
                    var param1 =data.form[i].param1;
                    var param2 =data.form[i].param2;

                    $('#'+data.form[i].id)
                        .on("change", function(e) {
                              var id=e.added.id;
                              var txt=e.added.nama;  
                              var nmhidden=this.id+'_hidden';
                              // console.log(this.id);
                              if(this.id=='lpjKdRek'){
                                 sumNilaiRek(id);
                              }

                              $('#'+nmhidden).attr('value',txt);
                        })      
                        .select2({

                        placeholder: "Pilih Data", 
                        ajax: {
                                url: comboapi,
                                dataType: 'json',
                                quietMillis: 100,
                                data: function (term, page) {

                                    if(param1 !=''){
                                        // var vskpd=document.getElementById(param1).value;
                                    }else{
                                        var vskpd='';
                                    }                                    

                                    if(param2 !=''){
                                        // var vkeg=document.getElementById(param2).value;
                                    }else{
                                        var vkeg='';
                                    }                                    

                                    var vskpd='';
                                    var vkeg='';

                                    return {
                                        kode1 :vskpd,
                                        kode2 :vkeg,                                        
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
                        // format: 'yyyy-mm-dd',
                    });                
                }                 
            }

            //detail rekening
            var result="";
                result +='<div class="form-group">';
            for (i = 0; i <= data.detail.length-1; i++) {

                if(data.detail[i].type=='autocomplete'){
                    var comboapi=data.detail[i].comboapi;
                    var param =data.detail[i].param;

                    result +='  <div class="col-md-2">';
                    result +='    <label class="control-label">'+data.detail[i].name+'</label>';
                    result +='  </div>';
                    result +='  <div class="col-md-10">';
                    result +='    <input type="hidden" class="populate placeholder" name="'+data.detail[i].id+'" id="'+data.detail[i].id+'" >';
                    result +='    <input type="hidden" name="'+data.detail[i].id+'_hidden" id="'+data.detail[i].id+'_hidden" >';
                    result +='  </div>';
                }
            }    

                result +='  <div class="col-md-2">';
                result +='    &nbsp;';
                result +='  </div>';
                result +='  <div class="col-md-2">';
                result +='    <button id="bttambah" name="bttambah" type="button" class="btn btn-primary btn-block btRinci" onclick="addRinci()">Tambah</button>';
                result +='  </div>';
                result +='</div>';


            // $('#formfilter').html(result);
            for (i = 0; i <= data.detail.length-1; i++) {

                if(data.detail[i].type=='autocomplete'){
                        var comboapi=data.detail[i].comboapi;
                        var param1 =data.detail[i].param1;
                        var param2 =data.detail[i].param2;

                        $('#'+data.detail[i].id)
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
                                    if(param1 !=''){
                                        // var vskpd=document.getElementById(param1).value;
                                    }else{
                                        var vskpd='';
                                    }                                    

                                    if(param2 !=''){
                                        // var vkeg=document.getElementById(param2).value;
                                    }else{
                                        var vkeg='';
                                    }                                    


                                    var vkeg='';
                                    var vskpd='';
                                    return {
                                        kode1 :vskpd,
                                        kode2 :vkeg,                                        

                                        term: term, //search term
                                        page_limit: 10 // page size
                                    };                                        
                                    // return {
                                    //     term: term, //search term
                                    //     page_limit: 10 // page size
                                    // };
                                },
                                results: function (data, page) {
                                    return { results: data };
                                },
                            }
                        });
                }  
            }

        }
    });              
}


function newdata(){
    $('#saldorek').attr('value',0);
    $('#totallpj').attr('value',0);
    var modulx=document.getElementById('modul').value;
    idxDetail=1;
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
                    var fElementDet=data2.detail;

                    for (i = 0; i <= fElement.length-1; i++) {
                        if(fElement[i].type=='autocomplete'){
                            $("#"+fElement[i].id).select2("data", { id: '', text:''});
                        }else if(fElement[i].type!='kosong'){
                            document.getElementById(fElement[i].id).value='';                            
                        }
                    }


                    for (i = 0; i <= fElementDet.length-1; i++) {
                        if(fElementDet[i].type=='autocomplete'){
                            $("#"+fElementDet[i].id).select2("data", { id: '', text:''});
                        }else if(fElementDet[i].type!='kosong'){
                            document.getElementById(fElementDet[i].id).value='';                            
                        }
                    }


                    $.ajax({
                        type: "GET",
                        url: apiGrid+'detail',
                        dataType:"json",
                        success:function(data2){
                            $('#tData2').dataTable().fnDestroy();
                            getDetailRekening2(data2.kolom,apiData+'detail');
                            $('#tData2').dataTable().fnClearTable();
                        }
                    });


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


                    for (i = 0; i <= fElement.length-1; i++) {
                        if(fElement[i].type!='kosong'){
                            postData[fElement[i].id]=document.getElementById(fElement[i].id).value;
                        }
                        if(fElement[i].type=='autocomplete'){
                            postData[fElement[i].id+'_hidden']=document.getElementById(fElement[i].id+'_hidden').value;                            
                        }
                    }



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
    var cekNl=sumNilaiLpj();
    if(cekNl==0){
        return;
    }

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
                        if(fElement[i].type!='kosong'){
                            postData[fElement[i].id]=document.getElementById(fElement[i].id).value;
                        }
                        if(fElement[i].type=='autocomplete'){
                            postData[fElement[i].id+'_hidden']=document.getElementById(fElement[i].id+'_hidden').value;                            
                        }
                    }

                    var tabel=document.getElementById('tData2');
                    var nrow=tabel.rows.length;


                    if(idData==''){
                        var method='POST';
                        var apiUrl=apiData;

                        postData['rowcount']=idxDetail-1;                            
                        for (var i=1;i<nrow;i++) {

                            var idterima = tabel.rows[i].cells[1].childNodes[1].id;
                            var valpenerima = document.getElementById(idterima).value;
                            postData[idterima]=valpenerima;

                            var idurai = tabel.rows[i].cells[2].childNodes[1].id;
                            var valurai = document.getElementById(idurai).value;
                            postData[idurai]=valurai;

                            var idnilai = tabel.rows[i].cells[3].childNodes[0].id;
                            var valnilai = document.getElementById(idnilai).value;
                            postData[idnilai]=valnilai;
                        }

                    }else{
                        var method='PUT';
                        var apiUrl=apiData+'/'+idData;

                        var idxid=[];

                        for (var i=1;i<nrow;i++) {
                            var idterima = tabel.rows[i].cells[1].childNodes[1].id;
                            var valpenerima = document.getElementById(idterima).value;
                            postData[idterima]=valpenerima;

                            var idurai = tabel.rows[i].cells[2].childNodes[1].id;
                            var valurai = document.getElementById(idurai).value;
                            postData[idurai]=valurai;

                            var idnilai = tabel.rows[i].cells[3].childNodes[0].id;
                            var valnilai = document.getElementById(idnilai).value;
                            postData[idnilai]=valnilai;

                            idxid[i]=tabel.rows[i].cells[0].innerHTML;
                        }

                        postData['rowcount']=idxid;                            

                    }

                    // console.log(postData); 

                    $.ajax({
                        type: method,
                        url: apiUrl,
                        dataType:"json",
                        data:postData,
                        success:function(data3){

                            if(method=='PUT'){
                                alert('Data Update');
                            }else{
                                alert('Data Save');
                                newdata();
                            }
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


function getDetailRekening(kolom,apiData,key){
    // var vkdskpd=document.getElementById('kegskpd').value;
    // var vkdkeg =document.getElementById('kegkegiatan').value;
    // var vkdrek =document.getElementById('norekening').value;

    var vkey =document.getElementById(key).value;

    var table2=$('#tData2').DataTable({
        "sorting": [[ 0, "asc" ]],
        "dom": "<'box-content'<'col-sm-6 text-right'l><'clearfix'>>rt<'box-content'<'col-sm-6'i><'col-sm-6 text-right'p><'clearfix'>>",
        "paginationType": "bootstrap",
        "paging":   false,       
        "info"  :   false,
        "scrollY":  "250px",
        "scrollCollapse": true,        
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
                    "data" : ({key:vkey}),
                    "dataType" : "json",
                },
                        
        "columns": kolom,    

    });

    oTable=table2;

}


function getDetailRekening2(kolom,apiData){

    // var vnospd =document.getElementById('spdNo').value;

    var table2=$('#tData2').DataTable({
        "sorting": [[ 0, "asc" ]],
        "dom": "<'box-content'<'col-sm-6 text-right'l><'clearfix'>>rt<'box-content'<'col-sm-6'i><'col-sm-6 text-right'p><'clearfix'>>",
        "paginationType": "bootstrap",
        "paging":   false,       
        "info"  :   false,
        "scrollY":  "250px",
        "scrollCollapse": true,                
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
        "serverSide": false,
        // "ajax": {
        //             "url" : apiData,
        //             "data" : ({nospd:vnospd}),
        //             "dataType" : "json",
        //         },                        
        "columns": kolom,    

    });

    oTable=table2;

}




function delRinci(idDetail){
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

            if(confirm("Anda Akan Menghapus Data Ini?")){
                $.ajax({
                    type: 'DELETE',
                    url: apiData+'detail/'+idDetail,
                    dataType:"json",
                    success:function(data2){
                        var oTableToUpdate =  $('#tData2').dataTable( { bRetrieve : true } );
                            oTableToUpdate .fnDraw();                            
                    }
                });
            }
        }
    });      
}


function delRinciNew(idxDetail){
    $('[data-id='+idxDetail+']').parents('tr').remove();
}


function addRinci(){

    var modulx=document.getElementById('modul').value;
    $.ajax({
        type: "GET",
        url: "backend/public/api/admin/config/getapimenu",
        data:({modul:modulx}),
        async: false,
        dataType:"json",
        success:function(data){
            
            // console.log(data);
            var apiForm=data[0].apiLangForm;
            var apiGrid=data[0].apiLangGrid;
            var apiData=data[0].apiData;    

            $.ajax({
                type: "GET",
                url: apiForm,
                dataType:"json",
                async: false,
                success:function(data2){
                    // console.log(data2);
                    var postData=new Object();
                    var fElement=data2.form;
                    var fElementDet=data2.detail;

                    var idData =document.getElementById(fElement[0].id).value 



                    for (i = 0; i <= fElement.length-1; i++) {
                        
                        if(fElement[i].type!='kosong'){
                            postData[fElement[i].id]=document.getElementById(fElement[i].id).value;
                        }   

                        if(fElement[i].type=='autocomplete'){
                            postData[fElement[i].id+'_hidden']=document.getElementById(fElement[i].id+'_hidden').value;                            
                        }
                    }

                    for (i = 0; i <= fElementDet.length-1; i++) {
                        postData[fElementDet[i].id]=document.getElementById(fElementDet[i].id).value;
                        if(fElementDet[i].type=='autocomplete'){
                            postData[fElementDet[i].id+'_hidden']=document.getElementById(fElementDet[i].id+'_hidden').value;                            
                        }
                    }

                    var cterima=document.getElementById('lpjDetPenerima').value;
                    var curaian=document.getElementById('lpjDetUraian').value;
                    postData['lpjDetPenerima']=cterima;
                    postData['lpjDetUraian']  =curaian;
                                       

                    if(idData==''){

                            var result=new Object();
                                result["DetId"]="";
                                result["DetPenerima"]=cterima+"<input type='hidden' id='DetPenerima"+idxDetail+"' value='"+cterima+"'>";
                                result["DetUraian"]=curaian+"<input type='hidden' id='DetUraian"+idxDetail+"' value='"+curaian+"'>";
                                result["DetNilai"]="<input type='text' class='form-control' id='DetNilai"+idxDetail+"' value='0' style='text-align:right;width:100%' onkeypress='return(numbersonly(event))' onkeyup='sumNilaiLpj()' >";
                                result["DetAksi"]="<i class='fa fa-times-circle' data-id='"+idxDetail+"' onclick='delRinciNew("+idxDetail+")'></i>";
                            oTable.row.add(result).draw();    
                            idxDetail=idxDetail+1;

                            document.getElementById('lpjDetUraian').value='';
                            document.getElementById('lpjDetPenerima').value='';


                    }else{


                        var apiUrl=apiData+'detail';
                        var method='POST';

                        $.ajax({
                            type: method,
                            url: apiUrl,
                            dataType:"json",
                            data:postData,
                            success:function(data3){

                                document.getElementById('lpjDetUraian').value='';
                                document.getElementById('lpjDetPenerima').value='';

                                var oTableToUpdate =  $('#tData2').dataTable( { bRetrieve : true } );
                                    oTableToUpdate .fnDraw();                            
                                    //console.log(data3);
                            }
                        });


                        for (i = 0; i <= fElementDet.length-1; i++) {
                            if(fElementDet[i].type=='autocomplete'){
                                $("#"+fElementDet[i].id).select2("data", { id: '', text:''});
                            }else{
                                document.getElementById(fElementDet[i].id).value='';                            
                            }
                        }


                    }

                }                
            });    
            
        }
    });
    
}

function cekSisaAng(nilai,nrow,status){
    // var nsisa=document.getElementById('DetSisa'+nrow).value;    
    // for(i=1;i<=10;i++){
    //     nsisa=nsisa.replace(",","");
    //     nilai=nilai.replace(",","");
    // }

    // if((Number(nilai)>Number(nsisa)) &&(status!=0)){
    //     alert('Sisa Anggaran Tidak Mencukupi');
    //     document.getElementById('DetNilai'+nrow).value=0;
    // }
}

function sumNilaiRek(rek){

    var noLpj=document.getElementById('lpjNo').value
    $.ajax({
        type: "GET",
        url: "backend/public/api/admin/transaksi/lpjgetnilaispprek",
        dataType:"json",
        data:({kdrek:rek,lpjNo:noLpj}),
        success:function(data){
                // console.log(data);
                $('#saldorek').attr('value',data.nilai)
        }
    });

}


function sumNilaiLpj(){

    var idData =document.getElementById('lpjId').value 

    if(idData==''){
        var tabel=document.getElementById('tData2');
        var nrow=tabel.rows.length;
        var total=0;
        for (var i=1;i<nrow;i++) {

            var idnilai = tabel.rows[i].cells[3].childNodes[0].id;
            var valnilai = document.getElementById(idnilai).value;

            for(j=1;j<=10;j++){
                valnilai=valnilai.replace(",","");
            }
            nl=parseInt(valnilai);
            total=total+nl;
        }
    }else{
        var tabel=document.getElementById('tData2');
        var nrow=tabel.rows.length;
        var total=0;
        for (var i=1;i<nrow;i++) {

            var idnilai = tabel.rows[i].cells[0].innerHTML;
            var valnilai = document.getElementById("DetNilai"+idnilai).value;
            // console.log(valnilai);
            for(j=1;j<=10;j++){
                valnilai=valnilai.replace(",","");
            }
            nl=parseInt(valnilai);
            total=total+nl;
        }        
    }

    $.ajax({
        type: "GET",
        url: "backend/public/api/admin/transaksi/formatangka",
        dataType:"json",
        data:({nilai:total}),
        async: false,
        success:function(data){
            $('#totallpj').attr('value',data.nilai);
        }
    });

    var tRek=document.getElementById('saldorek').value;
    var nlLpj=total;

    for(j=1;j<=10;j++){
        tRek=tRek.replace(",","");
    }
    var nlRek=parseInt(tRek);

    if(nlLpj>nlRek){
        alert('Jumlah LPJ Tidak Boleh Melebihi Nilai Saldo Rekening');
        // $('#btSave').attr('disabled',true);
        return 0;
    }else{
        return 1;
    }

}


function cetak(idx){
    alert(idx);
}