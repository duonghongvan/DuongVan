function dathang(item){
    debugger;
    item.soluong=1;
    console.log(item.soluong);
    var list;
    if(localStorage.getItem('datmon')==null){
        list=[item];
    }else{
        list=JSON.parse(localStorage.getItem('datmon')) || [];
        let ok=true;
        for(let x of list){
            if(x.id==item.id){
                x.soluong+=1;
                ok=false;
                break;
            }
        }
        if(ok){
            list.push(item);
        }
    }
    localStorage.setItem('datmon',JSON.stringify(list));
    location.reload();
    alert('Đã thêm món ăn thành công');
}

var list_gh=JSON.parse(localStorage.getItem('datmon'));
var str='';
$(document).ready(function(){
    loaddata();
    loadgiohang();
})
function loaddata(){
    var t=0;
    for(x of list_gh){
        t+=x.soluong*x.price;
        str+=`<div class="item-cart">
            <div class="content-left">
                <div class="img col-3">
                    <img src="`+x.img+`" alt="`+x.name+`">
                    <p class="title">`+x.name+`</p>
                    <p class="dia-chi">
                        <strong>`+x.dia_chi+`</strong><br/>
                        
                    </p>
                    <p class="price-item">
                        <strong class="item-price">`+x.price+` ₫</strong>
                        <strike>`+x.price_s+` ₫</strike>
                    </p>
                    <div class="number">
                        <label>Số lượng</label>
                        <div class="control">
                            <input onclick="Giam(`+ x.id + `)" class="btn-sub" type="button" value="-" />
                            <input class="txt-quality" id="q_`+ Number(x.id)+`" onchange="updateQuantity(`+ x.id + `)" type="text" value="`+x.soluong+`" />
                            <input class="btn-plus" onclick="Tang(`+ x.id + `)" type="button" value="+" />
                        </div>
                    </div>
                </div>
                <div class="edit">
                    <a href="#" class="red" onclick="Xoa(`+ x.id + `)">
                        <span>-</span>
                    </a>
                </div>
                <div class="info col-8">
                    <div class="nd_km"></div>
                    <div class="chon">
                        
                </div>
                
            </div>	
        </div>`
    }
    console.log(str);
    $('.san_p').html(str);
    $('.tien').text(t);
}
function Xoa(id) {
    var index = list_gh.findIndex(x => x.id == id);
    if (index >= 0) {
        list_gh.splice(index, 1);
    }
    updateCart();
    location.reload();
}
function updateCart() {
    localStorage.setItem('datmon', JSON.stringify(list_gh));
}
function Tang(id) {
    var index = list_gh.findIndex(x => x.id == id);
    if (index >= 0) {
        list_gh[index].soluong += 1; 
    }
    updateCart();
    location.reload();
}
function Giam(id) {
    var index = list_gh.findIndex(x => x.id == id);
    if (index >= 0 && list_gh[index].soluong >=1) {
        list_gh[index].soluong -= 1; 
    }
    updateCart();
    location.reload();
}
function updateQuantity(id) {
    var quantity = Number($('#q_'+id).val());
    var index = list_gh.findIndex(x => x.id == id);
    if (index >= 0 && list_gh[index].soluong >=1) {
        list_gh[index].soluong = soluong; 
    }
    updateCart();
}
function loadgiohang(){
    var n=0;
    for (x of list_gh){
        n+=x.soluong
    }
    $(document).find('#item').text(n);
}
function dathangtc(){
    alert('Đặt hàng thành công');
}