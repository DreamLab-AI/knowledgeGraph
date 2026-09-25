Biometric identification is the recognition of an individual by measuring and matching distinctive physiological or behavioural characteristics, such as fingerprints, facial geometry, iris patterns, voice or gait. It captures a sample, extracts a feature template and compares it against enrolled templates to verify a claimed identity (one-to-one) or identify an unknown subject (one-to-many). It underpins access control, border management and device authentication, and raises significant privacy considerations.

### Overview

- Biometric systems operate in two modes: verification confirms a claimed identity by a one-to-one template comparison, while identification searches a gallery for a one-to-many match.
- A typical pipeline captures a sample, assesses quality, extracts a compact feature template, and computes a similarity score against stored references using a decision threshold.
- Modalities vary in permanence, distinctiveness and collectability: fingerprints and iris patterns are highly distinctive; face and voice are convenient but more variable.
- Modern systems use deep neural networks to learn discriminative embeddings, paired with liveness detection to resist spoofing with photos, masks or recordings.

### Mechanisms

- Enrolment: capturing reference samples and building a template database.
- Feature extraction: deriving a stable, compact representation of the trait.
- Matching: scoring similarity and applying a threshold balancing false accept and false reject rates.
- Liveness detection: distinguishing a live subject from a spoof artefact.
- Template protection: securing biometric data against reconstruction.

### Applications

- Smartphone and device unlocking.
- Border control and e-passport gates.
- Physical and logical access control.
- Payment authorisation and customer onboarding.

### Provenance

