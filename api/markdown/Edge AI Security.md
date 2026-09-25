The discipline of protecting machine learning systems deployed on distributed edge devices against adversarial attacks, model theft, data poisoning, physical tampering, and unauthorised access, while respecting the severe resource constraints of embedded and IoT environments. Edge AI Security integrates hardware-level protections (Trusted Execution Environments, secure boot), software hardening (model encryption, differential privacy), and algorithmic defences (certified robustness, Byzantine-robust aggregation) into defence-in-depth architectures.

### Semantic Classification

### Content

The existing detailed definition above captures the technical substance. The following paragraphs add structural context.

Edge AI Security is distinguished from cloud AI security by three factors: physical accessibility (devices can be physically attacked, enabling side-channel and fault injection attacks), offline operation (cloud-based revocation or patching pipelines may be unavailable), and extreme resource scarcity (cryptographic primitives must be chosen for embedded-class CPUs or MCUs with kilobytes of RAM).

The threat model encompasses adversarial input attacks (perturbed sensor data crafted to mislead inference), model extraction (querying the device to steal model weights), model inversion (reconstructing training data from model outputs), data poisoning (corrupting local training in federated learning), and physical attacks (probing memory buses or inducing power glitches to bypass security checks).

Trusted Execution Environments (ARM TrustZone, RISC-V Physical Memory Protection) partition the device into secure and normal worlds, isolating model weights and inference computation from the untrusted application OS. Model weights are stored encrypted and decrypted only within the secure world, protecting intellectual property even if the device is stolen.

Byzantine-robust aggregation protocols — such as coordinate-wise median, trimmed mean, and Krum — identify and exclude outlier gradient updates from potentially compromised federated learning participants, preserving model integrity without requiring trust in individual devices.

### Provenance

