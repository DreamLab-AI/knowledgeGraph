public:: true

# Environment
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:f315c50c02a38cf61675529e96bbe5102e5907be5a2651faf0b55bd9169eef12",
  "@type": "Page",
  "vc:slug": "environment",
  "title": "Environment",
  "vc:public": true,
  "vc:outboundWikilinks": [
    {
      "@id": "urn:visionflow:linked:reinforcement-learning",
      "vc:label": "Reinforcement Learning"
    },
    {
      "@id": "urn:visionflow:linked:scene-understanding",
      "vc:label": "Scene Understanding"
    },
    {
      "@id": "urn:visionflow:linked:owl-thing",
      "vc:label": "owl:Thing"
    }
  ],
  "vc:schemaVersion": 2,
  "vc:legacyProperties": [
    {
      "vc:key": "preferred-term",
      "vc:value": "Environment"
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
  "@id": "urn:ngm:class:environment",
  "@type": "Class",
  "label": "Environment",
  "definition": "Environment is the external context in which an agent or system operates, providing inputs and responding to actions, a central concept in robotics and reinforcement learning.",
  "domain": "robotics",
  "maturity": "established",
  "qualityScore": 0.7,
  "subClassOf": [
    {
      "@id": "urn:ngm:class:owl-thing",
      "label": "owl:Thing"
    }
  ],
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
  "@id": "urn:visionflow:annotation:link-resolutions:environment:ba5285161ba6",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:f315c50c02a38cf61675529e96bbe5102e5907be5a2651faf0b55bd9169eef12"
  },
  "vc:resolutions": [
    {
      "raw": "[[Reinforcement Learning]]",
      "resolved": "urn:visionflow:linked:reinforcement-learning",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Scene Understanding]]",
      "resolved": "urn:visionflow:linked:scene-understanding",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[owl:Thing]]",
      "resolved": "urn:visionflow:linked:owl-thing",
      "kind": "ResolvedLink"
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
  - Environment is the external context in which an agent or system operates, providing inputs and responding to actions, a central concept in robotics and reinforcement learning.

- ### Semantic Classification
  - owl-class:: robotics:Environment
  - owl-role:: Class

- ### Relationships
  - is-subclass-of:: [[owl:Thing]]
  - bridges-to:: [[Reinforcement Learning]], [[Scene Understanding]]

- ### Content
  - In reinforcement learning, the environment is everything outside the agent; it receives the agent's actions and returns observations and rewards, defining the dynamics the agent must learn to act within.
  - In robotics, the environment is the physical surroundings a robot perceives and moves through, which may be structured, such as a factory, or unstructured, such as a household, affecting perception and planning difficulty.

- ### Provenance
  - sources::
  - migration-date:: 2026-05-29T00:00:00Z
