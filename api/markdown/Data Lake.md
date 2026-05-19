public:: true

# Data Lake
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:61cfdf94f5a1641c0945dd1f1dd06c6d661049907b191d7a7b1ffe6a8cf09b0a",
  "@type": "Page",
  "vc:slug": "data-lake",
  "title": "Data Lake",
  "vc:public": true,
  "vc:outboundWikilinks": [
    {
      "@id": "urn:visionflow:linked:big-data",
      "vc:label": "Big Data"
    },
    {
      "@id": "urn:visionflow:linked:data-engineering",
      "vc:label": "Data Engineering"
    },
    {
      "@id": "urn:visionflow:owl:class:artificial-intelligence",
      "vc:label": "Artificial Intelligence"
    },
    {
      "@id": "urn:visionflow:owl:class:artificial-intelligence-domain",
      "vc:label": "ArtificialIntelligenceDomain"
    }
  ],
  "vc:schemaVersion": 2,
  "vc:legacyProperties": [
    {
      "vc:key": "legacy-term-id",
      "vc:value": "AI-9009"
    },
    {
      "vc:key": "preferred-term",
      "vc:value": "Data Lake"
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
  "@id": "urn:ngm:class:data-lake",
  "@type": "Class",
  "label": "Data Lake",
  "definition": "Centralized repository that stores structured and unstructured data at scale in its native format, enabling big data analytics and machine learning workloads.",
  "domain": "artificial-intelligence",
  "maturity": "established",
  "subClassOf": [
    {
      "@id": "urn:ngm:class:cat-ai-infrastructure",
      "label": "AI Infrastructure (Category)"
    },
    {
      "@id": "urn:ngm:class:etsi-domain-data-management-ai",
      "label": "ETSI Domain: Data Management + AI"
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
  "@id": "urn:visionflow:annotation:link-resolutions:data-lake:776c802a9fc9",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:61cfdf94f5a1641c0945dd1f1dd06c6d661049907b191d7a7b1ffe6a8cf09b0a"
  },
  "vc:resolutions": [
    {
      "raw": "[[Big Data]]",
      "resolved": "urn:visionflow:linked:big-data",
      "kind": "StubLink"
    },
    {
      "raw": "[[Data Engineering]]",
      "resolved": "urn:visionflow:linked:data-engineering",
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
  - Centralized repository that stores structured and unstructured data at scale in its native format, enabling big data analytics and machine learning workloads.

- ### Semantic Classification
  - owl-class:: artificial-intelligence:DataLake
  - owl-role:: Object
  - belongs-to-domain:: [[ArtificialIntelligenceDomain]]

- ### Relationships
  - is-subclass-of:: [[Artificial Intelligence]]

- ### Content
  Data Lake — content pending enrichment.

- ### Provenance
  - sources:: [[Data Engineering]], [[Big Data]]
  - migration-date:: 2026-04-26T00:00:00Z
