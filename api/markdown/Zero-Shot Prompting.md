public:: true

# Zero-Shot Prompting
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:4605e853112d666a36758bd65427ce201a44961058b2bb002f0c5d77de987fb2",
  "@type": "Page",
  "vc:slug": "zero-shot-prompting",
  "title": "Zero-Shot Prompting",
  "vc:public": true,
  "vc:outboundWikilinks": [
    {
      "@id": "urn:visionflow:linked:language-model",
      "vc:label": "Language Model"
    },
    {
      "@id": "urn:visionflow:linked:prompt-engineering",
      "vc:label": "Prompt Engineering"
    },
    {
      "@id": "urn:visionflow:linked:in-context-learning",
      "vc:label": "In-Context Learning"
    },
    {
      "@id": "urn:visionflow:linked:few-shot-learning",
      "vc:label": "Few-Shot Learning"
    },
    {
      "@id": "urn:visionflow:linked:large-language-models",
      "vc:label": "Large Language Models"
    }
  ],
  "vc:schemaVersion": 2,
  "vc:legacyProperties": [
    {
      "vc:key": "preferred-term",
      "vc:value": "Zero-Shot Prompting"
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
  "@id": "urn:ngm:class:zero-shot-prompting",
  "@type": "Class",
  "label": "Zero-Shot Prompting",
  "definition": "Zero-shot prompting is the technique of instructing a language model to perform a task using only a description, without providing worked examples. It relies on knowledge the model acquired during pretraining.",
  "domain": "natural-language-processing",
  "maturity": "established",
  "qualityScore": 0.7,
  "subClassOf": [
    {
      "@id": "urn:ngm:class:prompt-engineering",
      "label": "Prompt Engineering"
    }
  ],
  "relations": {
    "requires": [
      {
        "@id": "urn:ngm:class:language-model",
        "label": "Language Model"
      },
      {
        "@id": "urn:ngm:class:prompt-engineering",
        "label": "Prompt Engineering"
      }
    ],
    "enables": [
      {
        "@id": "urn:ngm:class:in-context-learning",
        "label": "In-Context Learning"
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
  "@id": "urn:visionflow:annotation:link-resolutions:zero-shot-prompting:bc07a464d91b",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:4605e853112d666a36758bd65427ce201a44961058b2bb002f0c5d77de987fb2"
  },
  "vc:resolutions": [
    {
      "raw": "[[Language Model]]",
      "resolved": "urn:visionflow:linked:language-model",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Prompt Engineering]]",
      "resolved": "urn:visionflow:linked:prompt-engineering",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[In-Context Learning]]",
      "resolved": "urn:visionflow:linked:in-context-learning",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Few-Shot Learning]]",
      "resolved": "urn:visionflow:linked:few-shot-learning",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Large Language Models]]",
      "resolved": "urn:visionflow:linked:large-language-models",
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
  - Zero-shot prompting is the technique of instructing a language model to perform a task using only a description, without providing worked examples. It relies on knowledge the model acquired during pretraining.

- ### Semantic Classification
  - owl-class:: natural-language-processing:ZeroShotPrompting
  - owl-role:: Class

- ### Relationships
  - is-subclass-of:: [[Prompt Engineering]]
  - bridges-to:: [[Few-Shot Learning]], [[Large Language Models]]
  - requires:: [[Language Model]], [[Prompt Engineering]]
  - enables:: [[In-Context Learning]]

- ### Content
  - Zero-shot prompting asks a model to carry out a task from instructions alone, such as classifying or summarising text, without including example input-output pairs in the prompt. It contrasts with few-shot prompting, which supplies several demonstrations to guide the model.
  - The approach works because large language models generalise from broad pretraining, though clear task descriptions and output formats improve reliability. It is the simplest form of in-context learning and a baseline against which few-shot methods are compared.

- ### Provenance
  - sources::
  - migration-date:: 2026-05-29T00:00:00Z
