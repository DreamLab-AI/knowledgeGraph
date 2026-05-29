public:: true

# Perceptual Experience
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:3cf622bfd0826f51b72b527e9f033b4266fb8703ccf630c0f22d1bc0a1e9b501",
  "@type": "Page",
  "vc:slug": "perceptual-experience",
  "title": "Perceptual Experience",
  "vc:public": true,
  "vc:outboundWikilinks": [
    {
      "@id": "urn:visionflow:owl:class:owl-thing",
      "vc:label": "owl:Thing"
    }
  ],
  "vc:schemaVersion": 2,
  "vc:legacyProperties": [
    {
      "vc:key": "legacy-term-id",
      "vc:value": "TC-9508"
    },
    {
      "vc:key": "preferred-term",
      "vc:value": "Perceptual Experience"
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
  "@id": "urn:ngm:class:perceptual-experience",
  "@type": "Class",
  "label": "Perceptual Experience",
  "definition": "The multimodal sensory and cognitive engagement a user undergoes within a telepresence or immersive environment, encompassing visual fidelity, spatial audio, haptic feedback, and sense of presence. Perceptual experience quality determines the degree to which a distributed or virtual interaction is felt as equivalent to physical co-presence, directly impacting collaboration effectiveness and user well-being.",
  "domain": "distributed-collaboration",
  "maturity": "emerging",
  "subClassOf": [
    {
      "@id": "urn:ngm:class:dc-telepresence",
      "label": "Telepresence"
    }
  ],
  "qualityScore": 0.7,
  "relations": {
    "requires": [
      {"@id": "urn:ngm:class:telepresence", "label": "Telepresence"},
      {"@id": "urn:ngm:class:immersive-technology", "label": "Immersive Technology"}
    ],
    "enables": [
      {"@id": "urn:ngm:class:social-presence", "label": "Social Presence"},
      {"@id": "urn:ngm:class:user-experience", "label": "User Experience"}
    ],
    "relatedTo": [
      {"@id": "urn:ngm:class:virtual-reality", "label": "Virtual Reality"},
      {"@id": "urn:ngm:class:augmented-reality", "label": "Augmented Reality"}
    ]
  },
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
  "@id": "urn:visionflow:annotation:link-resolutions:perceptual-experience:776c802a9fc9",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:3cf622bfd0826f51b72b527e9f033b4266fb8703ccf630c0f22d1bc0a1e9b501"
  },
  "vc:resolutions": [
    {
      "raw": "[[owl:Thing]]",
      "resolved": "urn:visionflow:owl:class:owl-thing",
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
  - The multimodal sensory and cognitive engagement a user undergoes within a telepresence or immersive environment, encompassing visual fidelity, spatial audio, haptic feedback, and sense of presence. Perceptual experience quality determines the degree to which a distributed or virtual interaction is felt as equivalent to physical co-presence, directly impacting collaboration effectiveness and user well-being.

- ### Semantic Classification
  - owl-class:: distributed-collaboration:PerceptualExperience
  - owl-role:: concept

- ### Relationships
  - requires: [[Telepresence]], [[Immersive Technology]]
  - enables: [[Social Presence]], [[User Experience]]
  - relatedTo: [[Virtual Reality]], [[Augmented Reality]]

- ### Content

  ## Overview

  Perceptual Experience represents an abstract concept in the telecollaboration ontology hierarchy.

  #### Related Concepts
  - [[owl:Thing]]

- ### Provenance
  - sources::
  - migration-date:: 2026-04-26T00:00:00Z
