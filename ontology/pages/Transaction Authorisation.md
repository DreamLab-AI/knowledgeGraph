public:: true

# Transaction Authorisation

```json-ld
{ "@context":"https://narrativegoldmine.com/ns/v1", "@id":"urn:visionflow:page:transaction-authorisation", "@type":"Page", "title":"Transaction Authorisation", "vc:slug":"transaction-authorisation", "vc:public":true, "vc:schemaVersion":2, "vc:outboundWikilinks":[] }
```

```json-ld
{
  "@context":"https://narrativegoldmine.com/ns/v2.jsonld",
  "@id":"urn:ngm:class:transaction-authorisation",
  "@type":"Class",
  "label":"Transaction Authorisation",
  "definition":"Transaction authorisation is the process of verifying that a party has the right to initiate a given transaction and that the transaction has been approved according to defined rules before it is executed. It typically relies on cryptographic proofs such as digital signatures to bind approval to a specific transaction payload, preventing tampering or replay. In financial and blockchain systems, transaction authorisation is a prerequisite gate that must pass before settlement or state change occurs.",
  "domain":"security",
  "maturity":"draft",
  "subClassOf":[{"@id":"urn:ngm:class:authorization","label":"Authorization"}],
  "relations":{},
  "sameAs":[],
  "quality":0.55,
  "provenance":{"attributedTo":"did:nostr:ontology-mesh","generatedAt":"2026-07-25T00:00:00Z","inferenceRule":"GapMaterialisation"}
}
```

- ### Definition
	- Transaction authorisation is the process of verifying that a party has the right to initiate a given transaction and that the transaction has been approved according to defined rules before it is executed. It typically relies on cryptographic proofs such as digital signatures to bind approval to a specific transaction payload, preventing tampering or replay. In financial and blockchain systems, transaction authorisation is a prerequisite gate that must pass before settlement or state change occurs.
- ### Relationships
	- subClassOf:: [[Authorization]]
- ### Provenance
	- updated:: 2026-07-25
	- attributedTo:: did:nostr:ontology-mesh
	- inferenceRule:: GapMaterialisation
