public:: true

# Planning
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:235f0b65a00ae6c7b3f519a593e60a246f70b015a2d29112320362d5953df23b",
  "@type": "Page",
  "vc:slug": "planning",
  "title": "Planning",
  "vc:public": true,
  "vc:outboundWikilinks": [
    {
      "@id": "urn:visionflow:linked:search-algorithm",
      "vc:label": "Search Algorithm"
    },
    {
      "@id": "urn:visionflow:linked:autonomous-agent",
      "vc:label": "Autonomous Agent"
    },
    {
      "@id": "urn:visionflow:linked:automated-planning",
      "vc:label": "Automated Planning"
    },
    {
      "@id": "urn:visionflow:linked:artificial-intelligence",
      "vc:label": "Artificial Intelligence"
    }
  ],
  "vc:schemaVersion": 2,
  "vc:legacyProperties": [
    {
      "vc:key": "preferred-term",
      "vc:value": "Planning"
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
  "@id": "urn:ngm:class:planning",
  "@type": "Class",
  "label": "Planning",
  "definition": "In artificial intelligence, the process of selecting a sequence of actions that transforms an initial state into a desired goal state, given a model of how actions change the world.",
  "domain": "artificial-intelligence",
  "maturity": "mature",
  "qualityScore": 0.7,
  "subClassOf": [
    {
      "@id": "urn:ngm:class:artificial-intelligence",
      "label": "Artificial Intelligence"
    }
  ],
  "relations": {
    "requires": [
      {
        "@id": "urn:ngm:class:search-algorithm",
        "label": "Search Algorithm"
      }
    ],
    "enables": [
      {
        "@id": "urn:ngm:class:autonomous-agent",
        "label": "Autonomous Agent"
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
  "@id": "urn:visionflow:annotation:link-resolutions:planning:423614833cbd",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:235f0b65a00ae6c7b3f519a593e60a246f70b015a2d29112320362d5953df23b"
  },
  "vc:resolutions": [
    {
      "raw": "[[Search Algorithm]]",
      "resolved": "urn:visionflow:linked:search-algorithm",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Autonomous Agent]]",
      "resolved": "urn:visionflow:linked:autonomous-agent",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Automated Planning]]",
      "resolved": "urn:visionflow:linked:automated-planning",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Artificial Intelligence]]",
      "resolved": "urn:visionflow:linked:artificial-intelligence",
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
  - In artificial intelligence, the process of selecting a sequence of actions that transforms an initial state into a desired goal state, given a model of how actions change the world.

- ### Semantic Classification
  - owl-class:: artificial-intelligence:Planning
  - owl-role:: Class

- ### Relationships
  - is-subclass-of:: [[Artificial Intelligence]]
  - bridges-to:: [[Automated Planning]]
  - requires:: [[Search Algorithm]]
  - enables:: [[Autonomous Agent]]

- ### Content
  - Planning reasons about actions and their effects to produce a course of action that achieves goals. Classical planning assumes a deterministic, fully observable environment described in a formal language, while richer formulations handle uncertainty, time and continuous quantities.
  - Planning is a core component of autonomous agents, sitting between perception and execution. Methods range from heuristic search over state spaces to constraint-based and hierarchical approaches, and increasingly to learned policies that approximate planning in complex domains.

- ### Provenance
  - sources::
  - migration-date:: 2026-05-29T00:00:00Z
