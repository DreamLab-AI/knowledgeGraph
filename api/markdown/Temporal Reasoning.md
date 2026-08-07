public:: true

# Temporal Reasoning
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:9c02c8aed7e0bb921dba64396a0ebbfa95d6c62d5493c706c0e1d2b3974ad5bd",
  "@type": "Page",
  "vc:slug": "temporal-reasoning",
  "title": "Temporal Reasoning",
  "vc:public": true,
  "vc:outboundWikilinks": [
    {
      "@id": "urn:visionflow:linked:reasoning",
      "vc:label": "Reasoning"
    },
    {
      "@id": "urn:visionflow:linked:temporal-logic",
      "vc:label": "Temporal Logic"
    },
    {
      "@id": "urn:visionflow:linked:common-sense-reasoning",
      "vc:label": "Common Sense Reasoning"
    },
    {
      "@id": "urn:visionflow:linked:automated-planning",
      "vc:label": "Automated Planning"
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
  "@id": "urn:ngm:class:temporal-reasoning",
  "@type": "Class",
  "label": "Temporal Reasoning",
  "definition": "The branch of knowledge representation and reasoning concerned with representing time — instants, intervals, durations, and their qualitative and quantitative relations — and drawing inferences about the ordering, persistence, and change of events and states, underpinning planning, scheduling, narrative understanding, and any system that must reason about what held before, holds now, or will hold later.",
  "domain": "artificial-intelligence",
  "maturity": "established",
  "subClassOf": {
    "@id": "urn:ngm:class:reasoning",
    "label": "Reasoning"
  },
  "relations": {
    "partOf": [
      {
        "@id": "urn:ngm:class:common-sense-reasoning",
        "label": "Common Sense Reasoning"
      }
    ],
    "uses": [
      {
        "@id": "urn:ngm:class:temporal-logic",
        "label": "Temporal Logic"
      }
    ],
    "requires": [
      {
        "@id": "urn:ngm:class:knowledge-representation",
        "label": "Knowledge Representation"
      }
    ],
    "relatedTo": [
      {
        "@id": "urn:ngm:class:automated-planning",
        "label": "Automated Planning"
      },
      {
        "@id": "urn:ngm:class:planning",
        "label": "Planning"
      }
    ]
  },
  "quality": 0.7,
  "provenance": {
    "attributedTo": "did:nostr:ontology-mesh",
    "generatedAt": "2026-08-06T00:00:00Z",
    "inferenceRule": "SwarmRepair"
  }
}
```

- ### Definition
  - "The branch of knowledge representation and reasoning concerned with representing time — instants, intervals, durations, and their qualitative and quantitative relations — and drawing inferences about the ordering, persistence, and change of events and states, underpinning planning, scheduling, narrative understanding, and any system that must reason about what held before, holds now, or will hold later."

- ### Semantic Classification
  - owl-class:: artificial-intelligence:TemporalReasoning
  - owl-role:: Process

- ### Relationships
  - is-subclass-of:: [[Reasoning]]
  - is-part-of:: [[Common Sense Reasoning]]
  - uses:: [[Temporal Logic]]
  - related-to:: [[Automated Planning]]

- ### Content

  ## Definition

  **Temporal reasoning** is the study of how intelligent systems represent and infer over time. It supplies the formal machinery for questions such as: did event A finish before event B started, how long did a state persist, which facts survive an action, and what must be true at a future instant for a plan to succeed. The field distinguishes *qualitative* reasoning — ordering relations between instants and intervals without numeric timestamps — from *quantitative* (metric) reasoning over durations, deadlines, and clock values, with many practical systems combining both.

  The canonical qualitative formalism is Allen's interval algebra (1983), which defines thirteen mutually exclusive relations between intervals (before, meets, overlaps, during, starts, finishes, equals, and their inverses) and supports constraint propagation over networks of such relations. Metric reasoning is typically cast as a Simple Temporal Problem (STP) or its disjunctive and uncertain extensions (TCSP, STNU), solved with shortest-path and consistency algorithms. Logical treatments include [[Temporal Logic]] families (LTL, CTL, MTL) used in verification, and the event calculus and situation calculus, which address persistence and the frame problem in action reasoning.

  Within this graph, temporal reasoning is a component of [[Common Sense Reasoning]] — humans effortlessly infer event order and duration from narrative — and a close companion of [[Planning]] and [[Automated Planning]], where durative actions, deadlines, and concurrency turn plan synthesis into temporal constraint solving.

  ## Technical Details

  Key problem classes and methods:

  - **Interval algebra networks**: path-consistency propagation over Allen relations; full consistency is NP-complete, with tractable fragments (ORD-Horn) identified by Nebel and Bürckert.
  - **Simple Temporal Networks**: metric constraints of the form `l ≤ t_j − t_i ≤ u`; consistency and minimal networks computable in polynomial time via Floyd–Warshall or Johnson's algorithm; STNUs add contingent links and dynamic controllability checking for execution under uncertainty.
  - **Temporal planning**: PDDL 2.1 durative actions, timelines, and chronicles; planners such as OPTIC and LPG interleave symbolic search with STP consistency checks.
  - **Event calculus**: axiomatises `Initiates`, `Terminates`, and `HoldsAt` predicates to reason about fluent persistence under events, supporting narrative understanding and legal/process reasoning.
  - **Temporal knowledge graphs and neural approaches**: embedding-based models (e.g. TNTComplEx) and temporal question answering extend the classical toolkit to large, noisy corpora, whilst large language models exhibit partial but unreliable temporal competence — a gap that keeps explicit temporal reasoning relevant in neuro-symbolic architectures.
