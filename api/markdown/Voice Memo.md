public:: true

# Voice Memo
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:94ff7db92bcd3ceb16a1e50027c29c4ee331025b7794617995cd84c4cc3ede2f",
  "@type": "Page",
  "vc:slug": "voice-memo",
  "title": "Voice Memo",
  "vc:public": true,
  "vc:outboundWikilinks": [
    {
      "@id": "urn:visionflow:linked:collaboration-tools",
      "vc:label": "Collaboration Tools"
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
      "vc:value": "TC-9002"
    },
    {
      "vc:key": "preferred-term",
      "vc:value": "Voice Memo"
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
  "@id": "urn:ngm:class:voice-memo",
  "@type": "Class",
  "label": "Voice Memo",
  "definition": "Asynchronous audio communication allowing users to record and share voice messages, providing richer context than text while maintaining time flexibility.",
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
  "@id": "urn:visionflow:annotation:link-resolutions:voice-memo:776c802a9fc9",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:94ff7db92bcd3ceb16a1e50027c29c4ee331025b7794617995cd84c4cc3ede2f"
  },
  "vc:resolutions": [
    {
      "raw": "[[Collaboration Tools]]",
      "resolved": "urn:visionflow:linked:collaboration-tools",
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
  - Asynchronous audio communication allowing users to record and share voice messages, providing richer context than text while maintaining time flexibility.

- ### Semantic Classification
  - owl-class:: distributed-collaboration:VoiceMemo
  - owl-role:: Object
  - belongs-to-domain:: [[TelecollaborationDomain]]

- ### Relationships
  - is-subclass-of:: [[Asynchronous Collaboration]]

- ### Content
  Voice Memo — content pending enrichment.

- ### Provenance
  - sources:: [[Collaboration Tools]]
  - migration-date:: 2026-04-26T00:00:00Z
