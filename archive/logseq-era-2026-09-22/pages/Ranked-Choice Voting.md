public:: true

# Ranked-Choice Voting

```json-ld
{ "@context":"https://narrativegoldmine.com/ns/v1", "@id":"urn:visionflow:page:ranked-choice-voting", "@type":"Page", "title":"Ranked-Choice Voting", "vc:slug":"ranked-choice-voting", "vc:public":true, "vc:schemaVersion":2, "vc:outboundWikilinks":[] }
```

```json-ld
{
  "@context":"https://narrativegoldmine.com/ns/v2.jsonld",
  "@id":"urn:ngm:class:ranked-choice-voting",
  "@type":"Class",
  "label":"Ranked-Choice Voting",
  "definition":"Ranked-choice voting is a voting method in which voters rank candidates in order of preference, and votes are redistributed in rounds by eliminating the lowest-ranked candidate until one candidate holds a majority. It is studied within social choice theory as an alternative to plurality voting intended to reduce spoiler effects and better reflect aggregate voter preference. It is used in some collective decision-making systems, including governance mechanisms for decentralised organisations.",
  "domain":"governance",
  "maturity":"draft",
  "subClassOf":[{"@id":"urn:ngm:class:voting-system","label":"Voting System"}],
  "relations":{
    "requires":[{"@id":"urn:ngm:class:social-choice-theory","label":"Social Choice Theory"}]
  },
  "sameAs":[],
  "quality":0.5,
  "provenance":{"attributedTo":"did:nostr:ontology-mesh","generatedAt":"2026-07-25T00:00:00Z","inferenceRule":"GapMaterialisation"}
}
```

- ### Definition
	- [[Ranked-Choice Voting]] Ranked-choice voting is a voting method in which voters rank candidates in order of preference, and votes are redistributed in rounds by eliminating the lowest-ranked candidate until one candidate holds a majority. It is studied within social choice theory as an alternative to plurality voting intended to reduce spoiler effects and better reflect aggregate voter preference. It is used in some collective decision-making systems, including governance mechanisms for decentralised organisations.
- ### Relationships
	- subClassOf:: [[Voting System]]
	- requires:: [[Social Choice Theory]]
- ### Provenance
	- updated:: 2026-07-25
	- attributedTo:: did:nostr:ontology-mesh
	- inferenceRule:: GapMaterialisation
