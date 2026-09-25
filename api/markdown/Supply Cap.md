A Supply Cap is a hard-coded or governance-determined upper bound on the total number of tokens or coins that will ever be issued by a blockchain protocol, creating a form of programmatic scarcity that underpins deflationary monetary policy. Bitcoin's 21 million coin cap is the canonical example, encoded in the protocol's halvening schedule and providing a predictable issuance curve. Supply caps differentiate blockchain-native assets from fiat currencies and influence long-run security models, since block rewards approach zero as the cap is neared and transaction fees must compensate.

A Supply Cap is a hard-coded or governance-determined upper bound on the total number of tokens or coins that will ever be issued by a blockchain protocol, creating programmatic scarcity that underpins deflationary monetary policy. Bitcoin's 21 million coin cap is the canonical example, encoded in the protocol's halvening schedule. Supply caps differentiate blockchain-native assets from fiat currencies and influence long-run security models as block rewards approach zero.

### Semantic Classification

### Content

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

Supply caps encode a monetary policy decision directly into protocol consensus rules, making them enforceable without central authority. Bitcoin's 21 million cap is derived from the initial 50 BTC block subsidy halving every 210,000 blocks (approximately four years); the geometric series sum converges at 20,999,999.9769 BTC. Approximately 19.8 million BTC had been mined by mid-2025, leaving just over 1 million to be issued across halvings extending to around 2140.

The supply cap's interaction with miner security is a subject of active debate. As the block subsidy diminishes, miners must rely increasingly on transaction fees to cover operational costs. If fee revenue proves insufficient—the "fee cliff" scenario—the mining industry could shrink dramatically, reducing the hash rate securing the network. Proponents argue that a mature, high-value Bitcoin network will generate ample fee demand; critics note that current fee markets are volatile and may not support the current scale of mining.

Not all blockchain assets have supply caps. Ethereum removed its formal cap and targets a dynamically adjusted issuance rate; post-Merge, burn from EIP-1559 has at times exceeded issuance, making ETH net deflationary. Many DeFi tokens use governance-controlled minting, allowing the community to vote on additional issuance. The existence or absence of a supply cap is a primary parameter distinguishing monetary-policy designs across blockchain ecosystems.

From a tokenomics perspective, a supply cap contributes to stock-to-flow ratio modelling (the ratio of existing supply to annual new issuance), which some analysts use to forecast price behaviour, though empirical support for such models remains contested.

### Provenance

