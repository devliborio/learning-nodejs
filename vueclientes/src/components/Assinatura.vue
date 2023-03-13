<template>
    
    <div id="sign">
        <h3>Planos de Assinatura</h3>

        <p>Assinatura: {{titleD}}</p>
        <p>Por apenas: <span class="price_item"> R$ {{priceD}} </span> de forma {{type}}</p>
        
        <hr>

        <p>Assinatura: {{titleN}}</p>
        <p>Por apenas: <span class="price_item"> R$ {{priceN}} </span> de forma {{type}}</p>
    </div>

</template>

<script>
export default {

    data(){

        return{

            titleD: 'Disney+',
            titleN: 'Netflix',
            priceD: 60.00,
            priceN: 49.90,
            type: 'mensal',
        }
    }

}
</script>

<style scoped>

    .price_item{
        font-weight: bold;
    }

    #sign{
        font-family: sans-serif;
        padding: 1%;
    }

</style>
