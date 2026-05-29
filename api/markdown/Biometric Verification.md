public:: true

# Biometric Verification
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:biometric-verification",
  "@type": "Page",
  "vc:slug": "biometric-verification",
  "title": "Biometric Verification",
  "vc:public": true,
  "vc:outboundWikilinks": [],
  "vc:schemaVersion": 2
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:biometric-verification",
  "@type": "Class",
  "label": "Biometric Verification",
  "definition": "Biometric verification is the one-to-one matching process in which a live biometric sample presented by a claimant is compared against a single pre-enrolled template associated with the claimed identity, producing an accept or reject decision based on a similarity threshold. It is distinct from biometric identification, which performs a one-to-many search across an entire database, making verification faster and more privacy-preserving for authentication use cases.",
  "domain": "security",
  "maturity": "established",
  "subClassOf": [{"@id": "urn:ngm:class:identity-verification", "label": "Identity Verification"}],
  "relations": {
    "uses": [
      {"@id": "urn:ngm:class:biometric-binding-mechanism", "label": "Biometric Binding Mechanism"}
    ],
    "enables": [
      {"@id": "urn:ngm:class:biometric-authentication", "label": "Biometric Authentication"},
      {"@id": "urn:ngm:class:know-your-customer", "label": "Know Your Customer"}
    ],
    "requires": [
      {"@id": "urn:ngm:class:data-protection", "label": "Data Protection"}
    ],
    "relatedTo": [
      {"@id": "urn:ngm:class:digital-identity-verification", "label": "Digital Identity Verification"},
      {"@id": "urn:ngm:class:aml-kyc-compliance", "label": "AML KYC Compliance"}
    ]
  },
  "quality": 0.8
}
```

- ### Definition
  - Biometric verification performs a one-to-one comparison between a live biometric sample and a single stored reference template to confirm that the presenting person is who they claim to be. The process involves capturing a fresh biometric signal (e.g. facial image, fingerprint scan, or voice recording), extracting a feature vector from it, computing a similarity or distance score against the enrolled template, and applying a decision threshold to determine acceptance. Because it does not search a population-scale database, biometric verification is orders of magnitude faster than biometric identification and exposes no information about other enrolees, making it the preferred mechanism in [[Biometric Authentication]] and [[Know Your Customer]] workflows.

- ### Relationships
  - Biometric verification [[uses]] [[Biometric Binding Mechanism]] to ensure that the reference template is cryptographically bound to the claimed identity credential and has not been tampered with. It [[enables]] [[Biometric Authentication]] at the point of login or transaction authorisation and [[enables]] [[Know Your Customer]] identity proofing for financial institutions. It [[requires]] [[Data Protection]] compliance because biometric templates are sensitive personal data. It is [[relatedTo]] [[Digital Identity Verification]] as the broader identity assurance domain and to [[AML KYC Compliance]] as a major operational context.

- ### Content
  - Biometric verification as a distinct mode of identity confirmation was formalised in standards developed by ISO/IEC JTC 1/SC 37 (Biometrics), particularly ISO/IEC 19795 on biometric performance testing and 30107 on presentation attack detection. The distinction between verification (1:1) and identification (1:N) was central to the architecture of AFIS systems deployed from the 1990s and informed subsequent consumer authentication standards. NIST's FRVT (Face Recognition Vendor Test) benchmarks have provided standardised performance data for facial verification systems since 2000.

  - A biometric verification system's core performance is characterised by its receiver operating characteristic (ROC) curve, plotting FAR against TAR (true acceptance rate) across threshold settings. In high-security contexts (e.g. border control) thresholds are set to minimise FAR at the cost of higher FRR; in consumer convenience contexts the balance is reversed. Presentation attack detection (ISO/IEC 30107-3) tests resistance to artefacts such as printed photographs, 3D masks, and replay video attacks. On-device matching using Trusted Execution Environments (TEEs) such as ARM TrustZone avoids transmitting raw biometric data to remote servers.

  - Biometric verification is embedded in remote KYC platforms used by banks, insurers, and cryptocurrency exchanges for onboarding, typically combining a facial selfie match against a government identity document with a liveness check. Providers include iProov, Jumio, Onfido, and IDEMIA. Governments deploy it in national ID systems (Aadhaar in India uses iris and fingerprint verification for 1.4 billion citizens), e-passport gates, and border management systems.

  - As of 2024–2025 the technology is advancing rapidly with 3D facial verification (structured light or ToF sensors) becoming standard in high-value transaction contexts, and passive liveness detection using single-frame analysis replacing active challenge-response liveness. Regulatory demands are increasing: the EU AI Act's high-risk classification for remote biometric verification requires conformity assessments and fundamental rights impact assessments, whilst eIDAS 2.0 mandates biometric verification for the highest assurance level (LoA High) of European Digital Identity Wallets.

