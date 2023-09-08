<template>
    <div>
        <button class="btn" id="productSort" @click="sortSProducts()">sort</button>
    </div>
</template>

<script>
    export default {
         methods: {
                sortSProducts(){
                this.cat  = !this.cat
                this.products.sort((a, b) =>{
                const bee = a.prodName.toLowerCase();
                const dog = b.prodName.toLowerCase();
                
                if (bee < dog){
                return this.cat ? -1: 1 ;
                }else if (bee > dog) {
                return this.cat ? 1: -1 ;
                }else{
                 return 0 
                }
                })
                },
                // sortProducts(){
                //     this.$store.commit("sortTheProducts")
                // }
                
            },
    }
</script>

<style scoped>

</style>