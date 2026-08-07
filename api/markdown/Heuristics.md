public:: true

# Heuristics
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:2b52f28766a3e15cdf7d384aa3449165699f2cebdddbcaf37e371cb9b36ed697",
  "@type": "Page",
  "vc:slug": "heuristics",
  "title": "Heuristics",
  "vc:public": true,
  "vc:outboundWikilinks": [
    {
      "@id": "urn:visionflow:linked:decision-making",
      "vc:label": "Decision Making"
    },
    {
      "@id": "urn:visionflow:linked:bounded-rationality",
      "vc:label": "Bounded Rationality"
    },
    {
      "@id": "urn:visionflow:linked:decision-theory",
      "vc:label": "Decision Theory"
    },
    {
      "@id": "urn:visionflow:linked:cognitive-psychology",
      "vc:label": "Cognitive Psychology"
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
  "@id": "urn:ngm:class:heuristics",
  "@type": "Class",
  "label": "Heuristics",
  "definition": "Mental shortcuts or simple decision rules that trade completeness and guaranteed optimality for speed and low cognitive or computational cost. In psychology, heuristics such as availability, representativeness, and anchoring explain how humans judge under uncertainty; in computer science, heuristic functions guide search and optimisation algorithms towards good solutions when exhaustive evaluation is intractable. Heuristics are adaptive in the environments they evolved for but produce systematic biases outside them.",
  "domain": "ai",
  "maturity": "mature",
  "subClassOf": {
    "@id": "urn:ngm:class:decision-making",
    "label": "Decision Making"
  },
  "relations": {
    "partOf": [
      {
        "@id": "urn:ngm:class:bounded-rationality",
        "label": "Bounded Rationality"
      }
    ],
    "relatedTo": [
      {
        "@id": "urn:ngm:class:decision-theory",
        "label": "Decision Theory"
      },
      {
        "@id": "urn:ngm:class:cognitive-psychology",
        "label": "Cognitive Psychology"
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
  - "Mental shortcuts or simple decision rules that trade completeness and guaranteed optimality for speed and low cognitive or computational cost. In psychology, heuristics such as availability, representativeness, and anchoring explain how humans judge under uncertainty; in computer science, heuristic functions guide search and optimisation algorithms towards good solutions when exhaustive evaluation is intractable. Heuristics are adaptive in the environments they evolved for but produce systematic biases outside them."

- ### Semantic Classification
  - owl-class:: ai:Heuristics
  - owl-role:: Concept

- ### Relationships
  - is-subclass-of:: [[Decision Making]]
  - part-of:: [[Bounded Rationality]]
  - related-to:: [[Decision Theory]]
  - related-to:: [[Cognitive Psychology]]

- ### Content

  ## Definition

  **Heuristics** are simple, efficient rules — learned, evolved, or engineered — that produce satisfactory decisions quickly without evaluating every alternative. The concept sits at the intersection of psychology, economics, and artificial intelligence. Herbert Simon introduced heuristics as the operational core of [[Bounded Rationality]]: because real agents have limited time, information, and computation, they *satisfice* using rules of thumb rather than optimise as classical [[Decision Theory]] prescribes.

  The heuristics-and-biases programme of Tversky and Kahneman (1974) catalogued the shortcuts humans actually use — availability (judging frequency by ease of recall), representativeness (judging probability by similarity to a prototype), and anchoring-and-adjustment — and showed each produces predictable, systematic errors. Gerd Gigerenzer's competing fast-and-frugal programme reframed the same shortcuts as *ecologically rational*: rules such as take-the-best or the recognition heuristic can match or beat complex models when information is scarce, a phenomenon later formalised as the bias–variance trade-off.

  In artificial intelligence, a heuristic is an evaluation function that estimates the promise of a search state. A* search relies on admissible heuristics for optimality guarantees; combinatorial optimisation uses metaheuristics (simulated annealing, genetic algorithms, tabu search) when exact solutions are intractable. The two traditions converge in modern cognitive science, which treats human heuristics as resource-rational approximations to Bayesian inference.

  ## Technical Details

  Key distinctions in the study of heuristics:

  - **Admissible vs. inadmissible** (AI search): an admissible heuristic never overestimates the true cost to the goal, preserving optimality of A*; inadmissible heuristics trade optimality for speed.
  - **Descriptive vs. prescriptive** (psychology): the heuristics-and-biases tradition documents deviations from normative models, whilst fast-and-frugal research prescribes simple rules for specific environments.
  - **Effort–accuracy trade-off**: heuristics reduce computation by ignoring information; whether this hurts accuracy depends on the statistical structure of the environment (less-is-more effects occur when cue validities are skewed and samples small).
  - **Applications**: triage rules in medicine, one-reason decision rules in finance, branch-and-bound pruning, and reward shaping in reinforcement learning all deploy heuristics deliberately.

- ### Provenance
  - sources::
  - migration-date:: 2026-08-06T00:00:00Z
