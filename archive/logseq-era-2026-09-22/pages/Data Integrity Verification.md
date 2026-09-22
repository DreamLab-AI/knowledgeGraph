public:: true

# Data Integrity Verification

```json-ld
{ "@context":"https://narrativegoldmine.com/ns/v1", "@id":"urn:visionflow:page:data-integrity-verification", "@type":"Page", "title":"Data Integrity Verification", "vc:slug":"data-integrity-verification", "vc:public":true, "vc:schemaVersion":2, "vc:outboundWikilinks":[] }
```

```json-ld
{
  "@context":"https://narrativegoldmine.com/ns/v2.jsonld",
  "@id":"urn:ngm:class:data-integrity-verification",
  "@type":"Class",
  "label":"Data Integrity Verification",
  "definition":"Data integrity verification is the process of confirming that a piece of data has not been altered, corrupted, or tampered with since it was created or last authorised, typically by comparing a cryptographic digest computed over the data against a previously recorded or independently trusted value. Techniques include cryptographic hash functions, checksums, and Merkle tree proofs, which allow large datasets to be verified efficiently by checking a small root value rather than the full contents. It underpins trust in distributed systems, blockchains, and any pipeline where data passes through untrusted intermediaries.",
  "domain":"security",
  "maturity":"emerging",
  "subClassOf":[{"@id":"urn:ngm:class:data-integrity","label":"Data Integrity"}],
  "relations":{
    "uses":[
      {"@id":"urn:ngm:class:cryptographic-hash-function","label":"Cryptographic Hash Function"}
    ],
    "enables":[],
    "requires":[
      {"@id":"urn:ngm:class:merkle-tree","label":"Merkle Tree"}
    ],
    "partOf":[]
  },
  "sameAs":[],
  "quality":0.5,
  "provenance":{"attributedTo":"did:nostr:ontology-mesh","generatedAt":"2026-07-25T00:00:00Z","inferenceRule":"GapMaterialisation"}
}
```

- ### Definition
	- Data integrity verification is the process of confirming that a piece of data has not been altered, corrupted, or tampered with since it was created or last authorised, typically by comparing a cryptographic digest computed over the data against a previously recorded or independently trusted value. Techniques include cryptographic hash functions, checksums, and Merkle tree proofs, which allow large datasets to be verified efficiently by checking a small root value rather than the full contents. It underpins trust in distributed systems, blockchains, and any pipeline where data passes through untrusted intermediaries.
- ### Relationships
	- subClassOf:: [[Data Integrity]]
	- uses:: [[Cryptographic Hash Function]]
	- requires:: [[Merkle Tree]]
