document.getElementById('place-order').addEventListener('click',function(){

   const takeOrder=document.getElementById('take-order');
   const newOrderstring=takeOrder.value;
   const newOrder=parseFloat(newOrderstring)
   // console.log(typeof newOrder)
   // console.log(newOrder);
   const kalaJam=document.getElementById('kala-jam');
   const preKalajamstring=kalaJam.innerText;
   const prekalajam=parseFloat(preKalajamstring);
   const totalkalajamstring= prekalajam+newOrder;
   const totalkalajam =parseFloat(totalkalajamstring);
   kalaJam.innerText=totalkalajam;

   const sobMisty=document.getElementById('sob-misty');
   const sobMistystring=sobMisty.innerText;
   const presoblMisty=parseFloat(sobMistystring);

   const totalMisty=presoblMisty- totalkalajam;
   sobMisty.innerText=totalMisty;
   takeOrder.value=''

})
 document.getElementById('store-house').addEventListener('click',function(){
         const newStore=document.getElementById('new-Store');
         const storestring=newStore.value;
         const store=parseFloat(storestring);


         const arrivalHouse=document.getElementById('arivel-Box')
         const arrivalstring=arrivalHouse.innerText;
         const arrival=parseFloat(arrivalstring);
         const totalArrival= store + arrival;
         arrivalHouse.innerText=totalArrival;

         const allMisty=document.getElementById('sob-misty');
         const preallMistystring = allMisty.innerText;
         const preallMisty=parseFloat(preallMistystring);
         const allArival= preallMisty + totalArrival;
         allMisty.innerText=allArival;
         

         newStore.value=''
         
 })