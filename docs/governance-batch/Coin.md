title:: Coin
governance-relevance:: High
blockchain-relevance:: High
categories:: digital-economy, token-economics
processed-date:: 2025-11-14T13:43:07.791191
processor:: Governance-Processor

- ### OntologyBlock
  id:: coin-ontology
  collapsed:: true

  - **Identification**

    - domain-prefix:: BC

    - sequence-number:: 0098

    - filename-history:: ["BC-0098-coin.md"]
    - ontology:: true
    - term-id:: BC-0098
    - preferred-term:: Coin
    - source-domain:: blockchain
    - status:: complete
    - public-access:: true
    - version:: 1.0.0
    - last-updated:: 2025-10-28

  - **Definition**
    - definition:: Native blockchain asset within blockchain systems, providing essential functionality for distributed ledger technology operations and properties.
    - maturity:: mature
    - source:: [[ISO/IEC 23257:2021]], [[IEEE 2418.1]], [[NIST NISTIR]]
    - authority-score:: 0.95

  - **Semantic Classification**
    - owl:class:: bc:Coin
    - owl:physicality:: VirtualEntity
    - owl:role:: Object
    - owl:inferred-class:: bc:VirtualObject
    - belongsToDomain:: [[TokenEconomicsDomain]]
    - implementedInLayer:: [[EconomicLayer]]

  - #### Relationships
    id:: coin-relationships
    - is-subclass-of:: [[Blockchain Entity]], [[EconomicMechanism]]

  - #### OWL Axioms
    id:: coin-owl-axioms
    collapsed:: true
    - ```clojure
      Prefix(:=<http://metaverse-ontology.org/blockchain#>)
Prefix(owl:=<http://www.w3.org/2002/07/owl#>)
Prefix(rdf:=<http://www.w3.org/1999/02/22-rdf-syntax-ns#>)
Prefix(xml:=<http://www.w3.org/XML/1998/namespace>)
Prefix(xsd:=<http://www.w3.org/2001/XMLSchema#>)
Prefix(rdfs:=<http://www.w3.org/2000/01/rdf-schema#>)
Prefix(dct:=<http://purl.org/dc/terms/>)

Ontology(<http://metaverse-ontology.org/blockchain/BC-0098>
  Import(<http://metaverse-ontology.org/blockchain/core>)

  ## Class Declaration
  Declaration(Class(:Coin))

  ## Subclass Relationships
  SubClassOf(:Coin :EconomicMechanism)
  SubClassOf(:Coin :BlockchainEntity)

  ## Essential Properties
  SubClassOf(:Coin
    (ObjectSomeValuesFrom :partOf :Blockchain))

  SubClassOf(:Coin
    (ObjectSomeValuesFrom :hasProperty :Property))

  ## Data Properties
  DataPropertyAssertion(:hasIdentifier :Coin "BC-0098"^^xsd:string)
  DataPropertyAssertion(:hasAuthorityScore :Coin "1.0"^^xsd:decimal)
  DataPropertyAssertion(:isFoundational :Coin "true"^^xsd:boolean)

  ## Object Properties
  ObjectPropertyAssertion(:enablesFeature :Coin :BlockchainFeature)
  ObjectPropertyAssertion(:relatesTo :Coin :RelatedConcept)

  ## Annotations
  AnnotationAssertion(rdfs:label :Coin "Coin"@en)
  AnnotationAssertion(rdfs:comment :Coin
    "Native blockchain asset"@en)
  AnnotationAssertion(dct:description :Coin
    "Foundational blockchain concept with formal ontological definition"@en)
  AnnotationAssertion(:termID :Coin "BC-0098")
  AnnotationAssertion(:priority :Coin "1"^^xsd:integer)
  AnnotationAssertion(:category :Coin "economic-incentive"@en)
)
      ```

- ## About Coin
  id:: coin-about

  - Native blockchain asset within blockchain systems, providing essential functionality for distributed ledger technology operations and properties.
  -
  - ### Key Characteristics
    id:: coin-characteristics
    - 1. **Definitional Property**: Core defining characteristic
    - 2. **Functional Property**: Operational behavior
    - 3. **Structural Property**: Compositional elements
    - 4. **Security Property**: Security guarantees provided
    - 5. **Performance Property**: Efficiency considerations
  -
  - ### Technical Components
    id:: coin-components
    - **Implementation**: How concept is realized technically
    - **Verification**: Methods for validating correctness
    - **Interaction**: Relationships with other components
    - **Constraints**: Technical limitations and requirements
  -
  - ### Use Cases
    id:: coin-use-cases
    - **1. Core Blockchain Operation**
    - **Application**: Fundamental blockchain functionality
    - **Example**: Practical implementation in major blockchains
    - **Requirements**: Technical prerequisites
    - **Benefits**: Value provided to blockchain systems
  -
  - ### 2024-2025: Coin Ecosystem Maturation
    id:: coin-recent-developments

    The cryptocurrency coin ecosystem experienced remarkable maturation from 2024 through 2025, transitioning from speculative assets to functional infrastructure supporting global finance, AI agent economies, and institutional treasury management. Bitcoin's role as "native currency of AI" gained traction as autonomous agents required programmable, borderless payment rails without traditional banking intermediaries.

    #### Bitcoin as AI-Native Currency
    Bitcoin processed over **1 billion transactions** by 2024, establishing itself as proven infrastructure for micropayments and machine-to-machine commerce. Industry observers including David Marcus posited that "Bitcoin is going to be the native currency of AI"—whilst this merited appropriate skepticism given his industry insider status, the technical rationale held merit. AI agents required censorship-resistant, instantly verifiable payments without human approval—precisely Bitcoin's design parameters.

    The Bitcoin development ecosystem comprised approximately **500 dedicated developers** out of a broader cryptocurrency pool of 9,000 contributors (predominantly distributed across Ethereum and Solana projects). Development emphasis remained on careful iteration to preserve network integrity, with innovation increasingly shifting to Layer 2 and Layer 3 protocols (Lightning Network, RGB) that enabled programmable assets and smart contracts whilst inheriting Bitcoin's security.

    #### Institutional and Sovereign Adoption
    According to Chainalysis' 2024 Crypto Adoption Index, **India, Nigeria, and Vietnam** led per capita adoption, whilst the **United States** ranked fourth driven by institutional investment. The U.S. held 207,189 BTC ($20.24 billion) seized from criminal investigations. In a watershed moment, **the United States established a Strategic Bitcoin Reserve in March 2025** through executive order, becoming the first nation to hold Bitcoin as a national reserve asset—fundamentally legitimising cryptocurrency as sovereign treasury holdings.

    China held 194,000 BTC ($18.95 billion) confiscated from the PlusToken Ponzi scheme, though official policy remained restrictive towards public cryptocurrency usage. This dichotomy—governments accumulating Bitcoin whilst restricting citizen access—illustrated the asset's perceived strategic value despite ideological opposition to decentralised finance.

    #### Bitcoin Development and Infrastructure
    Development continued across multiple codebases: **Bitcoin Core** (C++, historical reference implementation), **LibBitcoin** (C++ alternative), **BTCD** (Go), and **BitcoinJ** (Java). As Layer 1 innovation slowed deliberately, development attention shifted to protocols interacting with the base layer: **Lightning Network** for payments, **RGB Protocol** for smart contracts and digital assets, **Nostr** for decentralised identity, and emerging infrastructure for decentralised storage (Bitstream, Durabit).

    The multi-trillion-dollar digital asset class now served over 100 million Bitcoin users specifically, with the broader cryptocurrency ecosystem exceeding 500 million users. Individuals rather than institutions owned the majority of supply—a distribution pattern differentiating Bitcoin from traditional assets where institutional concentration dominated.

    #### Stablecoin Dominance: The Shadow Banking System

    Whilst Bitcoin captured headlines and speculative attention, **stablecoins**—particularly USDT and USDC—represented the dominant cryptocurrency use case by **transfer volume**, creating a **de facto shadow banking system** processing trillions monthly:

    **Market Scale and Growth:**
    - **Total stablecoin market capitalisation**: Reached **$251.7 billion** by mid-2025, representing **63% growth** in 12 months. This exceeded the combined market capitalisation of numerous traditional mid-cap companies and approached the size of small-nation money supplies

    - **Monthly transfer volumes**: Stablecoins processed **over $5 trillion** in monthly transfer volume by early 2025, with **USDC alone accounting for $2.7 trillion** (up from $1.1 trillion in February 2024). For context, this exceeded the monthly transaction volume of **PayPal** ($1.36 trillion in 2024) and approached **Visa's global payment volume** ($14 trillion annually, ~$1.2 trillion monthly)

    - **Active users**: Stablecoin active addresses increased from **19.6 million** (February 2024) to **30 million** (February 2025), representing 53% growth in active participants

    **Tether (USDT) vs. Circle (USDC) Duopoly:**
    - **Tether (USDT)**: Maintained **$155 billion** market capitalisation (approximately **65-70% market share**) by mid-2025, remaining the largest stablecoin despite regulatory pressures and persistent concerns around reserve transparency. USDT's dominance reflected network effects in **peer-to-peer remittance markets** and **developing economies** where users prioritised accessibility over regulatory pedigree. However, institutional adoption **decreased** as compliance-focused entities migrated to USDC

    - **USD Coin (USDC)**: Grew to **$64 billion** market capitalisation (**24.3% market share** in Q1 2025), representing **over 100% growth** in 2024-2025. USDC's **institutional positioning**—full reserve attestations by major accounting firms, compliance with U.S. regulations, partnerships with traditional finance (Visa, PayPal)—attracted **institutional and enterprise adoption**. When measured by transfer volume rather than market cap, USDC dominated with **66% market share** ($2.7 trillion monthly), reflecting its role as **institutional payment infrastructure** rather than merely a store of value

    **Geographic Adoption and the "Dollarisation 2.0" Phenomenon:**
    - **Sub-Saharan Africa** led global stablecoin adoption with **9.3% of residents** using stablecoins by 2025, surpassing even cryptocurrency-enthusiastic Asia-Pacific regions
    - **Nigeria** topped global rankings: **11.9% of Nigerians** (approximately **25.9 million people**) used stablecoins, driven by naira instability, capital controls, and remittance needs
    - **Argentina, Turkey, Venezuela**: Countries experiencing chronic inflation (Argentina's 100%+ annual inflation, Turkey's 60%+) witnessed mass migration to stablecoins as **inflation hedges** and **dollar substitutes**, creating **"Dollarisation 2.0"** where citizens held digital dollars outside government control rather than physical cash

    This geographic pattern revealed stablecoins' **primary utility**: not blockchain experimentation or Web3 speculation, but **monetary stability and capital flight** in contexts of fiat currency failure.

    **Regulatory Watershed: EU MiCA and U.S. GENIUS Act:**

    2024-2025 marked stablecoins' transition from **regulatory grey zone** to **formally regulated instruments** in major jurisdictions:

    - **EU Markets in Crypto-Assets (MiCA) Regulation** (effective mid-2024): Established **comprehensive standards** for stablecoin issuers operating in European Union:
      - **Full reserve requirements**: Stablecoin issuers must hold **1:1 reserves** in cash or liquid equivalents for every token issued
      - **Transparency obligations**: Regular third-party audits and public reserve disclosures
      - **Authorised issuer requirements**: Only EU-licensed entities or equivalent foreign entities could offer stablecoins to EU users
      - **Market impact**: On **March 3, 2025**, Binance (world's largest cryptocurrency exchange) **delisted multiple prominent stablecoins** including USDT, TrueUSD (TUSD), Pax Dollar (USDP), Dai (DAI), and First Digital USD (FDUSD) for European users due to non-compliance with MiCA, effectively forcing migration to **MiCA-compliant alternatives**, primarily **USDC**. This regulatory-driven market restructuring represented the most dramatic stablecoin market shift since the 2022 TerraUSD (UST) collapse

    - **U.S. GENIUS Act** (passed U.S. House **July 17, 2025**): Implemented the **first federal regulatory framework** for U.S. dollar stablecoins, establishing:
      - **Payment stablecoin issuer registration** with federal banking regulators (OCC, Federal Reserve, or state banking departments for smaller issuers)
      - **Reserve composition requirements**: Minimum percentages held in U.S. Treasury bills, cash, and overnight repurchase agreements
      - **Monthly attestations** by independent auditors
      - **Prohibition on unbacked algorithmic stablecoins** (eliminating TerraUSD-style designs)

    The U.S. framework's passage reflected political consensus that stablecoins represented **strategic national interest**: expanding dollar hegemony into digital economies, providing payment infrastructure for blockchain ecosystems, and potentially offering **central bank digital currency (CBDC) functionality** without government-operated systems.

    **Blockchain Distribution Dynamics:**
    - **Ethereum** maintained dominance for stablecoin issuance (approximately **60-65%** of total supply), reflecting its **smart contract maturity** and institutional preference for battle-tested infrastructure
    - **Tron** hosted approximately **45-50% of USDT supply** by mid-2025, driven by **near-zero transaction fees** making it preferred for **peer-to-peer remittances** in Asia and Africa (Tron fees ~$0.01 vs. Ethereum ~$0.50-2.00 for stablecoin transfers)
    - **Solana** emerged as **fastest-growing stablecoin network**, expanding from **1.6% to 5.4% market share** through 2024-2025, driven by **high-frequency trading** and **meme coin speculation** requiring fast, cheap settlements
    - **Base** (Coinbase's Layer 2) grew from **0.2% to 1.8%**, reflecting **institutional on-ramp integration** (Coinbase users could seamlessly transfer USDC to Base for DeFi/Web3 applications)

    #### Meme Coin Mania: Speculation as Social Coordination

    In stark contrast to stablecoins' utilitarian purpose, **meme coins** represented cryptocurrency's **pure speculative frontier**, where coins with no technical innovation or utility accrued **tens of billions** in market capitalisation through social coordination, viral marketing, and retail FOMO (fear of missing out):

    **Market Explosion:**
    - **Total meme coin market capitalisation**: Grew from approximately **$20 billion** (January 2024) to peak **$132 billion** (December 2024)—a **560% increase**—before consolidating to approximately **$73-90 billion** by early 2025. This represented approximately **3-4% of total cryptocurrency market capitalisation**, comparable to the market cap of **mid-sized U.S. corporations** (e.g., Ford Motor Company, Delta Air Lines)

    **Leading Meme Coins Performance:**
    - **Dogecoin (DOGE)**: The original 2013 joke coin maintained **$27+ billion** market capitalisation by mid-2025, ranking among **top 10 cryptocurrencies** by market cap (surpassing legitimate DeFi protocols, enterprise blockchains, and utility tokens). DOGE surged **221% in 30 days** during late 2024 bull market, driven by **Elon Musk's continued public endorsements** and speculation around potential **Twitter/X payment integration** (never materialised). Dogecoin dominated meme coin market share at approximately **53%**

    - **Shiba Inu (SHIB)**: The "Dogecoin killer" (launched 2020) held **$8.5 billion** market capitalisation, representing approximately **44% of meme coin market share** and **53% price surge** in 30 days. SHIB's ecosystem expansion—**ShibaSwap** decentralised exchange, **Shibarium** Layer 2 blockchain, metaverse and NFT initiatives—attempted to add **utility justifications** to speculative meme origins, though critics dismissed these as **post-hoc rationalisations**

    - **Pepe (PEPE)**: The **2023 breakout meme coin** based on the internet meme character achieved **125% price surge** in 30 days and **surpassed Dogecoin in 24-hour trading volume** (**$3.88 billion** vs. **$1.9 billion**), signalling new-generation meme coins challenging incumbents. PEPE's zero-utility positioning—explicitly marketed as "useless meme coin"—represented **meme coin purism**: rejecting utility theatre in favour of honest speculation

    - **Dogwifhat (WIF)**: **Solana-based meme coin** featuring a dog wearing a hat briefly achieved **#3 meme coin ranking** by market cap, eclipsing PEPE during 2024-2025 Solana ecosystem revival. **Binance listing** (early 2025) triggered immediate **25% price jump**, demonstrating exchange listings' market-making power for meme coins. WIF's success reflected **Solana's meme coin casino** positioning—fast transactions and low fees enabled **high-frequency meme coin trading** inaccessible on Ethereum's higher-cost infrastructure

    **Sociological Phenomenon and Criticism:**

    Meme coins represented **speculative social coordination** without pretense of technological innovation:

    - **Nihilistic speculation**: Unlike utility tokens claiming governance, payments, or infrastructure functionality, meme coins embraced **explicit purposelessness**—value derived entirely from **collective belief** and **network effects**, mirroring fiat currency's fundamentals (dollars have value because others believe they have value) without central authority backing

    - **Community-as-product**: Meme coin value proposition centred on **community engagement**, viral marketing, and social media coordination rather than technical roadmaps. Success required **sustained attention economy manipulation**—memes, influencer endorsements, celebrity involvement (Elon Musk for Dogecoin, various celebrities for SHIB/PEPE)

    - **Retail wealth redistribution or extraction?**: Proponents argued meme coins **democratised speculation**, enabling retail participants to achieve life-changing gains (e.g., early DOGE/SHIB buyers achieving 10,000%+ returns). Critics countered meme coins constituted **negative-sum gambling** where early buyers extracted wealth from late entrants (greater fool theory), with **whale holders** controlling supply and orchestrating pump-and-dump schemes

    - **Regulatory ambiguity**: Unlike securities with clear investment contracts or utility tokens with functional purposes, meme coins existed in **regulatory grey zones**—clearly speculative assets but lacking security characteristics under Howey test. Regulators largely ignored meme coins through 2024-2025, focusing enforcement on stablecoins, DeFi protocols, and exchange operators

    **Declining Dominance and Market Maturation:**

    By mid-2025, **meme coin dominance declined** within broader altcoin markets after peak late-2024 enthusiasm:

    - **Market share contraction**: Meme coins declined from **4-5% of total crypto market cap** (peak December 2024) to **2-3%** (mid-2025) as capital rotated toward **AI-crypto tokens**, **real-world asset (RWA) tokenisation**, and **institutional DeFi** protocols offering revenue generation rather than pure speculation

    - **Correction risks**: Technical analysts warned DOGE, SHIB, PEPE, and WIF exhibited **overextension** following 2024 rallies, with potential **30-50% corrections** during bear market phases—typical meme coin boom-bust cycles

    The meme coin phenomenon exposed cryptocurrency's **dual nature**: simultaneously **revolutionary financial infrastructure** (stablecoins processing trillions) and **speculative gambling casino** (meme coins with zero utility accruing billions)—a tension defining the ecosystem's legitimacy battles with regulators and traditional finance.
  -
  - ### Standards & References
    id:: coin-standards
    - [[ISO/IEC 23257:2021]] - Blockchain and distributed ledger technologies
    - [[IEEE 2418.1]] - Blockchain and distributed ledger technologies
    - [[NIST NISTIR]] - Blockchain and distributed ledger technologies
  -

- # Why is this section here?
	- Bitcoin allows value and ideas to be transmitted over the internet, gaining the moniker "magic internet money".
	- This feature set is scalable and open-source.
	- It is a multi-trillion-dollar digital asset class with over 100 million users, and the wider crypto ecosystem has over 500 million users.
	- Individuals own most of the asset.
	- ![photo_2024-10-13_11-25-10.jpg](assets/photo_2024-10-13_11-25-10_1728815458639_0.jpg)
	- It is ideal for AI agent economic action.
	- {{video https://www.youtube.com/watch?v=y48uAeHwZGg}}
		- [Wicked on X: "#Bitcoin has officially processed over 1 billion transactions. https://t.co/kS704YYoW5" / X (twitter.com)](https://twitter.com/w_s_bitcoin/status/1787240456197222632)
		- [David Marcus says #Bitcoin is “going to be the native currency of AI”](https://twitter.com/BitcoinMagazine/status/1785824384961151131) - note he is now an industry insider, take this with an appropriate pinch of salt.
			- {{twitter https://twitter.com/BitcoinMagazine/status/1785824384961151131}}
- An old video I made in 2021
	- {{video https://youtu.be/Tq-kvADT4xE}}
- ![image.png](assets/image_1710363853647_0.png){:width 300}
-

	- #### The Bitcoin Network Software
		- There isn’t a single GitHub which can be considered the final arbiter of the development direction, because it is a distributed community effort with some [500 developers](https://decrypt.co/66740/who-are-the-fastest-growing-developer-communities-in-crypto) out of a wider ‘crypto’ pool of around 9000 contributors (the vast majority are spread across disparate Ethereum and some Solana projects). [Development and innovation continues](https://bitcoinops.org/en/newsletters/2021/12/22/) but there is an emphasis on careful iteration to avoid damage to the network. Visualization of code commitments to the various open-source software repositories can be seen at [Bitpaint YouTube channel](https://www.youtube.com/channel/UC4DT4qudqogkmbqVAQy8eFg/videos).
		  ![image](./assets/ae27e917fbfbdd847e6f9d89e5518433a4503ee0.jpg)
		- [Bitcoin Core](https://github.com/bitcoin/) is the main historical effort (with around a dozen major contributors guiding the direction), but there are alternatives ([LibBitcoin in C++](https://github.com/libbitcoin/libbitcoin-node/wiki), [BTCD in Go](https://github.com/btcsuite/btcd), and [BitcoinJ in Java](https://bitcoinj.github.io/getting-started)), and as innovation on layer one slows, attention is shifting to codebases which interact with the base layer asset. Much more on these later.
	- For details on how Bitcoin is created see [[Bitcoin Mining]]

- # Decentralised storage
	- [bitstream](https://robinlinus.com/bitstream.pdf)
	- [git](https://github.com/robinlinus/bitstream)
	- [Durabit torrent bitcoin storage](https://www.nobsbitcoin.com/durabit-whitepaper/)

	- ## Top Countries for Bitcoin Adoption
		- According to the Chainalysis "2024 Crypto Adoption Index" report, India, Nigeria, and Vietnam are leading the charge in per capita adoption. The United States ranks fourth, primarily driven by large transaction volumes and significant institutional investment. Other countries with notable adoption rates include Ukraine, the Philippines, Indonesia, Pakistan, Brazil, and Thailand.
		- | Country          | BTC Holdings  | Estimated Value (USD) | Source of Holdings                                                     |
		  |------------------|---------------|------------------------|-------------------------------------------------------------------------|
		  | United States    | 207,189 BTC   | $20.24 billion         | Seized from various criminal investigations, including the Silk Road case. In March 2025, the United States established a Strategic Bitcoin Reserve through an executive order, becoming the first nation to hold Bitcoin as a national reserve asset. |
		  | China            | 194,000 BTC   | $18.95 billion         | Confiscated from the PlusToken Ponzi scheme.                            |
		  | United Kingdom   | 61,000 BTC    | $5.96 billion          | Seized from money laundering and fraud cases.                           |
		  | Ukraine          | 46,351 BTC    | $4.53 billion          | Acquired through donations and government initiatives.                  |
		  | Bhutan           | 13,029 BTC    | $1.27 billion          | Obtained via state-run mining operations utilizing hydroelectric power. |
		  | El Salvador      | 5,942 BTC     | $580.54 million        | Actively purchased as part of national financial strategy.              |
		  | Finland          | 1,981 BTC     | $193.54 million        | Seized from criminal activities.                                       |
		- Global asset manager “Fidelity” wrote the following in their [2021 trends report](https://www.fidelitydigitalassets.com/articles/2021-trends-impact): “We also think there is a very high stakes game theory at play here, whereby if Bitcoin adoption increases, the countries that secure some bitcoin today will be better off competitively than their peers. Therefore, even if other countries do not believe in the investment thesis or adoption of Bitcoin, they will be forced to acquire some as a form of insurance. In other words, a small cost can be paid today as a hedge compared to a potentially much larger cost years in the future. We therefore wouldn’t be surprised to see other sovereign nation states acquire bitcoin in 2022 and perhaps even see a central bank make an acquisition.”
		-
		- According to [recent data](https://plasbit.com/blog/bitcoin-adoption-by-country), the top countries for Bitcoin adoption in 2024 are:
			- India: 75 million users
			- China: 38 million users
			- United States: 28 million users
			- Brazil: 25 million users
			- Indonesia: 23.5 million users
			- Turkey: (27.1% of population)
			- Vietnam (21.19%)
			- Philippines (23.4%)
			  https://www.triple-a.io/cryptocurrency-ownership-data).

- # Initial chats with AI
	- ```
	  make me a mermaid diagram as code showing an open agentic framework which incorporates nostr relays, bitcoin lightning, synthetic stablecoin dollars, anthropic model context protocol for open data connectors, distributed git, the solid protocol and anything else you think necessary
	  ```

			- #### **1. Overall Structure**
			  
			  ```mermaid
			  
			  graph TD;
			    A[Agents] -->|exchange requests| B[Nostr Relays];
			    A -->|make payments| C[Bitcoin Lightning Network];
			    A -->|manage stablecoins| D[Synthetic Stablecoin System];
			    A -->|enhance AI context| E[Anthropic Model Context Protocol];
			    A -->|store/code management| F[Distributed Git Repositories];
			    A -->|access user data| G[Solid Pods];
			    A -->|verify identities| H[Identity Management];
			    A -->|communicate via| I[API Gateways];
			    A -->|reach consensus| J[Consensus Mechanisms];
			    A -->|log activities| K[Logging System];
			    L[Coordinator Agent] -.-> A;
			  ```
				- **Dotted Arrows**: Optional relationships, like between **Agents** and a **Coordinator Agent**.
				- **Solid Connections**: Core interactions between components.
				  
				  ---

			- ### Key Technologies Integrated:
				- Nostr Relays for decentralized communication
				- Bitcoin Lightning Network for compute marketplace and payments
				- Synthetic Stablecoin Dollar Network
				- Anthropic Model Context Protocol
				- Distributed Git
				- Solid Protocol for identity

	- ## Title: The Advantages of Bitcoin

	- ### Introduction
	- Bitcoin.com's article explores the multiple benefits of Bitcoin, emphasizing its potential to revolutionize various aspects of finance and personal freedom.

	- ## Title: Bitcoin's Adoption in El Salvador: A Boon for the Unbanked

	- ### Introduction
	- El Salvador has become the first nation to formally adopt Bitcoin as legal tender.
	- This move could significantly benefit the unbanked population in the country.

	- ### Conclusion
	- El Salvador's adoption of Bitcoin is a groundbreaking move with potential benefits for its unbanked population but comes with significant risks and challenges that need careful consideration.
	- [Link to the article](https://thenextweb.com/news/el-salvador-first-adopt-bitcoin-real-money-good-news-unbanked-syndication)
	  
	  
	  https://www.cointribune.com/en/argentina-bitcoin-faces-100-inflation-rate/

	- ### Introduction
	- The article from Cointribune discusses Argentina's surging inflation rate, reaching 100% in February 2023, and the increasing adoption of Bitcoin as a response.

	- ### Conclusion
	- The article highlights the growing role of Bitcoin in countries like Argentina, where traditional financial systems are under stress due to extreme inflation, showcasing Bitcoin as a potential alternative for financial stability.
	- [Link to the article](https://www.cointribune.com/en/argentina-bitcoin-faces-100-inflation-rate/)
	  https://www.bbc.co.uk/news/world-africa-56169917
	  https://decrypt.co/125623/crooks-defi-crypto-fiat-treasury

		- ### Case Study: Tornado Cash
		- **Use by North Korean Hackers**: The Lazarus Group reportedly used Tornado Cash, a coin mixer, to launder over $96 million after hacking the Harmony Bridge protocol.
		- **Controversial Sanctions**: The Treasury Department sanctioned Tornado Cash in August, raising debates over financial privacy rights.

- # Why is this section here?
	- Bitcoin allows value and ideas to be transmitted over the internet, gaining the moniker "magic internet money".
	- This feature set is scalable and open-source.
	- It is a multi-trillion-dollar digital asset class with over 100 million users, and the wider crypto ecosystem has over 500 million users.
	- Individuals own most of the asset.
	- ![photo_2024-10-13_11-25-10.jpg](assets/photo_2024-10-13_11-25-10_1728815458639_0.jpg)
	- It is ideal for AI agent economic action.
	- {{video https://www.youtube.com/watch?v=y48uAeHwZGg}}
		- [Wicked on X: "#Bitcoin has officially processed over 1 billion transactions. https://t.co/kS704YYoW5" / X (twitter.com)](https://twitter.com/w_s_bitcoin/status/1787240456197222632)
		- [David Marcus says #Bitcoin is “going to be the native currency of AI”](https://twitter.com/BitcoinMagazine/status/1785824384961151131) - note he is now an industry insider, take this with an appropriate pinch of salt.
			- {{twitter https://twitter.com/BitcoinMagazine/status/1785824384961151131}}
- An old video I made in 2021
	- {{video https://youtu.be/Tq-kvADT4xE}}
- ![image.png](assets/image_1710363853647_0.png){:width 300}
-

	- #### The Bitcoin Network Software
		- There isn’t a single GitHub which can be considered the final arbiter of the development direction, because it is a distributed community effort with some [500 developers](https://decrypt.co/66740/who-are-the-fastest-growing-developer-communities-in-crypto) out of a wider ‘crypto’ pool of around 9000 contributors (the vast majority are spread across disparate Ethereum and some Solana projects). [Development and innovation continues](https://bitcoinops.org/en/newsletters/2021/12/22/) but there is an emphasis on careful iteration to avoid damage to the network. Visualization of code commitments to the various open-source software repositories can be seen at [Bitpaint YouTube channel](https://www.youtube.com/channel/UC4DT4qudqogkmbqVAQy8eFg/videos).
		  ![image](./assets/ae27e917fbfbdd847e6f9d89e5518433a4503ee0.jpg)
		- [Bitcoin Core](https://github.com/bitcoin/) is the main historical effort (with around a dozen major contributors guiding the direction), but there are alternatives ([LibBitcoin in C++](https://github.com/libbitcoin/libbitcoin-node/wiki), [BTCD in Go](https://github.com/btcsuite/btcd), and [BitcoinJ in Java](https://bitcoinj.github.io/getting-started)), and as innovation on layer one slows, attention is shifting to codebases which interact with the base layer asset. Much more on these later.
	- For details on how Bitcoin is created see [[Bitcoin Mining]]

- # Decentralised storage
	- [bitstream](https://robinlinus.com/bitstream.pdf)
	- [git](https://github.com/robinlinus/bitstream)
	- [Durabit torrent bitcoin storage](https://www.nobsbitcoin.com/durabit-whitepaper/)

	- # Bitcoin

		- ## Bitcoin as a culture war foil
			- Bitcoin’s online community skews very hard toward right wing libertarianism. This isn’t to say there are no other voices, but they are certainly outnumbered. This imbalance is almost certainly a product of the ESG concerns around the technology. There has been a notable increase in diversity of thought since the evolution of the energy narrative, but it persists. This leads to a paucity of voices in policymaking circles, and in the USA a strong delineation between policymakers along party lines. This kind of thing tends to be self reinforcing, and it seems very possible that the global liberal left will swing mainly against the technology, while the neoliberal right will be attracted more to it. As tensions increase so it seems does the online rhetoric. Even scientists now seem to agree that Bitcoin investors are calculating psychopaths.[[martin2022dark]] This leads to:

		- ## Self reinforcing monocultures
			- There are some powerful ‘pockets’ of fringe thinking within the [vocal, online, Bitcoincommunities](https://pourteaux.substack.com/p/bitcoin-culture-burn-it-to-the-ground?).The [mostpalatable](https://www.forbes.com/sites/peterizzo/2022/07/04/bitcoin-maximalism-is-dead-long-live-bitcoin-maximalism/?)of these are figures like [MichaelSaylor](https://www.saylor.org/about/), Elon Musk and Jack Dorsey, but there’s whole subcultural intersections around antivax, anti-woke, anti cancel culture, and fad diets. These are the so-called “[toxicmaximalists](https://blog.lopp.net/history-of-bitcoin-maximalism/)”.There are a disproportionate number of adherents of the failed global “neoliberal” economic experiment,[[va2010neoconservatism]] and not a few outright bigots. Lopp’s list linked above is an amusing roundup:
				- Carnivory
				- Laser eyes
				- Anti-woke
				- Weightlifting
				- Tradwife culture
				- Climate change denial
				- Overt Christian moralizing
				- “Have fun staying poor” retorts
				- Rejection of seed oils and sunscreen
				- Vaccine conspiracies, alt-health cure-alls
				- Contrarianism for the sake of contrarianism
				- Political populism and support of strongmen
				- “Fiat” criticism of contemporary art and architecture
			- As Lopp himself points out, it’s not that these things are necessarily wrong or bad, but more that adherence to the set became a purity testf or the whole space. It might seem that this isn’t terribly important, but Bitcoin viewed though the lens of these of these communities looks pretty strange to the newcomer.

	- #### Distributed exchanges
- There are dozens of decentralised exchanges deployed on variousblockchains. These platforms allow users to trade back and forth betweenvarious tokens (including ‘normal money’ stablecoins) and charge a feefor doing so. They operate within the logic of the smartcontracts,[[szabo1997formalizing]] within the distributed blockchains.This makes them extremely hard to ban, and as a result they operate in alegal grey area. At the extreme end of this is “distributed apps”(dApps) and “Decentralised Finance” (DeFi) which allows users access tocomplex financial instruments without legal or privacy constraints. DeFiwill be touched on briefly later.
- This is a huge area, and of only limited interest to the topics expandedin this book. It’s perhaps worth noting[BitcoinDEX](https://bitcoin-dex.net/about/index.html), which runs inJavaScript in a web browser. It is effectively uncensorable, [auditableby the user](https://bitcoin-dex.net/tokens.js), and has no counterparty risk since it operates entirely in the Bitcoin network. It isclearly an early prototype but manages this complex feature without themore expressive logic of more ‘modern’ public blockchains.
-

	- #### Distributed DNS applications
- There are many perceived problems with having centralised authoritiesfor overseeing the database which translates between human readableinternet names and the underlying machine-readable address notation. Thedatabases which manage this globally are already somewhat distributed,and this distributed trust model is managed through a cryptographicchain of trust called DNSSEC which is capped by a somewhat [bizarre keyceremony](https://www.iana.org/dnssec/ceremonies) seen in Figure<a href="#fig:dnssec" data-reference-type="ref" data-reference="fig:dnssec">2.6</a>.The authority around naming is centralised in ICANN.
- <figure><img src="./assets/27d09216a9dc4a6788c3c3d4b796983741349f54.jpg" id="fig:dnssec" alt="" /><figcaption><a href="https://www.internetsociety.org/blog/2016/10/watch-live-today-dnssec-root-ksk-ceremony-at-1700-utc/">DNSSEC ceremony in a faraday cage</a></figcaption></figure>
- There has been talk for many years about ‘properly’ distributing thisdatabase using decentralised/blockchaintechnologies[[karaarslan2018blockchain]]. The nature of this problemmeans that it either moves from control by ICANN, or it does not, and sofar it has not, but there are many attempted, and somewhat matureattempts, at this difficult problem. Of these[Namecoin](https://www.namecoin.org/) is the most prominent, and is afork of Bitcoin. The ubiquity of Bitcoin in such systems is perhapsbecoming apparent.
-

		- ##### Hyperbitcoinization
			- All of the above starts to look like convergence on something the crypto community regularly describes to itself within it’s internal media. Hyperbitcoinization is a term coined in 2014 by Daniel Krawisz.[[krawisz2014hyperbitcoinization]] It is the hypothetical rise of Bitcoin to become the global reserve currency, and the demonetisation of all other store of value assets. This seems unlikely but is hinted at in a game theoretic analysis of both Bitcoin and current macro economics. Again, Bitcoin is a likely very poor replacement for money. The ability to monetise assets through banks, backed by law and contracts (the debt based system), is a highly refined human concept, while Bitcoin is a fusion of Austrian economics, and a computer science project. The hyperbitcoinization idea finds it’s ultimate expression in Svalholm’s “Everything Divided by 21 Million”, a hypothetical re-accounting of all human production into the Bitcoin ledger.[[booth2022bitcoin]]
			- Nobody is sure what a [regular deflationary cycle](https://fredblog.stlouisfed.org/2022/07/inflation-and-deflation-with-a-fixed-money-supply/)might do to global supply chains. Malherbe et al. point out the inherent unsuitability of a deflationary asset such as Bitcoin as the global reserve currency[[malherbe2019cryptocurrencies]] and feel that perhaps other cryptocurrencies might be more suitable for adoption by governments. Interestingly this is the only paper to reference ‘Duality’(the only thing purportedly written by Satoshi Nakamoto after they left the project).
			- Writer and activist Cory Doctorow is [not a fan ofBitcoin](https://onezero.medium.com/the-byzantine-premium-8411521db843).He provides an excellent summary of what he sees as the [basic societalmistake](https://doctorow.medium.com/finance-caused-the-fall-of-rome-fd091fa02973)of the libertarian ideals around strong property rights and hard money. In a hyper bitcoinised world where debt law would be enforced by distributed code, it might be far harder to prevent the “fall of Rome” scenario he describes. It is notable that he is also [stronglyopposed](https://pluralistic.net/2023/03/09/autocomplete-worshippers/#the-real-ai-was-the-corporations-that-we-fought-along-the-way)to the current hype in AI and it’s possible this is just his stock in trade.
			- Fulgur Ventures (a venture capital firm) provide a [blog post series](https://medium.com/@fulgur.ventures/the-roads-to-hyperbitcoinization-part-1-27dc84d0e5e5) about the route this might take. It’s important to note that Budish suggested that the usefulness of Bitcoin (and blockchain) cannot exceed the cost to attack it. The is highly suggestive that hyperbitcoinisation is impossible.[[budish2018economic]] It’s beyond the scope of this book to look at the implications of all this.

	- ##### Litecoin, Vertcoin, and other networks
		- It is also possible to use the whole suit of ordinal based ideas on anyother chain such as Litecoin, the long standing Bitcoin fork which is used somewhat as a technical testbed for Bitcoin. This might develop into a far more appealing option, though again, it’s too early to be sure.
		- [Runes on Litecoin! : r/litecoin (reddit.com)](https://www.reddit.com/r/litecoin/comments/1ckwnu6/runes_on_litecoin/)

	- ## The potential opportunity offered by [[Bitcoin]]:
		- I have been studying Bitcoin technologies for the past 7 years. This novel ecosystem is a non-trivial disruptive force, and is now deeply threaded through my technical research.

		- ##### Paypal
			- The mainstream stablecoin
				- Paypal accomplish what Libra did not, and have launched a dollarstablecoin into the aggressive regulatory landscape in the USA.
				- PayPal is launching a new ERC-20 stablecoin called PayPal USD (PYUSD) pegged 1:1 to the US dollar and issued by Paxos
				- It will be compatible with the Ethereum ecosystem and can be transferred between PayPal and Ethereum wallets
				- The stablecoin will support P2P payments, PayPal checkout integration, and convertibility to other cryptocurrencies
				- PayPal’s massive reach could drive significant crypto adoption if users take up the stablecoin
				- Regulatory comfort with PayPal’s stablecoin shows preference for tradfi over non-compliant crypto firms. This embrace by lawmakers signals a shift to encourage crypto innovation from compliant US firms, not "shady" crypto natives
				- Likely pressures Congress to finalize clear stablecoin regulation to enable innovation
				- Fits growing trend of tradfi firms like BlackRock entering crypto as regulation tightens

- # Other things
	- [What Is Brollups? - The Bitcoin Manual](https://thebitcoinmanual.com/articles/brollups/)
	-

public:: true

- ![the-future-of-bitcoin-2-tokens.pdf](assets/the-future-of-bitcoin-2-tokens_1723564035683_0.pdf)
- [Note by Melvin Carvalho (primal.net)](https://primal.net/e/note1rneeteg526e9e9zqrst35c93y46xlayzn77augvfhcsutq0d39qscga4xa) [[Runes and Glyphs]]
	- ![5882083039473943016.jpg](assets/5882083039473943016_1723118472953_0.jpg)
	- [Note by Melvin Carvalho (primal.net)](https://primal.net/e/note1we622z6jpdl8xpuw2vy966ud8fgf0t40n009qxw3de4edc7gs55qrqldzp) [[Digital Objects]] [[Runes and Glyphs]] [[Testnet]]
- [Testnet Glyph Explorer (testcoin.org)](https://testcoin.org/)
- [Art (npub.info)](https://pages.npub.info/glyphs/TESTNETARTAAA/)
- [flossverse/rustyGlyphs: based on Melvin Carvalho glyphs and Runes protocols (github.com)](https://github.com/flossverse/rustyGlyphs)
- ![photo_2024-08-14_00-40-13.jpg](assets/photo_2024-08-14_00-40-13_1723627663591_0.jpg)
- [jeasonstudio/runestone: 👁‍🗨 Ordinals runestone javascript implementation (github.com)](https://github.com/jeasonstudio/runestone) [[Runes and Glyphs]]
- [jeasonstudio/runestone: 👁‍🗨 Ordinals runestone javascript implementation (github.com)](https://github.com/jeasonstudio/runestone) [[Runes and Glyphs]]
- [Testcoin Glyph Explorer](https://testcoin.org/glyphs.html#) [[Melvin Carvalho]] [[Testnet]] [[Runes and Glyphs]]
- [glyph-protocol/glyphs: glyph protocol (github.com)](https://github.com/glyph-protocol/glyphs) [[Runes and Glyphs]]
- [Testcoin Glyph Explorer](https://testcoin.org/glyphs.html#) [[Melvin Carvalho]] [[Testnet]] [[Runes and Glyphs]]
- [Runes Overview | Blockchain Analytics Dashboard (geniidata.com)](https://geniidata.com/user/Runes_is/runes-overview) [[Runes and Glyphs]]
-

public:: true

- ![stablecoinRelativeVolume.png](assets/stablecoinRelativeVolume_1721858969653_0.png)
- [Stablecoins Circulating - DefiLlama](https://defillama.com/stablecoins)
- <iframe src="https://defillama.com/stablecoins" style="width: 100%; height: 600px"></iframe>

	- ## Top Countries for Bitcoin Adoption
		- According to the Chainalysis "2024 Crypto Adoption Index" report, India, Nigeria, and Vietnam are leading the charge in per capita adoption. The United States ranks fourth, primarily driven by large transaction volumes and significant institutional investment. Other countries with notable adoption rates include Ukraine, the Philippines, Indonesia, Pakistan, Brazil, and Thailand.
		- | Country          | BTC Holdings  | Estimated Value (USD) | Source of Holdings                                                     |
		  |------------------|---------------|------------------------|-------------------------------------------------------------------------|
		  | United States    | 207,189 BTC   | $20.24 billion         | Seized from various criminal investigations, including the Silk Road case. In March 2025, the United States established a Strategic Bitcoin Reserve through an executive order, becoming the first nation to hold Bitcoin as a national reserve asset. |
		  | China            | 194,000 BTC   | $18.95 billion         | Confiscated from the PlusToken Ponzi scheme.                            |
		  | United Kingdom   | 61,000 BTC    | $5.96 billion          | Seized from money laundering and fraud cases.                           |
		  | Ukraine          | 46,351 BTC    | $4.53 billion          | Acquired through donations and government initiatives.                  |
		  | Bhutan           | 13,029 BTC    | $1.27 billion          | Obtained via state-run mining operations utilizing hydroelectric power. |
		  | El Salvador      | 5,942 BTC     | $580.54 million        | Actively purchased as part of national financial strategy.              |
		  | Finland          | 1,981 BTC     | $193.54 million        | Seized from criminal activities.                                       |
		- Global asset manager “Fidelity” wrote the following in their [2021 trends report](https://www.fidelitydigitalassets.com/articles/2021-trends-impact): “We also think there is a very high stakes game theory at play here, whereby if Bitcoin adoption increases, the countries that secure some bitcoin today will be better off competitively than their peers. Therefore, even if other countries do not believe in the investment thesis or adoption of Bitcoin, they will be forced to acquire some as a form of insurance. In other words, a small cost can be paid today as a hedge compared to a potentially much larger cost years in the future. We therefore wouldn’t be surprised to see other sovereign nation states acquire bitcoin in 2022 and perhaps even see a central bank make an acquisition.”
		-
		- According to [recent data](https://plasbit.com/blog/bitcoin-adoption-by-country), the top countries for Bitcoin adoption in 2024 are:
			- India: 75 million users
			- China: 38 million users
			- United States: 28 million users
			- Brazil: 25 million users
			- Indonesia: 23.5 million users
			- Turkey: (27.1% of population)
			- Vietnam (21.19%)
			- Philippines (23.4%)
			  https://www.triple-a.io/cryptocurrency-ownership-data).

- # Initial chats with AI
	- ```
	  make me a mermaid diagram as code showing an open agentic framework which incorporates nostr relays, bitcoin lightning, synthetic stablecoin dollars, anthropic model context protocol for open data connectors, distributed git, the solid protocol and anything else you think necessary
	  ```

			- #### **1. Overall Structure**
			  
			  ```mermaid
			  
			  graph TD;
			    A[Agents] -->|exchange requests| B[Nostr Relays];
			    A -->|make payments| C[Bitcoin Lightning Network];
			    A -->|manage stablecoins| D[Synthetic Stablecoin System];
			    A -->|enhance AI context| E[Anthropic Model Context Protocol];
			    A -->|store/code management| F[Distributed Git Repositories];
			    A -->|access user data| G[Solid Pods];
			    A -->|verify identities| H[Identity Management];
			    A -->|communicate via| I[API Gateways];
			    A -->|reach consensus| J[Consensus Mechanisms];
			    A -->|log activities| K[Logging System];
			    L[Coordinator Agent] -.-> A;
			  ```
				- **Dotted Arrows**: Optional relationships, like between **Agents** and a **Coordinator Agent**.
				- **Solid Connections**: Core interactions between components.
				  
				  ---

			- ### Key Technologies Integrated:
				- Nostr Relays for decentralized communication
				- Bitcoin Lightning Network for compute marketplace and payments
				- Synthetic Stablecoin Dollar Network
				- Anthropic Model Context Protocol
				- Distributed Git
				- Solid Protocol for identity

	- ## Title: The Advantages of Bitcoin

	- ### Introduction
	- Bitcoin.com's article explores the multiple benefits of Bitcoin, emphasizing its potential to revolutionize various aspects of finance and personal freedom.

	- ## Title: Bitcoin's Adoption in El Salvador: A Boon for the Unbanked

	- ### Introduction
	- El Salvador has become the first nation to formally adopt Bitcoin as legal tender.
	- This move could significantly benefit the unbanked population in the country.

	- ### Conclusion
	- El Salvador's adoption of Bitcoin is a groundbreaking move with potential benefits for its unbanked population but comes with significant risks and challenges that need careful consideration.
	- [Link to the article](https://thenextweb.com/news/el-salvador-first-adopt-bitcoin-real-money-good-news-unbanked-syndication)
	  
	  
	  https://www.cointribune.com/en/argentina-bitcoin-faces-100-inflation-rate/

	- ### Introduction
	- The article from Cointribune discusses Argentina's surging inflation rate, reaching 100% in February 2023, and the increasing adoption of Bitcoin as a response.

	- ### Conclusion
	- The article highlights the growing role of Bitcoin in countries like Argentina, where traditional financial systems are under stress due to extreme inflation, showcasing Bitcoin as a potential alternative for financial stability.
	- [Link to the article](https://www.cointribune.com/en/argentina-bitcoin-faces-100-inflation-rate/)
	  https://www.bbc.co.uk/news/world-africa-56169917
	  https://decrypt.co/125623/crooks-defi-crypto-fiat-treasury

		- ### Case Study: Tornado Cash
		- **Use by North Korean Hackers**: The Lazarus Group reportedly used Tornado Cash, a coin mixer, to launder over $96 million after hacking the Harmony Bridge protocol.
		- **Controversial Sanctions**: The Treasury Department sanctioned Tornado Cash in August, raising debates over financial privacy rights.

- # Why is this section here?
	- Bitcoin allows value and ideas to be transmitted over the internet, gaining the moniker "magic internet money".
	- This feature set is scalable and open-source.
	- It is a multi-trillion-dollar digital asset class with over 100 million users, and the wider crypto ecosystem has over 500 million users.
	- Individuals own most of the asset.
	- ![photo_2024-10-13_11-25-10.jpg](assets/photo_2024-10-13_11-25-10_1728815458639_0.jpg)
	- It is ideal for AI agent economic action.
	- {{video https://www.youtube.com/watch?v=y48uAeHwZGg}}
		- [Wicked on X: "#Bitcoin has officially processed over 1 billion transactions. https://t.co/kS704YYoW5" / X (twitter.com)](https://twitter.com/w_s_bitcoin/status/1787240456197222632)
		- [David Marcus says #Bitcoin is “going to be the native currency of AI”](https://twitter.com/BitcoinMagazine/status/1785824384961151131) - note he is now an industry insider, take this with an appropriate pinch of salt.
			- {{twitter https://twitter.com/BitcoinMagazine/status/1785824384961151131}}
- An old video I made in 2021
	- {{video https://youtu.be/Tq-kvADT4xE}}
- ![image.png](assets/image_1710363853647_0.png){:width 300}
-

	- #### The Bitcoin Network Software
		- There isn’t a single GitHub which can be considered the final arbiter of the development direction, because it is a distributed community effort with some [500 developers](https://decrypt.co/66740/who-are-the-fastest-growing-developer-communities-in-crypto) out of a wider ‘crypto’ pool of around 9000 contributors (the vast majority are spread across disparate Ethereum and some Solana projects). [Development and innovation continues](https://bitcoinops.org/en/newsletters/2021/12/22/) but there is an emphasis on careful iteration to avoid damage to the network. Visualization of code commitments to the various open-source software repositories can be seen at [Bitpaint YouTube channel](https://www.youtube.com/channel/UC4DT4qudqogkmbqVAQy8eFg/videos).
		  ![image](./assets/ae27e917fbfbdd847e6f9d89e5518433a4503ee0.jpg)
		- [Bitcoin Core](https://github.com/bitcoin/) is the main historical effort (with around a dozen major contributors guiding the direction), but there are alternatives ([LibBitcoin in C++](https://github.com/libbitcoin/libbitcoin-node/wiki), [BTCD in Go](https://github.com/btcsuite/btcd), and [BitcoinJ in Java](https://bitcoinj.github.io/getting-started)), and as innovation on layer one slows, attention is shifting to codebases which interact with the base layer asset. Much more on these later.
	- For details on how Bitcoin is created see [[Bitcoin Mining]]

- # Decentralised storage
	- [bitstream](https://robinlinus.com/bitstream.pdf)
	- [git](https://github.com/robinlinus/bitstream)
	- [Durabit torrent bitcoin storage](https://www.nobsbitcoin.com/durabit-whitepaper/)

	- # Bitcoin

		- ## Bitcoin as a culture war foil
			- Bitcoin’s online community skews very hard toward right wing libertarianism. This isn’t to say there are no other voices, but they are certainly outnumbered. This imbalance is almost certainly a product of the ESG concerns around the technology. There has been a notable increase in diversity of thought since the evolution of the energy narrative, but it persists. This leads to a paucity of voices in policymaking circles, and in the USA a strong delineation between policymakers along party lines. This kind of thing tends to be self reinforcing, and it seems very possible that the global liberal left will swing mainly against the technology, while the neoliberal right will be attracted more to it. As tensions increase so it seems does the online rhetoric. Even scientists now seem to agree that Bitcoin investors are calculating psychopaths.[[martin2022dark]] This leads to:

		- ## Self reinforcing monocultures
			- There are some powerful ‘pockets’ of fringe thinking within the [vocal, online, Bitcoincommunities](https://pourteaux.substack.com/p/bitcoin-culture-burn-it-to-the-ground?).The [mostpalatable](https://www.forbes.com/sites/peterizzo/2022/07/04/bitcoin-maximalism-is-dead-long-live-bitcoin-maximalism/?)of these are figures like [MichaelSaylor](https://www.saylor.org/about/), Elon Musk and Jack Dorsey, but there’s whole subcultural intersections around antivax, anti-woke, anti cancel culture, and fad diets. These are the so-called “[toxicmaximalists](https://blog.lopp.net/history-of-bitcoin-maximalism/)”.There are a disproportionate number of adherents of the failed global “neoliberal” economic experiment,[[va2010neoconservatism]] and not a few outright bigots. Lopp’s list linked above is an amusing roundup:
				- Carnivory
				- Laser eyes
				- Anti-woke
				- Weightlifting
				- Tradwife culture
				- Climate change denial
				- Overt Christian moralizing
				- “Have fun staying poor” retorts
				- Rejection of seed oils and sunscreen
				- Vaccine conspiracies, alt-health cure-alls
				- Contrarianism for the sake of contrarianism
				- Political populism and support of strongmen
				- “Fiat” criticism of contemporary art and architecture
			- As Lopp himself points out, it’s not that these things are necessarily wrong or bad, but more that adherence to the set became a purity testf or the whole space. It might seem that this isn’t terribly important, but Bitcoin viewed though the lens of these of these communities looks pretty strange to the newcomer.

	- #### Distributed exchanges
- There are dozens of decentralised exchanges deployed on variousblockchains. These platforms allow users to trade back and forth betweenvarious tokens (including ‘normal money’ stablecoins) and charge a feefor doing so. They operate within the logic of the smartcontracts,[[szabo1997formalizing]] within the distributed blockchains.This makes them extremely hard to ban, and as a result they operate in alegal grey area. At the extreme end of this is “distributed apps”(dApps) and “Decentralised Finance” (DeFi) which allows users access tocomplex financial instruments without legal or privacy constraints. DeFiwill be touched on briefly later.
- This is a huge area, and of only limited interest to the topics expandedin this book. It’s perhaps worth noting[BitcoinDEX](https://bitcoin-dex.net/about/index.html), which runs inJavaScript in a web browser. It is effectively uncensorable, [auditableby the user](https://bitcoin-dex.net/tokens.js), and has no counterparty risk since it operates entirely in the Bitcoin network. It isclearly an early prototype but manages this complex feature without themore expressive logic of more ‘modern’ public blockchains.
-

	- #### Distributed DNS applications
- There are many perceived problems with having centralised authoritiesfor overseeing the database which translates between human readableinternet names and the underlying machine-readable address notation. Thedatabases which manage this globally are already somewhat distributed,and this distributed trust model is managed through a cryptographicchain of trust called DNSSEC which is capped by a somewhat [bizarre keyceremony](https://www.iana.org/dnssec/ceremonies) seen in Figure<a href="#fig:dnssec" data-reference-type="ref" data-reference="fig:dnssec">2.6</a>.The authority around naming is centralised in ICANN.
- <figure><img src="./assets/27d09216a9dc4a6788c3c3d4b796983741349f54.jpg" id="fig:dnssec" alt="" /><figcaption><a href="https://www.internetsociety.org/blog/2016/10/watch-live-today-dnssec-root-ksk-ceremony-at-1700-utc/">DNSSEC ceremony in a faraday cage</a></figcaption></figure>
- There has been talk for many years about ‘properly’ distributing thisdatabase using decentralised/blockchaintechnologies[[karaarslan2018blockchain]]. The nature of this problemmeans that it either moves from control by ICANN, or it does not, and sofar it has not, but there are many attempted, and somewhat matureattempts, at this difficult problem. Of these[Namecoin](https://www.namecoin.org/) is the most prominent, and is afork of Bitcoin. The ubiquity of Bitcoin in such systems is perhapsbecoming apparent.
-

		- ##### Hyperbitcoinization
			- All of the above starts to look like convergence on something the crypto community regularly describes to itself within it’s internal media. Hyperbitcoinization is a term coined in 2014 by Daniel Krawisz.[[krawisz2014hyperbitcoinization]] It is the hypothetical rise of Bitcoin to become the global reserve currency, and the demonetisation of all other store of value assets. This seems unlikely but is hinted at in a game theoretic analysis of both Bitcoin and current macro economics. Again, Bitcoin is a likely very poor replacement for money. The ability to monetise assets through banks, backed by law and contracts (the debt based system), is a highly refined human concept, while Bitcoin is a fusion of Austrian economics, and a computer science project. The hyperbitcoinization idea finds it’s ultimate expression in Svalholm’s “Everything Divided by 21 Million”, a hypothetical re-accounting of all human production into the Bitcoin ledger.[[booth2022bitcoin]]
			- Nobody is sure what a [regular deflationary cycle](https://fredblog.stlouisfed.org/2022/07/inflation-and-deflation-with-a-fixed-money-supply/)might do to global supply chains. Malherbe et al. point out the inherent unsuitability of a deflationary asset such as Bitcoin as the global reserve currency[[malherbe2019cryptocurrencies]] and feel that perhaps other cryptocurrencies might be more suitable for adoption by governments. Interestingly this is the only paper to reference ‘Duality’(the only thing purportedly written by Satoshi Nakamoto after they left the project).
			- Writer and activist Cory Doctorow is [not a fan ofBitcoin](https://onezero.medium.com/the-byzantine-premium-8411521db843).He provides an excellent summary of what he sees as the [basic societalmistake](https://doctorow.medium.com/finance-caused-the-fall-of-rome-fd091fa02973)of the libertarian ideals around strong property rights and hard money. In a hyper bitcoinised world where debt law would be enforced by distributed code, it might be far harder to prevent the “fall of Rome” scenario he describes. It is notable that he is also [stronglyopposed](https://pluralistic.net/2023/03/09/autocomplete-worshippers/#the-real-ai-was-the-corporations-that-we-fought-along-the-way)to the current hype in AI and it’s possible this is just his stock in trade.
			- Fulgur Ventures (a venture capital firm) provide a [blog post series](https://medium.com/@fulgur.ventures/the-roads-to-hyperbitcoinization-part-1-27dc84d0e5e5) about the route this might take. It’s important to note that Budish suggested that the usefulness of Bitcoin (and blockchain) cannot exceed the cost to attack it. The is highly suggestive that hyperbitcoinisation is impossible.[[budish2018economic]] It’s beyond the scope of this book to look at the implications of all this.

	- ##### Litecoin, Vertcoin, and other networks
		- It is also possible to use the whole suit of ordinal based ideas on anyother chain such as Litecoin, the long standing Bitcoin fork which is used somewhat as a technical testbed for Bitcoin. This might develop into a far more appealing option, though again, it’s too early to be sure.
		- [Runes on Litecoin! : r/litecoin (reddit.com)](https://www.reddit.com/r/litecoin/comments/1ckwnu6/runes_on_litecoin/)

	- ## The potential opportunity offered by [[Bitcoin]]:
		- I have been studying Bitcoin technologies for the past 7 years. This novel ecosystem is a non-trivial disruptive force, and is now deeply threaded through my technical research.

		- ##### Paypal
			- The mainstream stablecoin
				- Paypal accomplish what Libra did not, and have launched a dollarstablecoin into the aggressive regulatory landscape in the USA.
				- PayPal is launching a new ERC-20 stablecoin called PayPal USD (PYUSD) pegged 1:1 to the US dollar and issued by Paxos
				- It will be compatible with the Ethereum ecosystem and can be transferred between PayPal and Ethereum wallets
				- The stablecoin will support P2P payments, PayPal checkout integration, and convertibility to other cryptocurrencies
				- PayPal’s massive reach could drive significant crypto adoption if users take up the stablecoin
				- Regulatory comfort with PayPal’s stablecoin shows preference for tradfi over non-compliant crypto firms. This embrace by lawmakers signals a shift to encourage crypto innovation from compliant US firms, not "shady" crypto natives
				- Likely pressures Congress to finalize clear stablecoin regulation to enable innovation
				- Fits growing trend of tradfi firms like BlackRock entering crypto as regulation tightens

- # Other things
	- [What Is Brollups? - The Bitcoin Manual](https://thebitcoinmanual.com/articles/brollups/)
	-

public:: true

- ![the-future-of-bitcoin-2-tokens.pdf](assets/the-future-of-bitcoin-2-tokens_1723564035683_0.pdf)
- [Note by Melvin Carvalho (primal.net)](https://primal.net/e/note1rneeteg526e9e9zqrst35c93y46xlayzn77augvfhcsutq0d39qscga4xa) [[Runes and Glyphs]]
	- ![5882083039473943016.jpg](assets/5882083039473943016_1723118472953_0.jpg)
	- [Note by Melvin Carvalho (primal.net)](https://primal.net/e/note1we622z6jpdl8xpuw2vy966ud8fgf0t40n009qxw3de4edc7gs55qrqldzp) [[Digital Objects]] [[Runes and Glyphs]] [[Testnet]]
- [Testnet Glyph Explorer (testcoin.org)](https://testcoin.org/)
- [Art (npub.info)](https://pages.npub.info/glyphs/TESTNETARTAAA/)
- [flossverse/rustyGlyphs: based on Melvin Carvalho glyphs and Runes protocols (github.com)](https://github.com/flossverse/rustyGlyphs)
- ![photo_2024-08-14_00-40-13.jpg](assets/photo_2024-08-14_00-40-13_1723627663591_0.jpg)
- [jeasonstudio/runestone: 👁‍🗨 Ordinals runestone javascript implementation (github.com)](https://github.com/jeasonstudio/runestone) [[Runes and Glyphs]]
- [jeasonstudio/runestone: 👁‍🗨 Ordinals runestone javascript implementation (github.com)](https://github.com/jeasonstudio/runestone) [[Runes and Glyphs]]
- [Testcoin Glyph Explorer](https://testcoin.org/glyphs.html#) [[Melvin Carvalho]] [[Testnet]] [[Runes and Glyphs]]
- [glyph-protocol/glyphs: glyph protocol (github.com)](https://github.com/glyph-protocol/glyphs) [[Runes and Glyphs]]
- [Testcoin Glyph Explorer](https://testcoin.org/glyphs.html#) [[Melvin Carvalho]] [[Testnet]] [[Runes and Glyphs]]
- [Runes Overview | Blockchain Analytics Dashboard (geniidata.com)](https://geniidata.com/user/Runes_is/runes-overview) [[Runes and Glyphs]]
-

public:: true

- ![stablecoinRelativeVolume.png](assets/stablecoinRelativeVolume_1721858969653_0.png)
- [Stablecoins Circulating - DefiLlama](https://defillama.com/stablecoins)
- <iframe src="https://defillama.com/stablecoins" style="width: 100%; height: 600px"></iframe>

- # Initial chats with AI
	- ```
	  make me a mermaid diagram as code showing an open agentic framework which incorporates nostr relays, bitcoin lightning, synthetic stablecoin dollars, anthropic model context protocol for open data connectors, distributed git, the solid protocol and anything else you think necessary
	  ```

			- ### Key Technologies Integrated:
				- Nostr Relays for decentralized communication
				- Bitcoin Lightning Network for compute marketplace and payments
				- Synthetic Stablecoin Dollar Network
				- Anthropic Model Context Protocol
				- Distributed Git
				- Solid Protocol for identity

	- ## Title: Bitcoin's Adoption in El Salvador: A Boon for the Unbanked

	- ### Introduction
	- El Salvador has become the first nation to formally adopt Bitcoin as legal tender.

	- ### Conclusion
	  
	  https://www.cointribune.com/en/argentina-bitcoin-faces-100-inflation-rate/

	- ### Bitcoin's Role
	- The article highlights the growing role of Bitcoin in countries like Argentina, where traditional financial systems are under stress due to extreme inflation, showcasing Bitcoin as a potential alternative for financial stability.
	- [Link to the article](https://www.cointribune.com/en/argentina-bitcoin-faces-100-inflation-rate/)
	  https://www.bbc.co.uk/news/world-africa-56169917
	  https://decrypt.co/125623/crooks-defi-crypto-fiat-treasury

	- #### The Bitcoin Network Software
		- There isn’t a single GitHub which can be considered the final arbiter of the development direction, because it is a distributed community effort with some [500 developers](https://decrypt.co/66740/who-are-the-fastest-growing-developer-communities-in-crypto) out of a wider ‘crypto’ pool of around 9000 contributors (the vast majority are spread across disparate Ethereum and some Solana projects). [Development and innovation continues](https://bitcoinops.org/en/newsletters/2021/12/22/) but there is an emphasis on careful iteration to avoid damage to the network. Visualization of code commitments to the various open-source software repositories can be seen at [Bitpaint YouTube channel](https://www.youtube.com/channel/UC4DT4qudqogkmbqVAQy8eFg/videos).
		  ![image](./assets/ae27e917fbfbdd847e6f9d89e5518433a4503ee0.jpg)
		- [Bitcoin Core](https://github.com/bitcoin/) is the main historical effort (with around a dozen major contributors guiding the direction), but there are alternatives ([LibBitcoin in C++](https://github.com/libbitcoin/libbitcoin-node/wiki), [BTCD in Go](https://github.com/btcsuite/btcd), and [BitcoinJ in Java](https://bitcoinj.github.io/getting-started)), and as innovation on layer one slows, attention is shifting to codebases which interact with the base layer asset. Much more on these later.
	- For details on how Bitcoin is created see [[Bitcoin Mining]]
	- It feels like a global political response is just around the corner, but reputable voices in the community suggest that it always feels this way.

		- ## Self reinforcing monocultures
			- There are some powerful ‘pockets’ of fringe thinking within the [vocal, online, Bitcoincommunities](https://pourteaux.substack.com/p/bitcoin-culture-burn-it-to-the-ground?).The [mostpalatable](https://www.forbes.com/sites/peterizzo/2022/07/04/bitcoin-maximalism-is-dead-long-live-bitcoin-maximalism/?)of these are figures like [MichaelSaylor](https://www.saylor.org/about/), Elon Musk and Jack Dorsey, but there’s whole subcultural intersections around antivax, anti-woke, anti cancel culture, and fad diets. These are the so-called “[toxicmaximalists](https://blog.lopp.net/history-of-bitcoin-maximalism/)”.There are a disproportionate number of adherents of the failed global “neoliberal” economic experiment,[[va2010neoconservatism]] and not a few outright bigots. Lopp’s list linked above is an amusing roundup:
				- Carnivory
				- Laser eyes
				- Anti-woke
				- Weightlifting
				- Tradwife culture
				- Climate change denial
				- Overt Christian moralizing
				- “Have fun staying poor” retorts
				- Rejection of seed oils and sunscreen
				- Vaccine conspiracies, alt-health cure-alls
				- Contrarianism for the sake of contrarianism
				- Political populism and support of strongmen
				- “Fiat” criticism of contemporary art and architecture
			- As Lopp himself points out, it’s not that these things are necessarily wrong or bad, but more that adherence to the set became a purity testf or the whole space. It might seem that this isn’t terribly important, but Bitcoin viewed though the lens of these of these communities looks pretty strange to the newcomer.

			- ### Key Technologies Integrated:
				- Nostr Relays for decentralized communication
				- Bitcoin Lightning Network for compute marketplace and payments
				- Synthetic Stablecoin Dollar Network
				- Anthropic Model Context Protocol
				- Distributed Git
				- Solid Protocol for identity

		- ### Capture by traditional finance [[Update Cycle]]
			- As the popularity of Bitcoin continues to grow, traditional financial market incumbents have begun to take notice. In an effort to assert their dominance and protect their interests, these incumbents have turned to regulation and acquisition as means of capturing the growing markets. This is most clear in the ’alt coin’ space where traditional banks have leveraged their knowledge and marketing to transfer money from retail investors into their own venture capital operations. This is not to say that Bitcoin is immune from these harms.

	- #### Peerswap
		- It may be possible to use “Peerswap” to execute rebalancing andsubmarine swaps into and out of Liquid assets on the sidechain in asingle tx. This is anunder explored area at this time.
		- [Runes on Litecoin! : r/litecoin (reddit.com)](https://www.reddit.com/r/litecoin/comments/1ckwnu6/runes_on_litecoin/)

			- ### Key Technologies Integrated:
				- Nostr Relays for decentralized communication
				- Bitcoin Lightning Network for compute marketplace and payments
				- Synthetic Stablecoin Dollar Network
				- Anthropic Model Context Protocol
				- Distributed Git
				- Solid Protocol for identity

- ## By the numbers
	- It’s worth taking a look at these tokens individually, to get a feel forthe trade-offs, and figure out how they might be useful for us in our proposed metaverse applications. It’s important to know that these tokenised dollars and/or other currencies are issued on top of the public blockchains we have been detailing throughout. Which tokens areon what blockchains is constantly evolving, so it’s not really worth enumerating specifics. In a metaverse application it would be necessary to manage both the underlying public blockchain and the stablecoin issued on top of it, making the interaction with the global financial system perversely more not less complex. In the following list of a fewof the major coins, the first hyperlink is the whitepaper if it’s available.
		- [USDC](https://f.hubspotusercontent30.net/hubfs/9304636/PDF/centre-whitepaper.pdf) is a dollar and Euro backed coin issued by a consortium of major players in the space, most notably Circle, and Coinbase. It’s has a better transparency record than tether but is still not backed 1:1 by actual dollars in reserve. It may or may not be a fractional reserve asset. It’s well positioned to take advantage of regulatory changes in the USA, and seems to be quietly lobbying to be the choice of a government endorsed digital dollar, at least a significant part of a central bank digital currency initiative. It’s too early to tell how this will work out, but it has [substantial ‘legacy finance backing’](https://www.forbes.com/sites/ninabambysheva/2022/04/13/blackrocks-newest-investment-paves-the-way-for-digital-assets-on-wall-street/?). It is the only stablecoin to increase slightly in value (depegging upward) in the wake of the UST implosion. This ‘flight to quality’ shows the advantage of the work that CENTRE put into regulatory compliance. It runs on Ethereum, Algorand, Solana, Stellar, Tron, Hedera, Avalanche and Flow blockchains. At this time USDC may be [under speculative attack](https://twitter.com/Excellion/status/1567472488589963264) by Chinese exchange Binance, in favour of their own offering BUSD, and is losing market share. Payment provider Stripe supports USDC as of 2024.
		- Circle has received a major boost as the [only stablecoin allowed in the EU.](https://www.circle.com/en/pressroom/circle-is-first-global-stablecoin-issuer-to-comply-with-mica-eus-landmark-crypto-law)
			- https://twitter.com/collision/status/1783559623511011535
			- {{twitter https://twitter.com/collision/status/1783559623511011535}}
		- Binance USD is the dollar equivalent token from global crypto exchange behemoth Binance. It’s released in partnership with Paxos, who have a strong record for compliance, and transparency. Paxos also offer USDP. Both these stablecoins claim to be 100% backed by dollars, or US treasuries. They are regulated under the more restrictive New York state financial services and have a monthly [attestation report](https://paxos.com/attestations/).
		- [MakerDAO Dai](https://makerdao.com/en/whitepaper#abstract) is an Ethereum based stablecoin and one of the older offerings. It’s been ‘governed’ by a DAO since 2014. ‘Excess collateral’, above the value of the dai-dollars to be minted, is voted upon before being committed to the systems’ cryptographic ‘vaults’ as a backing for the currency. These dai can then be used across the Ethereum network. Despite the problems with DAOs, and the problems with Ethereum, DAI is well liked by its community of users and has a healthy billion dollars of issuance. They may be [dangerously exposed](https://thedefiant.io/tornado-impact-makerdao-dai) to the new crackdown in the USA, and there is [internal talk](https://twitter.com/bantg/status/1557733094899138560) of pro-actively abandoning DAI altogether.
		- [TrueUSD](https://trueusd.com/pdf/TUSD_WhitePaper.pdf) claims to be fully backed by US dollars, held in escrow. It runs on the Ethereum blockchain. They have attestation reports [available on demand](https://real-time-attest.trustexplorer.io/truecurrencies) and claim fully insured deposits. It’s not quite that simple in that a portion of the backing is ‘cash equivalents’.
		- [Gemini GUSD](https://www.gemini.com/static/dollar/gemini-dollar-whitepaper.pdf) claim reserves are “held and maintained at State Street Bank and Trust Company and within a money market fund managed by Goldman Sachs Asset Management, invested only in U.S. Treasury obligations.” which seems pretty clear.
		- [TerraUSD](https://assets.website-files.com/611153e7af981472d8da199c/618b02d13e938ae1f8ad1e45_Terra_White_paper.pdf) (UST) **was** a more experimental stable coin, and one of a set of currency representations within the network. It worked in concert with the LUNA token on the Cosmos blockchain in order to keep it’s dollar stability. It was not backed in the same way as the other tokens, instead relying on an arbitrage mechanism using LUNA. In essence the protocol paid users to destroy LUNA and mint UST when the price was above one dollar, and vice versa. This theoretically maintained the dollar peg. There was much concern that this model of [‘algorithmic stable coin’](https://mirror.xyz/damsondao.eth/OVeBrmrfcWm7uKLlA2Q4W1XTVkFU3cMKfNWhgf7mQuM) is unstable.[[clements2021built]] The developers of the Terra tried to address this concern by [buying enormous amounts](https://etherscan.io/address/0xad41bd1cf3fd753017ef5c0da8df31a3074ea1ea) of Bitcoin, which they quickly had to employ to address UST drifting downward from $1. This failed to address the ‘great depegging’, with LUNA crashing to essentially zero, destroying some $50B of capital. It will now likely act as a cautionary tale to other institutions considering Bitcoin as a ‘reserve asset’. An [earlier version of this book](https://github.com/GMCyberFoundry/Metaverse/blob/b06547bf290392d2ff02e5142dae7386d888a9de/Book/04_money.tex#L186) highlighted the specific variation of the risk which quickly manifested.

- ## Civic Engagement
	- From [this article](https://www.coindesk.com/opinion/2024/11/25/why-memecoins-matter) by Ivo Entchev

- ##### The Role of Tokenisation
	- Tokenisation represents a paradigm shift from traditionalcryptocurrencies. The concept was introduced and popularised by thewider cypto movement, and it’s somewhat absurd claims around ‘tokenisingeverything’. After this fab died down post the ‘initial coin offering’craze of 2018 attention shifted elsewhere. Curiously however the ‘Officeof the Comptroller of the Currency’ and the BIS have been focusing onresolving settlement issues within financial systems. It deviates fromthe blockchain dependency, (correctly) and simply offers a morestreamlined approach to financial transactions. This innovation willnotably be explored in the OCC’s tokenisation symposium held on February8th 2024, with an aspiration of integrating different types of money andassets on a unified platform. The symposium, a public event featuringkeynotes from prominent figures in the financial world, will highlightthe burgeoning interest in tokenisation ([OCC Tokenization SymposiumDetails](https://www.occ.gov/news-issuances/news-releases/2023/nr-occ-2023-18.html)).

- ## By the numbers
	- It’s worth taking a look at these tokens individually, to get a feel forthe trade-offs, and figure out how they might be useful for us in our proposed metaverse applications. It’s important to know that these tokenised dollars and/or other currencies are issued on top of the public blockchains we have been detailing throughout. Which tokens areon what blockchains is constantly evolving, so it’s not really worth enumerating specifics. In a metaverse application it would be necessary to manage both the underlying public blockchain and the stablecoin issued on top of it, making the interaction with the global financial system perversely more not less complex. In the following list of a fewof the major coins, the first hyperlink is the whitepaper if it’s available.
		- [USDC](https://f.hubspotusercontent30.net/hubfs/9304636/PDF/centre-whitepaper.pdf) is a dollar and Euro backed coin issued by a consortium of major players in the space, most notably Circle, and Coinbase. It’s has a better transparency record than tether but is still not backed 1:1 by actual dollars in reserve. It may or may not be a fractional reserve asset. It’s well positioned to take advantage of regulatory changes in the USA, and seems to be quietly lobbying to be the choice of a government endorsed digital dollar, at least a significant part of a central bank digital currency initiative. It’s too early to tell how this will work out, but it has [substantial ‘legacy finance backing’](https://www.forbes.com/sites/ninabambysheva/2022/04/13/blackrocks-newest-investment-paves-the-way-for-digital-assets-on-wall-street/?). It is the only stablecoin to increase slightly in value (depegging upward) in the wake of the UST implosion. This ‘flight to quality’ shows the advantage of the work that CENTRE put into regulatory compliance. It runs on Ethereum, Algorand, Solana, Stellar, Tron, Hedera, Avalanche and Flow blockchains. At this time USDC may be [under speculative attack](https://twitter.com/Excellion/status/1567472488589963264) by Chinese exchange Binance, in favour of their own offering BUSD, and is losing market share. Payment provider Stripe supports USDC as of 2024.
		- Circle has received a major boost as the [only stablecoin allowed in the EU.](https://www.circle.com/en/pressroom/circle-is-first-global-stablecoin-issuer-to-comply-with-mica-eus-landmark-crypto-law)
			- https://twitter.com/collision/status/1783559623511011535
			- {{twitter https://twitter.com/collision/status/1783559623511011535}}
		- Binance USD is the dollar equivalent token from global crypto exchange behemoth Binance. It’s released in partnership with Paxos, who have a strong record for compliance, and transparency. Paxos also offer USDP. Both these stablecoins claim to be 100% backed by dollars, or US treasuries. They are regulated under the more restrictive New York state financial services and have a monthly [attestation report](https://paxos.com/attestations/).
		- [MakerDAO Dai](https://makerdao.com/en/whitepaper#abstract) is an Ethereum based stablecoin and one of the older offerings. It’s been ‘governed’ by a DAO since 2014. ‘Excess collateral’, above the value of the dai-dollars to be minted, is voted upon before being committed to the systems’ cryptographic ‘vaults’ as a backing for the currency. These dai can then be used across the Ethereum network. Despite the problems with DAOs, and the problems with Ethereum, DAI is well liked by its community of users and has a healthy billion dollars of issuance. They may be [dangerously exposed](https://thedefiant.io/tornado-impact-makerdao-dai) to the new crackdown in the USA, and there is [internal talk](https://twitter.com/bantg/status/1557733094899138560) of pro-actively abandoning DAI altogether.
		- [TrueUSD](https://trueusd.com/pdf/TUSD_WhitePaper.pdf) claims to be fully backed by US dollars, held in escrow. It runs on the Ethereum blockchain. They have attestation reports [available on demand](https://real-time-attest.trustexplorer.io/truecurrencies) and claim fully insured deposits. It’s not quite that simple in that a portion of the backing is ‘cash equivalents’.
		- [Gemini GUSD](https://www.gemini.com/static/dollar/gemini-dollar-whitepaper.pdf) claim reserves are “held and maintained at State Street Bank and Trust Company and within a money market fund managed by Goldman Sachs Asset Management, invested only in U.S. Treasury obligations.” which seems pretty clear.
		- [TerraUSD](https://assets.website-files.com/611153e7af981472d8da199c/618b02d13e938ae1f8ad1e45_Terra_White_paper.pdf) (UST) **was** a more experimental stable coin, and one of a set of currency representations within the network. It worked in concert with the LUNA token on the Cosmos blockchain in order to keep it’s dollar stability. It was not backed in the same way as the other tokens, instead relying on an arbitrage mechanism using LUNA. In essence the protocol paid users to destroy LUNA and mint UST when the price was above one dollar, and vice versa. This theoretically maintained the dollar peg. There was much concern that this model of [‘algorithmic stable coin’](https://mirror.xyz/damsondao.eth/OVeBrmrfcWm7uKLlA2Q4W1XTVkFU3cMKfNWhgf7mQuM) is unstable.[[clements2021built]] The developers of the Terra tried to address this concern by [buying enormous amounts](https://etherscan.io/address/0xad41bd1cf3fd753017ef5c0da8df31a3074ea1ea) of Bitcoin, which they quickly had to employ to address UST drifting downward from $1. This failed to address the ‘great depegging’, with LUNA crashing to essentially zero, destroying some $50B of capital. It will now likely act as a cautionary tale to other institutions considering Bitcoin as a ‘reserve asset’. An [earlier version of this book](https://github.com/GMCyberFoundry/Metaverse/blob/b06547bf290392d2ff02e5142dae7386d888a9de/Book/04_money.tex#L186) highlighted the specific variation of the risk which quickly manifested.

- ## Stable-coins
	- [Jeremy Allaire](https://x.com/jerallaire/status/1803432989113593890)
		- ```
		  What does it look like when 10% of global economic money is stablecoins, 
		  and when credit intermediation moves from fractional reserve lending to 
	- **Stripe's Strategic Intent**
		- The acquisition underscores Stripe's commitment to stablecoins as the future of payments, signaling their intention to double down on stablecoin infrastructure.
		- Patrick Collison, CEO of Stripe, stated, "Stable coins are room temperature superconductors for financial services. Thanks to stable coins, businesses around the world will benefit from significant speed, coverage, and cost improvements in the coming years."\r\n
		- Stripe aims to build the world's best stablecoin infrastructure, integrating multiple stablecoins and partnering with firms like Paxos for backend infrastructure.
		- Bridge's platform facilitates stablecoin payments across 70 countries, with impressive early adoption metrics reported by Stripe.
		- The integration of Bridge enhances Stripe's ability to provide instant, global, dollar-based payment rails, reducing crypto complexity for businesses.
	- **Positive Endorsements**
		- Simon Taylor of fintech Brain Fruit praised the acquisition, likening it to an "Instagram-like all-time great acquisition" that addresses long-term challenges for Stripe.
		- Overdraft's head of macro at Lightspeed Ventures highlighted the shift from crypto being price-centric to focusing on business value.
		- Jeremy Black, principal at fintech firm Kinvey, noted that Stripe's $1 billion investment communicates a strong market signal to customers and partners, discouraging competitors.
		- Rob Boadock, general partner at Dragonfly Capital, emphasized that the acquisition broadens Stripe's business from merchant dependence to establishing its own global payment network.
		- Jacob Horn, co-founder of LER 2 Zora, indicated that Bridge and Stripe's collaboration will enable any app to have stablecoin on-ramps and off-ramps similar to Coinbase, with enhanced regional support.
		- Chia Wang of Alliance Dow suggested that the acquisition signals to venture capitalists that stablecoin startups have clearer paths to significant exits, potentially leading to increased funding and entrepreneurial activity in the stablecoin space.
		- Nick Carter of Castle Island predicted that the Bridge acquisition would "turbocharge" the stablecoin market, aligning with broader industry enthusiasm.
	- **Stablecoins in Financial Infrastructure**
		- Stablecoins are increasingly recognized as essential to future financial infrastructure, especially in regions with limited access to traditional banking.
		- The acquisition by Stripe reflects a broader industry acknowledgment of stablecoins' role in facilitating seamless, global transactions.\r\n
	- **Market Trends and Adoption**
		- Stablecoins have maintained a steady ascent, becoming integral to various financial services beyond speculative trading, including payments, remittances, and decentralized finance (DeFi).
		- Institutional interest in stablecoins is growing, driven by their potential to enhance payment speed, reduce costs, and provide stable value storage.
		- As stablecoins become more embedded in the financial system, regulatory frameworks will likely evolve to address associated risks and ensure compliance.
		- The ongoing collaboration between traditional financial institutions and blockchain-based firms like Stripe and Bridge suggests a converging future for fintech and crypto sectors.

- ## Civic Engagement
	- From [this article](https://www.coindesk.com/opinion/2024/11/25/why-memecoins-matter) by Ivo Entchev

- ## The Memecoin Phenomenon
	- Memecoins are tokens representing an idea
	- Crypto VCs often exclude memecoins from investment portfolios, they're very much an emergent consumer driven market
	- Growing market caps and retail interest challenge initial dismissals

- ##### 2.4.7 Distributed DNS applications
  There are many perceived problems with having centralised authorities for overseeing the database which translates between human readable internet names and the underlying machine-readable address notation. The databases which manage this globally are already somewhat distributed, and this distributed trust model is managed through a cryptographic chain of trust called DNSSEC which is capped by a somewhat [bizarre key ceremony](https://www.iana.org/dnssec/ceremonies) seen in Figure [2.6](https://arxiv.org/html/2207.09460v11/#Ch2.F6 "Figure 2.6 ‣ 2.4.7 Distributed DNS applications ‣ 2.4 Example applications ‣ Chapter 2 Decentralisation & The Web ‣ Part I State of the art"). The authority around naming is centralised in ICANN.
  ![Figure 2.6: [DNSSEC ceremony in a faraday cage](https://www.internetsociety.org/blog/2016/10/watch-live-today-dnssec-root-ksk-ceremony-at-1700-utc/)](../assets/dnssec.jpg) There has been talk for many years about 'properly' distributing this database using decentralised/blockchain technologies\[[7](https://arxiv.org/html/2207.09460v11/#bib.bibx7)\]. The nature of this problem means that it either moves from control by ICANN, or it does not, and so far it has not, but there are many attempted, and somewhat mature attempts, at this difficult problem. Of these [Namecoin](https://www.namecoin.org/) is the most prominent, and is a fork of Bitcoin. The ubiquity of Bitcoin in such systems is perhaps becoming apparent.

- ##### Tail emission
- It is conceivable though unlikely that Bitcoin will choose to remove the21 million coin hard cap in the end. This would potentially result in astable and predictable supply, compensating for lost coins, andreinvigorating the miner block reward. The Bitcoin narrative is **so**invested in the ‘hard money’ thesis that is seems such a hard fork wouldbe contentious at least, and possibly existentially damaging. PeterTodd, long time Bitcoin Core contributor things the idea has merit [andhas described it in a blogpost](https://petertodd.org/2022/surprisingly-tail-emission-is-not-inflationary).

- ## See Also
	- [[Bitcoin]]
	- [[Lightning and Similar L2]]

- ##### The Role of Tokenisation
	- Tokenisation represents a paradigm shift from traditionalcryptocurrencies. The concept was introduced and popularised by thewider cypto movement, and it’s somewhat absurd claims around ‘tokenisingeverything’. After this fab died down post the ‘initial coin offering’craze of 2018 attention shifted elsewhere. Curiously however the ‘Officeof the Comptroller of the Currency’ and the BIS have been focusing onresolving settlement issues within financial systems. It deviates fromthe blockchain dependency, (correctly) and simply offers a morestreamlined approach to financial transactions. This innovation willnotably be explored in the OCC’s tokenisation symposium held on February8th 2024, with an aspiration of integrating different types of money andassets on a unified platform. The symposium, a public event featuringkeynotes from prominent figures in the financial world, will highlightthe burgeoning interest in tokenisation ([OCC Tokenization SymposiumDetails](https://www.occ.gov/news-issuances/news-releases/2023/nr-occ-2023-18.html)).

- ## By the numbers
	- It’s worth taking a look at these tokens individually, to get a feel forthe trade-offs, and figure out how they might be useful for us in our proposed metaverse applications. It’s important to know that these tokenised dollars and/or other currencies are issued on top of the public blockchains we have been detailing throughout. Which tokens areon what blockchains is constantly evolving, so it’s not really worth enumerating specifics. In a metaverse application it would be necessary to manage both the underlying public blockchain and the stablecoin issued on top of it, making the interaction with the global financial system perversely more not less complex. In the following list of a fewof the major coins, the first hyperlink is the whitepaper if it’s available.
		- [USDC](https://f.hubspotusercontent30.net/hubfs/9304636/PDF/centre-whitepaper.pdf) is a dollar and Euro backed coin issued by a consortium of major players in the space, most notably Circle, and Coinbase. It’s has a better transparency record than tether but is still not backed 1:1 by actual dollars in reserve. It may or may not be a fractional reserve asset. It’s well positioned to take advantage of regulatory changes in the USA, and seems to be quietly lobbying to be the choice of a government endorsed digital dollar, at least a significant part of a central bank digital currency initiative. It’s too early to tell how this will work out, but it has [substantial ‘legacy finance backing’](https://www.forbes.com/sites/ninabambysheva/2022/04/13/blackrocks-newest-investment-paves-the-way-for-digital-assets-on-wall-street/?). It is the only stablecoin to increase slightly in value (depegging upward) in the wake of the UST implosion. This ‘flight to quality’ shows the advantage of the work that CENTRE put into regulatory compliance. It runs on Ethereum, Algorand, Solana, Stellar, Tron, Hedera, Avalanche and Flow blockchains. At this time USDC may be [under speculative attack](https://twitter.com/Excellion/status/1567472488589963264) by Chinese exchange Binance, in favour of their own offering BUSD, and is losing market share. Payment provider Stripe supports USDC as of 2024.
		- Circle has received a major boost as the [only stablecoin allowed in the EU.](https://www.circle.com/en/pressroom/circle-is-first-global-stablecoin-issuer-to-comply-with-mica-eus-landmark-crypto-law)
			- https://twitter.com/collision/status/1783559623511011535
			- {{twitter https://twitter.com/collision/status/1783559623511011535}}
		- Binance USD is the dollar equivalent token from global crypto exchange behemoth Binance. It’s released in partnership with Paxos, who have a strong record for compliance, and transparency. Paxos also offer USDP. Both these stablecoins claim to be 100% backed by dollars, or US treasuries. They are regulated under the more restrictive New York state financial services and have a monthly [attestation report](https://paxos.com/attestations/).
		- [MakerDAO Dai](https://makerdao.com/en/whitepaper#abstract) is an Ethereum based stablecoin and one of the older offerings. It’s been ‘governed’ by a DAO since 2014. ‘Excess collateral’, above the value of the dai-dollars to be minted, is voted upon before being committed to the systems’ cryptographic ‘vaults’ as a backing for the currency. These dai can then be used across the Ethereum network. Despite the problems with DAOs, and the problems with Ethereum, DAI is well liked by its community of users and has a healthy billion dollars of issuance. They may be [dangerously exposed](https://thedefiant.io/tornado-impact-makerdao-dai) to the new crackdown in the USA, and there is [internal talk](https://twitter.com/bantg/status/1557733094899138560) of pro-actively abandoning DAI altogether.
		- [TrueUSD](https://trueusd.com/pdf/TUSD_WhitePaper.pdf) claims to be fully backed by US dollars, held in escrow. It runs on the Ethereum blockchain. They have attestation reports [available on demand](https://real-time-attest.trustexplorer.io/truecurrencies) and claim fully insured deposits. It’s not quite that simple in that a portion of the backing is ‘cash equivalents’.
		- [Gemini GUSD](https://www.gemini.com/static/dollar/gemini-dollar-whitepaper.pdf) claim reserves are “held and maintained at State Street Bank and Trust Company and within a money market fund managed by Goldman Sachs Asset Management, invested only in U.S. Treasury obligations.” which seems pretty clear.
		- [TerraUSD](https://assets.website-files.com/611153e7af981472d8da199c/618b02d13e938ae1f8ad1e45_Terra_White_paper.pdf) (UST) **was** a more experimental stable coin, and one of a set of currency representations within the network. It worked in concert with the LUNA token on the Cosmos blockchain in order to keep it’s dollar stability. It was not backed in the same way as the other tokens, instead relying on an arbitrage mechanism using LUNA. In essence the protocol paid users to destroy LUNA and mint UST when the price was above one dollar, and vice versa. This theoretically maintained the dollar peg. There was much concern that this model of [‘algorithmic stable coin’](https://mirror.xyz/damsondao.eth/OVeBrmrfcWm7uKLlA2Q4W1XTVkFU3cMKfNWhgf7mQuM) is unstable.[[clements2021built]] The developers of the Terra tried to address this concern by [buying enormous amounts](https://etherscan.io/address/0xad41bd1cf3fd753017ef5c0da8df31a3074ea1ea) of Bitcoin, which they quickly had to employ to address UST drifting downward from $1. This failed to address the ‘great depegging’, with LUNA crashing to essentially zero, destroying some $50B of capital. It will now likely act as a cautionary tale to other institutions considering Bitcoin as a ‘reserve asset’. An [earlier version of this book](https://github.com/GMCyberFoundry/Metaverse/blob/b06547bf290392d2ff02e5142dae7386d888a9de/Book/04_money.tex#L186) highlighted the specific variation of the risk which quickly manifested.

- ## Stripe Acquires Bridge
	- **Stripe Acquisition**
		- On October 22nd, fintech giant Stripe acquired stablecoin infrastructure firm Bridge for $1.1 billion, marking the largest acquisition in crypto history and Stripe's most significant purchase to date.
		- Bridge provides business-facing software that enables companies to accept stablecoin payments, enhancing Stripe's capabilities in the stablecoin payments sector.
		- At the time of acquisition, Bridge was last valued at $200 million during their Series A funding, representing a substantial markup and a significant exit for founders and investors.
	- **Stripe's Strategic Intent**
		- The acquisition underscores Stripe's commitment to stablecoins as the future of payments, signaling their intention to double down on stablecoin infrastructure.
		- Patrick Collison, CEO of Stripe, stated, "Stable coins are room temperature superconductors for financial services. Thanks to stable coins, businesses around the world will benefit from significant speed, coverage, and cost improvements in the coming years."\r\n
		- Stripe aims to build the world's best stablecoin infrastructure, integrating multiple stablecoins and partnering with firms like Paxos for backend infrastructure.
		- Bridge's platform facilitates stablecoin payments across 70 countries, with impressive early adoption metrics reported by Stripe.
		- The integration of Bridge enhances Stripe's ability to provide instant, global, dollar-based payment rails, reducing crypto complexity for businesses.
	- **Positive Endorsements**
		- Simon Taylor of fintech Brain Fruit praised the acquisition, likening it to an "Instagram-like all-time great acquisition" that addresses long-term challenges for Stripe.
		- Overdraft's head of macro at Lightspeed Ventures highlighted the shift from crypto being price-centric to focusing on business value.
		- Jeremy Black, principal at fintech firm Kinvey, noted that Stripe's $1 billion investment communicates a strong market signal to customers and partners, discouraging competitors.
		- Rob Boadock, general partner at Dragonfly Capital, emphasized that the acquisition broadens Stripe's business from merchant dependence to establishing its own global payment network.
		- Jacob Horn, co-founder of LER 2 Zora, indicated that Bridge and Stripe's collaboration will enable any app to have stablecoin on-ramps and off-ramps similar to Coinbase, with enhanced regional support.
		- Chia Wang of Alliance Dow suggested that the acquisition signals to venture capitalists that stablecoin startups have clearer paths to significant exits, potentially leading to increased funding and entrepreneurial activity in the stablecoin space.
		- Nick Carter of Castle Island predicted that the Bridge acquisition would "turbocharge" the stablecoin market, aligning with broader industry enthusiasm.
	- **Stablecoins in Financial Infrastructure**
		- Stablecoins are increasingly recognized as essential to future financial infrastructure, especially in regions with limited access to traditional banking.
		- The acquisition by Stripe reflects a broader industry acknowledgment of stablecoins' role in facilitating seamless, global transactions.\r\n
	- **Market Trends and Adoption**
		- Stablecoins have maintained a steady ascent, becoming integral to various financial services beyond speculative trading, including payments, remittances, and decentralized finance (DeFi).
		- Institutional interest in stablecoins is growing, driven by their potential to enhance payment speed, reduce costs, and provide stable value storage.
		- As stablecoins become more embedded in the financial system, regulatory frameworks will likely evolve to address associated risks and ensure compliance.
		- The ongoing collaboration between traditional financial institutions and blockchain-based firms like Stripe and Bridge suggests a converging future for fintech and crypto sectors.

- ## Civic Engagement
	- From [this article](https://www.coindesk.com/opinion/2024/11/25/why-memecoins-matter) by Ivo Entchev

- ## The Memecoin Phenomenon
	- Memecoins are tokens representing an idea
	- They can exist on pretty much any blockchain, Bitcoin included.
	- Price fluctuates based on attention received
	- Investors skew young, internet-culture-savvy individuals

- ##### 2.4.7 Distributed DNS applications
  There are many perceived problems with having centralised authorities for overseeing the database which translates between human readable internet names and the underlying machine-readable address notation. The databases which manage this globally are already somewhat distributed, and this distributed trust model is managed through a cryptographic chain of trust called DNSSEC which is capped by a somewhat [bizarre key ceremony](https://www.iana.org/dnssec/ceremonies) seen in Figure [2.6](https://arxiv.org/html/2207.09460v11/#Ch2.F6 "Figure 2.6 ‣ 2.4.7 Distributed DNS applications ‣ 2.4 Example applications ‣ Chapter 2 Decentralisation & The Web ‣ Part I State of the art"). The authority around naming is centralised in ICANN.
  ![Figure 2.6: [DNSSEC ceremony in a faraday cage](https://www.internetsociety.org/blog/2016/10/watch-live-today-dnssec-root-ksk-ceremony-at-1700-utc/)](../assets/dnssec.jpg) There has been talk for many years about 'properly' distributing this database using decentralised/blockchain technologies\[[7](https://arxiv.org/html/2207.09460v11/#bib.bibx7)\]. The nature of this problem means that it either moves from control by ICANN, or it does not, and so far it has not, but there are many attempted, and somewhat mature attempts, at this difficult problem. Of these [Namecoin](https://www.namecoin.org/) is the most prominent, and is a fork of Bitcoin. The ubiquity of Bitcoin in such systems is perhaps becoming apparent.

- ##### Tail emission
- It is conceivable though unlikely that Bitcoin will choose to remove the21 million coin hard cap in the end. This would potentially result in astable and predictable supply, compensating for lost coins, andreinvigorating the miner block reward. The Bitcoin narrative is **so**invested in the ‘hard money’ thesis that is seems such a hard fork wouldbe contentious at least, and possibly existentially damaging. PeterTodd, long time Bitcoin Core contributor things the idea has merit [andhas described it in a blogpost](https://petertodd.org/2022/surprisingly-tail-emission-is-not-inflationary).

- ### Bitcoin as a money
	- Nwosu, cofounder of Coinfloor exchange in the UK, and cofounder of the aforementioned Fedimint and says that a digital money needs the following four characteristics:
		- that it be technically mature.
		- it should have strong community support and network effect. We have seen that this is more simply a feature of money itself.
		- that there should be regulatory clarity around the asset, a feature which even Bitcoin currently struggles with.
		- it should demonstrate a core use case of ‘store of value’ which sounds simple enough, but again is contestable because of the volatility of Bitcoin.

- ##### The Role of Tokenisation
	- Tokenisation represents a paradigm shift from traditionalcryptocurrencies. The concept was introduced and popularised by thewider cypto movement, and it’s somewhat absurd claims around ‘tokenisingeverything’. After this fab died down post the ‘initial coin offering’craze of 2018 attention shifted elsewhere. Curiously however the ‘Officeof the Comptroller of the Currency’ and the BIS have been focusing onresolving settlement issues within financial systems. It deviates fromthe blockchain dependency, (correctly) and simply offers a morestreamlined approach to financial transactions. This innovation willnotably be explored in the OCC’s tokenisation symposium held on February8th 2024, with an aspiration of integrating different types of money andassets on a unified platform. The symposium, a public event featuringkeynotes from prominent figures in the financial world, will highlightthe burgeoning interest in tokenisation ([OCC Tokenization SymposiumDetails](https://www.occ.gov/news-issuances/news-releases/2023/nr-occ-2023-18.html)).

- ## By the numbers
	- It’s worth taking a look at these tokens individually, to get a feel forthe trade-offs, and figure out how they might be useful for us in our proposed metaverse applications. It’s important to know that these tokenised dollars and/or other currencies are issued on top of the public blockchains we have been detailing throughout. Which tokens areon what blockchains is constantly evolving, so it’s not really worth enumerating specifics. In a metaverse application it would be necessary to manage both the underlying public blockchain and the stablecoin issued on top of it, making the interaction with the global financial system perversely more not less complex. In the following list of a fewof the major coins, the first hyperlink is the whitepaper if it’s available.
		- [USDC](https://f.hubspotusercontent30.net/hubfs/9304636/PDF/centre-whitepaper.pdf) is a dollar and Euro backed coin issued by a consortium of major players in the space, most notably Circle, and Coinbase. It’s has a better transparency record than tether but is still not backed 1:1 by actual dollars in reserve. It may or may not be a fractional reserve asset. It’s well positioned to take advantage of regulatory changes in the USA, and seems to be quietly lobbying to be the choice of a government endorsed digital dollar, at least a significant part of a central bank digital currency initiative. It’s too early to tell how this will work out, but it has [substantial ‘legacy finance backing’](https://www.forbes.com/sites/ninabambysheva/2022/04/13/blackrocks-newest-investment-paves-the-way-for-digital-assets-on-wall-street/?). It is the only stablecoin to increase slightly in value (depegging upward) in the wake of the UST implosion. This ‘flight to quality’ shows the advantage of the work that CENTRE put into regulatory compliance. It runs on Ethereum, Algorand, Solana, Stellar, Tron, Hedera, Avalanche and Flow blockchains. At this time USDC may be [under speculative attack](https://twitter.com/Excellion/status/1567472488589963264) by Chinese exchange Binance, in favour of their own offering BUSD, and is losing market share. Payment provider Stripe supports USDC as of 2024.
		- Circle has received a major boost as the [only stablecoin allowed in the EU.](https://www.circle.com/en/pressroom/circle-is-first-global-stablecoin-issuer-to-comply-with-mica-eus-landmark-crypto-law)
			- https://twitter.com/collision/status/1783559623511011535
			- {{twitter https://twitter.com/collision/status/1783559623511011535}}
		- Binance USD is the dollar equivalent token from global crypto exchange behemoth Binance. It’s released in partnership with Paxos, who have a strong record for compliance, and transparency. Paxos also offer USDP. Both these stablecoins claim to be 100% backed by dollars, or US treasuries. They are regulated under the more restrictive New York state financial services and have a monthly [attestation report](https://paxos.com/attestations/).
		- [MakerDAO Dai](https://makerdao.com/en/whitepaper#abstract) is an Ethereum based stablecoin and one of the older offerings. It’s been ‘governed’ by a DAO since 2014. ‘Excess collateral’, above the value of the dai-dollars to be minted, is voted upon before being committed to the systems’ cryptographic ‘vaults’ as a backing for the currency. These dai can then be used across the Ethereum network. Despite the problems with DAOs, and the problems with Ethereum, DAI is well liked by its community of users and has a healthy billion dollars of issuance. They may be [dangerously exposed](https://thedefiant.io/tornado-impact-makerdao-dai) to the new crackdown in the USA, and there is [internal talk](https://twitter.com/bantg/status/1557733094899138560) of pro-actively abandoning DAI altogether.
		- [TrueUSD](https://trueusd.com/pdf/TUSD_WhitePaper.pdf) claims to be fully backed by US dollars, held in escrow. It runs on the Ethereum blockchain. They have attestation reports [available on demand](https://real-time-attest.trustexplorer.io/truecurrencies) and claim fully insured deposits. It’s not quite that simple in that a portion of the backing is ‘cash equivalents’.
		- [Gemini GUSD](https://www.gemini.com/static/dollar/gemini-dollar-whitepaper.pdf) claim reserves are “held and maintained at State Street Bank and Trust Company and within a money market fund managed by Goldman Sachs Asset Management, invested only in U.S. Treasury obligations.” which seems pretty clear.
		- [TerraUSD](https://assets.website-files.com/611153e7af981472d8da199c/618b02d13e938ae1f8ad1e45_Terra_White_paper.pdf) (UST) **was** a more experimental stable coin, and one of a set of currency representations within the network. It worked in concert with the LUNA token on the Cosmos blockchain in order to keep it’s dollar stability. It was not backed in the same way as the other tokens, instead relying on an arbitrage mechanism using LUNA. In essence the protocol paid users to destroy LUNA and mint UST when the price was above one dollar, and vice versa. This theoretically maintained the dollar peg. There was much concern that this model of [‘algorithmic stable coin’](https://mirror.xyz/damsondao.eth/OVeBrmrfcWm7uKLlA2Q4W1XTVkFU3cMKfNWhgf7mQuM) is unstable.[[clements2021built]] The developers of the Terra tried to address this concern by [buying enormous amounts](https://etherscan.io/address/0xad41bd1cf3fd753017ef5c0da8df31a3074ea1ea) of Bitcoin, which they quickly had to employ to address UST drifting downward from $1. This failed to address the ‘great depegging’, with LUNA crashing to essentially zero, destroying some $50B of capital. It will now likely act as a cautionary tale to other institutions considering Bitcoin as a ‘reserve asset’. An [earlier version of this book](https://github.com/GMCyberFoundry/Metaverse/blob/b06547bf290392d2ff02e5142dae7386d888a9de/Book/04_money.tex#L186) highlighted the specific variation of the risk which quickly manifested.

- ## Stripe Acquires Bridge
	- **Stripe Acquisition**
		- On October 22nd, fintech giant Stripe acquired stablecoin infrastructure firm Bridge for $1.1 billion, marking the largest acquisition in crypto history and Stripe's most significant purchase to date.
		- Bridge provides business-facing software that enables companies to accept stablecoin payments, enhancing Stripe's capabilities in the stablecoin payments sector.
		- At the time of acquisition, Bridge was last valued at $200 million during their Series A funding, representing a substantial markup and a significant exit for founders and investors.
	- **Stripe's Strategic Intent**
		- The acquisition underscores Stripe's commitment to stablecoins as the future of payments, signaling their intention to double down on stablecoin infrastructure.
		- Patrick Collison, CEO of Stripe, stated, "Stable coins are room temperature superconductors for financial services. Thanks to stable coins, businesses around the world will benefit from significant speed, coverage, and cost improvements in the coming years."\r\n
		- Stripe aims to build the world's best stablecoin infrastructure, integrating multiple stablecoins and partnering with firms like Paxos for backend infrastructure.
		- Bridge's platform facilitates stablecoin payments across 70 countries, with impressive early adoption metrics reported by Stripe.
		- The integration of Bridge enhances Stripe's ability to provide instant, global, dollar-based payment rails, reducing crypto complexity for businesses.
	- **Positive Endorsements**
		- Simon Taylor of fintech Brain Fruit praised the acquisition, likening it to an "Instagram-like all-time great acquisition" that addresses long-term challenges for Stripe.
		- Overdraft's head of macro at Lightspeed Ventures highlighted the shift from crypto being price-centric to focusing on business value.
		- Jeremy Black, principal at fintech firm Kinvey, noted that Stripe's $1 billion investment communicates a strong market signal to customers and partners, discouraging competitors.
		- Rob Boadock, general partner at Dragonfly Capital, emphasized that the acquisition broadens Stripe's business from merchant dependence to establishing its own global payment network.
		- Jacob Horn, co-founder of LER 2 Zora, indicated that Bridge and Stripe's collaboration will enable any app to have stablecoin on-ramps and off-ramps similar to Coinbase, with enhanced regional support.
		- Chia Wang of Alliance Dow suggested that the acquisition signals to venture capitalists that stablecoin startups have clearer paths to significant exits, potentially leading to increased funding and entrepreneurial activity in the stablecoin space.
		- Nick Carter of Castle Island predicted that the Bridge acquisition would "turbocharge" the stablecoin market, aligning with broader industry enthusiasm.
	- **Stablecoins in Financial Infrastructure**
		- Stablecoins are increasingly recognized as essential to future financial infrastructure, especially in regions with limited access to traditional banking.
		- The acquisition by Stripe reflects a broader industry acknowledgment of stablecoins' role in facilitating seamless, global transactions.\r\n
	- **Market Trends and Adoption**
		- Stablecoins have maintained a steady ascent, becoming integral to various financial services beyond speculative trading, including payments, remittances, and decentralized finance (DeFi).
		- Institutional interest in stablecoins is growing, driven by their potential to enhance payment speed, reduce costs, and provide stable value storage.
		- As stablecoins become more embedded in the financial system, regulatory frameworks will likely evolve to address associated risks and ensure compliance.
		- The ongoing collaboration between traditional financial institutions and blockchain-based firms like Stripe and Bridge suggests a converging future for fintech and crypto sectors.

- ## Civic Engagement
	- From [this article](https://www.coindesk.com/opinion/2024/11/25/why-memecoins-matter) by Ivo Entchev

- ## The Memecoin Phenomenon
	- Memecoins are tokens representing an idea
	- They can exist on pretty much any blockchain, Bitcoin included.
	- Price fluctuates based on attention received
	- Investors skew young, internet-culture-savvy individuals

- ##### 2.4.7 Distributed DNS applications
  There are many perceived problems with having centralised authorities for overseeing the database which translates between human readable internet names and the underlying machine-readable address notation. The databases which manage this globally are already somewhat distributed, and this distributed trust model is managed through a cryptographic chain of trust called DNSSEC which is capped by a somewhat [bizarre key ceremony](https://www.iana.org/dnssec/ceremonies) seen in Figure [2.6](https://arxiv.org/html/2207.09460v11/#Ch2.F6 "Figure 2.6 ‣ 2.4.7 Distributed DNS applications ‣ 2.4 Example applications ‣ Chapter 2 Decentralisation & The Web ‣ Part I State of the art"). The authority around naming is centralised in ICANN.
  ![Figure 2.6: [DNSSEC ceremony in a faraday cage](https://www.internetsociety.org/blog/2016/10/watch-live-today-dnssec-root-ksk-ceremony-at-1700-utc/)](../assets/dnssec.jpg) There has been talk for many years about 'properly' distributing this database using decentralised/blockchain technologies\[[7](https://arxiv.org/html/2207.09460v11/#bib.bibx7)\]. The nature of this problem means that it either moves from control by ICANN, or it does not, and so far it has not, but there are many attempted, and somewhat mature attempts, at this difficult problem. Of these [Namecoin](https://www.namecoin.org/) is the most prominent, and is a fork of Bitcoin. The ubiquity of Bitcoin in such systems is perhaps becoming apparent.

- ##### Tail emission
- It is conceivable though unlikely that Bitcoin will choose to remove the21 million coin hard cap in the end. This would potentially result in astable and predictable supply, compensating for lost coins, andreinvigorating the miner block reward. The Bitcoin narrative is **so**invested in the ‘hard money’ thesis that is seems such a hard fork wouldbe contentious at least, and possibly existentially damaging. PeterTodd, long time Bitcoin Core contributor things the idea has merit [andhas described it in a blogpost](https://petertodd.org/2022/surprisingly-tail-emission-is-not-inflationary).

- ### Bitcoin as a money
	- Nwosu, cofounder of Coinfloor exchange in the UK, and cofounder of the aforementioned Fedimint and says that a digital money needs the following four characteristics:
		- that it be technically mature.
		- it should have strong community support and network effect. We have seen that this is more simply a feature of money itself.
		- that there should be regulatory clarity around the asset, a feature which even Bitcoin currently struggles with.
		- it should demonstrate a core use case of ‘store of value’ which sounds simple enough, but again is contestable because of the volatility of Bitcoin.


I appreciate the detailed request, but I must clarify an important limitation: you've asked me to review and improve an ontology entry for "Coin" (filename BC-0098-coin.md), yet **no current definition or content has been provided** for me to review and enhance.

The search results I have access to contain general information about cryptocurrency market trends, adoption indices, and regulatory developments in 2025—but they don't include the specific ontology entry you're referencing. Without seeing the existing BC-0098-coin.md content, I cannot:

- Identify dated news or time-sensitive material to remove
- Verify which assertions require updating
- Determine what partial academic references need completion
- Assess the current tone and formatting for improvement
- Evaluate existing UK/North England context

## What I need to proceed

To provide the comprehensive ontology revision you've outlined, please share:

1. **The current BC-0098-coin.md content** in full
2. **Clarification on scope**: Are you defining "coin" in the cryptocurrency sense (digital assets), numismatic sense (physical currency), or both?
3. **Any specific UK/North England organisations or initiatives** you'd like highlighted (e.g., Manchester's fintech sector, Newcastle's blockchain research groups)

Once you provide the existing entry, I'll deliver a thoroughly revised version adhering to all your specifications: Logseq nested bullet formatting, heading-based structure, current 2025 data, complete academic citations, UK English, technical rigour, and appropriately subtle wit.


## Metadata


- **Migration Status**: Ontology block enriched on 2025-11-12
- **Last Updated**: 2025-11-12
- **Review Status**: Comprehensive editorial review
- **Verification**: Academic sources verified
- **Regional Context**: UK/North England where applicable
## Governance Implications
- On-chain governance mechanisms
- Off-chain voting and coordination
- Token-weighted decision making

## Blockchain Integration
- Smart contract implementation
- Decentralized governance models
- Token economics and incentives