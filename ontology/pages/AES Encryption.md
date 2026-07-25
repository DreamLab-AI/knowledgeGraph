public:: true

# AES Encryption

```json-ld
{ "@context":"https://narrativegoldmine.com/ns/v1", "@id":"urn:visionflow:page:aes-encryption", "@type":"Page", "title":"AES Encryption", "vc:slug":"aes-encryption", "vc:public":true, "vc:schemaVersion":2, "vc:outboundWikilinks":[] }
```

```json-ld
{
  "@context":"https://narrativegoldmine.com/ns/v2.jsonld",
  "@id":"urn:ngm:class:aes-encryption",
  "@type":"Class",
  "label":"AES Encryption",
  "definition":"AES encryption is the Advanced Encryption Standard, a symmetric block cipher adopted as a US federal standard that operates on fixed-size blocks using a shared secret key for both encryption and decryption. It is the most widely deployed symmetric cipher, used by hardware security features such as Intel SGX for memory encryption and by low-power wireless protocols such as Zigbee for link-layer security. It supports 128, 192 and 256-bit key lengths, with 128-bit remaining secure against all known practical attacks.",
  "domain":"security",
  "maturity":"draft",
  "subClassOf":[{"@id":"urn:ngm:class:symmetric-encryption","label":"Symmetric Encryption"}],
  "relations":{
  },
  "sameAs":[],
  "quality":0.5,
  "provenance":{"attributedTo":"did:nostr:ontology-mesh","generatedAt":"2026-07-25T00:00:00Z","inferenceRule":"GapMaterialisation"}
}
```

- ### Definition
	- [[AES Encryption]] AES encryption is the Advanced Encryption Standard, a symmetric block cipher adopted as a US federal standard that operates on fixed-size blocks using a shared secret key for both encryption and decryption. It is the most widely deployed symmetric cipher, used by hardware security features such as Intel SGX for memory encryption and by low-power wireless protocols such as Zigbee for link-layer security. It supports 128, 192 and 256-bit key lengths, with 128-bit remaining secure against all known practical attacks.
- ### Relationships
	- subClassOf:: [[Symmetric Encryption]]
- ### Provenance
	- updated:: 2026-07-25
	- attributedTo:: did:nostr:ontology-mesh
	- inferenceRule:: GapMaterialisation
