public:: true

# Tamper Resistance
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:5b6b3df239b80f9a0878fa726551fce6ff7dad7e97b4c4a8c72e1548c4841e56",
  "@type": "Page",
  "vc:slug": "tamper-resistance",
  "title": "Tamper Resistance",
  "vc:public": true,
  "vc:outboundWikilinks": [
    {"@id": "urn:visionflow:linked:hardware-security", "vc:label": "Hardware Security"},
    {"@id": "urn:visionflow:linked:tamper-evidence", "vc:label": "Tamper Evidence"},
    {"@id": "urn:visionflow:linked:trusted-platform-module", "vc:label": "Trusted Platform Module"},
    {"@id": "urn:visionflow:linked:hardware-security-module", "vc:label": "Hardware Security Module"}
  ],
  "vc:schemaVersion": 2,
  "prov:wasAttributedTo": {"@id": "did:nostr:ontology-mesh"},
  "prov:generatedAtTime": {"@value": "2026-08-06T00:00:00Z", "@type": "xsd:dateTime"}
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:tamper-resistance",
  "@type": "Class",
  "label": "Tamper Resistance",
  "definition": "The property of a device or system that makes unauthorised physical access, modification, or extraction of its protected contents actively difficult, achieved through measures such as hardened enclosures, potted or shielded circuitry, mesh sensors that detect penetration, and logic that zeroises cryptographic keys when intrusion is sensed. Tamper resistance aims to prevent or frustrate an attack in progress, in contrast to tamper evidence, which merely ensures that interference leaves a detectable trace. It is a defining requirement for secure hardware including trusted platform modules, hardware security modules, smartcards, and payment terminals, and is graded by certification schemes such as FIPS 140-3 physical security levels and Common Criteria evaluations.",
  "domain": "security",
  "maturity": "mature",
  "subClassOf": {"@id": "urn:ngm:class:hardware-security", "label": "Hardware Security"},
  "relations": {
    "contrastsWith": [
      {"@id": "urn:ngm:class:tamper-evidence", "label": "Tamper Evidence"}
    ],
    "enables": [
      {"@id": "urn:ngm:class:trusted-platform-module", "label": "Trusted Platform Module"},
      {"@id": "urn:ngm:class:secure-element", "label": "Secure Element"}
    ],
    "relatedTo": [
      {"@id": "urn:ngm:class:hardware-security-module", "label": "Hardware Security Module"},
      {"@id": "urn:ngm:class:physical-security", "label": "Physical Security"},
      {"@id": "urn:ngm:class:side-channel-attack", "label": "Side-Channel Attack"}
    ]
  },
  "quality": 0.8,
  "provenance": {
    "attributedTo": "did:nostr:ontology-mesh",
    "generatedAt": "2026-08-07T00:00:00Z",
    "inferenceRule": "ResearchAugment"
  }
}
```

- ### Definition
  - "The property of a device or system that makes unauthorised physical access, modification, or extraction of its protected contents actively difficult, achieved through measures such as hardened enclosures, potted or shielded circuitry, mesh sensors that detect penetration, and logic that zeroises cryptographic keys when intrusion is sensed. Tamper resistance aims to prevent or frustrate an attack in progress, in contrast to tamper evidence, which merely ensures that interference leaves a detectable trace. It is a defining requirement for secure hardware including trusted platform modules, hardware security modules, smartcards, and payment terminals, and is graded by certification schemes such as FIPS 140-3 physical security levels and Common Criteria evaluations."

- ### Semantic Classification
  - owl-class:: security:TamperResistance
  - owl-role:: Concept

- ### Relationships
  - is-subclass-of:: [[Hardware Security]]
  - contrasts-with:: [[Tamper Evidence]]
  - enables:: [[Trusted Platform Module]]
  - related-to:: [[Hardware Security Module]]

- ### Content

  ## Definition

  **Tamper resistance** is the design goal of making a device genuinely hard to attack with physical access — not merely of noticing afterwards that an attack happened. The standard taxonomy distinguishes four graded capabilities: tamper *resistance* (the attack is difficult), tamper *evidence* (the attack leaves visible traces), tamper *detection* (the device notices the attack itself), and tamper *response* (the device acts on that detection, typically by zeroising keys). Practical secure hardware layers all four, but resistance is the load-bearing property: it buys the time and raises the cost that make detection and response meaningful. The [[Tamper Evidence]] page in this graph captures the contrasting, weaker guarantee — seals and coatings that record interference without preventing it.

  Physical measures span a wide cost spectrum. At the cheap end, epoxy potting, absent debug headers, and blown fuse bits deter casual probing. Mid-range devices — smartcards and [[Secure Element]] chips — add active shield meshes over the die, light and glitch sensors, scrambled bus lines, and redundant logic that traps fault injection. At the top, [[Hardware Security Module]] enclosures wrap the entire cryptographic boundary in a serpentine conductive mesh monitored continuously under battery power: drilling, milling, temperature excursions, or voltage anomalies trigger immediate zeroisation of key material. FIPS 140-3 formalises this ladder, with Level 3 requiring tamper response for the cover and Level 4 requiring detection and response across the whole physical envelope, including environmental attack conditions.

  Tamper resistance is what lets a chip serve as a root of trust in a hostile environment: a [[Trusted Platform Module]] can vouch for a platform's boot state, and a payment terminal can hold card keys, only because extracting their secrets requires defeating the physical protections. The arms race continues nonetheless — decapping, micro-probing, focused ion beam edits, and laser fault injection on the invasive side, and [[Side-Channel Attack]] techniques (power analysis, electromagnetic leakage, timing) that bypass physical barriers entirely by observing what the device unavoidably emits. Modern certifications therefore evaluate side-channel countermeasures alongside physical hardening.

  ## Current Landscape

  Secure hardware has moved from niche banking equipment into every pocket and rack: Apple's Secure Enclave, Google's Titan chips, discrete and firmware TPMs mandated by Windows 11, SIMs and eSIMs, and cloud HSM services all rest on tamper-resistant silicon. Certification demand is rising with regulation — PCI PTS for payment devices, Common Criteria EAL5+ for smartcard ICs, and FIPS 140-3 superseding 140-2 across government procurement. Research attention has shifted towards low-cost invasive attacks (voltage glitching kits now cost tens of pounds), supply-chain implants, and countermeasures such as PUFs (physically unclonable functions) that derive keys from manufacturing variation so there is no stored secret to extract.

  The frontier through 2025-26 is fusing tamper resistance with post-quantum cryptography:

  - **FIPS 140-3** (published 22 March 2019, superseding FIPS 140-2) remains the graded standard, with physical-security Levels 1-4 setting the tamper-response ladder; its Implementation Guidance mandates hardness testing of potting/epoxy and tamper-evident labelling.
  - **July 2026**: Thales TCT's Luna T-Series became the first US-manufactured PQC-enabled HSM to gain FIPS 140-3 Level 3 validation (certificate #5450), embedding the full NSA CNSA 2.0 suite (ML-DSA, ML-KEM, LMS).
  - **February 2026**: Jmem Tek gained FIPS 140-3 CAVP certification for a PUF-based PQC key-security chip — the first to implement NIST SP 800-232 (ASCON) lightweight cryptography alongside FIPS 203/204.
  - **2026 commercial tokens** now pair a fine-wire PCB tamper mesh with silicon PUF identity and sub-10-microsecond active zeroisation of SRAM and flash keys, so no cloneable master key is ever stored.

  **Sources**:
  - https://csrc.nist.gov/pubs/fips/140-3/final
  - https://www.thalestct.com/hsm-fips140-3-validation/
  - https://www.design-reuse.com/news/202529306-jmem-tek-has-achieved-nist-cavp-certification-with-ascon-algorithm-implementation-and-will-be-showcased-at-semicon-taiwan-/

- ### Provenance
  - sources::
  - migration-date:: 2026-08-06T00:00:00Z
