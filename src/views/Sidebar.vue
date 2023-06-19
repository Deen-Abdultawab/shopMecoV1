<template>
  <div class="relative flex min-h-screen">
  <!-- sidebar -->
  <div class="bg-bermuda w-[276px] items-center flex flex-col " >
    <div class="logo mt-10">
        <a href="/"><img src="../assets/images/Mask group.png" alt=""></a>
      </div>
      <nav class="flex flex-col items-center  justify-between come">
      <div>
          <a href="/Sidebar" class="home">
        <img src="../assets/images/dashboard.png" alt="" >
      </a>
      <a href="/Sidebar/booking">
        <img src="../assets/images/booking.png" alt="" >
      </a>
      <a href="/Sidebar/Services"><img src="../assets/images/services.png" alt="" ></a>
      <a href="/Sidebar/Messages"><img src="../assets/images/messages.png" alt=""></a>
      </div>

      <div class="justify-end">
        
        <a href="/Sidebar/Messages"><img src="../assets/images/settings2.png" alt=""></a>
        <a href="/Sidebar/Services"><img src="../assets/images/Logout2.png" alt="" ></a>
      
      </div>
      
      </nav>
  </div>
  <!-- main content -->
 
  
 
  <!-- header -->
  
  
  
 
   <nuxt-child />
   </div>
  
</template>

<script>
export default {

}
</script>

<style>

.home{
  width: 174px;
  height: 34px;
  background: #F5F3FF;
  border-radius: 6px;
  display: flex;
  align-items: center;
  padding-left: 10px;
}

a:hover {
  width: 174px;
  height: 34px;
  background: #F5F3FF;
  border-radius: 6px;
  display: flex;
  align-items: center;
  padding-left: 10px;
}
.come{
    height: 50em;
    margin-top: 3em;
}


</style>