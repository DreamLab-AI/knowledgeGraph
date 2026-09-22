public:: true

# Learning from Demonstration
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:44831a868415a0f7fbc1fb570e5bd794f2689f1f95779dd051224854537cfac1",
  "@type": "Page",
  "vc:slug": "learning-from-demonstration",
  "title": "Learning from Demonstration",
  "vc:public": true,
  "vc:outboundWikilinks": [
    {
      "@id": "urn:visionflow:linked:imitation-learning",
      "vc:label": "Imitation Learning"
    },
    {
      "@id": "urn:visionflow:linked:offline-reinforcement-learning",
      "vc:label": "Offline Reinforcement Learning"
    },
    {
      "@id": "urn:visionflow:linked:reinforcement-learning",
      "vc:label": "Reinforcement Learning"
    },
    {
      "@id": "urn:visionflow:linked:robotics",
      "vc:label": "Robotics"
    }
  ],
  "vc:schemaVersion": 2,
  "vc:legacyProperties": [
    {
      "vc:key": "preferred-term",
      "vc:value": "Learning from Demonstration"
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
  "@id": "urn:ngm:class:learning-from-demonstration",
  "@type": "Class",
  "label": "Learning from Demonstration",
  "definition": "Learning from demonstration is an approach in which an agent acquires behaviour by observing examples performed by a teacher. It is used to bootstrap policies in robotics and control without hand-specified reward functions.",
  "domain": "machine-learning",
  "maturity": "established",
  "qualityScore": 0.7,
  "subClassOf": [
    {
      "@id": "urn:ngm:class:imitation-learning",
      "label": "Imitation Learning"
    }
  ],
  "relations": {
    "requires": [
      {
        "@id": "urn:ngm:class:imitation-learning",
        "label": "Imitation Learning"
      }
    ],
    "enables": [
      {
        "@id": "urn:ngm:class:offline-reinforcement-learning",
        "label": "Offline Reinforcement Learning"
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
  "@id": "urn:visionflow:annotation:link-resolutions:learning-from-demonstration:3fc62ebecde5",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:44831a868415a0f7fbc1fb570e5bd794f2689f1f95779dd051224854537cfac1"
  },
  "vc:resolutions": [
    {
      "raw": "[[Imitation Learning]]",
      "resolved": "urn:visionflow:linked:imitation-learning",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Offline Reinforcement Learning]]",
      "resolved": "urn:visionflow:linked:offline-reinforcement-learning",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Reinforcement Learning]]",
      "resolved": "urn:visionflow:linked:reinforcement-learning",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Robotics]]",
      "resolved": "urn:visionflow:linked:robotics",
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
  - Learning from demonstration is an approach in which an agent acquires behaviour by observing examples performed by a teacher. It is used to bootstrap policies in robotics and control without hand-specified reward functions.

- ### Semantic Classification
  - owl-class:: machine-learning:LearningfromDemonstration
  - owl-role:: Class

- ### Relationships
  - is-subclass-of:: [[Imitation Learning]]
  - bridges-to:: [[Reinforcement Learning]], [[Robotics]]
  - requires:: [[Imitation Learning]]
  - enables:: [[Offline Reinforcement Learning]]

- ### Content
  - Learning from demonstration, also termed programming by demonstration, lets a system infer a task from recorded expert trajectories rather than explicit instructions. The teacher may be a human operator, a scripted controller or a higher-quality policy.
  - Approaches range from directly imitating the observed actions to inferring the underlying reward and then optimising it. The method is common in robotics where defining a reward by hand is difficult but demonstrations are easy to provide.

- ### Provenance
  - sources::
  - migration-date:: 2026-05-29T00:00:00Z
