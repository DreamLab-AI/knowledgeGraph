public:: true

# Reflection
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:f30409c51a78ed6906df6e53052bcb0fe52ae708ebd809bd2d52820fceb253ed",
  "@type": "Page",
  "vc:slug": "reflection",
  "title": "Reflection",
  "vc:public": true,
  "vc:outboundWikilinks": [
    { "@id": "urn:visionflow:linked:agentic-workflow", "vc:label": "AgenticWorkflow" },
    { "@id": "urn:visionflow:linked:chain-of-thought", "vc:label": "ChainOfThought" },
    { "@id": "urn:visionflow:linked:self-consistency", "vc:label": "SelfConsistency" },
    { "@id": "urn:visionflow:linked:golden-set", "vc:label": "GoldenSet" }
  ],
  "vc:schemaVersion": 2,
  "prov:wasAttributedTo": { "@id": "did:nostr:ontology-mesh" },
  "prov:generatedAtTime": { "@value": "2026-08-09T00:00:00Z", "@type": "xsd:dateTime" }
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:reflection",
  "@type": "Class",
  "label": "Reflection",
  "definition": "An agent pattern in which a model examines its own prior output, judges it against the goal and any available evidence, and then revises the work in a further pass. Reflection turns generation into a loop rather than a single shot: the agent produces a draft, critiques that draft — spotting errors, gaps, unmet constraints, or weak reasoning — and feeds the critique back as input to an improved attempt. It is distinguished from ordinary multi-step prompting by the fact that the intermediate judgement is about the agent's own work, making the agent both author and reviewer within the same task.",
  "domain": "artificial-intelligence",
  "maturity": "established",
  "subClassOf": { "@id": "urn:ngm:class:agentic-workflow", "label": "Agentic Workflow" },
  "relations": {
    "requires": [
      { "@id": "urn:ngm:class:large-language-model", "label": "Large Language Model" }
    ],
    "uses": [
      { "@id": "urn:ngm:class:chain-of-thought", "label": "Chain-of-Thought" }
    ],
    "enables": [
      { "@id": "urn:ngm:class:self-consistency", "label": "Self-Consistency" }
    ],
    "relatedTo": [
      { "@id": "urn:ngm:class:golden-set", "label": "Golden Set" },
      { "@id": "urn:ngm:class:guardrail", "label": "Guardrail" }
    ]
  },
  "quality": 0.75,
  "provenance": {
    "attributedTo": "did:nostr:ontology-mesh",
    "generatedAt": "2026-08-09T00:00:00Z",
    "inferenceRule": "GapFill"
  }
}
```

- ### Definition
  - "An agent pattern in which a model examines its own prior output, judges it against the goal and any available evidence, and then revises the work in a further pass. Reflection turns generation into a loop rather than a single shot: the agent produces a draft, critiques that draft — spotting errors, gaps, unmet constraints, or weak reasoning — and feeds the critique back as input to an improved attempt. It is distinguished from ordinary multi-step prompting by the fact that the intermediate judgement is about the agent's own work, making the agent both author and reviewer within the same task."

- ### In Plain Terms
  - Reflection is when an AI writes a first answer, then reads its own answer back with a critical eye — asking "is this actually right, and did I miss anything?" — and uses that self-review to produce a better second answer.

- ### Semantic Classification
  - owl-class:: artificial-intelligence:Reflection
  - owl-role:: Process

- ### Relationships
  - is-subclass-of:: [[AgenticWorkflow]]
  - requires:: [[LargeLanguageModel]]
  - uses:: [[ChainOfThought]]
  - enables:: [[SelfConsistency]]
  - related-to:: [[GoldenSet]]
  - related-to:: [[Guardrail]]

- ### Content

  ## Definition

  **Reflection** is the practice of having an agent evaluate and improve its own output before treating that output as final. In its simplest form the loop has three moves: generate a candidate answer, critique the candidate against the task's goal and constraints, and regenerate an improved answer informed by the critique. The critique step is what makes the pattern distinctive — the agent is asked not to continue the task but to step back and assess the work it has already done, surfacing mistakes, unsupported claims, missing requirements, or brittle reasoning that a single forward pass would leave in place.

  The pattern rests on a well-observed asymmetry: a model is often better at recognising a flaw in a finished piece of text than at avoiding that flaw while generating it. Reflection exploits this by separating the two concerns into distinct passes, so the generative pass can be fluent and the evaluative pass can be sceptical. This is why reflection frequently uses explicit reasoning — a [[ChainOfThought]] over the draft — as the vehicle for its critique.

  ## Loop and Termination

  A reflection loop needs a stopping rule or it will revise indefinitely. Common criteria are a fixed number of rounds, convergence (successive drafts stop changing materially), or a satisfied checklist derived from the goal. Each additional round costs another model call, so the design trades quality against latency and expense; most deployments cap the loop at one or two rounds, where the largest gains typically appear. Because the agent judges itself, reflection can also entrench a confident error, so stronger setups ground the critique in something external — test results, retrieved evidence, or a [[Guardrail]] — rather than the model's unaided opinion.

  ## Relationship to Neighbouring Patterns

  Reflection is a specialisation of the broader [[AgenticWorkflow]] space and composes naturally with evaluation practices: a curated [[GoldenSet]] can measure whether reflection actually improves outcomes rather than merely lengthening them, and the multi-sample agreement of [[SelfConsistency]] is a complementary route to the same goal of higher-reliability answers. Where self-consistency samples many independent attempts and votes, reflection instead improves a single line of work through iterated self-critique; the two are often combined, sampling several reflective trajectories and then selecting among them.
