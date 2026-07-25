public:: true

# Cryptocurrency Token
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:17950b9394938d4b045fda193fdb0ace5bbea8c5898773d0f4949d774cdf8c57",
  "@type": "Page",
  "vc:slug": "cryptocurrency-token",
  "title": "Cryptocurrency Token",
  "vc:public": true,
  "vc:outboundWikilinks": [
    {
      "@id": "urn:visionflow:owl:class:blockchain",
      "vc:label": "Blockchain"
    }
  ],
  "vc:schemaVersion": 2,
  "vc:legacyProperties": [
    {
      "vc:key": "legacy-term-id",
      "vc:value": "BC-9005"
    },
    {
      "vc:key": "preferred-term",
      "vc:value": "Cryptocurrency Token"
    }
  ],
  "prov:wasAttributedTo": {
    "@id": "did:nostr:jjohare"
  },
  "prov:generatedAtTime": {
    "@value": "2026-05-18T07:12:05Z",
    "@type": "xsd:dateTime"
  }
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:cryptocurrency-token",
  "@type": "Class",
  "label": "Cryptocurrency Token",
  "definition": "A programmable digital asset implemented via smart contracts on a blockchain platform, categorised into utility tokens (access rights), security tokens (equity or debt instruments), governance tokens (protocol voting rights), and non-fungible tokens (NFTs, unique digital ownership). Token behaviour and interoperability are defined by standards such as ERC-20, ERC-721, and ERC-1155.",
  "domain": "blockchain",
  "maturity": "emerging",
  "qualityScore": 0.72,
  "subClassOf": [
    {
      "@id": "urn:ngm:class:bc-token-and-asset",
      "label": "Token and Asset"
    }
  ],
  "provenance": {
    "attributedTo": "did:nostr:lcr-swarm",
    "generatedAt": "2026-05-18T07:12:05Z",
    "inferenceRule": "R5DomainRootFallback"
  },
  "sameAs": [
    {
      "@id": "urn:ngm:class:digital-token",
      "label": "Digital Token"
    },
    {
      "@id": "urn:ngm:class:crypto-token",
      "label": "Crypto Token"
    }
  ],
  "relations": {
    "hasPart": [
      {
        "@id": "urn:ngm:class:fungible-token",
        "label": "Fungible Token"
      },
      {
        "@id": "urn:ngm:class:governance-token",
        "label": "Governance Token"
      },
      {
        "@id": "urn:ngm:class:utility-token",
        "label": "Utility Token"
      },
      {
        "@id": "urn:ngm:class:non-fungible-token",
        "label": "Non-Fungible Token"
      },
      {
        "@id": "urn:ngm:class:security-token",
        "label": "Security Token"
      },
      {
        "@id": "urn:ngm:class:wrapped-token",
        "label": "Wrapped Token"
      }
    ],
    "partOf": [
      {
        "@id": "urn:ngm:class:decentralized-finance",
        "label": "Decentralized Finance"
      },
      {
        "@id": "urn:ngm:class:token-economy",
        "label": "Token Economy"
      }
    ],
    "requires": [
      {
        "@id": "urn:ngm:class:smart-contract",
        "label": "Smart Contract"
      },
      {
        "@id": "urn:ngm:class:blockchain",
        "label": "Blockchain"
      },
      {
        "@id": "urn:ngm:class:cryptographic-key",
        "label": "Cryptographic Key"
      },
      {
        "@id": "urn:ngm:class:digital-wallet",
        "label": "Digital Wallet"
      }
    ],
    "enables": [
      {
        "@id": "urn:ngm:class:decentralized-autonomous-organization",
        "label": "Decentralized Autonomous Organization"
      },
      {
        "@id": "urn:ngm:class:liquidity-provision",
        "label": "Liquidity Provision"
      },
      {
        "@id": "urn:ngm:class:staking",
        "label": "Staking"
      }
    ],
    "dependsOn": [
      {
        "@id": "urn:ngm:class:consensus-mechanism",
        "label": "Consensus Mechanism"
      },
      {
        "@id": "urn:ngm:class:distributed-ledger",
        "label": "Distributed Ledger"
      }
    ],
    "implements": [
      {
        "@id": "urn:ngm:class:erc-1155",
        "label": "ERC-1155"
      }
    ],
    "uses": [
      {
        "@id": "urn:ngm:class:blockchain-oracle",
        "label": "Blockchain Oracle"
      },
      {
        "@id": "urn:ngm:class:automated-market-maker",
        "label": "Automated Market Maker"
      }
    ],
    "relatedTo": [
      {
        "@id": "urn:ngm:class:token-economics",
        "label": "Token Economics"
      },
      {
        "@id": "urn:ngm:class:initial-coin-offering",
        "label": "Initial Coin Offering"
      },
      {
        "@id": "urn:ngm:class:airdrop",
        "label": "Airdrop"
      }
    ],
    "standardizedBy": [
      {
        "@id": "urn:ngm:class:token-standard",
        "label": "Token Standard"
      },
      {
        "@id": "urn:ngm:class:erc-20",
        "label": "ERC-20"
      },
      {
        "@id": "urn:ngm:class:erc-721",
        "label": "ERC-721"
      }
    ],
    "contrastsWith": [
      {
        "@id": "urn:ngm:class:cryptocurrency",
        "label": "Cryptocurrency"
      },
      {
        "@id": "urn:ngm:class:central-bank-digital-currency",
        "label": "Central Bank Digital Currency"
      }
    ],
    "bridgesTo": [
      {
        "@id": "urn:ngm:class:digital-identity",
        "label": "Digital Identity"
      },
      {
        "@id": "urn:ngm:class:supply-chain",
        "label": "Supply Chain"
      },
      {
        "@id": "urn:ngm:class:finance",
        "label": "Finance"
      }
    ]
  }
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:annotation:link-resolutions:cryptocurrency-token:776c802a9fc9",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:17950b9394938d4b045fda193fdb0ace5bbea8c5898773d0f4949d774cdf8c57"
  },
  "vc:resolutions": [
    {
      "raw": "[[Blockchain]]",
      "resolved": "urn:visionflow:owl:class:blockchain",
      "kind": "ResolvedLink"
    }
  ],
  "prov:wasAttributedTo": {
    "@id": "did:nostr:lcr-swarm"
  },
  "prov:generatedAtTime": {
    "@value": "2026-05-18T07:12:05Z",
    "@type": "xsd:dateTime"
  }
}
```


- ### Definition
  - CryptocurrencyToken is a concept within the ngm domain.

- ### Semantic Classification
  - owl-class:: blockchain/CryptocurrencyToken
  - owl-role:: Concept

- ### Relationships
  - Requires [[Smart Contract]]
  - Requires [[Blockchain]]
  - Standardized By [[Token Standard]]
  - Standardized By [[ERC-20]]
  - Standardized By [[ERC-721]]
  - Has Part [[Fungible Token]]
  - Has Part [[Governance Token]]
  - Has Part [[Utility Token]]
  - Related To [[Token Economics]]
- ### Content

  ## Definition

  Cryptocurrency Token represents a programmable digital asset implemented through smart contracts on blockchain platforms, categorized into utility tokens providing access rights to network services, security tokens representing equity or debt instruments subject to regulatory frameworks, governance tokens enabling decentralized protocol management through voting mechanisms, and non-fungible tokens (NFTs) establishing provably scarce digital ownership of unique items. Token standards define interoperability specifications: Ethereum's ERC-20 establishes fungible token interfaces with transfer, approval, and allowance functions; ERC-721 defines non-fungible tokens with unique identifiers and metadata URIs; ERC-1155 enables multi-token contracts supporting both fungible and non-fungible assets with batch operations. Advanced token mechanics include rebasing tokens adjusting supply algorithmically to maintain price stability, liquidity provider (LP) tokens representing automated market maker pool shares with fee accrual, wrapped tokens bridging assets across blockchain networks (WBTC, stETH), and synthetic tokens tracking external asset prices through oracle-fed collateralization. Token economics (tokenomics) encompasses supply schedules with controlled inflation or deflation mechanisms, distribution models including initial coin offerings (ICOs), airdrops, and liquidity mining, and utility design integrating staking rewards, fee discounts, and protocol access permissions. In 2026, programmable NFTs incorporate dynamic metadata responding to external events, soul-bound tokens establish non-transferable identity credentials, and cross-chain token standards enable seamless asset portability across heterogeneous blockchain ecosystems through trustless bridge protocols and atomic swap mechanisms.

  #### References
  - Ethereum Foundation. (2024). "Token Standards Documentation: ERC-20, ERC-721, ERC-1155." https://ethereum.org/en/developers/docs/standards/tokens/
  - OpenZeppelin. (2024). "Secure Token Implementation Patterns." https://docs.openzeppelin.com/contracts/
  - Buterin, V. (2022). "Soulbound Tokens." https://vitalik.ca/general/2022/01/26/soulbound.html
  - Wright, A. & De Filippi, P. (2015). "Decentralized Blockchain Technology and the Rise of Lex Cryptographia." SSRN Electronic Journal.
  - Uniswap Labs. (2024). "Liquidity Provider Token Economics." https://docs.uniswap.org/
  - Token Engineering Community. (2024). "Token Design Patterns and Economic Security." https://tokenengineeringcommunity.github.io/

- ### Provenance
  - sources::
  - migration-date:: 2026-04-26T00:00:00Z
