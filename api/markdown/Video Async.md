public:: true

# Video Async
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:7a738e5607ca235ad6e98117c7ffa4e3cb5a34720af620cbc06d844bc5606782",
  "@type": "Page",
  "vc:slug": "video-async",
  "title": "Video Async",
  "vc:public": true,
  "vc:outboundWikilinks": [
    {
      "@id": "urn:visionflow:linked:collaboration-tools",
      "vc:label": "Collaboration Tools"
    },
    {
      "@id": "urn:visionflow:linked:loom",
      "vc:label": "Loom"
    },
    {
      "@id": "urn:visionflow:owl:class:asynchronous-collaboration",
      "vc:label": "Asynchronous Collaboration"
    },
    {
      "@id": "urn:visionflow:owl:class:telecollaboration-domain",
      "vc:label": "TelecollaborationDomain"
    }
  ],
  "vc:schemaVersion": 2,
  "vc:legacyProperties": [
    {
      "vc:key": "legacy-term-id",
      "vc:value": "TC-9003"
    },
    {
      "vc:key": "preferred-term",
      "vc:value": "Video Async"
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
  "@id": "urn:ngm:class:video-async",
  "@type": "Class",
  "label": "Video Async",
  "definition": "Asynchronous video communication allowing users to record, share, and view video messages at their convenience, combining visual richness with time flexibility.",
  "domain": "distributed-collaboration",
  "maturity": "emerging",
  "subClassOf": [
    {
      "@id": "urn:ngm:class:dc-communication",
      "label": "Communication Technology"
    },
    {
      "@id": "urn:ngm:class:asynchronous-collaboration",
      "label": "Asynchronous Collaboration"
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
  "@id": "urn:visionflow:annotation:link-resolutions:video-async:776c802a9fc9",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:7a738e5607ca235ad6e98117c7ffa4e3cb5a34720af620cbc06d844bc5606782"
  },
  "vc:resolutions": [
    {
      "raw": "[[Collaboration Tools]]",
      "resolved": "urn:visionflow:linked:collaboration-tools",
      "kind": "StubLink"
    },
    {
      "raw": "[[Loom]]",
      "resolved": "urn:visionflow:linked:loom",
      "kind": "StubLink"
    },
    {
      "raw": "[[Asynchronous Collaboration]]",
      "resolved": "urn:visionflow:owl:class:asynchronous-collaboration",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[TelecollaborationDomain]]",
      "resolved": "urn:visionflow:owl:class:telecollaboration-domain",
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
  - Asynchronous video communication allowing users to record, share, and view video messages at their convenience, combining visual richness with time flexibility.

- ### Semantic Classification
  - owl-class:: distributed-collaboration:VideoAsync
  - owl-role:: Object
  - belongs-to-domain:: [[TelecollaborationDomain]]

- ### Relationships
  - is-subclass-of:: [[Asynchronous Collaboration]]

- ### Content
  Video Async — content pending enrichment.

- ### Provenance
  - sources:: [[Collaboration Tools]], [[Loom]]
  - migration-date:: 2026-04-26T00:00:00Z
