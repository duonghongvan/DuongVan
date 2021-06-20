$(document).ready(function(){
    $('.icon_search').on('click',function(){
        var value=$('#search').val().toLowerCase();
        var data= [];
        var d=0;
        var p=20;
        var content='';
        for(var i=0;i<p;i++){
            $('#'+i).filter(function(){
                if($('#'+i+' .name-res').text().toLowerCase().indexOf(value)>-1){
                    var img= $('#'+i).find('.anh_sp').attr('src');
                    var name=$('#'+i).find('.name-res').text();
                    var diachi=$('#'+i).find('.dc-res').text();
                    var id=i;
                    var order={
                        'id':id,
                        'img':img,
                        'name':name,
                        'diachi':diachi
                    }
                    $(data[d]=order);
                    d++;
                    
                }
            });
           
        }
        
        if(data.length>0){
            for(var i=0;i<data.length;i++){
                var cartitem=`
                <div id="${data[i].id}" class="sp">
                    <a href="bunsuon.html">
                        <div class="anh-3"><img src="${data[i].img}"></div>
                        <div class="name"> 
                            <h4 class="name-res" title="${data[i].name}">${data[i].name}</h4>
                            <div class="dc-res" title="${data[i].diachi}">${data[i].diachi}</div>
                        </div>                          
                        <span><img src="https://img.icons8.com/color/16/000000/sale--v1.png"/>Giảm hết 10%</span>
                    </a>
                </div> `
                content+=cartitem;
            }
        }
        else{
            content+='<h1>Không tìm thấy sản phẩm</h1>'
        }
        console.log(content);
        $('#show').html(content);
        document.getElementById('tk-show').style.display='block';
        document.getElementById('sanpham').style.display='none';
    });
});
   
// $(document).ready(function(){
//     $(".icon").on("click", function() {
//       var value = $(".fa fa-search").val().toLowerCase();
//       var data = []; 
//       var content ="<h5>Sản phẩm muốn tìm</h5>";
//       var s = 0; 
//       var l = 11;
//       for(var i =0; i<l;i++) {
//         $("#"+i+"").filter(function() {
//         if($("#"+i+" .name-res").text().toLowerCase().indexOf(value) > -1){
//             var imglink = $("#"+i+"").find('.anh-3').attr('src');
//             var productName = $("#"+i+"").find('.name-res').text();
//             var adress = $("#"+i+"").find('.dc-res').text();
//             var order = {
//             'imglink':imglink,
//             'name':productName,
//             'adress':adress
//             }
//             $(data[s] = order);
//             s++;
//         }
//         }); 
//         }
//         if(data.length>0)
//         {
//         for(let i = 0; i < data.length; i++){
//             var cartItem =`
//             <div class="sp" style="margin-right: 0px;">
//                 <a href="#">
//                     <div class="anh-3"><img src="${data[i].imglink}"></div>
//                     <div class="name"> 
//                     <h4 class="name-res" title="Phở Bà Hồng">${data[i].name}</h4>
//                     <div class="dc-res" title="173 Nguyễn Bỉnh Kiêm, Trâu Quỳ, Gia Lâm, Hà Nội">${data[i].adress}</div>
//                     </div>                          
//                     <span><img src="https://img.icons8.com/color/16/000000/sale--v1.png"/>Giảm hết 10%</span>
//                     </a>
//             </div>`
//         content += cartItem;
//         }
//     }
//     else {
//         content +="<h3>Không tìm thấy sản phẩm nào";
//     }
//         console.log(content);
//         $(".lt-sp").html(content);
//         document.getElementById("main").style.display = "none";
//     });
//   });
// $(document).ready(function(){
//     $("#btn-sort").on("click", function(){
//     var s = 0; 
//     var l = 11;
//     var data = []; 
//     var content ="";
//     for(var i =0; i<l;i++) {
//     $("#"+i+"").filter(function() {
//         var imglink = $("#"+i+"").find('.product-img').attr('src');
//         var productName = $("#"+i+"").find('.product-name').text();
//         var a = $("#"+i+"").find('.product-price').text();
//         var price = UpdatePrice(a);
//         var order = {
//             'imglink':imglink,
//             'name':productName,
//             'price':price
//         }
//         $(data[s] = order);
//         s++;
//         })}
//     var product = data[0];
//     data.sort(function(a,b){
//         return a.price - b.price;
//     });
//     for(var i =0; i<l;i++)
//     {
//         var cartItem =`
//             <div class="col-3 col-m-4 col-s-6">
//             <div id="0" class="product">
//                 <img class="product-img" src="${data[i].imglink}" />
//                 <label class="product-name">${data[i].name}</label><br />
//                 <label><s>50.000 đ</s></label><label class="product-price">${data[i].price}</label>
//                 <input class="btn-buy" type="button" value="ĐẶT MUA" />
//                 <input class="btn-view" type="button" value="CHI TIẾT" />
//             </div>
//         </div>`
//         content += cartItem;
       
//     } 
//     $("#search-re").html(content);
//     document.getElementById("main").style.display = "none";
//     })
// });