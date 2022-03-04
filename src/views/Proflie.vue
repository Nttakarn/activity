<template>
<div data-app class="ss">
    <!-- <div data-app style="background-color:powderblue;"> -->
    <v-container fluid style="margin: 0px; padding: 0px; width: 100%">
        <v-layout wrap>
            <v-menu class="elevation-0">
                <v-btn icon color="#FF0000" :to="{ name: 'home' , params: { ID_student: ID_student}}">
                    <v-icon>mdi-home</v-icon>
                </v-btn>

                <v-toolbar-title class="font-weight-bold"> profile </v-toolbar-title>
                <v-spacer></v-spacer>
            </v-menu>
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
                <v-row class="pb-4  pt-3 pl-3" color="#015b64" dark>
                    <v-btn icon class="pr-1" color="#FF0000" dark>
                        <v-icon>
                            mdi-arrow-left
                        </v-icon>
                    </v-btn>
                    <v-toolbar-title class="font-weight-bold"> Proflie </v-toolbar-title>
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

                <center class="pb-2">
                    <h4>IT</h4>
                    <sma>แผนก เทคโนโลยีสารสนเทศ(IT)</sma>
                </center>

                <v-card height="150">
                    <div class=" ">
                        <div class="">
                            <v-btn type="submit" color="#FF0000" class=" " block dark>ข้อมูลส่วนตัว</v-btn>
                        </div>
                        <div>
                            <v-card-title class="text-h6 pt-2 pb-0"></v-card-title>

                            <!-- <v-card-subtitle v-text="item.artist"></v-card-subtitle> -->

                            <v-card-subtitle class="ml-3 pt-3 pb-2">
                                <p class="card-text mt-1 mb-0">ชื่อ : IT</p>
                                <p class="card-text mb-0">ระดับชั้น ปวส.2 ชั้น E5</p>
                                <p class="card-text mb-0">แผนก : เทคโนโลยีสารสนเทศ</p>
                                <p class="card-text mb-0">สถานศึกษา : วิทยาลัยเทคนิคชัยภูมิ </p>

                            </v-card-subtitle>

                        </div>

                    </div>
                </v-card>
                <center>
                    <hr style="height:2px; width:15%" color=#FF0000>
                </center>
                <v-card height="120">
                    <div class=" ">
                        <div class="">
                            <v-btn type="submit" color="#FF0000" class=" " block dark>ช่องทางการติดต่อ</v-btn>
                        </div>
                        <div>
                            <v-card-title class="text-h6 pt-2 pb-0"></v-card-title>

                            <!-- <v-card-subtitle v-text="item.artist"></v-card-subtitle> -->

                            <v-card-subtitle class="ml-3 pt-3 pb-2">
                                <p class="card-text mt-0 mb-0">เบอร์โทรศัพทฺ์: 099-999-999</p>
                                <p class="card-text mb-0">Facebook : IT</p>
                                <p class="card-text mb-0">Email: IT@gamil.com</p>

                            </v-card-subtitle>
                            <small class="pl-3 mb-0"></small>
                            <!-- <v-btn dark class="btn-muted sm ml-1" @click="editStudent(post.name_coin,ID )" outlined rounded small>

                                    </v-btn> -->
                            <!-- &nbsp;&nbsp; -->
                            <v-btn dark class="btn-muted sm ml-5" align="right" justify="right" outlined rounded small>
                                ดูเพิ่มเติม<v-icon small>mdi-chevron-right</v-icon>
                            </v-btn>
                        </div>

                    </div>
                </v-card>
                <center>
                    <hr style="height:2px; width:15%" color=#FF0000>
                </center>
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
        ac2() {
            this.$router.push('/home')
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
