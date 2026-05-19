public:: true

# Automated Planning
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:daa9d05954005c86cdf630549096652bd9aff459c8eb09aee4ed817b23d1b5e2",
  "@type": "Page",
  "vc:slug": "automated-planning",
  "title": "Automated Planning",
  "vc:public": true,
  "vc:outboundWikilinks": [
    {
      "@id": "urn:visionflow:linked:autonomous-systems",
      "vc:label": "Autonomous Systems"
    },
    {
      "@id": "urn:visionflow:owl:class:autonomous-robot",
      "vc:label": "Autonomous Robot"
    },
    {
      "@id": "urn:visionflow:owl:class:planning-and-scheduling",
      "vc:label": "Planning and Scheduling"
    }
  ],
  "vc:schemaVersion": 2,
  "vc:legacyProperties": [
    {
      "vc:key": "legacy-term-id",
      "vc:value": "AI-1008"
    },
    {
      "vc:key": "preferred-term",
      "vc:value": "Automated Planning"
    }
  ],
  "prov:wasAttributedTo": {
    "@id": "did:nostr:jjohare"
  },
  "prov:generatedAtTime": {
    "@value": "2026-05-18T07:12:05Z",
    "@type": "xsd:dateTime"
  }
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:automated-planning",
  "@type": "Class",
  "label": "Automated Planning",
  "definition": "Automated Planning is a artificial intelligence concept and a type of Planning and Scheduling. that enables Autonomous Systems.",
  "domain": "artificial-intelligence",
  "maturity": "draft",
  "subClassOf": [
    {
      "@id": "urn:ngm:class:ai-technique",
      "label": "AI Technique"
    },
    {
      "@id": "urn:ngm:class:planning-and-scheduling",
      "label": "Planning and Scheduling"
    }
  ],
  "relations": {
    "enables": [
      {
        "@id": "urn:ngm:class:autonomous-system",
        "label": "Autonomous Systems"
      }
    ]
  },
  "quality": 0.5,
  "provenance": {
    "attributedTo": "did:nostr:jjohare",
    "generatedAt": "2026-05-18T07:12:05Z",
    "inferenceRule": "R1Explicit"
  }
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:annotation:link-resolutions:automated-planning:776c802a9fc9",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:daa9d05954005c86cdf630549096652bd9aff459c8eb09aee4ed817b23d1b5e2"
  },
  "vc:resolutions": [
    {
      "raw": "[[Autonomous Systems]]",
      "resolved": "urn:visionflow:linked:autonomous-systems",
      "kind": "StubLink"
    },
    {
      "raw": "[[Autonomous Robot]]",
      "resolved": "urn:visionflow:owl:class:autonomous-robot",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Planning and Scheduling]]",
      "resolved": "urn:visionflow:owl:class:planning-and-scheduling",
      "kind": "ResolvedLink"
    }
  ],
  "prov:wasAttributedTo": {
    "@id": "did:nostr:lcr-swarm"
  },
  "prov:generatedAtTime": {
    "@value": "2026-05-18T07:12:05Z",
    "@type": "xsd:dateTime"
  }
}
```


- ### Definition
  - Automated Planning is a concept within the ai domain.

- ### Semantic Classification
  - owl-class:: artificial-intelligence:AutomatedPlanning
  - owl-role:: Concept

- ### Relationships
  - is-subclass-of:: [[Planning and Scheduling]]
  - enables:: [[Autonomous Systems]]
  - bridges-to:: [[Autonomous Robot]] (domain: rb)

- ### Content

  ### Definition
  Automated planning is the computational study of deliberation processes that generate action sequences to achieve specified goals. It involves representing states, actions, and goals formally, then using algorithmic techniques to synthesize plans that transform initial states into goal states while respecting domain constraints and optimizing objectives.

  ### Representation Components
  **States:**
  - Propositional/first-order logic
  - State variables
  - Fluents (changing properties)

  **Actions:**
  - Preconditions (when applicable)
  - Effects (state changes)
  - Costs/durations

  **Goals:**
  - Desired state properties
  - Optimization criteria

  ### Planning Languages
  - STRIPS (Stanford Research Institute Problem Solver)
  - ADL (Action Description Language)
  - PDDL (Planning Domain Definition Language)
  - RDDL (Relational Dynamic Influence Diagram Language)

  ### Planning Techniques
  **Graph-based:**
  - Planning graphs
  - GraphPlan algorithm

  **State-space Search:**
  - Forward search (progression)
  - Backward search (regression)
  - Heuristic search (Fast Forward, A*)

  **Plan-space Search:**
  - Partial-order planning
  - Hierarchical task networks (HTN)

  **SAT-based Planning:**
  - Encode as satisfiability problem
  - Use SAT solvers

  ### Applications
  - Autonomous robot missions
  - Space mission planning (NASA Deep Space 1)
  - Manufacturing process planning
  - Video game AI
  - Logistics and transportation
  - Automated software configuration

- ### Provenance
  - sources::
  - migration-date:: 2026-04-26T00:00:00Z
