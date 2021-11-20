<template>
    <div>
        <div v-for="message in messages" :key="message.id">
            <div class="col-12 d-flex justify-content-start align-items-center m-2">
                <img class="mr-2" :src="getTargetUser(message.id).picture.thumbnail" alt="">
                <p><router-link v-bind:to="'/user/'+message.id+'/chat'">{{getTargetMessage(message.id)[getTargetMessage(message.id).length-1].message}}</router-link></p>
            </div>
        </div>
    </div>
</template>

<script>
import { mapState, mapGetters } from 'vuex'

export default {
    name:'messageList',
    computed: {
        ...mapState('MessagesModule',['messages']),
        ...mapGetters('UsersModule',['getUserById']),
        ...mapGetters('MessagesModule',['getMessagesById']),
    },
    methods: {
        getTargetUser:function(id){
            return this.getUserById(id)
        },
        getTargetMessage: function(id){
            return this.getMessagesById(id)
        }
    }
}
</script>