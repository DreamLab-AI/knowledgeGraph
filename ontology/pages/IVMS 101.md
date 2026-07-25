public:: true

# IVMS 101
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:ivms-101",
  "@type": "Page",
  "vc:slug": "ivms-101",
  "title": "IVMS 101",
  "vc:public": true,
  "vc:outboundWikilinks": [],
  "vc:schemaVersion": 2
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:ivms-101",
  "@type": "Class",
  "label": "IVMS 101",
  "definition": "IVMS 101 (interVASP Messaging Standard 101) is an open data model and schema specification developed by the Joint Working Group on interVASP Messaging Standards (JWG) to enable Virtual Asset Service Providers (VASPs) to exchange originator and beneficiary identity information in compliance with the FATF Travel Rule. Published in 2020 and subsequently adopted by the FATF as the preferred global standard for Travel Rule data transmission, IVMS 101 defines canonical field names, value types, and encoding rules for natural persons, legal persons, and address objects in a technology-neutral JSON schema. It is designed to be embedded within any Travel Rule messaging protocol — including TRP, TRUST, VerifyVASP, and Sygna Bridge — ensuring semantic interoperability across different technical implementations.",
  "domain": "blockchain",
  "maturity": "established",
  "subClassOf": [
    {"@id": "urn:ngm:class:compliance-framework", "label": "Compliance Framework"}
  ],
  "relations": {
    "relatedTo": [
      {"@id": "urn:ngm:class:fatf-travel-rule", "label": "FATF Travel Rule"},
      {"@id": "urn:ngm:class:fatf", "label": "FATF"},
      {"@id": "urn:ngm:class:aml-kyc-compliance", "label": "AML KYC Compliance"},
      {"@id": "urn:ngm:class:virtual-asset", "label": "Virtual Asset"}
    ],
    "enables": [
      {"@id": "urn:ngm:class:cross-border-compliance", "label": "Cross Border Compliance"},
      {"@id": "urn:ngm:class:compliance-verification", "label": "Compliance Verification"}
    ],
    "uses": [
      {"@id": "urn:ngm:class:digital-identity-standards", "label": "Digital Identity Standards"}
    ],
    "supports": [
      {"@id": "urn:ngm:class:anti-money-laundering", "label": "Anti-Money Laundering"},
      {"@id": "urn:ngm:class:regulatory-compliance", "label": "Regulatory Compliance"}
    ]
  },
  "quality": 0.8
}
```

- ### Definition
  - IVMS 101 is the canonical open JSON schema for transmitting originator and beneficiary personal data between Virtual Asset Service Providers in compliance with the [[FATF Travel Rule]], providing the semantic data model layer that all major Travel Rule messaging protocols embed.

- ### Relationships
  - IVMS 101 is directly mandated by [[FATF]] Recommendation 16 as applied to [[Virtual Asset]] transfers above the threshold (currently USD/EUR 1,000). The standard defines the minimum required fields for [[AML KYC Compliance]] data — full legal name, account identifier, physical or blockchain address, date and place of birth — in a structured, machine-readable format. It enables [[Cross Border Compliance]] because both originating and beneficiary VASPs use the same field semantics regardless of their underlying technology stack. [[Anti-Money Laundering]] controls depend on IVMS 101 data being correctly populated: screening systems that check sanctions lists and PEP databases consume IVMS 101 payloads directly. [[Digital Identity Standards]] such as verifiable credentials are being integrated with IVMS 101 to allow cryptographically signed identity assertions rather than plain-text fields.

- ### Content
  - The FATF Travel Rule, originally conceived for traditional wire transfers under SWIFT, was extended to virtual asset transfers through FATF's June 2019 guidance update. This created an immediate compliance challenge: unlike banks, which already exchanged SWIFT MT messages containing counterparty information, VASPs had no standard way to transmit beneficiary data alongside a blockchain transaction. IVMS 101 was developed by a joint working group of over forty VASP associations, technology providers, and compliance professionals to fill this gap.

  - The IVMS 101 JSON schema is organised around three entity types: natural persons (individuals), legal persons (companies), and address information. Each entity type has a defined set of required and optional fields with precise naming conventions. The schema specifies enumerated values for country codes (ISO 3166), name identifiers (legal name vs. nickname vs. alias), and address types, eliminating the ambiguity that had plagued earlier ad hoc Travel Rule implementations.

  - A key design principle of IVMS 101 is protocol neutrality. The schema is a data model, not a transmission protocol. This means that Travel Rule messaging networks — whether peer-to-peer (TRP), blockchain-anchored (VerifyVASP), or hub-and-spoke (Sygna Bridge) — can all embed IVMS 101 payloads within their own envelopes. This separation of concerns allowed the standard to gain rapid adoption across competing protocol stacks without requiring any single protocol to win the market.

  - Privacy considerations shaped several design choices. IVMS 101 payloads contain sensitive personal data that must be protected in transit and at rest. The standard itself does not prescribe encryption, but all major protocol implementations use TLS for transport and some additionally encrypt payloads using the beneficiary VASP's public key, ensuring that only the intended recipient can read the personal data. GDPR and similar data protection regulations require that IVMS 101 data be handled with appropriate retention and deletion policies.

  - Adoption has been uneven across jurisdictions because FATF Travel Rule implementation timelines vary. Singapore (MAS), Switzerland (FINMA), and South Korea (KSATF) were early adopters with mandatory compliance dates in 2021–2022. The UK FCA and EU MiCA regulations subsequently mandated Travel Rule compliance, driving IVMS 101 adoption in those markets. As of 2025, IVMS 101 is the de facto global standard for Travel Rule data, embedded in every major compliance platform serving VASPs.
