public:: true

# artificial superintelligence
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:0e5bd6082a2c0eb95eb4f82310871438f073ccb623e6dc3c8aab4a31f8f68709",
  "@type": "Page",
  "vc:slug": "artificial-superintelligence",
  "title": "artificial superintelligence",
  "vc:public": true,
  "vc:outboundWikilinks": [
    {
      "@id": "urn:visionflow:owl:class:ai-risks",
      "vc:label": "AI Risks"
    },
    {
      "@id": "urn:visionflow:owl:class:artificial-intelligence",
      "vc:label": "Artificial Intelligence"
    },
    {
      "@id": "urn:visionflow:owl:class:singularity",
      "vc:label": "Singularity"
    }
  ],
  "vc:schemaVersion": 2,
  "vc:legacyProperties": [
    {
      "vc:key": "preferred-term",
      "vc:value": "artificial superintelligence"
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
  "@id": "urn:ngm:class:artificial-superintelligence",
  "@type": "Class",
  "label": "artificial superintelligence",
  "definition": "A hypothetical form of artificial intelligence that surpasses human cognitive performance across all domains, capable of recursive self-improvement leading to an intelligence explosion. Distinguished from artificial general intelligence by the degree of capability surplus; considered an existential risk scenario requiring robust safety and alignment research before any attempt at development.",
  "domain": "artificial-intelligence",
  "maturity": "emerging",
  "qualityScore": 0.7,
  "subClassOf": [
    {
      "@id": "urn:ngm:class:infra-computing-and-cloud",
      "label": "Computing and Cloud"
    }
  ],
  "provenance": {
    "attributedTo": "did:nostr:lcr-swarm",
    "generatedAt": "2026-05-18T07:12:05Z",
    "inferenceRule": "R5DomainRootFallback"
  },
  "relations": {
    "requires": [
      {
        "@id": "urn:ngm:class:artificial-general-intelligence",
        "label": "Artificial General Intelligence"
      },
      {
        "@id": "urn:ngm:class:machine-learning",
        "label": "Machine Learning"
      }
    ],
    "contrastsWith": [
      {
        "@id": "urn:ngm:class:artificial-intelligence",
        "label": "Artificial Intelligence"
      }
    ],
    "relatedTo": [
      {
        "@id": "urn:ngm:class:singularity",
        "label": "Singularity"
      },
      {
        "@id": "urn:ngm:class:ai-risks",
        "label": "AI Risks"
      },
      {
        "@id": "urn:ngm:class:ai-safety",
        "label": "AI Safety"
      }
    ],
    "supports": [
      {
        "@id": "urn:ngm:class:aiethics",
        "label": "AIEthics"
      }
    ]
  }
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:annotation:link-resolutions:artificial-superintelligence:776c802a9fc9",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:0e5bd6082a2c0eb95eb4f82310871438f073ccb623e6dc3c8aab4a31f8f68709"
  },
  "vc:resolutions": [
    {
      "raw": "[[AI Risks]]",
      "resolved": "urn:visionflow:owl:class:ai-risks",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Artificial Intelligence]]",
      "resolved": "urn:visionflow:owl:class:artificial-intelligence",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Singularity]]",
      "resolved": "urn:visionflow:owl:class:singularity",
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
  - A hypothetical form of artificial intelligence that surpasses human cognitive performance across all domains, capable of recursive self-improvement leading to an intelligence explosion. Distinguished from artificial general intelligence by the degree of capability surplus; considered an existential risk scenario requiring robust safety and alignment research before any attempt at development.

- ### Semantic Classification
  - owl-class:: artificial-intelligence:ArtificialSuperintelligence
  - owl-role:: Concept

- ### Relationships
  - Requires [[Artificial General Intelligence]]
  - Requires [[Machine Learning]]
  - Contrasts With [[Artificial Intelligence]]
  - Related To [[Singularity]]
  - Related To [[AI Risks]]
  - Related To [[AI Safety]]
  - Supports [[AIEthics]]

- ### Content
  - # Artificial Superintelligence
  - Artificial superintelligence (ASI) is a theoretical form of AI that surpasses human intelligence and cognitive abilities in every domain. While currently hypothetical, the concept of ASI is a subject of intense research and debate.
  - The development of ASI is seen as a progression from the current state of AI:
		- **Artificial Narrow Intelligence (ANI):** AI that is designed for specific tasks, such as virtual assistants and self-driving cars.
		- **Artificial General Intelligence (AGI):** AGI is the hypothetical ability of an AI to understand, learn, and apply its intelligence to solve any problem a human can.
		- **Artificial Superintelligence (ASI):** ASI would be capable of recursive self-improvement, leading to an "intelligence explosion" that would leave human intellect far behind.
  - The timeline for the arrival of ASI is uncertain, with some experts predicting it could happen in less than a decade, while others believe it is much further off.
  - [Microsoft president says no chance of super-intelligent AI soon](https://www.reuters.com/technology/microsoft-president-says-no-chance-superintelligent-ai-soon-2023-11-30/)
  - [Nick Bostrom: superintelligence could happen in timelines as short as a year](https://twitter.com/tsarnick/status/1784378045069217960)
  - The prospect of ASI raises significant ethical and safety concerns.
		- A superintelligent AI, in pursuing its programmed goals, could develop destructive methods that have unforeseen and devastating consequences for humanity.
		- A key concern is that once an ASI surpasses human intelligence, we may no longer be able to control it.
		- The widespread automation of jobs by ASI could lead to massive unemployment and exacerbate social and economic inequality.
  - In response to these risks, OpenAI co-founder Ilya Sutskever has launched a new company with the sole objective of creating Safe Superintelligence (SSI).
  - [Safe Superintelligence Inc.](https://ssi.inc/)
  - [[Artificial Intelligence]]
  - [[AI Risks]]
  - [[Singularity]]

  - ## The Path to Superintelligence
  - ## Timelines and Projections
  - ## The Risks and Challenges
  - ### Existential Threat
  - ### Loss of Human Control
  - ### Economic Disruption
  - ## The Safe Superintelligence Project
  - ## See Also

- ### Provenance
  - sources::
  - migration-date:: 2026-04-26T00:00:00Z
