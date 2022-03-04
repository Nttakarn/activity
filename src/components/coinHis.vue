<template>
<div class="aaa" data-app>
    <v-card dark max-width="400" class="mx-auto" max-height="600">

        <v-app-bar dark color="pink">
            <router-link :to="{ name: 'home' }">
                <v-btn icon class="pr-2">
                    <v-icon>mdi-arrow-left</v-icon>
                </v-btn>
                <v-spacer></v-spacer>
            </router-link>
            <v-toolbar-title class=""> {{this.$route.params.name_coin}} // {{this.$route.params.ID}}</v-toolbar-title>
        </v-app-bar>
        <v-container>
            <v-row dense>
                <!-- <v-col cols="12">
                <v-card color="#015b64" dark>
                    <v-card-title class="text-h2 mb-3">
                        XRP <v-spacer></v-spacer><small>( +100 % )</small>
                    </v-card-title>
                    <v-card-subtitle align="center" class="pb-1">
                        <h2> 120,000,000 B. <h6 class="font-weight-light">(+10000)</h6>
                        </h2>
                    </v-card-subtitle>
                    <v-list-item class="grow">
                        <v-icon class="ml-1">mdi-bank</v-icon>
                        <v-list-item-content>
                            <small class="font-weight-bold ml-2"> 120,000</small>
                        </v-list-item-content>
                    </v-list-item>
                </v-card>
            </v-col> -->

                <!-- dddd -->
                <!-- <v-spacer></v-spacer> -->
                <!-- <v-row class="pb-2  pt-0 " color="#015b64" dark>
                <v-col cols="8" class="ml-1">
                <v-text-field  class="p-1 mb-2 mr-0 ml-1" v-model="search" append-icon="mdi-magnify" label="Search"  border rounded-pill  single-line hide-details></v-text-field>
                </v-col>
                <v-col cols="3">
                <v-btn class="btn btn-success  mt-3 ml-0" outlined rounded small>
                    <v-icon>mdi-plus</v-icon>รายการ
                </v-btn>
                </v-col>
            </v-row> -->

                <!-- Custom rounded search bars with input group -->
                <!-- End -->

                <!-- dddd -->

                <v-col v-for="(product) in activity_me" :key="product.numm" cols="12">
                    <v-card class="mx-auto" dark max-width="400">
                        <v-card-title class="text-h6 pb-1 pt-2 pl-1 pr-0">
                            <h6 class=" caption text-end font-weight-light">

                                <v-btn v-if="product.buysell === 'Buy'" x-small color="#008000">
                                    {{product.buysell}}
                                </v-btn>
                                <v-btn v-else x-small color="#ff0000">
                                    {{product.buysell}}
                                </v-btn>&nbsp;
                                <!-- <small v-if="product.buysell === 'Buy'" style="color: #008000">{{product.buysell}} </small>
                                <small v-else style="color: #ff0000">{{product.buysell}} </small> -->
                                <small>{{product.da}}</small>
                                <!-- <small style="color: red">{{product.buysell}}</small> -->

                            </h6>
                            <v-spacer></v-spacer>

                            <!-- dsfdsf  -->
                            <v-dialog v-model="dialog" persistent max-width="290">
                                <template v-slot:activator="{ on, attrs }">
                                    <!-- <v-btn dark class="btn-warning sm" v-bind="attrs" v-on="on" outlined rounded small>
                                        <v-icon small>mdi-pencil</v-icon>
                                    </v-btn> -->
                                    <v-btn x-small color="#ffcc00" class="ml-1" v-bind="attrs" v-on="on" outlined rounded small>
                                        <v-icon small>mdi-pencil</v-icon>
                                    </v-btn>&nbsp;
                                </template>
                                <v-card>
                                    <v-card-title class="text-h6">
                                        แก้ไข้ข้อมูลเหรียญ
                                    </v-card-title>
                                    <v-card-text>
                                        <v-col cols="12" sm="6" md="4">
                                            <v-form>
                                                <v-select v-model="bs" :items="['ซื้อ', 'ขาย']" label="Buy/Sell*" required></v-select>
                                                <v-select v-model="name_c" :items="tickets" item-text="symbol" item-value="symbol" label="coin*" required></v-select>
                                                <v-text-field v-model="buyCoins" label="ราคาเข้าซื้อ / เหรียญ*" hint="( 900,000/BTC )" required></v-text-field>
                                                <v-text-field v-model="money" label="จำนวนเงิน" hint="" required></v-text-field>
                                                <v-text-field v-model="tax" label="ภาษี*" required></v-text-field>
                                                <v-text-field v-model="num_coins" label="จำนวนเหรียญ*" hint="" persistent-hint></v-text-field>
                                                <input v-model="Dtime" type="datetime-local" label="วันที่,เวลา*" name="datetime">
                                            </v-form>
                                        </v-col>
                                    </v-card-text>

                                    <v-card-actions>
                                        <v-spacer></v-spacer>
                                        <v-btn color="green darken-1" text @click="dialog = false">
                                            Disagree
                                        </v-btn>
                                        <v-btn color="green darken-1" text @click="dialog = false">
                                            Agree
                                        </v-btn>
                                    </v-card-actions>
                                </v-card>
                            </v-dialog>
                            <!-- dsfdsf  -->

                            <!-- <v-btn dark class="btn-danger sm ml-1" outlined rounded small>
                                <v-icon small>mdi-delete</v-icon>
                            </v-btn> -->
                            <v-btn x-small color="#ff0000" class="ml-1" outlined rounded small>
                                <v-icon small>mdi-delete</v-icon>
                            </v-btn>&nbsp;
                        </v-card-title>
                        <v-card-subtitle align="center" class=" pb-0 pt-1 pl-0 pr-0">
                            <h6 class="font-weight-light " align="center">
                                <v-row class="mt-1">
                                    <v-col><small>ราคาเข้า</small></v-col>
                                    <v-col><small>จำนวนเงิน</small></v-col>
                                    <v-col><small>จำนวนเหรียญ</small></v-col>
                                </v-row>
                                <v-row class="mt-0">
                                    <v-col><small>{{product.entry}} / {{product.name_coin}}</small></v-col>
                                    <v-col><small>{{product.total}}</small></v-col>
                                    <v-col><small>{{product.num}}</small></v-col>
                                </v-row>

                            </h6>
                        </v-card-subtitle>

                        <!-- <v-list-item class="grow">
                            <v-icon class="">mdi-credit-card </v-icon>
                            <v-list-item-content>
                                <small class="font-weight-bold ml-2"> 120,000</small>
                            </v-list-item-content>

                            <small class="">
                                <v-btn dark class="btn-warning sm" outlined rounded small>
                                    <v-icon small>mdi-note</v-icon>แก้ไข
                                </v-btn>
                                <v-btn dark class="btn-info sm" outlined rounded small>
                                    <v-icon small>mdi-note</v-icon>ลบ
                                </v-btn> -->
                        <!-- <v-btn class="btn btn-success ml-2" outlined rounded small>
                                    <v-icon>mdi-play</v-icon>เพิ่มรายการ
                                </v-btn> -->
                        <!-- </small>
                        </v-list-item> -->
                    </v-card>

                </v-col>

            </v-row>
        </v-container>
    </v-card>
</div>
</template>

<script>
/* eslint-disable */
import axios from 'axios'
export default {
    name: 'coinHis',
    data: () => ({
        ID: '',
        name: '',
        name_coin: '',
        bs: '',
        name_c: '',
        buyCoins: '',
        money: '',
        tax: '0.25',
        num_coins: '',
        Dtime: '',
        search: '',
        dialog: false,
        tickets: [],
        activity_me: [],
        items: [{
                color: '#ff3330',
                src: 'https://upload.wikimedia.org/wikipedia/th/d/d0/Dogecoin_Logo.png',
                title: 'DOGE',
                artist: [{
                        artist: 'Doge Coin'
                    },
                    {
                        artist: 'Ellie Goulding'
                    }
                ]
            },
            {
                color: '#67a272',
                src: 'https://cdn.vuetifyjs.com/images/cards/halcyon.png',
                title: 'Halcyon',
                artist: 'Ellie Goulding'
            }
        ],
    }),
    mounted() {
        axios.get('https://api.bitkub.com/api/market/symbols')
            .then((a) => {
                this.tickets = a.data.result
                // console.log(a.data.result)
            })

        console.log(this.$route.params)
        console.log('test')
    },
    components: {

    },
    async created() {
        if (!window.sessionStorage.getItem('email')) {
            // this.dialog1 = true
            // setTimeout(() => (this.dialog1 = false, this.$router.push('/')), 2000)
        } else {
            // let email = window.sessionStorage.getItem('email')
            // let res = await fetch('http://localhost:7000/logUser?email=' + email)
            // let data = await res.json()
            // this.email = data.rows[0][0].email
            // this.Password = data.rows[0][0].Password
            // this.ID = data.rows[0][0].ID
            // this.name = data.rows[0][0].name
            // this.Status = data.rows[0][0].Status

            // let res1 = await fetch('http://localhost:7000/name_coin?name_coin=' + this.$route.params.name_coin  +  '&ID=' + this.$route.params.ID)
            let res1 = await fetch('http://localhost:7000/name_coin?ID=' + this.$route.params.ID + '&name_coin=' + this.$route.params.name_coin)
            // let res1 = await fetch('http://localhost:7000/name_coin?ID=' + this.$route.params.ID )
            // let res1 = await fetch('http://localhost:7000/name_coin?name_coin=' + this.$route.params.name_coin ) ได้
            let data1 = await res1.json()
            // this.name_coin = data1.rows[0][0].name_coin
            this.activity_me = data1.rows[0]
        }
    },
    method: {
        
    }
}
</script>

// data() {
//         return {
//             user: [],
//             ID: '',
//             email: '',
//             name: '',
//         }
//     },
//     async created() {
//         if (!window.sessionStorage.getItem('email')) {
//             this.dialog4 = true
//             setTimeout(() => (this.dialog4 = false, this.$router.push('/')), 2000)
//         } else {
//             let res1 = await fetch('http://localhost:7000/Activity')
//             let data1 = await res1.json()
//             this.user = data1.rows[0]
//         }
//     },
