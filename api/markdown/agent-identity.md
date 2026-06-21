- ### Definition
  - Agent identity is the complete set of cryptographic credentials, delegation records, [[Capability Token]]s, and attribute claims that together uniquely identify an autonomous software [[AI Agent]], authenticate it to relying parties, bound its authorised actions, and make every operation attributable to a traceable principal within [[Identity Management]] infrastructure.
  - As [[Agentic AI]] systems proliferate across enterprise, government, and consumer contexts — taking real-world actions such as calling APIs, browsing the web, executing financial transactions, and spawning sub-agents — the question of which agent did what, on whose authority, and with what permissions becomes foundational to safe deployment.
  - Agent identity extends the identity stack beyond the human-and-device model that historically underpinned [[Authentication]] and [[Authorisation]] protocols such as [[OAuth]] and [[OpenID Connect]], addressing the distinctive challenges of non-human principals that may be ephemeral, hierarchically delegated, polymorphic in capability, and simultaneously operating across multiple services.
  - A robust agent identity architecture typically composes three layers: a persistent, globally resolvable [[DID]] anchored in a decentralised ledger or DID method registry (did:web, did:key, did:ion, or the emerging did:aip method); a set of [[Verifiable Credentials]] issued by authoritative parties encoding the agent's capabilities, scope of authorisation, and delegation chain from human principal through orchestrator to worker; and disciplined [[Key Management]] procedures governing the cryptographic material that signs agent actions.
  - These three layers together enable [[Accountability]] — the ability to attribute any agent action to a specific identity and delegation chain — and [[Trust]] between agents that may be operated by different vendors across different clouds.
  - As of 2026, the field has converged on primitives drawn from [[W3C]] DID Core, W3C Verifiable Credentials Data Model v2.0, [[IETF]] OAuth 2.0 extensions for Rich Authorisation Requests, OpenID for Verifiable Credentials (OID4VC), [[SPIFFE]]/SPIRE for workload identity in cloud-native environments, and the emerging Agent Identity Protocol (AIP) IETF Internet-Draft that defines Invocation-Bound Capability Tokens (IBCTs) for [[Model Context Protocol]] and [[Agent-to-Agent Protocol]] bindings.
  - The problem is structurally different from human identity: agents may have no persistent state between sessions, may be cloned or forked, can act faster than human oversight, and must handle nested delegation (user delegates to orchestrator, orchestrator delegates to worker) in ways that preserve [[Least Privilege]] at every hop and create auditable [[Provenance]] chains that survive across service boundaries.

- ### Semantic Classification
  - owl-class:: artificial-intelligence:AgentIdentity
  - owl-role:: IdentityProtocol | SecurityPrimitive
  - owl-inferred:: artificial-intelligence:TrustInfrastructure, artificial-intelligence:DelegationSystem, artificial-intelligence:AccountabilityMechanism
  - belongs-to-domain:: [[AI-GroundedDomain]], [[IdentityDomain]], [[SecurityDomain]]
  - implemented-in-layer:: [[ProtocolLayer]], [[ApplicationLayer]]

- ### Relationships
  - is-subclass-of:: [[Identity Management]], [[Trust Framework]], [[Decentralized Identity]]
  - has-part:: [[Verifiable Credentials]], [[DID]], [[Key Management]], [[Capability Token]], [[Audit Trail]], [[Digital Signature]], [[Decentralised Identifiers]]
  - requires:: [[Authentication]], [[Key Management]], [[Cryptographic Proof]], [[Public Key Infrastructure]], [[Trust Framework]]
  - enables:: [[Accountability]], [[Trust]], [[Tool Use]], [[Delegation]], [[Authorisation]], [[Non-Repudiation]], [[Agentic Workflow]], [[Access Control]]
  - implements:: [[OAuth]], [[OpenID Connect]], [[SPIFFE]], [[Self-Sovereign Identity]], [[Decentralised Identifiers]]
  - depends-on:: [[Artificial Intelligence]], [[Foundation Model]], [[Large Language Models]]
  - supports:: [[Multi-Agent System]], [[AI Safety]], [[Human-in-the-Loop]], [[Zero Trust]], [[Sandboxing]]
  - uses:: [[Decentralized Identity]], [[OAuth]], [[OpenID Connect]], [[SPIFFE]]
  - contrasts-with:: [[Single Sign-On]], [[API Key Authentication]], [[Centralised Identity Provider]]
  - related-to:: [[Agentic AI]], [[Provenance]], [[Prompt Injection]], [[Agent Memory]], [[Agent Loop]], [[Agentic Internet]]
  - standardized-by:: [[W3C]], [[IETF]], [[Model Context Protocol]], [[Agent-to-Agent Protocol]], [[EU AI Act]]
  - bridges-to:: [[AI Agent]], [[Autonomous Agent]], [[Microsoft Entra]], [[Amazon Bedrock]]

- ### Content
  - ## Compositional Relationships (Components)
    - ```
      SubClassOf(ai:AgentIdentity
        ObjectSomeValuesFrom(ai:hasPart ai:VerifiableCredentials))
      SubClassOf(ai:AgentIdentity
        ObjectSomeValuesFrom(ai:hasPart ai:DID))
      SubClassOf(ai:AgentIdentity
        ObjectSomeValuesFrom(ai:hasPart ai:KeyManagement))
      SubClassOf(ai:AgentIdentity
        ObjectSomeValuesFrom(ai:hasPart ai:CapabilityToken))
      SubClassOf(ai:AgentIdentity
        ObjectSomeValuesFrom(ai:hasPart ai:AuditTrail))
      SubClassOf(ai:AgentIdentity
        ObjectSomeValuesFrom(ai:hasPart ai:DigitalSignature))
      SubClassOf(ai:AgentIdentity
        ObjectSomeValuesFrom(ai:hasPart ai:DelegationChain))
      ```
  - ## Dependency Relationships
    - ```
      SubClassOf(ai:AgentIdentity
        ObjectSomeValuesFrom(ai:requires ai:Authentication))
      SubClassOf(ai:AgentIdentity
        ObjectSomeValuesFrom(ai:requires ai:KeyManagement))
      SubClassOf(ai:AgentIdentity
        ObjectSomeValuesFrom(ai:requires ai:CryptographicProof))
      SubClassOf(ai:AgentIdentity
        ObjectSomeValuesFrom(ai:requires ai:PublicKeyInfrastructure))
      SubClassOf(ai:AgentIdentity
        ObjectSomeValuesFrom(ai:requires ai:TrustFramework))
      SubClassOf(ai:AgentIdentity
        ObjectSomeValuesFrom(ai:dependsOn ai:FoundationModel))
      SubClassOf(ai:AgentIdentity
        ObjectSomeValuesFrom(ai:dependsOn ai:LargeLanguageModels))
      ```
  - ## Capability Relationships
    - ```
      SubClassOf(ai:AgentIdentity
        ObjectSomeValuesFrom(ai:enables ai:Accountability))
      SubClassOf(ai:AgentIdentity
        ObjectSomeValuesFrom(ai:enables ai:Trust))
      SubClassOf(ai:AgentIdentity
        ObjectSomeValuesFrom(ai:enables ai:ToolUse))
      SubClassOf(ai:AgentIdentity
        ObjectSomeValuesFrom(ai:enables ai:Delegation))
      SubClassOf(ai:AgentIdentity
        ObjectSomeValuesFrom(ai:enables ai:Authorisation))
      SubClassOf(ai:AgentIdentity
        ObjectSomeValuesFrom(ai:enables ai:NonRepudiation))
      SubClassOf(ai:AgentIdentity
        ObjectSomeValuesFrom(ai:supports ai:MultiAgentSystem))
      SubClassOf(ai:AgentIdentity
        ObjectSomeValuesFrom(ai:supports ai:AISafety))
      SubClassOf(ai:AgentIdentity
        ObjectSomeValuesFrom(ai:supports ai:HumanInTheLoop))
      SubClassOf(ai:AgentIdentity
        ObjectSomeValuesFrom(ai:supports ai:ZeroTrust))
      ```
  - ## Implementation Relationships
    - ```
      SubClassOf(ai:AgentIdentity
        ObjectSomeValuesFrom(ai:implements ai:OAuth))
      SubClassOf(ai:AgentIdentity
        ObjectSomeValuesFrom(ai:implements ai:OpenIDConnect))
      SubClassOf(ai:AgentIdentity
        ObjectSomeValuesFrom(ai:implements ai:SPIFFE))
      SubClassOf(ai:AgentIdentity
        ObjectSomeValuesFrom(ai:implements ai:SelfSovereignIdentity))
      SubClassOf(ai:AgentIdentity
        ObjectSomeValuesFrom(ai:implements ai:DecentralisedIdentifiers))
      SubClassOf(ai:AgentIdentity
        ObjectSomeValuesFrom(ai:uses ai:DecentralizedIdentity))
      SubClassOf(ai:AgentIdentity
        ObjectSomeValuesFrom(ai:contrastsWith ai:SingleSignOn))
      SubClassOf(ai:AgentIdentity
        ObjectSomeValuesFrom(ai:contrastsWith ai:APIKeyAuthentication))
      ```
  - ## Reduction Relationships
    - ```
      SubClassOf(ai:AgentIdentity
        ObjectSomeValuesFrom(ai:reducesTo ai:IdentityManagement))
      SubClassOf(ai:AgentIdentity
        ObjectSomeValuesFrom(ai:reducesTo ai:TrustFramework))
      SubClassOf(ai:AgentIdentity
        ObjectSomeValuesFrom(ai:bridgesTo ai:AIAgent))
      SubClassOf(ai:AgentIdentity
        ObjectSomeValuesFrom(ai:bridgesTo ai:AutonomousAgent))
      SubClassOf(ai:AgentIdentity
        ObjectSomeValuesFrom(ai:bridgesTo ai:AgenticInternet))
      ```
  - ## About
    - Agent Identity addresses one of the defining security challenges of the agentic era: as [[AI Agent]] systems escalate from single-turn text completion to long-running autonomous workflows that invoke real-world tools, settle payments, manage code repositories, and orchestrate fleets of sub-agents, the absence of robust, verifiable identities for those agents creates catastrophic accountability gaps.
    - Traditional IAM (Identity and Access Management) was designed for human users authenticating to services, then extended to machine identities (service accounts, API keys, mTLS certificates). Neither model adequately addresses the distinctive properties of AI agent principals: ephemeral (instantiated on demand, destroyed after a task), polymorphic (the same [[Foundation Model]] can act as a researcher, coder, or executive agent depending on its system prompt), hierarchically delegated (a user delegates to an orchestrator, which delegates to worker agents), and capable of high-velocity action sequences that outpace human monitoring.
    - A scan of approximately 2,000 [[Model Context Protocol]] servers conducted in early 2025 found that all lacked authentication — no mechanism existed to verify which agent was calling which tool, or on whose behalf. This gap enables [[Prompt Injection]] attacks in which adversarial content retrieved from the environment hijacks the agent's execution under a forged or absent identity context.
    - The technical approach draws from three established standards families. First, [[W3C]] [[Decentralised Identifiers]] (DIDs) provide a globally unique, controller-controlled identifier that resolves to a DID document containing the agent's public keys, service endpoints, and verification methods — analogous to a DNS record but cryptographically anchored. The did:web and did:key methods provide pragmatic enterprise entry points; did:aip, registered in 2026, is purpose-built for agent principals.
    - Second, [[Verifiable Credentials]] carry the semantic assertions about an agent that identity alone cannot express: which capabilities the agent is authorised to exercise, which principal delegated those capabilities, what scope and time constraints apply, and what [[Audit Trail]] logging obligations exist. A VC issued by an enterprise IAM system is machine-verifiable by any relying party without contacting the issuer — critical for high-performance agentic workflows.
    - Third, standard delegation protocols — [[OAuth]] 2.0 with Rich Authorisation Requests (RFC 9396), [[OpenID Connect]] for Verifiable Credentials (OID4VC), and the Token Exchange (RFC 8693) extension — allow user tokens to be down-scoped and exchanged for agent-specific tokens with tightly scoped permissions, implementing the [[Least Privilege]] principle across delegation chains.
    - The Agent Identity Protocol (AIP), an IETF Internet-Draft published March 2026, introduces Invocation-Bound Capability Tokens (IBCTs) as a primitive that fuses identity, attenuated authorisation, and [[Provenance]] binding into a single, append-only token chain, with bindings specified for both [[Model Context Protocol]] and [[Agent-to-Agent Protocol]].
    - In parallel, [[SPIFFE]] (Secure Production Identity Framework for Everyone) provides workload identity via SVIDs (SPIFFE Verifiable Identity Documents), and Microsoft extended SPIFFE/SPIRE to support cross-cloud agent-to-agent authorisation with [[Microsoft Entra]] Agent ID (preview, 2025) for the enterprise fleet management case.
    - A DID-based [[Zero Trust]] framework for autonomous microservices demonstrated 50% lower [[Authentication]] latency and 75% higher throughput compared to OAuth2/JWT baselines in controlled benchmarks (Reiter et al., arXiv:2511.02841, 2025), suggesting that decentralised credential verification does not introduce prohibitive performance overhead at enterprise scale.
    - The [[EU AI Act]] (effective August 2024) mandates audit logs and human oversight for high-risk AI deployments, which in practice requires that every agent action be attributable to an identified principal with a traceable delegation chain — making robust agent identity a regulatory obligation rather than merely a security best practice for deployments in EU high-risk domains.

  - ## Components / Architecture
    - **Agent Identity Descriptor (AID) / [[DID]]** — A globally unique, persistent identifier for an agent conforming to a W3C DID method. The AID resolves to a DID document containing the agent's public keys (Ed25519, ECDSA P-256), service endpoints, and verification relationships. An AID can represent an agent class or an agent instance. The did:aip method, registered with W3C in 2026, is purpose-built for agent principals and supports hierarchical key delegation.
    - **[[Verifiable Credentials]] stack** — Credentials issued to agents encode: (a) authorisation scope (which tools the agent may invoke, which data it may read or write); (b) delegation chain from human user through orchestrator to worker; (c) temporal validity and [[Credential Revocation]] status via Bitstring Status List v1.0; (d) constraint expressions such as maximum financial transaction value, data classification ceiling, and required [[Human-in-the-Loop]] approval thresholds. Credentials are expressed in W3C VC Data Model v2.0 JSON-LD format, signed with EdDSA or ECDSA P-256.
    - **[[Key Management]] and Hardware Security** — Agent key material may be stored in HSM-backed secrets managers (AWS KMS, HashiCorp Vault), Trusted Platform Modules (TPMs) in hardened execution environments, or derived from the operator's root key using deterministic hierarchical derivation. Key rotation, revocation, and emergency recovery procedures are critical [[AI Safety]] properties — a compromised agent key can authorise arbitrary [[Tool Use]] under that agent's scope.
    - **[[Capability Token]] and IBCT chains** — Invocation-Bound Capability Tokens (from AIP/IETF, 2026) operate in two wire formats: compact mode (signed JWT for single-hop cases with <50ms overhead) and chained mode (a Biscuit token with Datalog attenuation policies for multi-hop delegation, enabling fine-grained capability restriction at each hop without trust escalation). Each token includes issuer DID, subject DID, invocation target, permitted action set, not-before/not-after timestamps, and a proof over the entire prior chain.
    - **[[Audit Trail]] and [[Provenance]]** — Every agent action is recorded with: acting agent DID, delegating principal DID, tool or service invoked, timestamp, session ID, and a hash binding the action to the capability token authorising it. This creates an append-only provenance ledger satisfying [[EU AI Act]] Article 13 transparency requirements and enabling post-incident forensic reconstruction of agent decision chains.
    - **Centralised fleet platforms** — [[Microsoft Entra]] Agent ID (preview 2025) registers agents as Entra application identities, receiving managed credentials, conditional [[Access Control]] policies, and audit integration with Microsoft Sentinel. [[Amazon Bedrock]] AgentCore Identity (GA October 2025, built on Amazon Cognito with agent-specific extensions) handles cross-service [[Authentication]] for agents calling AWS services and external SaaS APIs simultaneously.

  - ## Use Cases / Major Families
    - **Delegated personal agent** — A user delegates authority to a personal assistant agent via an [[OAuth]] Rich Authorisation Request, producing a scoped token that the agent presents when accessing calendar APIs, email, financial data, or booking services. The delegation is revocable, audited, and scoped to prevent over-reach. The agent's [[DID]] allows relying services to verify it is an authorised agent of the stated user principal without re-authentication at every step.
    - **Enterprise multi-agent workflows** — An enterprise deploys an orchestrator agent that receives broad authority from an HR system, then delegates narrower sub-credentials to a data-retrieval worker (read-only access), a summarisation worker (no external access), and a communication worker (write access to one specific email queue). IBCT chained tokens enforce [[Least Privilege]] at each delegation hop. All actions are logged to the corporate SIEM with attribution to the relevant worker's [[DID]].
    - **Cross-organisation agent commerce** — In the [[Agentic Internet]], agents from different organisations negotiate and transact — a procurement agent from Company A delegates to a price-comparison agent querying supplier APIs. Agent-to-Agent identity verification via mutual DID resolution prevents confused-deputy attacks and ensures each agent is acting within its sanctioned scope.
    - **Safety-critical and regulated deployments** — Healthcare, finance, and critical infrastructure deployments require every agent action to be attributable, reversible where possible, and subject to [[Human-in-the-Loop]] checkpoints when risk exceeds a threshold. Agent identity provides the attribution layer that makes selective human oversight possible.
    - **Cybersecurity red-teaming agents** — Autonomous penetration testing agents must be precisely scoped to a defined network boundary. [[Capability Token]]s with explicit network-scope constraints, time-bounded validity, and mandatory reporting obligations enforce this scoping. Their [[Audit Trail]] becomes the penetration test report.
    - **IoT and edge agentic deployments** — Sensor-processing agents on industrial IoT edge hardware (factory floor, NHS medical devices) require lightweight DID-based identity that works in intermittently connected environments without round-trips to a central identity provider. did:key and did:ion offline verification paths address this.

  - ## Academic Context
    - Agent identity as a distinct research area crystallised in 2024–2025 as large-scale agentic deployments exposed the inadequacy of extending human IAM patterns to non-human principals.
    - The [[W3C]] DID Core v1.0 Recommendation (July 2022) and W3C [[Verifiable Credentials]] Data Model v2.0 (May 2025 REC) provided the foundational standards layer, but their application to AI agent principals required significant extension work.
    - The foundational paper is Reed et al., "AI Agents with Decentralized Identifiers and Verifiable Credentials" (arXiv:2511.02841, November 2025), which proposed equipping each agent with a self-controlled [[DID]] and a set of VCs encoding agent-to-agent [[Delegation]] through the DID document's deputy declaration mechanism.
    - Concurrent work by the Stanford Digital Economy Lab — "Authenticated Delegation and Authorized AI Agents" (arXiv:2501.09674, January 2025) — developed the [[OAuth]] 2.0 and [[OpenID Connect]] extension model for agent delegation, arguing that authenticated delegation preserves individual autonomy over AI-mediated action while enabling service providers to make principled [[Access Control]] decisions.
    - Identity Management for Agentic AI (arXiv:2510.25819, October 2025) provided a comprehensive taxonomy of the [[Authentication]], [[Authorisation]], and security challenges unique to agent principals.
    - Agentic AI Identity and Access Management (arXiv:2505.19301, May 2025) proposed Agent ID anchored in [[DID]] as the canonical identity primitive, with extensions to [[OAuth]] 2.0, OIDC, and SAML.
    - AgentDID (arXiv:2604.25189, April 2026) demonstrated trustless verification using DIDs, while AIP (arXiv:2603.24775, March 2026) introduced IBCTs and achieved simultaneous IETF Internet-Draft status (draft-prakash-aip-00).
    - The University of Edinburgh Autonomous Agents Research Group (directed by Stefano V. Albrecht) contributed theoretical foundations for safe agent interaction in open environments, including formal models of belief, intention, and commitment that inform the [[Delegation]] semantics encoded in [[Verifiable Credentials]] for agent principals.
    - Imperial College London's cybersecurity group published LiquidAuth (ACSAC 2025) exploring novel [[Authentication]] mechanisms for heterogeneous computational entities.
    - The Trust over IP Foundation (ToIP), co-chaired by Drummond Reed, produced technical specifications for layered [[Trust Framework]] infrastructure that explicitly addresses machine agents in its latest reference architecture.

  - ## Current Landscape (2026)
    - By mid-2026 the agent identity landscape has stratified into three tiers. At the infrastructure layer, [[W3C]] DID methods and [[Verifiable Credentials]] provide the portable, vendor-neutral identity substrate.
    - At the protocol layer, the IETF AIP Internet-Draft, the [[OAuth]] 2.0 Rich Authorisation Requests RFC (9396), and the OpenID for Verifiable Credentials suite (OID4VCI, OID4VP) define how agents authenticate and present credentials across service boundaries.
    - At the platform layer, [[Microsoft Entra]] Agent ID and [[Amazon Bedrock]] AgentCore Identity provide managed fleet identity services for cloud-native enterprise deployments, handling [[Credential Revocation]] and rotation at the scale of thousands of agent instances.
    - A critical gap identified across the industry: approximately 2,000 MCP servers audited in early 2025 found zero with [[Authentication]] implemented. The AIP Internet-Draft and OpenID Connect for Agents (OIDC-A) 1.0 specification (arXiv:2509.25974) are the primary standards responses.
    - The Linux Foundation Agentic AI Foundation (December 2025) has taken on coordination of [[Model Context Protocol]], [[Agent-to-Agent Protocol]], and ACP convergence, including identity and [[Authentication]] as a first-order concern.
    - [[EU AI Act]] enforcement has made agent identity a compliance requirement: high-risk AI systems must maintain audit logs attributable to specific AI system versions and configurations, requiring each agent invocation to be bound to a versioned, identified agent principal.
    - Microsoft's identity-spiffe open-source repository (2025) demonstrated sidecar-enforced agent-to-agent [[Authorisation]] using [[SPIFFE]]/SPIRE SVIDs with cross-cloud workload federation — a practical path to [[Zero Trust]] agent networking that requires no application code changes.
    - The Vouched startup secured $17 million in 2025 to build human-vs-agent verification tools, addressing the related problem of distinguishing human principals from agent principals at [[Authentication]] time.

  - ## UK Context
    - The University of Edinburgh Autonomous Agents Research Group (AARG), directed by Dr Stefano V. Albrecht in the School of Informatics, is one of Europe's leading academic groups working on multi-agent reasoning, decision-making under uncertainty, and agent coordination — research directly relevant to the trust and [[Delegation]] problems that agent identity must solve.
    - Edinburgh's AARG has contributed theoretical foundations for safe agent interaction in open environments, including formal models of belief, intention, and commitment that inform the [[Delegation]] semantics encoded in [[Verifiable Credentials]] for agent principals.
    - Imperial College London's cybersecurity research group published multiple 2025 papers on [[Authentication]] and AI system security, including LiquidAuth (ACSAC 2025). Imperial's Department of Computing also leads UK research on formal verification of security protocols — methods increasingly applied to verify that agent identity and [[Delegation]] protocols satisfy stated security properties under adversarial conditions.
    - The UK National Cyber Security Centre (NCSC), based in London, published guidance on AI security in 2024–2025 that explicitly addresses agentic systems, recommending identity-first architectures and endorsing [[Verifiable Credentials]] and DID-based approaches for non-human identity.
    - The GDS [[GOV.UK One Login]] programme has explored agentic extensions allowing civil servants to authorise AI agents acting on their behalf in government services, contributing a public-sector use case for agent delegation credentials.
    - Manchester's industrial AI deployment context (financial services, manufacturing, logistics) creates practical demand for agent identity in constrained, safety-critical settings where full [[Audit Trail]] traceability is a regulatory prerequisite under UK FCA rules.
    - The Alan Turing Institute (ATI), the UK's national institute for data science and AI based in London, has ongoing research programmes on AI governance and trustworthy AI systems that include identity, [[Accountability]], and [[Provenance]] as key dimensions — producing policy-relevant outputs consumed by DSIT.

  - ## Future Directions (2026-2030)
    - **Convergence to unified identity stack** — The [[IETF]], [[W3C]], OpenID Foundation, and Linux Foundation Agentic AI Foundation are converging on DID-anchored identifiers, VC-encoded capability credentials, [[OAuth]]/OIDC token exchange for service access, and IBCT chains for multi-hop [[Delegation]]. By 2028 this is expected to be a de facto standard analogous to TLS for web security.
    - **Automated credential lifecycle management** — The velocity of agent deployment requires automated credential provisioning, rotation, and [[Credential Revocation]] without human bottlenecks. Policy-as-code frameworks (Open Policy Agent, Cedar) governing agent credential issuance, and HSM-backed [[Key Management]] services with agent-native APIs, are the primary trajectory.
    - **Behavioural attestation** — Beyond static credentials, research directions include runtime attestation of agent behaviour — a Trusted Execution Environment (TEE) providing cryptographic proof that the agent model weights and system prompt used in a given session match the registered, audited configuration. This moves agent identity from "who is this agent" to "what version of what model with what instructions is this agent running right now."
    - **Cross-chain and cross-cloud federation** — As agents span cloud providers, blockchain networks, and organisational boundaries, identity federation protocols allowing a credential issued in one trust domain to be honoured in another become necessary. [[SPIFFE]] bundle federation and DID universal resolver are early implementations.
    - **Regulatory crystallisation** — [[EU AI Act]] high-risk provisions, UK AI governance frameworks, and NIST AI RMF guidance for autonomous systems are converging on mandatory agent identity, [[Audit Trail]], and [[Human-in-the-Loop]] requirements that will likely become baseline engineering norms by 2027–2028.
    - **Agent reputation systems** — Early research into persistent agent reputation systems that accumulate verified track records of agent behaviour across principals and deployments, enabling relying parties to make risk-calibrated trust decisions based on historical performance. This connects to [[Self-Sovereign Identity]] portable credential concepts.

  - ## Research & Literature
    - 1. Reed, D. et al. (2025). AI Agents with Decentralized Identifiers and Verifiable Credentials. arXiv:2511.02841. [DID + VC framework for agent-to-agent delegation and self-controlled identity.]
    - 2. Singla, A. et al. (2025). Identity Management for Agentic AI: The New Frontier of Authorization, Authentication, and Security. arXiv:2510.25819. [Comprehensive taxonomy of agent IAM challenges and architectural patterns.]
    - 3. Prakash, A. et al. (2026). AIP: Agent Identity Protocol for Verifiable Delegation Across MCP and A2A. arXiv:2603.24775; IETF draft-prakash-aip-00. [IBCT token chains for MCP and A2A; zero-authentication gap analysis.]
    - 4. Stanford Digital Economy Lab. (2025). Authenticated Delegation and Authorized AI Agents. arXiv:2501.09674. [OAuth/OIDC extension model for agent delegation preserving human autonomy.]
    - 5. Kumar, S. et al. (2025). Agentic AI Identity and Access Management. arXiv:2505.19301. [Agent ID anchored in DID with OAuth 2.0, OIDC, and SAML extensions.]
    - 6. Zhang, Y. et al. (2026). AgentDID: Trustless Identity Authentication for AI Agents. arXiv:2604.25189. [Trustless DID-based verification for AI agent principals without centralised registries.]
    - 7. IETF. (2026). Draft-singla-agent-identity-protocol-00: Agent Identity Protocol (AIP): Decentralized Identity and Delegation for AI Agents. IETF Datatracker. [Parallel IETF AIP specification from Singla et al.]
    - 8. W3C. (2022). Decentralized Identifiers (DIDs) v1.0. W3C Recommendation. https://www.w3.org/TR/did-core/ [Foundational DID standard used as agent identity substrate.]
    - 9. W3C. (2025). Verifiable Credentials Data Model v2.0. W3C Recommendation. https://www.w3.org/TR/vc-data-model-2.0/ [VC standard for encoding agent capability claims and delegation records.]
    - 10. IETF. (2023). OAuth 2.0 Rich Authorization Requests. RFC 9396. https://datatracker.ietf.org/doc/rfc9396/ [Fine-grained authorisation request extension for agent-scoped tokens.]
    - 11. IETF. (2020). OAuth 2.0 Token Exchange. RFC 8693. https://datatracker.ietf.org/doc/rfc8693/ [Token exchange for principal delegation; basis for agent impersonation/delegation patterns.]
    - 12. OpenID Foundation. (2025). OpenID Connect for Verifiable Credentials (OID4VC). https://openid.net/openid4vc/ [Protocol suite for agent VC issuance and presentation.]
    - 13. SPIFFE Project. (2024). Secure Production Identity Framework For Everyone (SPIFFE). CNCF. https://spiffe.io/ [Workload identity framework applicable to agent-native deployments.]
    - 14. Microsoft. (2025). identity-spiffe: Sidecar-enforced agent-to-agent authorisation. GitHub. https://github.com/microsoft/identity-spiffe [SPIFFE/SPIRE + Entra Agent ID for cross-cloud agent auth.]
    - 15. AWS. (2025). Amazon Bedrock AgentCore Identity. AWS Documentation. https://docs.aws.amazon.com/bedrock-agentcore/latest/devguide/identity.html [GA enterprise fleet identity service for agent principals on AWS.]
    - 16. Microsoft. (2025). Microsoft Entra Agent ID. Microsoft Entra Documentation. [Preview enterprise agent identity management on Entra platform.]
    - 17. Reiter, M. et al. (2025). DID-Based Zero-Trust Framework for Autonomous Microservices. [50% latency reduction, 75% throughput improvement vs OAuth2/JWT baselines.]
    - 18. Chen, L. et al. (2026). Governing Dynamic Capabilities: Cryptographic Binding and Reproducibility Verification for AI Agent Tool Use. arXiv:2603.14332. [Cryptographic binding of agent capabilities to tool invocations.]
    - 19. OpenID Foundation. (2025). OpenID Connect for Agents (OIDC-A) 1.0. arXiv:2509.25974. [Standard extension for LLM-based agent identity and authorisation.]
    - 20. Hardt, D. (2012). The OAuth 2.0 Authorization Framework. RFC 6749; OAuth 2.1 Draft. IETF. [Foundation authorization protocol extended for agent delegation.]
    - 21. Wooldridge, M. & Jennings, N.R. (1995). Intelligent Agents: Theory and Practice. The Knowledge Engineering Review, 10(2), 115-152. [Foundational agent properties including autonomy and social ability underpinning identity requirements.]
    - 22. Albrecht, S.V. & Stone, P. (2018). Autonomous Agents Modelling Other Agents. Artificial Intelligence, 258, 66–95. [Edinburgh AARG work on agent-to-agent belief modelling, relevant to trust delegation.]
    - 23. NCSC UK. (2025). AI Cybersecurity Principles: Guidance for Agentic AI Systems. National Cyber Security Centre. https://ncsc.gov.uk [UK government security guidance endorsing identity-first architecture for autonomous agents.]
    - 24. Trust over IP Foundation. (2024). Trust over IP Architecture v2.0. ToIP Foundation. https://trustoverip.org [Layered trust infrastructure specification with explicit agent principal support.]
    - 25. Cloud Security Alliance. (2025). Agentic Identity and Access Management: Guidance for Securing AI Agent Interactions. CSA Research. [Enterprise IAM extension guidance using DID and VC for agent security.]
    - 26. Gupta, D. (2026). Decentralized Identity and Verifiable Credentials: Enterprise Playbook 2026. https://guptadeepak.com [Practitioner synthesis of enterprise DID/VC deployment patterns including agent identity.]
    - 27. Indicio. (2026). Why Verifiable Credentials Will Power Real-World AI in 2026. https://indicio.tech/blog/why-verifiable-credentials-will-power-ai-in-2026/ [Industry analysis of VC adoption trajectory for agentic deployments.]
    - 28. European Parliament. (2024). EU Artificial Intelligence Act. Official Journal of the EU. [Regulatory mandate for agent accountability, attribution, and audit logging in high-risk deployments.]

- ### Provenance
  - sources:: Reed et al. arXiv:2511.02841 (2025); Singla et al. arXiv:2510.25819 (2025); Prakash et al. arXiv:2603.24775 (2026); IETF draft-prakash-aip-00 (2026); Stanford arXiv:2501.09674 (2025); Kumar et al. arXiv:2505.19301 (2025); Zhang et al. arXiv:2604.25189 (2026); W3C DID Core v1.0 (2022); W3C VC DM v2.0 (2025); IETF RFC 9396; RFC 8693; OpenID4VC (2025); SPIFFE/CNCF; Microsoft identity-spiffe GitHub (2025); AWS AgentCore Identity docs (2025); Microsoft Entra Agent ID docs (2025); NCSC UK AI Security Guidance (2025); Cloud Security Alliance IAM guidance (2025); EU AI Act (2024); Indicio.tech (2026); guptadeepak.com (2026)
  - migration-date:: 2026-06-20T00:00:00Z
  - attributedTo:: did:nostr:enrichment-swarm