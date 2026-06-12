public:: true

# Tornado Cash
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:9dd1a8c44218448992e56c635f3fd071edd46c3167f356e9c6212fd3fa516f02",
  "@type": "Page",
  "vc:slug": "tornado-cash",
  "title": "Tornado Cash",
  "vc:public": true,
  "vc:outboundWikilinks": [
    {
      "@id": "urn:visionflow:linked:zero-knowledge-proof",
      "vc:label": "Zero-Knowledge Proof"
    },
    {
      "@id": "urn:visionflow:linked:ethereum",
      "vc:label": "Ethereum"
    },
    {
      "@id": "urn:visionflow:linked:transaction-privacy",
      "vc:label": "Transaction Privacy"
    },
    {
      "@id": "urn:visionflow:linked:zk-snark",
      "vc:label": "zk-SNARK"
    },
    {
      "@id": "urn:visionflow:linked:regulatory-domain",
      "vc:label": "Regulatory Domain"
    },
    {
      "@id": "urn:visionflow:linked:cryptographic-domain",
      "vc:label": "Cryptographic Domain"
    }
  ],
  "vc:schemaVersion": 2,
  "vc:legacyProperties": [
    {
      "vc:key": "preferred-term",
      "vc:value": "Tornado Cash"
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
  "@id": "urn:ngm:class:tornado-cash",
  "@type": "Class",
  "label": "Tornado Cash",
  "definition": "Tornado Cash is a set of non-custodial smart contracts on Ethereum and compatible networks that obscure the on-chain link between a deposit and a withdrawal. Users deposit a fixed denomination of a token into a pool and later withdraw the same amount to a different address, using a zero-knowledge proof to demonstrate ownership of a valid deposit without revealing which one. It became widely known both as a privacy tool and as the subject of sanctions by the United States Office of Foreign Assets Control in 2022.",
  "domain": "tornado-cash",
  "maturity": "established",
  "qualityScore": 0.7,
  "subClassOf": [
    {
      "@id": "urn:ngm:class:cryptographic-domain",
      "label": "Cryptographic Domain"
    }
  ],
  "relations": {
    "requires": [
      {
        "@id": "urn:ngm:class:zero-knowledge-proof",
        "label": "Zero-Knowledge Proof"
      },
      {
        "@id": "urn:ngm:class:ethereum-smart-contract-platform",
        "label": "Ethereum"
      }
    ],
    "enables": [
      {
        "@id": "urn:ngm:class:transaction-privacy",
        "label": "Transaction Privacy"
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
  "@id": "urn:visionflow:annotation:link-resolutions:tornado-cash:a1d369d95494",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:9dd1a8c44218448992e56c635f3fd071edd46c3167f356e9c6212fd3fa516f02"
  },
  "vc:resolutions": [
    {
      "raw": "[[Zero-Knowledge Proof]]",
      "resolved": "urn:visionflow:linked:zero-knowledge-proof",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Ethereum Smart Contract Platform]]",
      "resolved": "urn:visionflow:linked:ethereum",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Transaction Privacy]]",
      "resolved": "urn:visionflow:linked:transaction-privacy",
      "kind": "StubLink"
    },
    {
      "raw": "[[zk-SNARK]]",
      "resolved": "urn:visionflow:linked:zk-snark",
      "kind": "StubLink"
    },
    {
      "raw": "[[Regulatory Domain]]",
      "resolved": "urn:visionflow:linked:regulatory-domain",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Cryptographic Domain]]",
      "resolved": "urn:visionflow:linked:cryptographic-domain",
      "kind": "ResolvedLink"
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
  - Tornado Cash is a set of non-custodial smart contracts on Ethereum and compatible networks that obscure the on-chain link between a deposit and a withdrawal. Users deposit a fixed denomination of a token into a pool and later withdraw the same amount to a different address, using a zero-knowledge proof to demonstrate ownership of a valid deposit without revealing which one. It became widely known both as a privacy tool and as the subject of sanctions by the United States Office of Foreign Assets Control in 2022.

- ### Semantic Classification
  - owl-class:: crypto:TornadoCash
  - owl-role:: Concept

- ### Relationships
  - is-subclass-of:: [[Cryptographic Domain]]
  - bridges-to:: [[zk-SNARK]], [[Regulatory Domain]]
  - requires:: [[Zero-Knowledge Proof]], [[Ethereum Smart Contract Platform]]
  - enables:: [[Transaction Privacy]]

- ### Content
  - The protocol pools deposits of equal value so that, after a withdrawal, an observer cannot determine which deposit funded which withdrawal beyond the size of the anonymity set. Privacy strengthens as more users participate, because each withdrawal could correspond to any of the deposits in the pool.
  - Withdrawals rely on zero-knowledge proofs, specifically zk-SNARKs, which let a user prove that they hold a secret note corresponding to a prior deposit without disclosing the note itself. The contracts are immutable and non-custodial, meaning no operator holds user funds or can reverse transactions.
  - Tornado Cash has been central to legal and policy debates about privacy-preserving technology on public blockchains. Its sanctioning raised questions about the regulation of autonomous code and the liability of contributors, distinguishing the immutable protocol from the front-end and governance activity built around it.

- ### Provenance
  - sources::
  - migration-date:: 2026-05-29T00:00:00Z
