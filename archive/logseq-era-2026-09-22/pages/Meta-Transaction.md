public:: true

# Meta-Transaction

```json-ld
{ "@context":"https://narrativegoldmine.com/ns/v1", "@id":"urn:visionflow:page:meta-transaction", "@type":"Page", "title":"Meta-Transaction", "vc:slug":"meta-transaction", "vc:public":true, "vc:schemaVersion":2, "vc:outboundWikilinks":[] }
```

```json-ld
{
  "@context":"https://narrativegoldmine.com/ns/v2.jsonld",
  "@id":"urn:ngm:class:meta-transaction",
  "@type":"Class",
  "label":"Meta-Transaction",
  "definition":"A meta-transaction is a blockchain transaction that a user signs off-chain but does not submit or pay gas for directly; instead a relayer submits it on the user's behalf and covers the transaction fee. It relies on a standard such as EIP-712 for structured, verifiable off-chain message signing so the relayer and receiving contract can authenticate the original signer. It enables gasless user experiences, letting applications abstract away native token fee requirements.",
  "domain":"blockchain",
  "maturity":"draft",
  "subClassOf":[{"@id":"urn:ngm:class:transaction","label":"Transaction"}],
  "relations":{
    "requires":[{"@id":"urn:ngm:class:eip-712","label":"EIP-712"}]
  },
  "sameAs":[],
  "quality":0.5,
  "provenance":{"attributedTo":"did:nostr:ontology-mesh","generatedAt":"2026-07-25T00:00:00Z","inferenceRule":"GapMaterialisation"}
}
```

- ### Definition
	- [[Meta-Transaction]] A meta-transaction is a blockchain transaction that a user signs off-chain but does not submit or pay gas for directly; instead a relayer submits it on the user's behalf and covers the transaction fee. It relies on a standard such as EIP-712 for structured, verifiable off-chain message signing so the relayer and receiving contract can authenticate the original signer. It enables gasless user experiences, letting applications abstract away native token fee requirements.
- ### Relationships
	- subClassOf:: [[Transaction]]
	- requires:: [[EIP-712]]
- ### Provenance
	- updated:: 2026-07-25
	- attributedTo:: did:nostr:ontology-mesh
	- inferenceRule:: GapMaterialisation
