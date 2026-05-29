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
  "subClassOf": [{"@id": "urn:ngm:class:investment-contract-analysis", "label": "Investment Contract Analysis"}],
  "relations": {
    "relatedTo": [
      {"@id": "urn:ngm:class:securities-regulation", "label": "Securities Regulation"},
      {"@id": "urn:ngm:class:security-token-offering", "label": "Security Token Offering"},
      {"@id": "urn:ngm:class:financial-regulation", "label": "Financial Regulation"}
    ],
    "uses": [
      {"@id": "urn:ngm:class:securities-exchange-act-1934", "label": "Securities Exchange Act 1934"}
    ]
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

