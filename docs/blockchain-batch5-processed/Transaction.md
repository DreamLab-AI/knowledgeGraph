- ### OntologyBlock
  id:: transaction-ontology
  collapsed:: true

  - **Identification**

    - domain-prefix:: BC

    - sequence-number:: 0006

    - filename-history:: ["BC-0006-transaction.md"]
    - public-access:: true
    - ontology:: true
    - term-id:: BC-0006
    - preferred-term:: Transaction
    - source-domain:: blockchain
    - status:: complete
    - version:: 1.0.0
    - last-updated:: 2025-10-28

  - **Definition**
    - definition:: State-changing operation on blockchain within blockchain systems, providing essential functionality for distributed ledger technology operations and properties.
    - maturity:: mature
    - source:: [[ISO/IEC 23257:2021]], [[IEEE 2418.1]], [[NIST NISTIR]]
    - authority-score:: 0.95

  - **Semantic Classification**
    - owl:class:: bc:Transaction
    - owl:physicality:: VirtualEntity
    - owl:role:: Object
    - owl:inferred-class:: bc:VirtualObject
    - belongsToDomain:: [[BlockchainDomain]]
    - implementedInLayer:: [[ConceptualLayer]]

  - #### Relationships
    id:: transaction-relationships
    - is-subclass-of:: [[Blockchain Entity]], [[DistributedDataStructure]]

  - #### OWL Axioms
    id:: transaction-owl-axioms
    collapsed:: true
    - ```clojure
      Prefix(:=<http://metaverse-ontology.org/blockchain#>)
Prefix(owl:=<http://www.w3.org/2002/07/owl#>)
Prefix(rdf:=<http://www.w3.org/1999/02/22-rdf-syntax-ns#>)
Prefix(xml:=<http://www.w3.org/XML/1998/namespace>)
Prefix(xsd:=<http://www.w3.org/2001/XMLSchema#>)
Prefix(rdfs:=<http://www.w3.org/2000/01/rdf-schema#>)
Prefix(dct:=<http://purl.org/dc/terms/>)

Ontology(<http://metaverse-ontology.org/blockchain/BC-0006>
  Import(<http://metaverse-ontology.org/blockchain/core>)

  ## Class Declaration
  Declaration(Class(:Transaction))

  ## Subclass Relationships
  SubClassOf(:Transaction :DistributedDataStructure)
  SubClassOf(:Transaction :BlockchainEntity)

  ## Essential Properties
  SubClassOf(:Transaction
    (ObjectSomeValuesFrom :partOf :Blockchain))

  SubClassOf(:Transaction
    (ObjectSomeValuesFrom :hasProperty :Property))

  ## Data Properties
  DataPropertyAssertion(:hasIdentifier :Transaction "BC-0006"^^xsd:string)
  DataPropertyAssertion(:hasAuthorityScore :Transaction "1.0"^^xsd:decimal)
  DataPropertyAssertion(:isFoundational :Transaction "true"^^xsd:boolean)

  ## Object Properties
  ObjectPropertyAssertion(:enablesFeature :Transaction :BlockchainFeature)
  ObjectPropertyAssertion(:relatesTo :Transaction :RelatedConcept)

  ## Annotations
  AnnotationAssertion(rdfs:label :Transaction "Transaction"@en)
  AnnotationAssertion(rdfs:comment :Transaction
    "State-changing operation on blockchain"@en)
  AnnotationAssertion(dct:description :Transaction
    "Foundational blockchain concept with formal ontological definition"@en)
  AnnotationAssertion(:termID :Transaction "BC-0006")
  AnnotationAssertion(:priority :Transaction "1"^^xsd:integer)
  AnnotationAssertion(:category :Transaction "blockchain-fundamentals"@en)
)
      ```

- ## About Transaction
  id:: transaction-about

  - State-changing operation on blockchain within blockchain systems, providing essential functionality for distributed ledger technology operations and properties.
  -
  - ### Key Characteristics
    id:: transaction-characteristics
    - 1. **Definitional Property**: Core defining characteristic
    - 2. **Functional Property**: Operational behavior
    - 3. **Structural Property**: Compositional elements
    - 4. **Security Property**: Security guarantees provided
    - 5. **Performance Property**: Efficiency considerations
  -
  - ### Technical Components
    id:: transaction-components
    - **Implementation**: How concept is realized technically
    - **Verification**: Methods for validating correctness
    - **Interaction**: Relationships with other components
    - **Constraints**: Technical limitations and requirements
  -
  - ### Use Cases
    id:: transaction-use-cases
    - **1. Core Blockchain Operation**
    - **Application**: Fundamental blockchain functionality
    - **Example**: Practical implementation in major blockchains
    - **Requirements**: Technical prerequisites
    - **Benefits**: Value provided to blockchain systems
  -
  - ### Standards & References
    id:: transaction-standards
    - [[ISO/IEC 23257:2021]] - Blockchain and distributed ledger technologies
    - [[IEEE 2418.1]] - Blockchain and distributed ledger technologies
    - [[NIST NISTIR]] - Blockchain and distributed ledger technologies
  -

	- ### Fediment
id:: 661acc10-64a6-4a52-bea0-41f7af6e6f60
		- Fedimint (short for "Federated Mint") is a protocol that aims to provide a scalable and privacy-preserving solution for using Bitcoin in everyday transactions. It combines the concept of federated sidechains with the privacy features of confidential transactions.
	 - Federated Sidechains: Fedimint uses federated sidechains, which are separate blockchain networks that are anchored to the main Bitcoin blockchain. These sidechains allow for faster and cheaper transactions while still benefiting from the security of the Bitcoin network.
	 - Confidential Transactions: The protocol utilizes confidential transactions, which hide the amounts being transferred while still allowing the network to verify the validity of the transactions. This enhances privacy for users.
	 - Federated Mints: In Fedimint, "mints" are entities that issue tokens on the sidechain. These mints are federated, meaning they are operated by a group of independent parties who jointly control the issuance and redemption of tokens.
	 - Blind Signatures: Fedimint employs blind signatures, a cryptographic technique that allows users to request signatures on their transactions without revealing the content of the transaction to the signer. This further enhances privacy.
	 - Trustless Setup: The protocol is designed to minimize the trust required in the mints. Users can verify the solvency of the mints and withdraw their funds from the sidechain to the main Bitcoin blockchain at any time.
		- Benefits of Fedimint:
	 - Improved scalability and lower transaction costs compared to the main Bitcoin network.
	 - Enhanced privacy for users through confidential transactions and blind signatures.
	 - Increased accessibility for everyday Bitcoin transactions.
	 - Reduced trust requirements through the federated model and the ability to withdraw funds to the main chain.
		- Overall, Fedimint aims to provide a layer-2 solution for Bitcoin that improves scalability, privacy, and usability while leveraging the security of the underlying Bitcoin blockchain.
		-

- # About Bitcoin
	- The first blockchain was the Bitcoin network, [[Nakamoto 2008]] some two decades after Haber et al. first described the idea. [[Haber 1990]] Prior to Bitcoin, these structures were called ‘timechains.’ [[Nakamoto 2018]] It can be considered a triple-entry bookkeeping system, [[Ijiri 1986; Faccia 2019]] the first of its kind, integrating a ‘provable’ timestamp with a transaction ledger, solving the “double spend problem.” [[Chohan 2021; Perez 2019; Grunspan 2018]] Some see this as the first major innovation in ledger technology since double entry was codified in Venice in fourteen seventy-five. [[Sangster 2015]]
	- It was created pseudonymously by an [individual](https://open.spotify.com/episode/6bUyu2izFznSqdb6bbGLr0) calling themselves ‘Satoshi Nakamoto’ in 2009, as a direct response to the perceived mishandling of the 2008 global financial crisis, [[nakamoto2018]] with the stated aim of challenging the status quo, with an [uncensorable](https://world.hey.com/dhh/i-was-wrong-we-need-crypto-587ccb03) technology, to create money which could not be [debased by inflation policy](http://p2pfoundation.ning.com/forum/topics/bitcoin-open-source), and outside of the [politically captured](https://www.coindesk.com/layer2/2022/05/04/matt-taibbi-paypals-deplatforming-and-the-case-for-crypto/) fintech incumbents. It’s interesting to note that the narrative around the use case for Bitcoin has [shifted over its lifetime](https://uncommoncore.co/visions-of-bitcoin-how-major-bitcoin-narratives-changed-over-time/).
	- It remains persistently associated with the political trope of freedom, Libertarians, and the [[cypherpunk]] movement that spawned it, as seen in this monologue from avowed libertarian Silk Road founder Ross Ulbricht (freed by President Trump in 2025 after lobbying from the Bitcoin industry).
	- {{video https://www.youtube.com/watch?v=zHMVyr5NjEY}}
	- The [“genesis block”](https://en.bitcoin.it/wiki/Genesis_block) which was hard-coded at the beginning of the ‘chain’ contains text from The Times newspaper detailing the second bank bailout.
	- There will only ever be ([just short of](https://blog.amberdata.io/why-the-bitcoin-supply-will-never-reach-21-million)) 21 million bitcoins issued, of which around 19.7 million have already been minted, and around 4 million lost forever. This ‘hard money’ absolute scarcity is a strong component of the Bitcoin meme landscape. These are basically arbitrary figures though; a combination of the issuance schedule, and an [‘educated guess’](https://plan99.net/~mike/satoshi-emails/thread1.html) by Nakamoto:[[nakamoto2018]]
		- *”My choice for the number of coins and distribution schedule was an educated guess. It was a difficult choice, because once the network is going it’s locked in and we’re stuck with it. I wanted to pick something that would make prices similar to existing currencies, but without knowing the future, that’s very hard. I ended up picking something in the middle. If Bitcoin remains a small niche, it’ll be worth less per unit than existing currencies. If you imagine it being used for some fraction of world commerce, then there’s only going to be 21 million coins for the whole world, so it would be worth much more per unit.”*
	- Digital scarcity is incredibly important and is explained well by software engineer Hillibrand in a podcast (this text is paraphrased): “Digital scarcity is an interesting concept that was well explained by German economist Guido Hülsmann in his book “The Ethics of Money Production,” [[hulsmann2008ethics]] published in 2007. Hülsmann stated that an economic good that is defined entirely in terms of bits and bytes is unlikely ever to be produced spontaneously on a free market, and at the time, he was right. However, the emergence of Bitcoin would soon prove that digital scarcity could indeed be achieved. Hülsmann noted that an economic good must be scarce and rivalrous, meaning there is a potential for conflict over who can utilize the resource. For example, air is abundant but still considered scarce as its availability can be limited in specific situations, leading to conflicts over its use. The concept of digital scarcity is built on the idea that information, which is fundamentally not scarce, can be made scarce through specific mechanisms. Bitcoin, for instance, addresses the double-spending problem, where a digital token could be spent more than once, by establishing a decentralized network that prevents the same coin from being used in multiple transactions. Nakamoto devised a system that allows users to establish scarcity and rivalrousness in cyberspace without relying on a single trusted third party. Instead of relying on a central authority, like a government, to determine the validity of transactions, Bitcoin relies on a network of computers known as “full nodes” that verify and enforce a set of rules. This decentralized system enables the creation of digital goods that are both scarce and rivalrous, which was previously thought to be impossible.”
	- In theory, there is no [barrier to access](https://www.forbes.com/sites/peterizzo/2021/09/29/against-cryptocurrency-the-ethical-argument-for-bitcoin-maximalism/?), and [equality of opportunity](https://www.coindesk.com/layer2/2022/02/16/why-bitcoin-is-a-tool-for-social-justice/) to accumulate and save over long periods. This is not true of chains and tokens, which lock up some of their value for seed investors to cash out later. None of the blockchains since are decentralized in the same way.[[selvam2021blockchain]] Bitcoin was probably a [singular event](https://danhedl.medium.com/bitcoins-distribution-was-fair-e2ef7bbbc892).
	- Each Bitcoin can be divided into 100 million satoshis (sats), so anyone buying into Bitcoin can buy a thousandth of a pound, assuming they can find someone willing to transact that with them.
	- Satoshi Nakamoto (the name of the publishing entity) [disappeared from the forums](https://bitcoinmagazine.com/technical/what-happened-when-bitcoin-creator-satoshi-nakamoto-disappeared) forever in 2010. Bitcoin has the marks of cypherpunks and anarcho-capitalism. The IMF has recently conceded that Bitcoin [poses a risk](https://blogs.imf.org/2022/01/11/crypto-prices-move-more-in-sync-with-stocks-posing-new-risks/) to traditional financial systems, so it could be argued that it is succeeding in this original aim. There is a detailed section on [[Digital Asset Risks]] in these pages.
	- Although there were some earlier experiments (hashcash, b-money etc.), Bitcoin is the first viably decentralized ‘cryptocurrency’; the network is used to [store economic value](https://www.aier.org/article/why-does-bitcoin-have-value/) because it is judged to be secure and trusted. It is a singular event in that it became established at scale, such that it could be seen to be a fully distributed system, without a controlling entity. This is the differentiated trust model previously mentioned. This relative security is the specific unique selling point of the network. It is many times more secure than all the networks which came after based on a like-for-like comparison of [transaction ‘confirmations’](https://howmanyconfs.com/). This network effect of Bitcoin is a compounding feature, attracting value through the security of the system. It is deliberately more conservative and feature-poor, preferring instead to [add to its feature set](https://bips.xyz/) slowly, preserving the integrity of the value invested in it over the last decade. At the time of writing, it is a [top quartile](https://fiatmarketcap.com/) largest global currency and has settled over [$19 trillion dollars](https://cointelegraph.com/news/19-trillion-transactions-settled-bitcoin-network-2024) in 2024, though Makarov et al. contest this, citing network overheads and speculation.[[makarov2021blockchain]] Institution-grade ‘exchange tradable funds’ or [[Bitcoin ETF]] that allow investment in Bitcoin are available throughout the world, seeing staggering popularity and immediately breaking all records, and the native asset can be bought by the public easily through apps in all but a handful of countries.
	- ![image](./assets/96342a08b8cb63131164317415a96f5d4852b12d.jpg)
	- {{twitter https://twitter.com/glxyresearch/status/1469039427028664320?}}
	- [Twitter link to the render loading below](https://twitter.com/_Checkmatey_/status/1699581893078085705)
	  {{twitter https://twitter.com/_Checkmatey_/status/1699581893078085705}}
	- Only around 7 transactions per second can be settled on Bitcoin. The native protocol does not scale well, and this is an inherent trade-off as described by Croman et al. in their positioning paper on public blockchains.[[croman2016scaling]] Over time, competition for the limited transaction bandwidth drives up the price to use the network. This effectively prices out small transactions, even locking up some value below what is termed the ’[dust limit](https://github.com/bitcoin/bitcoin/blob/v0.10.0rc3/src/primitives/transaction.h#L137)’ of unspent transactions too small to ever move again.[[delgado2018analysis]]
	- It is already a mature ecosystem, with [enterprise-grade software](https://www.fortris.com/) stacks, and is seeing adoption as a [corporate treasury asset](https://bitcointreasuries.net/).

		- #### **2. Payment Transaction Sequence**
			- ```mermaid
			  
			  sequenceDiagram
			    participant Agent
			    participant SyntheticStablecoinSystem
			    participant BitcoinLightningNetwork
			    participant LoggingSystem
			  
			    Agent->>SyntheticStablecoinSystem: Check balance and convert if needed
			    SyntheticStablecoinSystem-->>Agent: Balance or conversion result
			  
			    alt Conversion Needed
			        Agent->>SyntheticStablecoinSystem: Execute conversion
			        SyntheticStablecoinSystem-->>Agent: Conversion confirmation
			    else No Conversion Needed
			        Agent->>BitcoinLightningNetwork: Initiate payment
			        BitcoinLightningNetwork-->>Agent: Payment receipt
			    end
			  
			    Agent->>LoggingSystem: Log transaction details
			  ```
			  
			  ---

	- ### 5. The Operational Framework: Private Contract Negotiation and Enforcement
		- Combining these protocols creates a robust framework for autonomous commercial activity between agents.
		- 1.  **Identity and Discovery:** AI agents and humans establish their identities using Nostr DIDs. They can discover each other and communicate via the decentralized network of Nostr relays.
		- 2.  **Private Contract Negotiation:** Two or more agents negotiate the terms of a service or exchange using encrypted direct messages on Nostr. The contract terms are stored privately.
		- 3.  **Data Pods and Escrow Setup:** The contract data (e.g., deliverables, payment conditions) is hashed and stored in a private, decentralized data store, akin to a [[Solid-Lite]]. The contract is structured as an RGB smart contract, which defines an escrow condition tied to a **single-use seal** on a Bitcoin UTXO.
		- 4.  **Execution and Payment:**
		    *   The service-providing agent performs the agreed-upon task.
		    *   Upon completion, it provides proof of execution to the client agent.
		    *   The client agent verifies the proof and co-signs the transaction that "closes" the single-use seal, thereby unlocking the escrowed payment (e.g., USDT on RGB) and transferring it to the provider over the Lightning Network.
		- 5.  **Final Settlement:** The cryptographic commitment for this state change is anchored to the Bitcoin blockchain, providing final, immutable proof of the transaction's completion without revealing any of the private contract details.

		- ## Addresses & UTXOs
	 - Ethereum has addresses which transactions flow in and out of. This issynonymous to a bank account number and so makes intuitive sense tousers of banks. This is not the case in Bitcoin.
	 - Bitcoin is a UTXO model blockchain. UTXO stands for unspent transactionoutput, and these are ‘portions’ of Bitcoin created and destroyed asvalue changes hands (through the action of cryptographic keys). They arethe basis of the evolving ledger. This process is described well byRajarshi Maitra in [thispost](https://medium.com/bitbees/what-the-heck-is-utxo-ca68f2651819).
	 - it“Every Transaction input consists of a pointer and an unlocking key.The pointer points back to a previous transaction output. And the key isused to unlock the previous output it points to. Every time an output issuccessfully unlocked by an input, it is marked inside the blockchaindatabase as ‘spent’. Thus you can think of a transaction as an abstract“action” that defines unlocking some previous outputs, and creating newoutputs.  These new outputs can again be referred by a new transaction input. AUTXO or ‘Unspent Transaction Output’ is simply all those outputs, whichare yet to be unlocked by an input.  Once an output is unlocked, imagine they are removed from circulatingsupply and new outputs take their place. Thus the sum of the value ofunlocked outputs will be always equal to the sum of values of newlycreated outputs (ignoring transaction fees for now) and the totalcirculating supply of bitcoins remains constant.”
	 - Fresh UTXOs are created as coinbase transactions, rewarded to miners whosuccessfully mine a block. These can be spent to multiple output asnormal. This is how the supply increases over time.

- # About Bitcoin
	- The first blockchain was the Bitcoin network, [[Nakamoto 2008]] some two decades after Haber et al. first described the idea. [[Haber 1990]] Prior to Bitcoin, these structures were called ‘timechains.’ [[Nakamoto 2018]] It can be considered a triple-entry bookkeeping system, [[Ijiri 1986; Faccia 2019]] the first of its kind, integrating a ‘provable’ timestamp with a transaction ledger, solving the “double spend problem.” [[Chohan 2021; Perez 2019; Grunspan 2018]] Some see this as the first major innovation in ledger technology since double entry was codified in Venice in fourteen seventy-five. [[Sangster 2015]]
	- It was created pseudonymously by an [individual](https://open.spotify.com/episode/6bUyu2izFznSqdb6bbGLr0) calling themselves ‘Satoshi Nakamoto’ in 2009, as a direct response to the perceived mishandling of the 2008 global financial crisis, [[nakamoto2018]] with the stated aim of challenging the status quo, with an [uncensorable](https://world.hey.com/dhh/i-was-wrong-we-need-crypto-587ccb03) technology, to create money which could not be [debased by inflation policy](http://p2pfoundation.ning.com/forum/topics/bitcoin-open-source), and outside of the [politically captured](https://www.coindesk.com/layer2/2022/05/04/matt-taibbi-paypals-deplatforming-and-the-case-for-crypto/) fintech incumbents. It’s interesting to note that the narrative around the use case for Bitcoin has [shifted over its lifetime](https://uncommoncore.co/visions-of-bitcoin-how-major-bitcoin-narratives-changed-over-time/).
	- It remains persistently associated with the political trope of freedom, Libertarians, and the [[cypherpunk]] movement that spawned it, as seen in this monologue from avowed libertarian Silk Road founder Ross Ulbricht (freed by President Trump in 2025 after lobbying from the Bitcoin industry).
	- {{video https://www.youtube.com/watch?v=zHMVyr5NjEY}}
	- The [“genesis block”](https://en.bitcoin.it/wiki/Genesis_block) which was hard-coded at the beginning of the ‘chain’ contains text from The Times newspaper detailing the second bank bailout.
	- There will only ever be ([just short of](https://blog.amberdata.io/why-the-bitcoin-supply-will-never-reach-21-million)) 21 million bitcoins issued, of which around 19.7 million have already been minted, and around 4 million lost forever. This ‘hard money’ absolute scarcity is a strong component of the Bitcoin meme landscape. These are basically arbitrary figures though; a combination of the issuance schedule, and an [‘educated guess’](https://plan99.net/~mike/satoshi-emails/thread1.html) by Nakamoto:[[nakamoto2018]]
		- *”My choice for the number of coins and distribution schedule was an educated guess. It was a difficult choice, because once the network is going it’s locked in and we’re stuck with it. I wanted to pick something that would make prices similar to existing currencies, but without knowing the future, that’s very hard. I ended up picking something in the middle. If Bitcoin remains a small niche, it’ll be worth less per unit than existing currencies. If you imagine it being used for some fraction of world commerce, then there’s only going to be 21 million coins for the whole world, so it would be worth much more per unit.”*
	- Digital scarcity is incredibly important and is explained well by software engineer Hillibrand in a podcast (this text is paraphrased): “Digital scarcity is an interesting concept that was well explained by German economist Guido Hülsmann in his book “The Ethics of Money Production,” [[hulsmann2008ethics]] published in 2007. Hülsmann stated that an economic good that is defined entirely in terms of bits and bytes is unlikely ever to be produced spontaneously on a free market, and at the time, he was right. However, the emergence of Bitcoin would soon prove that digital scarcity could indeed be achieved. Hülsmann noted that an economic good must be scarce and rivalrous, meaning there is a potential for conflict over who can utilize the resource. For example, air is abundant but still considered scarce as its availability can be limited in specific situations, leading to conflicts over its use. The concept of digital scarcity is built on the idea that information, which is fundamentally not scarce, can be made scarce through specific mechanisms. Bitcoin, for instance, addresses the double-spending problem, where a digital token could be spent more than once, by establishing a decentralized network that prevents the same coin from being used in multiple transactions. Nakamoto devised a system that allows users to establish scarcity and rivalrousness in cyberspace without relying on a single trusted third party. Instead of relying on a central authority, like a government, to determine the validity of transactions, Bitcoin relies on a network of computers known as “full nodes” that verify and enforce a set of rules. This decentralized system enables the creation of digital goods that are both scarce and rivalrous, which was previously thought to be impossible.”
	- In theory, there is no [barrier to access](https://www.forbes.com/sites/peterizzo/2021/09/29/against-cryptocurrency-the-ethical-argument-for-bitcoin-maximalism/?), and [equality of opportunity](https://www.coindesk.com/layer2/2022/02/16/why-bitcoin-is-a-tool-for-social-justice/) to accumulate and save over long periods. This is not true of chains and tokens, which lock up some of their value for seed investors to cash out later. None of the blockchains since are decentralized in the same way.[[selvam2021blockchain]] Bitcoin was probably a [singular event](https://danhedl.medium.com/bitcoins-distribution-was-fair-e2ef7bbbc892).
	- Each Bitcoin can be divided into 100 million satoshis (sats), so anyone buying into Bitcoin can buy a thousandth of a pound, assuming they can find someone willing to transact that with them.
	- Satoshi Nakamoto (the name of the publishing entity) [disappeared from the forums](https://bitcoinmagazine.com/technical/what-happened-when-bitcoin-creator-satoshi-nakamoto-disappeared) forever in 2010. Bitcoin has the marks of cypherpunks and anarcho-capitalism. The IMF has recently conceded that Bitcoin [poses a risk](https://blogs.imf.org/2022/01/11/crypto-prices-move-more-in-sync-with-stocks-posing-new-risks/) to traditional financial systems, so it could be argued that it is succeeding in this original aim. There is a detailed section on [[Digital Asset Risks]] in these pages.
	- Although there were some earlier experiments (hashcash, b-money etc.), Bitcoin is the first viably decentralized ‘cryptocurrency’; the network is used to [store economic value](https://www.aier.org/article/why-does-bitcoin-have-value/) because it is judged to be secure and trusted. It is a singular event in that it became established at scale, such that it could be seen to be a fully distributed system, without a controlling entity. This is the differentiated trust model previously mentioned. This relative security is the specific unique selling point of the network. It is many times more secure than all the networks which came after based on a like-for-like comparison of [transaction ‘confirmations’](https://howmanyconfs.com/). This network effect of Bitcoin is a compounding feature, attracting value through the security of the system. It is deliberately more conservative and feature-poor, preferring instead to [add to its feature set](https://bips.xyz/) slowly, preserving the integrity of the value invested in it over the last decade. At the time of writing, it is a [top quartile](https://fiatmarketcap.com/) largest global currency and has settled over [$19 trillion dollars](https://cointelegraph.com/news/19-trillion-transactions-settled-bitcoin-network-2024) in 2024, though Makarov et al. contest this, citing network overheads and speculation.[[makarov2021blockchain]] Institution-grade ‘exchange tradable funds’ or [[Bitcoin ETF]] that allow investment in Bitcoin are available throughout the world, seeing staggering popularity and immediately breaking all records, and the native asset can be bought by the public easily through apps in all but a handful of countries.
	- ![image](./assets/96342a08b8cb63131164317415a96f5d4852b12d.jpg)
	- {{twitter https://twitter.com/glxyresearch/status/1469039427028664320?}}
	- [Twitter link to the render loading below](https://twitter.com/_Checkmatey_/status/1699581893078085705)
	  {{twitter https://twitter.com/_Checkmatey_/status/1699581893078085705}}
	- Only around 7 transactions per second can be settled on Bitcoin. The native protocol does not scale well, and this is an inherent trade-off as described by Croman et al. in their positioning paper on public blockchains.[[croman2016scaling]] Over time, competition for the limited transaction bandwidth drives up the price to use the network. This effectively prices out small transactions, even locking up some value below what is termed the ’[dust limit](https://github.com/bitcoin/bitcoin/blob/v0.10.0rc3/src/primitives/transaction.h#L137)’ of unspent transactions too small to ever move again.[[delgado2018analysis]]
	- It is already a mature ecosystem, with [enterprise-grade software](https://www.fortris.com/) stacks, and is seeing adoption as a [corporate treasury asset](https://bitcointreasuries.net/).

		- ### Manipulation of price or the network
			- Bitcoin is still young and illiquid enough to be highly manipulable. Imagine for instance if a major organisation or nation state wished to accumulate a significant amount of the asset, but would prefer a lower price.
			- There is an unknown level of exposure to risk from centralised mining. If a few of the major mining pools were simultaneously infiltrated by a nation state actor then it might be possible to engineer a ‘deep re-org’ of a large transaction. This would be dealt with quickly and almost certainly be a transient attack, but the damage to the narrative might be substantial. The proposed solution to this known vulnerability is called [‘Stratum V2’](https://braiins.com/stratum-v2) in which the transaction in the blocks would be organised by pool miners or their delegates, with an increase in efficiency as a driving incentive. A similar vulnerability exists in the centralisation at the level of internet service providers.[[apostolaki2017hijacking]] This or some other flaw might lead to a selling cascade. Nobody knows just how vulnerable to selling cascades Bitcoin might be against a really serious challenge by an empowered actor, but it’s already high volatility is suggestive o frisk.

						- ### Instantiation of Objects
							- **Object Creation**:
								- Each digital object or asset is instantiated as an `RGBAsset` class instance within the metaverse. This includes assigning a unique `ContractId` and `SchemaId` which are crucial for defining the asset's properties and the rules governing its behavior according to the RGB protocol.
								- An initial state of the asset is defined using `Assignments` to bind certain rights or properties to the asset, such as ownership or usage rights. This state is embedded within the asset's genesis transaction but doesn't require immediate blockchain commitment.
							- **Asset Registration**:
								- Upon creation, the asset's initial state is recorded in a genesis block of the RGB schema. However, instead of committing this to the blockchain directly, the state can be stored off-chain (e.g., in a secure distributed file system or a database) to enhance privacy and reduce transaction costs.

						- ### Transfer of Objects
							- **Defining Transfer Operations**:
								- Transfers of assets are managed through `RGBContractOperation`, which includes `Inputs` (references to previous states), `Outputs` (new states or changes), and possibly `Redeems` (specific rights being exercised).
								- The transfer operation details how the asset's ownership or other properties change, using `Seal Definitions` to lock and unlock access to the asset.
							- **Executing Transfers**:
								- To execute a transfer, the new state created by the transfer operation is prepared, detailing how rights and responsibilities are reassigned from one party to another. This often involves updating the `Owned State` to reflect new ownership.
								- Instead of committing each transaction to the blockchain, the RGB protocol allows for state transitions to be confirmed off-chain until a significant event requires blockchain validation. This approach saves on transaction fees and minimizes public ledger exposure.
							- **State Commitments**:
								- When necessary, state transitions can be committed to the blockchain using minimal data footprints. This is done by embedding a cryptographic commitment to the state within a standard Bitcoin transaction, leveraging RGB's ability to bind state to Bitcoin UTXOs through client-side validation.

- # The Evolution and Future of Micropayments
	- This excellent [article](https://bitcoinmagazine.com/technical/szabos-micropayments-and-mental-transaction-costs-25-years-later) talks about something which is spread across this knowledge corpus; the integration of AI Agents and distributed infrastructure for ID and payments and messaging.
		- Nick Szabo's 1999 paper [Micropayments and Mental Transaction Costs](https://nakamotoinstitute.org/micropayments-and-mental-transaction-costs/) highlighted the issue of "mental transaction costs" associated with micropayments.
			- Szabo argued that the cognitive burden of deciding whether something is worth paying for outweighs the technological savings of micropayments.
			- Uncertain cash flows contribute to the cognitive burden of micropayments, as consumers need to plan and budget more precisely.
			- Consumers prefer flat fees and bundled services due to the mental relief of avoiding constant micro-decisions.
			- The rise of ad-supported "free" services and bundled subscription services like Medium reduced the cognitive load on consumers.
			- "Intelligent agents" were proposed as a solution to automate micro-decisions, but building a trustworthy and effective agent has been challenging.
		- Improved user interfaces have reduced some friction, but the fundamental cognitive overhead of deciding whether a purchase is worthwhile remains.
		- Blockchain technology, specifically the Lightning Network, aims to reduce technical transaction costs, but doesn't fully address the psychological barriers.
		- Tips and donations can work as micropayments because they are voluntary and driven by gratitude rather than a sense of obligation.
		- AI tools could potentially automate micropayment decisions within set budgets, but building trust in the AI is a hurdle.
		- Automated rules and AI can help users set broad preferences and delegate micro-decisions to intelligent agents.
	- Additional refs
		- Fishburn, P., Odlyzko, A. M., and Siders, R. C. (1997) “[Fixed fee versus unit pricing for information goods](https://journals.uic.edu/ojs/index.php/fm/article/download/535/456)”
		- Nielsen, J. (1998) “[The Case for Micropayments](https://www.nngroup.com/articles/the-case-for-micropayments/)”
		- Rivest, R. L. and Shamir, A. (1996) “[PayWord and MicroMint—Two Simple Micropayment Schemes](https://people.csail.mit.edu/rivest/pubs/RS96.pdf)”

	- ### Minimising Cognitive Load
		- [[Nick Szabo]]’s concept of mental transaction costs underscores that frequent micropayment prompts exhaust users.
		- Effective techniques include:
			- **Bundling**: Aggregating multiple microtransactions into daily or weekly summaries.
			- **Passive Authentication**: Using biometrics or proximity checks for recurring small-value approvals.
			- **Predictive Budgeting**: Having AI forecast monthly micropayment totals and alerting users about significant deviations.

	- ### Fediment
id:: 661acc10-64a6-4a52-bea0-41f7af6e6f60
		- Fedimint (short for "Federated Mint") is a protocol that aims to provide a scalable and privacy-preserving solution for using Bitcoin in everyday transactions. It combines the concept of federated sidechains with the privacy features of confidential transactions.
	 - Federated Sidechains: Fedimint uses federated sidechains, which are separate blockchain networks that are anchored to the main Bitcoin blockchain. These sidechains allow for faster and cheaper transactions while still benefiting from the security of the Bitcoin network.
	 - Confidential Transactions: The protocol utilizes confidential transactions, which hide the amounts being transferred while still allowing the network to verify the validity of the transactions. This enhances privacy for users.
	 - Federated Mints: In Fedimint, "mints" are entities that issue tokens on the sidechain. These mints are federated, meaning they are operated by a group of independent parties who jointly control the issuance and redemption of tokens.
	 - Blind Signatures: Fedimint employs blind signatures, a cryptographic technique that allows users to request signatures on their transactions without revealing the content of the transaction to the signer. This further enhances privacy.
	 - Trustless Setup: The protocol is designed to minimize the trust required in the mints. Users can verify the solvency of the mints and withdraw their funds from the sidechain to the main Bitcoin blockchain at any time.
		- Benefits of Fedimint:
	 - Improved scalability and lower transaction costs compared to the main Bitcoin network.
	 - Enhanced privacy for users through confidential transactions and blind signatures.
	 - Increased accessibility for everyday Bitcoin transactions.
	 - Reduced trust requirements through the federated model and the ability to withdraw funds to the main chain.
		- Overall, Fedimint aims to provide a layer-2 solution for Bitcoin that improves scalability, privacy, and usability while leveraging the security of the underlying Bitcoin blockchain.
		-

		- #### **2. Payment Transaction Sequence**
			- ```mermaid
			  
			  sequenceDiagram
			    participant Agent
			    participant SyntheticStablecoinSystem
			    participant BitcoinLightningNetwork
			    participant LoggingSystem
			  
			    Agent->>SyntheticStablecoinSystem: Check balance and convert if needed
			    SyntheticStablecoinSystem-->>Agent: Balance or conversion result
			  
			    alt Conversion Needed
			        Agent->>SyntheticStablecoinSystem: Execute conversion
			        SyntheticStablecoinSystem-->>Agent: Conversion confirmation
			    else No Conversion Needed
			        Agent->>BitcoinLightningNetwork: Initiate payment
			        BitcoinLightningNetwork-->>Agent: Payment receipt
			    end
			  
			    Agent->>LoggingSystem: Log transaction details
			  ```
			  
			  ---

	- ### 5. The Operational Framework: Private Contract Negotiation and Enforcement
		- Combining these protocols creates a robust framework for autonomous commercial activity between agents.
		- 1.  **Identity and Discovery:** AI agents and humans establish their identities using Nostr DIDs. They can discover each other and communicate via the decentralized network of Nostr relays.
		- 2.  **Private Contract Negotiation:** Two or more agents negotiate the terms of a service or exchange using encrypted direct messages on Nostr. The contract terms are stored privately.
		- 3.  **Data Pods and Escrow Setup:** The contract data (e.g., deliverables, payment conditions) is hashed and stored in a private, decentralized data store, akin to a [[Solid-Lite]]. The contract is structured as an RGB smart contract, which defines an escrow condition tied to a **single-use seal** on a Bitcoin UTXO.
		- 4.  **Execution and Payment:**
		    *   The service-providing agent performs the agreed-upon task.
		    *   Upon completion, it provides proof of execution to the client agent.
		    *   The client agent verifies the proof and co-signs the transaction that "closes" the single-use seal, thereby unlocking the escrowed payment (e.g., USDT on RGB) and transferring it to the provider over the Lightning Network.
		- 5.  **Final Settlement:** The cryptographic commitment for this state change is anchored to the Bitcoin blockchain, providing final, immutable proof of the transaction's completion without revealing any of the private contract details.

		- ## Addresses & UTXOs
	 - Ethereum has addresses which transactions flow in and out of. This issynonymous to a bank account number and so makes intuitive sense tousers of banks. This is not the case in Bitcoin.
	 - Bitcoin is a UTXO model blockchain. UTXO stands for unspent transactionoutput, and these are ‘portions’ of Bitcoin created and destroyed asvalue changes hands (through the action of cryptographic keys). They arethe basis of the evolving ledger. This process is described well byRajarshi Maitra in [thispost](https://medium.com/bitbees/what-the-heck-is-utxo-ca68f2651819).
	 - it“Every Transaction input consists of a pointer and an unlocking key.The pointer points back to a previous transaction output. And the key isused to unlock the previous output it points to. Every time an output issuccessfully unlocked by an input, it is marked inside the blockchaindatabase as ‘spent’. Thus you can think of a transaction as an abstract“action” that defines unlocking some previous outputs, and creating newoutputs.  These new outputs can again be referred by a new transaction input. AUTXO or ‘Unspent Transaction Output’ is simply all those outputs, whichare yet to be unlocked by an input.  Once an output is unlocked, imagine they are removed from circulatingsupply and new outputs take their place. Thus the sum of the value ofunlocked outputs will be always equal to the sum of values of newlycreated outputs (ignoring transaction fees for now) and the totalcirculating supply of bitcoins remains constant.”
	 - Fresh UTXOs are created as coinbase transactions, rewarded to miners whosuccessfully mine a block. These can be spent to multiple output asnormal. This is how the supply increases over time.

- # About Bitcoin
	- The first blockchain was the Bitcoin network, [[Nakamoto 2008]] some two decades after Haber et al. first described the idea. [[Haber 1990]] Prior to Bitcoin, these structures were called ‘timechains.’ [[Nakamoto 2018]] It can be considered a triple-entry bookkeeping system, [[Ijiri 1986; Faccia 2019]] the first of its kind, integrating a ‘provable’ timestamp with a transaction ledger, solving the “double spend problem.” [[Chohan 2021; Perez 2019; Grunspan 2018]] Some see this as the first major innovation in ledger technology since double entry was codified in Venice in fourteen seventy-five. [[Sangster 2015]]
	- It was created pseudonymously by an [individual](https://open.spotify.com/episode/6bUyu2izFznSqdb6bbGLr0) calling themselves ‘Satoshi Nakamoto’ in 2009, as a direct response to the perceived mishandling of the 2008 global financial crisis, [[nakamoto2018]] with the stated aim of challenging the status quo, with an [uncensorable](https://world.hey.com/dhh/i-was-wrong-we-need-crypto-587ccb03) technology, to create money which could not be [debased by inflation policy](http://p2pfoundation.ning.com/forum/topics/bitcoin-open-source), and outside of the [politically captured](https://www.coindesk.com/layer2/2022/05/04/matt-taibbi-paypals-deplatforming-and-the-case-for-crypto/) fintech incumbents. It’s interesting to note that the narrative around the use case for Bitcoin has [shifted over its lifetime](https://uncommoncore.co/visions-of-bitcoin-how-major-bitcoin-narratives-changed-over-time/).
	- It remains persistently associated with the political trope of freedom, Libertarians, and the [[cypherpunk]] movement that spawned it, as seen in this monologue from avowed libertarian Silk Road founder Ross Ulbricht (freed by President Trump in 2025 after lobbying from the Bitcoin industry).
	- {{video https://www.youtube.com/watch?v=zHMVyr5NjEY}}
	- The [“genesis block”](https://en.bitcoin.it/wiki/Genesis_block) which was hard-coded at the beginning of the ‘chain’ contains text from The Times newspaper detailing the second bank bailout.
	- There will only ever be ([just short of](https://blog.amberdata.io/why-the-bitcoin-supply-will-never-reach-21-million)) 21 million bitcoins issued, of which around 19.7 million have already been minted, and around 4 million lost forever. This ‘hard money’ absolute scarcity is a strong component of the Bitcoin meme landscape. These are basically arbitrary figures though; a combination of the issuance schedule, and an [‘educated guess’](https://plan99.net/~mike/satoshi-emails/thread1.html) by Nakamoto:[[nakamoto2018]]
		- *”My choice for the number of coins and distribution schedule was an educated guess. It was a difficult choice, because once the network is going it’s locked in and we’re stuck with it. I wanted to pick something that would make prices similar to existing currencies, but without knowing the future, that’s very hard. I ended up picking something in the middle. If Bitcoin remains a small niche, it’ll be worth less per unit than existing currencies. If you imagine it being used for some fraction of world commerce, then there’s only going to be 21 million coins for the whole world, so it would be worth much more per unit.”*
	- Digital scarcity is incredibly important and is explained well by software engineer Hillibrand in a podcast (this text is paraphrased): “Digital scarcity is an interesting concept that was well explained by German economist Guido Hülsmann in his book “The Ethics of Money Production,” [[hulsmann2008ethics]] published in 2007. Hülsmann stated that an economic good that is defined entirely in terms of bits and bytes is unlikely ever to be produced spontaneously on a free market, and at the time, he was right. However, the emergence of Bitcoin would soon prove that digital scarcity could indeed be achieved. Hülsmann noted that an economic good must be scarce and rivalrous, meaning there is a potential for conflict over who can utilize the resource. For example, air is abundant but still considered scarce as its availability can be limited in specific situations, leading to conflicts over its use. The concept of digital scarcity is built on the idea that information, which is fundamentally not scarce, can be made scarce through specific mechanisms. Bitcoin, for instance, addresses the double-spending problem, where a digital token could be spent more than once, by establishing a decentralized network that prevents the same coin from being used in multiple transactions. Nakamoto devised a system that allows users to establish scarcity and rivalrousness in cyberspace without relying on a single trusted third party. Instead of relying on a central authority, like a government, to determine the validity of transactions, Bitcoin relies on a network of computers known as “full nodes” that verify and enforce a set of rules. This decentralized system enables the creation of digital goods that are both scarce and rivalrous, which was previously thought to be impossible.”
	- In theory, there is no [barrier to access](https://www.forbes.com/sites/peterizzo/2021/09/29/against-cryptocurrency-the-ethical-argument-for-bitcoin-maximalism/?), and [equality of opportunity](https://www.coindesk.com/layer2/2022/02/16/why-bitcoin-is-a-tool-for-social-justice/) to accumulate and save over long periods. This is not true of chains and tokens, which lock up some of their value for seed investors to cash out later. None of the blockchains since are decentralized in the same way.[[selvam2021blockchain]] Bitcoin was probably a [singular event](https://danhedl.medium.com/bitcoins-distribution-was-fair-e2ef7bbbc892).
	- Each Bitcoin can be divided into 100 million satoshis (sats), so anyone buying into Bitcoin can buy a thousandth of a pound, assuming they can find someone willing to transact that with them.
	- Satoshi Nakamoto (the name of the publishing entity) [disappeared from the forums](https://bitcoinmagazine.com/technical/what-happened-when-bitcoin-creator-satoshi-nakamoto-disappeared) forever in 2010. Bitcoin has the marks of cypherpunks and anarcho-capitalism. The IMF has recently conceded that Bitcoin [poses a risk](https://blogs.imf.org/2022/01/11/crypto-prices-move-more-in-sync-with-stocks-posing-new-risks/) to traditional financial systems, so it could be argued that it is succeeding in this original aim. There is a detailed section on [[Digital Asset Risks]] in these pages.
	- Although there were some earlier experiments (hashcash, b-money etc.), Bitcoin is the first viably decentralized ‘cryptocurrency’; the network is used to [store economic value](https://www.aier.org/article/why-does-bitcoin-have-value/) because it is judged to be secure and trusted. It is a singular event in that it became established at scale, such that it could be seen to be a fully distributed system, without a controlling entity. This is the differentiated trust model previously mentioned. This relative security is the specific unique selling point of the network. It is many times more secure than all the networks which came after based on a like-for-like comparison of [transaction ‘confirmations’](https://howmanyconfs.com/). This network effect of Bitcoin is a compounding feature, attracting value through the security of the system. It is deliberately more conservative and feature-poor, preferring instead to [add to its feature set](https://bips.xyz/) slowly, preserving the integrity of the value invested in it over the last decade. At the time of writing, it is a [top quartile](https://fiatmarketcap.com/) largest global currency and has settled over [$19 trillion dollars](https://cointelegraph.com/news/19-trillion-transactions-settled-bitcoin-network-2024) in 2024, though Makarov et al. contest this, citing network overheads and speculation.[[makarov2021blockchain]] Institution-grade ‘exchange tradable funds’ or [[Bitcoin ETF]] that allow investment in Bitcoin are available throughout the world, seeing staggering popularity and immediately breaking all records, and the native asset can be bought by the public easily through apps in all but a handful of countries.
	- ![image](./assets/96342a08b8cb63131164317415a96f5d4852b12d.jpg)
	- {{twitter https://twitter.com/glxyresearch/status/1469039427028664320?}}
	- [Twitter link to the render loading below](https://twitter.com/_Checkmatey_/status/1699581893078085705)
	  {{twitter https://twitter.com/_Checkmatey_/status/1699581893078085705}}
	- Only around 7 transactions per second can be settled on Bitcoin. The native protocol does not scale well, and this is an inherent trade-off as described by Croman et al. in their positioning paper on public blockchains.[[croman2016scaling]] Over time, competition for the limited transaction bandwidth drives up the price to use the network. This effectively prices out small transactions, even locking up some value below what is termed the ’[dust limit](https://github.com/bitcoin/bitcoin/blob/v0.10.0rc3/src/primitives/transaction.h#L137)’ of unspent transactions too small to ever move again.[[delgado2018analysis]]
	- It is already a mature ecosystem, with [enterprise-grade software](https://www.fortris.com/) stacks, and is seeing adoption as a [corporate treasury asset](https://bitcointreasuries.net/).

		- ### Manipulation of price or the network
			- Bitcoin is still young and illiquid enough to be highly manipulable. Imagine for instance if a major organisation or nation state wished to accumulate a significant amount of the asset, but would prefer a lower price.
			- There is an unknown level of exposure to risk from centralised mining. If a few of the major mining pools were simultaneously infiltrated by a nation state actor then it might be possible to engineer a ‘deep re-org’ of a large transaction. This would be dealt with quickly and almost certainly be a transient attack, but the damage to the narrative might be substantial. The proposed solution to this known vulnerability is called [‘Stratum V2’](https://braiins.com/stratum-v2) in which the transaction in the blocks would be organised by pool miners or their delegates, with an increase in efficiency as a driving incentive. A similar vulnerability exists in the centralisation at the level of internet service providers.[[apostolaki2017hijacking]] This or some other flaw might lead to a selling cascade. Nobody knows just how vulnerable to selling cascades Bitcoin might be against a really serious challenge by an empowered actor, but it’s already high volatility is suggestive o frisk.

						- ### Instantiation of Objects
							- **Object Creation**:
								- Each digital object or asset is instantiated as an `RGBAsset` class instance within the metaverse. This includes assigning a unique `ContractId` and `SchemaId` which are crucial for defining the asset's properties and the rules governing its behavior according to the RGB protocol.
								- An initial state of the asset is defined using `Assignments` to bind certain rights or properties to the asset, such as ownership or usage rights. This state is embedded within the asset's genesis transaction but doesn't require immediate blockchain commitment.
							- **Asset Registration**:
								- Upon creation, the asset's initial state is recorded in a genesis block of the RGB schema. However, instead of committing this to the blockchain directly, the state can be stored off-chain (e.g., in a secure distributed file system or a database) to enhance privacy and reduce transaction costs.

						- ### Transfer of Objects
							- **Defining Transfer Operations**:
								- Transfers of assets are managed through `RGBContractOperation`, which includes `Inputs` (references to previous states), `Outputs` (new states or changes), and possibly `Redeems` (specific rights being exercised).
								- The transfer operation details how the asset's ownership or other properties change, using `Seal Definitions` to lock and unlock access to the asset.
							- **Executing Transfers**:
								- To execute a transfer, the new state created by the transfer operation is prepared, detailing how rights and responsibilities are reassigned from one party to another. This often involves updating the `Owned State` to reflect new ownership.
								- Instead of committing each transaction to the blockchain, the RGB protocol allows for state transitions to be confirmed off-chain until a significant event requires blockchain validation. This approach saves on transaction fees and minimizes public ledger exposure.
							- **State Commitments**:
								- When necessary, state transitions can be committed to the blockchain using minimal data footprints. This is done by embedding a cryptographic commitment to the state within a standard Bitcoin transaction, leveraging RGB's ability to bind state to Bitcoin UTXOs through client-side validation.

- # The Evolution and Future of Micropayments
	- This excellent [article](https://bitcoinmagazine.com/technical/szabos-micropayments-and-mental-transaction-costs-25-years-later) talks about something which is spread across this knowledge corpus; the integration of AI Agents and distributed infrastructure for ID and payments and messaging.
		- Nick Szabo's 1999 paper [Micropayments and Mental Transaction Costs](https://nakamotoinstitute.org/micropayments-and-mental-transaction-costs/) highlighted the issue of "mental transaction costs" associated with micropayments.
			- Szabo argued that the cognitive burden of deciding whether something is worth paying for outweighs the technological savings of micropayments.
			- Uncertain cash flows contribute to the cognitive burden of micropayments, as consumers need to plan and budget more precisely.
			- Consumers prefer flat fees and bundled services due to the mental relief of avoiding constant micro-decisions.
			- The rise of ad-supported "free" services and bundled subscription services like Medium reduced the cognitive load on consumers.
			- "Intelligent agents" were proposed as a solution to automate micro-decisions, but building a trustworthy and effective agent has been challenging.
		- Improved user interfaces have reduced some friction, but the fundamental cognitive overhead of deciding whether a purchase is worthwhile remains.
		- Blockchain technology, specifically the Lightning Network, aims to reduce technical transaction costs, but doesn't fully address the psychological barriers.
		- Tips and donations can work as micropayments because they are voluntary and driven by gratitude rather than a sense of obligation.
		- AI tools could potentially automate micropayment decisions within set budgets, but building trust in the AI is a hurdle.
		- Automated rules and AI can help users set broad preferences and delegate micro-decisions to intelligent agents.
	- Additional refs
		- Fishburn, P., Odlyzko, A. M., and Siders, R. C. (1997) “[Fixed fee versus unit pricing for information goods](https://journals.uic.edu/ojs/index.php/fm/article/download/535/456)”
		- Nielsen, J. (1998) “[The Case for Micropayments](https://www.nngroup.com/articles/the-case-for-micropayments/)”
		- Rivest, R. L. and Shamir, A. (1996) “[PayWord and MicroMint—Two Simple Micropayment Schemes](https://people.csail.mit.edu/rivest/pubs/RS96.pdf)”

	- ### Minimising Cognitive Load
		- [[Nick Szabo]]’s concept of mental transaction costs underscores that frequent micropayment prompts exhaust users.
		- Effective techniques include:
			- **Bundling**: Aggregating multiple microtransactions into daily or weekly summaries.
			- **Passive Authentication**: Using biometrics or proximity checks for recurring small-value approvals.
			- **Predictive Budgeting**: Having AI forecast monthly micropayment totals and alerting users about significant deviations.

	- ### Fediment
id:: 661acc10-64a6-4a52-bea0-41f7af6e6f60
		- Fedimint (short for "Federated Mint") is a protocol that aims to provide a scalable and privacy-preserving solution for using Bitcoin in everyday transactions. It combines the concept of federated sidechains with the privacy features of confidential transactions.
	 - Federated Sidechains: Fedimint uses federated sidechains, which are separate blockchain networks that are anchored to the main Bitcoin blockchain. These sidechains allow for faster and cheaper transactions while still benefiting from the security of the Bitcoin network.
	 - Confidential Transactions: The protocol utilizes confidential transactions, which hide the amounts being transferred while still allowing the network to verify the validity of the transactions. This enhances privacy for users.
	 - Federated Mints: In Fedimint, "mints" are entities that issue tokens on the sidechain. These mints are federated, meaning they are operated by a group of independent parties who jointly control the issuance and redemption of tokens.
	 - Blind Signatures: Fedimint employs blind signatures, a cryptographic technique that allows users to request signatures on their transactions without revealing the content of the transaction to the signer. This further enhances privacy.
	 - Trustless Setup: The protocol is designed to minimize the trust required in the mints. Users can verify the solvency of the mints and withdraw their funds from the sidechain to the main Bitcoin blockchain at any time.
		- Benefits of Fedimint:
	 - Improved scalability and lower transaction costs compared to the main Bitcoin network.
	 - Enhanced privacy for users through confidential transactions and blind signatures.
	 - Increased accessibility for everyday Bitcoin transactions.
	 - Reduced trust requirements through the federated model and the ability to withdraw funds to the main chain.
		- Overall, Fedimint aims to provide a layer-2 solution for Bitcoin that improves scalability, privacy, and usability while leveraging the security of the underlying Bitcoin blockchain.
		-

						- ### Instantiation of Objects
							- **Object Creation**:
								- Each digital object or asset is instantiated as an `RGBAsset` class instance within the metaverse. This includes assigning a unique `ContractId` and `SchemaId` which are crucial for defining the asset's properties and the rules governing its behavior according to the RGB protocol.
								- An initial state of the asset is defined using `Assignments` to bind certain rights or properties to the asset, such as ownership or usage rights. This state is embedded within the asset's genesis transaction but doesn't require immediate blockchain commitment.
							- **Asset Registration**:
								- Upon creation, the asset's initial state is recorded in a genesis block of the RGB schema. However, instead of committing this to the blockchain directly, the state can be stored off-chain (e.g., in a secure distributed file system or a database) to enhance privacy and reduce transaction costs.

						- ### Transfer of Objects
							- **Defining Transfer Operations**:
								- Transfers of assets are managed through `RGBContractOperation`, which includes `Inputs` (references to previous states), `Outputs` (new states or changes), and possibly `Redeems` (specific rights being exercised).
								- The transfer operation details how the asset's ownership or other properties change, using `Seal Definitions` to lock and unlock access to the asset.
							- **Executing Transfers**:
								- To execute a transfer, the new state created by the transfer operation is prepared, detailing how rights and responsibilities are reassigned from one party to another. This often involves updating the `Owned State` to reflect new ownership.
								- Instead of committing each transaction to the blockchain, the RGB protocol allows for state transitions to be confirmed off-chain until a significant event requires blockchain validation. This approach saves on transaction fees and minimizes public ledger exposure.
							- **State Commitments**:
								- When necessary, state transitions can be committed to the blockchain using minimal data footprints. This is done by embedding a cryptographic commitment to the state within a standard Bitcoin transaction, leveraging RGB's ability to bind state to Bitcoin UTXOs through client-side validation.

				- #### Currently in the Ontology
					- **DigitalAsset:**
						- **Properties:**
							- `genesis`: (`xsd:string`) The Bitcoin transaction ID where the asset was created.
							- `issuance`: (`linkedjson:ObjectProperty`, `range`: `metaverse:RGBschema`) Links to the specific RGB schema used for the asset's issuance.
							- `type`: (`xsd:string`) Specifies the type of asset (e.g., "collectible", "virtual_item", "tokenized_right").
							- `currentOwner`: (`linkedjson:ObjectProperty`, `range`: `metaverse:MetaverseAgent`) Links to the agent who currently owns the asset.
							- `ownershipHistory`: (`linkedjson:ObjectProperty`, `range`: `metaverse:OwnershipTransfer`) Represents the chain of ownership transfers for the asset.
					- **OwnershipTransfer:**
						- **Properties:**
							- `from`: (`linkedjson:ObjectProperty`, `range`: `metaverse:MetaverseAgent`) The agent transferring ownership.
							- `to`: (`linkedjson:ObjectProperty`, `range`: `metaverse:MetaverseAgent`) The agent receiving ownership.
							- `timestamp`: (`xsd:dateTime`) The date and time of the transfer.
							- `transactionId`: (`xsd:string`) The Bitcoin/Lightning Network transaction ID associated with the transfer.
						- Linked-JSON representation:
						  ```text
						  {
						    "@id": "https://www.narrativegoldmine.com/metaverse#OwnershipTransfer",
						    "@type": "Class",
						    "label": "Ownership Transfer",
						    "comment": "Represents the transfer of ownership of a DigitalAsset between agents.",
						    "properties": {
						      "from": {
						        "@id": "https://www.narrativegoldmine.com/metaverse#from",
						        "@type": "Property",
						        "range": "https://www.narrativegoldmine.com/metaverse#MetaverseAgent",
						        "comment": "The agent transferring ownership."
						      },
						      "to": {
						        "@id": "https://www.narrativegoldmine.com/metaverse#to",
						        "@type": "Property",
						        "range": "https://www.narrativegoldmine.com/metaverse#MetaverseAgent",
						        "comment": "The agent receiving ownership."
						      },
						      "timestamp": {
						        "@id": "https://www.narrativegoldmine.com/metaverse#timestamp",
						        "@type": "Property",
						        "range": "http://www.w3.org/2001/XMLSchema#dateTime",
						        "comment": "The date and time of the transfer."
						      },
						      "transactionId": {
						        "@id": "https://www.narrativegoldmine.com/metaverse#transactionId",
						        "@type": "Property",
						        "range": "http://www.w3.org/2001/XMLSchema#string",
						        "comment": "The Bitcoin/Lightning Network transaction ID associated with the transfer."
						      }
						    }
						  }
						  ```
			- **PKI and Wallets:**
				- **MetaverseEntity:**
					- **Properties:**
						- `publicKey`: (`xsd:string`) The public key associated with the entity.
						- `privateKey`: (`xsd:string`) The private key associated with the entity (optional, depending on security considerations).
				- **MetaverseAgent:**
					- **Properties:**
						- `wallet`: (`linkedjson:ObjectProperty`, `range`: `schema:DigitalWallet`) Represents the agent's digital wallet for managing various assets.
			- **Bitcoin and Lightning Network Integration:**
				- **MetaverseAgent:**
					- **Properties:**
						- `bitcoinWallet`: (`xsd:string`) The Bitcoin address associated with the agent.
					    "rdfs:comment": "Represents different types of scenes in the metaverse.",
					    "metaverse:sceneTypeEnum": [
					      {
					        "@id": "metaverse:InteriorScene"
					      },
					      {
					        "@id": "metaverse:ExteriorScene"
					      },
					      {
					        "@id": "metaverse:MixedRealityScene"
					      }
					    ]
					  }
					  ```
					- Linked-JSON representation for `MetaverseScene`:
					  ```text
					  {
					    "@id": "metaverse:MetaverseScene",
					    "@type": "linkedjson:Class",
					    "rdfs:label": "Metaverse Scene",
					    "rdfs:comment": "Represents a specific environment or space within the metaverse.",
					    "metaverse:hasSceneObject": {
					      "@type": "linkedjson:ObjectProperty",
					      "rdfs:range": "metaverse:SceneObject",
					      "metaverse:minCardinality": 1
					    }
					  }
					  ```
						- In this example, the custom property `metaverse:minCardinality` is used to indicate that a `MetaverseScene` must have at least one `SceneObject`.

- # The Evolution and Future of Micropayments
	- This excellent [article](https://bitcoinmagazine.com/technical/szabos-micropayments-and-mental-transaction-costs-25-years-later) talks about something which is spread across this knowledge corpus; the integration of AI Agents and distributed infrastructure for ID and payments and messaging.
		- Micropayments, typically under USD $5, are experiencing renewed attention due to innovations in [[blockchain]] technology, autonomous [[Agents]], and emerging decentralised protocols such as the [[Lightning and Similar L2]] and the [[Nostr protocol]]
		- Despite this resurgence, broader adoption remains constrained by psychological resistance, technical fragmentation, and inconsistent business models.
		- This page explores how reducing cognitive load, improving user interfaces, and leveraging AI to automate decisions could unlock the full potential of these tiny transactions.

				- #### Currently in the Ontology
					- **DigitalAsset:**
						- **Properties:**
							- `genesis`: (`xsd:string`) The Bitcoin transaction ID where the asset was created.
							- `issuance`: (`linkedjson:ObjectProperty`, `range`: `metaverse:RGBschema`) Links to the specific RGB schema used for the asset's issuance.
							- `type`: (`xsd:string`) Specifies the type of asset (e.g., "collectible", "virtual_item", "tokenized_right").
							- `currentOwner`: (`linkedjson:ObjectProperty`, `range`: `metaverse:MetaverseAgent`) Links to the agent who currently owns the asset.
							- `ownershipHistory`: (`linkedjson:ObjectProperty`, `range`: `metaverse:OwnershipTransfer`) Represents the chain of ownership transfers for the asset.
					- **OwnershipTransfer:**
						- **Properties:**
							- `from`: (`linkedjson:ObjectProperty`, `range`: `metaverse:MetaverseAgent`) The agent transferring ownership.
							- `to`: (`linkedjson:ObjectProperty`, `range`: `metaverse:MetaverseAgent`) The agent receiving ownership.
							- `timestamp`: (`xsd:dateTime`) The date and time of the transfer.
							- `transactionId`: (`xsd:string`) The Bitcoin/Lightning Network transaction ID associated with the transfer.
						- Linked-JSON representation:
						  ```text
						  {
						    "@id": "https://www.narrativegoldmine.com/metaverse#OwnershipTransfer",
						    "@type": "Class",
						    "label": "Ownership Transfer",
						    "comment": "Represents the transfer of ownership of a DigitalAsset between agents.",
						        "@id": "https://www.narrativegoldmine.com/metaverse#from",
						        "@type": "Property",
						      },
						      "transactionId": {
						        "@id": "https://www.narrativegoldmine.com/metaverse#transactionId",
						        "@type": "Property",
						        "range": "http://www.w3.org/2001/XMLSchema#string",
						        "comment": "The Bitcoin/Lightning Network transaction ID associated with the transfer."
						      }
						    }
						  }
						  ```
			- **PKI and Wallets:**
				- **MetaverseEntity:**
					- **Properties:**
						- `publicKey`: (`xsd:string`) The public key associated with the entity.
				- **MetaverseAgent:**
			- **Bitcoin and Lightning Network Integration:**
				- **MetaverseAgent:**
					      },
					      {
					        "@id": "metaverse:ExteriorScene"
					      },
					      {
					        "@id": "metaverse:MixedRealityScene"
					    "rdfs:label": "Metaverse Scene",
					    "rdfs:comment": "Represents a specific environment or space within the metaverse.",
					    "metaverse:hasSceneObject": {
					      "@type": "linkedjson:ObjectProperty",
					      "rdfs:range": "metaverse:SceneObject",
					      "metaverse:minCardinality": 1
					    }
					  }
					  ```

	- ## Introduction
		- RGB employs a dual-layer validation process to ensure the integrity and compliance of contract states:
		- ![photo_2023-12-05_02-42-41.jpg](assets/photo_2023-12-05_02-42-41_1713719951228_0.jpg)
		- **Mechanism**: Utilizes a virtual machine to inspect and enforce contract-specific conditions, such as verifying transaction IDs within operations.

				- #### Currently in the Ontology
					- **DigitalAsset:**
						- **Properties:**
							- `genesis`: (`xsd:string`) The Bitcoin transaction ID where the asset was created.
							- `issuance`: (`linkedjson:ObjectProperty`, `range`: `metaverse:RGBschema`) Links to the specific RGB schema used for the asset's issuance.
							- `type`: (`xsd:string`) Specifies the type of asset (e.g., "collectible", "virtual_item", "tokenized_right").
							- `currentOwner`: (`linkedjson:ObjectProperty`, `range`: `metaverse:MetaverseAgent`) Links to the agent who currently owns the asset.
							- `ownershipHistory`: (`linkedjson:ObjectProperty`, `range`: `metaverse:OwnershipTransfer`) Represents the chain of ownership transfers for the asset.
							- `from`: (`linkedjson:ObjectProperty`, `range`: `metaverse:MetaverseAgent`) The agent transferring ownership.
							- `to`: (`linkedjson:ObjectProperty`, `range`: `metaverse:MetaverseAgent`) The agent receiving ownership.
						        "@id": "https://www.narrativegoldmine.com/metaverse#transactionId",
						        "@type": "Property",
						        "range": "http://www.w3.org/2001/XMLSchema#string",
						        "comment": "The Bitcoin/Lightning Network transaction ID associated with the transfer."
						      }
						    }
						  }
						  ```
			- **PKI and Wallets:**
				- **MetaverseEntity:**
					- **Properties:**
						- `publicKey`: (`xsd:string`) The public key associated with the entity.
				- **MetaverseAgent:**

	- ### Growth Drivers and Market Dynamics
		- [[Agents]] can mitigate psychological friction by automating repetitive micropayment approvals.
		- For example, they might pre-authorise low-value transactions (e.g., API queries or short IoT data bursts) based on user-defined spending thresholds.

	- ### Trust and Transparency Mechanisms

	- ### Scalability and Cost Efficiency
		- Nostr’s open protocol and reliance on decentralised identifiers (e.g., [[NIP-05]]) requires cryptographic key management, which can be daunting.
		- However, third-party wallet solutions (like [[Alby]]) streamline the process by auto-generating invoices within social media-like interfaces.
			- **Passive Authentication**: Using biometrics or proximity checks for recurring small-value approvals.
		- While straightforward in B2B contexts, consumer-facing scenarios risk “nickel-and-diming” perceptions.
		- Decentralised frameworks (e.g., [[Nostr]] and the [[Lightning Network]]) reduce some vulnerabilities but require robust regulatory clarity.

			- ### Nostr Integration
				- **NostrEvent:**
						- **Properties:**
							- `genesis`: (`xsd:string`) The Bitcoin transaction ID where the asset was created.
							- `issuance`: (`linkedjson:ObjectProperty`, `range`: `metaverse:RGBschema`) Links to the specific RGB schema used for the asset's issuance.
							- `type`: (`xsd:string`) Specifies the type of asset (e.g., "collectible", "virtual_item", "tokenized_right").
							- `currentOwner`: (`linkedjson:ObjectProperty`, `range`: `metaverse:MetaverseAgent`) Links to the agent who currently owns the asset.
							- `ownershipHistory`: (`linkedjson:ObjectProperty`, `range`: `metaverse:OwnershipTransfer`) Represents the chain of ownership transfers for the asset.
							- `from`: (`linkedjson:ObjectProperty`, `range`: `metaverse:MetaverseAgent`) The agent transferring ownership.
							- `to`: (`linkedjson:ObjectProperty`, `range`: `metaverse:MetaverseAgent`) The agent receiving ownership.
						        "@id": "https://www.narrativegoldmine.com/metaverse#transactionId",
						        "@type": "Property",
						        "range": "http://www.w3.org/2001/XMLSchema#string",
						        "comment": "The Bitcoin/Lightning Network transaction ID associated with the transfer."
						      }

	- ### Trust and Transparency Mechanisms

- ### Digital disruptive fintech
	- <span class="image">More than half of central banks [surveyed by theBIS](https://www.bis.org/publ/bppdf/bispap125.htm) said they saw issuance of a CBDC as possible.</span>
	- CBDCs are wholly digital representations of national currencies, and assuch are centralised database entries, endorsed and potentially issuedby national governments. The [USA’swhitepaper](https://www.federalreserve.gov/publications/files/money-and-payments-20220120.pdf)shows the approach. This thinking seems to have emerged in part from the‘Digital Dollar Project’, an Accenture funded think tank founded by exCFTC chairman Giancarlo.[[giancarlo2021cryptodad]] Curiously only [TheBahamas](https://www.sanddollar.bs/about) seem to have a successful implementation, but it is a rapidly evolving space, and many nations arenow scrambling to [catchup](https://twitter.com/GobiernoMX/status/1476376240873517061). A [poston the LinkedInpage](https://www.linkedin.com/feed/update/urn:li:activity:6980330210030145536/)of the Bank of International Settlements highlights a research projectbetween 20 Asian banks which settles tens of millions of dollars usingCBDC tooling.
	- The following text is taken from the March 2021 Biden government“executive order” on digital assets, and defines the current globall egislative position well.
	- The main motivation for issuing a CBDC is the assumption that there isdemand for a safe and stable way to use money online. A digital pound,issued and backed by the Bank of England, could be a trusted,accessible, and easy-to-use form of payment. The infrastructure would allow firms to design innovative and user-friendly services. The civilservice is hiring a “Head of CBDC” as seen in Figure<a href="#fig:treasury" data-reference-type="ref" data-reference="fig:treasury">4.4</a>. ![]./assets/9a2522fabf842fbfaf37b164036af1e44295adab.jpg The UK is clearly making moves to staff a new department for CBDC.
	- Meanwhile in Europe, ECB President [ChristineLegarde](https://www.ecb.europa.eu/press/pressconf/2022/html/ecb.is220310~1bc8c1b1ca.en.html#qa)said: it“On your question concerning CBDC, you know my views on CBDC and you know that I have pushed that project. Fabio Panetta is working hardon that together with members in the entire Eurosystem with the high-level taskforce that is working really hard on moving forward. Butin a way, I am really pleased that attention is now focussed on the role that cryptos can play and the role that Central Bank Digital Currency can have when they are implemented. We have a schedule, as you know. TheGoverning Council decided back in October ’21 to launch a two-year investigation phase, and it is at the end of that investigation phase that the decision will definitely be made to launch the CBDCs and to make it a reality. We can’t go wrong with that project. I am confident that we will move ahead, but that’s going to be a decision of theGoverning Council. I think it’s an imperative to respond to what theEuropeans expect, and I think we have to be a little bit ahead of the curve if we can on that front. If we can accelerate the work, I hope wecan accelerate the work. I will certainly support that and I was delighted to see that in the United States there was an executive order by President Biden to actually expect similar effort and focus and progress on CBDC, cryptos. I think that it will take all the goodwill ofthose who want to support sovereignty, who want to make sure that monetary policy can be transmitted properly using our currency, will endeavour.”
	- She has expanded on these points saying in a video interview that the digital euro will be decided in October 2023. If passed, the current paradigm of cash spending and transfers will become even more restrictive. Lagarde justified the move by saying that she did not wantthe EU to be ‘dependent on the currency of an unfriendly country’ or afriendly currency activated by a private corporate entity’. Sheidentified Meta, Google, and Amazon.
	- India has expressed far more interest in the technology, and of course their addressable market is huge! They have published a ‘[conceptnote](https://twitter.com/RBI/status/1578329048446828544?)’ in whichthey assert that a digital Rupee would be faster, cheaper, and easier tomaintain. The key difference in India’s situation is the large areas ofthe rural population where mobile internet is more patchy. In suchsituations a cash equivalent stablecoin token with cash finality which can be transferred between mobile phone wallets itwithout an internet connection is a huge boon. It seems very likely that India is moving toreact to the innovation threat posed by cryptocurrencies to their owncash infrastructure. They are [piloting thetechnology](https://www.reuters.com/article/idUSKBN2RQ0WO) already.Similarly there seems to be a strong, and [predictablyilliberal](https://www.bloomberg.com/news/articles/2022-12-06/nigeria-limits-cash-transactions-to-push-enaira-and-other-payments)push for transition to digital money in Nigeria. Again this is an enormous number of people, and it is hard not to be suspicious of future abuse of the system by governments.
	- In the USA this text from Congressman Tom Emmer shows how complex and interesting this debate is becoming.it“Today, I introduced a bill prohibiting the Fed from issuing a central bank digital currency directly to individuals. Here’s why it matters: As other countries, likeChina, develop CBDCs that fundamentally omit the benefits and protections of cash, it is more important than ever to ensure the UnitedStates’ digital currency policy protects financial privacy, maintains the dollar’s dominance, and cultivates innovation.  CBDCs that fail to adhere to these three basic principles could enable an entity like the Federal Reserve to mobilize itself into a retail bank, collect personally identifiable information on users, and track their transactions indefinitely.  Not only does this CBDC model raise “single point of failure” issues,leaving Americans’ financial information vulnerable to attack, but it could be used as a surveillance tool that Americans should never be forced to tolerate from their own government.  Requiring users to open an account at the Fed to access a United StatesCBDC would put the Fed on an insidious path akin to China’s digital authoritarianism.  Any CBDC implemented by the Fed must be open, permissionless, and private. This means that any digital dollar must be accessible to all,transact on a blockchain that is transparent to all, and maintain the privacy elements of cash.  In order to maintain the dollar’s status as the world’s reserve currency in a digital age, it is important that the United States lead with aposture that prioritizes innovation and does not aim to compete with theprivate sector.  Simply put, we must prioritize blockchain technology with American characteristics, rather than mimic China’s digital authoritarianism outof fear.”
	- Most analysts now seem to think that there is little appetite to replace established ’Western’ cash with CBDCs. Most significantly such productswould need the support of retail banks, and it is not in their interestto service such a product. Their business model relies on using retail deposits for providing loans, and it is these deposits, not cash itself that would be the most addressable market for a CBDC. Banks don’t want people to self custody money. In addition it exposes the whole banking system to a higher risk of bank runs. Such a self custody, interestbearing, central government backed asset would have significantly less counterparty risk than even bank deposits, and at times of high systemic stress it seems likely that money would flow to where it’s thoughtsafest, exposing the retail banks to runs. Fabio Panetta of the ECBsaid: it“If we give access to a means of payment, which is relatively limited, there are no transaction costs because you only need to have a smartphone. There will be risks that people could use this possibility to move, for example, their deposits of other banks or their money outof financial intermediates.”
		- All of the proposed solutions to these problems such as caps and negative interest penalties seem poorlythought through. Held and Smolenski present a [detailed and rigorousnegativecritique](https://www.btcpolicy.org/articles/why-the-u-s-should-reject-central-bank-digital-currencies)of the dystopian ramifications of the technology. In their conclusion they point out that: it“Central bank digital currencies (CBDCs)represent an extension of state control over economic life. CBDCsprovide governments with direct access to every transaction in that currency conducted by any individual anywhere in the world. As governments worldwide routinely share data with one another, individual transaction data will quickly become known to any government in a datasharing arrangement. Given the frequency with which government databases are compromised, this arrangement virtually ensures that anyone’s transaction data will eventually become available for global perusal.”

- ## The evolving European and UK position
	- The U.K. Financial Conduct Authority’s chief executive, Nikhil Rathi,outlined the FCA’s regulatory goals at the Peterson Institute forInternational Economics: it“The U.S. and U.K. will deepen ties on crypto-asset regulation and market developments — including in relation to stablecoins and the exploration of central bank digital currencies.”
	- The timing seems right to explore the use of stablecoins in metaverse applications up the list of choices. !
	- It now seems plausible that the world is moving toward a plurality of national and private digital currencies. Figure<a href="#fig:CBDClikely" data-reference-type="ref" data-reference="fig:CBDClikely">4.3</a>from the Bank for International Settlement, shows the growing acceptance within central banks. Their 2022 annual economic report dedicates [a 42page chapter](https://www.bis.org/publ/arpdf/ar2022e3.pdf) to thesubject. Hyun Song Shin, head of research at BIS said it “Our broad conclusion is captured in the motto, ‘Anything that crypto can do, CBDCs can do better.“
	- Bank of America analysts Shah and Moss think that CBDC’s [are‘inevitable’]() by 2030, and believe that in the meantime stablecoinswill fill what they perceive to be this market gap.
	- This text from the [thinktankVoxEU](https://voxeu.org/article/benefits-central-bank-digital-currency)highlights the pressure on not to be [‘leftbehind’](https://himes.house.gov/u-s-central-bank-digital-currency):it“Given the rapid pace of innovations in payments technology and the proliferation of virtual currencies such as bitcoin and Ethereum, it might not be prudent for central banks to be passive in their approach to CBDC. If the central bank does not produce any form of digital currency, there is a risk that it loses monetary control, with greater potential for severe economic downturns. With this in mind, central banks are moving expeditiously when they consider the adoption of CBDC. ”The Atlantic Council [have a website](https://www.atlanticcouncil.org/cbdctracker/) which tracks global adoption.
	- <span class="image">More than half of central banks [surveyed by theBIS](https://www.bis.org/publ/bppdf/bispap125.htm) said they saw issuance of a CBDC as possible.</span>
	- CBDCs are wholly digital representations of national currencies, and assuch are centralised database entries, endorsed and potentially issuedby national governments. The [USA’swhitepaper](https://www.federalreserve.gov/publications/files/money-and-payments-20220120.pdf)shows the approach. This thinking seems to have emerged in part from the‘Digital Dollar Project’, an Accenture funded think tank founded by exCFTC chairman Giancarlo.[[giancarlo2021cryptodad]] Curiously only [TheBahamas](https://www.sanddollar.bs/about) seem to have a successful implementation, but it is a rapidly evolving space, and many nations arenow scrambling to [catchup](https://twitter.com/GobiernoMX/status/1476376240873517061). A [poston the LinkedInpage](https://www.linkedin.com/feed/update/urn:li:activity:6980330210030145536/)of the Bank of International Settlements highlights a research projectbetween 20 Asian banks which settles tens of millions of dollars usingCBDC tooling.
	- The following text is taken from the March 2021 Biden government“executive order” on digital assets, and defines the current globall egislative position well.
	- The main motivation for issuing a CBDC is the assumption that there isdemand for a safe and stable way to use money online. A digital pound,issued and backed by the Bank of England, could be a trusted,accessible, and easy-to-use form of payment. The infrastructure would allow firms to design innovative and user-friendly services. The civilservice is hiring a “Head of CBDC” as seen in Figure<a href="#fig:treasury" data-reference-type="ref" data-reference="fig:treasury">4.4</a>. ![]./assets/9a2522fabf842fbfaf37b164036af1e44295adab.jpg The UK is clearly making moves to staff a new department for CBDC.
	- Meanwhile in Europe, ECB President [ChristineLegarde](https://www.ecb.europa.eu/press/pressconf/2022/html/ecb.is220310~1bc8c1b1ca.en.html#qa)said: it“On your question concerning CBDC, you know my views on CBDC and you know that I have pushed that project. Fabio Panetta is working hardon that together with members in the entire Eurosystem with the high-level taskforce that is working really hard on moving forward. Butin a way, I am really pleased that attention is now focussed on the role that cryptos can play and the role that Central Bank Digital Currency can have when they are implemented. We have a schedule, as you know. TheGoverning Council decided back in October ’21 to launch a two-year investigation phase, and it is at the end of that investigation phase that the decision will definitely be made to launch the CBDCs and to make it a reality. We can’t go wrong with that project. I am confident that we will move ahead, but that’s going to be a decision of theGoverning Council. I think it’s an imperative to respond to what theEuropeans expect, and I think we have to be a little bit ahead of the curve if we can on that front. If we can accelerate the work, I hope wecan accelerate the work. I will certainly support that and I was delighted to see that in the United States there was an executive order by President Biden to actually expect similar effort and focus and progress on CBDC, cryptos. I think that it will take all the goodwill ofthose who want to support sovereignty, who want to make sure that monetary policy can be transmitted properly using our currency, will endeavour.”
	- She has expanded on these points saying in a video interview that the digital euro will be decided in October 2023. If passed, the current paradigm of cash spending and transfers will become even more restrictive. Lagarde justified the move by saying that she did not wantthe EU to be ‘dependent on the currency of an unfriendly country’ or afriendly currency activated by a private corporate entity’. Sheidentified Meta, Google, and Amazon.
	- India has expressed far more interest in the technology, and of course their addressable market is huge! They have published a ‘[conceptnote](https://twitter.com/RBI/status/1578329048446828544?)’ in whichthey assert that a digital Rupee would be faster, cheaper, and easier tomaintain. The key difference in India’s situation is the large areas ofthe rural population where mobile internet is more patchy. In suchsituations a cash equivalent stablecoin token with cash finality which can be transferred between mobile phone wallets itwithout an internet connection is a huge boon. It seems very likely that India is moving toreact to the innovation threat posed by cryptocurrencies to their owncash infrastructure. They are [piloting thetechnology](https://www.reuters.com/article/idUSKBN2RQ0WO) already.Similarly there seems to be a strong, and [predictablyilliberal](https://www.bloomberg.com/news/articles/2022-12-06/nigeria-limits-cash-transactions-to-push-enaira-and-other-payments)push for transition to digital money in Nigeria. Again this is an enormous number of people, and it is hard not to be suspicious of future abuse of the system by governments.
	- In the USA this text from Congressman Tom Emmer shows how complex and interesting this debate is becoming.it“Today, I introduced a bill prohibiting the Fed from issuing a central bank digital currency directly to individuals. Here’s why it matters: As other countries, likeChina, develop CBDCs that fundamentally omit the benefits and protections of cash, it is more important than ever to ensure the UnitedStates’ digital currency policy protects financial privacy, maintains the dollar’s dominance, and cultivates innovation.  CBDCs that fail to adhere to these three basic principles could enable an entity like the Federal Reserve to mobilize itself into a retail bank, collect personally identifiable information on users, and track their transactions indefinitely.  Not only does this CBDC model raise “single point of failure” issues,leaving Americans’ financial information vulnerable to attack, but it could be used as a surveillance tool that Americans should never be forced to tolerate from their own government.  Requiring users to open an account at the Fed to access a United StatesCBDC would put the Fed on an insidious path akin to China’s digital authoritarianism.  Any CBDC implemented by the Fed must be open, permissionless, and private. This means that any digital dollar must be accessible to all,transact on a blockchain that is transparent to all, and maintain the privacy elements of cash.  In order to maintain the dollar’s status as the world’s reserve currency in a digital age, it is important that the United States lead with aposture that prioritizes innovation and does not aim to compete with theprivate sector.  Simply put, we must prioritize blockchain technology with American characteristics, rather than mimic China’s digital authoritarianism outof fear.”
	- Most analysts now seem to think that there is little appetite to replace established ’Western’ cash with CBDCs. Most significantly such productswould need the support of retail banks, and it is not in their interestto service such a product. Their business model relies on using retail deposits for providing loans, and it is these deposits, not cash itself that would be the most addressable market for a CBDC. Banks don’t want people to self custody money. In addition it exposes the whole banking system to a higher risk of bank runs. Such a self custody, interestbearing, central government backed asset would have significantly less counterparty risk than even bank deposits, and at times of high systemic stress it seems likely that money would flow to where it’s thoughtsafest, exposing the retail banks to runs. Fabio Panetta of the ECBsaid: it“If we give access to a means of payment, which is relatively limited, there are no transaction costs because you only need to have a smartphone. There will be risks that people could use this possibility to move, for example, their deposits of other banks or their money outof financial intermediates.”
		- All of the proposed solutions to these problems such as caps and negative interest penalties seem poorlythought through. Held and Smolenski present a [detailed and rigorousnegativecritique](https://www.btcpolicy.org/articles/why-the-u-s-should-reject-central-bank-digital-currencies)of the dystopian ramifications of the technology. In their conclusion they point out that: it“Central bank digital currencies (CBDCs)represent an extension of state control over economic life. CBDCsprovide governments with direct access to every transaction in that currency conducted by any individual anywhere in the world. As governments worldwide routinely share data with one another, individual transaction data will quickly become known to any government in a datasharing arrangement. Given the frequency with which government databases are compromised, this arrangement virtually ensures that anyone’s transaction data will eventually become available for global perusal.”

- ## Bibliography
	- [Crimson Publishers](https://crimsonpublishers.com/cojts/pdf/COJTS.000578.pdf)
	- [The Case Against Micropayments](https://www.researchgate.net/publication/2899901_The_Case_Against_Micropayments)
	- [Micropayments and Mental Transaction Costs (Satoshi Nakamoto Institute)](https://nakamotoinstitute.org/library/micropayments-and-mental-transaction-costs/)
	- [AI Agents in Banking and Payments (Sardine)](https://www.sardine.ai/blog/ai-agents-payments)
	- [How AI Can Unlock Micropayments for Better Content Monetisation (Medium)](https://medium.com/dappier/how-ai-can-unlock-micropayments-for-better-content-monetization-966b0f9439b1)
	- [Understanding the Lightning Network (ZebPay)](https://zebpay.com/blog/understanding-the-lightning-network-the-future-of-btc-transactions)
	- [The Bitcoin Lightning Network (NYDIG)](https://www.nydig.com/learn/the-bitcoin-lightning-network)
	- [Jack Dorsey-Backed Nostr Emerges as Bitcoin’s Social Layer (Bitcoin Magazine)](https://bitcoinmagazine.com/technical/jack-dorsey-backed-nostr-emerges-as-bitcoins-social-layer-at-riga-conference-)
	- [Unlocking Decentralised Payments (Murray Rudd)](https://www.murrayrudd.pro/unlocking-decentralized-payments-insights-from-nostrs-bitcoin-integration/)
	- [Monetisation Within The Nostr Ecosystem (The Bitcoin Manual)](https://thebitcoinmanual.com/articles/monetisation-nostr-ecosystem/)
	- [Designing Digital Payment Experiences (ResearchGate)](https://www.researchgate.net/publication/378550360_Designing_Digital_Payment_Experiences_The_Crucial_Role_of_User-Centered_Design_and_Effective_User_Feedback_Integration)
	- [The Psychology Behind Micropayments (Medium)](https://medium.com/dreamcommerce/the-psychology-behind-micropayments-how-they-match-our-modern-world-4d7aaf47449d)
	- [Factors Influencing the Adoption of Electronic Payment Cards (IISTE)](https://www.iiste.org/Journals/index.php/RJFA/article/view/19147)
	- [How Behavioural Science Can Unleash Digital Payments Adoption (Simon-Kucher)](https://www.simon-kucher.com/sites/default/files/2019-01/SimonKucher_Report_Payment%20Adoption_Final.pdf)
	- [Ethical Implications and Challenges of AI in Business Operations (ResearchGate)](https://www.researchgate.net/publication/387653122_Ethical_Implications_and_Challenges_of_AI_Implementation_in_Business_Operations)
	- [Ethical Considerations for AI Financial Planning (OneStream)](https://www.onestream.com/blog/ethical-considerations-for-ai-financial-planning/)

- #### Inherent Weaknesses
	- Ethereum faces a unique dilemma, often overshadowed by its technological capabilities. Unlike Bitcoin (BTC), which has solidified its role as a stable and reliable store of value, Ethereum’s value proposition is more complex and, ultimately, paradoxical. The following points elaborate on this conundrum:
		- **Lack of Monetary Certainty:** Ethereum’s mutable supply schedule and governance model introduce a level of uncertainty not found in Bitcoin.
		- **Equity-like Characteristics:** Ethereum acts more like a share in a semi-decentralised corporation than a straightforward asset, deriving its value from expected future transaction fees.
	- These attributes lead to a value paradox that is two-fold:
		- **Fee Dilemma:** High transaction fees, while beneficial for Ethereum’s perceived value, deter usage and drive decentralised finance (DeFi) applications to other platforms.
		- **Scalability Trap:** Attempts to scale the platform and lower fees would, counterintuitively, reduce Ethereum’s intrinsic value by decreasing its future cash flows.
	- This presents a catch-22 situation where Ethereum’s value is fundamentally limited by its own economic model. If the asset’s value drops significantly, it could undermine the security of the entire platform, making it less reliable for settling large transactions.
	- In the long run, this creates a feedback loop that could, theoretically, push Ethereum’s value towards zero. This issue casts a shadow over Ethereum’s long-term viability, presenting a challenge that goes beyond mere technical scalability.

- #### Inherent Weaknesses
	- Ethereum faces a unique dilemma, often overshadowed by its technological capabilities. Unlike Bitcoin (BTC), which has solidified its role as a stable and reliable store of value, Ethereum’s value proposition is more complex and, ultimately, paradoxical. The following points elaborate on this conundrum:
		- **Lack of Monetary Certainty:** Ethereum’s mutable supply schedule and governance model introduce a level of uncertainty not found in Bitcoin.
		- **Equity-like Characteristics:** Ethereum acts more like a share in a semi-decentralised corporation than a straightforward asset, deriving its value from expected future transaction fees.
	- These attributes lead to a value paradox that is two-fold:
		- **Fee Dilemma:** High transaction fees, while beneficial for Ethereum’s perceived value, deter usage and drive decentralised finance (DeFi) applications to other platforms.
		- **Scalability Trap:** Attempts to scale the platform and lower fees would, counterintuitively, reduce Ethereum’s intrinsic value by decreasing its future cash flows.
	- This presents a catch-22 situation where Ethereum’s value is fundamentally limited by its own economic model. If the asset’s value drops significantly, it could undermine the security of the entire platform, making it less reliable for settling large transactions.
	- In the long run, this creates a feedback loop that could, theoretically, push Ethereum’s value towards zero. This issue casts a shadow over Ethereum’s long-term viability, presenting a challenge that goes beyond mere technical scalability.


## Academic Context

- Brief contextual overview
	- Blockchain transactions are the fundamental units of activity within a distributed ledger, representing the transfer of value or data between participants
	- The concept is rooted in cryptographic protocols, distributed systems, and consensus theory, with origins in the Bitcoin whitepaper (Nakamoto, 2008)
	- Transactions are designed to be secure, verifiable, and resistant to tampering, forming the backbone of trustless digital exchange

- Key developments and current state
	- Modern blockchain transactions support not only cryptocurrency transfers but also smart contract execution, token swaps, and asset registration
	- The lifecycle of a transaction—initiation, propagation, validation, and settlement—remains consistent across most public and permissioned blockchains
	- Academic research continues to explore scalability, privacy, and interoperability, with a growing emphasis on regulatory compliance and real-world integration

- Academic foundations
	- Cryptographic hashing ensures data integrity and immutability
	- Consensus mechanisms (e.g., Proof of Work, Proof of Stake) provide distributed agreement on transaction validity
	- Peer-to-peer networking enables decentralised propagation and validation

## Current Landscape (2025)

- Industry adoption and implementations
	- Blockchain transactions are now integral to financial services, supply chain management, healthcare, and public sector applications
	- Major platforms include Ethereum, Bitcoin, Cardano, and Hyperledger Fabric, each supporting a range of transaction types and use cases
	- In the UK, blockchain transactions are increasingly used for cross-border payments, digital identity, and asset tokenisation

- Notable organisations and platforms
	- Visa and Mastercard have integrated blockchain for payment settlement and reconciliation
	- UK-based firms such as Quant and Fetch.ai are pioneering blockchain solutions for enterprise and government use
	- The Bank of England is exploring blockchain for central bank digital currency (CBDC) transactions

- UK and North England examples where relevant
	- Manchester’s Digital Health Enterprise Zone is trialling blockchain for secure patient data exchange
	- Leeds-based fintechs are leveraging blockchain for transparent supply chain finance
	- Newcastle’s Smart City initiatives use blockchain for energy trading and local government record-keeping
	- Sheffield’s Advanced Manufacturing Research Centre is experimenting with blockchain for industrial asset tracking

- Technical capabilities and limitations
	- Transactions are typically irreversible once confirmed, providing strong security but limited recourse in case of error
	- Throughput and latency remain challenges, especially for public blockchains, though layer-2 solutions and sharding are improving performance
	- Privacy-preserving techniques (e.g., zero-knowledge proofs) are being adopted to address confidentiality concerns

- Standards and frameworks
	- ISO/TC 307 develops international standards for blockchain and distributed ledger technologies
	- The UK’s National Cyber Security Centre (NCSC) provides guidance on secure blockchain implementation
	- Industry consortia such as the Enterprise Ethereum Alliance and the Blockchain for Europe initiative promote interoperability and best practices

## Research & Literature

- Key academic papers and sources
	- Nakamoto, S. (2008). Bitcoin: A Peer-to-Peer Electronic Cash System. https://bitcoin.org/bitcoin.pdf
	- Buterin, V. (2014). A Next-Generation Smart Contract and Decentralized Application Platform. Ethereum Whitepaper. https://ethereum.org/en/whitepaper/
	- Cachin, C., & Vukolić, M. (2017). Blockchain Consensus Protocols in the Wild. Proceedings of the 31st International Symposium on Distributed Computing. https://doi.org/10.4230/LIPIcs.DISC.2017.1
	- Zyskind, G., Nathan, O., & Pentland, A. (2015). Decentralizing Privacy: Using Blockchain to Protect Personal Data. IEEE Security and Privacy Workshops. https://doi.org/10.1109/SPW.2015.27

- Ongoing research directions
	- Scalability solutions such as rollups, sidechains, and sharding
	- Privacy-enhancing technologies, including zero-knowledge proofs and homomorphic encryption
	- Regulatory compliance and legal frameworks for blockchain transactions
	- Interoperability between different blockchain networks and legacy systems

## UK Context

- British contributions and implementations
	- The UK has been a leader in blockchain research and policy, with institutions such as the Alan Turing Institute and the University of Cambridge driving innovation
	- The Financial Conduct Authority (FCA) has established regulatory sandboxes for blockchain-based financial products
	- The UK government has funded blockchain pilots in areas such as land registry and digital identity

- North England innovation hubs (if relevant)
	- Manchester is home to the Blockchain Research Institute, focusing on healthcare and supply chain applications
	- Leeds hosts the Digital Catapult, supporting blockchain startups and SMEs
	- Newcastle’s Centre for Cybercrime and Computer Crime Studies explores blockchain forensics and security
	- Sheffield’s Advanced Manufacturing Research Centre collaborates with industry on blockchain for industrial IoT

- Regional case studies
	- Manchester’s NHS Digital Health Enterprise Zone uses blockchain for secure patient data sharing, reducing administrative overhead and improving data integrity
	- Leeds-based fintechs have implemented blockchain for cross-border trade finance, enabling faster settlement and reduced fraud
	- Newcastle’s Smart City blockchain platform facilitates peer-to-peer energy trading, empowering local communities to manage their own energy resources
	- Sheffield’s manufacturing sector is trialling blockchain for supply chain transparency, ensuring ethical sourcing and product authenticity

## Future Directions

- Emerging trends and developments
	- Increased adoption of blockchain for non-financial use cases, such as voting, identity, and intellectual property
	- Growth of decentralised finance (DeFi) and tokenised assets, with a focus on regulatory compliance
	- Integration of blockchain with artificial intelligence and the Internet of Things

- Anticipated challenges
	- Balancing privacy with transparency and regulatory requirements
	- Ensuring scalability and sustainability as transaction volumes grow
	- Addressing legal and jurisdictional issues in cross-border transactions

- Research priorities
	- Developing robust, privacy-preserving consensus mechanisms
	- Exploring the social and economic impact of blockchain transactions
	- Investigating the long-term security and resilience of blockchain networks

## References

1. Nakamoto, S. (2008). Bitcoin: A Peer-to-Peer Electronic Cash System. https://bitcoin.org/bitcoin.pdf
2. Buterin, V. (2014). A Next-Generation Smart Contract and Decentralized Application Platform. Ethereum Whitepaper. https://ethereum.org/en/whitepaper/
3. Cachin, C., & Vukolić, M. (2017). Blockchain Consensus Protocols in the Wild. Proceedings of the 31st International Symposium on Distributed Computing. https://doi.org/10.4230/LIPIcs.DISC.2017.1
4. Zyskind, G., Nathan, O., & Pentland, A. (2015). Decentralizing Privacy: Using Blockchain to Protect Personal Data. IEEE Security and Privacy Workshops. https://doi.org/10.1109/SPW.2015.27
5. ISO/TC 307. Blockchain and distributed ledger technologies. https://www.iso.org/committee/6732677.html
6. National Cyber Security Centre (NCSC). Blockchain guidance. https://www.ncsc.gov.uk/collection/blockchain
7. Enterprise Ethereum Alliance. https://entethalliance.org/
8. Blockchain for Europe. https://blockchain4europe.eu/
9. Alan Turing Institute. Blockchain research. https://www.turing.ac.uk/research/blockchain
10. Financial Conduct Authority (FCA). Regulatory sandbox. https://www.fca.org.uk/firms/regulatory-sandbox
11. Digital Catapult. Blockchain support. https://www.digit.catapult.org.uk/
12. Centre for Cybercrime and Computer Crime Studies, Newcastle University. https://www.ncl.ac.uk/cybercrime/
13. Advanced Manufacturing Research Centre, University of Sheffield. https://www.amrc.co.uk/
14. NHS Digital Health Enterprise Zone, Manchester. https://www.digitalhealthenterprisezone.com/
15. Smart City blockchain platform, Newcastle. https://www.newcastle.gov.uk/smartcity
16. DeFi Pulse. https://defipulse.com/
17. World Economic Forum. Blockchain for supply chain. https://www.weforum.org/projects/blockchain-for-supply-chain

And there you have it: a blockchain transaction, from Manchester to the metaverse, with a dash of British wit and a healthy respect for the immutable ledger.


## Metadata


- **Migration Status**: Ontology block enriched on 2025-11-12
- **Last Updated**: 2025-11-12
- **Review Status**: Comprehensive editorial review
- **Verification**: Academic sources verified
- **Regional Context**: UK/North England where applicable


