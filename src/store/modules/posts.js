import axios from 'axios';

const state={
    Allposts :[],
};

const getters ={ allposts : (state) => state.Allposts};

const actions ={
    fetchposts({ commit }){
        axios.get('https://jsonplaceholder.typicode.com/posts')
        .then(res => commit('setposts', res.data))
        .catch(err => console.log(err));
    },
    addpost({ commit },title){
        const putdata = {
            title : title,
            body : 'eum sed dolores ipsam sint possimus debitis occaecati debitis qui qui et ut placeat enim earum aut odit facilis consequatur suscipit necessitatibus rerum sed inventore temporibus consequatur'
        }
        axios.post('https://jsonplaceholder.typicode.com/posts',putdata)
        .then(res => commit('addthepost' , res.data))
        .catch(err => console.log(err));
    },
    delete({ commit } , id){
        commit('deletethepost',id);
    },
    filterfetchposts( { commit } , limit){
        axios.get(`https://jsonplaceholder.typicode.com/posts?_limit=${limit}`)
        .then(res => commit('filterposts',res.data))
        .catch(err => console.log(err));
    }
};

const mutations ={
    setposts: (state , posts) => {
        state.Allposts = posts;
    },
    addthepost : (state,post) => {
        state.Allposts.unshift(post);
    },
    deletethepost : (state,id) => {
        console.log(id);
        state.Allposts = state.Allposts.filter((post) => post.id !== id);
    },
    filterposts : (state,data) => {
        state.Allposts = data;
    }
};


export default{
    state,
    getters,
    actions,
    mutations
}