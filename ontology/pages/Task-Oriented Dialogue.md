public:: true

# Task-Oriented Dialogue

```json-ld
{ "@context":"https://narrativegoldmine.com/ns/v1", "@id":"urn:visionflow:page:task-oriented-dialogue", "@type":"Page", "title":"Task-Oriented Dialogue", "vc:slug":"task-oriented-dialogue", "vc:public":true, "vc:schemaVersion":2, "vc:outboundWikilinks":[] }
```

```json-ld
{
  "@context":"https://narrativegoldmine.com/ns/v2.jsonld",
  "@id":"urn:ngm:class:task-oriented-dialogue",
  "@type":"Class",
  "label":"Task-Oriented Dialogue",
  "definition":"Task-Oriented Dialogue is a conversational-AI paradigm in which a system engages in multi-turn interaction with a user to accomplish a specific, bounded goal, such as booking a flight or resetting a password, rather than conversing openly. It typically relies on intent classification to determine what the user wants and slot filling to extract the specific parameters needed to complete that intent. Its success is measured by task completion rate rather than by open-ended conversational quality.",
  "domain":"artificial-intelligence",
  "maturity":"established",
  "subClassOf":[{"@id":"urn:ngm:class:dialogue-system","label":"Dialogue System"}],
  "relations":{},
  "sameAs":[],
  "quality":0.55,
  "provenance":{"attributedTo":"did:nostr:ontology-mesh","generatedAt":"2026-07-25T00:00:00Z","inferenceRule":"GapMaterialisation"}
}
```

- ### Definition
	- Task-Oriented Dialogue is a conversational-AI paradigm in which a system engages in multi-turn interaction with a user to accomplish a specific, bounded goal, such as booking a flight or resetting a password, rather than conversing openly. It typically relies on intent classification to determine what the user wants and slot filling to extract the specific parameters needed to complete that intent. Its success is measured by task completion rate rather than by open-ended conversational quality.
- ### Relationships
	- subClassOf:: [[Dialogue System]]
- ### Provenance
	- updated:: 2026-07-25
	- attributedTo:: did:nostr:ontology-mesh
	- inferenceRule:: GapMaterialisation
