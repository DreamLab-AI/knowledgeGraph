public:: true

# Transaction Privacy

```json-ld
{ "@context":"https://narrativegoldmine.com/ns/v1", "@id":"urn:visionflow:page:transaction-privacy", "@type":"Page", "title":"Transaction Privacy", "vc:slug":"transaction-privacy", "vc:public":true, "vc:schemaVersion":2, "vc:outboundWikilinks":[] }
```

```json-ld
{
  "@context":"https://narrativegoldmine.com/ns/v2.jsonld",
  "@id":"urn:ngm:class:transaction-privacy",
  "@type":"Class",
  "label":"Transaction Privacy",
  "definition":"Transaction privacy is the property of a payment or ledger system that conceals sensitive details of a transaction, such as sender, receiver and amount, from third parties while preserving verifiability of correctness. On public blockchains it is achieved through cryptographic techniques that prove a transaction is valid without revealing its contents. It addresses the inherent transparency of open ledgers, trading off auditability and regulatory visibility against confidentiality.",
  "domain":"blockchain",
  "maturity":"emerging",
  "subClassOf":[{"@id":"urn:ngm:class:privacy-preserving-computation","label":"Privacy Preserving Computation"}],
  "relations":{
    "enables":[{"@id":"urn:ngm:class:confidential-transactions","label":"Confidential Transactions"},{"@id":"urn:ngm:class:shielded-transaction","label":"Shielded Transaction"}],
    "uses":[{"@id":"urn:ngm:class:zero-knowledge-proof","label":"Zero Knowledge Proof"},{"@id":"urn:ngm:class:zk-snark","label":"ZK SNARK"}],
    "supports":[{"@id":"urn:ngm:class:privacy-coin","label":"Privacy Coin"}],
    "hasPart":[{"@id":"urn:ngm:class:stealth-address","label":"Stealth Address"}],
    "implements":[{"@id":"urn:ngm:class:privacy-preserving-computation","label":"Privacy Preserving Computation"}],
    "dependsOn":[{"@id":"urn:ngm:class:zero-knowledge-proof","label":"Zero Knowledge Proof"}],
    "contrastsWith":[{"@id":"urn:ngm:class:beneficial-ownership","label":"Beneficial Ownership"}],
    "bridgesTo":[{"@id":"urn:ngm:class:monero","label":"Monero"}],
    "relatedTo":[{"@id":"urn:ngm:class:zcash","label":"Zcash"},{"@id":"urn:ngm:class:confidential-transactions","label":"Confidential Transactions"}]
  },
  "sameAs":[],
  "quality":0.62,
  "provenance":{"attributedTo":"did:nostr:ontology-mesh","generatedAt":"2026-06-15T00:00:00Z","inferenceRule":"GapMaterialisation"}
}
```

- ### Definition
	- [[Transaction Privacy]] conceals sensitive details of a transaction, such as parties and amount, while preserving verifiability of correctness.
	- It is a specialisation of [[Privacy Preserving Computation]] applied to ledgers and payments.
	- On public chains it relies on [[Zero Knowledge Proof]] and [[ZK SNARK]] techniques to validate hidden transactions.
- ### Overview
	- Public blockchains are transparent by default, exposing addresses, amounts and transaction graphs to anyone.
	- Transaction privacy hides some or all of these elements while letting the network still verify that no value was created or double spent.
	- Approaches include confidential amounts via commitments, shielded pools using zero-knowledge proofs, ring signatures and stealth addresses that obscure linkage.
	- These techniques restore the confidentiality users expect from cash while creating tension with anti-money-laundering and auditability requirements.
- ### Key aspects
	- Concealment of sender, recipient and amount.
	- Preservation of public verifiability and consensus soundness.
	- Unlinkability of transactions and addresses.
	- Selective disclosure for compliance where required.
	- Trade-offs between privacy, performance and regulatory acceptance.
- ### Mechanisms
	- Confidential transactions hiding amounts behind cryptographic commitments.
	- Zero-knowledge proofs validating shielded transfers without revealing data.
	- Stealth addresses generating one-time recipient addresses.
	- Ring signatures and mixing to obscure transaction origin.
	- Viewing keys enabling selective auditability.
- ### Applications
	- Privacy-focused cryptocurrencies and shielded payments.
	- Confidential enterprise and supply-chain settlement.
	- Private decentralised-finance transactions.
	- Protection of commercially sensitive on-chain activity.
	- Compliant confidentiality with auditor viewing keys.
- ### Relationships
	- subClassOf:: [[Privacy Preserving Computation]]
	- enables:: [[Confidential Transactions]]
	- enables:: [[Shielded Transaction]]
	- uses:: [[Zero Knowledge Proof]]
	- uses:: [[ZK SNARK]]
	- supports:: [[Privacy Coin]]
	- hasPart:: [[Stealth Address]]
	- implements:: [[Privacy Preserving Computation]]
	- dependsOn:: [[Zero Knowledge Proof]]
	- contrastsWith:: [[Beneficial Ownership]]
	- bridgesTo:: [[Monero]]
	- relatedTo:: [[Zcash]]
	- relatedTo:: [[Confidential Transactions]]
- ### Provenance
	- attributedTo:: did:nostr:ontology-mesh
	- inferenceRule:: GapMaterialisation
	- updated:: 2026-06-15
