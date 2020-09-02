<template>
<div class="data">
    <h3>Posts</h3>
    <p>Filter Todos : 
        <select @change="filterposts">
            <option value="100">100</option>
            <option value="50">50</option>
            <option value="30">30</option>
            <option value="10">10</option>
            <option value="5">5</option>
        </select>
    </p>
    <div class="posts">
        <div class="post" v-bind:key="post.id" v-for="post in allposts">
            <h3>Title : {{ post.title }}</h3>
            <p>Body : {{ post.body }} </p>
            <i class="fa fa-trash" @click="deletepost(post.id)" aria-hidden="true"></i>
        </div>
    </div>
</div>
</template>

<script>
import { mapGetters, mapActions} from 'vuex';
export default {
    name:"posts",
    computed : mapGetters(['allposts']),
    methods:{
        ...mapActions(['fetchposts','delete','filterfetchposts']),
        deletepost(id){
            this.delete(id);
        },
        filterposts(e){
            this.filterfetchposts(e.target.value);
        }
    },
    created(){
        this.fetchposts();
    }
}
</script>

<style scoped>
    .posts
    {
        margin-top:10px;
        display:grid;
        grid-gap:10px 15px;
        grid-template-columns:repeat(3,1fr);
    }
    .post{
        border:2px solid black;
        border-radius:25px;
        text-align:center;
        padding:0px 15px;
        background:#41b883;
        position:relative;
    }
    .fa-trash
    {
        cursor:pointer;
        position:absolute;
        right:15px;
        bottom:10px;
        color:#FFF;
    }
    @media(max-width:1174px)
    {
        .posts{
            display:grid;
            grid-template-columns:repeat(1,1fr);
        }
    }
</style>