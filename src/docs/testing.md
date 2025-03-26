# Testing

This project uses [vitest](https://vitest.dev/) and [React Testing Library](https://testing-library.com/docs/react-testing-library/intro/) for testing.

### Test files

Test files for components have been co-located with the components themselves. Mock test data that is relevant only to one component is colocated with the component in a `fixtures.ts` file. Mock test data relevant to multiple test files is stored in the [mockData](src/tests/mockData/index.ts) file.

### Component mocking

Sub-components have been mocked; mock components are co-located with the component and its test file in a `mock-components.ts` file. This allows for each component to be tested in isolation, without being affected by the behaviour of its child components. It also reduces unnecessary rendering and computation, leading to faster tests.

### To run the tests:

`yarn test`
