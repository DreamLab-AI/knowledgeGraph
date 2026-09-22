public:: true

# ERC-4337 Account Abstraction
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:8202de10fdc190c2c7e7208b74b9852104dde1e6aed8db11e4548fbd5cf65523",
  "@type": "Page",
  "vc:slug": "erc-4337-account-abstraction",
  "title": "ERC-4337 Account Abstraction",
  "vc:public": true,
  "vc:outboundWikilinks": [
    {
      "@id": "urn:visionflow:linked:ethereum",
      "vc:label": "Ethereum"
    },
    {
      "@id": "urn:visionflow:linked:technical-standard",
      "vc:label": "Technical Standard"
    }
  ],
  "vc:schemaVersion": 2,
  "vc:legacyProperties": [
    {
      "vc:key": "preferred-term",
      "vc:value": "ERC-4337 Account Abstraction"
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
  "@id": "urn:ngm:class:erc-4337-account-abstraction",
  "@type": "Class",
  "label": "ERC-4337 Account Abstraction",
  "definition": "An Ethereum standard defining account abstraction using a higher-layer pseudo-transaction object called a UserOperation, without changes to the core protocol. It enables smart contract wallets with custom validation logic.",
  "domain": "standards",
  "maturity": "established",
  "qualityScore": 0.7,
  "subClassOf": [
    {
      "@id": "urn:ngm:class:technical-standard",
      "label": "Technical Standard"
    }
  ],
  "relations": {
    "requires": [
      {
        "@id": "urn:ngm:class:ethereum-smart-contract-platform",
        "label": "Ethereum Smart Contract Platform"
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
  "@id": "urn:visionflow:annotation:link-resolutions:erc-4337-account-abstraction:79a7c2d2d013",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:8202de10fdc190c2c7e7208b74b9852104dde1e6aed8db11e4548fbd5cf65523"
  },
  "vc:resolutions": [
    {
      "raw": "[[Ethereum Smart Contract Platform]]",
      "resolved": "urn:visionflow:linked:ethereum",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Technical Standard]]",
      "resolved": "urn:visionflow:linked:technical-standard",
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
  - An Ethereum standard defining account abstraction using a higher-layer pseudo-transaction object called a UserOperation, without changes to the core protocol. It enables smart contract wallets with custom validation logic.

- ### Semantic Classification
  - owl-class:: standards:ERC4337AccountAbstraction
  - owl-role:: Standard

- ### Relationships
  - is-subclass-of:: [[Technical Standard]]
  - requires:: [[Ethereum Smart Contract Platform]]

- ### Content
  - An Ethereum standard defining account abstraction using a higher-layer pseudo-transaction object called a UserOperation, without changes to the core protocol. It enables smart contract wallets with custom validation logic.
  - Topic area: account abstraction.

- ### Provenance
  - sources::
  - migration-date:: 2026-05-29T00:00:00Z
