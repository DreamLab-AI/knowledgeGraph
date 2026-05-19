public:: true

# Data Versioning
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:262696b6233e92391f926fec582ef8ac2b97336cc741ebbcb2fea34459c49f41",
  "@type": "Page",
  "vc:slug": "data-versioning",
  "title": "Data Versioning",
  "vc:public": true,
  "vc:outboundWikilinks": [
    {
      "@id": "urn:visionflow:linked:data-engineering",
      "vc:label": "Data Engineering"
    },
    {
      "@id": "urn:visionflow:linked:dvc",
      "vc:label": "DVC"
    },
    {
      "@id": "urn:visionflow:linked:mlops",
      "vc:label": "MLOps"
    },
    {
      "@id": "urn:visionflow:owl:class:artificial-intelligence",
      "vc:label": "Artificial Intelligence"
    },
    {
      "@id": "urn:visionflow:owl:class:artificial-intelligence-domain",
      "vc:label": "ArtificialIntelligenceDomain"
    },
    {
      "@id": "urn:visionflow:owl:class:blockchain",
      "vc:label": "Blockchain"
    }
  ],
  "vc:schemaVersion": 2,
  "vc:legacyProperties": [
    {
      "vc:key": "legacy-term-id",
      "vc:value": "AI-9011"
    },
    {
      "vc:key": "preferred-term",
      "vc:value": "Data Versioning"
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
  "@id": "urn:ngm:class:data-versioning",
  "@type": "Class",
  "label": "Data Versioning",
  "definition": "Version control system for datasets and ML models, tracking changes to data over time to ensure reproducibility and lineage in machine learning workflows (e.g., DVC).",
  "domain": "artificial-intelligence",
  "maturity": "emerging",
  "subClassOf": [
    {
      "@id": "urn:ngm:class:cat-ai-infrastructure",
      "label": "AI Infrastructure (Category)"
    },
    {
      "@id": "urn:ngm:class:machine-learning-pipeline",
      "label": "Machine Learning Pipeline"
    }
  ],
  "quality": 0.35,
  "provenance": {
    "attributedTo": "did:nostr:jjohare",
    "generatedAt": "2026-05-18T07:12:05Z",
    "inferenceRule": "R1Explicit"
  }
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:annotation:link-resolutions:data-versioning:776c802a9fc9",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:262696b6233e92391f926fec582ef8ac2b97336cc741ebbcb2fea34459c49f41"
  },
  "vc:resolutions": [
    {
      "raw": "[[Data Engineering]]",
      "resolved": "urn:visionflow:linked:data-engineering",
      "kind": "StubLink"
    },
    {
      "raw": "[[DVC]]",
      "resolved": "urn:visionflow:linked:dvc",
      "kind": "StubLink"
    },
    {
      "raw": "[[MLOps]]",
      "resolved": "urn:visionflow:linked:mlops",
      "kind": "StubLink"
    },
    {
      "raw": "[[Artificial Intelligence]]",
      "resolved": "urn:visionflow:owl:class:artificial-intelligence",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[ArtificialIntelligenceDomain]]",
      "resolved": "urn:visionflow:owl:class:artificial-intelligence-domain",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Blockchain]]",
      "resolved": "urn:visionflow:owl:class:blockchain",
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
  - Version control system for datasets and ML models, tracking changes to data over time to ensure reproducibility and lineage in machine learning workflows (e.g., DVC).

- ### Semantic Classification
  - owl-class:: artificial-intelligence:DataVersioning
  - owl-role:: Process
  - belongs-to-domain:: [[ArtificialIntelligenceDomain]]

- ### Relationships
  - is-subclass-of:: [[Artificial Intelligence]]
  - bridges-to:: [[Blockchain]]

- ### Content
  Data Versioning — content pending enrichment.

- ### Provenance
  - sources:: [[MLOps]], [[Data Engineering]], [[DVC]]
  - migration-date:: 2026-04-26T00:00:00Z
