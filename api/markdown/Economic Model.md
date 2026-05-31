public:: true

# Economic Model
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:3b4bf7a34ff4c7f5602ef75c2578d1bf9dc4014b0d0a33ac13d32e95852126bf",
  "@type": "Page",
  "vc:slug": "economic-model",
  "title": "Economic Model",
  "vc:public": true,
  "vc:outboundWikilinks": [
    {
      "@id": "urn:visionflow:linked:economics",
      "vc:label": "Economics"
    },
    {
      "@id": "urn:visionflow:linked:agent-based-modelling",
      "vc:label": "Agent-Based Modelling"
    },
    {
      "@id": "urn:visionflow:linked:simulation",
      "vc:label": "Simulation"
    },
    {
      "@id": "urn:visionflow:linked:game-theory",
      "vc:label": "Game Theory"
    }
  ],
  "vc:schemaVersion": 2,
  "vc:legacyProperties": [
    {
      "vc:key": "preferred-term",
      "vc:value": "Economic Model"
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
  "@id": "urn:ngm:class:economic-model",
  "@type": "Class",
  "label": "Economic Model",
  "definition": "An economic model is a simplified representation of an economy or market used to analyse behaviour and predict outcomes. It expresses relationships between variables such as supply, demand, prices and output.",
  "domain": "artificial-intelligence",
  "maturity": "established",
  "qualityScore": 0.7,
  "subClassOf": [
    {
      "@id": "urn:ngm:class:economics",
      "label": "Economics"
    }
  ],
  "relations": {
    "requires": [
      {
        "@id": "urn:ngm:class:economics",
        "label": "Economics"
      }
    ],
    "enables": [
      {
        "@id": "urn:ngm:class:agent-based-modelling",
        "label": "Agent-Based Modelling"
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
  "@id": "urn:visionflow:annotation:link-resolutions:economic-model:88129da1f918",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:3b4bf7a34ff4c7f5602ef75c2578d1bf9dc4014b0d0a33ac13d32e95852126bf"
  },
  "vc:resolutions": [
    {
      "raw": "[[Economics]]",
      "resolved": "urn:visionflow:linked:economics",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Agent-Based Modelling]]",
      "resolved": "urn:visionflow:linked:agent-based-modelling",
      "kind": "StubLink"
    },
    {
      "raw": "[[Simulation]]",
      "resolved": "urn:visionflow:linked:simulation",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Game Theory]]",
      "resolved": "urn:visionflow:linked:game-theory",
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
  - An economic model is a simplified representation of an economy or market used to analyse behaviour and predict outcomes. It expresses relationships between variables such as supply, demand, prices and output.

- ### Semantic Classification
  - owl-class:: artificial-intelligence:EconomicModel
  - owl-role:: Class

- ### Relationships
  - is-subclass-of:: [[Economics]]
  - bridges-to:: [[Simulation]], [[Game Theory]]
  - requires:: [[Economics]]
  - enables:: [[Agent-Based Modelling]]

- ### Content
  - An economic model abstracts a real economy into a set of variables and assumed relationships, allowing analysts to reason about cause and effect. Models range from equilibrium equations describing aggregate markets to computational simulations of individual decision makers.
  - Agent-based economic models simulate many interacting actors to study emergent phenomena such as price formation and adoption dynamics. Game-theoretic models instead focus on strategic interaction between a small number of rational participants.

- ### Provenance
  - sources::
  - migration-date:: 2026-05-29T00:00:00Z
