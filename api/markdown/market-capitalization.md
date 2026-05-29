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