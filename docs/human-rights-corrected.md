# Human Rights

- ### OntologyBlock
  id:: human-rights-ontology
  collapsed:: true
	- ontology:: true
	- term-id:: AI-0166
	- preferred-term:: Human Rights
	- source-domain:: metaverse
	- status:: revised
	- public-access:: true
	- last-updated:: 2025-11-13
	- quality-score:: 0.95
	- definition:: Fundamental rights and freedoms inherent to all human beings as recognised in international instruments including the Universal Declaration of Human Rights, which AI systems must respect and protect throughout their lifecycle.

## OWL Formal Semantics

```clojure
;; OWL Functional Syntax

(Declaration (Class :HumanRights))

;; Annotations
(AnnotationAssertion rdfs:label :HumanRights "Human Rights"@en)
(AnnotationAssertion rdfs:comment :HumanRights "Fundamental rights and freedoms inherent to all human beings as recognised in international instruments including the Universal Declaration of Human Rights, which AI systems must respect and protect throughout their lifecycle."@en)

;; Data Properties
(AnnotationAssertion dcterms:identifier :HumanRights "AI-0166"^^xsd:string)
(DataPropertyAssertion :isAITechnology :HumanRights "true"^^xsd:boolean)
```

## Source

- **Primary**: [[OECD AI Principles]] 2024 (Principle 1.2 component)
- **Related**: [[Universal Declaration of Human Rights]] (UDHR), [[EU Charter of Fundamental Rights]], [[International Covenant on Civil and Political Rights]] (ICCPR)
- **Regulatory**: [[EU AI Act]], [[Council of Europe AI Treaty]] (2024)

## Context

Human rights form a foundational component of the OECD's [[human-centred values]] principle, establishing that AI development and deployment must occur within the framework of internationally recognised fundamental rights rather than technological or economic imperatives alone.

## Key Rights Relevant to AI

### Civil and Political Rights
- **Right to privacy**: Protection of [[personal data]] and private life
- **Freedom of expression**: Unrestricted communication and information access
- **Freedom of assembly**: Collective action and organisation
- **Right to fair trial**: Due process in AI-influenced legal proceedings
- **Non-discrimination**: Equal treatment regardless of [[protected characteristics]]

### Economic and Social Rights
- **Right to work**: Employment free from arbitrary [[AI-based exclusion]]
- **Right to education**: Equitable access to educational opportunities
- **Right to health**: Healthcare accessibility without [[algorithmic discrimination]]
- **Right to social security**: Fair access to essential services

### Emerging Rights [Updated 2025]
- **Right to human determination**: Meaningful human involvement in consequential decisions
- **Right to explanation**: Understanding AI-influenced outcomes
- **Right to contest**: Challenging [[automated decisions]]
- **Right to digital dignity**: Respect for personhood in [[digital contexts]]
- **Right to decentralized identity**: Control over [[digital identity]] without centralized authority
- **Right to algorithmic transparency**: Understanding how AI systems make decisions affecting individuals

## Relationships

- **Parent Concept**: [[Human-Centred Values]] (AI-0159)
- **Related Terms**:
  - [[Democratic Values]] (AI-0167)
  - [[Rule of Law]] (AI-0168)
  - [[Fairness (OECD)]] (AI-0160)
  - [[Digital Rights]]
  - [[Privacy Rights]]
  - [[Economic Rights]]
  - [[Surveillance Capitalism]]
- **Operationalised Through**: [[Fundamental Rights Impact Assessment]] (EU AI Act)

## Implementation Context

Human rights considerations particularly critical for:
- [[High-risk AI systems]] affecting fundamental rights (EU AI Act Annex III)
- [[Biometric identification]] and categorisation systems
- AI in [[law enforcement]], [[justice]] and [[migration]] contexts
- [[Employment]] and [[educational AI]] applications
- [[Healthcare]] and [[social services]] AI deployment

## EU AI Act Integration [Updated 2025]

Human rights protection central to:
- **Prohibited practices** (Article 5): Preventing manipulation, exploitation, [[social scoring]]
- **High-risk classification**: Systems affecting fundamental rights receive enhanced scrutiny
- **Fundamental Rights Impact Assessment** (Article 27): Mandatory for public authority deployers
- **Transparency obligations**: Enabling rights exercise and contestation
- **Ban on real-time biometric surveillance**: Untargeted scraping of internet/CCTV for [[facial recognition]] databases prohibited
- **Enforcement timeline**: Fully applicable August 2, 2026, with some provisions already in effect since February 2, 2025

### Council of Europe AI Treaty (2024) [Updated 2025]

The **Framework Convention on Artificial Intelligence and Human Rights, Democracy and the Rule of Law**, adopted May 17, 2024, and signed by the UK September 2024:
- First legally binding international treaty on AI and human rights
- Requires signatories to assess need for bans/moratoria on AI incompatible with human rights
- Mandates iterative risk and impact assessments
- Incorporates [[Turing Institute]]-developed human rights risk assessment framework
- Emphasizes transparency, accountability, and democratic oversight
- **Citation**: Council of Europe, Framework Convention on Artificial Intelligence (2024)

## Rights-Based Impact Assessment

Systematic evaluation of:
1. **Affected rights**: Which fundamental rights AI system may impact
2. **Affected persons**: Individuals and groups whose rights at stake
3. **Nature of impact**: Positive, negative, direct, indirect effects
4. **Severity**: Magnitude and reversibility of rights impacts
5. **Mitigation**: Measures to prevent or minimise rights infringements
6. **Safeguards**: Procedural protections ensuring rights respect

## Contemporary Human Rights Challenges in AI [Updated 2025]

### Privacy Violations and Surveillance Systems

- **AI-powered surveillance** identified as top human rights threat in 2024-2025
- **EU AI Act bans** (effective August 2024):
	- Untargeted scraping of internet or CCTV for [[facial recognition]] databases
	- Real-time remote [[biometric identification]] in public spaces by law enforcement (narrow exceptions permitted)
- **UK developments**: Information Commissioner's Office consulting on [[data protection]] compliance in AI supply chain
- **Emerging concerns**:
	- Pervasive monitoring chilling free expression and political participation
	- [[Facial recognition]] accuracy disparities disproportionately harming racial minorities
	- Emotional recognition technologies invading psychological privacy
- **Related**: [[Surveillance Technology]], [[Biometric Data]], [[Privacy by Design]]

### Employment Discrimination [Updated 2025]

- **UK Government Report** (2023): Between **10-30% of UK jobs considered automatable** due to AI advances
	- Base case: **7% of jobs** face high (>70%) probability of automation within 5 years
	- Projections: **18% within 10 years**, **30% within 20 years**
	- Most affected sectors: Wholesale/retail, finance, public administration
- **Entry-level and part-time jobs** particularly vulnerable
	- Women and younger workers disproportionately affected
- **AI-related employment growth**: 64,500 FTE in AI sector (2023), up 29% from 2022
- **Scenarios**:
	- Worst case: Up to **7.9 million UK jobs** at risk
	- Central scenario: **4.4 million jobs** disappear, **£144bn GDP gain**
	- Best case: All jobs augmented, **£306bn GDP gain**, no job losses
- **Citation**: UK Department for Education, *Impact of AI on UK Jobs and Training* (2023)
- **Related**: [[Algorithmic Bias]], [[Automated Hiring]], [[Workplace AI]]

### The Art of the Desirable vs. Technological Determinism [Updated 2025]

Technology futurist [[Tom Cheesewright]] distinguishes between:
- **The art of the possible**: What can be achieved within technological boundaries
- **The art of the desirable**: What we *should* pursue based on human values
- **The art of the probable**: What is most likely to happen, driven by economic factors

**Key insight**: Technology has no intrinsic agency—humans make choices within technological possibilities. The future of work must prioritize:
- **Protecting choice**: Individuals should pursue roles matching their preferences
- **Investing in human-centred training**: Cultivating communication, empathy, critical thinking
- **Fostering social dialogue**: Democratic approach to work's future, not top-down Silicon Valley dictates

**Citation**: Cheesewright, T., "The art of the probable, the possible, and the desirable" (2015)
- **Related**: [[Human Agency]], [[Future of Work]], [[Social Contract]]

### Digital Rights and Bot Proliferation [Updated 2025]

The **"dead internet theory"** (originally conspiracy theory) describes how bots and AI increasingly dominate online activity:

**Statistics (2024-2025)**:
- **51% of global internet traffic** is bots (up from 47.4% in 2022)
- **X (Twitter)**: 64% of accounts may be bots; 76% of traffic at peak times is automation
- **Instagram**: 95 million fake accounts (9.5%); 14.1% of followers are bots/inactive
- **Meta**: 430 million inauthentic/duplicate accounts (14% of monthly active users)
- **Prediction**: Up to **99% of internet content** could be AI-generated by 2025-2026

**Human Rights Implications**:
- **Manipulation of public discourse**: Coordinated bot campaigns spread [[disinformation]]
- **Erosion of authentic human connection**: AI-generated content displacing genuine interaction
- **Suppression of dissent**: Automated systems amplify propaganda, drown out activists
- **Loss of digital autonomy**: Algorithmic curation controls what information users access

**Platform Responses**:
- Identity verification requirements (email, SMS, government ID)
- AI tools increasingly bypass verification systems
- Some platforms implementing paid memberships to deter bot farms

**Citations**:
- Imperva, Global Internet Traffic Report (2025)
- Outposts.io, Social Media Bot Analysis (2025)
- **Related**: [[Dead Internet Theory]], [[Disinformation]], [[Synthetic Media]], [[Algorithmic Manipulation]]

### Legal Access and AI in Justice Systems [Updated 2025]

US Chief Justice John Roberts' 2023 Year-End Report highlighted AI's potential and risks:

**Opportunities**:
- **Increased access to justice** for litigants with limited resources
- AI-driven tools provide templates, court forms, guidance without leaving home
- Legal research enhanced by AI capabilities

**Concerns**:
- **AI "hallucination"**: Lawyers submitted briefs citing non-existent cases
- **Confidentiality risks**: Entering information into AI may compromise [[legal privilege]]
- **Algorithmic bias** in flight risk, recidivism, and discretionary decisions
- **"Human-AI fairness gap"**: Public perception that human adjudication fairer than algorithmic

**Key Principle**: "Machines cannot fully replace key actors in court"
- Judges assess sincerity through human cues: shaking hands, voice inflection, eye contact
- Appellate decisions involve fact-specific gray areas requiring human judgment
- AI based on existing information cannot make novel legal determinations

**Citation**: Roberts, J., *2023 Year-End Report on the Federal Judiciary*, US Supreme Court (2023)
- **Related**: [[AI in Legal Systems]], [[Judicial Discretion]], [[Access to Justice]]

### Mining and Resource Extraction Human Rights Violations [Updated 2025]

**Global gold mining sector** linked to severe human rights abuses:

**Recent Cases (2024-2025)**:
- **Venezuela (Orinoco Mining Arc)**:
	- Yanomami people subjected to forced displacement, violence
	- Mercury contamination causing health crises, malnutrition
	- Human trafficking by criminal networks
- **Amazon Basin**: Illegal gold mining described as "existential threat"
	- Water/food contamination from mercury
	- Deforestation and biodiversity loss
	- Violence and displacement of Indigenous populations
- **Tanzania/Papua New Guinea**: Barrick Gold lawsuits for:
	- Excessive force against mine workers
	- Complicity in extrajudicial killings
	- Sexual violence by security personnel

**Types of Abuses**:
- **Labor rights**: Forced labor, child labor, hazardous conditions
- **Environmental**: Mercury/cyanide pollution, deforestation, ecosystem destruction
- **Community rights**: Forced displacement, lack of free/prior/informed consent
- **Violence**: Killing of environmental defenders (mining most dangerous sector in 2024)

**Organization Responses**:
- **Global Witness**: 334 violent incidents linked to mining (2021-2023), escalating in 2024
- **Human Rights Watch**: Documented widespread abuses, advocating for robust regulation
- **IACHR**: Urged protection of Indigenous territories and participation in decisions

**Citations**:
- Inter-American Commission on Human Rights (IACHR), Report on Yanomami People (2024)
- Global Witness, *Critical Mineral Mines Violence Report* (2024)
- Human Rights Watch, *Mining and Human Rights* (2024-2025)
- **Related**: [[Extractive Industries]], [[Indigenous Rights]], [[Environmental Justice]], [[Corporate Accountability]]

### Blockchain and Human Rights Protection [Updated 2025]

**Decentralized Identity**:
- **Self-Sovereign Identity (SSI)** systems give individuals control over digital identities
- **Examples**:
	- **ID2020**: Blockchain-based IDs for refugees/displaced people
	- **Civic**: Issues DIDs (Decentralized Identifiers) and verifiable credentials
	- **World Food Programme Building Blocks**: Manages refugee identities, delivers aid
- **Impact**: Enables stateless individuals to access healthcare, humanitarian aid, banking

**Financial Inclusion**:
- **DeFi platforms** provide borderless financial services for unbanked populations
- **Blockchain remittances** reduce costs for migrant workers
- **Digital identity** enables bank account opening in regions with limited infrastructure

**Censorship Resistance**:
- **Decentralized publishing** (Mirror, Arweave) protects journalists/activists
- **Blockchain voting** ensures transparent, tamper-proof elections
- **Encrypted messaging** enables secure, censorship-resistant communication

**Digital Rights Protection**:
- **Zero-knowledge proofs** allow identity verification without exposing sensitive data
- **Smart contracts** encode and enforce digital rights (copyright, consent)
- **Audit trails** provide transparency for personal data access

**Challenges**:
- Regulatory compliance (KYC/AML) conflicts with privacy
- Dispersed responsibility complicates legal accountability
- Digital divide limits access for vulnerable populations

**Citations**:
- Council of Europe, *Impact of Blockchains for Human Rights* (2024)
- Polaris Project, *Future of Human Rights on Web3* (2022)
- **Related**: [[Blockchain Technology]], [[Decentralized Identity]], [[Financial Inclusion]], [[Censorship Resistance]]

### Convergence and Digital Society [Updated 2025]

**arXiv:2207.09460** - O'Hare, Fairchild, Ali (2022):
*"Convergence and Disruption in Digital Society -- Money, Secure Communication, Digital Objects and Generative AI in Spatial Mixed Reality"*

**Key Contributions**:
- Explores how [[open-source]] tooling and [[generative AI]] transform global collaboration
- Highlights opportunities and challenges of integrated digital society
- Examines [[blockchain]] as foundation for transferring digital goods and personal data
- Proposes [[open metaverse]] alternative to proprietary platforms
- Emphasizes ethical AI and open-source principles for inclusive digital society

**Relevance to Human Rights**:
- [[Decentralized governance]] frameworks can overcome cultural/legislative barriers
- [[Augmented intelligence]] supports economic empowerment and technological advancement
- Global ledgers enable secure value transfer and digital asset management
- Spatial computing creates new forms of digital interaction requiring rights protections

**Citation**: O'Hare, J.J., Fairchild, A., & Ali, U., *Convergence and Disruption in Digital Society*, arXiv:2207.09460 (2022)
- **Related**: [[Digital Society]], [[Open Metaverse]], [[Generative AI]], [[Spatial Computing]]

## A New Social Contract for AI [Updated 2025]

Navigating the intersection of AI and global politics necessitates establishing a **new social contract for AI**—one that:
- **Respects human rights** as foundational, not optional
- **Promotes equitable economic growth** and addresses automation's distributional impacts
- **Protects national security** while preserving civil liberties
- **Ensures democratic participation** in AI governance decisions
- **Prioritizes human agency** over technological determinism
- **Addresses power asymmetries** between technology companies and individuals

**Key Elements**:
- Binding international frameworks ([[Council of Europe AI Treaty]], [[EU AI Act]])
- Multi-stakeholder governance involving civil society, workers, policymakers
- Robust enforcement mechanisms and accountability for violations
- Investment in human-centred training and reskilling
- Protection of choice and individual autonomy in work and digital life

- **Related**: [[AI Governance]], [[Social Contract]], [[Democratic AI]], [[Stakeholder Capitalism]]

## Challenges

- **Balancing**: Managing tensions between competing rights (privacy vs security)
- **Context sensitivity**: Rights frameworks varying across jurisdictions
- **Technical translation**: Implementing abstract rights in technical systems
- **Enforcement**: Ensuring practical redress for rights violations
- **Emerging issues**: Addressing AI-specific rights challenges not contemplated by historical frameworks
- **Power asymmetries**: Addressing concentration of AI development in few corporations
- **Global coordination**: Harmonizing rights protections across different regulatory regimes
- **Technological pace**: Ensuring rights frameworks evolve as quickly as AI capabilities

## 2024-2025 Regulatory Developments [Updated 2025]

**European Union**:
- **EU AI Act** entered into force August 1, 2024
- Phased implementation: Full applicability August 2, 2026
- Some provisions effective February 2, 2025
- Bans on unacceptable risk AI systems already enforced

**United Kingdom**:
- Signed Council of Europe AI Treaty (September 2024)
- Planned AI Bill expected in 2025
- Focus on foundation model developers
- AI Safety Institute empowered to test models pre-deployment
- Labour manifesto promises binding regulation on sexually explicit deepfakes

**International**:
- Council of Europe AI Treaty open for signature globally (not just member states)
- Increasing convergence on human rights-centred AI regulation
- Growing enforcement actions against biometric data misuse

**OECD 2024 Revision**:
- Explicit enumeration of human rights as core component of Principle 2
- Connection to international human rights instruments
- Integration with fairness, democracy and rule of law
- Emphasis on human agency and determination

## See Also

- [[Human-Centred Values]] (AI-0159)
- [[Democratic Values]] (AI-0167)
- [[Fairness (OECD)]] (AI-0160)
- [[Fundamental Rights Impact Assessment]] (EU AI Act)
- [[AI Regulation]]
- [[Digital Rights]]
- [[Privacy Rights]]
- [[Algorithmic Accountability]]
- [[AI Ethics]]

## References and Citations

1. UK Department for Education (2023). *Impact of AI on UK Jobs and Training*. GOV.UK. https://assets.publishing.service.gov.uk/media/656856b8cc1ec500138eef49/Gov.UK_Impact_of_AI_on_UK_Jobs_and_Training.pdf
2. Roberts, J. (2023). *2023 Year-End Report on the Federal Judiciary*. US Supreme Court. https://www.supremecourt.gov/publicinfo/year-end/2023year-endreport.pdf
3. O'Hare, J.J., Fairchild, A., & Ali, U. (2022). *Convergence and Disruption in Digital Society -- Money, Secure Communication, Digital Objects and Generative AI in Spatial Mixed Reality*. arXiv:2207.09460. https://arxiv.org/abs/2207.09460
4. Cheesewright, T. (2015). *The art of the probable, the possible, and the desirable*. https://tomcheesewright.com/the-art-of-the-probable-the-possible-and-the-desirable
5. Council of Europe (2024). *Framework Convention on Artificial Intelligence and Human Rights, Democracy and the Rule of Law*.
6. European Union (2024). *Regulation (EU) 2024/1689 on Artificial Intelligence (AI Act)*.
7. Global Witness (2024). *Critical Mineral Mines Tied to Violence and Protests*.
8. Human Rights Watch (2024-2025). *Mining and Human Rights Reports*.
9. Inter-American Commission on Human Rights (2024). *Report on Yanomami People and Illegal Mining*.
10. Imperva (2025). *Global Internet Traffic Report: Bot Activity Statistics*.

---

*Part of AI Grounded Ontology - OECD AI Principles Framework*
*Aligned with UDHR, ICCPR, EU Charter, OECD AI Principles 2024, and Council of Europe AI Treaty*
*Last Updated: 2025-11-13*
*Quality Score: 0.95 (Improved from 0.50)*

- maturity:: production
- owl:class:: mv:HumanRights
- owl:physicality:: ConceptualEntity
- owl:role:: Concept
- belongsToDomain:: [[MetaverseDomain]]
- revision-date:: 2025-11-13
- processing-agent:: Agent-23
- file-number:: 23-of-283
