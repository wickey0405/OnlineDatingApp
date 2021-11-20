<template>
    <div class="container shadow">
        <div class="row flex-column justify-content-center">
            <div class="col m-2">
                <img v-bind:src="targetUser.picture.large" class="vh-30">
            </div>
            <div class="col m-2">
                <router-link :to="'/user/'+targetUser.id+'/chat'">
                    <button style="button" class="btn btn-secondary">message</button>
                </router-link>
            </div>
        </div>
        <div class="row justify-content-center">
            <div class="col-10">
                <table class="table table-font-size">
                    <tbody>
                        <tr>
                            <td>Name</td>
                            <td>{{ targetUser.name }}</td>
                        </tr>
                        <tr>
                            <td>Gender</td>
                            <td>{{ targetUser.gender }}</td>
                        </tr>
                        <tr>
                            <td>Age</td>
                            <td>{{ targetUser.age }}</td>
                        </tr>
                        <tr>
                            <td>Country</td>
                            <td>{{ targetUser.country }}</td>
                        </tr>
                        <tr>
                            <td>State</td>
                            <td>{{ targetUser.state }}</td>
                        </tr>
                        <tr>
                            <td>City</td>
                            <td>{{ targetUser.city }}</td>
                        </tr>
                        <tr>
                            <td>Email</td>
                            <td>{{ targetUser.email }}</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </div>

</template>

<script>
import { mapState } from 'vuex'
import { mapGetters } from 'vuex'

export default {
    name:'UserDetail',
    props:{
        id: String
    },
    data(){
        return {
            targetUser:{}
        }
    },
    computed: {
        ...mapState('UsersModule',['users']),
        ...mapGetters('UsersModule',['getUserById'])
    },
    created: function() {
        this.targetUser = this.getUserById(this.id)
        // this.setTargetUser(this.id)
    },
}
</script>

<style scoped>
    .vh-30{
        height: 30vh!important;
    }
    .table-font-size{
        font-size: 0.8rem;
    }
</style>