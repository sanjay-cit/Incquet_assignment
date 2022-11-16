<template>
    <div>
        <nav class="navbar fixed-top navbar-expand-md flex-nowrap navbar-new-top">
            <div class="navbar-brand"><img class="logo" src="../assets/nav.png" alt=""/></div>
            <ul class="nav navbar-nav mr-auto"></ul>
            <ul class="navbar-nav flex-row">
                <li class="nav-item">
                    <button type="button" class="btn btn-danger" :disabled="!flag" @click="signOut()">Sign Out</button>
                </li>
            </ul>
        </nav>
    </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
    name: 'NavBar',
    computed: {
    ...mapGetters(["getUser"])
    },
    watch: {
        getUser (val) {
            if(val.code == 0) {
                this.flag = true
            } else {
                this.flag = false
            }
        }
    },
    data() {
        return {
            flag: false
        }
    },
    methods: {
        signOut () {
            this.$store.state.user = {}
            this.flag = false
            this.$router.push('/')
        }
    },
}
</script>

<style scoped>
.navbar-new-top{
    background: grey;
}
.navbar-brand{
    font-weight: 600;
}
.navbar-brand img{
    height: 50px;
    width: 80px;
}
.navbar-new-top ul{
    margin-right: 9%;
}
.navbar-new-top ul li{
    margin-right: 8%;
}
.navbar-nav .nav-item a {
    color: #333;
    font-size: 14px;
    font-weight: 600;
    transition: 1s ease;
}
.navbar-nav .nav-item a:hover{
    color: #0062cc;
}
.navbar-expand-md {
    justify-content: space-around;
}
.btn-danger{
    width: 161%;
    cursor: pointer;
}
</style>