public:: true

# p(doom)
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:bc9d1c95e1098187ee44947b73b1c139bb294b2269bacbf7ee8e934fea51354d",
  "@type": "Page",
  "vc:slug": "p-doom",
  "title": "p(doom)",
  "vc:public": true,
  "vc:outboundWikilinks": [],
  "vc:schemaVersion": 2,
  "vc:legacyProperties": [
    {
      "vc:key": "preferred-term",
      "vc:value": "p(doom)"
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
  "@id": "urn:ngm:class:p-doom",
  "@type": "Class",
  "label": "p(doom)",
  "definition": "p(doom) is an informal probabilistic estimate, expressed as a value between 0 and 1, of the likelihood that advanced AI development leads to an existential catastrophe for humanity—typically through loss of control over a misaligned superintelligent system. The metric is widely discussed in AI safety research communities as a shorthand for aggregating personal credences about existential risk, and is distinct from rigorous formal risk models, serving primarily as a rhetorical and community-calibration tool.",
  "domain": "infrastructure",
  "maturity": "emerging",
  "subClassOf": [
    {
      "@id": "urn:ngm:class:infra-software-engineering",
      "label": "Software Engineering"
    }
  ],
  "quality": 0.7,
  "relations": {
    "relatedTo": [
      {"@id": "urn:ngm:class:ai-safety", "label": "AI Safety"},
      {"@id": "urn:ngm:class:ai-risk", "label": "AI Risk"},
      {"@id": "urn:ngm:class:artificial-superintelligence", "label": "artificial superintelligence"},
      {"@id": "urn:ngm:class:safety-and-alignment", "label": "Safety and alignment"}
    ],
    "uses": [
      {"@id": "urn:ngm:class:bayesian-inference", "label": "Bayesian Inference"}
    ],
    "contrastsWith": [
      {"@id": "urn:ngm:class:value-alignment", "label": "Value Alignment"}
    ],
    "bridgesTo": [
      {"@id": "urn:ngm:class:ai-alignment", "label": "AI Alignment"},
      {"@id": "urn:ngm:class:history-and-path-to-agi", "label": "History and Path to AGI"},
      {"@id": "urn:ngm:class:uk-ai-safety-institute", "label": "UK AI Safety Institute"}
    ]
  },
  "provenance": {
    "attributedTo": "did:nostr:lcr-swarm",
    "generatedAt": "2026-05-18T07:12:05Z",
    "inferenceRule": "R5DomainRootFallback"
  }
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:annotation:link-resolutions:p-doom:776c802a9fc9",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:bc9d1c95e1098187ee44947b73b1c139bb294b2269bacbf7ee8e934fea51354d"
  },
  "vc:resolutions": [],
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
  - p(doom) is a concept within the ngm domain.

- ### Semantic Classification
  - owl-class:: infrastructure:Pdoom
  - owl-role:: Concept

- ### Relationships
  - <!-- No relationships defined -->

- ### Content
  - #Public page
  - automatically published
  - p(doom) is the probability of an event called "doom" occurring. In statistics, the probability represents the likelihood of an event happening, and it usually ranges between 0 and 1. A value of 0 indicates that the event is impossible, while a value of 1 means that the event is certain to occur. In current AI parlance it's a measure of people's instinctive fear of humans being existentially threatened by the existence of AI.
  - {{tweet https://twitter.com/tim_tyler/status/1665571547111649286}}

- ### Provenance
  - sources::
  - migration-date:: 2026-04-26T00:00:00Z
