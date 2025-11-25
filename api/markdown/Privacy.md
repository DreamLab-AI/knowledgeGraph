id:: privacy-ontology

- ### OntologyBlock
  id:: Privacy
  - ontology:: true
  - public-access:: true
  - term-id:: MV-0836
  - preferred-term:: Privacy
  - source-domain:: ai
  - status:: draft
  - definition:: The protection of personal information and individual autonomy in AI systems, encompassing data minimization, purpose limitation, transparency, and individual control over how personal data is collected, processed, stored, and shared throughout the AI lifecycle.

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
**Definition**: Train models on decentralized data without centralising raw data

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

- is-subclass-of:: [[AIGovernance]]- **Component Of**: AI Trustworthiness (AI-0061)
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

2. **Minimise Data Collection**
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

*This definition emphasises privacy as a fundamental right and design principle, requiring technical, organizational, and legal measures throughout the AI lifecycle.*
	- maturity:: draft
	- owl:class:: mv:Privacy
	- owl:physicality:: ConceptualEntity
	- owl:role:: Concept
	- belongsToDomain:: [[MetaverseDomain]]
