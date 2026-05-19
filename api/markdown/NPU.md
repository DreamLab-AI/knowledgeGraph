public:: true

# NPU
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:dd12376f9d8bf886f1ddd82c1b6bf2f0216b28ca87b3bc67704dd90bde76cf55",
  "@type": "Page",
  "vc:slug": "npu",
  "title": "NPU",
  "vc:public": true,
  "vc:outboundWikilinks": [
    {
      "@id": "urn:visionflow:owl:class:ai-hardware",
      "vc:label": "AI Hardware"
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
      "@id": "urn:visionflow:owl:class:edge-computing",
      "vc:label": "Edge Computing"
    }
  ],
  "vc:schemaVersion": 2,
  "vc:legacyProperties": [
    {
      "vc:key": "legacy-term-id",
      "vc:value": "AI-9005"
    },
    {
      "vc:key": "preferred-term",
      "vc:value": "NPU"
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
  "@id": "urn:ngm:class:npu",
  "@type": "Class",
  "label": "NPU",
  "definition": "Neural Processing Unit, specialized hardware accelerators designed specifically for artificial neural network computations, optimized for AI inference and training.",
  "domain": "artificial-intelligence",
  "maturity": "emerging",
  "subClassOf": [
    {
      "@id": "urn:ngm:class:cat-ai-infrastructure",
      "label": "AI Infrastructure (Category)"
    },
    {
      "@id": "urn:ngm:class:ai-hardware",
      "label": "AI Hardware"
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
  "@id": "urn:visionflow:annotation:link-resolutions:npu:776c802a9fc9",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:dd12376f9d8bf886f1ddd82c1b6bf2f0216b28ca87b3bc67704dd90bde76cf55"
  },
  "vc:resolutions": [
    {
      "raw": "[[AI Hardware]]",
      "resolved": "urn:visionflow:owl:class:ai-hardware",
      "kind": "ResolvedLink"
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
      "raw": "[[Edge Computing]]",
      "resolved": "urn:visionflow:owl:class:edge-computing",
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
  - Neural Processing Unit, specialized hardware accelerators designed specifically for artificial neural network computations, optimized for AI inference and training.

- ### Semantic Classification
  - owl-class:: artificial-intelligence:NPU
  - owl-role:: Object
  - belongs-to-domain:: [[ArtificialIntelligenceDomain]]

- ### Relationships
  - is-subclass-of:: [[Artificial Intelligence]]

- ### Content
  NPU — content pending enrichment.

- ### Provenance
  - sources:: [[AI Hardware]], [[Edge Computing]]
  - migration-date:: 2026-04-26T00:00:00Z
