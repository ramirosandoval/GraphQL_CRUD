<template>
    <v-card flat tile outlined class="text-start d-flex" height="100%">
            
        <div>
            <v-card-title class="">
            {{currentBook.title}}
            </v-card-title>

            <v-card-subtitle class="subtitle">
                {{currentBook.author}}
                <br>
                pages: {{currentBook.pages}}

            </v-card-subtitle>
        </div>
        

        <v-spacer></v-spacer>

        <v-card-actions class="pl-0 ml-0 buttons">
            
            <BookActions role="edit"></BookActions>
            <BookActions role="erase"></BookActions>

        </v-card-actions>
        
    </v-card>
</template>

<script>
import BookActions from './bookActions.vue';
    export default{
    props: ["currentBook"],
    components: { BookActions }
}

</script>

<style scoped>
    .subtitle{
        color: gray;
        line-height: 20px;
    }

    .buttons{
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        justify-items: center;
    }

    div{
        line-height: large;
    }

    /* .pages{
        font-size: small;
    } */
</style>