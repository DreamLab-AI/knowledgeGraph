- ### Definition
  - Test-Driven Development is rooted in Software Testing and relates to [[Continuous Integration]], [[Extreme Programming]], [[Quality Assurance]]. Test-driven development is a software practice in which developers write an automated test that defines a desired behaviour before writing the code to satisfy it, then refactor once the test passes.

- ### Overview
  - Test-driven development inverts the usual order of work: the test is written first, capturing the intended behaviour as an executable specification.
  - The practice follows a short cycle, often summarised as red, green, refactor: write a failing test, make it pass simply, then improve the design.
  - Originating in extreme programming, it has become a mainstream discipline associated with high test coverage and confident refactoring.

- ### Mechanisms
  - A developer writes a small automated test expressing a single new behaviour, which initially fails.
  - Just enough production code is written to make the failing test pass.
  - With the test green, the code and tests are refactored to remove duplication and improve clarity.
  - The cycle repeats in small increments, building behaviour and its regression suite together.

- ### Applications
  - Building libraries and services where regression protection is critical.
  - Refactoring legacy code by first establishing characterisation tests.
  - Driving API design from the consumer's point of view.
  - Underpinning continuous integration pipelines with reliable fast tests.

- ### Relationships
  - subClassOf:: [[Software Testing]]
  - uses:: [[Continuous Integration]]
  - uses:: [[Code Review]]
  - requires:: [[Software Testing]]
  - requires:: [[Quality Assurance]]
  - enables:: [[Continuous Delivery]]
  - enables:: [[Software Engineering]]
  - implements:: [[Extreme Programming]]
  - supports:: [[DevOps]]
  - supports:: [[Software Development]]
  - dependsOn:: [[Agile Software Development]]
  - contrastsWith:: [[Software Architecture]]
  - relatedTo:: [[Software Engineering]]
  - relatedTo:: [[Quality Assurance]]

- ### Provenance
  - updated:: 2026-06-15
  - attributedTo:: did:nostr:ontology-mesh
  - inferenceRule:: GapMaterialisation