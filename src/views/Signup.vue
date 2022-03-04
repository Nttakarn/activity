<template>
<div data-app>
    <v-app>
        <v-main>
            <v-container class="fill-height" fluid>
                <v-row align="center" justify="center" dense>
                    <v-col cols="12" sm="8" md="4" lg="4">
                        <v-card elevation="0">
                            <!-- <a href="https://edu-fedorae.netlify.app" name="Fedorae Education" title="Fedorae Education" target="_blank"> -->
                            <!-- <v-img src="@/assets/11.png" contain height="55"></v-img> -->
                            <h4 class="mt-4 font-weight-bold" align="center" justify="center">สมัครสมาชิก</h4>
                            <!-- </a> -->
                            <v-card-text>
                                <v-form>
                                    <v-alert v-model="danger" dismissible class="pr-4 error">
                                        {{ alt_txt }}
                                    </v-alert>
                                    <v-alert v-model="danger1" dismissible class="pr-4 success">
                                        {{ alt_txt }}
                                    </v-alert>
                                    <!-- <v-text-field v-model="name" label="Enter your name" name="name" prepend-inner-icon="mdi-account" type="text" rounded outlined required></v-text-field>
                                    <v-text-field v-model="email" label="Enter your email" name="email" prepend-inner-icon="mdi-email" type="email" rounded outlined required></v-text-field>
                                    <v-text-field v-model="Password" label="Enter your password" name="password" prepend-inner-icon="mdi-lock" type="password" rounded outlined required></v-text-field>
                                    <v-text-field v-model="Con_Password" label="Confirm your password" name="password" prepend-inner-icon="mdi-lock" type="password" rounded outlined></v-text-field> -->
                                    <!-- <v-text-field  label="Re-enter password" name="password" prepend-inner-icon="mdi-lock-outline" type="password" rounded outlined></v-text-field> -->
                                    <v-text-field class="pb-0" v-model="ID_student" label="รหัสนักศึกษา" outlined dense />
                                    <v-text-field class="pb-0" label="รหัสผ่าน" v-model="Password" :type="showPassword ? 'text' : 'password'" :append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'" @click:append="showPassword = !showPassword" outlined dense />

                                    <v-text-field class="pb-0" label="ยืนยันรหัสผ่าน" v-model="Con_Password" :type="showPassword ? 'text' : 'password'" :append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'" @click:append="showPassword = !showPassword" outlined dense />

                                    <v-select class="" :items="items" v-model="Title" outlined label="คำนำหน้า" dense />
                                    <v-text-field class="pb-0" black-text v-model="Firstname" label="ชื่อ" outlined dense />
                                    <!-- <v-text-field class="pb-0" v-model="Lastname" label="นามสกุล" outlined dense /> -->
                                    <v-select class="pb-0" :items="items1" v-model="Class" label="ระดับชั้น" outlined dense />
                                    <v-select class="pb-0" :items="items2" label="แผนกวิชา" v-model="Department" outlined dense />

                                    <!-- <v-btn type="submit" @click.prevent="insert" name="save" rounded color="#000000" x-large block dark>Register</v-btn><br> -->
                                    <v-btn @click.prevent="insert" type="submit" name="save" color="#FF0000" block dark>Signin</v-btn> <!-- <v-card-actions class="text--secondary ml-10 mt-2" > -->
                                    <!-- <v-spacer></v-spacer> --><br>
                                    <!-- <p align="center" justify="center" class=""><small>Already have an account?</small>
                                        <router-link :to="{ name: 'login' }" class="ml-2 black--text font-weight-black">Login</router-link>
                                    </p> -->
                                     <p align="center" justify="center" class="">
                                    <small>Already have an account?</small>
                                    <router-link to="/" class="ml-2 red--text font-weight-red">Login</router-link>
                                </p>
                                    <router-view />
                                    <!-- </v-card-actions> -->
                                </v-form>
                            </v-card-text>
                        </v-card>
                    </v-col>
                </v-row>
                <!-- dialog  -->

                <!-- dialog  -->
                <!-- dialog  -->
                <!-- dialog  -->
            </v-container>
        </v-main>
    </v-app>
</div>
</template>

<script>
/* eslint-disable */
export default {
    data() {
        return {
            ID_student: '',
            Password: '',
            Con_Password: '',
            Title: '',
            Firstname: '',
            Class: '',
            Department: '',

            type_api: '',
            danger: false,
            danger1: false,
            alt_txt: '',
            rules: {
                required: 'กรุณากรอกข้อมูล'
            },

            showPassword: false,

            items: ['นาย', 'นาง', 'นางสาว'],
            items1: ['ปวช.1', 'ปวช.2', 'ปวช.3', 'ปวส.1', 'ปวส.2'],
            items2: [
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
        }
    },
    methods: {
        async insert() {
            if (
                this.ID_student == '' ||
                this.Password == '' ||
                this.Con_Password == '' ||
                this.Title == '' ||
                this.Firstname == '' ||
                this.Class == '' ||
                this.Department == ''
            ) {
                this.danger = true;
                this.alt_txt = 'กรุณากรอกข้อมูลให้ครบ'
            } else {
                let insert_user = {
                    ID_student: this.ID_student,
                    Password: this.Password,
                    Con_Password: this.Con_Password,
                    Title: this.Title,
                    Firstname: this.Firstname,
                    Class: this.Class,
                    Department: this.Department
                }
                console.log(insert_user)
                let res = await fetch('http://localhost:7000/insert_user', {
                    method: 'post',
                    headers: {
                        'content-type': 'application/json',
                    },
                    body: JSON.stringify(insert_user),
                })
                let data = await res.json()
                console.log('data', data.status)
                if (data.status == 'ok') {
                    this.type_api = 'success';
                    this.danger1 = true;
                    this.alt_txt = 'สมัครสมาชิกสำเร็จ'
                    setInterval(() => {
                        // this.$router.push({ name: "login"})
                        this.$router.push('/').catch(err => {})
                    }, 3000)
                }
                if (data.status == 'fail') {
                    this.type_api = 'error';
                    this.danger = true;
                    this.alt_txt = 'กรุณากรอก Password ให้ตรงกัน'
                    this.Password = ''
                    this.Con_Password = ''
                }
                if (data.status == 'false') {
                    this.type_api = 'error';
                    this.danger = true;
                    this.alt_txt = 'มีคนใช้ ID_student นี้แล้ว'
                    this.Firstname = ''
                    this.ID_student = ''
                    this.Password = ''
                    this.Con_Password = ''
                }
            }
        },
    },
}
</script>

<style lang="css" scoped>

</style>
