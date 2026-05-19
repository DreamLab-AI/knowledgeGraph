public:: true

# Symbolic AI
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:165d3ae7770f44216740199936f318141ff02ae649cc559b7b5831b2cc063239",
  "@type": "Page",
  "vc:slug": "symbolic-ai",
  "title": "Symbolic AI",
  "vc:public": true,
  "vc:outboundWikilinks": [
    {
      "@id": "urn:visionflow:linked:aaai",
      "vc:label": "AAAI"
    },
    {
      "@id": "urn:visionflow:linked:academic-ai-research",
      "vc:label": "Academic AI Research"
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
      "vc:value": "AI-9001"
    },
    {
      "vc:key": "preferred-term",
      "vc:value": "Symbolic AI"
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
  "@id": "urn:ngm:class:symbolic-ai",
  "@type": "Class",
  "label": "Symbolic AI",
  "definition": "Artificial intelligence based on symbolic representations of problems, logic, and search algorithms, also known as Good Old-Fashioned AI (GOFAI).",
  "domain": "artificial-intelligence",
  "maturity": "established",
  "subClassOf": [
    {
      "@id": "urn:ngm:class:ai-technique",
      "label": "AI Technique"
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
  "@id": "urn:visionflow:annotation:link-resolutions:symbolic-ai:776c802a9fc9",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:165d3ae7770f44216740199936f318141ff02ae649cc559b7b5831b2cc063239"
  },
  "vc:resolutions": [
    {
      "raw": "[[AAAI]]",
      "resolved": "urn:visionflow:linked:aaai",
      "kind": "StubLink"
    },
    {
      "raw": "[[Academic AI Research]]",
      "resolved": "urn:visionflow:linked:academic-ai-research",
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
  - Artificial intelligence based on symbolic representations of problems, logic, and search algorithms, also known as Good Old-Fashioned AI (GOFAI).

- ### Semantic Classification
  - owl-class:: artificial-intelligence:SymbolicAI
  - owl-role:: Process
  - belongs-to-domain:: [[ArtificialIntelligenceDomain]]

- ### Relationships
  - is-subclass-of:: [[Artificial Intelligence]]

- ### Content
  Symbolic AI — content pending enrichment.

- ### Provenance
  - sources:: [[Academic AI Research]], [[AAAI]]
  - migration-date:: 2026-04-26T00:00:00Z
