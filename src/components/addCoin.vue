<template>
<div data-app class="container">
    <v-row justify="center">
        <v-dialog v-model="dialog" persistent max-width="280" dark>
            <template v-slot:activator="{ on, attrs }">
                <v-row class="pb-2  pt-0 " color="#015b64" dark >
                    <!-- <v-spacer></v-spacer> -->
                    <v-col cols="8" class="ml-1">
                        <v-text-field class="p-1 mb-2  ml-1 mr-0" v-model="search" append-icon="mdi-magnify" label="Search" border rounded-pill single-line hide-details></v-text-field>
                    </v-col>
                    <v-col cols="3">
                        <v-btn dark v-bind="attrs" v-on="on" class="btn btn-success  mt-3" outlined rounded small>
                            <v-icon>mdi-plus</v-icon>เหรียญ
                        </v-btn>
                    </v-col>
                </v-row>
            </template>
            <v-card>
                <v-card-title>
                    <span class="text-h5">เพิ่มเหรียญ</span>
                </v-card-title>
                <v-card-text class="pb-0">
                    <v-container>
                        <v-row>
                            <v-col cols="12" sm="12" md="12"  class="pb-0 pt-0">
                                <v-form>
                                    <!-- <v-select v-model="buysell" :items="['Buy', 'Sell']" label="Buy/Sell*" required></v-select> -->
                                    <v-select v-model="name_coins" :items="tickets" item-text="symbol" item-value="symbol" label="Add Coin" required></v-select>
                                    <!-- <v-text-field v-model="entry" label="ราคาเข้าซื้อ / เหรียญ*" hint="( 900,000/BTC )" required></v-text-field>
                                    <v-text-field v-model="total" label="จำนวนเงิน" hint="" required></v-text-field>
                                    <v-text-field v-model="tax" label="ภาษี*" required></v-text-field>
                                    <v-text-field v-model="num" label="จำนวนเหรียญ*" hint="" persistent-hint></v-text-field>
                                    <input v-model="da" type="datetime-local" label="วันที่,เวลา*" name="datetime"> -->
                                </v-form>
                            </v-col>
                        </v-row>
                    </v-container>
                </v-card-text>
                <v-card-actions class="">
                    <v-spacer></v-spacer>
                    <v-btn color="blue darken-1" text @click="dialog = false">
                        Close
                    </v-btn>
                    <v-btn color="blue darken-1" text @click.prevent="insert" @click="dialog = false">
                        ADD
                    </v-btn>
                </v-card-actions>
            </v-card>
        </v-dialog>
    </v-row>
</div>
</template>

<script>
/* eslint-disable */
import axios from 'axios'
export default {
    name: 'addCoin',
    data: function () {
        return {
            dialog: false,
            name_coins: '',
            ID: '',
            search: '',
            tickets: [],
            
            type_api: '',
            danger: false,
            danger1: false,
            alt_txt: '',

        }
    },
    mounted() {
        axios.get('https://api.bitkub.com/api/market/symbols')
            .then((a) => {
                this.tickets = a.data.result
                // console.log(a.data.result)
            })
    },
    async created() {
        
    },
    methods: {
        async insert() {
            if (
                this.name_coins == '' 
            ) {
                this.danger = true;
                this.alt_txt = 'กรุณาเลือกเหรียญ'
            } else {
                let insert_coin = {
                    name_coins: this.name_coins,
                }
                console.log(insert_coin)
                let res = await fetch('http://localhost:7000/insert_coin?name_coins=' + this.name_coins, {
                    method: 'post',
                    headers: {
                        'content-type': 'application/json',
                    },
                    body: JSON.stringify(insert_coin),
                })
                let data = await res.json()
                console.log('data', data.status)
                if (data.status == 0) {
                    this.type_api = 'success';
                    this.danger1 = true;
                    this.alt_txt = 'เพิ่มเหรียญสำเร็จ'
                    this.name_coins = ''
                    setInterval(() => {
                        // this.$router.push({ name: "login"})
                        this.$router.push('/home').catch(err => {})
                    }, 3000)
                }
                if (data.status == 1) {
                    this.type_api = 'error';
                    this.danger = true;
                    this.alt_txt = 'gg'
                    this.name_coins = ''
                    setInterval(() => {
                        // this.$router.push({ name: "login"})
                        this.$router.push('/home').catch(err => {})
                    }, 3000)
                }
            }
        },
    },
}
</script>
