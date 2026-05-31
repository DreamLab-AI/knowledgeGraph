public:: true

# Model Cards
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:9b249e8d5fb2a9eb2bc58ca1ab6803cf9663a32b6911a843412b4b8d1f398703",
  "@type": "Page",
  "vc:slug": "model-cards",
  "title": "Model Cards",
  "vc:public": true,
  "vc:outboundWikilinks": [
    {
      "@id": "urn:visionflow:linked:transparency",
      "vc:label": "Transparency"
    },
    {
      "@id": "urn:visionflow:linked:accountability",
      "vc:label": "Accountability"
    },
    {
      "@id": "urn:visionflow:linked:ai-governance",
      "vc:label": "AI Governance"
    },
    {
      "@id": "urn:visionflow:linked:responsible-ai",
      "vc:label": "Responsible AI"
    }
  ],
  "vc:schemaVersion": 2,
  "vc:legacyProperties": [
    {
      "vc:key": "preferred-term",
      "vc:value": "Model Cards"
    }
  ],
  "prov:wasAttributedTo": {
    "@id": "did:nostr:jjohare"
  },
  "prov:generatedAtTime": {
    "@value": "2026-05-29T00:00:00Z",
    "@type": "xsd:dateTime"
  }
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:model-cards",
  "@type": "Class",
  "label": "Model Cards",
  "definition": "Short structured documents that report the intended use, performance, limitations and ethical considerations of a machine learning model to support transparency and responsible deployment.",
  "domain": "machine-learning",
  "maturity": "growing",
  "qualityScore": 0.7,
  "subClassOf": [
    {
      "@id": "urn:ngm:class:responsible-ai",
      "label": "Responsible AI"
    }
  ],
  "relations": {
    "requires": [
      {
        "@id": "urn:ngm:class:transparency",
        "label": "Transparency"
      }
    ],
    "enables": [
      {
        "@id": "urn:ngm:class:accountability",
        "label": "Accountability"
      }
    ]
  },
  "quality": 0.6,
  "provenance": {
    "attributedTo": "did:nostr:lcr-swarm",
    "generatedAt": "2026-05-29T00:00:00Z",
    "inferenceRule": "GapFillTier5"
  }
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:annotation:link-resolutions:model-cards:589d485a740e",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:9b249e8d5fb2a9eb2bc58ca1ab6803cf9663a32b6911a843412b4b8d1f398703"
  },
  "vc:resolutions": [
    {
      "raw": "[[Transparency]]",
      "resolved": "urn:visionflow:linked:transparency",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Accountability]]",
      "resolved": "urn:visionflow:linked:accountability",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[AI Governance]]",
      "resolved": "urn:visionflow:linked:ai-governance",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Responsible AI]]",
      "resolved": "urn:visionflow:linked:responsible-ai",
      "kind": "ResolvedLink"
    }
  ],
  "prov:wasAttributedTo": {
    "@id": "did:nostr:lcr-swarm"
  },
  "prov:generatedAtTime": {
    "@value": "2026-05-29T00:00:00Z",
    "@type": "xsd:dateTime"
  }
}
```


- ### Definition
  - Short structured documents that report the intended use, performance, limitations and ethical considerations of a machine learning model to support transparency and responsible deployment.

- ### Semantic Classification
  - owl-class:: machine-learning:ModelCards
  - owl-role:: Class

- ### Relationships
  - is-subclass-of:: [[Responsible AI]]
  - bridges-to:: [[AI Governance]]
  - requires:: [[Transparency]]
  - enables:: [[Accountability]]

- ### Content
  - Model cards, proposed by Mitchell and colleagues in 2019, standardise the disclosure of key facts about a model. They typically describe intended uses and out-of-scope uses, training data characteristics, evaluation results disaggregated across relevant groups, and known limitations.
  - The aim is to help users and stakeholders judge whether a model is appropriate for a given context and to surface fairness and safety concerns. Model cards are now common practice in model repositories and complement related artefacts such as dataset documentation.

- ### Provenance
  - sources::
  - migration-date:: 2026-05-29T00:00:00Z
