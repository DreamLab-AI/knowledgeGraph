public:: true

# Task and Motion Planning
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:3a1ff0ab73168a2a0dcddf61efb4b5d8755feb83fdf81209fa92d853f2fa66f6",
  "@type": "Page",
  "vc:slug": "task-and-motion-planning",
  "title": "Task and Motion Planning",
  "vc:public": true,
  "vc:outboundWikilinks": [
    {
      "@id": "urn:visionflow:linked:planning",
      "vc:label": "Planning"
    },
    {
      "@id": "urn:visionflow:linked:robot-control",
      "vc:label": "Robot Control"
    },
    {
      "@id": "urn:visionflow:linked:pathfinding-algorithm",
      "vc:label": "Pathfinding Algorithm"
    },
    {
      "@id": "urn:visionflow:linked:motion-planning",
      "vc:label": "Motion Planning"
    },
    {
      "@id": "urn:visionflow:linked:https-en-wikipedia-org-wiki-motion-planning",
      "vc:label": "https://en.wikipedia.org/wiki/Motion_planning"
    },
    {
      "@id": "urn:visionflow:linked:https-arxiv-org-abs-2010-01083",
      "vc:label": "https://arxiv.org/abs/2010.01083"
    }
  ],
  "vc:schemaVersion": 2,
  "vc:legacyProperties": [
    {
      "vc:key": "preferred-term",
      "vc:value": "Task and Motion Planning"
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
  "@id": "urn:ngm:class:task-and-motion-planning",
  "@type": "Class",
  "label": "Task and Motion Planning",
  "definition": "Task and motion planning is an approach in robotics that combines high-level task planning with low-level motion planning to produce executable plans. It addresses both what to do and how to move.",
  "domain": "robotics",
  "maturity": "established",
  "qualityScore": 0.7,
  "subClassOf": [
    {
      "@id": "urn:ngm:class:motion-planning",
      "label": "Motion Planning"
    }
  ],
  "relations": {
    "requires": [
      {
        "@id": "urn:ngm:class:planning",
        "label": "Planning"
      }
    ],
    "enables": [
      {
        "@id": "urn:ngm:class:robot-control",
        "label": "Robot Control"
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
  "@id": "urn:visionflow:annotation:link-resolutions:task-and-motion-planning:d64cb01a5c26",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:3a1ff0ab73168a2a0dcddf61efb4b5d8755feb83fdf81209fa92d853f2fa66f6"
  },
  "vc:resolutions": [
    {
      "raw": "[[Planning]]",
      "resolved": "urn:visionflow:linked:planning",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Robot Control]]",
      "resolved": "urn:visionflow:linked:robot-control",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Pathfinding Algorithm]]",
      "resolved": "urn:visionflow:linked:pathfinding-algorithm",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Motion Planning]]",
      "resolved": "urn:visionflow:linked:motion-planning",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[https://en.wikipedia.org/wiki/Motion_planning]]",
      "resolved": "urn:visionflow:linked:https-en-wikipedia-org-wiki-motion-planning",
      "kind": "StubLink"
    },
    {
      "raw": "[[https://arxiv.org/abs/2010.01083]]",
      "resolved": "urn:visionflow:linked:https-arxiv-org-abs-2010-01083",
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
  - Task and motion planning is an approach in robotics that combines high-level task planning with low-level motion planning to produce executable plans. It addresses both what to do and how to move.

- ### Semantic Classification
  - owl-class:: robotics:TaskandMotionPlanning
  - owl-role:: Class

- ### Relationships
  - is-subclass-of:: [[Motion Planning]]
  - bridges-to:: [[Pathfinding Algorithm]]
  - requires:: [[Planning]]
  - enables:: [[Robot Control]]

- ### Content
  - Task and motion planning interleaves symbolic reasoning about the sequence of actions with geometric reasoning about feasible movements. A plan must satisfy both the logical goals of a task and the physical constraints of the robot and its environment.
  - The combined problem is challenging because choices at the task level affect whether motions are achievable, and vice versa. Methods search across both layers, checking that each proposed action can be realised by a collision-free motion.

- ### Provenance
  - sources:: [[https://en.wikipedia.org/wiki/Motion_planning]], [[https://arxiv.org/abs/2010.01083]]
  - migration-date:: 2026-05-29T00:00:00Z
