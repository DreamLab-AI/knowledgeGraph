public:: true

# Halving
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:0fffc68e65d7f0a98fa45763d384f060b81c381564f76e51e3091dcb1318007e",
  "@type": "Page",
  "vc:slug": "halving",
  "title": "Halving",
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
      "vc:value": "BC-0103"
    },
    {
      "vc:key": "preferred-term",
      "vc:value": "Halving"
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
  "@id": "urn:ngm:class:halving",
  "@type": "Class",
  "label": "Halving",
  "definition": "A programmatic event in proof-of-work blockchains, most notably Bitcoin, whereby the block reward issued to miners is cut in half at a predetermined block height. Halvings enforce a fixed, disinflationary supply schedule that asymptotically approaches the maximum coin supply. By reducing new coin issuance, halvings create predictable scarcity and are a central component of Bitcoin's monetary policy.",
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
      {"@id": "urn:ngm:class:block-reward", "label": "Block Reward"},
      {"@id": "urn:ngm:class:mining-reward", "label": "Mining Reward"}
    ],
    "requires": [
      {"@id": "urn:ngm:class:proof-of-work", "label": "Proof Of Work"},
      {"@id": "urn:ngm:class:consensus-rule", "label": "Consensus Rule"}
    ],
    "enables": [
      {"@id": "urn:ngm:class:fixed-supply-token", "label": "Fixed Supply Token"},
      {"@id": "urn:ngm:class:deflationary-token", "label": "Deflationary Token"},
      {"@id": "urn:ngm:class:inflation-control", "label": "Inflation Control"}
    ],
    "relatedTo": [
      {"@id": "urn:ngm:class:circulating-supply", "label": "Circulating Supply"},
      {"@id": "urn:ngm:class:tokenomics", "label": "Tokenomics"},
      {"@id": "urn:ngm:class:monetary-policy-implementation", "label": "Monetary Policy Implementation"},
      {"@id": "urn:ngm:class:bitcoin-proof-of-work-protocol-mining", "label": "Bitcoin Mining"},
      {"@id": "urn:ngm:class:difficulty-adjustment", "label": "Difficulty Adjustment"},
      {"@id": "urn:ngm:class:incentive-alignment", "label": "Incentive Alignment"},
      {"@id": "urn:ngm:class:bitcoin-proof-of-work-protocol-value-proposition", "label": "Bitcoin Value Proposition"}
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
  "@id": "urn:visionflow:annotation:link-resolutions:halving:776c802a9fc9",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:0fffc68e65d7f0a98fa45763d384f060b81c381564f76e51e3091dcb1318007e"
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

A programmatic event in proof-of-work blockchains, most notably Bitcoin, whereby the block reward issued to miners is cut in half at a predetermined block height. Halvings enforce a fixed, disinflationary supply schedule that asymptotically approaches the maximum coin supply. By reducing new coin issuance, halvings create predictable scarcity and are a central component of Bitcoin's monetary policy.

### Relationships

The Halving is composed of and depends upon the Block Reward and Mining Reward mechanisms — it is precisely the halving of these rewards that defines the event. It requires Proof Of Work consensus and is governed by a Consensus Rule hard-coded into the protocol. The mechanism enables Fixed Supply Token and Deflationary Token properties and provides Inflation Control by algorithmically throttling new coin issuance. It is closely related to Circulating Supply, Tokenomics, and Monetary Policy Implementation. Bitcoin Mining activity is directly affected by each halving, as miner economics shift when subsidy income drops. The Difficulty Adjustment mechanism interacts with halvings by rebalancing hash-power economics, and Incentive Alignment studies use halvings as a canonical case of designed scarcity driving Bitcoin Value Proposition narratives.

### Content

The Halving is one of the most distinctive features of Bitcoin's monetary architecture. Satoshi Nakamoto hard-coded the halving schedule into the Bitcoin protocol so that approximately every 210,000 blocks (roughly four years), the subsidy miners receive for finding a valid block is cut in half. Starting at 50 BTC per block in 2009, the reward has progressed through 25, 12.5, 6.25, and 3.125 BTC at successive halvings. This schedule continues until approximately the year 2140, at which point the last fractional satoshi will have been issued and the maximum supply of 21 million BTC will be in circulation.

The economic rationale for halvings centres on predictable, algorithmic scarcity. Unlike fiat currencies where monetary authorities can expand supply at will, Bitcoin's issuance schedule is transparent and immutable by design. Halvings impose a decreasing inflation rate that market participants can anticipate years in advance, providing a stark contrast to discretionary monetary policy. This predictability underpins Bitcoin's characterisation as "digital gold" and contributes to its Value Proposition as a store of value.

Halvings interact with several other blockchain mechanisms. In the immediate aftermath of each event, the Difficulty Adjustment algorithm responds to any change in hash-power as some miners become unprofitable and exit the network. Mining Pool operators must recalculate their economics and operational thresholds. Over time, the miner revenue model shifts increasingly toward Transaction Fees, which are expected to sustain network security once block subsidies approach zero. This transition is actively studied within the Token Economics and Tokenomics Governance literature as a long-run sustainability question.

From an ontological perspective, the Halving is classified as an Economic Mechanism within the DeFi and Economics subdomain of the blockchain ontology. It is a process-level concept rather than a structural component: it does not name a software module but rather a scheduled protocol event with observable on-chain consequences. Its relationship to Consensus Rules means that any node rejecting the halving schedule would be forked out of the main chain, giving the mechanism its absolute and enforceable character.

- ### Provenance
  - sources:: [[ISO/IEC 23257:2021]], [[IEEE 2418.1]], [[NIST NISTIR]]
  - migration-date:: 2026-04-26T00:00:00Z
