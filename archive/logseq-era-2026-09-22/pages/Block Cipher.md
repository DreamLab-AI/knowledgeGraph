public:: true

# Block Cipher

```json-ld
{ "@context":"https://narrativegoldmine.com/ns/v1", "@id":"urn:visionflow:page:block-cipher", "@type":"Page", "title":"Block Cipher", "vc:slug":"block-cipher", "vc:public":true, "vc:schemaVersion":2, "vc:outboundWikilinks":[] }
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:block-cipher",
  "@type": "Class",
  "label": "Block Cipher",
  "definition": "A block cipher is a deterministic symmetric-key encryption algorithm that transforms a fixed-size block of plaintext, such as 128 bits, into a ciphertext block of the same size under a shared secret key, with the same key correctly reversing the transformation. Algorithms such as AES operate this way, and block ciphers are combined with a mode of operation to encrypt messages longer than a single block. As a primitive, a block cipher underlies symmetric encryption schemes and is a common building block for constructing message authentication codes.",
  "domain": "security",
  "maturity": "emerging",
  "subClassOf": [
    {
      "@id": "urn:ngm:class:cryptography",
      "label": "Cryptography"
    }
  ],
  "relations": {
    "partOf": [
      {
        "@id": "urn:ngm:class:cryptography",
        "label": "Cryptography"
      }
    ],
    "enables": [
      {
        "@id": "urn:ngm:class:symmetric-encryption",
        "label": "Symmetric Encryption"
      }
    ]
  },
  "sameAs": [],
  "quality": 0.55,
  "provenance": {
    "attributedTo": "did:nostr:ontology-mesh",
    "generatedAt": "2026-07-25T00:00:00Z",
    "inferenceRule": "GapMaterialisation"
  }
}
```

- ### Definition
  - A block cipher is a deterministic symmetric-key encryption algorithm that transforms a fixed-size block of plaintext, such as 128 bits, into a ciphertext block of the same size under a shared secret key, with the same key correctly reversing the transformation. Algorithms such as AES operate this way, and block ciphers are combined with a mode of operation to encrypt messages longer than a single block. As a primitive, a block cipher underlies symmetric encryption schemes and is a common building block for constructing message authentication codes.
