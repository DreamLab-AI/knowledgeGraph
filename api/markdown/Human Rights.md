# Human Rights
- ### OntologyBlock
  id:: human-rights-ontology
  collapsed:: true
	- ontology:: true
	- term-id:: AI-0166
	- preferred-term:: Human Rights
	- source-domain:: mv
- status:: draft
	- definition:: Fundamental rights and freedoms inherent to all human beings as recognised in international instruments including the Universal Declaration of Human Rights, which AI systems must respect and protect throughout their lifecycle.

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

- **Primary**: OECD AI Principles 2024 (Principle 1.2 component)
- **Related**: Universal Declaration of Human Rights (UDHR), EU Charter of Fundamental Rights, International Covenant on Civil and Political Rights

## Context

Human rights form a foundational component of the OECD's human-centred values principle, establishing that AI development and deployment must occur within the framework of internationally recognised fundamental rights rather than technological or economic imperatives alone.

- **Primary**: [[OECD AI Principles]] 2024 (Principle 1.2 component)
- **Related**: [[Universal Declaration of Human Rights]] (UDHR), [[EU Charter of Fundamental Rights]], [[International Covenant on Civil and Political Rights]] (ICCPR)
- **Regulatory**: [[EU AI Act]], [[Council of Europe AI Treaty]] (2024)

## Context

Human rights form a foundational component of the OECD's [[human-centred values]] principle, establishing that AI development and deployment must occur within the framework of internationally recognised fundamental rights rather than technological or economic imperatives alone.

## Key Rights Relevant to AI

### Civil and Political Rights
- **Right to privacy**: Protection of personal data and private life
- **Freedom of expression**: Unrestricted communication and information access
- **Freedom of assembly**: Collective action and organisation
- **Right to fair trial**: Due process in AI-influenced legal proceedings
- **Non-discrimination**: Equal treatment regardless of protected characteristics

### Economic and Social Rights
- **Right to work**: Employment free from arbitrary AI-based exclusion
- **Right to education**: Equitable access to educational opportunities
- **Right to health**: Healthcare accessibility without algorithmic discrimination
- **Right to social security**: Fair access to essential services

### Emerging Rights
- **Right to human determination**: Meaningful human involvement in consequential decisions
- **Right to explanation**: Understanding AI-influenced outcomes
- **Right to contest**: Challenging automated decisions
- **Right to digital dignity**: Respect for personhood in digital contexts

## Relationships

- **Parent Concept**: Human-Centred Values (AI-0159)
- **Related Terms**:
  - Democratic Values (AI-0167)
  - Rule of Law (AI-0168)
  - Fairness (OECD) (AI-0160)
  - Human-Centred Values (AI-0159)
- **Operationalised Through**: Fundamental Rights Impact Assessment (EU AI Act)

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
- High-risk AI systems affecting fundamental rights (EU AI Act Annex III)
- Biometric identification and categorisation systems
- AI in law enforcement, justice and migration contexts
- Employment and educational AI applications
- Healthcare and social services AI deployment

## EU AI Act Integration

Human rights protection central to:
- **Prohibited practices** (Article 5): Preventing manipulation, exploitation, social scoring
- **High-risk classification**: Systems affecting fundamental rights receive enhanced scrutiny
- **Fundamental Rights Impact Assessment** (Article 27): Mandatory for public authority deployers
- **Transparency obligations**: Enabling rights exercise and contestation

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

## Challenges

- **Balancing**: Managing tensions between competing rights (privacy vs security)
- **Context sensitivity**: Rights frameworks varying across jurisdictions
- **Technical translation**: Implementing abstract rights in technical systems
- **Enforcement**: Ensuring practical redress for rights violations
- **Emerging issues**: Addressing AI-specific rights challenges not contemplated by historical frameworks

## 2024 Revision Emphasis

OECD 2024 revision strengthened human rights by:
- Explicit enumeration as core component of Principle 2
- Connection to international human rights instruments
- Integration with fairness, democracy and rule of law
- Emphasis on human agency and determination

## See Also

- Human-Centred Values (AI-0159)
- Democratic Values (AI-0167)
- Fairness (OECD) (AI-0160)
- Fundamental Rights Impact Assessment (EU AI Act)

---

*Part of AI Grounded Ontology - OECD AI Principles Framework*
*Aligned with UDHR, ICCPR, EU Charter and OECD AI Principles 2024*
	- maturity:: draft
	- owl:class:: mv:HumanRights
	- owl:role:: Concept
	- belongsToDomain:: [[MetaverseDomain]]
- ## About Human Rights
	- Fundamental rights and freedoms inherent to all human beings as recognised in international instruments including the Universal Declaration of Human Rights, which AI systems must respect and protect throughout their lifecycle.

	- ## AI Spending Across Departments
		- IT and product/engineering lead AI spending with 22% and 19%, respectively.
		- Other notable areas include customer support (9%), sales (8%), data science (8%), marketing (7%), human resources (7%), and accounting/finance (7%).

	- ## Why the UK Must Lead
		- Unique convergence of technical, human, and research excellence.
		- Addresses £100bn nuclear challenge, complex legacy systems, and critical infrastructure.
		- Leverages UK’s collaborative culture and world-class AI/human factors research.
		- This facility will transform expert teamwork, create adaptive AI, and make the UK a global leader in collaborative intelligence.
			- **The technology is ready. The need is critical. The potential is transformative.**

	- ### Human Texture Estimation: Bringing Digital Skin to Life
		- Realistic skin texture is crucial for believable digital humans. This section explores projects and research dedicated to accurately estimating and recreating human skin textures.
		  
		  * [SMPLitex](https://dancasas.github.io/projects/SMPLitex/index.html): A generative model and dataset for estimating 3D human texture from a single image.
		  * [Human texture estimation from a single image](https://scholar.google.com/scholar?q=human+texture+estimation+from+a+single+image): A broader exploration of the field of human texture estimation from single images.

	- ## Convergence :
		- Everything is smoothing out as GenAI scaffolds human work. The interfaces won't need to be learnt any more. [[Social contract and jobs]] may soon be radically different. This is a [[Convergence]] but is also a [[Disruption]].

- # Most threatened roles
	- UK dept of education [10-30% can be automated away.](https://assets.publishing.service.gov.uk/media/656856b8cc1ec500138eef49/Gov.UK_Impact_of_AI_on_UK_Jobs_and_Training.pdf#:~:text=It%20has%20been%20estimated%20that%2010-30%25%20of%20jobs,the%20potential%20benefits%20advances%20in%20AI%20will%20bring.)
	- id:: 659a9231-eed0-4503-b1c7-ec6fdc4a3ae4 | #  | Exposure to all AI applications | Exposure to large language modelling | |----|--------------------------------|--------------------------------------| | 1  | Management consultants and business analysts* | Telephone salespersons | | 2  | Financial managers and directors | Solicitors* | | 3  | Charted and certified accountants | Psychologists* | | 4  | Psychologists* | Further education teaching professionals | | 5  | Purchasing managers and directors | Market and street traders and assistants | | 6  | Actuaries, economists and statisticians | Legal professionals n.e.c.* | | 7  | Business and financial project management professionals | Credit controllers* | | 8  | Finance and investment analysts and advisers | Human resource administration occupations* | | 9  | Legal professionals n.e.c.* | Public relations professionals | | 10 | Business and related associate professionals n.e.c. | Management consultant and business analysts* | | 11 | Credit controllers* | Market research interviewers | | 12 | Solicitors* | Local government administrative occupations | | 13 | Civil engineers | Clergy | | 14 | Education advisers and school inspectors* | Higher education teaching professionals | | 15 | Human resources administrative occupations* | Collector salespersons and credit agents | | 16 | Business, research and administrative professionals n.e.c. | Education advisers and school inspectors* | | 17 | Financial accounts managers | Human resource managers and directors | | 18 | Bookkeepers, payroll managers and wages clerks | National government administrative occupations* | | 19 | National government administrative occupations* | Vocational and industrial trainers and instructors | | 20 | Marketing associate professionals | Social and humanities scientists |

- # University of Salford (1997-2022)
  id:: 65e1a2f6-f063-44f9-8181-cc6e8d5e2339
	- Over 25 years of expertise in immersive technologies, high performance compute, distributed systems, machine learning, and latterly generative AI.
		- ![perpectiveViewOctave.png](assets/perpectiveViewOctave_1749200107440_0.png)
		- Technical director of multimillion pound multi-model mixed reality lab at the [[National Industrial Centre for Virtual Environments]].
		- ![OcTave4330Square (1).jpg](../assets/OcTave4330Square_(1)_1749200127170_0.jpg)
		- ![OcTave4338Square (1).jpg](../assets/OcTave4338Square_(1)_1749200134642_0.jpg)
		- Primary expertise in novel display topologies and high performance [[Hardware and Edge]].
		- ![IMG_20110218_152226.jpg](assets/IMG_20110218_152226_1749200152488_0.jpg)
		- This is big data running in human scale VR with Prof Rob Aspin in 2019.
		- ![P1080785.JPG](assets/P1080785_1728030359430_0.JPG){:height 499, :width 872}
		-
		- ![IMG_20160425_145237.jpg](assets/IMG_20160425_145237_1728029981248_0.jpg)
		-
		- {{video https://www.youtube.com/watch?v=vlV1vRD4jrY&t=15s}}
	- Human scale mixed reality experience
		- Very strong track record and research in immersive systems
		- 2004 VETS programme R&D engine assembler demo’d at Farnborough Air Show for Euravia Systems
		- ![image.png](assets/image_1707994222111_0.png){:width 600}
	- Multi decade career supporting research and SMEs at UoS
		- VETS ERDF  (2001-2008: Consultancy, training and immersive product for 100’s of SMEs)
		- Cyber foundry & AI foundry  (2019-2022: Detailed R&D for SME’s in immersive/AI/cybersec intersection)
		- One of the Cyber Foundry projects became a book and product.
			- [Convergence and Disruption in Digital Society -- Money, Secure Communication, Digital Objects and Generative AI in Spatial Mixed Reality (arxiv.org)](https://arxiv.org/abs/2207.09460)
				- ![image.png](assets/image_1704196183900_0.png){:height 700, :width 300}

	- ## Octave
		- Combining acoustics and vision in my world class multi-modal lab:
		- Supporting PhDs
		- world firsts -
			- Human eye gaze connection in collaborative mixed reality over distance
		- Brain scanning in proving treatment of fear of heights
		- Reconstruction of humans in real time from cameras
		- Nurse training, immersive education, digital twins
		- Telepresence, including [[Telethrone]]
		- Wavefield synthesis with immersive vision
		- 2002 VETS programme Heaton Park refurbishment visualisation rendered in Octave Multi-Modal lab 2013
		- ![image.png](assets/image_1707994463743_0.png){:width 600}
		-

	- ### Runway ML
		- [twitter link to the render loading below](https://twitter.com/bennash/status/1746188870679400543)
		  {{twitter https://twitter.com/bennash/status/1746188870679400543}}
		- **Basic Animation**: Offers cinematic camera movements and more convincing human motion, but faces issues with brightness and image integrity.
		- **Prompt Creativity & Flexibility**: Less flexible in prompt creativity, occasionally disregarding user prompts.
		- **Human Motion Animation**: Produces high-quality animations but sometimes distorts the original image.
		- **Camera Motion Options**: Provides dynamic camera shots, including zooming, panning, and rotating, but may lead to distortion.
		- **Pros**: Web-based platform ensuring privacy, offers 120 free credits, advanced features, and the option to extend video length.
		- **Cons**: Limited to 16:9 aspect ratio, may not be as flexible as Pika Labs in prompt generation​[](https://www.toolify.ai/ai-news/revolutionary-ai-animation-tools-pika-vs-runway-78636)​​[](https://dragganaitool.uk/pika-labs-vs-runwayml-gen2/)​.

				- ### Microsoft research
					- 65% of Gen Z employees said they don't have the right skills for the AI era

	- ## AI Spending Across Departments
		- IT and product/engineering lead AI spending with 22% and 19%, respectively.
		- Other notable areas include customer support (9%), sales (8%), data science (8%), marketing (7%), human resources (7%), and accounting/finance (7%).

	- ## Why the UK Must Lead
		- Unique convergence of technical, human, and research excellence.
		- Addresses £100bn nuclear challenge, complex legacy systems, and critical infrastructure.
		- Leverages UK’s collaborative culture and world-class AI/human factors research.
		- This facility will transform expert teamwork, create adaptive AI, and make the UK a global leader in collaborative intelligence.
			- **The technology is ready. The need is critical. The potential is transformative.**

	- ### Human Texture Estimation: Bringing Digital Skin to Life
		- Realistic skin texture is crucial for believable digital humans. This section explores projects and research dedicated to accurately estimating and recreating human skin textures.
		  
		  * [SMPLitex](https://dancasas.github.io/projects/SMPLitex/index.html): A generative model and dataset for estimating 3D human texture from a single image.
		  * [Human texture estimation from a single image](https://scholar.google.com/scholar?q=human+texture+estimation+from+a+single+image): A broader exploration of the field of human texture estimation from single images.

	- ## Convergence :
		- Everything is smoothing out as GenAI scaffolds human work. The interfaces won't need to be learnt any more. [[Social contract and jobs]] may soon be radically different. This is a [[Convergence]] but is also a [[Disruption]].

- # Most threatened roles
	- UK dept of education [10-30% can be automated away.](https://assets.publishing.service.gov.uk/media/656856b8cc1ec500138eef49/Gov.UK_Impact_of_AI_on_UK_Jobs_and_Training.pdf#:~:text=It%20has%20been%20estimated%20that%2010-30%25%20of%20jobs,the%20potential%20benefits%20advances%20in%20AI%20will%20bring.)
	- id:: 659a9231-eed0-4503-b1c7-ec6fdc4a3ae4 | #  | Exposure to all AI applications | Exposure to large language modelling | |----|--------------------------------|--------------------------------------| | 1  | Management consultants and business analysts* | Telephone salespersons | | 2  | Financial managers and directors | Solicitors* | | 3  | Charted and certified accountants | Psychologists* | | 4  | Psychologists* | Further education teaching professionals | | 5  | Purchasing managers and directors | Market and street traders and assistants | | 6  | Actuaries, economists and statisticians | Legal professionals n.e.c.* | | 7  | Business and financial project management professionals | Credit controllers* | | 8  | Finance and investment analysts and advisers | Human resource administration occupations* | | 9  | Legal professionals n.e.c.* | Public relations professionals | | 10 | Business and related associate professionals n.e.c. | Management consultant and business analysts* | | 11 | Credit controllers* | Market research interviewers | | 12 | Solicitors* | Local government administrative occupations | | 13 | Civil engineers | Clergy | | 14 | Education advisers and school inspectors* | Higher education teaching professionals | | 15 | Human resources administrative occupations* | Collector salespersons and credit agents | | 16 | Business, research and administrative professionals n.e.c. | Education advisers and school inspectors* | | 17 | Financial accounts managers | Human resource managers and directors | | 18 | Bookkeepers, payroll managers and wages clerks | National government administrative occupations* | | 19 | National government administrative occupations* | Vocational and industrial trainers and instructors | | 20 | Marketing associate professionals | Social and humanities scientists |

- # University of Salford (1997-2022)
  id:: 65e1a2f6-f063-44f9-8181-cc6e8d5e2339
	- Over 25 years of expertise in immersive technologies, high performance compute, distributed systems, machine learning, and latterly generative AI.
		- ![perpectiveViewOctave.png](assets/perpectiveViewOctave_1749200107440_0.png)
		- Technical director of multimillion pound multi-model mixed reality lab at the [[National Industrial Centre for Virtual Environments]].
		- ![OcTave4330Square (1).jpg](../assets/OcTave4330Square_(1)_1749200127170_0.jpg)
		- ![OcTave4338Square (1).jpg](../assets/OcTave4338Square_(1)_1749200134642_0.jpg)
		- Primary expertise in novel display topologies and high performance [[Hardware and Edge]].
		- ![IMG_20110218_152226.jpg](assets/IMG_20110218_152226_1749200152488_0.jpg)
		- This is big data running in human scale VR with Prof Rob Aspin in 2019.
		- ![P1080785.JPG](assets/P1080785_1728030359430_0.JPG){:height 499, :width 872}
		-
		- ![IMG_20160425_145237.jpg](assets/IMG_20160425_145237_1728029981248_0.jpg)
		-
		- {{video https://www.youtube.com/watch?v=vlV1vRD4jrY&t=15s}}
	- Human scale mixed reality experience
		- Very strong track record and research in immersive systems
		- 2004 VETS programme R&D engine assembler demo’d at Farnborough Air Show for Euravia Systems
		- ![image.png](assets/image_1707994222111_0.png){:width 600}
	- Multi decade career supporting research and SMEs at UoS
		- VETS ERDF  (2001-2008: Consultancy, training and immersive product for 100’s of SMEs)
		- Cyber foundry & AI foundry  (2019-2022: Detailed R&D for SME’s in immersive/AI/cybersec intersection)
		- One of the Cyber Foundry projects became a book and product.
			- [Convergence and Disruption in Digital Society -- Money, Secure Communication, Digital Objects and Generative AI in Spatial Mixed Reality (arxiv.org)](https://arxiv.org/abs/2207.09460)
				- ![image.png](assets/image_1704196183900_0.png){:height 700, :width 300}

	- ## Octave
		- Combining acoustics and vision in my world class multi-modal lab:
		- Supporting PhDs
		- world firsts -
			- Human eye gaze connection in collaborative mixed reality over distance
		- Brain scanning in proving treatment of fear of heights
		- Reconstruction of humans in real time from cameras
		- Nurse training, immersive education, digital twins
		- Telepresence, including [[Telethrone]]
		- Wavefield synthesis with immersive vision
		- 2002 VETS programme Heaton Park refurbishment visualisation rendered in Octave Multi-Modal lab 2013
		- ![image.png](assets/image_1707994463743_0.png){:width 600}
		-

	- ### Runway ML
		- [twitter link to the render loading below](https://twitter.com/bennash/status/1746188870679400543)
		  {{twitter https://twitter.com/bennash/status/1746188870679400543}}
		- **Basic Animation**: Offers cinematic camera movements and more convincing human motion, but faces issues with brightness and image integrity.
		- **Prompt Creativity & Flexibility**: Less flexible in prompt creativity, occasionally disregarding user prompts.
		- **Human Motion Animation**: Produces high-quality animations but sometimes distorts the original image.
		- **Camera Motion Options**: Provides dynamic camera shots, including zooming, panning, and rotating, but may lead to distortion.
		- **Pros**: Web-based platform ensuring privacy, offers 120 free credits, advanced features, and the option to extend video length.
		- **Cons**: Limited to 16:9 aspect ratio, may not be as flexible as Pika Labs in prompt generation​[](https://www.toolify.ai/ai-news/revolutionary-ai-animation-tools-pika-vs-runway-78636)​​[](https://dragganaitool.uk/pika-labs-vs-runwayml-gen2/)​.

				- ### Microsoft research
					- 65% of Gen Z employees said they don't have the right skills for the AI era

- # Most threatened roles
	- UK dept of education [10-30% can be automated away.](https://assets.publishing.service.gov.uk/media/656856b8cc1ec500138eef49/Gov.UK_Impact_of_AI_on_UK_Jobs_and_Training.pdf#:~:text=It%20has%20been%20estimated%20that%2010-30%25%20of%20jobs,the%20potential%20benefits%20advances%20in%20AI%20will%20bring.)
	- id:: 659a9231-eed0-4503-b1c7-ec6fdc4a3ae4 | #  | Exposure to all AI applications | Exposure to large language modelling | |----|--------------------------------|--------------------------------------| | 1  | Management consultants and business analysts* | Telephone salespersons | | 2  | Financial managers and directors | Solicitors* | | 3  | Charted and certified accountants | Psychologists* | | 4  | Psychologists* | Further education teaching professionals | | 5  | Purchasing managers and directors | Market and street traders and assistants | | 6  | Actuaries, economists and statisticians | Legal professionals n.e.c.* | | 7  | Business and financial project management professionals | Credit controllers* | | 8  | Finance and investment analysts and advisers | Human resource administration occupations* | | 9  | Legal professionals n.e.c.* | Public relations professionals | | 10 | Business and related associate professionals n.e.c. | Management consultant and business analysts* | | 11 | Credit controllers* | Market research interviewers | | 12 | Solicitors* | Local government administrative occupations | | 13 | Civil engineers | Clergy | | 14 | Education advisers and school inspectors* | Higher education teaching professionals | | 15 | Human resources administrative occupations* | Collector salespersons and credit agents | | 16 | Business, research and administrative professionals n.e.c. | Education advisers and school inspectors* | | 17 | Financial accounts managers | Human resource managers and directors | | 18 | Bookkeepers, payroll managers and wages clerks | National government administrative occupations* | | 19 | National government administrative occupations* | Vocational and industrial trainers and instructors | | 20 | Marketing associate professionals | Social and humanities scientists |

				- ### Microsoft research
					- 65% of Gen Z employees said they don't have the right skills for the AI era

	- ## The Art of the Desirable vs. Imposed Futures: Protecting Choice
		- [Helen Wilding](https://www.linkedin.com/in/helen-wilding-griffiths-8885ba45/)'highlights a crucial aspect of the AI revolution often overlooked by the "tech bros exploring the art of the possible": the fact that some people genuinely prefer clearly defined, repetitive roles. It's not for a privileged minority to dictate what constitutes "worthwhile" work and unilaterally reshape the employment landscape, removing options that many find fulfilling. The transition to an AI-driven future must be guided by "[the art of the desirable,](https://tomcheesewright.com/the-art-of-the-probable-the-possible-and-the-desirable)" fostering social consensus and prioritising individual choice, rather than imposing a singular vision of progress.
			- **Protecting choice:** Individuals should have the option to pursue roles that suit their preferences, whether those roles involve repetitive tasks or complex problem-solving. The "worker of one" concept championed by Autor should extend to encompass the diversity of human preferences and working styles.
			- **Investing in human-centred training:** Reskilling programmes should not solely focus on technical AI skills but should also cultivate essential human capabilities like communication, empathy, and critical thinking, which remain crucial even in an AI-driven world. This aligns with the re-evaluation of human capital discussed in our notes.
			- **Fostering social dialogue and consensus:** The future of work must be determined through open discussions involving workers, policymakers, and technologists. The "art of the desirable" requires a democratic approach, prioritising social consensus over top-down dictates from Silicon Valley.

	- ### Human Texture Estimation: Bringing Digital Skin to Life
		- Realistic skin texture is crucial for believable digital humans. This section explores projects and research dedicated to accurately estimating and recreating human skin textures.
		  
		  * [SMPLitex](https://dancasas.github.io/projects/SMPLitex/index.html): A generative model and dataset for estimating 3D human texture from a single image.
		  * [Generating Consistent Characters (Twitter Thread)](https://twitter.com/manuvision/status/1745326572154863816?s=20): A Twitter thread by Manu.Vision discussing methods for generating consistent characters.
		  * [Consistent Characters with Scenario (YouTube Tutorial)](https://www.youtube.com/watch?v=aEnDEraK3I8): A YouTube tutorial on creating consistent characters within a specific scenario.

		- ### Societal Responses
	 - **Enhancing Human Capabilities:** Details how AI has the potential to significantly enhance human intellectual and physical capabilities, leading to new forms of creativity, problem-solving, and productivity.
	 - **Freedom Expansion:** Discusses the potential for AI to expand human freedoms by alleviating burdensome tasks, enhancing decision-making, and creating new opportunities for personal and societal growth.
	 - **Order of Risks:** Discusses the importance of considering the order of AI risks, noting that intermediate stages of AI development may indirectly affect the very institutions needed to address existential risks from superintelligence.
	 - **Evidence of Universality:** Details the evidence for the universality observed in artificial neural networks learning similar circuits to the human brain, suggesting that current methods are sufficient for modeling human cognition.

- #### 4.12.18 A New Social Contract for AI
  Thus, navigating the intersection of AI and global politics necessitates careful consideration. It requires establishing a new social contract for AI---one that respects human rights, promotes equitable economic growth, and protects national security.

- ## Dreamlab
	- I'm associate director, and the Spatial AI Lead for an emerging media innovation lab, supporting human storytelling with immersive and AI tech.
		- creatives,
		- academics,
		- professionals,
		- storytellers,

- ### The Limitations of AI in Understanding Life and Human Experience
	- Santacaterina argues that attempts to mechanise and quantify the intricacies of life through AI are inherently flawed. She emphasises the impossibility of capturing the complexity, adaptability, and perpetual evolution of living systems within the confines of algorithms. Life, she asserts, is an intricate tapestry woven from countless threads, each one contributing to the overall picture in ways that defy simple quantification or reduction.
	- Furthermore, Santacaterina contends that the richness and power of human language cannot be fully grasped by AI models trained on internet data. These models, she argues, operate on a superficial level, lacking the grounding in real-world truth and cultural sensitivity necessary for true comprehension. The nuances of communication, the subtle shades of meaning that emerge from the interplay of words and context, are lost in the translation to binary code.
	- Central to Santacaterina's critique is the notion that human intelligence is multidimensional, encompassing social, emotional, cognitive, and intellectual aspects. This complex interplay of factors, she argues, cannot be accurately replicated by AI systems, which operate based on a narrow set of rules and statistical patterns. The reductionist approach of AI, in her view, fails to capture the essence of what makes us human.

- ## Relevant Links and Resources
	- [Global Witness Reports on Gold Mining](https://www.globalwitness.org/en/campaigns/environmental-activists/dirty-gold/)
	 - Investigative reports revealing the impact of gold mining on environments and communities worldwide.
	- [Human Rights Violations in Mining](https://www.hrw.org/topic/business/mining)

- ## Bots Proliferate
	- Jailbroken foundation models can already solve Capcha human checks, and this will soon be possible with open source models. At this point the internet will possibly explode with bot activity.
		- ![1706810932954.jpeg](assets/1706810932954_1717339896749_0.jpeg){:width 600}
		- {{twitter https://twitter.com/itsandrewgao/status/1786879644651991549}}
	- Bots that persuade bots that persuade bots
		- https://www.linkedin.com/posts/emollick_two-weird-things-that-are-going-to-happen-activity-7180768944067072000-Gmtq?
		- [The majority of traffic from Elon Musk's X may have been fake during the Super Bowl, report suggests | Mashable](https://mashable.com/article/x-twitter-elon-musk-bots-fake-traffic)
	- Russian bots are inflating Instagram influencer follower counts into the tens of millions ([reference](https://www.adweek.com/social-marketing/study-15-million-russian-instagram-influencers-followers-are-bots/)).
	- Ticketmaster says bots snatch up concert tickets before fans get access ([reference](https://www.cnbc.com/2017/05/23/ticketmaster-and-live-nation-face-class-action-lawsuit.html)).
	- [(1) X (twitter.com)](https://twitter.com/lorda26/status/1753451790778225095) ancient spam account posts a generated image description with no image, drawing swarms of admiring text-spam bots which generate imaginary human reactions (read the replies) to an image which doesn’t actually exist
	- Corporations and governments are flooding the internet with bots and AI-generated content to push propaganda and influence behaviour 
	  ([Deep fakes Verge article](https://www.theverge.com/23341528/ai-fake-faces-personalities-bots-misinformation)). ([Fake Ted Cruz site](https://www.tedcruzforhumanpresident.com/)).
	- 'Background tokens' is a term used on the [[latent space]] podcast to describe pre LLM unpolluted data. This legacy data is the last state of human discourse.
	- A fascinating unexpected second order impact of this is that future models may skew more right wing as those sites [welcome the scraping.](https://www.wired.com/story/most-news-sites-block-ai-bots-right-wing-media-welcomes-them/?)
	- [AI and Leviathan: Part III by Samuel Hammond (secondbest.ca)](https://www.secondbest.ca/p/ai-and-leviathan-part-iii)

- #### 4.12.18 A New Social Contract for AI
  Thus, navigating the intersection of AI and global politics necessitates careful consideration. It requires establishing a new social contract for AI---one that respects human rights, promotes equitable economic growth, and protects national security.

- ## Legal Access
	- [Justice John Roberts 2023 end of year report)](https://www.supremecourt.gov/publicinfo/year-end/2023year-endreport.pdf)
		- And now we face the latest technological frontier: artificial intelligence (AI). At its core, AI combines algorithms and enormous data sets to solve problems. Its many forms and applications include the facial recognition we use to unlock our smart phones and the voice recognition we use to direct our smart televisions. Law professors report with both awe and angst that AI apparently can earn Bs on law school assignments and even pass the bar exam. Legal research may soon be unimaginable without it. AI obviously has great potential to dramatically increase access to key information for lawyers and non-lawyers alike. But just as obviously it risks invading privacy interests and dehumanizing the law.
		- Proponents of AI tout its potential to increase access to justice, particularly for litigants with limited resources. Our court system has a monopoly on many forms of relief. If you want a discharge in bankruptcy, for example, you must see a federal judge. For those who cannot afford a lawyer, AI can help. It drives new, highly accessible tools that provide answers to basic questions, including where to find templates and court forms, how to fill them out, and where to bring them for presentation to the judge—all without leaving home. These tools have the welcome potential to smooth out any mismatch between available resources and urgent needs in our court system.
		- But any use of AI requires caution and humility. One of AI's prominent applications made headlines this year for a shortcoming known as "hallucination," which caused the lawyers using the application to submit briefs with citations to non-existent cases. (Always a bad idea.) Some legal scholars have raised concerns about whether entering confidential information into an AI tool might compromise later attempts to invoke legal privileges. In criminal cases, the use of AI in assessing flight risk, recidivism, and other largely discretionary decisions that involve predictions has generated concerns about due process, reliability, and potential bias. At least at present, studies show a persistent public perception of a "human-AI fairness gap," reflecting the view that human adjudications, for all of their flaws, are fairer than whatever the machine spits out.
		- Many professional tennis tournaments, including the US Open, have replaced line judges with optical technology to determine whether 130 mile per hour serves are in or out. These decisions involve precision to the millimeter. And there is no discretion; the ball either did or did not hit the line. By contrast, legal determinations often involve gray areas that still require application of human judgment.
		- Machines cannot fully replace key actors in court. Judges, for example, measure the sincerity of a defendant's allocution at sentencing. Nuance matters: Much can turn on a shaking hand, a quivering voice, a change of inflection, a bead of sweat, a moment's hesitation, a fleeting break in eye contact. And most people still trust humans more than machines to perceive and draw the right inferences from these clues.
		- Appellate judges, too, perform quintessentially human functions. Many appellate decisions turn on whether a lower court has abused its discretion, a standard that by its nature involves fact-specific gray areas. Others focus on open questions about how the law should develop in new areas. AI is based largely on existing information, which can inform but not make such decisions.
		- Rule 1 of the Federal Rules of Civil Procedure directs the parties and the courts to seek the "just, speedy, and inexpensive" resolution of cases. Many AI applications indisputably assist the judicial system in advancing those goals. As AI evolves, courts will need to consider its proper uses in litigation. In the federal courts, several Judicial Conference Committees—including those dealing with court administration and case management, cybersecurity, and the rules of practice and procedure, to name just a few—will be involved in that effort. I am glad that they will be.
		- I predict that human judges will be around for a while. But with equal confidence I predict that judicial work—particularly at the trial level—will be significantly affected by AI. Those changes will involve not only how judges go about doing their job, but also how they understand the role that AI plays in the cases that come before them.

- ### The Limitations of AI in Understanding Life and Human Experience
	- Santacaterina argues that attempts to mechanise and quantify the intricacies of life through AI are inherently flawed. She emphasises the impossibility of capturing the complexity, adaptability, and perpetual evolution of living systems within the confines of algorithms. Life, she asserts, is an intricate tapestry woven from countless threads, each one contributing to the overall picture in ways that defy simple quantification or reduction.
	- Furthermore, Santacaterina contends that the richness and power of human language cannot be fully grasped by AI models trained on internet data. These models, she argues, operate on a superficial level, lacking the grounding in real-world truth and cultural sensitivity necessary for true comprehension. The nuances of communication, the subtle shades of meaning that emerge from the interplay of words and context, are lost in the translation to binary code.
	- Central to Santacaterina's critique is the notion that human intelligence is multidimensional, encompassing social, emotional, cognitive, and intellectual aspects. This complex interplay of factors, she argues, cannot be accurately replicated by AI systems, which operate based on a narrow set of rules and statistical patterns. The reductionist approach of AI, in her view, fails to capture the essence of what makes us human.

- ## Relevant Links and Resources
	- [Global Witness Reports on Gold Mining](https://www.globalwitness.org/en/campaigns/environmental-activists/dirty-gold/)
	 - Investigative reports revealing the impact of gold mining on environments and communities worldwide.
	- [Human Rights Violations in Mining](https://www.hrw.org/topic/business/mining)
	 - Human Rights Watch documentation of the widespread abuses in gold mining sectors.

- ## Rise of Bots Aligns With Dead Internet Theory
	- Originally a conspiracy theory, the dead internet theory suggests online activity is increasingly driven by bots, AI and algorithms rather than genuine human interactions. [Wikipedia page on dead internet theory](https://en.wikipedia.org/wiki/Dead_Internet_theory)
	- Corporations and governments are flooding the internet with bots and AI-generated content to push propaganda and influence behaviour 
	  ([Deep fakes Verge article](https://www.theverge.com/23341528/ai-fake-faces-personalities-bots-misinformation)). ([Fake Ted Cruz site](https://www.tedcruzforhumanpresident.com/)).

- ## **Types of Agentic Systems in Call Centers**
  
  Agentic systems can be categorized based on their capabilities and outcomes. One framework for classifying AI agents is based on levels of autonomy, similar to the levels used for self-driving cars 10. A Level 5 agentic system would be capable of completing knowledge work tasks fully autonomously with minimal human intervention 10.
  
  Some examples of agentic systems used in call centers include:
  
  * **Conversational assistants:** These AI agents can understand natural language and engage in conversations with customers, providing support and resolving simple issues11.  
  * **AI supervisors:** These agents can monitor interactions, analyze customer sentiment, and escalate issues to human supervisors when necessary7.  
  * **Smart transfer bots:** These agents optimize call routing by analyzing the context of an interaction and directing the customer to the most appropriate resource12.  
  * **Agent virtual assistants:** These agents provide human agents with real-time information and guidance during customer interactions12.  
  * **Fraud monitoring systems:** In industries like banking, agentic AI can be used to continuously monitor account activity and flag potentially fraudulent transactions in real-time11.  
  * **Zoom Virtual Agent and Zoom Contact Centre:** These solutions exemplify the power of agentic AI to transform customer service by enhancing self-service capabilities, personalizing interactions, enabling proactive support, and unifying communication across multiple channels7.
  
  Real-world examples demonstrate the versatility of agentic AI in addressing various call center needs. For instance, Bud Financial, a leader in banking technology, utilizes agentic AI to automate customer experiences and provide personalized financial guidance 13. Another example is Alfred, an AI agent integrated into Slack, which provides employees with a straightforward way to resolve common IT issues without human intervention 13.

- #### 4.12.18 A New Social Contract for AI
  Thus, navigating the intersection of AI and global politics necessitates careful consideration. It requires establishing a new social contract for AI---one that respects human rights, promotes equitable economic growth, and protects national security.

- ## Legal Access
	- [Justice John Roberts 2023 end of year report)](https://www.supremecourt.gov/publicinfo/year-end/2023year-endreport.pdf)
		- And now we face the latest technological frontier: artificial intelligence (AI). At its core, AI combines algorithms and enormous data sets to solve problems. Its many forms and applications include the facial recognition we use to unlock our smart phones and the voice recognition we use to direct our smart televisions. Law professors report with both awe and angst that AI apparently can earn Bs on law school assignments and even pass the bar exam. Legal research may soon be unimaginable without it. AI obviously has great potential to dramatically increase access to key information for lawyers and non-lawyers alike. But just as obviously it risks invading privacy interests and dehumanizing the law.
		- Proponents of AI tout its potential to increase access to justice, particularly for litigants with limited resources. Our court system has a monopoly on many forms of relief. If you want a discharge in bankruptcy, for example, you must see a federal judge. For those who cannot afford a lawyer, AI can help. It drives new, highly accessible tools that provide answers to basic questions, including where to find templates and court forms, how to fill them out, and where to bring them for presentation to the judge—all without leaving home. These tools have the welcome potential to smooth out any mismatch between available resources and urgent needs in our court system.
		- But any use of AI requires caution and humility. One of AI's prominent applications made headlines this year for a shortcoming known as "hallucination," which caused the lawyers using the application to submit briefs with citations to non-existent cases. (Always a bad idea.) Some legal scholars have raised concerns about whether entering confidential information into an AI tool might compromise later attempts to invoke legal privileges. In criminal cases, the use of AI in assessing flight risk, recidivism, and other largely discretionary decisions that involve predictions has generated concerns about due process, reliability, and potential bias. At least at present, studies show a persistent public perception of a "human-AI fairness gap," reflecting the view that human adjudications, for all of their flaws, are fairer than whatever the machine spits out.
		- Many professional tennis tournaments, including the US Open, have replaced line judges with optical technology to determine whether 130 mile per hour serves are in or out. These decisions involve precision to the millimeter. And there is no discretion; the ball either did or did not hit the line. By contrast, legal determinations often involve gray areas that still require application of human judgment.
		- Machines cannot fully replace key actors in court. Judges, for example, measure the sincerity of a defendant's allocution at sentencing. Nuance matters: Much can turn on a shaking hand, a quivering voice, a change of inflection, a bead of sweat, a moment's hesitation, a fleeting break in eye contact. And most people still trust humans more than machines to perceive and draw the right inferences from these clues.
		- Appellate judges, too, perform quintessentially human functions. Many appellate decisions turn on whether a lower court has abused its discretion, a standard that by its nature involves fact-specific gray areas. Others focus on open questions about how the law should develop in new areas. AI is based largely on existing information, which can inform but not make such decisions.
		- Rule 1 of the Federal Rules of Civil Procedure directs the parties and the courts to seek the "just, speedy, and inexpensive" resolution of cases. Many AI applications indisputably assist the judicial system in advancing those goals. As AI evolves, courts will need to consider its proper uses in litigation. In the federal courts, several Judicial Conference Committees—including those dealing with court administration and case management, cybersecurity, and the rules of practice and procedure, to name just a few—will be involved in that effort. I am glad that they will be.
		- I predict that human judges will be around for a while. But with equal confidence I predict that judicial work—particularly at the trial level—will be significantly affected by AI. Those changes will involve not only how judges go about doing their job, but also how they understand the role that AI plays in the cases that come before them.

- ### The Limitations of AI in Understanding Life and Human Experience
	- Santacaterina argues that attempts to mechanise and quantify the intricacies of life through AI are inherently flawed. She emphasises the impossibility of capturing the complexity, adaptability, and perpetual evolution of living systems within the confines of algorithms. Life, she asserts, is an intricate tapestry woven from countless threads, each one contributing to the overall picture in ways that defy simple quantification or reduction.
	- Furthermore, Santacaterina contends that the richness and power of human language cannot be fully grasped by AI models trained on internet data. These models, she argues, operate on a superficial level, lacking the grounding in real-world truth and cultural sensitivity necessary for true comprehension. The nuances of communication, the subtle shades of meaning that emerge from the interplay of words and context, are lost in the translation to binary code.
	- Central to Santacaterina's critique is the notion that human intelligence is multidimensional, encompassing social, emotional, cognitive, and intellectual aspects. This complex interplay of factors, she argues, cannot be accurately replicated by AI systems, which operate based on a narrow set of rules and statistical patterns. The reductionist approach of AI, in her view, fails to capture the essence of what makes us human.

- ## Relevant Links and Resources
	- [Global Witness Reports on Gold Mining](https://www.globalwitness.org/en/campaigns/environmental-activists/dirty-gold/)
	 - Investigative reports revealing the impact of gold mining on environments and communities worldwide.
	- [Human Rights Violations in Mining](https://www.hrw.org/topic/business/mining)
	 - Human Rights Watch documentation of the widespread abuses in gold mining sectors.

- ## Rise of Bots Aligns With Dead Internet Theory
	- Originally a conspiracy theory, the dead internet theory suggests online activity is increasingly driven by bots, AI and algorithms rather than genuine human interactions. [Wikipedia page on dead internet theory](https://en.wikipedia.org/wiki/Dead_Internet_theory)
	- Corporations and governments are flooding the internet with bots and AI-generated content to push propaganda and influence behaviour 
	  ([Deep fakes Verge article](https://www.theverge.com/23341528/ai-fake-faces-personalities-bots-misinformation)). ([Fake Ted Cruz site](https://www.tedcruzforhumanpresident.com/)).

- ## **Types of Agentic Systems in Call Centers**
  
  Agentic systems can be categorized based on their capabilities and outcomes. One framework for classifying AI agents is based on levels of autonomy, similar to the levels used for self-driving cars 10. A Level 5 agentic system would be capable of completing knowledge work tasks fully autonomously with minimal human intervention 10.
  
  Some examples of agentic systems used in call centers include:
  
  * **Conversational assistants:** These AI agents can understand natural language and engage in conversations with customers, providing support and resolving simple issues11.  
  * **AI supervisors:** These agents can monitor interactions, analyze customer sentiment, and escalate issues to human supervisors when necessary7.  
  * **Smart transfer bots:** These agents optimize call routing by analyzing the context of an interaction and directing the customer to the most appropriate resource12.  
  * **Agent virtual assistants:** These agents provide human agents with real-time information and guidance during customer interactions12.  
  * **Fraud monitoring systems:** In industries like banking, agentic AI can be used to continuously monitor account activity and flag potentially fraudulent transactions in real-time11.  
  * **Zoom Virtual Agent and Zoom Contact Centre:** These solutions exemplify the power of agentic AI to transform customer service by enhancing self-service capabilities, personalizing interactions, enabling proactive support, and unifying communication across multiple channels7.
  
  Real-world examples demonstrate the versatility of agentic AI in addressing various call center needs. For instance, Bud Financial, a leader in banking technology, utilizes agentic AI to automate customer experiences and provide personalized financial guidance 13. Another example is Alfred, an AI agent integrated into Slack, which provides employees with a straightforward way to resolve common IT issues without human intervention 13.

## Source

- **Primary**: OECD AI Principles 2024 (Principle 1.2 component)
- **Related**: Universal Declaration of Human Rights (UDHR), EU Charter of Fundamental Rights, International Covenant on Civil and Political Rights

## Context

Human rights form a foundational component of the OECD's human-centred values principle, establishing that AI development and deployment must occur within the framework of internationally recognised fundamental rights rather than technological or economic imperatives alone.

## Key Rights Relevant to AI

### Civil and Political Rights
- **Right to privacy**: Protection of personal data and private life
- **Freedom of expression**: Unrestricted communication and information access
- **Freedom of assembly**: Collective action and organisation
- **Right to fair trial**: Due process in AI-influenced legal proceedings
- **Non-discrimination**: Equal treatment regardless of protected characteristics

### Economic and Social Rights
- **Right to work**: Employment free from arbitrary AI-based exclusion
- **Right to education**: Equitable access to educational opportunities
- **Right to health**: Healthcare accessibility without algorithmic discrimination
- **Right to social security**: Fair access to essential services

### Emerging Rights
- **Right to human determination**: Meaningful human involvement in consequential decisions
- **Right to explanation**: Understanding AI-influenced outcomes
- **Right to contest**: Challenging automated decisions
- **Right to digital dignity**: Respect for personhood in digital contexts

## Relationships

- **Parent Concept**: Human-Centred Values (AI-0159)
- **Related Terms**:
  - Democratic Values (AI-0167)
  - Rule of Law (AI-0168)
  - Fairness (OECD) (AI-0160)
  - Human-Centred Values (AI-0159)
- **Operationalised Through**: Fundamental Rights Impact Assessment (EU AI Act)

## Implementation Context

Human rights considerations particularly critical for:
- High-risk AI systems affecting fundamental rights (EU AI Act Annex III)
- Biometric identification and categorisation systems
- AI in law enforcement, justice and migration contexts
- Employment and educational AI applications
- Healthcare and social services AI deployment

## EU AI Act Integration

Human rights protection central to:
- **Prohibited practices** (Article 5): Preventing manipulation, exploitation, social scoring
- **High-risk classification**: Systems affecting fundamental rights receive enhanced scrutiny
- **Fundamental Rights Impact Assessment** (Article 27): Mandatory for public authority deployers
- **Transparency obligations**: Enabling rights exercise and contestation

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
## 2024 Revision Emphasis

OECD 2024 revision strengthened human rights by:
- Explicit enumeration as core component of Principle 2

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

- Human-Centred Values (AI-0159)
- Democratic Values (AI-0167)
- Fairness (OECD) (AI-0160)
- Fundamental Rights Impact Assessment (EU AI Act)

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
*Aligned with UDHR, ICCPR, EU Charter and OECD AI Principles 2024*
	-
	- ### Original Content
	  collapsed:: true
		- ```
# Human Rights
		  
		  **Term ID**: AI-0166
		  **Category**: OECD Supporting Principle
		  **Status**: Essential
		  **Version**: 1.0
		  **Last Updated**: 2025-10-27
		  
		  ## Definition
		  
		  Fundamental rights and freedoms inherent to all human beings as recognised in international instruments including the Universal Declaration of Human Rights, which AI systems must respect and protect throughout their lifecycle.
		  
		  ## Source
		  
		  - **Primary**: OECD AI Principles 2024 (Principle 1.2 component)
		  - **Related**: Universal Declaration of Human Rights (UDHR), EU Charter of Fundamental Rights, International Covenant on Civil and Political Rights
		  
		  ## Context
		  
		  Human rights form a foundational component of the OECD's human-centred values principle, establishing that AI development and deployment must occur within the framework of internationally recognised fundamental rights rather than technological or economic imperatives alone.
		  
		  ## Key Rights Relevant to AI
		  
		  ### Civil and Political Rights
		  - **Right to privacy**: Protection of personal data and private life
		  - **Freedom of expression**: Unrestricted communication and information access
		  - **Freedom of assembly**: Collective action and organisation
		  - **Right to fair trial**: Due process in AI-influenced legal proceedings
		  - **Non-discrimination**: Equal treatment regardless of protected characteristics
		  
		  ### Economic and Social Rights
		  - **Right to work**: Employment free from arbitrary AI-based exclusion
		  - **Right to education**: Equitable access to educational opportunities
		  - **Right to health**: Healthcare accessibility without algorithmic discrimination
		  - **Right to social security**: Fair access to essential services
		  
		  ### Emerging Rights
		  - **Right to human determination**: Meaningful human involvement in consequential decisions
		  - **Right to explanation**: Understanding AI-influenced outcomes
		  - **Right to contest**: Challenging automated decisions
		  - **Right to digital dignity**: Respect for personhood in digital contexts
		  
		  ## Relationships
		  
		  - **Parent Concept**: Human-Centred Values (AI-0159)
		  - **Related Terms**:
		    - Democratic Values (AI-0167)
		    - Rule of Law (AI-0168)
		    - Fairness (OECD) (AI-0160)
		    - Human-Centred Values (AI-0159)
		  - **Operationalised Through**: Fundamental Rights Impact Assessment (EU AI Act)
		  
		  ## Implementation Context
		  
		  Human rights considerations particularly critical for:
		  - High-risk AI systems affecting fundamental rights (EU AI Act Annex III)
		  - Biometric identification and categorisation systems
		  - AI in law enforcement, justice and migration contexts
		  - Employment and educational AI applications
		  - Healthcare and social services AI deployment
		  
		  ## EU AI Act Integration
		  
		  Human rights protection central to:
		  - **Prohibited practices** (Article 5): Preventing manipulation, exploitation, social scoring
		  - **High-risk classification**: Systems affecting fundamental rights receive enhanced scrutiny
		  - **Fundamental Rights Impact Assessment** (Article 27): Mandatory for public authority deployers
		  - **Transparency obligations**: Enabling rights exercise and contestation
		  
		  ## Rights-Based Impact Assessment
		  
		  Systematic evaluation of:
		  1. **Affected rights**: Which fundamental rights AI system may impact
		  2. **Affected persons**: Individuals and groups whose rights at stake
		  3. **Nature of impact**: Positive, negative, direct, indirect effects
		  4. **Severity**: Magnitude and reversibility of rights impacts
		  5. **Mitigation**: Measures to prevent or minimise rights infringements
		  6. **Safeguards**: Procedural protections ensuring rights respect
		  
		  ## Challenges
		  
		  - **Balancing**: Managing tensions between competing rights (privacy vs security)
		  - **Context sensitivity**: Rights frameworks varying across jurisdictions
		  - **Technical translation**: Implementing abstract rights in technical systems
		  - **Enforcement**: Ensuring practical redress for rights violations
		  - **Emerging issues**: Addressing AI-specific rights challenges not contemplated by historical frameworks
		  
		  ## 2024 Revision Emphasis
		  
		  OECD 2024 revision strengthened human rights by:
		  - Explicit enumeration as core component of Principle 2
		  - Connection to international human rights instruments
		  - Integration with fairness, democracy and rule of law
		  - Emphasis on human agency and determination
		  
		  ## See Also
		  
		  - Human-Centred Values (AI-0159)
		  - Democratic Values (AI-0167)
		  - Fairness (OECD) (AI-0160)
		  - Fundamental Rights Impact Assessment (EU AI Act)
		  
		  ---
		  
		  *Part of AI Grounded Ontology - OECD AI Principles Framework*
		  *Aligned with UDHR, ICCPR, EU Charter and OECD AI Principles 2024*
		  
		  ```

*Aligned with UDHR, ICCPR, EU Charter, OECD AI Principles 2024, and Council of Europe AI Treaty*
*Last Updated: 2025-11-13*
*Quality Score: 0.95 (Improved from 0.50)*

- maturity:: production
- owl:class:: mv:HumanRights
- owl:role:: Concept
- belongsToDomain:: [[MetaverseDomain]]
- revision-date:: 2025-11-13
- processing-agent:: Agent-23
- file-number:: 23-of-283
