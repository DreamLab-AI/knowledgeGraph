public:: true

# quadratic funding
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:6b135d5dd1315dde25ca61fca4b18252c7b8d950eeb42ebce396dafc29cbe16b",
  "@type": "Page",
  "vc:slug": "quadratic-funding",
  "title": "quadratic funding",
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
  "@id": "urn:ngm:class:quadratic-funding",
  "@type": "Class",
  "label": "Quadratic Funding",
  "definition": "Quadratic Funding (QF) is a mechanism-design approach to allocating public goods subsidies in which a matching pool is distributed proportionally to the square of the sum of square roots of individual contributions to each project, mathematically maximising the democratic signal of funding breadth over depth. Proposed by Vitalik Buterin, Zoe Hitzig, and E. Glen Weyl, QF operationalises the concept of liberal radicalism: a project with many small contributors receives more matching funds than one with a single large donor, even if the absolute sums are equal. QF has been deployed on-chain via platforms such as Gitcoin Grants, where smart contracts automate matching calculations against a community-funded subsidy pool.",
  "domain": "blockchain",
  "subClassOf": [
    {
      "@id": "urn:ngm:class:bc-defi-and-economics",
      "label": "DeFi and Economics"
    }
  ],
  "relations": {
    "requires": [
      {"@id": "urn:ngm:class:mechanism-design", "label": "Mechanism Design"},
      {"@id": "urn:ngm:class:public-goods-funding", "label": "Public Goods Funding"}
    ],
    "relatedTo": [
      {"@id": "urn:ngm:class:quadratic-voting", "label": "Quadratic Voting"},
      {"@id": "urn:ngm:class:dao-governance", "label": "DAO Governance"},
      {"@id": "urn:ngm:class:governance-token", "label": "Governance Token"}
    ],
    "enables": [
      {"@id": "urn:ngm:class:dao", "label": "DAO"}
    ]
  },
  "qualityScore": 0.75,
  "maturity": "emerging"
}
```


- ### Definition
  - Quadratic Funding (QF) is a mechanism-design approach to allocating public goods subsidies in which a matching pool is distributed proportionally to the square of the sum of square roots of individual contributions to each project, mathematically maximising the democratic signal of funding breadth over depth. Proposed by Vitalik Buterin, Zoe Hitzig, and E. Glen Weyl, QF operationalises the concept of liberal radicalism: a project with many small contributors receives more matching funds than one with a single large donor, even if the absolute sums are equal. QF has been deployed on-chain via platforms such as Gitcoin Grants, where smart contracts automate matching calculations against a community-funded subsidy pool.

- ### Semantic Classification
  - owl-class:: quadratic-funding:Quadratic Funding
  - owl-role:: Concept

- ### Relationships
  - requires [[Mechanism Design]]
  - requires [[Public Goods Funding]]
  - relatedTo [[Quadratic Voting]]
  - relatedTo [[DAO Governance]]
  - relatedTo [[Governance Token]]
  - enables [[DAO]]

- ### Content
  - The quadratic formula used to allocate matching funds is: M_i = (∑_j √c_{ij})² − ∑_j c_{ij}, where c_{ij} is the contribution of individual j to project i, and M_i is the matching subsidy for project i. The total matching pool is then normalised across all projects if the sum of M_i exceeds the available pool. This formula is derived from the theory of optimal provision of public goods under the assumption of privately observed preferences, making QF theoretically welfare-maximising in settings with independent preferences and no collusion.
  - The principal practical challenge for QF implementations is Sybil resistance: an attacker who creates many pseudonymous identities and splits a large contribution across them can fraudulently amplify their matching allocation. Gitcoin has addressed this through passport-based identity verification that assigns trust scores to wallet addresses using on-chain and off-chain attestations, allowing matching weights to be discounted for low-trust contributors.
  - QF is closely related to Quadratic Voting (QV), which applies the same square-root weighting principle to collective decision-making: voters may allocate multiple votes to a single option at quadratically increasing cost, expressing preference intensity while maintaining proportionality to the overall electorate. Both mechanisms are members of a broader family of quadratic mechanisms studied in mechanism design theory as solutions to the under-provision of public goods under standard voting or donation rules.

- ### Provenance
  - sources::
  - migration-date:: 2026-05-19T00:00:00Z
