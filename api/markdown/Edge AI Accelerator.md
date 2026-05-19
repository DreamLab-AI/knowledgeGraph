public:: true

# Edge AI Accelerator
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:67f6511682212da0e7446ccefefd95082c80e303153cebf04eeb50b2364e6fd0",
  "@type": "Page",
  "vc:slug": "edge-ai-accelerator",
  "title": "Edge AI Accelerator",
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
      "@id": "urn:visionflow:owl:class:autonomous-robot",
      "vc:label": "Autonomous Robot"
    },
    {
      "@id": "urn:visionflow:owl:class:digital-twin",
      "vc:label": "Digital Twin"
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
      "vc:value": "AI-9007"
    },
    {
      "vc:key": "preferred-term",
      "vc:value": "Edge AI Accelerator"
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
  "@id": "urn:ngm:class:edge-ai-accelerator",
  "@type": "Class",
  "label": "Edge AI Accelerator",
  "definition": "Specialized hardware designed to run AI inference workloads locally on edge devices, optimized for low power consumption and real-time performance without cloud connectivity.",
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
  },
  "sameAs": [
    {
      "@id": "urn:ngm:class:edge-ai-accelerators",
      "label": "Edge AI Accelerators"
    }
  ]
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:annotation:link-resolutions:edge-ai-accelerator:776c802a9fc9",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:67f6511682212da0e7446ccefefd95082c80e303153cebf04eeb50b2364e6fd0"
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
      "raw": "[[Autonomous Robot]]",
      "resolved": "urn:visionflow:owl:class:autonomous-robot",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Digital Twin]]",
      "resolved": "urn:visionflow:owl:class:digital-twin",
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
  - Specialized hardware designed to run AI inference workloads locally on edge devices, optimized for low power consumption and real-time performance without cloud connectivity.

- ### Semantic Classification
  - owl-class:: artificial-intelligence:EdgeAIAccelerator
  - owl-role:: Object
  - belongs-to-domain:: [[ArtificialIntelligenceDomain]]

- ### Relationships
  - is-subclass-of:: [[Artificial Intelligence]]
  - bridges-to:: [[Autonomous Robot]], [[Digital Twin]]

- ### Content
  Edge AI Accelerator — content pending enrichment.

- ### Provenance
  - sources:: [[Edge Computing]], [[AI Hardware]]
  - migration-date:: 2026-04-26T00:00:00Z
