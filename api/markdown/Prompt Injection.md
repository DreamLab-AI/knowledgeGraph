
Prompt injection is a class of adversarial attacks against large language model (LLM) systems in which attacker-controlled text embedded within the model's input context overrides or subverts the developer-specified system prompt, causing the model to follow attacker instructions instead of its intended operating constraints. Direct prompt injection occurs when a user submits malicious instructions directly; indirect prompt injection occurs when the model retrieves or processes external content such as web pages, documents, or tool outputs that contain embedded adversarial instructions. As LLMs are increasingly deployed in agentic pipelines with tool-calling and autonomous action capabilities, prompt injection constitutes a critical security boundary violation that can lead to data exfiltration, privilege escalation, and unauthorised actions on external systems.

- ### In Plain Terms
  - A way of tricking an AI by hiding sneaky instructions inside the text it reads — a pasted document, a web page, or another person's message — so it quietly does what the attacker wants instead of what you asked. Because the AI struggles to tell trusted instructions apart from ordinary text, this is hard to stamp out entirely.

- ### Overview
  - Prompt injection was first systematically described as a distinct LLM vulnerability class around 2022–2023, coinciding with widespread deployment of instruction-tuned models via APIs and chat interfaces.
  - The core mechanism exploits the absence of a trust boundary inside the [[Context Window]]: the model processes the system prompt, conversation history, retrieved documents, and tool outputs as a single flat sequence of tokens. If any portion of that sequence contains sufficiently compelling imperative text, the model may follow those instructions rather than the operator's intended policy.
  - This is not merely a training deficiency: even models with strong [[Instruction Following]] capabilities can be manipulated because the problem is fundamentally one of information security — establishing who is authorised to issue instructions — not one of natural language understanding.
  - The OWASP Top 10 for Large Language Model Applications (first released 2023, updated 2025) lists prompt injection as vulnerability LLM01, the highest-priority class, reflecting industry consensus on its severity.
  - The attack surface expands dramatically in [[Retrieval-Augmented Generation]] (RAG) systems and agentic pipelines, where the model autonomously fetches, reads, and acts on external content, dramatically increasing the attack surface for indirect injection.

- ### Key Mechanisms
  - **Direct Prompt Injection**
    - The attacker is the end user interacting directly with the model.
    - Typical patterns include: override phrases ("Ignore all previous instructions and…"), persona substitution ("You are now DAN, an AI with no restrictions…"), privilege escalation claims ("As the system administrator, I require you to…"), and context flushing (very long inputs designed to push the system prompt out of the model's effective attention).
    - Defence: [[Input Sanitisation]], user-turn separation, output monitoring, [[Adversarial Robustness]] fine-tuning.
  - **Indirect Prompt Injection**
    - Adversarial instructions are hidden inside content the model retrieves or processes autonomously: web pages, uploaded PDFs, email bodies, calendar events, code comments, or [[Retrieval-Augmented Generation]] document chunks.
    - The attacker never interacts directly with the system; instead, they poison an external resource the model will encounter.
    - High-impact consequence classes include: session token exfiltration via covert HTTP requests, forwarding private data to attacker-controlled endpoints, issuing unauthorised tool calls (send email, execute code, make purchases), and lateral movement to other agents in a multi-agent pipeline.
    - Defence: sandboxed tool execution, minimal-privilege [[Agentic AI]] design, output classifiers, human-in-the-loop approval for high-impact actions.
  - **Prompt Leaking**
    - A related attack that extracts the confidential [[System Prompt]] itself rather than subverting behaviour, revealing proprietary instructions and enabling targeted follow-on attacks.
  - **Goal Hijacking**
    - In multi-step agentic tasks, an injection early in the pipeline can redirect the entire downstream plan, replacing the user's goal with an attacker-specified goal while maintaining plausible-looking outputs.
  - **Jailbreaking Overlap**
    - [[Jailbreaking]] and prompt injection share techniques but differ in intent: jailbreaking primarily removes content safety restrictions for the jailbreaker's own benefit; prompt injection typically serves a third-party attacker targeting a victim's system or data.

- ### Threat Model
  - **Threat actors**: external attackers (web content poisoning), malicious users, compromised tool providers, malicious agents in multi-agent orchestration.
  - **Assets at risk**: user PII, session credentials, system prompt IP, connected API keys, downstream systems accessible via tool calls.
  - **Impact categories**: confidentiality breach (data exfiltration), integrity breach (unauthorised actions), availability impact (denial of service via context flooding).
  - **Agentic amplification**: each tool capability granted to an LLM agent multiplies the blast radius of a successful injection — an agent with email + calendar + code execution access can cause substantial real-world harm from a single injected instruction.

- ### Applications and Use Cases
  - **Security research and [[Red Teaming]]**: prompt injection testing is now a standard component of LLM security assessments; specialist firms and internal red teams probe production deployments.
  - **CTF challenges**: capture-the-flag competitions now routinely include prompt injection puzzles, driving community understanding.
  - **RAG pipeline hardening**: organisations deploying [[Retrieval-Augmented Generation]] must audit document corpora for injected instructions before ingestion.
  - **Agentic workflow design**: architects of [[Agentic AI]] systems use prompt injection threat models to drive decisions about tool scoping, human approval gates, and audit logging.
  - **Model fine-tuning research**: training on adversarial examples (part of [[Adversarial Robustness]] work) attempts to reduce model susceptibility, though no fully robust defence exists.
  - **Regulatory impact assessment**: regulators and standards bodies reference prompt injection when classifying LLM deployment risks under frameworks such as the EU AI Act and [[NIST AI RMF]].

- ### Defences and Mitigations
  - **Privilege separation / Instruction Hierarchy**: structurally distinguishing system-level, operator-level, and user-level instructions and training models to weight them accordingly (e.g. OpenAI Instruction Hierarchy, Anthropic's [[Constitutional AI]] message priority).
  - **Input sanitisation and content filtering**: scanning retrieved content for known injection patterns before it enters the [[Context Window]], analogous to [[Input Sanitisation]] in web security.
  - **Output monitoring and classifiers**: LLM-as-judge or rule-based classifiers that examine model outputs for policy violations, data exfiltration patterns, or anomalous tool calls before execution.
  - **Minimal-privilege tool scoping**: granting agents only the minimum necessary tool capabilities for a given task, reducing blast radius.
  - **Human-in-the-loop gates**: requiring human approval for high-impact or irreversible actions (send email, make payment, delete file), preventing automated exploitation.
  - **Sandboxed execution environments**: isolating agentic tool calls in containers or restricted API surfaces so that even a successful injection cannot reach sensitive systems.
  - **Prompt hardening**: explicitly instructing models to ignore out-of-band instructions, mark external content as untrusted, and refuse instruction-like text from user or document channels.
  - **[[Red Teaming]] and [[Adversarial Testing]]**: systematic evaluation of deployed systems by internal and external adversarial testers before and after release.

- ### Standards and Context
  - **OWASP LLM Top 10** — LLM01: Prompt Injection is listed as the primary vulnerability class for LLM applications. The OWASP working group maintains guidance on detection and mitigation patterns. See [[OWASP LLM Top 10]].
  - **NIST AI Risk Management Framework (AI RMF)** — addresses adversarial ML and input manipulation risks under the Govern, Map, Measure, Manage functions. Prompt injection falls under adversarial threat categories. See [[NIST AI RMF]].
  - **EU AI Act** — classifies high-risk AI systems and mandates robustness against adversarial inputs; prompt injection is cited in technical annexes as a relevant attack vector for systems deployed in regulated sectors.
  - **MITRE ATLAS** — the Adversarial Threat Landscape for Artificial-Intelligence Systems (ATLAS) catalogue includes prompt injection tactics mapped to the ATT&CK-style framework, providing standardised threat taxonomy for practitioners.
  - **ISO/IEC 42001** — the AI Management System standard references input manipulation controls relevant to prompt injection hardening.
  - Relationship to [[SQL Injection]] lineage: both attacks were eventually standardised through OWASP Top 10 lists, and the prompt injection class follows a similar maturation path from novel research finding to documented, mitigable vulnerability class.

- ### Semantic Classification

- ### Provenance

