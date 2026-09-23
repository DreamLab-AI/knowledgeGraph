
A security architecture built on the principle of 'never trust, always verify': no user, device, or workload is trusted by virtue of its network location, and every access request must be continuously authenticated, authorised, and encrypted based on identity, device posture, and context, replacing the traditional perimeter model in which anything inside the corporate network was implicitly trusted.

- ### Semantic Classification

- ### Content

  ## Definition

  **Zero Trust** is a security model that removes implicit trust from network architecture. Coined by John Kindervag at Forrester in 2010 and formalised in NIST Special Publication 800-207 (2020), it holds that network location confers no trust: an access request from inside the data centre is treated with the same suspicion as one from a coffee-shop Wi-Fi. Every request is evaluated against identity, device health, and context before a short-lived, narrowly scoped grant is issued, and the evaluation is continuous rather than once-per-session.

  The model directly contrasts with the "castle-and-moat" approach embodied by [[Perimeter Security]] and the corporate [[Virtual Private Network]], where authenticating at the boundary yielded broad access to internal resources. That design failed repeatedly against lateral movement: once an attacker phished a single credential or compromised one host, the flat internal network offered little resistance. Zero Trust counters this with strong [[Authentication]] (typically phishing-resistant MFA), per-resource authorisation, micro-segmentation, and pervasive encryption, enforcing [[Least Privilege]] at every hop.

  In this knowledge graph, Zero Trust also anchors the agentic-security discussion: cryptographic agent identity supports Zero Trust by giving autonomous agents verifiable, per-request credentials rather than ambient authority, which matters as multi-agent systems begin making tool calls and API requests on behalf of users.

  ## Current Landscape

  - **Standards**: NIST SP 800-207 defines the reference architecture (policy engine, policy administrator, policy enforcement points); CISA's Zero Trust Maturity Model and the UK NCSC's zero trust design principles guide public-sector adoption; the US federal government mandated zero trust migration under OMB M-22-09.
  - **Implementations**: Google's BeyondCorp pioneered production zero trust after the 2009 Aurora attacks; commercial platforms include Zscaler, Cloudflare Access, Palo Alto Prisma, and Microsoft Entra conditional access. Service meshes bring the model inside clusters via mutual TLS and workload identity (SPIFFE/SPIRE).
  - **Core pillars**: identity, device, network, application, and data — each with its own verification signals, unified by policy engines making per-request decisions.
  - **Agentic extension**: applying zero trust to AI agents means scoped, auditable, short-lived credentials for every tool call, treating each agent action as an untrusted request to be verified — an active area of practice as autonomous agents proliferate.
  - **Limits**: zero trust is an architecture rather than a product; incremental migration, legacy protocols that cannot present modern identity signals, and policy-engine complexity remain the main adoption obstacles.

  ## Current Landscape

  - **Reference standards remain stable**: NIST SP 800-207 (2020) defines the core architecture, and CISA's Zero Trust Maturity Model — Version 2.0, April 2023 — organises adoption across five pillars (Identity, Devices, Networks, Applications & Workloads, Data) and four maturity stages (Traditional, Initial, Advanced, Optimal), aligned to OMB Memorandum M-22-09.
  - **Federal mandate baseline**: OMB M-22-09 (26 January 2022, in support of EO 14028) required US civilian agencies to meet specified zero-trust goals — enterprise-managed identities with phishing-resistant MFA, full device inventory, encrypted DNS and network traffic, and treating every application as internet-accessible — by the end of FY2024.
  - **Guidance is still expanding**: CISA published "Microsegmentation in Zero Trust, Part One" (v1.0, 29 July 2025), deepening the network-pillar guidance of the ZTMM and signalling that federal zero-trust direction continues to be actively developed beyond the FY2024 deadline.
  - **Implementations**: Google's BeyondCorp pioneered production zero trust after the 2009 Aurora attacks; commercial platforms include Zscaler, Cloudflare Access, Palo Alto Prisma, and Microsoft Entra conditional access, with service meshes (mutual TLS, SPIFFE/SPIRE) bringing the model inside clusters.
  - **Agentic extension**: applying zero trust to AI agents means scoped, auditable, short-lived credentials for every tool call — treating each agent action as an untrusted request to be verified — an active area of practice as autonomous agents proliferate.

  **Sources**:
  - https://www.cisa.gov/zero-trust-maturity-model
  - https://www.cisa.gov/sites/default/files/2025-07/ZT-Microsegmentation-Guidance-Part-One_508c.pdf

- ### Provenance

