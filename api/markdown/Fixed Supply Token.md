public:: true

# Fixed Supply Token
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:2b19207a0c16cc5b5002f4fd7bb18a28305d094d80a533f351a84e919e659e85",
  "@type": "Page",
  "vc:slug": "fixed-supply-token",
  "title": "Fixed Supply Token",
  "vc:public": true,
  "vc:outboundWikilinks": [
    {
      "@id": "urn:visionflow:owl:class:blockchain",
      "vc:label": "Blockchain"
    },
    {
      "@id": "urn:visionflow:owl:class:fungible-token",
      "vc:label": "Fungible Token"
    }
  ],
  "vc:schemaVersion": 2,
  "vc:legacyProperties": [
    {
      "vc:key": "legacy-term-id",
      "vc:value": "BC-0523"
    },
    {
      "vc:key": "preferred-term",
      "vc:value": "Fixed Supply Token"
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
  "@id": "urn:ngm:class:fixed-supply-token",
  "@type": "Class",
  "label": "Fixed Supply Token",
  "definition": "A Fixed Supply Token is a fungible blockchain token whose total issuance is capped at a hard-coded maximum that the protocol cannot exceed, regardless of future governance decisions. Distribution of the supply over time is governed by a predetermined emission schedule, and no additional tokens can be minted once the cap is reached, conferring deflationary scarcity properties analogous to precious metals.",
  "domain": "blockchain",
  "maturity": "established",
  "qualityScore": 0.8,
  "subClassOf": [
    {
      "@id": "urn:ngm:class:bc-token-and-asset",
      "label": "Token and Asset"
    },
    {
      "@id": "urn:ngm:class:fungible-token",
      "label": "Fungible Token"
    }
  ],
  "relations": {
    "hasPart": [
      {"@id": "urn:ngm:class:emission-schedule", "label": "Emission Schedule"},
      {"@id": "urn:ngm:class:total-supply", "label": "Total Supply"}
    ],
    "relatedTo": [
      {"@id": "urn:ngm:class:circulating-supply", "label": "Circulating Supply"},
      {"@id": "urn:ngm:class:halving", "label": "Halving"},
      {"@id": "urn:ngm:class:market-capitalization", "label": "Market Capitalization"},
      {"@id": "urn:ngm:class:tokenomics", "label": "Tokenomics"},
      {"@id": "urn:ngm:class:token-economics", "label": "Token Economics"}
    ],
    "contrastsWith": [
      {"@id": "urn:ngm:class:inflationary-token", "label": "Inflationary Token"},
      {"@id": "urn:ngm:class:deflationary-token", "label": "Deflationary Token"}
    ],
    "enables": [
      {"@id": "urn:ngm:class:burning-mechanism", "label": "Burning Mechanism"}
    ],
    "uses": [
      {"@id": "urn:ngm:class:blockchain-protocol", "label": "Blockchain Protocol"}
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
  "@id": "urn:visionflow:annotation:link-resolutions:fixed-supply-token:776c802a9fc9",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:2b19207a0c16cc5b5002f4fd7bb18a28305d094d80a533f351a84e919e659e85"
  },
  "vc:resolutions": [
    {
      "raw": "[[Blockchain]]",
      "resolved": "urn:visionflow:owl:class:blockchain",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Fungible Token]]",
      "resolved": "urn:visionflow:owl:class:fungible-token",
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
  A Fixed Supply Token is a fungible blockchain token whose total issuance is capped at a hard-coded maximum that the protocol cannot exceed, regardless of future governance decisions. Distribution of the supply over time is governed by a predetermined emission schedule, and no additional tokens can be minted once the cap is reached, conferring deflationary scarcity properties analogous to precious metals.

- ### Semantic Classification
  - owl-class:: blockchain:FixedSupplyToken
  - owl-role:: Concept
  - belongs-to-domain:: [[Blockchain]]

- ### Relationships
  - hasPart:: [[Emission Schedule]], [[Total Supply]]
  - relatedTo:: [[Circulating Supply]], [[Halving]], [[Market Capitalization]], [[Tokenomics]], [[Token Economics]]
  - contrastsWith:: [[Inflationary Token]], [[Deflationary Token]]
  - enables:: [[Burning Mechanism]]
  - uses:: [[Blockchain Protocol]]

- ### Content
  A Fixed Supply Token encodes monetary scarcity directly into the consensus rules of a blockchain protocol. The maximum supply cap is enforced at the protocol layer, meaning that no block producer, validator, or governance vote can authorise the creation of tokens beyond that limit. Bitcoin's 21 million BTC cap is the canonical example; the equivalent on Ethereum's token layer appears in ERC-20 contracts that hard-code a maxSupply constant and remove any mint function access after deployment.

  The emission schedule determines how the fixed total supply is released over time. In proof-of-work systems, block rewards are typically the primary emission mechanism, and scheduled halvings reduce the per-block issuance at predetermined block heights. In proof-of-stake systems, staking rewards may be funded from a pre-allocated treasury or from transaction fees once the cap is reached, aligning long-term validator incentives with network revenue rather than inflation.

  Fixed supply contrasts with inflationary token designs—where ongoing issuance funds staking rewards or ecosystem grants—and with deflationary tokens, where burning mechanisms actively reduce supply below an initial cap. The fixed supply model's value proposition rests on predictable, auditable monetary policy: market participants can model future circulating supply with precision, facilitating long-term valuation using stock-to-flow and similar frameworks.

  Key risks include insufficient validator incentives once the emission schedule completes (relying purely on transaction fees), and governance ossification if the supply cap itself can never be amended even under extreme circumstances. Projects address these risks through fee market design, layer-2 transaction volume assumptions, and careful initial supply allocation to ecosystem reserves.

- ### Provenance
  - sources:: Chimera Prime Research
  - migration-date:: 2026-04-26T00:00:00Z
