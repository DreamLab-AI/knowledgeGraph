public:: true

# Design Pattern
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:94c9534489b589f692358468a2b076e008fc2cb44ae20df57cd7f5d50584d5bb",
  "@type": "Page",
  "vc:slug": "design-pattern",
  "title": "Design Pattern",
  "vc:public": true,
  "vc:outboundWikilinks": [
    {
      "@id": "urn:visionflow:linked:software-engineering",
      "vc:label": "Software Engineering"
    },
    {
      "@id": "urn:visionflow:linked:software-architecture",
      "vc:label": "Software Architecture"
    },
    {
      "@id": "urn:visionflow:linked:refactoring",
      "vc:label": "Refactoring"
    }
  ],
  "vc:schemaVersion": 2,
  "prov:wasAttributedTo": {
    "@id": "did:nostr:ontology-mesh"
  },
  "prov:generatedAtTime": {
    "@value": "2026-08-06T00:00:00Z",
    "@type": "xsd:dateTime"
  }
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:design-pattern",
  "@type": "Class",
  "label": "Design Pattern",
  "definition": "A named, reusable solution template for a recurring design problem in software, describing the participating roles, their collaborations, and the trade-offs of applying the solution in a given context. Catalogued most famously by the Gang of Four as creational, structural, and behavioural patterns, design patterns form a shared vocabulary that lets engineers communicate architecture concisely, guide refactoring towards proven structures, and evaluate components against well-understood alternatives.",
  "domain": "infrastructure",
  "maturity": "mature",
  "subClassOf": {
    "@id": "urn:ngm:class:software-engineering",
    "label": "Software Engineering"
  },
  "relations": {
    "partOf": [
      {
        "@id": "urn:ngm:class:software-architecture",
        "label": "Software Architecture"
      }
    ],
    "enables": [
      {
        "@id": "urn:ngm:class:refactoring",
        "label": "Refactoring"
      }
    ],
    "relatedTo": [
      {
        "@id": "urn:ngm:class:component",
        "label": "Component"
      },
      {
        "@id": "urn:ngm:class:reference-architecture",
        "label": "Reference Architecture"
      }
    ]
  },
  "quality": 0.8,
  "provenance": {
    "attributedTo": "did:nostr:ontology-mesh",
    "generatedAt": "2026-08-07T00:00:00Z",
    "inferenceRule": "ResearchAugment"
  }
}
```

- ### Definition
  - "A named, reusable solution template for a recurring design problem in software, describing the participating roles, their collaborations, and the trade-offs of applying the solution in a given context. Catalogued most famously by the Gang of Four as creational, structural, and behavioural patterns, design patterns form a shared vocabulary that lets engineers communicate architecture concisely, guide refactoring towards proven structures, and evaluate components against well-understood alternatives."

- ### Semantic Classification
  - owl-class:: infrastructure:DesignPattern
  - owl-role:: Concept

- ### Relationships
  - is-subclass-of:: [[Software Engineering]]
  - part-of:: [[Software Architecture]]
  - enables:: [[Refactoring]]
  - related-to:: [[Component]]

- ### Content

  ## Definition

  A **design pattern** is a documented, named solution to a problem that recurs across software designs. The idea was borrowed from the architect Christopher Alexander's pattern language for buildings and brought into software by the "Gang of Four" — Gamma, Helm, Johnson, and Vlissides — whose 1994 book *Design Patterns: Elements of Reusable Object-Oriented Software* catalogued 23 patterns in three families: **creational** (Factory Method, Abstract Factory, Builder, Singleton), **structural** (Adapter, Composite, Decorator, Facade, Proxy), and **behavioural** (Observer, Strategy, Command, Iterator, State, Visitor).

  A pattern is more than a code snippet: the canonical form documents intent, motivation, applicability, structure, participants, collaborations, consequences, and known uses. This makes patterns simultaneously a design tool and a *communication* tool — "make it an Observer" transmits a whole collaboration structure in three words. Patterns operate at a middle altitude: below the system-level styles of [[Software Architecture]] (layered, microservices, event-driven) and above idioms of a particular language. Fowler's *Patterns of Enterprise Application Architecture* and the messaging patterns of Hohpe and Woolf extended the vocabulary to distributed and enterprise systems (Repository, Unit of Work, Message Bus, Circuit Breaker).

  Patterns and [[Refactoring]] are twin disciplines: rather than being designed in up front, patterns are most safely introduced by refactoring towards them once duplication or rigidity demonstrates the need. The corresponding failure mode is pattern overuse — speculative abstraction that adds indirection without earning it. A further critique, made by Norvig and others, is that many classical patterns are workarounds for missing language features: first-class functions subsume Strategy and Command, and language-level constructs have absorbed Iterator and Observer in most modern ecosystems.

  ## Current Landscape

  - **Modern catalogues**: cloud and distributed-systems patterns (sidecar, saga, event sourcing, CQRS, circuit breaker) are the active frontier, documented by Microsoft's Azure Architecture Center and books such as *Designing Data-Intensive Applications*.
  - **Language evolution**: functional and multi-paradigm languages have folded several GoF patterns into syntax; pattern literacy now includes knowing when a pattern is unnecessary.
  - **Anti-patterns**: the companion vocabulary (God Object, Big Ball of Mud, Golden Hammer) names recurring *bad* solutions and is equally important in code review.
  - **Tooling and AI**: static analysers detect pattern and anti-pattern instances, and LLM coding assistants reproduce pattern structures readily — increasing the premium on human judgement about whether a pattern is warranted at all.
