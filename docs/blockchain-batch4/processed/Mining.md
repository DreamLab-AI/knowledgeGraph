- ### OntologyBlock
  id:: mining-ontology
  collapsed:: true

  - **Identification**

    - domain-prefix:: BC

    - sequence-number:: 0053

    - filename-history:: ["BC-0053-mining.md"]
    - public-access:: true
    - ontology:: true
    - term-id:: BC-0053
    - preferred-term:: Mining
    - source-domain:: blockchain
    - status:: complete
    - version:: 1.0.0
    - last-updated:: 2025-10-28

  - **Definition**
    - definition:: Proof-of-work block creation within blockchain systems, providing essential functionality for distributed ledger technology operations and properties.
    - maturity:: mature
    - source:: [[ISO/IEC 23257:2021]], [[IEEE 2418.1]], [[NIST NISTIR]]
    - authority-score:: 0.95

  - **Semantic Classification**
    - owl:class:: bc:Mining
    - owl:physicality:: VirtualEntity
    - owl:role:: Object
    - owl:inferred-class:: bc:VirtualObject
    - belongsToDomain:: [[ConsensusDomain]]
    - implementedInLayer:: [[ProtocolLayer]]

  - #### Relationships
    id:: mining-relationships
    - is-subclass-of:: [[Blockchain Entity]], [[ConsensusProtocol]]

  - #### OWL Axioms
    id:: mining-owl-axioms
    collapsed:: true
    - ```clojure
      Prefix(:=<http://metaverse-ontology.org/blockchain#>)
Prefix(owl:=<http://www.w3.org/2002/07/owl#>)
Prefix(rdf:=<http://www.w3.org/1999/02/22-rdf-syntax-ns#>)
Prefix(xml:=<http://www.w3.org/XML/1998/namespace>)
Prefix(xsd:=<http://www.w3.org/2001/XMLSchema#>)
Prefix(rdfs:=<http://www.w3.org/2000/01/rdf-schema#>)
Prefix(dct:=<http://purl.org/dc/terms/>)

Ontology(<http://metaverse-ontology.org/blockchain/BC-0053>
  Import(<http://metaverse-ontology.org/blockchain/core>)

  ## Class Declaration
  Declaration(Class(:Mining))

  ## Subclass Relationships
  SubClassOf(:Mining :ConsensusProtocol)
  SubClassOf(:Mining :BlockchainEntity)

  ## Essential Properties
  SubClassOf(:Mining
    (ObjectSomeValuesFrom :partOf :Blockchain))

  SubClassOf(:Mining
    (ObjectSomeValuesFrom :hasProperty :Property))

  ## Data Properties
  DataPropertyAssertion(:hasIdentifier :Mining "BC-0053"^^xsd:string)
  DataPropertyAssertion(:hasAuthorityScore :Mining "1.0"^^xsd:decimal)
  DataPropertyAssertion(:isFoundational :Mining "true"^^xsd:boolean)

  ## Object Properties
  ObjectPropertyAssertion(:enablesFeature :Mining :BlockchainFeature)
  ObjectPropertyAssertion(:relatesTo :Mining :RelatedConcept)

  ## Annotations
  AnnotationAssertion(rdfs:label :Mining "Mining"@en)
  AnnotationAssertion(rdfs:comment :Mining
    "Proof-of-work block creation"@en)
  AnnotationAssertion(dct:description :Mining
    "Foundational blockchain concept with formal ontological definition"@en)
  AnnotationAssertion(:termID :Mining "BC-0053")
  AnnotationAssertion(:priority :Mining "1"^^xsd:integer)
  AnnotationAssertion(:category :Mining "consensus-fundamentals"@en)
)
      ```

- ## About Mining
  id:: mining-about

  - Proof-of-work block creation within blockchain systems, providing essential functionality for distributed ledger technology operations and properties.
  -
  - ### Key Characteristics
    id:: mining-characteristics
    - 1. **Definitional Property**: Core defining characteristic
    - 2. **Functional Property**: Operational behavior
    - 3. **Structural Property**: Compositional elements
    - 4. **Security Property**: Security guarantees provided
    - 5. **Performance Property**: Efficiency considerations
  -
  - ### Technical Components
    id:: mining-components
    - **Implementation**: How concept is realized technically
    - **Verification**: Methods for validating correctness
    - **Interaction**: Relationships with other components
    - **Constraints**: Technical limitations and requirements
  -
  - ### Use Cases
    id:: mining-use-cases
    - **1. Core Blockchain Operation**
    - **Application**: Fundamental blockchain functionality
    - **Example**: Practical implementation in major blockchains
    - **Requirements**: Technical prerequisites
    - **Benefits**: Value provided to blockchain systems
  -
  - ### Standards & References
    id:: mining-standards
    - [[ISO/IEC 23257:2021]] - Blockchain and distributed ledger technologies
    - [[IEEE 2418.1]] - Blockchain and distributed ledger technologies
    - [[NIST NISTIR]] - Blockchain and distributed ledger technologies
  -

- ## 2024-2025: Regulatory Reversal, Renewable Energy Dominance, and Institutional Consolidation
  id:: mining-recent-developments

  The years 2024 and 2025 witnessed Bitcoin mining's most profound transformation since China's 2021 ban, characterised by **dramatic U.S. regulatory reversal**, the **renewable energy adoption surge** becoming economically dominant rather than merely aspirational, **institutional consolidation** through multi-billion-dollar capital raises, the **post-halving profitability crisis** forcing marginal miners into bankruptcy, and the sector's strategic **diversification into high-performance computing (HPC) and artificial intelligence (AI)** infrastructure to hedge against Bitcoin price volatility.

  ### Regulatory Whiplash: From 30% Mining Tax to Strategic Embrace

  The regulatory landscape for Bitcoin mining underwent a **180-degree reversal** in the United States between 2024 and 2025, shifting from hostile taxation proposals to strategic industrial policy embrace:

  **Biden Administration Hostility (2023-2024):**
  - The Biden White House's **30% Digital Asset Mining Energy (DAME) tax proposal** (May 2023) aimed to impose excise taxes on electricity used for cryptocurrency mining, which industry analysts projected would render **U.S. mining operations economically unviable** and drive hashrate migration to less regulated jurisdictions. The proposal remained under consideration through 2024 but never advanced to legislation.

  - **Energy consumption scrutiny intensified**: The 2022 White House report "Climate and Energy Implications of Crypto-Assets" framed proof-of-work mining as environmentally destructive, citing estimates that Bitcoin mining consumed **120-150 TWh annually** (comparable to entire countries like Sweden or Argentina).

  **Trump Administration Reversal (2025):**
  - Following the January 2025 presidential transition, the **DAME tax proposal was abandoned**, signalling a fundamental policy shift. The Trump administration positioned Bitcoin mining as **strategic industrial capacity** and a mechanism for **grid modernisation** and **renewable energy integration** rather than an environmental threat.

  - **State-level divergence continued**: Texas, Wyoming, Montana, North Dakota, and Arkansas enacted **pro-mining legislation** protecting data centres and providing energy incentives, whilst New York's 2022 two-year moratorium on **carbon-intensive mining facilities** remained in effect through 2024 before expiring without renewal in 2025. Arkansas proposed new regulations in 2024 addressing **environmental and noise concerns** following community pushback in rural areas.

  **International Regulatory Fragmentation:**
  - **EU MiCA Regulation** (effective December 2024): The Markets in Crypto-Assets framework established comprehensive standards for cryptocurrency operations across the European Union, including environmental disclosure requirements for mining operations, but stopped short of banning proof-of-work mining despite pressure from the European Central Bank.

  - **Kuwait banned mining entirely** in 2025 due to power grid strain from summer air conditioning demand, joining a growing list of nations (including Kosovo, Iran intermittently, and Iceland temporarily) imposing bans or restrictions due to **energy infrastructure constraints**.

  - **Russia introduced seasonal mining bans** (implemented in select regions during winter peak electricity demand) whilst paradoxically positioning itself as a mining destination for operations fleeing Western sanctions. Estimates suggested approximately **20% of global hashrate** operated within China despite official 2021 mining bans, indicating persistent underground operations.

  The regulatory trajectory shifted from **blanket hostility** toward **nuanced jurisdiction shopping**, with miners concentrating in regions offering stable legal frameworks, low-cost renewable energy, and grid infrastructure capable of absorbing large-scale operations.

  ### Renewable Energy Adoption Becomes Economic Imperative

  The period from 2024 to 2025 marked the tipping point whereby **renewable energy adoption transitioned from reputational benefit to economic necessity** for competitive mining operations:

  **MARA Holdings (Marathon Digital):**
  - MARA acquired a **wind farm in North Texas** in 2024, enabling the company to mine Bitcoin using **curtailed wind energy** that would otherwise be wasted due to transmission constraints. This vertical integration model provided MARA with electricity costs potentially **40-60% below grid rates** during periods of wind abundance, creating substantial competitive advantages.

  - The company adopted **immersion cooling technologies** using dielectric fluids rather than air cooling, reducing water consumption by up to 95% compared to traditional data centre cooling and enabling higher-density deployments in regions with water scarcity.

  - MARA faced legal challenges: in October 2024, Granbury, Texas residents represented by **Earthjustice filed lawsuits** against Marathon Digital alleging **health impacts from noise pollution** (mining facility fans operating 24/7 at 70-80 decibels), setting precedent for community environmental justice claims against mining operations.

  **CleanSpark (CLSK):**
  - CleanSpark positioned itself as the **"greenest public miner"**, operating facilities across **seven U.S. states** powered by a combination of **solar, wind, and nuclear energy**. By January 2025, the company's total hashrate reached **40.1 EH/s** (exahashes per second), representing approximately **6.5% of Bitcoin's total network hashrate**.

  - The company's renewable energy focus attracted **ESG-conscious institutional investors** and provided insulation against regulatory proposals targeting carbon-intensive mining. CleanSpark's geographic diversification across multiple U.S. states with independent grids (Texas ERCOT, Western Interconnection, Eastern Interconnection) reduced exposure to regional energy policy shifts.

  **Riot Platforms (RIOT):**
  - In March 2024, Riot invested in **Reformed Energy**, a waste-to-energy company specialising in **plasma gasification technology** that converts municipal and industrial waste into synthesis gas for electricity generation. This partnership enabled Riot to mine Bitcoin using energy that simultaneously addressed **landfill methane emissions** and waste management challenges.

  - Riot's Texas operations increasingly relied on **wind and solar energy**, with the company participating in **ERCOT's demand response programmes**: during grid stress events (extreme heat, cold, or renewable intermittency), Riot curtailed mining operations and **sold electricity back to the grid**, generating revenue whilst supporting grid stability. In 2024, Riot earned approximately **$31 million** from demand response participation, representing **8-10% of total revenue**.

  - By Q4 2024, Riot's hash rate capacity reached **30.8 EH/s**, with plans to expand to **36+ EH/s** by late 2025 through facility expansions in Texas, Kentucky, and other low-cost energy regions.

  **Renewable Energy Percentage:**
  - Industry-wide estimates suggested approximately **60% of Bitcoin mining** utilised some renewable energy component by 2025, up from approximately **40% in 2021** and **25% in 2019**. However, these figures remained contested: critics noted that "some renewable component" included miners purchasing renewable energy credits (RECs) whilst actually consuming fossil fuel electricity, a practice dismissed as **greenwashing** by environmental groups.

  - The economic driver was undeniable: **renewable energy—particularly curtailed wind and solar—offered the lowest marginal electricity costs** available to miners, frequently below **$0.02/kWh** compared to **$0.05-0.08/kWh** for fossil fuel baseload power. This 60-75% cost advantage made renewable adoption an **operational imperative** for competitive survival, regardless of environmental motivations.

  ### Institutional Consolidation and the $4.6 Billion Capital Surge

  The institutional mining sector underwent **dramatic consolidation** through 2024-2025 as publicly traded miners raised unprecedented capital whilst marginal operators faced bankruptcy following the April 2024 halving:

  **Capital Raises and Institutional Ownership:**
  - Publicly traded Bitcoin miners collectively raised over **$4.6 billion** in late 2024 and early 2025 through equity offerings, convertible debt, and equipment financing. This capital influx funded **expansion into AI/HPC infrastructure**, **ASIC miner upgrades** (transitioning from older S19 models to more efficient S21 and M60 series miners), and **strategic Bitcoin accumulation** during price weakness.

  - **Jane Street Capital**—a quantitative trading powerhouse—increased its ownership in Marathon Digital Holdings to **6.5% by December 31, 2023** (disclosed in 2024 SEC filings), with a stake valued at **$334 million**. This represented the most significant institutional position by a traditional finance firm in a pure-play mining company, signalling legitimation and potential for further Wall Street capital inflows.

  - **BlackRock, Vanguard, and Fidelity** held substantial positions in multiple publicly traded miners through passive index funds, creating a **circular institutional exposure loop**: institutional capital flowed into Bitcoin ETFs (which drove Bitcoin price appreciation), simultaneously flowing into mining equities (which benefited from higher Bitcoin prices), creating reinforcing dynamics.

  **Market Concentration:**
  - By early 2025, the **top five publicly traded miners** (MARA, CleanSpark, Riot, Core Scientific, Iren) controlled approximately **28% of Bitcoin's total network hashrate**, up from approximately **18% in 2022**. This concentration reflected economies of scale in:
    - **Capital access**: Public miners raised debt and equity at costs 30-50% lower than private competitors
    - **Equipment procurement**: Volume discounts on ASIC miners from Bitmain, MicroBT, and other manufacturers
    - **Energy contracting**: Negotiating power with utilities and renewable developers for long-term fixed-price contracts
    - **Regulatory compliance**: Institutional infrastructure for environmental reporting, financial audits, and regulatory engagement

  **Bankruptcy Wave:**
  - The April 2024 **halving event** (reducing block rewards from 6.25 BTC to 3.125 BTC) triggered a **profitability crisis** for marginal miners: operations using older hardware, paying above-market electricity rates, or carrying excessive debt faced instant unprofitability at Bitcoin prices below approximately **$40,000-45,000**.

  - By late 2024, an estimated **15-20% of mining operations**—primarily smaller private operators—had **shut down** or entered bankruptcy, with their hashrate absorbed by more efficient competitors. Mining hardware flooded secondary markets, with older S19 ASIC miners selling for **40-50% below 2023 prices**.

  ### Post-Halving Operational Pressures and Efficiency Arms Race

  The April 2024 halving created an **existential efficiency imperative** that reshaped competitive dynamics:

  **Hash Rate Growth Despite Revenue Cut:**
  - Despite block rewards halving from 6.25 BTC to 3.125 BTC (a 50% revenue reduction for miners), Bitcoin's **total network hash rate continued growing**, reaching approximately **615 EH/s** by early 2025, up from approximately **500 EH/s** pre-halving. This seeming paradox—declining rewards yet increasing computational power—reflected:
    - **Newer ASIC efficiency**: The transition from 30-35 J/TH (joules per terahash) miners (S19 series) to 18-23 J/TH miners (S21, M60 series) reduced electricity costs per hash by **35-40%**, partially offsetting halving impacts
    - **Lower energy costs**: Migration to stranded renewable energy and waste energy sources reduced average electricity costs industry-wide
    - **Bitcoin price appreciation**: Bitcoin's rise from approximately $60,000 pre-halving to $80,000-90,000 post-halving (and briefly exceeding $109,000) partially compensated for reduced block rewards

  **Profitability Threshold:**
  - By late 2024, industry analysis suggested **break-even Bitcoin prices** for different miner categories:
    - **Cutting-edge operations** (newest hardware, <$0.03/kWh electricity): Break-even approximately **$25,000-30,000** Bitcoin
    - **Mid-tier operations** (2022-2023 hardware, $0.04-0.06/kWh electricity): Break-even approximately **$40,000-50,000** Bitcoin
    - **Marginal operations** (older hardware, >$0.07/kWh electricity): Break-even approximately **$60,000-70,000** Bitcoin

  - These thresholds meant that at Bitcoin prices of $80,000+ (prevalent through much of late 2024 and early 2025), even marginal operators remained profitable, delaying expected capitulation and keeping hash rate elevated.

  **Transaction Fee Volatility:**
  - Bitcoin **transaction fees**—which supplement block rewards—exhibited extreme volatility through 2024-2025:
    - During periods of network congestion (NFT minting frenzies, Ordinals inscriptions, high-value settlement periods), fees temporarily exceeded **10-15% of miner revenue**, providing substantial windfalls
    - During quiet periods, fees comprised only **1-2% of revenue**, offering negligible supplementation to halving-reduced block rewards

  - This volatility introduced **revenue unpredictability** absent in previous cycles, complicating financial modelling and potentially increasing cost of capital for debt-financed miners.

  ### Strategic Diversification: HPC and AI Infrastructure Pivot

  Facing post-halving revenue pressures and Bitcoin price volatility, institutional miners pursued **strategic diversification** into high-performance computing and artificial intelligence workloads:

  **Business Model Evolution:**
  - Publicly traded miners increasingly positioned themselves as **"digital infrastructure providers"** rather than pure-play Bitcoin miners, leveraging existing assets:
    - **Low-cost electricity contracts**: Transferable to AI/HPC workloads
    - **Data centre facilities**: Convertible to GPU compute clusters with infrastructure modifications
    - **Cooling systems**: Liquid and immersion cooling developed for ASIC miners directly applicable to GPU thermal management
    - **Grid connectivity**: High-voltage transmission connections valuable for any large-scale compute operations

  **AI/HPC Revenue Streams:**
  - By early 2025, multiple miners announced **AI infrastructure initiatives**:
    - **Core Scientific** partnered with **CoreWeave** (AI compute provider) to convert **200 MW** of mining capacity to GPU clusters for large language model training and inference
    - **Hut 8 Mining** launched **high-performance computing services** targeting AI startups, cloud providers, and research institutions
    - **Iris Energy** (Australian miner) announced plans to allocate **30-40% of future capacity expansions** to AI/HPC rather than Bitcoin mining

  - These diversification strategies aimed to **hedge Bitcoin price volatility** whilst capitalising on the **AI infrastructure boom**: GPU compute demand for LLM training created shortages and premium pricing, with providers earning **$2-4 per GPU-hour** for high-end Nvidia H100/H200 clusters.

  **Investment Community Response:**
  - Financial analysts remained **divided on AI diversification**:
    - **Bulls** argued diversification reduced business model risk and unlocked higher valuation multiples (AI infrastructure companies traded at 8-12x revenue vs. 2-4x for pure miners)
    - **Bears** contended miners lacked AI/HPC operational expertise, faced fierce competition from established cloud providers (AWS, Azure, Google Cloud), and risked capital misallocation away from their core competency

  - By early 2025, **share price performance** for diversified miners (Core Scientific, Hut 8) **underperformed pure-play miners** (MARA, CleanSpark), suggesting investor scepticism about execution risks and preference for focused business models in a Bitcoin bull market.

  ### Environmental Controversies and Community Resistance

  Despite renewable energy adoption progress, Bitcoin mining faced **intensifying local opposition** based on noise pollution, water consumption, and perceived community harm:

  **Noise Litigation:**
  - The **Granbury, Texas lawsuit** (October 2024) against Marathon Digital represented a **watershed moment**: residents alleged 24/7 noise from mining facility cooling fans (measured at 70-80 decibels at property lines) caused **sleep deprivation, stress, and diminished property values**. The lawsuit sought facility shutdowns and damages, potentially establishing legal precedent for **community environmental justice claims**.

  - Similar opposition emerged in **New York** (fuelling the 2022 mining moratorium extension), **Montana** (where rural communities rejected proposed mining facilities), and **Iceland** (where energy abundance attracted miners but tourism-dependent communities resisted industrialisation).

  **Water Consumption Debates:**
  - Critics highlighted that **evaporative cooling systems** used by many mining facilities consumed substantial water—potentially **1-2 gallons per kWh** in arid regions—exacerbating water scarcity in drought-affected areas like West Texas and the Southwest U.S.

  - Industry response emphasised **immersion cooling adoption** (95% water reduction), **air cooling in humid climates** (no water consumption), and **closed-loop systems** (99% water recycling). However, older facilities continued using evaporative cooling due to retrofit costs.

  **Greenwashing Accusations:**
  - Environmental groups dismissed renewable energy claims as **"greenwashing"**, arguing:
    - Miners purchasing renewable energy credits (RECs) whilst consuming fossil fuel electricity provided no climate benefit
    - Co-location with renewable projects increased **total energy system load**, necessitating fossil fuel backup capacity
    - Methane mitigation claims overstated climate benefits whilst enabling continued fossil fuel extraction

  - The mining industry countered that **load flexibility** (curtailing during grid stress) and **absorption of curtailed renewable energy** provided genuine grid services and accelerated renewable deployment economics.

  ### Future Trajectory: Consolidation, Commoditisation, or Climate Reckoning?

  By mid-2025, Bitcoin mining's evolution remained deeply uncertain, with plausible trajectories including:

  **Institutional Consolidation Scenario:**
  - The top 10-15 publicly traded miners continue consolidating market share, eventually controlling **40-50% of global hashrate** by 2027-2028. Economies of scale, capital access advantages, and regulatory compliance capabilities create **insurmountable barriers to entry** for new competitors. Mining becomes a **low-margin infrastructure business** similar to cloud hosting, with returns converging toward cost of capital (8-12% ROE) rather than venture-like returns.

  **Commoditisation and Efficiency Plateau:**
  - ASIC efficiency improvements slow as manufacturers approach **physical thermodynamic limits** of silicon-based computing (currently approximately 5-10 J/TH theoretical minimum for SHA-256 hashing). Newer hardware provides only marginal efficiency gains, reducing the **obsolescence treadmill** that drove previous upgrade cycles. Mining profitability stabilises around **electricity cost + 20-30% margin**, with competitive advantages determined primarily by energy contracting rather than technology.

  **Climate Regulatory Backlash:**
  - Despite renewable energy adoption progress, Bitcoin's absolute energy consumption continues growing (potentially reaching **200+ TWh annually by 2027** if hash rate growth persists). A severe climate event or political shift triggers **coordinated international regulatory action**: the EU bans proof-of-work mining under updated MiCA provisions, multiple U.S. states impose moratoriums, and China fully enforces its 2021 ban. Mining concentrates in **jurisdictions of last resort** (Russia, Central Asia, parts of Africa) with limited regulatory oversight, creating reputational damage and accelerating institutional divestment.

  **AI Diversification Transformation:**
  - The AI infrastructure pivot proves successful, with miners capturing **10-15% of the AI compute market** by 2027 through competitive electricity costs and facility flexibility. Bitcoin mining revenue declines to **30-40% of total business** for diversified players, fundamentally transforming the sector into **"decentralised AI infrastructure"** with Bitcoin mining as a **supplementary revenue stream**. This narrative attracts higher valuations but dilutes Bitcoin's security budget, potentially creating long-term network vulnerabilities.

  The 2024-2025 period, whilst representing mining's transition to **institutional legitimacy and renewable energy dominance**, simultaneously exposed **persistent tensions** between energy consumption realities and climate commitments, between local community welfare and global digital infrastructure, and between Bitcoin-focused purity and revenue diversification pragmatism—tensions that will define the industry's trajectory through the remainder of the decade.

	- ## Value Proposition
	- {{embed ((661d5f6a-ce5e-479e-8722-2128890607bd))}}
	- <span class="image">Goldman suggests growth opportunity and potential demonetization of gold?</span>
	- ![GlbXFa4WoAAMtvl.jpg](assets/GlbXFa4WoAAMtvl_1741339946467_0.jpg)
	-
	- Legislators globally are [starting to codify](https://www.lopp.net/bitcoin-information/legal.html) their positions on proof of work as a technology (including Bitcoin). US States are variously [supporting](https://capitol.texas.gov/tlodocs/88R/billtext/html/HC00089I.htm) or constricting the technology, according to [state legislatures](https://www.ncsl.org/research/financial-services-and-commerce/cryptocurrency-2021-legislation.aspx). Notably, New York has [banned new carbon-intensive](https://www.nysenate.gov/legislation/bills/2021/A7389) mining facilities for 2 years, while rust and farm belt states with energy build-out problems are [providing incentives](https://financialpost.com/fp-finance/cryptocurrency/texas-governor-abbott-turns-to-bitcoin-miners-to-bolster-the-grid-and-his-re-election) and passing legislation to protect [mining data centers](https://www.arkleg.state.ar.us/Bills/Detail?id=hb1799). At the federal level, the White House has strongly signaled their concerns about the sector [in a report](https://www.whitehouse.gov/wp-content/uploads/2023/03/ERP-2023.pdf). Many of the points in the report are fair and true, and reflect things said in this knowledge base (which pre-dates the report). It’s worth picking out the conclusion of that section verbatim:
		- “Innovation in financial services brings both risks and opportunities for the broader economy. It can challenge business models and existing industries, but it cannot challenge basic economic principles, such as what makes an asset effective as money and the incentives that give rise to run risk. Although the underlying technologies are a clever solution for the problem of how to execute transactions without a trusted authority, crypto assets currently do not offer widespread economic benefits. They are largely speculative investment vehicles and are not an effective alternative to fiat currency. Also, they are too risky at present to function as payment instruments or to expand financial inclusion. Even so, it is possible that their underlying technology may still find productive uses in the future as companies and governments continue to experiment with DLT. In the meantime, some crypto assets appear to be here to stay, and they continue to cause risks for financial markets, investors, and consumers. Much of the activity in the crypto asset space is covered by existing regulations and regulators are expanding their capabilities to bring a large number of new entities under compliance (SEC 2022). Other parts of the crypto asset space require coordination by various agencies and deliberations about how to address the risks they pose (U.S. Department of the Treasury 2022a). Certain innovations, such as FedNow and a potential U.S. CBDC, could help bring the U.S. financial infrastructure into the digital era in a clear and simple way, without the risks or irrational exuberance brought by crypto assets. Hence, continued investments in the Nation’s financial infrastructure have the potential to offer significant benefits to consumers and businesses, but regulators must apply the lessons that civilization has learned, and thus rely on economic principles, in regulating crypto assets.”
	- Reading between the lines suggests that strong regulation is coming. Indeed, the [SEC is now suing](https://www.sec.gov/Archives/edgar/data/1679788/000167978823000051/coin-20230322.htm) the major tech company in the space, Coinbase, while closing a bank servicing the sector, and signaling that stable coins may be unregistered securities in law. The report itself has no ‘teeth’ but is likely a sign of things to come. There is purportedly $2.4B [entering the regulation ecosystems](https://docs.house.gov/meetings/AP/AP23/20230329/115576/HHRG-118-AP23-TTF-GenslerG-20230329.pdf) to enhance regulatory oversight. In actual fact, because of the nature of the federation of states, it is likely that a variety of different approaches in law will be taken across the geography and the sector seems to have responded with a shrug. As an aside, the report contains an excellent taxonomy of digital assets from Hoffman.
	- ![PresidentTaxonomy.jpg](assets/PresidentTaxonomy_1726575052124_0.jpg)
	-
	- Conversely, the recent “[Climate and energy implications](https://www.whitehouse.gov/ostp/news-updates/2022/09/08/fact-sheet-climate-and-energy-implications-of-crypto-assets-in-the-united-states/)” report is parts positive and parts negative about proof of work, and leaves the door open to a legislative clampdown. This is most notable in a [White House proposal](https://www.whitehouse.gov/cea/written-materials/2023/05/02/cost-of-cryptomining-dame-tax/) to tax Bitcoin mining at 30%, a plan which will destroy much of the US-based mining industry over the coming years. Carter provides a [detailed response](https://medium.com/@nic__carter/comments-on-the-white-house-report-on-the-climate-implications-of-crypto-mining-8d65d30ec942) to the tardy scientific analysis in the report. Perhaps most interestingly it notes the potential of methane mitigation as mentioned earlier. It is conceivable that methane mitigation alone could provide a route forward for the technology. The report says: “The crypto-asset industry can potentially use stranded methane gas, which is the principal component of natural gas, to generate electricity for mining. Methane gas is produced during natural gas drilling and transmission, and by oil wells, landfills, sewage treatment, and agricultural processes. Methane is a potent GHG that can result in 27 to 30 times the global warming potential of CO2 over a 100-year time frame, and is about 80 times as powerful as CO2 over a 20-year time frame. Reducing methane emissions can slow near-term climate warming, which is why the Biden-Harris Administration released the U.S. methane emissions reduction action plan in 2021. Venting and flaring methane at oil and natural gas wells wastes 4% of global methane production. In 2021, venting and flaring methane emitted the equivalent of 400 million metric tons of CO2, representing about 0.7% of global GHG emissions. This methane is vented or flared because of the high cost of constructing permanent pipelines or other infrastructure to bring it to market.”
	- The EU has just voted to add the whole of ‘crypto’, including PoW, to the EU taxonomy for sustainable activities. This EU-wide classification system provides investors with guidance as to the sustainability of a given technology and can have a meaningful impact on the flows of investment. With that said the report and addition of PoW is not slated until 2025, and it is by no means clear what the analysis will be by that point. Meanwhile they’re tightening controls of transactions, on which there will be more detail later. For its part, the European Central Bank has come out [in favor of strong constraints](https://www.ecb.europa.eu/pub/financial-stability/macroprudential-bulletin/html/ecb.mpbu202207_3~d9614ea8e6.en.html) on crypto mining, and [call out](https://papers.ssrn.com/sol3/papers.cfm?abstract_id=4985877) Bitcoin as a threat to society.
		- https://x.com/TuurDemeester/status/1847512241173582058
		- {{twitter https://twitter.com/TuurDemeester/status/1847512241173582058}}
	- They use the [widely discredited](https://medium.com/crescofin/the-reports-of-bitcoin-environmental-damage-are-garbage-5a93d32c2d7) “digiconimist” estimates to assert that mining operations are [disproportionately damaging to the environment](https://www.ecb.europa.eu/pub/financial-stability/macroprudential-bulletin/html/ecb.mpbu202207_3~d9614ea8e6.en.html).
	- We have seen that China has cracked down hard on the technology, banning mining and pressuring holders of the assets. They have unwound this somewhat, and based on past experience it seems that they will continue to nuance their position as they seek adoption of their own digital currency. As much as 20% of all mining activity is now suspected to take place within China.
	- Russia is moving to ban the whole technology, most especially Bitcoin, in response to capital flight concerns.
		- ![GMVHsb7WMAAT3tg.jpeg](assets/GMVHsb7WMAAT3tg_1714416578876_0.jpeg){:width 400}
	- In India, there has been confusion for years as more “local” law vies with confusing central government signaling. It has variously been banned and unbanned, and is now subject to punitive tax. The central bank of India is [strongly in favor](http://164.100.24.220/loksabhaquestions/annex/179/AS10.pdf) of a complete ban. Ajay Seth, secretary of the Finance Ministry’s Department of Economic Affairs recently said it: “We have gone through a deep dive consulting with not just the domestic and institutional stakeholders but also organizations like IMF and World Bank.... Simultaneously we are also beginning our work for some sort of a global regulation (to determine) what role India can play... Whatever we do, even if we go to the extreme form, the countries that have chosen to prohibit, they can’t succeed unless there is a global consensus.”
	- It feels like a global political response is just around the corner, but reputable voices in the community suggest that it always feels this way.

- # [[Politics, Law, Privacy]]
	- Legislators globally, are [starting to codify](https://www.lopp.net/bitcoin-information/legal.html) their positions on proof of work as a technology (including Bitcoin). US States are variously [supporting](https://capitol.texas.gov/tlodocs/88R/billtext/html/HC00089I.htm) or constricting the technology, according to [state legislatures](https://www.ncsl.org/research/financial-services-and-commerce/cryptocurrency-2021-legislation.aspx). Notably New York has [banned new carbon intensive](https://www.nysenate.gov/legislation/bills/2021/A7389) mining facilities for 2 years, while rust and farm belt states with energy build-out problems are [providing incentives](https://financialpost.com/fp-finance/cryptocurrency/texas-governor-abbott-turns-to-bitcoin-miners-to-bolster-the-grid-and-his-re-election) and passing legislation to protect [mining datacenters](https://www.arkleg.state.ar.us/Bills/Detail?id=hb1799). At the federal level the white house has strongly signalled their concerns about the sector [in a report](https://www.whitehouse.gov/wp-content/uploads/2023/03/ERP-2023.pdf). Many of the points in the report are fair, and true, and reflect things said in this book (which pre-dates the report). It's worth picking out the conclusion of that section verbatim: ["Innovation in financial services brings both risks and opportunities for the broader economy. It can challenge business models and existing industries, but it cannot challenge basic economic principles, such as what makes an asset effective as money and the incentives that give rise to run risk. Although the underlying technologies are a clever solution for the problem of how to execute transactions without a trusted authority, crypto assets currently do not offer widespread economic benefits. They are largely speculative investment vehicles and are not an effective alternative to fiat currency. Also, they are too risky at present to function as payment instruments or to expand financial inclusion. Even so, it is possible that their underlying technology may still find productive uses in the future as companies and governments continue to experiment with DLT. In the meantime, some crypto assets appear to be here to stay, and they continue to cause risks for financial markets, investors, and consumers. Much of the activity in the crypto asset space is covered by existing regulations and regulators are expanding their capabilities to bring a large number of new entities under compliance (SEC 2022). Other parts of the crypto asset space require coordination by various agencies and deliberations about how to address the risks they pose (U.S. Department of the Treasury 2022a). Certain innovations, such as FedNow and a potential U.S. CBDC, could help bring the U.S. financial infrastructure into the digital era in a clear and simple way, without the risks or irrational exuberance brought by crypto assets. Hence, continued investments in the Nation’s financial infrastructure have the potential to offer significant benefits to consumers and businesses, but regulators must apply the lessons that civilization has learned, and thus rely on economic principles, in regulating crypto assets.”]
	- Reading between the lines suggest that strong regulation is coming. Indeed the [SEC is now suing](https://www.sec.gov/Archives/edgar/data/1679788/000167978823000051/coin-20230322.htm) the major tech company in the space, Coinbase, while closing a bank servicing the sector, and signalling that stable coins may be unregistered securities in law. The report itself has no 'teeth' but is likely a sign of things to come. There is purportedly \$2.4B [entering the regulation ecosystems](https://docs.house.gov/meetings/AP/AP23/20230329/115576/HHRG-118-AP23-TTF-GenslerG-20230329.pdf) to enhance regulatory oversight. In actual fact, because of the nature of the federation of states it is likely that a variety of different approaches in law will be taken across the geography and the sector seems to have responded with a shrug. As an aside the report contains an excellent taxonomy of digital assets from Hoffman.
	- ![Figure 3.22: Taxonomy of digital assets Hoffman 2022](assets/PresidentTaxonomy.jpg)
	- Conversely the recent "[Climate and energy implications](https://www.whitehouse.gov/ostp/news-updates/2022/09/08/fact-sheet-climate-and-energy-implications-of-crypto-assets-in-the-united-states/)" report is parts positive and parts negative about proof of work, and leaves the door open to a legislative clampdown. This is most notable in a [White House proposal](https://www.whitehouse.gov/cea/written-materials/2023/05/02/cost-of-cryptomining-dame-tax/) to tax Bitcoin mining at 30%, a plan which will destroy much of the US based mining industry over the coming years. Carter provides a [detailed response](https://medium.com/@nic__carter/comments-on-the-white-house-report-on-the-climate-implications-of-crypto-mining-8d65d30ec942) to the tardy scientific analysis in the report. Perhaps most interestingly it notes the potential of methane mitigation as mentioned earlier. It is conceivable that methane mitigation alone could provide a route forward for the technology. The report says: ["The crypto-asset industry can potentially use stranded methane gas, which is the principal component of natural gas, to generate electricity for mining. Methane gas is produced during natural gas drilling and transmission, and by oil wells, landfills, sewage treatment, and agricultural processes. Methane is a potent GHG that can result in 27 to 30 times the global warming potential of CO2 over a 100-year time frame, and is about 80 times as powerful as CO2 over a 20-year timeframe. Reducing methane emissions can slow near-term climate warming, which is why the Biden-Harris Administration released the U.S. methane emissions reduction action plan in 2021. Venting and flaring methane at oil and natural gas wells wastes 4% of global methane production. In 2021, venting and flaring methane emitted the equivalent of 400 million metric tons of CO2, representing about 0.7% of global GHG emissions. This methane is vented or flared, because of the high cost of constructing permanent pipelines or other infrastructure to bring it to market."]
	- The EU has just voted to add the whole of 'crypto', including PoW, to the EU taxonomy for sustainable activities. This EU wide classification system provides investors with guidance as to the sustainability of a given technology, and can have a meaningful impact on the flows of investment. With that said the report and addition of PoW is not slated until 2025, and it is by no means clear what the analysis will be by that point. Meanwhile they're tightening controls of transactions, on which there will be more detail later. For it's part the European Central Bank has come out in favour of strong constraints on crypto mining. They use the [widely discredited](https://medium.com/crescofin/the-reports-of-bitcoin-environmental-damage-are-garbage-5a93d32c2d7) "digiconimist" estimates to assert that mining operations are [disproportionately damaging to the environment](https://www.ecb.europa.eu/pub/financial-stability/macroprudential-bulletin/html/ecb.mpbu202207_3~d9614ea8e6.en.html).
	- We have seen that China has cracked down hard on the technology, banning mining and pressuring holders of the assets. They have unwound this somewhat, and based on past experience it seems that they will continue to nuance their position as they seek adoption of their own digital currency. As much as 20% of all mining activity is now suspected to take place within China.
	- In India there has been confusion for years as more "local" law vies with confusing central government signalling. It has variously been banned and unbanned, and is now subject to punitive tax. The central bank of India is [strongly in favour](http.bp//164.100.24.220/loksabhaquestions/annex/179/AS10.pdf) of a complete ban. Ajay Seth, secretary of the Finance Ministry's Department of Economic Affairs recently said ["We have gone through a deep dive consulting with not just the domestic and institutional stakeholders but also organizations like IMF and World Bank.... Simultaneously we are also beginning our work for some sort of a global regulation (to determine) what role India can play... Whatever we do, even if we go to the extreme form, the countries that have chosen to prohibit, they can't succeed unless there is a global consensus"]
	- It feels like a global political response is just around the corner, but reputable voices in the community suggest that it always feels this way.

- # Mining and energy
	- [Bitcoin uses more energy than sweden](https://www.reddit.com/r/CryptoCurrency/comments/12xu714/bitcoin_has_just_surpassed_sweden_for_overall/)
	- [THE 'RIGHT TO MINE' #BITCOIN📷 IS NOW LAW IN THE STATE OF ARKANSAS!](https://twitter.com/satoshiactfund/status/1648445448833875969)
	- [Bitcoin is a more sustainable energy than EVs, and significantly less fossil fuel.](https://www.linkedin.com/posts/danielsbatten_like-evs-bitcoin-is-a-fully-electrified-activity-7049321186605858816-t4MB?utm_source=share&utm_medium=member_android)
	- [Batton's energy tracker](http://batcoinz.com/BEEST/)
	- [sazmining hosted hydro](https://www.sazmining.com/)

- # Other interesting links
	- [How Value-for-Value Fixes the Monetization of Information | dergigi.com,Thoughts about Bitcoin and other things.](https://dergigi.com/2021/12/30/the-freedom-of-value/)
	- [bitcoin secure multisig setup (bsms)](http://bitcoin-secure-multisig-setup.com/)
	- [Crypto Wave Gaining Momentum In Germany: Network Of 1,200 Banks To Offer Bitcoin](https://www.msn.com/en-us/money/news/crypto-wave-gaining-momentum-in-germany-network-of-1-200-banks-to-offer-bitcoin/ar-AA198Lxc)
	- [Hal Finney's theory of bitcoin backed banks](https://www.cointime.com/news/hal-finneys-theory-of-bitcoin-backed-banks-74474)
	- [bitcoin-mining-analogy-beginners-guide](https://braiins.com/blog/bitcoin-mining-analogy-beginners-guide)
	- [Introducing Floresta, a Utreexo-powered Electrum Server implementation](https://medium.com/vinteum-org/introducing-floresta-an-utreexo-powered-electrum-server-implementation-60feba8e179d)
	- [Fedimint Hackathon Winners Announced](https://www.nobsbitcoin.com/fedimint-hackathon-winners-announced/)
	- [A light introduction to ZeroSync](https://geometry.xyz/notebook/A-light-introduction-to-ZeroSync)
	- [Deception, exploited workers, and cash handouts: How Worldcoin recruited its first half a million test users](https://www.technologyreview.com/2022/04/06/1048981/worldcoin-cryptocurrency-biometrics-web3/)
	- [Cashu rust implementation](https://github.com/ngutech21/cashu-rs)
	- [Quantum miners](https://arxiv.org/pdf/2306.03321.pdf)
	- [address_index](https://github.com/bitcoin/bips/blob/master/bip-0044.mediawiki) and deterministic paths (BIP44)


	- ### Demand Paradox
		- Despite the common perception of energy scarcity, the energy sector often grapples with a shortage of demand rather than supply. This stems from the design of electrical grids, which are built to accommodate peak usage periods, leading to significant underutilisation during off-peak hours. This inefficiency results in suboptimal returns on infrastructure investments and economic losses.
		- Bitcoin mining emerges as a unique solution to this demand paradox. Due to its inherent flexibility, mining operations can dynamically adjust their energy consumption based on realtime grid conditions and market prices. This adaptability stems from the interruptible nature of the mining process, allowing miners to seamlessly pause and resume operations without incurring substantial losses. Consequently, miners can function as a responsive load, absorbing excess energy during periods of low demand and curtailing consumption during peak demand, thereby optimising grid utilisation.

	- ### Fostering Renewable Energy Integration
		- Bitcoin mining also plays a pivotal role in accelerating the integration of renewable energy sources like wind and solar power. The location-agnostic nature of mining operations allows them to be established in close proximity to renewable energy generation sites, even in remote locations with limited grid connectivity. This provides a consistent and reliable demand source for the often intermittent output of renewable energy, enhancing project viability and incentivising further investment in sustainable energy solutions. For instance, in the Panhandle region of Texas, where transmission infrastructure constraints limit the evacuation of generated renewable energy, Bitcoin miners are absorbing surplus power and contributing to the economic sustainability of renewable energy projects.

	- ### Facilitating Environmental Remediation
		- Furthermore, Bitcoin mining offers potential solutions for environmental challenges. A notable example is the utilisation of mining operations to power specialised plants designed to consume waste coal, a significant environmental hazard. By providing a stable and predictable demand for electricity, Bitcoin mining operations enable the economic viability of these plants, facilitating the remediation of polluted land and water tables. Stronghold Digital Mining, for instance, operates in Pennsylvania, where they utilise waste coal to generate electricity for Bitcoin mining while simultaneously contributing to environmental cleanup efforts. This is heavily contested.

	- ### Empowering Off-Grid Communities
		- In regions with limited or no access to the traditional electrical grid, Bitcoin mining can serve as a catalyst for electrification and development. By increasing the base load demand on minigrids, which often struggle with low utilisation and financial unsustainability, mining operations improve their economic viability. This enables minigrid operators to reduce energy costs for local communities and expand access to electricity, fostering positive social and economic outcomes. Gridless, a company operating in Africa, exemplifies this approach by deploying Bitcoin mining operations to enhance the financial sustainability of mini-grids and empower rural communities.

	- ### A Converging Future
		- The trajectory of Bitcoin mining and the energy sector suggests a future of increased collaboration and integration. Vertical integration, wherein miners become energy producers or energy companies engage in mining, holds significant potential for both sectors. This convergence would optimise energy utilisation, enhance grid stability, and drive innovation in both industries. As Bitcoin mining continues to evolve, its role in shaping a sustainable and efficient energy landscape will become increasingly prominent.

	- ### Introduction
	- This article presents an analysis by Hass McCook comparing the environmental impacts of Bitcoin, gold mining, and the banking industry.
	- The comparison aims to provide a more nuanced understanding of Bitcoin's environmental impact relative to other industries.

	- ### Bitcoin's Environmental Impact
	- **Energy Consumption**: Bitcoin consumes about 120 TWh annually, which is 0.25% of the energy wasted globally each year or 0.5% of the world's grid electricity.
	- **Carbon Emissions**: Using the global average grid figure of 0.6 tons of CO2 per kWh, Bitcoin mining emits approximately 70 Mt of CO2 annually.
	- **Renewable Energy Trends**: There is a trend towards Bitcoin mining using a combination of stranded, waste, and renewable energy sources.

	- ### Gold Mining's Environmental Impact
		- **Production**: In 2020, around 3500 tons of gold were mined and 1300 tons were recycled.
		- **Energy Use and CO2 Emissions**: Mining and refining each kilogram of gold for jewelry uses about 79.9 MWh and produces up to 35 tons of CO2.
		- **Total Impact (2020)**: Gold mining industry used 265 TWh of energy and produced 145 Mt of CO2.
		- {{video https://www.youtube.com/watch?v=ihvG3RgbYzE}}
		-

	- ### Conclusion
	- The article argues for a nuanced understanding of Bitcoin's environmental impact, especially when compared to other significant industries like gold mining and banking.
	- It suggests that the framing of environmental impacts should consider both energy consumption and pollution.
	- [Link to the article](https://www.nasdaq.com/articles/a-comparison-of-bitcoins-environmental-impact-with-that-of-gold-and-banking-2021-05-04)
	- https://news.cornell.edu/stories/2023/11/bitcoin-could-support-renewable-energy-development

	- ### Key Findings
	- **Profitability in Texas**: Texas, with 32 planned renewable projects, could see combined profits of $47 million from Bitcoin mining.
		- The Aktina Solar and Roseland Solar Projects, each with 250 MW capacities, could gain a maximum profit of $3.23 million.
		- The Western Trail Wind project, with 367 MW, showed potential profitability of $2.65 million.
	- **Performance in Other States**: California ranked second in profitability. Colorado, Illinois, Iowa, Nevada, and Virginia also showed potential despite fewer installations.
	- **Energy Availability and Location**: The study emphasizes the importance of steady energy availability and strategic location of mining farms to maximize productivity.

	- ## Title: Bitcoin Mining's Increased Renewable Energy Usage

	- ### Introduction
	- A report released on January 18, 2024, by ESG analyst Daniel Batten highlights a significant surge in sustainable energy use in Bitcoin mining.
	- The report is based on data from the BEEST model and analyzes publicly available information.

	- ### Key Findings
	- **Renewable Energy Usage**: The sustainable energy usage in Bitcoin mining has reached 54.5%, a 3.6% increase over 2023.
	- **Methane Mitigation**: Off-grid Bitcoin miners are using methane emissions for electricity generation, reducing environmental harm.
	- **Emission Mitigation**: The Bitcoin network mitigated 7.3% of its emissions without relying on offsets, a notable achievement across industries.
	- **Expansion of Renewable Mining**: The expansion includes Tether’s hydro mining in Latin America and more methane-mitigating mining sites.

	- ### Geographic and Industry Trends
	- **Geographical Shift**: Following mining bans in China and strict regulations in Kazakhstan, miners moved to regions with greener grids in North America or sustainable off-grid locations.
	- **Improvement in Emission Intensity**: On-grid Bitcoin miners have seen a 29% improvement in emission intensity compared to 2021.

		- ### Conclusion
		- The Treasury's report provides a nuanced view of criminal activities in the crypto space, emphasizing the predominant use of fiat currencies while recognizing the challenges and potential risks associated with DeFi.
	- [Link to the article](https://decrypt.co/125623/crooks-defi-crypto-fiat-treasury)https://www.cnbc.com/2023/03/26/bitcoin-is-poised-to-blow-up-africas-86-billion-banking-system.htmlhttps://impact.economist.com/projects/banking-the-underbanked/
	  https://unherd.com/2024/01/the-african-village-mining-bitcoin/
	  https://www.wired.co.uk/article/ukraine-crypto-refugee-aid
	  https://www.technologyreview.com/2023/01/13/1066820/cryptocurrency-bitcoin-mining-congo-virunga-national-park/

	- ### The Bitcoin Mining Initiative
	- **Initiation**: The park started Bitcoin mining in September 2020, primarily due to the loss of tourism revenue caused by various crises, including kidnappings, Ebola, and the COVID-19 pandemic.
	- **Operation**: The mining operation is powered by a hydroelectric power station on the mountain, using shipping containers filled with powerful computers.
	- **Profit and Use**: The proceeds from Bitcoin mining are used to pay park salaries and support infrastructure projects like roads and water pumping stations.

	- ### The Role of Emmanuel de Merode
	- **Background**: Emmanuel de Merode, the director of Virunga National Park, played a pivotal role in initiating the Bitcoin mining project.
	- **His Approach**: He focuses on building a sustainable economy tied to the park’s resources, aiming to turn the park into a positive asset for the community.

	- ### Conclusion
	- Virunga National Park's Bitcoin mining initiative represents an innovative approach to conservation funding, leveraging renewable energy to create a sustainable revenue stream. However, the project faces considerable challenges and risks due to the unstable regional context.
	- [Link to the article](https://www.technologyreview.com/2023/01/13/1066820/cryptocurrency-bitcoin-mining-congo-virunga-national-park/)
	  https://bitcoinmagazine.com/culture/bitcoin-financial-freedom-in-afghanistan
	  
	  https://foreignpolicy.com/2021/08/03/macron-france-cfa-franc-eco-west-central-africa-colonialism-monetary-policy-bitcoin/
		- https://files.oaiusercontent.com/file-s6V8kgf4OBmBsV4OWVfkrGTK?se=2123-12-25T11%3A08%3A40Z&sp=r&sv=2021-08-06&sr=b&rscc=max-age%3D1209600%2C%20immutable&rscd=attachment%3B%20filename%3D232f17ad-c93e-49a8-b5cd-7e8a56e8ec2e.png&sig=Dgi%2BamJkgTg7UzVzWUhCZy%2BGwXwijx7x63FCd3HhnNc%3D

	- ## Value Proposition
	- {{embed ((661d5f6a-ce5e-479e-8722-2128890607bd))}}
	- <span class="image">Goldman suggests growth opportunity and potential demonetization of gold?</span>
	- ![GlbXFa4WoAAMtvl.jpg](assets/GlbXFa4WoAAMtvl_1741339946467_0.jpg)
	-
	- Legislators globally are [starting to codify](https://www.lopp.net/bitcoin-information/legal.html) their positions on proof of work as a technology (including Bitcoin). US States are variously [supporting](https://capitol.texas.gov/tlodocs/88R/billtext/html/HC00089I.htm) or constricting the technology, according to [state legislatures](https://www.ncsl.org/research/financial-services-and-commerce/cryptocurrency-2021-legislation.aspx). Notably, New York has [banned new carbon-intensive](https://www.nysenate.gov/legislation/bills/2021/A7389) mining facilities for 2 years, while rust and farm belt states with energy build-out problems are [providing incentives](https://financialpost.com/fp-finance/cryptocurrency/texas-governor-abbott-turns-to-bitcoin-miners-to-bolster-the-grid-and-his-re-election) and passing legislation to protect [mining data centers](https://www.arkleg.state.ar.us/Bills/Detail?id=hb1799). At the federal level, the White House has strongly signaled their concerns about the sector [in a report](https://www.whitehouse.gov/wp-content/uploads/2023/03/ERP-2023.pdf). Many of the points in the report are fair and true, and reflect things said in this knowledge base (which pre-dates the report). It’s worth picking out the conclusion of that section verbatim:
		- “Innovation in financial services brings both risks and opportunities for the broader economy. It can challenge business models and existing industries, but it cannot challenge basic economic principles, such as what makes an asset effective as money and the incentives that give rise to run risk. Although the underlying technologies are a clever solution for the problem of how to execute transactions without a trusted authority, crypto assets currently do not offer widespread economic benefits. They are largely speculative investment vehicles and are not an effective alternative to fiat currency. Also, they are too risky at present to function as payment instruments or to expand financial inclusion. Even so, it is possible that their underlying technology may still find productive uses in the future as companies and governments continue to experiment with DLT. In the meantime, some crypto assets appear to be here to stay, and they continue to cause risks for financial markets, investors, and consumers. Much of the activity in the crypto asset space is covered by existing regulations and regulators are expanding their capabilities to bring a large number of new entities under compliance (SEC 2022). Other parts of the crypto asset space require coordination by various agencies and deliberations about how to address the risks they pose (U.S. Department of the Treasury 2022a). Certain innovations, such as FedNow and a potential U.S. CBDC, could help bring the U.S. financial infrastructure into the digital era in a clear and simple way, without the risks or irrational exuberance brought by crypto assets. Hence, continued investments in the Nation’s financial infrastructure have the potential to offer significant benefits to consumers and businesses, but regulators must apply the lessons that civilization has learned, and thus rely on economic principles, in regulating crypto assets.”
	- Reading between the lines suggests that strong regulation is coming. Indeed, the [SEC is now suing](https://www.sec.gov/Archives/edgar/data/1679788/000167978823000051/coin-20230322.htm) the major tech company in the space, Coinbase, while closing a bank servicing the sector, and signaling that stable coins may be unregistered securities in law. The report itself has no ‘teeth’ but is likely a sign of things to come. There is purportedly $2.4B [entering the regulation ecosystems](https://docs.house.gov/meetings/AP/AP23/20230329/115576/HHRG-118-AP23-TTF-GenslerG-20230329.pdf) to enhance regulatory oversight. In actual fact, because of the nature of the federation of states, it is likely that a variety of different approaches in law will be taken across the geography and the sector seems to have responded with a shrug. As an aside, the report contains an excellent taxonomy of digital assets from Hoffman.
	- ![PresidentTaxonomy.jpg](assets/PresidentTaxonomy_1726575052124_0.jpg)
	-
	- Conversely, the recent “[Climate and energy implications](https://www.whitehouse.gov/ostp/news-updates/2022/09/08/fact-sheet-climate-and-energy-implications-of-crypto-assets-in-the-united-states/)” report is parts positive and parts negative about proof of work, and leaves the door open to a legislative clampdown. This is most notable in a [White House proposal](https://www.whitehouse.gov/cea/written-materials/2023/05/02/cost-of-cryptomining-dame-tax/) to tax Bitcoin mining at 30%, a plan which will destroy much of the US-based mining industry over the coming years. Carter provides a [detailed response](https://medium.com/@nic__carter/comments-on-the-white-house-report-on-the-climate-implications-of-crypto-mining-8d65d30ec942) to the tardy scientific analysis in the report. Perhaps most interestingly it notes the potential of methane mitigation as mentioned earlier. It is conceivable that methane mitigation alone could provide a route forward for the technology. The report says: “The crypto-asset industry can potentially use stranded methane gas, which is the principal component of natural gas, to generate electricity for mining. Methane gas is produced during natural gas drilling and transmission, and by oil wells, landfills, sewage treatment, and agricultural processes. Methane is a potent GHG that can result in 27 to 30 times the global warming potential of CO2 over a 100-year time frame, and is about 80 times as powerful as CO2 over a 20-year time frame. Reducing methane emissions can slow near-term climate warming, which is why the Biden-Harris Administration released the U.S. methane emissions reduction action plan in 2021. Venting and flaring methane at oil and natural gas wells wastes 4% of global methane production. In 2021, venting and flaring methane emitted the equivalent of 400 million metric tons of CO2, representing about 0.7% of global GHG emissions. This methane is vented or flared because of the high cost of constructing permanent pipelines or other infrastructure to bring it to market.”
	- The EU has just voted to add the whole of ‘crypto’, including PoW, to the EU taxonomy for sustainable activities. This EU-wide classification system provides investors with guidance as to the sustainability of a given technology and can have a meaningful impact on the flows of investment. With that said the report and addition of PoW is not slated until 2025, and it is by no means clear what the analysis will be by that point. Meanwhile they’re tightening controls of transactions, on which there will be more detail later. For its part, the European Central Bank has come out [in favor of strong constraints](https://www.ecb.europa.eu/pub/financial-stability/macroprudential-bulletin/html/ecb.mpbu202207_3~d9614ea8e6.en.html) on crypto mining, and [call out](https://papers.ssrn.com/sol3/papers.cfm?abstract_id=4985877) Bitcoin as a threat to society.
		- https://x.com/TuurDemeester/status/1847512241173582058
		- {{twitter https://twitter.com/TuurDemeester/status/1847512241173582058}}
	- They use the [widely discredited](https://medium.com/crescofin/the-reports-of-bitcoin-environmental-damage-are-garbage-5a93d32c2d7) “digiconimist” estimates to assert that mining operations are [disproportionately damaging to the environment](https://www.ecb.europa.eu/pub/financial-stability/macroprudential-bulletin/html/ecb.mpbu202207_3~d9614ea8e6.en.html).
	- We have seen that China has cracked down hard on the technology, banning mining and pressuring holders of the assets. They have unwound this somewhat, and based on past experience it seems that they will continue to nuance their position as they seek adoption of their own digital currency. As much as 20% of all mining activity is now suspected to take place within China.
	- Russia is moving to ban the whole technology, most especially Bitcoin, in response to capital flight concerns.
		- ![GMVHsb7WMAAT3tg.jpeg](assets/GMVHsb7WMAAT3tg_1714416578876_0.jpeg){:width 400}
	- In India, there has been confusion for years as more “local” law vies with confusing central government signaling. It has variously been banned and unbanned, and is now subject to punitive tax. The central bank of India is [strongly in favor](http://164.100.24.220/loksabhaquestions/annex/179/AS10.pdf) of a complete ban. Ajay Seth, secretary of the Finance Ministry’s Department of Economic Affairs recently said it: “We have gone through a deep dive consulting with not just the domestic and institutional stakeholders but also organizations like IMF and World Bank.... Simultaneously we are also beginning our work for some sort of a global regulation (to determine) what role India can play... Whatever we do, even if we go to the extreme form, the countries that have chosen to prohibit, they can’t succeed unless there is a global consensus.”
	- It feels like a global political response is just around the corner, but reputable voices in the community suggest that it always feels this way.

- # [[Politics, Law, Privacy]]
	- Legislators globally, are [starting to codify](https://www.lopp.net/bitcoin-information/legal.html) their positions on proof of work as a technology (including Bitcoin). US States are variously [supporting](https://capitol.texas.gov/tlodocs/88R/billtext/html/HC00089I.htm) or constricting the technology, according to [state legislatures](https://www.ncsl.org/research/financial-services-and-commerce/cryptocurrency-2021-legislation.aspx). Notably New York has [banned new carbon intensive](https://www.nysenate.gov/legislation/bills/2021/A7389) mining facilities for 2 years, while rust and farm belt states with energy build-out problems are [providing incentives](https://financialpost.com/fp-finance/cryptocurrency/texas-governor-abbott-turns-to-bitcoin-miners-to-bolster-the-grid-and-his-re-election) and passing legislation to protect [mining datacenters](https://www.arkleg.state.ar.us/Bills/Detail?id=hb1799). At the federal level the white house has strongly signalled their concerns about the sector [in a report](https://www.whitehouse.gov/wp-content/uploads/2023/03/ERP-2023.pdf). Many of the points in the report are fair, and true, and reflect things said in this book (which pre-dates the report). It's worth picking out the conclusion of that section verbatim: ["Innovation in financial services brings both risks and opportunities for the broader economy. It can challenge business models and existing industries, but it cannot challenge basic economic principles, such as what makes an asset effective as money and the incentives that give rise to run risk. Although the underlying technologies are a clever solution for the problem of how to execute transactions without a trusted authority, crypto assets currently do not offer widespread economic benefits. They are largely speculative investment vehicles and are not an effective alternative to fiat currency. Also, they are too risky at present to function as payment instruments or to expand financial inclusion. Even so, it is possible that their underlying technology may still find productive uses in the future as companies and governments continue to experiment with DLT. In the meantime, some crypto assets appear to be here to stay, and they continue to cause risks for financial markets, investors, and consumers. Much of the activity in the crypto asset space is covered by existing regulations and regulators are expanding their capabilities to bring a large number of new entities under compliance (SEC 2022). Other parts of the crypto asset space require coordination by various agencies and deliberations about how to address the risks they pose (U.S. Department of the Treasury 2022a). Certain innovations, such as FedNow and a potential U.S. CBDC, could help bring the U.S. financial infrastructure into the digital era in a clear and simple way, without the risks or irrational exuberance brought by crypto assets. Hence, continued investments in the Nation’s financial infrastructure have the potential to offer significant benefits to consumers and businesses, but regulators must apply the lessons that civilization has learned, and thus rely on economic principles, in regulating crypto assets.”]
	- Reading between the lines suggest that strong regulation is coming. Indeed the [SEC is now suing](https://www.sec.gov/Archives/edgar/data/1679788/000167978823000051/coin-20230322.htm) the major tech company in the space, Coinbase, while closing a bank servicing the sector, and signalling that stable coins may be unregistered securities in law. The report itself has no 'teeth' but is likely a sign of things to come. There is purportedly \$2.4B [entering the regulation ecosystems](https://docs.house.gov/meetings/AP/AP23/20230329/115576/HHRG-118-AP23-TTF-GenslerG-20230329.pdf) to enhance regulatory oversight. In actual fact, because of the nature of the federation of states it is likely that a variety of different approaches in law will be taken across the geography and the sector seems to have responded with a shrug. As an aside the report contains an excellent taxonomy of digital assets from Hoffman.
	- ![Figure 3.22: Taxonomy of digital assets Hoffman 2022](assets/PresidentTaxonomy.jpg)
	- Conversely the recent "[Climate and energy implications](https://www.whitehouse.gov/ostp/news-updates/2022/09/08/fact-sheet-climate-and-energy-implications-of-crypto-assets-in-the-united-states/)" report is parts positive and parts negative about proof of work, and leaves the door open to a legislative clampdown. This is most notable in a [White House proposal](https://www.whitehouse.gov/cea/written-materials/2023/05/02/cost-of-cryptomining-dame-tax/) to tax Bitcoin mining at 30%, a plan which will destroy much of the US based mining industry over the coming years. Carter provides a [detailed response](https://medium.com/@nic__carter/comments-on-the-white-house-report-on-the-climate-implications-of-crypto-mining-8d65d30ec942) to the tardy scientific analysis in the report. Perhaps most interestingly it notes the potential of methane mitigation as mentioned earlier. It is conceivable that methane mitigation alone could provide a route forward for the technology. The report says: ["The crypto-asset industry can potentially use stranded methane gas, which is the principal component of natural gas, to generate electricity for mining. Methane gas is produced during natural gas drilling and transmission, and by oil wells, landfills, sewage treatment, and agricultural processes. Methane is a potent GHG that can result in 27 to 30 times the global warming potential of CO2 over a 100-year time frame, and is about 80 times as powerful as CO2 over a 20-year timeframe. Reducing methane emissions can slow near-term climate warming, which is why the Biden-Harris Administration released the U.S. methane emissions reduction action plan in 2021. Venting and flaring methane at oil and natural gas wells wastes 4% of global methane production. In 2021, venting and flaring methane emitted the equivalent of 400 million metric tons of CO2, representing about 0.7% of global GHG emissions. This methane is vented or flared, because of the high cost of constructing permanent pipelines or other infrastructure to bring it to market."]
	- The EU has just voted to add the whole of 'crypto', including PoW, to the EU taxonomy for sustainable activities. This EU wide classification system provides investors with guidance as to the sustainability of a given technology, and can have a meaningful impact on the flows of investment. With that said the report and addition of PoW is not slated until 2025, and it is by no means clear what the analysis will be by that point. Meanwhile they're tightening controls of transactions, on which there will be more detail later. For it's part the European Central Bank has come out in favour of strong constraints on crypto mining. They use the [widely discredited](https://medium.com/crescofin/the-reports-of-bitcoin-environmental-damage-are-garbage-5a93d32c2d7) "digiconimist" estimates to assert that mining operations are [disproportionately damaging to the environment](https://www.ecb.europa.eu/pub/financial-stability/macroprudential-bulletin/html/ecb.mpbu202207_3~d9614ea8e6.en.html).
	- We have seen that China has cracked down hard on the technology, banning mining and pressuring holders of the assets. They have unwound this somewhat, and based on past experience it seems that they will continue to nuance their position as they seek adoption of their own digital currency. As much as 20% of all mining activity is now suspected to take place within China.
	- In India there has been confusion for years as more "local" law vies with confusing central government signalling. It has variously been banned and unbanned, and is now subject to punitive tax. The central bank of India is [strongly in favour](http.bp//164.100.24.220/loksabhaquestions/annex/179/AS10.pdf) of a complete ban. Ajay Seth, secretary of the Finance Ministry's Department of Economic Affairs recently said ["We have gone through a deep dive consulting with not just the domestic and institutional stakeholders but also organizations like IMF and World Bank.... Simultaneously we are also beginning our work for some sort of a global regulation (to determine) what role India can play... Whatever we do, even if we go to the extreme form, the countries that have chosen to prohibit, they can't succeed unless there is a global consensus"]
	- It feels like a global political response is just around the corner, but reputable voices in the community suggest that it always feels this way.

- # Mining and energy
	- [Bitcoin uses more energy than sweden](https://www.reddit.com/r/CryptoCurrency/comments/12xu714/bitcoin_has_just_surpassed_sweden_for_overall/)
	- [THE 'RIGHT TO MINE' #BITCOIN📷 IS NOW LAW IN THE STATE OF ARKANSAS!](https://twitter.com/satoshiactfund/status/1648445448833875969)
	- [Bitcoin is a more sustainable energy than EVs, and significantly less fossil fuel.](https://www.linkedin.com/posts/danielsbatten_like-evs-bitcoin-is-a-fully-electrified-activity-7049321186605858816-t4MB?utm_source=share&utm_medium=member_android)
	- [Batton's energy tracker](http://batcoinz.com/BEEST/)
	- [sazmining hosted hydro](https://www.sazmining.com/)

- # Other interesting links
	- [How Value-for-Value Fixes the Monetization of Information | dergigi.com,Thoughts about Bitcoin and other things.](https://dergigi.com/2021/12/30/the-freedom-of-value/)
	- [bitcoin secure multisig setup (bsms)](http://bitcoin-secure-multisig-setup.com/)
	- [Crypto Wave Gaining Momentum In Germany: Network Of 1,200 Banks To Offer Bitcoin](https://www.msn.com/en-us/money/news/crypto-wave-gaining-momentum-in-germany-network-of-1-200-banks-to-offer-bitcoin/ar-AA198Lxc)
	- [Hal Finney's theory of bitcoin backed banks](https://www.cointime.com/news/hal-finneys-theory-of-bitcoin-backed-banks-74474)
	- [bitcoin-mining-analogy-beginners-guide](https://braiins.com/blog/bitcoin-mining-analogy-beginners-guide)
	- [Introducing Floresta, a Utreexo-powered Electrum Server implementation](https://medium.com/vinteum-org/introducing-floresta-an-utreexo-powered-electrum-server-implementation-60feba8e179d)
	- [Fedimint Hackathon Winners Announced](https://www.nobsbitcoin.com/fedimint-hackathon-winners-announced/)
	- [A light introduction to ZeroSync](https://geometry.xyz/notebook/A-light-introduction-to-ZeroSync)
	- [Deception, exploited workers, and cash handouts: How Worldcoin recruited its first half a million test users](https://www.technologyreview.com/2022/04/06/1048981/worldcoin-cryptocurrency-biometrics-web3/)
	- [Cashu rust implementation](https://github.com/ngutech21/cashu-rs)
	- [Quantum miners](https://arxiv.org/pdf/2306.03321.pdf)
	- [address_index](https://github.com/bitcoin/bips/blob/master/bip-0044.mediawiki) and deterministic paths (BIP44)


		- ##### National security / actual warfare
			- There’s some national security implications for Bitcoin which are discussed both in the [fringes](https://twitter.com/JasonPLowery/status/1512775981693648897?) and the [sectormedia](https://www.coindesk.com/layer2/2022/04/04/why-bitcoin-mining-is-a-matter-of-national-security/). Essentially, the industrial mining complexes which are more commonplace now, are easily identifiable targets, and provide nations with both some leverage over the global network, and a considerable source of income. The IMF correctly identifies these facilities as a way for nation states to [monetise their energyreserves](https://www.imf.org/en/Publications/GFSR/Issues/2022/04/19/global-financial-stability-report-april-2022) without the need for foreign markets, opening the door to sanction avoidance. In the case of smaller and developing nation states who are perhaps subject to financial penalties on the global stage for whatever reason, these facilities start to look like legitimate targets for cyber and conventional warfare. Lowry explain the potential strategic importance of Bitcoin in Softwar, [[Lowery2023]] though to be clear his motives are unclear and his thesis is neither peer reviewed nor publicly accessible. This ‘weaponisation’ of a neutral technology is already manifest in:

	- #### Spacechains
		- It feels like spacechains are almost ready, so this is worth keeping aneye on. It’s the ‘cleanest’ way to issue assets using Bitcoin becausethere’s no additional speculative chain. As briefly explained in theearlier section Bitcoin is destroyed to create a new chain which theninherits the security of Bitcoin through onward mining. This new assetor chain is able to accrue value and trade independently based purely onit’s value to the buyer, not as a function of a wider speculative bubbleattached to a token with multiple use cases.

- # Bitcoin and AI data centres
	- ![Bitcoin electricity consumption](https://upload.wikimedia.org/wikipedia/commons/thumb/7/73/Bitcoin_electricity_consumption.svg/1920px-Bitcoin_electricity_consumption.svg.png)
	-
	- Bitcoin miners like Iris Energy are uniquely positioned with access to large amounts of power and data center capacity. This is becoming increasingly scarce and valuable as demand for AI computing grows exponentially.
	- The Bitcoin mining data centers can be repurposed to provide AI cloud services by swapping out Bitcoin mining ASICs for Nvidia GPUs. This allows miners to monetize their power and infrastructure for both crypto mining and AI.
	- There are parallels between the Bitcoin ASIC and AI GPU markets - both have a dominant player (Bitmain for ASICs, Nvidia for GPUs) and prices are set based on what the market is willing to pay vs cost of production.
	- The growth in AI seems to be shifting the narrative and reducing criticism around Bitcoin mining's energy use. As people realize AI's value, they accept that the energy use is justified, similar to Bitcoin.
	- Major banks like Morgan Stanley are now writing serious research reports on how Bitcoin miners are positioned to support AI's growth by providing much-needed power capacity. This validates the industry's maturity.
	- Time to accessing power is becoming the key constraint and source of value as demand for AI computing capacity far outstrips supply. Bitcoin miners with existing power access have a major advantage.
	- By locating in areas with excess renewable energy that can't be fully exported, Bitcoin miners are actually helping make these renewable installations more economically viable and efficient.
	- [Mike Alfred on X: "Morgan Stanley out with new research suggesting that BTC miners are the fastest path to put new data centers online because they already have access to huge amounts of power. Their models show BTC miners trade at a large discount to the intrinsic value of their secured power. https://t.co/rwJJLBPdYN" / X (twitter.com)](https://twitter.com/mikealfred/status/1781333730071896152)
	- {{twitter https://twitter.com/mikealfred/status/1781333730071896152}}
	-

	- ### Environmental Devastation
		- **Habitat Destruction:** Large-scale deforestation and habitat loss are common in gold mining, drastically altering ecosystems and leading to loss of biodiversity.
		- **Water Pollution:** Gold mining introduces hazardous chemicals like cyanide and mercury into water systems, poisoning aquatic life and contaminating water sources for human consumption.
		- **Soil Contamination:** The use of heavy machinery and toxic chemicals in mining operations severely degrades soil quality, affecting land use for agriculture and leading to long-term ecological damage.

	- ### Economic Inequities
		- **Wealth Concentration:** The profits from gold mining are often concentrated in the hands of a few, typically large foreign corporations and investors, rather than benefiting the local communities where mining takes place.
		- **Market Manipulation:** Gold markets are subject to manipulation by large financial institutions, which can lead to speculative bubbles and sudden economic downturns affecting smaller investors disproportionately.

	- ### Perceived Value vs. Real Costs
		- **Myth of Stability vs. Reality of Exploitation:** While gold is promoted as a stable and safe investment, the real costs include environmental degradation, community displacement, and perpetuation of conflict and inequality.
		- **Cultural Significance vs. Socio-Economic Damage:** Gold’s role as a symbol of wealth and purity starkly contrasts with the corruption, greed, and exploitation prevalent in its mining and trade.
		- **Corporate Greenwashing:** Entities like the World Gold Council engage in aggressive marketing campaigns to portray gold mining as sustainable or beneficial to local economies, which is often a stark contrast to the on-ground realities of ecological and social turmoil.
		- **Resource Depletion:** High-quality gold deposits are becoming scarce, leading to more invasive extraction techniques which are economically and environmentally costly.
		- **Competition from Alternatives:** Emerging financial technologies and assets, like cryptocurrencies, pose a competitive threat to gold's status as a secure investment.
		- **Long-term Value vs. Immediate Environmental Cost:** Gold is marketed as a "gift of remaining value" due to its enduring nature, yet the immediate environmental costs of extracting gold are severe and often irreversible.
		- **Recycling vs. Continued Mining:** Despite gold’s recyclability, new mining continues at an aggressive pace, driven by ongoing demand and economic interests, rather than focusing on recycling existing gold supplies.
		- **Propaganda by Mining Companies:** Corporations and entities like the World Gold Council promote gold as a vital economic commodity through various forms of media and celebrity endorsements, despite the significant environmental and social issues associated with its production.

	- ### Demand Paradox
		- Despite the common perception of energy scarcity, the energy sector often grapples with a shortage of demand rather than supply. This stems from the design of electrical grids, which are built to accommodate peak usage periods, leading to significant underutilisation during off-peak hours. This inefficiency results in suboptimal returns on infrastructure investments and economic losses.
		- Bitcoin mining emerges as a unique solution to this demand paradox. Due to its inherent flexibility, mining operations can dynamically adjust their energy consumption based on realtime grid conditions and market prices. This adaptability stems from the interruptible nature of the mining process, allowing miners to seamlessly pause and resume operations without incurring substantial losses. Consequently, miners can function as a responsive load, absorbing excess energy during periods of low demand and curtailing consumption during peak demand, thereby optimising grid utilisation.

	- ### Fostering Renewable Energy Integration
		- Bitcoin mining also plays a pivotal role in accelerating the integration of renewable energy sources like wind and solar power. The location-agnostic nature of mining operations allows them to be established in close proximity to renewable energy generation sites, even in remote locations with limited grid connectivity. This provides a consistent and reliable demand source for the often intermittent output of renewable energy, enhancing project viability and incentivising further investment in sustainable energy solutions. For instance, in the Panhandle region of Texas, where transmission infrastructure constraints limit the evacuation of generated renewable energy, Bitcoin miners are absorbing surplus power and contributing to the economic sustainability of renewable energy projects.

	- ### Facilitating Environmental Remediation
		- Furthermore, Bitcoin mining offers potential solutions for environmental challenges. A notable example is the utilisation of mining operations to power specialised plants designed to consume waste coal, a significant environmental hazard. By providing a stable and predictable demand for electricity, Bitcoin mining operations enable the economic viability of these plants, facilitating the remediation of polluted land and water tables. Stronghold Digital Mining, for instance, operates in Pennsylvania, where they utilise waste coal to generate electricity for Bitcoin mining while simultaneously contributing to environmental cleanup efforts. This is heavily contested.

	- ### Empowering Off-Grid Communities
		- In regions with limited or no access to the traditional electrical grid, Bitcoin mining can serve as a catalyst for electrification and development. By increasing the base load demand on minigrids, which often struggle with low utilisation and financial unsustainability, mining operations improve their economic viability. This enables minigrid operators to reduce energy costs for local communities and expand access to electricity, fostering positive social and economic outcomes. Gridless, a company operating in Africa, exemplifies this approach by deploying Bitcoin mining operations to enhance the financial sustainability of mini-grids and empower rural communities.

	- ### A Converging Future
		- The trajectory of Bitcoin mining and the energy sector suggests a future of increased collaboration and integration. Vertical integration, wherein miners become energy producers or energy companies engage in mining, holds significant potential for both sectors. This convergence would optimise energy utilisation, enhance grid stability, and drive innovation in both industries. As Bitcoin mining continues to evolve, its role in shaping a sustainable and efficient energy landscape will become increasingly prominent.

	- ### Introduction
	- This article presents an analysis by Hass McCook comparing the environmental impacts of Bitcoin, gold mining, and the banking industry.
	- The comparison aims to provide a more nuanced understanding of Bitcoin's environmental impact relative to other industries.

	- ### Bitcoin's Environmental Impact
	- **Energy Consumption**: Bitcoin consumes about 120 TWh annually, which is 0.25% of the energy wasted globally each year or 0.5% of the world's grid electricity.
	- **Carbon Emissions**: Using the global average grid figure of 0.6 tons of CO2 per kWh, Bitcoin mining emits approximately 70 Mt of CO2 annually.
	- **Renewable Energy Trends**: There is a trend towards Bitcoin mining using a combination of stranded, waste, and renewable energy sources.

	- ### Gold Mining's Environmental Impact
		- **Production**: In 2020, around 3500 tons of gold were mined and 1300 tons were recycled.
		- **Energy Use and CO2 Emissions**: Mining and refining each kilogram of gold for jewelry uses about 79.9 MWh and produces up to 35 tons of CO2.
		- **Total Impact (2020)**: Gold mining industry used 265 TWh of energy and produced 145 Mt of CO2.
		- {{video https://www.youtube.com/watch?v=ihvG3RgbYzE}}
		-

	- ### Conclusion
	- The article argues for a nuanced understanding of Bitcoin's environmental impact, especially when compared to other significant industries like gold mining and banking.
	- It suggests that the framing of environmental impacts should consider both energy consumption and pollution.
	- [Link to the article](https://www.nasdaq.com/articles/a-comparison-of-bitcoins-environmental-impact-with-that-of-gold-and-banking-2021-05-04)
	- https://news.cornell.edu/stories/2023/11/bitcoin-could-support-renewable-energy-development

	- ### Key Findings
	- **Profitability in Texas**: Texas, with 32 planned renewable projects, could see combined profits of $47 million from Bitcoin mining.
		- The Aktina Solar and Roseland Solar Projects, each with 250 MW capacities, could gain a maximum profit of $3.23 million.
		- The Western Trail Wind project, with 367 MW, showed potential profitability of $2.65 million.
	- **Performance in Other States**: California ranked second in profitability. Colorado, Illinois, Iowa, Nevada, and Virginia also showed potential despite fewer installations.
	- **Energy Availability and Location**: The study emphasizes the importance of steady energy availability and strategic location of mining farms to maximize productivity.

	- ## Title: Bitcoin Mining's Increased Renewable Energy Usage

	- ### Introduction
	- A report released on January 18, 2024, by ESG analyst Daniel Batten highlights a significant surge in sustainable energy use in Bitcoin mining.
	- The report is based on data from the BEEST model and analyzes publicly available information.

	- ### Key Findings
	- **Renewable Energy Usage**: The sustainable energy usage in Bitcoin mining has reached 54.5%, a 3.6% increase over 2023.
	- **Methane Mitigation**: Off-grid Bitcoin miners are using methane emissions for electricity generation, reducing environmental harm.
	- **Emission Mitigation**: The Bitcoin network mitigated 7.3% of its emissions without relying on offsets, a notable achievement across industries.
	- **Expansion of Renewable Mining**: The expansion includes Tether’s hydro mining in Latin America and more methane-mitigating mining sites.

	- ### Geographic and Industry Trends
	- **Geographical Shift**: Following mining bans in China and strict regulations in Kazakhstan, miners moved to regions with greener grids in North America or sustainable off-grid locations.
	- **Improvement in Emission Intensity**: On-grid Bitcoin miners have seen a 29% improvement in emission intensity compared to 2021.

		- ### Conclusion
		- The Treasury's report provides a nuanced view of criminal activities in the crypto space, emphasizing the predominant use of fiat currencies while recognizing the challenges and potential risks associated with DeFi.
	- [Link to the article](https://decrypt.co/125623/crooks-defi-crypto-fiat-treasury)https://www.cnbc.com/2023/03/26/bitcoin-is-poised-to-blow-up-africas-86-billion-banking-system.htmlhttps://impact.economist.com/projects/banking-the-underbanked/
	  https://unherd.com/2024/01/the-african-village-mining-bitcoin/
	  https://www.wired.co.uk/article/ukraine-crypto-refugee-aid
	  https://www.technologyreview.com/2023/01/13/1066820/cryptocurrency-bitcoin-mining-congo-virunga-national-park/

	- ### The Bitcoin Mining Initiative
	- **Initiation**: The park started Bitcoin mining in September 2020, primarily due to the loss of tourism revenue caused by various crises, including kidnappings, Ebola, and the COVID-19 pandemic.
	- **Operation**: The mining operation is powered by a hydroelectric power station on the mountain, using shipping containers filled with powerful computers.
	- **Profit and Use**: The proceeds from Bitcoin mining are used to pay park salaries and support infrastructure projects like roads and water pumping stations.

	- ### The Role of Emmanuel de Merode
	- **Background**: Emmanuel de Merode, the director of Virunga National Park, played a pivotal role in initiating the Bitcoin mining project.
	- **His Approach**: He focuses on building a sustainable economy tied to the park’s resources, aiming to turn the park into a positive asset for the community.

	- ### Conclusion
	- Virunga National Park's Bitcoin mining initiative represents an innovative approach to conservation funding, leveraging renewable energy to create a sustainable revenue stream. However, the project faces considerable challenges and risks due to the unstable regional context.
	- [Link to the article](https://www.technologyreview.com/2023/01/13/1066820/cryptocurrency-bitcoin-mining-congo-virunga-national-park/)
	  https://bitcoinmagazine.com/culture/bitcoin-financial-freedom-in-afghanistan
	  
	  https://foreignpolicy.com/2021/08/03/macron-france-cfa-franc-eco-west-central-africa-colonialism-monetary-policy-bitcoin/
		- https://files.oaiusercontent.com/file-s6V8kgf4OBmBsV4OWVfkrGTK?se=2123-12-25T11%3A08%3A40Z&sp=r&sv=2021-08-06&sr=b&rscc=max-age%3D1209600%2C%20immutable&rscd=attachment%3B%20filename%3D232f17ad-c93e-49a8-b5cd-7e8a56e8ec2e.png&sig=Dgi%2BamJkgTg7UzVzWUhCZy%2BGwXwijx7x63FCd3HhnNc%3D

	- ## Value Proposition
	- {{embed ((661d5f6a-ce5e-479e-8722-2128890607bd))}}
	- <span class="image">Goldman suggests growth opportunity and potential demonetization of gold?</span>
	- ![GlbXFa4WoAAMtvl.jpg](assets/GlbXFa4WoAAMtvl_1741339946467_0.jpg)
	-
	- Legislators globally are [starting to codify](https://www.lopp.net/bitcoin-information/legal.html) their positions on proof of work as a technology (including Bitcoin). US States are variously [supporting](https://capitol.texas.gov/tlodocs/88R/billtext/html/HC00089I.htm) or constricting the technology, according to [state legislatures](https://www.ncsl.org/research/financial-services-and-commerce/cryptocurrency-2021-legislation.aspx). Notably, New York has [banned new carbon-intensive](https://www.nysenate.gov/legislation/bills/2021/A7389) mining facilities for 2 years, while rust and farm belt states with energy build-out problems are [providing incentives](https://financialpost.com/fp-finance/cryptocurrency/texas-governor-abbott-turns-to-bitcoin-miners-to-bolster-the-grid-and-his-re-election) and passing legislation to protect [mining data centers](https://www.arkleg.state.ar.us/Bills/Detail?id=hb1799). At the federal level, the White House has strongly signaled their concerns about the sector [in a report](https://www.whitehouse.gov/wp-content/uploads/2023/03/ERP-2023.pdf). Many of the points in the report are fair and true, and reflect things said in this knowledge base (which pre-dates the report). It’s worth picking out the conclusion of that section verbatim:
		- “Innovation in financial services brings both risks and opportunities for the broader economy. It can challenge business models and existing industries, but it cannot challenge basic economic principles, such as what makes an asset effective as money and the incentives that give rise to run risk. Although the underlying technologies are a clever solution for the problem of how to execute transactions without a trusted authority, crypto assets currently do not offer widespread economic benefits. They are largely speculative investment vehicles and are not an effective alternative to fiat currency. Also, they are too risky at present to function as payment instruments or to expand financial inclusion. Even so, it is possible that their underlying technology may still find productive uses in the future as companies and governments continue to experiment with DLT. In the meantime, some crypto assets appear to be here to stay, and they continue to cause risks for financial markets, investors, and consumers. Much of the activity in the crypto asset space is covered by existing regulations and regulators are expanding their capabilities to bring a large number of new entities under compliance (SEC 2022). Other parts of the crypto asset space require coordination by various agencies and deliberations about how to address the risks they pose (U.S. Department of the Treasury 2022a). Certain innovations, such as FedNow and a potential U.S. CBDC, could help bring the U.S. financial infrastructure into the digital era in a clear and simple way, without the risks or irrational exuberance brought by crypto assets. Hence, continued investments in the Nation’s financial infrastructure have the potential to offer significant benefits to consumers and businesses, but regulators must apply the lessons that civilization has learned, and thus rely on economic principles, in regulating crypto assets.”
	- Reading between the lines suggests that strong regulation is coming. Indeed, the [SEC is now suing](https://www.sec.gov/Archives/edgar/data/1679788/000167978823000051/coin-20230322.htm) the major tech company in the space, Coinbase, while closing a bank servicing the sector, and signaling that stable coins may be unregistered securities in law. The report itself has no ‘teeth’ but is likely a sign of things to come. There is purportedly $2.4B [entering the regulation ecosystems](https://docs.house.gov/meetings/AP/AP23/20230329/115576/HHRG-118-AP23-TTF-GenslerG-20230329.pdf) to enhance regulatory oversight. In actual fact, because of the nature of the federation of states, it is likely that a variety of different approaches in law will be taken across the geography and the sector seems to have responded with a shrug. As an aside, the report contains an excellent taxonomy of digital assets from Hoffman.
	- ![PresidentTaxonomy.jpg](assets/PresidentTaxonomy_1726575052124_0.jpg)
	-
	- Conversely, the recent “[Climate and energy implications](https://www.whitehouse.gov/ostp/news-updates/2022/09/08/fact-sheet-climate-and-energy-implications-of-crypto-assets-in-the-united-states/)” report is parts positive and parts negative about proof of work, and leaves the door open to a legislative clampdown. This is most notable in a [White House proposal](https://www.whitehouse.gov/cea/written-materials/2023/05/02/cost-of-cryptomining-dame-tax/) to tax Bitcoin mining at 30%, a plan which will destroy much of the US-based mining industry over the coming years. Carter provides a [detailed response](https://medium.com/@nic__carter/comments-on-the-white-house-report-on-the-climate-implications-of-crypto-mining-8d65d30ec942) to the tardy scientific analysis in the report. Perhaps most interestingly it notes the potential of methane mitigation as mentioned earlier. It is conceivable that methane mitigation alone could provide a route forward for the technology. The report says: “The crypto-asset industry can potentially use stranded methane gas, which is the principal component of natural gas, to generate electricity for mining. Methane gas is produced during natural gas drilling and transmission, and by oil wells, landfills, sewage treatment, and agricultural processes. Methane is a potent GHG that can result in 27 to 30 times the global warming potential of CO2 over a 100-year time frame, and is about 80 times as powerful as CO2 over a 20-year time frame. Reducing methane emissions can slow near-term climate warming, which is why the Biden-Harris Administration released the U.S. methane emissions reduction action plan in 2021. Venting and flaring methane at oil and natural gas wells wastes 4% of global methane production. In 2021, venting and flaring methane emitted the equivalent of 400 million metric tons of CO2, representing about 0.7% of global GHG emissions. This methane is vented or flared because of the high cost of constructing permanent pipelines or other infrastructure to bring it to market.”
	- The EU has just voted to add the whole of ‘crypto’, including PoW, to the EU taxonomy for sustainable activities. This EU-wide classification system provides investors with guidance as to the sustainability of a given technology and can have a meaningful impact on the flows of investment. With that said the report and addition of PoW is not slated until 2025, and it is by no means clear what the analysis will be by that point. Meanwhile they’re tightening controls of transactions, on which there will be more detail later. For its part, the European Central Bank has come out [in favor of strong constraints](https://www.ecb.europa.eu/pub/financial-stability/macroprudential-bulletin/html/ecb.mpbu202207_3~d9614ea8e6.en.html) on crypto mining, and [call out](https://papers.ssrn.com/sol3/papers.cfm?abstract_id=4985877) Bitcoin as a threat to society.
		- https://x.com/TuurDemeester/status/1847512241173582058
		- {{twitter https://twitter.com/TuurDemeester/status/1847512241173582058}}
	- They use the [widely discredited](https://medium.com/crescofin/the-reports-of-bitcoin-environmental-damage-are-garbage-5a93d32c2d7) “digiconimist” estimates to assert that mining operations are [disproportionately damaging to the environment](https://www.ecb.europa.eu/pub/financial-stability/macroprudential-bulletin/html/ecb.mpbu202207_3~d9614ea8e6.en.html).
	- We have seen that China has cracked down hard on the technology, banning mining and pressuring holders of the assets. They have unwound this somewhat, and based on past experience it seems that they will continue to nuance their position as they seek adoption of their own digital currency. As much as 20% of all mining activity is now suspected to take place within China.
	- Russia is moving to ban the whole technology, most especially Bitcoin, in response to capital flight concerns.
		- ![GMVHsb7WMAAT3tg.jpeg](assets/GMVHsb7WMAAT3tg_1714416578876_0.jpeg){:width 400}
	- In India, there has been confusion for years as more “local” law vies with confusing central government signaling. It has variously been banned and unbanned, and is now subject to punitive tax. The central bank of India is [strongly in favor](http://164.100.24.220/loksabhaquestions/annex/179/AS10.pdf) of a complete ban. Ajay Seth, secretary of the Finance Ministry’s Department of Economic Affairs recently said it: “We have gone through a deep dive consulting with not just the domestic and institutional stakeholders but also organizations like IMF and World Bank.... Simultaneously we are also beginning our work for some sort of a global regulation (to determine) what role India can play... Whatever we do, even if we go to the extreme form, the countries that have chosen to prohibit, they can’t succeed unless there is a global consensus.”
	- It feels like a global political response is just around the corner, but reputable voices in the community suggest that it always feels this way.

- # [[Politics, Law, Privacy]]
	- Legislators globally, are [starting to codify](https://www.lopp.net/bitcoin-information/legal.html) their positions on proof of work as a technology (including Bitcoin). US States are variously [supporting](https://capitol.texas.gov/tlodocs/88R/billtext/html/HC00089I.htm) or constricting the technology, according to [state legislatures](https://www.ncsl.org/research/financial-services-and-commerce/cryptocurrency-2021-legislation.aspx). Notably New York has [banned new carbon intensive](https://www.nysenate.gov/legislation/bills/2021/A7389) mining facilities for 2 years, while rust and farm belt states with energy build-out problems are [providing incentives](https://financialpost.com/fp-finance/cryptocurrency/texas-governor-abbott-turns-to-bitcoin-miners-to-bolster-the-grid-and-his-re-election) and passing legislation to protect [mining datacenters](https://www.arkleg.state.ar.us/Bills/Detail?id=hb1799). At the federal level the white house has strongly signalled their concerns about the sector [in a report](https://www.whitehouse.gov/wp-content/uploads/2023/03/ERP-2023.pdf). Many of the points in the report are fair, and true, and reflect things said in this book (which pre-dates the report). It's worth picking out the conclusion of that section verbatim: ["Innovation in financial services brings both risks and opportunities for the broader economy. It can challenge business models and existing industries, but it cannot challenge basic economic principles, such as what makes an asset effective as money and the incentives that give rise to run risk. Although the underlying technologies are a clever solution for the problem of how to execute transactions without a trusted authority, crypto assets currently do not offer widespread economic benefits. They are largely speculative investment vehicles and are not an effective alternative to fiat currency. Also, they are too risky at present to function as payment instruments or to expand financial inclusion. Even so, it is possible that their underlying technology may still find productive uses in the future as companies and governments continue to experiment with DLT. In the meantime, some crypto assets appear to be here to stay, and they continue to cause risks for financial markets, investors, and consumers. Much of the activity in the crypto asset space is covered by existing regulations and regulators are expanding their capabilities to bring a large number of new entities under compliance (SEC 2022). Other parts of the crypto asset space require coordination by various agencies and deliberations about how to address the risks they pose (U.S. Department of the Treasury 2022a). Certain innovations, such as FedNow and a potential U.S. CBDC, could help bring the U.S. financial infrastructure into the digital era in a clear and simple way, without the risks or irrational exuberance brought by crypto assets. Hence, continued investments in the Nation’s financial infrastructure have the potential to offer significant benefits to consumers and businesses, but regulators must apply the lessons that civilization has learned, and thus rely on economic principles, in regulating crypto assets.”]
	- Reading between the lines suggest that strong regulation is coming. Indeed the [SEC is now suing](https://www.sec.gov/Archives/edgar/data/1679788/000167978823000051/coin-20230322.htm) the major tech company in the space, Coinbase, while closing a bank servicing the sector, and signalling that stable coins may be unregistered securities in law. The report itself has no 'teeth' but is likely a sign of things to come. There is purportedly \$2.4B [entering the regulation ecosystems](https://docs.house.gov/meetings/AP/AP23/20230329/115576/HHRG-118-AP23-TTF-GenslerG-20230329.pdf) to enhance regulatory oversight. In actual fact, because of the nature of the federation of states it is likely that a variety of different approaches in law will be taken across the geography and the sector seems to have responded with a shrug. As an aside the report contains an excellent taxonomy of digital assets from Hoffman.
	- ![Figure 3.22: Taxonomy of digital assets Hoffman 2022](assets/PresidentTaxonomy.jpg)
	- Conversely the recent "[Climate and energy implications](https://www.whitehouse.gov/ostp/news-updates/2022/09/08/fact-sheet-climate-and-energy-implications-of-crypto-assets-in-the-united-states/)" report is parts positive and parts negative about proof of work, and leaves the door open to a legislative clampdown. This is most notable in a [White House proposal](https://www.whitehouse.gov/cea/written-materials/2023/05/02/cost-of-cryptomining-dame-tax/) to tax Bitcoin mining at 30%, a plan which will destroy much of the US based mining industry over the coming years. Carter provides a [detailed response](https://medium.com/@nic__carter/comments-on-the-white-house-report-on-the-climate-implications-of-crypto-mining-8d65d30ec942) to the tardy scientific analysis in the report. Perhaps most interestingly it notes the potential of methane mitigation as mentioned earlier. It is conceivable that methane mitigation alone could provide a route forward for the technology. The report says: ["The crypto-asset industry can potentially use stranded methane gas, which is the principal component of natural gas, to generate electricity for mining. Methane gas is produced during natural gas drilling and transmission, and by oil wells, landfills, sewage treatment, and agricultural processes. Methane is a potent GHG that can result in 27 to 30 times the global warming potential of CO2 over a 100-year time frame, and is about 80 times as powerful as CO2 over a 20-year timeframe. Reducing methane emissions can slow near-term climate warming, which is why the Biden-Harris Administration released the U.S. methane emissions reduction action plan in 2021. Venting and flaring methane at oil and natural gas wells wastes 4% of global methane production. In 2021, venting and flaring methane emitted the equivalent of 400 million metric tons of CO2, representing about 0.7% of global GHG emissions. This methane is vented or flared, because of the high cost of constructing permanent pipelines or other infrastructure to bring it to market."]
	- The EU has just voted to add the whole of 'crypto', including PoW, to the EU taxonomy for sustainable activities. This EU wide classification system provides investors with guidance as to the sustainability of a given technology, and can have a meaningful impact on the flows of investment. With that said the report and addition of PoW is not slated until 2025, and it is by no means clear what the analysis will be by that point. Meanwhile they're tightening controls of transactions, on which there will be more detail later. For it's part the European Central Bank has come out in favour of strong constraints on crypto mining. They use the [widely discredited](https://medium.com/crescofin/the-reports-of-bitcoin-environmental-damage-are-garbage-5a93d32c2d7) "digiconimist" estimates to assert that mining operations are [disproportionately damaging to the environment](https://www.ecb.europa.eu/pub/financial-stability/macroprudential-bulletin/html/ecb.mpbu202207_3~d9614ea8e6.en.html).
	- We have seen that China has cracked down hard on the technology, banning mining and pressuring holders of the assets. They have unwound this somewhat, and based on past experience it seems that they will continue to nuance their position as they seek adoption of their own digital currency. As much as 20% of all mining activity is now suspected to take place within China.
	- In India there has been confusion for years as more "local" law vies with confusing central government signalling. It has variously been banned and unbanned, and is now subject to punitive tax. The central bank of India is [strongly in favour](http.bp//164.100.24.220/loksabhaquestions/annex/179/AS10.pdf) of a complete ban. Ajay Seth, secretary of the Finance Ministry's Department of Economic Affairs recently said ["We have gone through a deep dive consulting with not just the domestic and institutional stakeholders but also organizations like IMF and World Bank.... Simultaneously we are also beginning our work for some sort of a global regulation (to determine) what role India can play... Whatever we do, even if we go to the extreme form, the countries that have chosen to prohibit, they can't succeed unless there is a global consensus"]
	- It feels like a global political response is just around the corner, but reputable voices in the community suggest that it always feels this way.

- # Mining and energy
	- [Bitcoin uses more energy than sweden](https://www.reddit.com/r/CryptoCurrency/comments/12xu714/bitcoin_has_just_surpassed_sweden_for_overall/)
	- [THE 'RIGHT TO MINE' #BITCOIN📷 IS NOW LAW IN THE STATE OF ARKANSAS!](https://twitter.com/satoshiactfund/status/1648445448833875969)
	- [Bitcoin is a more sustainable energy than EVs, and significantly less fossil fuel.](https://www.linkedin.com/posts/danielsbatten_like-evs-bitcoin-is-a-fully-electrified-activity-7049321186605858816-t4MB?utm_source=share&utm_medium=member_android)
	- [Batton's energy tracker](http://batcoinz.com/BEEST/)
	- [sazmining hosted hydro](https://www.sazmining.com/)

- # Other interesting links
	- [How Value-for-Value Fixes the Monetization of Information | dergigi.com,Thoughts about Bitcoin and other things.](https://dergigi.com/2021/12/30/the-freedom-of-value/)
	- [bitcoin secure multisig setup (bsms)](http://bitcoin-secure-multisig-setup.com/)
	- [Crypto Wave Gaining Momentum In Germany: Network Of 1,200 Banks To Offer Bitcoin](https://www.msn.com/en-us/money/news/crypto-wave-gaining-momentum-in-germany-network-of-1-200-banks-to-offer-bitcoin/ar-AA198Lxc)
	- [Hal Finney's theory of bitcoin backed banks](https://www.cointime.com/news/hal-finneys-theory-of-bitcoin-backed-banks-74474)
	- [bitcoin-mining-analogy-beginners-guide](https://braiins.com/blog/bitcoin-mining-analogy-beginners-guide)
	- [Introducing Floresta, a Utreexo-powered Electrum Server implementation](https://medium.com/vinteum-org/introducing-floresta-an-utreexo-powered-electrum-server-implementation-60feba8e179d)
	- [Fedimint Hackathon Winners Announced](https://www.nobsbitcoin.com/fedimint-hackathon-winners-announced/)
	- [A light introduction to ZeroSync](https://geometry.xyz/notebook/A-light-introduction-to-ZeroSync)
	- [Deception, exploited workers, and cash handouts: How Worldcoin recruited its first half a million test users](https://www.technologyreview.com/2022/04/06/1048981/worldcoin-cryptocurrency-biometrics-web3/)
	- [Cashu rust implementation](https://github.com/ngutech21/cashu-rs)
	- [Quantum miners](https://arxiv.org/pdf/2306.03321.pdf)
	- [address_index](https://github.com/bitcoin/bips/blob/master/bip-0044.mediawiki) and deterministic paths (BIP44)


		- ##### National security / actual warfare
			- There’s some national security implications for Bitcoin which are discussed both in the [fringes](https://twitter.com/JasonPLowery/status/1512775981693648897?) and the [sectormedia](https://www.coindesk.com/layer2/2022/04/04/why-bitcoin-mining-is-a-matter-of-national-security/). Essentially, the industrial mining complexes which are more commonplace now, are easily identifiable targets, and provide nations with both some leverage over the global network, and a considerable source of income. The IMF correctly identifies these facilities as a way for nation states to [monetise their energyreserves](https://www.imf.org/en/Publications/GFSR/Issues/2022/04/19/global-financial-stability-report-april-2022) without the need for foreign markets, opening the door to sanction avoidance. In the case of smaller and developing nation states who are perhaps subject to financial penalties on the global stage for whatever reason, these facilities start to look like legitimate targets for cyber and conventional warfare. Lowry explain the potential strategic importance of Bitcoin in Softwar, [[Lowery2023]] though to be clear his motives are unclear and his thesis is neither peer reviewed nor publicly accessible. This ‘weaponisation’ of a neutral technology is already manifest in:

	- #### Spacechains
		- It feels like spacechains are almost ready, so this is worth keeping aneye on. It’s the ‘cleanest’ way to issue assets using Bitcoin becausethere’s no additional speculative chain. As briefly explained in theearlier section Bitcoin is destroyed to create a new chain which theninherits the security of Bitcoin through onward mining. This new assetor chain is able to accrue value and trade independently based purely onit’s value to the buyer, not as a function of a wider speculative bubbleattached to a token with multiple use cases.

- # Bitcoin and AI data centres
	- ![Bitcoin electricity consumption](https://upload.wikimedia.org/wikipedia/commons/thumb/7/73/Bitcoin_electricity_consumption.svg/1920px-Bitcoin_electricity_consumption.svg.png)
	-
	- Bitcoin miners like Iris Energy are uniquely positioned with access to large amounts of power and data center capacity. This is becoming increasingly scarce and valuable as demand for AI computing grows exponentially.
	- The Bitcoin mining data centers can be repurposed to provide AI cloud services by swapping out Bitcoin mining ASICs for Nvidia GPUs. This allows miners to monetize their power and infrastructure for both crypto mining and AI.
	- There are parallels between the Bitcoin ASIC and AI GPU markets - both have a dominant player (Bitmain for ASICs, Nvidia for GPUs) and prices are set based on what the market is willing to pay vs cost of production.
	- The growth in AI seems to be shifting the narrative and reducing criticism around Bitcoin mining's energy use. As people realize AI's value, they accept that the energy use is justified, similar to Bitcoin.
	- Major banks like Morgan Stanley are now writing serious research reports on how Bitcoin miners are positioned to support AI's growth by providing much-needed power capacity. This validates the industry's maturity.
	- Time to accessing power is becoming the key constraint and source of value as demand for AI computing capacity far outstrips supply. Bitcoin miners with existing power access have a major advantage.
	- By locating in areas with excess renewable energy that can't be fully exported, Bitcoin miners are actually helping make these renewable installations more economically viable and efficient.
	- [Mike Alfred on X: "Morgan Stanley out with new research suggesting that BTC miners are the fastest path to put new data centers online because they already have access to huge amounts of power. Their models show BTC miners trade at a large discount to the intrinsic value of their secured power. https://t.co/rwJJLBPdYN" / X (twitter.com)](https://twitter.com/mikealfred/status/1781333730071896152)
	- {{twitter https://twitter.com/mikealfred/status/1781333730071896152}}
	-

	- ### Environmental Devastation
		- **Habitat Destruction:** Large-scale deforestation and habitat loss are common in gold mining, drastically altering ecosystems and leading to loss of biodiversity.
		- **Water Pollution:** Gold mining introduces hazardous chemicals like cyanide and mercury into water systems, poisoning aquatic life and contaminating water sources for human consumption.
		- **Soil Contamination:** The use of heavy machinery and toxic chemicals in mining operations severely degrades soil quality, affecting land use for agriculture and leading to long-term ecological damage.

	- ### Economic Inequities
		- **Wealth Concentration:** The profits from gold mining are often concentrated in the hands of a few, typically large foreign corporations and investors, rather than benefiting the local communities where mining takes place.
		- **Market Manipulation:** Gold markets are subject to manipulation by large financial institutions, which can lead to speculative bubbles and sudden economic downturns affecting smaller investors disproportionately.

	- ### Perceived Value vs. Real Costs
		- **Myth of Stability vs. Reality of Exploitation:** While gold is promoted as a stable and safe investment, the real costs include environmental degradation, community displacement, and perpetuation of conflict and inequality.
		- **Cultural Significance vs. Socio-Economic Damage:** Gold’s role as a symbol of wealth and purity starkly contrasts with the corruption, greed, and exploitation prevalent in its mining and trade.
		- **Corporate Greenwashing:** Entities like the World Gold Council engage in aggressive marketing campaigns to portray gold mining as sustainable or beneficial to local economies, which is often a stark contrast to the on-ground realities of ecological and social turmoil.
		- **Resource Depletion:** High-quality gold deposits are becoming scarce, leading to more invasive extraction techniques which are economically and environmentally costly.
		- **Competition from Alternatives:** Emerging financial technologies and assets, like cryptocurrencies, pose a competitive threat to gold's status as a secure investment.
		- **Long-term Value vs. Immediate Environmental Cost:** Gold is marketed as a "gift of remaining value" due to its enduring nature, yet the immediate environmental costs of extracting gold are severe and often irreversible.
		- **Recycling vs. Continued Mining:** Despite gold’s recyclability, new mining continues at an aggressive pace, driven by ongoing demand and economic interests, rather than focusing on recycling existing gold supplies.
		- **Propaganda by Mining Companies:** Corporations and entities like the World Gold Council promote gold as a vital economic commodity through various forms of media and celebrity endorsements, despite the significant environmental and social issues associated with its production.

	- ### Fostering Renewable Energy Integration
		- Bitcoin mining also plays a pivotal role in accelerating the integration of renewable energy sources like wind and solar power. The location-agnostic nature of mining operations allows them to be established in close proximity to renewable energy generation sites, even in remote locations with limited grid connectivity. This provides a consistent and reliable demand source for the often intermittent output of renewable energy, enhancing project viability and incentivising further investment in sustainable energy solutions. For instance, in the Panhandle region of Texas, where transmission infrastructure constraints limit the evacuation of generated renewable energy, Bitcoin miners are absorbing surplus power and contributing to the economic sustainability of renewable energy projects.

	- ### Facilitating Environmental Remediation
		- Furthermore, Bitcoin mining offers potential solutions for environmental challenges. A notable example is the utilisation of mining operations to power specialised plants designed to consume waste coal, a significant environmental hazard. By providing a stable and predictable demand for electricity, Bitcoin mining operations enable the economic viability of these plants, facilitating the remediation of polluted land and water tables. Stronghold Digital Mining, for instance, operates in Pennsylvania, where they utilise waste coal to generate electricity for Bitcoin mining while simultaneously contributing to environmental cleanup efforts. This is heavily contested.

	- ### Empowering Off-Grid Communities
		- In regions with limited or no access to the traditional electrical grid, Bitcoin mining can serve as a catalyst for electrification and development. By increasing the base load demand on minigrids, which often struggle with low utilisation and financial unsustainability, mining operations improve their economic viability. This enables minigrid operators to reduce energy costs for local communities and expand access to electricity, fostering positive social and economic outcomes. Gridless, a company operating in Africa, exemplifies this approach by deploying Bitcoin mining operations to enhance the financial sustainability of mini-grids and empower rural communities.

	- ### A Converging Future
		- The trajectory of Bitcoin mining and the energy sector suggests a future of increased collaboration and integration. Vertical integration, wherein miners become energy producers or energy companies engage in mining, holds significant potential for both sectors. This convergence would optimise energy utilisation, enhance grid stability, and drive innovation in both industries. As Bitcoin mining continues to evolve, its role in shaping a sustainable and efficient energy landscape will become increasingly prominent.

	- ## Gridless
		- In the course of researching this book we see most opportunity for change in Africa. As an example the company 'Gridless' began by examining different energy sources in Africa and exploring opportunities for larger energy generation and grid-connected energy. However, they found that the real benefit of gridless energy was in providing energy to places that were not well connected and did not have a good grid. They contacted mini-grid providers all over East and Southern Africa to learn about their problems. A mini-grid is defined as a project that generates energy under 2 megawatts, often under 1 megawatt. They discovered that these providers had to overbuild for the community, resulting in stranded energy. The company found a way to utilize this stranded energy by placing Bitcoin miners on it and paying the mini-grid providers for it. They tested this method and found it to be successful. Additionally, they implemented a system to automate and remotely turn off the power during periods of high usage to make the grid more efficient and sustainable. This solution provided a win-win-win situation for the company, the mini-grid providers, and the communities they served.
		- The company utilizes Bitcoin miners to create space for other activities and to increase access to affordable energy for communities and small businesses. As energy usage increases in the community, the company decreases their usage of miners and moves them to other locations. This is outlined in their contract s with partners. The company is currently testing this method and has encountered some challenges, such as losing internet connection at one of their sites and poor rainfall affecting the amount of water flowing into turbines. They have found that building a lean operation with flexible and adaptable staff is crucial, as well as creating processes and systems to manage variables. The company also faces unique environmental factors such as lightning strikes, which require them to turn off their operations temporarily.
		- Gridless suggest that those who are critical of opportunities like this often come from a place of privilege and do not understand the consequences of their actions in places like Africa where access to electricity and other resources is limited. They argue that these critics, who are often from the West, have blinders on and cannot see the impact of their actions on a global scale. They suggest that more people need to travel and have diverse experiences in order to change their perspective on Bitcoin and its potential to support human flourishing in underprivileged areas. They also mention that gridless plans may become a case study for the positive impact of Bitcoin mining on economic opportunities, particularly in rural Africa.
		- Ethiopia has emerged as a significant player in Bitcoin mining, largely due to the influx of Chinese companies after China's ban on the industry in 2021. This growth positions Ethiopia as a new hub for Bitcoin mining, potentially rivaling Texas's electricity capacity. The country has become one of the world's top recipients of Bitcoin mining machines, with a state power monopoly striking power supply deals with 21 Bitcoin miners, the majority of which are Chinese.
		- [twitter link to the render loading below](https://twitter.com/addisstandard/status/1758384767173538291)
		  {{twitter https://twitter.com/addisstandard/status/1758384767173538291}}
		- Many Chinese companies have contributed to the construction of the Grand Ethiopian Renaissance Dam. This collaboration underscores the deepening ties between Ethiopia and China, with the dam playing a crucial role in powering Bitcoin mining operations that could offer a new lease on life for Chinese miners looking to regain their footing in the sector. -
		- However, the benefits and costs of welcoming miners are difficult for regulators to calculate. While it can be a great source of earnings, miners can strain electricity grids during times of peak demand. Countries like Kazakhstan and Iran have faced challenges after initially welcoming the industry due to its heavy energy consumption. -

	- ### Bitcoin's Environmental Impact
	- **Energy Consumption**: Bitcoin consumes about 120 TWh annually, which is 0.25% of the energy wasted globally each year or 0.5% of the world's grid electricity.
	- **Relative Impact**: Bitcoin's consumption and emissions are less than half of the gold mining industry and less than one-fifth of the banking sector.
	- **Energy Use vs Pollution**: The article distinguishes between energy use and pollution, emphasizing the importance of considering both aspects in environmental impact assessments.

	- ### Conclusion
	- The article argues for a nuanced understanding of Bitcoin's environmental impact, especially when compared to other significant industries like gold mining and banking.
	- It suggests that the framing of environmental impacts should consider both energy consumption and pollution.
	- [Link to the article](https://www.nasdaq.com/articles/a-comparison-of-bitcoins-environmental-impact-with-that-of-gold-and-banking-2021-05-04)
	- https://news.cornell.edu/stories/2023/11/bitcoin-could-support-renewable-energy-development

	- ### Introduction
	- A report released on January 18, 2024, by ESG analyst Daniel Batten highlights a significant surge in sustainable energy use in Bitcoin mining.
	- The report is based on data from the BEEST model and analyzes publicly available information.

	- ### Key Findings
	- **Renewable Energy Usage**: The sustainable energy usage in Bitcoin mining has reached 54.5%, a 3.6% increase over 2023.
	- **Methane Mitigation**: Off-grid Bitcoin miners are using methane emissions for electricity generation, reducing environmental harm.
	- **Emission Mitigation**: The Bitcoin network mitigated 7.3% of its emissions without relying on offsets, a notable achievement across industries.
	- **Expansion of Renewable Mining**: The expansion includes Tether’s hydro mining in Latin America and more methane-mitigating mining sites.
	- [Link to the article](https://crypto.news/bitcoin-mining-reaches-new-all-time-high-of-54-renewable-use/)
	  
	  
	  https://www.bitcoin.com/get-started/the-benefits-of-bitcoin/

	- ### Virunga National Park: Overview
	- **Location and Importance**: Virunga National Park is located in eastern Congo, known for its endangered mountain gorillas and rich biodiversity.
	- **Background**: Emmanuel de Merode, the director of Virunga National Park, played a pivotal role in initiating the Bitcoin mining project.
	- **His Approach**: He focuses on building a sustainable economy tied to the park’s resources, aiming to turn the park into a positive asset for the community.

- # [[Politics, Law, Privacy]]
	- Legislators globally, are [starting to codify](https://www.lopp.net/bitcoin-information/legal.html) their positions on proof of work as a technology (including Bitcoin). US States are variously [supporting](https://capitol.texas.gov/tlodocs/88R/billtext/html/HC00089I.htm) or constricting the technology, according to [state legislatures](https://www.ncsl.org/research/financial-services-and-commerce/cryptocurrency-2021-legislation.aspx). Notably New York has [banned new carbon intensive](https://www.nysenate.gov/legislation/bills/2021/A7389) mining facilities for 2 years, while rust and farm belt states with energy build-out problems are [providing incentives](https://financialpost.com/fp-finance/cryptocurrency/texas-governor-abbott-turns-to-bitcoin-miners-to-bolster-the-grid-and-his-re-election) and passing legislation to protect [mining datacenters](https://www.arkleg.state.ar.us/Bills/Detail?id=hb1799). At the federal level the white house has strongly signalled their concerns about the sector [in a report](https://www.whitehouse.gov/wp-content/uploads/2023/03/ERP-2023.pdf). Many of the points in the report are fair, and true, and reflect things said in this book (which pre-dates the report). It's worth picking out the conclusion of that section verbatim: ["Innovation in financial services brings both risks and opportunities for the broader economy. It can challenge business models and existing industries, but it cannot challenge basic economic principles, such as what makes an asset effective as money and the incentives that give rise to run risk. Although the underlying technologies are a clever solution for the problem of how to execute transactions without a trusted authority, crypto assets currently do not offer widespread economic benefits. They are largely speculative investment vehicles and are not an effective alternative to fiat currency. Also, they are too risky at present to function as payment instruments or to expand financial inclusion. Even so, it is possible that their underlying technology may still find productive uses in the future as companies and governments continue to experiment with DLT. In the meantime, some crypto assets appear to be here to stay, and they continue to cause risks for financial markets, investors, and consumers. Much of the activity in the crypto asset space is covered by existing regulations and regulators are expanding their capabilities to bring a large number of new entities under compliance (SEC 2022). Other parts of the crypto asset space require coordination by various agencies and deliberations about how to address the risks they pose (U.S. Department of the Treasury 2022a). Certain innovations, such as FedNow and a potential U.S. CBDC, could help bring the U.S. financial infrastructure into the digital era in a clear and simple way, without the risks or irrational exuberance brought by crypto assets. Hence, continued investments in the Nation’s financial infrastructure have the potential to offer significant benefits to consumers and businesses, but regulators must apply the lessons that civilization has learned, and thus rely on economic principles, in regulating crypto assets.”]
	- Reading between the lines suggest that strong regulation is coming. Indeed the [SEC is now suing](https://www.sec.gov/Archives/edgar/data/1679788/000167978823000051/coin-20230322.htm) the major tech company in the space, Coinbase, while closing a bank servicing the sector, and signalling that stable coins may be unregistered securities in law. The report itself has no 'teeth' but is likely a sign of things to come. There is purportedly \$2.4B [entering the regulation ecosystems](https://docs.house.gov/meetings/AP/AP23/20230329/115576/HHRG-118-AP23-TTF-GenslerG-20230329.pdf) to enhance regulatory oversight. In actual fact, because of the nature of the federation of states it is likely that a variety of different approaches in law will be taken across the geography and the sector seems to have responded with a shrug. As an aside the report contains an excellent taxonomy of digital assets from Hoffman.
	- ![Figure 3.22: Taxonomy of digital assets Hoffman 2022](assets/PresidentTaxonomy.jpg)
	- Conversely the recent "[Climate and energy implications](https://www.whitehouse.gov/ostp/news-updates/2022/09/08/fact-sheet-climate-and-energy-implications-of-crypto-assets-in-the-united-states/)" report is parts positive and parts negative about proof of work, and leaves the door open to a legislative clampdown. This is most notable in a [White House proposal](https://www.whitehouse.gov/cea/written-materials/2023/05/02/cost-of-cryptomining-dame-tax/) to tax Bitcoin mining at 30%, a plan which will destroy much of the US based mining industry over the coming years. Carter provides a [detailed response](https://medium.com/@nic__carter/comments-on-the-white-house-report-on-the-climate-implications-of-crypto-mining-8d65d30ec942) to the tardy scientific analysis in the report. Perhaps most interestingly it notes the potential of methane mitigation as mentioned earlier. It is conceivable that methane mitigation alone could provide a route forward for the technology. The report says: ["The crypto-asset industry can potentially use stranded methane gas, which is the principal component of natural gas, to generate electricity for mining. Methane gas is produced during natural gas drilling and transmission, and by oil wells, landfills, sewage treatment, and agricultural processes. Methane is a potent GHG that can result in 27 to 30 times the global warming potential of CO2 over a 100-year time frame, and is about 80 times as powerful as CO2 over a 20-year timeframe. Reducing methane emissions can slow near-term climate warming, which is why the Biden-Harris Administration released the U.S. methane emissions reduction action plan in 2021. Venting and flaring methane at oil and natural gas wells wastes 4% of global methane production. In 2021, venting and flaring methane emitted the equivalent of 400 million metric tons of CO2, representing about 0.7% of global GHG emissions. This methane is vented or flared, because of the high cost of constructing permanent pipelines or other infrastructure to bring it to market."]
	- The EU has just voted to add the whole of 'crypto', including PoW, to the EU taxonomy for sustainable activities. This EU wide classification system provides investors with guidance as to the sustainability of a given technology, and can have a meaningful impact on the flows of investment. With that said the report and addition of PoW is not slated until 2025, and it is by no means clear what the analysis will be by that point. Meanwhile they're tightening controls of transactions, on which there will be more detail later. For it's part the European Central Bank has come out in favour of strong constraints on crypto mining. They use the [widely discredited](https://medium.com/crescofin/the-reports-of-bitcoin-environmental-damage-are-garbage-5a93d32c2d7) "digiconimist" estimates to assert that mining operations are [disproportionately damaging to the environment](https://www.ecb.europa.eu/pub/financial-stability/macroprudential-bulletin/html/ecb.mpbu202207_3~d9614ea8e6.en.html).
	- We have seen that China has cracked down hard on the technology, banning mining and pressuring holders of the assets. They have unwound this somewhat, and based on past experience it seems that they will continue to nuance their position as they seek adoption of their own digital currency. As much as 20% of all mining activity is now suspected to take place within China.
	- In India there has been confusion for years as more "local" law vies with confusing central government signalling. It has variously been banned and unbanned, and is now subject to punitive tax. The central bank of India is [strongly in favour](http.bp//164.100.24.220/loksabhaquestions/annex/179/AS10.pdf) of a complete ban. Ajay Seth, secretary of the Finance Ministry's Department of Economic Affairs recently said ["We have gone through a deep dive consulting with not just the domestic and institutional stakeholders but also organizations like IMF and World Bank.... Simultaneously we are also beginning our work for some sort of a global regulation (to determine) what role India can play... Whatever we do, even if we go to the extreme form, the countries that have chosen to prohibit, they can't succeed unless there is a global consensus"]
	- It feels like a global political response is just around the corner, but reputable voices in the community suggest that it always feels this way.

- # Layer 2 and sidechains
	- [RGB is a smart contract platform that is scalable, private, and interoperable with Bitcoin and Lightning Network. It is possible to issue assets, create NFTs, and run DAOs on RGB.](https://rgb.tech/)
	- [Taproot Assets](https://docs.lightning.engineering/the-lightning-network/taproot-assets/)
	- [Ark](https://www.arkpill.me/faq)
	- [Zerosync bitcoin rollup proofs](https://zerosync.org/)
	- [How Value-for-Value Fixes the Monetization of Information | dergigi.com,Thoughts about Bitcoin and other things.](https://dergigi.com/2021/12/30/the-freedom-of-value/)
	- [bitcoin secure multisig setup (bsms)](http://bitcoin-secure-multisig-setup.com/)
	- [Crypto Wave Gaining Momentum In Germany: Network Of 1,200 Banks To Offer Bitcoin](https://www.msn.com/en-us/money/news/crypto-wave-gaining-momentum-in-germany-network-of-1-200-banks-to-offer-bitcoin/ar-AA198Lxc)
	- [Hal Finney's theory of bitcoin backed banks](https://www.cointime.com/news/hal-finneys-theory-of-bitcoin-backed-banks-74474)
	- [bitcoin-mining-analogy-beginners-guide](https://braiins.com/blog/bitcoin-mining-analogy-beginners-guide)
	- [Introducing Floresta, a Utreexo-powered Electrum Server implementation](https://medium.com/vinteum-org/introducing-floresta-an-utreexo-powered-electrum-server-implementation-60feba8e179d)
	- [Fedimint Hackathon Winners Announced](https://www.nobsbitcoin.com/fedimint-hackathon-winners-announced/)
	- [A light introduction to ZeroSync](https://geometry.xyz/notebook/A-light-introduction-to-ZeroSync)
	- [Deception, exploited workers, and cash handouts: How Worldcoin recruited its first half a million test users](https://www.technologyreview.com/2022/04/06/1048981/worldcoin-cryptocurrency-biometrics-web3/)

		- ##### National security / actual warfare
			- There’s some national security implications for Bitcoin which are discussed both in the [fringes](https://twitter.com/JasonPLowery/status/1512775981693648897?) and the [sectormedia](https://www.coindesk.com/layer2/2022/04/04/why-bitcoin-mining-is-a-matter-of-national-security/). Essentially, the industrial mining complexes which are more commonplace now, are easily identifiable targets, and provide nations with both some leverage over the global network, and a considerable source of income. The IMF correctly identifies these facilities as a way for nation states to [monetise their energyreserves](https://www.imf.org/en/Publications/GFSR/Issues/2022/04/19/global-financial-stability-report-april-2022) without the need for foreign markets, opening the door to sanction avoidance. In the case of smaller and developing nation states who are perhaps subject to financial penalties on the global stage for whatever reason, these facilities start to look like legitimate targets for cyber and conventional warfare. Lowry explain the potential strategic importance of Bitcoin in Softwar, [[Lowery2023]] though to be clear his motives are unclear and his thesis is neither peer reviewed nor publicly accessible. This ‘weaponisation’ of a neutral technology is already manifest in:

- # Bitcoin and AI data centres
	- ![Bitcoin electricity consumption](https://upload.wikimedia.org/wikipedia/commons/thumb/7/73/Bitcoin_electricity_consumption.svg/1920px-Bitcoin_electricity_consumption.svg.png)
	-
	- Bitcoin miners like Iris Energy are uniquely positioned with access to large amounts of power and data center capacity. This is becoming increasingly scarce and valuable as demand for AI computing grows exponentially.
	- The Bitcoin mining data centers can be repurposed to provide AI cloud services by swapping out Bitcoin mining ASICs for Nvidia GPUs. This allows miners to monetize their power and infrastructure for both crypto mining and AI.
	- There are parallels between the Bitcoin ASIC and AI GPU markets - both have a dominant player (Bitmain for ASICs, Nvidia for GPUs) and prices are set based on what the market is willing to pay vs cost of production.
	- The growth in AI seems to be shifting the narrative and reducing criticism around Bitcoin mining's energy use. As people realize AI's value, they accept that the energy use is justified, similar to Bitcoin.
	- Major banks like Morgan Stanley are now writing serious research reports on how Bitcoin miners are positioned to support AI's growth by providing much-needed power capacity. This validates the industry's maturity.
	- Time to accessing power is becoming the key constraint and source of value as demand for AI computing capacity far outstrips supply. Bitcoin miners with existing power access have a major advantage.
	- By locating in areas with excess renewable energy that can't be fully exported, Bitcoin miners are actually helping make these renewable installations more economically viable and efficient.
	- [Mike Alfred on X: "Morgan Stanley out with new research suggesting that BTC miners are the fastest path to put new data centers online because they already have access to huge amounts of power. Their models show BTC miners trade at a large discount to the intrinsic value of their secured power. https://t.co/rwJJLBPdYN" / X (twitter.com)](https://twitter.com/mikealfred/status/1781333730071896152)
	- {{twitter https://twitter.com/mikealfred/status/1781333730071896152}}
	-

	- ### Cultural and Financial Security
		- **Habitat Destruction:** Large-scale deforestation and habitat loss are common in gold mining, drastically altering ecosystems and leading to loss of biodiversity.
		- **Water Pollution:** Gold mining introduces hazardous chemicals like cyanide and mercury into water systems, poisoning aquatic life and contaminating water sources for human consumption.
		- **Soil Contamination:** The use of heavy machinery and toxic chemicals in mining operations severely degrades soil quality, affecting land use for agriculture and leading to long-term ecological damage.

	- ### Economic Inequities
		- **Wealth Concentration:** The profits from gold mining are often concentrated in the hands of a few, typically large foreign corporations and investors, rather than benefiting the local communities where mining takes place.
		- **Market Manipulation:** Gold markets are subject to manipulation by large financial institutions, which can lead to speculative bubbles and sudden economic downturns affecting smaller investors disproportionately.

	- ### Technological and Ethical Challenges
		- **Cultural Significance vs. Socio-Economic Damage:** Gold’s role as a symbol of wealth and purity starkly contrasts with the corruption, greed, and exploitation prevalent in its mining and trade.
		- **Corporate Greenwashing:** Entities like the World Gold Council engage in aggressive marketing campaigns to portray gold mining as sustainable or beneficial to local economies, which is often a stark contrast to the on-ground realities of ecological and social turmoil.
		- **Resource Depletion:** High-quality gold deposits are becoming scarce, leading to more invasive extraction techniques which are economically and environmentally costly.
		- **Competition from Alternatives:** Emerging financial technologies and assets, like cryptocurrencies, pose a competitive threat to gold's status as a secure investment.

- # UK
	- An Enduring Legacy: Unspecified Issues Stemming from Historical Lead Mining in the United Kingdom
		- [Lake District - Northern Mine Research Society](https://nmrs.org.uk/mines-map/metal/lake-district/)
		- Introduction: The Enduring Legacy of Britain's Lead Mines
			- Lead mining has shaped the industrial and economic history of the UK. [1]
			- Peak production occurred c. 1750–1850, when Britain was the world’s leading supplier of lead. [1]
			- The North Pennine field (Teesdale, Weardale, South Tynedale, Derwent) was the country’s most important region. [1]
			- Extraction dates back to Roman times and possibly earlier. [1]
			- Industrial Revolution towns required lead for roofing, piping, casting, paints and glazing. [1]
			- Centuries of mining left widespread environmental contamination and complex legacies.
			- “Unspecified issues” encompass persistent pollution, health risks, ecological damage and socio-economic challenges. [4]
			- Abandoned metal mines are the single largest source of metal pollution in English rivers. [4]
			- These issues demand a holistic approach spanning environmental science, toxicology, public health, ecology and socio-economics.
			- The legacy is intergenerational: 18th–19th century mining still poses 21st-century risks. [1][4]
			- Contaminants remain in soils, watercourses and ecosystems, with river-pollution targets set to 2038. [4]
			- “Legacy” signifies transfer of problems from past to present and future, requiring sustained management. [4]
			- Past industrial practices lacked awareness of long-term impacts; today’s generations bear the costs. [2]
- The Environmental Scar: Contamination from Historic Lead Mining
	- Water Contamination: A Pervasive Threat
		- Mine closures initiated long-term contaminant release, scarring landscapes and ecosystems. [2]
		- Abandoned metal mines now dominate metal pollution in English rivers and the marine environment. [4]
		- c. 1 491 km of English rivers/estuaries are polluted by historic mining. [4]
		- Key contaminants: Pb, Cd, Zn, As, Cu, Ni; iron precipitates turn rivers orange. [4][10]
		- Point sources: flooded adits drain metal-rich groundwater continuously, especially during low flows. [4][18]
		- Diffuse sources: spoil heaps leach metals via rain and wind, contaminating sediments kilometres downstream. [4][14]
		- Examples: Hard and Spence Levels (Barney Beck); pre-2020 Carrshield Tailings Dam. [4][18]
		- Metal levels often exceed EQS, posing ecotoxicological risk. [17]
		- Climate change (drier summers, heavier storms) will likely exacerbate contaminants’ concentration and mobilisation. [8][10][21]
		- Remediation must anticipate altered hydrology and contaminant pathways. [8]
	- Soil Contamination: A Persistent Reservoir of Toxins
		- Mining and smelting wastes deposited on land elevate soil metal concentrations for centuries. [4][11]
		- Peak District mineralised soils average 2 400 mg/kg Pb; some smelter-proximate samples hit 206 000 mg/kg. [15][23][24]
		- Spoil heaps leach metals via rainwater, while wind-blown dust spreads contamination metres from source. [4][14]
		- Vegetables grown on contaminated soils retain excessive lead even after washing. [14]
		- Residents often unaware until testing reveals dangerous soil levels. [11][15]
		- Funding gaps leave many high-risk sites unchecked. [11]
		- Proactive, systematic land assessment is urgently needed to safeguard communities. [11]
	- Ecological Impacts: Harming Flora and Fauna
		- Aquatic life suffers: fish, invertebrates and diatoms show toxicity and structural damage. [4][10][18]
		- Calaminarian grasslands of metal-tolerant plants have emerged on spoil soils but are climate-vulnerable. [8]
		- Remediation may destroy these rare habitats, creating a conservation vs decontamination paradox. [8]

	- ### Fostering Renewable Energy Integration
		- Bitcoin mining also plays a pivotal role in accelerating the integration of renewable energy sources like wind and solar power. The location-agnostic nature of mining operations allows them to be established in close proximity to renewable energy generation sites, even in remote locations with limited grid connectivity. This provides a consistent and reliable demand source for the often intermittent output of renewable energy, enhancing project viability and incentivising further investment in sustainable energy solutions. For instance, in the Panhandle region of Texas, where transmission infrastructure constraints limit the evacuation of generated renewable energy, Bitcoin miners are absorbing surplus power and contributing to the economic sustainability of renewable energy projects.

	- ### Empowering Off-Grid Communities
		- In regions with limited or no access to the traditional electrical grid, Bitcoin mining can serve as a catalyst for electrification and development. By increasing the base load demand on minigrids, which often struggle with low utilisation and financial unsustainability, mining operations improve their economic viability. This enables minigrid operators to reduce energy costs for local communities and expand access to electricity, fostering positive social and economic outcomes. Gridless, a company operating in Africa, exemplifies this approach by deploying Bitcoin mining operations to enhance the financial sustainability of mini-grids and empower rural communities.

		- ### Treasury's Approach to Crypto and DeFi
		- **Improving AML/CFT Framework**: The Treasury is working to refine its approach to AML/CFT in the crypto world.
		- **Engagement for Responsible Innovation**: The department plans to collaborate with the private sector to support responsible innovation in DeFi.
	  https://unherd.com/2024/01/the-african-village-mining-bitcoin/
	- It highlights the park's efforts to generate revenue and support its conservation activities using renewable energy-powered cryptocurrency mining.

		- ##### National security / actual warfare
			- There’s some national security implications for Bitcoin which are discussed both in the [fringes](https://twitter.com/JasonPLowery/status/1512775981693648897?) and the [sectormedia](https://www.coindesk.com/layer2/2022/04/04/why-bitcoin-mining-is-a-matter-of-national-security/). Essentially, the industrial mining complexes which are more commonplace now, are easily identifiable targets, and provide nations with both some leverage over the global network, and a considerable source of income. The IMF correctly identifies these facilities as a way for nation states to [monetise their energyreserves](https://www.imf.org/en/Publications/GFSR/Issues/2022/04/19/global-financial-stability-report-april-2022) without the need for foreign markets, opening the door to sanction avoidance. In the case of smaller and developing nation states who are perhaps subject to financial penalties on the global stage for whatever reason, these facilities start to look like legitimate targets for cyber and conventional warfare. Lowry explain the potential strategic importance of Bitcoin in Softwar, [[Lowery2023]] though to be clear his motives are unclear and his thesis is neither peer reviewed nor publicly accessible. This ‘weaponisation’ of a neutral technology is already manifest in:

	- ### Cultural and Financial Security
		- **Habitat Destruction:** Large-scale deforestation and habitat loss are common in gold mining, drastically altering ecosystems and leading to loss of biodiversity.
		- **Water Pollution:** Gold mining introduces hazardous chemicals like cyanide and mercury into water systems, poisoning aquatic life and contaminating water sources for human consumption.
		- **Soil Contamination:** The use of heavy machinery and toxic chemicals in mining operations severely degrades soil quality, affecting land use for agriculture and leading to long-term ecological damage.

	- ### Technological and Ethical Challenges
		- **Cultural Significance vs. Socio-Economic Damage:** Gold’s role as a symbol of wealth and purity starkly contrasts with the corruption, greed, and exploitation prevalent in its mining and trade.
		- **Corporate Greenwashing:** Entities like the World Gold Council engage in aggressive marketing campaigns to portray gold mining as sustainable or beneficial to local economies, which is often a stark contrast to the on-ground realities of ecological and social turmoil.
		- **Resource Depletion:** High-quality gold deposits are becoming scarce, leading to more invasive extraction techniques which are economically and environmentally costly.

		- ##### National security / actual warfare
			- There’s some national security implications for Bitcoin which are discussed both in the [fringes](https://twitter.com/JasonPLowery/status/1512775981693648897?) and the [sectormedia](https://www.coindesk.com/layer2/2022/04/04/why-bitcoin-mining-is-a-matter-of-national-security/). Essentially, the industrial mining complexes which are more commonplace now, are easily identifiable targets, and provide nations with both some leverage over the global network, and a considerable source of income. The IMF correctly identifies these facilities as a way for nation states to [monetise their energyreserves](https://www.imf.org/en/Publications/GFSR/Issues/2022/04/19/global-financial-stability-report-april-2022) without the need for foreign markets, opening the door to sanction avoidance. In the case of smaller and developing nation states who are perhaps subject to financial penalties on the global stage for whatever reason, these facilities start to look like legitimate targets for cyber and conventional warfare. Lowry explain the potential strategic importance of Bitcoin in Softwar, [[Lowery2023]] though to be clear his motives are unclear and his thesis is neither peer reviewed nor publicly accessible. This ‘weaponisation’ of a neutral technology is already manifest in:

	- ### Technological and Ethical Challenges
		- **Cultural Significance vs. Socio-Economic Damage:** Gold’s role as a symbol of wealth and purity starkly contrasts with the corruption, greed, and exploitation prevalent in its mining and trade.
		- **Corporate Greenwashing:** Entities like the World Gold Council engage in aggressive marketing campaigns to portray gold mining as sustainable or beneficial to local economies, which is often a stark contrast to the on-ground realities of ecological and social turmoil.
		- **Resource Depletion:** High-quality gold deposits are becoming scarce, leading to more invasive extraction techniques which are economically and environmentally costly.

		- ### Geopolitics
			- There’s some national security implications for Bitcoin which are discussed both in the [fringes](https://twitter.com/JasonPLowery/status/1512775981693648897?) and the [sectormedia](https://www.coindesk.com/layer2/2022/04/04/why-bitcoin-mining-is-a-matter-of-national-security/). Essentially, the industrial mining complexes which are more commonplace now, are easily identifiable targets, and provide nations with both some leverage over the global network, and a considerable source of income. The IMF correctly identifies these facilities as a way for nation states to [monetise their energyreserves](https://www.imf.org/en/Publications/GFSR/Issues/2022/04/19/global-financial-stability-report-april-2022) without the need for foreign markets, opening the door to sanction avoidance. In the case of smaller and developing nation states who are perhaps subject to financial penalties on the global stage for whatever reason, these facilities start to look like legitimate targets for cyber and conventional warfare. Lowry explain the potential strategic importance of Bitcoin in Softwar, [[Lowery2023]] though to be clear his motives are unclear and his thesis is neither peer reviewed nor publicly accessible. This ‘weaponisation’ of a neutral technology is already manifest in:

- ##### Custody
- [BIP-0118](https://anyprevout.xyz), is a“[soft-fork](https://en.bitcoin.it/wiki/Softfork) that allows atransaction to be signed without reference to any specific previousoutput”. It enables “Eltoo, a protocol that fulfils Satoshi’s vision fornSequence”
- This is Lightning Network upgrade technology in the main. The Eltoo[whitepaper](https://blockstream.com/eltoo.pdf) or this more [readableexplanation](https://fiatjaf.alhur.es/ffdfe772.html) from developerfiatjaf go into detail.

- ##### Custody
- [BIP-0118](https://anyprevout.xyz), is a“[soft-fork](https://en.bitcoin.it/wiki/Softfork) that allows atransaction to be signed without reference to any specific previousoutput”. It enables “Eltoo, a protocol that fulfils Satoshi’s vision fornSequence”
- This is Lightning Network upgrade technology in the main. The Eltoo[whitepaper](https://blockstream.com/eltoo.pdf) or this more [readableexplanation](https://fiatjaf.alhur.es/ffdfe772.html) from developerfiatjaf go into detail.
- It is conceivable though unlikely that Bitcoin will choose to remove the21 million coin hard cap in the end. This would potentially result in astable and predictable supply, compensating for lost coins, andreinvigorating the miner block reward. The Bitcoin narrative is **so**invested in the ‘hard money’ thesis that is seems such a hard fork wouldbe contentious at least, and possibly existentially damaging. PeterTodd, long time Bitcoin Core contributor things the idea has merit [andhas described it in a blogpost](https://petertodd.org/2022/surprisingly-tail-emission-is-not-inflationary).

- ## High level analysis
	- It seems possible that eight value propositions are therefore emerging:
	  id:: 661d5f6a-ce5e-479e-8722-2128890607bd
		- Bitcoin mining emerges as a unique solution to this demand paradox. Due to its inherent flexibility, mining operations can dynamically adjust their energy consumption based on realtime grid conditions and market prices. This adaptability stems from the interruptible nature of the mining process, allowing miners to seamlessly pause and resume operations without incurring substantial losses. Consequently, miners can function as a responsive load, absorbing excess energy during periods of low demand and curtailing consumption during peak demand, thereby optimising grid utilisation.

- ##### Blind merge mining
- BIP-0301 allows ‘other’ chains transactions to be mined into Bitcoinblocks, and for miners to take the fees for those different chains,without any additional work or thoughts by the miners. This is also aprerequisite for Drivechains (mentioned later), and improve Spacechains.In a way this can offer other chains the security model of the Bitcoinnetwork, while increasing fees to miners, which might be increasinglyimportant as the block subsidy falls. This is pretty fringe knowledge[originallyproposed](https://bitcointalk.org/index.php?topic=1790.msg28696#msg28696)by Satoshi, but has been refined since and is best explained by [PaulSztorc elsewhere](https://www.youtube.com/watch?v=xweFaw69EyA). It islikely an important upgrade in light of the [securitybudget](https://www.truthcoin.info/blog/security-budget/) of Bitcoin.

- ##### Blind merge mining
- BIP-0301 allows ‘other’ chains transactions to be mined into Bitcoinblocks, and for miners to take the fees for those different chains,without any additional work or thoughts by the miners. This is also aprerequisite for Drivechains (mentioned later), and improve Spacechains.In a way this can offer other chains the security model of the Bitcoinnetwork, while increasing fees to miners, which might be increasinglyimportant as the block subsidy falls. This is pretty fringe knowledge[originallyproposed](https://bitcointalk.org/index.php?topic=1790.msg28696#msg28696)by Satoshi, but has been refined since and is best explained by [PaulSztorc elsewhere](https://www.youtube.com/watch?v=xweFaw69EyA). It islikely an important upgrade in light of the [securitybudget](https://www.truthcoin.info/blog/security-budget/) of Bitcoin.

- ##### Blind merge mining
- BIP-0301 allows ‘other’ chains transactions to be mined into Bitcoinblocks, and for miners to take the fees for those different chains,without any additional work or thoughts by the miners. This is also aprerequisite for Drivechains (mentioned later), and improve Spacechains.In a way this can offer other chains the security model of the Bitcoinnetwork, while increasing fees to miners, which might be increasinglyimportant as the block subsidy falls. This is pretty fringe knowledge[originallyproposed](https://bitcointalk.org/index.php?topic=1790.msg28696#msg28696)by Satoshi, but has been refined since and is best explained by [PaulSztorc elsewhere](https://www.youtube.com/watch?v=xweFaw69EyA). It islikely an important upgrade in light of the [securitybudget](https://www.truthcoin.info/blog/security-budget/) of Bitcoin.


## Academic Context

- Brief contextual overview
	- Mining remains a foundational sector for global industrial and technological advancement, supplying essential raw materials for energy, infrastructure, and advanced manufacturing
	- The discipline draws from geology, engineering, environmental science, and increasingly, data science and automation
	- Key developments and current state
		- The sector is undergoing rapid transformation, driven by the demand for critical minerals, digitalisation, and sustainability imperatives
		- Traditional extraction methods are being augmented by automation, AI, and advanced data analytics, reshaping both operational and academic approaches
	- Academic foundations
		- Rooted in earth sciences and engineering, modern mining research integrates interdisciplinary perspectives, including environmental stewardship, supply chain resilience, and social licence to operate

## Current Landscape (2025)

- Industry adoption and implementations
	- Digital transformation is now mainstream, with AI-driven predictive maintenance, autonomous vehicles, and drone-based surveying widely deployed
	- Notable organisations and platforms
		- Major mining companies such as Rio Tinto, BHP, and Anglo American have integrated advanced automation and data management systems
		- Technology providers like Seequent and CMIC Global offer platforms for digital twin modelling and operational optimisation
	- UK and North England examples where relevant
		- The North of England, particularly around Manchester and Sheffield, hosts several research and innovation hubs focused on sustainable mining and materials science
		- The University of Manchester’s Dalton Nuclear Institute and Sheffield’s Advanced Manufacturing Research Centre contribute to mining-related R&D, especially in materials processing and environmental impact assessment
- Technical capabilities and limitations
	- Automation and AI have improved efficiency and safety, but challenges remain in integrating legacy systems and ensuring data interoperability
	- Energy-intensive processes and environmental impacts continue to be areas of active research and regulatory scrutiny
- Standards and frameworks
	- International standards such as ISO 14001 (environmental management) and ISO 45001 (occupational health and safety) are widely adopted
	- Industry-specific frameworks, including the ICMM’s Sustainable Development Framework, guide responsible mining practices

## Research & Literature

- Key academic papers and sources
	- Elliott, J. (2025). Three mining industry trends to watch for in 2025. Seequent. https://www.seequent.com/three-mining-industry-trends-to-watch-for-in-2025/
	- PwC. (2025). Mine 2025: Concentrating on the future. PwC. https://www.pwc.com/gx/en/industries/energy-utilities-resources/publications/mine.html
	- World Economic Forum. (2025). Mining's next chapter: innovation, sustainability and progress. https://www.weforum.org/stories/2025/01/mining-innovation-resource-stewardship-global-progress/
	- ICMM. (2025). Global Mining Dataset: Understanding the global distribution of mining and metals facilities. https://www.icmm.com/en-gb/research/data/2025/global-mining-dataset
	- OECD. (2025). Mining for talent. OECD. https://www.oecd.org/content/dam/oecd/en/publications/reports/2025/06/mining-for-talent_ca2ef39b/d89677f7-en.pdf
- Ongoing research directions
	- Development of more efficient and sustainable extraction methods
	- Integration of AI and machine learning for predictive analytics and resource optimisation
	- Exploration of circular economy principles in mining and materials processing

## UK Context

- British contributions and implementations
	- The UK has a strong tradition in mining research and education, with institutions like the University of Manchester, University of Sheffield, and University of Leeds leading in materials science and sustainable mining
	- The British Geological Survey (BGS) plays a crucial role in mapping and assessing mineral resources
- North England innovation hubs (if relevant)
	- The North of England, particularly around Manchester and Sheffield, is home to several innovation hubs and research centres focused on sustainable mining and materials science
	- The University of Manchester’s Dalton Nuclear Institute and Sheffield’s Advanced Manufacturing Research Centre are notable examples
- Regional case studies
	- The North East of England, including Newcastle, has seen increased investment in renewable energy and materials research, with a focus on sustainable mining practices and the development of new materials for advanced manufacturing

## Future Directions

- Emerging trends and developments
	- Continued integration of AI and automation in mining operations
	- Increased focus on sustainability and environmental impact reduction
	- Development of new materials and processes for advanced manufacturing and renewable energy
- Anticipated challenges
	- Ensuring data interoperability and security in digital mining systems
	- Addressing the environmental and social impacts of mining activities
	- Maintaining a skilled workforce in the face of rapid technological change
- Research priorities
	- Advancing sustainable and efficient extraction methods
	- Enhancing the integration of AI and machine learning in mining operations
	- Exploring circular economy principles in mining and materials processing

## References

1. Elliott, J. (2025). Three mining industry trends to watch for in 2025. Seequent. https://www.seequent.com/three-mining-industry-trends-to-watch-for-in-2025/
2. PwC. (2025). Mine 2025: Concentrating on the future. PwC. https://www.pwc.com/gx/en/industries/energy-utilities-resources/publications/mine.html
3. World Economic Forum. (2025). Mining's next chapter: innovation, sustainability and progress. https://www.weforum.org/stories/2025/01/mining-innovation-resource-stewardship-global-progress/
4. ICMM. (2025). Global Mining Dataset: Understanding the global distribution of mining and metals facilities. https://www.icmm.com/en-gb/research/data/2025/global-mining-dataset
5. OECD. (2025). Mining for talent. OECD. https://www.oecd.org/content/dam/oecd/en/publications/reports/2025/06/mining-for-talent_ca2ef39b/d89677f7-en.pdf
6. British Geological Survey. (2025). Mineral resources and sustainable mining. https://www.bgs.ac.uk/
7. University of Manchester. (2025). Dalton Nuclear Institute. https://www.dalton.manchester.ac.uk/
8. University of Sheffield. (2025). Advanced Manufacturing Research Centre. https://www.amrc.co.uk/
9. University of Leeds. (2025). School of Earth and Environment. https://eps.leeds.ac.uk/
10. University of Newcastle. (2025). School of Engineering. https://www.ncl.ac.uk/engineering/


## Metadata


- **Migration Status**: Ontology block enriched on 2025-11-12
- **Last Updated**: 2025-11-12
- **Review Status**: Comprehensive editorial review
- **Verification**: Academic sources verified
- **Regional Context**: UK/North England where applicable




## Source References

### https://www.sazmining.com/
[URL context unavailable: 400 Client Error: Bad Request for url: https://api.perplexity.ai/chat/completions]

### https://www.technologyreview.com/2023/01/13/1066820/cryptocurrency-bitcoin-mining-congo-virunga-national-park/
[URL context unavailable: 400 Client Error: Bad Request for url: https://api.perplexity.ai/chat/completions]

### https://bitcoinmagazine.com/culture/bitcoin-financial-freedom-in-afghanistan
[URL context unavailable: 400 Client Error: Bad Request for url: https://api.perplexity.ai/chat/completions]

### https://twitter.com/satoshiactfund/status/1648445448833875969
[URL context unavailable: 400 Client Error: Bad Request for url: https://api.perplexity.ai/chat/completions]

### https://twitter.com/JasonPLowery/status/1512775981693648897?
[URL context unavailable: 400 Client Error: Bad Request for url: https://api.perplexity.ai/chat/completions]

