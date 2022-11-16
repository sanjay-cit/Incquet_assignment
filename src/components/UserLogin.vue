<template>
    <div class="wrapper">
        <div class="logo">
            <img src="../assets/logo.png" alt="">
        </div>
        <div class="text-center mt-4 name">
            Akatsuki
        </div>
        <div class="p-3 mt-3">
            <div class="form-field d-flex align-items-center">
                <input type="email" placeholder="Username" v-model="loginData.email">
            </div>
            <div class="form-field d-flex align-items-center">
                <input type="password" placeholder="Password" v-model="loginData.password">
            </div>
            <div style="font-size: 14px; color: red;">
                {{text}}
            </div>
            <button class="btn btn-warning mt-3" @click="validate()">Login</button>
            <button class="btn btn-danger mt-3" @click="reset()">Reset</button>
        </div>
    </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
    name: "UserLogin",
    computed: {
    ...mapGetters(["getUser"])
    },
    watch: {
        getUser (val) {
            if(val.code == 0) {
                console.log('val',val);
                this.$router.push('/products')
            }
            else if(val.code == 1) {
                this.text = "Incorrect Username or Password"
            }
        }
    },
    data() {
        return {
            loginData: {
                email: '',
                password: ''
            },
            text: ""
        }
    },
    methods: {
        validate () {
            if(this.loginData.email.length && this.loginData.password.length) {
                this.$store.dispatch('handleUser',this.loginData)
            } else {
                this.text = 'Username or Password cannot be empty'
            }
        },
        reset () {
            this.loginData.email = ''
            this.loginData.password = ''
            this.text = ''
        }
    },
}
</script>

<style scoped>
/* Importing fonts from Google */
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700;800;900&display=swap');

/* Reseting */
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Poppins', sans-serif;
}

body {
    background: #ecf0f3;
}

.wrapper {
    max-width: 350px;
    min-height: 500px;
    margin: 80px auto;
    padding: 40px 30px 30px 30px;
    background-color: #ecf0f3;
    border-radius: 15px;
    box-shadow: 13px 13px 20px #cbced1, -13px -13px 20px #fff;
    margin-top: 0px !important;
}

.logo {
    width: 80px;
    margin: auto;
}

.logo img {
    width: 100%;
    height: 80px;
    object-fit: cover;
    border-radius: 50%;
    box-shadow: 0px 0px 3px #5f5f5f,
        0px 0px 0px 5px #ecf0f3,
        8px 8px 15px #a7aaa7,
        -8px -8px 15px #fff;
}

.wrapper .name {
    font-weight: 600;
    font-size: 1.4rem;
    letter-spacing: 1.3px;
    padding-left: 10px;
    color: #555;
}

.wrapper .form-field input {
    width: 100%;
    display: block;
    border: none;
    outline: none;
    background: none;
    font-size: 1.2rem;
    color: #666;
    padding: 10px 15px 10px 10px;
    /* border: 1px solid red; */
}

.wrapper .form-field {
    padding-left: 10px;
    margin-bottom: 20px;
    border-radius: 20px;
    box-shadow: inset 8px 8px 8px #cbced1, inset -8px -8px 8px #fff;
}

.wrapper .form-field .fas {
    color: #555;
}

.wrapper .btn {
    box-shadow: none;
    width: 100%;
    height: 40px;
    color: #fff;
    border-radius: 25px;
    box-shadow: 3px 3px 3px #b1b1b1,
        -3px -3px 3px #fff;
    letter-spacing: 1.3px;
}

.wrapper .btn:hover {
    background-color: green;
    border: green;
}

.wrapper a {
    text-decoration: none;
    font-size: 0.8rem;
    color: #03A9F4;
}

.wrapper a:hover {
    color: #039BE5;
}

@media(max-width: 380px) {
    .wrapper {
        margin: 30px 20px;
        padding: 40px 15px 15px 15px;
    }
}
</style>