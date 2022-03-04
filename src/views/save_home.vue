<template>
<v-card dark max-width="400" class="mx-auto">
    <v-app-bar dark color="pink">
        <v-btn icon>
            <v-icon>mdi-account circle</v-icon>
        </v-btn>
        <v-toolbar-title>Name ID</v-toolbar-title>
        <v-spacer></v-spacer>
        <v-btn icon>
            <v-icon>mdi-logout</v-icon>
        </v-btn>
    </v-app-bar>

    <v-container>
        <v-row dense>
            <v-col cols="12">
                <v-card color="#015b64" dark>
                    <v-card-title class="text-h2 mb-3">
                        มูลค่ารวมพอร์ท <v-spacer></v-spacer><small>( +100 % )</small>
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

                        <small>10</small>
                        <v-icon class="ml-1">mdi-bank</v-icon>
                    </v-list-item>
                </v-card>
            </v-col>

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
            <addCoin />

            <!-- Custom rounded search bars with input group -->
            <!-- End -->

            <!-- dddd -->

            <v-col v-for="(item, i) in items" :key="i" cols="12">
                <v-card class="mx-auto" :color="item.color" dark max-width="400">
                    <v-card-title class="pb-0 pt-2">
                        <v-avatar size="55" tile class="mt-0">
                            <v-img :src="item.src"></v-img>
                        </v-avatar>
                        <!-- <span class="text-h6 font-weight-light" >Twitter</span> -->
                        <v-col>
                            <h5 class="ml-1" :src="item.src" v-text="item.title"></h5>
                        </v-col>
                        <h6 class="caption text-subtitle-2  text-center font-weight-light">
                            18.25
                        </h6>
                        <h6 class="ml-3 caption text-end font-weight-light">
                            25.33 <small>(+100%)</small>
                        </h6>
                    </v-card-title>

                    <h6 align="center" class="mb-0">
                        <h4> 120,000,000 B. <h6 class="font-weight-light">(+10000)</h6>
                        </h4>
                    </h6>

                    <v-card-actions class="mb-0 pt-0 pb-0 ml-0 pl-0 pr-0">
                        <v-list-item class="grow">
                            <v-icon class="">mdi-credit-card </v-icon>
                            <v-list-item-content>
                                <small class="font-weight-bold ml-2"> 120,000</small>
                            </v-list-item-content>
                            <!-- <router-link :to="{ name: 'coinHis' }" > -->
                            <small class="">
                                <v-btn :to="{ name: 'coinHis' }" dark class="btn-warning sm" outlined rounded small>
                                    <v-icon small>mdi-note</v-icon>
                                </v-btn>
                                <v-btn dark class="btn-danger sm ml-1" outlined rounded small>
                                    <v-icon small>mdi-delete</v-icon>
                                </v-btn>
                                <!-- <v-btn class="btn btn-success ml-2" outlined rounded small>
                                            <v-icon>mdi-play</v-icon>เพิ่มรายการ
                                        </v-btn> -->
                            </small>
                            <!-- </router-link> -->
                        </v-list-item>
                    </v-card-actions>
                </v-card>
            </v-col>

        </v-row>
    </v-container>
</v-card>
</template>

<script>
import addCoin from '../components/addCoin.vue'

export default {
    name: 'home',
    data: () => ({
        ID: '',
        email: '',
        name: '',
        Password: '',
        Status: '',

        dialog: false,
        dialog1: false,
        activity_me: [],

        search: '',
        items: [{
                color: '#ff3330',
                src: 'https://upload.wikimedia.org/wikipedia/th/d/d0/Dogecoin_Logo.png',
                title: 'DOGE',
                artist: 'Doge Coin'
            },
            {
                color: '#952175',
                src: 'https://cdn.vuetifyjs.com/images/cards/halcyon.png',
                title: 'Halcyon',
                artist: 'Ellie Goulding'
            }
        ]
    }),
    components: {
        addCoin
    },
    async created() {
        if (!window.sessionStorage.getItem('email')) {
            this.dialog1 = true
            setTimeout(() => (this.dialog1 = false, this.$router.push('/')), 2000)
        } else {
            let email = window.sessionStorage.getItem('email')
            let res = await fetch('http://localhost:7000/logUser?email=' + email)
            let data = await res.json()
            this.email = data.rows[0][0].email
            this.Password = data.rows[0][0].Password
            this.ID = data.rows[0][0].ID
            this.name = data.rows[0][0].name
            this.Status = data.rows[0][0].Status

            // let today = new Date()
            // let date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate()
            // let dateTime = date
            // let res1 = await fetch('http://localhost:7000/list_ac_me?ID_student=' + ID_student)
            // let data1 = await res1.json()
            // this.activity_me = data1.rows[0]
        }
    },
}
</script>
