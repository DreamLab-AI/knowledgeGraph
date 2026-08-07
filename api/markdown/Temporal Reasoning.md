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
  "quality": 0.8,
  "provenance": {
    "attributedTo": "did:nostr:ontology-mesh",
    "generatedAt": "2026-08-07T00:00:00Z",
    "inferenceRule": "ResearchAugment"
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

  ## Current Landscape

  LLM temporal reasoning became a distinct evaluation and neuro-symbolic research area in 2024-25:

  - **Controlled benchmarks expose brittleness**: Google Research's *Test of Time* (ToT, 2024/2025) separates temporal *semantics/logic* from temporal *arithmetic* on synthetic graphs, showing frontier models (GPT-4, Gemini 1.5 Pro, Claude-3) stay sensitive to graph structure, size, and fact order.
  - **Neuro-symbolic offloading works**: TReMu (ACL Findings 2025) has LLM-agents generate Python for temporal calculations over time-aware memory, lifting GPT-4o from 29.83 to 77.67 on multi-session-dialogue temporal QA.
  - **Test-time scaling closes the gap**: TISER (ACL 2025) uses explicit timeline construction plus self-reflection to let small open models rival or beat closed models on TGQA, TempReason, TimeQA and out-of-distribution ToT.
  - **Abductive symbolic reasoning sets zero-shot SOTA**: NeSTR (arXiv, December 2025) reaches a macro-F1 of 89.7 with GPT-4o-mini across TimeQA and TempReason without fine-tuning, improving TempReason-L3 F1 from 61.0 to 90.0.

  **Sources**:
  - https://research.google/pubs/test-of-time-benchmarking-llms-on-temporal-reasoning/
  - https://aclanthology.org/2025.findings-acl.972.pdf
  - https://aclanthology.org/2025.acl-long.1358.pdf
  - https://arxiv.org/html/2512.07218v1
