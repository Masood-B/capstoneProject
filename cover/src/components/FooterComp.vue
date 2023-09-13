<template>
    <div class="footer">
        <div class="container">
        <div >
            <hr>
        </div>
        <div>
            <a href="https://www.linkedin.com/in/masood-basardien-6aa759282/" target="_blank"><i class="bi bi-linkedin ff"></i></a> <a href="https://github.com/Masood-B?tab=repositories" target="_blank"><i class="bi bi-github ff"></i></a>
        </div>
        <p class="copyRight">CopyRight &copy; {{ cYear }} </p>
    </div>
    </div>
</template>

<script>
   export default {
  data() {
    return {
      cYear: new Date().getUTCFullYear(),
    };
  },
};
</script>

<style scope>
.ff{
    font-size: 2rem;
    color: white;
}
.copyRight{
    color: white;
}
hr{
   background:white;
    height: .2rem;
}
.footer{
    background: rgb(56, 97, 99);
}

</style>