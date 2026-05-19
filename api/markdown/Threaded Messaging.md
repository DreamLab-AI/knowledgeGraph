public:: true

# Threaded Messaging
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:0b96025270d184284eae2d39d06cadf7e18b3481d72cdeb5f3ddafcc81d331b1",
  "@type": "Page",
  "vc:slug": "threaded-messaging",
  "title": "Threaded Messaging",
  "vc:public": true,
  "vc:outboundWikilinks": [
    {
      "@id": "urn:visionflow:linked:collaboration-tools",
      "vc:label": "Collaboration Tools"
    },
    {
      "@id": "urn:visionflow:linked:discord",
      "vc:label": "Discord"
    },
    {
      "@id": "urn:visionflow:linked:slack",
      "vc:label": "Slack"
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
      "vc:value": "TC-9001"
    },
    {
      "vc:key": "preferred-term",
      "vc:value": "Threaded Messaging"
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
  "@id": "urn:ngm:class:threaded-messaging",
  "@type": "Class",
  "label": "Threaded Messaging",
  "definition": "Asynchronous communication pattern where messages are organized into conversation threads, enabling contextual discussions and reducing notification overload.",
  "domain": "distributed-collaboration",
  "maturity": "established",
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
  "@id": "urn:visionflow:annotation:link-resolutions:threaded-messaging:776c802a9fc9",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:0b96025270d184284eae2d39d06cadf7e18b3481d72cdeb5f3ddafcc81d331b1"
  },
  "vc:resolutions": [
    {
      "raw": "[[Collaboration Tools]]",
      "resolved": "urn:visionflow:linked:collaboration-tools",
      "kind": "StubLink"
    },
    {
      "raw": "[[Discord]]",
      "resolved": "urn:visionflow:linked:discord",
      "kind": "StubLink"
    },
    {
      "raw": "[[Slack]]",
      "resolved": "urn:visionflow:linked:slack",
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
  - Asynchronous communication pattern where messages are organized into conversation threads, enabling contextual discussions and reducing notification overload.

- ### Semantic Classification
  - owl-class:: distributed-collaboration:ThreadedMessaging
  - owl-role:: Process
  - belongs-to-domain:: [[TelecollaborationDomain]]

- ### Relationships
  - is-subclass-of:: [[Asynchronous Collaboration]]

- ### Content
  Threaded Messaging — content pending enrichment.

- ### Provenance
  - sources:: [[Collaboration Tools]], [[Slack]], [[Discord]]
  - migration-date:: 2026-04-26T00:00:00Z
