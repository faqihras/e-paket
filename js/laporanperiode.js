function LoadMorrisScripts(callback){
    function LoadMorrisScript(){
        if(!$.fn.Morris){
            $.getScriPencarianpakett('plugins/morris/morris.min.js', callback);
        }
        else {
            if (callback && typeof(callback) === "function") {
                callback();
            }
        }
    }
    if (!$.fn.raphael){
        $.getScript('plugins/raphael/raphael-min.js', LoadMorrisScript);
    }
    else {
        LoadMorrisScript();
    }
}



function setAutocompleteVal(comboapi,kodecombo,nmfield){
    $.ajax({
        type: "GET",
        url: comboapi,
        data:({kode:kodecombo}), 
        dataType:"json",
        success:function(data3){
            $("#"+nmfield).select2("data", { id: kodecombo, text:data3[0].text});
        }
    });    
}



function loadLaporan(){

    var modulx=document.getElementById('modul').value;

    var tgawalx=document.getElementById('tgawal').value;
    var tgahirx=document.getElementById('tgahir').value;

    var paketJenis=document.getElementById('jenis').value;                            

    var postData=new Object();
        postData['tgawal']=tgawalx;
        postData['tgahir']=tgahirx;
        postData['jenis']=paketJenis;
        postData['x']=1;
        
    if(tgawalx=='' || tgahirx==''){
        alert('Periode Laporan Masih Kosong');
        return;
    }
 
    $.ajax({
        type: "GET",
        url: "backend/public/api/admin/config/getapimenu",
        data:({modul:modulx,tgawal:tgawalx,tgahir:tgahirx}),
        dataType:"json",
        async:false,
        success:function(data){
            // console.log(data);
            apiData=data[0].apiData;
            apiGrid=data[0].apiLangGrid;
            $("#linkpdf").attr("value",data[0].apiPdf);
        }
    });      


    var res='<table class="table table-bordered table-striped table-hover table-heading table-datatable" id="tabelData" name="tabelData">';
    var kolm=[];
    var lgn =[];
    var label=[];
    $.ajax({
        type: "GET",
        url: apiGrid,
        dataType:"json",
        async:false,
        success:function(data){

            var rx=0;
            for(i=0;i<=data.kolom.length-1;i++){
                if(data.kolom[i].rowspan!=0){
                   if(data.kolom[i].rowspan>rx){
                        rx=data.kolom[i].rowspan;
                   }
                }
            }    
        var kdbrg=document.getElementById('filterbarang').value;
        var nmbarang=document.getElementById('filterbarang_hidden').value;  
        //tampilan kode brg, nama brg, harga beli, harga beli ppn diatas tabel
       

            res +='<thead>';
            res +='  <tr>';     

            if(rx>0){
                res +='    <th width="3%" rowspan="2">NO</th>';
            }else{
                res +='    <th width="3%" >NO</th>';                
            }
            for(i=0;i<=data.kolom.length-1;i++){

                var rowspan='';
                if(data.kolom[i].rowspan!=0){
                    rowspan='rowspan="'+data.kolom[i].rowspan+'"';
                }

                var colspan='';
                if(data.kolom[i].colspan!=0){
                    colspan='colspan="'+data.kolom[i].colspan+'"';
                }else{
                    kolm.push(data.kolom[i].data);                
                    lgn.push(data.kolom[i].align);   
                    label.push(data.kolom[i].title);   
                }

                res +='<th width="'+data.kolom[i].width+'" '+rowspan+' '+colspan+'>'+data.kolom[i].title+'</th>';
            }
            res +='  </tr>';

            if(rx>0){
                res +='  <tr>';            
                for(i=0;i<=data.kolom2.length-1;i++){

                    var rowspan='';
                    if(data.kolom2[i].rowspan!=0){
                        rowspan='rowspan="'+data.kolom2[i].rowspan+'"';
                    }

                    if(data.kolom2[i].colspan!=0){
                        colspan='colspan="'+data.kolom2[i].colspan+'"';                        
                    }else{
                        var colspan='';
                        kolm.push(data.kolom2[i].data);                
                        lgn.push(data.kolom2[i].align);
                        label.push(data.kolom2[i].title);   
                    }

                    res +='<th width="'+data.kolom2[i].width+'" '+rowspan+' '+colspan+'>'+data.kolom2[i].title+'</th>';
                }
                res +='  </tr>';
            }


            res +='</thead>';
            res +='<tbody>';

        }
    });


    $.ajax({
        type: "GET",
        url: apiData,
        dataType:"json",
        // data:({unit:unitx,tgawal:tgawalx,tgahir:tgahirx}),
        data:postData,
        async:false,
        success:function(data){

            for(i=0;i<=data.length-1;i++){
                res +='  <tr>';
                res +='<td>'+(i+1)+'</td>';

                for(j=0;j<=kolm.length-1;j++){
                    var cell='data[i].'+kolm[j];
                    var style='style="text-align:'+lgn[j]+'"';
                    res +='<td '+style+'>'+eval(cell)+'</td>';
                }
                res +='  </tr>';
            }
        }
    });
    res +='</tbody>';
    res +='</table>';
    $('#tData').html(res);


    $('#tabelData').DataTable({
        "sorting": [[ 0, "asc" ]],
        "dom": "<'box-content'<'col-sm-6'f><'col-sm-6 text-right'l><'clearfix'>>rt<'box-content'<'col-sm-6'i><'col-sm-6 text-right'p><'clearfix'>>",
        "paginationType": "bootstrap",
        "paging":   false,       
        "bSort" : false,
        "info"  :   true,
        "language": {
                        "lengthMenu": "",
                        "zeroRecords": "No records available",
                        "info": "Jumlah Paket _TOTAL_",
                        "infoEmpty": "No records available",
                        "infoFiltered": "(filtered from _MAX_ total records)",
                        "search": "SEARCH :  ",
                        "paginate": {"next": "","previous": ""}
        },
        "processing": true,
        "serverSide": false,
        "footer": true,

    });



}


function loadLaporan2(){

    var modulx=document.getElementById('modul').value;

    var tgawalx=document.getElementById('tgawal2').value;
    var tgahirx=document.getElementById('tgahir2').value;
    var rawatPoli=document.getElementById('filterpoli').value;                            

    var postData=new Object();
        postData['tgawal2']=tgawalx;
        postData['tgahir2']=tgahirx;
        postData['rawatPoli']=rawatPoli;
        postData['x']=2;
               
    if(tgawalx=='' || tgahirx==''){
        alert('Periode Laporan Masih Kosong');
        return;
    }
 
    $.ajax({
        type: "GET",
        url: "backend/public/api/admin/config/getapimenu",
        data:({modul:modulx,tgawal2:tgawalx,tgahir2:tgahirx}),
        dataType:"json",
        async:false,
        success:function(data){
            // console.log(data);
            apiData=data[0].apiData;
            apiGrid=data[0].apiLangGrid;
            $("#linkpdf").attr("value",data[0].apiPdf);
        }
    });      

    var res='<table class="table table-bordered table-striped table-hover table-heading table-datatable" id="tabelData" name="tabelData">';
    var kolm=[];
    var lgn =[];
    var label=[];
    $.ajax({
        type: "GET",
        url: apiGrid,
        dataType:"json",
        async:false,
        success:function(data){

            var rx=0;
            for(i=0;i<=data.kolom.length-1;i++){
                if(data.kolom[i].rowspan!=0){
                   if(data.kolom[i].rowspan>rx){
                        rx=data.kolom[i].rowspan;
                   }
                }
            }    
        var kdbrg=document.getElementById('filterpoli').value;
        var nmbarang=document.getElementById('filterpoli_hidden').value;  
        //tampilan kode brg, nama brg, harga beli, harga beli ppn diatas tabel
       

            res +='<thead>';
            res +='  <tr>';     

            if(rx>0){
                res +='    <th width="3%" rowspan="2">NO</th>';
            }else{
                res +='    <th width="3%" >NO</th>';                
            }
            for(i=0;i<=data.kolom.length-1;i++){

                var rowspan='';
                if(data.kolom[i].rowspan!=0){
                    rowspan='rowspan="'+data.kolom[i].rowspan+'"';
                }

                var colspan='';
                if(data.kolom[i].colspan!=0){
                    colspan='colspan="'+data.kolom[i].colspan+'"';
                }else{
                    kolm.push(data.kolom[i].data);                
                    lgn.push(data.kolom[i].align);   
                    label.push(data.kolom[i].title);   
                }

                res +='<th width="'+data.kolom[i].width+'" '+rowspan+' '+colspan+'>'+data.kolom[i].title+'</th>';
            }
            res +='  </tr>';

            if(rx>0){
                res +='  <tr>';            
                for(i=0;i<=data.kolom2.length-1;i++){

                    var rowspan='';
                    if(data.kolom2[i].rowspan!=0){
                        rowspan='rowspan="'+data.kolom2[i].rowspan+'"';
                    }

                    if(data.kolom2[i].colspan!=0){
                        colspan='colspan="'+data.kolom2[i].colspan+'"';                        
                    }else{
                        var colspan='';
                        kolm.push(data.kolom2[i].data);                
                        lgn.push(data.kolom2[i].align);
                        label.push(data.kolom2[i].title);   
                    }

                    res +='<th width="'+data.kolom2[i].width+'" '+rowspan+' '+colspan+'>'+data.kolom2[i].title+'</th>';
                }
                res +='  </tr>';
            }


            res +='</thead>';
            res +='<tbody>';

        }
    });


    $.ajax({
        type: "GET",
        url: apiData,
        dataType:"json",
        // data:({unit:unitx,tgawal:tgawalx,tgahir:tgahirx}),
        data:postData,
        async:false,
        success:function(data){

            for(i=0;i<=data.length-1;i++){
                res +='  <tr>';
                res +='<td>'+(i+1)+'</td>';

                for(j=0;j<=kolm.length-1;j++){
                    var cell='data[i].'+kolm[j];
                    var style='style="text-align:'+lgn[j]+'"';
                    res +='<td '+style+'>'+eval(cell)+'</td>';
                }
                res +='  </tr>';
            }
        }
    });
    res +='</tbody>';
    res +='</table>';
    $('#tData').html(res);


    $('#tabelData').DataTable({
        "sorting": [[ 0, "asc" ]],
        "dom": "<'box-content'<'col-sm-6'f><'col-sm-6 text-right'l><'clearfix'>>rt<'box-content'<'col-sm-6'i><'col-sm-6 text-right'p><'clearfix'>>",
        "paginationType": "bootstrap",
        "paging":   false,       
        "bSort" : false,
        "info"  :   true,
        "language": {
                        "zeroRecords": "No records available",
                        // "info": "Page _PAGE_ of _PAGES_",
                        "info": "",
                        "infoEmpty": "No records available",
                        "infoFiltered": "(filtered from _MAX_ total records)",
                        "search": "SEARCH :  ",
                        "paginate": {"next": "","previous": ""}
        },
        "processing": true,
        "serverSide": false,
        "footer": true,

    });



}


function cetakDetailPaket(idpaket){

    if(idpaket==''){
        return;
    }
    
    var param='?id='+idpaket;
    var url="backend/public/api/admin/ulp/cetakdetailpaket";                    
    window.open(url+param, '_blank');
}

function cetakPdf(){

    var link=document.getElementById('linkpdf').value;
    var tahunx=document.getElementById('filterTahun').value;
    var danax=document.getElementById('filterDana').value;
    var dasarx=document.getElementById('filterDasar').value;

    var param='?th='+tahunx+'&dn='+danax+'&ds='+dasarx;
    window.open(link+param, '_blank');

}

function addBarang(){
    var rawatJenis=document.getElementById('filterbarang').value;                            
    var nmbarang=document.getElementById('filterbarang_hidden').value;                            
    if(rawatJenis=='') return;

    var idxBarang=parseInt(document.getElementById('idxBarang').value); 

    var item=document.getElementById('itembarang').innerHTML;
        item +='<input type="hidden" name="idxBarang'+idxBarang+'" id="idxBarang'+idxBarang+'" value="'+rawatJenis+'">'+nmbarang+', ';
        idxBarang +=1;

    document.getElementById('idxBarang').value=idxBarang; 
    $('#itembarang').html(item);

}







