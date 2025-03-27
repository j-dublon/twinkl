# Next steps

As this challenge was only to take around 3 hours, there are several things that could be improved upon, and that could be seen as possible next steps.

### Improved list performance

The current data set is not particularly large; in order to make this app scalable, and able to handle large datasets, it would be wise to use either lazy loading or virtualisation to render the list. Lazy loading makes async calls to fetch new data as the user moves down the viewport; virtualisation is similar, but only renders what is currently in the viewport (so not the items that are now above the viewport).

### Improved logging

If this app were for production, it would be necessary to add a proper logging service, e.g. LogRocket, to allow for proper logging of production builds.

### Improved styling

Only very basic styling has been applied so far; obviously it could be much better, for example by adding an animated loading spinner. Another styling improvement would be to define some reusable styles and apply them using Tailwind, for example, the focus styles I have added in a couple of places for accessibility (`focus:outline-none focus:ring-2 focus:ring-blue-500`).
