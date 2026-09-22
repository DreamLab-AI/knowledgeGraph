public:: true

# Preimage

```json-ld
{ "@context":"https://narrativegoldmine.com/ns/v1", "@id":"urn:visionflow:page:preimage", "@type":"Page", "title":"Preimage", "vc:slug":"preimage", "vc:public":true, "vc:schemaVersion":2, "vc:outboundWikilinks":[] }
```

```json-ld
{"@context": "https://narrativegoldmine.com/ns/v2.jsonld", "@id": "urn:ngm:class:preimage", "@type": "Class", "label": "Preimage", "definition": "A preimage is an input value that, when passed through a cryptographic hash function, produces a specified output digest. Preimage resistance, the computational infeasibility of finding such an input given only the digest, is a core security property required of cryptographic hash functions. In protocols such as hash time-locked contracts, revealing the preimage of a previously published hash is used as cryptographic proof that a condition has been satisfied, enabling trustless conditional payments.", "domain": "blockchain", "maturity": "mature", "subClassOf": [{"@id": "urn:ngm:class:cryptographic-hash-function", "label": "Cryptographic Hash Function"}], "relations": {"requires": [{"@id": "urn:ngm:class:cryptographic-hash-function", "label": "Cryptographic Hash Function"}]}, "sameAs": [], "quality": 0.55, "provenance": {"attributedTo": "did:nostr:ontology-mesh", "generatedAt": "2026-07-25T00:00:00Z", "inferenceRule": "GapMaterialisation"}}
```

- ### Definition
	- A preimage is an input value that, when passed through a cryptographic hash function, produces a specified output digest. Preimage resistance, the computational infeasibility of finding such an input given only the digest, is a core security property required of cryptographic hash functions. In protocols such as hash time-locked contracts, revealing the preimage of a previously published hash is used as cryptographic proof that a condition has been satisfied, enabling trustless conditional payments.
- ### Relationships
	- subClassOf:: [[Cryptographic Hash Function]]
	- requires:: [[Cryptographic Hash Function]]
- ### Provenance
	- updated:: 2026-07-25
	- attributedTo:: did:nostr:ontology-mesh
	- inferenceRule:: GapMaterialisation
