public:: true

# Safety Standard
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:safety-standard",
  "@type": "Page",
  "vc:slug": "safety-standard",
  "title": "Safety Standard",
  "vc:public": true,
  "vc:outboundWikilinks": [],
  "vc:schemaVersion": 2
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:safety-standard",
  "@type": "Class",
  "label": "Safety Standard",
  "definition": "A safety standard is a normative document — published by a standards body, industry consortium, or regulatory authority — that defines requirements, processes, and verification methods for ensuring that a system, product, or environment achieves an acceptable level of risk to human life, health, and property. Safety standards range from generic functional safety frameworks such as IEC 61508 and ISO 26262 to domain-specific codes covering robotics, medical devices, aviation, and industrial machinery, and they typically specify hazard analysis methods, safety integrity levels, design constraints, and evidence of compliance.",
  "domain": "infrastructure",
  "maturity": "established",
  "subClassOf": [{"@id": "urn:ngm:class:compliance-standards", "label": "Compliance Standards"}],
  "relations": {
    "relatedTo": [
      {"@id": "urn:ngm:class:functional-safety", "label": "Functional Safety"},
      {"@id": "urn:ngm:class:risk-assessment", "label": "Risk Assessment"},
      {"@id": "urn:ngm:class:robot-safety", "label": "Robot Safety"}
    ],
    "enables": [
      {"@id": "urn:ngm:class:compliance-framework", "label": "Compliance Framework"},
      {"@id": "urn:ngm:class:compliance-verification", "label": "Compliance Verification"}
    ],
    "uses": [
      {"@id": "urn:ngm:class:iec-61508", "label": "IEC 61508"},
      {"@id": "urn:ngm:class:iso-26262", "label": "ISO 26262"}
    ],
    "supports": [
      {"@id": "urn:ngm:class:ai-risk-management", "label": "AI Risk Management"}
    ]
  },
  "quality": 0.8
}
```

- ### Definition
  - A [[Safety Standard]] is a normative document specifying requirements, analytical methods, and evidence criteria for achieving acceptable risk levels in a system or product, with prominent examples including [[IEC 61508]] for general [[Functional Safety]] of electrical systems and [[ISO 26262]] for automotive road vehicles.

- ### Relationships
  - Safety standards operationalise [[Functional Safety]] by prescribing systematic hazard analysis, safety integrity levels (SILs/ASILs), and design constraints. They drive [[Risk Assessment]] processes and define evidence requirements for [[Compliance Verification]]. Domain-specific standards such as [[ISO 26262]] and [[IEC 61508]] are deployed within [[Compliance Framework]] programmes. Robot safety standards (ISO 10218, ISO/TS 15066) address [[Robot Safety]] for collaborative applications, and emerging AI safety standards inform [[AI Risk Management]] at organisational level.

- ### Content
  - Safety standards emerged from industrial accident investigations in the nineteenth and twentieth centuries: boiler explosions, mining disasters, and chemical plant failures each prompted codification of preventive requirements. The International Electrotechnical Commission published IEC 61508 in 1998 as the first generic functional safety standard for programmable electronic systems, introducing Safety Integrity Levels (SIL 1-4) as a quantitative risk reduction framework. Derived sector standards proliferated: ISO 26262 for automotive, EN 50128 for railway software, IEC 62061 for machinery, and DO-178C for avionics.

  - The technical structure of a mature safety standard typically includes: scope and normative references; terms and definitions; a concept phase requiring hazard analysis and risk assessment (FMEA, FTA, HAZOP); safety requirements specification at system and component level; design constraints (hardware fault tolerance, diversity, independence); verification and validation requirements (testing coverage criteria, formal methods); and a safety case or argument structure that documents how requirements are met. Automotive SPICE and CMMI process assessments are often co-required alongside the safety standard itself.

  - Safety standards are economically significant because non-compliance can block market access (CE marking, UL listing, FDA clearance), attract liability, and void insurance. They create competitive dynamics: tier-1 automotive suppliers achieve ISO 26262 ASIL D certification as a market entry requirement. Certification bodies such as TÜV, SGS, and BSI provide third-party audits, and tool vendors seek qualification under the relevant tool confidence level annexes of safety standards to provide certified design and test toolchains.

  - In 2024-2025, AI safety standards are the most active frontier: ISO/IEC 42001 (AI management systems), ISO/IEC TR 24029 (robustness of neural networks), and the proposed ISO/IEC 5338 (AI lifecycle) are being developed alongside the EU AI Act's harmonised standards mandate. IEC TC 62 is revising medical device AI guidance, and automotive OEMs are working through SOTIF (ISO 21448) for sensors and perception systems in autonomous vehicles. The challenge of applying deterministic safety integrity levels to non-deterministic ML components remains an open research and standardisation problem.