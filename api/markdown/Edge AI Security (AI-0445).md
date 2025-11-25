id:: edge-ai-security-ai-0445-ontology

- ### OntologyBlock
  id:: Edge AI Security (AI-0445)
  - ontology:: true
  - public-access:: true
  - term-id:: DT-0445
  - preferred-term:: Edge AI Security (AI-0445)
  - source-domain:: ai
  - status:: in
  - definition:: Edge AI Security protects machine learning systems deployed on distributed edge devices against adversarial attacks, model theft, data poisoning, and unauthorized access while respecting resource constraints of embedded environments. Edge security differs from cloud security by prioritizing offline operation, physical accessibility threats, and extreme resource scarcity. Trusted Execution Environments (TEEs) like ARM TrustZone isolate sensitive AI operations in hardware-protected secure enclaves, preventing unauthorized model inspection or parameter access even by device operating systems. Model encryption protects intellectual property; weights are decrypted only within TEEs during inference. Secure bootstrap chains verify device firmware integrity before executing AI models, preventing compromised code from manipulating inference. Defense mechanisms against adversarial attacks include input validation, anomaly detection, and certified robustness techniques tolerating small input perturbations. Model extraction attacks steal intellectual property by querying inference endpoints; edge systems mitigate this through rate limiting, access control, and covert deployment of detection mechanisms. Data poisoning attacks corrupt local training in federated learning systems; Byzantine-robust aggregation protocols identify and exclude corrupted updates. Physical attacks target edge devices accessing unprotected memory; countermeasures include side-channel resistance, differential power analysis defenses, and information-flow isolation. Privacy preservation through differential privacy adds calibrated noise to gradients and outputs, providing formal privacy guarantees. Standards like NIST AI Risk Management Framework and ARM TrustZone documentation guide secure deployment. Edge security requires balancing protection strength against computational/energy overhead; resource-constrained devices cannot employ computationally expensive cryptographic primitives. Effective edge AI security integrates hardware-level protections (TEEs, secure boot), software hardening (model encryption, access control), and algorithmic defenses (certified robustness) forming defense-in-depth architectures.

### Relationships
- is-subclass-of:: [[AIApplications]]
