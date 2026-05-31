public:: true

# Embodied Presence
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:9a9ae91a19fba35d1b540c28f0d7fb35881f81e9c53c2f186b950650f33e9bb6",
  "@type": "Page",
  "vc:slug": "embodied-presence",
  "title": "Embodied Presence",
  "vc:public": true,
  "vc:outboundWikilinks": [
    {
      "@id": "urn:visionflow:linked:avatar",
      "vc:label": "Avatar"
    },
    {
      "@id": "urn:visionflow:linked:virtual-world",
      "vc:label": "Virtual World"
    },
    {
      "@id": "urn:visionflow:linked:embodied-ai",
      "vc:label": "Embodied AI"
    },
    {
      "@id": "urn:visionflow:linked:telepresence",
      "vc:label": "Telepresence"
    },
    {
      "@id": "urn:visionflow:linked:https-en-wikipedia-org-wiki-immersion-virtual-reality",
      "vc:label": "https://en.wikipedia.org/wiki/Immersion_(virtual_reality)"
    },
    {
      "@id": "urn:visionflow:linked:https-en-wikipedia-org-wiki-telepresence",
      "vc:label": "https://en.wikipedia.org/wiki/Telepresence"
    }
  ],
  "vc:schemaVersion": 2,
  "vc:legacyProperties": [
    {
      "vc:key": "preferred-term",
      "vc:value": "Embodied Presence"
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
  "@id": "urn:ngm:class:embodied-presence",
  "@type": "Class",
  "label": "Embodied Presence",
  "definition": "Embodied presence is the sense of being physically located within a virtual or remote environment, often through an avatar or robotic proxy. It is studied in virtual reality and telepresence.",
  "domain": "metaverse",
  "maturity": "established",
  "qualityScore": 0.7,
  "subClassOf": [
    {
      "@id": "urn:ngm:class:telepresence",
      "label": "Telepresence"
    }
  ],
  "relations": {
    "requires": [
      {
        "@id": "urn:ngm:class:avatar",
        "label": "Avatar"
      }
    ],
    "enables": [
      {
        "@id": "urn:ngm:class:virtual-world",
        "label": "Virtual World"
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
  "@id": "urn:visionflow:annotation:link-resolutions:embodied-presence:650ff774340d",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:9a9ae91a19fba35d1b540c28f0d7fb35881f81e9c53c2f186b950650f33e9bb6"
  },
  "vc:resolutions": [
    {
      "raw": "[[Avatar]]",
      "resolved": "urn:visionflow:linked:avatar",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Virtual World]]",
      "resolved": "urn:visionflow:linked:virtual-world",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Embodied AI]]",
      "resolved": "urn:visionflow:linked:embodied-ai",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Telepresence]]",
      "resolved": "urn:visionflow:linked:telepresence",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[https://en.wikipedia.org/wiki/Immersion_(virtual_reality)]]",
      "resolved": "urn:visionflow:linked:https-en-wikipedia-org-wiki-immersion-virtual-reality",
      "kind": "StubLink"
    },
    {
      "raw": "[[https://en.wikipedia.org/wiki/Telepresence]]",
      "resolved": "urn:visionflow:linked:https-en-wikipedia-org-wiki-telepresence",
      "kind": "StubLink"
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
  - Embodied presence is the sense of being physically located within a virtual or remote environment, often through an avatar or robotic proxy. It is studied in virtual reality and telepresence.

- ### Semantic Classification
  - owl-class:: metaverse:EmbodiedPresence
  - owl-role:: Class

- ### Relationships
  - is-subclass-of:: [[Telepresence]]
  - bridges-to:: [[Embodied AI]]
  - requires:: [[Avatar]]
  - enables:: [[Virtual World]]

- ### Content
  - Embodied presence describes the feeling that one's body or self occupies a virtual or remote space, supported by consistent sensory feedback and control over a representation such as an avatar. It contributes to immersion in virtual reality.
  - Achieving embodied presence depends on low latency, accurate tracking, and coherent visual and haptic feedback. The concept matters for applications in social virtual worlds, remote collaboration, and teleoperated robots.

- ### Provenance
  - sources:: [[https://en.wikipedia.org/wiki/Immersion_(virtual_reality)]], [[https://en.wikipedia.org/wiki/Telepresence]]
  - migration-date:: 2026-05-29T00:00:00Z
