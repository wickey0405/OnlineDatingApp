export default {
    namespaced: true,
    state: {
        messages:[]
    },
    mutations:{
        setMessages (state, payload){
            const temp = {
                'id': payload[1],
                'messagesWithThisId': payload[0]
            }
            if (state.messages.filter(message=>message.id === temp.id).length === 0){
                state.messages.push(temp)
            } else {
                state.messages.filter(message => message.id === temp.id)[0] = temp
            }
        }
    },
    getters:{
        getMessagesById(state){
            return id => {
                if(state.messages.filter(message => message.id === id).length === 0) return []// まだ会話がない場合は空を返す
                else {console.log(state.messages) ;return state.messages.filter(message => message.id === id)[0].messagesWithThisId}
                // return state.messages.filter(message => message.id === id)[0].comments
            }
        },
        existMessages(state){
            return state.messages.length !== 0;
        }
    },
    actions:{
        
    }
}