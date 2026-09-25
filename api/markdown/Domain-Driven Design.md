Domain-driven design (DDD) is an approach to software development that centres the design on a deep, shared model of the business domain, expressed in a ubiquitous language common to engineers and domain experts. It provides strategic patterns for partitioning large systems into bounded contexts and tactical patterns such as aggregates, entities and value objects for structuring the model within each context. DDD aims to keep complex software aligned with the evolving realities of the business it serves.

- Domain-driven design centres software design on a deep, shared [[Domain Model]] of the business, expressed in a ubiquitous language common to engineers and experts. It is an approach within [[Software Architecture]] that partitions systems into bounded contexts and naturally supports [[Microservices]] and patterns such as [[Event Sourcing]] and [[CQRS]].

### Overview

- DDD argues that the hardest part of building complex software is not the technology but understanding and modelling the problem domain accurately.
- It establishes a ubiquitous language: a rigorous, shared vocabulary used identically in conversation, documentation and code, eliminating translation errors between domain experts and developers.
- Strategic design divides a large model into bounded contexts, each with its own consistent model and explicit relationships to others mapped through context mapping.
- Tactical design supplies building blocks within a context, including entities with identity, immutable value objects, aggregates that enforce invariants, repositories and domain events.

### Mechanisms

- Bounded contexts draw clear linguistic and model boundaries so that one term means exactly one thing within each context.
- Aggregates group related objects under a root that enforces consistency rules and serves as the transactional boundary.
- Domain events capture significant occurrences, feeding patterns such as event sourcing and integration between contexts.
- Anti-corruption layers protect a model from the concepts of external or legacy systems it must integrate with.

### Applications

- Decomposing monoliths into [[Microservices Architecture]] aligned to bounded contexts.
- Designing event-driven systems using [[Event Sourcing]] and [[CQRS]] grounded in domain events.
- Aligning engineering teams with business capabilities so ownership follows the domain.
- Taming complexity in regulated, logic-heavy domains such as finance, logistics and healthcare.

### Key aspects

- DDD delivers most value in domains with genuine complexity; for simple CRUD applications it can add overhead.
- Success hinges on sustained collaboration between developers and domain experts.
- Context boundaries, not technology, should drive service boundaries to avoid distributed monoliths.

### Provenance

