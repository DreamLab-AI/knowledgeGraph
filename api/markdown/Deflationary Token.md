public:: true

# Deflationary Token
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:2ea9024d2e3cd3234dfd8e0d879e91863155ae57ca43ab78bdaef6ebb62967f1",
  "@type": "Page",
  "vc:slug": "deflationary-token",
  "title": "Deflationary Token",
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
      "@id": "urn:visionflow:owl:class:ai-agent-system",
      "vc:label": "AI Agent System"
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
    },
    {
      "@id": "urn:visionflow:owl:class:virtual-economy",
      "vc:label": "Virtual Economy"
    }
  ],
  "vc:schemaVersion": 2,
  "vc:legacyProperties": [
    {
      "vc:key": "legacy-term-id",
      "vc:value": "BC-0111"
    },
    {
      "vc:key": "preferred-term",
      "vc:value": "Deflationary Token"
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
  "@id": "urn:ngm:class:deflationary-token",
  "@type": "Class",
  "label": "Deflationary Token",
  "definition": "A Deflationary Token is a cryptocurrency or blockchain token whose total circulating supply decreases over time through one or more programmatic burning mechanisms—such as transaction fee burns, scheduled buyback-and-burn events, or protocol-level token destruction—creating supply-side scarcity intended to exert upward price pressure and incentivise long-term holding.",
  "domain": "blockchain",
  "maturity": "established",
  "qualityScore": 0.72,
  "subClassOf": [
    {
      "@id": "urn:ngm:class:bc-token-and-asset",
      "label": "Token and Asset"
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
    "uses": [
      {
        "@id": "urn:ngm:class:burning-mechanism",
        "label": "Burning Mechanism"
      },
      {
        "@id": "urn:ngm:class:supply-cap",
        "label": "Supply Cap"
      },
      {
        "@id": "urn:ngm:class:smart-contract",
        "label": "Smart Contract"
      },
      {
        "@id": "urn:ngm:class:proof-of-work",
        "label": "Proof of Work"
      }
    ],
    "contrastsWith": [
      {
        "@id": "urn:ngm:class:inflationary-token",
        "label": "Inflationary Token"
      },
      {
        "@id": "urn:ngm:class:native-token",
        "label": "Native Token"
      },
      {
        "@id": "urn:ngm:class:stablecoin",
        "label": "Stablecoin"
      }
    ],
    "relatedTo": [
      {
        "@id": "urn:ngm:class:tokenomics",
        "label": "Tokenomics"
      },
      {
        "@id": "urn:ngm:class:token-economics",
        "label": "Token Economics"
      },
      {
        "@id": "urn:ngm:class:governance-token",
        "label": "Governance Token"
      },
      {
        "@id": "urn:ngm:class:blockchain-economics",
        "label": "Blockchain Economics"
      },
      {
        "@id": "urn:ngm:class:transaction-fee",
        "label": "Transaction Fee"
      },
      {
        "@id": "urn:ngm:class:scarcity",
        "label": "Scarcity"
      },
      {
        "@id": "urn:ngm:class:store-of-value",
        "label": "Store of Value"
      },
      {
        "@id": "urn:ngm:class:monetary-policy",
        "label": "Monetary Policy"
      }
    ],
    "partOf": [
      {
        "@id": "urn:ngm:class:token-economics",
        "label": "Token Economics"
      },
      {
        "@id": "urn:ngm:class:blockchain",
        "label": "Blockchain"
      }
    ],
    "requires": [
      {
        "@id": "urn:ngm:class:consensus-mechanism",
        "label": "Consensus Mechanism"
      },
      {
        "@id": "urn:ngm:class:on-chain-governance",
        "label": "On-Chain Governance"
      }
    ],
    "enables": [
      {
        "@id": "urn:ngm:class:incentive-mechanism",
        "label": "Incentive Mechanism"
      }
    ],
    "dependsOn": [
      {
        "@id": "urn:ngm:class:distributed-ledger",
        "label": "Distributed Ledger"
      },
      {
        "@id": "urn:ngm:class:token-standard",
        "label": "Token Standard"
      }
    ],
    "bridgesTo": [
      {
        "@id": "urn:ngm:class:virtual-economy",
        "label": "Virtual Economy"
      },
      {
        "@id": "urn:ngm:class:decentralized-finance",
        "label": "Decentralized Finance"
      },
      {
        "@id": "urn:ngm:class:non-fungible-token",
        "label": "Non-Fungible Token"
      }
    ]
  },
  "sameAs": [
    {
      "@id": "urn:ngm:class:burn-token",
      "label": "Burn Token"
    },
    {
      "@id": "urn:ngm:class:deflationary-cryptocurrency",
      "label": "Deflationary Cryptocurrency"
    }
  ],
  "provenance": {
    "attributedTo": "did:nostr:jjohare",
    "generatedAt": "2026-05-18T07:12:05Z",
    "inferenceRule": "RelationEnrichment"
  }
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:annotation:link-resolutions:deflationary-token:776c802a9fc9",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:2ea9024d2e3cd3234dfd8e0d879e91863155ae57ca43ab78bdaef6ebb62967f1"
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
      "raw": "[[AI Agent System]]",
      "resolved": "urn:visionflow:owl:class:ai-agent-system",
      "kind": "ResolvedLink"
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
    },
    {
      "raw": "[[Virtual Economy]]",
      "resolved": "urn:visionflow:owl:class:virtual-economy",
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
  - Decreasing supply token within blockchain systems, providing essential functionality for distributed ledger technology operations and properties.

- ### Semantic Classification
  - owl-class:: blockchain:DeflationaryToken
  - owl-role:: Object
  - owl-inferred:: blockchain:VirtualObject
  - belongs-to-domain:: [[TokenEconomicsDomain]]
  - implemented-in-layer:: [[EconomicLayer]]

- ### Relationships
  - is-subclass-of:: [[Blockchain Entity]], [[EconomicMechanism]]
  - bridges-to:: [[AI Agent System]] or [[Virtual Economy]]

- ### Content

  ## Class Declaration
  Declaration(Class(:DeflationaryToken))

  ## Subclass Relationships
  SubClassOf(:DeflationaryToken :EconomicMechanism)
  SubClassOf(:DeflationaryToken :BlockchainEntity)

  ## Essential Properties
  SubClassOf(:DeflationaryToken
    (ObjectSomeValuesFrom :partOf :Blockchain))

  SubClassOf(:DeflationaryToken
    (ObjectSomeValuesFrom :hasProperty :Property))

  ## Data Properties
  DataPropertyAssertion(:hasIdentifier :DeflationaryToken "BC-0111"^^xsd:string)
  DataPropertyAssertion(:hasAuthorityScore :DeflationaryToken "1.0"^^xsd:decimal)
  DataPropertyAssertion(:isFoundational :DeflationaryToken "true"^^xsd:boolean)

  ## Object Properties
  ObjectPropertyAssertion(:enablesFeature :DeflationaryToken :BlockchainFeature)
  ObjectPropertyAssertion(:relatesTo :DeflationaryToken :RelatedConcept)

  ## Annotations
  AnnotationAssertion(rdfs:label :DeflationaryToken "Deflationary Token"@en)
  AnnotationAssertion(rdfs:comment :DeflationaryToken
    "Decreasing supply token"@en)
  AnnotationAssertion(dct:description :DeflationaryToken
    "Foundational blockchain concept with formal ontological definition"@en)
  AnnotationAssertion(:termID :DeflationaryToken "BC-0111")
  AnnotationAssertion(:priority :DeflationaryToken "1"^^xsd:integer)
  AnnotationAssertion(:category :DeflationaryToken "economic-incentive"@en)
  )
      ```

  - ## About Deflationary Token

  - Decreasing supply token within blockchain systems, providing essential functionality for distributed ledger technology operations and properties.
  - ### Key Characteristics
    - 1. **Definitional Property**: Core defining characteristic
    - 2. **Functional Property**: Operational behavior
    - 3. **Structural Property**: Compositional elements
    - 4. **Security Property**: Security guarantees provided
    - 5. **Performance Property**: Efficiency considerations
  - ### Technical Components
    - **Implementation**: How concept is realized technically
    - **Verification**: Methods for validating correctness
    - **Interaction**: Relationships with other components
    - **Constraints**: Technical limitations and requirements
  - ### Use Cases
    - **1. Core Blockchain Operation**
    - **Application**: Fundamental blockchain functionality
    - **Example**: Practical implementation in major blockchains
    - **Requirements**: Technical prerequisites
    - **Benefits**: Value provided to blockchain systems
  - ### Standards & References
    - [[ISO/IEC 23257:2021]] - Blockchain and distributed ledger technologies
    - [[IEEE 2418.1]] - Blockchain and distributed ledger technologies
    - [[NIST NISTIR]] - Blockchain and distributed ledger technologies



  <!-- Merged from Deflationary Token.md: Blockchain, Fungible Token -->

- ### Current Landscape (2026)
  - The canonical deflationary case, Ethereum's "ultrasound money" thesis built on EIP-1559 base-fee burning, broke after the March 2024 Dencun upgrade (EIP-4844 blob transactions) moved activity onto near-zero-fee layer-2 rollups; daily burn collapsed from thousands of ETH to as low as 50–70 ETH, leaving ETH mildly inflationary at roughly 0.2–0.8% net annually through 2025 into 2026 and pushing supply back above its post-Merge low.
  - Ethereum's December 2025 Fusaka upgrade (activated 3 December 2025) added EIP-7918, a "blob base fee bound" that floors blob pricing at roughly the execution base fee divided by 16, guaranteeing a minimum burn stream; Fidelity modelled it would have added around $78.6m in cumulative burn across about 93% of days since 2024, but it only prevents burn collapsing to zero rather than restoring post-Merge deflation.
  - The dominant 2025–2026 shift has been from protocol fee-burns to revenue-funded buyback-and-burn: across 27 tracked tokens the sector spent or destroyed roughly $18.8bn since January 2025 (about $14.9bn in 2025, of which ~$12.7bn burns versus ~$2.2bn buybacks), reframing deflation as a value-accrual mechanism tied to real protocol revenue.
  - Hyperliquid emerged as the archetype, routing about 97% of trading fees through its keyless Assistance Fund; a 24 December 2025 validator vote (85% in favour) formally recognised roughly 37m HYPE (about 13–16% of supply, ~$1bn) as permanently burned and committed future fee buybacks to burning, converting a discretionary treasury policy into a governance-enforced deflationary commitment.
  - BNB continued its dual-track model, quarterly Auto-Burn plus the real-time BEP-95 gas burn (~10% of fees), toward its 100m supply target; the 36th quarterly burn on 15 July 2026 destroyed 1,615,827.795 BNB (about $931.7m), cutting supply to roughly 133m and sustaining a ~4–5% annual deflation rate.
  - Analysts increasingly stress that a burn only shrinks supply if it outruns issuance and unlocks: on a forward net-emission basis only a handful of tokens (notably BNB and Raydium's RAY) are genuinely net-deflationary, whereas HYPE, ETH and others remain net inflationary once staking rewards or scheduled unlocks are subtracted.
  - Open challenges into 2026 centre on the tension between L2 scaling and base-layer scarcity, growing investor scrutiny of exchange-token burn transparency and consistency, and persistent unlock schedules (for example HYPE's monthly ~9.9m-token unlocks running through 2027) that structurally offset even aggressive buyback-and-burn programmes.

- ### References
  - 1. crypto.news (2026). Did L2s break Ethereum's ultrasound money? https://crypto.news/ethereum-ultrasound-money-l2-burn-broken/
  - 2. Unlocks Insights (2026). Crypto's $19B Buyback and Burn Meta, 2025-2026. https://insights.unlocks.app/buyback-and-burn-explained-what-they-are-who-is-doing-them-and-whether-they-actually-work/
  - 3. crypto.news (2026). Why HYPE is different: inside Hyperliquid's buyback. https://crypto.news/why-hype-is-different-inside-hyperliquids-buyback/
  - 4. Binance Square (2025). Deep Dive into BNB Burn Mechanism: 2025 Data Review. https://www.binance.com/en/square/post/30633546555273
  - 5. The Block (2025). Ethereum supply climbs to pre-Merge upgrade levels; analysts point to Dencun blob update. https://www.theblock.co/news/ecosystems/2025-02-05-ethereum-supply-climbs-to-pre-merge-upgrade-levels-analysts-point-to-dencun-blob-update-338964
  - 6. MEXC News (2026). Ethereum Token Supply in 2026: The "Ultrasound Money" Reality Check. https://www.mexc.com/news/1013167

- ### Provenance
  - sources:: [[ISO/IEC 23257:2021]], [[IEEE 2418.1]], [[NIST NISTIR]]
  - migration-date:: 2026-04-26T00:00:00Z
