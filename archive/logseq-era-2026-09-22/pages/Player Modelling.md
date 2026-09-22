public:: true

# Player Modelling
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:player-modelling",
  "@type": "Page",
  "vc:slug": "player-modelling",
  "title": "Player Modelling",
  "vc:public": true,
  "vc:outboundWikilinks": [],
  "vc:schemaVersion": 2
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:player-modelling",
  "@type": "Class",
  "label": "Player Modelling",
  "definition": "Player modelling is the computational construction of representations of a player's preferences, skill, behaviour, and emotional state from in-game data. These models enable games to personalise difficulty, content, and recommendations, and to predict future actions. It is a foundational technique for adaptive and AI-driven game systems.",
  "domain": "ai",
  "maturity": "established",
  "subClassOf": [{"@id": "urn:ngm:class:ai-application", "label": "AI Application"}],
  "relations": {
    "relatedTo": [
      {"@id": "urn:ngm:class:ai-in-games", "label": "AI in Games"}
    ]
  },
  "quality": 0.72
}
```

- ### Definition
  - Player modelling builds data-driven profiles of player behaviour, skill, and intent. It is a required capability within [[AI in Games]] for adaptive difficulty, personalisation, and procedural content generation.
- ### Content
  - Techniques span supervised classification of player types, clustering of behavioural traces, and sequence models that predict next actions. Models may be static (player-type taxonomies) or dynamic (online updates during play), and they feed difficulty adjustment, matchmaking, churn prediction, and content recommendation pipelines.
