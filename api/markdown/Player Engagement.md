public:: true

# Player Engagement
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:player-engagement",
  "@type": "Page",
  "vc:slug": "player-engagement",
  "title": "Player Engagement",
  "vc:public": true,
  "vc:outboundWikilinks": [],
  "vc:schemaVersion": 2
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:player-engagement",
  "@type": "Class",
  "label": "Player Engagement",
  "definition": "Player engagement is the degree to which a game holds a player's attention, motivation, and continued participation over time. It is measured through behavioural signals such as session length, retention, progression, and emotional investment. Game designers and AI systems optimise engagement to sustain player communities and, in token-based games, to drive economic activity.",
  "domain": "metaverse",
  "maturity": "established",
  "subClassOf": [{"@id": "urn:ngm:class:metaverse", "label": "Metaverse"}],
  "relations": {
    "relatedTo": [
      {"@id": "urn:ngm:class:play-to-earn-p2-e", "label": "Play-to-Earn (P2E)"},
      {"@id": "urn:ngm:class:ai-game-agent", "label": "AI Game Agent"}
    ]
  },
  "quality": 0.72
}
```

- ### Definition
  - Player engagement quantifies how effectively a game retains player attention and motivation. It is a core target for [[AI Game Agent]] design and underpins reward structures in [[Play-to-Earn (P2E)]] economies.
- ### Content
  - Engagement is typically modelled through retention curves, daily active users, churn prediction, and progression pacing. AI agents and adaptive difficulty systems tune challenge and reward loops to keep players in a state of flow, while monetisation and tokenomics designs balance engagement against player burnout and economic sustainability.
