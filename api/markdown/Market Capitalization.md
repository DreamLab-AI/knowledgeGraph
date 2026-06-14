public:: true

# Market Capitalization
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:8bc1dc79c812fdb3f8815d65791734a572daebb80b31ee1a9252efbdf5882d1c",
  "@type": "Page",
  "vc:slug": "market-capitalization",
  "title": "Market Capitalization",
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
      "vc:value": "BC-0118"
    },
    {
      "vc:key": "preferred-term",
      "vc:value": "Market Capitalization"
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
  "@id": "urn:ngm:class:market-capitalization",
  "@type": "Class",
  "label": "Market Capitalization",
  "definition": "Market Capitalization in a blockchain context is the aggregate market value of a cryptocurrency or token, computed as the circulating supply multiplied by the current unit price. It serves as a widely used proxy for the relative size, liquidity, and investor confidence of a crypto-economic network, underpinning index construction, risk categorisation, and portfolio weighting decisions by institutional participants. Critically, market capitalisation is a lagging and manipulable metric: thin order books, wash trading, and locked but counted supply can inflate the figure well beyond the value that could be liquidated in practice.",
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
    "requires": [
      {"@id": "urn:ngm:class:cryptocurrency", "label": "Cryptocurrency"},
      {"@id": "urn:ngm:class:token", "label": "Token"}
    ],
    "hasPart": [
      {"@id": "urn:ngm:class:tokenomics", "label": "Tokenomics"}
    ],
    "relatedTo": [
      {"@id": "urn:ngm:class:token-economics", "label": "Token Economics"},
      {"@id": "urn:ngm:class:liquidity-pool", "label": "Liquidity Pool"},
      {"@id": "urn:ngm:class:liquidity-provision", "label": "Liquidity Provision"},
      {"@id": "urn:ngm:class:tokenization", "label": "Tokenization"},
      {"@id": "urn:ngm:class:blockchain-economics", "label": "Blockchain Economics"}
    ],
    "enables": [
      {"@id": "urn:ngm:class:token-weighted-voting", "label": "Token-Weighted Voting"},
      {"@id": "urn:ngm:class:tokenomics-governance", "label": "Tokenomics Governance"}
    ],
    "uses": [
      {"@id": "urn:ngm:class:cryptocurrency-token", "label": "Cryptocurrency Token"}
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
  "@id": "urn:visionflow:annotation:link-resolutions:market-capitalization:776c802a9fc9",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:8bc1dc79c812fdb3f8815d65791734a572daebb80b31ee1a9252efbdf5882d1c"
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


- ### Definition
  Market Capitalization in a blockchain context is the aggregate market value of a cryptocurrency or token, computed as the circulating supply multiplied by the current unit price. It serves as a widely used proxy for the relative size, liquidity, and investor confidence of a crypto-economic network, underpinning index construction, risk categorisation, and portfolio weighting decisions by institutional participants. Critically, market capitalisation is a lagging and manipulable metric: thin order books, wash trading, and locked but counted supply can inflate the figure well beyond the value that could be liquidated in practice.

- ### Semantic Classification
  - owl-class:: blockchain:MarketCapitalization
  - owl-role:: Object
  - owl-inferred:: blockchain:VirtualObject
  - belongs-to-domain:: [[TokenEconomicsDomain]]
  - implemented-in-layer:: [[EconomicLayer]]

- ### Relationships
  - is-subclass-of:: [[Blockchain Entity]], [[EconomicMechanism]]
  - requires:: [[Cryptocurrency]], [[Token]]
  - hasPart:: [[Tokenomics]]
  - relatedTo:: [[Token Economics]], [[Liquidity Pool]], [[Liquidity Provision]], [[Tokenization]], [[Blockchain Economics]]
  - enables:: [[Token-Weighted Voting]], [[Tokenomics Governance]]
  - uses:: [[Cryptocurrency Token]]

- ### Content

  ## Class Declaration
  Declaration(Class(:MarketCapitalization))

  ## Subclass Relationships
  SubClassOf(:MarketCapitalization :EconomicMechanism)
  SubClassOf(:MarketCapitalization :BlockchainEntity)

  ## Essential Properties
  SubClassOf(:MarketCapitalization
    (ObjectSomeValuesFrom :partOf :Blockchain))

  SubClassOf(:MarketCapitalization
    (ObjectSomeValuesFrom :hasProperty :Property))

  ## Data Properties
  DataPropertyAssertion(:hasIdentifier :MarketCapitalization "BC-0118"^^xsd:string)
  DataPropertyAssertion(:hasAuthorityScore :MarketCapitalization "1.0"^^xsd:decimal)
  DataPropertyAssertion(:isFoundational :MarketCapitalization "true"^^xsd:boolean)

  ## Object Properties
  ObjectPropertyAssertion(:enablesFeature :MarketCapitalization :BlockchainFeature)
  ObjectPropertyAssertion(:relatesTo :MarketCapitalization :RelatedConcept)

  ## Annotations
  AnnotationAssertion(rdfs:label :MarketCapitalization "Market Capitalization"@en)
  AnnotationAssertion(rdfs:comment :MarketCapitalization
    "Total token market value"@en)
  AnnotationAssertion(dct:description :MarketCapitalization
    "Foundational blockchain concept with formal ontological definition"@en)
  AnnotationAssertion(:termID :MarketCapitalization "BC-0118")
  AnnotationAssertion(:priority :MarketCapitalization "1"^^xsd:integer)
  AnnotationAssertion(:category :MarketCapitalization "economic-incentive"@en)
  )
      ```

  - ## About Market Capitalization

  Market capitalisation translates a token's spot price and supply into a single number that investors and analysts use to rank networks by size. The formula is straightforward: circulating supply multiplied by current price. "Circulating" is defined narrowly—tokens locked in founder vesting schedules, team allocations under cliff periods, or protocol treasuries are often excluded, though practice varies across data providers, creating significant discrepancies between reported figures.

  In crypto markets the metric gained prominence as a sorting mechanism analogous to its equity market counterpart, and category labels—"large-cap," "mid-cap," "small-cap"—migrated wholesale from equities. However, the analogy is imperfect. Equities represent a claim on future cash flows; tokens may or may not confer economic rights. A token with a large market cap but zero transaction utility (or where utility is captured by a different fee token) may be valued purely on speculative demand.

  Market cap interacts directly with governance design in token-weighted voting systems: protocols that grant voting power proportional to holdings implicitly vest more governance authority in entities with large market-cap exposure. This creates alignment but also concentration risk, since large holders can direct protocol evolution in ways that maximise their own positions. DeFi governance forums have extensively debated mechanisms—quadratic voting, delegation, conviction voting—to reduce this concentration.

  Fully diluted valuation (FDV) extends market cap to the total maximum supply rather than circulating supply, and is considered a more conservative measure of long-term network worth. Comparing FDV to current market cap reveals the implied dilution pressure if all remaining tokens enter circulation, a key consideration for investors evaluating early-stage protocols with multi-year vesting schedules.
  - ### Standards & References
    - [[ISO/IEC 23257:2021]] - Blockchain and distributed ledger technologies
    - [[IEEE 2418.1]] - Blockchain and distributed ledger technologies
    - [[NIST NISTIR]] - Blockchain and distributed ledger technologies



  <!-- Merged from BC 0118 market capitalization.md: MetaverseDomain -->


  <!-- Merged from Market Capitalization.md: Blockchain, Tokenomics -->

- ### Provenance
  - sources:: [[ISO/IEC 23257:2021]], [[IEEE 2418.1]], [[NIST NISTIR]]
  - migration-date:: 2026-04-26T00:00:00Z
