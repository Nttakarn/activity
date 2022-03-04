<template>
<div data-app class="ss">
    <!-- <div data-app style="background-color:powderblue;"> -->
    <v-container fluid style="margin: 0px; padding: 0px; width: 100%">
        <v-layout wrap>
            <v-app-bar color="" class="">
                <v-btn icon color="#FF0000" :to="{ name: 'admin_check' , params: { ID_student: ID_student}}" class="">
                    <v-icon>mdi-arrow-left</v-icon>
                </v-btn>

                <v-toolbar-title class="white--text" style="white"> แผนก IT </v-toolbar-title>
                <v-spacer></v-spacer>
                <v-btn class="mt-0 pb-1 pt-1 pr-1" icon color="#FF0000" :to="{ name: 'admin' , params: { ID_student: ID_student}}">
                        <v-icon>mdi-home</v-icon>
                    </v-btn>

            </v-app-bar>

            <v-container class="grey lighten-5 pb-0">
                <!-- <v-img lazy-src="https://picsum.photos/id/11/10/6" max-height="150" max-width="500" src="https://picsum.photos/id/11/500/300"></v-img> -->
                <!-- <v-img lazy-src="https://cdn.chiangmainews.co.th/wp-content/uploads/2020/07/04170055/S__12951581-scaled.jpg" max-height="180" max-width="500" src="http://www.stc.ac.th/files/2009120990337274_2011180660231.jpg"></v-img> -->
                <!-- <v-img max-height="180" max-width="400" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQvVEd5Y0g8lCYFiiCDfeVErgLRw2MHAvQuh3_L0nKcaHSTD3QKUN7g7zhk0FG01Cmuvvc&usqp=CAU"></v-img> -->
            </v-container>

            <v-col class="pb-0 pt-0">
                <!-- <v-btn @click.prevent="Signin" type="submit" color="#1F7087" block dark>เช็คชื่อ</v-btn> -->
                <!-- <v-btn @click.prevent="Signin" type="submit" color="#952175" class="mt-2 " block dark>อัลบั้มภาพกิจกรรม ลูกเสือ/รด.</v-btn> -->
                <!-- <v-btn :to="{ name: 'checkAc' , params: { ID_student: ID_student}}" type="submit" color="#FF0000" class="mt-0 " block dark>เช็คกิจกรรม</v-btn> -->
                <!-- <v-btn :to="{ name: 'checkAc' , params: { ID_student: ID_student}}" dark class="btn-muted sm" outlined rounded small>

                    <v-btn @click.prevent="Signin" type="submit" color="#FF0000" class="mt-0 " block dark>เช็คกิจกรรม</v-btn>

                </v-btn> -->
                <!-- <center>
                    <hr style="height:2px; width:15%" color=#FF0000>
                </center> -->
            </v-col>

            <v-container class="pt-3">
                <v-row dense>

                    <v-col class=" font-weight-bold pb-0">
                        <!-- <h5> &nbsp;&nbsp;กิจกรรม</h5> -->
                        <!-- <h4 class="font-weight-bold pt-0 " align="left" justify="left" dark>
                            <v-btn icon color="#FF0000" @click="ac2">
                                <v-icon>mdi-dialpad</v-icon>
                            </v-btn>
                            กิจกรรมลูกเสือ - รด.
                        </h4> -->

                        <!-- <h4 class="font-weight-bold pt-0 " align="center" justify="center" dark>
                            กิจกรรม
                        </h4> -->
                        <v-text-field label="วันที่" type="date" min="2000-12-31" max="2021-12-31" outlined dense />

                    </v-col>

                    <table class="table">
                        <!-- <caption>List of users</caption> -->
                        <thead>
                            <tr class="table-danger">
                                <th scope="col">#</th>
                                <th scope="col">ชื่อ</th>
                                <th scope="col">สถานะ</th>
                                <!-- <th scope="col">Handle</th> -->
                            </tr>
                        </thead>
                        <tbody>
                            <tr v-for=" n in checkk " :key="n.id">
                                <th scope="row">{{n.ID}}</th>
                                <td>{{n.days}}</td>
                                <v-select width="20" class="mt-2 " label="" :items="item"  outlined dense  required/>
                                <!-- <td>{{n.status}}</td> -->
                                <!-- <td>@mdo</td> -->
                            </tr>
                        </tbody>
                    </table>
<v-btn type="submit" color="#FF0000" block dark>Submit</v-btn>
                </v-row>
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
    name: 'home',
    data: () => ({
        ID: '',
        ID_student: '',
        email: '',
        name: '',
        Password: '',
        Status: '',
        numm: '',
        item: ['ขาด', 'ลา', 'มา', 'สาย'],

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
                src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ75gy3VVt6vIo4nx0jbjB97O6sc95YQHpMP6fl82LcqKGy9Gg3w8h-RpshCLcca4S4x5E&usqp=CAU',
                title: 'กิจกรรมเดินสนาม',
                artist: 'นายปฎิมากร',
                ID: 1
            },
            {
                color: '#952175',
                src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRc2LrwdJuERyjrlodDiqkUm61mFLcgwXUPlg&usqp=CAU',
                title: 'พิธีประจำการลูกเสือ เนตรนารี ',
                artist: 'นายอภิรักษ์',
                ID: 2
            },
            {
                color: '#952175',
                src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSXsHEUYJgF-CqfpKnyU8E3WOqprGUCQxzIrw&usqp=CAU',
                title: 'กิจกรรมเข้าค่ายลูกเสือ',
                artist: 'นายธนโชติ',
                ID: 3
            },
            {
                color: '#952175',
                src: 'https://i.ytimg.com/vi/MgtN3eNKjRw/maxresdefault.jpg',
                title: 'กิจกรรมเดินทางไกล',
                artist: 'นายปิยศักดิ์',
                ID: 4
            },
            ],
            checkk: [{
                
                status: 'มา',
                days: 'นายภูรินทร์',
                ID: 1
            },
            {
                
                status: 'มา',
                days: 'นายณัฐดนัย',
                ID: 2
            },
            {
                status: 'ขาด',
                days: 'นายภัทรพงษ์',
                ID: 3
            },
            {
                status: 'สาย', days: 'นายกฤษฎา',ID: 4
            },
            {
                status: 'มา', days: 'นายวันชัย',ID: 5
            },
            {
                status: 'มา', days: 'นางสาวกาญจนา',ID: 6
            },
            {
                status: 'มา', days: 'นายบดินทร์',ID: 7
            },
            {
                status: 'ขาด', days: 'นายภาณุรัตน์',ID: 8
            },
            {
                status: 'มา', days: 'นายกรณพัฒน์',ID: 9
            },
            {
                status: 'ขาด', days: 'นายถิรชน',ID: 10
            },
            {
                status: 'มา', days: 'นายจักริน',ID: 11
            },
            {
                status: 'มา', days: 'นายภูรี',ID: 12
            },
        ],
        

        length: 3,
        onboarding: 0,

    }),
    mounted() {
        axios.get('https://api.bitkub.com/api/market/symbols')
            .then((a) => {
                this.tickets = a.data.result
                // console.log(a.data.result)
            })
    },
    components: {
        addCoin
    },
    async created() {
        if (!window.sessionStorage.getItem('ID_student')) {
            // this.dialog1 = true
            // setTimeout(() => (this.dialog1 = false, this.$router.push('/')), 2000)
        } else {
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

           
        }
    },
    methods: {
    
    },
}
</script>

<style scoped>
.ss {
    /* background-color: #cccccc;
    width: 100% */
}
</style>
