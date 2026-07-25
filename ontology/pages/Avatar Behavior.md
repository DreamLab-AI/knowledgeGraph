public:: true

# Avatar Behavior
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:99626c93d48c3ba3faa565fc06934712730b59b6c64140dfa980e37f2e7c9b5b",
  "@type": "Page",
  "vc:slug": "avatar-behavior",
  "title": "Avatar Behavior",
  "vc:public": true,
  "vc:outboundWikilinks": [
    {
      "@id": "urn:visionflow:owl:class:did-nostr-identity",
      "vc:label": "DID Nostr Identity"
    },
    {
      "@id": "urn:visionflow:owl:class:metaverse",
      "vc:label": "Metaverse"
    }
  ],
  "vc:schemaVersion": 2,
  "vc:legacyProperties": [
    {
      "vc:key": "legacy-term-id",
      "vc:value": "MV-0002"
    },
    {
      "vc:key": "preferred-term",
      "vc:value": "Avatar Behavior"
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
  "@id": "urn:ngm:class:avatar-behavior",
  "@type": "Class",
  "label": "Avatar Behavior",
  "definition": "The set of behavioural patterns, animation responses, and interactive capabilities that govern how avatars and NPCs act in virtual environments, driven by AI/ML inference, procedural animation, inverse kinematics, facial expression synthesis, and real-time response to user inputs and social context.",
  "domain": "spatial-computing",
  "maturity": "established",
  "subClassOf": [
    {
      "@id": "urn:ngm:class:sc-platform-and-environment",
      "label": "Platform and Environment"
    },
    {
      "@id": "urn:ngm:class:metaverse",
      "label": "Metaverse"
    }
  ],
  "relations": {
    "relatedTo": [
      {"@id": "urn:ngm:class:avatar", "label": "Avatar"},
      {"@id": "urn:ngm:class:avatar-system", "label": "Avatar System"},
      {"@id": "urn:ngm:class:ai-avatars", "label": "AI Avatars"},
      {"@id": "urn:ngm:class:intelligent-npc", "label": "Intelligent NPC"},
      {"@id": "urn:ngm:class:digital-human-technology", "label": "Digital Human Technology"}
    ],
    "uses": [
      {"@id": "urn:ngm:class:inverse-kinematics", "label": "Inverse Kinematics"},
      {"@id": "urn:ngm:class:animation-retargeting", "label": "Animation Retargeting"},
      {"@id": "urn:ngm:class:behavioral-modeling", "label": "Behavioral Modeling"}
    ],
    "enables": [
      {"@id": "urn:ngm:class:social-presence", "label": "Social Presence"},
      {"@id": "urn:ngm:class:immersive-experience", "label": "Immersive Experience"}
    ],
    "partOf": [
      {"@id": "urn:ngm:class:metaverse", "label": "Metaverse"}
    ]
  },
  "quality": 0.8,
  "provenance": {
    "attributedTo": "did:nostr:lcr-swarm",
    "generatedAt": "2026-05-18T07:12:05Z",
    "inferenceRule": "R5DomainRootFallback"
  }
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:annotation:link-resolutions:avatar-behavior:776c802a9fc9",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:99626c93d48c3ba3faa565fc06934712730b59b6c64140dfa980e37f2e7c9b5b"
  },
  "vc:resolutions": [
    {
      "raw": "[[DID Nostr Identity]]",
      "resolved": "urn:visionflow:owl:class:did-nostr-identity",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Metaverse]]",
      "resolved": "urn:visionflow:owl:class:metaverse",
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
  - Behavioral patterns of avatars and NPCs, often driven by AI/ML.

- ### Semantic Classification
  - owl-class:: spatial-computing:AvatarBehavior
  - owl-role:: Concept
  - belongs-to-domain:: [[Metaverse]]

- ### Relationships
  - bridges-to:: [[DID Nostr Identity]] (ngm)

- ### Content
  Avatar Behavior — content pending enrichment.

- ### Provenance
  - sources:: Chimera Prime Research
  - migration-date:: 2026-04-26T00:00:00Z
