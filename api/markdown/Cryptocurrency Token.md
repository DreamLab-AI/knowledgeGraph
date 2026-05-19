schema_version:: 1
legacy_iri:: https://visionclaw.dreamlab-ai.systems/ns/v2/blockchain#CryptocurrencyToken
legacy_uri:: urn:visionclaw:concept:blockchain:cryptocurrency-token
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
  "vc:schemaVersion": 1,
  "vc:legacyProperties": [
    {
      "vc:key": "authority-score",
      "vc:value": "0.70"
    },
    {
      "vc:key": "content-hash",
      "vc:value": "sha256-12-7ebbedc792df"
    },
    {
      "vc:key": "context",
      "vc:value": "https://visionclaw.dreamlab-ai.systems/ns/v2"
    },
    {
      "vc:key": "created",
      "vc:value": "2026-04-26T00:00:00Z"
    },
    {
      "vc:key": "domain",
      "vc:value": "blockchain"
    },
    {
      "vc:key": "iri",
      "vc:value": "https://visionclaw.dreamlab-ai.systems/ns/v2/blockchain#CryptocurrencyToken"
    },
    {
      "vc:key": "legacy-term-id",
      "vc:value": "BC-9005"
    },
    {
      "vc:key": "maturity",
      "vc:value": "draft"
    },
    {
      "vc:key": "modified",
      "vc:value": "2026-04-26T00:00:00Z"
    },
    {
      "vc:key": "preferred-term",
      "vc:value": "Cryptocurrency Token"
    },
    {
      "vc:key": "public",
      "vc:value": "true"
    },
    {
      "vc:key": "quality-score",
      "vc:value": "0.50"
    },
    {
      "vc:key": "rdf-type",
      "vc:value": "owl:Class"
    },
    {
      "vc:key": "same-as",
      "vc:value": "urn:visionclaw:concept:blockchain:cryptocurrency-token"
    },
    {
      "vc:key": "status",
      "vc:value": "draft"
    },
    {
      "vc:key": "type",
      "vc:value": "owl:Class"
    },
    {
      "vc:key": "uri",
      "vc:value": "urn:visionclaw:concept:blockchain:cryptocurrency-token"
    },
    {
      "vc:key": "version",
      "vc:value": "2.1.0"
    }
  ],
  "prov:wasAttributedTo": {
    "@id": "did:nostr:jjohare"
  },
  "prov:wasDerivedFrom": {
    "@id": "urn:visionflow:page:17950b9394938d4b045fda193fdb0ace5bbea8c5898773d0f4949d774cdf8c57@776c802a9fc9058c7e99ea02bf84643a0b6cd2be"
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
  "definition": "Cryptocurrency Token is a blockchain and distributed systems concept and a type of blockchain.",
  "domain": "blockchain",
  "maturity": "draft",
  "subClassOf": [
    {
      "@id": "urn:ngm:class:blockchain",
      "label": "blockchain"
    }
  ],
  "quality": 0.5,
  "provenance": {
    "attributedTo": "did:nostr:lcr-swarm",
    "generatedAt": "2026-05-18T07:12:05Z",
    "inferenceRule": "R5DomainRootFallback"
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
  "prov:wasDerivedFrom": {
    "@id": "urn:visionflow:page:17950b9394938d4b045fda193fdb0ace5bbea8c5898773d0f4949d774cdf8c57@776c802a9fc9058c7e99ea02bf84643a0b6cd2be"
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
  - <!-- No relationships defined -->

  - bridges-to:: [[Blockchain]] (bc)
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
