# Services

This project uses services to support the separation of concerns between the data layer and the UI layer. Services are called by DataProvider components, which then pass the data to UI-only components.

### Posts services

This project currently only has one services file, [posts.ts](../services/posts.ts). This contains the services necessary to perform CRUD operations related to posts (fetch posts, delete posts etc). If/when the project is expanded to include more functionality and potentially interact with other APIs, further services files may be added.

### Posts deletePost service

The [deletePost](../services/posts.ts) service currently has no effect on the UI, as the endpoint provided by the API does not actually delete a post when a request is made to delete a post. It simply returns a 200 status code.
