public:: true

# Rainbow Wallet
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:812bc1e9539a1c4f0f80a207c57afe2a2a32253195792af45cef83872300a4df",
  "@type": "Page",
  "vc:slug": "rainbow-wallet",
  "title": "Rainbow Wallet",
  "vc:public": true,
  "vc:outboundWikilinks": [
    {
      "@id": "urn:visionflow:linked:private-key",
      "vc:label": "Private Key"
    },
    {
      "@id": "urn:visionflow:linked:self-custody",
      "vc:label": "Self-Custody"
    },
    {
      "@id": "urn:visionflow:linked:non-fungible-token",
      "vc:label": "Non-Fungible Token"
    },
    {
      "@id": "urn:visionflow:linked:wallet",
      "vc:label": "Wallet"
    },
    {
      "@id": "urn:visionflow:linked:ethereum",
      "vc:label": "Ethereum"
    },
    {
      "@id": "urn:visionflow:linked:digital-wallet",
      "vc:label": "Digital Wallet"
    },
    {
      "@id": "urn:visionflow:linked:https-rainbow-me",
      "vc:label": "https://rainbow.me/"
    }
  ],
  "vc:schemaVersion": 2,
  "vc:legacyProperties": [
    {
      "vc:key": "preferred-term",
      "vc:value": "Rainbow Wallet"
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
  "@id": "urn:ngm:class:rainbow-wallet",
  "@type": "Class",
  "label": "Rainbow Wallet",
  "definition": "A self-custodial Ethereum wallet application focused on a consumer-friendly interface for holding tokens and interacting with decentralised applications. The user controls the private keys directly rather than entrusting them to a custodian.",
  "domain": "blockchain",
  "maturity": "established",
  "qualityScore": 0.7,
  "subClassOf": [
    {
      "@id": "urn:ngm:class:digital-wallet",
      "label": "Digital Wallet"
    }
  ],
  "relations": {
    "requires": [
      {
        "@id": "urn:ngm:class:private-key",
        "label": "Private Key"
      },
      {
        "@id": "urn:ngm:class:self-custody",
        "label": "Self-Custody"
      }
    ],
    "enables": [
      {
        "@id": "urn:ngm:class:non-fungible-token",
        "label": "Non-Fungible Token"
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
  "@id": "urn:visionflow:annotation:link-resolutions:rainbow-wallet:5ce5da452ca5",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:812bc1e9539a1c4f0f80a207c57afe2a2a32253195792af45cef83872300a4df"
  },
  "vc:resolutions": [
    {
      "raw": "[[Private Key]]",
      "resolved": "urn:visionflow:linked:private-key",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Self-Custody]]",
      "resolved": "urn:visionflow:linked:self-custody",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Non-Fungible Token]]",
      "resolved": "urn:visionflow:linked:non-fungible-token",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Wallet]]",
      "resolved": "urn:visionflow:linked:wallet",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Ethereum Smart Contract Platform]]",
      "resolved": "urn:visionflow:linked:ethereum",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Digital Wallet]]",
      "resolved": "urn:visionflow:linked:digital-wallet",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[https://rainbow.me/]]",
      "resolved": "urn:visionflow:linked:https-rainbow-me",
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
  - A self-custodial Ethereum wallet application focused on a consumer-friendly interface for holding tokens and interacting with decentralised applications. The user controls the private keys directly rather than entrusting them to a custodian.

- ### Semantic Classification
  - owl-class:: blockchain:RainbowWallet
  - owl-role:: NamedIndividual

- ### Relationships
  - is-subclass-of:: [[Digital Wallet]]
  - bridges-to:: [[Wallet]], [[Ethereum Smart Contract Platform]]
  - requires:: [[Private Key]], [[Self-Custody]]
  - enables:: [[Non-Fungible Token]]

- ### Content
  - Rainbow is a self-custodial wallet for the Ethereum ecosystem, offering account management, token and collectible display and connection to decentralised applications. Keys are held on the user's device, so the user is responsible for backup and recovery.
  - Its design emphasises an approachable interface intended to lower the barrier for new users while preserving direct ownership of assets. It supports Ethereum and several compatible networks for transfers and application interaction.

- ### Provenance
  - sources:: [[https://rainbow.me/]]
  - migration-date:: 2026-05-29T00:00:00Z
