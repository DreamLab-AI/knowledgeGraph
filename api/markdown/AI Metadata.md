public:: true

# AI Metadata
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:1001207f4ea76f7c3328b261c4e69e384d26710acd8a737a25ed5f76cee1b458",
  "@type": "Page",
  "vc:slug": "ai-metadata",
  "title": "AI Metadata",
  "vc:public": true,
  "vc:outboundWikilinks": [
    {
      "@id": "urn:visionflow:linked:ml-reproducibility",
      "vc:label": "ML Reproducibility"
    },
    {
      "@id": "urn:visionflow:linked:model-card",
      "vc:label": "Model Card"
    },
    {
      "@id": "urn:visionflow:owl:class:ai-governance",
      "vc:label": "AI Governance"
    },
    {
      "@id": "urn:visionflow:owl:class:blockchain",
      "vc:label": "Blockchain"
    },
    {
      "@id": "urn:visionflow:owl:class:data-provenance",
      "vc:label": "Data Provenance"
    }
  ],
  "vc:schemaVersion": 2,
  "vc:legacyProperties": [
    {
      "vc:key": "legacy-term-id",
      "vc:value": "AI-9006"
    },
    {
      "vc:key": "preferred-term",
      "vc:value": "AI Metadata"
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
  "@id": "urn:ngm:class:ai-metadata",
  "@type": "Class",
  "label": "AI Metadata",
  "definition": "AI Metadata encompasses the descriptive information, provenance data, and contextual attributes associated with artificial intelligence models, datasets, and computational artifacts.",
  "domain": "artificial-intelligence",
  "maturity": "draft",
  "quality": 0.35,
  "provenance": {
    "attributedTo": "did:nostr:jjohare",
    "generatedAt": "2026-05-18T07:12:05Z",
    "inferenceRule": "R1Explicit"
  },
  "subClassOf": [
    {
      "@id": "urn:ngm:class:cat-ai-infrastructure",
      "label": "AI Infrastructure (Category)"
    }
  ]
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:annotation:link-resolutions:ai-metadata:776c802a9fc9",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:1001207f4ea76f7c3328b261c4e69e384d26710acd8a737a25ed5f76cee1b458"
  },
  "vc:resolutions": [
    {
      "raw": "[[ML Reproducibility]]",
      "resolved": "urn:visionflow:linked:ml-reproducibility",
      "kind": "StubLink"
    },
    {
      "raw": "[[Model Card]]",
      "resolved": "urn:visionflow:linked:model-card",
      "kind": "StubLink"
    },
    {
      "raw": "[[AI Governance]]",
      "resolved": "urn:visionflow:owl:class:ai-governance",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Blockchain]]",
      "resolved": "urn:visionflow:owl:class:blockchain",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Data Provenance]]",
      "resolved": "urn:visionflow:owl:class:data-provenance",
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
  - AI Metadata encompasses the descriptive information, provenance data, and contextual attributes associated with artificial intelligence models, datasets, and computational artifacts. This includes model cards documenting architecture details, training procedures, performance metrics, intended use cases, ethical considerations, and known limitations. Dataset metadata captures information about data sources, collection methods, preprocessing steps, labeling procedures, and potential biases. Comprehensive AI metadata enables reproducibility, transparency, regulatory compliance, and responsible AI deployment across the machine learning lifecycle.

- ### Semantic Classification
  - owl-class:: artificial-intelligence:AIMetadata
  - owl-role:: concept

- ### Relationships
  - is-subclass-of:: ['owl:Thing']
  - bridges-to:: [[Blockchain]] (domain: bc)

- ### Content

  #### Key Characteristics
  - Documents model architecture, hyperparameters, and training configuration
  - Tracks dataset lineage, versioning, and data quality metrics
  - Captures performance benchmarks across diverse evaluation scenarios
  - Records ethical assessments and bias audits
  - Facilitates model discovery, reuse, and governance

  ## Overview

  AI Metadata encompasses the descriptive information, provenance data, and contextual attributes associated with artificial intelligence models, datasets, and computational artifacts. This includes model cards documenting architecture details, training procedures, performance metrics, intended use cases, ethical considerations, and known limitations. Dataset metadata captures information about data sources, collection methods, preprocessing steps, labeling procedures, and potential biases. Comprehensive AI metadata enables reproducibility, transparency, regulatory compliance, and responsible AI deployment across the machine learning lifecycle.

  #### Related Concepts
  - [[Model Card]]
  - [[Data Provenance]]
  - [[ML Reproducibility]]
  - [[AI Governance]]

  #### References
  - Mitchell, M. et al. (2019). Model Cards for Model Reporting. FAT* 2019.
  - Gebru, T. et al. (2021). Datasheets for Datasets. Communications of the ACM, 64(12), 86-92.
  - Bender, E. & Friedman, B. (2018). Data Statements for Natural Language Processing. TACL 2018.

- ### Provenance
  - sources::
  - migration-date:: 2026-04-26T00:00:00Z
