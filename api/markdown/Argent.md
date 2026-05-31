public:: true

# Argent
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:7b31c45d8bc43822eabf45c09b7fe57e5e582175ea819cc53076cc7cfae4ff15",
  "@type": "Page",
  "vc:slug": "argent",
  "title": "Argent",
  "vc:public": true,
  "vc:outboundWikilinks": [
    {
      "@id": "urn:visionflow:linked:account-abstraction",
      "vc:label": "Account Abstraction"
    },
    {
      "@id": "urn:visionflow:linked:smart-contracts",
      "vc:label": "Smart Contracts"
    },
    {
      "@id": "urn:visionflow:linked:ethereum",
      "vc:label": "Ethereum"
    },
    {
      "@id": "urn:visionflow:linked:wallet",
      "vc:label": "Wallet"
    }
  ],
  "vc:schemaVersion": 2,
  "vc:legacyProperties": [
    {
      "vc:key": "preferred-term",
      "vc:value": "Argent"
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
  "@id": "urn:ngm:class:argent",
  "@type": "Class",
  "label": "Argent",
  "definition": "A smart contract wallet for Ethereum and Layer 2 networks that uses account abstraction to provide features such as social recovery, spending limits and gasless transactions.",
  "domain": "blockchain",
  "maturity": "established",
  "qualityScore": 0.7,
  "subClassOf": [
    {
      "@id": "urn:ngm:class:wallet",
      "label": "Wallet"
    }
  ],
  "relations": {
    "requires": [
      {
        "@id": "urn:ngm:class:account-abstraction",
        "label": "Account Abstraction"
      },
      {
        "@id": "urn:ngm:class:smart-contracts",
        "label": "Smart Contracts"
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
  "@id": "urn:visionflow:annotation:link-resolutions:argent:9fdf7113129f",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:7b31c45d8bc43822eabf45c09b7fe57e5e582175ea819cc53076cc7cfae4ff15"
  },
  "vc:resolutions": [
    {
      "raw": "[[Account Abstraction]]",
      "resolved": "urn:visionflow:linked:account-abstraction",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Smart Contracts]]",
      "resolved": "urn:visionflow:linked:smart-contracts",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Ethereum]]",
      "resolved": "urn:visionflow:linked:ethereum",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Wallet]]",
      "resolved": "urn:visionflow:linked:wallet",
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
  - A smart contract wallet for Ethereum and Layer 2 networks that uses account abstraction to provide features such as social recovery, spending limits and gasless transactions.

- ### Semantic Classification
  - owl-class:: blockchain:Argent
  - owl-role:: Class

- ### Relationships
  - is-subclass-of:: [[Wallet]]
  - bridges-to:: [[Ethereum]], [[Wallet]]
  - requires:: [[Account Abstraction]], [[Smart Contracts]]

- ### Content
  - Argent is a self-custodial wallet built on smart contracts rather than a single private key. Using account abstraction, it offers features such as social recovery through trusted guardians, configurable spending limits and the ability to sponsor or batch transactions.
  - By moving account logic into a contract, Argent improves usability and security relative to traditional externally owned accounts, and supports Ethereum together with Layer 2 networks where lower fees make such features practical for everyday use.

- ### Provenance
  - sources::
  - migration-date:: 2026-05-29T00:00:00Z
