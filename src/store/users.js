export default {
    namespaced: true,
    state: {
        users:[],
        // targetUser:{}
    },
    mutations:{
        setUsers(state, payload){
            state.users.push(payload);
        },
        // setTargetUser(state, payload){
        //     state.targetUser = this.getUserById(payload)
        // }
    },
    getters:{
        getUserById(state){
            return id => {
                return state.users.filter(user => user.id === id)[0]
            }
        },
        existUsers(state){
            return state.users.length !== 0;
        }
    },
    actions:{
        fetchUsers (context){
            fetch('https://randomuser.me/api/')
                .then(response => response.json())
                .then(data => {
                  const temp = data.results[0];
                  const user = {
                    id: temp.login.uuid,
                    name: temp.name.title + " " + temp.name.first + " " + temp.name.last,
                    gender: temp.gender,
                    age: temp.dob.age,
                    country: temp.location.country,
                    state: temp.location.state,
                    city: temp.location.city,
                    email: temp.email,
                    picture:{
                        large: temp.picture.large,
                        medium: temp.picture.medium,
                        thumbnail: temp.picture.thumbnail
                    }
                  }
                //   console.log(data)
                  return user
                })
                .then(user=>context.commit("setUsers", user));
          },
    },
}