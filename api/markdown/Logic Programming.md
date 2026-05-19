public:: true

# Logic Programming
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:acdc529f68e13fafe528dd88b57a3c33bb7f0bbba44022f74abf9d5abed3d38e",
  "@type": "Page",
  "vc:slug": "logic-programming",
  "title": "Logic Programming",
  "vc:public": true,
  "vc:outboundWikilinks": [
    {
      "@id": "urn:visionflow:linked:academic-ai-research",
      "vc:label": "Academic AI Research"
    },
    {
      "@id": "urn:visionflow:linked:prolog",
      "vc:label": "Prolog"
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
      "vc:value": "AI-9003"
    },
    {
      "vc:key": "preferred-term",
      "vc:value": "Logic Programming"
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
  "@id": "urn:ngm:class:logic-programming",
  "@type": "Class",
  "label": "Logic Programming",
  "definition": "Programming paradigm based on formal logic, where programs are expressed as sets of logical statements and inference rules.",
  "domain": "artificial-intelligence",
  "maturity": "established",
  "subClassOf": [
    {
      "@id": "urn:ngm:class:ai-technique",
      "label": "AI Technique"
    },
    {
      "@id": "urn:ngm:class:programming-paradigm",
      "label": "Programming Paradigm"
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
  "@id": "urn:visionflow:annotation:link-resolutions:logic-programming:776c802a9fc9",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:acdc529f68e13fafe528dd88b57a3c33bb7f0bbba44022f74abf9d5abed3d38e"
  },
  "vc:resolutions": [
    {
      "raw": "[[Academic AI Research]]",
      "resolved": "urn:visionflow:linked:academic-ai-research",
      "kind": "StubLink"
    },
    {
      "raw": "[[Prolog]]",
      "resolved": "urn:visionflow:linked:prolog",
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
  - Programming paradigm based on formal logic, where programs are expressed as sets of logical statements and inference rules.

- ### Semantic Classification
  - owl-class:: artificial-intelligence:LogicProgramming
  - owl-role:: Process
  - belongs-to-domain:: [[ArtificialIntelligenceDomain]]

- ### Relationships
  - is-subclass-of:: [[Artificial Intelligence]]

- ### Content
  Logic Programming — content pending enrichment.

- ### Provenance
  - sources:: [[Academic AI Research]], [[Prolog]]
  - migration-date:: 2026-04-26T00:00:00Z
