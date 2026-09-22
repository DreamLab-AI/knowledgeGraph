public:: true

# ECDSA Cryptography
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:ecdsa-cryptography",
  "@type": "Page",
  "vc:slug": "ecdsa-cryptography",
  "title": "ECDSA Cryptography",
  "vc:public": true,
  "vc:outboundWikilinks": [],
  "vc:schemaVersion": 2
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:ecdsa-cryptography",
  "@type": "Class",
  "label": "ECDSA Cryptography",
  "definition": "ECDSA (Elliptic Curve Digital Signature Algorithm) is a public-key signature scheme that uses the algebra of elliptic curves over finite fields to produce compact, efficient digital signatures. It provides strong security with much smaller keys than RSA, making it the dominant signing algorithm in blockchains such as Bitcoin and Ethereum. ECDSA enables verifiable authorship and integrity of messages and transactions without revealing the private key.",
  "domain": "blockchain",
  "maturity": "established",
  "subClassOf": [{"@id": "urn:ngm:class:cryptographic-primitive", "label": "Cryptographic Primitive"}],
  "relations": {
    "relatedTo": [{"@id": "urn:ngm:class:snapshot-voting", "label": "Snapshot Voting"}]
  },
  "quality": 0.72
}
```

- ### Definition
  - ECDSA Cryptography is the Elliptic Curve Digital Signature Algorithm, a public-key scheme producing compact signatures from elliptic-curve mathematics. It underpins transaction and message signing in blockchains and off-chain mechanisms such as [[Snapshot Voting]].
- ### Content
  - ECDSA achieves equivalent security to RSA at far smaller key sizes, lowering storage and bandwidth costs. In governance systems like gasless snapshot voting, ECDSA signatures let token holders prove authorship of votes cryptographically without an on-chain transaction.
