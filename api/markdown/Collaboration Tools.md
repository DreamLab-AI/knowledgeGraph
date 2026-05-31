public:: true

# Collaboration Tools
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:690accc3f5bf277fc4a206acfdab6d6488f13ab88dd5d57ce412393bca22ae5b",
  "@type": "Page",
  "vc:slug": "collaboration-tools",
  "title": "Collaboration Tools",
  "vc:public": true,
  "vc:outboundWikilinks": [
    {
      "@id": "urn:visionflow:linked:network-architecture",
      "vc:label": "Network Architecture"
    },
    {
      "@id": "urn:visionflow:linked:operational-transformation",
      "vc:label": "Operational Transformation"
    },
    {
      "@id": "urn:visionflow:linked:crdt",
      "vc:label": "CRDT"
    },
    {
      "@id": "urn:visionflow:linked:version-control",
      "vc:label": "Version Control"
    },
    {
      "@id": "urn:visionflow:linked:software-development",
      "vc:label": "Software Development"
    }
  ],
  "vc:schemaVersion": 2,
  "vc:legacyProperties": [
    {
      "vc:key": "preferred-term",
      "vc:value": "Collaboration Tools"
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
  "@id": "urn:ngm:class:collaboration-tools",
  "@type": "Class",
  "label": "Collaboration Tools",
  "definition": "Software that supports people working together on shared tasks or documents, including communication, coordination and concurrent editing features.",
  "domain": "distributed-systems",
  "maturity": "established",
  "qualityScore": 0.7,
  "subClassOf": [
    {
      "@id": "urn:ngm:class:software-development",
      "label": "Software Development"
    }
  ],
  "relations": {
    "requires": [
      {
        "@id": "urn:ngm:class:network-architecture",
        "label": "Network Architecture"
      }
    ],
    "enables": [
      {
        "@id": "urn:ngm:class:operational-transformation",
        "label": "Operational Transformation"
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
  "@id": "urn:visionflow:annotation:link-resolutions:collaboration-tools:d22f6c103ecc",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:690accc3f5bf277fc4a206acfdab6d6488f13ab88dd5d57ce412393bca22ae5b"
  },
  "vc:resolutions": [
    {
      "raw": "[[Network Architecture]]",
      "resolved": "urn:visionflow:linked:network-architecture",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Operational Transformation]]",
      "resolved": "urn:visionflow:linked:operational-transformation",
      "kind": "StubLink"
    },
    {
      "raw": "[[CRDT]]",
      "resolved": "urn:visionflow:linked:crdt",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Version Control]]",
      "resolved": "urn:visionflow:linked:version-control",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Software Development]]",
      "resolved": "urn:visionflow:linked:software-development",
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
  - Software that supports people working together on shared tasks or documents, including communication, coordination and concurrent editing features.

- ### Semantic Classification
  - owl-class:: distributed-systems:CollaborationTools
  - owl-role:: Class

- ### Relationships
  - is-subclass-of:: [[Software Development]]
  - bridges-to:: [[CRDT]], [[Version Control]]
  - requires:: [[Network Architecture]]
  - enables:: [[Operational Transformation]]

- ### Content
  - Collaboration tools enable distributed teams to communicate, share files, manage tasks and edit documents together. They span messaging, video conferencing, project management and real-time co-editing applications.
  - Concurrent editing in these tools relies on techniques such as operational transformation and conflict-free replicated data types to merge simultaneous changes consistently, while version control and access management coordinate contributions over time.

- ### Provenance
  - sources::
  - migration-date:: 2026-05-29T00:00:00Z
