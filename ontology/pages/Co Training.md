public:: true

# Co Training
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:3914df8905fab887e68a262da3cffd1b33509c8b308d4eb4e8a15ba9538f4c58",
  "@type": "Page",
  "vc:slug": "co-training",
  "title": "Co Training",
  "vc:public": true,
  "vc:outboundWikilinks": [
    {
      "@id": "urn:visionflow:linked:automation",
      "vc:label": "automation"
    },
    {
      "@id": "urn:visionflow:linked:base-models",
      "vc:label": "Base models"
    },
    {
      "@id": "urn:visionflow:linked:ethan-mollick",
      "vc:label": "Ethan Mollick"
    },
    {
      "@id": "urn:visionflow:linked:ieee-institute-of-electrical-and-electronics-engineers",
      "vc:label": "IEEE (Institute of Electrical and Electronics Engineers)"
    },
    {
      "@id": "urn:visionflow:linked:optimization",
      "vc:label": "optimization"
    },
    {
      "@id": "urn:visionflow:linked:research",
      "vc:label": "research"
    },
    {
      "@id": "urn:visionflow:linked:sec-securities-and-exchange-commission",
      "vc:label": "SEC (Securities and Exchange Commission)"
    },
    {
      "@id": "urn:visionflow:linked:siyaev2021towards",
      "vc:label": "siyaev2021towards"
    },
    {
      "@id": "urn:visionflow:linked:visualization",
      "vc:label": "visualization"
    },
    {
      "@id": "urn:visionflow:owl:class:artificial-intelligence",
      "vc:label": "Artificial Intelligence"
    },
    {
      "@id": "urn:visionflow:owl:class:artificial-superintelligence",
      "vc:label": "Artificial Superintelligence"
    },
    {
      "@id": "urn:visionflow:owl:class:autonomous-robot",
      "vc:label": "Autonomous Robot"
    },
    {
      "@id": "urn:visionflow:owl:class:chat-gpt",
      "vc:label": "ChatGPT"
    },
    {
      "@id": "urn:visionflow:owl:class:copyright",
      "vc:label": "Copyright"
    },
    {
      "@id": "urn:visionflow:owl:class:copyright",
      "vc:label": "copyright"
    },
    {
      "@id": "urn:visionflow:owl:class:data-management",
      "vc:label": "data management"
    },
    {
      "@id": "urn:visionflow:owl:class:deepfakes-and-fraudulent-content",
      "vc:label": "Deepfakes and fraudulent content"
    },
    {
      "@id": "urn:visionflow:owl:class:education-and-ai",
      "vc:label": "Education and AI"
    },
    {
      "@id": "urn:visionflow:owl:class:energy-and-power",
      "vc:label": "Energy and Power"
    },
    {
      "@id": "urn:visionflow:owl:class:gemini",
      "vc:label": "Gemini"
    },
    {
      "@id": "urn:visionflow:owl:class:generative-ai",
      "vc:label": "Generative AI"
    },
    {
      "@id": "urn:visionflow:owl:class:hardware-and-edge",
      "vc:label": "Hardware and Edge"
    },
    {
      "@id": "urn:visionflow:owl:class:large-language-models",
      "vc:label": "Large Language Models"
    },
    {
      "@id": "urn:visionflow:owl:class:machine-learning",
      "vc:label": "machine learning"
    },
    {
      "@id": "urn:visionflow:owl:class:metaverse",
      "vc:label": "MetaverseDomain"
    },
    {
      "@id": "urn:visionflow:owl:class:politics-law-privacy",
      "vc:label": "Politics, Law, Privacy"
    },
    {
      "@id": "urn:visionflow:owl:class:social-contract-and-jobs",
      "vc:label": "Social contract and jobs"
    },
    {
      "@id": "urn:visionflow:owl:class:trust-and-safety",
      "vc:label": "Trust and Safety"
    }
  ],
  "vc:schemaVersion": 2,
  "vc:legacyProperties": [
    {
      "vc:key": "legacy-term-id",
      "vc:value": "AI-0282"
    },
    {
      "vc:key": "preferred-term",
      "vc:value": "Co Training"
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
  "@id": "urn:ngm:class:co-training",
  "@type": "Class",
  "label": "Co Training",
  "definition": "Co-training is a semi-supervised machine learning technique where two or more models trained on complementary feature views iteratively label unlabelled data for each other. Each model labels examples confidently classified under its own view, and these pseudo-labels are added to the other model's training set, bootstrapping performance without requiring large labelled corpora.",
  "domain": "artificial-intelligence",
  "maturity": "emerging",
  "qualityScore": 0.7,
  "subClassOf": [
    {
      "@id": "urn:ngm:class:ai-technique",
      "label": "AI Technique"
    }
  ],
  "relations": {
    "partOf": [
      {"@id": "urn:ngm:class:semi-supervised-learning", "label": "Semi-Supervised Learning"}
    ],
    "relatedTo": [
      {"@id": "urn:ngm:class:self-training", "label": "Self Training"},
      {"@id": "urn:ngm:class:active-learning", "label": "Active Learning"}
    ],
    "uses": [
      {"@id": "urn:ngm:class:machine-learning-discipline", "label": "Machine Learning Discipline"},
      {"@id": "urn:ngm:class:machine-learning-discipline-model", "label": "Machine Learning Model"}
    ],
    "enables": [
      {"@id": "urn:ngm:class:generative-ai", "label": "Generative AI"}
    ]
  },
  "quality": 0.5,
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
  "@id": "urn:visionflow:annotation:link-resolutions:co-training:776c802a9fc9",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:3914df8905fab887e68a262da3cffd1b33509c8b308d4eb4e8a15ba9538f4c58"
  },
  "vc:resolutions": [
    {
      "raw": "[[automation]]",
      "resolved": "urn:visionflow:linked:automation",
      "kind": "StubLink"
    },
    {
      "raw": "[[Base models]]",
      "resolved": "urn:visionflow:linked:base-models",
      "kind": "StubLink"
    },
    {
      "raw": "[[Ethan Mollick]]",
      "resolved": "urn:visionflow:linked:ethan-mollick",
      "kind": "StubLink"
    },
    {
      "raw": "[[IEEE (Institute of Electrical and Electronics Engineers)]]",
      "resolved": "urn:visionflow:linked:ieee-institute-of-electrical-and-electronics-engineers",
      "kind": "StubLink"
    },
    {
      "raw": "[[optimization]]",
      "resolved": "urn:visionflow:linked:optimization",
      "kind": "StubLink"
    },
    {
      "raw": "[[research]]",
      "resolved": "urn:visionflow:linked:research",
      "kind": "StubLink"
    },
    {
      "raw": "[[SEC (Securities and Exchange Commission)]]",
      "resolved": "urn:visionflow:linked:sec-securities-and-exchange-commission",
      "kind": "StubLink"
    },
    {
      "raw": "[[siyaev2021towards]]",
      "resolved": "urn:visionflow:linked:siyaev2021towards",
      "kind": "StubLink"
    },
    {
      "raw": "[[visualization]]",
      "resolved": "urn:visionflow:linked:visualization",
      "kind": "StubLink"
    },
    {
      "raw": "[[Artificial Intelligence]]",
      "resolved": "urn:visionflow:owl:class:artificial-intelligence",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Artificial Superintelligence]]",
      "resolved": "urn:visionflow:owl:class:artificial-superintelligence",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Autonomous Robot]]",
      "resolved": "urn:visionflow:owl:class:autonomous-robot",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Instruction-Following Conversational AI System]]",
      "resolved": "urn:visionflow:owl:class:chat-gpt",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Copyright]]",
      "resolved": "urn:visionflow:owl:class:copyright",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Intellectual Property Rights Framework]]",
      "resolved": "urn:visionflow:owl:class:copyright",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[data management]]",
      "resolved": "urn:visionflow:owl:class:data-management",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Deepfakes and fraudulent content]]",
      "resolved": "urn:visionflow:owl:class:deepfakes-and-fraudulent-content",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Education and AI]]",
      "resolved": "urn:visionflow:owl:class:education-and-ai",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Energy and Power]]",
      "resolved": "urn:visionflow:owl:class:energy-and-power",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Gemini Multimodal Language Model]]",
      "resolved": "urn:visionflow:owl:class:gemini",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Generative AI]]",
      "resolved": "urn:visionflow:owl:class:generative-ai",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Hardware and Edge]]",
      "resolved": "urn:visionflow:owl:class:hardware-and-edge",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Large Language Models]]",
      "resolved": "urn:visionflow:owl:class:large-language-models",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[machine learning]]",
      "resolved": "urn:visionflow:owl:class:machine-learning",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[MetaverseDomain]]",
      "resolved": "urn:visionflow:owl:class:metaverse",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[AI Governance Law and Privacy]]",
      "resolved": "urn:visionflow:owl:class:politics-law-privacy",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Employment Social Contract Under Automation]]",
      "resolved": "urn:visionflow:owl:class:social-contract-and-jobs",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Trust and Safety]]",
      "resolved": "urn:visionflow:owl:class:trust-and-safety",
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
  - A semi-supervised learning technique where two or more models with different views of the data train each other by labelling unlabelled examples. Co-training leverages complementary feature sets or model architectures to improve performance through mutual teaching.

- ### Semantic Classification
  - owl-class:: artificial-intelligence:CoTraining
  - owl-role:: Concept
  - belongs-to-domain:: [[MetaverseDomain]]

- ### Relationships
  - part-of:: [[Semi-Supervised Learning]]
  - related-to:: [[Self Training]], [[Active Learning]]
  - uses:: [[Machine Learning Discipline]], [[Machine Learning Model]]
  - enables:: [[Generative AI]]
  - bridges-to:: [[Autonomous Robot]]

- ### Content
  - A semi-supervised learning technique where two or more models with different views of the data train each other by labelling unlabelled examples. Co-training leverages complementary feature sets or model architectures to improve performance through mutual teaching.

- ### Provenance
  - sources:: [[IEEE (Institute of Electrical and Electronics Engineers)]], [[SEC (Securities and Exchange Commission)]]
  - migration-date:: 2026-04-26T00:00:00Z
