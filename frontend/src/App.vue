<template>
  <v-app>
    <v-main>
      <v-app-bar
      color="primary"
      class="text-no-wrap text-center align-center"
      dark
      >
        <v-app-bar-title class="title">Digital Bookshelf</v-app-bar-title>

        <v-spacer/>

        <v-text-field
          hide-details
          append-icon="mdi-magnify"
          single-line
          class="shrink"
          placeholder="search any book"
        />
      </v-app-bar>


      <div v-if="this.books.length === 0" class="noBooksCardContainer ">
        <v-card flat>
          <v-card-text class="text-center mt-0 pt-0">
          You don't have any book :(
          </v-card-text>
        </v-card>
      </div>

      <v-row no-gutters>
        <v-col
         cols=12
         ls="2"
         md="3"
         sm="6"

         v-for="book in books"
         :key="book.id"
        >
          <BookCard :currentBook="book" ></BookCard>
        </v-col>
      </v-row>
      
    </v-main>
  </v-app>
</template>

<script>
import BookCard from "../components/bookCard.vue";
  export default {
    name: 'App',

    components: { BookCard },

    data: () => ({
      searchedBooks : [],
      books : [],
      currentBook : null,
    }),

    methods: {
      async getBooks() {
        const axios = require("axios");
        const query = `
        query getBooks{
          books{
          id,
          title,
          author,
          pages
          }
        }`;
        const graphqlResponse = await axios.post('http://localhost:4000/graphql', {query});
        this.books = graphqlResponse.data.data.books;
        console.log(this.books);
      }
    },

    mounted() {
      this.getBooks();
    }
  };


</script>

<style scoped>
  .noBooksCardContainer{
    height: 90%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-bottom: 0;
    padding-bottom: 0;
  }

</style>