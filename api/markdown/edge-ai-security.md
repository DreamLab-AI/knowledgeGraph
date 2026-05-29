- ### Definition
  - Edge AI Security protects machine learning systems deployed on distributed edge devices against adversarial attacks, model theft, data poisoning, and unauthorized access while respecting resource constraints of embedded environments. Edge security differs from cloud security by prioritizing offline operation, physical accessibility threats, and extreme resource scarcity. Trusted Execution Environments (TEEs) like ARM TrustZone isolate sensitive AI operations in hardware-protected secure enclaves, preventing unauthorized model inspection or parameter access even by device operating systems. Model encryption protects intellectual property; weights are decrypted only within TEEs during inference. Secure bootstrap chains verify device firmware integrity before executing AI models, preventing compromised code from manipulating inference. Defense mechanisms against adversarial attacks include input validation, anomaly detection, and certified robustness techniques tolerating small input perturbations. Model extraction attacks steal intellectual property by querying inference endpoints; edge systems mitigate this through rate limiting, access control, and covert deployment of detection mechanisms. Data poisoning attacks corrupt local training in federated learning systems; Byzantine-robust aggregation protocols identify and exclude corrupted updates. Physical attacks target edge devices accessing unprotected memory; countermeasures include side-channel resistance, differential power analysis defenses, and information-flow isolation. Privacy preservation through differential privacy adds calibrated noise to gradients and outputs, providing formal privacy guarantees. Standards like NIST AI Risk Management Framework and ARM TrustZone documentation guide secure deployment. Edge security requires balancing protection strength against computational/energy overhead; resource-constrained devices cannot employ computationally expensive cryptographic primitives. Effective edge AI security integrates hardware-level protections (TEEs, secure boot), software hardening (model encryption, access control), and algorithmic defenses (certified robustness) forming defense-in-depth architectures.

- ### Semantic Classification
  - owl-class:: artificial-intelligence:EdgeAISecurity
  - owl-role:: Process
  - owl-inferred:: ai:VirtualProcess
  - belongs-to-domain:: [[AIEthicsDomain]]
  - implemented-in-layer:: [[ConceptualLayer]]

- ### Relationships
  Edge AI Security **requires** Adversarial Robustness (certifiable defences against input perturbations), Hardware Security Module / TEE support, and Federated Learning (whose distributed training introduces Byzantine adversaries). It **depends on** Edge Computing infrastructure, Internet of Things device constraints, and Model Compression for Edge (which determines the attack surface). It **protects** Edge AI System deployments. It **contrasts with** Adversarial Attacks (the threat it defends against). It is **related to** Privacy Preserving Technology (differential privacy integration), AI Safety (the governance framework), and Cybersecurity (the parent discipline).

- ### Content
  The existing detailed definition above captures the technical substance. The following paragraphs add structural context.

  Edge AI Security is distinguished from cloud AI security by three factors: physical accessibility (devices can be physically attacked, enabling side-channel and fault injection attacks), offline operation (cloud-based revocation or patching pipelines may be unavailable), and extreme resource scarcity (cryptographic primitives must be chosen for embedded-class CPUs or MCUs with kilobytes of RAM).

  The threat model encompasses adversarial input attacks (perturbed sensor data crafted to mislead inference), model extraction (querying the device to steal model weights), model inversion (reconstructing training data from model outputs), data poisoning (corrupting local training in federated learning), and physical attacks (probing memory buses or inducing power glitches to bypass security checks).

  Trusted Execution Environments (ARM TrustZone, RISC-V Physical Memory Protection) partition the device into secure and normal worlds, isolating model weights and inference computation from the untrusted application OS. Model weights are stored encrypted and decrypted only within the secure world, protecting intellectual property even if the device is stolen.

  Byzantine-robust aggregation protocols — such as coordinate-wise median, trimmed mean, and Krum — identify and exclude outlier gradient updates from potentially compromised federated learning participants, preserving model integrity without requiring trust in individual devices.

- ### Provenance
  - sources::
  - migration-date:: 2026-04-26T00:00:00Z