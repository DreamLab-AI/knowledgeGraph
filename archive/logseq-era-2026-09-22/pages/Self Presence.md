public:: true

# Self Presence
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:d16e2f16c96e1750007bff39dabd13c47a781adce6432b7d19549e5ef7b6b361",
  "@type": "Page",
  "vc:slug": "self-presence",
  "title": "Self Presence",
  "vc:public": true,
  "vc:outboundWikilinks": [
    {
      "@id": "urn:visionflow:linked:avatar-psychology",
      "vc:label": "Avatar Psychology"
    },
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
      "vc:label": "TelecollaborationDomain"
    }
  ],
  "vc:schemaVersion": 2,
  "vc:legacyProperties": [
    {
      "vc:key": "legacy-term-id",
      "vc:value": "TC-9006"
    },
    {
      "vc:key": "preferred-term",
      "vc:value": "Self Presence"
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
  "@id": "urn:ngm:class:self-presence",
  "@type": "Class",
  "label": "Self Presence",
  "definition": "The subjective sense that one's virtual or avatar representation in a mediated environment is a genuine extension of the physical self — encompassing body ownership, proprioceptive coherence, and self-location within virtual space. Self presence is a component of overall presence and a prerequisite for authentic immersive collaboration, as it governs how naturally users interact with and move through shared virtual environments.",
  "domain": "distributed-collaboration",
  "maturity": "emerging",
  "quality": 0.75,
  "subClassOf": [
    {
      "@id": "urn:ngm:class:dc-telepresence",
      "label": "Telepresence"
    }
  ],
  "relations": {
    "partOf": [
      {"@id": "urn:ngm:class:presence", "label": "Presence"},
      {"@id": "urn:ngm:class:immersion", "label": "Immersion"}
    ],
    "relatedTo": [
      {"@id": "urn:ngm:class:social-presence", "label": "Social Presence"},
      {"@id": "urn:ngm:class:spatial-presence", "label": "Spatial Presence"},
      {"@id": "urn:ngm:class:virtual-presence", "label": "Virtual Presence"},
      {"@id": "urn:ngm:class:emotional-immersion", "label": "Emotional Immersion"},
      {"@id": "urn:ngm:class:user-experience", "label": "User Experience"}
    ],
    "requires": [
      {"@id": "urn:ngm:class:avatar", "label": "Avatar"},
      {"@id": "urn:ngm:class:digital-avatar", "label": "Digital Avatar"}
    ],
    "enables": [
      {"@id": "urn:ngm:class:telepresence", "label": "Telepresence"},
      {"@id": "urn:ngm:class:embodied-ai", "label": "Embodied AI"}
    ],
    "uses": [
      {"@id": "urn:ngm:class:motion-capture", "label": "Motion Capture"},
      {"@id": "urn:ngm:class:hand-tracking", "label": "Hand Tracking"},
      {"@id": "urn:ngm:class:eye-tracking", "label": "Eye Tracking"}
    ]
  },
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
  "@id": "urn:visionflow:annotation:link-resolutions:self-presence:776c802a9fc9",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:d16e2f16c96e1750007bff39dabd13c47a781adce6432b7d19549e5ef7b6b361"
  },
  "vc:resolutions": [
    {
      "raw": "[[Avatar Psychology]]",
      "resolved": "urn:visionflow:linked:avatar-psychology",
      "kind": "StubLink"
    },
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
      "raw": "[[TelecollaborationDomain]]",
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
  - Subjective experience of embodiment and self-location in a mediated environment, feeling that one's virtual representation is an extension of oneself.

- ### Semantic Classification
  - owl-class:: distributed-collaboration:SelfPresence
  - owl-role:: Attribute
  - belongs-to-domain:: [[TelecollaborationDomain]]

- ### Relationships
  - is-subclass-of:: [[Presence]]

- ### Content
  Self presence describes the degree to which a user perceives their avatar or virtual body as genuinely their own — the sense that virtual limbs respond as if they were physical, that head movements naturally map to virtual viewpoint changes, and that proprioceptive feedback aligns with visual representation. High self presence reduces the cognitive overhead of operating in virtual environments and correlates strongly with reduced cybersickness and increased task performance in immersive collaboration settings.

  The phenomenon draws on the "rubber hand illusion" and related body ownership research, extended to full-body virtual embodiment. Key enabling factors include low-latency motion capture, high-fidelity avatar representation, and congruent multisensory feedback. In telecollaboration contexts, self presence is a foundation for richer social presence: if participants do not feel embodied themselves, they are unlikely to perceive remote collaborators as genuinely co-located.

- ### Provenance
  - sources:: [[Presence Research]], [[Avatar Psychology]]
  - migration-date:: 2026-04-26T00:00:00Z
