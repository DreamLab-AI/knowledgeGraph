public:: true

# Player Agency
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:player-agency",
  "@type": "Page",
  "vc:slug": "player-agency",
  "title": "Player Agency",
  "vc:public": true,
  "vc:outboundWikilinks": [],
  "vc:schemaVersion": 2
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:player-agency",
  "@type": "Class",
  "label": "Player Agency",
  "definition": "Player agency is the degree to which a participant's choices meaningfully shape the state, narrative, and outcomes of an interactive virtual experience. High agency means decisions have consequential, non-trivial effects rather than cosmetic ones, giving players authorship over their path through the world. It is a core design value of open-world and non-linear interactive systems.",
  "domain": "metaverse",
  "maturity": "established",
  "subClassOf": [{"@id": "urn:ngm:class:sc-interaction", "label": "Interaction Technology"}],
  "relations": {
    "relatedTo": [{"@id": "urn:ngm:class:open-world", "label": "Open World"}, {"@id": "urn:ngm:class:non-linear-narrative", "label": "Non Linear Narrative"}]
  },
  "quality": 0.72
}
```

- ### Definition
  - Player agency is the meaningful influence a participant's choices exert on an experience, a defining property of [[Open World]] design and [[Non-Linear Narrative]] structures.
- ### Content
  - Agency arises when systems respond to player decisions with persistent, branching, or emergent consequences, so the player feels like an author rather than a spectator. Designers cultivate it through open exploration, reactive simulation, and narratives that fork on choice, while balancing freedom against authored coherence so that meaningful options do not dissolve into directionless or unsatisfying outcomes.
