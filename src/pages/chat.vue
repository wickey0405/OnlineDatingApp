<template>
    <div>
        <div class="container vh-75 bg-white overflow-auto" id="scroll-area">
            <div class="row w-100">
                
                <div class="col-12 d-flex align-items-center my-1" v-for="(targetComment,index) in targetComments" :key="index">
                    <div class="col-12 d-flex" :class="{'justify-content-end':isYourComment(targetComment),'justify-content-start':!isYourComment(targetComment) }">
                        <img v-if="!isYourComment(targetComment)" :src="targetUser.picture.thumbnail" alt="">
                        <div class="balloon col-10 text-left rounded text-break" :class="{YourBackground:isYourComment(targetComment), targetUserBackground:!isYourComment(targetComment)}">{{targetComment.message}}</div>
                        <img class="pictureStyle" v-if="isYourComment(targetComment)" :src="yourPictureURL" alt="">
                    </div>
                </div>
            </div>
        </div>
        <div class="container mt-2">
            <div class="input-group mb-3 col-12">
                <input type="text" class="form-control" placeholder="your message" aria-label="Recipient's username" aria-describedby="button-addon2" v-model="tempMessage" v-on:keyup.enter="sendMessage">
                <button class="btn btn-outline-secondary" type="button" id="button-addon2" v-on:click="sendMessage" :disabled="tempMessage === ''">send</button>
            </div>
        </div>
    </div>
    
</template>

<script>
import { mapMutations, mapState } from 'vuex'
import { mapGetters } from 'vuex'

export default {
    name:'Chat',
    props:{
        id: String
    },
    data(){
        return {
            targetUser:{},
            targetComments:[],
            tempMessage: "",
            yourPictureURL:"https://img-www4.hp-ez.com/img/tokoron-project/img_20140616-190149.jpg",
        }
    },
    computed: {
        ...mapState('UsersModule',['users']),
        ...mapState('MessagesModule',['messages']),
        ...mapGetters('UsersModule',['getUserById']),
        ...mapGetters('MessagesModule',['getMessagesById']),      
    },
    created: function() {
        this.targetUser = this.getUserById(this.id)
        this.targetComments = this.getMessagesById(this.id)
        // console.log(this.targetComments)
        // console.log(this.targetUser)
    },
    updated: function() {
        const scrollArea = document.getElementById('scroll-area')
            console.log(scrollArea)
            if (scrollArea){
                scrollArea.scrollTop = scrollArea.scrollHeight;
            }
    },
    methods: {
        ...mapMutations('MessagesModule',['setMessages']),

        autoScroll:function(){
            const scrollArea = document.getElementById('scroll-area')
            // console.log(scrollArea)
            if (scrollArea){
                scrollArea.scrollTop = scrollArea.scrollHeight;
                console.log('scroll done')
            }
        },

        isYourComment:function(target){
            return target.id === 'YOU'
        },
        sendMessage:function(){
            // console.log(this.targetComments)
            const inData = {
                'id': 'YOU',
                'message': this.tempMessage,
            }
            this.targetComments.push(inData);
            this.setMessages([this.targetComments,this.id])
            // this.autoScroll;
            this.fetchMessage(this.tempMessage)
            this.tempMessage = ""
        },
        fetchMessage(text){
            let formdata = new FormData();
            //- apikeyパラメーター 
            formdata.append('apikey',process.env.VUE_APP_APIKEY);
            //- コメント
            formdata.append('query',text);
            fetch('https://api.a3rt.recruit.co.jp/talk/v1/smalltalk',{
                method: 'POST',
                body: formdata
            }).then(response=>response.json())
            .then(data => {
                this.pushMessage(data.results[0].reply)
            }).then(this.autoScroll)
        },
        pushMessage(comment){
            const targetUserData = {
                'id': this.id,
                'message': comment
            }
            this.targetComments.push(targetUserData)
            this.setMessages([this.targetComments,this.id])
            // console.log(this.messages)
        },
    }
}
</script>

<style scoped>
    .vh-75{
        height: 75vh!important;
    }
    .balloon {
        position: relative;
        display: inline-block;
        margin: 0 1.5rem;
        padding: 0.5rem;
        min-width: 1rem;
        max-width: 100%;
        color: #555;
        font-size: 16px;
        background: #e0edff;
    }
    .targetUserBackground {
        background:#e0edff
    }
    .YourBackground {
        background: #90f37c;
    }
    img {
        border-radius: 50%; 
    }
    .pictureStyle {
        width: 48px;
        height: 48px
    }

</style>