public:: true

# Howey Test
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:howey-test",
  "@type": "Page",
  "vc:slug": "howey-test",
  "title": "Howey Test",
  "vc:public": true,
  "vc:outboundWikilinks": [],
  "vc:schemaVersion": 2
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:howey-test",
  "@type": "Class",
  "label": "Howey Test",
  "definition": "The Howey Test is a four-part legal framework established by the U.S. Supreme Court in SEC v. W.J. Howey Co. (1946) to determine whether a transaction qualifies as an 'investment contract' and therefore constitutes a security subject to federal securities regulation. An instrument is a security if it involves (1) an investment of money, (2) in a common enterprise, (3) with an expectation of profits, (4) derived from the efforts of others.",
  "domain": "blockchain",
  "maturity": "mature",
  "subClassOf": {"@id": "urn:ngm:class:investment-contract-analysis", "label": "Investment Contract Analysis"},
  "relations": {
    "partOf": [
      {"@id": "urn:ngm:class:securities-regulation", "label": "Securities Regulation"},
      {"@id": "urn:ngm:class:financial-regulation", "label": "Financial Regulation"}
    ],
    "requires": [
      {"@id": "urn:ngm:class:common-enterprise", "label": "Common Enterprise"},
      {"@id": "urn:ngm:class:investment-of-money", "label": "Investment of Money"},
      {"@id": "urn:ngm:class:expectation-of-profits", "label": "Expectation of Profits"},
      {"@id": "urn:ngm:class:efforts-of-others", "label": "Efforts of Others"}
    ],
    "enables": [
      {"@id": "urn:ngm:class:sec-enforcement-action", "label": "SEC Enforcement Action"},
      {"@id": "urn:ngm:class:security-token-registration", "label": "Security Token Registration"}
    ],
    "dependsOn": [
      {"@id": "urn:ngm:class:securities-act-1933", "label": "Securities Act 1933"},
      {"@id": "urn:ngm:class:securities-exchange-act-1934", "label": "Securities Exchange Act 1934"}
    ],
    "uses": [
      {"@id": "urn:ngm:class:investment-contract", "label": "Investment Contract"},
      {"@id": "urn:ngm:class:economic-substance-test", "label": "Economic Substance Test"}
    ],
    "supports": [
      {"@id": "urn:ngm:class:investor-protection", "label": "Investor Protection"},
      {"@id": "urn:ngm:class:securities-disclosure", "label": "Securities Disclosure"}
    ],
    "contrastsWith": [
      {"@id": "urn:ngm:class:commodity-classification", "label": "Commodity Classification"},
      {"@id": "urn:ngm:class:reves-test", "label": "Reves Test"},
      {"@id": "urn:ngm:class:eu-mica-regulation", "label": "EU MiCA Regulation"}
    ],
    "bridgesTo": [
      {"@id": "urn:ngm:class:security-token-offering", "label": "Security Token Offering"},
      {"@id": "urn:ngm:class:initial-coin-offering", "label": "Initial Coin Offering"},
      {"@id": "urn:ngm:class:decentralised-autonomous-organisation", "label": "Decentralised Autonomous Organisation"},
      {"@id": "urn:ngm:class:crypto-token-classification", "label": "Crypto Token Classification"}
    ],
    "relatedTo": [
      {"@id": "urn:ngm:class:digital-asset-regulation", "label": "Digital Asset Regulation"},
      {"@id": "urn:ngm:class:ripple-xrp-litigation", "label": "Ripple XRP Litigation"},
      {"@id": "urn:ngm:class:dao-report-2017", "label": "DAO Report 2017"}
    ]
  },
  "sameAs": [
    {"@id": "urn:ngm:class:investment-contract-test", "label": "Investment Contract Test"},
    {"@id": "urn:ngm:class:sec-v-howey-standard", "label": "SEC v Howey Standard"}
  ],
  "provenance": {
    "attributedTo": "did:nostr:ontology-mesh",
    "generatedAt": "2026-06-14T00:00:00Z",
    "inferenceRule": "RelationEnrichment"
  },
  "quality": 0.8
}
```

- ### Definition
  - The [[Howey Test]] is the U.S. Supreme Court's four-part standard for classifying a transaction as an investment contract under [[Securities Regulation]], determining whether issuers must comply with federal disclosure, registration, and anti-fraud requirements.

- ### Relationships
  - The Howey Test sits within [[Investment Contract Analysis]] and directly shapes [[Securities Regulation]] enforcement. It determines whether [[Security Token Offering]]s must register with the SEC, and interacts with the [[Securities Exchange Act 1934]] and broader [[Financial Regulation]] frameworks. SEC enforcement actions in cryptocurrency markets almost invariably hinge on Howey analysis.

- ### Content
  - The test originates from SEC v. W.J. Howey Co., decided by the U.S. Supreme Court in 1946. The case involved citrus grove land sales bundled with service contracts — the Court held this arrangement constituted a security even though the underlying asset was agricultural land. Congress enacted the Securities Act of 1933 and Securities Exchange Act of 1934 with deliberately broad definitions; the Howey decision operationalised that breadth through an economic-substance rather than form-based test.
  - Courts apply the four Howey prongs in sequence: first, was money (or value) invested? Second, was the investment pooled into a common enterprise — horizontally (pooled with other investors) or vertically (tied to promoter's success)? Third, did investors reasonably expect profits? Fourth, were those profits expected primarily from the managerial efforts of a third party rather than the investor's own labour? Failure on any single prong removes the instrument from the definition of a security.
  - In the blockchain era the Howey Test has become the central analytical tool applied by the U.S. Securities and Exchange Commission to cryptocurrency tokens. The SEC's 2017 DAO Report applied Howey to conclude DAO tokens were unregistered securities. Subsequent enforcement actions against Ripple (XRP), Telegram (GRAM), and numerous ICO issuers all turned on Howey analysis. The test's "efforts of others" prong is particularly contested for decentralised networks where no promoter controls outcomes.
  - By 2024-2025, U.S. federal courts (Ripple summary judgment, Coinbase litigation) have produced split rulings on secondary-market token sales, and Congress has debated replacing or supplementing Howey with bespoke digital-asset legislation. The SEC under Chair Gensler maintained aggressive Howey-based enforcement, while industry advocates argued the 1946 precedent is ill-suited to decentralised protocols. International regulators in the EU, UK, and Singapore have adopted alternative asset-classification frameworks that do not rely on Howey.

