A Native Token is the primary cryptocurrency issued and managed directly by a blockchain protocol, used to pay transaction fees, reward validators or miners, and serve as the base unit of value within the network's economic system. Unlike tokens created via smart contracts, native tokens are settled at the protocol layer and are intrinsic to chain operation.

A Native Token is the primary cryptocurrency issued and managed directly by a blockchain protocol, used to pay transaction fees, reward validators or miners, and serve as the base unit of value within the network's economic system. Unlike tokens created via smart contracts, native tokens are settled at the protocol layer and are intrinsic to chain operation.

### Semantic Classification

### Content

## Class Declaration
Declaration(Class(:NativeToken))

## Subclass Relationships
SubClassOf(:NativeToken :EconomicMechanism)
SubClassOf(:NativeToken :BlockchainEntity)

## Essential Properties
SubClassOf(:NativeToken
  (ObjectSomeValuesFrom :partOf :Blockchain))

SubClassOf(:NativeToken
  (ObjectSomeValuesFrom :hasProperty :Property))

## Data Properties
DataPropertyAssertion(:hasIdentifier :NativeToken "BC-0099"^^xsd:string)
DataPropertyAssertion(:hasAuthorityScore :NativeToken "1.0"^^xsd:decimal)
DataPropertyAssertion(:isFoundational :NativeToken "true"^^xsd:boolean)

## Object Properties
ObjectPropertyAssertion(:enablesFeature :NativeToken :BlockchainFeature)
ObjectPropertyAssertion(:relatesTo :NativeToken :RelatedConcept)

## Annotations
AnnotationAssertion(rdfs:label :NativeToken "Native Token"@en)
AnnotationAssertion(rdfs:comment :NativeToken
  "Blockchain-native cryptocurrency"@en)
AnnotationAssertion(dct:description :NativeToken
  "Foundational blockchain concept with formal ontological definition"@en)
AnnotationAssertion(:termID :NativeToken "BC-0099")
AnnotationAssertion(:priority :NativeToken "1"^^xsd:integer)
AnnotationAssertion(:category :NativeToken "economic-incentive"@en)
)

#### Role in the Protocol Economy
Native tokens fulfil three interconnected roles: they act as the medium of exchange for paying gas or transaction fees (preventing spam and compensating validators), as the reward mechanism incentivising block production (aligning validator or miner interests with network security), and as the base collateral asset in DeFi protocols built on the chain. Without a functional native token, the security budget of a proof-based blockchain collapses.

#### Monetary Policy and Supply Design
Native token supply policies range from strictly fixed (Bitcoin's 21-million hard cap, creating predictable long-run scarcity) to algorithmically managed (Ethereum's post-EIP-1559 base-fee burn offset against staking issuance, targeting mild net deflationary pressure under typical load). Supply caps create Deflationary Token dynamics; sustained issuance without commensurate burning produces Inflationary Token dynamics. The choice of monetary policy is one of the most consequential tokenomics decisions a protocol designer makes.

#### Distinction from Token Standards
Smart-contract-issued tokens (ERC-20, ERC-721, ERC-1155) depend on the native token of their host chain for transaction fee payment but are not themselves protocol-native. Their supply, issuance, and transfer rules are encoded in contract storage and can be modified by contract owners, whereas native token rules can only change through a protocol upgrade requiring broad validator consensus. This distinction matters for trust assumptions: native tokens inherit the security of the base layer consensus.

#### Governance and Fee Markets
EIP-1559 on Ethereum introduced a split between a burned base fee (priced by the protocol) and an optional priority fee (miner/validator tip), aligning fee-market efficiency with native token deflationary pressure. Native tokens are also the typical unit for staking and slashing in Proof of Stake networks, creating a direct link between economic stake and consensus security.

### Provenance

