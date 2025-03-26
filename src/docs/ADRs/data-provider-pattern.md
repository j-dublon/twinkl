# ADR: Data Provider Pattern

Date: 2025-03-26

## Status

Accepted

## Context

This project needs to manage the flow of data between various components and services in a way that allows for flexibility, scalability, and separation of concerns. Components need to access data from the API while being decoupled from the logic of data fetching and state management, to make them easier to maintain, debug, and test.

## Decision

The data provider pattern was chosen for this project. By creating dedicated data provider components, the data-fetching logic has been separated from the UI components, ensuring separation of concerns. While this app is currently quite small and simple, the intention is to add further features of unknown complexity, therefore it has been structured in a way to allow for this.

## Alternatives considered

#### Component-Specific State (local state management)

This is a simple implementation and quite easy to understand, but it is only suitable for small apps with simple components and data needs. It does not scale well, causes tighter coupling between components and data-fetching logic, and makes it impossible to test the UI layer in isolation. It makes the app harder to maintain and debug in the long run.
