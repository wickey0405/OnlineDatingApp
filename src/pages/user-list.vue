<template>
    <div class="container d-flex flex-wrap">
        <div v-for="user in users" :key="user.id" class="col-4">
            <div class="card m-1">
                <img :src="user.picture.large" class="card-img-top" alt="...">
                <div class="card-body">
                    <h5 class="card-title"><router-link v-bind:to="'/user/'+user.id">{{ user.name }}</router-link></h5>
                    <p class="card-text">age: {{ user.age }}</p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { mapState } from 'vuex'
import { mapGetters } from 'vuex'

export default{
    name:'userList',
    computed: {
        ...mapState('UsersModule',['users']),
        ...mapGetters('UsersModule',['existUsers'])
    },
    created: function() {
        if(!this.existUsers){
            let range = n => Array.from({length: n}, (v, i) => i);
            let temp = range(15); // amount of members
            temp.forEach(()=>this.$store.dispatch('UsersModule/fetchUsers'))
        } 
    },
}
</script>
