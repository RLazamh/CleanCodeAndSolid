import { PostService } from './05-dependency-b';
import { JsonDBService, LocalDataBaseService, WebApiPostService } from './05-dependency-c';


// Main
(async () => {

    // const provider = new LocalDataBaseService();
    // const provider = new JsonDBService();
    const provider = new WebApiPostService();

    const postService = new PostService( provider );

    const posts = await postService.getPosts();

    console.log({ posts })


})(); 