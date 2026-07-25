public:: true

# Total Supply
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:b9e83ae5c69756956fe3d92801be0de151475636f906e25d0d1f8e0cb0d5232f",
  "@type": "Page",
  "vc:slug": "total-supply",
  "title": "Total Supply",
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
      "@id": "urn:visionflow:owl:class:token-economics",
      "vc:label": "TokenEconomicsDomain"
    }
  ],
  "vc:schemaVersion": 2,
  "vc:legacyProperties": [
    {
      "vc:key": "legacy-term-id",
      "vc:value": "BC-0116"
    },
    {
      "vc:key": "preferred-term",
      "vc:value": "Total Supply"
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
  "@id": "urn:ngm:class:total-supply",
  "@type": "Class",
  "label": "Total Supply",
  "definition": "Total Supply is the count of all tokens that have ever been created on a blockchain network, encompassing circulating tokens, locked or vested tokens, tokens held in treasury reserves, and any tokens that have been minted but not yet distributed—but excluding permanently destroyed (burned) tokens. It differs from the maximum supply (the hard cap set by the protocol) and from circulating supply (tokens freely tradeable on secondary markets). Total supply is a fundamental parameter in tokenomics analysis used to assess inflation, dilution, and long-term value dynamics.",
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
      "label": "Economic Mechanism"
    }
  ],
  "relations": {
    "hasPart": [
      {"@id": "urn:ngm:class:circulating-supply", "label": "Circulating Supply"}
    ],
    "requires": [
      {"@id": "urn:ngm:class:emission-schedule", "label": "Emission Schedule"},
      {"@id": "urn:ngm:class:supply-cap", "label": "Supply Cap"}
    ],
    "relatedTo": [
      {"@id": "urn:ngm:class:market-capitalization", "label": "Market Capitalization"},
      {"@id": "urn:ngm:class:deflationary-token", "label": "Deflationary Token"},
      {"@id": "urn:ngm:class:inflationary-token", "label": "Inflationary Token"},
      {"@id": "urn:ngm:class:tokenomics", "label": "Tokenomics"},
      {"@id": "urn:ngm:class:inflation", "label": "Inflation"},
      {"@id": "urn:ngm:class:halving", "label": "Halving"},
      {"@id": "urn:ngm:class:treasury-management", "label": "Treasury Management"}
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
  "@id": "urn:visionflow:annotation:link-resolutions:total-supply:776c802a9fc9",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:b9e83ae5c69756956fe3d92801be0de151475636f906e25d0d1f8e0cb0d5232f"
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
      "resolved": "urn:visionflow:owl:class:token-economics",
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


### Definition

Total Supply is the count of all tokens that have ever been created on a blockchain network, encompassing circulating tokens, locked or vested tokens, tokens held in treasury reserves, and any tokens that have been minted but not yet distributed—but excluding permanently destroyed (burned) tokens. It differs from the maximum supply (the hard cap set by the protocol) and from circulating supply (tokens freely tradeable on secondary markets). Total supply is a fundamental parameter in tokenomics analysis used to assess inflation, dilution, and long-term value dynamics.

### Relationships

Total Supply **hasPart** [[Circulating Supply]] as its freely tradeable subset. It **requires** a defined [[Emission Schedule]] (the issuance timeline) and a [[Supply Cap]] (the maximum possible supply, whether finite or infinite). It is **relatedTo** [[Market Capitalization]] (fully diluted market cap = total supply × price), [[Deflationary Token]] and [[Inflationary Token]] (competing supply trajectory models), [[Tokenomics]] (the broader economic design of which supply is one parameter), [[Inflation]] (the rate of supply growth), [[Halving]] (supply-reducing event in disinflationary schedules), and [[Treasury Management]] (governance over unissued or reserved tokens).

### Content

Total supply occupies a central position in token economic analysis. Investors and protocol designers distinguish three related quantities: maximum supply (the hard cap encoded in protocol rules, e.g., Bitcoin's 21 million BTC), total supply (all created tokens minus all burned tokens at any point in time), and circulating supply (total supply minus tokens locked in smart contracts, vesting schedules, team allocations, or treasury reserves).

The gap between total supply and circulating supply represents "supply overhang"—tokens that could enter circulation and exert downward price pressure when vesting schedules unlock or treasuries liquidate. Analysing this overhang alongside the emission schedule allows assessment of inflationary pressure on existing holders.

Deflationary protocols actively reduce total supply through token burns—destroying tokens in response to transaction fees (EIP-1559 base fee burning on Ethereum), protocol revenue, or governance decisions. When the burn rate exceeds the emission rate, total supply shrinks and the token becomes net-deflationary. Inflationary protocols continuously expand total supply to fund staking rewards, liquidity mining, and ecosystem grants, relying on growth in demand to absorb the new supply without price depression.

Treasury management is a key governance challenge: tokens held by protocol DAOs or foundations represent a claim on future supply that requires transparent disclosure, responsible deployment strategies, and community oversight to prevent misalignment between protocol growth and token value.

- ### Provenance
  - sources:: [[ISO/IEC 23257:2021]], [[IEEE 2418.1]], [[NIST NISTIR]]
  - migration-date:: 2026-04-26T00:00:00Z
