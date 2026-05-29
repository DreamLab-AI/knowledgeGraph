public:: true

# Communication Theory
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:373479befe6eec38bafb77faf3db4bb8174ba222258d4a394e08c20e7e220c41",
  "@type": "Page",
  "vc:slug": "communication-theory",
  "title": "Communication Theory",
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
      "vc:value": "TC-0604"
    },
    {
      "vc:key": "preferred-term",
      "vc:value": "Communication Theory"
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
  "@id": "urn:ngm:class:communication-theory",
  "@type": "Class",
  "label": "Communication Theory",
  "definition": "Communication Theory provides the theoretical foundations for understanding how information, meaning, and social presence are transmitted and perceived in mediated communication contexts. Key frameworks include media richness theory, social presence theory, and theories of computer-mediated communication that directly inform the design of telecollaboration systems and collaborative technology.",
  "domain": "distributed-collaboration",
  "maturity": "emerging",
  "qualityScore": 0.7,
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
  "relations": {
    "supports": [
      {"@id": "urn:ngm:class:telecollaboration", "label": "Telecollaboration"},
      {"@id": "urn:ngm:class:collaborative-technology", "label": "Collaborative Technology"}
    ],
    "hasPart": [
      {"@id": "urn:ngm:class:media-richness-theory", "label": "Media Richness Theory"},
      {"@id": "urn:ngm:class:social-presence-theory", "label": "Social Presence Theory"}
    ],
    "relatedTo": [
      {"@id": "urn:ngm:class:social-presence", "label": "Social Presence"},
      {"@id": "urn:ngm:class:video-conferencing", "label": "Video Conferencing"}
    ]
  },
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
  "@id": "urn:visionflow:annotation:link-resolutions:communication-theory:776c802a9fc9",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:373479befe6eec38bafb77faf3db4bb8174ba222258d4a394e08c20e7e220c41"
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
  - Communication Theory provides the theoretical foundations for understanding how information, meaning, and social presence are transmitted and perceived in mediated communication contexts. Key frameworks include media richness theory, social presence theory, and theories of computer-mediated communication that inform the design of telecollaboration systems.

- ### Semantic Classification
  - owl-class:: distributed-collaboration:CommunicationTheory
  - owl-role:: Concept
  - belongs-to-domain:: [[Telecollaboration]]

- ### Relationships
  - is-subclass-of:: [[Telecollaboration]]
  - supports:: [[Telecollaboration]], [[Collaborative Technology]]
  - has-part:: [[Media Richness Theory]], [[Social Presence Theory]]
  - related-to:: [[Social Presence]], [[Video Conferencing]]

- ### Content
  Communication Theory provides the theoretical foundations for understanding how information, meaning, and social presence are transmitted and perceived in mediated communication contexts. Key frameworks — media richness theory, social presence theory, and computer-mediated communication models — directly inform the design of telecollaboration systems and collaborative technology platforms.

- ### Provenance
  - sources::
  - migration-date:: 2026-04-26T00:00:00Z
