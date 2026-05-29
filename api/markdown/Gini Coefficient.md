public:: true

# gini coefficient
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:ba427336bc28af430396e276e79913795bc87fd22d7dd4d9b43213224e2b03e6",
  "@type": "Page",
  "vc:slug": "gini-coefficient",
  "title": "gini coefficient",
  "vc:public": true,
  "vc:outboundWikilinks": [],
  "vc:schemaVersion": 2,
  "prov:wasAttributedTo": {
    "@id": "did:nostr:jjohare"
  },
  "prov:generatedAtTime": {
    "@value": "2026-05-19T21:00:00Z",
    "@type": "xsd:dateTime"
  }
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:gini-coefficient",
  "@type": "Class",
  "label": "Gini Coefficient",
  "definition": "The Gini coefficient is a scalar summary statistic derived from the Lorenz curve that measures the degree of inequality in a distribution, yielding 0 for perfect equality and 1 for maximum concentration in a single entity. Originally developed by statistician Corrado Gini to measure income and wealth inequality, it has been applied in blockchain analytics to quantify the concentration of token holdings, staking power, or validator stake across on-chain addresses. High Gini values in a proof-of-stake network signal plutocratic tendencies that may undermine decentralisation claims.",
  "domain": "blockchain",
  "subClassOf": [
    {
      "@id": "urn:ngm:class:bc-governance-and-regulation",
      "label": "Blockchain Governance and Regulation"
    }
  ],
  "relations": {
    "relatedTo": [
      {"@id": "urn:ngm:class:tokenomics", "label": "Tokenomics"},
      {"@id": "urn:ngm:class:token-economics", "label": "Token Economics"},
      {"@id": "urn:ngm:class:financial-inclusion", "label": "Financial Inclusion"}
    ],
    "supports": [
      {"@id": "urn:ngm:class:blockchain-governance", "label": "Blockchain Governance"}
    ],
    "contrastsWith": [
      {"@id": "urn:ngm:class:proof-of-stake", "label": "Proof of Stake"}
    ]
  },
  "qualityScore": 0.75,
  "maturity": "emerging"
}
```


- ### Definition
  - The Gini coefficient is a scalar summary statistic derived from the Lorenz curve that measures the degree of inequality in a distribution, yielding 0 for perfect equality and 1 for maximum concentration in a single entity. Originally developed by statistician Corrado Gini to measure income and wealth inequality, it has been applied in blockchain analytics to quantify the concentration of token holdings, staking power, or validator stake across on-chain addresses. High Gini values in a proof-of-stake network signal plutocratic tendencies that may undermine decentralisation claims.

- ### Semantic Classification
  - owl-class:: gini-coefficient:Gini Coefficient
  - owl-role:: Concept

- ### Relationships
  - relatedTo [[Tokenomics]]
  - relatedTo [[Token Economics]]
  - relatedTo [[Financial Inclusion]]
  - supports [[Blockchain Governance]]
  - contrastsWith [[Proof of Stake]]

- ### Content
  - The Gini coefficient G is computed as the ratio of the area between the line of perfect equality and the actual Lorenz curve to the total area beneath the equality line. Algorithmically, for a sorted vector of holdings x₁ ≤ x₂ ≤ ... ≤ xₙ, G = (2 * sum(i * xᵢ) / (n * sum(xᵢ))) - (n+1)/n. Values close to zero indicate broadly distributed holdings; values approaching one indicate near-total concentration.
  - In blockchain network analysis, the Gini coefficient is applied to three distinct distributions: (1) token holdings across externally owned addresses to measure wealth concentration; (2) stake or voting power across validators or delegators in a proof-of-stake system; and (3) mining hash rate across mining pools in proof-of-work networks. A high Gini in (2) is particularly concerning for governance integrity, since large holders can dominate on-chain votes in systems such as Compound, MakerDAO, or Cosmos governance.
  - Researchers and projects such as Nansen, Dune Analytics, and academic blockchain economists regularly publish Gini coefficient analyses of major token distributions. High concentration is often observed shortly after token generation events (TGEs) and tends to decrease over time as tokens circulate. Quadratic voting and quadratic funding mechanisms are designed to counteract the influence of wealth concentration by weighting votes as the square root of tokens held, directly addressing the concern that high Gini values raise for democratic governance of on-chain protocols.

- ### Provenance
  - sources::
  - migration-date:: 2026-05-19T00:00:00Z
