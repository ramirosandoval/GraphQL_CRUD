const { ApolloError } = require("apollo-server-core");
const { Book } = require("../models/Book.models.js");
const { connectoToDB } = require("../services/MongoDB/connectService.js");
connectoToDB();

const resolvers = {
    Query: {
        books: () => Book.find().then(data => data),
        book: (_, { id }) => Book.find({id: Number(id)}).then(book => book[0]),
    },

    Mutation:{
        createBook: async (_, args) => {
            const books = await Book.find().then(data => data);
            
            let lastID = null;
            books.length === 0 ? lastID = 0 : lastID = (books.at(-1).id +1);

            return await (
                (new Book(
                    {
                        id: lastID,
                        title:args.input.title,
                        author:args.input.author,
                        pages:args.input.pages
                    }
                )).save()
            );
        },

        updateBook: async (_, { chosenBookID, input }) =>{
            if (Object.keys(input).length < 1){
                throw new ApolloError('Update at least ONE field!');
            }

            await Book.findOneAndUpdate({id: Number(chosenBookID)}, input);
            return Book.find({id: Number(chosenBookID)}).then(book => book[0]);
        },

        deleteBook: async (_, { chosenBookID }) =>{
            const bookDeleted = Book.find({id: Number(chosenBookID)}).then(book => book[0]);
            await Book.findOneAndDelete({id: Number(chosenBookID)});

            return bookDeleted;
        },
    }
}

module.exports = resolvers;