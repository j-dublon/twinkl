# Components

This project uses a component architecture based on Atomic Design principles, which break down the user interface into smaller, reusable building blocks. The structure is organised into three primary categories: Atoms, Molecules, and Organisms. Additionally, a Data Provider structure is used to handle data-fetching logic separately from the components.

### Atoms

Atoms represent the smallest building blocks of the UI, typically corresponding to basic HTML elements or simple React components, e.g. a button or a label.

### Molecules

Molecules are combinations of atoms that form more complex UI elements. They may include small interactions or logic, such as a clickable card containing an image and some text.

### Organisms

Organisms are more complex components that are made up of multiple molecules and atoms. This project stores both the Page-level organisms (e.g. [PostsPage](../components/organisms/PostsPage/PostsPage.tsx)) and it's data provider (e.g. [PostsPageProvider](../components/organisms/PostsPage/PostsPageProvider.tsx)) in this folder.

### Data Providers

Data Providers have been used to separate the UI from the data-fetching layer. This allows components to access data from the API while being decoupled from the logic of data fetching and state management, making them easier to maintain, debug, and test.
