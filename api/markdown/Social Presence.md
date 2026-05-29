public:: true

# Social Presence
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:9e72c244193228052525cf78f2adbdbc525b04fe80c47a1cb4df5a71bf4f3cce",
  "@type": "Page",
  "vc:slug": "social-presence",
  "title": "Social Presence",
  "vc:public": true,
  "vc:outboundWikilinks": [
    {
      "@id": "urn:visionflow:linked:presence-research",
      "vc:label": "Presence Research"
    },
    {
      "@id": "urn:visionflow:owl:class:presence",
      "vc:label": "Presence"
    },
    {
      "@id": "urn:visionflow:owl:class:telecollaboration",
      "vc:label": "Telecollaboration"
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
      "vc:value": "TC-9004"
    },
    {
      "vc:key": "preferred-term",
      "vc:value": "Social Presence"
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
  "@id": "urn:ngm:class:social-presence",
  "@type": "Class",
  "label": "Social Presence",
  "definition": "Subjective experience of feeling connected to and aware of other people in a mediated communication environment, fostering social interactions and relationships. Social presence is heightened by richer media, avatar fidelity, spatial audio, and shared immersive spaces, and is a key quality metric for telecollaboration and virtual world platforms.",
  "domain": "distributed-collaboration",
  "maturity": "established",
  "subClassOf": [
    {
      "@id": "urn:ngm:class:dc-telepresence",
      "label": "Telepresence"
    },
    {
      "@id": "urn:ngm:class:presence",
      "label": "Presence"
    }
  ],
  "relations": {
    "relatedTo": [
      {"@id": "urn:ngm:class:telecollaboration", "label": "Telecollaboration"},
      {"@id": "urn:ngm:class:immersive-communication", "label": "Immersive Communication"},
      {"@id": "urn:ngm:class:avatar", "label": "Avatar"},
      {"@id": "urn:ngm:class:haptic-feedback", "label": "Haptic Feedback"}
    ],
    "enables": [
      {"@id": "urn:ngm:class:virtual-collaboration", "label": "Virtual Collaboration"},
      {"@id": "urn:ngm:class:immersive-experience", "label": "Immersive Experience"}
    ],
    "partOf": [
      {"@id": "urn:ngm:class:dc-communication", "label": "Communication Technology"}
    ],
    "uses": [
      {"@id": "urn:ngm:class:video-conferencing", "label": "Video Conferencing"},
      {"@id": "urn:ngm:class:web-rtc", "label": "WebRTC"},
      {"@id": "urn:ngm:class:presence-detection", "label": "Presence Detection"}
    ]
  },
  "quality": 0.8,
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
  "@id": "urn:visionflow:annotation:link-resolutions:social-presence:776c802a9fc9",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:9e72c244193228052525cf78f2adbdbc525b04fe80c47a1cb4df5a71bf4f3cce"
  },
  "vc:resolutions": [
    {
      "raw": "[[Presence Research]]",
      "resolved": "urn:visionflow:linked:presence-research",
      "kind": "StubLink"
    },
    {
      "raw": "[[Presence]]",
      "resolved": "urn:visionflow:owl:class:presence",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Telecollaboration]]",
      "resolved": "urn:visionflow:owl:class:telecollaboration",
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
  - Subjective experience of feeling connected to and aware of other people in a mediated communication environment, fostering social interactions and relationships.

- ### Semantic Classification
  - owl-class:: distributed-collaboration:SocialPresence
  - owl-role:: Attribute
  - belongs-to-domain:: [[TelecollaborationDomain]]

- ### Relationships
  - is-subclass-of:: [[Presence]]

- ### Content
  Social Presence — content pending enrichment.

- ### Provenance
  - sources:: [[Presence Research]], [[Telecollaboration]]
  - migration-date:: 2026-04-26T00:00:00Z
