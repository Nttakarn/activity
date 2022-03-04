<template>
<div class="home">
    <p v-if="loading" class="post--empty">Loading....</p>
    <ul v-else>
        <li v-for="post in posts" :key="post.id">

            {{ post.id }}

        </li>
    </ul>
</div>
</template>

<script>
// @ is an alias to /src
/* eslint-disable */

import axios from "axios";
export default {
    name: "Home",
    data() {
        return {
            posts: null,
            loading: false,
            del: null,
        };
    },
    created() {
        this.getPosts();
        this.list_coin();
    },
    methods: {
        async getPosts() {
            this.loading = true;
            try {
                let res = await axios({
                    url: "https://jsonplaceholder.typicode.com/posts",
                    method: "GET",
                });
                let posts = res.data;
                this.posts = posts;
                this.loading = false;
            } catch (error) {
                this.loading = false;
            }
        }
    },
};
</script>
