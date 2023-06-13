document.getElementById('button-handeler').addEventListener("click",function(){
   //  console.log("button clicked")

   const shopId=document.getElementById('shop-no');
   const shopNo=shopId.value;

   const selesManId=document.getElementById("seleseman-id");
   const selesId=selesManId.value;

   const selesmanPassword=document.getElementById('selesman-password');
   const selespassword= selesmanPassword.value;

   if( shopNo=== '10' && selesId==='105060' && selespassword==='login' ){
      window.location.href='selesdetails.html'
   }
   else{
      console.log("invalide user")
   }

})