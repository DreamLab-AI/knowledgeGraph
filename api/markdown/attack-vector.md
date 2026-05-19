- ### Definition
  - Attack Vector is a concept within the ai domain.

- ### Semantic Classification
  - owl-class:: artificial-intelligence:AttackVector
  - owl-role:: Concept

- ### Relationships
  - is-subclass-of:: [[Artificial Intelligence]]
  - bridges-to:: [[Blockchain]] (domain: bc)

- ### Content

  ## Definition

  An **Attack Vector** is a specific path, method, or mechanism that a threat actor uses to gain unauthorized access, exploit vulnerabilities, or cause damage to a system, network, or organization.

  ## Cross-Domain Manifestations

  ### Artificial Intelligence
  - **Adversarial Attacks**: Crafted inputs causing model misclassification
  - **Prompt Injection**: Malicious instructions embedded in LLM prompts
  - **Model Poisoning**: Corrupting training data to compromise model integrity
  - **Data Exfiltration**: Extracting training data through membership inference
  - **API Abuse**: Overwhelming inference endpoints with malicious queries

  ### Blockchain
  - **51% Attacks**: Controlling majority of network hash power
  - **Smart Contract Exploits**: Reentrancy, integer overflow, access control flaws
  - **Bridge Hacks**: Exploiting cross-chain communication protocols
  - **Private Key Theft**: Social engineering, malware, hardware compromise
  - **Front-Running**: Manipulating transaction ordering for profit

  ### Robotics
  - **Sensor Spoofing**: Feeding false data to perception systems
  - **Command Injection**: Manipulating control protocol communications
  - **Physical Tampering**: Direct hardware modification or damage
  - **GPS Jamming**: Disrupting positioning and navigation systems
  - **Firmware Exploitation**: Compromising embedded system software

  ### Metaverse
  - **Avatar Hijacking**: Stealing virtual identity credentials
  - **Virtual Property Theft**: Exploiting system bugs to steal digital assets
  - **Griefing**: Intentional harassment and disruption of user experiences
  - **Cross-Reality Phishing**: Social engineering in immersive environments
  - **Exploit Chaining**: Combining multiple vulnerabilities for escalated access

  ### Telecommunications
  - **Meeting Bombing**: Unauthorized joining of video conferences
  - **Man-in-the-Middle**: Intercepting and modifying communications
  - **VoIP Fraud**: Exploiting voice protocol vulnerabilities
  - **SIM Swapping**: Social engineering to transfer phone numbers
  - **Eavesdropping**: Passive surveillance of unencrypted communications

  ## Attack Vector Taxonomy

  ### By Access Method
  1. **Network-Based**: Remote exploitation over communication channels
  2. **Physical**: Direct hardware access and tampering
  3. **Social Engineering**: Human manipulation and deception
  4. **Supply Chain**: Compromising third-party components
  5. **Insider Threat**: Exploitation by authorized users

  ### By Target Layer
  1. **Application**: Software vulnerability exploitation
  2. **Protocol**: Communication standard weaknesses
  3. **Infrastructure**: System and network component attacks
  4. **Data**: Information theft or manipulation
  5. **Identity**: Credential compromise and impersonation

  ### By Sophistication
  1. **Opportunistic**: Automated scanning for common vulnerabilities
  2. **Targeted**: Specific victim reconnaissance and attack planning
  3. **Advanced Persistent**: Long-term stealthy compromise campaigns
  4. **Zero-Day**: Exploiting previously unknown vulnerabilities
  5. **Supply Chain**: Complex multi-stage attacks through dependencies

  ## Defensive Strategies

  ### Prevention
  - **Attack Surface Reduction**: Minimize exposed interfaces and services
  - **Security Architecture**: Defense-in-depth and zero-trust models
  - **Input Validation**: Rigorous sanitization and bounds checking
  - **Access Control**: Principle of least privilege enforcement
  - **Security Awareness**: Training against social engineering

  ### Detection
  - **Intrusion Detection**: Signature and anomaly-based monitoring
  - **Behavioral Analysis**: Identifying unusual activity patterns
  - **Threat Intelligence**: Leveraging known attack indicators
  - **Security Logging**: Comprehensive audit trail collection
  - **Honeypots**: Decoy systems for attacker observation

  ### Response
  - **Incident Response**: Prepared procedures for breach containment
  - **Forensic Analysis**: Understanding attack methods and scope
  - **System Isolation**: Quarantining compromised components
  - **Threat Hunting**: Proactive searching for hidden compromises
  - **Recovery Planning**: Restoration of normal operations

  #### Related Concepts
  - [[Vulnerability]]: Weaknesses that attack vectors exploit
  - [[Threat Actor]]: Entities using attack vectors
  - [[Resilience]]: System ability to withstand attack vectors
  - [[Security]]: Overall protection framework
  - [[Risk]]: Potential impact of successful attacks

  #### References
  - MITRE ATT&CK Framework: Comprehensive attack vector taxonomy
  - OWASP Top 10: Common web application attack vectors
  - NIST Cybersecurity Framework: Attack vector mitigation strategies
  - CWE (Common Weakness Enumeration): Vulnerability and attack vector catalog

- ### Provenance
  - sources:: [[ISO]], [[NIST]]
  - migration-date:: 2026-04-26T00:00:00Z