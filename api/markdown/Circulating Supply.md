public:: true

# Circulating Supply
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:a04d893c82db3b923aa7a468ce54a082a782bed6e46083cdf6dd8614bcbd1258",
  "@type": "Page",
  "vc:slug": "circulating-supply",
  "title": "Circulating Supply",
  "vc:public": true,
  "vc:outboundWikilinks": [
    {
      "@id": "urn:visionflow:linked:ieee-2418-1",
      "vc:label": "IEEE 2418.1"
    },
    {
      "@id": "urn:visionflow:linked:iso-iec-23257-2021",
      "vc:label": "ISO/IEC 23257:2021"
    },
    {
      "@id": "urn:visionflow:linked:nist-nistir",
      "vc:label": "NIST NISTIR"
    },
    {
      "@id": "urn:visionflow:owl:class:blockchain-entity",
      "vc:label": "Blockchain Entity"
    },
    {
      "@id": "urn:visionflow:owl:class:economic-layer",
      "vc:label": "EconomicLayer"
    },
    {
      "@id": "urn:visionflow:owl:class:economic-mechanism",
      "vc:label": "EconomicMechanism"
    },
    {
      "@id": "urn:visionflow:owl:class:token-economics-domain",
      "vc:label": "TokenEconomicsDomain"
    }
  ],
  "vc:schemaVersion": 2,
  "vc:legacyProperties": [
    {
      "vc:key": "legacy-term-id",
      "vc:value": "BC-0117"
    },
    {
      "vc:key": "preferred-term",
      "vc:value": "Circulating Supply"
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
  "@id": "urn:ngm:class:circulating-supply",
  "@type": "Class",
  "label": "Circulating Supply",
  "definition": "Circulating Supply is the quantity of a blockchain token that is publicly available and actively tradeable in the market at a given point in time—excluding tokens locked in smart contracts, held in treasury reserves, vested to team members, or burned. It serves as the operative supply figure for computing market capitalisation and price-to-earnings metrics, and changes continuously as new tokens are emitted via block rewards and locked tokens are released according to vesting schedules.",
  "domain": "blockchain",
  "maturity": "established",
  "qualityScore": 0.8,
  "subClassOf": [
    {
      "@id": "urn:ngm:class:bc-defi-and-economics",
      "label": "DeFi and Economics"
    },
    {
      "@id": "urn:ngm:class:blockchain-entity",
      "label": "Blockchain Entity"
    },
    {
      "@id": "urn:ngm:class:economic-mechanism",
      "label": "EconomicMechanism"
    }
  ],
  "relations": {
    "relatedTo": [
      {"@id": "urn:ngm:class:total-supply", "label": "Total Supply"},
      {"@id": "urn:ngm:class:fixed-supply-token", "label": "Fixed Supply Token"},
      {"@id": "urn:ngm:class:halving", "label": "Halving"},
      {"@id": "urn:ngm:class:tokenomics", "label": "Tokenomics"},
      {"@id": "urn:ngm:class:token-economics", "label": "Token Economics"},
      {"@id": "urn:ngm:class:market-capitalization", "label": "Market Capitalization"}
    ],
    "requires": [
      {"@id": "urn:ngm:class:emission-schedule", "label": "Emission Schedule"},
      {"@id": "urn:ngm:class:blockchain-protocol", "label": "Blockchain Protocol"}
    ],
    "enables": [
      {"@id": "urn:ngm:class:burning-mechanism", "label": "Burning Mechanism"},
      {"@id": "urn:ngm:class:blockchain-economics", "label": "Blockchain Economics"}
    ],
    "contrastsWith": [
      {"@id": "urn:ngm:class:inflationary-token", "label": "Inflationary Token"},
      {"@id": "urn:ngm:class:deflationary-token", "label": "Deflationary Token"}
    ]
  },
  "provenance": {
    "attributedTo": "did:nostr:jjohare",
    "generatedAt": "2026-05-18T07:12:05Z",
    "inferenceRule": "R1Explicit"
  }
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:annotation:link-resolutions:circulating-supply:776c802a9fc9",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:a04d893c82db3b923aa7a468ce54a082a782bed6e46083cdf6dd8614bcbd1258"
  },
  "vc:resolutions": [
    {
      "raw": "[[IEEE 2418.1]]",
      "resolved": "urn:visionflow:linked:ieee-2418-1",
      "kind": "StubLink"
    },
    {
      "raw": "[[ISO/IEC 23257:2021]]",
      "resolved": "urn:visionflow:linked:iso-iec-23257-2021",
      "kind": "StubLink"
    },
    {
      "raw": "[[NIST NISTIR]]",
      "resolved": "urn:visionflow:linked:nist-nistir",
      "kind": "StubLink"
    },
    {
      "raw": "[[Blockchain Entity]]",
      "resolved": "urn:visionflow:owl:class:blockchain-entity",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[EconomicLayer]]",
      "resolved": "urn:visionflow:owl:class:economic-layer",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[EconomicMechanism]]",
      "resolved": "urn:visionflow:owl:class:economic-mechanism",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[TokenEconomicsDomain]]",
      "resolved": "urn:visionflow:owl:class:token-economics-domain",
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
  Circulating Supply is the quantity of a blockchain token that is publicly available and actively tradeable in the market at a given point in time—excluding tokens locked in smart contracts, held in treasury reserves, vested to team members, or burned. It serves as the operative supply figure for computing market capitalisation and price-to-earnings metrics, and changes continuously as new tokens are emitted via block rewards and locked tokens are released according to vesting schedules.

- ### Semantic Classification
  - owl-class:: blockchain:CirculatingSupply
  - owl-role:: Object
  - owl-inferred:: blockchain:VirtualObject
  - belongs-to-domain:: [[TokenEconomicsDomain]]
  - implemented-in-layer:: [[EconomicLayer]]

- ### Relationships
  - relatedTo:: [[Total Supply]], [[Fixed Supply Token]], [[Halving]], [[Tokenomics]], [[Token Economics]], [[Market Capitalization]]
  - requires:: [[Emission Schedule]], [[Blockchain Protocol]]
  - enables:: [[Burning Mechanism]], [[Blockchain Economics]]
  - contrastsWith:: [[Inflationary Token]], [[Deflationary Token]]

- ### Content
  Circulating Supply represents the liquid, economically active portion of a token's total issuance. It is the figure used to compute market capitalisation (price × circulating supply) and is therefore the most influential supply metric watched by investors, analysts, and protocol governance participants. Circulating supply is not static: it increases as block rewards are minted and vesting schedules unlock previously locked allocations, and it can decrease if tokens are burned by smart contract mechanisms or sent to verifiably unspendable addresses.

  The distinction between circulating supply, total supply, and maximum supply is critical for accurate economic modelling. Total supply includes all minted tokens minus burned tokens but may include locked or unvested tokens that are not yet tradeable. Maximum supply is the hard cap that cannot be exceeded—it may equal total supply in a fully emitted fixed-supply token, or exceed it for tokens with future planned emissions. Data aggregators such as CoinMarketCap and CoinGecko publish circulating supply figures sourced from protocol APIs and team disclosures, but methodological differences mean these figures can vary between providers.

  Emission schedules define the rate at which new tokens enter circulating supply over time. In proof-of-work chains such as Bitcoin, the emission is governed by block rewards that halve at predetermined block heights, producing a predictable, decelerating supply curve. In proof-of-stake chains, emission is typically a percentage of staked supply per epoch, producing an inflationary supply that may be partially offset by transaction fee burning (as in Ethereum's EIP-1559). Understanding these schedules is essential for projecting future supply dilution and evaluating real yield for token holders.

  Monitoring circulating supply changes is a standard practice in DeFi risk management because sudden large unlocks from vesting contracts can create sell pressure and price dislocations. Protocol treasuries may manage circulating supply actively through buyback-and-burn programmes or liquidity mining incentives, positioning circulating supply as a governed economic lever rather than a purely mechanical output of the emission schedule.

- ### Provenance
  - sources:: [[ISO/IEC 23257:2021]], [[IEEE 2418.1]], [[NIST NISTIR]]
  - migration-date:: 2026-04-26T00:00:00Z
