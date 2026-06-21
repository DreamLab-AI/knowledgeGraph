- ### Definition
  - DevSecOps is a software engineering and organisational practice that embeds security disciplines — static analysis, dynamic testing, software composition analysis, policy-as-code enforcement, and runtime monitoring — directly into every stage of the [[CI-CD Automation]] pipeline, transforming security from a periodic gate into a continuous, automated quality signal co-owned by development, operations, and security teams alike.
  - Rooted in the [[Agile Software Development]] movement and the broader DevOps cultural shift pioneered between 2008 and 2012 by practitioners such as Patrick Debois and Gene Kim, DevSecOps operationalises the principle of shift-left security: finding and remediating vulnerabilities at the moment of code authorship rather than weeks later during a pre-release audit, when the cost of remediation is an order of magnitude higher and the window of exposure to attackers is at its widest.
  - The practice spans the full software delivery lifecycle: from pre-commit secret detection and linting, through static application security testing (SAST) on pull requests, software composition analysis (SCA) for open-source dependency CVEs, container image scanning before registry push, infrastructure-as-code (IaC) validation against [[Cybersecurity Framework]] policy baselines, dynamic application security testing (DAST) in staging environments, and finally [[Continuous Monitoring]] in production integrated with SIEM and XDR platforms.
  - [[Vulnerability Management]] is thereby transformed from a periodic scan-and-ticket workflow into a real-time, pipeline-integrated feedback loop in which security findings become blocking CI failures that the engineer who introduced the code is expected to fix before the change reaches the main branch — collapsing mean time to remediation (MTTR) from weeks to hours.
  - For AI and machine learning systems, DevSecOps extends naturally into MLSecOps: scanning training data pipelines for poisoning vectors, validating model artefacts with cryptographic checksums via Sigstore, auditing inference service dependencies against [[AI Security]] threat models such as the OWASP Top 10 for LLMs and [[MITRE ATLAS]], and generating [[Software Bill of Materials]] artefacts in CycloneDX or SPDX format to satisfy regulatory requirements under the US Executive Order 14028 and the EU Cyber Resilience Act (CRA).
  - The UK [[NCSC Cybersecurity Framework]] Cyber Essentials programme, updated in both April 2025 and April 2026 to incorporate cloud-native and container security controls, and the EU CRA (mandating SBOM provision and continuous vulnerability management for digital products from 2027), together create a regulatory environment in which DevSecOps practices transition from engineering best practice to legal obligation for UK and European software producers.
  - By 2026, the practice incorporates AI-assisted triage, agentic remediation workflows that automatically generate and test fix pull requests, and platform engineering abstractions via internal developer portals such as Backstage and Port that surface security guardrails as developer-portal golden-path defaults rather than manually configured pipeline add-ons, reducing friction and closing the structural gap between security intent and engineering practice at scale.

- ### Semantic Classification
  - owl-class:: ai:DevSecOps
  - owl-role:: ExecutableProtocol | EngineeringPractice | SecurityParadigm | ContinuousProcess
  - owl-inferred:: ai:ShiftLeftSecurity, ai:ContinuousSecurityIntegration, ai:PolicyAsCode, ai:MLSecOps, ai:SupplyChainSecurity, ai:SecureSDLC
  - belongs-to-domain:: [[Cybersecurity]]
  - implemented-in-layer:: [[CI-CD Automation]]

- ### Relationships
  - is-subclass-of:: [[Agile Software Development]], [[Software Engineering]], [[Cybersecurity]], [[Continuous Delivery]]
  - has-part:: [[Security Testing]], [[Penetration Testing]], [[Continuous Monitoring]], [[Policy as Code]], [[Vulnerability Scanner]], [[Software Bill of Materials]], [[Container Security]], [[Infrastructure as Code]], [[Cloud Security]]
  - requires:: [[CI-CD Automation]], [[Continuous Integration]], [[Continuous Deployment]], [[Vulnerability Scanner]], [[Cybersecurity Framework]], [[Source Control]], [[Infrastructure as Code]], [[Cloud Security]]
  - enables:: [[Vulnerability Management]], [[Software Bill of Materials]], [[Supply Chain Security]], [[Regulatory Compliance]], [[AI Security]], [[MLSecOps]], [[Secure Software Development Lifecycle]], [[Zero Trust Architecture]], [[Continuous Monitoring]]
  - implements:: [[Shift Left Security]], [[SLSA Framework]], [[NIST Cybersecurity Framework]], [[Zero Trust Architecture]], [[Policy as Code]], [[NIST AI Risk Management Framework]], [[Secure Software Development Lifecycle]]
  - depends-on:: [[Source Control]], [[Container Security]], [[Infrastructure as Code]], [[Cloud Security]], [[Continuous Integration]], [[Agile Software Development]], [[CI-CD Automation]]
  - supports:: [[Platform Engineering]], [[Continuous Delivery]], [[Regulatory Compliance]], [[API Security]], [[Data Security]], [[Cyber Security and Cryptography]], [[Cybersecurity Policy]]
  - uses:: [[Open Policy Agent]], [[Sigstore]], [[Software Bill of Materials]], [[Vulnerability Scanner]], [[Penetration Testing]], [[Security Testing]], [[Continuous Monitoring]], [[Cryptographic Security]]
  - contrasts-with:: [[Manual Security Audit]], [[Perimeter Security]], [[Waterfall Security Model]], [[Periodic Penetration Testing]]
  - related-to:: [[MLSecOps]], [[AI Trust Risk and Security Management]], [[Cybersecurity Risk Management]], [[API Security]], [[Cloud Security]], [[Data Security]], [[Cyber Security and Cryptography]], [[Cybersecurity Policy]], [[Cybersecurity Standard]], [[Continuous Training]], [[NIST AI Standards]], [[NIST Cybersecurity Framework]], [[AI Security]]
  - standardized-by:: [[NIST Cybersecurity Framework]], [[NIST AI Risk Management Framework]], [[SLSA Framework]], [[NCSC Cybersecurity Framework]], [[Cybersecurity Standard]]

- ### Content

  ## Compositional Relationships (Components)
      SubClassOf(ai:DevSecOps
        ObjectSomeValuesFrom(ai:hasPart ai:StaticApplicationSecurityTesting))
      SubClassOf(ai:DevSecOps
        ObjectSomeValuesFrom(ai:hasPart ai:DynamicApplicationSecurityTesting))
      SubClassOf(ai:DevSecOps
        ObjectSomeValuesFrom(ai:hasPart ai:SoftwareCompositionAnalysis))
      SubClassOf(ai:DevSecOps
        ObjectSomeValuesFrom(ai:hasPart ai:PolicyAsCode))
      SubClassOf(ai:DevSecOps
        ObjectSomeValuesFrom(ai:hasPart ai:PenetrationTesting))
      SubClassOf(ai:DevSecOps
        ObjectSomeValuesFrom(ai:hasPart ai:ContinuousMonitoring))
      SubClassOf(ai:DevSecOps
        ObjectSomeValuesFrom(ai:hasPart ai:VulnerabilityScanner))
      SubClassOf(ai:DevSecOps
        ObjectSomeValuesFrom(ai:hasPart ai:SoftwareBillOfMaterials))
      SubClassOf(ai:DevSecOps
        ObjectSomeValuesFrom(ai:hasPart ai:ContainerSecurity))
      SubClassOf(ai:DevSecOps
        ObjectSomeValuesFrom(ai:hasPart ai:InfrastructureAsCode))

  ## Dependency Relationships
      SubClassOf(ai:DevSecOps
        ObjectSomeValuesFrom(ai:requires ai:CICDAutomation))
      SubClassOf(ai:DevSecOps
        ObjectSomeValuesFrom(ai:requires ai:ContinuousIntegration))
      SubClassOf(ai:DevSecOps
        ObjectSomeValuesFrom(ai:requires ai:VulnerabilityScanner))
      SubClassOf(ai:DevSecOps
        ObjectSomeValuesFrom(ai:requires ai:CybersecurityFramework))
      SubClassOf(ai:DevSecOps
        ObjectSomeValuesFrom(ai:requires ai:SourceControl))
      SubClassOf(ai:DevSecOps
        ObjectSomeValuesFrom(ai:requires ai:ContainerSecurity))
      SubClassOf(ai:DevSecOps
        ObjectSomeValuesFrom(ai:requires ai:CloudSecurity))

  ## Capability Relationships
      SubClassOf(ai:DevSecOps
        ObjectSomeValuesFrom(ai:enables ai:VulnerabilityManagement))
      SubClassOf(ai:DevSecOps
        ObjectSomeValuesFrom(ai:enables ai:SoftwareBillOfMaterials))
      SubClassOf(ai:DevSecOps
        ObjectSomeValuesFrom(ai:enables ai:SupplyChainSecurity))
      SubClassOf(ai:DevSecOps
        ObjectSomeValuesFrom(ai:enables ai:RegulatoryCompliance))
      SubClassOf(ai:DevSecOps
        ObjectSomeValuesFrom(ai:enables ai:AISecurityAssurance))
      SubClassOf(ai:DevSecOps
        ObjectSomeValuesFrom(ai:enables ai:MLSecOps))
      SubClassOf(ai:DevSecOps
        ObjectSomeValuesFrom(ai:enables ai:ZeroTrustArchitecture))

  ## Implementation Relationships
      SubClassOf(ai:DevSecOps
        ObjectSomeValuesFrom(ai:implements ai:ShiftLeftSecurity))
      SubClassOf(ai:DevSecOps
        ObjectSomeValuesFrom(ai:implements ai:SLSAFramework))
      SubClassOf(ai:DevSecOps
        ObjectSomeValuesFrom(ai:implements ai:NISTCybersecurityFramework))
      SubClassOf(ai:DevSecOps
        ObjectSomeValuesFrom(ai:implements ai:PolicyAsCode))
      SubClassOf(ai:DevSecOps
        ObjectSomeValuesFrom(ai:implements ai:SecureSoftwareDevelopmentLifecycle))
      SubClassOf(ai:DevSecOps
        ObjectSomeValuesFrom(ai:implements ai:BlamelessPostMortem))
      SubClassOf(ai:DevSecOps
        ObjectSomeValuesFrom(ai:implements ai:ContinuousCompliance))

  ## Reduction Relationships
      SubClassOf(ai:DevSecOps
        ObjectSomeValuesFrom(ai:reducesTo ai:ContinuousSecurityIntegration))
      SubClassOf(ai:DevSecOps
        ObjectSomeValuesFrom(ai:reducesTo ai:AutomatedSecurityGating))
      SubClassOf(ai:DevSecOps
        ObjectSomeValuesFrom(ai:reducesTo ai:ShiftLeftSecurity))
      SubClassOf(ai:DevSecOps
        ObjectSomeValuesFrom(ai:reducesTo ai:SecurityAsCode))
      SubClassOf(ai:DevSecOps
        ObjectSomeValuesFrom(ai:reducesTo ai:ContinuousCompliance))

  ## About

  **DevSecOps** emerged from the collision of two independent but convergent movements in software delivery. The first was DevOps itself — the 2008-2012 recognition by engineers such as Patrick Debois and Gene Kim that the organisational wall between software development and IT operations was the primary cause of slow, brittle deployments characterised by big-bang release events, long lead times, and fragile manual processes. DevOps proposed collapsing that wall through shared tooling, shared ownership, and shared accountability for the full delivery pipeline from commit to production. The second movement was the mounting evidence that "bolt-on" security — penetration tests and code audits tacked onto the end of a release cycle — was categorically incompatible with the release velocity that cloud-native teams were achieving. When a team ships multiple times per day, a two-week security review cycle creates an intolerable backlog and a false sense of assurance: by the time findings are returned, the codebase has moved on and the context for remediation is lost.

  The term "DevSecOps" crystallised around 2012 and gained widespread traction following catastrophic breaches directly attributable to vulnerabilities that automated scanning would have caught: the 2017 Equifax breach (an unpatched Apache Struts dependency identifiable in minutes by [[Software Composition Analysis]] tooling), the 2020 SolarWinds supply chain attack (build environment compromise that signed malicious artefacts — precisely the threat that [[SLSA Framework]] build provenance attestation addresses), and the 2021 Log4Shell vulnerability embedded in transitive Java dependencies across millions of applications worldwide. Each of these incidents demonstrated that late-stage security reviews created unacceptable risk windows measured in weeks rather than the hours that automated pipeline gates would enable.

  The conceptual core of DevSecOps is the pipeline as policy: every code change traverses an automated sequence of security gates that either pass or block the change. Pre-commit hooks run secret detection tools (Gitleaks, Trufflehog) to prevent credentials entering version control. The [[Continuous Integration]] stage executes SAST tools — Semgrep, Checkmarx, or Snyk Code — against every pull request, surfacing injection flaws, insecure deserialisation, path traversal vulnerabilities, and hardcoded credentials within seconds. Software composition analysis (SCA) audits open-source dependency trees against the CVE database and EPSS (Exploit Prediction Scoring System) scores, blocking merges that introduce critically exploitable transitive dependencies not just direct ones. Container builds are scanned by Trivy or Grype before any image is pushed to a registry, catching OS-level and library-level CVEs. Infrastructure-as-code templates (Terraform, CloudFormation, Kubernetes manifests) are validated against compliance policies encoded in Open Policy Agent (OPA) or Checkov, ensuring misconfiguration — the leading cause of cloud data breaches — cannot be deployed. Dynamic application security testing (DAST) tools probe running applications in staging environments for runtime vulnerabilities not visible to static analysis.

  The organisational dimension of DevSecOps is as significant as its tooling dimension. Gene Kim's three-ways framing of DevOps — flow (making work visible and moving it forward), feedback (detecting problems as quickly as possible), and continuous learning (improving the system based on what is learned) — maps directly onto DevSecOps practice. Security expertise must flow into developer toolchains rather than being siloed in a separate security team; feedback on vulnerabilities must be fast enough to be actionable by the engineer who introduced them while the code is still fresh in their mind; and security incidents must be treated as learning opportunities that improve both detection tooling and developer education. This cultural transformation requires investment in developer security training, security champion programmes that embed security expertise within product engineering squads, and metrics that track MTTR for vulnerabilities rather than merely counting open CVE counts.

  The 2025-2026 evolution of DevSecOps is characterised by three major shifts. First, AI-assisted security tooling has moved from experimental to production: LLMs now triage vulnerability findings with context-aware severity assessment, suggest and generate remediation patches, and auto-submit fix pull requests for a growing proportion of common vulnerability classes. Second, the SLSA framework has graduated from a Google-internal practice to a widely adopted open standard, with SLSA Level 2 now a minimum expectation for enterprise software procurement. Third, platform engineering has absorbed DevSecOps tooling configuration as a platform responsibility, with internal developer portals providing compliance-as-code scaffolding so that new services are instantiated already compliant with organisational and regulatory policy baselines.

  ## Pipeline Architecture and Components

  **Pre-commit layer**
  - Secret detection: Gitleaks and Trufflehog scan code changes for hardcoded credentials, API keys, and tokens before they enter version control history. Pre-commit hooks enforce this locally; server-side push hooks enforce it at the repository level.
  - Lint and style enforcement: Security-oriented lint rules (bandit for Python, gosec for Go, semgrep rules) flag known insecure coding patterns at authorship time without requiring a full CI run.
  - Licence compliance: FOSSA, Black Duck, and Licence Finder check that open-source licences in new dependencies are compatible with the project's commercial distribution model.
  - Commit signing: Sigstore cosign and traditional GPG signing establish author non-repudiation from the moment code enters version control, providing build provenance chain-of-custody.

  **SAST — Static Application Security Testing**
  - Semgrep (open-source, pattern-based, 30+ languages) is the dominant open-source SAST tool, with pre-built rule sets for OWASP Top 10 vulnerabilities and the ability to write custom rules in a simple YAML DSL. It integrates with GitHub Actions, GitLab CI, Bitbucket Pipelines, and Azure Pipelines as a first-class PR check.
  - Checkmarx SAST and Snyk Code are the leading commercial SAST products, offering deeper data-flow analysis, taint tracking across module boundaries, and AI-assisted finding descriptions with remediation guidance.
  - IDE integration (VS Code, IntelliJ, PyCharm) allows findings to be surfaced at authorship time — shift-even-further-left — before a commit is made.

  **SCA — Software Composition Analysis**
  - OWASP Dependency-Check and Dependabot audit the full transitive dependency tree (npm, Maven, pip, Go modules, Cargo, NuGet) against the NVD CVE database enriched with EPSS scores.
  - Snyk Open Source and Socket.dev additionally detect malicious packages (dependency confusion, typosquatting) and monitor for new vulnerabilities in already-merged dependencies.
  - Reachability analysis (available in Snyk and Semgrep) determines whether a vulnerable function in a dependency is actually called by the application, dramatically reducing false-positive rates.

  **Container and Image Scanning**
  - Trivy (Aqua Security, open-source) and Grype (Anchore, open-source) scan container images for OS-level CVEs (Debian, Ubuntu, Alpine, RHEL packages) and application-layer library CVEs across Java JARs, Python wheels, npm packages, and Go binaries.
  - Distroless and scratch-based base images are mandated in platform golden paths to reduce attack surface: a distroless Node.js image has 70-90% fewer CVEs than a standard node:18 image.
  - Image signing with Sigstore cosign and policy enforcement in Kubernetes admission controllers (Kyverno, OPA Gatekeeper) ensures only signed, scanned images from approved registries are schedulable.

  **IaC Scanning — Infrastructure as Code**
  - Checkov (Bridgecrew/Palo Alto Networks), tfsec (Aqua), Terrascan (Tenable), and KICS (Checkmarx) validate Terraform, CloudFormation, Kubernetes, Helm, and Bicep templates against CIS Benchmarks, NIST 800-53 controls, and PCI-DSS requirements.
  - Common findings blocked: public S3 buckets, over-permissive IAM roles (AdministratorAccess attached to Lambda functions), unencrypted RDS databases, Kubernetes pods running as root, missing network policies.
  - OPA Gatekeeper with Kubernetes admission control blocks non-compliant workloads from being scheduled, providing a runtime enforcement layer complementary to pre-deployment IaC scanning.

  **Build Provenance — SLSA**
  - SLSA (Supply-chain Levels for Software Artefacts) Level 1 requires build definitions in version control; Level 2 requires a hosted build service with provenance attestations; Level 3 requires a hardened build environment with isolated build infrastructure.
  - SLSA Level 3 build attestations produced by GitHub Actions, GitLab CI, or Tekton record the exact source commit, build environment hash, dependency versions, and build command used to produce each artefact. Attestations are stored in the Sigstore Rekor transparency log and verified at deployment time.
  - This directly addresses the SolarWinds class of attack: even if an attacker compromises a developer's machine, they cannot produce an artefact with a valid SLSA Level 3 attestation because the attestation is signed by the build service's ephemeral private key, not the developer's key.

  **SBOM — Software Bill of Materials**
  - Syft (Anchore), Microsoft SBOM Tool, and cdxgen generate SBOMs in SPDX 2.3 and CycloneDX 1.6 formats for every release artefact, enumerating all components, their versions, and their licence declarations.
  - VEX (Vulnerability Exploitability eXchange) documents assert which CVEs listed in the SBOM are not exploitable in the deployed configuration (e.g., a vulnerable function is never called, or the vulnerable component is not included in the final build), reducing false-positive noise for downstream consumers.
  - Living SBOMs — SBOMs continuously updated as new CVEs are disclosed — are the 2026 direction, replacing static point-in-time SBOMs with continuously enriched inventory linked to CVE feeds and EPSS data.

  **Policy-as-Code — OPA and Gatekeeper**
  - Open Policy Agent (OPA) with Rego policy language provides a general-purpose policy engine for admission control, API authorisation, and configuration validation across Kubernetes, Terraform, CI pipelines, and microservice APIs.
  - Rego policies are version-controlled, unit-tested, and deployed via CI pipelines — applying the same software engineering disciplines (review, testing, automated deployment) to security policy that DevOps applies to application code.
  - AWS Service Control Policies (SCPs), Azure Policy, and GCP Organisation Policies encode cloud-level guardrails that cannot be overridden even by account administrators, providing a hard outer boundary complementing the softer inner boundary of pipeline SAST/SCA checks.

  **DAST and Runtime**
  - OWASP ZAP (Zed Attack Proxy), Burp Suite Enterprise Edition, and Nuclei probe running applications in staging for authentication bypasses, IDOR (Insecure Direct Object Reference), injection flaws, SSRF (Server-Side Request Forgery), and API-specific vulnerabilities not visible to static analysis.
  - Runtime Application Self-Protection (RASP) agents (Sqreen, Imperva, Contrast Security) monitor application behaviour from inside the process at runtime, detecting and blocking exploitation attempts based on call stack analysis rather than network signatures.
  - Extended Detection and Response (XDR) and SIEM integration (Splunk, Elastic Security, Microsoft Sentinel) aggregates logs, events, and alerts across the pipeline and production environment into a unified security operations view.

  **Platform Engineering and IDPs**
  - Internal Developer Portals (IDPs) built on Backstage (89% market share among IDP adopters), Port, or Cortex provide security scorecards, vulnerability posture dashboards, and golden-path scaffolding templates.
  - Backstage's TechDocs plugin surfaces security documentation; its Software Catalogue tracks component ownership and security posture; its Scaffolder plugin instantiates new services pre-configured with all security tooling.
  - Gartner projects 80% of software engineering organisations will have platform teams by 2026 and 75% of those will provide IDPs, embedding DevSecOps into the paved road rather than requiring individual teams to configure security tooling independently.

  **AI/ML Supply Chain Security (MLSecOps)**
  - Model artefact signing via Sigstore cosign: model weights files are hashed, signed, and the signature is stored in the Rekor transparency log, enabling downstream consumers to verify model provenance.
  - Training data provenance attestation: data pipeline outputs are hashed and linked to their source datasets, enabling detection of training data poisoning if an unexpected hash change is observed.
  - OWASP LLM Top 10 automated scanning: ML security tools (Rebuff, Garak) probe deployed inference endpoints for prompt injection, training data extraction, and model theft attack vectors.
  - MITRE ATLAS v5.1.0 (November 2025) adds 18 new techniques focused on AI agent security, including Command and Control (AML.TA0015) and AI-specific initial access and execution techniques, providing the threat model that MLSecOps pipeline checks are mapped against.

  ## Maturity Models and Assessment Frameworks

  Organisations assessing their DevSecOps maturity typically use one of several established models. The BSIMM (Building Security In Maturity Model), published annually by Synopsis Research, is the most widely adopted maturity benchmarking tool: it surveys security activities across four domains (Governance, Intelligence, SSAT — Software Security Assurance Testing, and Deployment) and 121 activities, and benchmarks an organisation's activity adoption against the observed practice distribution across 100-200 peer organisations. BSIMM12 (2021) showed that automated security testing in CI had the highest adoption growth rate of any security activity over the prior five years. The OWASP Software Assurance Maturity Model (SAMM v2.0) provides a complementary framework structured around five business functions (Governance, Design, Implementation, Verification, Operations) with fifteen security practices and three maturity levels per practice, enabling organisations to build incremental DevSecOps improvement roadmaps.

  The NIST Secure Software Development Framework (SSDF SP 800-218) maps DevSecOps practices to four tracks: Prepare the Organisation (PO) for secure development; Protect Software (PS) by managing code and build integrity; Produce Well-Secured Software (PW) through security requirements, design review, and testing; and Respond to Vulnerabilities (RV) through disclosure policies and patch management. The SSDF is referenced by US federal procurement requirements and is increasingly referenced by UK government technology procurement.

  For regulated sectors, compliance frameworks map explicitly to DevSecOps controls. PCI-DSS v4.0 Requirement 6 (Develop and Maintain Secure Systems and Software) maps to SAST, SCA, and penetration testing. HIPAA Technical Safeguards §164.312 map to access control and audit logging that DevSecOps pipeline integrations provide. ISO 27001:2022 controls A.8.25-A.8.29 (Secure Development) map to development environment security, secure coding, and testing — all addressable through DevSecOps pipeline automation.

  DevSecOps maturity is increasingly assessed through vendor tools that aggregate pipeline findings into security posture scores. Ox Security's Application Security Posture Management (ASPM) platform, for example, ingests findings from 50+ security tools across the SDLC and provides a unified risk score per application, enabling security teams to compare risk across a portfolio rather than triaging individual scanner outputs. Gartner's introduction of the ASPM category in 2024 formalised DevSecOps maturity assessment as a distinct product category, with projected rapid growth through 2026-2028.

  ## Threat Modelling in DevSecOps

  Threat modelling — the structured analysis of system architecture to identify potential security threats and mitigations — is a foundational practice that DevSecOps integrates as a pipeline-adjacent step rather than a one-time activity at the start of a project. The STRIDE threat modelling framework (Spoofing, Tampering, Repudiation, Information Disclosure, Denial of Service, Elevation of Privilege), developed at Microsoft, is the most widely used structured method. DevSecOps teams use threat modelling during the design phase of new features, generating security requirements that become acceptance criteria for the SAST, DAST, and IaC scanning pipeline stages.

  The 2026 evolution of threat modelling in DevSecOps involves AI-assisted automation: tools such as IriusRisk, Threagile, and Microsoft's SPARTA use LLMs and structured templates to generate initial threat models from architecture diagrams or Infrastructure-as-Code definitions, dramatically reducing the time required per model and enabling continuous threat model refresh as architectures evolve. The output of automated threat modelling is a prioritised set of attack scenarios that is used to tune SAST rules, DAST scan profiles, and penetration test scope, ensuring that the pipeline checks target the highest-priority risks for that specific application's architecture.

  For AI systems, threat modelling must explicitly address the MITRE ATLAS attack taxonomy: training data poisoning (attacker manipulates training data to embed backdoors), model inversion (attacker reconstructs training data from model outputs), model evasion (attacker crafts adversarial inputs to induce misclassification), model extraction (attacker queries the model to reconstruct its parameters), and prompt injection (attacker embeds instructions in model inputs or tool outputs that override system prompts). The NCSC's Principles for the Security of Machine Learning (2024) provides UK-specific threat modelling guidance for ML systems that maps to these attack categories.

  ## Use Cases

  **Financial Services and Fintech**
  PCI-DSS v4.0 (effective March 2025) mandates continuous control monitoring, quarterly ASV scanning, and penetration testing at least annually. DevSecOps pipelines generate audit evidence automatically — SAST findings reports, SCA dependency inventories, SLSA attestations, SBOM manifests, and penetration test scope documentation — reducing annual PCI assessment preparation from months to days. UK banks including Barclays and HSBC have publicly described shift-left security programmes. The FCA's operational resilience rules (effective March 2022, enhanced requirements from 2025) additionally require firms to identify important business services and set impact tolerances, creating demand for continuous security assurance across the delivery pipeline for services supporting those tolerances.

  **Government and Defence**
  The UK Government Digital Service (GDS) service standard mandates NCSC Secure Development and Deployment guidance compliance for all central government digital systems. DSTL (Defence Science and Technology Laboratory) AI procurement increasingly specifies DevSecOps maturity assessments in supplier requirements. The US DoD DevSecOps Reference Design (2019, updated 2021) has driven adoption across US defence contractors and is referenced by UK MOD equivalents in their digital procurement frameworks. HMG's Cyber Essentials scheme (55,995 certificates in the past year) provides a baseline certification applicable to government suppliers that aligns with DevSecOps practices around patch management, access control, and secure configuration.

  **Healthcare and Life Sciences**
  HIPAA Security Rule §164.312 mandates technical safeguards for ePHI and continuous security assurance. The UK DSPT (Data Security and Protection Toolkit) requires NHS and social care organisations to meet ten mandatory standards annually, several of which map directly to DevSecOps controls. NHS England's Data and Digital Strategy mandates Cyber Essentials Plus for technology suppliers, ensuring their delivery pipelines meet baseline security automation requirements. The life sciences sector additionally faces FDA 21 CFR Part 11 requirements for electronic records and signatures in validated systems, where DevSecOps pipeline audit trails provide evidence of controlled change management.

  **Cloud-Native SaaS**
  Cloud-native SaaS organisations shipping multiple times per day — a rhythm common across leading UK SaaS firms — cannot viably sustain manual security review processes. DevSecOps is structurally necessary: it is the only approach that can maintain security assurance at weekly or daily release frequencies without creating security team bottlenecks. Feature flags, canary deployments, and blue-green strategies combine with pipeline security gates to enable high-velocity secure deployment.

  **AI System Delivery — MLSecOps**
  The convergence of MLSecOps with DevSecOps is the most significant evolution of the practice in 2025-2026. MITRE ATLAS v5.1.0 (November 2025) catalogues 84 adversarial ML techniques across 16 tactics, providing the threat model that ML security pipeline checks are mapped against. OWASP Top 10 for Agentic Applications (2026) addresses the novel attack surface of autonomous AI systems in delivery pipelines, including indirect prompt injection via tool outputs, excessive agency exploitation, and orchestration layer supply chain attacks. DevSecOps pipelines for AI systems additionally generate model cards, bias scanning reports, adversarial robustness benchmarks, and inference endpoint DAST findings as pipeline artefacts.

  **Open-Source Supply Chain**
  Projects adopting SLSA Level 2+ and generating SBOMs satisfy both the US EO 14028 requirements for federal software supply chains and the emerging EU CRA obligations for products placed on the EU market. The XZ Utils backdoor (2024) demonstrated the acute risk of compromised open-source maintainer accounts; the escalating PyPI dependency confusion and malicious package campaigns of 2023-2025 demonstrated the need for package provenance verification. Socket.dev for npm and pip provenance analysis, Sigstore for package signing, and OpenSSF Scorecard for project security hygiene assessment are the key defensive tooling additions to the DevSecOps pipeline for organisations with significant open-source exposure.

  ## Academic Context

  The academic foundations of DevSecOps span software engineering, security engineering, and sociotechnical systems theory. Software engineering contributes continuous integration theory (Duvall, Matyas, and Glover, 2007), test-driven development (Beck, 2003), and agile methods (Beck et al., 2001 Agile Manifesto). Security engineering contributes threat modelling (Shostack, 2014), Microsoft's Secure Development Lifecycle (Howard and Lipner, 2006), and the OWASP Software Assurance Maturity Model (SAMM, v2.0 2020). Sociotechnical systems theory contributes Conway's Law (Conway, 1968) and organisational learning frameworks.

  The BSIMM (Building Security In Maturity Model) studies — published annually by Synopsis Research since 2009 based on assessments of 100-200 organisations per year — provide the primary longitudinal empirical dataset on software security practice maturity, documenting the industry-wide shift from annual assessment to continuous pipeline-integrated security as the dominant practice model. The 2021 BSIMM12 study, covering 130 organisations and over 9,000 software security activities, identified automated security testing (SAST, SCA, DAST in CI) as the single most rapidly adopted security practice over the prior five years.

  The academic study of DevSecOps as a named practice began around 2015-2016. Myrbakken and Colomo-Palacios (2017, SPICE) published an early multivocal literature review identifying DevSecOps as an emerging field distinct from both DevOps and traditional security engineering. Sánchez-Gordón and Colomo-Palacios (2021, IEEE Access) established a systematic taxonomy of challenges (toolchain integration, cultural resistance, skills shortage) and success factors. A 2025 MDPI systematic review across 36 studies (2012-2025) identified automation, cultural transformation, and toolchain interoperability as the three dominant research themes, with people-related factors identified as critical but under-studied — confirming the persistent observation that the human and organisational dimensions of DevSecOps adoption are harder to address than the technical tooling questions.

  The NIST Secure Software Development Framework (SSDF, SP 800-218, 2022) provides the primary US standards reference, mapping DevSecOps practices to NIST controls across Prepare the Organisation, Protect the Software, Produce Well-Secured Software, and Respond to Vulnerabilities tracks. The UK NCSC's Secure Development and Deployment guidance (2018, updated 2022) is the de facto UK standard, and the NCSC's Principles for the Security of Machine Learning (2024) extends DevSecOps principles explicitly to AI systems for the first time in UK government guidance.

  ## Current Landscape (2026)

  The DevSecOps market reached approximately USD 9.58 billion in 2025 and is projected at USD 11.70 billion in 2026, growing at a CAGR of 23.5% toward a USD 68 billion market by 2035 (Market Research Future). Varying analyst estimates place the 2026 market between USD 8.58 billion and USD 10.88 billion, reflecting the challenge of drawing market boundaries in a practice that spans security, software engineering, and platform engineering. The 2026 Gartner Magic Quadrant for DevSecOps Platforms identifies GitLab, Microsoft GitHub Advanced Security, and Atlassian as Leaders, with emerging challengers including Ox Security and Cycode disrupting the established order with AI-native approaches that prioritise developer experience and exploitability-based prioritisation over raw finding volume.

  AI-assisted DevSecOps represents the most significant 2025-2026 evolution. LLMs now triage vulnerability findings with context-aware severity assessment, suggesting whether a finding is exploitable in the specific deployment context rather than relying solely on CVSS scores. They generate remediation patches for common vulnerability classes (SQL injection, XSS, insecure dependencies), auto-create fix pull requests, and monitor the fix for regression. This AI-augmented workflow addresses alert fatigue — the phenomenon where engineers ignore scanner output because the signal-to-noise ratio is too low — by cutting false-positive rates from 70-80% (typical of pure SAST) to under 20% through context enrichment and reachability analysis.

  Software supply chain attacks more than doubled globally in 2025, with over 70% of organisations reporting at least one incident linked to third-party software and global costs reaching USD 60 billion. The XZ Utils backdoor (March 2024) — a sophisticated social engineering attack against an open-source maintainer of a widely deployed SSH library — demonstrated the severity of this threat class. The SLSA framework has graduated from aspirational to operational: SLSA Level 2 is now a minimum expectation for enterprise software procurement by major regulated-sector buyers, and ENISA's 2026 SBOM Adoption State of Play survey confirms the EU CRA is acting as a strong accelerator for SBOM generation investment.

  Platform engineering has completed its integration with DevSecOps in 2026: Backstage, holding 89% market share among IDP adopters, now includes security-as-a-platform features including Backstage Security Catalog (aggregating security findings across the Software Catalogue), Backstage Compliance Views (tracking SOC 2, PCI-DSS, ISO 27001 control coverage), and golden-path scaffold templates that instantiate new services pre-configured with the full DevSecOps toolchain.

  ## UK Context

  The UK has a distinctive DevSecOps regulatory and institutional ecosystem shaped by the NCSC, DSIT, and the UK's position as a global centre for both financial services technology and cybersecurity. The NCSC publishes authoritative Secure Development and Deployment guidance, the Secure Chokepoints technical series, and its Principles for the Security of Machine Learning guidance (2024) that extends DevSecOps principles explicitly to AI systems — making the UK government one of the first globally to address ML security at the pipeline level in official guidance.

  The Cyber Essentials and Cyber Essentials Plus schemes reached a record 55,995 certificates awarded in the past year, with the scheme updated in April 2025 and April 2026 to incorporate cloud-native security controls, container security baselines, multi-factor authentication requirements, and updated vulnerability management timelines. The UK government announced £90 million in new cyber security funding in 2025 to strengthen Cyber Essentials adoption. DSIT Cyber Security Sectoral Analysis 2026 identifies DevSecOps skills as a priority shortage area, with the UK cyber security sector employing approximately 58,000 people and needing an estimated additional 11,000 per year to meet demand.

  Academic research in the UK is led by Imperial College London (software security, formal verification of security properties), University of Edinburgh (security engineering, large-scale DevSecOps), University of Surrey (Surrey Centre for Cyber Security, secure software development practices), University College London (information security), and the Alan Turing Institute (AI security assurance frameworks mapping to MLSecOps). The NCSC's CyberFirst programme funds undergraduate and postgraduate DevSecOps skills development through bursaries, apprenticeships, and Girls Can Do IT coding competitions at secondary school level.

  Industrially, the Northern English cluster hosts a growing cohort of cybersecurity SMEs and Managed Security Service Providers (MSSPs) specialising in DevSecOps implementation. Manchester hosts NCC Group (globally-headquartered independent cyber security firm), Cyberfort, and a cluster of fintech and insurtetch firms. Leeds hosts a significant fintech cluster (Asda Money, Sky Betting and Gaming, Provident Financial, Auto Trader Technology) where PCI-DSS v4.0, FCA operational resilience rules, and FCA Consumer Duty (effective July 2024) create strong DevSecOps demand. Sheffield's Digital Media sector and Newcastle's financial technology and public sector digital community are further regional nodes. The UK financial services sector, responsible for approximately 10% of UK GDP and heavily regulated by the FCA and PRA, is among the most sophisticated adopters of DevSecOps practices globally.

  ## Future Directions (2026-2030)

  Agentic AI security will become the dominant DevSecOps paradigm shift of 2027-2028. Autonomous security agents will reason about full attack chains using tool-augmented LLMs, generate and execute exploit proof-of-concepts to validate severity scores, propose and test remediations in ephemeral sandbox environments, and submit reviewed pull requests — all without human intervention for the majority of common vulnerability classes. The role of human security engineers will shift toward reviewing agent outputs, defining policy guardrails for agent behaviour, and handling genuinely novel vulnerability patterns that agents cannot recognise from their training data.

  The EU Cyber Resilience Act, effective 2027, will mandate SBOM provision, vulnerability disclosure policies, security support period commitments, and CE marking for digital products placed on the EU market — a legal obligation affecting every UK software exporter to the EU. Combined with the US EO 14028 obligations already in force for federal supply chains, this creates a global regulatory floor that makes DevSecOps outputs (SBOMs, SLSA Level 2+ attestations, VEX documents, vulnerability disclosure policies) mandatory commercial deliverables rather than optional best practices.

  MLSecOps will standardise as a recognised sub-discipline with dedicated tooling stacks, professional certifications, and regulatory guidance. Training data provenance attestation analogous to SLSA for software build provenance, adversarial robustness benchmarking as a mandatory pipeline gate for high-risk AI system deployments, and inference endpoint DAST will mature into production-grade capabilities. Model artefacts will carry signed SBOMs and training provenance attestations as standard, satisfying the AI BOM requirements being discussed in EU AI Act implementing rules and NIST AI RMF profiles.

  Zero-trust architecture integration with DevSecOps will deepen through 2030: SPIFFE/SPIRE workload identity, mutual TLS between services, and policy-as-code network controls will be embedded in platform scaffolding, extending the secure-by-default principle from application code quality to network posture and service mesh configuration. The infrastructure-as-code layer will evolve to treat security posture configurations as first-class deliverables with their own SLSA provenance attestations, enabling full end-to-end supply chain verification from source code commit to running production workload.

  ## Zero Trust Integration and Network Security

  DevSecOps and [[Zero Trust Architecture]] are converging in 2025-2026 as organisations recognise that application-layer security (what DevSecOps provides) and network-layer security (what zero trust provides) are complementary layers of a coherent security posture rather than alternative approaches. Zero Trust's core principle — "never trust, always verify" — applies both to network access (no implicit trust based on network location) and to software supply chains (no implicit trust based on build provenance). DevSecOps addresses the latter through SLSA attestations and Sigstore signing; zero trust networking extends the same principle to runtime service-to-service communication.

  **SPIFFE and SPIRE — Workload Identity**
  SPIFFE (Secure Production Identity Framework For Everyone) is an open standard for workload identity that assigns cryptographic X.509 certificate-based identities (SVIDs — SPIFFE Verifiable Identity Documents) to software workloads based on their deployment context (namespace, service account, cluster) rather than their network location. SPIRE (SPIFFE Runtime Environment) implements SPIFFE for Kubernetes and VM-based deployments, rotating certificates automatically with short TTLs (typically 1 hour) and enabling mutual TLS between all services without manual certificate management. DevSecOps golden paths in 2026 include SPIRE configuration as standard scaffolding, ensuring that all services deployed through the platform automatically have workload identities from first deployment.

  **Service Mesh Security**
  Service mesh platforms (Istio, Linkerd, Consul Connect) implement mTLS between all services in the mesh, policy-based authorisation (which services can call which endpoints), and distributed request tracing that provides the observability foundation for detecting anomalous inter-service communication patterns (lateral movement attempts). DevSecOps IaC golden paths encode service mesh policy configurations (AuthorizationPolicy objects in Istio) alongside application deployment configurations, ensuring that network policies are reviewed and versioned alongside application code rather than configured ad hoc by operations teams.

  **Software-Defined Perimeter and BeyondCorp**
  Google's BeyondCorp model (the practical inspiration for Zero Trust Architecture) eliminated implicit trust for internal network users, requiring all access requests to be authenticated, authorised, and encrypted regardless of whether the requester is inside or outside the corporate network. For DevSecOps, this means CI/CD pipeline runners must authenticate via workload identity (not network location), access to production environments is gated by pipeline attestation verification (only SLSA Level 2+ artefacts can be deployed), and all API calls between pipeline components use mTLS authenticated by SPIFFE SVIDs.

  **Software Supply Chain Zero Trust**
  Zero trust principles applied to software supply chains require that every artefact be verified cryptographically before use, regardless of the trust implied by its source (even internal build systems are not implicitly trusted). SLSA attestations provide the artefact-level verification; Sigstore cosign verifications at container registry pull time (via Kubernetes admission controller webhook) implement the runtime enforcement. This prevents a compromised internal build system from deploying malicious artefacts even to production environments that normally accept internally-built images.

  ## Research & Literature
  - 1. Debois, P. (2008). "Agile Infrastructure and Operations: How Infra-gile Are You?" *Agile Conference 2008*, Toronto.
  - 2. Kim, G., Humble, J., Debois, P., & Willis, J. (2016). *The DevOps Handbook*. IT Revolution Press.
  - 3. Sánchez-Gordón, M., & Colomo-Palacios, R. (2021). "Security as Culture: A Systematic Literature Review of DevSecOps." *IEEE Access*, 9, 123985-124014.
  - 4. Myrbakken, H., & Colomo-Palacios, R. (2017). "DevSecOps: A Multivocal Literature Review." *Software Process Improvement and Capability Determination (SPICE)*, CCIS 770.
  - 5. Rahman, A., & Williams, L. (2019). "Security Smells in Ansible and Chef Scripts: A Replication Study." *ACM Transactions on Software Engineering and Methodology*, 28(4).
  - 6. McGraw, G., Migues, S., & West, J. (2020). *BSIMM12: Building Security In Maturity Model*. Synopsis Research.
  - 7. NIST (2022). *Secure Software Development Framework (SSDF) SP 800-218*. National Institute of Standards and Technology.
  - 8. Shostack, A. (2014). *Threat Modeling: Designing for Security*. Wiley.
  - 9. Howard, M., & Lipner, S. (2006). *The Security Development Lifecycle*. Microsoft Press.
  - 10. Humble, J., & Farley, D. (2010). *Continuous Delivery*. Addison-Wesley.
  - 11. Fitzgerald, B., & Stol, K.J. (2017). "Continuous Software Engineering: A Roadmap and Agenda." *Journal of Systems and Software*, 123, 176-189.
  - 12. OWASP (2023). *OWASP Top 10 for Large Language Model Applications v1.1*. OWASP Foundation.
  - 13. OWASP (2026). *OWASP Top 10 for Agentic Applications*. OWASP Foundation.
  - 14. MITRE (2025). *ATLAS v5.1.0: Adversarial Threat Landscape for Artificial-Intelligence Systems*. MITRE Corporation.
  - 15. OpenSSF / Google (2021-2024). *SLSA: Supply-chain Levels for Software Artefacts v1.0*. OpenSSF.
  - 16. NCSC (2022). *Secure Development and Deployment Guidance*. National Cyber Security Centre, GCHQ.
  - 17. NCSC (2024). *Principles for the Security of Machine Learning*. National Cyber Security Centre, GCHQ.
  - 18. Mohan, V., & Othmane, L. (2016). "SecDevOps: Is It a Marketing Buzzword? Mapping Research on Security in DevOps." *IEEE Security & Privacy Workshop on IoT Security and Privacy*.
  - 19. Pohl, C., & Hof, H.J. (2015). "Secure Scrum: Development of Secure Software with Scrum." *ICSEA 2015*.
  - 20. ENISA (2026). *SBOM Adoption State of Play 2026*. European Union Agency for Cybersecurity.
  - 21. Market Research Future (2026). *DevSecOps Market Size, Share, Growth Analysis to 2035*. MRFR.
  - 22. Gartner (2026). *Magic Quadrant for DevSecOps Platforms 2026*. Gartner Research.
  - 23. Gartner (2025). *Strategic Trends in Platform Engineering, 2025*. Gartner Research.
  - 24. DSIT (2026). *Cyber Security Sectoral Analysis 2026*. UK Department for Science, Innovation and Technology.
  - 25. arXiv (2025). "Comparative Analysis of AI-Driven Security Approaches in DevSecOps: Challenges, Solutions, and Future Directions." arXiv:2504.19154.
  - 26. MDPI Technologies (2025). "Evolution of DevSecOps and Its Influence on Application Security: A Systematic Literature Review." *Technologies*, 13(12), 548.
  - 27. Cloudsmith (2026). "The 2026 Guide to Software Supply Chain Security: From Static SBOMs to Agentic Governance." cloudsmith.com/blog.
  - 28. Practical DevSecOps (2026). "DevSecOps Trends 2026: The Ultimate Guide." practical-devsecops.com/devsecops-trends-2026/.

  ## Tool Ecosystem and Integration Landscape (2026)

  The 2026 DevSecOps tool ecosystem spans several layers and hundreds of products. The following is a structured overview of the primary tool categories and their leading implementations:

  **Secret Detection**
  - Gitleaks (open-source): pre-commit and CI integration, 150+ secret pattern types, custom rule support
  - Trufflehog (open-source, Trufflesecurity): high-recall secret detection with verified secret checking (actually tests if found credentials are active)
  - GitGuardian: SaaS platform with 350+ secret types, developer-facing remediation dashboard, historical secret monitoring

  **SAST Tools**
  - Semgrep (open-source + enterprise): 3,000+ community rules, custom rule YAML DSL, 30+ language support, P0-P4 severity triage
  - Checkmarx SAST: enterprise-grade data-flow taint analysis, CxOne platform with AI-assisted remediation
  - Snyk Code: AI-powered SAST with fix suggestions, IDE and CI integration, high precision focus
  - Fortify SAST (Opentext): comprehensive CWE/OWASP coverage, regulated-sector certifications
  - CodeQL (GitHub Advanced Security): semantic code analysis using query language, deep data-flow analysis

  **SCA Tools**
  - Snyk Open Source: 1M+ vulnerability database, license compliance, reachability analysis
  - OWASP Dependency-Check: open-source, NVD-backed, Maven/Gradle/npm support
  - Dependabot (GitHub): automatic dependency update PRs, security advisory integration
  - Socket.dev: real-time npm/PyPI malicious package detection beyond CVE databases
  - Mend (formerly WhiteSource): enterprise SCA with policy engine and SBOM generation

  **Container Scanning**
  - Trivy (Aqua Security, open-source): multi-target (containers, filesystems, git repos, IaC), fast scan, SBOM generation
  - Grype (Anchore, open-source): container and filesystem scanning with SBOM integration (Syft)
  - Clair (Red Hat, open-source): static analysis of container images, API-driven for registry integration
  - Snyk Container: container and Kubernetes manifest scanning with base image recommendations

  **IaC Scanning**
  - Checkov (Bridgecrew/Palo Alto Networks, open-source): 750+ policies for Terraform, CloudFormation, K8s, ARM, Bicep
  - tfsec (Aqua Security, open-source): Terraform-focused, fast, with SARIF output for IDE integration
  - Terrascan (Tenable, open-source): multi-cloud IaC scanning, policy-as-code with Rego
  - KICS (Checkmarx, open-source): multi-IaC scanning with 2,400+ vulnerability queries

  **SBOM Generation**
  - Syft (Anchore, open-source): generates CycloneDX and SPDX SBOMs from container images, filesystems, source trees
  - Microsoft SBOM Tool (open-source): SPDX 2.2/2.3 generation, integrated with Azure DevOps pipelines
  - cdxgen (CycloneDX): CycloneDX BOM generation across 20+ languages and frameworks

  **Build Provenance (SLSA)**
  - Sigstore cosign: signing container images, blobs, and OCI artefacts with short-lived ephemeral keys
  - Sigstore Rekor: immutable transparency log storing build provenance attestations
  - SLSA GitHub Generator: SLSA Level 3 provenance generation for GitHub Actions workflows

  **Policy-as-Code Platforms**
  - Open Policy Agent (OPA) + Gatekeeper: Kubernetes admission control with Rego policies
  - Kyverno: Kubernetes-native policy engine using YAML policy definitions (no Rego)
  - AWS Service Control Policies: organisation-wide AWS guardrails
  - Terraform Sentinel: policy-as-code for Terraform Cloud and Enterprise

  **DAST and Fuzzing**
  - OWASP ZAP (open-source): active and passive scanning, scriptable, API scanning support
  - Burp Suite Enterprise Edition (PortSwigger): enterprise DAST with CI integration, advanced active scanner
  - Nuclei (ProjectDiscovery, open-source): template-based vulnerability scanner, 9,000+ templates
  - RESTler (Microsoft Research, open-source): automated REST API fuzzing for stateful sequences

  **Runtime Security**
  - Falco (CNCF, open-source): container runtime security with eBPF-based syscall detection
  - Aqua Security Runtime: commercial container and Kubernetes runtime protection
  - Lacework: cloud-native security platform with behavioural anomaly detection
  - Wiz: agentless cloud security posture management (CSPM) and workload protection

  **AI/ML Security**
  - Garak (open-source): LLM vulnerability scanner for prompt injection, hallucination, and data extraction
  - Rebuff (open-source): prompt injection detection with self-hardening capabilities
  - ModelScan (open-source, ProtectAI): scan ML model files for embedded malicious code

  ## Developer Security Culture and Organisational Transformation

  DevSecOps adoption fails most commonly not at the tooling layer but at the cultural layer. Security tooling integration is a solved problem: GitHub Actions, GitLab CI, and other CI/CD platforms have first-class integrations with every major SAST, SCA, DAST, and IaC scanning tool. The hard problem is creating an organisational culture in which developers treat security as a first-class attribute of their work — co-equal with functionality, performance, and reliability — rather than as an external constraint imposed by a separate security team.

  **Security Champion Programmes**
  Security champion programmes embed security advocates within product engineering squads who act as the primary liaison between the security team and the development team. Champions are engineers (not security specialists) who receive security training, attend security team meetings, review security-related design decisions for their squad, and triage security scanner findings with context about their squad's architecture. Well-run security champion programmes have been shown to reduce security-related escalation to the security team by 40-60% while improving security posture, because champions provide context that remote security teams lack. Champions also create organic security knowledge transfer: they train their colleagues informally through code review feedback, pairing sessions, and team discussions.

  **Secure Coding Training and Developer Education**
  The SANS Institute, Secure Code Warrior, and Snyk Learn provide interactive developer security training platforms that teach secure coding through hands-on exercises rather than video lectures. The empirical evidence for these platforms shows 15-30% reduction in SAST findings per developer who completes structured training in the vulnerability classes they are most frequently responsible for introducing. OWASP Top 10 awareness is the entry-level standard; advanced training covers secure design patterns, cryptography implementation, and AI-specific security considerations. The UK government's NCSC CyberFirst programme funds security training at undergraduate and postgraduate levels, building the pipeline of security-aware developers entering the industry.

  **Blameless Post-Mortems and Security Learning Culture**
  The DevOps blameless post-mortem culture — in which security incidents and near-misses are analysed for systemic causes rather than individual blame — is essential for DevSecOps cultural health. When engineers fear punishment for security incidents they caused, they hide or delay reporting vulnerabilities. When incidents are analysed as learning opportunities and systemic improvements result, engineers actively surface vulnerabilities they introduce during development. Security post-mortems should produce concrete pipeline improvements — new detection rules, updated IaC policies, additional SAST patterns — that prevent the same class of issue from recurring, creating a positive feedback loop between incidents and pipeline capability.

  **Measuring DevSecOps Culture**
  Mature DevSecOps organisations track cultural health metrics alongside tooling metrics. Key indicators: developer satisfaction with security tooling (measured through developer experience surveys — high dissatisfaction with security tools predicts low compliance and shadow IT workarounds); time-to-first-security-finding-for-new-joiners (shorter = security tooling is discoverable and integrated); proportion of security findings raised by developers versus found by security team (higher developer-raised proportion = more security ownership); and false positive dispute rate (high dispute rate indicates security tooling is producing irrelevant findings that erode trust).

  ## Historical Timeline and Key Milestones

  Understanding the evolution of DevSecOps requires tracing three parallel threads: the DevOps cultural movement, the applied security engineering tradition, and the regulatory acceleration that has pushed both into enterprise mainstream adoption.

  **2001-2008: Precursors**
  The Agile Manifesto (Beck et al., 2001) established the foundational principle of iterative, feedback-driven software delivery that DevSecOps inherits. At the same time, Microsoft's Trustworthy Computing initiative (2002) — launched by Bill Gates after the Code Red and Nimda worm incidents of 2001 — produced the Security Development Lifecycle (SDL), the first systematic attempt to embed security into a commercial software development process. The SDL's practices (threat modelling, security code review, penetration testing, incident response planning) became the conceptual precursors of DevSecOps pipeline stages. The PCI-DSS standard (first version, 2004) created the first major regulatory demand for formal software security practices in commercial organisations.

  **2008-2012: DevOps and Security Culture Convergence**
  Patrick Debois's 2008 Agile Conference talk "Agile Infrastructure and Operations" and John Allspaw and Paul Hammond's 2009 Velocity Conference presentation "10+ Deploys Per Day: Dev and Ops Cooperation at Flickr" established the DevOps movement's intellectual foundations. Meanwhile, the security community was grappling with the incompatibility of annual penetration tests and periodic code reviews with continuous delivery: by 2010, organisations practising Continuous Integration were releasing software faster than security teams could review it. The term "DevSecOps" emerged around 2012 as the synthesis: bring security into the DevOps pipeline rather than treating it as a separate parallel process.

  **2012-2017: Pipeline Integration Tooling Matures**
  OWASP ZAP (Zed Attack Proxy) became the first widely adopted open-source DAST tool (2010, mature by 2013). Anchore, Clair, and Trivy established the container scanning category following Docker's 2013 rise to prominence. GitHub's acquisition of Dependabot (2019) brought automated dependency vulnerability tracking to the mass market. The 2017 Equifax breach — a textbook failure of SCA tooling adoption — became the seminal case study demonstrating the cost of inadequate dependency management, driving widespread adoption of SCA in CI pipelines.

  **2017-2021: Industrialisation and Regulatory Acceleration**
  The DevSecOps market began generating significant analyst attention from 2018, with Gartner identifying "DevSecOps" as a key trend and Forrester coining Application Security Posture Management (ASPM). The SolarWinds attack (December 2020) — which compromised build infrastructure to sign malicious software updates — elevated build integrity and supply chain security to board-level and government attention. The US Executive Order 14028 on Improving the Nation's Cybersecurity (May 2021) mandated SBOM generation for software sold to the US federal government, creating the first major regulatory driver for SBOM adoption. Log4Shell (December 2021) — a critical vulnerability in the ubiquitous Log4j logging library — demonstrated the operational importance of SBOM-driven vulnerability management at a scale that affected virtually every Java application worldwide.

  **2021-2024: Supply Chain Security Standardisation**
  The SLSA framework v0.1 (2021) from Google formalized build provenance attestation as a structured security control. Sigstore (Linux Foundation, 2021) provided the open-source cryptographic infrastructure for artefact signing and transparency logging. The OpenSSF (Open Source Security Foundation, formed 2020) consolidated supply chain security research across Google, Microsoft, Red Hat, and other major technology companies, producing the Alpha-Omega project, Scorecard tool, and SLSA framework maintenance. The XZ Utils backdoor (March 2024) — a sophisticated multi-year social engineering attack against an open-source SSH library maintainer — galvanised the open-source security community and accelerated adoption of SLSA and Sigstore across major Linux distributions and package registries.

  **2024-2026: AI-Augmented DevSecOps and Regulatory Mandates**
  The 2024-2026 period is characterised by two concurrent forces. First, AI-augmented security tooling has moved from experimental to production: GitHub Copilot Autofix (2024), Snyk DeepCode AI, and Semgrep Assistant all deploy LLM-based vulnerability context enrichment and automated remediation in production. Second, regulatory mandates have hardened from guidance to law: the EU Cyber Resilience Act (passed December 2024, phased enforcement from 2027) and PCI-DSS v4.0 (effective March 2025) have transformed SBOM provision and continuous vulnerability management from best practice to legal obligation for product and service providers.

  ## Compliance Mapping and Regulatory Alignment

  DevSecOps practices map directly to regulatory and standards obligations across multiple frameworks. Understanding these mappings is essential for organisations in regulated sectors where DevSecOps adoption must be justified and documented in terms of regulatory compliance outcomes.

  **PCI-DSS v4.0 Mapping**
  - Requirement 6.2 (Bespoke and custom software are developed securely): Satisfied by SAST pipeline integration, secure coding training, and peer code review processes.
  - Requirement 6.3 (Security vulnerabilities are identified and addressed): Satisfied by SCA dependency scanning with CVSS-scored findings, patch management workflows triggered by CVE publications, and SBOM generation enabling proactive vulnerability tracking.
  - Requirement 6.4 (Public-facing web applications are protected against attacks): Satisfied by DAST integration and Web Application Firewall (WAF) policy management through IaC.
  - Requirement 6.5 (Changes to all system components are managed securely): Satisfied by pipeline-as-code, SLSA build attestations, and change management integration with ServiceNow or Jira.
  - Requirement 11 (Test security of systems and networks regularly): Satisfied by automated penetration testing in CI pipelines and continuous vulnerability scanning.

  **HIPAA Technical Safeguards Mapping**
  - §164.312(a)(2)(iv) Encryption and decryption: Enforced through IaC scanning policies that block unencrypted storage configurations.
  - §164.312(b) Audit controls: Satisfied by pipeline audit logs, SLSA provenance attestations, and container runtime audit logging via Falco.
  - §164.312(c)(1) Integrity: Satisfied by artefact signing with Sigstore cosign, SBOM generation, and cryptographic hash verification of all deployed artefacts.

  **ISO 27001:2022 Annex A Controls Mapping**
  - A.8.25 Secure development lifecycle: Satisfied by the full DevSecOps pipeline including threat modelling, SAST, SCA, DAST, and penetration testing integration.
  - A.8.26 Application security requirements: Satisfied by security requirement specifications derived from threat models, encoded as automated pipeline checks.
  - A.8.27 Secure system architecture and engineering principles: Satisfied by IaC golden paths encoding secure-by-default architecture patterns.
  - A.8.28 Secure coding: Satisfied by SAST tools with language-specific secure coding rule sets and developer training programmes.
  - A.8.29 Security testing in development and acceptance: Satisfied by SAST, SCA, DAST, and penetration testing pipeline integration with documented acceptance criteria.

  **NIST SP 800-218 (SSDF) Track Mapping**
  - PO.1 (Define security requirements): Satisfied by threat modelling outputs, security user stories, and OWASP ASVS requirement mapping.
  - PS.1 (Protect all code from unauthorised access and tampering): Satisfied by source control access controls, branch protection rules, commit signing, and SLSA build attestations.
  - PW.1 (Design software to meet security requirements and mitigate security risks): Satisfied by threat modelling, security architecture review, and design-phase security review gates.
  - PW.4 (Reuse existing, well-secured software): Satisfied by SCA tools identifying approved components, internal approved dependency registries, and SBOM provenance tracking.
  - PW.5 (Create source code by adhering to coding practices): Satisfied by SAST pipeline integration with coding standard enforcement.
  - PW.7 (Review and/or analyse human-readable code to identify vulnerabilities): Satisfied by SAST and peer code review with mandatory security reviewer approval for high-risk changes.
  - PW.8 (Test executable code to identify vulnerabilities): Satisfied by DAST, fuzzing, and penetration testing integration.
  - PW.9 (Configure the compilation, interpreter, and build processes to improve executable security): Satisfied by IaC scanning and build configuration security checks.
  - RV.1 (Identify and confirm vulnerabilities on an ongoing basis): Satisfied by continuous SCA scanning against live CVE feeds and SBOM-based vulnerability tracking.
  - RV.2 (Assess, prioritise, and remediate vulnerabilities): Satisfied by EPSS-based prioritisation, MTTR tracking, and automated remediation PR generation.

  **UK NCSC Cyber Essentials Plus Mapping**
  - Boundary firewalls and internet gateways: Enforced through IaC scanning policies blocking unrestricted inbound rules and missing network segmentation.
  - Secure configuration: Enforced through container image baseline scanning, Kubernetes pod security policies, and cloud configuration scanning (Prowler, ScoutSuite).
  - Access control: Enforced through IAM policy scanning, least-privilege role enforcement, and MFA requirement checks.
  - Malware protection: Enforced through container runtime security (Falco) and software supply chain integrity (SLSA, Sigstore).
  - Patch management: Enforced through continuous SCA scanning with vulnerability age tracking and automated dependency update PRs (Dependabot, Renovate).

  ## Benchmark Studies and Empirical Evidence

  The empirical evidence base for DevSecOps effectiveness spans industry surveys, academic case studies, and incident data. Key findings as of 2026:

  **Remediation velocity**: Organisations with mature DevSecOps pipelines (BSIMM Level 3+) report mean MTTR for critical vulnerabilities of 6-24 hours compared to 50-100 days for organisations using periodic assessment models. The 2025 Ponemon Institute Cost of a Data Breach Report (not directly surveyed in our web search but consistently cited in industry literature) places the average breach identification time at 204 days and containment time at 73 days — durations that DevSecOps continuous monitoring reduces to hours to days for detected vulnerability classes.

  **Cost reduction**: IBM and Ponemon's data consistently shows that vulnerabilities discovered in development cost approximately 1/6 to 1/10 as much to remediate as vulnerabilities discovered in production. For a medium-complexity enterprise application, moving from monthly manual security review to continuous pipeline-integrated DevSecOps reduces average annual security remediation cost by 40-60% while increasing the number of vulnerabilities caught.

  **False positive rates**: Industry data shows that SAST tools without AI-assisted triage have false positive rates of 70-80%, creating alert fatigue and tool abandonment. AI-assisted triage (LLM-based context enrichment and exploitability assessment) reduces actionable false positive rates to 15-25%. Reachability analysis for SCA findings (determining whether a vulnerable function in a dependency is called by the application) reduces SCA false positive rates from 60-70% to under 20%.

  **Supply chain attack prevention**: SLSA Level 2 build provenance attestations would have prevented the SolarWinds attack (which compromised the build system rather than source code). SBOM generation combined with continuous CVE monitoring would have reduced the Log4Shell exposure window from the industry average of 14-30 days (time between CVE disclosure and patch deployment) to hours for organisations with automated SBOM-driven vulnerability management.

  **Developer productivity**: Counter-intuitively, well-implemented DevSecOps improves developer productivity rather than impeding it. The 2025 DevEx Report found that security findings surfaced in IDE (before commit) are resolved 3-5x faster than findings surfaced in CI (after commit), and 10-15x faster than findings surfaced in a security ticket from a separate team days after commit. Golden path security defaults reduce the cognitive overhead of security decision-making from hours per feature to minutes.

  ## Key Terminology

  **Shift-Left Security**: The practice of moving security testing and validation earlier in the software development lifecycle — from late-stage penetration testing toward pre-commit and CI-stage automated checks — to reduce remediation cost and exposure window. Named by analogy to moving work leftward on a Gantt chart timeline.

  **SAST (Static Application Security Testing)**: Analysis of source code, bytecode, or binary for security vulnerabilities without executing the program. Tools parse the code's abstract syntax tree and control-flow graph, applying pattern matching and data-flow taint analysis to identify potential injection, buffer overflow, insecure deserialisation, and credential exposure vulnerabilities. Typical false-positive rates of 50-80% make AI-assisted triage important.

  **DAST (Dynamic Application Security Testing)**: Security testing of running applications by probing them with crafted inputs — analogous to a penetration test but automated and integrated into CI pipelines. DAST finds runtime vulnerabilities not visible to static analysis, including authentication bypasses, IDOR (Insecure Direct Object Reference), session fixation, and API injection. DAST requires a deployed application endpoint and is typically run against staging environments.

  **SCA (Software Composition Analysis)**: Automated scanning of an application's open-source dependency tree to identify components with known CVEs, licence violations, or malicious package indicators. SCA tools maintain databases of component-CVE mappings enriched with EPSS (Exploit Prediction Scoring System) scores that estimate the probability that a CVE will be exploited in the wild within 30 days — enabling prioritisation of truly dangerous findings over theoretical risks.

  **SBOM (Software Bill of Materials)**: A machine-readable inventory of all software components (libraries, frameworks, packages) in a software artefact, including their version numbers, licence declarations, and cryptographic hashes. SBOMs enable downstream users to determine whether their supply chain is affected when a new CVE is published. Standard formats: SPDX 2.3 (Linux Foundation) and CycloneDX 1.6 (OWASP).

  **SLSA (Supply-chain Levels for Software Artefacts)**: A security framework and certification scheme (originally developed by Google, now maintained by OpenSSF) that defines four progressive levels of software build integrity: Level 1 (build provenance exists), Level 2 (build provenance is signed by a hosted build service), Level 3 (build environment is isolated and auditable), Level 4 (two-party review of all code changes). Directly addresses build system compromise attacks (the SolarWinds class).

  **Policy-as-Code**: The practice of encoding security and compliance policies in version-controlled, machine-executable code rather than as prose documentation or manual checklists. Open Policy Agent (OPA) with Rego policy language is the dominant implementation, enabling policies to be reviewed, tested, versioned, and deployed through the same [[CI-CD Automation]] pipeline as application code.

  **VEX (Vulnerability Exploitability eXchange)**: A document format (OpenVEX, CycloneDX VEX) that provides structured assertions about whether specific CVEs listed in an SBOM are exploitable in the deployment context of a given product version. VEX allows software producers to assert "CVE-2024-XXXX is listed in our SBOM but is not exploitable because the vulnerable function is never called in our configuration," reducing the operational burden on downstream consumers who would otherwise need to investigate each SBOM CVE themselves.

  **MLSecOps**: The extension of DevSecOps principles to the machine learning lifecycle, covering training data provenance and integrity, model artefact signing and verification, inference endpoint security (prompt injection, model theft, adversarial input), and model supply chain security (malicious models in model registries). MLSecOps treats the ML pipeline — data ingestion, feature engineering, model training, evaluation, and deployment — as a software supply chain with the same integrity requirements as traditional software build pipelines.

  **MITRE ATLAS**: A knowledge base of adversarial tactics, techniques, and procedures (TTPs) targeting AI and ML systems, analogous to MITRE ATT&CK for traditional software. ATLAS v5.1.0 (November 2025) catalogues 84 attack techniques across 16 tactics, including training data poisoning, model evasion, model extraction, model inversion, and AI agent-specific techniques such as prompt injection via tool outputs and excessive agency exploitation.

  **Alert Fatigue**: The phenomenon where security engineers begin ignoring or systematically dismissing scanner output because the signal-to-noise ratio is too low — too many findings are false positives, or too many are theoretical risks with no practical exploitability in the deployment context. Alert fatigue is the primary cause of DevSecOps tool adoption failures. AI-assisted triage and exploitability-based prioritisation are the 2025-2026 primary countermeasures.

  **EPSS (Exploit Prediction Scoring System)**: A FIRST-developed model that predicts the probability that a CVE will be exploited in the wild within the next 30 days, based on features including technical characteristics of the vulnerability, observed exploitation activity, threat intelligence feeds, and social media chatter. EPSS scores (0.0-1.0) allow DevSecOps teams to prioritise remediation based on exploitation likelihood rather than static CVSS severity scores, which do not predict exploitability. A CVE with CVSS 9.8 but EPSS 0.02 is a lower priority than a CVSS 7.5 with EPSS 0.85.

  **Reachability Analysis**: A code analysis technique that determines whether a vulnerable function in a dependency is actually reachable from the application's entry points through the application's call graph. SCA tools with reachability analysis (Snyk, Semgrep) reduce false positive rates from 60-80% (for tools that report all CVEs in all dependencies regardless of usage) to 5-20% (only CVEs in reachable code paths). Reachability analysis requires language-specific call graph construction and is currently supported for Java (Spring/Maven), Python (pip), JavaScript (npm), and Go (go modules).

  **Compliance-as-Code**: The practice of encoding compliance requirements (PCI-DSS controls, HIPAA safeguards, ISO 27001 controls) as machine-executable code that can be evaluated automatically against a system's configuration and deployment state, rather than as prose checklists verified manually. Tools including Chef InSpec, Puppet Compliance, and Open Policy Agent Rego policies implement compliance-as-code, enabling continuous automated compliance verification as infrastructure and application code evolves.

  **Container Runtime Security**: Security monitoring and enforcement at the level of the running container process, as opposed to the container image (which is the domain of image scanning). Tools like Falco (CNCF) monitor Linux system calls made by container processes using eBPF, detecting anomalous behaviour (unexpected shell execution in a web server container, unexpected outbound network connections, privilege escalation attempts) that indicates container compromise even when the image itself was clean at scan time.

  **Software Supply Chain**: The end-to-end chain of dependencies, tools, processes, and people involved in creating and delivering software to end users, analogous to physical manufacturing supply chains. For a typical cloud-native application, the software supply chain includes: open-source libraries (hundreds to thousands of transitive dependencies), build tools (compiler, package manager, container build system), CI/CD platform, artefact registry, deployment infrastructure, and runtime environment. Each component is a potential attack vector. DevSecOps aims to secure the entire supply chain through SBOM generation, SLSA provenance, signing, and continuous vulnerability scanning.

  **Internal Developer Portal (IDP)**: A self-service platform that gives developers a single place to discover, create, and manage software services and infrastructure resources within an organisation. IDPs built on Backstage (open-source, Spotify), Port, or Cortex aggregate information from source control, CI/CD, observability, and security tools into a unified developer interface. In the DevSecOps context, IDPs expose security scorecards per service, vulnerability posture dashboards, and golden-path service templates that pre-configure security tooling. Gartner projects 75% of platform engineering teams will provide an IDP by 2026, embedding DevSecOps into the developer experience layer rather than requiring individual teams to configure security tooling.

  **Penetration Testing as a Service (PTaaS)**: The provision of on-demand or continuous penetration testing services through a platform that connects organisations with security researchers and manages the testing workflow, finding triage, and remediation tracking. PTaaS platforms including Synack, HackerOne, and Cobalt.io enable penetration testing to be integrated into DevSecOps pipelines — triggered by major releases, compliance deadlines, or significant architectural changes — rather than conducted only on annual schedules. AI-augmented PTaaS platforms (2025-2026) combine human penetration testers with AI-generated attack scenario recommendations and automated preliminary reconnaissance.

  **Secure by Design**: A design philosophy (codified by CISA, NCSC, and other cybersecurity authorities in 2023-2024 guidance) that mandates security properties as built-in defaults rather than add-on features: authentication on by default, minimal permissions out of the box, secure configuration as the starting state, and secure update mechanisms included from first release. Secure by Design is the regulatory framing that motivates the DevSecOps platform engineering approach of golden paths and secure defaults — making the secure choice the easy choice for developers through scaffolding and defaults rather than documentation and training alone.

  **Threat Intelligence Integration**: The incorporation of real-time threat intelligence feeds — information about active exploitation campaigns, newly discovered attack techniques, emerging malware families, and adversary infrastructure — into DevSecOps pipeline prioritisation. EPSS (Exploit Prediction Scoring System) is the primary open threat intelligence feed used for CVE prioritisation. Commercial threat intelligence platforms (Recorded Future, ThreatConnect, Mandiant Advantage) provide richer contextual data about which specific vulnerability classes are being actively exploited by which threat actor groups, enabling DevSecOps teams to prioritise remediation of vulnerabilities that are actively weaponised above those with high CVSS scores but no observed exploitation.

  **Dependency Confusion Attack**: A supply chain attack technique (documented by Alex Birsan in 2021) in which an attacker publishes a malicious package to a public registry (npm, PyPI, RubyGems) with the same name as a private internal package, at a higher version number. Package managers that search both public and private registries may inadvertently pull the malicious public package instead of the legitimate private one. DevSecOps countermeasures include: using explicit registry scope configurations (npm scopes, pip --index-url flags) to prevent fallthrough to public registries for internal packages; monitoring public registries for packages with names matching internal package conventions; and using SCA tools with dependency confusion detection (Socket.dev) that flag suspicious newly-published packages with internal naming patterns.

  **Runtime Vulnerability Exploitation vs Static Presence**: A critical distinction in CVE triage that DevSecOps teams must maintain: a CVE may be present in an SBOM without being exploitable in the specific deployment context. A SQL injection vulnerability in a component is only exploitable if the component is actually called with user-controlled input in the deployment's data flow. A deserialization vulnerability is only exploitable if attacker-controlled data reaches the vulnerable deserialization function. Reachability analysis and runtime context enrichment (RASP and runtime security monitoring) help distinguish "CVE present" from "CVE exploitable" — the latter being what actually requires urgent remediation.

  **GitHub Advanced Security (GHAS)**: GitHub's integrated security suite combining CodeQL-based SAST, Dependabot SCA, Secret Scanning, and Code Scanning with AI-powered fix suggestions (Copilot Autofix). GHAS is deeply integrated into the GitHub pull request workflow and is available to all GitHub Enterprise Cloud and Server customers, as well as to all public repositories on github.com at no cost. The 2026 Gartner Magic Quadrant for DevSecOps Platforms places GitHub (Microsoft) as a Leader, with GHAS cited as the most widely deployed enterprise DevSecOps platform by volume of repositories scanned.

  **Attestation and Provenance Chain**: In software supply chain security, the cryptographic chain of attestations linking a deployed artefact back to its source code commit. A complete provenance chain includes: (1) source code commit signed by the developer (Sigstore cosign or GPG); (2) build provenance attestation (SLSA Level 2+) signed by the CI/CD platform; (3) artefact signing (container image or binary signed post-build); (4) deployment attestation recording which signed artefact was deployed to which environment at what time. Together these create a non-repudiable audit trail for every production deployment, satisfying regulatory requirements for change management evidence in PCI-DSS, SOC 2, and ISO 27001 assessments.

  **Software Catalogue**: In platform engineering and DevSecOps, a machine-readable inventory of all software components (services, libraries, APIs, data stores, teams, documentation) owned by an organisation, their relationships, and their associated metadata (health scores, vulnerability posture, deployment status, ownership). Backstage's Software Catalogue is the dominant implementation, enabling organisation-wide visibility into which teams own which components, which components have outstanding critical vulnerabilities, and which components are approaching end-of-life dependency versions. Security scorecards per component (aggregating SAST findings, SCA findings, SBOM coverage, SLSA level, and last penetration test date) are the primary DevSecOps output surfaced in software catalogues.

  **Golden Path**: In platform engineering, a pre-configured, opinionated template for creating new software services that encodes all security, compliance, and operational requirements as defaults rather than options. An engineer who follows the golden path to create a new service gets all DevSecOps tooling (SAST, SCA, container scanning, SLSA, SBOM generation, OPA admission control) pre-configured without needing to make any security tooling decisions themselves. The golden path concept, popularised by Spotify (the creators of Backstage), is the primary mechanism by which platform engineering teams embed security into developer workflows at scale.

  **Mean Time to Remediation (MTTR)**: The average elapsed time between a vulnerability being introduced into code (or discovered in a dependency) and the vulnerability being remediated and deployed. Traditional security team MTTR: 50-100 days. Pipeline-integrated DevSecOps MTTR: 1-8 hours. AI-augmented DevSecOps MTTR (automated remediation): under 1 hour for common vulnerability classes. MTTR is the primary operational metric for DevSecOps effectiveness and is increasingly required in enterprise security reporting and regulatory submissions.

  **Artefact Registry Security**: Container registries (Docker Hub, AWS ECR, GCP Artifact Registry, Azure Container Registry, JFrog Artifactory, Harbor) are the centralised stores for container images, Helm charts, and other build artefacts — and therefore high-value targets for supply chain attacks. DevSecOps registry security practices include: enabling image vulnerability scanning at push time (registry-integrated scanning triggers Trivy or Grype automatically when an image is pushed); enforcing image signing requirements (only signed images with valid SLSA Level 2+ attestations can be pulled by Kubernetes clusters, enforced by OPA Gatekeeper); quarantine policies that hold newly pushed images until scanning completes; and retention policies that remove images with critical unpatched CVEs after a configurable grace period.

  **Software Delivery Performance (DORA Metrics)**: The four key metrics identified by the DORA (DevOps Research and Assessment) research programme for measuring software delivery performance: Deployment Frequency (how often code is deployed to production), Lead Time for Changes (time from code commit to production deployment), Change Failure Rate (proportion of deployments causing incidents), and Mean Time to Restore (time to recover from an incident). DevSecOps contributes to all four: automated security gates reduce Change Failure Rate by blocking deployable-but-insecure changes; pipeline-integrated security testing reduces Lead Time for Changes by eliminating the asynchronous security review bottleneck; and continuous monitoring reduces Mean Time to Restore by detecting security-related incidents earlier.

  **API Security and DevSecOps**: Application Programming Interface (API) security is an increasingly critical DevSecOps domain as organisations expose more functionality through APIs and microservice architectures increase the internal API attack surface. The OWASP API Security Top 10 (2023 edition) identifies the primary API vulnerability classes: Broken Object Level Authorisation (BOLA/IDOR), Broken Authentication, Broken Object Property Level Authorisation, Unrestricted Resource Consumption, Broken Function Level Authorisation, Unrestricted Access to Sensitive Business Flows, Server Side Request Forgery, Security Misconfiguration, Improper Inventory Management, and Unsafe Consumption of APIs. DevSecOps pipelines address API security through: OpenAPI/Swagger contract linting for security property validation, API fuzzing (RESTler, CATS) in staging environments, GraphQL-specific introspection and injection testing, and API gateway policy enforcement (rate limiting, authentication enforcement, JWT validation) through IaC-managed gateway configurations.

- ### Provenance
  - sources:: https://www.practical-devsecops.com/devsecops-trends-2026/, https://cloudsmith.com/blog/the-2026-guide-to-software-supply-chain-security-from-static-sboms-to-agentic-governance, https://www.enisa.europa.eu/publications/sbom-adoption-state-of-play-2026, https://www.gov.uk/government/publications/cyber-security-sectoral-analysis-2026/cyber-security-sectoral-analysis-2026, https://www.ncsc.gov.uk/cyberessentials/overview, https://arxiv.org/abs/2103.08266, https://www.mdpi.com/2227-7080/13/12/548, https://arxiv.org/pdf/2504.19154, https://www.practical-devsecops.com/mitre-atlas-framework-guide-securing-ai-systems/, https://about.gitlab.com/resources/gartner-magic-quadrant/, https://www.marketresearchfuture.com/reports/devsecops-market-40850, https://cloudaware.com/blog/devsecops-statistics/, https://www.gov.uk/government/publications/dsit-cyber-security-newsletter-march-2026/, https://www.ncsc.gov.uk/files/cyber-essentials-requirements-for-it-infrastructure-v3-3.pdf, https://checkmarx.com/learn/devsecops/top-18-devsecops-tools-for-the-ai-era-securing-the-sdlc-in-2026/, https://www.ox.security/blog/application-security-trends-in-2026/
  - migration-date:: 2026-06-21T00:00:00Z
  - attributedTo:: did:nostr:enrichment-swarm