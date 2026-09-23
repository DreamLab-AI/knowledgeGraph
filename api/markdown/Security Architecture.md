
A comprehensive framework defining security controls, policies, and technologies that protect systems, infrastructure, user data, and digital assets through defence-in-depth strategies including authentication, encryption, access control, threat monitoring, and zero-trust principles.

- ### Semantic Classification

- ### Content

  - #### Security Layers
		- Network perimeter security
		- Identity and access management
		- Application security controls
		- Data protection and encryption
		- Endpoint security
  - #### Key Principles
		- Zero trust network architecture
		- Defence in depth strategy
		- Least privilege access
		- Security by design
		- Continuous monitoring

- ### Current Landscape (2026)
  - In June 2026 CISA published "The Journey to Zero Trust: Using Secure Access Service Edge in a Modern TIC 3.0 Solution", explicitly naming SASE as a compliant replacement for legacy TIC 2.0 gateways and MTIPS; the shift is from prescribing where controls live to prescribing what they must achieve, provided agencies feed equivalent telemetry to CISA's Comprehensive Log Aggregation Warehouse (CLAW).
  - A notable architectural reversal: CISA now describes routine TLS/SSL break-and-inspect as "no longer a universally recommended solution", pointing instead to AI/ML analysis of encrypted traffic — reshaping how enterprise reference architectures handle inspection and visibility.
  - Post-quantum cryptography moved from theory to mandated migration: after NIST finalised FIPS 203 (ML-KEM), 204 (ML-DSA) and 205 (SLH-DSA) in August 2024 and selected HQC as a backup KEM in 2025, crypto-agility and a Cryptographic Bill of Materials (CBOM) are now baseline architectural requirements, with CNSA 2.0 deadlines (2027 acquisition preference, full NSS enforcement by 2031) and NIST IR 8547 targeting removal of quantum-vulnerable algorithms by 2035.
  - The dominant design pattern of 2025–2026 is the "agentic SOC": CrowdStrike's September 2025 Fal.Con release reframed Falcon as an agentic security platform with mission-ready AI agents and no-code Charlotte AI AgentWorks, using the Model Context Protocol (MCP) as the governed connective tissue between first-party, customer-built and third-party agents.
  - Securing AI agents themselves has become a distinct architectural layer, as vendors acknowledge autonomous agents act as persistent, privileged actors with access to filesystems and credentials that traditional EDR/EPP models do not cover — driving acquisitions such as Palo Alto's Protect AI (Prisma AIRS), Check Point's Lakera and Palo Alto's agentic-endpoint startup Koi.
  - Massive platformisation and consolidation is redrawing vendor architectures: Google's $32bn acquisition of Wiz (announced March 2025, closed 2026) and Palo Alto's $25bn CyberArk deal (closed 11 February 2026, unifying identity, network, cloud and SOC pillars) headline roughly $96bn of M&A across about 400 deals in 2025 — a c.270% year-on-year jump in deal value.
  - Open challenges as of 2026 include maintaining CISA/regulatory visibility without default TLS decryption, retrofitting crypto-agility into long-lived IoT/OT and PKI estates ahead of "Q-Day", governing multi-agent and non-person-entity identities at machine speed, and the concentration risk of consolidating an entire security estate onto a single platform vendor.

- ### References
  - 1. CISA / Netskope analysis (2026). CISA's SASE Guidance Changes the TIC Compliance Calculus (The Journey to Zero Trust: Using SASE in a Modern TIC 3.0 Solution). https://www.netskope.com/blog/cisas-sase-guidance-changes-the-tic-compliance-calculus
  - 2. Industrial Cyber (2026). CISA publishes SASE roadmap to advance zero trust, modernise federal network security under TIC 3.0. https://industrialcyber.co/zero-trust/cisa-publishes-sase-roadmap-to-advance-zero-trust-modernize-federal-network-security-under-tic-3-0/
  - 3. Cloud Security Alliance (2026). Q-Day Clock: Enterprise Post-Quantum Migration Imperative (FIPS 203/204/205, CNSA 2.0 timelines). https://labs.cloudsecurityalliance.org/research/strategic-post-quantum-cryptography-migration-enterprise-roa/
  - 4. NIST CSRC (2024–2025). Post-Quantum Cryptography project and IR 8547 transition timeline. https://csrc.nist.gov/projects/post-quantum-cryptography
  - 5. CrowdStrike (2025). CrowdStrike Fall 2025 Release Defines the Agentic SOC and Secures the AI Era. https://www.crowdstrike.com/en-us/blog/crowdstrike-fall-2025-release-defines-agentic-soc-secures-ai-era/
  - 6. CRN (2025). 10 Big Cybersecurity Acquisition Deals In 2025 (Google-Wiz $32bn, Palo Alto-CyberArk $25bn, platformisation). https://www.crn.com/news/security/2025/10-big-cybersecurity-acquisition-deals-in-2025

- ### Provenance

