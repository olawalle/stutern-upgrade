<template>
    <div class="app" id="app">
        <form 
            id="loginForm"
            name="cpay"
            method="POST"
            action="https://staging.nibss-plc.com.ng/CentralPayPlus/pay">
            <input name="merchant_id" :value="payload.merchant_id" />
            <input name="product_id" :value="payload.product_id" />
            <input name="product_description" :value="payload.product_description" />
            <input name="customer_id" :value="payload.customer_id" />
            <input name="amount" :value="payload.amount" />
            <input name="currency" :value="payload.currency" />
            <input name="transaction_id" :value="payload.transaction_id" />
            <input name="response_url" :value="response_url" />
            <input name="hash" :value="payload.hash" />
        </form>
    </div>
</template>

<script>
    export default {
        data () {
            return {
                message: 'Hello Vue!',
                response_url: "http://csp-mobile.surge.sh/fund-accunt/#/",
                payload: {
                    merchant_id: "fres",
                    product_id: "",
                    product_description: "",
                    customer_id: "",
                    amount: "",
                    currency: "",
                    transaction_id: "",
                    hash: "",
                }
            }
        },
        mounted () {
            let obj = {}
            let queries = window.location.href.split('?')[1].split('&')
            queries.forEach(qur => {
                obj[qur.split("=")[0]] = qur.split("=")[1]
            })
            this.payload = obj
            setTimeout(() => {
                let form = document.getElementById('loginForm').submit()
            }, 100)
        }   
    }
</script>

<style>
    .app {
        padding: 300px;
    }
</style>
