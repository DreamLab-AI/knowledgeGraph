Test-driven development is a software practice in which developers write an automated test that defines a desired behaviour before writing the code to satisfy it, then refactor once the test passes. This red-green-refactor cycle drives design from the perspective of usage and ensures that every feature is covered by tests as it is built. The discipline tends to produce modular, well-specified code and a comprehensive regression suite.

### Overview

- Test-driven development inverts the usual order of work: the test is written first, capturing the intended behaviour as an executable specification.
- The practice follows a short cycle, often summarised as red, green, refactor: write a failing test, make it pass simply, then improve the design.
- Originating in extreme programming, it has become a mainstream discipline associated with high test coverage and confident refactoring.

### Mechanisms

- A developer writes a small automated test expressing a single new behaviour, which initially fails.
- Just enough production code is written to make the failing test pass.
- With the test green, the code and tests are refactored to remove duplication and improve clarity.
- The cycle repeats in small increments, building behaviour and its regression suite together.

### Applications

- Building libraries and services where regression protection is critical.
- Refactoring legacy code by first establishing characterisation tests.
- Driving API design from the consumer's point of view.
- Underpinning continuous integration pipelines with reliable fast tests.

### Provenance

