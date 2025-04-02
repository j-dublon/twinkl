# Feedback and updates

Four potential improvements were highlighted on submission of this project:

- Observed four API calls to retrieve all posts upon page mount or refresh.
- Deleting a post triggers an API call, but the DOM does not reflect the change.
- Triggering an error does not render the error component, suggesting a need for more robust error handling tests.
- While the test suite shows good coverage, critical tests did not detect actual errors during testing. Specifically, mocking the error component did not simulate real-world scenarios, and services were mocked as functions rather than promises

## Updates

### Four API calls to retrieve all posts upon page mount or refresh

I verified that each of the two useEffects runs twice on page mount or refresh. They are running twice because the app is in StrictMode, which [automatically runs effects an additional time](https://react.dev/reference/react/StrictMode). However, the second useEffect (below) should not run on page mount/refresh at all, and should only run when searchTerm changes.

```
useEffect(() => {
    getPosts(searchTerm);
  }, [searchTerm]);
```

I have updated it so that it compares the searchTerm value to a previous value held in a ref ("prevSearchTermRef"). This useEffect now does not run at all on page mount/refresh - only when the searchTerm is manually changed by the user.

```
  useEffect(() => {
    if (searchTerm !== prevSearchTermRef.current) {
      getPosts(searchTerm);
      prevSearchTermRef.current = searchTerm;
    }
  }, [searchTerm]);
```

### Deleting a post triggers an API call, but not reflected in the DOM

As I mentioned in the [services.md](./services.md) file, the deletePost service has no effect on the UI, because the endpoint does not actually delete a post when a request is made to delete a post - it simply returns a 200 status code. I have added a client-side filter of the posts currently held in state to remove the deleted item, so this change is now reflected in the UI. The post returns once the page is refreshed however, as the item still exists on the back end.

### Triggering an error does not render the error component

I was unable to reproduce this issue - I blocked the posts request URL using dev tools, and saw the error component.
