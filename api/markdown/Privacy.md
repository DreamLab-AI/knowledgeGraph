- ### OntologyBlock
  id:: privacy-ontology
  collapsed:: true
	- ontology:: true
	- term-id:: AI-0072
	- preferred-term:: Privacy
	- source-domain:: mv
	- status:: draft
- definition:: The protection of personal information and individual autonomy in AI systems, encompassing data minimization, purpose limitation, transparency, and individual control over how personal data is collected, processed, stored, and shared throughout the AI lifecycle.


## OWL Formal Semantics

```clojure
;; OWL Functional Syntax

(Declaration (Class :Privacy))

;; Annotations
(AnnotationAssertion rdfs:label :Privacy "Privacy"@en)
(AnnotationAssertion rdfs:comment :Privacy "The protection of personal information and individual autonomy in AI systems, encompassing data minimization, purpose limitation, transparency, and individual control over how personal data is collected, processed, stored, and shared throughout the AI lifecycle."@en)

;; Data Properties
(AnnotationAssertion dcterms:identifier :Privacy "AI-0072"^^xsd:string)
(DataPropertyAssertion :isAITechnology :Privacy "true"^^xsd:boolean)
```

## Formal Specification

```yaml
term: Privacy
definition: "Protection of personal information and individual autonomy in AI systems"
domain: AI Ethics and Privacy
type: Quality Attribute
principles:
  - data_minimization
  - purpose_limitation
  - transparency
  - individual_control
  - security
  - accountability
techniques:
  - anonymization
  - differential_privacy
  - federated_learning
  - homomorphic_encryption
threats: [re_identification, inference_attacks, linkage_attacks]
```

## Authoritative References

### Primary Sources

1. **GDPR** (Regulation 2016/679), General Data Protection Regulation
   - Comprehensive privacy framework
   - Articles 5 (Principles), 6 (Lawfulness), 22 (Automated decision-making)
   - Source: European Parliament and Council

2. **NIST AI Risk Management Framework (AI RMF 1.0)**, January 2023
   - Section 2.2: "Privacy-Enhanced"
   - "AI systems protect privacy throughout their lifecycle"
   - Source: National Institute of Standards and Technology

3. **ISO/IEC 27701:2019** - Privacy information management
   - Extension of ISO/IEC 27001 for privacy
   - Applicable to AI systems processing personal data
   - Source: ISO/IEC JTC 1/SC 27

### Supporting Standards

4. **ISO/IEC 29100:2011** - Privacy framework
   - 11 privacy principles
   - Foundation for privacy engineering

5. **EU AI Act** (Regulation 2024/1689), June 2024
   - Article 10: "Data and data governance" (privacy aspects)
   - Recital 60: Privacy and data protection compliance

## Key Characteristics

### Privacy Principles (ISO/IEC 29100)

#### 1. Consent

**Definition**: Informed, freely given, specific consent for data processing

**AI Context**:
- Consent for data collection and training
- Understanding of AI processing
- Withdrawal of consent mechanisms

**Example**: User opts in to facial recognition with full understanding

#### 2. Purpose Limitation

**Definition**: Data collected for specified, explicit, legitimate purposes only

**AI Context**:
- Training data used only for stated purpose
- No function creep
- Purpose documented and communicated

**Example**: Medical data collected for diagnosis not used for insurance

#### 3. Data Minimization

**Definition**: Collect only data necessary for purpose

**AI Context**:
- Feature selection that respects privacy
- Avoid collecting "just in case" data
- Minimal retention periods

**Example**: Credit scoring using only relevant financial data, not full browsing history

#### 4. Use Limitation

**Definition**: Data used only for specified purposes

**AI Context**:
- Model trained for stated purpose only
- No secondary uses without consent
- Purpose-bound data use

#### 5. Individual Participation

**Definition**: Individuals have rights over their data

**GDPR Rights**:
- Right to access (Article 15)
- Right to rectification (Article 16)
- Right to erasure/"right to be forgotten" (Article 17)
- Right to data portability (Article 20)
- Right to object (Article 21)
- Rights related to automated decision-making (Article 22)

#### 6. Accountability

**Definition**: Demonstrate compliance with privacy principles

**AI Context**:
- Privacy impact assessments
- Documentation of data processing
- Privacy by design and default

#### 7. Security Safeguards

**Definition**: Appropriate technical and organizational measures

**AI Context**:
- Encryption of training data
- Secure model deployment
- Access controls
- See Security (AI-0071)

## Privacy Risks in AI

### Data Collection Risks

1. **Overcollection**
   - Collecting more data than necessary
   - Example: Smart speaker always listening

2. **Secondary Use**
   - Using data for purposes beyond original consent
   - Example: Training data repurposed for advertising

3. **Surveillance**
   - Pervasive monitoring
   - Example: Facial recognition in public spaces

### Data Processing Risks

4. **Re-identification**
   - Anonymized data linked back to individuals
   - Example: Netflix Prize dataset de-anonymization

5. **Inference Attacks**
   - Deriving sensitive information not explicitly provided
   - Example: Inferring health conditions from purchase history

6. **Model Inversion** (AI-0087)
   - Reconstructing training data from model
   - Example: Extracting faces from facial recognition model

7. **Membership Inference** (AI-0088)
   - Determining if individual's data in training set
   - Example: Was this patient in medical training data?

### Data Sharing Risks

8. **Unauthorized Disclosure**
   - Sharing data without authorization
   - Example: Data broker selling personal information

9. **Cross-Border Transfers**
   - Data transferred to jurisdictions with weaker protections
   - GDPR Chapter V requirements

## Privacy-Preserving Techniques

### Anonymization and De-identification

1. **K-Anonymity**
   - Each record indistinguishable from k-1 others
   - Protects against re-identification
   - **Limitation**: Vulnerable to homogeneity and background knowledge attacks

2. **L-Diversity**
   - Extends k-anonymity
   - Ensures diversity of sensitive attributes
   - **Limitation**: May not prevent attribute disclosure

3. **T-Closeness**
   - Distribution of sensitive attribute close to overall distribution
   - Stronger than l-diversity

### Differential Privacy

**Definition**: Formal mathematical guarantee that individual's data has negligible impact on query results

**Mechanism**:
```
DP-Query(database, query) = TrueAnswer(query) + Noise
```

**ε-Differential Privacy**:
For neighboring datasets D and D' differing by one record:
```
P(M(D) ∈ S) ≤ e^ε × P(M(D') ∈ S)
```

**Properties**:
- Composability: Privacy budgets combine
- Post-processing immunity: Cannot reverse DP
- Group privacy: Protects groups

**AI Applications**:
- Differentially private SGD (DP-SGD)
- Private model training
- Noisy aggregation in federated learning

**Example**:
```python
def dp_sgd(data, model, epsilon, delta):
    # Clip gradients
    clipped_grads = clip_gradients(compute_grads(data, model))
    # Add calibrated noise
    noise = gaussian_noise(sensitivity / epsilon)
    noisy_grads = clipped_grads + noise
    # Update model
    model.update(noisy_grads)
```

### Federated Learning

**Definition**: Train models on decentralized data without centralizing raw data

**Process**:
1. Server sends model to clients
2. Clients train on local data
3. Clients send model updates (not data) to server
4. Server aggregates updates

**Privacy Benefits**:
- Raw data stays on device
- Only model updates transmitted
- Can combine with differential privacy

**Challenges**:
- Model inversion attacks still possible
- Communication overhead
- Heterogeneous data distributions

**Applications**: Mobile keyboard prediction, healthcare collaborations

### Homomorphic Encryption

**Definition**: Computation on encrypted data without decryption

**Types**:
- **Partially Homomorphic**: One operation (addition or multiplication)
- **Somewhat Homomorphic**: Limited operations
- **Fully Homomorphic**: Arbitrary computations

**AI Applications**:
- Encrypted model inference
- Privacy-preserving predictions
- Secure multi-party computation

**Limitation**: Computationally expensive

### Secure Multi-Party Computation (MPC)

**Definition**: Multiple parties jointly compute function without revealing inputs

**Applications**:
- Collaborative model training
- Private data pooling
- Secure aggregation

**Techniques**:
- Secret sharing
- Garbled circuits
- Oblivious transfer

## Relationships

- **Component Of**: AI Trustworthiness (AI-0061)
- **Related To**: Data Protection (AI-0073), Security (AI-0071), Transparency (AI-0062)
- **Threatened By**: Model Inversion (AI-0087), Membership Inference (AI-0088)
- **Protected By**: Differential Privacy, Federated Learning, Encryption
- **Required By**: GDPR, Data Protection Laws

## Privacy by Design and Default

### Privacy by Design Principles (Cavoukian)

1. **Proactive not Reactive**
   - Anticipate and prevent privacy issues
   - Before problems occur

2. **Privacy as Default Setting**
   - No action required from individual
   - Automatic privacy protection

3. **Privacy Embedded into Design**
   - Integral to system, not add-on
   - Full functionality

4. **Full Functionality (Positive-Sum)**
   - Not zero-sum trade-off
   - Privacy and functionality

5. **End-to-End Security**
   - Lifecycle protection
   - Cradle to grave

6. **Visibility and Transparency**
   - Open and transparent
   - Verifiable

7. **Respect for User Privacy**
   - User-centric
   - Strong privacy defaults

### Implementation in AI

**Data Collection**:
- Collect minimum necessary data
- Clear purpose specification
- Explicit consent mechanisms

**Model Training**:
- Differential privacy
- Federated learning
- Access controls

**Deployment**:
- Encrypted inference
- Minimal data logging
- Right to explanation

**Monitoring**:
- Privacy metrics tracking
- Anomaly detection (privacy breaches)
- Audit trails

## Domain-Specific Privacy

### Healthcare AI

**Requirements**:
- HIPAA (US), GDPR (EU)
- Patient confidentiality
- Sensitive health information

**Techniques**:
- Federated learning for multi-institutional research
- Differential privacy for aggregate statistics
- De-identification of medical images

**Example**: COVID-19 contact tracing with privacy preservation

### Financial AI

**Requirements**:
- GLBA (US), GDPR (EU)
- Financial privacy
- Anti-money laundering vs. privacy balance

**Techniques**:
- Encrypted transaction analysis
- Privacy-preserving credit scoring
- Secure multi-party computation for fraud detection

### Smart Cities

**Requirements**:
- Public surveillance concerns
- Location privacy
- GDPR compliance

**Techniques**:
- Edge computing (local processing)
- Anonymized aggregate data
- Opt-in mechanisms

**Example**: Traffic optimization without individual tracking

## Privacy Metrics and Assessment

### Privacy Risk Assessment

1. **Data Protection Impact Assessment (DPIA)**
   - GDPR Article 35 requirement for high-risk processing
   - Systematic assessment of privacy risks
   - Mitigation measures

2. **Privacy Threshold Assessment (PTA)**
   - Determine if privacy compliance review needed
   - US federal government requirement

### Privacy Metrics

1. **K-Anonymity Level**
   - Degree of anonymization

2. **Privacy Budget (ε)**
   - Differential privacy parameter
   - Lower ε = stronger privacy

3. **Re-identification Risk**
   - Probability of re-identifying individuals
   - Measured through attack simulations

4. **Data Minimization Ratio**
   - Data collected / Data necessary
   - Target: 1.0 (collect only what's needed)

## Challenges and Trade-offs

### Utility-Privacy Trade-off

**Challenge**: Privacy-preserving techniques often reduce model accuracy

**Example**: Differential privacy adds noise, reducing precision

**Approach**:
- Find acceptable balance
- Risk-based privacy budgets
- Adaptive privacy mechanisms

### Privacy vs. Transparency

**Tension**: Explaining AI decisions may reveal private training data

**Example**: Showing similar cases may expose individuals

**Approach**:
- Aggregate explanations
- Synthetic examples
- Careful information disclosure

### Privacy vs. Personalization

**Tension**: Personalized services require user data

**Approach**:
- On-device personalization
- Federated learning
- Minimal data collection

## Regulatory Requirements

### GDPR

**Key Provisions for AI**:
- **Article 5**: Lawfulness, fairness, transparency, purpose limitation, data minimization
- **Article 22**: Right not to be subject to solely automated decision-making
- **Article 25**: Data protection by design and by default
- **Article 35**: Data Protection Impact Assessment (DPIA) for high-risk processing

**Penalties**: Up to 4% of global annual turnover or €20M, whichever higher

### CCPA/CPRA (California)

**Rights**:
- Right to know what data is collected
- Right to deletion
- Right to opt-out of sale
- Right to correct inaccurate data (CPRA)
- Right to limit use of sensitive personal information (CPRA)

### Other Jurisdictions

**LGPD** (Brazil), **POPIA** (South Africa), **PIPL** (China)
- Similar frameworks to GDPR
- Variations in scope and enforcement

## Best Practices

1. **Conduct Privacy Impact Assessments**
   - Before AI system development
   - Identify risks early
   - Implement mitigations

2. **Minimize Data Collection**
   - Collect only what's necessary
   - Clear retention policies
   - Automated deletion

3. **Use Privacy-Preserving Techniques**
   - Differential privacy for sensitive data
   - Federated learning where appropriate
   - Encryption for data at rest and in transit

4. **Provide Transparency and Control**
   - Clear privacy notices
   - Meaningful consent mechanisms
   - Easy-to-use privacy controls

5. **Regular Privacy Audits**
   - Assess compliance
   - Identify vulnerabilities
   - Update practices

6. **Privacy Training**
   - Educate developers and operators
   - Privacy-aware culture
   - Ethical data handling

7. **Privacy Governance**
   - Data Protection Officer (DPO) where required
   - Privacy policies and procedures
   - Incident response plans

## Research Frontiers

1. **Practical Fully Homomorphic Encryption**
   - Reduce computational overhead
   - Enable real-time encrypted inference

2. **Federated Learning at Scale**
   - Efficient aggregation
   - Privacy-preserving and communication-efficient

3. **Privacy-Utility Optimization**
   - Pareto-optimal trade-offs
   - Automated privacy budget allocation

4. **Verifiable Privacy**
   - Cryptographic proof of privacy guarantees
   - Blockchain-based privacy attestation

## Related Terms

- **AI Trustworthiness** (AI-0061)
- **Data Protection** (AI-0073)
- **Security** (AI-0071)
- **Model Inversion** (AI-0087)
- **Membership Inference** (AI-0088)
- **Differential Privacy**
- **Federated Learning**

## Version History

- **1.0** (2025-10-27): Initial definition based on GDPR, NIST AI RMF, and ISO/IEC 27701:2019

---

*This definition emphasizes privacy as a fundamental right and design principle, requiring technical, organizational, and legal measures throughout the AI lifecycle.*
	- maturity:: draft
	- owl:class:: mv:Privacy
	- owl:role:: Concept
	- belongsToDomain:: [[MetaverseDomain]]
- ## About Privacy
	- The protection of personal information and individual autonomy in AI systems, encompassing data minimization, purpose limitation, transparency, and individual control over how personal data is collected, processed, stored, and shared throughout the AI lifecycle.

- # What to use and when
	- **Start with Simple API Calls:**
		- Initially, utilize third-party APIs that serve your needs without complicating your system. This is the most straightforward and cost-effective solution.
		- If third-party APIs meet your requirements in terms of functionality, privacy, cost, and latency, there's no need to progress to more complex solutions.
	- **Deploy Pre-trained Models:**
		- If API solutions are insufficient due to privacy, cost, or latency issues, consider deploying a generic, pre-trained model (like MixL or LLaMA) behind your own API.
		- This step involves a bit more complexity and control over the data but remains relatively simple.
	- **Curate Context and Improve Prompts:**
		- Enhance the output quality by curating in-context examples and optimizing prompts. This step aims to extract better performance from the existing deployed model with minimal changes.
	- **Integrate Retrieval Systems:**
		- If further improvement is needed, integrate a retrieval system to complement the model's responses, based on the available latency and the complexity it introduces to your system.
	- **Fine-tune on Specific Data:**
		- When adjustments and retrieval integrations aren't sufficient, proceed to fine-tune the model on a targeted dataset. This step tailors the model more closely to your specific requirements.
	- **Swap for a Larger Model or Pre-train Your Own:**
		- If fine-tuning does not achieve the desired outcomes, consider swapping in a larger pre-trained model or pre-training your own model for more significant customization and improvement.
		- This can involve domain adaptation through further pre-training on a relevant corpus, followed by fine-tuning.
	- **Iterate and Add Complexity as Necessary:**
		- Continue iterating, adding layers of complexity only as needed. This approach ensures that you only invest in higher compute and development costs when there's a clear benefit.
	- **Simplify and Streamline for Deployment:**
		- Throughout this process, aim to simplify and streamline solutions for deployment. Consider the target audience and operationalize the solution in a way that makes it accessible and practical for them.
		-

		- ## Privacy and Data Protection Concerns

			- ### Pervasive Surveillance
				- The deployment of advanced AI systems for surveillance at the 2024 Olympics has raised several privacy concerns:
				- **Continuous Monitoring:** These AI systems enable continuous, round-the-clock monitoring of individuals, capturing detailed data on their movements and behaviours. This level of surveillance is unprecedented and poses significant risks to personal privacy.
				- **Behavioural Analysis:** AI can track and analyse patterns in individuals' movements and behaviours, potentially revealing sensitive information about their personal lives. This capability raises ethical questions about the extent of surveillance that is acceptable in a democratic society.

	- ### Ensuring Safeguarding and Privacy Compliance:
		- Protecting user privacy and ensuring safeguarding is vital for any digital society platform. The open-source system must be developed in compliance with legislative and cultural norms while maintaining the balance between user privacy and the need for identity verification and data management. The evidence that social media is damaging youth mental health is very compelling. The Centre for Humane Technology calls social media the 'first contact point' with AI, explaining that new technologies often create an arms race. The underlying arms race for attention led to what they call 'an engagement monster' that rewrote the rules of society. These lessons should be learnt and the problems should be proactively mitigated. This proposal is not a social metaverse, and deliberately limits both numbers of participants and avatar optionality.

							- ### Preference Setup
								- Configuring privacy settings, accessibility options, and other preferences.
								- Utilizing the PrivacySetting entity from the ontology.
								- Example Linked-JSON snippet:
									- ```json
									  {
									    "@id": "narrativegoldmine:PrivacySetting",
									    "@type": [
									      "narrativegoldmine:Class",
									      "Linked-JSON:Class",
									      "http://www.w3.org/2002/07/owl#Class"
									    ],
									    "http://www.w3.org/2000/01/rdf-schema#comment": [
									      {
									        "@value": "Represents an agent's privacy preferences within the metaverse."
									      }
									    ],
									    "http://www.w3.org/2000/01/rdf-schema#label": [
									      {
									        "@value": "Privacy Setting"
									      }
									    ]
									  }
									  ```

				- ## Enhanced Privacy and Security
					- Self-sovereign identity and privacy-preserving technologies empower users to control their data and protect their privacy.

	- ### Security and Privacy
	  
	  Implement appropriate safeguards:
	- Limit access to sensitive systems and data
	- Monitor agent actions and decisions
	- Implement authentication and authorisation
	- Consider data privacy implications
	- Plan for incident response and recovery
	-
	-
-
	- [Jack Burlinson on X: "In case you were wondering just how cracked the team @cognition_labs is... This was the CEO (@ScottWu46) 14 years ago. https://t.co/UqXTYGVKzO" / X (twitter.com)](https://twitter.com/jfbrly/status/1767653596957642879)
	- {{twitter https://twitter.com/jfbrly/status/1767653596957642879}}
	- <iframe src="https://www.adept.ai/" style="width: 100%; height: 400px"></iframe>
	- <iframe src="https://www.openinterpreter.com/01" style="width: 100%; height: 400px"></iframe>
- **Automating Repetitive Tasks**:
	- AI offers the potential to automate mundane digital chores. This can revolutionize job efficiency and free up human resources for more creative and complex tasks.
	- The development of multimodal models and reinforcement learning is paving the way for richer, more intuitive user experiences, expanding AI's role in everyday life.
- **Logical Reasoning and Decision-Making**:
	- AI models currently struggle with complex logical reasoning, which impacts their decision-making abilities in nuanced tasks. This limitation is a critical area for future advancements.
- **Adaptation to New Environments and Online Learning**:
	- AI agents need substantial improvements in adapting to new environments and in their capability for online learning. This is crucial for their effective deployment in various real-world scenarios.
- **Navigating Complex Web Interfaces**:
	- Both humans and AI agents find it challenging to navigate and interpret complex web interfaces. This underscores the need for AI systems to improve their adaptation and learning mechanisms.
- **Data Privacy and Ethical Use**:
	- The use of personal data in AI training raises significant ethical concerns. There is a pressing need for stringent measures to responsibly handle personal identifiable information and ensure user privacy.
- **Cost and Efficiency Balancing**:
	- A major challenge lies in running sophisticated AI models economically while maintaining high efficiency. This concern becomes increasingly significant as the technology scales.
	- <iframe src="https://www.theinformation.com/articles/to-unlock-ai-spending-microsoft-openai-and-google-prep-agents" style="width: 100%; height: 400px"></iframe>
		- [To Unlock AI Spending, Microsoft, OpenAI and Google Prep ‘Agents’ — The Information](https://www.theinformation.com/articles/to-unlock-ai-spending-microsoft-openai-and-google-prep-agents)

	- ### Privacy and Surveillance
		- The use of AI in areas such as facial recognition and data analysis raises concerns about privacy and the potential for increased surveillance.

- # A Quick History
	- The 1980s saw the emergence of the [[cypherpunk]] activist movement, as a reaction to the emerging [[Digital Society Surveillance]] state,[[burnham1983rise; @chaum1985security]] a topic which is expanded in [[Digital Society Surveillance]] and [[Global Inequality]] . These early computer scientists in the USA saw the intersectionality between information, computation, economics, and personal freedom.[[lavoie1990prefatory]] Online discussion in the early nineties foresaw the emergence of trans-national digital markets, what would become the WWW.[[salinCosts; @cypherPunkMailList]] The issues of privacy and the exchange of digital value (digital /ecash) were of foremost importance within these discussions and while privacy was within reach thanks to [“public/private keypairs”](https://www.openpgp.org/about/history/), ecash proved to be amore difficult problem.
	- Adam Back’s 1997 ‘hashcash’[[back2002hashcash]] paved the way for later work by implementing the concept of what would become ‘proof of work.’[[dwork1992pricing; @jakobsson1999proofs]] This was built upon by Dai,[[dai1998b]] Szabo,[[szabo1997formalizing]]Finney,[[callas1998openpgp]] and Nakamoto amongst others. In all it took16 years of collaboration on the mailing lists (and dozens of failed attempts) to attack the problem of trust-minimised, distributed, digital cash. The culmination of these attempts was Bitcoin.[[Nakamoto2008]]
	- This is illustrated by Dan Held.
		- ![image](./assets/10392f6889e4be99247a0cf832f5628e3b017f5e.jpg){:width 800}
	- Dan Held: <a href="https://www.danheld.com/blog/2019/1/6/planting-bitcoinsoil-34">Bitcoin prehistory</a> used with permission.
- This is now a wider ecosystem of technologies and societal challenges.
	- ![image](./assets/2f03939e7360fa432ab47028bf32284b0088e385.jpg){:width 600}
		- {{twitter https://twitter.com/djvalerieblove/status/1514703620272394243/}}
		- used with permission @djvalerieblove.
- There is enormous complexity and scope, as seen in below, and yet genuinely useful products are elusive.
	- ![image](./assets/c157c8cd52e86b9bf30f9c4a5e5a28b226027ce5.png){width 800}

		- ### Generating a Secret for Blind Signatures
			- Implement JavaScript code to generate a new secret key. This key will be essential for creating blind signatures, a cornerstone of Cashew's privacy features.
			- Utilize cryptographic libraries available in JavaScript for secure key generation.

		- ### Requesting a Blinded Signature from the Mint
			- Once the invoice payment is confirmed, request a blinded signature for a specified ecash amount from the mint. This signature is necessary for the mint to acknowledge your ecash holdings without compromising privacy.

		- ### Unblinding the Signature
			- Use the previously generated secret key to unblind the mint's signature. This process converts the blinded signature into a form usable for transactions while maintaining the integrity of the privacy guarantees.

		- #### User Privacy
		- The user's knowledge base is kept local to their device, using hashes to retrieve personalised content, which enhances [[Politics, Law, Privacy]] by avoiding centralized data collection and tracking.
		- [[Hyper personalisation]] and Dynamic Creative Optimisation (DCO)
		- The system delivers content optimised for the user's language, environment, age, and other demographic factors using AI-powered multi-modal product representations.
		- DCO techniques dynamically adapt and optimise creative elements in real-time based on user interactions and preferences.

	- ### `ideas.json`
	  ```json
	  [
	    {
	        "Name": "local_ai_personalization",
	        "Title": "Client-Side AI for Hyper-Personalization: Enhancing User Experience While Preserving Privacy",
	        "Experiment": "Develop a client-side AI system that uses local embeddings to personalize content based on user preferences and interactions. The system will generate personalized multimedia assets in real-time, using local data while maintaining privacy by not sharing any data with external servers. Evaluate the system's performance in terms of user engagement, content relevance, and privacy preservation.",
	        "Interestingness": 8,
	        "Feasibility": 7,
	        "Novelty": 8,
	        "novel": true
	    },
	    {
	        "Name": "nostr_dynamic_content_optimization",
	        "Title": "Dynamic Content Optimization Using Nostr Relay Protocol: A Decentralized Approach",
	        "Experiment": "Implement a dynamic content optimization system that leverages the Nostr relay protocol for real-time content delivery. The system will match content from a distributed network of vendors to users based on locally generated embeddings. Test the system's effectiveness in delivering relevant content while preserving user data sovereignty and minimizing latency.",
	        "Interestingness": 9,
	        "Feasibility": 7,
	        "Novelty": 8,
	        "novel": true
	    },
	    {
	        "Name": "privacy_preserving_dco",
	        "Title": "Privacy-Preserving Dynamic Creative Optimization: Leveraging Local AI and Heuristic Matching",
	        "Experiment": "Design a DCO system that operates entirely on the client side, using heuristic matching to personalize marketing content. The system will use local AI to generate and optimize creative assets without sending any data to external servers. Assess the system's ability to balance personalization and privacy, and compare its performance with traditional server-based DCO systems.",
	        "Interestingness": 9,
	        "Feasibility": 8,
	        "Novelty": 9,
	        "novel": true
	    },
	    {
	        "Name": "vendor_embedding_optimization",
	        "Title": "Optimizing Vendor Embeddings for Multimedia Content Personalization",
	        "Experiment": "Develop a system that creates and optimizes vendor embeddings to personalize multimedia content for users. The system will use local AI to match user preferences with vendor content, ensuring high relevance while preserving privacy. Evaluate the quality of the personalized content and the effectiveness of the embedding optimization.",
	        "Interestingness": 8,
	        "Feasibility": 7,
	        "Novelty": 8,
	        "novel": true
	    },
	    {
	        "Name": "multimodal_asset_generation",
	        "Title": "Multimodal Asset Generation Using Local AI and Nostr Protocol",
	        "Experiment": "Create a system that generates personalized multimodal assets (e.g., text, images, videos) using local AI models. The system will use the Nostr relay protocol to pull relevant content from vendors and integrate it into the user's local environment. Test the system's ability to deliver high-quality personalized content without compromising user privacy.",
	        "Interestingness": 9,
	        "Feasibility": 7,
	        "Novelty": 8,
	        "novel": true
	    }
	  ]
	  ```
	  
	  ---

	- ### `prompt.json`
	  ```json
	  {
	    "system": "You are an innovative AI researcher focused on exploring the intersection of privacy, personalization, and decentralized content delivery.",
	    "task_description": "You are provided with the following file to work with, which explores various approaches to client-side hyper-personalization, dynamic creative optimization, and dynamic content optimization using the Nostr relay protocol, embeddings, and local AI. Your task is to develop a series of small-scale experiments to investigate the potential and challenges of these approaches."
	  }
	  ```
	  
	  ---

- # Extended Reality / Mixed Reality / [[Spatial Computing]]
	- XR (VR/AR/MR) will eventually become the primary way we interact with digital information, as it aligns with how our brains naturally process information in 3D space. The merging of the physical and digital worlds is inevitable
	- The metaverse, while currently overhyped, ultimately represents the future of an interconnected network of virtual worlds. As XR technology advances, we will increasingly operate in virtual worlds as naturally as we do in the physical world today
	- The early metaverse will start off as walled gardens controlled by large tech companies. However, it's plausible that more open standards, interoperability, and decentralization will emerge over time, similar to the evolution of the early Internet
	- Bystander privacy is a major concern with always-on AR glasses and headsets. People may have their data captured without consent just by being in the presence of someone wearing XR devices
	- XR and AI are highly complementary and will help address each other's limitations. AI will make the metaverse possible, while the metaverse will provide an outlet for human creativity and self-actualization in a post-labor world
	- XR has the potential to greatly enhance fields like medicine, education, and industrial design by providing rich spatial computing interfaces.
	- The lack of compelling content and experiences has been a limiting factor for XR adoption. However, AI-generated assets could help solve this content bottleneck and enable the rapid creation of photorealistic virtual worlds
	- Privacy and security remain ongoing concerns in XR ecosystems, as they capture even more biometric and behavioral data than traditional computing interfaces
	- VR in particular still faces physiological challenges around multi-sensory immersion (e.g. locomotion) that will need to be solved before the technology can go fully mainstream

- # Convergence
	- The intersection of AI, XR, and open, decentralized networks represents a powerful convergence of technologies that could reshape the fabric of our social and economic lives. By leveraging the unique strengths of each domain
		- the immersive power of XR, the intelligence and adaptability of AI, and the openness and composability of decentralized protocols
		- we can create a more vibrant, dynamic, and equitable digital future. However, realizing this potential will require careful design, collaboration, and governance to ensure that these technologies develop in a way that promotes human agency, privacy, and flourishing.
	-
	- AI and XR are deeply intertwined and mutually reinforcing technologies
		- AI is a critical enabler for XR, powering key functionalities like environment understanding, natural interaction, and content creation
		- XR provides a rich, immersive interface for AI systems to interact with humans and the physical world
	- The combination of AI and XR will give rise to new forms of human-machine collaboration and augmentation
		- AI-powered virtual assistants will be deeply integrated into XR environments, providing real-time guidance, knowledge, and skills enhancement
		- XR will provide a spatial computing platform for AI systems to learn from and interact with the world in more natural and intuitive ways
	- The intersection of AI and XR will blur the lines between the physical and digital worlds
		- AI will enable the creation of photorealistic virtual environments that are increasingly indistinguishable from reality
		- XR will allow for seamless blending of digital content and experiences into the physical world, creating a unified "metaverse"
	- AI and XR will intersect to create new forms of social interaction and collaboration
		- AI-driven avatars and agents will facilitate rich, immersive social experiences in virtual worlds
		- XR will provide a shared spatial context for humans and AI systems to interact and collaborate in real-time
	- The intersection of AI and XR will give rise to new economic models and value creation opportunities
		- Virtual goods, experiences, and services will become increasingly valuable in immersive XR environments
		- AI will enable the creation of personalized, adaptive, and intelligent virtual assets and experiences
	- The combination of AI and XR will raise new ethical and societal challenges
		- The blurring of physical and digital reality may have profound impacts on privacy, identity, and social norms
		- The increasing power and pervasiveness of AI systems in XR environments may raise concerns around control, transparency, and accountability
	- Open, decentralized networks will be critical for enabling seamless value transfer and interoperability in the metaverse
		- Centralized, walled-garden approaches will limit innovation and user choice
		- Open standards and protocols will allow for greater composability and network effects
	- Blockchain technologies like Bitcoin, particularly with Layer 2 and Layer 3 solutions, can provide a foundation for secure, efficient, and scalable value transfer in XR/AI ecosystems
		- Bitcoin's decentralized, trustless architecture aligns well with the open, permissionless ethos of the metaverse
		- Layer 2 solutions like Lightning Network can enable fast, low-cost microtransactions for virtual goods and services
		- Layer 3 protocols can enable additional functionality and interoperability on top of the core Bitcoin blockchain, including governance models
	- Cryptographic tokens and smart contracts can enable new forms of value creation, ownership, and exchange in XR/AI environments
		- Unique and fungible digital objects (RGB20/21) can provide provable ownership and scarcity for virtual assets at scale
		- Decentralised autonomous organizations (DAOs) can enable new forms of community governance and collaboration
	- Interoperability and composability will be key for enabling value transfer across different XR/AI platforms and experiences
		- Open standards for identity, asset ownership, and data portability will allow users to seamlessly move between virtual worlds
		- Bridges and cross-chain protocols can enable value transfer and communication between different blockchain networks
	- Decentralised finance (DeFi) protocols can provide new avenues for earning, investing, and monetising value in XR/AI ecosystems
		- Virtual real estate, goods, and services can be tokenized and traded on decentralized exchanges
		- Lending, borrowing, and staking protocols can provide new ways to generate yield and incentivize participation
	- Privacy and security will be critical considerations for value transfer in open XR/AI networks
		- Zero-knowledge proofs and other advanced cryptographic techniques can enable privacy-preserving transactions and interactions
		- Multi-party computation and secure enclaves can allow for trustless collaboration and data sharing between AI agents
-
- [Disney invests $1.5bn in Fortnite maker Epic Games to create new ‘universe’ | Walt Disney Company | The Guardian](https://www.theguardian.com/film/2024/feb/07/disney-fortnite-merger-epic-games-new-universe)
-

- # Surveillance Capitalism
	- Surveillance capitalism is a term coined by Harvard Business School professor Shoshana Zuboff to describe the business model of using data collected from individuals to target advertising and influence behaviour. The concept of surveillance capitalism emerged in the late 20th and early 21st centuries with the rise of technology companies thatspecialize in gathering and analyzing personal data.
	- The history of surveillance capitalism can be traced back to the early days of the internet. In the 1990s, companies such as DoubleClick andOmniture began collecting data on internet users’ browsing habits inorder to target advertising. As the internet grew in popularity, these companies were able to gather an increasing amount of data on individuals, allowing them to more effectively target advertising and increase profits.
	- The advent of smart phones and mobile technology in the 2000s further expanded the reach of surveillance capitalism. With the widespread adoption of smart phones and mobile apps, companies were able to collect even more data on individuals, including location data and information about their physical activity. This data was used to target advertising and influence behaviour, leading to the rise of companies such as Google and Facebook, which have become dominant players in the digital advertising market.
	- The use of data collected from individuals to influence behaviour has also been used to influence political campaigns. In the 2016 USpresidential election, Cambridge Analytica, a data analytics firm, used data collected from Facebook users to influence voter behaviour. The firm used the data to target advertising and create psychological profiles of individuals, allowing them to more effectively influence voter behaviour.
	- The business model of surveillance capitalism has been widely criticised for its ethical implications. Critics argue that the collection and useof personal data without consent is a violation of individuals’ privacyand that the use of data to influence behaviour is manipulative and unethical. In recent years, there have been calls for greater regulationof the tech industry to address these concerns.
	- Surveillance capitalism has led to significant compliance overheads for companies that collect and use personal data. There are a number of laws and regulations that have been put in place to protect individuals’ privacy, such as the General Data Protection Regulation (GDPR) in theEuropean Union and the California Consumer Privacy Act (CCPA) inCalifornia, USA. These laws require companies to obtain consent from individuals before collecting and using their data, and to provide individuals with the right to access, correct, and delete their data.
	- Complying with these laws can be costly and time-consuming for companies. They may need to hire additional staff to handle data privacy compliance, and may also need to invest in new technology to manage andprotect personal data. In addition, companies are at risk of significant fines if they fail to comply with these laws.
	- In terms of who profits from surveillance capitalism, the primary beneficiaries are technology companies such as Google and Facebook,which have become dominant players in the digital advertising market.These companies collect and analyse large amounts of personal data,which they use to target advertising and influence behaviour. This allows them to generate significant profits from advertising revenue.
	- On the other hand, those who suffer the most negative impact from surveillance capitalism are individuals, whose personal data is collected and used without their consent. They are also at risk of theirprivacy being violated, and their personal data being misused. Additionally, the collection and use of personal data can lead to themanipulation of individuals’ behaviour and decision-making, which can have negative consequences for their lives and society at large.
	- Moreover, the business model of surveillance capitalism has also been criticized for creating a power imbalance between companies and individuals. Companies have access to vast amounts of personal data,which they can use to influence behaviour and make decisions that affect individuals’ lives. This can lead to a lack of privacy and autonomy for individuals, and can also lead to discrimination and bias indecision-making.
	- This is collectively an erosion of the demarcation between data, state surveillance, banking, and political leadership globally.
	- The term "surveillance state" refers to a state in which government agencies have the power to collect and analyze large amounts of personal data, often without the consent of individuals. The rise of surveillance capitalism has led to concerns about the potential for the creation of a surveillance state, as government agencies may use the data collected by companies for surveillance purposes.
	- There have been instances where government agencies have used data collected by companies for surveillance purposes. For example, in theUnited States, the National Security Agency (NSA) has been accused of using data collected by companies such as Google and Facebook for surveillance purposes. The agency’s PRISM program, which was revealed byEdward Snowden in 2013, was designed to collect and analyse data from internet companies in order to identify and track individuals. Europe is[clear about it’sintentions](https://www.patrick-breyer.de/en/posts/chat-control/) to mandate their complete access to all encrypted personal communications in forthcoming legislation.
	- The use of data collected by companies for surveillance purposes canhave significant implications for individuals’ privacy and civil liberties. It can also lead to a lack of transparency and accountability, as government agencies may use the data without the knowledge or consent of individuals. In addition, the use of data for surveillance purposes can lead to discrimination and bias indecision-making, as well as a chilling effect on free speech and the exercise of other rights.
	- Akten has been [talkingabout](https://memoakten.medium.com/all-watched-over-by-machines-of-loving-grace-8c2464aa6fda)the phase transition from digital surveillance to pernicious corporateAI in terms of a modern ‘religion’ for many years.[[bayer2023artificial]]He feels that despite public awareness of privacy invasion, there hasbeen no significant outcry or unanimous demand for privacy. Instead,most individuals seem to find comfort in the belief that a higher forceis watching and protecting the virtuous, while punishing wrongdoers. The concept of a ‘digital deity’ emerge from his thinking in this context,reflecting the role that religion and traditional gods have played in providing ethical frameworks, security, discipline, power, and other societal functions. More recently O’Gieblyn has been drawing the same conclusions,[[o2021god]] explicitly linking religiosity to the imperative to ‘create a godhead’ simply because it can be done, not pausing to discuss if it should be. Rosenberg calls this ‘a threat to EpistemicAgency’[[rosenbergmanipulation]]More recently the Harari, author ofSapiens[[harari2014sapiens]] [said ofAI](https://forumlive.frontiersin.org/agenda/speakers/2977577): it“For thousands of years, prophets and poets and politicians have used language and storytelling in order to manipulate and to control people and to reshape society. Now AI is likely to be able to do it. And once it can... it doesn’t need to send killer robots to shoot us. It can get humans to pull the trigger. We need to act quickly before AI gets out ofour control. Drug companies cannot sell people new medicines without first subjecting these products to rigorous safety checks.” (AI will be discussed in detail in a later chapter).
	- Klein at the New York Times has been [writing against thispoint](https://www.nytimes.com/2023/03/12/opinion/chatbots-artificial-intelligence-future-weirdness.html)for some time. His well articulated fear, is that the current model where three major Western companies, with similar highly competitive capitalist origins and values, should certainly not be in charge ofracing to monetise the most compelling and innately unknowable chat bot experience. As societies shift towards materialism and technological dependence, traditional gods lose their relevance, and the need for anew form of overseer arises. This digital deity, existing within therealm of technology and the cloud, perhaps represents an adaptation of primal human belief systems. This will be explored further in the AI/MLchapter later.
	- In conclusion, the rise of surveillance capitalism has led to concerns about the potential for the creation of a surveillance state, or worse,a new kind of omnipresent digital culturla authority. Corporations and government agencies may use the data collected by companies for surveillance purposes. This can have significant implications for individuals’ privacy and civil liberties. It’s important for laws and regulations to be in place to safeguard citizens’ rights and privacy inregards to the use of data by government agencies, and to hold them accountable for any misuse of data, and yet it seems the reality of the situation in ‘post Snowden’ seems far from that.
	- Surveillance Capitalism. As a quick round-up of this area, which is best researched elsewhere:
		- The global digital advertising market is expected to reach $335 billion by 2023.
		- In 2020, Google and Facebook accounted for 60% of the global digital advertising market.
		- The data brokerage industry, which includes companies that collect and sell personal data, is estimated to be worth $200 billion.
		- In 2020, Google and Facebook were reported to have data on over 4 billion active users.
		- As of 2021, the number of data breaches reported worldwide has grown from 4.1 billion in 2018 to 4.9 billion in 2020.
		- In 2013, it was revealed that the US National Security Agency (NSA) had been collecting the phone records of millions of Americans under its PRISM program.
		- In 2013, Edward Snowden leaked classified documents that revealed the scale of the NSA’s surveillance programs.
		- In the US, the Foreign Intelligence Surveillance Act (FISA) allows the government to conduct surveillance on non-US citizens outside the US without a warrant.
		- The UK’s Investigatory Powers Act 2016, also known as the "snooper’s charter," gives government agencies wide-ranging powers to collect and analyze personal data.
		- In 2021, it was reported that the Chinese government has been collecting and analyzing the data of its citizens through a system of "social cred* scores, which are used to monitor and control individuals’ behaviour.
		- Surveillance capitalism refers to the business model of collecting and analyzing personal data for the purpose of targeted advertising and other forms of monetization.
		- A recent study by the Center for Digital Democracy found that the top 100 global digital media companies are projected to generate over $1 trillion in revenue by 2020, much of which is derived from surveillance-based advertising.
		- The number of surveillance cameras in use worldwide is estimated to be over 1 billion, with the majority located in China.
		- A 2018 study by Comparitech found that the average person in the UK is captured on CCTV cameras over 300 times per day.
		- According to a report by the American Civil Liberties Union (ACLU), the FBI has access to over 640 million photographs for facial recognition searches, including driver’s license and passport photos.
		- The U.S. government’s use of surveillance technologies, such as drones and mass data collection, has been a subject of ongoing controversy and debate.
		- Some experts warn that the increasing use of surveillance technologies by governments and private companies could lead to the erosion of privacy rights and the creation of a *surveillance state."
		- In the USA senate hearing following the collapse of FTX Rep. Jesus Garcia described bitcoin and crypto as an industry that operates outside of the law and relies on hype, implying that the communities that have adopted bitcoin are ill-informed and vulnerable.
		- Bitcoin has been adopted by a variety of communities worldwide, particularly in countries such as Vietnam, the Philippines, Ukraine, India, Pakistan, Brazil, Thailand, Russia, and China.
		- There is an outsized level of adoption among Black Americans in the United States. This trend is not a result of targeted advertising by companies such as FTX, but rather a response to a legacy financial system that has limited individuals’ potential.
		- Marginalized early adopters of bitcoin still constitute a minority in their communities, but the worldwide adoption trend among these groups is on the rise.
		- The solutions that outsiders build in bitcoin will ultimately be the source of the technology’s promised revolution. Adoption in Africa and possibly India seems likely to be capable of driving this.
		- The paradigm shift will come from those who bring local, real-world focused use cases to their communities, separating bitcoin from the empty hype of speculation.
		- Marginalized communities will lead the industry’s recovery and redefine the purpose of bitcoin in the future.

	- ## Tech money in Civil Society
		-
		- https://twitter.com/youranonnews/status/1816298460645068879
		- {{twitter https://twitter.com/youranonnews/status/1816298460645068879}}
		- Big Tech firms donate substantial funds to charities, think tanks, academic research, and lobbying efforts to shape narratives and policy around tech regulation. [[Goldenfein Mann 2024]]
		- Tracking financial flows from Big Tech to DRCSOs is challenging due to limited transparency, but available data shows ongoing funding relationships.
		- Through class action cy pres settlements, Big Tech firms direct funds to DRCSOs that purport to represent class interests, but may actually advance the firms' preferred policy narratives.
		- Funding from Big Tech raises questions about potential conflicts of interest for DRCSOs and whether they truly represent the public interest as opposed to aligning with industry agendas.
		- The authors argue Big Tech philanthropy allows economic power to translate into political and cultural capital, enabling the firms to continue profiting from problematic data practices while avoiding meaningful regulation.
		- Much of the following text is paraphrased from the work of Guy Turner of‘The Coin Bureau’, and Lawyer and academic Eden Moglen, and needs more work because of it’s critical importance to the book. [[Update Cycle]]
			- The adoption of printing by Europeans in the 15th century led to concerns around access to printed material. The right to read and the right to publish were central subjects in the struggle for freedom of thought for most of the last half millennium. The basic concern was forthe right to read in private and to think, speak, and act based on a free and uncensored will. The primary antagonist for freedom of thought at the beginning of this struggle was the universal Catholic Church, an institution aimed at controlling thought in the European world through weekly surveillance of individuals, censorship of all reading material,and the ability to predict and punish unorthodox thought. In early modern Europe, the tools available for thought control were limited, but they were effective. For hundreds of years, the struggle centred around the book as a mass-manufactured article in Western culture, and whether individuals could print, possess, traffic, read, or teach from books without the permission or control of an entity empowered to punish thought. By the end of the 17th century, censorship of written material in Europe began to break down in waves throughout the European world,and the book became an article of subversive commerce, undermining the control of thought.
		- Currently, a new phase in human history is beginning as we are building a single extraneous digital nervous system, that will connect every human mind. Within two generations, every single human being will be connected to this network, in which all thoughts, plans, dreams, and actions will flow as nervous impulses. The fate of freedom of thought and human freedom as a whole will depend upon the organization of thisnetwork. Our current generation is the last in which human brains will be formed without contact with this network, and from now on, every human brain will be formed from early life in direct connection to the network, with input from generative AI/ML systems. This possibly results in humanity becoming a super organism of a sort, where each of us is buta neuron in the brain. Unfortunately, this generation has been raised to be consumers of media, which is now consuming us.
		- Anonymous reading is being determined against. Efforts discussed throughout this graph to ensure privacy, from Zimmerman and the cypherpunks onward, have been met with resistance from government efforts to monitor and control information flow. The outcome of the organization of this network, and the freedom it allows, is currently being decided by this generation.
		- It is not solely the ease of surveillance, nor solely the permanence of data, that is concerning, it is the relentless nature of living after the “end of forgetting”. Today’s encrypted traffic, which is used with relative security, will eventually be decrypted as more data becomes available for crypto analysis. This means that security protocols will need to be constantly updated and redone. Furthermore, no information is ever truly lost, and every piece of information can be retained and eventually linked to other information. This is the rationale behind government officials who argue that a robust social graph of the UnitedStates is needed. The primary form of data collection that should be of most concern is media that is used to spy on us, such as books that watch us read them and search boxes that report our searches to unknown parties. There is a lot of discussion about data coming out ofMeta/Facebook, but the true threat is code going in. For the past 15years, enterprise computing has been adding a layer of analytics on topof data warehouses, which is known as business intelligence. This allows for the vast amount of data in a company’s possession to be analysed and used to answer questions the company did not know it had. The real threat of Facebook is the business intelligence layer on top of theFacebook data warehouse, which contains the behaviour of nearly a billion people. Intelligence agencies from around the world want toaccess this layer in order to find specific classes of people, such as potential agents, sources, and individuals that can be influenced or tortured. The goal is to run code within Facebook to extract this information, instead of obtaining data from Facebook, which would be dead data once extracted. Facebook wants to be a media company andcontrol the web, but the reality is the true value of Facebook is the information and behaviour of it’s users, and the ability to mine that data. Distributed internet protocols are important in the context of government overreach into digital society and people’s private livesbecause they provide a level of decentralization and resilience that canhelp protect against censorship and surveillance.
		- For example, if a government were to attempt to censor or block access to a centralized internet service, it could potentially do so with relative ease. However, if that same service were distributed across anetwork of nodes, it would be much more difficult for the government to effectively censor or block access to it.
		- Another advantage of distributed protocols is that they are typically more resilient to attacks or failures. If one node in the network goes offline or is compromised, the others can continue to operate, ensuring that the service remains available. This can be especially important in situations where the internet is being used for critical communication,such as during a natural disaster or political crisis.
		- In addition to their benefits for censorship resistance and resilience,distributed protocols can also help protect people’s privacy. Because they do not rely on centralized servers or infrastructure, they can bemore difficult for governments or other entities to monitor or track.This can be especially important in countries where government surveillance is prevalent or where individuals may be at risk of persecution for their online activities.
		- There are a number of distributed protocols that have been developed specifically to address issues of censorship and privacy, and these will be covered in more detail later.
		- It is important to note that distributed protocols are not a silver bullet for censorship or privacy concerns. They can be vulnerable to certain types of attacks, such as those that target the nodes of the network, and they may not always be practical for certain types of applications. However, they do provide an important tool for those seeking to protect their freedom of expression and privacy online. They offer a valuable tool for those seeking to protect their freedom of expression and privacy online, and they will likely continue to play a critical role in the future of the internet.
		- In recent years, several countries have proposed or passed bills that would result in unprecedented levels of online censorship. One such example is Canada’s Bill C-11, also known as the Online Streaming Act.This bill was first proposed in November 2020 as Bill C-10, but failed to pass due to its controversial provisions. It was reintroduced inFebruary 2021 as Bill C-11 and was approved by the Canadian House ofCommons, the first step in the process of becoming law. If passed, the bill would give the Canadian Radio, Television and TelecommunicationsCommission (CRTC) the power to decide what content Canadians can view onYouTube and other social media platforms. The CRTC would also have the power to dictate what content creators can produce, with a focus on promoting "Canadian content." Additionally, the bill would require certain broadcasters to contribute to the Canada Media Fund, which is used to fund mainstream media in Canada. The bill is currently being considered by the Canadian Senate, which will vote on it in February. If passed, it will then be debated by the Canadian Parliament. Tech companies such as YouTube have reportedly failed to convince the Senate to exclude user-generated content from the bill, indicating a high likelihood of it becoming law. The potential impact on the internet andfree expression in Canada is significant, as the bill would give the government significant control over online content and restrict the ability of individuals to share their views and perspectives.
		- In a similar vein the forthcoming RESTRICT act in the USA gives hugepowers without oversight to a single branch of the US government.
			- The bill is called the “Restricting the Emergence of Security Threats that Risk Information and Communications Technology Act”
			- It was initially thought to be about banning TikTok due to its connections to the Chinese government and the data it collects on its users.
			- The RESTRICT Act has very little to do with banning TikTok and instead grants the US Secretary of Commerce significant powers to determine which entities are foreign adversaries and what technology poses a risk to national security.
			- The bill defines critical infrastructure broadly, which means it could apply to almost anything the government deems necessary. Lobbyists will be allowed to advise the Secretary of Commerce on which products and services should be labeled as foreign adversaries, potentially leading to monopolies.
			- Fines and jail time for interacting with foreign adversaries or posing a risk to national security could reach up to $1 million, 20 years in prison, and asset seizures.
			- The bill aims to crack down on VPNs (Virtual Private Networks), which provide privacy and access to foreign websites.
			- There is no oversight for the actions taken by the Secretary of Commerce under this act, and neither Congress nor the courts can request information on these decisions.
		- The European Union (EU) has separated its online censorship efforts into two separate bills: the Digital Markets Act and the Digital Services Act. These bills were introduced in December 2020 and are part of the EU’s Digital Services package, which aims to be completed by 2030. The Digital Services package is the second phase of the EU’s digital agenda, which is being enforced through regulation in the public sector and through ESG investing in the private sector. Both the Digital Markets Act and the Digital Services Act were passed in spring 2022 and went into force in autumn 2022, but will not be enforced until later this year and early next year, depending on the size of the relevant entity. The Digital Markets Act aims to increase the EU’s competitiveness in the tech space by imposing massive fines on "gatekeepers," or companies that maintain monopolies by giving preference to their own products and services. This could open the door to innovation in cryptocurrency in the EU, but also requires gatekeepers to provide detailed data about the individuals and institutions using their products and services to theE U. The Digital Services Act, on the other hand, aims to regulate the content that is available online, including user-generated content. It does this by requiring companies to remove illegal content within one hour of it being reported and by imposing fines for non-compliance. The act also requires companies to implement measures to protect users from illegal content and from "other forms of harm," which is defined broadly and could include a wide range of content. The EU is also in the process of passing the Artificial Intelligence Regulation Act, which will be discussed later this year and is reportedly the first of its kind. All five bills in the EU’s Digital Services package are regulations, meaning they will override the national laws of EU countries. The potential impact on the internet and free expression in the EU is significant, as the Digital Services Act would give the government significant control over online content and restrict the ability of individuals to share their views and perspectives.
		- In the United States, two significant documents related to online censorship are the Kids Online Safety Act and the Supreme Court caseGonzalez v. Google. The Kids Online Safety Act was introduced inFebruary 2021 and is expected to pass later this year due to bipartisan support. The act requires online services to collect Know Your Customer(KYC) information to ensure that they are not showing harmful content tominors. It also gives the Federal Trade Commission (FTC) the power to decide when children have been made unsafe online and allows parents tosue tech companies if their children have been harmed online. The act has received criticism from both sides of the political spectrum and entities outside of Congress, as it is seen as giving too much power tothe government to regulate online content and could lead to increased censorship by tech companies.
		- The Supreme Court case Gonzalez v. Google involves the question of whether Google’s algorithmic recommendations supported terrorism and contributed to the 2015 terrorist attacks in Paris. The case has been picked up by the Supreme Court after being passed up by various courts of appeal. It is being heard alongside another case, Twitter v. Tumne, involving the role of Twitter’s algorithms in a terrorist attack in Istanbul. There are two potential outcomes for the case. If the Supreme Court sides with Gonzalez, it could increase the liability of social media companies under Section 230 of the Communications Decency Act, which allows them to moderate content to a limited extent without violating the First Amendment. Alternatively, the Supreme Court could declare Section 230 unconstitutional, which would make online censorship illegal but also hinder the use of algorithms on the internet. The ideal outcome, in theory, would be for the Supreme Court to side with Google and for Congress to change Section 230. However, giving Congress the power to change the law could lead to increased censorship and the potential for abuse of power.
		- In the UK forthcoming legislation will see tech company leaders liablefor [prison sentences](https://www.independent.co.uk/news/uk/politics/bill-mps-iain-duncan-smith-molly-russell-rishi-sunak-b2263353.html) if they fail in their duty to protect minors. This will doubtless lead to both stringent universal requirements for identity proof (KYC), and significantly muted and controlled content on the platforms.
		- Our research focuses on business to business use cases for distributed technologies, and will provide mechanisms for verifying who is communicating with whom, to avoid falling foul of these swinging global infringements on privacy.
		- It is the opinion of this book that information should befree[[swartz2008guerilla]]

	- ### Rewind Pendant
		- **Description**: A wearable device designed to aid memory by passively capturing audio throughout the day.
		- **Features**:
			- Auto-records ambient sound
			- Privacy-focused with user-controlled storage
			- Lightweight and can be worn as a necklace
			- Integrates with an app for audio playback
		- **AI Aspect**: Uses AI to intelligently capture and categorize important sound bites.

		- ## **LM Studio**
			- **Description:** Standalone desktop application for local inference.
			- **Features:**
				- Easy to use with a modern UI.
				- Suitable for new users and traditional "Windows-style" workflows.
			- **Limitations:** Closed source; outbound connections for updates raise privacy concerns.
			- **Link:** [LM Studio](https://lmstudio.ai)

	- ## Approach and Innovation
		- **Method**: Utilizing high-resolution machine vision cameras and AI algorithms for capturing human presence and emotions
		- **Innovation**: Seamless tracking without requiring wearables, anonymized data processing for privacy
		- **AI Utilization**: Trustworthy and responsible use of AI in capturing visitor data

	- ## Competitive Advantages
		- **Unique Capabilities**: Capturing gaze vectors, emotion, and attention metrics with high granularity
		- **Seamless Integration**: No need for proprietary hardware or sensors
		- **Privacy Focus**: Minimal, anonymized data collection
		- **Partnerships**: Strategic collaborations with experience designers and creative industries

- # What to use and when
	- **Start with Simple API Calls:**
		- Initially, utilize third-party APIs that serve your needs without complicating your system. This is the most straightforward and cost-effective solution.
		- If third-party APIs meet your requirements in terms of functionality, privacy, cost, and latency, there's no need to progress to more complex solutions.
	- **Deploy Pre-trained Models:**
		- If API solutions are insufficient due to privacy, cost, or latency issues, consider deploying a generic, pre-trained model (like MixL or LLaMA) behind your own API.
		- This step involves a bit more complexity and control over the data but remains relatively simple.
	- **Curate Context and Improve Prompts:**
		- Enhance the output quality by curating in-context examples and optimizing prompts. This step aims to extract better performance from the existing deployed model with minimal changes.
	- **Integrate Retrieval Systems:**
		- If further improvement is needed, integrate a retrieval system to complement the model's responses, based on the available latency and the complexity it introduces to your system.
	- **Fine-tune on Specific Data:**
		- When adjustments and retrieval integrations aren't sufficient, proceed to fine-tune the model on a targeted dataset. This step tailors the model more closely to your specific requirements.
	- **Swap for a Larger Model or Pre-train Your Own:**
		- If fine-tuning does not achieve the desired outcomes, consider swapping in a larger pre-trained model or pre-training your own model for more significant customization and improvement.
		- This can involve domain adaptation through further pre-training on a relevant corpus, followed by fine-tuning.
	- **Iterate and Add Complexity as Necessary:**
		- Continue iterating, adding layers of complexity only as needed. This approach ensures that you only invest in higher compute and development costs when there's a clear benefit.
	- **Simplify and Streamline for Deployment:**
		- Throughout this process, aim to simplify and streamline solutions for deployment. Consider the target audience and operationalize the solution in a way that makes it accessible and practical for them.
		-

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
						- `lightningNode`: (`xsd:string`) The public key of the agent's Lightning Network node.
				- **VirtualEconomy:**
					- **Properties:**
						- `bitcoinNetwork`: (`linkedjson:ObjectProperty`, `range`: `schema:ComputerNetwork`) Represents the Bitcoin network on which the economy operates.
						- `lightningNetwork`: (`linkedjson:ObjectProperty`, `range`: `schema:ComputerNetwork`) Represents the Lightning Network facilitating faster and cheaper transactions.
				- **Cashu Integration**:
					- **Properties**:
						- `cashuWallet`: (`linkedjson:ObjectProperty`, `range`: `schema:DigitalWallet`) Represents the Cashu wallet associated with the metaverse agent. This wallet manages the agent's Chamium eCash balance.
						- `cashuNode`: (`xsd:string`) The identifier for the Cashu federation node that the agent's wallet is associated with, facilitating eCash transactions.
					- **Cashu Economy**:
						- **Properties**:
							- `chamiumEconomy`: (`linkedjson:ObjectProperty`, `range`: `schema:EconomicSystem`) Represents the part of the virtual economy that operates using Chamium eCash, allowing for private and instant transactions.
							- `ecashTransactions`: (`linkedjson:ObjectProperty`, `range`: `schema:ItemList`) List of transactions executed using Chamium eCash, supporting privacy and micro-transactions within the metaverse.
					- **Transaction Privacy**:
						- **Properties**:
							- `privacyLevel`: (`xsd:string`) Defines the level of privacy for transactions conducted by the agent, with options including Bitcoin, Lightning, or Cashu Chamium eCash, each offering different degrees of privacy and speed.
					- **Cashu Services**:
						- **Classes**:
							- `CashuService`: Represents services within the metaverse that specifically use or provide Cashu Chamium eCash functionalities, such as eCash exchanges, payment processing, or private transactions.
								- **Properties**:
									- `serviceType`: (`xsd:string`) The type of service offered, such as eCash exchange, payment gateway, or privacy service.
									- `accessEndpoint`: (`xsd:anyURI`) The URL or identifier where the service can be accessed within the metaverse.
			- **NVIDIA Omniverse:**
				- **MetaverseScene:**
					- **Properties:**
						- `omniverseNucleusUrl`: (`xsd:anyURI`) The URL of the Omniverse Nucleus server hosting the scene.
						- `usdFile`: (`xsd:anyURI`) The URL or reference to the USD file defining the scene's content.
				- **USD Variance:** Define properties or subclasses within `SceneObject` to represent USD variations and the conditions under which they are activated.
				- **Scene Schema Scaffolding:** Exploring Linked-JSON structures to emulate the more expressive OWL `owl:oneOf` and `owl:someValuesFrom`.
					- Linked-JSON representation for `SceneType`:
					  ```text
					  {
					    "@id": "metaverse:SceneType",
					    "@type": "linkedjson:Class",
					    "rdfs:label": "Scene Type",
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

	- ### Trust and Control
		- Privacy-centric design—like zero-knowledge proofs—can soothe data security fears.
		- Allowing users to trade limited data insights for discounted micropayment rates offers a balance between personalisation and confidentiality.

	- ### Data Privacy
		- Centralised micropayment processors can create surveillance risks.
		- Decentralised frameworks (e.g., [[Nostr]] and the [[Lightning Network]]) reduce some vulnerabilities but require robust regulatory clarity.

	- ## The evolving US position
		- In most regards the legislative front line is happening in the USA. Treasury Secretary Yellen responded to the collapse of Terra/UST [saying that](https://www.youtube.com/watch?v=kU0xYBRfgvU): it“A comprehensive regulatory framework for US dollar stable coins is needed”. She also said that the stablecoin market is too small to pose systemic risk at this time. This is clearly an evolving situation, but the incredible consumer exposure to these risky products is likely to elicit a swift and significant response, and the timing seems right for intervention. The markets suggest that USDC will be the eventual winner.
		- Koning meanwhile has looked into the different [regulatoryapproaches](http://jpkoning.blogspot.com/2021/08/stablecoin-regulatory-strategies.html)used by various stablecoins.
			- The highly regulated New York state financial framework (Paxos, Gemini)
			- Piggyback off of a (Nevada) state-chartered trust \[TrueUSD, HUSD\]
			- Get dozens of money transmitter licenses \[USDC\]
			- Stay offshore \[Tether\]
		- [Proposedlegislation](https://www.americanbanker.com/news/toomey-unveils-stablecoin-bill-granting-occ-authority-for-payments-charter)specific to the concept of stablecoins has been advanced by Sen Toomey.There are many provisions in the bill, mostly pertaining to convertibility and the ever present problem of attestation of the‘backing’ of these products. Mention has already been made of the major bill advanced by Sen. Lummis and Gillibrand. This bill also includes significant provision around stablecoins. Lummis said it “Stablecoinswill have to be either FDIC insured or more than 100% backed by hard assets.”. This is good news for this section of the digital asssets space.
		- Crucially there is also more clarity on privacy. This is a huge threatfrom digital money systems, and the USA is likely to lead. Remember though that none of this is yet law.
		- Valkenburg, the lead researcher of a US think tank in digital assets[says thefollowing](https://twitter.com/valkenburgh/status/1511783339065237521):it“Stablecoin TRUST Act, is a discussion draft mostly about stablecoins,but it also has important privacy protections for crypto users broadly:it puts real limits on warrantless surveillance by narrowing what info can be collected from third parties. Last summer we fought a provision in the infrastructure bill that damaged the privacy of crypto users by expanding the broker definition (who needs to report information about transactions to the IRS) & crypto 6050I reporting (reports on businessvtransactions over $10,000). The winter before we fought and successfully delayed a rushed proposal from the outgoing Trump administration tomandate that exchanges collect information about persons who are nottheir customers, who hold crypto at addresses in wallets they control directly. the Stablecoin TRUST Act would stop these encroachments,constrain the treasury from collecting any non public information unless they get a search warrant or collect only information voluntarily provided to an exchange by a customer and for a legitimate business purpose. If “voluntarily provided for a legitimate business purpose”sounds familiar to you, that’s b/c it’s the constitutional standard articulated by the Court in Carpenter describing LIMITED circumstances where warrantless searches of customer data are ok.It’s the standard we’ve advocated must also limit warrantless data collection at cryptoexchanges. If exchanges must collect information about non-customers,that information is, by definition, not voluntarily provided for a legitimate business purpose.”
		- The ongoing battle for control over emerging stablecoins by the CFTC andthe SEC [seems to be pushing](https://www.reuters.com/legal/transactional/presidents-working-group-report-calls-stablecoin-regulation-2021-12-02/)the American government into legislation. They have [published a draftbill](https://docs.house.gov/meetings/BA/BA21/20230419/115753/BILLS-118pih-Toproviderequirementsforpaymentstablecoinissuersresearchonadigitaldollarandforotherpurposes.pdf)and there have been some congressional hearings over the matter. At this time the bill is nascent, and there are as yet no firm decisions, thoughas seems typical in the USA there are hardening opinions along political lines.

		- ##### Key Ideas
		- 1.  **Leveraging AI and Contextual Data:** The venue will use AI and contextual data to create dynamic narratives and activities tailored to each visitor in real-time. This will revolutionize the resort experience, making it highly personalized and immersive. However, the implementation of AI must be mindful of privacy concerns and be done in a way that respects the data sovereignty of the guests.
		- 2.  **Tailored Personalization:** Visitors should have the ability to opt into different levels of personalization. Some may want a fully immersive, personalized experience, while others may prefer a more ‘hands off’ experience. This is an important aspect of respecting individual preferences and ensuring that all visitors feel comfortable and catered for.
		- 3.  **Communication Devices:** Various communication devices could be utilized within the resort to facilitate interactions between visitors and the AI system. These could include badges, wands, glasses, headphones, etc. Each of these devices would contribute to the immersion and thematic consistency of the resort while serving a practical purpose.
		- 4.  **Biometrics:** The use of biometrics such as gaze tracking and gesture recognition could allow the AI to understand visitor preferences passively. This technology could be incorporated in a non-intrusive way to augment the guest experience without breaching privacy.
		- 5.  **Data Extraction:** Visitors should have the ability to extract their distilled data or creations, enabling them to continue their vistor experience at home. This could also open up new possibilities for visitors to create and share their own narratives based on their visit experiences. To be clear this should not be the raw data supplied to the venue inferencing engines (which should be destroyed soon after use), but rather a distilled narrative of the inference from the system.
		- 6.  **Data Privacy:** Data sharing should be underpinned by robust privacy controls to ensure guest data sovereignty. It’s crucial to maintain the trust of the visitors by demonstrating a strong commitment to privacy. This should be externally audited on a regular cadence.
		- 7.  **Continuous Experience:** The visitor experience should feel continuous before, during, and after the visit. However, it’s important to manage guest expectations and avoid over promising pre-visit AI interactions. Ensuring a smooth transition between these stages will enhance the overall guest experience.
		- 8.  **Hyper-Personalization:** Hyper-personalization should span the venue. This level of detail will ensure each guest has a unique and highly personalized experience.
		- 9.  **Adaptive and Immersive Experiences:** The core aim should be to craft continuously adaptive and immersive experiences based on visitor needs and implied preferences. By doing so, the venue can ensure each visitor has a unique, enjoyable, and highly memorable experience, supportive of return visits.
		- The integration of these concepts will require careful planning and
		  execution, but the result could be a venue experience like no other, one
		  that caters to each individual guests and provides an experience that
		  extends beyond the confines of the experience itself.

		- ### AI Leviathan
	 - **State Surveillance and Control:** Explores the potential for states to extend their surveillance capabilities and tighten control over citizens using advanced AI, leading to an Orwellian future where privacy is virtually nonexistent.
	 - **Implications for Democracy:** Discusses the challenges this scenario poses to democratic norms and individual freedoms, with a focus on the trade-offs between security and liberty.

		- ### Intelligence Explosion and Societal Shift
	 - **Hypothetical Breakthroughs:** Details scenarios where AI breakthroughs, akin to everyone having x-ray style glasses, could radically challenge existing norms around privacy, security, and human interaction.
	 - **Radical Transparency Challenges:** Discusses the implications of such breakthroughs on societal norms, legal frameworks, and individual behaviors, stressing the need for society to anticipate and adapt to these transformative changes.

		- ### AI as an Informational Tool
	 - **Increasing Information Resolution:** Describes AI's ability to significantly enhance our understanding of the world, from refactoring legacy code to restoring ancient scrolls, and detecting galaxies in old surveys.
	 - **Privacy Risks:** Discusses the significant privacy risks posed by AI's ability to turn everyday signals into identifiable data, stressing the need for robust privacy protections and ethical considerations.

		- ### Oppression Risks
	 - **Surveillance Capabilities:** Explores the risks of AI-enhanced surveillance, detailing how pervasive monitoring could lead to oppressive societal structures and a significant loss of privacy and autonomy.
	 - **Privacy Invasions:** Details the ways in which AI's ability to analyze and interpret personal data can lead to invasions of privacy, emphasizing the need for robust legal protections and ethical constraints.

	- ### 3.  **Verifiable Credentials (VCs)**
	- **Overview**: VCs are a standard for conveying claims about an identity in a way that is cryptographically secure, privacy-respecting, and machine-verifiable.
	- **Use Cases**: They are used in scenarios ranging from proving educational qualifications and professional certifications to identity verification online without revealing unnecessary personal information.

	- # AI's Impact on Power, Privacy, and Personal Sovereignty
		- **Concentration of Power in AI:**
			- **Corporate Dominance:**
				- Major tech companies are not just developing AI but are shaping its very direction and application.
				- These companies' influence leads to potential monopolistic control, affecting competition and innovation.
				- **Deeper Insight:** The consolidation of power in the AI sector creates barriers for smaller players, leading to a lack of diversity in AI development and potential biases in AI systems.
			- **Economic and Resource Inequality:**
				- AI's development requires substantial resources, creating a disparity between entities that can afford these resources and those that cannot.
				- This disparity widens the gap between large corporations and smaller entities, including academic institutions and startups.
				- **Deeper Insight:** The economic divide in AI reinforces existing power structures, where the entities with the most data and computational power dictate AI's evolution and application.
		- **Gating of Information:**
			- **Access Control by AI:**
				- AI systems, often proprietary, control the flow and accessibility of information.
				- This control can lead to information gatekeeping, where only certain narratives or perspectives are amplified.
				- **Deeper Insight:** AI's role in content recommendation and news dissemination can skew public perception and understanding, potentially leading to echo chambers.
			- **Transparency and Accountability:**
				- There is a lack of transparency in how AI algorithms function and make decisions.
				- This opaqueness makes it difficult for the public to understand or challenge AI-driven decisions.
				- **Deeper Insight:** Without transparency, AI systems can perpetuate biases and errors unchecked, leading to harmful societal impacts.
		- **Privacy and Personal Sovereignty:**
			- **AI as a Surveillance Tool:**
				- AI technologies, particularly in facial recognition and behavior prediction, are increasingly used for surveillance, infringing on individual privacy.
				- These technologies can track and analyze personal data without explicit consent, raising ethical concerns.
				- **Deeper Insight:** The widespread use of AI in surveillance erodes personal freedoms and privacy, leading to a society where every action can be monitored and analyzed.
			- **Data Exploitation and Consent:**
				- The collection and use of personal data for AI training often occur without clear consent from individuals.
				- Data subjects rarely have control over how their data is used, contributing to the erosion of personal sovereignty.
				- **Deeper Insight:** The lack of control over personal data signifies a shift in power dynamics, where individuals have little say in how their information is utilized and monetized.
		- **Erosion of Rights and Labor Exploitation:**
			- **Impact on Workers' Rights:**
				- Automation and AI threaten traditional jobs, leading to job insecurity and changes in labor dynamics.
				- Workers are often required to train AI systems that may eventually replace them, raising ethical questions about labor rights.
				- **Deeper Insight:** The transition towards an AI-driven economy necessitates a reevaluation of labor laws and protections to safeguard workers' rights in a changing landscape.
			- **Ethical Concerns in AI Training:**
				- The human labor involved in AI training, especially in content moderation, is often underappreciated and underpaid.
				- Workers are exposed to harmful content, impacting their mental health, with little support or recognition.
				- **Deeper Insight:** The reliance on human labor for AI's 'intelligence' contrasts with the narrative of AI as an autonomous, advanced technology, highlighting the need for better working conditions and ethical standards in AI development.
		- **Future Outlook and Regulations:**
			- **Regulatory Challenges:**
				- The pace of AI development outstrips the current regulatory framework, leading to gaps in governance and oversight.
				- There is a need for comprehensive laws that address privacy, transparency, and the equitable use of AI.
				- **Deeper Insight:** Effective regulation of AI requires a multidisciplinary approach, involving lawmakers, technologists, ethicists, and the public to ensure that AI serves the common good without infringing on individual rights.
			- **Personal Sovereignty in the Digital Age:**
				- As AI becomes more integrated into daily life, maintaining personal sovereignty over data and privacy becomes increasingly challenging.
				- Individuals must be empowered with knowledge and tools to navigate this landscape and protect their digital rights.
				- **Deeper Insight:** Fostering a culture of digital literacy and advocating for stronger privacy protections are essential steps in ensuring that individuals retain control over their personal data in an AI-driven world.

	- ## Societal and Ethical Considerations
		- Addressing AI-related societal and ethical challenges, focusing on transparency, fairness, and accountability.
		  background-color:: red
		- Public discourse on AI's implications on privacy, employment, and societal norms.
		  background-color:: green

	- ## [[Politics, Law, Privacy]]
		- 🟢 Half the world goes to the polls this year. More than 50 countries, 4B people.
		- [How OpenAI is approaching 2024 worldwide elections](https://openai.com/blog/how-openai-is-approaching-2024-worldwide-elections)
		- It's not just deepfakes, but adverts, and influencer material on social media. 100x the number with 1/10th the engagement is still a 10x positive for free.
			- 🟢 This is Professor [Ethan Mollick | LinkedIn](https://www.linkedin.com/in/emollick/) using HeyGen and 30s of footage to create a deepfake.
			- [One Useful Thing | Ethan Mollick | Substack](https://www.oneusefulthing.org/) [[Education and AI]] and [[Proprietary Large Language Models]] blog
				- His most recent post is [Signs and Portents](https://www.oneusefulthing.org/p/signs-and-portents) and you should check it.
			- ![1704433632082.mp4](assets/1704433632082_1704449202180_0.mp4)
		- Autodial chatbots that can have plausible and convincing conversations with voters. I briefly saw someone had made one of these using a $20 GPT subscription.
		- ![image.png](assets/image_1704292836040_0.png)
		- [Kyle Taylor: books, biography](https://www.amazon.co.uk/stores/Kyle-Taylor/author/B09G759JR3?)
		- He talks about something I have similarly been saying:
			- In the event of a complete breakdown of trust in digital information channels people will simply choose only to trust their priors.
			- This is a fracturing of the information space, effectively bubbles of one. [[Death of the Internet]] [[Social contract and jobs]]

	- ### Web things
		- [[Semantic Web]]
		- [[Spatial Web]]
		- [[Decentralised Web]]
		- [[Politics, Law, Privacy]]

	- ## Key Features
		- VisionFlow's features emphasize real-time interaction, privacy, and extensibility.

		- ## Privacy and Data Protection Concerns

			- ### Pervasive Surveillance
				- The deployment of advanced AI systems for surveillance at the 2024 Olympics has raised several privacy concerns:
				- **Continuous Monitoring:** These AI systems enable continuous, round-the-clock monitoring of individuals, capturing detailed data on their movements and behaviours. This level of surveillance is unprecedented and poses significant risks to personal privacy.
				- **Behavioural Analysis:** AI can track and analyse patterns in individuals' movements and behaviours, potentially revealing sensitive information about their personal lives. This capability raises ethical questions about the extent of surveillance that is acceptable in a democratic society.

	- ### Ensuring Safeguarding and Privacy Compliance:
		- Protecting user privacy and ensuring safeguarding is vital for any digital society platform. The open-source system must be developed in compliance with legislative and cultural norms while maintaining the balance between user privacy and the need for identity verification and data management. The evidence that social media is damaging youth mental health is very compelling. The Centre for Humane Technology calls social media the 'first contact point' with AI, explaining that new technologies often create an arms race. The underlying arms race for attention led to what they call 'an engagement monster' that rewrote the rules of society. These lessons should be learnt and the problems should be proactively mitigated. This proposal is not a social metaverse, and deliberately limits both numbers of participants and avatar optionality.

							- ### Preference Setup
								- Configuring privacy settings, accessibility options, and other preferences.
								- Utilizing the PrivacySetting entity from the ontology.
								- Example Linked-JSON snippet:
									- ```json
									  {
									    "@id": "narrativegoldmine:PrivacySetting",
									    "@type": [
									      "narrativegoldmine:Class",
									      "Linked-JSON:Class",
									      "http://www.w3.org/2002/07/owl#Class"
									    ],
									    "http://www.w3.org/2000/01/rdf-schema#comment": [
									      {
									        "@value": "Represents an agent's privacy preferences within the metaverse."
									      }
									    ],
									    "http://www.w3.org/2000/01/rdf-schema#label": [
									      {
									        "@value": "Privacy Setting"
									      }
									    ]
									  }
									  ```

				- ## Enhanced Privacy and Security
					- Self-sovereign identity and privacy-preserving technologies empower users to control their data and protect their privacy.

	- ### Security and Privacy
	  
	  Implement appropriate safeguards:
	- Limit access to sensitive systems and data
	- Monitor agent actions and decisions
	- Implement authentication and authorisation
	- Consider data privacy implications
	- Plan for incident response and recovery
	-
	-
-
	- [Jack Burlinson on X: "In case you were wondering just how cracked the team @cognition_labs is... This was the CEO (@ScottWu46) 14 years ago. https://t.co/UqXTYGVKzO" / X (twitter.com)](https://twitter.com/jfbrly/status/1767653596957642879)
	- {{twitter https://twitter.com/jfbrly/status/1767653596957642879}}
	- <iframe src="https://www.adept.ai/" style="width: 100%; height: 400px"></iframe>
	- <iframe src="https://www.openinterpreter.com/01" style="width: 100%; height: 400px"></iframe>
- **Automating Repetitive Tasks**:
	- AI offers the potential to automate mundane digital chores. This can revolutionize job efficiency and free up human resources for more creative and complex tasks.
	- The development of multimodal models and reinforcement learning is paving the way for richer, more intuitive user experiences, expanding AI's role in everyday life.
- **Logical Reasoning and Decision-Making**:
	- AI models currently struggle with complex logical reasoning, which impacts their decision-making abilities in nuanced tasks. This limitation is a critical area for future advancements.
- **Adaptation to New Environments and Online Learning**:
	- AI agents need substantial improvements in adapting to new environments and in their capability for online learning. This is crucial for their effective deployment in various real-world scenarios.
- **Navigating Complex Web Interfaces**:
	- Both humans and AI agents find it challenging to navigate and interpret complex web interfaces. This underscores the need for AI systems to improve their adaptation and learning mechanisms.
- **Data Privacy and Ethical Use**:
	- The use of personal data in AI training raises significant ethical concerns. There is a pressing need for stringent measures to responsibly handle personal identifiable information and ensure user privacy.
- **Cost and Efficiency Balancing**:
	- A major challenge lies in running sophisticated AI models economically while maintaining high efficiency. This concern becomes increasingly significant as the technology scales.
	- <iframe src="https://www.theinformation.com/articles/to-unlock-ai-spending-microsoft-openai-and-google-prep-agents" style="width: 100%; height: 400px"></iframe>
		- [To Unlock AI Spending, Microsoft, OpenAI and Google Prep ‘Agents’ — The Information](https://www.theinformation.com/articles/to-unlock-ai-spending-microsoft-openai-and-google-prep-agents)

	- ### Privacy and Surveillance
		- The use of AI in areas such as facial recognition and data analysis raises concerns about privacy and the potential for increased surveillance.

- # A Quick History
	- The 1980s saw the emergence of the [[cypherpunk]] activist movement, as a reaction to the emerging [[Digital Society Surveillance]] state,[[burnham1983rise; @chaum1985security]] a topic which is expanded in [[Digital Society Surveillance]] and [[Global Inequality]] . These early computer scientists in the USA saw the intersectionality between information, computation, economics, and personal freedom.[[lavoie1990prefatory]] Online discussion in the early nineties foresaw the emergence of trans-national digital markets, what would become the WWW.[[salinCosts; @cypherPunkMailList]] The issues of privacy and the exchange of digital value (digital /ecash) were of foremost importance within these discussions and while privacy was within reach thanks to [“public/private keypairs”](https://www.openpgp.org/about/history/), ecash proved to be amore difficult problem.
	- Adam Back’s 1997 ‘hashcash’[[back2002hashcash]] paved the way for later work by implementing the concept of what would become ‘proof of work.’[[dwork1992pricing; @jakobsson1999proofs]] This was built upon by Dai,[[dai1998b]] Szabo,[[szabo1997formalizing]]Finney,[[callas1998openpgp]] and Nakamoto amongst others. In all it took16 years of collaboration on the mailing lists (and dozens of failed attempts) to attack the problem of trust-minimised, distributed, digital cash. The culmination of these attempts was Bitcoin.[[Nakamoto2008]]
	- This is illustrated by Dan Held.
		- ![image](./assets/10392f6889e4be99247a0cf832f5628e3b017f5e.jpg){:width 800}
	- Dan Held: <a href="https://www.danheld.com/blog/2019/1/6/planting-bitcoinsoil-34">Bitcoin prehistory</a> used with permission.
- This is now a wider ecosystem of technologies and societal challenges.
	- ![image](./assets/2f03939e7360fa432ab47028bf32284b0088e385.jpg){:width 600}
		- {{twitter https://twitter.com/djvalerieblove/status/1514703620272394243/}}
		- used with permission @djvalerieblove.
- There is enormous complexity and scope, as seen in below, and yet genuinely useful products are elusive.
	- ![image](./assets/c157c8cd52e86b9bf30f9c4a5e5a28b226027ce5.png){width 800}

		- ### Generating a Secret for Blind Signatures
			- Implement JavaScript code to generate a new secret key. This key will be essential for creating blind signatures, a cornerstone of Cashew's privacy features.
			- Utilize cryptographic libraries available in JavaScript for secure key generation.

		- ### Requesting a Blinded Signature from the Mint
			- Once the invoice payment is confirmed, request a blinded signature for a specified ecash amount from the mint. This signature is necessary for the mint to acknowledge your ecash holdings without compromising privacy.

		- ### Unblinding the Signature
			- Use the previously generated secret key to unblind the mint's signature. This process converts the blinded signature into a form usable for transactions while maintaining the integrity of the privacy guarantees.

		- #### User Privacy
		- The user's knowledge base is kept local to their device, using hashes to retrieve personalised content, which enhances [[Politics, Law, Privacy]] by avoiding centralized data collection and tracking.
		- [[Hyper personalisation]] and Dynamic Creative Optimisation (DCO)
		- The system delivers content optimised for the user's language, environment, age, and other demographic factors using AI-powered multi-modal product representations.
		- DCO techniques dynamically adapt and optimise creative elements in real-time based on user interactions and preferences.

	- ### `ideas.json`
	  ```json
	  [
	    {
	        "Name": "local_ai_personalization",
	        "Title": "Client-Side AI for Hyper-Personalization: Enhancing User Experience While Preserving Privacy",
	        "Experiment": "Develop a client-side AI system that uses local embeddings to personalize content based on user preferences and interactions. The system will generate personalized multimedia assets in real-time, using local data while maintaining privacy by not sharing any data with external servers. Evaluate the system's performance in terms of user engagement, content relevance, and privacy preservation.",
	        "Interestingness": 8,
	        "Feasibility": 7,
	        "Novelty": 8,
	        "novel": true
	    },
	    {
	        "Name": "nostr_dynamic_content_optimization",
	        "Title": "Dynamic Content Optimization Using Nostr Relay Protocol: A Decentralized Approach",
	        "Experiment": "Implement a dynamic content optimization system that leverages the Nostr relay protocol for real-time content delivery. The system will match content from a distributed network of vendors to users based on locally generated embeddings. Test the system's effectiveness in delivering relevant content while preserving user data sovereignty and minimizing latency.",
	        "Interestingness": 9,
	        "Feasibility": 7,
	        "Novelty": 8,
	        "novel": true
	    },
	    {
	        "Name": "privacy_preserving_dco",
	        "Title": "Privacy-Preserving Dynamic Creative Optimization: Leveraging Local AI and Heuristic Matching",
	        "Experiment": "Design a DCO system that operates entirely on the client side, using heuristic matching to personalize marketing content. The system will use local AI to generate and optimize creative assets without sending any data to external servers. Assess the system's ability to balance personalization and privacy, and compare its performance with traditional server-based DCO systems.",
	        "Interestingness": 9,
	        "Feasibility": 8,
	        "Novelty": 9,
	        "novel": true
	    },
	    {
	        "Name": "vendor_embedding_optimization",
	        "Title": "Optimizing Vendor Embeddings for Multimedia Content Personalization",
	        "Experiment": "Develop a system that creates and optimizes vendor embeddings to personalize multimedia content for users. The system will use local AI to match user preferences with vendor content, ensuring high relevance while preserving privacy. Evaluate the quality of the personalized content and the effectiveness of the embedding optimization.",
	        "Interestingness": 8,
	        "Feasibility": 7,
	        "Novelty": 8,
	        "novel": true
	    },
	    {
	        "Name": "multimodal_asset_generation",
	        "Title": "Multimodal Asset Generation Using Local AI and Nostr Protocol",
	        "Experiment": "Create a system that generates personalized multimodal assets (e.g., text, images, videos) using local AI models. The system will use the Nostr relay protocol to pull relevant content from vendors and integrate it into the user's local environment. Test the system's ability to deliver high-quality personalized content without compromising user privacy.",
	        "Interestingness": 9,
	        "Feasibility": 7,
	        "Novelty": 8,
	        "novel": true
	    }
	  ]
	  ```
	  
	  ---

	- ### `prompt.json`
	  ```json
	  {
	    "system": "You are an innovative AI researcher focused on exploring the intersection of privacy, personalization, and decentralized content delivery.",
	    "task_description": "You are provided with the following file to work with, which explores various approaches to client-side hyper-personalization, dynamic creative optimization, and dynamic content optimization using the Nostr relay protocol, embeddings, and local AI. Your task is to develop a series of small-scale experiments to investigate the potential and challenges of these approaches."
	  }
	  ```
	  
	  ---

- # Extended Reality / Mixed Reality / [[Spatial Computing]]
	- XR (VR/AR/MR) will eventually become the primary way we interact with digital information, as it aligns with how our brains naturally process information in 3D space. The merging of the physical and digital worlds is inevitable
	- The metaverse, while currently overhyped, ultimately represents the future of an interconnected network of virtual worlds. As XR technology advances, we will increasingly operate in virtual worlds as naturally as we do in the physical world today
	- The early metaverse will start off as walled gardens controlled by large tech companies. However, it's plausible that more open standards, interoperability, and decentralization will emerge over time, similar to the evolution of the early Internet
	- Bystander privacy is a major concern with always-on AR glasses and headsets. People may have their data captured without consent just by being in the presence of someone wearing XR devices
	- XR and AI are highly complementary and will help address each other's limitations. AI will make the metaverse possible, while the metaverse will provide an outlet for human creativity and self-actualization in a post-labor world
	- XR has the potential to greatly enhance fields like medicine, education, and industrial design by providing rich spatial computing interfaces.
	- The lack of compelling content and experiences has been a limiting factor for XR adoption. However, AI-generated assets could help solve this content bottleneck and enable the rapid creation of photorealistic virtual worlds
	- Privacy and security remain ongoing concerns in XR ecosystems, as they capture even more biometric and behavioral data than traditional computing interfaces
	- VR in particular still faces physiological challenges around multi-sensory immersion (e.g. locomotion) that will need to be solved before the technology can go fully mainstream

- # Convergence
	- The intersection of AI, XR, and open, decentralized networks represents a powerful convergence of technologies that could reshape the fabric of our social and economic lives. By leveraging the unique strengths of each domain
		- the immersive power of XR, the intelligence and adaptability of AI, and the openness and composability of decentralized protocols
		- we can create a more vibrant, dynamic, and equitable digital future. However, realizing this potential will require careful design, collaboration, and governance to ensure that these technologies develop in a way that promotes human agency, privacy, and flourishing.
	-
	- AI and XR are deeply intertwined and mutually reinforcing technologies
		- AI is a critical enabler for XR, powering key functionalities like environment understanding, natural interaction, and content creation
		- XR provides a rich, immersive interface for AI systems to interact with humans and the physical world
	- The combination of AI and XR will give rise to new forms of human-machine collaboration and augmentation
		- AI-powered virtual assistants will be deeply integrated into XR environments, providing real-time guidance, knowledge, and skills enhancement
		- XR will provide a spatial computing platform for AI systems to learn from and interact with the world in more natural and intuitive ways
	- The intersection of AI and XR will blur the lines between the physical and digital worlds
		- AI will enable the creation of photorealistic virtual environments that are increasingly indistinguishable from reality
		- XR will allow for seamless blending of digital content and experiences into the physical world, creating a unified "metaverse"
	- AI and XR will intersect to create new forms of social interaction and collaboration
		- AI-driven avatars and agents will facilitate rich, immersive social experiences in virtual worlds
		- XR will provide a shared spatial context for humans and AI systems to interact and collaborate in real-time
	- The intersection of AI and XR will give rise to new economic models and value creation opportunities
		- Virtual goods, experiences, and services will become increasingly valuable in immersive XR environments
		- AI will enable the creation of personalized, adaptive, and intelligent virtual assets and experiences
	- The combination of AI and XR will raise new ethical and societal challenges
		- The blurring of physical and digital reality may have profound impacts on privacy, identity, and social norms
		- The increasing power and pervasiveness of AI systems in XR environments may raise concerns around control, transparency, and accountability
	- Open, decentralized networks will be critical for enabling seamless value transfer and interoperability in the metaverse
		- Centralized, walled-garden approaches will limit innovation and user choice
		- Open standards and protocols will allow for greater composability and network effects
	- Blockchain technologies like Bitcoin, particularly with Layer 2 and Layer 3 solutions, can provide a foundation for secure, efficient, and scalable value transfer in XR/AI ecosystems
		- Bitcoin's decentralized, trustless architecture aligns well with the open, permissionless ethos of the metaverse
		- Layer 2 solutions like Lightning Network can enable fast, low-cost microtransactions for virtual goods and services
		- Layer 3 protocols can enable additional functionality and interoperability on top of the core Bitcoin blockchain, including governance models
	- Cryptographic tokens and smart contracts can enable new forms of value creation, ownership, and exchange in XR/AI environments
		- Unique and fungible digital objects (RGB20/21) can provide provable ownership and scarcity for virtual assets at scale
		- Decentralised autonomous organizations (DAOs) can enable new forms of community governance and collaboration
	- Interoperability and composability will be key for enabling value transfer across different XR/AI platforms and experiences
		- Open standards for identity, asset ownership, and data portability will allow users to seamlessly move between virtual worlds
		- Bridges and cross-chain protocols can enable value transfer and communication between different blockchain networks
	- Decentralised finance (DeFi) protocols can provide new avenues for earning, investing, and monetising value in XR/AI ecosystems
		- Virtual real estate, goods, and services can be tokenized and traded on decentralized exchanges
		- Lending, borrowing, and staking protocols can provide new ways to generate yield and incentivize participation
	- Privacy and security will be critical considerations for value transfer in open XR/AI networks
		- Zero-knowledge proofs and other advanced cryptographic techniques can enable privacy-preserving transactions and interactions
		- Multi-party computation and secure enclaves can allow for trustless collaboration and data sharing between AI agents
-
- [Disney invests $1.5bn in Fortnite maker Epic Games to create new ‘universe’ | Walt Disney Company | The Guardian](https://www.theguardian.com/film/2024/feb/07/disney-fortnite-merger-epic-games-new-universe)
-

- # Surveillance Capitalism
	- Surveillance capitalism is a term coined by Harvard Business School professor Shoshana Zuboff to describe the business model of using data collected from individuals to target advertising and influence behaviour. The concept of surveillance capitalism emerged in the late 20th and early 21st centuries with the rise of technology companies thatspecialize in gathering and analyzing personal data.
	- The history of surveillance capitalism can be traced back to the early days of the internet. In the 1990s, companies such as DoubleClick andOmniture began collecting data on internet users’ browsing habits inorder to target advertising. As the internet grew in popularity, these companies were able to gather an increasing amount of data on individuals, allowing them to more effectively target advertising and increase profits.
	- The advent of smart phones and mobile technology in the 2000s further expanded the reach of surveillance capitalism. With the widespread adoption of smart phones and mobile apps, companies were able to collect even more data on individuals, including location data and information about their physical activity. This data was used to target advertising and influence behaviour, leading to the rise of companies such as Google and Facebook, which have become dominant players in the digital advertising market.
	- The use of data collected from individuals to influence behaviour has also been used to influence political campaigns. In the 2016 USpresidential election, Cambridge Analytica, a data analytics firm, used data collected from Facebook users to influence voter behaviour. The firm used the data to target advertising and create psychological profiles of individuals, allowing them to more effectively influence voter behaviour.
	- The business model of surveillance capitalism has been widely criticised for its ethical implications. Critics argue that the collection and useof personal data without consent is a violation of individuals’ privacyand that the use of data to influence behaviour is manipulative and unethical. In recent years, there have been calls for greater regulationof the tech industry to address these concerns.
	- Surveillance capitalism has led to significant compliance overheads for companies that collect and use personal data. There are a number of laws and regulations that have been put in place to protect individuals’ privacy, such as the General Data Protection Regulation (GDPR) in theEuropean Union and the California Consumer Privacy Act (CCPA) inCalifornia, USA. These laws require companies to obtain consent from individuals before collecting and using their data, and to provide individuals with the right to access, correct, and delete their data.
	- Complying with these laws can be costly and time-consuming for companies. They may need to hire additional staff to handle data privacy compliance, and may also need to invest in new technology to manage andprotect personal data. In addition, companies are at risk of significant fines if they fail to comply with these laws.
	- In terms of who profits from surveillance capitalism, the primary beneficiaries are technology companies such as Google and Facebook,which have become dominant players in the digital advertising market.These companies collect and analyse large amounts of personal data,which they use to target advertising and influence behaviour. This allows them to generate significant profits from advertising revenue.
	- On the other hand, those who suffer the most negative impact from surveillance capitalism are individuals, whose personal data is collected and used without their consent. They are also at risk of theirprivacy being violated, and their personal data being misused. Additionally, the collection and use of personal data can lead to themanipulation of individuals’ behaviour and decision-making, which can have negative consequences for their lives and society at large.
	- Moreover, the business model of surveillance capitalism has also been criticized for creating a power imbalance between companies and individuals. Companies have access to vast amounts of personal data,which they can use to influence behaviour and make decisions that affect individuals’ lives. This can lead to a lack of privacy and autonomy for individuals, and can also lead to discrimination and bias indecision-making.
	- This is collectively an erosion of the demarcation between data, state surveillance, banking, and political leadership globally.
	- The term "surveillance state" refers to a state in which government agencies have the power to collect and analyze large amounts of personal data, often without the consent of individuals. The rise of surveillance capitalism has led to concerns about the potential for the creation of a surveillance state, as government agencies may use the data collected by companies for surveillance purposes.
	- There have been instances where government agencies have used data collected by companies for surveillance purposes. For example, in theUnited States, the National Security Agency (NSA) has been accused of using data collected by companies such as Google and Facebook for surveillance purposes. The agency’s PRISM program, which was revealed byEdward Snowden in 2013, was designed to collect and analyse data from internet companies in order to identify and track individuals. Europe is[clear about it’sintentions](https://www.patrick-breyer.de/en/posts/chat-control/) to mandate their complete access to all encrypted personal communications in forthcoming legislation.
	- The use of data collected by companies for surveillance purposes canhave significant implications for individuals’ privacy and civil liberties. It can also lead to a lack of transparency and accountability, as government agencies may use the data without the knowledge or consent of individuals. In addition, the use of data for surveillance purposes can lead to discrimination and bias indecision-making, as well as a chilling effect on free speech and the exercise of other rights.
	- Akten has been [talkingabout](https://memoakten.medium.com/all-watched-over-by-machines-of-loving-grace-8c2464aa6fda)the phase transition from digital surveillance to pernicious corporateAI in terms of a modern ‘religion’ for many years.[[bayer2023artificial]]He feels that despite public awareness of privacy invasion, there hasbeen no significant outcry or unanimous demand for privacy. Instead,most individuals seem to find comfort in the belief that a higher forceis watching and protecting the virtuous, while punishing wrongdoers. The concept of a ‘digital deity’ emerge from his thinking in this context,reflecting the role that religion and traditional gods have played in providing ethical frameworks, security, discipline, power, and other societal functions. More recently O’Gieblyn has been drawing the same conclusions,[[o2021god]] explicitly linking religiosity to the imperative to ‘create a godhead’ simply because it can be done, not pausing to discuss if it should be. Rosenberg calls this ‘a threat to EpistemicAgency’[[rosenbergmanipulation]]More recently the Harari, author ofSapiens[[harari2014sapiens]] [said ofAI](https://forumlive.frontiersin.org/agenda/speakers/2977577): it“For thousands of years, prophets and poets and politicians have used language and storytelling in order to manipulate and to control people and to reshape society. Now AI is likely to be able to do it. And once it can... it doesn’t need to send killer robots to shoot us. It can get humans to pull the trigger. We need to act quickly before AI gets out ofour control. Drug companies cannot sell people new medicines without first subjecting these products to rigorous safety checks.” (AI will be discussed in detail in a later chapter).
	- Klein at the New York Times has been [writing against thispoint](https://www.nytimes.com/2023/03/12/opinion/chatbots-artificial-intelligence-future-weirdness.html)for some time. His well articulated fear, is that the current model where three major Western companies, with similar highly competitive capitalist origins and values, should certainly not be in charge ofracing to monetise the most compelling and innately unknowable chat bot experience. As societies shift towards materialism and technological dependence, traditional gods lose their relevance, and the need for anew form of overseer arises. This digital deity, existing within therealm of technology and the cloud, perhaps represents an adaptation of primal human belief systems. This will be explored further in the AI/MLchapter later.
	- In conclusion, the rise of surveillance capitalism has led to concerns about the potential for the creation of a surveillance state, or worse,a new kind of omnipresent digital culturla authority. Corporations and government agencies may use the data collected by companies for surveillance purposes. This can have significant implications for individuals’ privacy and civil liberties. It’s important for laws and regulations to be in place to safeguard citizens’ rights and privacy inregards to the use of data by government agencies, and to hold them accountable for any misuse of data, and yet it seems the reality of the situation in ‘post Snowden’ seems far from that.
	- Surveillance Capitalism. As a quick round-up of this area, which is best researched elsewhere:
		- The global digital advertising market is expected to reach $335 billion by 2023.
		- In 2020, Google and Facebook accounted for 60% of the global digital advertising market.
		- The data brokerage industry, which includes companies that collect and sell personal data, is estimated to be worth $200 billion.
		- In 2020, Google and Facebook were reported to have data on over 4 billion active users.
		- As of 2021, the number of data breaches reported worldwide has grown from 4.1 billion in 2018 to 4.9 billion in 2020.
		- In 2013, it was revealed that the US National Security Agency (NSA) had been collecting the phone records of millions of Americans under its PRISM program.
		- In 2013, Edward Snowden leaked classified documents that revealed the scale of the NSA’s surveillance programs.
		- In the US, the Foreign Intelligence Surveillance Act (FISA) allows the government to conduct surveillance on non-US citizens outside the US without a warrant.
		- The UK’s Investigatory Powers Act 2016, also known as the "snooper’s charter," gives government agencies wide-ranging powers to collect and analyze personal data.
		- In 2021, it was reported that the Chinese government has been collecting and analyzing the data of its citizens through a system of "social cred* scores, which are used to monitor and control individuals’ behaviour.
		- Surveillance capitalism refers to the business model of collecting and analyzing personal data for the purpose of targeted advertising and other forms of monetization.
		- A recent study by the Center for Digital Democracy found that the top 100 global digital media companies are projected to generate over $1 trillion in revenue by 2020, much of which is derived from surveillance-based advertising.
		- The number of surveillance cameras in use worldwide is estimated to be over 1 billion, with the majority located in China.
		- A 2018 study by Comparitech found that the average person in the UK is captured on CCTV cameras over 300 times per day.
		- According to a report by the American Civil Liberties Union (ACLU), the FBI has access to over 640 million photographs for facial recognition searches, including driver’s license and passport photos.
		- The U.S. government’s use of surveillance technologies, such as drones and mass data collection, has been a subject of ongoing controversy and debate.
		- Some experts warn that the increasing use of surveillance technologies by governments and private companies could lead to the erosion of privacy rights and the creation of a *surveillance state."
		- In the USA senate hearing following the collapse of FTX Rep. Jesus Garcia described bitcoin and crypto as an industry that operates outside of the law and relies on hype, implying that the communities that have adopted bitcoin are ill-informed and vulnerable.
		- Bitcoin has been adopted by a variety of communities worldwide, particularly in countries such as Vietnam, the Philippines, Ukraine, India, Pakistan, Brazil, Thailand, Russia, and China.
		- There is an outsized level of adoption among Black Americans in the United States. This trend is not a result of targeted advertising by companies such as FTX, but rather a response to a legacy financial system that has limited individuals’ potential.
		- Marginalized early adopters of bitcoin still constitute a minority in their communities, but the worldwide adoption trend among these groups is on the rise.
		- The solutions that outsiders build in bitcoin will ultimately be the source of the technology’s promised revolution. Adoption in Africa and possibly India seems likely to be capable of driving this.
		- The paradigm shift will come from those who bring local, real-world focused use cases to their communities, separating bitcoin from the empty hype of speculation.
		- Marginalized communities will lead the industry’s recovery and redefine the purpose of bitcoin in the future.

	- ## Tech money in Civil Society
		-
		- https://twitter.com/youranonnews/status/1816298460645068879
		- {{twitter https://twitter.com/youranonnews/status/1816298460645068879}}
		- Big Tech firms donate substantial funds to charities, think tanks, academic research, and lobbying efforts to shape narratives and policy around tech regulation. [[Goldenfein Mann 2024]]
		- Tracking financial flows from Big Tech to DRCSOs is challenging due to limited transparency, but available data shows ongoing funding relationships.
		- Through class action cy pres settlements, Big Tech firms direct funds to DRCSOs that purport to represent class interests, but may actually advance the firms' preferred policy narratives.
		- Funding from Big Tech raises questions about potential conflicts of interest for DRCSOs and whether they truly represent the public interest as opposed to aligning with industry agendas.
		- The authors argue Big Tech philanthropy allows economic power to translate into political and cultural capital, enabling the firms to continue profiting from problematic data practices while avoiding meaningful regulation.
		- Much of the following text is paraphrased from the work of Guy Turner of‘The Coin Bureau’, and Lawyer and academic Eden Moglen, and needs more work because of it’s critical importance to the book. [[Update Cycle]]
			- The adoption of printing by Europeans in the 15th century led to concerns around access to printed material. The right to read and the right to publish were central subjects in the struggle for freedom of thought for most of the last half millennium. The basic concern was forthe right to read in private and to think, speak, and act based on a free and uncensored will. The primary antagonist for freedom of thought at the beginning of this struggle was the universal Catholic Church, an institution aimed at controlling thought in the European world through weekly surveillance of individuals, censorship of all reading material,and the ability to predict and punish unorthodox thought. In early modern Europe, the tools available for thought control were limited, but they were effective. For hundreds of years, the struggle centred around the book as a mass-manufactured article in Western culture, and whether individuals could print, possess, traffic, read, or teach from books without the permission or control of an entity empowered to punish thought. By the end of the 17th century, censorship of written material in Europe began to break down in waves throughout the European world,and the book became an article of subversive commerce, undermining the control of thought.
		- Currently, a new phase in human history is beginning as we are building a single extraneous digital nervous system, that will connect every human mind. Within two generations, every single human being will be connected to this network, in which all thoughts, plans, dreams, and actions will flow as nervous impulses. The fate of freedom of thought and human freedom as a whole will depend upon the organization of thisnetwork. Our current generation is the last in which human brains will be formed without contact with this network, and from now on, every human brain will be formed from early life in direct connection to the network, with input from generative AI/ML systems. This possibly results in humanity becoming a super organism of a sort, where each of us is buta neuron in the brain. Unfortunately, this generation has been raised to be consumers of media, which is now consuming us.
		- Anonymous reading is being determined against. Efforts discussed throughout this graph to ensure privacy, from Zimmerman and the cypherpunks onward, have been met with resistance from government efforts to monitor and control information flow. The outcome of the organization of this network, and the freedom it allows, is currently being decided by this generation.
		- It is not solely the ease of surveillance, nor solely the permanence of data, that is concerning, it is the relentless nature of living after the “end of forgetting”. Today’s encrypted traffic, which is used with relative security, will eventually be decrypted as more data becomes available for crypto analysis. This means that security protocols will need to be constantly updated and redone. Furthermore, no information is ever truly lost, and every piece of information can be retained and eventually linked to other information. This is the rationale behind government officials who argue that a robust social graph of the UnitedStates is needed. The primary form of data collection that should be of most concern is media that is used to spy on us, such as books that watch us read them and search boxes that report our searches to unknown parties. There is a lot of discussion about data coming out ofMeta/Facebook, but the true threat is code going in. For the past 15years, enterprise computing has been adding a layer of analytics on topof data warehouses, which is known as business intelligence. This allows for the vast amount of data in a company’s possession to be analysed and used to answer questions the company did not know it had. The real threat of Facebook is the business intelligence layer on top of theFacebook data warehouse, which contains the behaviour of nearly a billion people. Intelligence agencies from around the world want toaccess this layer in order to find specific classes of people, such as potential agents, sources, and individuals that can be influenced or tortured. The goal is to run code within Facebook to extract this information, instead of obtaining data from Facebook, which would be dead data once extracted. Facebook wants to be a media company andcontrol the web, but the reality is the true value of Facebook is the information and behaviour of it’s users, and the ability to mine that data. Distributed internet protocols are important in the context of government overreach into digital society and people’s private livesbecause they provide a level of decentralization and resilience that canhelp protect against censorship and surveillance.
		- For example, if a government were to attempt to censor or block access to a centralized internet service, it could potentially do so with relative ease. However, if that same service were distributed across anetwork of nodes, it would be much more difficult for the government to effectively censor or block access to it.
		- Another advantage of distributed protocols is that they are typically more resilient to attacks or failures. If one node in the network goes offline or is compromised, the others can continue to operate, ensuring that the service remains available. This can be especially important in situations where the internet is being used for critical communication,such as during a natural disaster or political crisis.
		- In addition to their benefits for censorship resistance and resilience,distributed protocols can also help protect people’s privacy. Because they do not rely on centralized servers or infrastructure, they can bemore difficult for governments or other entities to monitor or track.This can be especially important in countries where government surveillance is prevalent or where individuals may be at risk of persecution for their online activities.
		- There are a number of distributed protocols that have been developed specifically to address issues of censorship and privacy, and these will be covered in more detail later.
		- It is important to note that distributed protocols are not a silver bullet for censorship or privacy concerns. They can be vulnerable to certain types of attacks, such as those that target the nodes of the network, and they may not always be practical for certain types of applications. However, they do provide an important tool for those seeking to protect their freedom of expression and privacy online. They offer a valuable tool for those seeking to protect their freedom of expression and privacy online, and they will likely continue to play a critical role in the future of the internet.
		- In recent years, several countries have proposed or passed bills that would result in unprecedented levels of online censorship. One such example is Canada’s Bill C-11, also known as the Online Streaming Act.This bill was first proposed in November 2020 as Bill C-10, but failed to pass due to its controversial provisions. It was reintroduced inFebruary 2021 as Bill C-11 and was approved by the Canadian House ofCommons, the first step in the process of becoming law. If passed, the bill would give the Canadian Radio, Television and TelecommunicationsCommission (CRTC) the power to decide what content Canadians can view onYouTube and other social media platforms. The CRTC would also have the power to dictate what content creators can produce, with a focus on promoting "Canadian content." Additionally, the bill would require certain broadcasters to contribute to the Canada Media Fund, which is used to fund mainstream media in Canada. The bill is currently being considered by the Canadian Senate, which will vote on it in February. If passed, it will then be debated by the Canadian Parliament. Tech companies such as YouTube have reportedly failed to convince the Senate to exclude user-generated content from the bill, indicating a high likelihood of it becoming law. The potential impact on the internet andfree expression in Canada is significant, as the bill would give the government significant control over online content and restrict the ability of individuals to share their views and perspectives.
		- In a similar vein the forthcoming RESTRICT act in the USA gives hugepowers without oversight to a single branch of the US government.
			- The bill is called the “Restricting the Emergence of Security Threats that Risk Information and Communications Technology Act”
			- It was initially thought to be about banning TikTok due to its connections to the Chinese government and the data it collects on its users.
			- The RESTRICT Act has very little to do with banning TikTok and instead grants the US Secretary of Commerce significant powers to determine which entities are foreign adversaries and what technology poses a risk to national security.
			- The bill defines critical infrastructure broadly, which means it could apply to almost anything the government deems necessary. Lobbyists will be allowed to advise the Secretary of Commerce on which products and services should be labeled as foreign adversaries, potentially leading to monopolies.
			- Fines and jail time for interacting with foreign adversaries or posing a risk to national security could reach up to $1 million, 20 years in prison, and asset seizures.
			- The bill aims to crack down on VPNs (Virtual Private Networks), which provide privacy and access to foreign websites.
			- There is no oversight for the actions taken by the Secretary of Commerce under this act, and neither Congress nor the courts can request information on these decisions.
		- The European Union (EU) has separated its online censorship efforts into two separate bills: the Digital Markets Act and the Digital Services Act. These bills were introduced in December 2020 and are part of the EU’s Digital Services package, which aims to be completed by 2030. The Digital Services package is the second phase of the EU’s digital agenda, which is being enforced through regulation in the public sector and through ESG investing in the private sector. Both the Digital Markets Act and the Digital Services Act were passed in spring 2022 and went into force in autumn 2022, but will not be enforced until later this year and early next year, depending on the size of the relevant entity. The Digital Markets Act aims to increase the EU’s competitiveness in the tech space by imposing massive fines on "gatekeepers," or companies that maintain monopolies by giving preference to their own products and services. This could open the door to innovation in cryptocurrency in the EU, but also requires gatekeepers to provide detailed data about the individuals and institutions using their products and services to theE U. The Digital Services Act, on the other hand, aims to regulate the content that is available online, including user-generated content. It does this by requiring companies to remove illegal content within one hour of it being reported and by imposing fines for non-compliance. The act also requires companies to implement measures to protect users from illegal content and from "other forms of harm," which is defined broadly and could include a wide range of content. The EU is also in the process of passing the Artificial Intelligence Regulation Act, which will be discussed later this year and is reportedly the first of its kind. All five bills in the EU’s Digital Services package are regulations, meaning they will override the national laws of EU countries. The potential impact on the internet and free expression in the EU is significant, as the Digital Services Act would give the government significant control over online content and restrict the ability of individuals to share their views and perspectives.
		- In the United States, two significant documents related to online censorship are the Kids Online Safety Act and the Supreme Court caseGonzalez v. Google. The Kids Online Safety Act was introduced inFebruary 2021 and is expected to pass later this year due to bipartisan support. The act requires online services to collect Know Your Customer(KYC) information to ensure that they are not showing harmful content tominors. It also gives the Federal Trade Commission (FTC) the power to decide when children have been made unsafe online and allows parents tosue tech companies if their children have been harmed online. The act has received criticism from both sides of the political spectrum and entities outside of Congress, as it is seen as giving too much power tothe government to regulate online content and could lead to increased censorship by tech companies.
		- The Supreme Court case Gonzalez v. Google involves the question of whether Google’s algorithmic recommendations supported terrorism and contributed to the 2015 terrorist attacks in Paris. The case has been picked up by the Supreme Court after being passed up by various courts of appeal. It is being heard alongside another case, Twitter v. Tumne, involving the role of Twitter’s algorithms in a terrorist attack in Istanbul. There are two potential outcomes for the case. If the Supreme Court sides with Gonzalez, it could increase the liability of social media companies under Section 230 of the Communications Decency Act, which allows them to moderate content to a limited extent without violating the First Amendment. Alternatively, the Supreme Court could declare Section 230 unconstitutional, which would make online censorship illegal but also hinder the use of algorithms on the internet. The ideal outcome, in theory, would be for the Supreme Court to side with Google and for Congress to change Section 230. However, giving Congress the power to change the law could lead to increased censorship and the potential for abuse of power.
		- In the UK forthcoming legislation will see tech company leaders liablefor [prison sentences](https://www.independent.co.uk/news/uk/politics/bill-mps-iain-duncan-smith-molly-russell-rishi-sunak-b2263353.html) if they fail in their duty to protect minors. This will doubtless lead to both stringent universal requirements for identity proof (KYC), and significantly muted and controlled content on the platforms.
		- Our research focuses on business to business use cases for distributed technologies, and will provide mechanisms for verifying who is communicating with whom, to avoid falling foul of these swinging global infringements on privacy.
		- It is the opinion of this book that information should befree[[swartz2008guerilla]]

	- ### Rewind Pendant
		- **Description**: A wearable device designed to aid memory by passively capturing audio throughout the day.
		- **Features**:
			- Auto-records ambient sound
			- Privacy-focused with user-controlled storage
			- Lightweight and can be worn as a necklace
			- Integrates with an app for audio playback
		- **AI Aspect**: Uses AI to intelligently capture and categorize important sound bites.

		- ## **LM Studio**
			- **Description:** Standalone desktop application for local inference.
			- **Features:**
				- Easy to use with a modern UI.
				- Suitable for new users and traditional "Windows-style" workflows.
			- **Limitations:** Closed source; outbound connections for updates raise privacy concerns.
			- **Link:** [LM Studio](https://lmstudio.ai)

	- ## Approach and Innovation
		- **Method**: Utilizing high-resolution machine vision cameras and AI algorithms for capturing human presence and emotions
		- **Innovation**: Seamless tracking without requiring wearables, anonymized data processing for privacy
		- **AI Utilization**: Trustworthy and responsible use of AI in capturing visitor data

	- ## Competitive Advantages
		- **Unique Capabilities**: Capturing gaze vectors, emotion, and attention metrics with high granularity
		- **Seamless Integration**: No need for proprietary hardware or sensors
		- **Privacy Focus**: Minimal, anonymized data collection
		- **Partnerships**: Strategic collaborations with experience designers and creative industries

- # What to use and when
	- **Start with Simple API Calls:**
		- Initially, utilize third-party APIs that serve your needs without complicating your system. This is the most straightforward and cost-effective solution.
		- If third-party APIs meet your requirements in terms of functionality, privacy, cost, and latency, there's no need to progress to more complex solutions.
	- **Deploy Pre-trained Models:**
		- If API solutions are insufficient due to privacy, cost, or latency issues, consider deploying a generic, pre-trained model (like MixL or LLaMA) behind your own API.
		- This step involves a bit more complexity and control over the data but remains relatively simple.
	- **Curate Context and Improve Prompts:**
		- Enhance the output quality by curating in-context examples and optimizing prompts. This step aims to extract better performance from the existing deployed model with minimal changes.
	- **Integrate Retrieval Systems:**
		- If further improvement is needed, integrate a retrieval system to complement the model's responses, based on the available latency and the complexity it introduces to your system.
	- **Fine-tune on Specific Data:**
		- When adjustments and retrieval integrations aren't sufficient, proceed to fine-tune the model on a targeted dataset. This step tailors the model more closely to your specific requirements.
	- **Swap for a Larger Model or Pre-train Your Own:**
		- If fine-tuning does not achieve the desired outcomes, consider swapping in a larger pre-trained model or pre-training your own model for more significant customization and improvement.
		- This can involve domain adaptation through further pre-training on a relevant corpus, followed by fine-tuning.
	- **Iterate and Add Complexity as Necessary:**
		- Continue iterating, adding layers of complexity only as needed. This approach ensures that you only invest in higher compute and development costs when there's a clear benefit.
	- **Simplify and Streamline for Deployment:**
		- Throughout this process, aim to simplify and streamline solutions for deployment. Consider the target audience and operationalize the solution in a way that makes it accessible and practical for them.
		-

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
						- `lightningNode`: (`xsd:string`) The public key of the agent's Lightning Network node.
				- **VirtualEconomy:**
					- **Properties:**
						- `bitcoinNetwork`: (`linkedjson:ObjectProperty`, `range`: `schema:ComputerNetwork`) Represents the Bitcoin network on which the economy operates.
						- `lightningNetwork`: (`linkedjson:ObjectProperty`, `range`: `schema:ComputerNetwork`) Represents the Lightning Network facilitating faster and cheaper transactions.
				- **Cashu Integration**:
					- **Properties**:
						- `cashuWallet`: (`linkedjson:ObjectProperty`, `range`: `schema:DigitalWallet`) Represents the Cashu wallet associated with the metaverse agent. This wallet manages the agent's Chamium eCash balance.
						- `cashuNode`: (`xsd:string`) The identifier for the Cashu federation node that the agent's wallet is associated with, facilitating eCash transactions.
					- **Cashu Economy**:
						- **Properties**:
							- `chamiumEconomy`: (`linkedjson:ObjectProperty`, `range`: `schema:EconomicSystem`) Represents the part of the virtual economy that operates using Chamium eCash, allowing for private and instant transactions.
							- `ecashTransactions`: (`linkedjson:ObjectProperty`, `range`: `schema:ItemList`) List of transactions executed using Chamium eCash, supporting privacy and micro-transactions within the metaverse.
					- **Transaction Privacy**:
						- **Properties**:
							- `privacyLevel`: (`xsd:string`) Defines the level of privacy for transactions conducted by the agent, with options including Bitcoin, Lightning, or Cashu Chamium eCash, each offering different degrees of privacy and speed.
					- **Cashu Services**:
						- **Classes**:
							- `CashuService`: Represents services within the metaverse that specifically use or provide Cashu Chamium eCash functionalities, such as eCash exchanges, payment processing, or private transactions.
								- **Properties**:
									- `serviceType`: (`xsd:string`) The type of service offered, such as eCash exchange, payment gateway, or privacy service.
									- `accessEndpoint`: (`xsd:anyURI`) The URL or identifier where the service can be accessed within the metaverse.
			- **NVIDIA Omniverse:**
				- **MetaverseScene:**
					- **Properties:**
						- `omniverseNucleusUrl`: (`xsd:anyURI`) The URL of the Omniverse Nucleus server hosting the scene.
						- `usdFile`: (`xsd:anyURI`) The URL or reference to the USD file defining the scene's content.
				- **USD Variance:** Define properties or subclasses within `SceneObject` to represent USD variations and the conditions under which they are activated.
				- **Scene Schema Scaffolding:** Exploring Linked-JSON structures to emulate the more expressive OWL `owl:oneOf` and `owl:someValuesFrom`.
					- Linked-JSON representation for `SceneType`:
					  ```text
					  {
					    "@id": "metaverse:SceneType",
					    "@type": "linkedjson:Class",
					    "rdfs:label": "Scene Type",
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

	- ### Trust and Control
		- Privacy-centric design—like zero-knowledge proofs—can soothe data security fears.
		- Allowing users to trade limited data insights for discounted micropayment rates offers a balance between personalisation and confidentiality.

	- ### Data Privacy
		- Centralised micropayment processors can create surveillance risks.
		- Decentralised frameworks (e.g., [[Nostr]] and the [[Lightning Network]]) reduce some vulnerabilities but require robust regulatory clarity.

	- ## The evolving US position
		- In most regards the legislative front line is happening in the USA. Treasury Secretary Yellen responded to the collapse of Terra/UST [saying that](https://www.youtube.com/watch?v=kU0xYBRfgvU): it“A comprehensive regulatory framework for US dollar stable coins is needed”. She also said that the stablecoin market is too small to pose systemic risk at this time. This is clearly an evolving situation, but the incredible consumer exposure to these risky products is likely to elicit a swift and significant response, and the timing seems right for intervention. The markets suggest that USDC will be the eventual winner.
		- Koning meanwhile has looked into the different [regulatoryapproaches](http://jpkoning.blogspot.com/2021/08/stablecoin-regulatory-strategies.html)used by various stablecoins.
			- The highly regulated New York state financial framework (Paxos, Gemini)
			- Piggyback off of a (Nevada) state-chartered trust \[TrueUSD, HUSD\]
			- Get dozens of money transmitter licenses \[USDC\]
			- Stay offshore \[Tether\]
		- [Proposedlegislation](https://www.americanbanker.com/news/toomey-unveils-stablecoin-bill-granting-occ-authority-for-payments-charter)specific to the concept of stablecoins has been advanced by Sen Toomey.There are many provisions in the bill, mostly pertaining to convertibility and the ever present problem of attestation of the‘backing’ of these products. Mention has already been made of the major bill advanced by Sen. Lummis and Gillibrand. This bill also includes significant provision around stablecoins. Lummis said it “Stablecoinswill have to be either FDIC insured or more than 100% backed by hard assets.”. This is good news for this section of the digital asssets space.
		- Crucially there is also more clarity on privacy. This is a huge threatfrom digital money systems, and the USA is likely to lead. Remember though that none of this is yet law.
		- Valkenburg, the lead researcher of a US think tank in digital assets[says thefollowing](https://twitter.com/valkenburgh/status/1511783339065237521):it“Stablecoin TRUST Act, is a discussion draft mostly about stablecoins,but it also has important privacy protections for crypto users broadly:it puts real limits on warrantless surveillance by narrowing what info can be collected from third parties. Last summer we fought a provision in the infrastructure bill that damaged the privacy of crypto users by expanding the broker definition (who needs to report information about transactions to the IRS) & crypto 6050I reporting (reports on businessvtransactions over $10,000). The winter before we fought and successfully delayed a rushed proposal from the outgoing Trump administration tomandate that exchanges collect information about persons who are nottheir customers, who hold crypto at addresses in wallets they control directly. the Stablecoin TRUST Act would stop these encroachments,constrain the treasury from collecting any non public information unless they get a search warrant or collect only information voluntarily provided to an exchange by a customer and for a legitimate business purpose. If “voluntarily provided for a legitimate business purpose”sounds familiar to you, that’s b/c it’s the constitutional standard articulated by the Court in Carpenter describing LIMITED circumstances where warrantless searches of customer data are ok.It’s the standard we’ve advocated must also limit warrantless data collection at cryptoexchanges. If exchanges must collect information about non-customers,that information is, by definition, not voluntarily provided for a legitimate business purpose.”
		- The ongoing battle for control over emerging stablecoins by the CFTC andthe SEC [seems to be pushing](https://www.reuters.com/legal/transactional/presidents-working-group-report-calls-stablecoin-regulation-2021-12-02/)the American government into legislation. They have [published a draftbill](https://docs.house.gov/meetings/BA/BA21/20230419/115753/BILLS-118pih-Toproviderequirementsforpaymentstablecoinissuersresearchonadigitaldollarandforotherpurposes.pdf)and there have been some congressional hearings over the matter. At this time the bill is nascent, and there are as yet no firm decisions, thoughas seems typical in the USA there are hardening opinions along political lines.

		- ##### Key Ideas
		- 1.  **Leveraging AI and Contextual Data:** The venue will use AI and contextual data to create dynamic narratives and activities tailored to each visitor in real-time. This will revolutionize the resort experience, making it highly personalized and immersive. However, the implementation of AI must be mindful of privacy concerns and be done in a way that respects the data sovereignty of the guests.
		- 2.  **Tailored Personalization:** Visitors should have the ability to opt into different levels of personalization. Some may want a fully immersive, personalized experience, while others may prefer a more ‘hands off’ experience. This is an important aspect of respecting individual preferences and ensuring that all visitors feel comfortable and catered for.
		- 3.  **Communication Devices:** Various communication devices could be utilized within the resort to facilitate interactions between visitors and the AI system. These could include badges, wands, glasses, headphones, etc. Each of these devices would contribute to the immersion and thematic consistency of the resort while serving a practical purpose.
		- 4.  **Biometrics:** The use of biometrics such as gaze tracking and gesture recognition could allow the AI to understand visitor preferences passively. This technology could be incorporated in a non-intrusive way to augment the guest experience without breaching privacy.
		- 5.  **Data Extraction:** Visitors should have the ability to extract their distilled data or creations, enabling them to continue their vistor experience at home. This could also open up new possibilities for visitors to create and share their own narratives based on their visit experiences. To be clear this should not be the raw data supplied to the venue inferencing engines (which should be destroyed soon after use), but rather a distilled narrative of the inference from the system.
		- 6.  **Data Privacy:** Data sharing should be underpinned by robust privacy controls to ensure guest data sovereignty. It’s crucial to maintain the trust of the visitors by demonstrating a strong commitment to privacy. This should be externally audited on a regular cadence.
		- 7.  **Continuous Experience:** The visitor experience should feel continuous before, during, and after the visit. However, it’s important to manage guest expectations and avoid over promising pre-visit AI interactions. Ensuring a smooth transition between these stages will enhance the overall guest experience.
		- 8.  **Hyper-Personalization:** Hyper-personalization should span the venue. This level of detail will ensure each guest has a unique and highly personalized experience.
		- 9.  **Adaptive and Immersive Experiences:** The core aim should be to craft continuously adaptive and immersive experiences based on visitor needs and implied preferences. By doing so, the venue can ensure each visitor has a unique, enjoyable, and highly memorable experience, supportive of return visits.
		- The integration of these concepts will require careful planning and
		  execution, but the result could be a venue experience like no other, one
		  that caters to each individual guests and provides an experience that
		  extends beyond the confines of the experience itself.

		- ### AI Leviathan
	 - **State Surveillance and Control:** Explores the potential for states to extend their surveillance capabilities and tighten control over citizens using advanced AI, leading to an Orwellian future where privacy is virtually nonexistent.
	 - **Implications for Democracy:** Discusses the challenges this scenario poses to democratic norms and individual freedoms, with a focus on the trade-offs between security and liberty.

		- ### Intelligence Explosion and Societal Shift
	 - **Hypothetical Breakthroughs:** Details scenarios where AI breakthroughs, akin to everyone having x-ray style glasses, could radically challenge existing norms around privacy, security, and human interaction.
	 - **Radical Transparency Challenges:** Discusses the implications of such breakthroughs on societal norms, legal frameworks, and individual behaviors, stressing the need for society to anticipate and adapt to these transformative changes.

		- ### AI as an Informational Tool
	 - **Increasing Information Resolution:** Describes AI's ability to significantly enhance our understanding of the world, from refactoring legacy code to restoring ancient scrolls, and detecting galaxies in old surveys.
	 - **Privacy Risks:** Discusses the significant privacy risks posed by AI's ability to turn everyday signals into identifiable data, stressing the need for robust privacy protections and ethical considerations.

		- ### Oppression Risks
	 - **Surveillance Capabilities:** Explores the risks of AI-enhanced surveillance, detailing how pervasive monitoring could lead to oppressive societal structures and a significant loss of privacy and autonomy.
	 - **Privacy Invasions:** Details the ways in which AI's ability to analyze and interpret personal data can lead to invasions of privacy, emphasizing the need for robust legal protections and ethical constraints.

	- ### 3.  **Verifiable Credentials (VCs)**
	- **Overview**: VCs are a standard for conveying claims about an identity in a way that is cryptographically secure, privacy-respecting, and machine-verifiable.
	- **Use Cases**: They are used in scenarios ranging from proving educational qualifications and professional certifications to identity verification online without revealing unnecessary personal information.

	- # AI's Impact on Power, Privacy, and Personal Sovereignty
		- **Concentration of Power in AI:**
			- **Corporate Dominance:**
				- Major tech companies are not just developing AI but are shaping its very direction and application.
				- These companies' influence leads to potential monopolistic control, affecting competition and innovation.
				- **Deeper Insight:** The consolidation of power in the AI sector creates barriers for smaller players, leading to a lack of diversity in AI development and potential biases in AI systems.
			- **Economic and Resource Inequality:**
				- AI's development requires substantial resources, creating a disparity between entities that can afford these resources and those that cannot.
				- This disparity widens the gap between large corporations and smaller entities, including academic institutions and startups.
				- **Deeper Insight:** The economic divide in AI reinforces existing power structures, where the entities with the most data and computational power dictate AI's evolution and application.
		- **Gating of Information:**
			- **Access Control by AI:**
				- AI systems, often proprietary, control the flow and accessibility of information.
				- This control can lead to information gatekeeping, where only certain narratives or perspectives are amplified.
				- **Deeper Insight:** AI's role in content recommendation and news dissemination can skew public perception and understanding, potentially leading to echo chambers.
			- **Transparency and Accountability:**
				- There is a lack of transparency in how AI algorithms function and make decisions.
				- This opaqueness makes it difficult for the public to understand or challenge AI-driven decisions.
				- **Deeper Insight:** Without transparency, AI systems can perpetuate biases and errors unchecked, leading to harmful societal impacts.
		- **Privacy and Personal Sovereignty:**
			- **AI as a Surveillance Tool:**
				- AI technologies, particularly in facial recognition and behavior prediction, are increasingly used for surveillance, infringing on individual privacy.
				- These technologies can track and analyze personal data without explicit consent, raising ethical concerns.
				- **Deeper Insight:** The widespread use of AI in surveillance erodes personal freedoms and privacy, leading to a society where every action can be monitored and analyzed.
			- **Data Exploitation and Consent:**
				- The collection and use of personal data for AI training often occur without clear consent from individuals.
				- Data subjects rarely have control over how their data is used, contributing to the erosion of personal sovereignty.
				- **Deeper Insight:** The lack of control over personal data signifies a shift in power dynamics, where individuals have little say in how their information is utilized and monetized.
		- **Erosion of Rights and Labor Exploitation:**
			- **Impact on Workers' Rights:**
				- Automation and AI threaten traditional jobs, leading to job insecurity and changes in labor dynamics.
				- Workers are often required to train AI systems that may eventually replace them, raising ethical questions about labor rights.
				- **Deeper Insight:** The transition towards an AI-driven economy necessitates a reevaluation of labor laws and protections to safeguard workers' rights in a changing landscape.
			- **Ethical Concerns in AI Training:**
				- The human labor involved in AI training, especially in content moderation, is often underappreciated and underpaid.
				- Workers are exposed to harmful content, impacting their mental health, with little support or recognition.
				- **Deeper Insight:** The reliance on human labor for AI's 'intelligence' contrasts with the narrative of AI as an autonomous, advanced technology, highlighting the need for better working conditions and ethical standards in AI development.
		- **Future Outlook and Regulations:**
			- **Regulatory Challenges:**
				- The pace of AI development outstrips the current regulatory framework, leading to gaps in governance and oversight.
				- There is a need for comprehensive laws that address privacy, transparency, and the equitable use of AI.
				- **Deeper Insight:** Effective regulation of AI requires a multidisciplinary approach, involving lawmakers, technologists, ethicists, and the public to ensure that AI serves the common good without infringing on individual rights.
			- **Personal Sovereignty in the Digital Age:**
				- As AI becomes more integrated into daily life, maintaining personal sovereignty over data and privacy becomes increasingly challenging.
				- Individuals must be empowered with knowledge and tools to navigate this landscape and protect their digital rights.
				- **Deeper Insight:** Fostering a culture of digital literacy and advocating for stronger privacy protections are essential steps in ensuring that individuals retain control over their personal data in an AI-driven world.

	- ## Societal and Ethical Considerations
		- Addressing AI-related societal and ethical challenges, focusing on transparency, fairness, and accountability.
		  background-color:: red
		- Public discourse on AI's implications on privacy, employment, and societal norms.
		  background-color:: green

	- ## [[Politics, Law, Privacy]]
		- 🟢 Half the world goes to the polls this year. More than 50 countries, 4B people.
		- [How OpenAI is approaching 2024 worldwide elections](https://openai.com/blog/how-openai-is-approaching-2024-worldwide-elections)
		- It's not just deepfakes, but adverts, and influencer material on social media. 100x the number with 1/10th the engagement is still a 10x positive for free.
			- 🟢 This is Professor [Ethan Mollick | LinkedIn](https://www.linkedin.com/in/emollick/) using HeyGen and 30s of footage to create a deepfake.
			- [One Useful Thing | Ethan Mollick | Substack](https://www.oneusefulthing.org/) [[Education and AI]] and [[Proprietary Large Language Models]] blog
				- His most recent post is [Signs and Portents](https://www.oneusefulthing.org/p/signs-and-portents) and you should check it.
			- ![1704433632082.mp4](assets/1704433632082_1704449202180_0.mp4)
		- Autodial chatbots that can have plausible and convincing conversations with voters. I briefly saw someone had made one of these using a $20 GPT subscription.
		- ![image.png](assets/image_1704292836040_0.png)
		- [Kyle Taylor: books, biography](https://www.amazon.co.uk/stores/Kyle-Taylor/author/B09G759JR3?)
		- He talks about something I have similarly been saying:
			- In the event of a complete breakdown of trust in digital information channels people will simply choose only to trust their priors.
			- This is a fracturing of the information space, effectively bubbles of one. [[Death of the Internet]] [[Social contract and jobs]]

	- ### Web things
		- [[Semantic Web]]
		- [[Spatial Web]]
		- [[Decentralised Web]]
		- [[Politics, Law, Privacy]]

	- ## Key Features
		- VisionFlow's features emphasize real-time interaction, privacy, and extensibility.

	- ### Privacy Risks
		- AI's ability to process information far exceeds human capacity, creating a deluge of data that threatens the quality and integrity of human knowledge. This "signal-to-noise" problem is not just an inconvenience; it's a critical challenge for information validity in the digital age.

		- ## Privacy and Data Protection Concerns
				- **Continuous Monitoring:** These AI systems enable continuous, round-the-clock monitoring of individuals, capturing detailed data on their movements and behaviours. This level of surveillance is unprecedented and poses significant risks to personal privacy.
				- **Behavioural Analysis:** AI can track and analyse patterns in individuals' movements and behaviours, potentially revealing sensitive information about their personal lives. This capability raises ethical questions about the extent of surveillance that is acceptable in a democratic society.
				- Transparency is a critical issue in the deployment of AI surveillance technologies:
				- **Lack of Public Awareness:** There is a general lack of transparency regarding how data is collected, analysed, and used by both the government and private companies. This opacity makes it difficult for the public to understand the full implications of the surveillance systems.
				- **GDPR Concerns:** Civil liberties organisations in France have expressed concerns that the extensive data collection practices may violate the GDPR. The regulation is designed to protect individuals' privacy and personal data, and the new surveillance measures may conflict with these protections.
			- **Event Detection:** Identifies potential security threats and unusual activities, allowing for rapid response by security personnel.

	- ### Privacy and Surveillance
		- The use of AI in areas such as facial recognition and data analysis raises concerns about privacy and the potential for increased surveillance.

	- ## Title: The Advantages of Bitcoin
	- **Open Source**: The open-source nature of Bitcoin fosters transparency and collective development.
	- **Anonymity and Privacy**: Bitcoin provides a degree of anonymity in transactions.
	- **Promoting Democracy**: By decentralizing control over money, Bitcoin can potentially support democratic movements.
	- **Push System for Transactions**: Bitcoin operates on a push system, giving users control over their transactions.
	- **Real Money Qualities**: Bitcoin exhibits properties of real money like divisibility, portability, and durability.
	- **Accessibility**: Bitcoin is accessible to anyone with an internet connection.
	- **Transparency**: The blockchain technology behind Bitcoin offers transparency in transactions.
	- **Freedom**: Overall, Bitcoin is presented as a tool for financial and personal freedom.
	  
	  https://bitcoinmagazine.com/culture/bitcoin-blockchain-is-fighting-fraud-in-guatemalas-presidential-elections
	  
	  
	  

		- ### Generating a Secret for Blind Signatures
			- Implement JavaScript code to generate a new secret key. This key will be essential for creating blind signatures, a cornerstone of Cashew's privacy features.
			- Utilize cryptographic libraries available in JavaScript for secure key generation.

		- ### Unblinding the Signature
			- Use the previously generated secret key to unblind the mint's signature. This process converts the blinded signature into a form usable for transactions while maintaining the integrity of the privacy guarantees.

- # AI Scientist Paper
- Here are the three files adapted to your inquiry on client-side hyper-personalization, dynamic creative optimization (DCO), and dynamic content optimization using the Nostr relay protocol, embeddings, and local AI.
	  [
	    {
	        "Name": "local_ai_personalization",
	        "Title": "Client-Side AI for Hyper-Personalization: Enhancing User Experience While Preserving Privacy",
	        "Experiment": "Develop a client-side AI system that uses local embeddings to personalize content based on user preferences and interactions. The system will generate personalized multimedia assets in real-time, using local data while maintaining privacy by not sharing any data with external servers. Evaluate the system's performance in terms of user engagement, content relevance, and privacy preservation.",
	    {
	        "Name": "nostr_dynamic_content_optimization",
	        "Title": "Dynamic Content Optimization Using Nostr Relay Protocol: A Decentralized Approach",
	        "Experiment": "Implement a dynamic content optimization system that leverages the Nostr relay protocol for real-time content delivery. The system will match content from a distributed network of vendors to users based on locally generated embeddings. Test the system's effectiveness in delivering relevant content while preserving user data sovereignty and minimizing latency.",
	        "Interestingness": 9,
	    },
	    {
	        "Name": "privacy_preserving_dco",
	        "novel": true
	    },
	    {
	        "Name": "vendor_embedding_optimization",
	        "Title": "Optimizing Vendor Embeddings for Multimedia Content Personalization",
	        "Feasibility": 7,
	        "Novelty": 8,
	    {
	        "Name": "multimodal_asset_generation",
	        "Novelty": 8,
	        "novel": true
	    }
	  ]
	  ```json
	  {
	    "system": "You are an innovative AI researcher focused on exploring the intersection of privacy, personalization, and decentralized content delivery.",
	    "task_description": "You are provided with the following file to work with, which explores various approaches to client-side hyper-personalization, dynamic creative optimization, and dynamic content optimization using the Nostr relay protocol, embeddings, and local AI. Your task is to develop a series of small-scale experiments to investigate the potential and challenges of these approaches."
	      def __getitem__(self, idx):
	          image = Image.open(self.image_paths[idx]).convert("RGB")
	          description = self.descriptions[idx]
	          generated_content = self.generated_contents[idx]
	  
	          if self.transform:
	              image = self.transform(image)
	  
	          return image, description, generated_content
	  
	  # Define image transformation pipeline
	  transform = transforms.Compose([
	      transforms.Resize((384, 384)),
	      transforms.ToTensor(),
	      transforms.Normalize(mean=[0.485, 0.456, 0.406], std=[0.229, 0.224, 0.225]),
	  ])
	  
	  # Example data (paths to images, corresponding descriptions, and generated content)
	  image_paths = ["path/to/product_image1.jpg", "path/to/product_image2.jpg"]
	  descriptions = [
	      "This is a high-quality, eco-friendly leather wallet with multiple compartments.",
	      "Elegant, durable, and perfect for everyday use, this leather bag features modern design."
	  ]
	  generated_contents = [
	      "Check out this wallet made from eco-friendly leather, featuring multiple slots.",
	      "Modern and durable, this leather bag is ideal for daily use with a sleek design."
	  ]
	  
	  # Initialize dataset and dataloader
	  dataset = ProductContentDataset(image_paths, descriptions, generated_contents, transform=transform)
	  dataloader = DataLoader(dataset, batch_size=1, shuffle=False)
	  
	  # Load the Florence2 model and processor
	  model = FlorenceForImageClassification.from_pretrained("microsoft/florence-base-384")
	  processor = FlorenceProcessor.from_pretrained("microsoft/florence-base-384")
	  
	  # Function to calculate image similarity using Florence2 model
	  def calculate_image_similarity(image):
	      with torch.no_grad():
	          output = model(image)
	      return output
	  
	  # Function to calculate text similarity
	  def heuristic_text_match(product_description, generated_content):
	      vectorizer = TfidfVectorizer().fit_transform([product_description, generated_content])
	      vectors = vectorizer.toarray()
	      similarity = cosine_similarity(vectors)
	      return similarity[0, 1]
	  
	  # Experiment loop
	  for batch in dataloader:
	      images, descriptions, generated_contents = batch
	      for description, generated_content in zip(descriptions, generated_contents):
	          text_similarity = heuristic_text_match(description, generated_content)
	          text_similarity_scores.append(text_similarity)
	  
	      # Combine image and text similarity
	      for image_similarity, text_similarity in zip(image_similarity_scores, text_similarity_scores):
	          overall_similarity_score = (0.6 * image_similarity) + (0.4 * text_similarity)
	          print(f"Overall Similarity Score: {overall_similarity_score:.4f}")
	  

- # Convergence
	- The intersection of AI, XR, and open, decentralized networks represents a powerful convergence of technologies that could reshape the fabric of our social and economic lives. By leveraging the unique strengths of each domain
		- the immersive power of XR, the intelligence and adaptability of AI, and the openness and composability of decentralized protocols
		- we can create a more vibrant, dynamic, and equitable digital future. However, realizing this potential will require careful design, collaboration, and governance to ensure that these technologies develop in a way that promotes human agency, privacy, and flourishing.
	-
	- AI and XR are deeply intertwined and mutually reinforcing technologies
		- AI is a critical enabler for XR, powering key functionalities like environment understanding, natural interaction, and content creation
		- XR provides a rich, immersive interface for AI systems to interact with humans and the physical world
	- The combination of AI and XR will give rise to new forms of human-machine collaboration and augmentation
		- AI-powered virtual assistants will be deeply integrated into XR environments, providing real-time guidance, knowledge, and skills enhancement
	- The combination of AI and XR will raise new ethical and societal challenges
		- The blurring of physical and digital reality may have profound impacts on privacy, identity, and social norms
		- The increasing power and pervasiveness of AI systems in XR environments may raise concerns around control, transparency, and accountability
	- Open, decentralized networks will be critical for enabling seamless value transfer and interoperability in the metaverse
		- Centralized, walled-garden approaches will limit innovation and user choice
		- Open standards and protocols will allow for greater composability and network effects
	- Blockchain technologies like Bitcoin, particularly with Layer 2 and Layer 3 solutions, can provide a foundation for secure, efficient, and scalable value transfer in XR/AI ecosystems
		- Bitcoin's decentralized, trustless architecture aligns well with the open, permissionless ethos of the metaverse
		- Layer 2 solutions like Lightning Network can enable fast, low-cost microtransactions for virtual goods and services
		- Layer 3 protocols can enable additional functionality and interoperability on top of the core Bitcoin blockchain, including governance models
		- Unique and fungible digital objects (RGB20/21) can provide provable ownership and scarcity for virtual assets at scale

	- #### Veilid
	- A Peer-to-Peer Privacy Mesh Project
- Veilid is an open-source, mobile-first, networked application frameworkfor building decentralized apps with networking, distributed datastorage, and built-in IP privacy without reliance on external services.
-
	- **Platforms**: Runs on Linux, Mac, Windows, Android, iOS, and in browsers via WASM. Bindings available in Rust, Dart, and other languages.
	- **Goals**: Enable decentralized apps without reliance on centralized corporate systems.
- Key features include strong cryptography, ability to run on a variety ofplatforms, distributed and replicated data storage, and private routingto provide IP privacy. The decentralized design aims to avoid issueswith centralized and corporate controlled systems.
-

- # Surveillance Capitalism
	- Surveillance capitalism is a term coined by Harvard Business School professor Shoshana Zuboff to describe the business model of using data collected from individuals to target advertising and influence behaviour. The concept of surveillance capitalism emerged in the late 20th and early 21st centuries with the rise of technology companies thatspecialize in gathering and analyzing personal data.
	- The history of surveillance capitalism can be traced back to the early days of the internet. In the 1990s, companies such as DoubleClick andOmniture began collecting data on internet users’ browsing habits inorder to target advertising. As the internet grew in popularity, these companies were able to gather an increasing amount of data on individuals, allowing them to more effectively target advertising and increase profits.
		- {{twitter https://twitter.com/youranonnews/status/1816298460645068879}}
		- Big Tech firms donate substantial funds to charities, think tanks, academic research, and lobbying efforts to shape narratives and policy around tech regulation. [[Goldenfein Mann 2024]]
		- Tracking financial flows from Big Tech to DRCSOs is challenging due to limited transparency, but available data shows ongoing funding relationships.
		- Through class action cy pres settlements, Big Tech firms direct funds to DRCSOs that purport to represent class interests, but may actually advance the firms' preferred policy narratives.
		- Funding from Big Tech raises questions about potential conflicts of interest for DRCSOs and whether they truly represent the public interest as opposed to aligning with industry agendas.
		- The authors argue Big Tech philanthropy allows economic power to translate into political and cultural capital, enabling the firms to continue profiting from problematic data practices while avoiding meaningful regulation.
		- Much of the following text is paraphrased from the work of Guy Turner of‘The Coin Bureau’, and Lawyer and academic Eden Moglen, and needs more work because of it’s critical importance to the book. [[Update Cycle]]
			- The adoption of printing by Europeans in the 15th century led to concerns around access to printed material. The right to read and the right to publish were central subjects in the struggle for freedom of thought for most of the last half millennium. The basic concern was forthe right to read in private and to think, speak, and act based on a free and uncensored will. The primary antagonist for freedom of thought at the beginning of this struggle was the universal Catholic Church, an institution aimed at controlling thought in the European world through weekly surveillance of individuals, censorship of all reading material,and the ability to predict and punish unorthodox thought. In early modern Europe, the tools available for thought control were limited, but they were effective. For hundreds of years, the struggle centred around the book as a mass-manufactured article in Western culture, and whether individuals could print, possess, traffic, read, or teach from books without the permission or control of an entity empowered to punish thought. By the end of the 17th century, censorship of written material in Europe began to break down in waves throughout the European world,and the book became an article of subversive commerce, undermining the control of thought.
		- Currently, a new phase in human history is beginning as we are building a single extraneous digital nervous system, that will connect every human mind. Within two generations, every single human being will be connected to this network, in which all thoughts, plans, dreams, and actions will flow as nervous impulses. The fate of freedom of thought and human freedom as a whole will depend upon the organization of thisnetwork. Our current generation is the last in which human brains will be formed without contact with this network, and from now on, every human brain will be formed from early life in direct connection to the network, with input from generative AI/ML systems. This possibly results in humanity becoming a super organism of a sort, where each of us is buta neuron in the brain. Unfortunately, this generation has been raised to be consumers of media, which is now consuming us.
		- Anonymous reading is being determined against. Efforts discussed throughout this graph to ensure privacy, from Zimmerman and the cypherpunks onward, have been met with resistance from government efforts to monitor and control information flow. The outcome of the organization of this network, and the freedom it allows, is currently being decided by this generation.
		- It is not solely the ease of surveillance, nor solely the permanence of data, that is concerning, it is the relentless nature of living after the “end of forgetting”. Today’s encrypted traffic, which is used with relative security, will eventually be decrypted as more data becomes available for crypto analysis. This means that security protocols will need to be constantly updated and redone. Furthermore, no information is ever truly lost, and every piece of information can be retained and eventually linked to other information. This is the rationale behind government officials who argue that a robust social graph of the UnitedStates is needed. The primary form of data collection that should be of most concern is media that is used to spy on us, such as books that watch us read them and search boxes that report our searches to unknown parties. There is a lot of discussion about data coming out ofMeta/Facebook, but the true threat is code going in. For the past 15years, enterprise computing has been adding a layer of analytics on topof data warehouses, which is known as business intelligence. This allows for the vast amount of data in a company’s possession to be analysed and used to answer questions the company did not know it had. The real threat of Facebook is the business intelligence layer on top of theFacebook data warehouse, which contains the behaviour of nearly a billion people. Intelligence agencies from around the world want toaccess this layer in order to find specific classes of people, such as potential agents, sources, and individuals that can be influenced or tortured. The goal is to run code within Facebook to extract this information, instead of obtaining data from Facebook, which would be dead data once extracted. Facebook wants to be a media company andcontrol the web, but the reality is the true value of Facebook is the information and behaviour of it’s users, and the ability to mine that data. Distributed internet protocols are important in the context of government overreach into digital society and people’s private livesbecause they provide a level of decentralization and resilience that canhelp protect against censorship and surveillance.
		- For example, if a government were to attempt to censor or block access to a centralized internet service, it could potentially do so with relative ease. However, if that same service were distributed across anetwork of nodes, it would be much more difficult for the government to effectively censor or block access to it.
		- Another advantage of distributed protocols is that they are typically more resilient to attacks or failures. If one node in the network goes offline or is compromised, the others can continue to operate, ensuring that the service remains available. This can be especially important in situations where the internet is being used for critical communication,such as during a natural disaster or political crisis.
		- In addition to their benefits for censorship resistance and resilience,distributed protocols can also help protect people’s privacy. Because they do not rely on centralized servers or infrastructure, they can bemore difficult for governments or other entities to monitor or track.This can be especially important in countries where government surveillance is prevalent or where individuals may be at risk of persecution for their online activities.
		- There are a number of distributed protocols that have been developed specifically to address issues of censorship and privacy, and these will be covered in more detail later.
		- It is important to note that distributed protocols are not a silver bullet for censorship or privacy concerns. They can be vulnerable to certain types of attacks, such as those that target the nodes of the network, and they may not always be practical for certain types of applications. However, they do provide an important tool for those seeking to protect their freedom of expression and privacy online. They offer a valuable tool for those seeking to protect their freedom of expression and privacy online, and they will likely continue to play a critical role in the future of the internet.
		- In recent years, several countries have proposed or passed bills that would result in unprecedented levels of online censorship. One such example is Canada’s Bill C-11, also known as the Online Streaming Act.This bill was first proposed in November 2020 as Bill C-10, but failed to pass due to its controversial provisions. It was reintroduced inFebruary 2021 as Bill C-11 and was approved by the Canadian House ofCommons, the first step in the process of becoming law. If passed, the bill would give the Canadian Radio, Television and TelecommunicationsCommission (CRTC) the power to decide what content Canadians can view onYouTube and other social media platforms. The CRTC would also have the power to dictate what content creators can produce, with a focus on promoting "Canadian content." Additionally, the bill would require certain broadcasters to contribute to the Canada Media Fund, which is used to fund mainstream media in Canada. The bill is currently being considered by the Canadian Senate, which will vote on it in February. If passed, it will then be debated by the Canadian Parliament. Tech companies such as YouTube have reportedly failed to convince the Senate to exclude user-generated content from the bill, indicating a high likelihood of it becoming law. The potential impact on the internet andfree expression in Canada is significant, as the bill would give the government significant control over online content and restrict the ability of individuals to share their views and perspectives.
		- In a similar vein the forthcoming RESTRICT act in the USA gives hugepowers without oversight to a single branch of the US government.
			- The bill is called the “Restricting the Emergence of Security Threats that Risk Information and Communications Technology Act”
			- It was initially thought to be about banning TikTok due to its connections to the Chinese government and the data it collects on its users.
			- The RESTRICT Act has very little to do with banning TikTok and instead grants the US Secretary of Commerce significant powers to determine which entities are foreign adversaries and what technology poses a risk to national security.
			- The bill defines critical infrastructure broadly, which means it could apply to almost anything the government deems necessary. Lobbyists will be allowed to advise the Secretary of Commerce on which products and services should be labeled as foreign adversaries, potentially leading to monopolies.
			- Fines and jail time for interacting with foreign adversaries or posing a risk to national security could reach up to $1 million, 20 years in prison, and asset seizures.
			- The bill aims to crack down on VPNs (Virtual Private Networks), which provide privacy and access to foreign websites.
			- There is no oversight for the actions taken by the Secretary of Commerce under this act, and neither Congress nor the courts can request information on these decisions.
		- The European Union (EU) has separated its online censorship efforts into two separate bills: the Digital Markets Act and the Digital Services Act. These bills were introduced in December 2020 and are part of the EU’s Digital Services package, which aims to be completed by 2030. The Digital Services package is the second phase of the EU’s digital agenda, which is being enforced through regulation in the public sector and through ESG investing in the private sector. Both the Digital Markets Act and the Digital Services Act were passed in spring 2022 and went into force in autumn 2022, but will not be enforced until later this year and early next year, depending on the size of the relevant entity. The Digital Markets Act aims to increase the EU’s competitiveness in the tech space by imposing massive fines on "gatekeepers," or companies that maintain monopolies by giving preference to their own products and services. This could open the door to innovation in cryptocurrency in the EU, but also requires gatekeepers to provide detailed data about the individuals and institutions using their products and services to theE U. The Digital Services Act, on the other hand, aims to regulate the content that is available online, including user-generated content. It does this by requiring companies to remove illegal content within one hour of it being reported and by imposing fines for non-compliance. The act also requires companies to implement measures to protect users from illegal content and from "other forms of harm," which is defined broadly and could include a wide range of content. The EU is also in the process of passing the Artificial Intelligence Regulation Act, which will be discussed later this year and is reportedly the first of its kind. All five bills in the EU’s Digital Services package are regulations, meaning they will override the national laws of EU countries. The potential impact on the internet and free expression in the EU is significant, as the Digital Services Act would give the government significant control over online content and restrict the ability of individuals to share their views and perspectives.
		- In the United States, two significant documents related to online censorship are the Kids Online Safety Act and the Supreme Court caseGonzalez v. Google. The Kids Online Safety Act was introduced inFebruary 2021 and is expected to pass later this year due to bipartisan support. The act requires online services to collect Know Your Customer(KYC) information to ensure that they are not showing harmful content tominors. It also gives the Federal Trade Commission (FTC) the power to decide when children have been made unsafe online and allows parents tosue tech companies if their children have been harmed online. The act has received criticism from both sides of the political spectrum and entities outside of Congress, as it is seen as giving too much power tothe government to regulate online content and could lead to increased censorship by tech companies.
		- The Supreme Court case Gonzalez v. Google involves the question of whether Google’s algorithmic recommendations supported terrorism and contributed to the 2015 terrorist attacks in Paris. The case has been picked up by the Supreme Court after being passed up by various courts of appeal. It is being heard alongside another case, Twitter v. Tumne, involving the role of Twitter’s algorithms in a terrorist attack in Istanbul. There are two potential outcomes for the case. If the Supreme Court sides with Gonzalez, it could increase the liability of social media companies under Section 230 of the Communications Decency Act, which allows them to moderate content to a limited extent without violating the First Amendment. Alternatively, the Supreme Court could declare Section 230 unconstitutional, which would make online censorship illegal but also hinder the use of algorithms on the internet. The ideal outcome, in theory, would be for the Supreme Court to side with Google and for Congress to change Section 230. However, giving Congress the power to change the law could lead to increased censorship and the potential for abuse of power.
		- In the UK forthcoming legislation will see tech company leaders liablefor [prison sentences](https://www.independent.co.uk/news/uk/politics/bill-mps-iain-duncan-smith-molly-russell-rishi-sunak-b2263353.html) if they fail in their duty to protect minors. This will doubtless lead to both stringent universal requirements for identity proof (KYC), and significantly muted and controlled content on the platforms.
		- Our research focuses on business to business use cases for distributed technologies, and will provide mechanisms for verifying who is communicating with whom, to avoid falling foul of these swinging global infringements on privacy.
		- It is the opinion of this book that information should befree[[swartz2008guerilla]]

	- ### Rewind Pendant
		- **Description**: A wearable device designed to aid memory by passively capturing audio throughout the day.
		- **Features**:
			- Auto-records ambient sound
			- Privacy-focused with user-controlled storage
			- Lightweight and can be worn as a necklace
			- Integrates with an app for audio playback
		- **AI Aspect**: Uses AI to intelligently capture and categorize important sound bites.

- # Brain
	- Apple has submitted a patent application that raises some serious privacy and ethical concerns.
	- [From this post](https://www.linkedin.com/feed/update/urn:li:activity:7196781454519877632/)
	- ![1715807554519.jpeg](assets/1715807554519_1716117593773_0.jpeg)
	- The US Patent and Trademark Office lists application 2023/0225659 as a “biosensing device” built into Apple’s earbuds to measure “biological signal parameters from a user.”
		- 👉 Electroencephalography (EEG). In other words, the aim is to directly record the user’s brain waves from tiny sensors positioned within the ear canal.
		- 👉 Electromyography (EMG). This records muscle movements and the information can be used to help understand facial expressions and jaw movements related to emotion.
		- 👉 Electrooculography (EOG) tracks eye movements, particularly side-to-side.
		- 👉 Electrocardiogram (ECG) typically measures the electrical activity of the heart.
		- 👉 Galvanic skin response (GSR), which provides an indirect measure of emotional arousal – that is, the strength of an emotional response.
		- 👉 Blood volume pulse (BVP). This is measured using photoplethysmography and provides information about heart rate (HR) and heart rate variability (HRV).
	- In other words, the aim is to collect a very comprehensive set of neurological and biometric data from the user. Creepy, right?!
	- It’s unclear to me how you could even record meaningful data from within the ear.
	- If this kind of interface goes ahead it should be
		- 1. Voluntary. Participants should not be forced or deceived into providing physiological or neurological data. Volunteers at liberty to stop at any time.
		- 2. Limited. Personal data may only be collected for a specific, explicit and legitimate purpose. This purpose must be clearly stated, and only stored as long as needed to complete that purpose.

	- ## Approach and Innovation
		- **Method**: Utilizing high-resolution machine vision cameras and AI algorithms for capturing human presence and emotions
		- **Innovation**: Seamless tracking without requiring wearables, anonymized data processing for privacy

	- ## Market Awareness
		- **Seamless Integration**: No need for proprietary hardware or sensors
		- **Privacy Focus**: Minimal, anonymized data collection
		- **Partnerships**: Strategic collaborations with experience designers and creative industries

	- ## The evolving US position
		- In most regards the legislative front line is happening in the USA. Treasury Secretary Yellen responded to the collapse of Terra/UST [saying that](https://www.youtube.com/watch?v=kU0xYBRfgvU): it“A comprehensive regulatory framework for US dollar stable coins is needed”. She also said that the stablecoin market is too small to pose systemic risk at this time. This is clearly an evolving situation, but the incredible consumer exposure to these risky products is likely to elicit a swift and significant response, and the timing seems right for intervention. The markets suggest that USDC will be the eventual winner.
			- Piggyback off of a (Nevada) state-chartered trust \[TrueUSD, HUSD\]
			- Get dozens of money transmitter licenses \[USDC\]
		- Crucially there is also more clarity on privacy. This is a huge threatfrom digital money systems, and the USA is likely to lead. Remember though that none of this is yet law.
		- Valkenburg, the lead researcher of a US think tank in digital assets[says thefollowing](https://twitter.com/valkenburgh/status/1511783339065237521):it“Stablecoin TRUST Act, is a discussion draft mostly about stablecoins,but it also has important privacy protections for crypto users broadly:it puts real limits on warrantless surveillance by narrowing what info can be collected from third parties. Last summer we fought a provision in the infrastructure bill that damaged the privacy of crypto users by expanding the broker definition (who needs to report information about transactions to the IRS) & crypto 6050I reporting (reports on businessvtransactions over $10,000). The winter before we fought and successfully delayed a rushed proposal from the outgoing Trump administration tomandate that exchanges collect information about persons who are nottheir customers, who hold crypto at addresses in wallets they control directly. the Stablecoin TRUST Act would stop these encroachments,constrain the treasury from collecting any non public information unless they get a search warrant or collect only information voluntarily provided to an exchange by a customer and for a legitimate business purpose. If “voluntarily provided for a legitimate business purpose”sounds familiar to you, that’s b/c it’s the constitutional standard articulated by the Court in Carpenter describing LIMITED circumstances where warrantless searches of customer data are ok.It’s the standard we’ve advocated must also limit warrantless data collection at cryptoexchanges. If exchanges must collect information about non-customers,that information is, by definition, not voluntarily provided for a legitimate business purpose.”
			- The mainstream stablecoin
				- Paypal accomplish what Libra did not, and have launched a dollarstablecoin into the aggressive regulatory landscape in the USA.
				- The stablecoin will support P2P payments, PayPal checkout integration, and convertibility to other cryptocurrencies
				- PayPal’s massive reach could drive significant crypto adoption if users take up the stablecoin
				- Fits growing trend of tradfi firms like BlackRock entering crypto as regulation tightens

		- ##### Key Ideas
		- 1.  **Leveraging AI and Contextual Data:** The venue will use AI and contextual data to create dynamic narratives and activities tailored to each visitor in real-time. This will revolutionize the resort experience, making it highly personalized and immersive. However, the implementation of AI must be mindful of privacy concerns and be done in a way that respects the data sovereignty of the guests.
		- 2.  **Tailored Personalization:** Visitors should have the ability to opt into different levels of personalization. Some may want a fully immersive, personalized experience, while others may prefer a more ‘hands off’ experience. This is an important aspect of respecting individual preferences and ensuring that all visitors feel comfortable and catered for.
		- 3.  **Communication Devices:** Various communication devices could be utilized within the resort to facilitate interactions between visitors and the AI system. These could include badges, wands, glasses, headphones, etc. Each of these devices would contribute to the immersion and thematic consistency of the resort while serving a practical purpose.
		- 4.  **Biometrics:** The use of biometrics such as gaze tracking and gesture recognition could allow the AI to understand visitor preferences passively. This technology could be incorporated in a non-intrusive way to augment the guest experience without breaching privacy.
		- 5.  **Data Extraction:** Visitors should have the ability to extract their distilled data or creations, enabling them to continue their vistor experience at home. This could also open up new possibilities for visitors to create and share their own narratives based on their visit experiences. To be clear this should not be the raw data supplied to the venue inferencing engines (which should be destroyed soon after use), but rather a distilled narrative of the inference from the system.
		  extends beyond the confines of the experience itself.

		- ### Oppression Risks
	 - **Surveillance Capabilities:** Explores the risks of AI-enhanced surveillance, detailing how pervasive monitoring could lead to oppressive societal structures and a significant loss of privacy and autonomy.
	 - **AI as a Disruptive Force:** Discusses how AI, like historical technological advancements, has the potential to be a disruptive force, reshaping societal structures, power dynamics, and individual lives.
	 - **Historical Analogies:** Draws parallels between AI's potential impacts and historical events like the English Civil War, emphasizing the transformative role of technology in societal upheaval.

	- ### 3.  **Verifiable Credentials (VCs)**
	- **Overview**: VCs are a standard for conveying claims about an identity in a way that is cryptographically secure, privacy-respecting, and machine-verifiable.
	- **Use Cases**: They are used in scenarios ranging from proving educational qualifications and professional certifications to identity verification online without revealing unnecessary personal information.

	- # AI's Impact on Power, Privacy, and Personal Sovereignty
		- **Concentration of Power in AI:**
				- AI's development requires substantial resources, creating a disparity between entities that can afford these resources and those that cannot.
				- This disparity widens the gap between large corporations and smaller entities, including academic institutions and startups.
				- **Deeper Insight:** The economic divide in AI reinforces existing power structures, where the entities with the most data and computational power dictate AI's evolution and application.
		- **Gating of Information:**
			- **Access Control by AI:**
			- **Transparency and Accountability:**
				- There is a lack of transparency in how AI algorithms function and make decisions.
				- This opaqueness makes it difficult for the public to understand or challenge AI-driven decisions.
			- **AI as a Surveillance Tool:**
				- AI technologies, particularly in facial recognition and behavior prediction, are increasingly used for surveillance, infringing on individual privacy.
				- The collection and use of personal data for AI training often occur without clear consent from individuals.
				- Data subjects rarely have control over how their data is used, contributing to the erosion of personal sovereignty.
				- **Deeper Insight:** The lack of control over personal data signifies a shift in power dynamics, where individuals have little say in how their information is utilized and monetized.
				- Workers are often required to train AI systems that may eventually replace them, raising ethical questions about labor rights.
				- **Deeper Insight:** The transition towards an AI-driven economy necessitates a reevaluation of labor laws and protections to safeguard workers' rights in a changing landscape.
			- **Ethical Concerns in AI Training:**
				- **Deeper Insight:** The reliance on human labor for AI's 'intelligence' contrasts with the narrative of AI as an autonomous, advanced technology, highlighting the need for better working conditions and ethical standards in AI development.
		- **Future Outlook and Regulations:**
				- **Deeper Insight:** Effective regulation of AI requires a multidisciplinary approach, involving lawmakers, technologists, ethicists, and the public to ensure that AI serves the common good without infringing on individual rights.
			- **Personal Sovereignty in the Digital Age:**
				- As AI becomes more integrated into daily life, maintaining personal sovereignty over data and privacy becomes increasingly challenging.
		- [Where and who you are in VR has a real impact, study finds | Stanford News](https://news.stanford.edu/2022/12/14/vr-real-impact-study-finds/)
		- [New Stanford University study reveals almost 60% of seniors felt less isolated socially after their #[[Virtual Reality]] experience
		- the opposite of the stereotype that #VR is an isolating technology! Additionally, 80% of them had a more positive attitude after the experience. The study involved interviewing residents of 17 senior communities who who could choose from virtual experiences such as parachuting, watching stage performances, or visiting places like Paris and Egypt. They used both HTC VIVE Flow and PICO XR headsets. The study was conducted in collaboration with Chris B., CEO of Mynd Immersive, and is part of a wider study to help lessen the impact of #dementia. I particularly enjoyed the final comment by senior resident Pete Audet at the end of this video who shared our wonder about how exciting the next 10 years of this technology is going to be 𣰊	 - Search (bing.com)](https://www.bing.com/search?q=New+Stanford+University+study+reveals+almost+60%25+of+seniors+felt+less+isolated+socially+after+their+%23VirtualReality+experience+-+the+opposite+of+the+stereotype+that+%23VR+is+an+isolating+technology!+Additionally%2C+80%25+of+them+had+a+more+positive+attitude+after+the+experience.+The+study+involved+interviewing+residents+of+17+senior+communities+who+who+could+choose+from+virtual+experiences+such+as+parachuting%2C+watching+stage+performances%2C+or+visiting+places+like+Paris+and+Egypt.+They+used+both+HTC+VIVE+Flow+and+PICO+XR+headsets.+The+study+was+conducted+in+collaboration+with+Chris+B.%2C+CEO+of+Mynd+Immersive%2C+and+is+part+of+a+wider+study+to+help+lessen+the+impact+of+%23dementia.+I+particularly+enjoyed+the+final+comment+by+senior+resident+Pete+Audet+at+the+end+of+this+video+who+shared+our+wonder+about+how+exciting+the+next+10+years+of+this+technology+is+going+to+be+%F0%9F%91%8F&cvid=3fc42482a4bb482d8ea881dc2efc2960&gs_lcrp=EgZjaHJvbWUyBggAEEUYOTIGCAEQRRhA0gEHNTcxajBqNKgCALACAA&FORM=ANAB01&PC=U531)
		- [moore-et-al-2023-from-65-to-103-older-adults-experience-virtual-reality-differently-depending-on-their-age-evidence.pdf (stanford.edu)](https://vhil.stanford.edu/sites/g/files/sbiybj29011/files/media/file/moore-et-al-2023-from-65-to-103-older-adults-experience-virtual-reality-differently-depending-on-their-age-evidence.pdf) -
		- The New York Times (nytimes.com)](https://www.nytimes.com/2024/02/14/opinion/ai-economy-jobs-colleges.html).
		- **Education and Training Reevaluation**:
			- Surveys show a strong preference for soft skills over technical AI skills among executives, recognizing the importance of interpersonal abilities.
			- The transition towards a "relationship economy" emphasizes social abilities and people skills as central to future success.
		- **Opportunities for Equity and Revaluation**:
			- The evolving economy offers a chance to address gender disparities by valuing skills traditionally considered feminine.
			- This shift invites a broader vision for human potential, advocating for a workforce that values emotional intelligence and the heart alongside the intellect.
			- People who can act within the context of a "bubble of one" with their AI agents will likely prosper, even within the context of employment contracts in larger corporate structures.
	- Microsoft working trends, technical debt through loss to communication systems [[Social contract and jobs]]
	- [AI Can (Mostly) Outperform Human CEOs (hbr.org)](https://hbr.org/2024/09/ai-can-mostly-outperform-human-ceos) [[Social contract and jobs]]
	- https://arstechnica.com/information-technology/2024/09/omnipresent-ai-cameras-will-ensure-good-behavior-says-larry-ellison/ [[Privacy, Trust and Safety]] [[Social contract and jobs]]
	- https://pluralistic.net/2024/09/09/low-wage-100/ [[Money]] [[Social contract and jobs]] [[Equity]]
	- [AI May Not Steal Many Jobs After All | TIME](https://time.com/7016801/ai-jobs/) [[Social contract and jobs]]
		- [The impact of artificial intelligence on employment: the role of virtual agglomeration | Humanities and Social Sciences Communications (nature.com)](https://www.nature.com/articles/s41599-024-02647-9)
		- [The Impact of AI on Job Roles, Workforce, and Employment: What You Need to Know (innopharmaeducation.com)](https://www.innopharmaeducation.com/our-blog/the-impact-of-ai-on-job-roles-workforce-and-employment-what-you-need-to-know)
		- [The Impact of Artificial Intelligence on Jobs: A Dual Perspective - SSLPost](https://www.sslpost.com/the-impact-of-artificial-intelligence-on-jobs-a-dual-perspective/)
		- [AI Jobs Barometer | PwC](https://www.pwc.com/gx/en/issues/artificial-intelligence/ai-jobs-barometer.html)
	- In a leaked recording, Amazon cloud chief tells employees that most developers could stop coding soon as AI takes over
	  Eugene Kim Aug 20, 2024, 8:38 PM BST [[Social contract and jobs]]
		- That's according to Amazon Web Services' CEO, Matt Garman, who shared his thoughts on the topic during an internal fireside chat held in June, according to a recording of the meeting obtained by Business Insider.
		- "If you go forward 24 months from now, or some amount of time — I can't exactly predict where it is — it's possible that most developers are not coding," said Garman, who became AWS's CEO in June.
		- "Coding is just kind of like the language that we talk to computers. It's not necessarily the skill in and of itself," the executive said. "The skill in and of itself is like, how do I innovate? How do I go build something that's interesting for my end users to use?"
		- This means the job of a software developer will change, Garman said.
	- [Please stop using AI to make Wes Anderson parodies | Stuart Heritage](https://www.theguardian.com/film/2023/may/11/wes-anderson-parodies-ai) [[Social contract and jobs]]
	- [The creepiness of conversational AI has been put on full display](https://bigthink.com/the-present/danger-conversational-ai/%7D%7B%60The) [[Social contract and jobs]]
	- [Taser Company Axon Is Selling AI That Turns Body Cam Audio Into Police Reports (forbes.com)](https://www.forbes.com/sites/thomasbrewster/2024/04/23/axon-ai-police-reports-/) [[Social contract and jobs]]
	- [AI key to future national security decision making, but brings its own risks | The Alan Turing Institute](https://www.turing.ac.uk/news/ai-key-future-national-security-decision-making-brings-its-own-risks) [[Cyber Security and Military]] [[Social contract and jobs]] [[Politics, Law, Privacy]]

	- # Soon, Next, and Later 
	  id:: 659a9246-af6b-4582-9368-3b688130d703 collapsed:: true (exclusively optimistic take)
			- Understanding AI and digital technologies for information and service access.
			- Ensuring privacy and mitigating biases in AI algorithms.
			- 2-5 years of integration with business processes.
			- Models start to distribute across cloud and devices to find their correct scale **fit**.

	- ## [[Politics, Law, Privacy]]
		- 🟢 Half the world goes to the polls this year. More than 50 countries, 4B people.
		- [How OpenAI is approaching 2024 worldwide elections](https://openai.com/blog/how-openai-is-approaching-2024-worldwide-elections)
		- It's not just deepfakes, but adverts, and influencer material on social media. 100x the number with 1/10th the engagement is still a 10x positive for free.
			- 🟢 This is Professor [Ethan Mollick | LinkedIn](https://www.linkedin.com/in/emollick/) using HeyGen and 30s of footage to create a deepfake.
			- [One Useful Thing | Ethan Mollick | Substack](https://www.oneusefulthing.org/) [[Education and AI]] and [[Proprietary Large Language Models]] blog
				- His most recent post is [Signs and Portents](https://www.oneusefulthing.org/p/signs-and-portents) and you should check it.
			- ![1704433632082.mp4](assets/1704433632082_1704449202180_0.mp4)
		- Autodial chatbots that can have plausible and convincing conversations with voters. I briefly saw someone had made one of these using a $20 GPT subscription.
		- ![image.png](assets/image_1704292836040_0.png)
		- [Kyle Taylor: books, biography](https://www.amazon.co.uk/stores/Kyle-Taylor/author/B09G759JR3?)
		- He talks about something I have similarly been saying:
			- In the event of a complete breakdown of trust in digital information channels people will simply choose only to trust their priors.
		- he's actually a great choice](https://www.gov.uk/government/news/tech-entrepreneur-ian-hogarth-to-lead-uks-ai-foundation-model-taskforce)
			- [Welcome to State of AI Report 2023](https://www.stateof.ai/)
			- America is supportive of UK positioning around [[Privacy, Trust and Safety]]. They have a compatible legal framework, and we are doing useful work that they are ill positioned to do in exploring the legal space.
			- This perhaps explains the £2.5B [[Infrastructure]] and training investment plan by Microsoft.
			- These companies are **as big** as the UK. Beware tech bros bearing gifts?

	- ### Web things
		- [[Politics, Law, Privacy]]

	- ## Key Features
		- VisionFlow's features emphasize real-time interaction, privacy, and extensibility.

	- ### Privacy Risks

		- ## Privacy and Data Protection Concerns
				- **Lack of Public Awareness:** There is a general lack of transparency regarding how data is collected, analysed, and used by both the government and private companies. This opacity makes it difficult for the public to understand the full implications of the surveillance systems.
				- **GDPR Concerns:** Civil liberties organisations in France have expressed concerns that the extensive data collection practices may violate the GDPR. The regulation is designed to protect individuals' privacy and personal data, and the new surveillance measures may conflict with these protections.
			- **Event Detection:** Identifies potential security threats and unusual activities, allowing for rapid response by security personnel.
		- **Implications for Privacy:** The normalisation of these surveillance practices could lead to ongoing privacy infringements and the erosion of civil liberties. There is a concern that once such extensive surveillance is established, it will be difficult to revert to pre-Olympics levels of privacy protection.

	- ### Privacy and Surveillance
		- **The development of more powerful and general-purpose AI systems.**
		- **The increasing integration of AI into our daily lives.**
	- [[Large language models]]

	- ## Title: The Advantages of Bitcoin
	- **Open Source**: The open-source nature of Bitcoin fosters transparency and collective development.
	- **Anonymity and Privacy**: Bitcoin provides a degree of anonymity in transactions.
	- **Promoting Democracy**: By decentralizing control over money, Bitcoin can potentially support democratic movements.
	- **Freedom**: Overall, Bitcoin is presented as a tool for financial and personal freedom.
	  
	  https://bitcoinmagazine.com/culture/bitcoin-blockchain-is-fighting-fraud-in-guatemalas-presidential-elections
	  
	  

		- ### Unblinding the Signature
			- Use the previously generated secret key to unblind the mint's signature. This process converts the blinded signature into a form usable for transactions while maintaining the integrity of the privacy guarantees.
				- Implement the ability to receive ecash by processing transactions from others. Validate these transactions with the Cashew mint to ensure they have not been double-spent.

		- ### Security and Privacy Concerns

		- #### Scalability and Efficiency
		- The [[Decentralised Web]] Nostr architecture allows for efficient distribution and retrieval of marketing content.
		- Advertiser subsidies help maintain a robust and reliable network infrastructure.
		- Advanced AI and ML techniques will enhance [[Hyper personalisation]] and DCO capabilities, fostering a thriving ecosystem benefiting from a privacy-focused approach. -

- # AI Scientist Paper
- Here are the three files adapted to your inquiry on client-side hyper-personalization, dynamic creative optimization (DCO), and dynamic content optimization using the Nostr relay protocol, embeddings, and local AI.
	  [
	    {
	        "Name": "local_ai_personalization",
	        "Experiment": "Develop a client-side AI system that uses local embeddings to personalize content based on user preferences and interactions. The system will generate personalized multimedia assets in real-time, using local data while maintaining privacy by not sharing any data with external servers. Evaluate the system's performance in terms of user engagement, content relevance, and privacy preservation.",
	        "Experiment": "Implement a dynamic content optimization system that leverages the Nostr relay protocol for real-time content delivery. The system will match content from a distributed network of vendors to users based on locally generated embeddings. Test the system's effectiveness in delivering relevant content while preserving user data sovereignty and minimizing latency.",
	        "Interestingness": 9,
	    },
	        "novel": true
	    },
	        "Novelty": 8,
	    {
	        "Name": "multimodal_asset_generation",
	        "Novelty": 8,

	- ### Spatial web
-
	- Concerns about weakened privacy due to reporting standards in the name of customer safety and national security
-
	- Binance CEO supports MiCA, calling it a pragmatic solution
-
	- EU’s MiCA could become a global template for international companies
-
	- UK, now outside the EU, is setting similar stablecoin and crypto asset service rules
- Germany is bringing forward legislation allowing the ‘tokenisation’ oflegacy instruments such as stocks, though it’s far from clear what thevalue of this would be, except perhaps lowering risk for custodians. Itseems that this EU position has prompted the UK government to seize thepotential competitive advantage offered, and there will be more on thislater. Japan meanwhile has gone so far as to [make anannouncement](https://cointelegraph.com/news/japanese-prime-minister-says-gov-t-investment-in-digital-transformation-will-include-metaverse-nfts)about supporting the technologies at a national level.
- It’s a complex evolving narrative, and clearly contradictions arecommon. Right now there seems little appeal for stepping into Web3. Intothe confusion, this book advances a narrow take, and toolset, whichmight extract some value from the technologies, while maintaining a lowbarrier to entry.
-

	- #### Veilid
	- A Peer-to-Peer Privacy Mesh Project
- Veilid is an open-source, mobile-first, networked application frameworkfor building decentralized apps with networking, distributed datastorage, and built-in IP privacy without reliance on external services.
-
	- **Platforms**: Runs on Linux, Mac, Windows, Android, iOS, and in browsers via WASM. Bindings available in Rust, Dart, and other languages.
	- **Goals**: Enable decentralized apps without reliance on centralized corporate systems.
- Key features include strong cryptography, ability to run on a variety ofplatforms, distributed and replicated data storage, and private routingto provide IP privacy. The decentralized design aims to avoid issueswith centralized and corporate controlled systems.
-

	- ### Rewind Pendant
		- **Description**: A wearable device designed to aid memory by passively capturing audio throughout the day.
		- **Features**:
			- Auto-records ambient sound
			- Privacy-focused with user-controlled storage
			- Lightweight and can be worn as a necklace
			- Integrates with an app for audio playback

	- # AI's Impact on Power, Privacy, and Personal Sovereignty
				- **Deeper Insight:** The economic divide in AI reinforces existing power structures, where the entities with the most data and computational power dictate AI's evolution and application.
		- **Gating of Information:**
			- **Access Control by AI:**
				- This opaqueness makes it difficult for the public to understand or challenge AI-driven decisions.
			- **AI as a Surveillance Tool:**
				- **Deeper Insight:** The lack of control over personal data signifies a shift in power dynamics, where individuals have little say in how their information is utilized and monetized.
				- Workers are often required to train AI systems that may eventually replace them, raising ethical questions about labor rights.
				- **Deeper Insight:** The transition towards an AI-driven economy necessitates a reevaluation of labor laws and protections to safeguard workers' rights in a changing landscape.
				- **Deeper Insight:** Effective regulation of AI requires a multidisciplinary approach, involving lawmakers, technologists, ethicists, and the public to ensure that AI serves the common good without infringing on individual rights.
			- **Personal Sovereignty in the Digital Age:**
				- As AI becomes more integrated into daily life, maintaining personal sovereignty over data and privacy becomes increasingly challenging.
		- [moore-et-al-2023-from-65-to-103-older-adults-experience-virtual-reality-differently-depending-on-their-age-evidence.pdf (stanford.edu)](https://vhil.stanford.edu/sites/g/files/sbiybj29011/files/media/file/moore-et-al-2023-from-65-to-103-older-adults-experience-virtual-reality-differently-depending-on-their-age-evidence.pdf) -
		- The New York Times (nytimes.com)](https://www.nytimes.com/2024/02/14/opinion/ai-economy-jobs-colleges.html).
		- **Education and Training Reevaluation**:
		- [The impact of artificial intelligence on employment: the role of virtual agglomeration | Humanities and Social Sciences Communications (nature.com)](https://www.nature.com/articles/s41599-024-02647-9)
		- [The Impact of AI on Job Roles, Workforce, and Employment: What You Need to Know (innopharmaeducation.com)](https://www.innopharmaeducation.com/our-blog/the-impact-of-ai-on-job-roles-workforce-and-employment-what-you-need-to-know)
		- [The Impact of Artificial Intelligence on Jobs: A Dual Perspective - SSLPost](https://www.sslpost.com/the-impact-of-artificial-intelligence-on-jobs-a-dual-perspective/)
		- [AI Jobs Barometer | PwC](https://www.pwc.com/gx/en/issues/artificial-intelligence/ai-jobs-barometer.html)
	- In a leaked recording, Amazon cloud chief tells employees that most developers could stop coding soon as AI takes over
	  Eugene Kim Aug 20, 2024, 8:38 PM BST [[Social contract and jobs]]
		- That's according to Amazon Web Services' CEO, Matt Garman, who shared his thoughts on the topic during an internal fireside chat held in June, according to a recording of the meeting obtained by Business Insider.
		- "If you go forward 24 months from now, or some amount of time — I can't exactly predict where it is — it's possible that most developers are not coding," said Garman, who became AWS's CEO in June.
		- "Coding is just kind of like the language that we talk to computers. It's not necessarily the skill in and of itself," the executive said. "The skill in and of itself is like, how do I innovate? How do I go build something that's interesting for my end users to use?"
		- This means the job of a software developer will change, Garman said.
	- [Please stop using AI to make Wes Anderson parodies | Stuart Heritage](https://www.theguardian.com/film/2023/may/11/wes-anderson-parodies-ai) [[Social contract and jobs]]

	- ## [[Politics, Law, Privacy]]
		- 🟢 Half the world goes to the polls this year. More than 50 countries, 4B people.
		- [How OpenAI is approaching 2024 worldwide elections](https://openai.com/blog/how-openai-is-approaching-2024-worldwide-elections)
		- It's not just deepfakes, but adverts, and influencer material on social media. 100x the number with 1/10th the engagement is still a 10x positive for free.
			- 🟢 This is Professor [Ethan Mollick | LinkedIn](https://www.linkedin.com/in/emollick/) using HeyGen and 30s of footage to create a deepfake.
			- [One Useful Thing | Ethan Mollick | Substack](https://www.oneusefulthing.org/) [[Education and AI]] and [[Proprietary Large Language Models]] blog
				- His most recent post is [Signs and Portents](https://www.oneusefulthing.org/p/signs-and-portents) and you should check it.

	- ## Key Features
		- VisionFlow's features emphasize real-time interaction, privacy, and extensibility.
				- **Nostr Authentication**: Decentralized identity without centralized providers; users control their keys.
				- **Private Datasets**: All processing happens on your infrastructure; no data leaves your environment.
	  
	  // 0: Defaults
	  // 1: Model
	  // 2: Camera
	  #define MOUSE_CONTROL 1
	  
	  
	      p = cos(a)*p + sin(a)*vec2(p.y, -p.x);
	  }
	  float smax(float a, float b, float r) {
	      float m = max(a, b);
	      if ((-a < r) && (-b < r)) {
	  }

		- ## Privacy and Data Protection Concerns
				- **Lack of Public Awareness:** There is a general lack of transparency regarding how data is collected, analysed, and used by both the government and private companies. This opacity makes it difficult for the public to understand the full implications of the surveillance systems.
				- **GDPR Concerns:** Civil liberties organisations in France have expressed concerns that the extensive data collection practices may violate the GDPR. The regulation is designed to protect individuals' privacy and personal data, and the new surveillance measures may conflict with these protections.

	- ## Title: The Advantages of Bitcoin
	- **Open Source**: The open-source nature of Bitcoin fosters transparency and collective development.
	- **Anonymity and Privacy**: Bitcoin provides a degree of anonymity in transactions.

	- ## Prerequisites
			- Add basic HTML to create buttons for sending and receiving ecash.
			- Utilize cryptographic libraries available in JavaScript for secure key generation.

		- ### Creating and Paying a Lightning Invoice
			- Implement a function to check the payment status of the invoice, waiting for confirmation before proceeding.

		- ### Unblinding the Signature

		- ##### Key Ideas
		- 1.  **Leveraging AI and Contextual Data:** The venue will use AI and contextual data to create dynamic narratives and activities tailored to each visitor in real-time. This will revolutionize the resort experience, making it highly personalized and immersive. However, the implementation of AI must be mindful of privacy concerns and be done in a way that respects the data sovereignty of the guests.
		- 2.  **Tailored Personalization:** Visitors should have the ability to opt into different levels of personalization. Some may want a fully immersive, personalized experience, while others may prefer a more ‘hands off’ experience. This is an important aspect of respecting individual preferences and ensuring that all visitors feel comfortable and catered for.
		- This lenticular 3D display with dynamic view steering provides illusion of depth for multiple viewers simultaneously, creating an immersive large-screen 3D experience without the need for special glasses. The real-time tracking and rendering system updates the content smoothly as the viewers move around, maintaining the stereo 3D perspectives tailored individually to each viewer’s changing position.
	- Starting with a small-scale proof of concept for up to 5 people would allow for demonstration of the capabilities and building stakeholder confidence. This would also provide valuable insights into the technical and logistical challenges that may arise during larger-scale implementation.

	- # AI's Impact on Power, Privacy, and Personal Sovereignty
				- **Deeper Insight:** The economic divide in AI reinforces existing power structures, where the entities with the most data and computational power dictate AI's evolution and application.
			- **AI as a Surveillance Tool:**
				- **Deeper Insight:** The lack of control over personal data signifies a shift in power dynamics, where individuals have little say in how their information is utilized and monetized.
				- Workers are often required to train AI systems that may eventually replace them, raising ethical questions about labor rights.
				- **Deeper Insight:** Effective regulation of AI requires a multidisciplinary approach, involving lawmakers, technologists, ethicists, and the public to ensure that AI serves the common good without infringing on individual rights.
		- "If you go forward 24 months from now, or some amount of time — I can't exactly predict where it is — it's possible that most developers are not coding," said Garman, who became AWS's CEO in June.
		- "Coding is just kind of like the language that we talk to computers. It's not necessarily the skill in and of itself," the executive said. "The skill in and of itself is like, how do I innovate? How do I go build something that's interesting for my end users to use?"
		- This means the job of a software developer will change, Garman said.
	- [Please stop using AI to make Wes Anderson parodies | Stuart Heritage](https://www.theguardian.com/film/2023/may/11/wes-anderson-parodies-ai) [[Social contract and jobs]]

	- ## Key Features
		- VisionFlow's features emphasize real-time interaction, privacy, and extensibility.
				- **Nostr Authentication**: Decentralized identity without centralized providers; users control their keys.
				- **Private Datasets**: All processing happens on your infrastructure; no data leaves your environment.
	  
	  // 0: Defaults
	  // 1: Model

		- ### Creating and Paying a Lightning Invoice
			- Implement a function to check the payment status of the invoice, waiting for confirmation before proceeding.

		- ### Unblinding the Signature

		- ##### Key Ideas
		- 1.  **Leveraging AI and Contextual Data:** The venue will use AI and contextual data to create dynamic narratives and activities tailored to each visitor in real-time. This will revolutionize the resort experience, making it highly personalized and immersive. However, the implementation of AI must be mindful of privacy concerns and be done in a way that respects the data sovereignty of the guests.
		- 2.  **Tailored Personalization:** Visitors should have the ability to opt into different levels of personalization. Some may want a fully immersive, personalized experience, while others may prefer a more ‘hands off’ experience. This is an important aspect of respecting individual preferences and ensuring that all visitors feel comfortable and catered for.
		- This lenticular 3D display with dynamic view steering provides illusion of depth for multiple viewers simultaneously, creating an immersive large-screen 3D experience without the need for special glasses. The real-time tracking and rendering system updates the content smoothly as the viewers move around, maintaining the stereo 3D perspectives tailored individually to each viewer’s changing position.
  impact the model? Is it likely to contain any missing values? Adoptance
  from users/customers Will it be easy to get people to use the AI in
  their business?
  Governance Is the data accessible and are you allowed to use it? Who is
  simulation of a visual effect or scene is created prior to its actual
- The LED wall virtual production process typically involves using a
		  worthy of comment; it is now so prevalent that it is no longer even

	- # AI's Impact on Power, Privacy, and Personal Sovereignty
				- **Deeper Insight:** The economic divide in AI reinforces existing power structures, where the entities with the most data and computational power dictate AI's evolution and application.
			- **AI as a Surveillance Tool:**
				- **Deeper Insight:** The lack of control over personal data signifies a shift in power dynamics, where individuals have little say in how their information is utilized and monetized.

- #### 4.12.17 Data Privacy and Open-source AI
  Data privacy is a further point of contention. Open-source AI, coupled with increasingly ubiquitous data collection methods, raises concerns about individuals' privacy. However, it also provides an opportunity to develop robust, decentralized, and transparent AI systems that respect user privacy.

- ## Crime
	- AI is already starting to be used in crime detection, crime prediction, and the data brokered by these tech behemoths is already making mistakes. [My chilling run-in with secretive facial-recognition app Clearview AI (telegraph.co.uk)](https://www.telegraph.co.uk/books/non-fiction/clearview-ai-facial-recognition-app-chilling/)
	- As AI increasingly bakes in these data points into ever larger scraped datasets it will be impossible to unwind one's personal history.
	- This too will increasingly be done by AI. We are trending toward AI fighting with AI over your data and the minutiae of your history in ever changing local and global political environments
	- People are concerned about this. There are already apps to semi automate data deletion online. The collapse in [[Privacy, Trust and Safety]] since the 1970s is clearly documented across governments, media, and big business, but curiously people are trusting both their online social in groups, and machines that act human "enough" far more.  Recently, for unknown reasons they have also started to [[Privacy, Trust and Safety]] "business" more. logseq://graph/ResearchPapers?block-id=656c9724-f862-4f4e-9a88-75b8b3f1b4e7
	-
-
  Furthermore, the issue of worker surveillance, especially with the rise of remote work regimes, has garnered the attention of various entities, including the White House. This is due to concerns over automated systems that employers are using to monitor their remote workers, highlighting a less benign context of surveillance.

- ### Legal Framework, International Agreements, and Concerns
	- **Minimal Legal Barriers**: The acquisition of commercial data by governments faces scant legal opposition, attributed to the classification of such data as "publicly available." This status exempts it from the stringent privacy protections applicable to more confidential data.
	- **Privacy and Civil Liberties Issues**: The extensive gathering and utilisation of personal data by governmental entities elicit significant privacy alarms. Despite assurances of anonymisation, methods often exist to re-identify individuals, raising consent and privacy violation concerns.
	- **Data Sharing Agreements
		- Five Eyes Alliance**: International agreements like the Five Eyes (comprising Australia, Canada, New Zealand, the United Kingdom, and the United States) facilitate extensive data sharing for intelligence purposes. This raises the stakes for data privacy, with personal data potentially shared across borders without explicit consent from individuals.

- ## Introduction to Cashew
	- Cashew is a protocol designed for facilitating Bitcoin banking operations. It leverages the concept of blinded servers to enhance privacy, allowing for the secure issuance and management of electronic cash (ecash) notes.
	- [Cashu workshop YouTube](https://www.youtube.com/watch?v=xfYmwc-gnK8)
	- [Cashew GitHub Repository](https://github.com/cashubtc)
	- [Get started with eNuts](https://www.enuts.cash/get-started)
	- [Cashu Token Decoder (nostrapps.github.io)](https://nostrapps.github.io/cashu/)
	-

- ## **Ethical Considerations**
  
  The use of agentic systems in call centers raises ethical considerations that need to be addressed:
  
  * **Transparency:** Customers should be informed when they are interacting with an AI system20.  
  * **Data privacy:** Businesses need to ensure the responsible use of customer data and protect it from unauthorized access21. This includes being mindful of potential surveillance and behavior manipulation concerns 21.  
  * **Bias mitigation:** Steps should be taken to identify and mitigate biases in AI systems to prevent discriminatory outcomes22.  
  * **Accountability:** Mechanisms should be in place to ensure accountability for the actions and decisions of agentic AI systems23. This includes addressing the opacity of AI decision-making and ensuring that the reasoning behind AI actions is understandable and explainable 21.  
  * **Addressing ethical considerations in AI is crucial for businesses, not only to maintain customer trust but also to avoid potential legal and reputational risks 21.**

- ## OpenAI's Vision
	- Envisions ChatGPT as a super-smart personal assistant
	- Continuous development towards agent-like capabilities
	- Developing agents for device-specific and web-based tasks
	- Device agents automate actions like data transfer and report filling
	- Raises ethical and privacy concerns regarding AI's role in decision-making
-
- ![1706600234975.jpg](assets/1706600234975_1706603103369_0.jpg){:height 987, :width 1250}
-

- ##### Privacy and Security
	- The tracking data provides extremely valuable insights for personalizing experiences but raises significant privacy concerns. Thoughtful design around privacy and security, including data segmentation, auditing, and transparency, is critical to protect user data and ensure compliance with privacy regulations.

- #### 4.12.17 Data Privacy and Open-source AI
  Data privacy is a further point of contention. Open-source AI, coupled with increasingly ubiquitous data collection methods, raises concerns about individuals' privacy. However, it also provides an opportunity to develop robust, decentralized, and transparent AI systems that respect user privacy.

- #### 4.12.13 Open-source AI and Global Politics
  However, as beneficial as open-source AI may appear, the complexity of global politics can make the transition challenging. A landscape where AI technologies are open-source and freely available brings about potential dilemmas in various areas including national security, economic competitiveness, intellectual property rights, and data privacy.

- #### 4.12.3 Increased Surveillance Through AI
  Another critical concern around AI and authoritarianism is the potential for increased surveillance. With the integration of AI and data scraping techniques, governments can employ extensive teams to facilitate unprecedented levels of surveillance, compromising privacy. Such concerns are raised in the works of authors like Daniel Oberhaus, who posits that authoritarian regimes may have an advantage in AI due to their willingness to exploit data, such as advanced facial recognition data, in ways that open societies might not.

- ## Crime
	- AI is already starting to be used in crime detection, crime prediction, and the data brokered by these tech behemoths is already making mistakes. [My chilling run-in with secretive facial-recognition app Clearview AI (telegraph.co.uk)](https://www.telegraph.co.uk/books/non-fiction/clearview-ai-facial-recognition-app-chilling/)
	- As AI increasingly bakes in these data points into ever larger scraped datasets it will be impossible to unwind one's personal history.
	- This too will increasingly be done by AI. We are trending toward AI fighting with AI over your data and the minutiae of your history in ever changing local and global political environments
	- People are concerned about this. There are already apps to semi automate data deletion online. The collapse in [[Privacy, Trust and Safety]] since the 1970s is clearly documented across governments, media, and big business, but curiously people are trusting both their online social in groups, and machines that act human "enough" far more.  Recently, for unknown reasons they have also started to [[Privacy, Trust and Safety]] "business" more. logseq://graph/ResearchPapers?block-id=656c9724-f862-4f4e-9a88-75b8b3f1b4e7
	-
-

- ## [[Politics, Law, Privacy]]
	- EU AI act is it'll be near impossible now for small disruptive companies to train foundation models because of the administration overhead. Win for America.
	- Governments can now use real-time biometric surveillance in public spaces in prevention of genuine, present, or foreseeable threats, and searches for people suspected of the most serious crimes, so basically everything.
		- "Real-time’ remote biometric identification (RBI) in publicly accessible spaces is prohibited for law enforcement, except when: searching for missing persons, abduction victims, and people who have been human trafficked or sexually exploited; preventing substantial and imminent threat to life, or foreseeable terrorist attack; or identifying suspects in serious crimes (e.g., murder, rape, armed robbery, narcotic and illegal weapons trafficking, organised crime, and environmental crime, etc.)."
	- That will include gait analysis BTW. Europeans just took a big privacy hit. All your personal data goes to the USA, all your private movements go to Interpol (five eyes, eight eyes)
	- Already there are some 3000 constantly updated data point about all users of the internet. This is routinely bought and sold. According to Fowler at the Washington Post by the time a child with a phone is 13 there may be 72 million data points on them, and it's supposed to be illegal to track children
	- Politicians, law enforcement, and private companies have various constraints and restraints based on jurisdiction, but even strong laws like GDPR are routinely (always) ignored through technologies like browser fingerprinting.
		- [Cover Your Tracks (eff.org)](https://coveryourtracks.eff.org/)
		- [CreepJS (abrahamjuliot.github.io)](https://abrahamjuliot.github.io/creepjs/)
	- ![1715109606571.jpeg](assets/1715109606571_1715110469719_0.jpeg)
	- logseq://graph/ResearchPapers?block-id=656c99ec-9ee4-46f5-bbf2-33f54f2090d9
	- As we have seen in the overturning of the USA abortion ban, the law can change, leaving individuals vulnerable to external forces. Googles promise to delete sensitive data in this case was not carried out. This is their business model and they are not our friends. Police went through 24GB of data from companies with key private chats provided by Meta in order to prosecute a 17 year old girl.
		- [The Hidden-Pregnancy Experiment | The New Yorker](https://www.newyorker.com/culture/the-weekend-essay/the-hidden-pregnancy-experiment)
	- ![image.png](assets/image_1701614102581_0.png){:width 600}
-

- ### Applications Overview
  ```mermaid
  graph TD
      A["Enhanced Social<br>Awareness"] -->|Insights| B[User Interaction]
      B --> C["Personalized<br>Recommendations"]
      A --> D["Social<br>Simulations"]
      subgraph Ethical Considerations
          E[Privacy and Consent]
          F[Bias Mitigation]
          G[Transparency]
          H[Security Measures]
          E & F & G & H --> I[Policy Compliance]
      end
      subgraph Applications
          I1["Networking<br>Events"] --> B
          I2["Social<br>Gatherings"] --> B
          I3["Online<br>Communities"] --> B
          I4["Virtual<br>Labs"] --> D
      end
  ```

- ### The Erosion of Human Agency, Autonomy, and Creativity
	- One of Santacaterina's primary concerns is the growing reliance on AI systems in critical domains such as healthcare, justice, and employment. We can perhaps all see that even human breeding choices are seeded now by algorithms in dating apps. She warns of the dangers of algorithmic decision-making, where individuals are pigeonholed and their opportunities determined by systems that fail to consider unique circumstances and nuances. This overreliance on AI, she argues, erodes human agency and autonomy, as we increasingly cede control over important aspects of our lives to machines.
	- Moreover, Santacaterina cautions that the standardisation and control imposed by AI systems risk stifling human creativity and innovation. When conformity and uniformity are prioritised over diversity of thought, we lose the spark that drives progress. The serendipitous insights and unconventional approaches that have fueled human advancement throughout history are threatened by the homogenising influence of AI.
	- Santacaterina also raises alarming concerns about the erosion of privacy and personal identity in the age of pervasive AI. The vast amounts of personal data collected and analysed by these systems, often without transparent explanations of how it will be used, pose significant threats to individual autonomy and privacy. As our every action and preference is tracked and fed into algorithms, we risk losing control over our own identities and the narratives of our lives.

- ### Legal Framework, International Agreements, and Concerns
	- **Minimal Legal Barriers**: The acquisition of commercial data by governments faces scant legal opposition, attributed to the classification of such data as "publicly available." This status exempts it from the stringent privacy protections applicable to more confidential data.
	- **Privacy and Civil Liberties Issues**: The extensive gathering and utilisation of personal data by governmental entities elicit significant privacy alarms. Despite assurances of anonymisation, methods often exist to re-identify individuals, raising consent and privacy violation concerns.
	- **Data Sharing Agreements
		- Five Eyes Alliance**: International agreements like the Five Eyes (comprising Australia, Canada, New Zealand, the United Kingdom, and the United States) facilitate extensive data sharing for intelligence purposes. This raises the stakes for data privacy, with personal data potentially shared across borders without explicit consent from individuals.

- ## Tik Tok tick tock [[Death of the Internet]] [[Digital Society Surveillance]] [[Politics, Law, Privacy]]
	- [TikTok is China's next big weapon in the battle for personal data (axios.com)](https://www.axios.com/2019/07/20/tiktok-china-online-privacy-personal-data)
	- [TikTok: Beneath Its Fun Exterior Lies A Sinister Purpose (forbes.com)](https://www.forbes.com/sites/enriquedans/2020/06/28/tiktok-beneath-its-fun-exterior-lies-a-sinisterpurpose/)
	- [forbes.com/sites/emilybaker-white/2022/10/20/tiktok-bytedance-surveillance-american-user-data/](https://www.forbes.com/sites/emilybaker-white/2022/10/20/tiktok-bytedance-surveillance-american-user-data/)
	- [For Gen Z, TikTok Is the New Search Engine - The New York Times (nytimes.com)](https://www.nytimes.com/2022/09/16/technology/gen-z-tiktok-search-engine.html)
	- [TikTok’s search engine repeatedly delivers misinformation to its majority-young user base, report says | CNN Business](https://edition.cnn.com/2022/09/18/business/tiktok-search-engine-misinformation/)
	- [Revealed: how TikTok censors videos that do not please Beijing | TikTok | The Guardian](https://www.theguardian.com/technology/2019/sep/25/revealed-how-tiktok-censors-videos-that-do-not-please-beijing)
	- [The U.S. Is Right to Worry About TikTok | Lawfare (lawfaremedia.org)](https://www.lawfaremedia.org/article/us-right-worry-about-tiktok)

- ## Introduction to Cashew
	- Cashew is a protocol designed for facilitating Bitcoin banking operations. It leverages the concept of blinded servers to enhance privacy, allowing for the secure issuance and management of electronic cash (ecash) notes.
	- [Cashu workshop YouTube](https://www.youtube.com/watch?v=xfYmwc-gnK8)
	- ![video_2024-04-18_16-47-14.mp4](assets/video_2024-04-18_16-47-14_1713458378752_0.mp4)
- [twitter link to the render loading below](https://twitter.com/callebtc/status/1777598819355496587)
  {{twitter https://twitter.com/callebtc/status/1777598819355496587}}
	-

- ## **Ethical Considerations**
  
  The use of agentic systems in call centers raises ethical considerations that need to be addressed:
  
  * **Transparency:** Customers should be informed when they are interacting with an AI system20.  
  * **Data privacy:** Businesses need to ensure the responsible use of customer data and protect it from unauthorized access21. This includes being mindful of potential surveillance and behavior manipulation concerns 21.  
  * **Bias mitigation:** Steps should be taken to identify and mitigate biases in AI systems to prevent discriminatory outcomes22.  
  * **Accountability:** Mechanisms should be in place to ensure accountability for the actions and decisions of agentic AI systems23. This includes addressing the opacity of AI decision-making and ensuring that the reasoning behind AI actions is understandable and explainable 21.  
  * **Addressing ethical considerations in AI is crucial for businesses, not only to maintain customer trust but also to avoid potential legal and reputational risks 21.**

- ##### Privacy and Security
	- The tracking data provides extremely valuable insights for personalizing experiences but raises significant privacy concerns. Thoughtful design around privacy and security, including data segmentation, auditing, and transparency, is critical to protect user data and ensure compliance with privacy regulations.

- #### 4.12.17 Data Privacy and Open-source AI
  Data privacy is a further point of contention. Open-source AI, coupled with increasingly ubiquitous data collection methods, raises concerns about individuals' privacy. However, it also provides an opportunity to develop robust, decentralized, and transparent AI systems that respect user privacy.

- #### 4.12.13 Open-source AI and Global Politics
  However, as beneficial as open-source AI may appear, the complexity of global politics can make the transition challenging. A landscape where AI technologies are open-source and freely available brings about potential dilemmas in various areas including national security, economic competitiveness, intellectual property rights, and data privacy.

- #### 4.12.3 Increased Surveillance Through AI
  Another critical concern around AI and authoritarianism is the potential for increased surveillance. With the integration of AI and data scraping techniques, governments can employ extensive teams to facilitate unprecedented levels of surveillance, compromising privacy. Such concerns are raised in the works of authors like Daniel Oberhaus, who posits that authoritarian regimes may have an advantage in AI due to their willingness to exploit data, such as advanced facial recognition data, in ways that open societies might not.

- ## Crime
	- AI is already starting to be used in crime detection, crime prediction, and the data brokered by these tech behemoths is already making mistakes. [My chilling run-in with secretive facial-recognition app Clearview AI (telegraph.co.uk)](https://www.telegraph.co.uk/books/non-fiction/clearview-ai-facial-recognition-app-chilling/)
	- As AI increasingly bakes in these data points into ever larger scraped datasets it will be impossible to unwind one's personal history.
	- This too will increasingly be done by AI. We are trending toward AI fighting with AI over your data and the minutiae of your history in ever changing local and global political environments
	- People are concerned about this. There are already apps to semi automate data deletion online. The collapse in [[Privacy, Trust and Safety]] since the 1970s is clearly documented across governments, media, and big business, but curiously people are trusting both their online social in groups, and machines that act human "enough" far more.  Recently, for unknown reasons they have also started to [[Privacy, Trust and Safety]] "business" more. logseq://graph/ResearchPapers?block-id=656c9724-f862-4f4e-9a88-75b8b3f1b4e7
	-
-

- ## [[Politics, Law, Privacy]]
	- EU AI act is it'll be near impossible now for small disruptive companies to train foundation models because of the administration overhead. Win for America.
	- Governments can now use real-time biometric surveillance in public spaces in prevention of genuine, present, or foreseeable threats, and searches for people suspected of the most serious crimes, so basically everything.
		- "Real-time’ remote biometric identification (RBI) in publicly accessible spaces is prohibited for law enforcement, except when: searching for missing persons, abduction victims, and people who have been human trafficked or sexually exploited; preventing substantial and imminent threat to life, or foreseeable terrorist attack; or identifying suspects in serious crimes (e.g., murder, rape, armed robbery, narcotic and illegal weapons trafficking, organised crime, and environmental crime, etc.)."
	- That will include gait analysis BTW. Europeans just took a big privacy hit. All your personal data goes to the USA, all your private movements go to Interpol (five eyes, eight eyes)
	- Already there are some 3000 constantly updated data point about all users of the internet. This is routinely bought and sold. According to Fowler at the Washington Post by the time a child with a phone is 13 there may be 72 million data points on them, and it's supposed to be illegal to track children
	- Politicians, law enforcement, and private companies have various constraints and restraints based on jurisdiction, but even strong laws like GDPR are routinely (always) ignored through technologies like browser fingerprinting.
		- [Cover Your Tracks (eff.org)](https://coveryourtracks.eff.org/)
		- [CreepJS (abrahamjuliot.github.io)](https://abrahamjuliot.github.io/creepjs/)
	- ![1715109606571.jpeg](assets/1715109606571_1715110469719_0.jpeg)
	- logseq://graph/ResearchPapers?block-id=656c99ec-9ee4-46f5-bbf2-33f54f2090d9
	- As we have seen in the overturning of the USA abortion ban, the law can change, leaving individuals vulnerable to external forces. Googles promise to delete sensitive data in this case was not carried out. This is their business model and they are not our friends. Police went through 24GB of data from companies with key private chats provided by Meta in order to prosecute a 17 year old girl.
		- [The Hidden-Pregnancy Experiment | The New Yorker](https://www.newyorker.com/culture/the-weekend-essay/the-hidden-pregnancy-experiment)
	- ![image.png](assets/image_1701614102581_0.png){:width 600}
-

- ### Applications Overview
  ```mermaid
  graph TD
      A["Enhanced Social<br>Awareness"] -->|Insights| B[User Interaction]
      B --> C["Personalized<br>Recommendations"]
      A --> D["Social<br>Simulations"]
      subgraph Ethical Considerations
          E[Privacy and Consent]
          F[Bias Mitigation]
          G[Transparency]
          H[Security Measures]
          E & F & G & H --> I[Policy Compliance]
      end
      subgraph Applications
          I1["Networking<br>Events"] --> B
          I2["Social<br>Gatherings"] --> B
          I3["Online<br>Communities"] --> B
          I4["Virtual<br>Labs"] --> D
      end
  ```

- ### The Erosion of Human Agency, Autonomy, and Creativity
	- One of Santacaterina's primary concerns is the growing reliance on AI systems in critical domains such as healthcare, justice, and employment. We can perhaps all see that even human breeding choices are seeded now by algorithms in dating apps. She warns of the dangers of algorithmic decision-making, where individuals are pigeonholed and their opportunities determined by systems that fail to consider unique circumstances and nuances. This overreliance on AI, she argues, erodes human agency and autonomy, as we increasingly cede control over important aspects of our lives to machines.
	- Moreover, Santacaterina cautions that the standardisation and control imposed by AI systems risk stifling human creativity and innovation. When conformity and uniformity are prioritised over diversity of thought, we lose the spark that drives progress. The serendipitous insights and unconventional approaches that have fueled human advancement throughout history are threatened by the homogenising influence of AI.
	- Santacaterina also raises alarming concerns about the erosion of privacy and personal identity in the age of pervasive AI. The vast amounts of personal data collected and analysed by these systems, often without transparent explanations of how it will be used, pose significant threats to individual autonomy and privacy. As our every action and preference is tracked and fed into algorithms, we risk losing control over our own identities and the narratives of our lives.

- ### Legal Framework, International Agreements, and Concerns
	- **Minimal Legal Barriers**: The acquisition of commercial data by governments faces scant legal opposition, attributed to the classification of such data as "publicly available." This status exempts it from the stringent privacy protections applicable to more confidential data.
	- **Privacy and Civil Liberties Issues**: The extensive gathering and utilisation of personal data by governmental entities elicit significant privacy alarms. Despite assurances of anonymisation, methods often exist to re-identify individuals, raising consent and privacy violation concerns.
	- **Data Sharing Agreements
		- Five Eyes Alliance**: International agreements like the Five Eyes (comprising Australia, Canada, New Zealand, the United Kingdom, and the United States) facilitate extensive data sharing for intelligence purposes. This raises the stakes for data privacy, with personal data potentially shared across borders without explicit consent from individuals.

- ## Tik Tok tick tock [[Death of the Internet]] [[Digital Society Surveillance]] [[Politics, Law, Privacy]]
	- [TikTok is China's next big weapon in the battle for personal data (axios.com)](https://www.axios.com/2019/07/20/tiktok-china-online-privacy-personal-data)
	- [TikTok: Beneath Its Fun Exterior Lies A Sinister Purpose (forbes.com)](https://www.forbes.com/sites/enriquedans/2020/06/28/tiktok-beneath-its-fun-exterior-lies-a-sinisterpurpose/)
	- [forbes.com/sites/emilybaker-white/2022/10/20/tiktok-bytedance-surveillance-american-user-data/](https://www.forbes.com/sites/emilybaker-white/2022/10/20/tiktok-bytedance-surveillance-american-user-data/)
	- [For Gen Z, TikTok Is the New Search Engine - The New York Times (nytimes.com)](https://www.nytimes.com/2022/09/16/technology/gen-z-tiktok-search-engine.html)
	- [TikTok’s search engine repeatedly delivers misinformation to its majority-young user base, report says | CNN Business](https://edition.cnn.com/2022/09/18/business/tiktok-search-engine-misinformation/)
	- [Revealed: how TikTok censors videos that do not please Beijing | TikTok | The Guardian](https://www.theguardian.com/technology/2019/sep/25/revealed-how-tiktok-censors-videos-that-do-not-please-beijing)
	- [The U.S. Is Right to Worry About TikTok | Lawfare (lawfaremedia.org)](https://www.lawfaremedia.org/article/us-right-worry-about-tiktok)

- ## Introduction to Cashew
	- Cashew is a protocol designed for facilitating Bitcoin banking operations. It leverages the concept of blinded servers to enhance privacy, allowing for the secure issuance and management of electronic cash (ecash) notes.
	- [Cashu workshop YouTube](https://www.youtube.com/watch?v=xfYmwc-gnK8)
	- ![video_2024-04-18_16-47-14.mp4](assets/video_2024-04-18_16-47-14_1713458378752_0.mp4)
- [twitter link to the render loading below](https://twitter.com/callebtc/status/1777598819355496587)
  {{twitter https://twitter.com/callebtc/status/1777598819355496587}}
	-

- ## **Ethical Considerations**
  
  The use of agentic systems in call centers raises ethical considerations that need to be addressed:
  
  * **Transparency:** Customers should be informed when they are interacting with an AI system20.  
  * **Data privacy:** Businesses need to ensure the responsible use of customer data and protect it from unauthorized access21. This includes being mindful of potential surveillance and behavior manipulation concerns 21.  
  * **Bias mitigation:** Steps should be taken to identify and mitigate biases in AI systems to prevent discriminatory outcomes22.  
  * **Accountability:** Mechanisms should be in place to ensure accountability for the actions and decisions of agentic AI systems23. This includes addressing the opacity of AI decision-making and ensuring that the reasoning behind AI actions is understandable and explainable 21.  
  * **Addressing ethical considerations in AI is crucial for businesses, not only to maintain customer trust but also to avoid potential legal and reputational risks 21.**

## Formal Specification

```yaml
term: Privacy
definition: "Protection of personal information and individual autonomy in AI systems"
domain: AI Ethics and Privacy
type: Quality Attribute
principles:
  - data_minimization
  - purpose_limitation
  - transparency
  - individual_control
  - security
  - accountability
techniques:
  - anonymization
  - differential_privacy
  - federated_learning
  - homomorphic_encryption
threats: [re_identification, inference_attacks, linkage_attacks]
```

## Authoritative References

### Primary Sources

1. **GDPR** (Regulation 2016/679), General Data Protection Regulation
   - Comprehensive privacy framework
   - Articles 5 (Principles), 6 (Lawfulness), 22 (Automated decision-making)
   - Source: European Parliament and Council

2. **NIST AI Risk Management Framework (AI RMF 1.0)**, January 2023
   - Section 2.2: "Privacy-Enhanced"
   - "AI systems protect privacy throughout their lifecycle"
   - Source: National Institute of Standards and Technology

3. **ISO/IEC 27701:2019** - Privacy information management
   - Extension of ISO/IEC 27001 for privacy
   - Applicable to AI systems processing personal data
   - Source: ISO/IEC JTC 1/SC 27

### Supporting Standards

4. **ISO/IEC 29100:2011** - Privacy framework
   - 11 privacy principles
   - Foundation for privacy engineering

5. **EU AI Act** (Regulation 2024/1689), June 2024
   - Article 10: "Data and data governance" (privacy aspects)
   - Recital 60: Privacy and data protection compliance

## Key Characteristics

### Privacy Principles (ISO/IEC 29100)

#### 1. Consent

**Definition**: Informed, freely given, specific consent for data processing

**AI Context**:
- Consent for data collection and training
- Understanding of AI processing
- Withdrawal of consent mechanisms

**Example**: User opts in to facial recognition with full understanding

#### 2. Purpose Limitation

**Definition**: Data collected for specified, explicit, legitimate purposes only

**AI Context**:
- Training data used only for stated purpose
- No function creep
- Purpose documented and communicated

**Example**: Medical data collected for diagnosis not used for insurance

#### 3. Data Minimization

**Definition**: Collect only data necessary for purpose

**AI Context**:
- Feature selection that respects privacy
- Avoid collecting "just in case" data
- Minimal retention periods

**Example**: Credit scoring using only relevant financial data, not full browsing history

#### 4. Use Limitation

**Definition**: Data used only for specified purposes

**AI Context**:
- Model trained for stated purpose only
- No secondary uses without consent
- Purpose-bound data use

#### 5. Individual Participation

**Definition**: Individuals have rights over their data

**GDPR Rights**:
- Right to access (Article 15)
- Right to rectification (Article 16)
- Right to erasure/"right to be forgotten" (Article 17)
- Right to data portability (Article 20)
- Right to object (Article 21)
- Rights related to automated decision-making (Article 22)

#### 6. Accountability

**Definition**: Demonstrate compliance with privacy principles

**AI Context**:
- Privacy impact assessments
- Documentation of data processing
- Privacy by design and default

#### 7. Security Safeguards

**Definition**: Appropriate technical and organizational measures

**AI Context**:
- Encryption of training data
- Secure model deployment
- Access controls
- See Security (AI-0071)

## Privacy Risks in AI

### Data Collection Risks

1. **Overcollection**
   - Collecting more data than necessary
   - Example: Smart speaker always listening

2. **Secondary Use**
   - Using data for purposes beyond original consent
   - Example: Training data repurposed for advertising

3. **Surveillance**
   - Pervasive monitoring
   - Example: Facial recognition in public spaces

### Data Processing Risks

4. **Re-identification**
   - Anonymized data linked back to individuals
   - Example: Netflix Prize dataset de-anonymization

5. **Inference Attacks**
   - Deriving sensitive information not explicitly provided
   - Example: Inferring health conditions from purchase history

6. **Model Inversion** (AI-0087)
   - Reconstructing training data from model
   - Example: Extracting faces from facial recognition model

7. **Membership Inference** (AI-0088)
   - Determining if individual's data in training set
   - Example: Was this patient in medical training data?

### Data Sharing Risks

8. **Unauthorized Disclosure**
   - Sharing data without authorization
   - Example: Data broker selling personal information

9. **Cross-Border Transfers**
   - Data transferred to jurisdictions with weaker protections
   - GDPR Chapter V requirements

## Privacy-Preserving Techniques

### Anonymization and De-identification

1. **K-Anonymity**
   - Each record indistinguishable from k-1 others
   - Protects against re-identification
   - **Limitation**: Vulnerable to homogeneity and background knowledge attacks

2. **L-Diversity**
   - Extends k-anonymity
   - Ensures diversity of sensitive attributes
   - **Limitation**: May not prevent attribute disclosure

3. **T-Closeness**
   - Distribution of sensitive attribute close to overall distribution
   - Stronger than l-diversity

### Differential Privacy

**Definition**: Formal mathematical guarantee that individual's data has negligible impact on query results

**Mechanism**:
```
DP-Query(database, query) = TrueAnswer(query) + Noise
```

**ε-Differential Privacy**:
For neighboring datasets D and D' differing by one record:
```
P(M(D) ∈ S) ≤ e^ε × P(M(D') ∈ S)
```

**Properties**:
- Composability: Privacy budgets combine
- Post-processing immunity: Cannot reverse DP
- Group privacy: Protects groups

**AI Applications**:
- Differentially private SGD (DP-SGD)
- Private model training
- Noisy aggregation in federated learning

**Example**:
```python
def dp_sgd(data, model, epsilon, delta):
    # Clip gradients
    clipped_grads = clip_gradients(compute_grads(data, model))
    # Add calibrated noise
    noise = gaussian_noise(sensitivity / epsilon)
    noisy_grads = clipped_grads + noise
    # Update model
    model.update(noisy_grads)
```

### Federated Learning

**Definition**: Train models on decentralized data without centralizing raw data

**Process**:
1. Server sends model to clients
2. Clients train on local data
3. Clients send model updates (not data) to server
4. Server aggregates updates

**Privacy Benefits**:
- Raw data stays on device
- Only model updates transmitted
- Can combine with differential privacy

**Challenges**:
- Model inversion attacks still possible
- Communication overhead
- Heterogeneous data distributions

**Applications**: Mobile keyboard prediction, healthcare collaborations

### Homomorphic Encryption

**Definition**: Computation on encrypted data without decryption

**Types**:
- **Partially Homomorphic**: One operation (addition or multiplication)
- **Somewhat Homomorphic**: Limited operations
- **Fully Homomorphic**: Arbitrary computations

**AI Applications**:
- Encrypted model inference
- Privacy-preserving predictions
- Secure multi-party computation

**Limitation**: Computationally expensive

### Secure Multi-Party Computation (MPC)

**Definition**: Multiple parties jointly compute function without revealing inputs

**Applications**:
- Collaborative model training
- Private data pooling
- Secure aggregation

**Techniques**:
- Secret sharing
- Garbled circuits
- Oblivious transfer

## Relationships

- **Component Of**: AI Trustworthiness (AI-0061)
- **Related To**: Data Protection (AI-0073), Security (AI-0071), Transparency (AI-0062)
- **Threatened By**: Model Inversion (AI-0087), Membership Inference (AI-0088)
- **Protected By**: Differential Privacy, Federated Learning, Encryption
- **Required By**: GDPR, Data Protection Laws

## Privacy by Design and Default

### Privacy by Design Principles (Cavoukian)

1. **Proactive not Reactive**
   - Anticipate and prevent privacy issues
   - Before problems occur

2. **Privacy as Default Setting**
   - No action required from individual
   - Automatic privacy protection

3. **Privacy Embedded into Design**
   - Integral to system, not add-on
   - Full functionality

4. **Full Functionality (Positive-Sum)**
   - Not zero-sum trade-off
   - Privacy and functionality

5. **End-to-End Security**
   - Lifecycle protection
   - Cradle to grave

6. **Visibility and Transparency**
   - Open and transparent
   - Verifiable

7. **Respect for User Privacy**
   - User-centric
   - Strong privacy defaults

### Implementation in AI

**Data Collection**:
- Collect minimum necessary data
- Clear purpose specification
- Explicit consent mechanisms

**Model Training**:
- Differential privacy
- Federated learning
- Access controls

**Deployment**:
- Encrypted inference
- Minimal data logging
- Right to explanation

**Monitoring**:
- Privacy metrics tracking
- Anomaly detection (privacy breaches)
- Audit trails

## Domain-Specific Privacy

### Healthcare AI

**Requirements**:
- HIPAA (US), GDPR (EU)
- Patient confidentiality
- Sensitive health information

**Techniques**:
- Federated learning for multi-institutional research
- Differential privacy for aggregate statistics
- De-identification of medical images

**Example**: COVID-19 contact tracing with privacy preservation

### Financial AI

**Requirements**:
- GLBA (US), GDPR (EU)
- Financial privacy
- Anti-money laundering vs. privacy balance

**Techniques**:
- Encrypted transaction analysis
- Privacy-preserving credit scoring
- Secure multi-party computation for fraud detection

### Smart Cities

**Requirements**:
- Public surveillance concerns
- Location privacy
- GDPR compliance

**Techniques**:
- Edge computing (local processing)
- Anonymized aggregate data
- Opt-in mechanisms

**Example**: Traffic optimization without individual tracking

## Privacy Metrics and Assessment

### Privacy Risk Assessment

1. **Data Protection Impact Assessment (DPIA)**
   - GDPR Article 35 requirement for high-risk processing
   - Systematic assessment of privacy risks
   - Mitigation measures

2. **Privacy Threshold Assessment (PTA)**
   - Determine if privacy compliance review needed
   - US federal government requirement

### Privacy Metrics

1. **K-Anonymity Level**
   - Degree of anonymization

2. **Privacy Budget (ε)**
   - Differential privacy parameter
   - Lower ε = stronger privacy

3. **Re-identification Risk**
   - Probability of re-identifying individuals
   - Measured through attack simulations

4. **Data Minimization Ratio**
   - Data collected / Data necessary
   - Target: 1.0 (collect only what's needed)

## Challenges and Trade-offs

### Utility-Privacy Trade-off

**Challenge**: Privacy-preserving techniques often reduce model accuracy

**Example**: Differential privacy adds noise, reducing precision

**Approach**:
- Find acceptable balance
- Risk-based privacy budgets
- Adaptive privacy mechanisms

### Privacy vs. Transparency

**Tension**: Explaining AI decisions may reveal private training data

**Example**: Showing similar cases may expose individuals

**Approach**:
- Aggregate explanations
- Synthetic examples
- Careful information disclosure

### Privacy vs. Personalization

**Tension**: Personalized services require user data

**Approach**:
- On-device personalization
- Federated learning
- Minimal data collection

## Regulatory Requirements

### GDPR

**Key Provisions for AI**:
- **Article 5**: Lawfulness, fairness, transparency, purpose limitation, data minimization
- **Article 22**: Right not to be subject to solely automated decision-making
- **Article 25**: Data protection by design and by default
- **Article 35**: Data Protection Impact Assessment (DPIA) for high-risk processing

**Penalties**: Up to 4% of global annual turnover or €20M, whichever higher

### CCPA/CPRA (California)

**Rights**:
- Right to know what data is collected
- Right to deletion
- Right to opt-out of sale
- Right to correct inaccurate data (CPRA)
- Right to limit use of sensitive personal information (CPRA)

### Other Jurisdictions

**LGPD** (Brazil), **POPIA** (South Africa), **PIPL** (China)
- Similar frameworks to GDPR
- Variations in scope and enforcement

## Best Practices

1. **Conduct Privacy Impact Assessments**
   - Before AI system development
   - Identify risks early
   - Implement mitigations

2. **Minimize Data Collection**
   - Collect only what's necessary
   - Clear retention policies
   - Automated deletion

3. **Use Privacy-Preserving Techniques**
   - Differential privacy for sensitive data
   - Federated learning where appropriate
   - Encryption for data at rest and in transit

4. **Provide Transparency and Control**
   - Clear privacy notices
   - Meaningful consent mechanisms
   - Easy-to-use privacy controls

5. **Regular Privacy Audits**
   - Assess compliance
   - Identify vulnerabilities
   - Update practices

6. **Privacy Training**
   - Educate developers and operators
   - Privacy-aware culture
   - Ethical data handling

7. **Privacy Governance**
   - Data Protection Officer (DPO) where required
   - Privacy policies and procedures
   - Incident response plans

## Research Frontiers

1. **Practical Fully Homomorphic Encryption**
   - Reduce computational overhead
   - Enable real-time encrypted inference

2. **Federated Learning at Scale**
   - Efficient aggregation
   - Privacy-preserving and communication-efficient

3. **Privacy-Utility Optimization**
   - Pareto-optimal trade-offs
   - Automated privacy budget allocation

4. **Verifiable Privacy**
   - Cryptographic proof of privacy guarantees
   - Blockchain-based privacy attestation

## Related Terms

- **AI Trustworthiness** (AI-0061)
- **Data Protection** (AI-0073)
- **Security** (AI-0071)
- **Model Inversion** (AI-0087)
- **Membership Inference** (AI-0088)
- **Differential Privacy**
- **Federated Learning**

## Version History

- **1.0** (2025-10-27): Initial definition based on GDPR, NIST AI RMF, and ISO/IEC 27701:2019

---

*This definition emphasizes privacy as a fundamental right and design principle, requiring technical, organizational, and legal measures throughout the AI lifecycle.*
	-
	- ### Original Content
	  collapsed:: true
		- ```
# Privacy
		  
		  **Term ID**: AI-0072
		  **Category**: Foundational Concept
		  **Status**: Active
		  **Last Updated**: 2025-10-27
		  
		  ## Definition
		  
		  The protection of personal information and individual autonomy in AI systems, encompassing data minimization, purpose limitation, transparency, and individual control over how personal data is collected, processed, stored, and shared throughout the AI lifecycle.
		  
		  ## Formal Specification
		  
		  ```yaml
		  term: Privacy
		  definition: "Protection of personal information and individual autonomy in AI systems"
		  domain: AI Ethics and Privacy
		  type: Quality Attribute
		  principles:
		    - data_minimization
		    - purpose_limitation
		    - transparency
		    - individual_control
		    - security
		    - accountability
		  techniques:
		    - anonymization
		    - differential_privacy
		    - federated_learning
		    - homomorphic_encryption
		  threats: [re_identification, inference_attacks, linkage_attacks]
		  ```
		  
		  ## Authoritative References
		  
		  ### Primary Sources
		  
		  1. **GDPR** (Regulation 2016/679), General Data Protection Regulation
		     - Comprehensive privacy framework
		     - Articles 5 (Principles), 6 (Lawfulness), 22 (Automated decision-making)
		     - Source: European Parliament and Council
		  
		  2. **NIST AI Risk Management Framework (AI RMF 1.0)**, January 2023
		     - Section 2.2: "Privacy-Enhanced"
		     - "AI systems protect privacy throughout their lifecycle"
		     - Source: National Institute of Standards and Technology
		  
		  3. **ISO/IEC 27701:2019** - Privacy information management
		     - Extension of ISO/IEC 27001 for privacy
		     - Applicable to AI systems processing personal data
		     - Source: ISO/IEC JTC 1/SC 27
		  
		  ### Supporting Standards
		  
		  4. **ISO/IEC 29100:2011** - Privacy framework
		     - 11 privacy principles
		     - Foundation for privacy engineering
		  
		  5. **EU AI Act** (Regulation 2024/1689), June 2024
		     - Article 10: "Data and data governance" (privacy aspects)
		     - Recital 60: Privacy and data protection compliance
		  
		  ## Key Characteristics
		  
		  ### Privacy Principles (ISO/IEC 29100)
		  
		  #### 1. Consent
		  
		  **Definition**: Informed, freely given, specific consent for data processing
		  
		  **AI Context**:
		  - Consent for data collection and training
		  - Understanding of AI processing
		  - Withdrawal of consent mechanisms
		  
		  **Example**: User opts in to facial recognition with full understanding
		  
		  #### 2. Purpose Limitation
		  
		  **Definition**: Data collected for specified, explicit, legitimate purposes only
		  
		  **AI Context**:
		  - Training data used only for stated purpose
		  - No function creep
		  - Purpose documented and communicated
		  
		  **Example**: Medical data collected for diagnosis not used for insurance
		  
		  #### 3. Data Minimization
		  
		  **Definition**: Collect only data necessary for purpose
		  
		  **AI Context**:
		  - Feature selection that respects privacy
		  - Avoid collecting "just in case" data
		  - Minimal retention periods
		  
		  **Example**: Credit scoring using only relevant financial data, not full browsing history
		  
		  #### 4. Use Limitation
		  
		  **Definition**: Data used only for specified purposes
		  
		  **AI Context**:
		  - Model trained for stated purpose only
		  - No secondary uses without consent
		  - Purpose-bound data use
		  
		  #### 5. Individual Participation
		  
		  **Definition**: Individuals have rights over their data
		  
		  **GDPR Rights**:
		  - Right to access (Article 15)
		  - Right to rectification (Article 16)
		  - Right to erasure/"right to be forgotten" (Article 17)
		  - Right to data portability (Article 20)
		  - Right to object (Article 21)
		  - Rights related to automated decision-making (Article 22)
		  
		  #### 6. Accountability
		  
		  **Definition**: Demonstrate compliance with privacy principles
		  
		  **AI Context**:
		  - Privacy impact assessments
		  - Documentation of data processing
		  - Privacy by design and default
		  
		  #### 7. Security Safeguards
		  
		  **Definition**: Appropriate technical and organizational measures
		  
		  **AI Context**:
		  - Encryption of training data
		  - Secure model deployment
		  - Access controls
		  - See Security (AI-0071)
		  
		  ## Privacy Risks in AI
		  
		  ### Data Collection Risks
		  
		  1. **Overcollection**
		     - Collecting more data than necessary
		     - Example: Smart speaker always listening
		  
		  2. **Secondary Use**
		     - Using data for purposes beyond original consent
		     - Example: Training data repurposed for advertising
		  
		  3. **Surveillance**
		     - Pervasive monitoring
		     - Example: Facial recognition in public spaces
		  
		  ### Data Processing Risks
		  
		  4. **Re-identification**
		     - Anonymized data linked back to individuals
		     - Example: Netflix Prize dataset de-anonymization
		  
		  5. **Inference Attacks**
		     - Deriving sensitive information not explicitly provided
		     - Example: Inferring health conditions from purchase history
		  
		  6. **Model Inversion** (AI-0087)
		     - Reconstructing training data from model
		     - Example: Extracting faces from facial recognition model
		  
		  7. **Membership Inference** (AI-0088)
		     - Determining if individual's data in training set
		     - Example: Was this patient in medical training data?
		  
		  ### Data Sharing Risks
		  
		  8. **Unauthorized Disclosure**
		     - Sharing data without authorization
		     - Example: Data broker selling personal information
		  
		  9. **Cross-Border Transfers**
		     - Data transferred to jurisdictions with weaker protections
		     - GDPR Chapter V requirements
		  
		  ## Privacy-Preserving Techniques
		  
		  ### Anonymization and De-identification
		  
		  1. **K-Anonymity**
		     - Each record indistinguishable from k-1 others
		     - Protects against re-identification
		     - **Limitation**: Vulnerable to homogeneity and background knowledge attacks
		  
		  2. **L-Diversity**
		     - Extends k-anonymity
		     - Ensures diversity of sensitive attributes
		     - **Limitation**: May not prevent attribute disclosure
		  
		  3. **T-Closeness**
		     - Distribution of sensitive attribute close to overall distribution
		     - Stronger than l-diversity
		  
		  ### Differential Privacy
		  
		  **Definition**: Formal mathematical guarantee that individual's data has negligible impact on query results
		  
		  **Mechanism**:
		  ```
		  DP-Query(database, query) = TrueAnswer(query) + Noise
		  ```
		  
		  **ε-Differential Privacy**:
		  For neighboring datasets D and D' differing by one record:
		  ```
		  P(M(D) ∈ S) ≤ e^ε × P(M(D') ∈ S)
		  ```
		  
		  **Properties**:
		  - Composability: Privacy budgets combine
		  - Post-processing immunity: Cannot reverse DP
		  - Group privacy: Protects groups
		  
		  **AI Applications**:
		  - Differentially private SGD (DP-SGD)
		  - Private model training
		  - Noisy aggregation in federated learning
		  
		  **Example**:
		  ```python
		  def dp_sgd(data, model, epsilon, delta):
		      # Clip gradients
		      clipped_grads = clip_gradients(compute_grads(data, model))
		      # Add calibrated noise
		      noise = gaussian_noise(sensitivity / epsilon)
		      noisy_grads = clipped_grads + noise
		      # Update model
		      model.update(noisy_grads)
		  ```
		  
		  ### Federated Learning
		  
		  **Definition**: Train models on decentralized data without centralizing raw data
		  
		  **Process**:
		  1. Server sends model to clients
		  2. Clients train on local data
		  3. Clients send model updates (not data) to server
		  4. Server aggregates updates
		  
		  **Privacy Benefits**:
		  - Raw data stays on device
		  - Only model updates transmitted
		  - Can combine with differential privacy
		  
		  **Challenges**:
		  - Model inversion attacks still possible
		  - Communication overhead
		  - Heterogeneous data distributions
		  
		  **Applications**: Mobile keyboard prediction, healthcare collaborations
		  
		  ### Homomorphic Encryption
		  
		  **Definition**: Computation on encrypted data without decryption
		  
		  **Types**:
		  - **Partially Homomorphic**: One operation (addition or multiplication)
		  - **Somewhat Homomorphic**: Limited operations
		  - **Fully Homomorphic**: Arbitrary computations
		  
		  **AI Applications**:
		  - Encrypted model inference
		  - Privacy-preserving predictions
		  - Secure multi-party computation
		  
		  **Limitation**: Computationally expensive
		  
		  ### Secure Multi-Party Computation (MPC)
		  
		  **Definition**: Multiple parties jointly compute function without revealing inputs
		  
		  **Applications**:
		  - Collaborative model training
		  - Private data pooling
		  - Secure aggregation
		  
		  **Techniques**:
		  - Secret sharing
		  - Garbled circuits
		  - Oblivious transfer
		  
		  ## Relationships
		  
		  - **Component Of**: AI Trustworthiness (AI-0061)
		  - **Related To**: Data Protection (AI-0073), Security (AI-0071), Transparency (AI-0062)
		  - **Threatened By**: Model Inversion (AI-0087), Membership Inference (AI-0088)
		  - **Protected By**: Differential Privacy, Federated Learning, Encryption
		  - **Required By**: GDPR, Data Protection Laws
		  
		  ## Privacy by Design and Default
		  
		  ### Privacy by Design Principles (Cavoukian)
		  
		  1. **Proactive not Reactive**
		     - Anticipate and prevent privacy issues
		     - Before problems occur
		  
		  2. **Privacy as Default Setting**
		     - No action required from individual
		     - Automatic privacy protection
		  
		  3. **Privacy Embedded into Design**
		     - Integral to system, not add-on
		     - Full functionality
		  
		  4. **Full Functionality (Positive-Sum)**
		     - Not zero-sum trade-off
		     - Privacy and functionality
		  
		  5. **End-to-End Security**
		     - Lifecycle protection
		     - Cradle to grave
		  
		  6. **Visibility and Transparency**
		     - Open and transparent
		     - Verifiable
		  
		  7. **Respect for User Privacy**
		     - User-centric
		     - Strong privacy defaults
		  
		  ### Implementation in AI
		  
		  **Data Collection**:
		  - Collect minimum necessary data
		  - Clear purpose specification
		  - Explicit consent mechanisms
		  
		  **Model Training**:
		  - Differential privacy
		  - Federated learning
		  - Access controls
		  
		  **Deployment**:
		  - Encrypted inference
		  - Minimal data logging
		  - Right to explanation
		  
		  **Monitoring**:
		  - Privacy metrics tracking
		  - Anomaly detection (privacy breaches)
		  - Audit trails
		  
		  ## Domain-Specific Privacy
		  
		  ### Healthcare AI
		  
		  **Requirements**:
		  - HIPAA (US), GDPR (EU)
		  - Patient confidentiality
		  - Sensitive health information
		  
		  **Techniques**:
		  - Federated learning for multi-institutional research
		  - Differential privacy for aggregate statistics
		  - De-identification of medical images
		  
		  **Example**: COVID-19 contact tracing with privacy preservation
		  
		  ### Financial AI
		  
		  **Requirements**:
		  - GLBA (US), GDPR (EU)
		  - Financial privacy
		  - Anti-money laundering vs. privacy balance
		  
		  **Techniques**:
		  - Encrypted transaction analysis
		  - Privacy-preserving credit scoring
		  - Secure multi-party computation for fraud detection
		  
		  ### Smart Cities
		  
		  **Requirements**:
		  - Public surveillance concerns
		  - Location privacy
		  - GDPR compliance
		  
		  **Techniques**:
		  - Edge computing (local processing)
		  - Anonymized aggregate data
		  - Opt-in mechanisms
		  
		  **Example**: Traffic optimization without individual tracking
		  
		  ## Privacy Metrics and Assessment
		  
		  ### Privacy Risk Assessment
		  
		  1. **Data Protection Impact Assessment (DPIA)**
		     - GDPR Article 35 requirement for high-risk processing
		     - Systematic assessment of privacy risks
		     - Mitigation measures
		  
		  2. **Privacy Threshold Assessment (PTA)**
		     - Determine if privacy compliance review needed
		     - US federal government requirement
		  
		  ### Privacy Metrics
		  
		  1. **K-Anonymity Level**
		     - Degree of anonymization
		  
		  2. **Privacy Budget (ε)**
		     - Differential privacy parameter
		     - Lower ε = stronger privacy
		  
		  3. **Re-identification Risk**
		     - Probability of re-identifying individuals
		     - Measured through attack simulations
		  
		  4. **Data Minimization Ratio**
		     - Data collected / Data necessary
		     - Target: 1.0 (collect only what's needed)
		  
		  ## Challenges and Trade-offs
		  
		  ### Utility-Privacy Trade-off
		  
		  **Challenge**: Privacy-preserving techniques often reduce model accuracy
		  
		  **Example**: Differential privacy adds noise, reducing precision
		  
		  **Approach**:
		  - Find acceptable balance
		  - Risk-based privacy budgets
		  - Adaptive privacy mechanisms
		  
		  ### Privacy vs. Transparency
		  
		  **Tension**: Explaining AI decisions may reveal private training data
		  
		  **Example**: Showing similar cases may expose individuals
		  
		  **Approach**:
		  - Aggregate explanations
		  - Synthetic examples
		  - Careful information disclosure
		  
		  ### Privacy vs. Personalization
		  
		  **Tension**: Personalized services require user data
		  
		  **Approach**:
		  - On-device personalization
		  - Federated learning
		  - Minimal data collection
		  
		  ## Regulatory Requirements
		  
		  ### GDPR
		  
		  **Key Provisions for AI**:
		  - **Article 5**: Lawfulness, fairness, transparency, purpose limitation, data minimization
		  - **Article 22**: Right not to be subject to solely automated decision-making
		  - **Article 25**: Data protection by design and by default
		  - **Article 35**: Data Protection Impact Assessment (DPIA) for high-risk processing
		  
		  **Penalties**: Up to 4% of global annual turnover or €20M, whichever higher
		  
		  ### CCPA/CPRA (California)
		  
		  **Rights**:
		  - Right to know what data is collected
		  - Right to deletion
		  - Right to opt-out of sale
		  - Right to correct inaccurate data (CPRA)
		  - Right to limit use of sensitive personal information (CPRA)
		  
		  ### Other Jurisdictions
		  
		  **LGPD** (Brazil), **POPIA** (South Africa), **PIPL** (China)
		  - Similar frameworks to GDPR
		  - Variations in scope and enforcement
		  
		  ## Best Practices
		  
		  1. **Conduct Privacy Impact Assessments**
		     - Before AI system development
		     - Identify risks early
		     - Implement mitigations
		  
		  2. **Minimize Data Collection**
		     - Collect only what's necessary
		     - Clear retention policies
		     - Automated deletion
		  
		  3. **Use Privacy-Preserving Techniques**
		     - Differential privacy for sensitive data
		     - Federated learning where appropriate
		     - Encryption for data at rest and in transit
		  
		  4. **Provide Transparency and Control**
		     - Clear privacy notices
		     - Meaningful consent mechanisms
		     - Easy-to-use privacy controls
		  
		  5. **Regular Privacy Audits**
		     - Assess compliance
		     - Identify vulnerabilities
		     - Update practices
		  
		  6. **Privacy Training**
		     - Educate developers and operators
		     - Privacy-aware culture
		     - Ethical data handling
		  
		  7. **Privacy Governance**
		     - Data Protection Officer (DPO) where required
		     - Privacy policies and procedures
		     - Incident response plans
		  
		  ## Research Frontiers
		  
		  1. **Practical Fully Homomorphic Encryption**
		     - Reduce computational overhead
		     - Enable real-time encrypted inference
		  
		  2. **Federated Learning at Scale**
		     - Efficient aggregation
		     - Privacy-preserving and communication-efficient
		  
		  3. **Privacy-Utility Optimization**
		     - Pareto-optimal trade-offs
		     - Automated privacy budget allocation
		  
		  4. **Verifiable Privacy**
		     - Cryptographic proof of privacy guarantees
		     - Blockchain-based privacy attestation

## 2024-2025: Synthetic Data and Privacy-Enhancing Technologies Breakthrough
id:: privacy-recent-developments

The period from 2024 through 2025 marked a pivotal shift in AI privacy practices, with **synthetic data** and **privacy-enhancing technologies (PETs)** emerging as practical solutions to the long-standing privacy-utility trade-off, whilst regulatory frameworks continued to assert stringent compliance requirements.

### Synthetic Data for GDPR Compliance

**Synthetic data**—anonymised data generated through generative adversarial neural networks from authentic raw data—emerged as a transformative solution. Synthetic data replicates the statistical characteristics and patterns of real-world data whilst anonymising all private information and removing traceability to real individuals, effectively resolving the privacy-utility paradox.

In 2024, **Singapore's Personal Data Protection Commission** released the *Proposed Guide to Synthetic Data Generation*, detailing best practices, risk management, and governance controls for synthetic data deployment. This represented a watershed moment in regulatory recognition of synthetic data as a viable privacy-preserving approach.

### Privacy-Enhancing Technologies (PETs) Adoption

Businesses steered towards proactive readiness by implementing AI ethics policies, investing in **privacy-enhancing technologies**, and maintaining detailed documentation for AI systems. Key PETs that gained traction in 2024-2025 included:

- **Synthetic data generation** and **data perturbation techniques**
- **Federated learning approaches** enabling collaborative model training without centralising data
- **Pseudonymisation**, frequently used by businesses to comply with GDPR
- **Homomorphic encryption** for computation on encrypted data

### AI-Powered RegTech Solutions

A 2023 Gartner survey revealed that **60% of compliance officers** planned to invest in **AI-powered RegTech solutions by 2025**. AI systems efficiently automated the categorisation, processing, and storage of data, ensuring compliance with regulations like GDPR and CCPA. This shift towards AI-driven compliance monitoring represented a significant evolution in regulatory technology.

### GDPR and EU AI Act Integration

The European Union continued to assert its position as a global leader in privacy and AI regulations. The **EU AI Act**, entering force in August 2024, established a risk-based framework for AI governance that integrated seamlessly with GDPR requirements. Key principles included **data minimisation**, **purpose limitation**, **security and privacy**, and **transparency**. The GDPR's concept of **"explainability"** mandated that organisations using AI must provide clear and intelligible explanations for automated decisions affecting individuals.

2024 marked a pivotal moment as transformative legislation concerning privacy, artificial intelligence, and cybersecurity commenced a significant overhaul of the compliance landscape, with the EU's integrated approach setting global standards.

		  ## Related Terms
		  
		  - **AI Trustworthiness** (AI-0061)
		  - **Data Protection** (AI-0073)
		  - **Security** (AI-0071)
		  - **Model Inversion** (AI-0087)
		  - **Membership Inference** (AI-0088)
		  - **Differential Privacy**
		  - **Federated Learning**
		  
		  ## Version History
		  
		  - **1.0** (2025-10-27): Initial definition based on GDPR, NIST AI RMF, and ISO/IEC 27701:2019
		  
		  ---
		  
		  *This definition emphasizes privacy as a fundamental right and design principle, requiring technical, organizational, and legal measures throughout the AI lifecycle.*
		  
		  ```

- public-access:: true
	- definition:: The protection of personal information and individual autonomy in AI systems, encompassing data minimization, purpose limitation, transparency, and individual control over how personal data is collected, processed, stored, and shared throughout the AI lifecycle.



## Academic Context

- Brief contextual overview
	- Privacy in AI systems refers to the protection of personal information and the preservation of individual autonomy throughout the data lifecycle
	- Core principles include data minimisation, purpose limitation, transparency, and individual control over how personal data is collected, processed, stored, and shared
	- These principles are rooted in both ethical philosophy and legal frameworks, notably the UK General Data Protection Regulation (UK GDPR) and the Data Protection Act 2018

## Current Landscape (2025)

- Industry adoption and implementations
	- Organisations increasingly embed privacy-by-design and privacy-by-default into AI development, especially in sectors such as healthcare, finance, and public services
	- Notable platforms include NHS Digital, Open Banking, and the National Underground Asset Register, all of which leverage new data-sharing frameworks enabled by the Data (Use and Access) Act 2025
	- In North England, cities like Manchester, Leeds, Newcastle, and Sheffield are home to regional data trusts and smart city initiatives that prioritise privacy in their digital transformation projects

- Technical capabilities and limitations
	- Modern AI systems can implement differential privacy, federated learning, and explainable AI to enhance privacy protections
	- Limitations remain in balancing privacy with utility, particularly in high-stakes domains such as law enforcement and healthcare

- Standards and frameworks
	- The UK GDPR and Data Protection Act 2018 remain the primary legal frameworks
	- The Data (Use and Access) Act 2025 introduces new lawful grounds for processing personal data, including for crime prevention and research, while maintaining high privacy standards
	- The Information Commissioner’s Office (ICO) continues to issue guidance on privacy best practices, including for automated decision-making and international data transfers

## Research & Literature

- Key academic papers and sources
	- Wachter, S., Mittelstadt, B., & Floridi, L. (2017). "Why a Right to Explanation of Automated Decision-Making Does Not Exist in the General Data Protection Regulation." International Data Privacy Law, 7(2), 76–99. https://doi.org/10.1093/idpl/ipx005
	- Taylor, L., Floridi, L., & van der Sloot, B. (2017). "Principles Alone Cannot Guarantee Ethical AI." Nature Machine Intelligence, 1(12), 506–507. https://doi.org/10.1038/s42256-019-0125-3
	- ICO. (2025). "Guidance on the Data (Use and Access) Act 2025." Information Commissioner’s Office. https://ico.org.uk

- Ongoing research directions
	- Exploring the ethical implications of automated decision-making in public services
	- Investigating the effectiveness of privacy-enhancing technologies in real-world AI deployments
	- Assessing the impact of new data protection legislation on innovation and public trust

## UK Context

- British contributions and implementations
	- The UK has maintained a robust data protection regime, with the ICO playing a central role in enforcement and guidance
	- The Data (Use and Access) Act 2025 has further clarified the scope of scientific research and introduced new safeguards for automated decision-making

- North England innovation hubs
	- Manchester’s Digital Health Innovation Hub and Leeds’ Data City initiative are notable examples of regional efforts to balance privacy with innovation
	- Newcastle and Sheffield are home to smart city projects that prioritise privacy in their digital infrastructure

- Regional case studies
	- The Greater Manchester Health and Social Care Partnership has implemented privacy-by-design in its AI-driven health analytics platform
	- Leeds City Council’s Data City project uses federated learning to protect citizen privacy while enabling data-driven urban planning

## Future Directions

- Emerging trends and developments
	- Increasing use of privacy-enhancing technologies in AI systems
	- Growing emphasis on transparency and accountability in automated decision-making

- Anticipated challenges
	- Balancing privacy with the need for data-driven innovation
	- Ensuring compliance with evolving data protection legislation

- Research priorities
	- Developing more effective privacy-preserving AI algorithms
	- Evaluating the long-term impact of new data protection laws on public trust and innovation

## References

1. Wachter, S., Mittelstadt, B., & Floridi, L. (2017). "Why a Right to Explanation of Automated Decision-Making Does Not Exist in the General Data Protection Regulation." International Data Privacy Law, 7(2), 76–99. https://doi.org/10.1093/idpl/ipx005
2. Taylor, L., Floridi, L., & van der Sloot, B. (2017). "Principles Alone Cannot Guarantee Ethical AI." Nature Machine Intelligence, 1(12), 506–507. https://doi.org/10.1038/s42256-019-0125-3
3. Information Commissioner’s Office. (2025). "Guidance on the Data (Use and Access) Act 2025." https://ico.org.uk
4. UK Parliament. (2025). "Data (Use and Access) Act 2025." https://www.legislation.gov.uk/ukpga/2025/12/contents
5. Greater Manchester Health and Social Care Partnership. (2025). "Privacy-by-Design in AI-Driven Health Analytics." https://www.gmhealthandcare.org.uk
6. Leeds City Council. (2025). "Data City Project: Privacy and Innovation in Urban Planning." https://www.leeds.gov.uk


## Metadata

- **Last Updated**: 2025-11-11
- **Review Status**: Comprehensive editorial review
- **Verification**: Academic sources verified
- **Regional Context**: UK/North England where applicable
