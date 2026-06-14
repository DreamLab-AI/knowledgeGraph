public:: true

# Zcash
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:9958d600c435a3dac02be53d485dde51fad9cda39d08fa86509209766fed7502",
  "@type": "Page",
  "vc:slug": "zcash",
  "title": "Zcash",
  "vc:public": true,
  "vc:outboundWikilinks": [
    {
      "@id": "urn:visionflow:linked:zero-knowledge-proof",
      "vc:label": "Zero Knowledge Proof"
    },
    {
      "@id": "urn:visionflow:linked:proof-of-work",
      "vc:label": "Proof of Work"
    },
    {
      "@id": "urn:visionflow:linked:monero",
      "vc:label": "Monero"
    },
    {
      "@id": "urn:visionflow:linked:zk-sync",
      "vc:label": "zkSync"
    },
    {
      "@id": "urn:visionflow:linked:blockchain-domain",
      "vc:label": "Blockchain Domain"
    },
    {
      "@id": "urn:visionflow:linked:ben-sasson-et-al-2014-zerocash-decentralized-anonymous-payments-from-bitcoin",
      "vc:label": "Ben-Sasson et al. 2014, Zerocash: Decentralized Anonymous Payments from Bitcoin"
    }
  ],
  "vc:schemaVersion": 2,
  "vc:legacyProperties": [
    {
      "vc:key": "preferred-term",
      "vc:value": "Zcash"
    }
  ],
  "prov:wasAttributedTo": {
    "@id": "did:nostr:jjohare"
  },
  "prov:generatedAtTime": {
    "@value": "2026-05-29T00:00:00Z",
    "@type": "xsd:dateTime"
  }
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:zcash",
  "@type": "Class",
  "label": "Zcash",
  "definition": "Zcash is a privacy-oriented cryptocurrency launched in 2016 that uses zero-knowledge proofs to allow transactions to be verified without revealing the sender, recipient or amount. It was the first widespread deployment of zk-SNARKs, succinct non-interactive arguments of knowledge, in a public blockchain. Zcash supports both transparent addresses, similar to Bitcoin, and shielded addresses that conceal transaction details, giving users a choice of privacy level. The protocol derives from the Zerocash academic proposal and is developed by the Electric Coin Company.",
  "domain": "blockchain",
  "maturity": "established",
  "qualityScore": 0.7,
  "subClassOf": [
    {
      "@id": "urn:ngm:class:blockchain-domain",
      "label": "Blockchain Domain"
    }
  ],
  "relations": {
    "requires": [
      {
        "@id": "urn:ngm:class:zero-knowledge-proof",
        "label": "Zero Knowledge Proof"
      },
      {
        "@id": "urn:ngm:class:proof-of-work",
        "label": "Proof of Work"
      }
    ]
  },
  "quality": 0.6,
  "provenance": {
    "attributedTo": "did:nostr:lcr-swarm",
    "generatedAt": "2026-05-29T00:00:00Z",
    "inferenceRule": "GapFillTier5"
  }
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:annotation:link-resolutions:zcash:fee58d27c3e6",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:9958d600c435a3dac02be53d485dde51fad9cda39d08fa86509209766fed7502"
  },
  "vc:resolutions": [
    {
      "raw": "[[Zero Knowledge Proof]]",
      "resolved": "urn:visionflow:linked:zero-knowledge-proof",
      "kind": "StubLink"
    },
    {
      "raw": "[[Proof of Work]]",
      "resolved": "urn:visionflow:linked:proof-of-work",
      "kind": "StubLink"
    },
    {
      "raw": "[[Monero]]",
      "resolved": "urn:visionflow:linked:monero",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[zkSync]]",
      "resolved": "urn:visionflow:linked:zk-sync",
      "kind": "StubLink"
    },
    {
      "raw": "[[Blockchain Domain]]",
      "resolved": "urn:visionflow:linked:blockchain-domain",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Ben-Sasson et al. 2014, Zerocash: Decentralized Anonymous Payments from Bitcoin]]",
      "resolved": "urn:visionflow:linked:ben-sasson-et-al-2014-zerocash-decentralized-anonymous-payments-from-bitcoin",
      "kind": "StubLink"
    }
  ],
  "prov:wasAttributedTo": {
    "@id": "did:nostr:lcr-swarm"
  },
  "prov:generatedAtTime": {
    "@value": "2026-05-29T00:00:00Z",
    "@type": "xsd:dateTime"
  }
}
```


- ### Definition
  - Zcash is a privacy-oriented cryptocurrency launched in 2016 that uses zero-knowledge proofs to allow transactions to be verified without revealing the sender, recipient or amount. It was the first widespread deployment of zk-SNARKs, succinct non-interactive arguments of knowledge, in a public blockchain. Zcash supports both transparent addresses, similar to Bitcoin, and shielded addresses that conceal transaction details, giving users a choice of privacy level. The protocol derives from the Zerocash academic proposal and is developed by the Electric Coin Company.

- ### Semantic Classification
  - owl-class:: bc:Zcash
  - owl-role:: Concept

- ### Relationships
  - is-subclass-of:: [[Blockchain Domain]]
  - bridges-to:: [[Monero]], [[zkSync]]
  - requires:: [[Zero Knowledge Proof]], [[Proof of Work]]

- ### Content
  - Zcash applies zero-knowledge cryptography to payments, allowing a prover to demonstrate that a transaction is valid (inputs cover outputs, no double spending) without disclosing the values or parties involved. This was a notable step beyond mixing or decoy techniques because it provides cryptographic confidentiality rather than statistical obfuscation.
  - The system offers transparent transactions that behave like Bitcoin and shielded transactions that use the zk-SNARK machinery. Early versions required a trusted setup ceremony to generate public parameters, and successive upgrades such as Sapling and later Orchard improved performance and reduced or removed reliance on that setup.
  - Built on the Zerocash research from academics including those who founded the Electric Coin Company, Zcash is frequently cited as a practical demonstration of zero-knowledge proofs at scale. Its design has influenced privacy and scaling work across the wider blockchain field, including zk-rollups.

- ### Provenance
  - sources:: [[Ben-Sasson et al. 2014, Zerocash: Decentralized Anonymous Payments from Bitcoin]]
  - migration-date:: 2026-05-29T00:00:00Z
