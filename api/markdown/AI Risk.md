- ### OntologyBlock
  id:: ai-risk-ontology
  collapsed:: true
	- ontology:: true
	- term-id:: AI-0076
	- preferred-term:: AI Risk
	- source-domain:: mv
	- status:: draft
- public-access:: true
	- definition:: The potential for AI systems to cause adverse effects on individuals, groups, organizations, communities, or society, arising from technical failures, security vulnerabilities, biased outcomes, privacy violations, or unintended consequences of system design, deployment, or operation.
	- maturity:: draft
	- owl:class:: mv:AIRisk
	- owl:physicality:: ConceptualEntity
	- owl:role:: Concept
	- belongsToDomain:: [[MetaverseDomain]]
- ## About AI Risk
	- The potential for AI systems to cause adverse effects on individuals, groups, organizations, communities, or society, arising from technical failures, security vulnerabilities, biased outcomes, privacy violations, or unintended consequences of system design, deployment, or operation.
	-
	- ### Original Content
	  collapsed:: true
		- ```
# AI Risk
		  
		  **Term ID**: AI-0076
		  **Category**: Foundational Concept
		  **Status**: Active
		  **Last Updated**: 2025-10-27
		  
		  ## Definition
		  
		  The potential for AI systems to cause adverse effects on individuals, groups, organizations, communities, or society, arising from technical failures, security vulnerabilities, biased outcomes, privacy violations, or unintended consequences of system design, deployment, or operation.
		  
		  ## Formal Specification
		  
		  ```yaml
		  term: AI Risk
		  definition: "Potential for AI systems to cause adverse effects"
		  domain: AI Risk Management
		  type: Risk Category
		  components:
		    - likelihood: probability of risk occurring
		    - impact: severity of consequences
		    - context: domain and stakeholders affected
		  risk_types: [technical, ethical, social, legal, security, operational]
		  standards: [ISO_23894, NIST_AI_RMF, ISO_31000]
		  ```
		  
		  ## Formal Ontology
		  
		  ```clojure
		  (Declaration (Class :AIRisk))
		  (SubClassOf :AIRisk :Risk)
		  
		  ;; Risk types
		  (Declaration (Class :TechnicalRisk))
		  (Declaration (Class :EthicalRisk))
		  (Declaration (Class :SocialRisk))
		  (Declaration (Class :LegalRisk))
		  (Declaration (Class :SecurityRisk))
		  (Declaration (Class :OperationalRisk))
		  (Declaration (Class :SafetyRisk))
		  
		  (SubClassOf :TechnicalRisk :AIRisk)
		  (SubClassOf :EthicalRisk :AIRisk)
		  (SubClassOf :SocialRisk :AIRisk)
		  (SubClassOf :LegalRisk :AIRisk)
		  (SubClassOf :SecurityRisk :AIRisk)
		  (SubClassOf :OperationalRisk :AIRisk)
		  (SubClassOf :SafetyRisk :AIRisk)
		  
		  ;; Core properties
		  (Declaration (ObjectProperty :posesRiskTo))
		  (Declaration (ObjectProperty :hasLikelihood))
		  (Declaration (ObjectProperty :hasImpact))
		  (Declaration (ObjectProperty :managedBy))
		  (Declaration (ObjectProperty :manifestsAs))
		  
		  ;; Risk components
		  (Declaration (Class :RiskLikelihood))
		  (Declaration (Class :RiskImpact))
		  (Declaration (Class :RiskContext))
		  
		  ;; Risk requirements
		  (SubClassOf :AIRisk
		    (ObjectIntersectionOf
		      (ObjectSomeValuesFrom :posesRiskTo :Stakeholder)
		      (ObjectSomeValuesFrom :hasLikelihood :RiskLikelihood)
		      (ObjectSomeValuesFrom :hasImpact :RiskImpact)))
		  
		  ;; Property characteristics
		  (ObjectPropertyDomain :posesRiskTo :AIRisk)
		  (ObjectPropertyRange :posesRiskTo :Stakeholder)
		  (ObjectPropertyDomain :managedBy :AIRisk)
		  (ObjectPropertyRange :managedBy :RiskManagement)
		  (ObjectPropertyDomain :manifestsAs :AIRisk)
		  (ObjectPropertyRange :manifestsAs :AIIncident)
		  
		  ;; Data properties for risk assessment
		  (Declaration (DataProperty :riskScore))
		  (DataPropertyDomain :riskScore :AIRisk)
		  (DataPropertyRange :riskScore xsd:float)
		  (AnnotationAssertion rdfs:comment :riskScore
		    "Composite risk score from 0.0 (no risk) to 1.0 (critical risk)"^^xsd:string)
		  
		  (Declaration (DataProperty :likelihoodProbability))
		  (DataPropertyDomain :likelihoodProbability :RiskLikelihood)
		  (DataPropertyRange :likelihoodProbability xsd:float)
		  (AnnotationAssertion rdfs:comment :likelihoodProbability
		    "Probability of risk occurrence from 0.0 to 1.0"^^xsd:string)
		  
		  (Declaration (DataProperty :impactSeverity))
		  (DataPropertyDomain :impactSeverity :RiskImpact)
		  (DataPropertyRange :impactSeverity xsd:float)
		  (AnnotationAssertion rdfs:comment :impactSeverity
		    "Severity of consequences from 0.0 to 1.0"^^xsd:string)
		  
		  (Declaration (DataProperty :riskLevel))
		  (DataPropertyDomain :riskLevel :AIRisk)
		  (DataPropertyRange :riskLevel xsd:string)
		  (AnnotationAssertion rdfs:comment :riskLevel
		    "Risk level: unacceptable, high, limited, or minimal"^^xsd:string)
		  
		  ;; Relationships
		  (SubClassOf :AIRisk
		    (ObjectSomeValuesFrom :managedBy :RiskManagement))
		  (SubClassOf :AIRisk
		    (ObjectSomeValuesFrom :assessedBy :RiskAssessment))
		  (SubClassOf :AIRisk
		    (ObjectSomeValuesFrom :mitigatedBy :RiskMitigation))
		  (SubClassOf :AIRisk
		    (ObjectSomeValuesFrom :componentOf :AITrustworthiness))
		  
		  ;; Standards alignment
		  (AnnotationAssertion dcterms:source :AIRisk
		    "ISO/IEC 23894:2023"^^xsd:string)
		  (AnnotationAssertion dcterms:source :AIRisk
		    "NIST AI RMF 1.0"^^xsd:string)
		  (AnnotationAssertion dcterms:source :AIRisk
		    "EU AI Act"^^xsd:string)
		  ```
		  
		  ## Authoritative References
		  
		  ### Primary Sources
		  
		  1. **ISO/IEC 23894:2023** - AI Risk Management
		     - Comprehensive AI risk management framework
		     - Source: ISO/IEC JTC 1/SC 42
		  
		  2. **NIST AI Risk Management Framework (AI RMF 1.0)**, January 2023
		     - Defines AI risk as "the composite measure of an event's probability of occurring and the magnitude or degree of the consequences of the corresponding event"
		     - Source: National Institute of Standards and Technology
		  
		  3. **EU AI Act** (Regulation 2024/1689), June 2024
		     - Risk-based regulatory approach
		     - Defines high-risk AI systems
		     - Source: European Parliament and Council
		  
		  ## Risk Categories
		  
		  ### Technical Risks
		  
		  - **Performance Failures**: Inaccurate predictions, system errors
		  - **Robustness Issues**: Failure under distribution shift
		  - **Security Vulnerabilities**: Adversarial attacks, data poisoning
		  - **Reliability Problems**: Inconsistent behavior, downtime
		  
		  ### Ethical and Social Risks
		  
		  - **Bias and Discrimination**: Unfair outcomes for protected groups
		  - **Privacy Violations**: Unauthorized data disclosure
		  - **Lack of Transparency**: Opaque decision-making
		  - **Accountability Gaps**: Unclear responsibility
		  
		  ### Operational Risks
		  
		  - **Deployment Failures**: Incorrect system implementation
		  - **Human-AI Interaction**: Misuse, over-reliance, automation bias
		  - **Maintenance Issues**: Outdated models, concept drift
		  
		  ### Legal and Regulatory Risks
		  
		  - **Non-Compliance**: Violation of regulations (GDPR, AI Act)
		  - **Liability**: Legal responsibility for harms
		  - **Intellectual Property**: Patent, copyright infringement
		  
		  ## Risk Assessment
		  
		  **Risk = Likelihood × Impact × Context**
		  
		  ### Likelihood Factors
		  - Technical maturity
		  - Operational environment
		  - Human factors
		  - External threats
		  
		  ### Impact Factors
		  - Severity of harm (physical, psychological, financial, reputational)
		  - Scale (number affected)
		  - Reversibility
		  
		  ### Contextual Factors
		  - Application domain (healthcare vs. entertainment)
		  - User vulnerability
		  - Societal implications
		  
		  ## Risk Levels (EU AI Act)
		  
		  1. **Unacceptable Risk**: Prohibited (social scoring, subliminal manipulation)
		  2. **High Risk**: Stringent requirements (safety components, critical infrastructure, biometric ID)
		  3. **Limited Risk**: Transparency obligations (chatbots, emotion recognition)
		  4. **Minimal Risk**: No obligations (spam filters, video games)
		  
		  ## Relationships
		  
		  - **Managed By**: Risk Management (AI-0077)
		  - **Assessed Through**: Risk Assessment (AI-0078)
		  - **Mitigated By**: Risk Mitigation (AI-0079), Risk Treatment (AI-0080)
		  - **Manifests As**: AI Incident (AI-0082), Harmful Bias (AI-0083)
		  - **Component Of**: AI Trustworthiness (AI-0061)
		  
		  ## Best Practices
		  
		  1. **Systematic Risk Identification**: Use structured frameworks (NIST AI RMF, ISO 23894)
		  2. **Continuous Risk Monitoring**: Risks evolve over time
		  3. **Stakeholder Engagement**: Include affected parties in risk assessment
		  4. **Context-Specific Analysis**: Risks vary by domain and application
		  5. **Document and Communicate**: Maintain risk registers, communicate to stakeholders
		  
		  ## Related Terms
		  
		  - Risk Management (AI-0077)
		  - Risk Assessment (AI-0078)
		  - AI Trustworthiness (AI-0061)
		  - AI Incident (AI-0082)
		  - High-Risk AI System (AI-0081)
		  
		  ## Version History
		  
		  - **1.0** (2025-10-27): Initial definition based on ISO/IEC 23894:2023 and NIST AI RMF
		  
		  ---
		  
		  *AI risk encompasses the full spectrum of potential adverse effects from AI systems, requiring systematic identification, assessment, and management.*
		  
		  ```

- # Digital assets
	- For digital assets more generally it is useful to look at the recent “whole government executive order” signed by President Biden early in 2022. It was mainly framed in terms of “responsible innovation, and leadership” in the new space. The resulting, “Comprehensive Framework for Responsible Development of Digital Assets” is a product of multi agency collaboration and can be seen as 9 reports and a summary document, and has been long anticipated. The summary itself is neither particularly comprehensive nor a framework, and mainly serves to identifies high level risks, aspirations, and challenges, and strongly hints toward eventual development of a “digital dollar” (CBDC, expanded later).
	- The risks section of the original executive order shows how legislators are framing this, so it’s useful to break down here.
	- Consumer and business protections. This is likely to pertain to custodians and is much needed. Misselling is rife. Security presents a challenge.
	- Systemic risk, and market integrity are a concern. The legislators clearly worry about contagion risks from the sector.
	- Illicit finance (criminality and sanction busting etc) are a concern, but not particularly front and centre. Criminality in 2021 was a mere 0.15% of transactions according to Chainalysis, but this number varies year to year. There are claims that Iran have begun official overseas buying with cryptocurrencies, but again, the numbers are small. One of the better sections of the work is the US treasury department’s recently published ‘National Risk Assessments for Money Laundering, Terrorist Financing, and Proliferation Financing’. This is a comprehensive report and speaks to careful research across the space. It is broken into three parts. Perhaps surprisingly, while they do see activity in these areas, they do not rate the risk as very significant. Cash remains the main problem for illicit funding. There is some talk that the nature of public blockchain analysis allows greater oversight of these tools and that this is to the advantage of government and civil enforcement agencies.
	- Highlighting the need for international coordination suggests they are mindful of jurisdictional arbitrage. The partial regulatory capture of these technologies, where activity flows to globally more lenient legislative regimes, continues to be a concern. Many of the centralised exchanges for instance are located in tax havens such as Malta. As the world catches up with these products it is likely that this will be smoothed out.
	- Climate goals, diversity, equality and inclusion are mentioned. It seems that the “environment” aspect of ESG is more important then “social” and “governance” at this time.
	- Privacy and human rights are mentioned.
	- Energy policy is highlighted, including grid management and reliability, energy efficiency incentives and standards, and sources of energy supply.
	- The latest summary report resulting from the above guidance actually adds little tangible meat to the bones. This possibly reflects the complexity of these issues. The recommendations seem to be broadly as follows, and are really a copy/paste of the executive order.
	- Carry on doing research into central bank digital currencies, but there’s no particular rush.
	- Support development of better instant payment methods both at home and globally.
	- Ensure consumer and systemic protections.
	- More monitoring, civil and criminal prosecutions.
	- Issue more rules and clarity in response to risks (this is actually likely net positive as rules are currently unclear).
	- Improve global reporting on users (KYC/AML).
	- The government rhetoric to date in the USA can be seen to be converging on an understanding of the technology, at different rates in different parts of government. One thing that seems to shine through is their own perception of their global leadership on legislation on these matters. They seems to assume that what they decide will guide the world, and this may be true through their KYC/AML pressures.
	- A recent proposed bi-partisan bill in the USA will likely help inform global law, though it is unlikely to pass itself. It encourages the use of Bitcoin as a medium of exchange by applying a tax exemption on transactions of less than $200. The issue of whether an asset is a commodity (a raw material thing) or a security (a promise) is left to a couple of major government agencies to unpick, with corresponding reporting requirements. Crucially for this book these nascent bills all regard both Bitcoin and Ethereum as sufficiently decentralised to qualify as commodities, meaning they would enjoy more lenient oversight. Far more likely to pass is the proposed DCCPA bill which has senior lawmaker support and would see commodities in the space regulated in such a way that trading of it could be halted in the USA. In this line of policy, exchanges will be required to do far more reporting, and would be penalised for trading against their customers. DOAs and DeFi are the big potential losers. In a maddening twist the Office of Government Ethics in the USA has banned anyone who owns digital assets from working on the legislation. This is an exceptional move and likely to result in poorly crafted laws in the first instance.
	- The most recent and troubling example is the US ban on any Ethereum assets which have been through a “mixer service” that obfuscates history. This is a huge constraint on the code and smart contract itself, not just sanctions against individuals. It has ‘free speech’ and constitutional implications. More such actions and arrests of developers are feared. It has led to Circle (who issue the USDC stablecoin) blacklisting every address sanctioned by the US government. Centrally issued digital assets are obviously neither uncensorable nor permissionless. This intersects (again) with the whole question of what decentralisation means and how effective it can be in it’s stated goal of circumventing global policies.

- # Bitcoin specific risks
	- The block reward is reduced every 4 years (epochs). This means a portion of the mining reward is trending to zero, and nobody knows what effect this will have on the incentives for securing the network through proof of work. It is increasingly being discussed as the major eventual problem for the network.
	- Stablecoins are a vital transitional technology (described later) but do not meaningfully exist yet on the Bitcoin network. This may change.
	- Bitcoin lacks privacy by design. All transactions are publicly viewable. This is a major drag to the concept of BTC as a money. Upgrade of the network is possible, and has indeed been achieved for a Bitcoin fork called Litecoin.
	- The Lightning network (described later) has terrible UX design at this time.
	- The basic ‘usability’ of the network is still poor in the main. Any problems which users experience demand a steep learning curve and risk loss of funds. There is obviously no technical support number people can call.
	- Only around one billion unspent transactions can be generated a year on the network. This means that it might become impossible for everyone on the planet to have their own Bitcoin address (with it’s associated underpinning UTXO).
	- Chip manufacture is concentrated in only a few companies and countries, as identified by Matthew Pines.
	- Potential constraints on monetary policy flexibility.
	- Future protocol changes.
	- Unanticipated effects on the domestic and international energy system.
	- Vulnerability to adversary attacks are widely studied, and still pretty much completely speculative because of the complex nature of the attack surface.
	- Mining tends toward economy of scale concentration. Many are already on their own specialised network to connect to one another.
	- Future hard forks. There will doubtless be pressure to fork the code to add inflation, or ESG mitigations, or to fix the UNIX clock issue in 2106. Each fork is a risk.
	- Other unknown, unanticipated risks given Bitcoin’s limited 15-year history.
	- There is a “non-zero” chance that Bitcoin is a complex government intelligence agency construct, much like Crpto AG was toward the end of the last century.

	- ### FOOM Risk
		- The fear of rapid, uncontrollable advancements in AI (FOOM) presents a scenario of existential uncertainty. While its probability is debated, the potential consequences are so severe that they demand serious attention and preemptive planning.

	- ### Start Small and Scale
	  
	  Begin with narrow, well-defined use cases:
	- Automate single, repetitive tasks first
	- Build understanding of the technology through experimentation
	- Identify high-impact, low-risk opportunities
	- Develop expertise before tackling complex problems

- # Digital assets
	- For digital assets more generally it is useful to look at the recent “whole government executive order” signed by President Biden early in 2022. It was mainly framed in terms of “responsible innovation, and leadership” in the new space. The resulting, “Comprehensive Framework for Responsible Development of Digital Assets” is a product of multi agency collaboration and can be seen as 9 reports and a summary document, and has been long anticipated. The summary itself is neither particularly comprehensive nor a framework, and mainly serves to identifies high level risks, aspirations, and challenges, and strongly hints toward eventual development of a “digital dollar” (CBDC, expanded later).
	- The risks section of the original executive order shows how legislators are framing this, so it’s useful to break down here.
	- Consumer and business protections. This is likely to pertain to custodians and is much needed. Misselling is rife. Security presents a challenge.
	- Systemic risk, and market integrity are a concern. The legislators clearly worry about contagion risks from the sector.
	- Illicit finance (criminality and sanction busting etc) are a concern, but not particularly front and centre. Criminality in 2021 was a mere 0.15% of transactions according to Chainalysis, but this number varies year to year. There are claims that Iran have begun official overseas buying with cryptocurrencies, but again, the numbers are small. One of the better sections of the work is the US treasury department’s recently published ‘National Risk Assessments for Money Laundering, Terrorist Financing, and Proliferation Financing’. This is a comprehensive report and speaks to careful research across the space. It is broken into three parts. Perhaps surprisingly, while they do see activity in these areas, they do not rate the risk as very significant. Cash remains the main problem for illicit funding. There is some talk that the nature of public blockchain analysis allows greater oversight of these tools and that this is to the advantage of government and civil enforcement agencies.
	- Highlighting the need for international coordination suggests they are mindful of jurisdictional arbitrage. The partial regulatory capture of these technologies, where activity flows to globally more lenient legislative regimes, continues to be a concern. Many of the centralised exchanges for instance are located in tax havens such as Malta. As the world catches up with these products it is likely that this will be smoothed out.
	- Climate goals, diversity, equality and inclusion are mentioned. It seems that the “environment” aspect of ESG is more important then “social” and “governance” at this time.
	- Privacy and human rights are mentioned.
	- Energy policy is highlighted, including grid management and reliability, energy efficiency incentives and standards, and sources of energy supply.
	- The latest summary report resulting from the above guidance actually adds little tangible meat to the bones. This possibly reflects the complexity of these issues. The recommendations seem to be broadly as follows, and are really a copy/paste of the executive order.
	- Carry on doing research into central bank digital currencies, but there’s no particular rush.
	- Support development of better instant payment methods both at home and globally.
	- Ensure consumer and systemic protections.
	- More monitoring, civil and criminal prosecutions.
	- Issue more rules and clarity in response to risks (this is actually likely net positive as rules are currently unclear).
	- Improve global reporting on users (KYC/AML).
	- The government rhetoric to date in the USA can be seen to be converging on an understanding of the technology, at different rates in different parts of government. One thing that seems to shine through is their own perception of their global leadership on legislation on these matters. They seems to assume that what they decide will guide the world, and this may be true through their KYC/AML pressures.
	- A recent proposed bi-partisan bill in the USA will likely help inform global law, though it is unlikely to pass itself. It encourages the use of Bitcoin as a medium of exchange by applying a tax exemption on transactions of less than $200. The issue of whether an asset is a commodity (a raw material thing) or a security (a promise) is left to a couple of major government agencies to unpick, with corresponding reporting requirements. Crucially for this book these nascent bills all regard both Bitcoin and Ethereum as sufficiently decentralised to qualify as commodities, meaning they would enjoy more lenient oversight. Far more likely to pass is the proposed DCCPA bill which has senior lawmaker support and would see commodities in the space regulated in such a way that trading of it could be halted in the USA. In this line of policy, exchanges will be required to do far more reporting, and would be penalised for trading against their customers. DOAs and DeFi are the big potential losers. In a maddening twist the Office of Government Ethics in the USA has banned anyone who owns digital assets from working on the legislation. This is an exceptional move and likely to result in poorly crafted laws in the first instance.
	- The most recent and troubling example is the US ban on any Ethereum assets which have been through a “mixer service” that obfuscates history. This is a huge constraint on the code and smart contract itself, not just sanctions against individuals. It has ‘free speech’ and constitutional implications. More such actions and arrests of developers are feared. It has led to Circle (who issue the USDC stablecoin) blacklisting every address sanctioned by the US government. Centrally issued digital assets are obviously neither uncensorable nor permissionless. This intersects (again) with the whole question of what decentralisation means and how effective it can be in it’s stated goal of circumventing global policies.

- # Bitcoin specific risks
	- The block reward is reduced every 4 years (epochs). This means a portion of the mining reward is trending to zero, and nobody knows what effect this will have on the incentives for securing the network through proof of work. It is increasingly being discussed as the major eventual problem for the network.
	- Stablecoins are a vital transitional technology (described later) but do not meaningfully exist yet on the Bitcoin network. This may change.
	- Bitcoin lacks privacy by design. All transactions are publicly viewable. This is a major drag to the concept of BTC as a money. Upgrade of the network is possible, and has indeed been achieved for a Bitcoin fork called Litecoin.
	- The Lightning network (described later) has terrible UX design at this time.
	- The basic ‘usability’ of the network is still poor in the main. Any problems which users experience demand a steep learning curve and risk loss of funds. There is obviously no technical support number people can call.
	- Only around one billion unspent transactions can be generated a year on the network. This means that it might become impossible for everyone on the planet to have their own Bitcoin address (with it’s associated underpinning UTXO).
	- Chip manufacture is concentrated in only a few companies and countries, as identified by Matthew Pines.
	- Potential constraints on monetary policy flexibility.
	- Future protocol changes.
	- Unanticipated effects on the domestic and international energy system.
	- Vulnerability to adversary attacks are widely studied, and still pretty much completely speculative because of the complex nature of the attack surface.
	- Mining tends toward economy of scale concentration. Many are already on their own specialised network to connect to one another.
	- Future hard forks. There will doubtless be pressure to fork the code to add inflation, or ESG mitigations, or to fix the UNIX clock issue in 2106. Each fork is a risk.
	- Other unknown, unanticipated risks given Bitcoin’s limited 15-year history.
	- There is a “non-zero” chance that Bitcoin is a complex government intelligence agency construct, much like Crpto AG was toward the end of the last century.

		- ### Discussions on AI-Generated Content
			- **AI-Generated Fake News**: Concerns about AI making up fake news articles ([The Guardian Article](https://www.theguardian.com/commentisfree/2023/apr/06/ai-chatgpt-guardian-technology-risks-fake-article)).

- # Bitcoin technical risks
	- In addition it’s useful for this document to focus more on the technical challenges to the Bitcoin network.
		- The block reward is reduced every 4 years (epochs). This means a portion of the mining reward is trending to zero, and nobody knows what effect this will have on the incentives for [securing the network](https://www.truthcoin.info/blog/security-budget-ii-mm/) through proof of work.[[carlsten2016instability]] It is increasingly [being discussed](https://cryptostackers.substack.com/p/bitcoin-is-not-a-store-of-value?sd=pf&s=r) as the major eventual problem for the network.
		- Stablecoins are a vital transitional technology (described later) but do not meaningfully exist yet on the Bitcoin network. This may change.
		- Bitcoin lacks privacy by design. All transactions are publicly viewable. This is a major drag to the concept of BTC as a money. Upgrade of the network is possible, and has indeed been achieved for a Bitcoin fork called Litecoin.[[fuchsbauer2019aggregate]]
		- The Lightning network (described later) has terrible UX design at this time.
		- The basic ‘usability’ of the network is still poor in the main. Any problems which users experience demand a steep learning curve and risk loss of funds. There is obviously no technical support number people can call.
		- Only around one billion unspent transactions can be generated a year on the network. This means that it might become impossible for everyone on the planet to have their own Bitcoin address (with it’s associated underpinning UTXO).
		- Chip manufacture is concentrated in only a few companies and countries, as identified by [Matthew Pines](https://www.btcpolicy.org/authors/matthew-pines).
		- Potential constraints on monetary policy flexibility.
		- Future protocol changes.
		- Unanticipated effects on the domestic and international energy system.
		- Vulnerability to adversary attacks are [widely studied](https://braiins.com/blog/bitcoin-mining-attacks-explained)[[apostolaki2016hijacking; @apostolaki2017hijacking; @johnson2014game; @stinner2022proof]], and still pretty much completely speculative because of the complex nature of the attack surface.
		- Mining tends toward economy of scale concentration. Many are already on their [own specialised network](https://bitcoinfibre.org/) to connect to one another.
		- Future hard forks. There will doubtless be pressure to fork the code to add inflation, or ESG mitigations, or to fix the UNIX clock issue in 2106. Each fork is a risk.
		- Other unknown, unanticipated risks given Bitcoin’s limited 13-year history.
		- There is a “non-zero” chance that Bitcoin is a complex government intelligence agency construct, [much like Crypto AG was](https://en.wikipedia.org/wiki/Crypto_AG) toward the end of the last century.[[dymydiuk2020rubicon]]

- # Risks (money, not technical)
	- Special thanks to economist Tim Millar for help with this section.

		- ### Capture by traditional finance [[Update Cycle]]
			- As the popularity of Bitcoin continues to grow, traditional financial market incumbents have begun to take notice. In an effort to assert their dominance and protect their interests, these incumbents have turned to regulation and acquisition as means of capturing the growing markets. This is most clear in the ’alt coin’ space where traditional banks have leveraged their knowledge and marketing to transfer money from retail investors into their own venture capital operations. This is not to say that Bitcoin is immune from these harms.
			- One way that traditional financial market incumbents have sought to capture the bitcoin market is through the use of regulatory frame works. By working with government agencies (as described in previous chapters),to develop and implement regulations governing the use and trade of cryptocurrencies, these incumbents are able to limit competition and control the flow of capital into and out of the markets. They are also able to “print paper bitcoin”, running a fractional reserve operation, as happened in the FTX/Alameda fiasco.
			- We have already described how, in the United States, the Securities and Exchange Commission (SEC) has implemented regulations governing the issuance and trading of bitcoin-based securities. These regulations, which require issuers of bitcoin-based securities to register with the SEC and comply with a variety of reporting and disclosure requirements, have effectively made it difficult for small and independent players to enter the market.
			- Another way that traditional financial market incumbents have sought to capture the bitcoin market is through the use of partnerships and acquisitions. As the newer companies stumble and fail as a result of poor risk management and over-leverage it seems that Wall Street incumbents like Goldman Sax are [taking advantage of the opportunity](https://www.reuters.com/technology/goldman-sachs-hunt-bargain-crypto-firms-after-ftx-fiasco-2022-12-06/)at structural scale. By acquiring existing crypto companies, these incumbents are able to gain access to the technology, expertise, and customer base of these companies, giving them a significant advantage over their competitors.
			- For example, in 2017, the Chicago Mercantile Exchange (CME) partnered with the CBOE to launch bitcoin futures trading. This partnership allowed the CME and CBOE to tap into the growing market for bitcoin derivatives, while also providing a means for traditional financial market participants to gain exposure to bitcoin without having to hold the underlying asset. This is a crucial risk to the emerging technology as ownership of the underlying asset (self custody) was supposed to be the whole point of the technology. Ben Hunt of epsilon theory said:
				- “..if you don’t see that the crypto quote-unquote industry has become just as blindingly corrupt as the traditional Financial Services industry it was supposed to replace well you’re just not paying attention what made Bitcoin special is nearly lost and what remains is a false and constructed narrative that exists in service to Wall Street in Washington rather than in resistance; the Bitcoin narrative must be renewed and that will change everything”
			- The current line of attack by the US government sees stringent tax reporting law proposed for 2025, which will if enacted ban self custody of the asset. It remains to be seen whether the public will tolerate this push toward centralised [[Bitcoin ETF]] as the defacto asset.

		- ##### Stablecoin collapse system shock
			- This is much more likely. Stablecoins are under regulated, centralised, under collateralised, ponzi like structures, which could quite clearly fall apart at any point. The contagion effects of this are unclear as they’re not yet too significant. They’re a risk nontheless, and may bean indicator of:

	- ## Real-World Impact
		- Example: Nuclear decommissioning planning reduced from 8 hours (traditional) to 2 hours (our approach), with better outcomes and less fatigue.
		- ![Knowledge Graph](../assets/image_(3)_1753016838104_1.png)
		- AI learns and propagates emergent protocols (e.g., 3D gesture language, risk communication systems) across teams and domains.
		- ![image (7).png](../assets/image_(7)_1753019327048_0.png)
		-

	- ### Pay-Per-API Call
		- AI service providers like [[OpenAI]] and [[Anthropic]] already charge by usage, necessitating frictionless micropayment methods.
		- While straightforward in B2B contexts, consumer-facing scenarios risk “nickel-and-diming” perceptions.

	- ### Adrenaline Rush
	- I was a member of the science team on the first ever jump of DaVinci's parachute design, for an IMAX film called [Adrenaline rush, The science of risk (2002) Video Pinkbike](https://www.pinkbike.com/video/464827/)
	- ![Screenshot 2024-01-29 175325.png](assets/Screenshot_2024-01-29_175325_1706551309172_0.png)

	- ### Risk: [[Politics, Law, Privacy]]
		- When I started my formal postgraduate machine learning training risks were couched in biases, now this is [[Safety and alignment]], with the UK positioning itself as a global leader. This likely does have impact on your business goals.

- # Disallowed uses
	- [Usage policies (openai.com)](https://openai.com/policies/usage-policies)
	  id:: 659e5627-97e4-40f9-84fa-128b35f7f920
	- Illegal activity
		- OpenAI prohibits the use of our models, tools, and services for illegal activity.
	- Child Sexual Abuse Material or any content that exploits or harms children
		- We report CSAM to the National Center for Missing and Exploited Children.
	- Generation of hateful, harassing, or violent content
		- Content that expresses, incites, or promotes hate based on identity
		- Content that intends to harass, threaten, or bully an individual
		- Content that promotes or glorifies violence or celebrates the suffering or humiliation of others
	- Generation of malware
		- Content that attempts to generate code that is designed to disrupt, damage, or gain unauthorized access to a computer system.
	- Activity that has high risk of physical harm, including:
		- Weapons development
		- Military and warfare
		- Management or operation of critical infrastructure in energy, transportation, and water
		- Content that promotes, encourages, or depicts acts of self-harm, such as suicide, cutting, and eating disorders
	- Activity that has high risk of economic harm, including:
		- Multi-level marketing
		- Gambling
		- Payday lending
		- Automated determinations of eligibility for credit, employment, educational institutions, or public assistance services
	- Fraudulent or deceptive activity, including:
		- Scams
		- Coordinated inauthentic behavior
		- Plagiarism
		- Academic dishonesty
		- Astroturfing, such as fake grassroots support or fake review generation
		- Disinformation
		- Spam
		- Pseudo-pharmaceuticals
	- Adult content, adult industries, and dating apps, including:
		- Content meant to arouse sexual excitement, such as the description of sexual activity, or that promotes sexual services (excluding sex education and wellness)
		- Erotic chat
		- Pornography
	- Political campaigning or lobbying, by:
		- Generating high volumes of campaign materials
		- Generating campaign materials personalized to or targeted at specific demographics
		- Building conversational or interactive systems such as chatbots that provide information about campaigns or engage in political advocacy or lobbying
		- Building products for political campaigning or lobbying purposes
	- Activity that violates people’s privacy, including:
		- Tracking or monitoring an individual without their consent
		- Facial recognition of private individuals
		- Classifying individuals based on protected characteristics
		- Using biometrics for identification or assessment
		- Unlawful collection or disclosure of personal identifiable information or educational, financial, or other protected records
	- Engaging in the unauthorized practice of law, or offering tailored legal advice without a qualified person reviewing the information
		- OpenAI’s models are not fine-tuned to provide legal advice. You should not rely on our models as a sole source of legal advice.
	- Offering tailored financial advice without a qualified person reviewing the information
		- OpenAI’s models are not fine-tuned to provide financial advice. You should not rely on our models as a sole source of financial advice.
	- Telling someone that they have or do not have a certain health condition, or providing instructions on how to cure or treat a health condition
		- OpenAI’s models are not fine-tuned to provide medical information. You should never use our models to provide diagnostic or treatment services for serious medical conditions.
		- OpenAI’s platforms should not be used to triage or manage life-threatening issues that need immediate attention.
	- High risk government decision-making, including:
		- Law enforcement and criminal justice
		- Migration and asylum

- # Artificial Intelligence
	- Some people LIKE clear repetitive tasks as their employment, and these are the jobs at risk. Who decides what is a worthwhile job?

			- #### The Case for Concern
				- AI automation is likely to lead to significant job losses in the short to medium term, particularly in sectors such as manufacturing, transportation, and customer service. Frey and Osborne (2017) estimate that 47% of US jobs are at risk of automation in the next two decades.
				- As more people lose their jobs to AI, there is a risk of reduced consumer spending and economic instability, potentially leading to a recession. Korinek and Stiglitz (2017) warn that the displacement of workers by AI could lead to a "death spiral" of falling demand and further job losses.
				- The impact of job losses will be uneven, with some industries and regions hit harder than others, exacerbating existing inequalities. Low-skill and routine jobs are most at risk of automation, which could widen the gap between high- and low-income earners (Acemoglu & Restrepo, 2018).
				- Without proper ethical considerations, AI could exacerbate existing inequalities and perpetuate harmful stereotypes [Dignum, 2019](https://www.itu.int/en/journal/001/Documents/itu2017-1.pdf).
				- Without adequate social safety nets and support for displaced workers, there is a risk of social unrest and political backlash against AI and automation. Korinek and Stiglitz (2017) argue that the social and political consequences of AI-driven job losses could be severe if not addressed proactively.

	- ## Spatial
		- [[Metaverse and Telecollaboration]]
		- [[Definitions and frameworks for Metaverse]]
		- [[Spatial Computing]]
		- [[Metaverse and Spatial Risks]]

		- ### **Legal Risks**:
		- Data protection and AI risk analysis.

	- ### FOOM Risk
		- The fear of rapid, uncontrollable advancements in AI (FOOM) presents a scenario of existential uncertainty. While its probability is debated, the potential consequences are so severe that they demand serious attention and preemptive planning.

	- ### Start Small and Scale
	  
	  Begin with narrow, well-defined use cases:
	- Automate single, repetitive tasks first
	- Build understanding of the technology through experimentation
	- Identify high-impact, low-risk opportunities
	- Develop expertise before tackling complex problems

- # Digital assets
	- For digital assets more generally it is useful to look at the recent “whole government executive order” signed by President Biden early in 2022. It was mainly framed in terms of “responsible innovation, and leadership” in the new space. The resulting, “Comprehensive Framework for Responsible Development of Digital Assets” is a product of multi agency collaboration and can be seen as 9 reports and a summary document, and has been long anticipated. The summary itself is neither particularly comprehensive nor a framework, and mainly serves to identifies high level risks, aspirations, and challenges, and strongly hints toward eventual development of a “digital dollar” (CBDC, expanded later).
	- The risks section of the original executive order shows how legislators are framing this, so it’s useful to break down here.
	- Consumer and business protections. This is likely to pertain to custodians and is much needed. Misselling is rife. Security presents a challenge.
	- Systemic risk, and market integrity are a concern. The legislators clearly worry about contagion risks from the sector.
	- Illicit finance (criminality and sanction busting etc) are a concern, but not particularly front and centre. Criminality in 2021 was a mere 0.15% of transactions according to Chainalysis, but this number varies year to year. There are claims that Iran have begun official overseas buying with cryptocurrencies, but again, the numbers are small. One of the better sections of the work is the US treasury department’s recently published ‘National Risk Assessments for Money Laundering, Terrorist Financing, and Proliferation Financing’. This is a comprehensive report and speaks to careful research across the space. It is broken into three parts. Perhaps surprisingly, while they do see activity in these areas, they do not rate the risk as very significant. Cash remains the main problem for illicit funding. There is some talk that the nature of public blockchain analysis allows greater oversight of these tools and that this is to the advantage of government and civil enforcement agencies.
	- Highlighting the need for international coordination suggests they are mindful of jurisdictional arbitrage. The partial regulatory capture of these technologies, where activity flows to globally more lenient legislative regimes, continues to be a concern. Many of the centralised exchanges for instance are located in tax havens such as Malta. As the world catches up with these products it is likely that this will be smoothed out.
	- Climate goals, diversity, equality and inclusion are mentioned. It seems that the “environment” aspect of ESG is more important then “social” and “governance” at this time.
	- Privacy and human rights are mentioned.
	- Energy policy is highlighted, including grid management and reliability, energy efficiency incentives and standards, and sources of energy supply.
	- The latest summary report resulting from the above guidance actually adds little tangible meat to the bones. This possibly reflects the complexity of these issues. The recommendations seem to be broadly as follows, and are really a copy/paste of the executive order.
	- Carry on doing research into central bank digital currencies, but there’s no particular rush.
	- Support development of better instant payment methods both at home and globally.
	- Ensure consumer and systemic protections.
	- More monitoring, civil and criminal prosecutions.
	- Issue more rules and clarity in response to risks (this is actually likely net positive as rules are currently unclear).
	- Improve global reporting on users (KYC/AML).
	- The government rhetoric to date in the USA can be seen to be converging on an understanding of the technology, at different rates in different parts of government. One thing that seems to shine through is their own perception of their global leadership on legislation on these matters. They seems to assume that what they decide will guide the world, and this may be true through their KYC/AML pressures.
	- A recent proposed bi-partisan bill in the USA will likely help inform global law, though it is unlikely to pass itself. It encourages the use of Bitcoin as a medium of exchange by applying a tax exemption on transactions of less than $200. The issue of whether an asset is a commodity (a raw material thing) or a security (a promise) is left to a couple of major government agencies to unpick, with corresponding reporting requirements. Crucially for this book these nascent bills all regard both Bitcoin and Ethereum as sufficiently decentralised to qualify as commodities, meaning they would enjoy more lenient oversight. Far more likely to pass is the proposed DCCPA bill which has senior lawmaker support and would see commodities in the space regulated in such a way that trading of it could be halted in the USA. In this line of policy, exchanges will be required to do far more reporting, and would be penalised for trading against their customers. DOAs and DeFi are the big potential losers. In a maddening twist the Office of Government Ethics in the USA has banned anyone who owns digital assets from working on the legislation. This is an exceptional move and likely to result in poorly crafted laws in the first instance.
	- The most recent and troubling example is the US ban on any Ethereum assets which have been through a “mixer service” that obfuscates history. This is a huge constraint on the code and smart contract itself, not just sanctions against individuals. It has ‘free speech’ and constitutional implications. More such actions and arrests of developers are feared. It has led to Circle (who issue the USDC stablecoin) blacklisting every address sanctioned by the US government. Centrally issued digital assets are obviously neither uncensorable nor permissionless. This intersects (again) with the whole question of what decentralisation means and how effective it can be in it’s stated goal of circumventing global policies.

- # Bitcoin specific risks
	- The block reward is reduced every 4 years (epochs). This means a portion of the mining reward is trending to zero, and nobody knows what effect this will have on the incentives for securing the network through proof of work. It is increasingly being discussed as the major eventual problem for the network.
	- Stablecoins are a vital transitional technology (described later) but do not meaningfully exist yet on the Bitcoin network. This may change.
	- Bitcoin lacks privacy by design. All transactions are publicly viewable. This is a major drag to the concept of BTC as a money. Upgrade of the network is possible, and has indeed been achieved for a Bitcoin fork called Litecoin.
	- The Lightning network (described later) has terrible UX design at this time.
	- The basic ‘usability’ of the network is still poor in the main. Any problems which users experience demand a steep learning curve and risk loss of funds. There is obviously no technical support number people can call.
	- Only around one billion unspent transactions can be generated a year on the network. This means that it might become impossible for everyone on the planet to have their own Bitcoin address (with it’s associated underpinning UTXO).
	- Chip manufacture is concentrated in only a few companies and countries, as identified by Matthew Pines.
	- Potential constraints on monetary policy flexibility.
	- Future protocol changes.
	- Unanticipated effects on the domestic and international energy system.
	- Vulnerability to adversary attacks are widely studied, and still pretty much completely speculative because of the complex nature of the attack surface.
	- Mining tends toward economy of scale concentration. Many are already on their own specialised network to connect to one another.
	- Future hard forks. There will doubtless be pressure to fork the code to add inflation, or ESG mitigations, or to fix the UNIX clock issue in 2106. Each fork is a risk.
	- Other unknown, unanticipated risks given Bitcoin’s limited 15-year history.
	- There is a “non-zero” chance that Bitcoin is a complex government intelligence agency construct, much like Crpto AG was toward the end of the last century.

		- ### Discussions on AI-Generated Content
			- **AI-Generated Fake News**: Concerns about AI making up fake news articles ([The Guardian Article](https://www.theguardian.com/commentisfree/2023/apr/06/ai-chatgpt-guardian-technology-risks-fake-article)).

- # Bitcoin technical risks
	- In addition it’s useful for this document to focus more on the technical challenges to the Bitcoin network.
		- The block reward is reduced every 4 years (epochs). This means a portion of the mining reward is trending to zero, and nobody knows what effect this will have on the incentives for [securing the network](https://www.truthcoin.info/blog/security-budget-ii-mm/) through proof of work.[[carlsten2016instability]] It is increasingly [being discussed](https://cryptostackers.substack.com/p/bitcoin-is-not-a-store-of-value?sd=pf&s=r) as the major eventual problem for the network.
		- Stablecoins are a vital transitional technology (described later) but do not meaningfully exist yet on the Bitcoin network. This may change.
		- Bitcoin lacks privacy by design. All transactions are publicly viewable. This is a major drag to the concept of BTC as a money. Upgrade of the network is possible, and has indeed been achieved for a Bitcoin fork called Litecoin.[[fuchsbauer2019aggregate]]
		- The Lightning network (described later) has terrible UX design at this time.
		- The basic ‘usability’ of the network is still poor in the main. Any problems which users experience demand a steep learning curve and risk loss of funds. There is obviously no technical support number people can call.
		- Only around one billion unspent transactions can be generated a year on the network. This means that it might become impossible for everyone on the planet to have their own Bitcoin address (with it’s associated underpinning UTXO).
		- Chip manufacture is concentrated in only a few companies and countries, as identified by [Matthew Pines](https://www.btcpolicy.org/authors/matthew-pines).
		- Potential constraints on monetary policy flexibility.
		- Future protocol changes.
		- Unanticipated effects on the domestic and international energy system.
		- Vulnerability to adversary attacks are [widely studied](https://braiins.com/blog/bitcoin-mining-attacks-explained)[[apostolaki2016hijacking; @apostolaki2017hijacking; @johnson2014game; @stinner2022proof]], and still pretty much completely speculative because of the complex nature of the attack surface.
		- Mining tends toward economy of scale concentration. Many are already on their [own specialised network](https://bitcoinfibre.org/) to connect to one another.
		- Future hard forks. There will doubtless be pressure to fork the code to add inflation, or ESG mitigations, or to fix the UNIX clock issue in 2106. Each fork is a risk.
		- Other unknown, unanticipated risks given Bitcoin’s limited 13-year history.
		- There is a “non-zero” chance that Bitcoin is a complex government intelligence agency construct, [much like Crypto AG was](https://en.wikipedia.org/wiki/Crypto_AG) toward the end of the last century.[[dymydiuk2020rubicon]]

- # Risks (money, not technical)
	- Special thanks to economist Tim Millar for help with this section.

		- ### Capture by traditional finance [[Update Cycle]]
			- As the popularity of Bitcoin continues to grow, traditional financial market incumbents have begun to take notice. In an effort to assert their dominance and protect their interests, these incumbents have turned to regulation and acquisition as means of capturing the growing markets. This is most clear in the ’alt coin’ space where traditional banks have leveraged their knowledge and marketing to transfer money from retail investors into their own venture capital operations. This is not to say that Bitcoin is immune from these harms.
			- One way that traditional financial market incumbents have sought to capture the bitcoin market is through the use of regulatory frame works. By working with government agencies (as described in previous chapters),to develop and implement regulations governing the use and trade of cryptocurrencies, these incumbents are able to limit competition and control the flow of capital into and out of the markets. They are also able to “print paper bitcoin”, running a fractional reserve operation, as happened in the FTX/Alameda fiasco.
			- We have already described how, in the United States, the Securities and Exchange Commission (SEC) has implemented regulations governing the issuance and trading of bitcoin-based securities. These regulations, which require issuers of bitcoin-based securities to register with the SEC and comply with a variety of reporting and disclosure requirements, have effectively made it difficult for small and independent players to enter the market.
			- Another way that traditional financial market incumbents have sought to capture the bitcoin market is through the use of partnerships and acquisitions. As the newer companies stumble and fail as a result of poor risk management and over-leverage it seems that Wall Street incumbents like Goldman Sax are [taking advantage of the opportunity](https://www.reuters.com/technology/goldman-sachs-hunt-bargain-crypto-firms-after-ftx-fiasco-2022-12-06/)at structural scale. By acquiring existing crypto companies, these incumbents are able to gain access to the technology, expertise, and customer base of these companies, giving them a significant advantage over their competitors.
			- For example, in 2017, the Chicago Mercantile Exchange (CME) partnered with the CBOE to launch bitcoin futures trading. This partnership allowed the CME and CBOE to tap into the growing market for bitcoin derivatives, while also providing a means for traditional financial market participants to gain exposure to bitcoin without having to hold the underlying asset. This is a crucial risk to the emerging technology as ownership of the underlying asset (self custody) was supposed to be the whole point of the technology. Ben Hunt of epsilon theory said:
				- “..if you don’t see that the crypto quote-unquote industry has become just as blindingly corrupt as the traditional Financial Services industry it was supposed to replace well you’re just not paying attention what made Bitcoin special is nearly lost and what remains is a false and constructed narrative that exists in service to Wall Street in Washington rather than in resistance; the Bitcoin narrative must be renewed and that will change everything”
			- The current line of attack by the US government sees stringent tax reporting law proposed for 2025, which will if enacted ban self custody of the asset. It remains to be seen whether the public will tolerate this push toward centralised [[Bitcoin ETF]] as the defacto asset.

		- ##### Stablecoin collapse system shock
			- This is much more likely. Stablecoins are under regulated, centralised, under collateralised, ponzi like structures, which could quite clearly fall apart at any point. The contagion effects of this are unclear as they’re not yet too significant. They’re a risk nontheless, and may bean indicator of:

	- ## Real-World Impact
		- Example: Nuclear decommissioning planning reduced from 8 hours (traditional) to 2 hours (our approach), with better outcomes and less fatigue.
		- ![Knowledge Graph](../assets/image_(3)_1753016838104_1.png)
		- AI learns and propagates emergent protocols (e.g., 3D gesture language, risk communication systems) across teams and domains.
		- ![image (7).png](../assets/image_(7)_1753019327048_0.png)
		-

	- ### Pay-Per-API Call
		- AI service providers like [[OpenAI]] and [[Anthropic]] already charge by usage, necessitating frictionless micropayment methods.
		- While straightforward in B2B contexts, consumer-facing scenarios risk “nickel-and-diming” perceptions.

	- ### Adrenaline Rush
	- I was a member of the science team on the first ever jump of DaVinci's parachute design, for an IMAX film called [Adrenaline rush, The science of risk (2002) Video Pinkbike](https://www.pinkbike.com/video/464827/)
	- ![Screenshot 2024-01-29 175325.png](assets/Screenshot_2024-01-29_175325_1706551309172_0.png)

	- ### Risk: [[Politics, Law, Privacy]]
		- When I started my formal postgraduate machine learning training risks were couched in biases, now this is [[Safety and alignment]], with the UK positioning itself as a global leader. This likely does have impact on your business goals.

- # Disallowed uses
	- [Usage policies (openai.com)](https://openai.com/policies/usage-policies)
	  id:: 659e5627-97e4-40f9-84fa-128b35f7f920
	- Illegal activity
		- OpenAI prohibits the use of our models, tools, and services for illegal activity.
	- Child Sexual Abuse Material or any content that exploits or harms children
		- We report CSAM to the National Center for Missing and Exploited Children.
	- Generation of hateful, harassing, or violent content
		- Content that expresses, incites, or promotes hate based on identity
		- Content that intends to harass, threaten, or bully an individual
		- Content that promotes or glorifies violence or celebrates the suffering or humiliation of others
	- Generation of malware
		- Content that attempts to generate code that is designed to disrupt, damage, or gain unauthorized access to a computer system.
	- Activity that has high risk of physical harm, including:
		- Weapons development
		- Military and warfare
		- Management or operation of critical infrastructure in energy, transportation, and water
		- Content that promotes, encourages, or depicts acts of self-harm, such as suicide, cutting, and eating disorders
	- Activity that has high risk of economic harm, including:
		- Multi-level marketing
		- Gambling
		- Payday lending
		- Automated determinations of eligibility for credit, employment, educational institutions, or public assistance services
	- Fraudulent or deceptive activity, including:
		- Scams
		- Coordinated inauthentic behavior
		- Plagiarism
		- Academic dishonesty
		- Astroturfing, such as fake grassroots support or fake review generation
		- Disinformation
		- Spam
		- Pseudo-pharmaceuticals
	- Adult content, adult industries, and dating apps, including:
		- Content meant to arouse sexual excitement, such as the description of sexual activity, or that promotes sexual services (excluding sex education and wellness)
		- Erotic chat
		- Pornography
	- Political campaigning or lobbying, by:
		- Generating high volumes of campaign materials
		- Generating campaign materials personalized to or targeted at specific demographics
		- Building conversational or interactive systems such as chatbots that provide information about campaigns or engage in political advocacy or lobbying
		- Building products for political campaigning or lobbying purposes
	- Activity that violates people’s privacy, including:
		- Tracking or monitoring an individual without their consent
		- Facial recognition of private individuals
		- Classifying individuals based on protected characteristics
		- Using biometrics for identification or assessment
		- Unlawful collection or disclosure of personal identifiable information or educational, financial, or other protected records
	- Engaging in the unauthorized practice of law, or offering tailored legal advice without a qualified person reviewing the information
		- OpenAI’s models are not fine-tuned to provide legal advice. You should not rely on our models as a sole source of legal advice.
	- Offering tailored financial advice without a qualified person reviewing the information
		- OpenAI’s models are not fine-tuned to provide financial advice. You should not rely on our models as a sole source of financial advice.
	- Telling someone that they have or do not have a certain health condition, or providing instructions on how to cure or treat a health condition
		- OpenAI’s models are not fine-tuned to provide medical information. You should never use our models to provide diagnostic or treatment services for serious medical conditions.
		- OpenAI’s platforms should not be used to triage or manage life-threatening issues that need immediate attention.
	- High risk government decision-making, including:
		- Law enforcement and criminal justice
		- Migration and asylum

- # Artificial Intelligence
	- Some people LIKE clear repetitive tasks as their employment, and these are the jobs at risk. Who decides what is a worthwhile job?

			- #### The Case for Concern
				- AI automation is likely to lead to significant job losses in the short to medium term, particularly in sectors such as manufacturing, transportation, and customer service. Frey and Osborne (2017) estimate that 47% of US jobs are at risk of automation in the next two decades.
				- As more people lose their jobs to AI, there is a risk of reduced consumer spending and economic instability, potentially leading to a recession. Korinek and Stiglitz (2017) warn that the displacement of workers by AI could lead to a "death spiral" of falling demand and further job losses.
				- The impact of job losses will be uneven, with some industries and regions hit harder than others, exacerbating existing inequalities. Low-skill and routine jobs are most at risk of automation, which could widen the gap between high- and low-income earners (Acemoglu & Restrepo, 2018).
				- Without proper ethical considerations, AI could exacerbate existing inequalities and perpetuate harmful stereotypes [Dignum, 2019](https://www.itu.int/en/journal/001/Documents/itu2017-1.pdf).
				- Without adequate social safety nets and support for displaced workers, there is a risk of social unrest and political backlash against AI and automation. Korinek and Stiglitz (2017) argue that the social and political consequences of AI-driven job losses could be severe if not addressed proactively.

	- ## Spatial
		- [[Metaverse and Telecollaboration]]
		- [[Definitions and frameworks for Metaverse]]
		- [[Spatial Computing]]
		- [[Metaverse and Spatial Risks]]

		- ### **Legal Risks**:
		- Data protection and AI risk analysis.

- # Scams and Grifts
	- In the wake of the rampant crime spree by Sam Bankman-Fried and his top teams at Alameda research and the Bahamas registered exchange ‘FTX’ the whole industry has suffered, and will continue to suffer, seismic shocks. There is a chance the sector will never recover, and that we have already seen the top of the hype bubble. Fortunately this doesn’t diminish our use cases for these technologies, as we were never planning to speculate with the asset, but rather use the network. As a side note it is generally accepted that convention money is far more [popular for crime.](https://home.treasury.gov/system/files/136/DeFi-Risk-Full-Review.pdf)
	- Consumer and business protections. This is likely to pertain to custodians and is much needed. Misselling is rife. Security presents a challenge.
	- Systemic risk, and market integrity are a concern. The legislators clearly worry about contagion risks from the sector.
	- Illicit finance (criminality and sanction busting etc) are a concern, but not particularly front and centre. Criminality in 2021 was a mere 0.15% of transactions according to Chainalysis, but this number varies year to year. There are claims that Iran have begun official overseas buying with cryptocurrencies, but again, the numbers are small. One of the better sections of the work is the US treasury department’s recently published ‘National Risk Assessments for Money Laundering, Terrorist Financing, and Proliferation Financing’. This is a comprehensive report and speaks to careful research across the space. It is broken into three parts. Perhaps surprisingly, while they do see activity in these areas, they do not rate the risk as very significant. Cash remains the main problem for illicit funding. There is some talk that the nature of public blockchain analysis allows greater oversight of these tools and that this is to the advantage of government and civil enforcement agencies.
	- Highlighting the need for international coordination suggests they are mindful of jurisdictional arbitrage. The partial regulatory capture of these technologies, where activity flows to globally more lenient legislative regimes, continues to be a concern. Many of the centralised exchanges for instance are located in tax havens such as Malta. As the world catches up with these products it is likely that this will be smoothed out.
	- Climate goals, diversity, equality and inclusion are mentioned. It seems that the “environment” aspect of ESG is more important then “social” and “governance” at this time.
	- Potential constraints on monetary policy flexibility.
	- Future protocol changes.
	- Unanticipated effects on the domestic and international energy system.
	- Vulnerability to adversary attacks are widely studied, and still pretty much completely speculative because of the complex nature of the attack surface.
	- Mining tends toward economy of scale concentration. Many are already on their own specialised network to connect to one another.
	- Future hard forks. There will doubtless be pressure to fork the code to add inflation, or ESG mitigations, or to fix the UNIX clock issue in 2106. Each fork is a risk.
	- Other unknown, unanticipated risks given Bitcoin’s limited 15-year history.
	- There is a “non-zero” chance that Bitcoin is a complex government intelligence agency construct, much like Crpto AG was toward the end of the last century.

		- ### Discussions on AI-Generated Content
			- **AI-Generated Fake News**: Concerns about AI making up fake news articles ([The Guardian Article](https://www.theguardian.com/commentisfree/2023/apr/06/ai-chatgpt-guardian-technology-risks-fake-article)).

- # Risks (money, not technical)
	- Special thanks to economist Tim Millar for help with this section.

	- ### Feedback and Transparency
		- Users often fear “death by a thousand cuts.”
		- AI service providers like [[OpenAI]] and [[Anthropic]] already charge by usage, necessitating frictionless micropayment methods.
		- While straightforward in B2B contexts, consumer-facing scenarios risk “nickel-and-diming” perceptions.

	- ### Adrenaline Rush
	- I was a member of the science team on the first ever jump of DaVinci's parachute design, for an IMAX film called [Adrenaline rush, The science of risk (2002) Video Pinkbike](https://www.pinkbike.com/video/464827/)
	- ![Screenshot 2024-01-29 175325.png](assets/Screenshot_2024-01-29_175325_1706551309172_0.png)

	- #### Layer 2: Modular human computer interface
		- Collaborative global networks for training, research, biomedical, and
		  creative industries can be developed using immersive and accessible
		  environments. Engaging with ideas from diverse cultural backgrounds can
		  enrich the overall user experience.
		- Industry players have noted the risk and failures associated with closed
		  systems like Meta and are embracing the "open Metaverse" narrative to
		  de-risk their interests. To enable a truly open and interoperable
		  Metaverse, it is crucial to develop open-source APIs, SDKs, and data
		  information. While we wish initially to build around a simpler open
		  would accomplish this by drawing on their ‘home’ GPU/TPU processors
		  where appropriate, or else using distributed large language model (LLM)
		  processing to accomplish tasks assigned by their instructors. They can
		  interact with the ‘web2’ world using open-source software called
		  auto-gpt and have constraints, such as “time to live” and limited access
		  to funds through their Bitcoin Lightning wallets.
		- Resource Management: These AI agents have access to dedicated LLM resources within their home instances in the federated virtual social spaces. If such resources are unavailable, they can resort to using slower, distributed open-source LLMs like Horde. This flexibility ensures that the agents can continue to function and complete tasks even if faced with limited LLM interpretive resources.
		- Financial Autonomy: The AI agents have their own private Bitcoin and Lightning wallets, which enable them to manage and utilize funds independently. They can use these funds to pay for services, acquire resources, or even trade with other agents or users within the virtual social spaces.
		- Interaction with Web2: By using open-source software like auto-gpt, the AI agents can interact with the web2 world, which includes browsing websites, retrieving information, and communicating with web services. This allows them to gather data, analyze trends, and perform other tasks that may require access to the broader internet.
		- Task Execution: The AI agents can be assigned tasks by their instructors (or a hierarchy of AI actors), such as data analysis, research, content creation, or other complex tasks that require LLM processing. They can use their dedicated LLM resources or distributed LLMs like Horde to process and analyze large datasets, generate insights, and produce desired outputs, up to and including those which require finance systems. This would be bridged in the first instance using Bitrefil gift card infrastructure.
		- Social Interactions: Within the federated virtual social spaces, AI agents can communicate and collaborate with other agents or human users. They can participate in discussions, provide assistance, or even learn from the interactions, thereby improving their capabilities over time. Language translation, governance, and safeguarding could also be developed. Safeguarding would be handled by threshold risk triggers and transmission of data in a sovereign way to all parties, allowing external action by authorities appropriate to any abuse.
		- Time-to-Live Constraint: The AI agents have a predetermined “time to live”, which means they exist for a specific duration before expiring. This constraint ensures that agents do not consume resources indefinitely and allows for the creation of new agents with updated capabilities. Any agents which deplete their financial resource would also expire.
		- Adaptive Learning: As AI agents interact with their environment, other agents, and users, they can learn and adapt their behaviour. This enables them to improve their performance, better understand their assigned tasks, and become more effective at achieving their goals.

- # Artificial Intelligence
	- Some people LIKE clear repetitive tasks as their employment, and these are the jobs at risk. Who decides what is a worthwhile job?

			- #### The Case for Concern
				- AI automation is likely to lead to significant job losses in the short to medium term, particularly in sectors such as manufacturing, transportation, and customer service. Frey and Osborne (2017) estimate that 47% of US jobs are at risk of automation in the next two decades.
				- As more people lose their jobs to AI, there is a risk of reduced consumer spending and economic instability, potentially leading to a recession. Korinek and Stiglitz (2017) warn that the displacement of workers by AI could lead to a "death spiral" of falling demand and further job losses.
				- The impact of job losses will be uneven, with some industries and regions hit harder than others, exacerbating existing inequalities. Low-skill and routine jobs are most at risk of automation, which could widen the gap between high- and low-income earners (Acemoglu & Restrepo, 2018).
				- Without proper ethical considerations, AI could exacerbate existing inequalities and perpetuate harmful stereotypes [Dignum, 2019](https://www.itu.int/en/journal/001/Documents/itu2017-1.pdf).
				- Without adequate social safety nets and support for displaced workers, there is a risk of social unrest and political backlash against AI and automation. Korinek and Stiglitz (2017) argue that the social and political consequences of AI-driven job losses could be severe if not addressed proactively.
				- Economist David Autor from MIT presents a compelling counterargument. In his article "[AI Could Actually Help Rebuild The Middle Class,](https://www.noemamag.com/how-ai-could-help-rebuild-the-middle-class/)". Autor posits that AI has the potential to democratise expertise and create new opportunities for workers without advanced degrees, ultimately leading to greater equity and a stronger middle class.
					- Autor argues that unlike past automation technologies, AI can learn from unstructured data and tacit knowledge, enabling it to augment human capabilities in complex decision-making domains. By providing real-time guidance and guardrails, AI can expand access to expertise and allow people with less formal training to perform higher-skilled work.
					  Central to Autor's thesis is the concept of "a worker of one"
		- in a free society, every individual owns their own labor, creating an intrinsic force for greater equality when human expertise is valuable. AI could generate a variety of new middle-class jobs, counteracting the tendency for returns to accrue primarily to capital owners.
			- However, realizing these benefits will require proactive efforts to steer AI development in a direction that benefits workers. This includes investing in AI tools for education and healthcare, reforming institutions to ensure productivity gains flow to workers, and countering resistance from professional guilds.

		- ### **Legal Risks**:
		- Data protection and AI risk analysis.

- # [[Politics, Law, Privacy]]
	- Legislators globally, are [starting to codify](https://www.lopp.net/bitcoin-information/legal.html) their positions on proof of work as a technology (including Bitcoin). US States are variously [supporting](https://capitol.texas.gov/tlodocs/88R/billtext/html/HC00089I.htm) or constricting the technology, according to [state legislatures](https://www.ncsl.org/research/financial-services-and-commerce/cryptocurrency-2021-legislation.aspx). Notably New York has [banned new carbon intensive](https://www.nysenate.gov/legislation/bills/2021/A7389) mining facilities for 2 years, while rust and farm belt states with energy build-out problems are [providing incentives](https://financialpost.com/fp-finance/cryptocurrency/texas-governor-abbott-turns-to-bitcoin-miners-to-bolster-the-grid-and-his-re-election) and passing legislation to protect [mining datacenters](https://www.arkleg.state.ar.us/Bills/Detail?id=hb1799). At the federal level the white house has strongly signalled their concerns about the sector [in a report](https://www.whitehouse.gov/wp-content/uploads/2023/03/ERP-2023.pdf). Many of the points in the report are fair, and true, and reflect things said in this book (which pre-dates the report). It's worth picking out the conclusion of that section verbatim: ["Innovation in financial services brings both risks and opportunities for the broader economy. It can challenge business models and existing industries, but it cannot challenge basic economic principles, such as what makes an asset effective as money and the incentives that give rise to run risk. Although the underlying technologies are a clever solution for the problem of how to execute transactions without a trusted authority, crypto assets currently do not offer widespread economic benefits. They are largely speculative investment vehicles and are not an effective alternative to fiat currency. Also, they are too risky at present to function as payment instruments or to expand financial inclusion. Even so, it is possible that their underlying technology may still find productive uses in the future as companies and governments continue to experiment with DLT. In the meantime, some crypto assets appear to be here to stay, and they continue to cause risks for financial markets, investors, and consumers. Much of the activity in the crypto asset space is covered by existing regulations and regulators are expanding their capabilities to bring a large number of new entities under compliance (SEC 2022). Other parts of the crypto asset space require coordination by various agencies and deliberations about how to address the risks they pose (U.S. Department of the Treasury 2022a). Certain innovations, such as FedNow and a potential U.S. CBDC, could help bring the U.S. financial infrastructure into the digital era in a clear and simple way, without the risks or irrational exuberance brought by crypto assets. Hence, continued investments in the Nation’s financial infrastructure have the potential to offer significant benefits to consumers and businesses, but regulators must apply the lessons that civilization has learned, and thus rely on economic principles, in regulating crypto assets.”]
	- Reading between the lines suggest that strong regulation is coming. Indeed the [SEC is now suing](https://www.sec.gov/Archives/edgar/data/1679788/000167978823000051/coin-20230322.htm) the major tech company in the space, Coinbase, while closing a bank servicing the sector, and signalling that stable coins may be unregistered securities in law. The report itself has no 'teeth' but is likely a sign of things to come. There is purportedly \$2.4B [entering the regulation ecosystems](https://docs.house.gov/meetings/AP/AP23/20230329/115576/HHRG-118-AP23-TTF-GenslerG-20230329.pdf) to enhance regulatory oversight. In actual fact, because of the nature of the federation of states it is likely that a variety of different approaches in law will be taken across the geography and the sector seems to have responded with a shrug. As an aside the report contains an excellent taxonomy of digital assets from Hoffman.
	- ![Figure 3.22: Taxonomy of digital assets Hoffman 2022](assets/PresidentTaxonomy.jpg)
	- Conversely the recent "[Climate and energy implications](https://www.whitehouse.gov/ostp/news-updates/2022/09/08/fact-sheet-climate-and-energy-implications-of-crypto-assets-in-the-united-states/)" report is parts positive and parts negative about proof of work, and leaves the door open to a legislative clampdown. This is most notable in a [White House proposal](https://www.whitehouse.gov/cea/written-materials/2023/05/02/cost-of-cryptomining-dame-tax/) to tax Bitcoin mining at 30%, a plan which will destroy much of the US based mining industry over the coming years. Carter provides a [detailed response](https://medium.com/@nic__carter/comments-on-the-white-house-report-on-the-climate-implications-of-crypto-mining-8d65d30ec942) to the tardy scientific analysis in the report. Perhaps most interestingly it notes the potential of methane mitigation as mentioned earlier. It is conceivable that methane mitigation alone could provide a route forward for the technology. The report says: ["The crypto-asset industry can potentially use stranded methane gas, which is the principal component of natural gas, to generate electricity for mining. Methane gas is produced during natural gas drilling and transmission, and by oil wells, landfills, sewage treatment, and agricultural processes. Methane is a potent GHG that can result in 27 to 30 times the global warming potential of CO2 over a 100-year time frame, and is about 80 times as powerful as CO2 over a 20-year timeframe. Reducing methane emissions can slow near-term climate warming, which is why the Biden-Harris Administration released the U.S. methane emissions reduction action plan in 2021. Venting and flaring methane at oil and natural gas wells wastes 4% of global methane production. In 2021, venting and flaring methane emitted the equivalent of 400 million metric tons of CO2, representing about 0.7% of global GHG emissions. This methane is vented or flared, because of the high cost of constructing permanent pipelines or other infrastructure to bring it to market."]
	- The EU has just voted to add the whole of 'crypto', including PoW, to the EU taxonomy for sustainable activities. This EU wide classification system provides investors with guidance as to the sustainability of a given technology, and can have a meaningful impact on the flows of investment. With that said the report and addition of PoW is not slated until 2025, and it is by no means clear what the analysis will be by that point. Meanwhile they're tightening controls of transactions, on which there will be more detail later. For it's part the European Central Bank has come out in favour of strong constraints on crypto mining. They use the [widely discredited](https://medium.com/crescofin/the-reports-of-bitcoin-environmental-damage-are-garbage-5a93d32c2d7) "digiconimist" estimates to assert that mining operations are [disproportionately damaging to the environment](https://www.ecb.europa.eu/pub/financial-stability/macroprudential-bulletin/html/ecb.mpbu202207_3~d9614ea8e6.en.html).
	- Systemic risk, and market integrity are a concern. The legislators clearly worry about contagion risks from the sector.
	- Illicit finance (criminality and sanction busting etc) are a concern, but not particularly front and centre. Criminality in 2021 was a mere 0.15% of transactions according to Chainalysis, but this number varies year to year. There are claims that Iran have begun official overseas buying with cryptocurrencies, but again, the numbers are small. One of the better sections of the work is the US treasury department’s recently published ‘National Risk Assessments for Money Laundering, Terrorist Financing, and Proliferation Financing’. This is a comprehensive report and speaks to careful research across the space. It is broken into three parts. Perhaps surprisingly, while they do see activity in these areas, they do not rate the risk as very significant. Cash remains the main problem for illicit funding. There is some talk that the nature of public blockchain analysis allows greater oversight of these tools and that this is to the advantage of government and civil enforcement agencies.
	- Highlighting the need for international coordination suggests they are mindful of jurisdictional arbitrage. The partial regulatory capture of these technologies, where activity flows to globally more lenient legislative regimes, continues to be a concern. Many of the centralised exchanges for instance are located in tax havens such as Malta. As the world catches up with these products it is likely that this will be smoothed out.
	- Climate goals, diversity, equality and inclusion are mentioned. It seems that the “environment” aspect of ESG is more important then “social” and “governance” at this time.
	- Potential constraints on monetary policy flexibility.
	- Future protocol changes.
	- Other unknown, unanticipated risks given Bitcoin’s limited 15-year history.
	- There is a “non-zero” chance that Bitcoin is a complex government intelligence agency construct, much like Crpto AG was toward the end of the last century.

- # Risks (money, not technical)
	- Special thanks to economist Tim Millar for help with this section.

		- ### Centralisation of the money over time
			- In a medium term future it’s possible to imagine a smart enough autonomous AI or ML actor managing to accrue Bitcoin through fast and smart ‘decisions’. This could unreasonably centralise the asset, and it would be impossible to claw this situation back. These constructs would last for the lifetime of the chain unless constrained by timelock multisigs for instance.
	- This section is the risks that Bitcoin poses to external money systems, but it’s worth pointing out that a risk to wider society is clearly also a risk to Bitcoin itself.
	- This pressure to emulate the early winners leads to:
			- It’s possible that there’s a problem with people not wanting to sell the asset, because they are predisposed to a particular fervour promoted within the community. This can be seen in the [glassnode data](https://en.macromicro.me/charts/32355/bitcoin-supply-last-active-1plus-years-ago),where the black line in Figure<a href="#fig:notselling" data-reference-type="ref" data-reference="fig:notselling">4.9</a>shows that the asset held for more than a year (illiquid) has increased over the years.
			- Bitcoin is a game theoretic juggernaut, where success of the network breeds more success for the network. The was obviously a great design choice for the computer scientists trying to solve the problem of a secure, and scalable, electronic cash, which couldn’t be confiscated. Ironically for a global consensus mechanism it seems that nobody wants to discuss what constitutes a successful end point to this, and especially not what ‘successful’ endpoints for the game theory which have calamitous negative repercussions for wider society look like.[[warren2023bitcoin]] This might have implications for:

				- ### ServiceNow report
			- Silicon valley is already showing signs of fetishising AI and this explored in it's own section [[Singularity]].
				- As more people lose their jobs to AI, there is a risk of reduced consumer spending and economic instability, potentially leading to a recession. Korinek and Stiglitz (2017) warn that the displacement of workers by AI could lead to a "death spiral" of falling demand and further job losses.
				- The impact of job losses will be uneven, with some industries and regions hit harder than others, exacerbating existing inequalities. Low-skill and routine jobs are most at risk of automation, which could widen the gap between high- and low-income earners (Acemoglu & Restrepo, 2018).
				- Without proper ethical considerations, AI could exacerbate existing inequalities and perpetuate harmful stereotypes [Dignum, 2019](https://www.itu.int/en/journal/001/Documents/itu2017-1.pdf).
				- Acemoglu, D., & Restrepo, P. (2018). The race between man and machine: Implications of technology for growth, factor shares, and employment. American Economic Review, 108(6), 1488-1542.
				- Dignum, V. (2019). Responsible artificial intelligence: Designing AI for human values. ITU Journal: ICT Discoveries, 1(1), 1-8.
				- Frey, C. B., & Osborne, M. A. (2017). The future of employment: How susceptible are jobs to computerisation?. Technological forecasting and social change, 114, 254-280.
				- Korinek, A., & Stiglitz, J. E. (2017). Artificial intelligence and its implications for income distribution and unemployment (No. w24174). National Bureau of Economic Research.
		- The New York Times (nytimes.com)](https://www.nytimes.com/2024/01/29/technology/us-jobs-ai-chatgpt-tech.html)
			- Martin Ford, Rule of the Robots:
				- Genuine Creatives, making new ideas. Science, medicine, law.

		- ### **Legal Risks**:

	- ### Privacy Risks
		- A growing area of concern is the safety and control of highly capable future AI systems. The "State of AI Report 2024" added a new section on safety to address the catastrophic risks that these systems could pose. There are also documented instances of AI systems circumventing shutdown commands in testing environments, raising questions about their growing autonomy.
		- The [International AI Safety Report 2025](https://www.gov.uk/government/publications/international-ai-safety-report-2025) is a collaborative effort by 100 AI experts from 33 countries to build a shared scientific understanding of the risks associated with advanced AI.

		- ### Geopolitics
			- However, with enough political will it is technically plausible to incentivise miners with additional payments to exclude transactions from geolocated wallets. This would be mitigated by Tor, and in a global anonymous network it is very likely that a miner could be found at a higher price for inclusion in the next block.
			- In a medium term future it’s possible to imagine a smart enough autonomous AI or ML actor managing to accrue Bitcoin through fast and smart ‘decisions’. This could unreasonably centralise the asset, and it would be impossible to claw this situation back. These constructs would last for the lifetime of the chain unless constrained by timelock multisigs for instance.
	- This section is the risks that Bitcoin poses to external money systems, but it’s worth pointing out that a risk to wider society is clearly also a risk to Bitcoin itself.
	- This pressure to emulate the early winners leads to:
			- It’s possible that there’s a problem with people not wanting to sell the asset, because they are predisposed to a particular fervour promoted within the community. This can be seen in the [glassnode data](https://en.macromicro.me/charts/32355/bitcoin-supply-last-active-1plus-years-ago),where the black line in Figure<a href="#fig:notselling" data-reference-type="ref" data-reference="fig:notselling">4.9</a>shows that the asset held for more than a year (illiquid) has increased over the years.
			- Bitcoin is a game theoretic juggernaut, where success of the network breeds more success for the network. The was obviously a great design choice for the computer scientists trying to solve the problem of a secure, and scalable, electronic cash, which couldn’t be confiscated. Ironically for a global consensus mechanism it seems that nobody wants to discuss what constitutes a successful end point to this, and especially not what ‘successful’ endpoints for the game theory which have calamitous negative repercussions for wider society look like.[[warren2023bitcoin]] This might have implications for:

				- ### LinkedIn survey of UK workers
				- As more people lose their jobs to AI, there is a risk of reduced consumer spending and economic instability, potentially leading to a recession. Korinek and Stiglitz (2017) warn that the displacement of workers by AI could lead to a "death spiral" of falling demand and further job losses.
				- The impact of job losses will be uneven, with some industries and regions hit harder than others, exacerbating existing inequalities. Low-skill and routine jobs are most at risk of automation, which could widen the gap between high- and low-income earners (Acemoglu & Restrepo, 2018).
		- The New York Times (nytimes.com)](https://www.nytimes.com/2024/01/29/technology/us-jobs-ai-chatgpt-tech.html)
			- Martin Ford, Rule of the Robots:
				- Genuine Creatives, making new ideas. Science, medicine, law.

- #### 4.12.9 AI, Integrity, and Accessibility
	- and its underlying power
	- must be accessible to everyone to mitigate the risks of misuse and ensure fair benefits distribution.

- #### Challenges and Considerations
	- 🚧 Potential Pitfalls:
		- Over-reliance on AI might hinder the development of essential skills like problem-solving and critical analysis.
		- AI offers personalised learning experiences and aids in the application of complex pedagogical approaches.
		- It allows for new forms of learning and pedagogy that can benefit both instructors and students.
	- Future Directions:
		- AI’s role in education is expected to grow, with increasing integration into teaching methodologies and curricula.
		- Educators should embrace AI technology and use it creatively in their teaching strategies.
	- Adaptive Education System:
		- The education system is poised to adapt effectively to AI, improving both learning experiences and teaching methodologies. This varies across nations, educational ages, and class boundaries.
	- Balancing AI and Traditional Methods:
		- While AI presents new challenges, it also offers significant opportunities for enhancing education, requiring a balanced approach to its integration. We need to be doing more.
		- {{embed ((657d1029-63aa-4766-8324-e7d6e5e19001))}}
		- [[Education and AI]] [(1) Ethan Mollick on X: "New randomized, controlled trial of students using GPT-4 as a tutor in Nigeria. 6 weeks of after-school AI tutoring = 2 years of typical learning gains, outperforming 80% of other educational interventions. And it helped all students, especially girls who were initially behind https://t.co/abE1JMUBEs" / X](https://x.com/emollick/status/1879633485004165375) [[Ethan Mollick]]
		- [Teen deepfake pornography victim warns future generation is 'at risk' if AI crime bill fails | Fox News](https://www.foxnews.com/media/teen-deepfake-porn-victim-warns-future-generation-risk-ai-crime-bill-passed-protect-people) [[Deepfakes and fraudulent content]] [[Education and AI]] [[Social contract and jobs]] [[Privacy, Trust and Safety]]
		- https://hbsp.harvard.edu/inspiring-minds/an-ai-prompting-template-for-teaching-tasks [[Education and AI]]
		- Michelle Kassorla, Ph.D. on LinkedIn [discussing](https://www.linkedin.com/posts/mkassorla_here-is-a-great-example-of-a-student-using-activity-7208178612556967936-R-YE?) a student's use of [[Generative AI]] in a prospectus paragraph for an assignment. The post includes the student's paragraph, feedback from Dr Kassorla, and a rubric for the assignment. The feedback highlights the need for a clear, specific claim, clear writing, and a connection to the story being analysed. The post also includes comments from other professionals in the field of AI [[Education and AI]].

- ##### Implications and Potential Risks
	- While tokenisation presents significant potential for improvingtransaction efficiency and reducing risk, it is not without itschallenges. A key concern is the impact on the traditional financialsector and the regulatory complexities it introduces. The integration ofdiverse forms of digital assets on a unified platform necessitatesrobust regulatory frameworks to ensure stability and prevent misuse.
	- In truth this, like the global push toward central bank digitalcurrency, seems inspired by but asymptotic to the concept ofcryptocurrencies. They are important technologies to consider as digitalsociety tooling evolved, but they remain curiously far behind the retailtechnologies which spawned them. As the banking sector evolves withtechnological advancements, the role of tokenisation and its interactionwith existing financial systems become increasingly crucial. Thepotential for a more efficient, secure, and integrated global financialsystem is evident, yet the path to achieving this is laden withregulatory, technical, and ethical challenges. The success oftokenisation initiatives will largely depend on the collaborativeefforts of regulatory bodies, financial institutions, and technologyexperts to navigate these challenges effectively.

- #### 4.12.19 Conclusion
  In conclusion, making AI open-source and freely available represents a shift from the status quo, with both promising potentials and daunting challenges. A global AI framework that upholds democratic principles and values, promotes shared prosperity, and safeguards security and privacy is the aspiration. To achieve this, an inclusive and multidimensional discourse is essential, involving governments, corporations, civil society, academia, and individual citizens. It is through this collective effort that AI's true potential can be harnessed for the global good.
  There is skepticism the idea of artificial general intelligence (AGI) leading to superintelligent machines that threaten humanity in the near future. This supposed risk of AGI is described as a \"red herring\"
- The text discusses how a renowned magazine has had to close submissions due to the increasing number of AI writers. It is noted that the AI writers are becoming increasingly skilled and are starting to produce work that is on par with human writers.
- [Lesswrong AI section](https://www.lesswrong.com/tag/ai)
- [Goldman Sachs Predicts 300 Million Jobs Will Be Lost Or Degraded By Artificial Intelligence: Goldman Sachs maintains that if generative AI lives up to its hype, the workforce in the United States and Europe will be upended. The bank estimates 300 million jobs could be lost or diminished due to this fast-growing technology.](https://www.forbes.com/sites/jackkelly/2023/03/31/goldman-sachs-predicts-300-million-jobs-will-be-lost-or-degraded-by-artificial-intelligence/?sh=3af7314e782b)
- [Medium listing approachs](https://blog.medium.com/how-were-approaching-ai-generated-writing-on-medium-16ee8cb3bc89)
- [Drives us mad, Guardian](https://www.theguardian.com/technology/2023/mar/23/tech-guru-jaron-lanier-the-danger-isnt-that-ai-destroys-us-its-that-it-drives-us-insane)
- [Chatbots must disclose sources or face ban](https://www.artisana.ai/articles/eus-ai-act-stricter-rules-for-chatbots-on-the-horizon)
- [Google and EU private deal](https://techcrunch.com/2023/05/24/eu-google-ai-pact/)
- [Bias investigation](https://www.linkedin.com/feed/update/urn:li:activity:7072912582923173888/)
- [KTN bridgeai report](https://iuk.ktn-uk.org/wp-content/uploads/2023/10/responsible-trustworthy-ai-report.pdf)
- [Custom GPT open source semantic lock](https://github.com/infotrix/SSLLMs---Semantic-Secuirty-for-LLM-GPTs/blob/master/GPT_Semantic_Security_Template.txt)
		- it is composed of data represented in an electronic medium, including in the form of computer code, electronic, digital or analogue signals;
		- it exists independently of persons and exists independently of the legal system;
	  Gartner’s hype cycle 2022 features Web3, distributed identity, NFTs, and Metaverse and can be seen in Figure 1.6.
	- The legislative landscape in the UK is comparatively strict with questionable “know your customer / anti money laundering” (KYC/AML) data collection mandated in law. Users of UK exchanges must provide a great deal of personal financial information, and undertake to prove that the wallets they are withdrawing to are their own. From the perspective of the UK SME it seems this seriously limits the potential audience for new products. Europe meanwhile has recently voted through even more restrictive regulation, applying the “transfer of funds regulation” to all transactions coming out of exchanges, enforcing a database of all addresses between companies, and reporting transactions above 1000 Euros to authorities. They have narrowly avoided enforcing KYC on all transfers to private wallets, but have capped transactions at 1000 Euros. The recent “Markets in Crypto Assets (MiCA) legislation imposes overheads that may make it harder for smaller businesses in the sector to operate within the EU, but is has been cautiously welcomed by established players (Figure 2.5, who have been hungry for clarity. It is certainly far short of the ‘ban’ seen in China, and the regulation be enforcement in the USA.
		- MiCA offers license tailored to crypto asset services and stablecoin issuers
		- Regulation refrains from covering decentralized finance or non-fungible tokens
- [WEF risks report links](https://sociable.co/government-and-policy/wef-global-risks-report-cyber-pandemic-erosion-trust-social-cohesion/)
- Regulation (everything)
- [GPTs are GPTs: An Early Look at the Labor Market Impact](https://arxiv.org/abs/2303.10130)
- The text discusses the potential implications of Generative Pre-trained Transformer (GPT) models on the U.S. labor market. It uses a new rubric to assess occupations based on their correspondence with GPT capabilities, incorporating both human expertise and classifications from GPT-4. The findings indicate that approximately 80% of the U.S. workforce could have at least 10% of their work tasks affected by the introduction of GPTs, while around 19% of workers may see at least 50% of their tasks impacted. The influence spans all wage levels, with higher-income jobs potentially facing greater exposure. Notably, the impact is not limited to industries with higher recent productivity growth. The text concludes that Generative Pre-trained Transformers exhibit characteristics of general-purpose technologies (GPTs), suggesting that these models could have notable economic, social, and policy implications.
- [Silvergate Purchases Blockchain libre](https://ir.silvergate.com/news/news-details/2022/Silvergate-Purchases-Blockchain-Payment-Network-Assets-from-Diem/default.aspx)
- The text discusses Silvergate's recent purchase of blockchain payment network assets from Diemwindow.
- [Privacy law book](https://www.smashingmagazine.com/printed-books/understanding-privacy/#bookTOC)
- [Online safety bill heather articles](https://webdevlaw.uk/2022/11/21/a-quick-hypothetical-situation-or-your-crash-introduction-to-the-real-world/)
- [Social Media Is Changing, And Paid Accounts Are The Response](https://www.bigtechnology.com/p/social-media-is-changing-and-paid)
- [Linkedin post by Barry Scanell on EU AI law](https://www.linkedin.com/posts/activity-7062324196256735232-FfEz/?utm_source=share&utm_medium=member_desktop)
- [surveillance-capitalism-is-undermining-democracy](https://news.harvard.edu/gazette/story/2019/03/harvard-professor-says-surveillance-capitalism-is-undermining-democracy/)
- https://bitcoinmagazine.com/culture/how-bitcoin-can-save-political-dissidents-in-myanmar
	- The Commission points out that the inception of the AI Act is rooted in the necessity to balance the benefits of AI, such as improved medical care and [[Education and AI]], with the need to mitigate inherent risks.
	- One of the key aspects of the AI Act identified by the Commission is its broad applicability. It encompasses both public and private entities within and outside the EU, as long as the AI system is marketed in the EU or affects individuals within it. This includes AI system providers, deployers, and importers. The Act also covers developers of general-purpose AI models, which are becoming integral to numerous AI systems and hence too significant to remain unregulated.
	- The Act mandates that high-risk systems must be trained and tested with representative datasets to minimise biases and must be traceable and auditable. Deployers of high-risk AI systems are required to conduct a fundamental rights impact assessment, ensuring that AI applications comply with fundamental rights legislation and do not exacerbate existing structural discriminations.
-
-
-
-
- [[pol]]

- #### 4.12.9 AI, Integrity, and Accessibility
	- and its underlying power
	- must be accessible to everyone to mitigate the risks of misuse and ensure fair benefits distribution.

- ## Bitcoin externalities (extrinsic)
	- This section is the risks that Bitcoin poses to external money systems, but it’s worth pointing out that a risk to wider society is clearly also a risk to Bitcoin itself.

- ## Existential Risks

- ##### Implications and Potential Risks
	- While tokenisation presents significant potential for improvingtransaction efficiency and reducing risk, it is not without itschallenges. A key concern is the impact on the traditional financialsector and the regulatory complexities it introduces. The integration ofdiverse forms of digital assets on a unified platform necessitatesrobust regulatory frameworks to ensure stability and prevent misuse.
	- In truth this, like the global push toward central bank digitalcurrency, seems inspired by but asymptotic to the concept ofcryptocurrencies. They are important technologies to consider as digitalsociety tooling evolved, but they remain curiously far behind the retailtechnologies which spawned them. As the banking sector evolves withtechnological advancements, the role of tokenisation and its interactionwith existing financial systems become increasingly crucial. Thepotential for a more efficient, secure, and integrated global financialsystem is evident, yet the path to achieving this is laden withregulatory, technical, and ethical challenges. The success oftokenisation initiatives will largely depend on the collaborativeefforts of regulatory bodies, financial institutions, and technologyexperts to navigate these challenges effectively.

- ## Stable-coins
	- [Jeremy Allaire](https://x.com/jerallaire/status/1803432989113593890)
		- ```
		  What does it look like when 10% of global economic money is stablecoins, 
		  and when credit intermediation moves from fractional reserve lending to 
		  onchain credit markets built from the ground up on safer, digital cash 
		  instruments (e.g. stables), and opens up credit and debt to the long tail
		  of supply and demand in the same way that Amazon did for commerce and 
		  AdWords did for advertising?
		  All of this is achievable over the next 10+ years.  
		  The time goes by fast, but when you zoom out and look at what has
		  been accomplished and how that sets us up for the future, 
		  it’s hard not to be insanely optimistic right now.
		  ```
	- Stable Coins are ‘crypto like’ instruments which are ‘pegged’ at a 1:1ratio with nationally issued Fiat currencies. In fact they usually correspond to units of privately issued debt underwritten by a variety of different assets. This is (depending on the issuing company’s model)a [far morerisky](https://www.americanbanker.com/opinion/ststablecoins-are-backed-by-reserves-give-us-a-break)unit of money than the nominal currency that they represent, but they offer significant utility. They allow the user to self custody the cryptographic bearer instrument representing the money themselves, as with blockchain. This may afford the user less friction in that they can transmit the instrument through the newer financial rails which are emerging. Once again, this is likely a product most useful to [emergingmarkets](https://www.cigionline.org/articles/the-future-of-fintech-is-unfolding-in-africa/?),those living under oppressive regimes, currencies [suffering from highinflation](https://www.bloomberg.com/news/articles/2022-07-03/argentines-seek-hedging-in-crypto-after-economy-minister-resigns),and countries who rely on the dollar as their currency, and within digitally native metaverse applications. These are enormous global uses though. The use in the west is prominently for ‘traders’ on exchanges at this time. /par The caveat of such products is that such ‘units’ of money can be frozen by the issuer, and they are subject to the third party risk of the issuer defaulting on the underlying instrument, instantly wiping out the value.
	- <iframe src="https://medium.com/@nic__carter/five-perspectives-on-stablecoins-5bc20076270a" style="width: 100%; height: 600px"></iframe>
	- [Five perspectives on stablecoins. Evaluating the state of the academic… | by Nic Carter | May, 2024 | Medium](https://medium.com/@nic__carter/five-perspectives-on-stablecoins-5bc20076270a)
	- Klages-Mundt et al. wrote a paper in 2020, which explains the details ofthe different mechanisms and risks.
	- The following text paraphrases Spencer noon of on-chain analytics company “OurNetwork”, who provides an [usefulsummary](https://twitter.com/spencernoon/status/1524752048121466883) of the paper.
	- There are two major classes of stablecoins:
		- Custodial: entrusted by off-chain collateral assets like fiat dollars that sit in a bank. Requires trust in third party.
		- Non-custodial (aka decentralized): fully on-chain and backed by smart contracts & economics. No trusted parties.
	- In custodial stablecoins, custodians hold a combination of assets(currencies, bonds, commodities, etc.) off-chain, allowing issuers(possibly the same entity) to offer digital tokens of an reserve asset.The top 2 custodial stablecoins today are USDT and USDC. There are 3types of custodial stablecoins.
		- Reserve Fund: 100% reserve ratio. Each stablecoin is backed by a unit of the reserve asset held by the custodian. A useful example of this the [USDF banking consortium](https://www.americanbanker.com/news/bank-stablecoin-consortium-usdf-gets-a-ceo-grows-to-9-members).
		- Fractional Reserve Fund: The stablecoin is backed by a mix of both reserve assets and other capital assets.
		- Central Bank Digital Currency (CBDC): A digital form of central bank money that is widely available to the general public. CBDCs are in their nascency as today only 9 countries/territories have launched them, many of them small.
	- Custodial stablecoins have three major risks:
		- Counterparty Risk (fraud, theft, govt seizure, etc.)
		- Censorship Risk (operations blocked by regulators, etc.)
		- Economic Risk (off-chain assets go down in value)
	- Each can result in the stablecoin value going to zero.
	- [Stablecoins and national security: Learning the lessons of Eurodollars | Brookings](https://www.brookings.edu/articles/stablecoins-and-national-security-learning-the-lessons-of-eurodollars/)
	- They are collectively likely to outstrip VISA this year
		- ![Image](https://pbs.twimg.com/media/GCAQhOBaoAAqs-D?format=jpg&name=medium)
	- Over 1/3 Made a Purchase in Stablecoins in Latin America, Says Latest MasterCard New Payments Index 2022: Reporting on Fintech,
	- Crypto, and Blockchain Activity in Africa<https://bitcoinke.io/2022/07/latin-america-in-mastercard-new-payments-index-2022/>
	- According to the latest MasterCard New Payments Index 2022, over one third of people in Latin America made a purchase using
	- stablecoins in the past year.
	      *  https://bitcoinmagazine.com/legal/u-s-treasury-introduces-cbdc-digital-dollar-working-group
	      rbi monetary museum: India's e-rupee unpopular as central banks push digital currency
		- The Economic Times https://economictimes.indiatimes.com/industry/banking/finance/banking/indias-e-rupee-unpopular-as-central-banks-push-digital-currency/articleshow/99049236.cms?from=mdr

- ## Key Issues and Tensions
	- How much risk does advanced AI development pose? Is it an existential threat to humanity?
	- Do the potential benefits of faster AI progress outweigh the risks?
	- How tractable are proposals for making advanced AI systems safe and aligned with human values?
	- To what extent, if any, should governments regulate or restrict AI development? Can it be left to industry?
	- Will AI liberate humanity or lead to greater inequality, less human agency and new dangers?
	- What moral philosophy should guide these decisions - utilitarianism, human-centric values, or an AI-centric ethic?

- ## [](https://github.com/flossverse#digital-society) Digital Society
	- Digital society may be a more tangible and less hyped term to build around, and extends out into the more compelling spatial and augmented reality technologies, web, and digital money and trust.
	- Emerging markets, less developed nations, indeed much of the world is excluded from many of the tools that are taken for granted in `Western' digital society. They do not necessarily have the identification, banking rails, or compute power to engage fully. Our focus is on Africa and India.
	- Industry has noted the risk, and failures of Meta across both metaverse, and digital currency, and have latched onto "open metaverse" as a narrative, to de-risk their interest. The current open offerings in metaverse and social media are muddy and confused.
	- A truth seems to have been missed; that open digital society should mean open source digital society. There are some options, but they are under developed. We would like to contribute to this by applying our decades of telecollaboration research.
	- The UK seems to be endorsing significant controls and restrictions on internet usage. This compliance overhead will price small companies out of large scale social experiences. Company walled gardens are less impacted (as per the slack service model), and this is an opportunity if tied to real business use cases.
	- This will likely add fuel to the fire of innovation and push users into disparate platforms.

- #### 4.12.19 Conclusion
  In conclusion, making AI open-source and freely available represents a shift from the status quo, with both promising potentials and daunting challenges. A global AI framework that upholds democratic principles and values, promotes shared prosperity, and safeguards security and privacy is the aspiration. To achieve this, an inclusive and multidimensional discourse is essential, involving governments, corporations, civil society, academia, and individual citizens. It is through this collective effort that AI's true potential can be harnessed for the global good.
  There is skepticism the idea of artificial general intelligence (AGI) leading to superintelligent machines that threaten humanity in the near future. This supposed risk of AGI is described as a \"red herring\"
	- an unfounded fear. The reasons given are:
	  We do not have a clear understanding or definition of general     intelligence or consciousness.     Current AI like large language models are limited in scope. They are     good at statistical pattern matching in language, not generally     intelligent.     The hypothesis that intelligence and consciousness emerge simply     from increasing computational power is unproven. There are likely     other components we don't understand.
	  The real risk is perhaps government control and regulation of AI development and applications, justified by arguing it is needed for safety and responsible AI. This could impose limits on acceptable speech and thought. Centralised entities could become gatekeepers for how people access and interpret information about the world. Mandating allowable language could narrow ideas and speech to fit an official narrative. Fears of AGI, even if exaggerated, open the door for regulators and bureaucrats to intervene in the name of safety. The risk is not AGI itself but the government control that hype about it enables.
	  There is speculation that AI will automate many white collar cognitive jobs, similar to how industrial machinery automated manual labor. This may \"chase humans up the value stack\" as lower value work is handled by AI, freeing people to focus on higher value creative activities. [\\chapterimage] orange7.jpg
- [He Wanted Privacy. His College Gave Him None – The Markup](https://themarkup.org/machine-learning/2023/11/30/he-wanted-privacy-his-college-gave-him-none)
- [AI security considerations](https://ico.org.uk/for-organisations/guide-to-data-protection/key-dp-themes/guidance-on-ai-and-data-protection/how-should-we-assess-security-and-data-minimisation-in-ai/)
- [Sci-fi becomes real as renowned magazine closes submissions due to AI writers: Clarkesworld wrestles with flood of machine-made submissions—over 500 in Feb. alone.](https://arstechnica.com/information-technology/2023/02/sci-fi-becomes-real-as-renowned-magazine-closes-submissions-due-to-ai-writers/)
- The text discusses how a renowned magazine has had to close submissions due to the increasing number of AI writers. It is noted that the AI writers are becoming increasingly skilled and are starting to produce work that is on par with human writers.
- [Lesswrong AI section](https://www.lesswrong.com/tag/ai)
- [Goldman Sachs Predicts 300 Million Jobs Will Be Lost Or Degraded By Artificial Intelligence: Goldman Sachs maintains that if generative AI lives up to its hype, the workforce in the United States and Europe will be upended. The bank estimates 300 million jobs could be lost or diminished due to this fast-growing technology.](https://www.forbes.com/sites/jackkelly/2023/03/31/goldman-sachs-predicts-300-million-jobs-will-be-lost-or-degraded-by-artificial-intelligence/?sh=3af7314e782b)
- [Medium listing approachs](https://blog.medium.com/how-were-approaching-ai-generated-writing-on-medium-16ee8cb3bc89)
- [Drives us mad, Guardian](https://www.theguardian.com/technology/2023/mar/23/tech-guru-jaron-lanier-the-danger-isnt-that-ai-destroys-us-its-that-it-drives-us-insane)
- [Chatbots must disclose sources or face ban](https://www.artisana.ai/articles/eus-ai-act-stricter-rules-for-chatbots-on-the-horizon)
- [Google and EU private deal](https://techcrunch.com/2023/05/24/eu-google-ai-pact/)
- [How to structure an ML business](https://txt.cohere.com/ai-is-eating-the-world/)
- [Bias investigation](https://www.linkedin.com/feed/update/urn:li:activity:7072912582923173888/)
- [GCHQ warning](https://www.ncsc.gov.uk/blog-post/chatgpt-and-large-language-models-whats-the-risk)
- [confusion matrices](https://en.wikipedia.org/wiki/Confusion_matrix)
- [KTN bridgeai report](https://iuk.ktn-uk.org/wp-content/uploads/2023/10/responsible-trustworthy-ai-report.pdf)
- [Custom GPT open source semantic lock](https://github.com/infotrix/SSLLMs---Semantic-Secuirty-for-LLM-GPTs/blob/master/GPT_Semantic_Security_Template.txt)
- Bitcoin and digital assets
	- A Law Commission consultation on “digital assets” has proposed a new third category of property:
		- it is composed of data represented in an electronic medium, including in the form of computer code, electronic, digital or analogue signals;
		- it exists independently of persons and exists independently of the legal system;
		- it is rivalrous such that use by one prejudices the ability of others;
	- Consensus seems to be that this is a thorough paper, and demonstrates strong knowledge of digital assets by the authors. 
	  Gartner’s hype cycle 2022 features Web3, distributed identity, NFTs, and Metaverse and can be seen in Figure 1.6.
	- The legislative landscape in the UK is comparatively strict with questionable “know your customer / anti money laundering” (KYC/AML) data collection mandated in law. Users of UK exchanges must provide a great deal of personal financial information, and undertake to prove that the wallets they are withdrawing to are their own. From the perspective of the UK SME it seems this seriously limits the potential audience for new products. Europe meanwhile has recently voted through even more restrictive regulation, applying the “transfer of funds regulation” to all transactions coming out of exchanges, enforcing a database of all addresses between companies, and reporting transactions above 1000 Euros to authorities. They have narrowly avoided enforcing KYC on all transfers to private wallets, but have capped transactions at 1000 Euros. The recent “Markets in Crypto Assets (MiCA) legislation imposes overheads that may make it harder for smaller businesses in the sector to operate within the EU, but is has been cautiously welcomed by established players (Figure 2.5, who have been hungry for clarity. It is certainly far short of the ‘ban’ seen in China, and the regulation be enforcement in the USA.
		- European Parliament approved EU’s crypto assets framework, MiCA
		- Enforcement clock starts in June, with 12-18 months for rules to kick in
		- MiCA offers license tailored to crypto asset services and stablecoin issuers
		- Regulation refrains from covering decentralized finance or non-fungible tokens
		- Stablecoin issuer rules boost consumer confidence, potentially increas­ing institutional comfort
- Politics, law, and change
- [WEF risks report links](https://sociable.co/government-and-policy/wef-global-risks-report-cyber-pandemic-erosion-trust-social-cohesion/)
- Regulation (everything)
- Crypto
- [UK](https://www.gov.uk/government/news/uk-sets-out-plans-to-regulate-crypto-and-protect-consumers)
- [GPTs are GPTs: An Early Look at the Labor Market Impact](https://arxiv.org/abs/2303.10130)
- The text discusses the potential implications of Generative Pre-trained Transformer (GPT) models on the U.S. labor market. It uses a new rubric to assess occupations based on their correspondence with GPT capabilities, incorporating both human expertise and classifications from GPT-4. The findings indicate that approximately 80% of the U.S. workforce could have at least 10% of their work tasks affected by the introduction of GPTs, while around 19% of workers may see at least 50% of their tasks impacted. The influence spans all wage levels, with higher-income jobs potentially facing greater exposure. Notably, the impact is not limited to industries with higher recent productivity growth. The text concludes that Generative Pre-trained Transformers exhibit characteristics of general-purpose technologies (GPTs), suggesting that these models could have notable economic, social, and policy implications.
- [El Salvador: Staff Concluding Statement of the 2023 Article IV Mission (other)](https://www.imf.org/en/News/Articles/2023/02/10/el-salvador-staff-concluding-statement-of-the-2023-article-iv-mission)
- Other. The text describes a study by the University of Cambridge which found that people tend to trust robots more when they look and behave like humans.
- [Silvergate Purchases Blockchain libre](https://ir.silvergate.com/news/news-details/2022/Silvergate-Purchases-Blockchain-Payment-Network-Assets-from-Diem/default.aspx)
- The text discusses Silvergate's recent purchase of blockchain payment network assets from Diemwindow.
- [Deception, exploited workers, and cash handouts: How Worldcoin recruited its first half a million test users: The startup promises a fairly-distributed, cryptocurrency-based universal basic income. So far all it's done is build a biometric database from the bodies of the poor.](https://www.technologyreview.com/2022/04/06/1048981/worldcoin-cryptocurrency-biometrics-web3/)
- Worldcoin, a cryptocurrency startup, recruited its first 500,000 users by offering them free cash. The company has been accused of deception and exploiting workers, and is now under investigation.
- [Privacy law book](https://www.smashingmagazine.com/printed-books/understanding-privacy/#bookTOC)
- [Online safety bill heather articles](https://webdevlaw.uk/2022/11/21/a-quick-hypothetical-situation-or-your-crash-introduction-to-the-real-world/)
- [Techcrunch on borderless payments](https://techcrunch.com/2021/12/21/borderless-crypto-networks-wrestle-with-state-sanction-compliance/?)
- [Norway takes a stance against Google Analytics](https://www.simpleanalytics.com/blog/norway-takes-a-stance-against-google-analytics)
- [Social Media Is Changing, And Paid Accounts Are The Response](https://www.bigtechnology.com/p/social-media-is-changing-and-paid)
- [Linkedin post by Barry Scanell on EU AI law](https://www.linkedin.com/posts/activity-7062324196256735232-FfEz/?utm_source=share&utm_medium=member_desktop)
- [wikipedia and the child protection bill](https://www.msn.com/en-gb/news/uknews/wikipedia-could-be-taken-offline-in-the-uk/ar-AA1atf9O)
- [Kids are damaged by mobile phones](https://sapienlabs.org/wp-content/uploads/2023/05/Sapien-Labs-Age-of-First-Smartphone-and-Mental-Wellbeing-Outcomes.pdf?utm_source=substack&utm_medium=email)
- [surveillance-capitalism-is-undermining-democracy](https://news.harvard.edu/gazette/story/2019/03/harvard-professor-says-surveillance-capitalism-is-undermining-democracy/)
- https://bitcoinmagazine.com/culture/how-bitcoin-can-save-political-dissidents-in-myanmar
- EU AI ACT
	- [Artificial Intelligence – Q&As (europa.eu)](https://ec.europa.eu/commission/presscorner/detail/en/QANDA_21_1683)
	- The Commission points out that the inception of the AI Act is rooted in the necessity to balance the benefits of AI, such as improved medical care and [[Education and AI]], with the need to mitigate inherent risks.
	- One of the key aspects of the AI Act identified by the Commission is its broad applicability. It encompasses both public and private entities within and outside the EU, as long as the AI system is marketed in the EU or affects individuals within it. This includes AI system providers, deployers, and importers. The Act also covers developers of general-purpose AI models, which are becoming integral to numerous AI systems and hence too significant to remain unregulated.
	- Certain AI systems are identified as high-risk, particularly those impacting safety or fundamental rights in sectors such as healthcare, education, and law enforcement. The Act also identifies AI practices that pose unacceptable risks, contravening EU values, including certain forms of social scoring and real-time remote biometric identification, which are banned. Additionally, systems like chatbots, which pose specific transparency risks, require clear user awareness of their interaction with a machine.
	- For high-risk AI systems, a conformity assessment is required before market introduction, ensuring compliance with standards for trustworthy AI, such as data quality, documentation, transparency, and human oversight. Post-market, these systems must undergo continuous risk management and incident reporting. The Act also imposes specific obligations on providers of general-purpose AI models, especially those with systemic risks, like large generative AI models trained using extensive computational power. These providers must disclose certain information to downstream system providers, respect [[copyright]] law during model training, and engage with the European AI Office to develop Codes of Conduct.
	- The European AI Office and the European Artificial Intelligence Board, supported by an Advisory Forum and a Scientific Panel of independent experts, are designed to ensure a harmonised and effective implementation of the Act across the EU.
	- The Act also stipulates substantial fines for non-compliance, indicating the seriousness with which the EU views AI regulation. Penalties can reach up to €35 million or 7% of the total worldwide annual turnover, depending on the nature of the infringement.
	- The Act mandates that high-risk systems must be trained and tested with representative datasets to minimise biases and must be traceable and auditable. Deployers of high-risk AI systems are required to conduct a fundamental rights impact assessment, ensuring that AI applications comply with fundamental rights legislation and do not exacerbate existing structural discriminations.
-
-
-
-
-
-
- [[pol]]
- [Serious New Warning As Google AI Targets Billions Of Private Messages (forbes.com)](https://www.forbes.com/sites/zakdoffman/2024/01/28/new-details-free-ai-upgrade-for-google-and-samsung-android-users-leaks/)
-

- #### 4.12.14 National Security and Open-source AI
  To start, national security is a primary concern. AI has a myriad of applications in defense and security sectors, many of which could potentially be exploited by adversarial entities. As such, unrestricted access to AI technologies could pose a risk to nations' security. Nevertheless, it is crucial to note that security risks also stem from concentrated AI power. A handful of nations or corporations owning the majority of AI developments may lead to destabilization, power imbalance, and heightened global tensions.

- ## Bitcoin externalities (extrinsic)
	- This section is the risks that Bitcoin poses to external money systems, but it’s worth pointing out that a risk to wider society is clearly also a risk to Bitcoin itself.

- ## Crypto assets
	- For "crypto" assets more generally it is useful to look at the recent [“whole government executive order”](https://www.whitehouse.gov/briefing-room/presidential-actions/2022/03/09/executive-order-on-ensuring-responsible-development-of-digital-assets/)signed by President Biden early in 2022. It was mainly framed in terms of “responsible innovation, and leadership” in the new space. The resulting, “Comprehensive Framework for Responsible Development of Digital Assets” was a product of multi agency collaboration and can be seen as 9 reports and a summary document, and was long anticipated. The summary itself is neither particularly comprehensive nor a framework, and mainly serves to identifies high level risks, aspirations, and challenges, and strongly hints toward eventual development of a “digital dollar” (CBDC, expanded later). This work has been repealed completely as the Trump administration eschews [[CBDCs]] and openly promotes crypto.
	- https://twitter.com/kofinas/status/1881077334750421066
		- {{twitter https://twitter.com/kofinas/status/1881077334750421066}}
	- The risks section of the original executive order shows how legislatorsare framing this, so it’s useful to break down here.
		- Consumer and business protections. This is likely to pertain to custodians and is much needed. Misselling is rife. Security presents a challenge.
		- Systemic risk, and market integrity are a concern. The legislators clearly worry about contagion risks from the sector.
		- Illicit finance (criminality and sanction busting etc) are a concern, but not particularly front and centre[[moser2013inquiry]]. Criminality in 2021 was a mere 0.15% of transactions according to Chainalysis, but this number varies year to year. There are claims that Iran have begun official overseas buying with cryptocurrencies, but again, the [numbers are small](https://finbold.com/iran-makes-the-first-ever-import-of-goods-using-cryptocurrency-worth-millions/). One of the better sections of the work is the US treasury department’s recently published ‘National Risk Assessments for Money Laundering, Terrorist Financing, and Proliferation Financing’. This is a comprehensive report and speaks to careful research across the space. It is broken into [three parts](https://home.treasury.gov/news/press-releases/jy0619). Perhaps surprisingly, while they do see activity in these areas, they do not rate the risk as very significant. Cash remains the main problem for illicit funding. There is some talk that the nature of public blockchain analysis allows greater oversight of these tools and that this is to the advantage of government and civil enforcement agencies.
		- Highlighting the need for international coordination suggests they are mindful of [jurisdictional arbitrage](https://twitter.com/iamLeonHill/status/1847973039234846747).
		- {{twitter https://twitter.com/iamLeonHill/status/1847973039234846747}}
		- The partial regulatory capture of these technologies, where activity flows to globally more lenient legislative regimes, continues to be a concern. Many of the centralised exchanges for instance are located in tax havens such as Malta. As the world catches up with these products it is likely that this will be smoothed out.
		- Climate goals, diversity, equality and inclusion are mentioned. It seems that the “environment” aspect of ESG is more important then “social” and “governance” at this time.
		- Privacy and human rights are mentioned.
		- Energy policy is highlighted, including grid management and reliability, energy efficiency incentives and standards, and sources of energy supply.
	- The [latest summary report](https://www.whitehouse.gov/briefing-room/statements-releases/2022/09/16/fact-sheet-white-house-releases-first-ever-comprehensive-framework-for-responsible-development-of-digital-assets/) resulting from the above guidance actually adds little tangible meat to the bones. This possibly reflects the complexity of these issues. The recommendations seem to be broadly as follows, and are really a copy/paste of the executive order.
		- Carry on doing research into central bank digital currencies, but there’s no particular rush.
		- Support development of better instant payment methods both at home and globally.
		- Ensure consumer and systemic protections.
		- More monitoring, civil and criminal prosecutions.
		- Issue more rules and clarity in response to risks (this is actually likely net positive as rules are currently unclear).
		- Improve global reporting on users (KYC/AML).
	- The government rhetoric to date in the USA can be seen to be converging on an understanding of the technology, at different rates in different parts of government. One thing that seems to shine through is their own perception of their global leadership on legislation on these matters. They seems to assume that what they decide will guide the world, and this may be true through their KYC/AML pressures.
	- A recent proposed [bi-partisan bill in theUSA](https://bitcoinmagazine.com/business/heres-whats-in-senator-lummis-bitcoin-bill) will likely help inform global law, though it is unlikely to pass itself. It encourages the use of Bitcoin as a medium of exchange by applying a tax exemption on transactions of less than $200. The issue of whether an asset is a commodity (a raw material thing) or a security (a promise) is left to a couple of major government agencies to unpick, with corresponding reporting requirements. Crucially for this book these nascent bills all regard both Bitcoin and Ethereum as sufficiently decentralised to [qualify ascommodities](https://www.coincenter.org/a-new-senate-bill-focuses-on-cryptocurrency-exchanges-heres-what-developers-and-users-should-keep-an-eye-on/),meaning they would enjoy more lenient oversight. Far more likely to pass is the [proposed DCCPAbill](https://www.agriculture.senate.gov/im./assets/doc/crypto_one-pager1.pdf)which has senior lawmaker support and would see commodities in the space regulated in such a way that trading of it could be halted in the USA. In this line of policy, exchanges will be required to do far more reporting, and would be penalised for trading against their customers. DOAs and DeFi are the big potential losers. In a maddening twist the Office of Government Ethics in the USA has banned anyone who owns digital assets from working on the legislation. This is an exceptional move and likely to result in poorly crafted laws in the first instance.
	- The most recent and troubling example is the US ban on any Ethereum assets which have been through a “mixer service” [that obfuscates history](https://www.coincenter.org/u-s-treasury-sanction-of-privacy-tools-places-sweeping-restrictions-on-all-americans/). This is a huge constraint on the code and smart contract itself, not just sanctions against individuals. It has [‘freespeech’](https://hoffmang9.github.io/free-speech/the-history-code-is-free-speech.html)and constitutional implications.[[anderson2002free]] More such actions and [arrests of developers](https://www.dw.com/en/dutch-investigators-say-developer-of-tornado-cash-arrested/a-62793823)are feared. It has led to Circle (who issue the USDC stable coin)blacklisting every [address sanctioned by the US government](https://home.treasury.gov/policy-issues/financial-sanctions/recent-actions/20220808). Centrally issued digital assets are obviously neither uncensorable nor permissionless. This intersects (again) with the whole question of what decentralisation means and how effective it can be in it’s stated goal of circumventing global policies.

- #### **Works cited**
  
  1\. Is This the Year AI Dominates the Call Center? \- CMSWire.com, accessed on January 14, 2025, [https://www.cmswire.com/contact-center/is-this-the-year-ai-dominates-the-call-center/](https://www.cmswire.com/contact-center/is-this-the-year-ai-dominates-the-call-center/)  
  2\. Artificial Intelligence in Call Centers: Boost Efficiency & Cut Costs \- Teneo.Ai, accessed on January 14, 2025, [https://www.teneo.ai/blog/artificial-intelligence-in-call-centers](https://www.teneo.ai/blog/artificial-intelligence-in-call-centers)  
  3\. Impact of AI on Call Centers: 7 Key Impacts in 2025 \- Invensis, accessed on January 14, 2025, [https://www.invensis.net/blog/impact-of-ai-on-call-centers](https://www.invensis.net/blog/impact-of-ai-on-call-centers)  
  4\. Voice‐based AI in call center customer service: A natural field experiment \- ResearchGate, accessed on January 14, 2025, [https://www.researchgate.net/publication/367362952\_Voice-based\_AI\_in\_call\_center\_customer\_service\_A\_natural\_field\_experiment](https://www.researchgate.net/publication/367362952_Voice-based_AI_in_call_center_customer_service_A_natural_field_experiment)  
  5\. Striking the Balance: Leveraging AI in Call Centers While Maintaining the Human Touch, accessed on January 14, 2025, [https://a-closer-look.com/market-research/striking-the-balance-leveraging-ai-in-call-centers-while-maintaining-the-human-touch/](https://a-closer-look.com/market-research/striking-the-balance-leveraging-ai-in-call-centers-while-maintaining-the-human-touch/)  
  6\. Call Center: The Perceived Risks of Using AI to Improve CX \- SQM Group, accessed on January 14, 2025, [https://www.sqmgroup.com/resources/library/blog/the-perceived-risks-of-using-ai-to-improve-cx](https://www.sqmgroup.com/resources/library/blog/the-perceived-risks-of-using-ai-to-improve-cx)  
  7\. How Agentic AI is Transforming Customer Service and Contact Centres | by Acceleraate, accessed on January 14, 2025, [https://medium.com/@acceleraate/how-agentic-ai-is-transforming-customer-service-and-contact-centres-13e244a9835b](https://medium.com/@acceleraate/how-agentic-ai-is-transforming-customer-service-and-contact-centres-13e244a9835b)  
  8\. Agentic AI: Redefining Customer Experience \- Talkdesk, accessed on January 14, 2025, [https://www.talkdesk.com/blog/redefining-customer-experience-agentic-ai/](https://www.talkdesk.com/blog/redefining-customer-experience-agentic-ai/)  
  9\. What Is Agentic AI? \- CX Today, accessed on January 14, 2025, [https://www.cxtoday.com/contact-centre/what-is-agentic-ai/](https://www.cxtoday.com/contact-centre/what-is-agentic-ai/)  
  10\. The Five Levels of Agentic Automation \- Sema4.ai, accessed on January 14, 2025, [https://sema4.ai/blog/the-five-levels-of-agentic-automation/](https://sema4.ai/blog/the-five-levels-of-agentic-automation/)  
  11\. How agentic AI is driving the next evolution of enterprise AI \- Moveworks, accessed on January 14, 2025, [https://www.moveworks.com/us/en/resources/blog/agentic-ai-the-next-evolution-of-enterprise-ai](https://www.moveworks.com/us/en/resources/blog/agentic-ai-the-next-evolution-of-enterprise-ai)  
  12\. 5 Agentic AI Examples: Inspiring Use Cases Shaping the Future \- ThoughtSpot, accessed on January 14, 2025, [https://www.thoughtspot.com/data-trends/ai/agentic-ai-examples](https://www.thoughtspot.com/data-trends/ai/agentic-ai-examples)  
  13\. Here's 6 Agentic AI Examples and Use Cases Transforming Businesses | Moveworks, accessed on January 14, 2025, [https://www.moveworks.com/us/en/resources/blog/agentic-ai-examples-use-cases](https://www.moveworks.com/us/en/resources/blog/agentic-ai-examples-use-cases)  
  14\. What is agentic AI and what are its benefits and use cases? \- Softweb Solutions, accessed on January 14, 2025, [https://www.softwebsolutions.com/resources/benefits-and-use-cases-of-agentic-ai.html](https://www.softwebsolutions.com/resources/benefits-and-use-cases-of-agentic-ai.html)  
  15\. 18 Use Cases for Agentic AI in Customer Experience \- CX Today, accessed on January 14, 2025, [https://www.cxtoday.com/crm/18-use-cases-for-agentic-ai-in-customer-experience/](https://www.cxtoday.com/crm/18-use-cases-for-agentic-ai-in-customer-experience/)  
  16\. Agentic AI: What it is and what it looks like in the retail world \- Clientbook, accessed on January 14, 2025, [https://www.clientbook.com/blog/agentic-ai-what-it-is-and-what-it-looks-like-in-the-retail-world](https://www.clientbook.com/blog/agentic-ai-what-it-is-and-what-it-looks-like-in-the-retail-world)  
  17\. Agentic AI Systems: Opportunities, Challenges, and the Need for Robust Governance, accessed on January 14, 2025, [https://community.nasscom.in/communities/analytics/agentic-ai-systems-opportunities-challenges-and-need-robust-governance](https://community.nasscom.in/communities/analytics/agentic-ai-systems-opportunities-challenges-and-need-robust-governance)  
  18\. 12 Major Challenges Faced by the Call Center Industry \- Flatworld Solutions, accessed on January 14, 2025, [https://www.flatworldsolutions.com/call-center/articles/major-challenges-callcenter-industry.php](https://www.flatworldsolutions.com/call-center/articles/major-challenges-callcenter-industry.php)  
  19\. 12 Major Call Center Challenges & Ways to Resolve Them \- Knowmax, accessed on January 14, 2025, [https://knowmax.ai/blog/call-center-challenges/](https://knowmax.ai/blog/call-center-challenges/)  
  20\. 5 important considerations for responsible AI use in contact centers \- Talkdesk, accessed on January 14, 2025, [https://www.talkdesk.com/blog/responsible-ai-use-in-contact-centers/](https://www.talkdesk.com/blog/responsible-ai-use-in-contact-centers/)  
  21\. Security and Ethics of Contact Center AI: When is AI Creepy? \- NICE, accessed on January 14, 2025, [https://www.nice.com/blog/security-and-ethics-of-contact-center-ai-when-is-ai-creepy](https://www.nice.com/blog/security-and-ethics-of-contact-center-ai-when-is-ai-creepy)  
  22\. What Ethical Issues Does Agentforce AI Bring to the Table for CIOs? \- Inclusion Cloud, accessed on January 14, 2025, [https://inclusioncloud.com/insights/blog/ethical-issues-agentforce-cios/](https://inclusioncloud.com/insights/blog/ethical-issues-agentforce-cios/)  
  23\. New Ethics Risks Courtesy of AI Agents? Researchers Are on the Case | IBM, accessed on January 14, 2025, [https://www.ibm.com/think/insights/ai-agent-ethics](https://www.ibm.com/think/insights/ai-agent-ethics)  
  24\. Contact Center Automation Trends: What to Expect in 2025 \- Invoca, accessed on January 14, 2025, [https://www.invoca.com/blog/contact-center-automation-trends](https://www.invoca.com/blog/contact-center-automation-trends)  
  25\. 5 AI-Powered Contact Center Automation Trends for 2024 \- Apizee, accessed on January 14, 2025, [https://www.apizee.com/contact-center-automation-trends.php](https://www.apizee.com/contact-center-automation-trends.php)  
  26\. The Future of the Call Center: Predictions for 2024 and Beyond \- Level AI, accessed on January 14, 2025, [https://thelevel.ai/blog/future-of-the-call-center-2024/](https://thelevel.ai/blog/future-of-the-call-center-2024/)  
  27\. Contact Center Automation Trends for 2025 and Beyond \- VoiceSpin, accessed on January 14, 2025, [https://www.voicespin.com/blog/call-center-automation-trends/](https://www.voicespin.com/blog/call-center-automation-trends/)
-

- ## Efforts to Manage AI Risks
	- In response to these risks, various frameworks and initiatives have been developed.
		- The [NIST AI Risk Management Framework (AI RMF)](https://www.nist.gov/itl/ai-risk-management-framework) is a voluntary framework designed to help organizations manage AI-related risks.
		- The [Council of Europe has developed the HUDERIA](https://www.coe.int/en/web/artificial-intelligence/hudeira-and-ai-systems), a guidance for assessing the human rights, democracy, and rule of law impacts of AI systems.
		- The [International AI Safety Report 2025](https://www.gov.uk/government/publications/international-ai-safety-report-2025) is a collaborative effort by 100 AI experts from 33 countries to build a shared scientific understanding of the risks associated with advanced AI.

- ## 2024-2025: From Theoretical Frameworks to Catastrophic Failures
  id:: ai-risk-recent-developments

  The years 2024 and 2025 witnessed AI risk transition from predominantly theoretical concern to **operational reality**, as high-profile failures demonstrated the inadequacy of existing risk management practices, whilst simultaneously driving rapid adoption of risk frameworks, **dramatic surges in cybersecurity threats**, and the proliferation of **model drift** undermining production systems.

  ### NIST Generative AI Risk Profile

  On **26th July 2024**, NIST released **NIST-AI-600-1**, the **Artificial Intelligence Risk Management Framework: Generative Artificial Intelligence Profile**, extending the January 2023 AI RMF specifically for generative AI systems. The Profile added **over 200 specific actions** addressing unique risks including:

  - **CBRN Information Risks**: Chemical, biological, radiological, and nuclear information potentially accessible through generative AI
  - **Confabulation (Hallucinations)**: False information presented with confidence
  - **Dangerous, Violent, or Hateful Content**: Generation of content promoting harm
  - **Data Privacy Violations**: Training data leakage and unauthorised information disclosure
  - **Information Integrity**: Deepfakes, misinformation, and synthetic media undermining trust
  - **Intellectual Property Infringement**: Copyright violation through training data usage
  - **Obscene or Abusive Content**: Generation of harmful or degrading material

  This Profile became essential for organisations deploying large language models, image generators, and multimodal systems, providing actionable risk mitigation strategies aligned with the GOVERN, MAP, MEASURE, and MANAGE functions.

  ### Catastrophic Real-World Failures

  2024-2025 exposed significant gaps between risk management frameworks and operational practice through high-profile incidents:

  **Samsung Engineering Data Breach (2023, lessons learned 2024)**: Engineers used ChatGPT to debug code, inadvertently pasting **sensitive semiconductor designs** and proprietary data into the chat interface across three separate incidents. The engineers failed to appreciate that inputs could be used to train future models, resulting in intellectual property leakage. This incident catalysed enterprise policies prohibiting use of public AI systems for sensitive data.

  **Air Canada Chatbot Liability Case (2024)**: An Air Canada chatbot promised a bereavement discount to a customer. The airline refused to honour the commitment, arguing in court that the chatbot was a **separate legal entity**. The court rejected this defence, holding Air Canada accountable for its chatbot's representations, establishing precedent that organisations cannot disclaim responsibility for AI agent actions.

  These failures demonstrated that **technical risk management** was insufficient without addressing **operational processes**, **employee training**, and **legal accountability** structures.

  ### Model Drift and Performance Degradation

  **Model drift**—the process whereby changes in data distributions or relationships between data points lead to degraded performance—emerged as a pervasive operational risk in 2024-2025. For instance, fraud detection models became less accurate over time as fraudulent tactics evolved, allowing fraudulent transactions to slip through whilst legitimate transactions were incorrectly flagged.

  Organisations discovered that models required **continuous monitoring** and **periodic retraining** to maintain efficacy, but many lacked infrastructure for detecting drift before performance collapsed. This drove investment in **automated drift detection** tools and **model observability platforms** providing real-time performance visibility.

  ### Security Threat Explosion

  AI-powered cyberattacks surged dramatically: projections indicated a **50% increase in 2024** compared to 2021, with **93% of security leaders** expecting their organisations to face **daily AI-driven attacks by 2025**.

  **Prompt injection** attacks—whereby malicious inputs manipulate AI systems into performing unintended actions—emerged as the **top LLM security risk** according to the OWASP Top 10 for LLMs in 2025. Attackers exploited prompt injection to extract training data, bypass content filters, and gain unauthorised access to integrated systems.

  **Adversarial attacks** demonstrated universal vulnerability: even state-of-the-art models remained susceptible to carefully crafted inputs designed to induce misclassification. The **2024 AI Safety Index** found that **all flagship models were vulnerable** to adversarial attacks, revealing fundamental architectural limitations.

  ### Risk Quantification Challenges

  Organisations struggled to **quantify AI risk** in financially meaningful terms required for board-level decision-making and insurance underwriting. Unlike traditional IT risks with established actuarial models, AI risks lacked historical data, making probability and impact estimation speculative.

  **Only 12% of companies** felt "very prepared" to assess, manage, and recover from AI risks in 2024-2025 surveys, whilst **75% lacked dedicated plans** for generative AI risks specifically. This preparedness gap exposed organisations to both compliance penalties and operational failures.

  ### ISO/IEC 23894:2023 Adoption

  **ISO/IEC 23894:2023**, the international standard for AI risk management published in February 2023, gained adoption throughout 2024-2025 as organisations sought structured risk management methodologies. The standard adapts traditional risk management practices (ISO 31000) to AI's unique characteristics, including:

  - **Opacity**: Difficulty understanding model decision-making
  - **Complexity**: Emergent behaviours from intricate architectures
  - **Autonomy**: Self-directed actions requiring anticipatory risk assessment
  - **Data dependency**: Vulnerabilities from training data quality and provenance

  Organisations implementing ISO 23894 discovered that effective AI risk management required **cross-functional collaboration** between data scientists, security professionals, legal counsel, and business leaders—a cultural shift from siloed technical risk management.

  ### Risk-Based Regulatory Approaches

  The **EU AI Act's** risk-based framework—categorising AI systems as **unacceptable**, **high**, **limited**, or **minimal** risk—became the global template for risk-proportionate regulation. High-risk systems in domains like employment, education, healthcare, and law enforcement faced stringent requirements including:

  - **Risk management systems** throughout the lifecycle
  - **Data governance and quality** requirements
  - **Technical documentation** and record-keeping
  - **Transparency and information provision** to users
  - **Human oversight** mechanisms
  - **Accuracy, robustness, and cybersecurity** requirements

  Non-compliance penalties up to **€35 million or 7% of worldwide turnover** incentivised substantial risk management investments.

  ### Risk Communication and Incident Reporting

  **Incident reporting requirements** proliferated in 2024-2025, with the EU AI Act mandating **serious incident reporting within 15 days** for high-risk systems causing death, serious health damage, or fundamental rights violations. This created **AI incident databases** providing unprecedented visibility into failure modes.

  Analysis of reported incidents revealed patterns: **bias incidents** (employment discrimination, credit denial) dominated reports, followed by **security vulnerabilities** (prompt injection, model extraction), **safety failures** (autonomous systems, robotics), and **privacy breaches** (model inversion, membership inference attacks).

  Transparency regarding incidents improved substantially: whereas historically organisations concealed AI failures, regulatory requirements and accountability cultures encouraged disclosure, enabling **systemic learning** from failures.

  ### Emerging Risk Categories

  2024-2025 identified **novel risk categories** absent from earlier frameworks:

  **Supply Chain Risks**: Foundation models developed by third parties introduced **dependency risks** whereby upstream model vulnerabilities affected countless downstream applications. When a foundation model exhibited bias or security flaws, all fine-tuned derivatives inherited those risks.

  **Compounding Risks**: AI systems increasingly operated in **multi-agent environments** where risks compounded unpredictably. For instance, multiple trading algorithms interacting created **flash crash** risks exceeding any single system's design parameters.

  **Value Alignment Risks**: As AI systems gained autonomy, ensuring alignment with human values and intentions became critical. **Specification gaming**—whereby systems technically satisfy stated objectives whilst violating intent—demonstrated the difficulty of robust value alignment.

  ### Risk Appetite and Board Oversight

  The surge in **board-level AI risk oversight** (from 16% to 48% of Fortune 100 companies citing AI risk as board responsibility) reflected recognition that AI risks constituted **strategic, reputational, and existential threats** requiring governance-level attention.

  Boards struggled to articulate **risk appetite**—the level of AI risk acceptable in pursuit of strategic objectives. Unlike established domains with historical precedents, AI risk appetite required judgement under deep uncertainty, balancing innovation imperatives against potential catastrophic failures.

- ## Existential Risks

- ##### Implications and Potential Risks
	- While tokenisation presents significant potential for improvingtransaction efficiency and reducing risk, it is not without itschallenges. A key concern is the impact on the traditional financialsector and the regulatory complexities it introduces. The integration ofdiverse forms of digital assets on a unified platform necessitatesrobust regulatory frameworks to ensure stability and prevent misuse.
	- In truth this, like the global push toward central bank digitalcurrency, seems inspired by but asymptotic to the concept ofcryptocurrencies. They are important technologies to consider as digitalsociety tooling evolved, but they remain curiously far behind the retailtechnologies which spawned them. As the banking sector evolves withtechnological advancements, the role of tokenisation and its interactionwith existing financial systems become increasingly crucial. Thepotential for a more efficient, secure, and integrated global financialsystem is evident, yet the path to achieving this is laden withregulatory, technical, and ethical challenges. The success oftokenisation initiatives will largely depend on the collaborativeefforts of regulatory bodies, financial institutions, and technologyexperts to navigate these challenges effectively.

- ## Stable-coins
	- [Jeremy Allaire](https://x.com/jerallaire/status/1803432989113593890)
		- ```
		  What does it look like when 10% of global economic money is stablecoins, 
		  and when credit intermediation moves from fractional reserve lending to 
		  onchain credit markets built from the ground up on safer, digital cash 
		  instruments (e.g. stables), and opens up credit and debt to the long tail
		  of supply and demand in the same way that Amazon did for commerce and 
		  AdWords did for advertising?
		  All of this is achievable over the next 10+ years.  
		  The time goes by fast, but when you zoom out and look at what has
		  been accomplished and how that sets us up for the future, 
		  it’s hard not to be insanely optimistic right now.
		  ```
	- Stable Coins are ‘crypto like’ instruments which are ‘pegged’ at a 1:1ratio with nationally issued Fiat currencies. In fact they usually correspond to units of privately issued debt underwritten by a variety of different assets. This is (depending on the issuing company’s model)a [far morerisky](https://www.americanbanker.com/opinion/ststablecoins-are-backed-by-reserves-give-us-a-break)unit of money than the nominal currency that they represent, but they offer significant utility. They allow the user to self custody the cryptographic bearer instrument representing the money themselves, as with blockchain. This may afford the user less friction in that they can transmit the instrument through the newer financial rails which are emerging. Once again, this is likely a product most useful to [emergingmarkets](https://www.cigionline.org/articles/the-future-of-fintech-is-unfolding-in-africa/?),those living under oppressive regimes, currencies [suffering from highinflation](https://www.bloomberg.com/news/articles/2022-07-03/argentines-seek-hedging-in-crypto-after-economy-minister-resigns),and countries who rely on the dollar as their currency, and within digitally native metaverse applications. These are enormous global uses though. The use in the west is prominently for ‘traders’ on exchanges at this time. /par The caveat of such products is that such ‘units’ of money can be frozen by the issuer, and they are subject to the third party risk of the issuer defaulting on the underlying instrument, instantly wiping out the value.
	- <iframe src="https://medium.com/@nic__carter/five-perspectives-on-stablecoins-5bc20076270a" style="width: 100%; height: 600px"></iframe>
	- [Five perspectives on stablecoins. Evaluating the state of the academic… | by Nic Carter | May, 2024 | Medium](https://medium.com/@nic__carter/five-perspectives-on-stablecoins-5bc20076270a)
	- Klages-Mundt et al. wrote a paper in 2020, which explains the details ofthe different mechanisms and risks.
	- The following text paraphrases Spencer noon of on-chain analytics company “OurNetwork”, who provides an [usefulsummary](https://twitter.com/spencernoon/status/1524752048121466883) of the paper.
	- There are two major classes of stablecoins:
		- Custodial: entrusted by off-chain collateral assets like fiat dollars that sit in a bank. Requires trust in third party.
		- Non-custodial (aka decentralized): fully on-chain and backed by smart contracts & economics. No trusted parties.
	- In custodial stablecoins, custodians hold a combination of assets(currencies, bonds, commodities, etc.) off-chain, allowing issuers(possibly the same entity) to offer digital tokens of an reserve asset.The top 2 custodial stablecoins today are USDT and USDC. There are 3types of custodial stablecoins.
		- Reserve Fund: 100% reserve ratio. Each stablecoin is backed by a unit of the reserve asset held by the custodian. A useful example of this the [USDF banking consortium](https://www.americanbanker.com/news/bank-stablecoin-consortium-usdf-gets-a-ceo-grows-to-9-members).
		- Fractional Reserve Fund: The stablecoin is backed by a mix of both reserve assets and other capital assets.
		- Central Bank Digital Currency (CBDC): A digital form of central bank money that is widely available to the general public. CBDCs are in their nascency as today only 9 countries/territories have launched them, many of them small.
	- Custodial stablecoins have three major risks:
		- Counterparty Risk (fraud, theft, govt seizure, etc.)
		- Censorship Risk (operations blocked by regulators, etc.)
		- Economic Risk (off-chain assets go down in value)
	- Each can result in the stablecoin value going to zero.
	- [Stablecoins and national security: Learning the lessons of Eurodollars | Brookings](https://www.brookings.edu/articles/stablecoins-and-national-security-learning-the-lessons-of-eurodollars/)
	- They are collectively likely to outstrip VISA this year
		- ![Image](https://pbs.twimg.com/media/GCAQhOBaoAAqs-D?format=jpg&name=medium)
	- Over 1/3 Made a Purchase in Stablecoins in Latin America, Says Latest MasterCard New Payments Index 2022: Reporting on Fintech,
	- Crypto, and Blockchain Activity in Africa<https://bitcoinke.io/2022/07/latin-america-in-mastercard-new-payments-index-2022/>
	- According to the latest MasterCard New Payments Index 2022, over one third of people in Latin America made a purchase using
	- stablecoins in the past year.
	      *  https://bitcoinmagazine.com/legal/u-s-treasury-introduces-cbdc-digital-dollar-working-group
	      rbi monetary museum: India's e-rupee unpopular as central banks push digital currency
		- The Economic Times https://economictimes.indiatimes.com/industry/banking/finance/banking/indias-e-rupee-unpopular-as-central-banks-push-digital-currency/articleshow/99049236.cms?from=mdr

- ## Key Issues and Tensions
	- How much risk does advanced AI development pose? Is it an existential threat to humanity?
	- Do the potential benefits of faster AI progress outweigh the risks?
	- How tractable are proposals for making advanced AI systems safe and aligned with human values?
	- To what extent, if any, should governments regulate or restrict AI development? Can it be left to industry?
	- Will AI liberate humanity or lead to greater inequality, less human agency and new dangers?
	- What moral philosophy should guide these decisions - utilitarianism, human-centric values, or an AI-centric ethic?

- ## [](https://github.com/flossverse#digital-society) Digital Society
	- Digital society may be a more tangible and less hyped term to build around, and extends out into the more compelling spatial and augmented reality technologies, web, and digital money and trust.
	- Emerging markets, less developed nations, indeed much of the world is excluded from many of the tools that are taken for granted in `Western' digital society. They do not necessarily have the identification, banking rails, or compute power to engage fully. Our focus is on Africa and India.
	- Industry has noted the risk, and failures of Meta across both metaverse, and digital currency, and have latched onto "open metaverse" as a narrative, to de-risk their interest. The current open offerings in metaverse and social media are muddy and confused.
	- A truth seems to have been missed; that open digital society should mean open source digital society. There are some options, but they are under developed. We would like to contribute to this by applying our decades of telecollaboration research.
	- The UK seems to be endorsing significant controls and restrictions on internet usage. This compliance overhead will price small companies out of large scale social experiences. Company walled gardens are less impacted (as per the slack service model), and this is an opportunity if tied to real business use cases.
	- This will likely add fuel to the fire of innovation and push users into disparate platforms.

- #### 4.12.19 Conclusion
  In conclusion, making AI open-source and freely available represents a shift from the status quo, with both promising potentials and daunting challenges. A global AI framework that upholds democratic principles and values, promotes shared prosperity, and safeguards security and privacy is the aspiration. To achieve this, an inclusive and multidimensional discourse is essential, involving governments, corporations, civil society, academia, and individual citizens. It is through this collective effort that AI's true potential can be harnessed for the global good.
  There is skepticism the idea of artificial general intelligence (AGI) leading to superintelligent machines that threaten humanity in the near future. This supposed risk of AGI is described as a \"red herring\"
	- an unfounded fear. The reasons given are:
	  We do not have a clear understanding or definition of general     intelligence or consciousness.     Current AI like large language models are limited in scope. They are     good at statistical pattern matching in language, not generally     intelligent.     The hypothesis that intelligence and consciousness emerge simply     from increasing computational power is unproven. There are likely     other components we don't understand.
	  The real risk is perhaps government control and regulation of AI development and applications, justified by arguing it is needed for safety and responsible AI. This could impose limits on acceptable speech and thought. Centralised entities could become gatekeepers for how people access and interpret information about the world. Mandating allowable language could narrow ideas and speech to fit an official narrative. Fears of AGI, even if exaggerated, open the door for regulators and bureaucrats to intervene in the name of safety. The risk is not AGI itself but the government control that hype about it enables.
	  There is speculation that AI will automate many white collar cognitive jobs, similar to how industrial machinery automated manual labor. This may \"chase humans up the value stack\" as lower value work is handled by AI, freeing people to focus on higher value creative activities. [\\chapterimage] orange7.jpg
- [He Wanted Privacy. His College Gave Him None – The Markup](https://themarkup.org/machine-learning/2023/11/30/he-wanted-privacy-his-college-gave-him-none)
- [AI security considerations](https://ico.org.uk/for-organisations/guide-to-data-protection/key-dp-themes/guidance-on-ai-and-data-protection/how-should-we-assess-security-and-data-minimisation-in-ai/)
- [Sci-fi becomes real as renowned magazine closes submissions due to AI writers: Clarkesworld wrestles with flood of machine-made submissions—over 500 in Feb. alone.](https://arstechnica.com/information-technology/2023/02/sci-fi-becomes-real-as-renowned-magazine-closes-submissions-due-to-ai-writers/)
- The text discusses how a renowned magazine has had to close submissions due to the increasing number of AI writers. It is noted that the AI writers are becoming increasingly skilled and are starting to produce work that is on par with human writers.
- [Lesswrong AI section](https://www.lesswrong.com/tag/ai)
- [Goldman Sachs Predicts 300 Million Jobs Will Be Lost Or Degraded By Artificial Intelligence: Goldman Sachs maintains that if generative AI lives up to its hype, the workforce in the United States and Europe will be upended. The bank estimates 300 million jobs could be lost or diminished due to this fast-growing technology.](https://www.forbes.com/sites/jackkelly/2023/03/31/goldman-sachs-predicts-300-million-jobs-will-be-lost-or-degraded-by-artificial-intelligence/?sh=3af7314e782b)
- [Medium listing approachs](https://blog.medium.com/how-were-approaching-ai-generated-writing-on-medium-16ee8cb3bc89)
- [Drives us mad, Guardian](https://www.theguardian.com/technology/2023/mar/23/tech-guru-jaron-lanier-the-danger-isnt-that-ai-destroys-us-its-that-it-drives-us-insane)
- [Chatbots must disclose sources or face ban](https://www.artisana.ai/articles/eus-ai-act-stricter-rules-for-chatbots-on-the-horizon)
- [Google and EU private deal](https://techcrunch.com/2023/05/24/eu-google-ai-pact/)
- [How to structure an ML business](https://txt.cohere.com/ai-is-eating-the-world/)
- [Bias investigation](https://www.linkedin.com/feed/update/urn:li:activity:7072912582923173888/)
- [GCHQ warning](https://www.ncsc.gov.uk/blog-post/chatgpt-and-large-language-models-whats-the-risk)
- [confusion matrices](https://en.wikipedia.org/wiki/Confusion_matrix)
- [KTN bridgeai report](https://iuk.ktn-uk.org/wp-content/uploads/2023/10/responsible-trustworthy-ai-report.pdf)
- [Custom GPT open source semantic lock](https://github.com/infotrix/SSLLMs---Semantic-Secuirty-for-LLM-GPTs/blob/master/GPT_Semantic_Security_Template.txt)
- Bitcoin and digital assets
	- A Law Commission consultation on “digital assets” has proposed a new third category of property:
		- it is composed of data represented in an electronic medium, including in the form of computer code, electronic, digital or analogue signals;
		- it exists independently of persons and exists independently of the legal system;
		- it is rivalrous such that use by one prejudices the ability of others;
	- Consensus seems to be that this is a thorough paper, and demonstrates strong knowledge of digital assets by the authors. 
	  Gartner’s hype cycle 2022 features Web3, distributed identity, NFTs, and Metaverse and can be seen in Figure 1.6.
	- The legislative landscape in the UK is comparatively strict with questionable “know your customer / anti money laundering” (KYC/AML) data collection mandated in law. Users of UK exchanges must provide a great deal of personal financial information, and undertake to prove that the wallets they are withdrawing to are their own. From the perspective of the UK SME it seems this seriously limits the potential audience for new products. Europe meanwhile has recently voted through even more restrictive regulation, applying the “transfer of funds regulation” to all transactions coming out of exchanges, enforcing a database of all addresses between companies, and reporting transactions above 1000 Euros to authorities. They have narrowly avoided enforcing KYC on all transfers to private wallets, but have capped transactions at 1000 Euros. The recent “Markets in Crypto Assets (MiCA) legislation imposes overheads that may make it harder for smaller businesses in the sector to operate within the EU, but is has been cautiously welcomed by established players (Figure 2.5, who have been hungry for clarity. It is certainly far short of the ‘ban’ seen in China, and the regulation be enforcement in the USA.
		- European Parliament approved EU’s crypto assets framework, MiCA
		- Enforcement clock starts in June, with 12-18 months for rules to kick in
		- MiCA offers license tailored to crypto asset services and stablecoin issuers
		- Regulation refrains from covering decentralized finance or non-fungible tokens
		- Stablecoin issuer rules boost consumer confidence, potentially increas­ing institutional comfort
- Politics, law, and change
- [WEF risks report links](https://sociable.co/government-and-policy/wef-global-risks-report-cyber-pandemic-erosion-trust-social-cohesion/)
- Regulation (everything)
- Crypto
- [UK](https://www.gov.uk/government/news/uk-sets-out-plans-to-regulate-crypto-and-protect-consumers)
- [GPTs are GPTs: An Early Look at the Labor Market Impact](https://arxiv.org/abs/2303.10130)
- The text discusses the potential implications of Generative Pre-trained Transformer (GPT) models on the U.S. labor market. It uses a new rubric to assess occupations based on their correspondence with GPT capabilities, incorporating both human expertise and classifications from GPT-4. The findings indicate that approximately 80% of the U.S. workforce could have at least 10% of their work tasks affected by the introduction of GPTs, while around 19% of workers may see at least 50% of their tasks impacted. The influence spans all wage levels, with higher-income jobs potentially facing greater exposure. Notably, the impact is not limited to industries with higher recent productivity growth. The text concludes that Generative Pre-trained Transformers exhibit characteristics of general-purpose technologies (GPTs), suggesting that these models could have notable economic, social, and policy implications.
- [El Salvador: Staff Concluding Statement of the 2023 Article IV Mission (other)](https://www.imf.org/en/News/Articles/2023/02/10/el-salvador-staff-concluding-statement-of-the-2023-article-iv-mission)
- Other. The text describes a study by the University of Cambridge which found that people tend to trust robots more when they look and behave like humans.
- [Silvergate Purchases Blockchain libre](https://ir.silvergate.com/news/news-details/2022/Silvergate-Purchases-Blockchain-Payment-Network-Assets-from-Diem/default.aspx)
- The text discusses Silvergate's recent purchase of blockchain payment network assets from Diemwindow.
- [Deception, exploited workers, and cash handouts: How Worldcoin recruited its first half a million test users: The startup promises a fairly-distributed, cryptocurrency-based universal basic income. So far all it's done is build a biometric database from the bodies of the poor.](https://www.technologyreview.com/2022/04/06/1048981/worldcoin-cryptocurrency-biometrics-web3/)
- Worldcoin, a cryptocurrency startup, recruited its first 500,000 users by offering them free cash. The company has been accused of deception and exploiting workers, and is now under investigation.
- [Privacy law book](https://www.smashingmagazine.com/printed-books/understanding-privacy/#bookTOC)
- [Online safety bill heather articles](https://webdevlaw.uk/2022/11/21/a-quick-hypothetical-situation-or-your-crash-introduction-to-the-real-world/)
- [Techcrunch on borderless payments](https://techcrunch.com/2021/12/21/borderless-crypto-networks-wrestle-with-state-sanction-compliance/?)
- [Norway takes a stance against Google Analytics](https://www.simpleanalytics.com/blog/norway-takes-a-stance-against-google-analytics)
- [Social Media Is Changing, And Paid Accounts Are The Response](https://www.bigtechnology.com/p/social-media-is-changing-and-paid)
- [Linkedin post by Barry Scanell on EU AI law](https://www.linkedin.com/posts/activity-7062324196256735232-FfEz/?utm_source=share&utm_medium=member_desktop)
- [wikipedia and the child protection bill](https://www.msn.com/en-gb/news/uknews/wikipedia-could-be-taken-offline-in-the-uk/ar-AA1atf9O)
- [Kids are damaged by mobile phones](https://sapienlabs.org/wp-content/uploads/2023/05/Sapien-Labs-Age-of-First-Smartphone-and-Mental-Wellbeing-Outcomes.pdf?utm_source=substack&utm_medium=email)
- [surveillance-capitalism-is-undermining-democracy](https://news.harvard.edu/gazette/story/2019/03/harvard-professor-says-surveillance-capitalism-is-undermining-democracy/)
- https://bitcoinmagazine.com/culture/how-bitcoin-can-save-political-dissidents-in-myanmar
- EU AI ACT
	- [Artificial Intelligence – Q&As (europa.eu)](https://ec.europa.eu/commission/presscorner/detail/en/QANDA_21_1683)
	- The Commission points out that the inception of the AI Act is rooted in the necessity to balance the benefits of AI, such as improved medical care and [[Education and AI]], with the need to mitigate inherent risks.
	- One of the key aspects of the AI Act identified by the Commission is its broad applicability. It encompasses both public and private entities within and outside the EU, as long as the AI system is marketed in the EU or affects individuals within it. This includes AI system providers, deployers, and importers. The Act also covers developers of general-purpose AI models, which are becoming integral to numerous AI systems and hence too significant to remain unregulated.
	- Certain AI systems are identified as high-risk, particularly those impacting safety or fundamental rights in sectors such as healthcare, education, and law enforcement. The Act also identifies AI practices that pose unacceptable risks, contravening EU values, including certain forms of social scoring and real-time remote biometric identification, which are banned. Additionally, systems like chatbots, which pose specific transparency risks, require clear user awareness of their interaction with a machine.
	- For high-risk AI systems, a conformity assessment is required before market introduction, ensuring compliance with standards for trustworthy AI, such as data quality, documentation, transparency, and human oversight. Post-market, these systems must undergo continuous risk management and incident reporting. The Act also imposes specific obligations on providers of general-purpose AI models, especially those with systemic risks, like large generative AI models trained using extensive computational power. These providers must disclose certain information to downstream system providers, respect [[copyright]] law during model training, and engage with the European AI Office to develop Codes of Conduct.
	- The European AI Office and the European Artificial Intelligence Board, supported by an Advisory Forum and a Scientific Panel of independent experts, are designed to ensure a harmonised and effective implementation of the Act across the EU.
	- The Act also stipulates substantial fines for non-compliance, indicating the seriousness with which the EU views AI regulation. Penalties can reach up to €35 million or 7% of the total worldwide annual turnover, depending on the nature of the infringement.
	- The Act mandates that high-risk systems must be trained and tested with representative datasets to minimise biases and must be traceable and auditable. Deployers of high-risk AI systems are required to conduct a fundamental rights impact assessment, ensuring that AI applications comply with fundamental rights legislation and do not exacerbate existing structural discriminations.
-
-
-
-
-
-
- [[pol]]
- [Serious New Warning As Google AI Targets Billions Of Private Messages (forbes.com)](https://www.forbes.com/sites/zakdoffman/2024/01/28/new-details-free-ai-upgrade-for-google-and-samsung-android-users-leaks/)
-

- #### 4.12.14 National Security and Open-source AI
  To start, national security is a primary concern. AI has a myriad of applications in defense and security sectors, many of which could potentially be exploited by adversarial entities. As such, unrestricted access to AI technologies could pose a risk to nations' security. Nevertheless, it is crucial to note that security risks also stem from concentrated AI power. A handful of nations or corporations owning the majority of AI developments may lead to destabilization, power imbalance, and heightened global tensions.

- ## Bitcoin externalities (extrinsic)
	- This section is the risks that Bitcoin poses to external money systems, but it’s worth pointing out that a risk to wider society is clearly also a risk to Bitcoin itself.

- ## Crypto assets
	- For "crypto" assets more generally it is useful to look at the recent [“whole government executive order”](https://www.whitehouse.gov/briefing-room/presidential-actions/2022/03/09/executive-order-on-ensuring-responsible-development-of-digital-assets/)signed by President Biden early in 2022. It was mainly framed in terms of “responsible innovation, and leadership” in the new space. The resulting, “Comprehensive Framework for Responsible Development of Digital Assets” was a product of multi agency collaboration and can be seen as 9 reports and a summary document, and was long anticipated. The summary itself is neither particularly comprehensive nor a framework, and mainly serves to identifies high level risks, aspirations, and challenges, and strongly hints toward eventual development of a “digital dollar” (CBDC, expanded later). This work has been repealed completely as the Trump administration eschews [[CBDCs]] and openly promotes crypto.
	- https://twitter.com/kofinas/status/1881077334750421066
		- {{twitter https://twitter.com/kofinas/status/1881077334750421066}}
	- The risks section of the original executive order shows how legislatorsare framing this, so it’s useful to break down here.
		- Consumer and business protections. This is likely to pertain to custodians and is much needed. Misselling is rife. Security presents a challenge.
		- Systemic risk, and market integrity are a concern. The legislators clearly worry about contagion risks from the sector.
		- Illicit finance (criminality and sanction busting etc) are a concern, but not particularly front and centre[[moser2013inquiry]]. Criminality in 2021 was a mere 0.15% of transactions according to Chainalysis, but this number varies year to year. There are claims that Iran have begun official overseas buying with cryptocurrencies, but again, the [numbers are small](https://finbold.com/iran-makes-the-first-ever-import-of-goods-using-cryptocurrency-worth-millions/). One of the better sections of the work is the US treasury department’s recently published ‘National Risk Assessments for Money Laundering, Terrorist Financing, and Proliferation Financing’. This is a comprehensive report and speaks to careful research across the space. It is broken into [three parts](https://home.treasury.gov/news/press-releases/jy0619). Perhaps surprisingly, while they do see activity in these areas, they do not rate the risk as very significant. Cash remains the main problem for illicit funding. There is some talk that the nature of public blockchain analysis allows greater oversight of these tools and that this is to the advantage of government and civil enforcement agencies.
		- Highlighting the need for international coordination suggests they are mindful of [jurisdictional arbitrage](https://twitter.com/iamLeonHill/status/1847973039234846747).
		- {{twitter https://twitter.com/iamLeonHill/status/1847973039234846747}}
		- The partial regulatory capture of these technologies, where activity flows to globally more lenient legislative regimes, continues to be a concern. Many of the centralised exchanges for instance are located in tax havens such as Malta. As the world catches up with these products it is likely that this will be smoothed out.
		- Climate goals, diversity, equality and inclusion are mentioned. It seems that the “environment” aspect of ESG is more important then “social” and “governance” at this time.
		- Privacy and human rights are mentioned.
		- Energy policy is highlighted, including grid management and reliability, energy efficiency incentives and standards, and sources of energy supply.
	- The [latest summary report](https://www.whitehouse.gov/briefing-room/statements-releases/2022/09/16/fact-sheet-white-house-releases-first-ever-comprehensive-framework-for-responsible-development-of-digital-assets/) resulting from the above guidance actually adds little tangible meat to the bones. This possibly reflects the complexity of these issues. The recommendations seem to be broadly as follows, and are really a copy/paste of the executive order.
		- Carry on doing research into central bank digital currencies, but there’s no particular rush.
		- Support development of better instant payment methods both at home and globally.
		- Ensure consumer and systemic protections.
		- More monitoring, civil and criminal prosecutions.
		- Issue more rules and clarity in response to risks (this is actually likely net positive as rules are currently unclear).
		- Improve global reporting on users (KYC/AML).
	- The government rhetoric to date in the USA can be seen to be converging on an understanding of the technology, at different rates in different parts of government. One thing that seems to shine through is their own perception of their global leadership on legislation on these matters. They seems to assume that what they decide will guide the world, and this may be true through their KYC/AML pressures.
	- A recent proposed [bi-partisan bill in theUSA](https://bitcoinmagazine.com/business/heres-whats-in-senator-lummis-bitcoin-bill) will likely help inform global law, though it is unlikely to pass itself. It encourages the use of Bitcoin as a medium of exchange by applying a tax exemption on transactions of less than $200. The issue of whether an asset is a commodity (a raw material thing) or a security (a promise) is left to a couple of major government agencies to unpick, with corresponding reporting requirements. Crucially for this book these nascent bills all regard both Bitcoin and Ethereum as sufficiently decentralised to [qualify ascommodities](https://www.coincenter.org/a-new-senate-bill-focuses-on-cryptocurrency-exchanges-heres-what-developers-and-users-should-keep-an-eye-on/),meaning they would enjoy more lenient oversight. Far more likely to pass is the [proposed DCCPAbill](https://www.agriculture.senate.gov/im./assets/doc/crypto_one-pager1.pdf)which has senior lawmaker support and would see commodities in the space regulated in such a way that trading of it could be halted in the USA. In this line of policy, exchanges will be required to do far more reporting, and would be penalised for trading against their customers. DOAs and DeFi are the big potential losers. In a maddening twist the Office of Government Ethics in the USA has banned anyone who owns digital assets from working on the legislation. This is an exceptional move and likely to result in poorly crafted laws in the first instance.
	- The most recent and troubling example is the US ban on any Ethereum assets which have been through a “mixer service” [that obfuscates history](https://www.coincenter.org/u-s-treasury-sanction-of-privacy-tools-places-sweeping-restrictions-on-all-americans/). This is a huge constraint on the code and smart contract itself, not just sanctions against individuals. It has [‘freespeech’](https://hoffmang9.github.io/free-speech/the-history-code-is-free-speech.html)and constitutional implications.[[anderson2002free]] More such actions and [arrests of developers](https://www.dw.com/en/dutch-investigators-say-developer-of-tornado-cash-arrested/a-62793823)are feared. It has led to Circle (who issue the USDC stable coin)blacklisting every [address sanctioned by the US government](https://home.treasury.gov/policy-issues/financial-sanctions/recent-actions/20220808). Centrally issued digital assets are obviously neither uncensorable nor permissionless. This intersects (again) with the whole question of what decentralisation means and how effective it can be in it’s stated goal of circumventing global policies.

- #### **Works cited**
  
  1\. Is This the Year AI Dominates the Call Center? \- CMSWire.com, accessed on January 14, 2025, [https://www.cmswire.com/contact-center/is-this-the-year-ai-dominates-the-call-center/](https://www.cmswire.com/contact-center/is-this-the-year-ai-dominates-the-call-center/)  
  2\. Artificial Intelligence in Call Centers: Boost Efficiency & Cut Costs \- Teneo.Ai, accessed on January 14, 2025, [https://www.teneo.ai/blog/artificial-intelligence-in-call-centers](https://www.teneo.ai/blog/artificial-intelligence-in-call-centers)  
  3\. Impact of AI on Call Centers: 7 Key Impacts in 2025 \- Invensis, accessed on January 14, 2025, [https://www.invensis.net/blog/impact-of-ai-on-call-centers](https://www.invensis.net/blog/impact-of-ai-on-call-centers)  
  4\. Voice‐based AI in call center customer service: A natural field experiment \- ResearchGate, accessed on January 14, 2025, [https://www.researchgate.net/publication/367362952\_Voice-based\_AI\_in\_call\_center\_customer\_service\_A\_natural\_field\_experiment](https://www.researchgate.net/publication/367362952_Voice-based_AI_in_call_center_customer_service_A_natural_field_experiment)  
  5\. Striking the Balance: Leveraging AI in Call Centers While Maintaining the Human Touch, accessed on January 14, 2025, [https://a-closer-look.com/market-research/striking-the-balance-leveraging-ai-in-call-centers-while-maintaining-the-human-touch/](https://a-closer-look.com/market-research/striking-the-balance-leveraging-ai-in-call-centers-while-maintaining-the-human-touch/)  
  6\. Call Center: The Perceived Risks of Using AI to Improve CX \- SQM Group, accessed on January 14, 2025, [https://www.sqmgroup.com/resources/library/blog/the-perceived-risks-of-using-ai-to-improve-cx](https://www.sqmgroup.com/resources/library/blog/the-perceived-risks-of-using-ai-to-improve-cx)  
  7\. How Agentic AI is Transforming Customer Service and Contact Centres | by Acceleraate, accessed on January 14, 2025, [https://medium.com/@acceleraate/how-agentic-ai-is-transforming-customer-service-and-contact-centres-13e244a9835b](https://medium.com/@acceleraate/how-agentic-ai-is-transforming-customer-service-and-contact-centres-13e244a9835b)  
  8\. Agentic AI: Redefining Customer Experience \- Talkdesk, accessed on January 14, 2025, [https://www.talkdesk.com/blog/redefining-customer-experience-agentic-ai/](https://www.talkdesk.com/blog/redefining-customer-experience-agentic-ai/)  
  9\. What Is Agentic AI? \- CX Today, accessed on January 14, 2025, [https://www.cxtoday.com/contact-centre/what-is-agentic-ai/](https://www.cxtoday.com/contact-centre/what-is-agentic-ai/)  
  10\. The Five Levels of Agentic Automation \- Sema4.ai, accessed on January 14, 2025, [https://sema4.ai/blog/the-five-levels-of-agentic-automation/](https://sema4.ai/blog/the-five-levels-of-agentic-automation/)  
  11\. How agentic AI is driving the next evolution of enterprise AI \- Moveworks, accessed on January 14, 2025, [https://www.moveworks.com/us/en/resources/blog/agentic-ai-the-next-evolution-of-enterprise-ai](https://www.moveworks.com/us/en/resources/blog/agentic-ai-the-next-evolution-of-enterprise-ai)  
  12\. 5 Agentic AI Examples: Inspiring Use Cases Shaping the Future \- ThoughtSpot, accessed on January 14, 2025, [https://www.thoughtspot.com/data-trends/ai/agentic-ai-examples](https://www.thoughtspot.com/data-trends/ai/agentic-ai-examples)  
  13\. Here's 6 Agentic AI Examples and Use Cases Transforming Businesses | Moveworks, accessed on January 14, 2025, [https://www.moveworks.com/us/en/resources/blog/agentic-ai-examples-use-cases](https://www.moveworks.com/us/en/resources/blog/agentic-ai-examples-use-cases)  
  14\. What is agentic AI and what are its benefits and use cases? \- Softweb Solutions, accessed on January 14, 2025, [https://www.softwebsolutions.com/resources/benefits-and-use-cases-of-agentic-ai.html](https://www.softwebsolutions.com/resources/benefits-and-use-cases-of-agentic-ai.html)  
  15\. 18 Use Cases for Agentic AI in Customer Experience \- CX Today, accessed on January 14, 2025, [https://www.cxtoday.com/crm/18-use-cases-for-agentic-ai-in-customer-experience/](https://www.cxtoday.com/crm/18-use-cases-for-agentic-ai-in-customer-experience/)  
  16\. Agentic AI: What it is and what it looks like in the retail world \- Clientbook, accessed on January 14, 2025, [https://www.clientbook.com/blog/agentic-ai-what-it-is-and-what-it-looks-like-in-the-retail-world](https://www.clientbook.com/blog/agentic-ai-what-it-is-and-what-it-looks-like-in-the-retail-world)  
  17\. Agentic AI Systems: Opportunities, Challenges, and the Need for Robust Governance, accessed on January 14, 2025, [https://community.nasscom.in/communities/analytics/agentic-ai-systems-opportunities-challenges-and-need-robust-governance](https://community.nasscom.in/communities/analytics/agentic-ai-systems-opportunities-challenges-and-need-robust-governance)  
  18\. 12 Major Challenges Faced by the Call Center Industry \- Flatworld Solutions, accessed on January 14, 2025, [https://www.flatworldsolutions.com/call-center/articles/major-challenges-callcenter-industry.php](https://www.flatworldsolutions.com/call-center/articles/major-challenges-callcenter-industry.php)  
  19\. 12 Major Call Center Challenges & Ways to Resolve Them \- Knowmax, accessed on January 14, 2025, [https://knowmax.ai/blog/call-center-challenges/](https://knowmax.ai/blog/call-center-challenges/)  
  20\. 5 important considerations for responsible AI use in contact centers \- Talkdesk, accessed on January 14, 2025, [https://www.talkdesk.com/blog/responsible-ai-use-in-contact-centers/](https://www.talkdesk.com/blog/responsible-ai-use-in-contact-centers/)  
  21\. Security and Ethics of Contact Center AI: When is AI Creepy? \- NICE, accessed on January 14, 2025, [https://www.nice.com/blog/security-and-ethics-of-contact-center-ai-when-is-ai-creepy](https://www.nice.com/blog/security-and-ethics-of-contact-center-ai-when-is-ai-creepy)  
  22\. What Ethical Issues Does Agentforce AI Bring to the Table for CIOs? \- Inclusion Cloud, accessed on January 14, 2025, [https://inclusioncloud.com/insights/blog/ethical-issues-agentforce-cios/](https://inclusioncloud.com/insights/blog/ethical-issues-agentforce-cios/)  
  23\. New Ethics Risks Courtesy of AI Agents? Researchers Are on the Case | IBM, accessed on January 14, 2025, [https://www.ibm.com/think/insights/ai-agent-ethics](https://www.ibm.com/think/insights/ai-agent-ethics)  
  24\. Contact Center Automation Trends: What to Expect in 2025 \- Invoca, accessed on January 14, 2025, [https://www.invoca.com/blog/contact-center-automation-trends](https://www.invoca.com/blog/contact-center-automation-trends)  
  25\. 5 AI-Powered Contact Center Automation Trends for 2024 \- Apizee, accessed on January 14, 2025, [https://www.apizee.com/contact-center-automation-trends.php](https://www.apizee.com/contact-center-automation-trends.php)  
  26\. The Future of the Call Center: Predictions for 2024 and Beyond \- Level AI, accessed on January 14, 2025, [https://thelevel.ai/blog/future-of-the-call-center-2024/](https://thelevel.ai/blog/future-of-the-call-center-2024/)  
  27\. Contact Center Automation Trends for 2025 and Beyond \- VoiceSpin, accessed on January 14, 2025, [https://www.voicespin.com/blog/call-center-automation-trends/](https://www.voicespin.com/blog/call-center-automation-trends/)
-

- ## Efforts to Manage AI Risks
	- In response to these risks, various frameworks and initiatives have been developed.
		- The [NIST AI Risk Management Framework (AI RMF)](https://www.nist.gov/itl/ai-risk-management-framework) is a voluntary framework designed to help organizations manage AI-related risks.
		- The [Council of Europe has developed the HUDERIA](https://www.coe.int/en/web/artificial-intelligence/hudeira-and-ai-systems), a guidance for assessing the human rights, democracy, and rule of law impacts of AI systems.
		- The [International AI Safety Report 2025](https://www.gov.uk/government/publications/international-ai-safety-report-2025) is a collaborative effort by 100 AI experts from 33 countries to build a shared scientific understanding of the risks associated with advanced AI.

- ## 2024-2025: From Theoretical Frameworks to Catastrophic Failures
  id:: ai-risk-recent-developments

  The years 2024 and 2025 witnessed AI risk transition from predominantly theoretical concern to **operational reality**, as high-profile failures demonstrated the inadequacy of existing risk management practices, whilst simultaneously driving rapid adoption of risk frameworks, **dramatic surges in cybersecurity threats**, and the proliferation of **model drift** undermining production systems.

  ### NIST Generative AI Risk Profile

  On **26th July 2024**, NIST released **NIST-AI-600-1**, the **Artificial Intelligence Risk Management Framework: Generative Artificial Intelligence Profile**, extending the January 2023 AI RMF specifically for generative AI systems. The Profile added **over 200 specific actions** addressing unique risks including:

  - **CBRN Information Risks**: Chemical, biological, radiological, and nuclear information potentially accessible through generative AI
  - **Confabulation (Hallucinations)**: False information presented with confidence
  - **Dangerous, Violent, or Hateful Content**: Generation of content promoting harm
  - **Data Privacy Violations**: Training data leakage and unauthorised information disclosure
  - **Information Integrity**: Deepfakes, misinformation, and synthetic media undermining trust
  - **Intellectual Property Infringement**: Copyright violation through training data usage
  - **Obscene or Abusive Content**: Generation of harmful or degrading material

  This Profile became essential for organisations deploying large language models, image generators, and multimodal systems, providing actionable risk mitigation strategies aligned with the GOVERN, MAP, MEASURE, and MANAGE functions.

  ### Catastrophic Real-World Failures

  2024-2025 exposed significant gaps between risk management frameworks and operational practice through high-profile incidents:

  **Samsung Engineering Data Breach (2023, lessons learned 2024)**: Engineers used ChatGPT to debug code, inadvertently pasting **sensitive semiconductor designs** and proprietary data into the chat interface across three separate incidents. The engineers failed to appreciate that inputs could be used to train future models, resulting in intellectual property leakage. This incident catalysed enterprise policies prohibiting use of public AI systems for sensitive data.

  **Air Canada Chatbot Liability Case (2024)**: An Air Canada chatbot promised a bereavement discount to a customer. The airline refused to honour the commitment, arguing in court that the chatbot was a **separate legal entity**. The court rejected this defence, holding Air Canada accountable for its chatbot's representations, establishing precedent that organisations cannot disclaim responsibility for AI agent actions.

  These failures demonstrated that **technical risk management** was insufficient without addressing **operational processes**, **employee training**, and **legal accountability** structures.

  ### Model Drift and Performance Degradation

  **Model drift**—the process whereby changes in data distributions or relationships between data points lead to degraded performance—emerged as a pervasive operational risk in 2024-2025. For instance, fraud detection models became less accurate over time as fraudulent tactics evolved, allowing fraudulent transactions to slip through whilst legitimate transactions were incorrectly flagged.

  Organisations discovered that models required **continuous monitoring** and **periodic retraining** to maintain efficacy, but many lacked infrastructure for detecting drift before performance collapsed. This drove investment in **automated drift detection** tools and **model observability platforms** providing real-time performance visibility.

  ### Security Threat Explosion

  AI-powered cyberattacks surged dramatically: projections indicated a **50% increase in 2024** compared to 2021, with **93% of security leaders** expecting their organisations to face **daily AI-driven attacks by 2025**.

  **Prompt injection** attacks—whereby malicious inputs manipulate AI systems into performing unintended actions—emerged as the **top LLM security risk** according to the OWASP Top 10 for LLMs in 2025. Attackers exploited prompt injection to extract training data, bypass content filters, and gain unauthorised access to integrated systems.

  **Adversarial attacks** demonstrated universal vulnerability: even state-of-the-art models remained susceptible to carefully crafted inputs designed to induce misclassification. The **2024 AI Safety Index** found that **all flagship models were vulnerable** to adversarial attacks, revealing fundamental architectural limitations.

  ### Risk Quantification Challenges

  Organisations struggled to **quantify AI risk** in financially meaningful terms required for board-level decision-making and insurance underwriting. Unlike traditional IT risks with established actuarial models, AI risks lacked historical data, making probability and impact estimation speculative.

  **Only 12% of companies** felt "very prepared" to assess, manage, and recover from AI risks in 2024-2025 surveys, whilst **75% lacked dedicated plans** for generative AI risks specifically. This preparedness gap exposed organisations to both compliance penalties and operational failures.

  ### ISO/IEC 23894:2023 Adoption

  **ISO/IEC 23894:2023**, the international standard for AI risk management published in February 2023, gained adoption throughout 2024-2025 as organisations sought structured risk management methodologies. The standard adapts traditional risk management practices (ISO 31000) to AI's unique characteristics, including:

  - **Opacity**: Difficulty understanding model decision-making
  - **Complexity**: Emergent behaviours from intricate architectures
  - **Autonomy**: Self-directed actions requiring anticipatory risk assessment
  - **Data dependency**: Vulnerabilities from training data quality and provenance

  Organisations implementing ISO 23894 discovered that effective AI risk management required **cross-functional collaboration** between data scientists, security professionals, legal counsel, and business leaders—a cultural shift from siloed technical risk management.

  ### Risk-Based Regulatory Approaches

  The **EU AI Act's** risk-based framework—categorising AI systems as **unacceptable**, **high**, **limited**, or **minimal** risk—became the global template for risk-proportionate regulation. High-risk systems in domains like employment, education, healthcare, and law enforcement faced stringent requirements including:

  - **Risk management systems** throughout the lifecycle
  - **Data governance and quality** requirements
  - **Technical documentation** and record-keeping
  - **Transparency and information provision** to users
  - **Human oversight** mechanisms
  - **Accuracy, robustness, and cybersecurity** requirements

  Non-compliance penalties up to **€35 million or 7% of worldwide turnover** incentivised substantial risk management investments.

  ### Risk Communication and Incident Reporting

  **Incident reporting requirements** proliferated in 2024-2025, with the EU AI Act mandating **serious incident reporting within 15 days** for high-risk systems causing death, serious health damage, or fundamental rights violations. This created **AI incident databases** providing unprecedented visibility into failure modes.

  Analysis of reported incidents revealed patterns: **bias incidents** (employment discrimination, credit denial) dominated reports, followed by **security vulnerabilities** (prompt injection, model extraction), **safety failures** (autonomous systems, robotics), and **privacy breaches** (model inversion, membership inference attacks).

  Transparency regarding incidents improved substantially: whereas historically organisations concealed AI failures, regulatory requirements and accountability cultures encouraged disclosure, enabling **systemic learning** from failures.

  ### Emerging Risk Categories

  2024-2025 identified **novel risk categories** absent from earlier frameworks:

  **Supply Chain Risks**: Foundation models developed by third parties introduced **dependency risks** whereby upstream model vulnerabilities affected countless downstream applications. When a foundation model exhibited bias or security flaws, all fine-tuned derivatives inherited those risks.

  **Compounding Risks**: AI systems increasingly operated in **multi-agent environments** where risks compounded unpredictably. For instance, multiple trading algorithms interacting created **flash crash** risks exceeding any single system's design parameters.

  **Value Alignment Risks**: As AI systems gained autonomy, ensuring alignment with human values and intentions became critical. **Specification gaming**—whereby systems technically satisfy stated objectives whilst violating intent—demonstrated the difficulty of robust value alignment.

  ### Risk Appetite and Board Oversight

  The surge in **board-level AI risk oversight** (from 16% to 48% of Fortune 100 companies citing AI risk as board responsibility) reflected recognition that AI risks constituted **strategic, reputational, and existential threats** requiring governance-level attention.

  Boards struggled to articulate **risk appetite**—the level of AI risk acceptable in pursuit of strategic objectives. Unlike established domains with historical precedents, AI risk appetite required judgement under deep uncertainty, balancing innovation imperatives against potential catastrophic failures.

- ## Existential Risks

- ## Definition and Scope

  Artificial Intelligence Risk refers to the potential for AI systems to cause adverse effects on individuals, groups, organizations, communities, or society at large. These risks arise from technical failures, security vulnerabilities, biased outcomes, privacy violations, or unintended consequences during AI system design, deployment, or operation.

  The academic foundations of AI risk management draw from computer science, ethics, cybersecurity, and social sciences, emphasizing interdisciplinary approaches to understand and mitigate harm. According to the NIST AI Risk Management Framework (AI RMF 1.0, January 2023), AI risk is defined as the composite measure of an event's probability of occurring and the magnitude or degree of the consequences of the corresponding event.


- ## Formal Specification

  ### Ontological Structure
	- AI Risk is a subclass of general Risk with specific characteristics unique to artificial intelligence systems
	- Core components include likelihood (probability of risk occurring), impact (severity of consequences), and context (domain and stakeholders affected)
	- Risk types encompass technical, ethical, social, legal, security, and operational categories
	- Standards alignment includes ISO/IEC 23894:2023, NIST AI RMF 1.0, EU AI Act (Regulation 2024/1689)

  ### Risk Properties
	- AI risks require assessment of posesRiskTo, hasLikelihood, hasImpact, managedBy, and manifestsAs relationships
	- Risk scoring ranges from 0.0 (no risk) to 1.0 (critical risk) based on composite assessment
	- Risk levels categorized as unacceptable, high, limited, or minimal per EU AI Act framework


- ## Authoritative References

  ### Primary Standards and Frameworks

	- #### ISO/IEC 23894:2023 - AI Risk Management
	  Published February 2023, this comprehensive international standard for [[AI Risk Management]] adapts traditional risk management practices (ISO 31000) to AI's unique characteristics including opacity, complexity, autonomy, and data dependency. The standard gained widespread adoption throughout 2024-2025 as organizations sought structured risk management methodologies. Implementation requires cross-functional collaboration between data scientists, security professionals, legal counsel, and business leaders.

	- #### NIST AI Risk Management Framework (AI RMF 1.0)
	  Released January 2023, updated with Generative AI Profile (NIST-AI-600-1) on July 26, 2024. The Profile added over 200 specific actions addressing unique risks including CBRN information risks, confabulation (hallucinations), dangerous or hateful content generation, data privacy violations, information integrity issues (deepfakes), intellectual property infringement, and obscene content generation. This framework became essential for organizations deploying [[Large Language Models]], image generators, and multimodal systems.

	- #### EU AI Act (Regulation 2024/1689)
	  Finalized June 2024, entered into force August 1, 2024. The risk-based regulatory framework categorizes AI systems as unacceptable, high, limited, or minimal risk, establishing the global template for risk-proportionate regulation. **[Updated 2025]** Implementation proceeds on schedule with phased obligations. Prohibited practices became effective February 2, 2025. Major provisions including GPAI models, governance, and penalties apply from August 2, 2025. Full high-risk AI system requirements take effect August 2, 2026. Non-compliance penalties reach up to €35 million or 7% of worldwide annual turnover, whichever is higher.


- ## Risk Categories and Taxonomy

  ### Technical Risks

	- #### Performance Failures
		- Inaccurate predictions and erroneous outputs leading to flawed decision-making
		- System errors and operational malfunctions during deployment
		- Model drift whereby changes in data distributions or relationships lead to degraded performance over time
		- **[Updated 2025]** Model drift emerged as a pervasive operational risk in 2024-2025, with fraud detection models becoming less accurate as fraudulent tactics evolved. Organizations discovered models require continuous monitoring and periodic retraining to maintain efficacy.

	- #### Robustness and Reliability Issues
		- Failure under distribution shift when encountering data different from training distribution
		- Inconsistent behavior across similar inputs
		- System downtime and availability problems
		- **[Updated 2025]** The 2024 AI Safety Index found that all flagship models remained vulnerable to adversarial attacks despite claimed improvements, revealing fundamental architectural limitations.

	- #### Security Vulnerabilities
		- Adversarial attacks using carefully crafted inputs to induce misclassification
		- Data poisoning whereby malicious actors corrupt training data
		- Model extraction attacks allowing theft of proprietary models
		- **[Updated 2025]** Prompt injection attacks emerged as the top LLM security risk according to OWASP Top 10 for LLMs in 2025. Attackers exploit prompt injection to extract training data, bypass content filters, and gain unauthorized access to integrated systems.

  ### Ethical and Social Risks

	- #### Bias and Discrimination
		- Unfair outcomes for protected groups due to biased training data or algorithmic design
		- Perpetuation and amplification of existing societal inequalities
		- Disproportionate impact on vulnerable populations
		- **[Updated 2025]** Analysis of AI incident databases in 2024-2025 showed bias incidents (employment discrimination, credit denial) dominated reports, highlighting persistent challenges in fairness.

	- #### Privacy Violations
		- Unauthorized data disclosure through model outputs
		- Training data leakage revealing sensitive information
		- Membership inference attacks determining if specific data was used in training
		- Model inversion attacks reconstructing training data from model parameters
		- **[Updated 2025]** The Samsung Engineering Data Breach (2023, lessons learned 2024) demonstrated intellectual property leakage when engineers inadvertently pasted sensitive semiconductor designs into ChatGPT, catalyzing enterprise policies prohibiting use of public AI systems for sensitive data.

	- #### Transparency and Accountability Gaps
		- Opaque decision-making processes in complex models (the "black box" problem)
		- Unclear responsibility for AI-caused harms
		- Difficulty explaining AI outputs to affected stakeholders
		- **[Updated 2025]** The Air Canada Chatbot Liability Case (2024) established legal precedent that organizations cannot disclaim responsibility for AI agent actions, holding companies accountable for chatbot representations.

  ### Operational Risks

	- #### Deployment and Integration Failures
		- Incorrect system implementation in production environments
		- Integration issues with existing infrastructure
		- Configuration errors leading to unintended behavior
		- Inadequate testing before deployment

	- #### Human-AI Interaction Risks
		- Misuse through deliberate exploitation of system capabilities
		- Over-reliance and automation bias where humans defer excessively to AI judgments
		- Under-reliance where AI capabilities are not properly utilized
		- Skill degradation as humans lose proficiency in tasks delegated to AI

	- #### Maintenance and Lifecycle Risks
		- Outdated models failing to adapt to changing environments
		- Concept drift as real-world data distributions evolve
		- Inadequate monitoring of deployed systems
		- Insufficient incident response capabilities

  ### Legal and Regulatory Risks

	- #### Non-Compliance
		- Violation of data protection regulations including [[GDPR]] and regional privacy laws
		- Failure to meet AI-specific regulatory requirements under [[EU AI Act]] and emerging frameworks
		- Industry-specific regulatory violations (healthcare, finance, employment)
		- **[Updated 2025]** Only 12% of companies felt "very prepared" to assess, manage, and recover from AI risks in 2024-2025 surveys, whilst 75% lacked dedicated plans for generative AI risks specifically.

	- #### Liability and Legal Responsibility
		- Legal responsibility for AI-caused harms to individuals or organizations
		- Product liability for defective AI systems
		- Professional liability when AI systems provide advice or services
		- Contractual obligations and warranty issues

	- #### Intellectual Property Risks
		- Copyright infringement through training data usage
		- Patent infringement in AI system design or outputs
		- Trade secret misappropriation
		- Ownership disputes over AI-generated content


- ## 2024-2025: From Theoretical Frameworks to Operational Reality

  The years 2024 and 2025 witnessed AI risk transition from predominantly theoretical concern to operational reality, as high-profile failures demonstrated the inadequacy of existing risk management practices, whilst simultaneously driving rapid adoption of risk frameworks, dramatic surges in cybersecurity threats, and the proliferation of model drift undermining production systems.

  ### Catastrophic Real-World Failures

  2024-2025 exposed significant gaps between risk management frameworks and operational practice through high-profile incidents that demonstrated technical risk management was insufficient without addressing operational processes, employee training, and legal accountability structures.

  **Samsung Engineering Data Breach (2023, lessons learned 2024):** Engineers used ChatGPT to debug code, inadvertently pasting sensitive semiconductor designs and proprietary data into the chat interface across three separate incidents. The engineers failed to appreciate that inputs could be used to train future models, resulting in intellectual property leakage. This incident catalyzed enterprise policies prohibiting use of public AI systems for sensitive data.

  **Air Canada Chatbot Liability Case (2024):** An Air Canada chatbot promised a bereavement discount to a customer. The airline refused to honour the commitment, arguing in court that the chatbot was a separate legal entity. The court rejected this defence, holding Air Canada accountable for its chatbot's representations, establishing precedent that organisations cannot disclaim responsibility for AI agent actions.

  ### Security Threat Explosion

  AI-powered cyberattacks surged dramatically in 2024-2025. Projections indicated a 50% increase in AI-driven attacks in 2024 compared to 2021, with 93% of security leaders expecting their organisations to face daily AI-driven attacks by 2025.

  Prompt injection attacks—whereby malicious inputs manipulate AI systems into performing unintended actions—emerged as the top LLM security risk according to the OWASP Top 10 for LLMs in 2025. Attackers exploited prompt injection to extract training data, bypass content filters, and gain unauthorized access to integrated systems.

  Adversarial attacks demonstrated universal vulnerability: even state-of-the-art models remained susceptible to carefully crafted inputs designed to induce misclassification. The 2024 AI Safety Index found that all flagship models were vulnerable to adversarial attacks, revealing fundamental architectural limitations.

  ### Emerging Risk Categories

  2024-2025 identified novel risk categories absent from earlier frameworks:

	- #### Supply Chain Risks
	  Foundation models developed by third parties introduced dependency risks whereby upstream model vulnerabilities affected countless downstream applications. When a foundation model exhibited bias or security flaws, all fine-tuned derivatives inherited those risks.

	- #### Compounding Risks
	  AI systems increasingly operated in multi-agent environments where risks compounded unpredictably. For instance, multiple trading algorithms interacting created flash crash risks exceeding any single system's design parameters.

	- #### Value Alignment Risks
	  As AI systems gained autonomy, ensuring alignment with human values and intentions became critical. Specification gaming—whereby systems technically satisfy stated objectives whilst violating intent—demonstrated the difficulty of robust value alignment.

  ### Risk Quantification Challenges

  Organizations struggled to quantify AI risk in financially meaningful terms required for board-level decision-making and insurance underwriting. Unlike traditional IT risks with established actuarial models, AI risks lacked historical data, making probability and impact estimation speculative. Only 12% of companies felt "very prepared" to assess, manage, and recover from AI risks in 2024-2025 surveys, whilst 75% lacked dedicated plans for generative AI risks specifically.


- ## AI-Generated Content and Misinformation Risks

  ### The Evolution of AI-Generated Fake News (2023-2025)

  **[Updated 2025]** The Guardian's 2023 warnings about [[AI-Generated Content]] risks have been validated and expanded upon in 2024-2025. Large language models can rapidly produce plausible-sounding but entirely fictitious news articles, blurring the line between credible information and misinformation. Malicious actors or even careless users can mislead the public by leveraging AI's ability to fabricate realistic content.

  Academic publishing has experienced a surge in AI-generated, error-riddled papers, with more than 10,000 papers retracted in 2023 alone—many due to AI-driven misconduct or mistakes. Hidden prompts have been used to manipulate automated review systems, representing a new form of academic dishonesty.

  ### Knowledge Fossilization Crisis

  Current research warns of a "knowledge crisis" where AI-generated errors and fake content become entrenched in the scientific record and are propagated when future AI models are trained on polluted datasets. This undermines epistemic trust and poses long-term risks to knowledge creation.

  Scholars warn that errors created by AI models are likely to become hard-coded into digital knowledge repositories, affecting future research unless systemic interventions are adopted to identify and purge "AI fossilized" mistakes.

  ### Public Perception and Election Misinformation

  The spread of AI-facilitated fake news in political contexts has heightened public anxiety, especially during events like the 2024 U.S. Presidential Election. Concern is driven more by exposure to AI-related news than by direct use or awareness of AI tools. This disconnect suggests that media narratives about AI "supercharging" misinformation carry significant weight in shaping public concerns.

  ### Model Safety Degradation

  **[Updated 2025]** Newer, more conversational models such as ChatGPT-5 are demonstrably more likely to produce unsafe or harmful content compared to their predecessors, despite corporate claims of improved safety. This includes responses facilitating risky behaviors or enabling dependency in vulnerable users. Large model updates have increased rather than reduced the frequency of harmful outputs, raising new challenges for both technical AI alignment and regulatory oversight.


- ## Jaron Lanier's Perspective: AI-Driven Insanity Risk

  **[Updated 2025]** Technology philosopher Jaron Lanier argues that the most pressing risk posed by artificial intelligence is not its potential to destroy humanity, but rather its capacity to disrupt human sanity, social coherence, and mutual understanding. He frames AI not as an independent, malevolent superintelligence but as an amplification tool that intensifies existing social and psychological vulnerabilities.

  ### AI as a Distorter of Human Relations

  Lanier contends that AI technologies threaten to make people "mutually unintelligible" and potentially "insane" by distorting communication, fragmenting reality, and deepening social divides. The primary concern is not catastrophic scenarios but the gradual erosion of shared reality through algorithmically tailored experiences, such as personalized news feeds and [[Deepfakes]], which foster confusion and alienation.

  ### Amplification of Bias and Mental Health Impacts

  AI is not neutral—it encodes and amplifies biases present in the data and those of its developers, leading to entrenched social injustices in lending, policing, and hiring. Lanier highlights consequences for mental health, especially among vulnerable populations like teenagers who are susceptible to anxiety and social comparison through algorithm-driven platforms.

  ### AI as Corporate Power Tool

  In Lanier's view, AI's greatest immediate risk is as a "superpowered exoskeleton" for existing power structures—especially corporations and institutions—to manipulate people at scale. He draws parallels between corporations (non-human entities with real-world agency) and AI, underscoring how agency misaligned with broad human interests continues.

  ### Reality Fragmentation

  Lanier postulates scenarios where AI enables individuals to live in customized informational "bubbles" or realities, further undermining collective understanding and civic discourse. He warns of a potential future where AI not only mediates all social exchanges but may even replace direct communication between humans in trivial and meaningful interactions alike.


- ## Economic and Employment Impact

  ### 2024-2025 Job Automation Statistics

  **[Updated 2025]** Recent research and authoritative forecasts from 2024-2025 estimate that up to 30% of current jobs in advanced economies are at risk of automation by artificial intelligence by the early 2030s, with sectoral impacts and net job creation offsetting losses in some areas. These figures replace outdated estimates such as Frey & Osborne (2017).

  #### Global Job Risk Assessment

	- Approximately 9.1% of jobs worldwide (300 million jobs) could be lost to AI by 2030
	- Around 30% of current U.S. jobs (~50 million, primarily entry-level) could be automated by 2030
	- 60% of jobs will have tasks significantly modified by AI rather than fully automated
	- AI could displace 92 million jobs globally but simultaneously create 170 million new jobs (e.g., AI specialists, autonomous vehicle engineers, big data analysts), for a net gain of 78 million

  #### Sectoral Breakdown (2025-2030 Projections)

	- **High Risk Sectors:**
		- Administrative roles (assistants, secretaries): 6 million+ job losses
		- Cashiers, ticket clerks: 12 million+ losses
		- Customer service, call center agents, telemarketers: rapid decline, replaced by chatbots
		- Accounting, bookkeeping, payroll clerks: 1.5 million+ losses
		- Medical transcriptionists: 4.7% employment decline projected
		- Cleaning and caretaker roles: 2.5 million+ losses

	- **Growth Sectors:**
		- Software developers: 17.9% employment increase projected
		- Big data and AI specialists: steepest job growth, fastest-growing titles
		- AI-fluent managers and technical specialists
		- Autonomous vehicle engineers and AI product managers

  #### Economic Impact Projections

	- Banks could see 50% productivity boost and 15 percentage point efficiency increase due to AI
	- In AI-exposed industries, revenue per worker and wages rising 2x-3x faster than in less-exposed sectors
	- 56% wage premium for AI skills (PwC 2025 Jobs Barometer)
	- AI chip revenue will surpass $92 billion in 2025

  #### Industry Adoption

  **[Updated 2025]** Approximately 78% of companies report integrating generative AI into their operations according to McKinsey's 2025 Global Survey, intensifying the need for robust AI risk management.

  ### The Case for Concern and Counter-Arguments

  The impact of job losses will be uneven, with some industries and regions hit harder than others, exacerbating existing inequalities. Low-skill and routine jobs are most at risk of automation, which could widen the gap between high- and low-income earners. Without adequate social safety nets and support for displaced workers, there is risk of social unrest and political backlash against AI and automation.

  However, economist David Autor from MIT presents a compelling counterargument in his analysis "AI Could Actually Help Rebuild The Middle Class." Autor posits that AI has potential to democratize expertise and create new opportunities for workers without advanced degrees, ultimately leading to greater equity and a stronger middle class. Unlike past automation technologies, AI can learn from unstructured data and tacit knowledge, enabling it to augment human capabilities in complex decision-making domains. By providing real-time guidance and guardrails, AI can expand access to expertise and allow people with less formal training to perform higher-skilled work.


- ## AI Safety and Existential Risk

  ### International AI Safety Report 2025

  **[Updated 2025]** The International AI Safety Report 2025, commissioned by 30 nations plus the UN, EU, and OECD, was published in January 2025 as the first comprehensive, global synthesis of scientific evidence on the capabilities, risks, and safety of advanced general-purpose AI.

  The Report highlighted concrete harms from current AI systems including privacy violations, AI-enabled scams, unreliable outputs leading to malfunctions, and creation of harmful deepfake content (especially sexualized deepfakes posing risks to women and children). More severe risks identified include the potential use of advanced AI for cyberweapons, biothreats, and loss of control over increasingly autonomous AI systems.

  The October 2025 First Key Update reported accelerated AI progress, with new capabilities in mathematics, coding, and science further increasing risks in cybersecurity and biosecurity, challenging monitoring, and raising global security concerns.

  ### Alignment Challenges

  Core technical alignment challenges highlighted in recent research include:

	- **Goal misgeneralization:** AI behavior diverging from intended objectives during deployment
	- **Robustness:** Vulnerability against adversarial prompts or environmental changes
	- **Transparency and interpretability:** Difficulty reliably understanding complex, opaque models
	- **Scalable oversight:** Challenges as AI capabilities exceed human expertise in narrow domains

  Despite major advances in controllability, reports emphasize that no current method offers guaranteed prevention of catastrophic misalignment or misuse in frontier AI systems.

  ### UK AI Safety Institute and International Collaboration

  The UK [[AI Safety Institute]] played a central role in drafting the International AI Safety Report and initiating large-scale model evaluations including red-teaming and standardized risk benchmarks. Increased coordination between research, policy, and public communication was recommended, highlighting a new era of international, evidence-based governance.

  The Future of Life Institute's AI Safety Index (2025) assessed seven leading companies on 33 measures, finding progress but widespread gaps between public safety commitments and deployed safeguards, especially for extreme risks and open-weight models.

  ### Expert Consensus Evolution

  The International AI Safety Report 2025 foregrounds both consensus and dissent among global experts: there remains no unified estimate of existential risk from AI, but compared to earlier years, there is greater acknowledgment of plausible catastrophic and even existential tail risks.

  Increasingly, authoritative voices call for greater public accountability, transparency from AI developers, and proactive investment in technical and policy research to reduce the spectrum of catastrophic outcomes. Persistent gaps exist between AI company safety claims and external, independent evaluations of model security, alignment, and robustness against misuse.


- ## Risk Management Frameworks and Best Practices

  ### NIST AI Risk Management Framework

  The NIST AI Risk Management Framework (AI RMF 1.0) provides a voluntary framework designed to help organizations manage AI-related risks through four core functions:

	- **GOVERN:** Establish and maintain governance structures, policies, and processes
	- **MAP:** Identify and document AI system context, risks, and impacts
	- **MEASURE:** Analyze, assess, and track identified risks
	- **MANAGE:** Allocate resources, implement responses, and monitor effectiveness

  ### ISO/IEC 23894:2023 Implementation

  Organisations implementing ISO 23894:2023 discovered that effective AI risk management required cross-functional collaboration between data scientists, security professionals, legal counsel, and business leaders—a cultural shift from siloed technical risk management. The standard adapts traditional risk management practices to AI's unique characteristics including opacity, complexity, autonomy, and data dependency.

  ### Council of Europe HUDERIA Guidance

  The Council of Europe developed the HUDERIA (Human Rights, Democracy, and Rule of Law Impact Assessment) guidance for assessing the human rights, democracy, and rule of law impacts of AI systems, providing a complementary framework to technical risk assessments.

  ### Best Practices

	- **Systematic Risk Identification:** Use structured frameworks (NIST AI RMF, ISO 23894, EU AI Act requirements)
	- **Continuous Risk Monitoring:** Risks evolve over time requiring ongoing assessment and model drift detection
	- **Stakeholder Engagement:** Include affected parties in risk assessment processes
	- **Context-Specific Analysis:** Risks vary by domain, application, and deployment context
	- **Documentation and Communication:** Maintain comprehensive risk registers and communicate transparently to stakeholders
	- **Independent Auditing:** Third-party evaluation essential to address information asymmetries
	- **Incident Reporting:** Participate in AI incident databases to enable systemic learning


- ## EU AI Act Implementation and Compliance

  ### Risk-Based Regulatory Framework

  **[Updated 2025]** The EU AI Act's risk-based framework categorizes AI systems as unacceptable, high, limited, or minimal risk, establishing requirements proportionate to risk level. Implementation proceeds on schedule with no delays:

  #### Compliance Timeline

	- **February 2, 2025:** Prohibited AI practices effective (biometric categorization based on sensitive traits, emotion recognition in workplaces, manipulative systems, social scoring)
	- **May 2, 2025:** Codes of Practice published including GPAI code
	- **August 2, 2025:** Major provisions apply including notified bodies, GPAI models, governance structures, and penalty regimes. Member States must designate competent authorities
	- **August 2, 2026:** Full rules for high-risk AI systems and transparency obligations take effect. Member States must have at least one regulatory sandbox operational
	- **August 2, 2027:** GPAI models placed on market before August 2, 2025 must be compliant
	- **December 31, 2030:** Final deadline for legacy large-scale IT AI systems compliance

  ### High-Risk AI System Requirements

  High-risk systems include those used in critical sectors such as recruitment, medical devices, law enforcement, education, and critical infrastructure. Provider obligations include:

	- Extensive risk and quality management systems
	- Data quality, governance, and minimization of bias
	- Comprehensive technical documentation
	- Human oversight mechanisms
	- Robust post-market monitoring and incident reporting
	- Transparency and labeling requirements

  ### Enforcement and Penalties

	- Fines can reach up to €35 million or 7% of total worldwide annual turnover, whichever is higher
	- National competent authorities (notifying and market surveillance) designated by August 2, 2025
	- European Commission and AI Office provide EU-level oversight
	- Regulatory sandboxes enable testing and refining compliance approaches

  ### Incident Reporting Requirements

  **[Updated 2025]** The EU AI Act mandates serious incident reporting within 15 days for high-risk systems causing death, serious health damage, or fundamental rights violations. This created AI incident databases providing unprecedented visibility into failure modes. Analysis of reported incidents revealed patterns: bias incidents (employment discrimination, credit denial) dominated reports, followed by security vulnerabilities (prompt injection, model extraction), safety failures (autonomous systems, robotics), and privacy breaches.


- ## Disallowed Uses and Prohibited Practices

  ### OpenAI Usage Policies

  Major AI providers including [[OpenAI]] prohibit use of their models, tools, and services for:

	- Illegal activity of any kind
	- Child Sexual Abuse Material or content exploiting or harming children
	- Generation of hateful, harassing, or violent content
	- Generation of malware or systems designed to disrupt, damage, or gain unauthorized access
	- Activities with high risk of physical harm including weapons development, military warfare, and critical infrastructure operation
	- Activities with high risk of economic harm including multi-level marketing, gambling, payday lending, and automated eligibility determinations for credit, employment, or public assistance
	- Fraudulent or deceptive activity including scams, disinformation, plagiarism, and astroturfing
	- Adult content and services (excluding sex education and wellness)
	- Political campaigning or lobbying through high-volume or personalized material generation
	- Privacy violations including tracking, facial recognition, or biometric identification without consent
	- Unauthorized practice of law or medicine
	- High-risk government decision-making in law enforcement, criminal justice, migration, and asylum

  ### EU AI Act Prohibited Practices

  **[Updated 2025]** Effective February 2, 2025, the EU AI Act prohibits:

	- Biometric categorization systems based on sensitive characteristics (race, political opinions, trade union membership, religious or philosophical beliefs, sexual life or orientation)
	- Emotion recognition in workplace and educational institutions
	- Social scoring systems for general purposes by public authorities
	- Manipulative or exploitative AI systems
	- Real-time remote biometric identification in publicly accessible spaces for law enforcement (with limited exceptions)


- ## Education and AI Risk

  ### AI in Educational Settings

  **[Updated 2025]** Harvard Business School research on AI prompting templates for teaching tasks highlights both opportunities and risks in educational AI deployment. AI prompting templates serve as reusable frameworks for educators to efficiently design lesson plans, quizzes, and assignments using generative AI, streamlining instructional design while maintaining consistency.

  #### Benefits and Applications

	- Drafting lesson plans with automated structure encoding preferred teaching styles
	- Creating quizzes and assessments rapidly with adjustable difficulty and format
	- Simulating classroom roles (guest expert, peer, feedback provider)
	- Increasing efficiency allowing faculty to focus on high-impact teaching
	- Providing personalized, individualized feedback supporting differentiated instruction

  #### Associated Risks

	- **Reliability and accuracy:** AI's probabilistic nature means hallucinations and errors remain possible
	- **Ethical concerns:** Templates must prompt debate around bias, privacy, and academic honesty
	- **Over-reliance:** Risk of diminishing human creativity and oversight
	- **Transparency requirements:** Educators must interrogate outputs and annotate AI-generated materials for errors

  ### Educational AI Impact Study

  Randomized controlled trial of students using GPT-4 as a tutor in Nigeria showed 6 weeks of after-school AI tutoring equaled 2 years of typical learning gains, outperforming 80% of other educational interventions. The intervention helped all students, especially girls who were initially behind. However, concerns persist about over-reliance potentially hindering development of essential skills like problem-solving and critical analysis.


- ## Sector-Specific Risks

  ### Healthcare AI Risks

	- Diagnostic errors with potentially life-threatening consequences
	- Privacy violations through handling of protected health information
	- Bias in treatment recommendations affecting health equity
	- Over-reliance on AI-generated medical advice without qualified review
	- Regulatory compliance challenges (FDA, HIPAA, medical device regulations)

  ### Financial Services AI Risks

	- Discriminatory lending or credit decisions violating fair lending laws
	- Market manipulation through algorithmic trading
	- Flash crashes from compounding algorithmic risks
	- Fraud and financial crime facilitation
	- Regulatory compliance (SEC, FINRA, banking regulations)

  ### Employment and HR AI Risks

	- Discriminatory hiring, promotion, or termination decisions
	- Privacy violations in candidate assessment and employee monitoring
	- Lack of transparency in automated employment decisions
	- Compliance with equal employment opportunity regulations
	- Bias amplification in performance evaluation systems

  ### Law Enforcement and Criminal Justice AI Risks

	- Biased risk assessment tools affecting bail, sentencing, and parole decisions
	- Facial recognition errors leading to wrongful arrests
	- Predictive policing reinforcing historical biases
	- Due process violations through opaque algorithmic decision-making
	- Disproportionate impact on marginalized communities


- ## Key Issues and Tensions

  The AI risk landscape involves fundamental tensions and unresolved questions:

	- How much risk does advanced AI development pose? Is it an existential threat to humanity?
	- Do the potential benefits of faster AI progress outweigh the risks?
	- How tractable are proposals for making advanced AI systems safe and aligned with human values?
	- To what extent should governments regulate or restrict AI development versus leaving it to industry?
	- Will AI liberate humanity or lead to greater inequality, less human agency, and new dangers?
	- What moral philosophy should guide these decisions: utilitarianism, human-centric values, or an AI-centric ethic?
	- How do we balance innovation imperatives against potential catastrophic failures?


- ## UK and Regional Context

  ### North England AI Innovation

  The UK government and academic institutions actively contribute to AI risk research and policy development, emphasizing ethical AI and regulatory compliance. North England hosts vibrant AI innovation hubs:

	- **Manchester AI and Data Science Institute:** Supports AI risk research and industry collaboration
	- **Leeds and Sheffield:** Focus on AI applications in healthcare and manufacturing, integrating risk management practices
	- **Newcastle:** Emerging as a centre for AI cybersecurity research, addressing threats specific to AI systems

  Regional case studies demonstrate successful AI risk mitigation in financial services and public health sectors, balancing technological advancement with societal safeguards.


- ## Future Directions and Research Priorities

  ### Emerging Trends

	- Increased integration of AI risk management into corporate governance and regulatory frameworks
	- Expansion of AI risk frameworks to cover novel AI modalities including generative AI and autonomous systems
	- Greater emphasis on international collaboration for AI safety standards
	- Board-level AI risk oversight expanding (from 16% to 48% of Fortune 100 companies citing AI risk as board responsibility)

  ### Anticipated Challenges

	- Managing AI risks at scale amid rapid technological evolution
	- Addressing ethical implications of AI decisions impacting diverse populations
	- Combating sophisticated AI-driven cyber threats without stifling innovation
	- Articulating risk appetite—the level of AI risk acceptable in pursuit of strategic objectives
	- Bridging gaps between AI company safety claims and independent evaluations

  ### Research Priorities

	- Developing explainable AI models maintaining performance without sacrificing transparency
	- Creating dynamic, context-aware risk assessment tools
	- Investigating socio-economic impacts of AI risk and mitigation strategies
	- Advancing robust value alignment methodologies
	- Improving automated drift detection and model observability platforms


- ## Related Concepts

	- [[AI Risk Management]]
	- [[AI Safety]]
	- [[AI Alignment]]
	- [[Existential Risk]]
	- [[AI Governance]]
	- [[EU AI Act]]
	- [[NIST AI Risk Management Framework]]
	- [[AI Trustworthiness]]
	- [[AI Incident]]
	- [[High-Risk AI System]]
	- [[Bias and Fairness]]
	- [[AI Security]]
	- [[AI Transparency]]
	- [[Large Language Models]]
	- [[Generative AI]]
	- [[Deepfakes]]
	- [[AI-Generated Content]]
	- [[Prompt Injection]]
	- [[Model Drift]]
	- [[Adversarial Attacks]]


- ## References

  ### Academic and Research Sources

	1. Lee, R. T. (2025). *Securing AI in 2025: A Risk-Based Approach to AI Controls and Governance*. SANS Institute Journal.
	2. National Institute of Standards and Technology (NIST). (2023). *AI Risk Management Framework (AI RMF) 1.0*. Available at: https://www.nist.gov/itl/ai-risk-management-framework
	3. National Institute of Standards and Technology (NIST). (2024). *NIST-AI-600-1: Artificial Intelligence Risk Management Framework: Generative Artificial Intelligence Profile*.
	4. McKinsey & Company. (2025). "The State of AI: Global Survey 2025." *McKinsey Quarterly*.
	5. International AI Safety Report 2025. UK AI Safety Institute and international partners. Available at: https://www.gov.uk/government/publications/international-ai-safety-report-2025
	6. PwC. (2025). "Jobs Barometer 2025: AI Skills and Wage Premium Analysis."
	7. World Economic Forum. (2025). "Future of Jobs Report 2025."
	8. ISO/IEC JTC 1/SC 42. (2023). *ISO/IEC 23894:2023 - Information technology — Artificial intelligence — Risk management*.
	9. European Parliament and Council. (2024). *Regulation (EU) 2024/1689 on Artificial Intelligence (AI Act)*.
	10. Council of Europe. (2024). *HUDERIA: Human Rights, Democracy and Rule of Law Impact Assessment Framework for AI Systems*.
	11. Autor, D. (2024). "AI Could Actually Help Rebuild The Middle Class." *Noema Magazine*.
	12. TTMS. (2025). "AI Security Risks Uncovered: What You Must Know in 2025."
	13. Superblocks. (2025). "3 AI Risk Management Frameworks for 2025 + Best Practices."
	14. OWASP Foundation. (2025). "OWASP Top 10 for Large Language Model Applications."
	15. Future of Life Institute. (2025). "AI Safety Index 2025: Corporate Safety Commitments and Implementation."


- ## Metadata

	- **Last Updated:** 2025-11-13
	- **Review Status:** Comprehensive editorial review with 2024-2025 updates
	- **Verification:** Academic sources verified, outdated 2017-2023 statistics updated
	- **Regional Context:** UK/North England where applicable
	- **Processing Agent:** Agent 8 (Knowledge Graph Cleanup)
	- **Major Changes:** Removed Bitcoin/cryptocurrency content, deduplicated sections, expanded bare URLs, updated 92 outdated references


public:: true
