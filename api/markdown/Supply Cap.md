public:: true

# Supply Cap
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:7fb312bc09c777c367f72baa9c312207b8b017c478c87b41adfe85d758096246",
  "@type": "Page",
  "vc:slug": "supply-cap",
  "title": "Supply Cap",
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
      "vc:value": "BC-0104"
    },
    {
      "vc:key": "preferred-term",
      "vc:value": "Supply Cap"
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
  "@id": "urn:ngm:class:supply-cap",
  "@type": "Class",
  "label": "Supply Cap",
  "definition": "A Supply Cap is a hard-coded or governance-determined upper bound on the total number of tokens or coins that will ever be issued by a blockchain protocol, creating a form of programmatic scarcity that underpins deflationary monetary policy. Bitcoin's 21 million coin cap is the canonical example, encoded in the protocol's halvening schedule and providing a predictable issuance curve. Supply caps differentiate blockchain-native assets from fiat currencies and influence long-run security models, since block rewards approach zero as the cap is neared and transaction fees must compensate.",
  "domain": "blockchain",
  "maturity": "established",
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
    "relatedTo": [
      {"@id": "urn:ngm:class:circulating-supply", "label": "Circulating Supply"},
      {"@id": "urn:ngm:class:tokenomics", "label": "Tokenomics"},
      {"@id": "urn:ngm:class:token-economics", "label": "Token Economics"},
      {"@id": "urn:ngm:class:cryptocurrency", "label": "Cryptocurrency"}
    ],
    "enables": [
      {"@id": "urn:ngm:class:bitcoin-proof-of-work-protocol-standard", "label": "Bitcoin Standard"},
      {"@id": "urn:ngm:class:bitcoin-proof-of-work-protocol-value-proposition", "label": "Bitcoin Value Proposition"}
    ],
    "requires": [
      {"@id": "urn:ngm:class:block-reward", "label": "Block Reward"},
      {"@id": "urn:ngm:class:consensus-algorithm", "label": "Consensus Algorithm"}
    ],
    "contrastsWith": [
      {"@id": "urn:ngm:class:fee-market", "label": "Fee Market"}
    ],
    "dependsOn": [
      {"@id": "urn:ngm:class:blockchain-protocol", "label": "Blockchain Protocol"}
    ]
  },
  "qualityScore": 0.8,
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
  "@id": "urn:visionflow:annotation:link-resolutions:supply-cap:776c802a9fc9",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:7fb312bc09c777c367f72baa9c312207b8b017c478c87b41adfe85d758096246"
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
  A Supply Cap is a hard-coded or governance-determined upper bound on the total number of tokens or coins that will ever be issued by a blockchain protocol, creating programmatic scarcity that underpins deflationary monetary policy. Bitcoin's 21 million coin cap is the canonical example, encoded in the protocol's halvening schedule. Supply caps differentiate blockchain-native assets from fiat currencies and influence long-run security models as block rewards approach zero.

- ### Semantic Classification
  - owl-class:: blockchain:SupplyCap
  - owl-role:: Object
  - owl-inferred:: blockchain:VirtualObject
  - belongs-to-domain:: [[TokenEconomicsDomain]]
  - implemented-in-layer:: [[EconomicLayer]]

- ### Relationships
  The Supply Cap is **related to** Circulating Supply (the currently liquid subset of issued tokens), Tokenomics (the broader economic design), Token Economics, and Cryptocurrency as the asset class it governs. It **enables** the Bitcoin Standard monetary thesis and the Bitcoin Value Proposition of sound money. It **requires** a Block Reward schedule that enforces the cap through halving and a Consensus Algorithm to uphold the rule against inflation. It **contrasts with** the Fee Market (which determines per-transaction cost independently of total supply). It **depends on** the Blockchain Protocol's immutable consensus rules to remain credible.

- ### Content

  ## Class Declaration
  Declaration(Class(:SupplyCap))

  ## Subclass Relationships
  SubClassOf(:SupplyCap :EconomicMechanism)
  SubClassOf(:SupplyCap :BlockchainEntity)

  ## Essential Properties
  SubClassOf(:SupplyCap
    (ObjectSomeValuesFrom :partOf :Blockchain))

  SubClassOf(:SupplyCap
    (ObjectSomeValuesFrom :hasProperty :Property))

  ## Data Properties
  DataPropertyAssertion(:hasIdentifier :SupplyCap "BC-0104"^^xsd:string)
  DataPropertyAssertion(:hasAuthorityScore :SupplyCap "1.0"^^xsd:decimal)
  DataPropertyAssertion(:isFoundational :SupplyCap "true"^^xsd:boolean)

  ## Object Properties
  ObjectPropertyAssertion(:enablesFeature :SupplyCap :BlockchainFeature)
  ObjectPropertyAssertion(:relatesTo :SupplyCap :RelatedConcept)

  ## Annotations
  AnnotationAssertion(rdfs:label :SupplyCap "Supply Cap"@en)
  AnnotationAssertion(rdfs:comment :SupplyCap
    "Maximum token issuance limit"@en)
  AnnotationAssertion(dct:description :SupplyCap
    "Foundational blockchain concept with formal ontological definition"@en)
  AnnotationAssertion(:termID :SupplyCap "BC-0104")
  AnnotationAssertion(:priority :SupplyCap "1"^^xsd:integer)
  AnnotationAssertion(:category :SupplyCap "economic-incentive"@en)
  )
      ```

  Supply caps encode a monetary policy decision directly into protocol consensus rules, making them enforceable without central authority. Bitcoin's 21 million cap is derived from the initial 50 BTC block subsidy halving every 210,000 blocks (approximately four years); the geometric series sum converges at 20,999,999.9769 BTC. Approximately 19.8 million BTC had been mined by mid-2025, leaving just over 1 million to be issued across halvings extending to around 2140.

  The supply cap's interaction with miner security is a subject of active debate. As the block subsidy diminishes, miners must rely increasingly on transaction fees to cover operational costs. If fee revenue proves insufficient—the "fee cliff" scenario—the mining industry could shrink dramatically, reducing the hash rate securing the network. Proponents argue that a mature, high-value Bitcoin network will generate ample fee demand; critics note that current fee markets are volatile and may not support the current scale of mining.

  Not all blockchain assets have supply caps. Ethereum removed its formal cap and targets a dynamically adjusted issuance rate; post-Merge, burn from EIP-1559 has at times exceeded issuance, making ETH net deflationary. Many DeFi tokens use governance-controlled minting, allowing the community to vote on additional issuance. The existence or absence of a supply cap is a primary parameter distinguishing monetary-policy designs across blockchain ecosystems.

  From a tokenomics perspective, a supply cap contributes to stock-to-flow ratio modelling (the ratio of existing supply to annual new issuance), which some analysts use to forecast price behaviour, though empirical support for such models remains contested.

- ### Provenance
  - sources:: [[ISO/IEC 23257:2021]], [[IEEE 2418.1]], [[NIST NISTIR]]
  - migration-date:: 2026-04-26T00:00:00Z
