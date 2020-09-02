<template>
    <div class="addpost">
        <form @submit="addapost">
            <input type="text" v-model="title" placeholder="Enter Title" required>
            <input type="text" v-model="body" placeholder="Enter Description" required>
            <button type="submit">Add a Post</button>
        </form>
    </div>
</template>

<script>
import { mapActions } from 'vuex';
export default {
    name : "addpost",
    data(){
        return {
            title : '',
            body : ''
        }
    },
    methods:{
        ...mapActions(['addpost']),
        addapost(e){
            e.preventDefault();
            this.addpost({ title : this.title, body : this.body });
        }
    }
}
</script>

<style scoped>
    form
    {
        display:flex;
        flex-direction:column;
    }
    form input[type="text"]{
        flex:5;
        margin:10px;
        padding:10px;
        border:2px solid #41b883;
        border-radius:5px;
    }
    form button{
        cursor:pointer;
        flex:2;
        background:#0275d8;
        border:0px;
        padding:10px;
        color:#FFF;
    }
    @media(max-width:1174px)
    {
       form{
           flex-direction:column;
       }
       form button[type="submit"]{
           margin-top:5px;
       }
    }
</style>