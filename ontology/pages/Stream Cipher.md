public:: true

# Stream Cipher

```json-ld
{ "@context":"https://narrativegoldmine.com/ns/v1", "@id":"urn:visionflow:page:stream-cipher", "@type":"Page", "title":"Stream Cipher", "vc:slug":"stream-cipher", "vc:public":true, "vc:schemaVersion":2, "vc:outboundWikilinks":[] }
```

```json-ld
{
  "@context":"https://narrativegoldmine.com/ns/v2.jsonld",
  "@id":"urn:ngm:class:stream-cipher",
  "@type":"Class",
  "label":"Stream Cipher",
  "definition":"A stream cipher is a symmetric encryption technique that combines plaintext with a pseudorandom keystream, one bit or byte at a time, to produce ciphertext, in contrast to block ciphers which operate on fixed-size chunks. The security of a stream cipher depends critically on high-quality random number generation for keystream and nonce material, since keystream reuse catastrophically breaks confidentiality. Stream ciphers are favoured where low latency or resource-constrained encryption of continuous data streams is required.",
  "domain":"security",
  "maturity":"draft",
  "subClassOf":[{"@id":"urn:ngm:class:symmetric-encryption","label":"Symmetric Encryption"}],
  "relations":{
    "requires":[{"@id":"urn:ngm:class:random-number-generation","label":"Random Number Generation"}]
  },
  "sameAs":[],
  "quality":0.5,
  "provenance":{"attributedTo":"did:nostr:ontology-mesh","generatedAt":"2026-07-25T00:00:00Z","inferenceRule":"GapMaterialisation"}
}
```

- ### Definition
	- [[Stream Cipher]] A stream cipher is a symmetric encryption technique that combines plaintext with a pseudorandom keystream, one bit or byte at a time, to produce ciphertext, in contrast to block ciphers which operate on fixed-size chunks. The security of a stream cipher depends critically on high-quality random number generation for keystream and nonce material, since keystream reuse catastrophically breaks confidentiality. Stream ciphers are favoured where low latency or resource-constrained encryption of continuous data streams is required.
- ### Relationships
	- subClassOf:: [[Symmetric Encryption]]
	- requires:: [[Random Number Generation]]
- ### Provenance
	- updated:: 2026-07-25
	- attributedTo:: did:nostr:ontology-mesh
	- inferenceRule:: GapMaterialisation
