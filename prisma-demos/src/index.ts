import { get } from "http";
import { PrismaClient } from "../generated/prisma";

const prisma = new PrismaClient();

// 1.to create a new movie 
async function createMovie() {
    const newMovie = await prisma.movie.create({
        data: {
            // title: "Inception",
            // description:"a cinematic masterpiece that seamlessly blends science fiction and psychological thriller, taking viewers on a mind-bending journey through dreams within dreams.",
            title: "Amazing Spider Man",
            description: " fantastic movie that explores the concept of dreams and reality, featuring a skilled thief who enters the dreams of others to steal secrets.",
            genre: "Science Fiction",
            releaseDate: new Date("2027-07-16"),
            rating: 8.8
        },
    });
    console.log(newMovie);
}

// 2.to create multiple movies
async function createMultipleMovies() {
   const movies = await prisma.movie.createMany({
        data: [
            {
                title: "Inception",
                description: "A mind-bending thriller that explores the world of dreams and reality.",
                genre: "Science Fiction",
                releaseDate: new Date("2010-07-16"),
                rating: 8.8
            },
            {
                title: "The Matrix",
                description: "A groundbreaking sci-fi film that questions the nature of reality.",
                genre: "Science Fiction",
                releaseDate: new Date("1999-03-31"),
                rating: 8.7
            },
            {
                title: "Interstellar",
                description: "A visually stunning journey through space and time, exploring love and sacrifice.",
                genre: "Science Fiction",
                releaseDate: new Date("2014-11-07"),
                rating: 8.6
            }

        ]
    })
    console.log(movies);
}

// 3.to get all movies
async function getAllMovies() {
    const movies = await prisma.movie.findMany();
    console.log(movies);
}

// 4.to get a movie by id
async function getMovieById(movieId:number) {
    const movie = await prisma.movie.findUnique({
        where:{id : movieId}
    })
    console.log(movie);
}

// 5.to Update a movie 
async function updateMovie(
    movieId: number,
    updatedTitle: string,
    updatedDescription: string,
) {
    const updateMovie = await prisma.movie.update({
        where: { id: movieId },
        data: {
            title: updatedTitle,
            description: updatedDescription
        }
    })
    console.log(updateMovie);
}

// 6.to delete a movie

async function deleteMovie(movieId: number) {
    const deletedMovie = await prisma.movie.delete({
        where: { id: movieId }
    });
    console.log(deletedMovie);
}


async function main() {
    //C.R.U.D
   // await createMovie();
   // await createMultipleMovies();
   // await getAllMovies();
   // await getMovieById(2);
   // await  updateMovie(2, "Updated Movie Title", "Updated movie description with more details.");
   await deleteMovie(2);

}


main()
.then(async () => await prisma.$disconnect())
.catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
});