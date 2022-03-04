<template>
<div data-app class="ss">
    <!-- <div data-app style="background-color:powderblue;"> -->
    <v-container fluid style="margin: 0px; padding: 0px; width: 100%">
        <v-layout wrap>

            <!-- <v-app-bar>
                <v-btn icon color="#FF0000" @click="ac2">
                    <v-icon>mdi-ChevronLeft</v-icon>
                </v-btn>
                <v-btn icon class="pr-1" color="#FF0000" dark>
                    <v-icon>
                        mdi-arrow-left
                    </v-icon>
                </v-btn>
                <v-toolbar-title class="font-weight-bold"> Proflie </v-toolbar-title>
                <v-spacer></v-spacer>
                <v-btn icon @click="logout" color="#FF0000">
                    <v-icon>mdi-logout</v-icon>
                </v-btn>
            </v-app-bar> -->

            <v-container class="fill-height " fluid>
                <v-row class="pb-4  pt-2 pl-3" color="#015b64" dark>
                    <v-btn class="mt-0 pb-1 pt-1 pr-1" icon color="#FF0000" :to="{ name: 'admin' , params: { ID_student: ID_student}}">
                        <v-icon>mdi-home</v-icon>
                    </v-btn>

                    <h6 class="font-weight-bold pt-2 pl-1"> เช็คชื่อ | ADMIN </h6>
                    <v-spacer></v-spacer>
                </v-row>
                <v-row align="center" justify="center" dense>
                    <img src="@/assets/c.jpg" class="mx-auto d-block rounded-circle" alt="Cinque Terre" width="125">
                </v-row>

            </v-container>

            <!-- <v-col class="pb-2">
                <v-btn @click.prevent="Signin" type="submit" color="#1F7087" block dark>เช็คชื่อ</v-btn> -->
            <!-- <v-btn @click.prevent="Signin" type="submit" color="#952175" class="mt-2 " block dark>อัลบั้มภาพกิจกรรม ลูกเสือ/รด.</v-btn> -->
            <!-- <v-btn @click.prevent="Signin" type="submit" color="#FF0000" class="mt-2 " block dark>อัลบั้มภาพกิจกรรม ลูกเสือ/รด.</v-btn>
            </v-col> -->

            <v-container class="pt-1">

                <center class="pb-0">
                    <h4>ADMIN</h4>
                    <center>
                        <hr style="height:2px; width:10%" color=#FF0000>
                    </center>
                </center>

                <!-- <template>
                    <v-row>
                        <v-col v-for="n in 9" :key="n" class="d-flex child-flex" cols="4">
                            <v-img :src="`https://picsum.photos/500/300?image=${n * 5 + 10}`" :lazy-src="`https://picsum.photos/10/6?image=${n * 5 + 10}`" aspect-ratio="1" class="grey lighten-2">
                                <template v-slot:placeholder>
                                    <v-row class="fill-height ma-0" align="center" justify="center">
                                        <v-progress-circular indeterminate color="grey lighten-5"></v-progress-circular>
                                    </v-row>
                                </template>
                            </v-img>
                        </v-col>

                    </v-row>
                </template> -->
                <!-- <div style="height: 95px; background-color: rgba(255,0,0,0.1);" class="mt-4"> -->
                    <div>
                    <div style="height: 95px;" class="mt-4">
                        <v-btn class="h-100 d-inline-block" style="width: 95px; background-color: #E0E0E0" @click="dd">IT</v-btn>
                        <v-btn class="h-100 d-inline-block ml-4" style="width: 95px; background-color: #E0E0E0">บัญชี</v-btn>
                        <v-btn class="h-100 d-inline-block ml-4" style="width: 95px; background-color: #E0E0E0">ช่างไฟ</v-btn>
                    </div>
                    <div style="height: 95px;" class="mt-4">
                        <v-btn class="h-100 d-inline-block" style="width: 95px; background-color: #E0E0E0">ช่างยนต์</v-btn>
                        <v-btn class="h-100 d-inline-block ml-4" style="width: 95px; background-color: #E0E0E0">ช่างโยธา</v-btn>
                        <v-btn class="h-100 d-inline-block ml-4" style="width: 95px; background-color: #E0E0E0">สถาปัตย์</v-btn>
                    </div>
                    <div style="height: 95px;" class="mt-4">
                        <v-btn class="h-100 d-inline-block" style="width: 95px; background-color: #E0E0E0">คอมฯธุรกิจ</v-btn>
                        <v-btn class="h-100 d-inline-block ml-4" style="width: 95px; background-color: #E0E0E0">อิเล็กทรอนิก</v-btn>
                        <v-btn class="h-100 d-inline-block ml-4" style="width: 95px; background-color: #E0E0E0">ช่างกล</v-btn>
                    </div>
                </div>

            </v-container>
        </v-layout>
    </v-container>

    <v-card max-width="400" class="mx-auto" fluid>

    </v-card>
</div>
</template>

<script>
/* eslint-disable */
import addCoin from '../components/addCoin.vue'
import axios from 'axios'

export default {
    name: 'Profile',
    data: () => ({
        ID: '',
        ID_student: '',
        email: '',
        name: '',
        Password: '',
        Status: '',
        numm: '',

        model: null,

        name_coins: '',
        tickets: [],

        dialog: false,
        dialog1: false,
        list_coin: [],
        list_coin2: [],

        search: '',
        items: [{
                color: '#1F7087',
                src: 'https://cdn.vuetifyjs.com/images/cards/foster.jpg',
                title: 'กิจกรรมเดินสนาม',
                artist: '20 พ.ค. 65',
            },
            {
                color: '#952175',
                src: 'https://cdn.vuetifyjs.com/images/cards/halcyon.png',
                title: 'กิจกรรมเดินสนาม',
                artist: '20 พ.ค. 65',
            },
            {
                color: '#952175',
                src: 'https://cdn.vuetifyjs.com/images/cards/halcyon.png',
                title: 'กิจกรรมเดินสนาม',
                artist: '20 พ.ค. 65',
            },
        ],

        length: 3,
        onboarding: 0,

    }),
    mounted() {

    },
    components: {
        addCoin
    },
    async created() {

        let ID_student = window.sessionStorage.getItem('ID_student')
        let res = await fetch('http://localhost:7000/logUser?ID_student=' + ID_student)
        let data = await res.json()
        this.ID_student = data.rows[0][0].ID_student
        this.Password = data.rows[0][0].Password
        this.Title = data.rows[0][0].Title
        this.Firstname = data.rows[0][0].Firstname
        this.Lastname = data.rows[0][0].Lastname
        this.Class = data.rows[0][0].Class
        this.Department = data.rows[0][0].Department

        console.log('sdfsdf', data.rows[0][0])

        // let today = new Date()
        // let date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate()
        // let dateTime = date
        let res1 = await fetch('http://localhost:7000/list_coin?ID=' + this.ID)
        let data1 = await res1.json()
        this.name_coin = data.rows[0][0].name_coin
        this.list_coin = data1.rows[0]

        // let res2 = await fetch('http://localhost:7000/list_coin?ID=' + this.ID + '&name_coin=' + this.name_coin)
        // let data2 = await res2.json()
        // this.name_coin = data.rows[0][0].name_coin
        // this.list_coin2 = data2.rows[0]

    },
    methods: {
        logout() {
            window.sessionStorage.removeItem('email')
            return this.$router.push('/')
        },

        next() {
            this.onboarding = this.onboarding + 1 === this.length ?
                0 :
                this.onboarding + 1
        },
        prev() {
            this.onboarding = this.onboarding - 1 < 0 ?
                this.length - 1 :
                this.onboarding - 1
        },
        dd() {
            this.$router.push('/admin_ch')
        },
    },
}
</script>

<style scoped>
.ss {
    /* background-color: #cccccc;
    width: 100% */
}
</style>
