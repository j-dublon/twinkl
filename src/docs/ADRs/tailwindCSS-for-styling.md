# ADR: TailwindCSS for styling

Date: 2025-03-26

## Status

Accepted

## Context

This project requires a flexible and scalable styling solution for rapid development and a consistent user interface.

## Decision

Tailwind CSS has been chosen as the styling framework for the project. Tailwind enables rapid development and is highly customisable. Its tree-shaking feature ensures that only the necessary CSS is included in production builds, resulting in smaller file sizes compared to frameworks like Bootstrap, which include unused styles.

## Alternatives considered

#### Bootstrap

A widely used CSS framework that offers pre-designed components and grid systems. It promotes a consistent design language, but it can be restrictive and also may include lots of unused styles in production builds.

#### Vanilla CSS

Writing custom CSS from scratch offers full control over styles but can become difficult to maintain as the project grows, especially with complex layouts and responsiveness. It also tends to be more time-consuming for rapid prototyping.
