<template>
<div data-app class="ss">
    <!-- <div data-app style="background-color:powderblue;"> -->
    <v-container fluid style="margin: 0px; padding: 0px; width: 100%">
        <v-layout wrap>
            <v-menu class="elevation-0">
                <v-btn icon color="#FF0000" :to="{ name: 'home' , params: { ID_student: ID_student}}">
                    <v-icon>mdi-home</v-icon>
                </v-btn>
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
                <v-row class="pb-4  pt-2 pl-3" color="#015b64" dark>
                    <v-btn v-if="Status == 'user' " class="mt-0 pt-1 pr-1" icon color="#FF0000" :to="{ name: 'home' , params: { ID_student: ID_student}}">
                        <v-icon>mdi-home</v-icon>
                    </v-btn>
                    <v-btn v-else class="mt-0 pt-1 pr-1" icon color="#FF0000" :to="{ name: 'admin' , params: { ID_student: ID_student}}">
                        <v-icon>mdi-home</v-icon>
                    </v-btn>

                    <v-toolbar-title class="font-weight-bold pt-1 pl-1"> Profile </v-toolbar-title>
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
                    <div align="center">

                        <h4>{{Firstname}}</h4>
                        <v-dialog :v-model="dialog" width="500">
                            <template v-slot:activator="{ on, attrs }">
                                <v-btn dark v-bind="attrs" v-on="on" class="btn-muted sm" align="right" color=#FF0000 justify="right" outlined rounded small>
                                    <v-icon small outlined rounded>mdi-pencil</v-icon>
                                </v-btn>
                            </template>

                            <v-card>
                                <v-card-title style="color: black; background: #e3e5f1;">
                                    ID : {{ID_student}}
                                </v-card-title>
                                <v-card-text style="color: black; background: #e3e5f1;">
                                    <!-- <v-text-field class="pb-0" label="รหัสนักศึกษา" outlined dense />  -->
                                    <v-text-field class="pt-1" label="รหัสผ่าน" v-model="Password" :type="showPassword ? 'text' : 'password'" :append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'" @click:append="showPassword = !showPassword" outlined dense />
                                    <v-text-field class="pb-0" label="ยืนยันรหัสผ่าน" v-model="Con_Password" :type="showPassword ? 'text' : 'password'" :append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'" @click:append="showPassword = !showPassword" outlined dense />

                                    <v-select class="" :items="items2" v-model="Title" outlined label="คำนำหน้า" dense />
                                    <v-text-field class="pb-0" black-text v-model="Firstname" label="ชื่อ" outlined dense />
                                    <!-- <v-text-field class="pb-0" v-model="Lastname" label="นามสกุล" outlined dense /> -->
                                    <v-select class="pb-0" :items="items1" v-model="Class" label="ระดับชั้น" outlined dense />
                                    <v-select class="pb-0" :items="items3" label="แผนกวิชา" v-model="Department" outlined dense />

                                    <!-- <v-btn type="submit" @click.prevent="insert" name="save" rounded color="#000000" x-large block dark>Register</v-btn><br> -->
                                    <v-btn @click.prevent="update" type="submit" name="save" color="#FF0000" block dark>Edit</v-btn>
                                </v-card-text>
                            </v-card>
                        </v-dialog>
                    </div>

                    <sma>แผนก {{Department}} </sma>
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
                                <p class="card-text mt-1 mb-0">ชื่อ : {{Title}} {{Firstname}}</p>
                                <p class="card-text mb-0">ระดับชั้น {{Class}}</p>
                                <p class="card-text mb-0">แผนก : {{Department}} </p>
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
        ID_student: '',
        Password: '',
        Con_Password: '',
        Title: '',
        Firstname: '',
        Class: '',
        Department: '',
        Status: '',
        // name: '',

        name_coins: '',
        tickets: [],

        showPassword: false,
        dialog: false,
        dialog1: false,
        list_coin: [],
        list_coin2: [],

        items2: ['นาย', 'นาง', 'นางสาว'],
        items1: ['ปวช.1', 'ปวช.2', 'ปวช.3', 'ปวส.1', 'ปวส.2'],
        items3: [
            'เทคโนโลยีสารสนเทศ',
            'ช่างยนต์',
            'ช่างกลโรงงาน',
            'ช่างไฟฟ้ากำลัง',
            'ช่างโยธา',
            'ช่างก่อสร้าง',
            'ช่างสถาปัตยกรรม',
            'ช่างเชื่อม',
            'ช่างอิเล็กทรอนิกส์',
            'คอมพิวเตอร์ธุรกิจ',
            'บัญชี',
            'การตลาด',
            'เลขานุการ',
        ],

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
        // this.Lastname = data.rows[0][0].Lastname
        this.Class = data.rows[0][0].Class
        this.Department = data.rows[0][0].Department
        this.Status = data.rows[0][0].Status

        console.log('sdfsdf', data.rows[0][0])



    },
    methods: {
        async update() {
            let update_user = {
                ID_student: this.ID_student,
                Title: this.Title,
                Firstname: this.Firstname,
                Class: this.Class,
                Department: this.Department,
                Password: this.Password,
                Con_Password: this.Con_Password,
            };
            console.log(update_user)
            let res = await fetch("http://localhost:7000/update_user", {
                method: "post",
                headers: {
                    "content-type": "application/json",
                },
                body: JSON.stringify(update_user),
            });
            let data = await res.json()
            if (data.status == 'ok') {
                this.dialog1 = false
                this.dialog2 = true
                setTimeout(() => (this.dialog2 = false, location.reload()), 3000)
            }
            if (data.status == 'fail') {
                this.dialog1 = false
                this.dialog3 = true
                setTimeout(() => (this.dialog3 = false), 3000)
            }
        },
        logout() {
            window.sessionStorage.removeItem('email')
            return this.$router.push('/')
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
