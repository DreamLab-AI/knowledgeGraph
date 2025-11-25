- ### OntologyBlock
  id:: proof-of-work-ontology
  collapsed:: true

  - **Identification**

    - domain-prefix:: BC

    - sequence-number:: 0052

    - filename-history:: ["BC-0052-proof-of-work.md"]
    - public-access:: true
    - ontology:: true
    - term-id:: DT-0929
    - preferred-term:: Proof of Work
    - source-domain:: blockchain
    - status:: complete
    - version:: 1.0.0
    - last-updated:: 2025-10-28

  - **Definition**
    - definition:: Computational puzzle consensus within blockchain systems, providing essential functionality for distributed ledger technology operations and properties.
    - maturity:: mature
    - source:: [[ISO/IEC 23257:2021]], [[IEEE 2418.1]], [[NIST NISTIR]]
    - authority-score:: 0.95

  - **Semantic Classification**
    - owl:class:: bc:ProofofWork
    - owl:physicality:: VirtualEntity
    - owl:role:: Object
    - owl:inferred-class:: bc:VirtualObject
    - belongsToDomain:: [[ConsensusDomain]]
    - implementedInLayer:: [[ProtocolLayer]]

  - #### Relationships
    id:: proof-of-work-relationships
    - is-subclass-of:: [[Blockchain Entity]], [[ConsensusProtocol]]
    - disjoint-with:: [[Proof of Stake]]
    - disjoint-with:: [[Delegated Proof of Stake]]
    - disjoint-with:: [[Nominated Proof of Stake]]
    - disjoint-with:: [[Liquid Proof of Stake]]
    - disjoint-with:: [[Pure Proof of Stake]]

  - #### OWL Axioms
    id:: proof-of-work-owl-axioms
    collapsed:: true
    - ```clojure
      Prefix(:=<http://metaverse-ontology.org/blockchain#>)
Prefix(owl:=<http://www.w3.org/2002/07/owl#>)
Prefix(rdf:=<http://www.w3.org/1999/02/22-rdf-syntax-ns#>)
Prefix(xml:=<http://www.w3.org/XML/1998/namespace>)
Prefix(xsd:=<http://www.w3.org/2001/XMLSchema#>)
Prefix(rdfs:=<http://www.w3.org/2000/01/rdf-schema#>)
Prefix(dct:=<http://purl.org/dc/terms/>)

Ontology(<http://metaverse-ontology.org/blockchain/BC-0052>
  Import(<http://metaverse-ontology.org/blockchain/core>)

  ## Class Declaration
  Declaration(Class(:ProofofWork))

  ## Subclass Relationships
  SubClassOf(:ProofofWork :ConsensusProtocol)
  SubClassOf(:ProofofWork :BlockchainEntity)

  ## Essential Properties
  SubClassOf(:ProofofWork
    (ObjectSomeValuesFrom :partOf :Blockchain))

  SubClassOf(:ProofofWork
    (ObjectSomeValuesFrom :hasProperty :Property))

  ## Data Properties
  DataPropertyAssertion(:hasIdentifier :ProofofWork "BC-0052"^^xsd:string)
  DataPropertyAssertion(:hasAuthorityScore :ProofofWork "1.0"^^xsd:decimal)
  DataPropertyAssertion(:isFoundational :ProofofWork "true"^^xsd:boolean)

  ## Object Properties
  ObjectPropertyAssertion(:enablesFeature :ProofofWork :BlockchainFeature)
  ObjectPropertyAssertion(:relatesTo :ProofofWork :RelatedConcept)

  ## Annotations
  AnnotationAssertion(rdfs:label :ProofofWork "Proof of Work"@en)
  AnnotationAssertion(rdfs:comment :ProofofWork
    "Computational puzzle consensus"@en)
  AnnotationAssertion(dct:description :ProofofWork
    "Foundational blockchain concept with formal ontological definition"@en)
  AnnotationAssertion(:termID :ProofofWork "BC-0052")
  AnnotationAssertion(:priority :ProofofWork "1"^^xsd:integer)
  AnnotationAssertion(:category :ProofofWork "consensus-fundamentals"@en)
)
      ```

- ## About Proof of Work
  id:: proof-of-work-about

  - Computational puzzle consensus within blockchain systems, providing essential functionality for distributed ledger technology operations and properties.
  -
  - ### Key Characteristics
    id:: proof-of-work-characteristics
    - 1. **Definitional Property**: Core defining characteristic
    - 2. **Functional Property**: Operational behavior
    - 3. **Structural Property**: Compositional elements
    - 4. **Security Property**: Security guarantees provided
    - 5. **Performance Property**: Efficiency considerations
  -
  - ### Technical Components
    id:: proof-of-work-components
    - **Implementation**: How concept is realized technically
    - **Verification**: Methods for validating correctness
    - **Interaction**: Relationships with other components
    - **Constraints**: Technical limitations and requirements
  -
  - ### Use Cases
    id:: proof-of-work-use-cases
    - **1. Core Blockchain Operation**
    - **Application**: Fundamental blockchain functionality
    - **Example**: Practical implementation in major blockchains
    - **Requirements**: Technical prerequisites
    - **Benefits**: Value provided to blockchain systems
  -
  - ### Standards & References
    id:: proof-of-work-standards
    - [[ISO/IEC 23257:2021]] - Blockchain and distributed ledger technologies
    - [[IEEE 2418.1]] - Blockchain and distributed ledger technologies
    - [[NIST NISTIR]] - Blockchain and distributed ledger technologies
  -

- ## 2024-2025: The Great Energy Reckoning and the Proof-of-Stake Vindication
  id:: proof-of-work-recent-developments

  The years 2024 and 2025 represented a critical inflection point for proof-of-work consensus mechanisms, as **absolute energy consumption reached historic peaks** (Bitcoin's 173 TWh annually), **Ethereum's 2022 Merge to proof-of-stake achieved vindication** through 99.9% sustained energy reduction without security compromises, **regulatory and community pressures intensified** around environmental externalities (noise pollution, air quality, water consumption), yet **Bitcoin's proof-of-work remained economically and politically resilient** due to strategic U.S. regulatory reversal, renewable energy integration economics, and entrenched mining infrastructure—crystallising a **bifurcated consensus landscape** where proof-of-stake dominated new blockchain deployments whilst proof-of-work persisted in Bitcoin's specific security model.

  ### Bitcoin's Energy Consumption Reaches 173 TWh: Household Equivalence and Absolute Scale

  By 2025, Bitcoin's total annual energy consumption reached approximately **173 terawatt-hours (TWh)**, representing:

  - **0.72% of global electricity consumption** (estimated global electricity generation approximately 24,000 TWh in 2025)
  - **Comparable to the annual electricity consumption of Egypt** (population approximately 110 million) or Pakistan (population approximately 240 million)
  - **Average energy per transaction: 1,335 kWh**, roughly equivalent to the power consumed by an average U.S. household over **45 days**

  This represented an approximately **15% increase** from 2023 levels (approximately 150 TWh) despite the April 2024 halving event reducing block rewards by 50%. The continued energy consumption growth—seemingly paradoxical given reduced mining revenue—reflected:

  - **Hash rate growth**: Bitcoin's network hash rate grew from approximately 500 EH/s pre-halving to 615 EH/s by early 2025, driven by ASIC efficiency improvements (35-40% electricity cost reduction per hash) and Bitcoin price appreciation (offsetting halving impacts)
  - **Efficiency gains insufficient to offset scale**: Whilst newer-generation ASIC miners (18-23 J/TH vs. 30-35 J/TH for older models) reduced electricity per hash unit, the **absolute number of hashes computed grew faster**, resulting in net energy consumption increases
  - **Renewable energy percentage insufficient**: Although renewable energy usage in Bitcoin mining reached **54% by 2025** (up from approximately 40% in 2021), this represented the **energy source mix** rather than absolute consumption reduction—total fossil fuel electricity consumed still increased in absolute terms despite declining as a percentage

  The **1,335 kWh per transaction metric** remained controversial amongst Bitcoin proponents, who argued this measurement was misleading:

  - **Security, not transactions**: Bitcoin's energy consumption secures the **entire network and settlement layer**, not individual transactions. The same energy would be consumed whether Bitcoin processed 100,000 or 1 million transactions per day, as energy correlates with block production (every ~10 minutes) rather than transaction count.
  - **Layer 2 multiplier**: The Lightning Network and other Layer 2 solutions enable theoretically unlimited transactions atop Bitcoin's base layer, potentially amortising energy costs across millions of additional transactions not captured in on-chain metrics.
  - **False equivalence**: Comparing Bitcoin's energy consumption to "households powered" or "countries' electricity use" created intuitive but potentially misleading framings, as Bitcoin mining often utilised **curtailed renewable energy** (otherwise wasted), **stranded gas** (otherwise flared), or **off-peak baseload power** (otherwise sold at negative prices)—energy contexts where marginal environmental cost differed substantially from displacing residential electricity.

  Critics countered that these defences constituted **special pleading**: no other industry justified extreme energy consumption by citing theoretical future efficiency layers or marginal utilisation of waste streams.

  ### Ethereum's Proof-of-Stake Merge: 99.9% Reduction Vindicated

  Ethereum's **September 15, 2022 transition** from proof-of-work to proof-of-stake (PoS)—known as **"The Merge"**—achieved full vindication by 2024-2025 as the network demonstrated:

  **Energy Reduction Sustained:**
  - Ethereum's annual energy consumption remained at approximately **0.02 TWh** through 2024-2025, representing a **99.9% reduction** from pre-Merge levels (approximately 96 TWh in 2021-2022)
  - This energy consumption level equated to approximately **2,600 U.S. households' annual electricity use**, compared to Bitcoin's equivalent of **19.4 million households**—a **7,500x difference** for networks with comparable market capitalisation ($200-300 billion for Ethereum vs. $600 billion-$1 trillion for Bitcoin during 2024-2025)

  **Security and Decentralisation Maintained:**
  - By early 2025, over **1,000,000 validators** participated in Ethereum's proof-of-stake consensus, staking approximately **32 million ETH** (approximately 27% of total supply, valued at $50-80 billion depending on ETH price)
  - The network experienced **zero consensus failures** or **51% attacks** since The Merge, demonstrating that proof-of-stake's economic security model (requiring attackers to acquire and risk substantial capital) functioned effectively in practice
  - **Decentralisation concerns** persisted: Lido (liquid staking protocol) controlled approximately **30% of staked ETH**, whilst Coinbase controlled approximately **13%**—creating centralisation risks if these entities coordinated or faced regulatory capture. However, no consensus attacks materialised despite these concentrations.

  **Economic Sustainability:**
  - Ethereum validators earned approximately **3-4% annual yield** (varying with network activity and MEV—miner extractable value), providing sufficient economic incentives for participation without requiring proof-of-work's massive energy expenditure
  - The **deflationary tokenomics** introduced post-Merge (EIP-1559 burns base transaction fees) created a dynamic where network usage could reduce total ETH supply, potentially enhancing long-term value accrual and validator incentives

  **Broader Ecosystem Validation:**
  - Ethereum's successful Merge demonstrated that **major blockchain networks could transition consensus mechanisms** without catastrophic failure, providing an existence proof that energy-intensive proof-of-work was **not technically necessary** for securing high-value decentralised networks
  - This vindication substantially weakened proof-of-work defenders' argument that proof-of-stake was "unproven" or "theoretically insecure"—by 2025, Ethereum had operated under proof-of-stake for over **2.5 years** securing hundreds of billions in value without incident

  ### Proof-of-Stake Alternatives: Demonstrating Marginal Energy Consumption

  By 2024-2025, proof-of-stake networks across the cryptocurrency ecosystem demonstrated that **blockchain consensus could operate at marginal energy scales**:

  **Leading PoS Networks' Energy Consumption (2025 estimates):**
  - **Polkadot**: Approximately **70 MWh annually** (0.00007 TWh)—equivalent to approximately **8 U.S. households**
  - **Cardano**: Approximately **0.007 TWh annually** (7,000 MWh)—equivalent to approximately **800 U.S. households**
  - **Solana**: Approximately **0.002 TWh annually** (1,967 MWh)—equivalent to approximately **225 U.S. households**
  - **Avalanche**: Approximately **0.003 TWh annually**—equivalent to approximately **350 U.S. households**

  These networks collectively secured **over $50 billion in market capitalisation** whilst consuming energy equivalent to **fewer than 2,000 U.S. households**—a **resource efficiency profile** 10,000x superior to Bitcoin on a per-dollar-secured basis.

  **Carbon Footprint Comparison:**
  - The Climate Chain Coalition's research institute (CCRI) estimated yearly carbon footprints for major proof-of-stake networks:
    - **Polkadot**: 33 tonnes CO₂e annually
    - **Solana**: 934 tonnes CO₂e annually
    - **Cardano**: Approximately 200 tonnes CO₂e annually
  - In contrast, Bitcoin's carbon footprint (assuming global electricity grid average carbon intensity of 0.4 tonnes CO₂/MWh) exceeded **69 million tonnes CO₂e annually** in 2025—equivalent to the annual emissions of **Switzerland** or **New Zealand**

  **Performance and Scalability:**
  - Proof-of-stake networks consistently demonstrated **superior transaction throughput** and **lower latency** compared to Bitcoin:
    - **Solana**: 2,000-5,000 transactions per second (TPS) sustained, with theoretical capacity exceeding 50,000 TPS
    - **Avalanche**: 4,500 TPS with sub-second finality
    - **Cardano**: 250+ TPS following 2024 scaling upgrades
    - **Bitcoin**: 7 TPS base layer (though Lightning Network Layer 2 could handle substantially more)

  - This performance differential undermined arguments that proof-of-work's energy consumption was **technologically necessary** for blockchain functionality—proof-of-stake networks achieved orders of magnitude better performance per unit energy consumed.

  ### Regulatory Pressures and Environmental Governance

  Despite renewable energy adoption progress, proof-of-work mining faced **intensifying regulatory scrutiny** globally through 2024-2025:

  **EU MiCA Regulation (December 2024):**
  - The Markets in Crypto-Assets (MiCA) framework, which became fully effective in **December 2024**, established comprehensive standards for cryptocurrency operations across the European Union
  - **Environmental disclosure requirements**: Crypto-asset service providers (including exchanges listing proof-of-work cryptocurrencies) must disclose energy consumption and environmental impact data, creating transparency obligations
  - **No outright PoW ban**: Despite pressure from the European Central Bank and environmental groups, MiCA stopped short of banning proof-of-work mining or trading, representing a **political compromise** between innovation advocates and climate hawks
  - **Future restrictions remain possible**: MiCA includes provisions for **future amendments** based on evolving environmental assessments, leaving open the possibility of stricter measures if proof-of-work energy consumption continues growing

  **Geographic Bans and Restrictions:**
  - **Kuwait banned mining entirely in 2025** due to power grid strain from summer air conditioning demand (peak temperatures exceeding 50°C), joining a growing list of nations imposing energy-infrastructure-driven bans
  - **Russia introduced seasonal mining bans** in select regions (particularly Siberia) during winter peak electricity demand, whilst paradoxically positioning itself as a mining destination during other periods
  - **Iceland**, historically a mining haven due to abundant geothermal and hydro energy, witnessed growing **community resistance** as mining facilities competed with tourism, data centres, and aluminium smelting for limited grid capacity despite 100% renewable electricity

  **U.S. Regulatory Reversal:**
  - The **Trump administration's abandonment** of the proposed 30% Digital Asset Mining Energy (DAME) tax represented the most significant regulatory shift, signalling that U.S. federal policy would **not penalise proof-of-work mining** for energy consumption
  - This reversal created a **regulatory arbitrage opportunity**: miners concentrated in pro-mining U.S. states (Texas, Wyoming, Arkansas) and countries with favourable policies, whilst exiting hostile jurisdictions (New York, parts of Europe)

  ### Health and Environmental Justice: The Granbury Precedent

  The environmental debate evolved beyond abstract energy consumption metrics toward **localised health impacts** affecting mining facility neighbours:

  **PM2.5 Pollution and Public Health:**
  - A **May 2025 study in Nature Communications** indicated that demand from 34 large U.S. Bitcoin mining facilities increased fine particulate matter (**PM2.5**) pollution, affecting approximately **1.9 million people**
  - The mechanism: mining facilities' electricity demand led utilities to operate fossil fuel power plants (particularly natural gas peaker plants) at higher capacity during peak mining periods, increasing emissions of nitrogen oxides, sulphur dioxide, and particulate matter
  - Estimated health costs: The study calculated approximately **$1,000-1,500 in health damages per Bitcoin** mined when accounting for respiratory illness, cardiovascular disease exacerbation, and premature mortality linked to PM2.5 exposure

  **Noise Pollution Litigation:**
  - The **October 2024 Granbury, Texas lawsuit** against Marathon Digital Holdings marked a watershed: residents alleged 24/7 noise from mining facility cooling fans (measured at 70-80 decibels at property lines) caused **sleep deprivation, stress, and diminished property values**
  - The lawsuit framed mining operations as a **private nuisance** and potential **public health hazard**, seeking facility shutdowns and damages. By early 2025, the case remained in pre-trial discovery, but similar lawsuits emerged in **Montana**, **North Dakota**, and rural areas of **Kazakhstan**
  - **Regulatory response**: Arkansas proposed 2024 regulations requiring mining facilities to maintain noise levels below 55 decibels at property lines during night-time hours (10pm-7am), with some municipalities considering outright bans on facilities within 1 mile of residential areas

  **Water Consumption in Arid Regions:**
  - Mining facilities using **evaporative cooling** in water-scarce regions (West Texas, Southwest U.S., parts of Kazakhstan) faced growing criticism for consuming **1-2 gallons per kWh**—potentially millions of gallons daily for large facilities
  - **Industry response**: Adoption of **immersion cooling technologies** (95% water reduction) and **air cooling in humid climates** addressed concerns in newer facilities, but legacy operations continued using evaporative systems due to retrofit costs ($5-15 million per facility)

  ### The Greenwashing Debate: Renewable Energy Claims Under Scrutiny

  As Bitcoin mining industry claims of "54% renewable energy" became standard marketing, critics intensified **greenwashing accusations**:

  **Renewable Energy Credit (REC) Controversy:**
  - Many miners achieved renewable energy percentages by purchasing **Renewable Energy Certificates** (RECs)—financial instruments representing the renewable attributes of electricity generation—whilst actually consuming fossil fuel electricity
  - Critics argued this practice provided **zero climate benefit**: the renewable electricity generation and fossil fuel consumption both occurred, merely with financial accounting transferring renewable "credits" to miners
  - **Analogy**: A coal plant could claim 100% renewable electricity by purchasing sufficient RECs, whilst literally burning coal—highlighting the disconnect between REC accounting and physical emissions reduction

  **Load Displacement and System Effects:**
  - Environmental economists argued that even miners **directly consuming renewable electricity** at wind/solar farms imposed **system-level costs**:
    - Mining load increased **total system electricity demand**, necessitating additional generation capacity (often fossil fuel backup) to maintain grid reliability
    - Renewable electricity consumed by miners represented **opportunity cost**—that same electricity could have displaced fossil fuel generation elsewhere on the grid, creating greater net emissions reduction
  - Miners countered that **curtailed renewable energy** (otherwise wasted due to transmission constraints) had **zero opportunity cost**, as it would not have served other loads regardless

  **Methane Mitigation Overstated:**
  - Mining operations co-located with landfills, oil wells, and wastewater treatment plants claimed **climate-positive impacts** by capturing vented methane (80x more potent than CO₂ over 20-year timeframes)
  - Critics argued these claims overstated benefits:
    - Methane capture for electricity generation still produced CO₂ emissions
    - Mining created economic incentives for **continued fossil fuel extraction** (oil wells kept operating longer to supply associated gas for mining), undermining climate transition
    - **Scale limitations**: Methane-powered mining represented only approximately **5-8%** of total Bitcoin mining by 2025—too small to offset the network's overall climate impact

  ### Technical Alternatives and Proof-of-Work's Obsolescence Debate

  By 2024-2025, the technical community divided sharply on whether proof-of-work remained **necessary** for Bitcoin's specific security model:

  **Pro-Proof-of-Work Arguments:**
  - **Thermodynamic security**: Proof-of-work's energy expenditure creates a **physical cost floor** for attacking the network (must expend equivalent energy to rewrite history), providing security assurances independent of token price or staking economics
  - **Decentralisation**: Mining hardware can be purchased by anyone globally without permissioned access, whereas proof-of-stake concentrates power amongst large token holders (potential plutocracy)
  - **Lindy effect**: Bitcoin's proof-of-work has operated continuously for **16+ years** without consensus failure, whilst proof-of-stake networks remain younger and potentially less battle-tested for Bitcoin's scale and value
  - **No viable transition path**: Even if proof-of-stake were superior, transitioning Bitcoin would require unprecedented coordination and risk catastrophic governance failure or chain split

  **Pro-Proof-of-Stake Arguments:**
  - **Ethereum vindication**: Over 2.5 years post-Merge demonstrate proof-of-stake can secure high-value networks ($200-300 billion) with 99.9% less energy
  - **Economic security sufficiency**: The **opportunity cost of capital** staked in proof-of-stake (foregoing alternative investments) plus **slashing risk** (validators lose staked capital for malicious behavior) provides equivalent security to proof-of-work's energy expenditure
  - **Scalability and performance**: Proof-of-stake enables **higher throughput** and **faster finality** without energy constraints limiting validator participation
  - **Environmental necessity**: Climate crisis urgency renders proof-of-work's energy consumption **ethically indefensible** regardless of technical arguments

  **Alternative Consensus Mechanisms:**
  - Research continued on hybrid approaches:
    - **Proof-of-stake with proof-of-work checkpoints**: Using occasional proof-of-work "anchors" for finality whilst proof-of-stake handles routine consensus
    - **Proof-of-useful-work**: Replacing SHA-256 hashing with computations providing societal value (protein folding, climate modelling)—though no implementations achieved Bitcoin-scale deployment
    - **Proof-of-spacetime** (Chia, Filecoin): Using disk storage rather than computation—lower energy intensity but requiring massive storage infrastructure

  None of these alternatives gained sufficient traction to challenge Bitcoin's entrenched proof-of-work or Ethereum's proof-of-stake dominance by 2025.

  ### Future Trajectory: Persistence, Prohibition, or Phase-Out?

  By mid-2025, proof-of-work's future remained deeply contested, with plausible scenarios including:

  **Persistence Scenario (Base Case):**
  - Bitcoin's proof-of-work continues indefinitely, benefiting from U.S. regulatory acceptance, renewable energy integration economics, and **thermodynamic security** narrative resilience
  - Energy consumption stabilises around **200 TWh annually by 2027-2028** as ASIC efficiency approaches thermodynamic limits and hash rate growth plateaus
  - Proof-of-work becomes a **Bitcoin-specific phenomenon**: no new major blockchains launch with proof-of-work (all use proof-of-stake or alternatives), but Bitcoin's incumbency and network effects sustain its model
  - Environmental criticism persists but fails to achieve regulatory prohibition due to **geographic arbitrage** (mining concentrates in friendly jurisdictions) and **political lobbying** funded by institutional miners

  **Prohibition Scenario (Regulatory Risk):**
  - A severe climate event or political shift triggers **coordinated international action**: EU bans proof-of-work under updated MiCA provisions, multiple U.S. states impose moratoriums, China fully enforces 2021 ban
  - Mining concentrates in **jurisdictions of last resort** (Russia, Central Asia, parts of Middle East/Africa) with limited renewable energy and weak governance, creating reputational damage
  - Institutional capital divests from Bitcoin due to ESG concerns, reducing price and creating a **death spiral**: lower Bitcoin price → reduced mining profitability → declining hash rate → reduced security → further price decline
  - Bitcoin potentially survives as a **niche asset** but loses aspirations of global reserve currency or mainstream institutional adoption

  **Phase-Out Scenario (Technical Transition):**
  - Growing consensus within Bitcoin community that energy consumption threatens long-term viability, leading to **controversial hard fork** transitioning to hybrid proof-of-work/proof-of-stake or full proof-of-stake
  - This would represent Bitcoin's most contentious governance decision ever, likely creating **multiple chain splits** (proof-of-work maximalists continue original chain, proof-of-stake adopters fork to new chain)
  - Market eventually converges on one chain as dominant, but transition creates years of uncertainty and value destruction
  - **Probability assessed as low** (<20%) by 2025 due to entrenched proof-of-work ideology and lack of coordination mechanisms

  **Technological Disruption Scenario (Quantum or Alternative):**
  - Quantum computing advances render SHA-256 proof-of-work obsolete, forcing transition to quantum-resistant consensus mechanism
  - Alternative consensus mechanism (proof-of-useful-work, proof-of-spacetime, or yet-undiscovered approach) demonstrates dramatically superior security/energy trade-offs, creating overwhelming incentive for Bitcoin transition
  - Both scenarios require **external technological forcing** rather than internal governance decision

  The 2024-2025 period, whilst crystallising proof-of-work's bifurcated future—**vindicated proof-of-stake for new deployments, resilient but contested proof-of-work for Bitcoin specifically**—left unresolved whether proof-of-work represents a **thermodynamically necessary security innovation** or an **energy-profligate dead end** awaiting inevitable obsolescence.

	- ### Hardware
		- **[Meta Quest 3S](https://www.linezero.com/blog/meta-connect-2024-new-headsets-ai-and-the-future-of-work)**: A more affordable mixed reality headset.
		- **[Orion](https://www.linezero.com/blog/meta-connect-2024-new-headsets-ai-and-the-future-of-work)**: Meta's first true augmented reality glasses.

			- ## Key Findings from earlier in the adoption
				- As of August 2024, 39.4% of Americans aged 18-64 reported using generative AI.
				- 28% of employed respondents said they use generative AI at work.
				- Nearly 1 in 9 workers (10.6%) reported using generative AI daily at work.
				- Adoption has been faster than previous transformative technologies like personal computers and the internet.

				- ### Adoption Across Industries
					- Generative AI usage spans a wide range of occupations:
					- Over 40% adoption in management, business, and computing professions.
					- 20% of "blue-collar" workers (e.g. construction, maintenance, transportation) use generative AI frequently at work.

		- #### **Bitcoin as the Trust and Settlement Layer**
		- The Bitcoin network, secured by its Proof-of-Work consensus mechanism, serves as the immutable, decentralized anchor for the entire system. Its primary role is not for everyday transactions but as the final, censorship-resistant court of settlement.
		- *   **The Lightning Network (Layer 2):** Built atop Bitcoin, the Lightning Network enables near-instant, low-cost payments, making it the ideal rail for the high-frequency microtransactions required by AI agents.

	- ## Agents versus Workflows

		- ### Implementation Patterns
			- Effective deep research systems:
				- Break complex queries into constituent questions
				- Search iteratively, using findings to inform subsequent searches
				- Synthesise information from multiple sources
				- Provide comprehensive analysis rather than simple answers
				- Work asynchronously, allowing users to continue other tasks

	- ### Key Developments
		- **Enterprise Adoption:** Major tech companies are integrating AI agents into their enterprise offerings.
			- [Oracle is rolling out over 50 AI agents in its Fusion Cloud suite.](https://www.alvarezandmarsal.com/insights/agentic-ai-future-automation-and-intelligence)
			- [Microsoft is advancing its Copilot vision with autonomous AI capabilities in Dynamics 365 and the Copilot Studio.](https://medium.com/@arjun.arj.chhabra/the-rise-of-ai-agents-in-enterprise-tech-a-look-at-oracle-microsoft-sap-and-fujitsu-50a3a33a3e3c)
			- [SAP's Joule collaborative AI agents are being integrated into enterprise functions.](https://medium.com/@arjun.arj.chhabra/the-rise-of-ai-agents-in-enterprise-tech-a-look-at-oracle-microsoft-sap-and-fujitsu-50a3a33a3e3c)
			- [Fujitsu's Kozuchi AI Agent is designed for high-level decision-making.](https://medium.com/@arjun.arj.chhabra/the-rise-of-ai-agents-in-enterprise-tech-a-look-at-oracle-microsoft-sap-and-fujitsu-50a3a33a3e3c)
		- **New Models and Enhanced Capabilities:** More powerful and specialized AI models have been released.
			- [Anthropic's Claude 3.5 can perform human-like operations on a computer.](https://medium.com/@arjun.arj.chhabra/the-rise-of-ai-agents-in-enterprise-tech-a-look-at-oracle-microsoft-sap-and-fujitsu-50a3a33a3e3c)
			- [Nvidia's Eureka Agent can autonomously teach robots advanced skills.](https://medium.com/@arjun.arj.chhabra/the-rise-of-ai-agents-in-enterprise-tech-a-look-at-oracle-microsoft-sap-and-fujitsu-50a3a33a3e3c)
		- **Multi-Agent Systems and Collaboration:** There is a growing focus on developing systems where multiple AI agents can collaborate to solve complex problems.
			- Frameworks like [LangGraph](https://ml-science.com/langgraph-multi-agent-workflows/) and [AutoGen](https://ml-science.com/langgraph-multi-agent-workflows/) are designed to facilitate these workflows.
			- [Google has proposed the Agent2Agent (A2A) protocol](https://topbots.com/agentic-ai-applications-and-platforms/) to enable communication between agents from different platforms.
		- **Democratizing Agent Development:** New frameworks and SDKs are making it easier to build and deploy AI agents.
			- The [OpenAI Agents SDK](https://ml-science.com/langgraph-multi-agent-workflows/) is a lightweight Python framework for creating multi-agent workflows.
			- Open-source frameworks like [AutoGPT](https://www.datacamp.com/tutorial/auto-gpt-tutorial-a-beginners-guide) and [SuperAGI](https://www.datacamp.com/tutorial/auto-gpt-tutorial-a-beginners-guide) are lowering the barrier to entry for developers.
		- **The Growing Importance of Voice:** Voice is becoming a primary interface for interacting with AI agents.
			- [Advancements in conversational AI have led to voice agents with lower latency and improved performance.](https://a16z.com/what-to-know-about-the-state-of-voice-ai-in-2025/)

- # Workshop stuff

	- #### Informal
		- Based on the literature proxemics is believed to be relevant in a meeting where subgroups can be instantiated and destroyed as the meeting evolves, and those where people can be invited in from outside the physical bounds of the meeting (informal spaces). Hall is the best source for this work. If it is assumed that people may come and go, and subgroups may be convened then Sermon and Benford are the best references through their work blending real and virtual spaces. This may be more consistent with less organised meetings such as those convened on demand (ad-hoc).

		- ##### Reduction of funding source / liquidity in legacy finance
			- In the current financial system remuneration for labour performed in the  workforce is loaned into the money system, where it’s put to work providing liquidity for creation of more opportunity. This system actually works pretty well. The more of this deferred labour that’s taken out of the legacy system, the less work can be done with what remains. This isn’t to say that Bitcoin will cause a liquidity crisis, but there is possibly a cost if the current trend continues. This isn’t as bad as:

- # Continuity is close on:
	- web 
	  -> webid (identity) 
	  -> solid (social) -> solid lite (lite,modern,working 
	  -> nosdav (add nostr, and mastodon etc.)
-
- Repeat section?
-
- Distributed Identity & Trust----------------------------
- For distributed Web3, and by extension metaverse applications toflourish it is necessary to solve the identificationproblem.[[king1966fisher]] Without a [solution tothis](https://joshgans.medium.com/web3-isnt-going-to-work-without-identification-6aa776d674)bots, scammers, and AI actors will reduce usefulness and usability ofand already quite arcane user experience.
- This chapter is an oddity because most of traditional DID/SSI isn’treally fit for purpose. Distributed self sovereign identity has a greatelevator pitch though. Individuals should be empowered throughtechnology to manage their own data, without manipulation orexploitation by centralised corporate behemoths. In practice it’s astaggeringly complex proposition which increases risk to the individual,decreases convenience, and despite much work, does not even make muchsense in it’s own terms. Webs of trust are viable so this means Nostr,[Marking](https://github.com/project-bitmark/marking/wiki#marking), orpubky which will be discussed, but are early products.

- # Mass Layoff tracker
	- 2023
		- Recent layoffs at [Microsoft](https://www.theverge.com/2023/1/18/23560315/microsoft-job-cuts-layoffs-2023-tech) (10,000 jobs or 5 percent of the workforce),
		- [Amazon](https://www.theverge.com/2023/1/18/23560874/amazon-layoffs-18000-january-november) (18,000 jobs / 6 percent)
		- [Meta](https://www.theverge.com/2022/11/9/23448926/meta-layoffs-2022) (11,000 / 13 percent).
		- [Google lays off hundreds working on its voice-activated assistant | Semafor](https://www.semafor.com/article/01/10/2024/google-lays-off-hundreds-working-on-its-voice-activated-assistant)
		- [Duolingo's AI-driven jobs cuts are a no brainer – here's why | ITPro](https://www.itpro.com/technology/artificial-intelligence/duolingos-ai-driven-jobs-cuts-are-a-no-brainer-heres-why)
	- 2024 so far
		- PayPal cuts 9% of workforce
		- UPS cuts +12,000 roles
		- Microsoft cuts +1,900 roles
		- Twitch cuts 35% of workforce
		- Unity Software 25%
		- Brex 20%
		- Discord 17%
		- Wayfair 13%
		- Riot Games 11%
		- Duolingo 10%
		- Rent the Runway 10%
		- eBay 9%
		- Blackrock 3%
		- Citigroug cuts 20,000 roles
		- Google cuts +1,000
		- Amazon cuts several hundred roles

- # Market analysis [[Update Cycle]]
	 - 3 years old
	- The market penetration analysis for VR which rings most true for us isprovided by Thrive Analytics, and ARtillery Intelligence. Their reportis titled “[VR Usage & Consumer Attitudes, WaveVI](https://artilleryiq.com/reports/vr-usage-consumer-attitudes-wave-vi/)”.In the USA (which is the cohort they surveyed) they found that adoptionof VR headsets is slower than predicted (their work is longitudinal),but steady. Some highlight points are:
		-
	 - 23 percent of U.S. adults own or ithave used VR technology. This is around 4% up from the previous survey in 2020. Frustratingly, and very much in keeping with such industry surveys they conflate ‘own’ with ’have used’ making this data pretty meaningless from an adoption point of view.
		-
	 - there is a skew toward male users of around 10%, and a far larger skew toward younger users, and a bias toward richer households. These are indicative of a technology that’s still early in it’s adoption cycle.
		-
	 - Of the owners of the technology (no indication what percentage this is) they found that around a third used the equipment regularly, but that this retention number was gently falling.
		-
	 - Standalone headsets (Quest 2 and Pico 4) without a cabled connection to a computer are far more popular, and have better user retention. This makes sense as the alternative demands either space or setup time.
		-
	 - Buyers of these more popular headsets are very sensitive to price. Note here that Meta is selling Quest2 at a loss to drive the market. This is unsustainable.
		-
	 - Overall this snapshot of adoption feels pretty neutral, and is being driven by losses to Facebook/Meta share price.
		- Deloitte have just [conducted a UKsurvey](https://www2.deloitte.com/uk/en/pages/technology-media-and-telecommunications/articles/digital-consumer-trends-2022-metaverse.html).This covers “metaverse, virtual reality, and web3 (i.e. blockchain-basedassets like Bitcoin”, and so is perfect for our needs. They have similarresults to the bigger US survey. Their key finding are quoted belowverbatim:
		-
	 - 63% of respondents have heard of the term “metaverse”. However, roughly half of those know nothing about it.
		-
	 - Only 18% of VR headsets are used daily, from the 8% of individuals that claim to have access to one.
		-
	 - Consumers may be wary of web 3. While most people (93%) have heard of cryptocurrency, only one in five (19%) know at least a “fair amount” about it. Knowledge of NFTs is rarer still.
		-
	 - 70% of those who have heard of these assets say they are unlikely to buy them in the next, and cite fraud, scams and a lack of regulation as key concerns.
	- Deloitte feel that “content is key” for virtual reality to be a success,but we would instead argue that applications are key. Nearly half oftheir respondents were simply “not interested in VR”. We think thismatches our longstanding understanding of the reality of the market. Afew vocal proponents of the technology does not necessarily lead to adeveloped and mature mass appeal. Again, we feel that real world usecases will drive adoption over a longer time frame. Virtual meetings donot feel like that application to us.
	- They feel that ‘one metaverse’ would require blockchain/web3 tooling fora common consensus frame, and we agree with this. It seems like a verylong way to that point, and perhaps not worth the effort. They, like us,see compatible silos as being the interim step.
	- They (unusually) have a legal opinion in the text, and this is valuableenough to quote verbatim once again. it“The metaverse amplifies existinglegal issues and raises new ones. Centralised metaverses, such as thosefocused on games, tend to engage consumers in a controlled space andoperate within familiar legal frameworks. For example, users purchasinga virtual accessory are likely to understand its use will be withintightly prescribed parameters. Decentralised metaverses, whichincorporate web3 (such as NFTs) are more challenging, as users mayexpect virtual assets to be portable. However, those assets are governedby inconsistent and often unclear terms, and the lack of technicalstandards can result in limited interoperability between metaverses. Forthe user, social interactions in virtual worlds can feel realistic,inviting scrutiny from policymakers and regulators focused on onlinesafety. An increased legislative focus on children online will alsorequire platforms to assess or verify the age of users. And collectionof personal data – such as eye movement within a VR headset – willrequire informed consent under data protection laws, and a clearunderstanding of who is controlling that data at any given time.Finally, as content is key, clear contractual parameters are required toframe how intellectual property is used, whether user-generated contentis permitted, and how illegal/harmful content is managed. Amid all ofthis, metaverse builders, content owners and brands must ensure theyhave a risk assessment and risk management framework in place to avoidcostly mistakes, both reputational and financial, in an increasinglyregulated space.”
	- [The Drum](https://www.thedrum.com/about-us) is a market awarenesswebsite and[compiled](https://www.thedrum.com/news/2022/08/01/web3-the-numbers-key-metaverse-crypto-and-nft-stats-every-marketer-should-know)the following statistics, which have been linked back to their sourceand annotated for our needs. it
		-
	 - 89.4 million Americans are expected to use virtual reality (VR) in 2022, [according to insiderintelligence](https://www.insiderintelligence.com/content/us-augmented-virtual-reality-users-forecast-2022). That number, according to the same source, is expected to climb to 110.3 million in 2025. As a counter to this only around 16M VR headsets were sold in 2022
		-
	 - 51% of gen Z and 48% of millennials envision doing some of their work in the metaverse in the next two years, according to Microsoft’s Work Trend Index 2022.
		-
	 - 38% of respondents said they would “try extreme sports like skydiving, bungee jumping, or paragliding” in the metaverse according to a recent Statista survey called ‘What things would you do in the metaverse but never in real life?’ Unsettlingly, 18% of respondents said they would “conduct unethical experiments on virtual humans”
		-
	 - 87% of Americans between the ages of 13-56 would be interested in engaging with a virtual experience in the metaverse “that is built around a celebrity they love,” according to new research from UTA and Vox Media
		-
	 - $678bn is forecasted to be the total market valuation of the metaverse by 2030, per Grand View Research. According to the report, that market value was just shy of
		-
	 - $39bn in 2021, giving it a predicted compounded annual growth rate over a 10-year period of around 39
		-
	 - 46% of all people across age groups say that the ability to visualize a virtual product in an IRL context – “such as seeing a digital painting in their home using augmented reality (AR) glasses” – is the primary factor that would motivate them to make a purchase in the metaverse, per a Productsup survey
		-
	 - 24% of US adult internet users say “that lower-priced VR headsets were a very important factor when deciding whether to try using the metaverse,” per a recent Statista survey. On the other hand, 54% say that their workplace using the metaverse would “not \[be\] important at all” in their decision to give the metaverse a try
		-
	 - 15% of gen Zs’ “fun budget” is spent in the metaverse, per a report from Razorfish and Vice Media Group. In five years that number is projected to climb to 20%
		-
	 - Nearly 77% believe that the metaverse “can cause serious harm to modern society,” per a recent survey from customer service platform Tidio. The survey, which received feedback from 1,000 participants, identified three major causes of anxiety related to the metaverse and its potentially negative social impacts: “addiction to a simulated reality” was the number one concern, followed by “privacy issues” and “mental health issues,” which were tied for second
		-
	 - By 2026, about 2 billion people worldwide “will spend at least one hour a day in the metaverse to work, shop, attend school, socialize or consume entertainment,” per McCann Worldgroup. By that same year, the total value of the virtual goods market in the metaverse could be as high as $200bn
		-
	 - NFTs Over $37bn has been spent in NFT marketplaces as of May 2022, per data from Chainalysis. At their current rate, this year’s NFT sales could potentially surpass last year’s, which had a total valuation of around $40bn, according to the data
		-
	 - $91.8m was the sale price of ‘The Merge,’ the most valuable NFT to date. Created by the artist Pak, it sold for its record-breaking value in December 2021
		-
	 - 64% of sports fans are open to the idea of learning more about NFTs and would consider purchasing one in the future, according to the National Research Group. The report also found that 46% of sports fans “would be more likely to attend live sporting events if they were rewarded with a commemorative NFT – for example, if their ticket turned into a digital collectible after the game”
		-
	 - Only 9% of people aged 16-44 own a NFT, and less than half (44%) have purchased or invested in crypto, per a new survey from agency SCS. On the other hand, among the survey’s 600 respondents, 64% were “aware” of the metaverse, and 65% of that subgroup say they are “interested in exploring it further for everything from traveling to new places and playing games to making money and shopping”
		- Polling company IPSOS [haveconducted](https://www.ipsos.com/en/global-advisor-metaverse-extended-reality-may-2022)a global survey for the World Economic Forum. Some highlights are:
		-
	 - “Excitement about extended reality is significantly higher in emerging countries than it is in most high-income countries. In China, India, Peru, Saudi Arabia, and Colombia, more than two-thirds say they have positive feelings about the possibility of engaging with it.”
		-
	 - “Familiarity and favorability toward the new technologies are also significantly higher among younger adults, those with a higher level of education, and men than they are among older adults, those without a college-level education, and women.”
	- Excitingly for our exploration of the topic it can be seen in Figure<a href="#fig:applications" data-reference-type="ref" data-reference="fig:applications">[fig:applications]</a>that education within metaverse spaces is the most anticipatedapplication, and we have seen that the emerging globals markets are themost optimistic about the technology overall. This is highly suggestiveof an opportunity. ![image](./assets/f9a292c872196338d65f46a1b01283fac0691dad.png)

	- ## Yonder: Decentralised Digital Mapping on Nostr
	- Yonder provides another example of applying Nostr's governance principles to create and manage digital objects. As a decentralised mapping platform, Yonder allows users to create, share, and interact with location-based data without relying on centralised services like Google Maps. It incorporates features such as geochat and encrypted location sharing, ensuring users retain full control over their data and interactions.
	- Yonder supports decentralised governance by allowing users to directly influence the map's content and structure without needing approval from a central authority. Disputes and verification issues are handled through decentralised mechanisms, such as proof-of-work or social trust systems, maintaining the platform's integrity while preserving its openness.
		- Decentralised Map Creation: Users contribute to the map without needing permission.
		- Geochat: Enables location-based communication within specific geographic areas.
		- Encrypted Location Sharing: Allows secure and private location sharing.
		- Social Trust and Verification: Leverages social trust mechanisms and potentially proof-of-work systems to ensure data accuracy and reliability.
		- Community Ownership: The map is collectively owned and maintained by the user community.
		- Decentralised Governance: Decisions regarding the platform's development and direction are made through decentralised consensus mechanisms.
		- Transparency and Accountability: All interactions and contributions are recorded on the Nostr network.
		- Resilience and Censorship Resistance: The decentralised nature of the platform provides resistance to censorship and single points of failure.

- # DAO
	- Every project, every bot, can be a DAO
	- [UniSat](https://unisat.io/runes/market?tick=WORK%E2%80%A2IN%E2%80%A2PROGRESS)
	-
-

	- ### Author Background: Sam Hammond
		- **Background:** Senior economist at the Foundation for American Innovation with previous tenures at the Niskanen Institute and Mercatus Center. His expertise is in the intersection of policy and transformative technologies, particularly AI, and how they shape economic and societal structures. Be warned he has strong libertarian leanings and this does colour his thinking.
		- **Contributions:** Hammond's work involves deep dives into how evolving technologies necessitate changes in government and societal frameworks, looking beyond immediate implications to long-term structural shifts. I am fascinated by this so I have added his work into my knowledge graph here.
		- **Future Predictions:** Discusses the looming possibility of AI systems emulating complex human tasks, leading to potential societal and economic upheavals as they integrate deeper into various sectors. This is the concept of the "drop in replacement" for humans in the loop.

		- ### Early signs of job losses
			- [Opinion | Ro Khanna: The Advent of A.I. Doesn’t Have to Mean the Death of Labor The New York Times (nytimes.com)](https://www.nytimes.com/2024/01/04/opinion/artificial-intelligence-truckers-writers.html)
			- Around 1/4 million tech layoffs in 2023, while the top 7 companies doubled their share prices on the back of the AI hype boom. This isn't directly causal, but it is concerning.
			- Nothing is certain, when S4 capital fired half their global workforce, explicitly to replace them with AI, their share price continued to slide.
			- Goldman march replace 300M jobs worldwide 1/4 of work tasks in USA and Europe
			- [1 in 3 Companies Will Replace Employees With AI in 2024 [ResumeBuilder.com](https://www.resumebuilder.com/1-in-3-companies-will-replace-employees-with-ai-in-2024/)
			- 37% of 750 business leaders surveyed said AI has already replaces jobs, and 44% think there will be more in 2024.
			- [The state of AI at work, The Work Innovation Lab (asana.com)](https://asana.com/work-innovation-lab/the-state-of-ai-at-work/)
			- Employees think 29% of their tasks are replaceable by AI. Note this is **task** that sit within roles.
			- 49% of skills won't be relevant within 2 years ed x survey 800 execs. 5 years 56% of entry level roles, 79% said those roles will cease to exist, and 56% of their own roles. 47% said c-suite should be replaced.
			- [Google cuts 12,000 jobs in latest round of big tech layoffs The Verge](https://www.theverge.com/2023/1/20/23563706/google-layoffs-12000-jobs-cut-sundar-pichai) — the latest technology firm to initiate significant layoffs as inflation rises and global markets brace for a downturn. The job losses constitute around 6 percent of Google’s global workforce
				- ![1709138890785.jpeg](assets/1709138890785_1709139885023_0.jpeg){:width 300}

				- ### EDX survey of 800 executives
					- 49% of skills in their workforce would not be relevant by 2025
					- 56% of entry-level knowledge worker jobs would be eliminated due to AI
					- 79% thought AI would transform entry-level roles
					- 56% said their own roles would be partially or completely replaced by AI
					- 47% believed their workforces were not prepared for the future workplace

				- ### McKinsey report "Generative AI in the future of work in America"
					- Automation could take over tasks accounting for 29.5% of hours worked in the US economy by 2030
						- Some sectors, like office support, nearing 40% automation
						- Others, like health professionals and property maintenance, seeing nearly 20% automation
					- Could lead to 12 million fewer jobs

				- ### Goldman Sachs report
					- Automation could replace a quarter of work tasks in the US and Europe, disrupting the equivalent of 300 million jobs
					- Productivity gains from generative AI would raise annual global GDP by 7% over a 10-year period

				- ### Asana study
					- Employees said 29% of their work tasks were replaceable by AI

				- ### ServiceNow report
					- 41% of office workers admit to currently lacking the technical abilities needed to work alongside and use AI systems

	- ## The Art of the Desirable vs. Imposed Futures: Protecting Choice
		- [Helen Wilding](https://www.linkedin.com/in/helen-wilding-griffiths-8885ba45/)'highlights a crucial aspect of the AI revolution often overlooked by the "tech bros exploring the art of the possible": the fact that some people genuinely prefer clearly defined, repetitive roles. It's not for a privileged minority to dictate what constitutes "worthwhile" work and unilaterally reshape the employment landscape, removing options that many find fulfilling. The transition to an AI-driven future must be guided by "[the art of the desirable,](https://tomcheesewright.com/the-art-of-the-probable-the-possible-and-the-desirable)" fostering social consensus and prioritising individual choice, rather than imposing a singular vision of progress.
		- While some reports predict widespread displacement across various skill levels, others like David Autor's work suggest AI could empower workers and create new opportunities. However, even in optimistic scenarios, the *nature* of work will undoubtedly change. This shift necessitates a focus on transitions and training, ensuring that those who prefer repetitive roles aren't simply discarded but are provided with pathways to new forms of employment that align with their preferences and evolving skill sets.
		- The "scorched earth" tactics of major tech companies, prioritising profit through automation and workforce reduction, further complicate this transition. Their pursuit of the "art of the possible" within a for-profit model, as highlighted in our notes on Microsoft, Meta, and Google, risks exacerbating existing inequalities and leaving vulnerable workers behind. The lack of binding legislation, despite the Cambridge Analytica scandal and growing public backlash against AI, underscores the urgency of bottom-up movements like the screen writers guild strike to protect worker rights.
		- The "art of the desirable" framework demands that we consider the needs and desires of *all* workers, not just those who thrive in dynamic, creative environments. This means:
			- **Protecting choice:** Individuals should have the option to pursue roles that suit their preferences, whether those roles involve repetitive tasks or complex problem-solving. The "worker of one" concept championed by Autor should extend to encompass the diversity of human preferences and working styles.
			- **Investing in human-centred training:** Reskilling programmes should not solely focus on technical AI skills but should also cultivate essential human capabilities like communication, empathy, and critical thinking, which remain crucial even in an AI-driven world. This aligns with the re-evaluation of human capital discussed in our notes.
			- **Fostering social dialogue and consensus:** The future of work must be determined through open discussions involving workers, policymakers, and technologists. The "art of the desirable" requires a democratic approach, prioritising social consensus over top-down dictates from Silicon Valley.
			- **Prioritising well-being and fulfilment:** Beyond economic considerations, the new social contract must value the well-being and fulfilment of all workers. This includes ensuring fair wages, reasonable working hours, and access to resources that support mental and emotional health, especially for those navigating challenging transitions.
		-

- # Misc
- [twitter link to the render loading below](https://twitter.com/generalising/status/1772744143476842732)
  {{twitter https://twitter.com/generalising/status/1772744143476842732}} -
- [Generative AI Could Raise Global GDP by 7% (goldmansachs.com)](https://www.goldmansachs.com/intelligence/pages/generative-ai-could-raise-global-gdp-by-7-percent.html)
- [Nobel Prize laureate Chris Pissarides on ChatGPT, AI and the four-day workweek | Fortune Europe](https://fortune.com/europe/2023/12/02/nobel-prize-economist-christopher-pissarides-chatgpt-workplace-automation-one-year-launch/)
- [The Shorter Working Week: a report from Autonomy
	- Autonomy](https://autonomy.work/portfolio/the-shorter-working-week-a-report-from-autonomy-in-collaboration-with-members-of-the-4-day-week-campaign/)
- [Ray Dalio says AI could create a 3-day workweek | Fortune](https://fortune.com/2023/09/18/ray-dalio-ai-3-day-work-week-investing-advice-portfolio-cash-bonds-tech-bridgewater-associates/)
- [JPMorgan CEO Jamie Dimon: AI will lead to 3.5-day workweek | Fortune](https://fortune.com/2023/10/03/jamie-dimon-jpmorgan-chase-ceo-ai-impact-working-week/)
- [IBM CEO: ‘Today’s workforce should prepare to work hand in hand with A.I.' | Fortune](https://fortune.com/2023/04/20/ibm-ceo-work-ai-artificial-intelligence-careers-tech-arvind-krishna/)
- https://slack.com/intl/en-gb/blog/news/the-surprising-connection-between-after-hours-work-and-decreased-productivity
- [CEO effect on firm performance mostly due to chance | ScienceDaily](https://www.sciencedaily.com/releases/2015/10/151022192337.htm)
- [[Layoff tracker and threatened roles]]
-

	- ### Hardware
		- **[Meta Quest 3S](https://www.linezero.com/blog/meta-connect-2024-new-headsets-ai-and-the-future-of-work)**: A more affordable mixed reality headset.
		- **[Orion](https://www.linezero.com/blog/meta-connect-2024-new-headsets-ai-and-the-future-of-work)**: Meta's first true augmented reality glasses.

			- ## Key Findings from earlier in the adoption
				- As of August 2024, 39.4% of Americans aged 18-64 reported using generative AI.
				- 28% of employed respondents said they use generative AI at work.
				- Nearly 1 in 9 workers (10.6%) reported using generative AI daily at work.
				- Adoption has been faster than previous transformative technologies like personal computers and the internet.

				- ### Adoption Across Industries
					- Generative AI usage spans a wide range of occupations:
					- Over 40% adoption in management, business, and computing professions.
					- 20% of "blue-collar" workers (e.g. construction, maintenance, transportation) use generative AI frequently at work.

		- #### **Bitcoin as the Trust and Settlement Layer**
		- The Bitcoin network, secured by its Proof-of-Work consensus mechanism, serves as the immutable, decentralized anchor for the entire system. Its primary role is not for everyday transactions but as the final, censorship-resistant court of settlement.
		- *   **The Lightning Network (Layer 2):** Built atop Bitcoin, the Lightning Network enables near-instant, low-cost payments, making it the ideal rail for the high-frequency microtransactions required by AI agents.

	- ## Agents versus Workflows

		- ### Implementation Patterns
			- Effective deep research systems:
				- Break complex queries into constituent questions
				- Search iteratively, using findings to inform subsequent searches
				- Synthesise information from multiple sources
				- Provide comprehensive analysis rather than simple answers
				- Work asynchronously, allowing users to continue other tasks

	- ### Key Developments
		- **Enterprise Adoption:** Major tech companies are integrating AI agents into their enterprise offerings.
			- [Oracle is rolling out over 50 AI agents in its Fusion Cloud suite.](https://www.alvarezandmarsal.com/insights/agentic-ai-future-automation-and-intelligence)
			- [Microsoft is advancing its Copilot vision with autonomous AI capabilities in Dynamics 365 and the Copilot Studio.](https://medium.com/@arjun.arj.chhabra/the-rise-of-ai-agents-in-enterprise-tech-a-look-at-oracle-microsoft-sap-and-fujitsu-50a3a33a3e3c)
			- [SAP's Joule collaborative AI agents are being integrated into enterprise functions.](https://medium.com/@arjun.arj.chhabra/the-rise-of-ai-agents-in-enterprise-tech-a-look-at-oracle-microsoft-sap-and-fujitsu-50a3a33a3e3c)
			- [Fujitsu's Kozuchi AI Agent is designed for high-level decision-making.](https://medium.com/@arjun.arj.chhabra/the-rise-of-ai-agents-in-enterprise-tech-a-look-at-oracle-microsoft-sap-and-fujitsu-50a3a33a3e3c)
		- **New Models and Enhanced Capabilities:** More powerful and specialized AI models have been released.
			- [Anthropic's Claude 3.5 can perform human-like operations on a computer.](https://medium.com/@arjun.arj.chhabra/the-rise-of-ai-agents-in-enterprise-tech-a-look-at-oracle-microsoft-sap-and-fujitsu-50a3a33a3e3c)
			- [Nvidia's Eureka Agent can autonomously teach robots advanced skills.](https://medium.com/@arjun.arj.chhabra/the-rise-of-ai-agents-in-enterprise-tech-a-look-at-oracle-microsoft-sap-and-fujitsu-50a3a33a3e3c)
		- **Multi-Agent Systems and Collaboration:** There is a growing focus on developing systems where multiple AI agents can collaborate to solve complex problems.
			- Frameworks like [LangGraph](https://ml-science.com/langgraph-multi-agent-workflows/) and [AutoGen](https://ml-science.com/langgraph-multi-agent-workflows/) are designed to facilitate these workflows.
			- [Google has proposed the Agent2Agent (A2A) protocol](https://topbots.com/agentic-ai-applications-and-platforms/) to enable communication between agents from different platforms.
		- **Democratizing Agent Development:** New frameworks and SDKs are making it easier to build and deploy AI agents.
			- The [OpenAI Agents SDK](https://ml-science.com/langgraph-multi-agent-workflows/) is a lightweight Python framework for creating multi-agent workflows.
			- Open-source frameworks like [AutoGPT](https://www.datacamp.com/tutorial/auto-gpt-tutorial-a-beginners-guide) and [SuperAGI](https://www.datacamp.com/tutorial/auto-gpt-tutorial-a-beginners-guide) are lowering the barrier to entry for developers.
		- **The Growing Importance of Voice:** Voice is becoming a primary interface for interacting with AI agents.
			- [Advancements in conversational AI have led to voice agents with lower latency and improved performance.](https://a16z.com/what-to-know-about-the-state-of-voice-ai-in-2025/)

- # Workshop stuff

	- #### Informal
		- Based on the literature proxemics is believed to be relevant in a meeting where subgroups can be instantiated and destroyed as the meeting evolves, and those where people can be invited in from outside the physical bounds of the meeting (informal spaces). Hall is the best source for this work. If it is assumed that people may come and go, and subgroups may be convened then Sermon and Benford are the best references through their work blending real and virtual spaces. This may be more consistent with less organised meetings such as those convened on demand (ad-hoc).

		- ##### Reduction of funding source / liquidity in legacy finance
			- In the current financial system remuneration for labour performed in the  workforce is loaned into the money system, where it’s put to work providing liquidity for creation of more opportunity. This system actually works pretty well. The more of this deferred labour that’s taken out of the legacy system, the less work can be done with what remains. This isn’t to say that Bitcoin will cause a liquidity crisis, but there is possibly a cost if the current trend continues. This isn’t as bad as:

- # Continuity is close on:
	- web 
	  -> webid (identity) 
	  -> solid (social) -> solid lite (lite,modern,working 
	  -> nosdav (add nostr, and mastodon etc.)
-
- Repeat section?
-
- Distributed Identity & Trust----------------------------
- For distributed Web3, and by extension metaverse applications toflourish it is necessary to solve the identificationproblem.[[king1966fisher]] Without a [solution tothis](https://joshgans.medium.com/web3-isnt-going-to-work-without-identification-6aa776d674)bots, scammers, and AI actors will reduce usefulness and usability ofand already quite arcane user experience.
- This chapter is an oddity because most of traditional DID/SSI isn’treally fit for purpose. Distributed self sovereign identity has a greatelevator pitch though. Individuals should be empowered throughtechnology to manage their own data, without manipulation orexploitation by centralised corporate behemoths. In practice it’s astaggeringly complex proposition which increases risk to the individual,decreases convenience, and despite much work, does not even make muchsense in it’s own terms. Webs of trust are viable so this means Nostr,[Marking](https://github.com/project-bitmark/marking/wiki#marking), orpubky which will be discussed, but are early products.

- # Mass Layoff tracker
	- 2023
		- Recent layoffs at [Microsoft](https://www.theverge.com/2023/1/18/23560315/microsoft-job-cuts-layoffs-2023-tech) (10,000 jobs or 5 percent of the workforce),
		- [Amazon](https://www.theverge.com/2023/1/18/23560874/amazon-layoffs-18000-january-november) (18,000 jobs / 6 percent)
		- [Meta](https://www.theverge.com/2022/11/9/23448926/meta-layoffs-2022) (11,000 / 13 percent).
		- [Google lays off hundreds working on its voice-activated assistant | Semafor](https://www.semafor.com/article/01/10/2024/google-lays-off-hundreds-working-on-its-voice-activated-assistant)
		- [Duolingo's AI-driven jobs cuts are a no brainer – here's why | ITPro](https://www.itpro.com/technology/artificial-intelligence/duolingos-ai-driven-jobs-cuts-are-a-no-brainer-heres-why)
	- 2024 so far
		- PayPal cuts 9% of workforce
		- UPS cuts +12,000 roles
		- Microsoft cuts +1,900 roles
		- Twitch cuts 35% of workforce
		- Unity Software 25%
		- Brex 20%
		- Discord 17%
		- Wayfair 13%
		- Riot Games 11%
		- Duolingo 10%
		- Rent the Runway 10%
		- eBay 9%
		- Blackrock 3%
		- Citigroug cuts 20,000 roles
		- Google cuts +1,000
		- Amazon cuts several hundred roles

- # Market analysis [[Update Cycle]]
	 - 3 years old
	- The market penetration analysis for VR which rings most true for us isprovided by Thrive Analytics, and ARtillery Intelligence. Their reportis titled “[VR Usage & Consumer Attitudes, WaveVI](https://artilleryiq.com/reports/vr-usage-consumer-attitudes-wave-vi/)”.In the USA (which is the cohort they surveyed) they found that adoptionof VR headsets is slower than predicted (their work is longitudinal),but steady. Some highlight points are:
		-
	 - 23 percent of U.S. adults own or ithave used VR technology. This is around 4% up from the previous survey in 2020. Frustratingly, and very much in keeping with such industry surveys they conflate ‘own’ with ’have used’ making this data pretty meaningless from an adoption point of view.
		-
	 - there is a skew toward male users of around 10%, and a far larger skew toward younger users, and a bias toward richer households. These are indicative of a technology that’s still early in it’s adoption cycle.
		-
	 - Of the owners of the technology (no indication what percentage this is) they found that around a third used the equipment regularly, but that this retention number was gently falling.
		-
	 - Standalone headsets (Quest 2 and Pico 4) without a cabled connection to a computer are far more popular, and have better user retention. This makes sense as the alternative demands either space or setup time.
		-
	 - Buyers of these more popular headsets are very sensitive to price. Note here that Meta is selling Quest2 at a loss to drive the market. This is unsustainable.
		-
	 - Overall this snapshot of adoption feels pretty neutral, and is being driven by losses to Facebook/Meta share price.
		- Deloitte have just [conducted a UKsurvey](https://www2.deloitte.com/uk/en/pages/technology-media-and-telecommunications/articles/digital-consumer-trends-2022-metaverse.html).This covers “metaverse, virtual reality, and web3 (i.e. blockchain-basedassets like Bitcoin”, and so is perfect for our needs. They have similarresults to the bigger US survey. Their key finding are quoted belowverbatim:
		-
	 - 63% of respondents have heard of the term “metaverse”. However, roughly half of those know nothing about it.
		-
	 - Only 18% of VR headsets are used daily, from the 8% of individuals that claim to have access to one.
		-
	 - Consumers may be wary of web 3. While most people (93%) have heard of cryptocurrency, only one in five (19%) know at least a “fair amount” about it. Knowledge of NFTs is rarer still.
		-
	 - 70% of those who have heard of these assets say they are unlikely to buy them in the next, and cite fraud, scams and a lack of regulation as key concerns.
	- Deloitte feel that “content is key” for virtual reality to be a success,but we would instead argue that applications are key. Nearly half oftheir respondents were simply “not interested in VR”. We think thismatches our longstanding understanding of the reality of the market. Afew vocal proponents of the technology does not necessarily lead to adeveloped and mature mass appeal. Again, we feel that real world usecases will drive adoption over a longer time frame. Virtual meetings donot feel like that application to us.
	- They feel that ‘one metaverse’ would require blockchain/web3 tooling fora common consensus frame, and we agree with this. It seems like a verylong way to that point, and perhaps not worth the effort. They, like us,see compatible silos as being the interim step.
	- They (unusually) have a legal opinion in the text, and this is valuableenough to quote verbatim once again. it“The metaverse amplifies existinglegal issues and raises new ones. Centralised metaverses, such as thosefocused on games, tend to engage consumers in a controlled space andoperate within familiar legal frameworks. For example, users purchasinga virtual accessory are likely to understand its use will be withintightly prescribed parameters. Decentralised metaverses, whichincorporate web3 (such as NFTs) are more challenging, as users mayexpect virtual assets to be portable. However, those assets are governedby inconsistent and often unclear terms, and the lack of technicalstandards can result in limited interoperability between metaverses. Forthe user, social interactions in virtual worlds can feel realistic,inviting scrutiny from policymakers and regulators focused on onlinesafety. An increased legislative focus on children online will alsorequire platforms to assess or verify the age of users. And collectionof personal data – such as eye movement within a VR headset – willrequire informed consent under data protection laws, and a clearunderstanding of who is controlling that data at any given time.Finally, as content is key, clear contractual parameters are required toframe how intellectual property is used, whether user-generated contentis permitted, and how illegal/harmful content is managed. Amid all ofthis, metaverse builders, content owners and brands must ensure theyhave a risk assessment and risk management framework in place to avoidcostly mistakes, both reputational and financial, in an increasinglyregulated space.”
	- [The Drum](https://www.thedrum.com/about-us) is a market awarenesswebsite and[compiled](https://www.thedrum.com/news/2022/08/01/web3-the-numbers-key-metaverse-crypto-and-nft-stats-every-marketer-should-know)the following statistics, which have been linked back to their sourceand annotated for our needs. it
		-
	 - 89.4 million Americans are expected to use virtual reality (VR) in 2022, [according to insiderintelligence](https://www.insiderintelligence.com/content/us-augmented-virtual-reality-users-forecast-2022). That number, according to the same source, is expected to climb to 110.3 million in 2025. As a counter to this only around 16M VR headsets were sold in 2022
		-
	 - 51% of gen Z and 48% of millennials envision doing some of their work in the metaverse in the next two years, according to Microsoft’s Work Trend Index 2022.
		-
	 - 38% of respondents said they would “try extreme sports like skydiving, bungee jumping, or paragliding” in the metaverse according to a recent Statista survey called ‘What things would you do in the metaverse but never in real life?’ Unsettlingly, 18% of respondents said they would “conduct unethical experiments on virtual humans”
		-
	 - 87% of Americans between the ages of 13-56 would be interested in engaging with a virtual experience in the metaverse “that is built around a celebrity they love,” according to new research from UTA and Vox Media
		-
	 - $678bn is forecasted to be the total market valuation of the metaverse by 2030, per Grand View Research. According to the report, that market value was just shy of
		-
	 - $39bn in 2021, giving it a predicted compounded annual growth rate over a 10-year period of around 39
		-
	 - 46% of all people across age groups say that the ability to visualize a virtual product in an IRL context – “such as seeing a digital painting in their home using augmented reality (AR) glasses” – is the primary factor that would motivate them to make a purchase in the metaverse, per a Productsup survey
		-
	 - 24% of US adult internet users say “that lower-priced VR headsets were a very important factor when deciding whether to try using the metaverse,” per a recent Statista survey. On the other hand, 54% say that their workplace using the metaverse would “not \[be\] important at all” in their decision to give the metaverse a try
		-
	 - 15% of gen Zs’ “fun budget” is spent in the metaverse, per a report from Razorfish and Vice Media Group. In five years that number is projected to climb to 20%
		-
	 - Nearly 77% believe that the metaverse “can cause serious harm to modern society,” per a recent survey from customer service platform Tidio. The survey, which received feedback from 1,000 participants, identified three major causes of anxiety related to the metaverse and its potentially negative social impacts: “addiction to a simulated reality” was the number one concern, followed by “privacy issues” and “mental health issues,” which were tied for second
		-
	 - By 2026, about 2 billion people worldwide “will spend at least one hour a day in the metaverse to work, shop, attend school, socialize or consume entertainment,” per McCann Worldgroup. By that same year, the total value of the virtual goods market in the metaverse could be as high as $200bn
		-
	 - NFTs Over $37bn has been spent in NFT marketplaces as of May 2022, per data from Chainalysis. At their current rate, this year’s NFT sales could potentially surpass last year’s, which had a total valuation of around $40bn, according to the data
		-
	 - $91.8m was the sale price of ‘The Merge,’ the most valuable NFT to date. Created by the artist Pak, it sold for its record-breaking value in December 2021
		-
	 - 64% of sports fans are open to the idea of learning more about NFTs and would consider purchasing one in the future, according to the National Research Group. The report also found that 46% of sports fans “would be more likely to attend live sporting events if they were rewarded with a commemorative NFT – for example, if their ticket turned into a digital collectible after the game”
		-
	 - Only 9% of people aged 16-44 own a NFT, and less than half (44%) have purchased or invested in crypto, per a new survey from agency SCS. On the other hand, among the survey’s 600 respondents, 64% were “aware” of the metaverse, and 65% of that subgroup say they are “interested in exploring it further for everything from traveling to new places and playing games to making money and shopping”
		- Polling company IPSOS [haveconducted](https://www.ipsos.com/en/global-advisor-metaverse-extended-reality-may-2022)a global survey for the World Economic Forum. Some highlights are:
		-
	 - “Excitement about extended reality is significantly higher in emerging countries than it is in most high-income countries. In China, India, Peru, Saudi Arabia, and Colombia, more than two-thirds say they have positive feelings about the possibility of engaging with it.”
		-
	 - “Familiarity and favorability toward the new technologies are also significantly higher among younger adults, those with a higher level of education, and men than they are among older adults, those without a college-level education, and women.”
	- Excitingly for our exploration of the topic it can be seen in Figure<a href="#fig:applications" data-reference-type="ref" data-reference="fig:applications">[fig:applications]</a>that education within metaverse spaces is the most anticipatedapplication, and we have seen that the emerging globals markets are themost optimistic about the technology overall. This is highly suggestiveof an opportunity. ![image](./assets/f9a292c872196338d65f46a1b01283fac0691dad.png)

	- ## Yonder: Decentralised Digital Mapping on Nostr
	- Yonder provides another example of applying Nostr's governance principles to create and manage digital objects. As a decentralised mapping platform, Yonder allows users to create, share, and interact with location-based data without relying on centralised services like Google Maps. It incorporates features such as geochat and encrypted location sharing, ensuring users retain full control over their data and interactions.
	- Yonder supports decentralised governance by allowing users to directly influence the map's content and structure without needing approval from a central authority. Disputes and verification issues are handled through decentralised mechanisms, such as proof-of-work or social trust systems, maintaining the platform's integrity while preserving its openness.
		- Decentralised Map Creation: Users contribute to the map without needing permission.
		- Geochat: Enables location-based communication within specific geographic areas.
		- Encrypted Location Sharing: Allows secure and private location sharing.
		- Social Trust and Verification: Leverages social trust mechanisms and potentially proof-of-work systems to ensure data accuracy and reliability.
		- Community Ownership: The map is collectively owned and maintained by the user community.
		- Decentralised Governance: Decisions regarding the platform's development and direction are made through decentralised consensus mechanisms.
		- Transparency and Accountability: All interactions and contributions are recorded on the Nostr network.
		- Resilience and Censorship Resistance: The decentralised nature of the platform provides resistance to censorship and single points of failure.

- # DAO
	- Every project, every bot, can be a DAO
	- [UniSat](https://unisat.io/runes/market?tick=WORK%E2%80%A2IN%E2%80%A2PROGRESS)
	-
-

	- ### Author Background: Sam Hammond
		- **Background:** Senior economist at the Foundation for American Innovation with previous tenures at the Niskanen Institute and Mercatus Center. His expertise is in the intersection of policy and transformative technologies, particularly AI, and how they shape economic and societal structures. Be warned he has strong libertarian leanings and this does colour his thinking.
		- **Contributions:** Hammond's work involves deep dives into how evolving technologies necessitate changes in government and societal frameworks, looking beyond immediate implications to long-term structural shifts. I am fascinated by this so I have added his work into my knowledge graph here.
		- **Future Predictions:** Discusses the looming possibility of AI systems emulating complex human tasks, leading to potential societal and economic upheavals as they integrate deeper into various sectors. This is the concept of the "drop in replacement" for humans in the loop.

		- ### Early signs of job losses
			- [Opinion | Ro Khanna: The Advent of A.I. Doesn’t Have to Mean the Death of Labor The New York Times (nytimes.com)](https://www.nytimes.com/2024/01/04/opinion/artificial-intelligence-truckers-writers.html)
			- Around 1/4 million tech layoffs in 2023, while the top 7 companies doubled their share prices on the back of the AI hype boom. This isn't directly causal, but it is concerning.
			- Nothing is certain, when S4 capital fired half their global workforce, explicitly to replace them with AI, their share price continued to slide.
			- Goldman march replace 300M jobs worldwide 1/4 of work tasks in USA and Europe
			- [1 in 3 Companies Will Replace Employees With AI in 2024 [ResumeBuilder.com](https://www.resumebuilder.com/1-in-3-companies-will-replace-employees-with-ai-in-2024/)
			- 37% of 750 business leaders surveyed said AI has already replaces jobs, and 44% think there will be more in 2024.
			- [The state of AI at work, The Work Innovation Lab (asana.com)](https://asana.com/work-innovation-lab/the-state-of-ai-at-work/)
			- Employees think 29% of their tasks are replaceable by AI. Note this is **task** that sit within roles.
			- 49% of skills won't be relevant within 2 years ed x survey 800 execs. 5 years 56% of entry level roles, 79% said those roles will cease to exist, and 56% of their own roles. 47% said c-suite should be replaced.
			- [Google cuts 12,000 jobs in latest round of big tech layoffs The Verge](https://www.theverge.com/2023/1/20/23563706/google-layoffs-12000-jobs-cut-sundar-pichai) — the latest technology firm to initiate significant layoffs as inflation rises and global markets brace for a downturn. The job losses constitute around 6 percent of Google’s global workforce
				- ![1709138890785.jpeg](assets/1709138890785_1709139885023_0.jpeg){:width 300}

				- ### EDX survey of 800 executives
					- 49% of skills in their workforce would not be relevant by 2025
					- 56% of entry-level knowledge worker jobs would be eliminated due to AI
					- 79% thought AI would transform entry-level roles
					- 56% said their own roles would be partially or completely replaced by AI
					- 47% believed their workforces were not prepared for the future workplace

				- ### McKinsey report "Generative AI in the future of work in America"
					- Automation could take over tasks accounting for 29.5% of hours worked in the US economy by 2030
						- Some sectors, like office support, nearing 40% automation
						- Others, like health professionals and property maintenance, seeing nearly 20% automation
					- Could lead to 12 million fewer jobs

				- ### Goldman Sachs report
					- Automation could replace a quarter of work tasks in the US and Europe, disrupting the equivalent of 300 million jobs
					- Productivity gains from generative AI would raise annual global GDP by 7% over a 10-year period

				- ### Asana study
					- Employees said 29% of their work tasks were replaceable by AI

				- ### ServiceNow report
					- 41% of office workers admit to currently lacking the technical abilities needed to work alongside and use AI systems

	- ## The Art of the Desirable vs. Imposed Futures: Protecting Choice
		- [Helen Wilding](https://www.linkedin.com/in/helen-wilding-griffiths-8885ba45/)'highlights a crucial aspect of the AI revolution often overlooked by the "tech bros exploring the art of the possible": the fact that some people genuinely prefer clearly defined, repetitive roles. It's not for a privileged minority to dictate what constitutes "worthwhile" work and unilaterally reshape the employment landscape, removing options that many find fulfilling. The transition to an AI-driven future must be guided by "[the art of the desirable,](https://tomcheesewright.com/the-art-of-the-probable-the-possible-and-the-desirable)" fostering social consensus and prioritising individual choice, rather than imposing a singular vision of progress.
		- While some reports predict widespread displacement across various skill levels, others like David Autor's work suggest AI could empower workers and create new opportunities. However, even in optimistic scenarios, the *nature* of work will undoubtedly change. This shift necessitates a focus on transitions and training, ensuring that those who prefer repetitive roles aren't simply discarded but are provided with pathways to new forms of employment that align with their preferences and evolving skill sets.
		- The "scorched earth" tactics of major tech companies, prioritising profit through automation and workforce reduction, further complicate this transition. Their pursuit of the "art of the possible" within a for-profit model, as highlighted in our notes on Microsoft, Meta, and Google, risks exacerbating existing inequalities and leaving vulnerable workers behind. The lack of binding legislation, despite the Cambridge Analytica scandal and growing public backlash against AI, underscores the urgency of bottom-up movements like the screen writers guild strike to protect worker rights.
		- The "art of the desirable" framework demands that we consider the needs and desires of *all* workers, not just those who thrive in dynamic, creative environments. This means:
			- **Protecting choice:** Individuals should have the option to pursue roles that suit their preferences, whether those roles involve repetitive tasks or complex problem-solving. The "worker of one" concept championed by Autor should extend to encompass the diversity of human preferences and working styles.
			- **Investing in human-centred training:** Reskilling programmes should not solely focus on technical AI skills but should also cultivate essential human capabilities like communication, empathy, and critical thinking, which remain crucial even in an AI-driven world. This aligns with the re-evaluation of human capital discussed in our notes.
			- **Fostering social dialogue and consensus:** The future of work must be determined through open discussions involving workers, policymakers, and technologists. The "art of the desirable" requires a democratic approach, prioritising social consensus over top-down dictates from Silicon Valley.
			- **Prioritising well-being and fulfilment:** Beyond economic considerations, the new social contract must value the well-being and fulfilment of all workers. This includes ensuring fair wages, reasonable working hours, and access to resources that support mental and emotional health, especially for those navigating challenging transitions.
		-

- # Misc
- [twitter link to the render loading below](https://twitter.com/generalising/status/1772744143476842732)
  {{twitter https://twitter.com/generalising/status/1772744143476842732}} -
- [Generative AI Could Raise Global GDP by 7% (goldmansachs.com)](https://www.goldmansachs.com/intelligence/pages/generative-ai-could-raise-global-gdp-by-7-percent.html)
- [Nobel Prize laureate Chris Pissarides on ChatGPT, AI and the four-day workweek | Fortune Europe](https://fortune.com/europe/2023/12/02/nobel-prize-economist-christopher-pissarides-chatgpt-workplace-automation-one-year-launch/)
- [The Shorter Working Week: a report from Autonomy
	- Autonomy](https://autonomy.work/portfolio/the-shorter-working-week-a-report-from-autonomy-in-collaboration-with-members-of-the-4-day-week-campaign/)
- [Ray Dalio says AI could create a 3-day workweek | Fortune](https://fortune.com/2023/09/18/ray-dalio-ai-3-day-work-week-investing-advice-portfolio-cash-bonds-tech-bridgewater-associates/)
- [JPMorgan CEO Jamie Dimon: AI will lead to 3.5-day workweek | Fortune](https://fortune.com/2023/10/03/jamie-dimon-jpmorgan-chase-ceo-ai-impact-working-week/)
- [IBM CEO: ‘Today’s workforce should prepare to work hand in hand with A.I.' | Fortune](https://fortune.com/2023/04/20/ibm-ceo-work-ai-artificial-intelligence-careers-tech-arvind-krishna/)
- https://slack.com/intl/en-gb/blog/news/the-surprising-connection-between-after-hours-work-and-decreased-productivity
- [CEO effect on firm performance mostly due to chance | ScienceDaily](https://www.sciencedaily.com/releases/2015/10/151022192337.htm)
- [[Layoff tracker and threatened roles]]
-

		- #### **Bitcoin as the Trust and Settlement Layer**
		- The Bitcoin network, secured by its Proof-of-Work consensus mechanism, serves as the immutable, decentralized anchor for the entire system. Its primary role is not for everyday transactions but as the final, censorship-resistant court of settlement.
		- *   **The Lightning Network (Layer 2):** Built atop Bitcoin, the Lightning Network enables near-instant, low-cost payments, making it the ideal rail for the high-frequency microtransactions required by AI agents.

	- ## Agents versus Workflows

		- ### Decision Framework
			- Choose workflows when:
				- You're replacing comprehensive job functions
				- Flexibility and adaptation are essential

- # Workshop stuff

		- #### ION
		- While working at Microsoft on ION Daniel Buchner (now working at Square)or Henry Tsai [said thefollowing](https://github.com/decentralized-identity/ion/blob/master/docs/Q-and-A.md),which is worth quoting verbatim:
				- The system must be well-tested, and proven secure against attack over a long enough duration to be confident in.
				- The system must produce a singular, independently verifiable record that is as immutable as possible, so that reversing the record the system produces is infeasible.
		- On the surface then it might seem that the choice is Bitcoin again, and indeed that the open source Microsoft ION stack is a natural choice, but it’s complex to run, the interactions with the blockchain have a cost implication which can’t be surmounted without every user owning some Bitcoin, and as we have seen, there is no formal validation of this system. In addition (in the current implementation) an identity proof does not need to be published to be valid, just timestamped. In this way an identity can be stolen and used years later to claim later chains of proof. It seems that it might be somewhat useful ‘at scale’ and is worth additional monitoring and investigation, especially given it’s integration into TBD
		- Web5.

	- ## My research as a diagram
		- ((66314b8e-513e-45a6-80e7-493933e46e9e))
	- Click the cog to remove the settings panel. This is very much a work in progress and will often not be running.
		- https://www.visionflow.info

	- ### Author Background: Sam Hammond
		- **Background:** Senior economist at the Foundation for American Innovation with previous tenures at the Niskanen Institute and Mercatus Center. His expertise is in the intersection of policy and transformative technologies, particularly AI, and how they shape economic and societal structures. Be warned he has strong libertarian leanings and this does colour his thinking.
		- **Contributions:** Hammond's work involves deep dives into how evolving technologies necessitate changes in government and societal frameworks, looking beyond immediate implications to long-term structural shifts. I am fascinated by this so I have added his work into my knowledge graph here.
		- **Future Predictions:** Discusses the looming possibility of AI systems emulating complex human tasks, leading to potential societal and economic upheavals as they integrate deeper into various sectors. This is the concept of the "drop in replacement" for humans in the loop.

				- ### EDX survey of 800 executives
					- 56% said their own roles would be partially or completely replaced by AI
					- 47% believed their workforces were not prepared for the future workplace

	- ## AI in [[Education and AI]]
		- I think the Rabbit is something I would buy for kids?! (lol, that didn't work out)

	- ### Executive Summary
		- The Bitcoin network, secured by its Proof-of-Work consensus mechanism, serves as the immutable, decentralized anchor for the entire system. Its primary role is not for everyday transactions but as the final, censorship-resistant court of settlement.
		- *   **The Lightning Network (Layer 2):** Built atop Bitcoin, the Lightning Network enables near-instant, low-cost payments, making it the ideal rail for the high-frequency microtransactions required by AI agents.

	- ## Agents versus Workflows

		- ### Decision Framework
			- Choose workflows when:
				- You're replacing comprehensive job functions
				- Flexibility and adaptation are essential

- # Workshop stuff

				- ### LinkedIn survey of UK workers

- # May Event workflow with 3D models and VTON try it on.
			  id:: 6633f4c0-358f-44cf-bf05-d43c75febe36
		- DONE Backup the working docker
		  collapsed:: true
		  CLOCK: [2024-05-06 Mon 09:23:58]--[2024-05-06 Mon 09:23:58] =>  00:00:00
		  :END:
			  CLOCK: [2024-05-06 Mon 10:23:31]--[2024-05-06 Mon 10:23:31] =>  00:00:00

- ## The Gap
  id:: 659fe0be-a52a-42ef-8f50-73695a802945
	- McKinsey identified in 2022 that companies with a 5 year AI roadmap would likely pull ahead. [They called this "The Gap"](https://www.mckinsey.com/capabilities/quantumblack/our-insights/the-state-of-ai-in-2022-and-a-half-decade-in-review#gap)
			- Create a culture of exploration and openness around AI use. Encourage employees to share how they are using AI to assist their work.
			- Completely rethink and redesign work processes around AI capabilities, rather than just using AI to automate existing processes. Cut down the org chart and regrow it for AI.
		  | Ukraine          | 46,351 BTC    | $4.53 billion          | Acquired through donations and government initiatives.                  |
	- ![e74d788c-fa31-491a-be03-e3033e759e24.png](assets/e74d788c-fa31-491a-be03-e3033e759e24_1717174484465_0.png){:width 500}
	- ![images.jpeg](assets/images_1723915016591_0.jpeg){:width 400}

- ## The Gap
  id:: 659fe0be-a52a-42ef-8f50-73695a802945
	- McKinsey identified in 2022 that companies with a 5 year AI roadmap would likely pull ahead. [They called this "The Gap"](https://www.mckinsey.com/capabilities/quantumblack/our-insights/the-state-of-ai-in-2022-and-a-half-decade-in-review#gap)
			- Create a culture of exploration and openness around AI use. Encourage employees to share how they are using AI to assist their work.
			- Completely rethink and redesign work processes around AI capabilities, rather than just using AI to automate existing processes. Cut down the org chart and regrow it for AI.
		  | Ukraine          | 46,351 BTC    | $4.53 billion          | Acquired through donations and government initiatives.                  |
		- According to [recent data](https://plasbit.com/blog/bitcoin-adoption-by-country), the top countries for Bitcoin adoption in 2024 are:
			- India: 75 million users
			- China: 38 million users
		- Stablecoin usage has shown strong growth among retail and professional-sized transfers in low-income and lower-middle-income countries, particularly in Sub-Saharan Africa and Latin America[4](https://www.chainalysis.com/blog/2024-global-crypto-adoption-index/)
	- ![e74d788c-fa31-491a-be03-e3033e759e24.png](assets/e74d788c-fa31-491a-be03-e3033e759e24_1717174484465_0.png){:width 500}
	- ![images.jpeg](assets/images_1723915016591_0.jpeg){:width 400}

- ## Recent Projects
	- Click [[Recent Projects]] to see some more recent work
		- [twitter link to the render loading below](https://twitter.com/bentossell/status/1758235873433243950)
		  {{twitter https://twitter.com/bentossell/status/1758235873433243950}}
-

- #### AI economic actors in mixed reality
	- AI actors can now be trusted visually.[@nightingale2022ai] We have some thinking on this which links the external web to our proposed metaverse. There is work in the community working on economically empowered bots which leverage Nostr and RGB to perform functions within our metaverse, and outside in the WWW, as well as interacting economically through trusted cryptography with other bots, anywhere, and human participants, anywhere. This is incredibly powerful and is assured by the Bitcoin security model. Imagine being able to interact with a bot flower seller representing all the real world florists it had found. In the metaverse you could handle the flowers and take advice and guidance from the bot agent, then it would be able to take your money to buy you flowers to send to a real world address, and later find you to tell you when it’s delivered. These possibilities are endless. The AI chat element, the AI translation of images on websites to 3D assets in the Metaverse are difficult but possible challenges, but the secure movement of money from the local context in the metaverse to the real world is within reach using these bots, and they are completely autonomous and distributed.

- #### 4.12.4 Worker Surveillance and Remote Work
  Furthermore, the issue of worker surveillance, especially with the rise of remote work regimes, has garnered the attention of various entities, including the White House. This is due to concerns over automated systems that employers are using to monitor their remote workers, highlighting a less benign context of surveillance.

- ## Recent Projects
	- Click [[Recent Projects]] to see some more recent work

- #### AI economic actors in mixed reality
	- AI actors can now be trusted visually.[@nightingale2022ai] We have some thinking on this which links the external web to our proposed metaverse. There is work in the community working on economically empowered bots which leverage Nostr and RGB to perform functions within our metaverse, and outside in the WWW, as well as interacting economically through trusted cryptography with other bots, anywhere, and human participants, anywhere. This is incredibly powerful and is assured by the Bitcoin security model. Imagine being able to interact with a bot flower seller representing all the real world florists it had found. In the metaverse you could handle the flowers and take advice and guidance from the bot agent, then it would be able to take your money to buy you flowers to send to a real world address, and later find you to tell you when it’s delivered. These possibilities are endless. The AI chat element, the AI translation of images on websites to 3D assets in the Metaverse are difficult but possible challenges, but the secure movement of money from the local context in the metaverse to the real world is within reach using these bots, and they are completely autonomous and distributed.

- #### 4.12.4 Worker Surveillance and Remote Work
  Furthermore, the issue of worker surveillance, especially with the rise of remote work regimes, has garnered the attention of various entities, including the White House. This is due to concerns over automated systems that employers are using to monitor their remote workers, highlighting a less benign context of surveillance.

- ## Recent Projects
	- Click [[Recent Projects]] to see some more recent work


## Academic Context

- Proof of Work (PoW) is a consensus mechanism originally conceptualised in 1993 to combat email spam and later adapted to secure blockchain networks by requiring participants (miners) to expend computational effort to validate transactions.
  - It underpins the security and decentralisation of early and prominent blockchains, most notably Bitcoin.
  - PoW’s academic foundations lie in cryptographic puzzles and distributed consensus, ensuring that altering transaction history demands prohibitive computational resources.
  - Key developments include its role in pioneering decentralised trust and its influence on subsequent consensus algorithms like Proof of Stake (PoS).

## Current Landscape (2025)

- PoW remains the consensus mechanism securing Bitcoin and several other cryptocurrencies such as Litecoin and Monero, though Ethereum transitioned away from PoW to PoS in 2022 to address energy and scalability concerns.
  - Miners compete by solving complex mathematical puzzles using specialised hardware, earning block rewards and transaction fees upon success.
  - Despite its robustness, PoW is criticised for high energy consumption and limited transaction throughput, which has led to reduced adoption in newer blockchain projects.
- Notable organisations continue to support PoW networks, including mining pools and hardware manufacturers.
- In the UK, PoW mining activity is present but comparatively modest due to energy costs and regulatory scrutiny.
- Technical limitations include scalability challenges and environmental impact, prompting ongoing research into hybrid and alternative consensus mechanisms.
- Standards and frameworks for PoW are evolving, with regulatory bodies like the US SEC clarifying that certain PoW mining activities do not constitute securities offerings, influencing global compliance approaches.

## Research & Literature

- Seminal and recent academic works include:
  - Dwork, C., & Naor, M. (1993). "Pricing via Processing or Combatting Junk Mail." *Advances in Cryptology — CRYPTO '92*, Lecture Notes in Computer Science, vol 740. Springer. DOI: 10.1007/3-540-48071-4_27
  - Nakamoto, S. (2008). "Bitcoin: A Peer-to-Peer Electronic Cash System." (Original whitepaper)
  - Bonneau, J., Miller, A., Clark, J., Narayanan, A., Kroll, J. A., & Felten, E. W. (2015). "SoK: Research Perspectives and Challenges for Bitcoin and Cryptocurrencies." *IEEE Symposium on Security and Privacy*. DOI: 10.1109/SP.2015.14
  - Recent regulatory analysis: SEC Division of Corporation Finance (2025). "Statement on Certain Proof-of-Work Mining Activities." [Online]
- Ongoing research explores energy-efficient PoW variants, hybrid consensus models, and the socio-economic impacts of mining centralisation.

## UK Context

- The UK has contributed to blockchain research and development, with academic institutions in Manchester and Leeds exploring distributed ledger technologies and consensus mechanisms.
- North England innovation hubs, including Sheffield and Newcastle, host startups and research groups investigating blockchain scalability and sustainability.
- Regional case studies highlight efforts to integrate renewable energy sources with PoW mining operations to mitigate environmental concerns.
- The UK government and regulatory bodies maintain a cautious but engaged stance on PoW cryptocurrencies, balancing innovation with environmental and financial risk considerations.

## Future Directions

- Emerging trends include the development of more energy-efficient PoW algorithms and hybrid consensus mechanisms combining PoW with PoS or other protocols.
- Anticipated challenges involve addressing the environmental footprint, improving scalability without compromising security, and navigating evolving regulatory landscapes.
- Research priorities focus on sustainable mining practices, decentralisation metrics, and enhancing interoperability between PoW and alternative consensus blockchains.
- One might say the future of PoW is less about brute force and more about clever resourcefulness—miners may soon need to be as green as they are gritty.

## References

1. Dwork, C., & Naor, M. (1993). Pricing via Processing or Combatting Junk Mail. *Advances in Cryptology — CRYPTO '92*, Lecture Notes in Computer Science, vol 740. Springer. DOI: 10.1007/3-540-48071-4_27  
2. Nakamoto, S. (2008). Bitcoin: A Peer-to-Peer Electronic Cash System.  
3. Bonneau, J., Miller, A., Clark, J., Narayanan, A., Kroll, J. A., & Felten, E. W. (2015). SoK: Research Perspectives and Challenges for Bitcoin and Cryptocurrencies. *IEEE Symposium on Security and Privacy*. DOI: 10.1109/SP.2015.14  
4. SEC Division of Corporation Finance (2025). Statement on Certain Proof-of-Work Mining Activities. U.S. Securities and Exchange Commission.  
5. Trezor. What is Proof of Work? (2025).  
6. Fidelity. Proof of Stake vs Proof of Work: What You Need to Know. (2025).


## Metadata


- **Migration Status**: Ontology block enriched on 2025-11-12
- **Last Updated**: 2025-11-12
- **Review Status**: Comprehensive editorial review
- **Verification**: Academic sources verified
- **Regional Context**: UK/North England where applicable


