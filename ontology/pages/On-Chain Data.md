public:: true

# On-Chain Data

```json-ld
{ "@context":"https://narrativegoldmine.com/ns/v1", "@id":"urn:visionflow:page:on-chain-data", "@type":"Page", "title":"On-Chain Data", "vc:slug":"on-chain-data", "vc:public":true, "vc:schemaVersion":2, "vc:outboundWikilinks":[] }
```

```json-ld
{
  "@context":"https://narrativegoldmine.com/ns/v2.jsonld",
  "@id":"urn:ngm:class:on-chain-data",
  "@type":"Class",
  "label":"On-Chain Data",
  "definition":"On-Chain Data is any information permanently recorded within a blockchain's ledger, including transactions, account balances, smart-contract state, and event logs. It is publicly verifiable and immutable once confirmed, distinguishing it from off-chain data held in external databases or oracles. Analytics platforms, compliance tools, and price oracles all query on-chain data directly from full nodes or indexers.",
  "domain":"blockchain",
  "maturity":"established",
  "subClassOf":[{"@id":"urn:ngm:class:blockchain-data","label":"Blockchain Data"}],
  "relations":{},
  "sameAs":[],
  "quality":0.55,
  "provenance":{"attributedTo":"did:nostr:ontology-mesh","generatedAt":"2026-07-25T00:00:00Z","inferenceRule":"GapMaterialisation"}
}
```

- ### Definition
	- On-Chain Data is any information permanently recorded within a blockchain's ledger, including transactions, account balances, smart-contract state, and event logs. It is publicly verifiable and immutable once confirmed, distinguishing it from off-chain data held in external databases or oracles. Analytics platforms, compliance tools, and price oracles all query on-chain data directly from full nodes or indexers.
- ### Relationships
	- subClassOf:: [[Blockchain Data]]
- ### Provenance
	- updated:: 2026-07-25
	- attributedTo:: did:nostr:ontology-mesh
	- inferenceRule:: GapMaterialisation
