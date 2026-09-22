public:: true

# Gasless Transaction

```json-ld
{ "@context":"https://narrativegoldmine.com/ns/v1", "@id":"urn:visionflow:page:gasless-transaction", "@type":"Page", "title":"Gasless Transaction", "vc:slug":"gasless-transaction", "vc:public":true, "vc:schemaVersion":2, "vc:outboundWikilinks":[] }
```

```json-ld
{
  "@context":"https://narrativegoldmine.com/ns/v2.jsonld",
  "@id":"urn:ngm:class:gasless-transaction",
  "@type":"Class",
  "label":"Gasless Transaction",
  "definition":"A Gasless Transaction is a blockchain transaction in which the end user does not directly pay the network's gas fee, because a relayer, paymaster, or sponsoring contract covers the cost on their behalf, typically in exchange for an off-chain signature authorising the action. It removes the requirement that a wallet hold the native gas token before it can transact, lowering the barrier to onboarding new users. Account abstraction standards such as ERC-4337 provide the infrastructure that makes gasless transactions practical at scale.",
  "domain":"blockchain",
  "maturity":"emerging",
  "subClassOf":[{"@id":"urn:ngm:class:account-abstraction","label":"Account Abstraction"}],
  "relations":{},
  "sameAs":[],
  "quality":0.55,
  "provenance":{"attributedTo":"did:nostr:ontology-mesh","generatedAt":"2026-07-25T00:00:00Z","inferenceRule":"GapMaterialisation"}
}
```

- ### Definition
	- A Gasless Transaction is a blockchain transaction in which the end user does not directly pay the network's gas fee, because a relayer, paymaster, or sponsoring contract covers the cost on their behalf, typically in exchange for an off-chain signature authorising the action. It removes the requirement that a wallet hold the native gas token before it can transact, lowering the barrier to onboarding new users. Account abstraction standards such as ERC-4337 provide the infrastructure that makes gasless transactions practical at scale.
- ### Relationships
	- subClassOf:: [[Account Abstraction]]
- ### Provenance
	- updated:: 2026-07-25
	- attributedTo:: did:nostr:ontology-mesh
	- inferenceRule:: GapMaterialisation
