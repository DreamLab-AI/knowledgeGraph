public:: true
alias:: ISO/IEC 27001

# iso/iec 27001
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:d9ed16cf5e3d956ee7839bbb10d12b39dbf8335ea1c41957e2d5a8728442b910",
  "@type": "Page",
  "vc:slug": "iso-iec-27001",
  "title": "iso/iec 27001",
  "vc:public": true,
  "vc:outboundWikilinks": [],
  "vc:schemaVersion": 2,
  "prov:wasAttributedTo": {
    "@id": "did:nostr:jjohare"
  },
  "prov:generatedAtTime": {
    "@value": "2026-05-19T21:00:00Z",
    "@type": "xsd:dateTime"
  }
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:iso-iec-27001",
  "@type": "Class",
  "label": "ISO/IEC 27001",
  "definition": "ISO/IEC 27001 is an internationally recognised standard that specifies the requirements for establishing, implementing, maintaining, and continually improving an Information Security Management System (ISMS) within the context of an organisation's overall business risks. It adopts a risk-based approach, requiring organisations to systematically identify information security risks and apply appropriate controls drawn from Annex A. Certification against ISO/IEC 27001 provides third-party assurance of an organisation's commitment to protecting the confidentiality, integrity, and availability of information assets.",
  "domain": "infrastructure",
  "subClassOf": [
    {
      "@id": "urn:ngm:class:infra-legal-and-regulatory",
      "label": "Legal and Regulatory"
    }
  ],
  "relations": {
    "requires": [
      {"@id": "urn:ngm:class:risk-assessment", "label": "Risk Assessment"},
      {"@id": "urn:ngm:class:information-security", "label": "Information Security"}
    ],
    "enables": [
      {"@id": "urn:ngm:class:compliance-framework", "label": "Compliance Framework"},
      {"@id": "urn:ngm:class:audit-trail", "label": "Audit Trail"}
    ],
    "relatedTo": [
      {"@id": "urn:ngm:class:cybersecurity", "label": "Cybersecurity"},
      {"@id": "urn:ngm:class:gdpr-compliance", "label": "GDPR Compliance"}
    ]
  },
  "qualityScore": 0.75,
  "maturity": "emerging"
}
```


- ### Definition
  - ISO/IEC 27001 is an internationally recognised standard that specifies the requirements for establishing, implementing, maintaining, and continually improving an Information Security Management System (ISMS) within the context of an organisation's overall business risks. It adopts a risk-based approach, requiring organisations to systematically identify information security risks and apply appropriate controls drawn from Annex A. Certification against ISO/IEC 27001 provides third-party assurance of an organisation's commitment to protecting the confidentiality, integrity, and availability of information assets.

- ### Semantic Classification
  - owl-class:: iso-iec-27001:ISO/IEC 27001
  - owl-role:: Concept

- ### Relationships
  - requires [[Risk Assessment]]
  - requires [[Information Security]]
  - enables [[Compliance Framework]]
  - enables [[Audit Trail]]
  - relatedTo [[Cybersecurity]]
  - relatedTo [[GDPR Compliance]]

- ### Content
  - ISO/IEC 27001 is jointly published by the International Organisation for Standardisation (ISO) and the International Electrotechnical Commission (IEC). The standard is structured around the Plan-Do-Check-Act (PDCA) cycle and is aligned with other ISO management system standards through a common High Level Structure, facilitating integrated management system implementations. Annex A of the standard contains a reference set of controls organised into domains such as information security policies, human resource security, access control, cryptography, physical and environmental security, and incident management.
  - Organisations seeking certification must undergo a two-stage audit by an accredited certification body: a documentation review followed by a conformity assessment. The standard pairs with ISO/IEC 27002, which provides implementation guidance for the Annex A controls, and ISO/IEC 27005, which addresses information security risk management in detail. Compliance with ISO/IEC 27001 is increasingly a contractual prerequisite in sectors such as finance, healthcare, defence supply chains, and cloud services. It directly supports GDPR compliance obligations relating to technical and organisational measures for data protection, and aligns with frameworks such as NIST CSF and SOC 2 Type II.

- ### Provenance
  - sources::
  - migration-date:: 2026-05-19T00:00:00Z

- ### Provenance
  - sources::
  - migration-date:: 2026-05-19T00:00:00Z
