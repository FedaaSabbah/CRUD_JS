


var addBtn=document.getElementById('addBtn');

var editBtn=document.getElementById('EditBtn');

editBtn.style.display="none";

var productName=document.getElementById('productName');
var productCompany=document.getElementById('productCompany');
var productPrice=document.getElementById('productPrice');
var productDescription=document.getElementById('productDescription');
var inputs=document.getElementsByClassName('form-control');
var products;


productName.addEventListener('keyup',function(){
    regxeName=/^[A-Z][a-z]{2,7}$/;
    console.log(regxeName.test(productName.value));
});



if(localStorage.getItem("products")==null){
    products=[];
}
else
{
     products= JSON.parse(localStorage.getItem("products"));
     displayProd();
}
  

addBtn.onclick=function(){
   
    addPro();
    displayProd();
    resetForm();
}



function addPro(){
    var product={
        productName:productName.value,
        productCompany:productCompany.value,
        productPrice:productPrice.value,
        productDescription:productDescription.value,
    }
   
    products.push(product);
    localStorage.setItem("products", JSON.stringify( products)); 

}
function displayProd(){
    var trs="";
    for(var i=0;i<products.length;i++){
        trs+=`<tr>
        <td>`+products[i].productName+`</td>
        <td>`+products[i].productCompany+`</td>
        <td>`+products[i].productPrice+`</td>
        <td>`+products[i].productDescription+`</td>
        <td><button onclick='deleteProd(`+i+`)' class='btn btn-danger'>delete</button></td>
        <td><button onclick='updateProd(`+i+`)' class='btn btn-success'>edit</button> </td>
        </tr>`;
    }

    document.getElementById("tableBody").innerHTML=trs;
}

function resetForm(){
    for(var i=0;i<inputs.length;i++){
    inputs[i].value="";
    }    
}

function deleteProd(t){
    products.splice(t,1);
    localStorage.setItem("products", JSON.stringify( products));
    displayProd();
}




function search (s){
    var trs="";
    for(var i=0;i<products.length;i++){
        if(products[i].productName.toLowerCase().includes(s.toLowerCase()))
        {

        trs+=`<tr>
        <td>`+products[i].productName+`</td>
        <td>`+products[i].productCompany+`</td>
        <td>`+products[i].productPrice+`</td>
        <td>`+products[i].productDescription+`</td>
        <td><button onclick='deleteProd(`+i+`)' class='btn btn-danger'>delete</button></td>
        <td><button onclick='updateProd(`+i+`)' class='btn btn-success'>edit</button> </td>
        </tr>`;
    }
    }
    document.getElementById("tableBody").innerHTML=trs;
    }




var local_i;
function updateProd(i){    
    local_i=i;
     addBtn.style.display="none";
    editBtn.style.display="block";
     document.getElementById('productName').value=products[i].productName;
     document.getElementById('productCompany').value=products[i].productCompany;
     document.getElementById('productPrice').value=products[i].productPrice;
     document.getElementById('productDescription').value=products[i].productDescription;
}

editBtn.onclick=function(){
    editpro();
    displayProd();
    resetForm();
}

function editpro(){
    var product={
        productName:productName.value,
        productCompany:productCompany.value,
        productPrice:productPrice.value,
        productDescription:productDescription.value,
    }
    products.splice(local_i,1,product);
    addBtn.style.display="block";
    editBtn.style.display="none";
}







