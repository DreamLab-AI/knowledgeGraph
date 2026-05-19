public:: true

# Virtual Meeting
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:b2e3dc56f974948ed53971fd1cb1224b65cd16f0f7107ff648a00f685e2f842d",
  "@type": "Page",
  "vc:slug": "virtual-meeting",
  "title": "Virtual Meeting",
  "vc:public": true,
  "vc:outboundWikilinks": [
    {
      "@id": "urn:visionflow:owl:class:telecollaboration",
      "vc:label": "Telecollaboration"
    }
  ],
  "vc:schemaVersion": 2,
  "vc:legacyProperties": [
    {
      "vc:key": "legacy-term-id",
      "vc:value": "TC-0602"
    },
    {
      "vc:key": "preferred-term",
      "vc:value": "Virtual Meeting"
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
  "@id": "urn:ngm:class:virtual-meeting",
  "@type": "Class",
  "label": "Virtual Meeting",
  "definition": "Virtual Meeting refers to synchronous gatherings of participants using video conferencing, spatial computing, or immersive technologies to collaborate remotely.",
  "domain": "distributed-collaboration",
  "maturity": "draft",
  "subClassOf": [
    {
      "@id": "urn:ngm:class:dc-communication",
      "label": "Communication Technology"
    },
    {
      "@id": "urn:ngm:class:telecollaboration",
      "label": "Telecollaboration"
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
  "@id": "urn:visionflow:annotation:link-resolutions:virtual-meeting:776c802a9fc9",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:b2e3dc56f974948ed53971fd1cb1224b65cd16f0f7107ff648a00f685e2f842d"
  },
  "vc:resolutions": [
    {
      "raw": "[[Telecollaboration]]",
      "resolved": "urn:visionflow:owl:class:telecollaboration",
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
  - Virtual Meeting refers to synchronous gatherings of participants using video conferencing, spatial computing, or immersive technologies to collaborate remotely. This encompasses traditional video conferencing platforms, virtual whiteboards, screen sharing capabilities, and emerging 3D virtual meeting spaces.

- ### Semantic Classification
  - owl-class:: distributed-collaboration:VirtualMeeting
  - owl-role:: Concept
  - belongs-to-domain:: [[Telecollaboration]]

- ### Relationships
  - is-subclass-of:: [[Telecollaboration]]

- ### Content
  Virtual Meeting — content pending enrichment.

- ### Provenance
  - sources::
  - migration-date:: 2026-04-26T00:00:00Z
