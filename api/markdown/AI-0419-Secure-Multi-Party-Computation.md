- ### OntologyBlock
  id:: secure-multi-party-computation-ontology
  collapsed:: true

  - **Identification**
    - public-access:: true
    - ontology:: true
    - term-id:: AI-0419
    - preferred-term:: Secure Multi-Party Computation
    - source-domain:: ai
    - status:: in-progress
    - version:: 1.0
    - last-updated:: 2025-10-29

  - **Definition**
    - definition:: Secure Multi-Party Computation is a cryptographic protocol enabling multiple parties to jointly compute functions over their combined private inputs without revealing individual inputs to other participants or trusted third parties, ensuring that only the final output is disclosed while intermediate computations remain confidential. This technique provides privacy guarantees through mathematical protocols where each party holds secret input x_i, parties execute cryptographic protocol computing function f(x_1, x_2, ..., x_n), and only the result is revealed while intermediate values remain hidden, with security models including semi-honest (honest-but-curious) adversaries following protocol but attempting to infer extra information, and malicious adversaries arbitrarily deviating from protocol requiring verification mechanisms. Implementation techniques span secret sharing methods where values are split into shares distributed across parties enabling computation through share manipulation (Shamir secret sharing for n parties with threshold t, replicated secret sharing for 3-party protocols), garbled circuits where one party creates encrypted circuit and another evaluates it without learning inputs or intermediate values (suitable for 2-party boolean circuits), and oblivious transfer primitives enabling receiver to obtain one of sender's inputs without sender knowing which was chosen or receiver learning others. ML applications include privacy-preserving model evaluation where parties jointly evaluate ML models without exposing proprietary models or sensitive test data, federated learning with secure aggregation preventing server from seeing individual participant updates even during aggregation, and private benchmarking enabling companies to compare ML model performance without revealing architectures or proprietary data. The 2024-2025 period demonstrated MPC feasibility for production systems though computational overheads remained significant (10-1000x slowdown), with successful deployments in financial consortia jointly training fraud detection models, healthcare collaborations enabling multi-institutional research without data sharing, and private set intersection protocols identifying common elements without revealing non-overlapping data.
    - maturity:: mature
    - source:: [[Yao's Garbled Circuits]], [[Shamir Secret Sharing]], [[MP-SPDZ]]
    - authority-score:: 0.95

  - **Semantic Classification**
    - owl:class:: ai:SecureMultiPartyComputation
    - owl:physicality:: VirtualEntity
    - owl:role:: Process
    - owl:inferred-class:: ai:VirtualProcess
    - belongsToDomain:: [[AIEthicsDomain]]
    - implementedInLayer:: [[ConceptualLayer]]

  - #### Relationships
- is-subclass-of:: [[Artificial Intelligence]]
    id:: secure-multi-party-computation-relationships

  - #### OWL Axioms
    id:: secure-multi-party-computation-owl-axioms
    collapsed:: true
    - ```clojure
      
      ```

- ## About Secure Multi-Party Computation
  id:: secure-multi-party-computation-about

  - 
  -
    - ### Use Cases
  - ### Privacy-Preserving Benchmarking
  -
    **Problem**: Multiple companies want to compare ML model performance without revealing models or data.
  -
    **Solution** (MPC-based):
    1. Each party secret-shares their model and test data
    2. Secure inference on each party's test set
    3. Compute encrypted accuracy metrics
    4. Reveal only final rankings
    -
  - ### Best Practices
  - ### Protocol Selection
  -
    **2-Party**:
    - Garbled circuits (low latency, high bandwidth)
    - Secret sharing (arithmetic-heavy)
  -
    **3-Party**:
    - Replicated secret sharing (good balance)
    - Malicious security achievable
  -
    **n-Party** (n > 3):
    - Shamir secret sharing
    - Byzantine robustness

- ## GPT in spy agencies.
	- [Microsoft Develops Secure Generative AI for US Spies (msn.com)](https://www.msn.com/en-gb/money/technology/microsoft-develops-secure-generative-ai-for-us-spies/ar-BB1m1vBa?ocid=msedgdhp&pc=HCTS&cvid=4ae66ceacb324ed785bfa6df68b126cd&ei=16)

- ## GPT in spy agencies.
	- [Microsoft Develops Secure Generative AI for US Spies (msn.com)](https://www.msn.com/en-gb/money/technology/microsoft-develops-secure-generative-ai-for-us-spies/ar-BB1m1vBa?ocid=msedgdhp&pc=HCTS&cvid=4ae66ceacb324ed785bfa6df68b126cd&ei=16)

- ## GPT in spy agencies.
	- [Microsoft Develops Secure Generative AI for US Spies (msn.com)](https://www.msn.com/en-gb/money/technology/microsoft-develops-secure-generative-ai-for-us-spies/ar-BB1m1vBa?ocid=msedgdhp&pc=HCTS&cvid=4ae66ceacb324ed785bfa6df68b126cd&ei=16)
