public:: true

# FATF Recommendation 16
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:22bdb44119f8762bbe425902152f7d7b7e12d9c079f362b27e8b2b46f7edb2ad",
  "@type": "Page",
  "vc:slug": "fatf-recommendation-16",
  "title": "FATF Recommendation 16",
  "vc:public": true,
  "vc:outboundWikilinks": [
    {
      "@id": "urn:visionflow:linked:fatf-recommendations",
      "vc:label": "FATF Recommendations"
    },
    {
      "@id": "urn:visionflow:linked:travel-rule",
      "vc:label": "Travel Rule"
    },
    {
      "@id": "urn:visionflow:linked:anti-money-laundering",
      "vc:label": "Anti-Money Laundering"
    }
  ],
  "vc:schemaVersion": 2,
  "prov:wasAttributedTo": {
    "@id": "did:nostr:ontology-mesh"
  },
  "prov:generatedAtTime": {
    "@value": "2026-08-06T00:00:00Z",
    "@type": "xsd:dateTime"
  }
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:fatf-recommendation-16",
  "@type": "Class",
  "label": "FATF Recommendation 16",
  "definition": "The specific Financial Action Task Force recommendation, known as the Travel Rule, requiring financial institutions and virtual asset service providers to obtain, hold, and transmit accurate originator and beneficiary information alongside wire transfers and virtual asset transfers, so that anti-money-laundering and counter-terrorist-financing authorities can trace funds across institutions and borders.",
  "domain": "finance",
  "maturity": "mature",
  "subClassOf": {
    "@id": "urn:ngm:class:fatf-recommendations",
    "label": "FATF Recommendations"
  },
  "relations": {
    "enables": [
      {
        "@id": "urn:ngm:class:anti-money-laundering",
        "label": "Anti-Money Laundering"
      }
    ],
    "relatedTo": [
      {
        "@id": "urn:ngm:class:travel-rule",
        "label": "Travel Rule"
      },
      {
        "@id": "urn:ngm:class:fatf-travel-rule",
        "label": "FATF Travel Rule"
      },
      {
        "@id": "urn:ngm:class:regulatory-compliance",
        "label": "Regulatory Compliance"
      }
    ]
  },
  "quality": 0.7,
  "provenance": {
    "attributedTo": "did:nostr:ontology-mesh",
    "generatedAt": "2026-08-06T00:00:00Z",
    "inferenceRule": "SwarmRepair"
  }
}
```

- ### Definition
  - "The specific Financial Action Task Force recommendation, known as the Travel Rule, requiring financial institutions and virtual asset service providers to obtain, hold, and transmit accurate originator and beneficiary information alongside wire transfers and virtual asset transfers, so that anti-money-laundering and counter-terrorist-financing authorities can trace funds across institutions and borders."

- ### Semantic Classification
  - owl-class:: finance:FATFRecommendation16
  - owl-role:: Artifact

- ### Relationships
  - is-subclass-of:: [[FATF Recommendations]]
  - related-to:: [[Travel Rule]]
  - related-to:: [[FATF Travel Rule]]
  - enables:: [[Anti-Money Laundering]] enforcement

- ### Content

  ## Definition

  **FATF Recommendation 16** is one numbered item within the Financial Action Task Force's forty Recommendations — the global standard for anti-money-laundering and counter-terrorist-financing — and the one with the greatest consequence for payments and cryptoasset infrastructure. It requires that when value moves between institutions, identifying information must move with it: the originator's name, account or wallet identifier, and address or national identity details, plus the beneficiary's name and account identifier. Because this information must "travel" with the transfer, the requirement is universally known as the Travel Rule.

  The recommendation originally targeted correspondent banking and wire transfers. Its significance changed in 2019, when the FATF's Interpretive Note extended Recommendation 16 to virtual assets and virtual asset service providers (VASPs) — exchanges, custodians, and transfer services — obliging them to exchange originator and beneficiary data for transfers above a threshold (USD/EUR 1,000 in the FATF baseline). This single extension forced the cryptoasset industry to build an inter-VASP data-sharing layer that public blockchains do not natively provide, spawning messaging protocols and standards such as IVMS 101 and competing Travel Rule compliance networks.

  The class is deliberately distinct from the [[FATF Recommendations]] as a whole: pages describing the [[Travel Rule]] implement this specific recommendation, not the entire forty-item standard.

  ## Current Landscape

  Implementation is uneven. The FATF's own targeted reviews report that a majority of assessed jurisdictions have now legislated Travel Rule requirements for VASPs, but enforcement and actual inter-provider data exchange lag well behind the law on paper — the so-called "sunrise problem", where a compliant VASP must transact with counterparties in jurisdictions that have not yet switched the rule on. In 2025 the FATF launched a review of Recommendation 16's payment-transparency requirements to modernise them for instant payments and evolving message formats such as ISO 20022.

  In the UK, the Travel Rule for cryptoassets took effect in September 2023 under the Money Laundering Regulations; the EU applies it through the Transfer of Funds Regulation alongside MiCA, with no de minimis threshold for VASP-to-VASP transfers. Open compliance questions concentrate on transfers involving self-hosted wallets, cross-protocol interoperability of Travel Rule messaging systems, and the privacy engineering needed to exchange personal data between VASPs without creating new honeypots.

- ### Provenance
  - sources::
  - migration-date:: 2026-08-06T00:00:00Z
