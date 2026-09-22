public:: true

# Merkle-Damgard Construction

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v1",
  "@id": "urn:visionflow:page:merkle-damgard-construction",
  "@type": "Page",
  "title": "Merkle-Damgard Construction",
  "vc:slug": "merkle-damgard-construction",
  "vc:public": true,
  "vc:schemaVersion": 2,
  "vc:outboundWikilinks": []
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:merkle-damgard-construction",
  "@type": "Class",
  "label": "Merkle-Damgard Construction",
  "definition": "The Merkle-Damgard construction is a method for building a collision-resistant cryptographic hash function of arbitrary input length from a fixed-size, collision-resistant compression function, by padding the message and processing it in sequential blocks that chain into one another. SHA-256 and most other widely used hash functions of the SHA-1 and SHA-2 families are built on this construction. It is known to be vulnerable to length-extension attacks unless the hash output is further truncated or otherwise protected.",
  "domain": "security",
  "maturity": "draft",
  "subClassOf": [
    {
      "@id": "urn:ngm:class:cryptographic-hash",
      "label": "Cryptographic Hash"
    }
  ],
  "relations": {},
  "sameAs": [],
  "quality": 0.5,
  "provenance": {
    "attributedTo": "did:nostr:ontology-mesh",
    "generatedAt": "2026-07-25T00:00:00Z",
    "inferenceRule": "GapMaterialisation"
  }
}
```

- ### Definition
	- The Merkle-Damgard construction is a method for building a collision-resistant cryptographic hash function of arbitrary input length from a fixed-size, collision-resistant compression function, by padding the message and processing it in sequential blocks that chain into one another. SHA-256 and most other widely used hash functions of the SHA-1 and SHA-2 families are built on this construction. It is known to be vulnerable to length-extension attacks unless the hash output is further truncated or otherwise protected.
	- It is a [[Cryptographic Hash]] concept.
- ### Relationships
	- subClassOf:: [[Cryptographic Hash]]
- ### Provenance
	- updated:: 2026-07-25
	- attributedTo:: did:nostr:ontology-mesh
	- inferenceRule:: GapMaterialisation
