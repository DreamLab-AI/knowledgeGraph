public:: true

# Transaction Output

```json-ld
{ "@context":"https://narrativegoldmine.com/ns/v1", "@id":"urn:visionflow:page:transaction-output", "@type":"Page", "title":"Transaction Output", "vc:slug":"transaction-output", "vc:public":true, "vc:schemaVersion":2, "vc:outboundWikilinks":[] }
```

```json-ld
{
  "@context":"https://narrativegoldmine.com/ns/v2.jsonld",
  "@id":"urn:ngm:class:transaction-output",
  "@type":"Class",
  "label":"Transaction Output",
  "definition":"A transaction output is a component of a blockchain transaction that specifies an amount of value and the conditions under which it can later be spent. In UTXO-based systems each output records a value and a locking script that defines who may consume it, and an unspent output becomes the input to a future transaction. Transaction outputs are the fundamental units of ownership and value transfer in such ledgers, and the set of all unspent outputs constitutes the current state of holdings.",
  "domain":"blockchain",
  "maturity":"established",
  "subClassOf":[{"@id":"urn:ngm:class:blockchain-transaction","label":"Blockchain Transaction"}],
  "relations":{
    "partOf":[{"@id":"urn:ngm:class:blockchain-transaction","label":"Blockchain Transaction"},{"@id":"urn:ngm:class:transaction","label":"Transaction"}],
    "hasPart":[{"@id":"urn:ngm:class:script","label":"Script"}],
    "enables":[{"@id":"urn:ngm:class:unspent-transaction-output","label":"Unspent Transaction Output"}],
    "uses":[{"@id":"urn:ngm:class:script","label":"Script"},{"@id":"urn:ngm:class:cryptographic-hash-function","label":"Cryptographic Hash Function"}],
    "requires":[{"@id":"urn:ngm:class:bitcoin","label":"Bitcoin"}],
    "supports":[{"@id":"urn:ngm:class:utxo","label":"UTXO"}],
    "relatedTo":[{"@id":"urn:ngm:class:unspent-transaction-output","label":"Unspent Transaction Output"},{"@id":"urn:ngm:class:double-spending","label":"Double Spending"},{"@id":"urn:ngm:class:consensus-mechanism","label":"Consensus Mechanism"}],
    "implements":[{"@id":"urn:ngm:class:utxo","label":"UTXO"}],
    "bridgesTo":[{"@id":"urn:ngm:class:bitcoin","label":"Bitcoin"}],
    "contrastsWith":[{"@id":"urn:ngm:class:transaction","label":"Transaction"}]
  },
  "sameAs":[],
  "quality":0.62,
  "provenance":{"attributedTo":"did:nostr:ontology-mesh","generatedAt":"2026-06-15T00:00:00Z","inferenceRule":"GapMaterialisation"}
}
```

- ### Definition
	- A [[Transaction Output]] is a component of a [[Blockchain Transaction]] that records an amount of value and the conditions for spending it.
	- In UTXO ledgers each output carries a locking [[Script]] that defines who may later consume it.
	- An unspent output becomes the input to a future transaction, forming the basis of [[UTXO]] accounting.
- ### Overview
	- In UTXO-based blockchains such as [[Bitcoin]], value is not tracked as account balances but as a collection of discrete outputs.
	- Each transaction consumes existing unspent outputs as inputs and creates new outputs, transferring ownership in the process.
	- The set of all unspent transaction outputs at any moment represents the entire spendable state of the ledger.
	- Outputs encode spending conditions through scripts, allowing simple payments as well as more complex conditional transfers.
- ### Key aspects
	- Value field: the precise amount of the asset assigned to the output.
	- Locking script: the predicate that must be satisfied to spend the output.
	- Indivisibility on spend: an output is consumed in full, with change returned as a new output.
	- Unspent set: outputs not yet consumed form the UTXO set used to validate new transactions.
	- Statelessness: ownership is derived from outputs rather than stored balances.
- ### Mechanisms
	- A spender provides an unlocking script that satisfies a referenced output's locking script.
	- Nodes verify that referenced outputs exist, are unspent, and that scripts validate, preventing double spending.
	- Newly created outputs are added to the unspent set once the containing transaction is confirmed.
- ### Applications
	- Recording value transfer in [[Bitcoin]] and other UTXO ledgers.
	- Maintaining the [[UTXO]] set used for fast, parallelisable validation.
	- Encoding conditional payments and contracts through scripting.
	- Preventing [[Double Spending]] by enforcing single consumption of each output.
- ### Relationships
	- subClassOf:: [[Blockchain Transaction]]
	- partOf:: [[Blockchain Transaction]]
	- partOf:: [[Transaction]]
	- hasPart:: [[Script]]
	- enables:: [[Unspent Transaction Output]]
	- uses:: [[Script]]
	- uses:: [[Cryptographic Hash Function]]
	- requires:: [[Bitcoin]]
	- supports:: [[UTXO]]
	- relatedTo:: [[Unspent Transaction Output]]
	- relatedTo:: [[Double Spending]]
	- relatedTo:: [[Consensus Mechanism]]
	- implements:: [[UTXO]]
	- bridgesTo:: [[Bitcoin]]
	- contrastsWith:: [[Transaction]]
- ### Provenance
	- updated:: 2026-06-15
	- attributedTo:: did:nostr:ontology-mesh
	- inferenceRule:: GapMaterialisation
