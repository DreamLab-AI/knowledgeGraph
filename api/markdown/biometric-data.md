- ### Definition
  - [[Biometric Data]] consists of unique physiological and behavioural measurements — fingerprints, facial geometry, iris patterns, voice, gait — that uniquely identify an individual.
  - As a subcategory of [[Personal Data]], it carries elevated legal protection under GDPR Article 9 and equivalent frameworks due to its irreplaceability and sensitivity.
  - [[Machine Learning]] models process biometric measurements to perform identification (one-to-many matching) and verification (one-to-one matching) with high accuracy.

- ### Overview
  - Biometric authentication has displaced passwords in consumer devices (Apple Face ID, fingerprint scanners) because it combines convenience with strong proof of physical presence.
  - GDPR defines biometric data as special category data when processed for the purpose of uniquely identifying natural persons, requiring explicit consent or another lawful basis.
  - Template protection techniques (fuzzy extractors, cancelable biometrics) attempt to store biometric data in a form that cannot be reversed to the original trait, reducing breach consequences.
  - Liveness detection (anti-spoofing) mechanisms prevent presentation attacks using photographs, silicone fingers, or deepfake videos against biometric [[Access Control]] systems.

- ### Key Aspects
  - The permanence problem: unlike passwords, biometrics cannot be revoked and reissued after a breach, making [[Data Management]] and storage security critical.
  - Biometric systems are characterised by False Acceptance Rate (FAR) and False Rejection Rate (FRR), with the equal error rate (EER) expressing the trade-off point.
  - Cross-modal biometric fusion combines multiple biometric signals (face + voice + gait) to improve accuracy and resist spoofing.
  - [[Statistical Analysis]] of biometric template similarity scores underpins threshold-setting for acceptance/rejection decisions.

- ### Mechanisms
  - Feature extraction transforms raw sensor data (image, audio waveform) into a compact biometric template using [[Machine Learning]] embedding models.
  - Secure template storage uses [[Encryption]] and hardware-backed key storage (Secure Enclave, Trusted Execution Environment) to protect templates at rest.
  - Matching algorithms compute [[Euclidean Distance]] or cosine similarity between the probe template and enrolled templates to produce a similarity score.
  - [[Policy Information Point]] components retrieve biometric authentication outcomes as attributes for access policy evaluation.

- ### Applications
  - Smartphone and laptop unlock using face recognition or fingerprint scanning as the primary authentication factor.
  - Border control e-passport systems comparing live facial capture against stored chip photos.
  - Healthcare [[Governance]] — patient identification in emergency settings to retrieve records without requiring a PIN.
  - Financial services KYC (Know Your Customer) identity verification combining facial recognition with document analysis.

- ### Relationships
  - subClassOf:: [[Personal Data]]
  - relatedTo:: [[Privacy]]
  - relatedTo:: [[Governance]]
  - uses:: [[Encryption]]
  - uses:: [[Statistical Analysis]]
  - requires:: [[Data Schema]]
  - requires:: [[Access Control]]
  - enables:: [[Digital Identity]]
  - enables:: [[Policy Information Point]]
  - dependsOn:: [[Data Management]]
  - dependsOn:: [[Machine Learning]]
  - supports:: [[Policy Administration Point]]
  - contrastsWith:: [[Session Key]]
  - bridgesTo:: [[Security]]

- ### Provenance
  - updated:: 2026-06-15