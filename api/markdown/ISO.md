public:: true

# ISO
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:iso",
  "@type": "Page",
  "vc:slug": "iso",
  "title": "ISO",
  "vc:public": true,
  "vc:outboundWikilinks": [],
  "vc:schemaVersion": 2
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:iso",
  "@type": "Class",
  "label": "ISO",
  "definition": "The International Organisation for Standardisation (ISO) is an independent, non-governmental international body comprising the national standards institutes of 167 countries, responsible for developing and publishing voluntary international standards across virtually every sector of industry, technology, and commerce. ISO standards are produced by technical committees composed of experts nominated by member bodies and are adopted through a consensus-based process requiring defined levels of national body approval. ISO standards span quality management, environmental management, information security, robotics, artificial intelligence, financial services, and hundreds of other domains. Published standards carry normative authority in many regulatory and procurement frameworks worldwide.",
  "domain": "governance",
  "maturity": "established",
  "subClassOf": [{"@id": "urn:ngm:class:standards-body", "label": "Standards Body"}],
  "relations": {
    "relatedTo": [
      {"@id": "urn:ngm:class:iso-standards", "label": "Iso Standards"},
      {"@id": "urn:ngm:class:technical-standard", "label": "Technical Standard"},
      {"@id": "urn:ngm:class:iso-iec", "label": "ISO/IEC"}
    ],
    "enables": [
      {"@id": "urn:ngm:class:conformity-assessment", "label": "Conformity Assessment"},
      {"@id": "urn:ngm:class:compliance-framework", "label": "Compliance Framework"},
      {"@id": "urn:ngm:class:interoperability-standard", "label": "Interoperability Standard"}
    ],
    "uses": [
      {"@id": "urn:ngm:class:iso-iec-27001", "label": "ISO/IEC 27001"},
      {"@id": "urn:ngm:class:iso-iec-42001", "label": "ISO IEC 42001"},
      {"@id": "urn:ngm:class:technical-standards", "label": "Technical Standards"}
    ]
  },
  "quality": 0.8
}
```

- ### Definition
  - ISO, the International Organisation for Standardisation, is the principal global [[Standards Body]] that develops and publishes voluntary [[Technical Standard]] documents used to ensure quality, safety, and [[Interoperability Standard]] across industries and national boundaries.
- ### Relationships
  - ISO produces its most technologically significant standards in joint effort with the International Electrotechnical Commission under the [[ISO/IEC]] banner—including [[ISO/IEC 27001]] for information security management and [[ISO IEC 42001]] for AI management systems. Published standards underpin [[Conformity Assessment]] schemes worldwide and provide the normative basis for [[Compliance Framework]] design across regulated sectors, whilst [[Iso Standards]] collectively constitute the reference corpus for [[Technical Standards]] adoption.
- ### Content
  - ISO was founded in 1947 in Geneva as the successor to ISA (International Federation of the National Standardizing Associations) and has since grown to encompass 167 national member bodies. It operates through approximately 800 technical committees and subcommittees, each responsible for a defined domain. Standards proceed through a lifecycle of Preliminary Work Item, Working Draft, Committee Draft, Draft International Standard, and final publication, with each stage requiring supermajority ballot approval from participating national bodies.

  - The organisation's output spans foundational management system standards—ISO 9001 for quality management, ISO 14001 for environmental management, ISO 45001 for occupational health and safety—that have become de facto requirements in global supply chains. The ISO High Level Structure (HLS) introduced in 2012 aligns the common elements of all management system standards, enabling integrated management approaches.

  - In information technology and AI, ISO's work is predominantly conducted through ISO/IEC JTC 1, the joint technical committee with the IEC. Subcommittee SC 42 focuses specifically on artificial intelligence, having produced ISO/IEC 42001 (AI management systems), ISO/IEC 23894 (AI risk management), and a growing library of AI vocabulary and assessment standards that are shaping regulatory frameworks including the EU AI Act.

  - ISO standards in robotics—particularly the ISO 10218 series for industrial robot safety and ISO 13482 for personal care robots—provide normative references for machinery directives and national safety legislation globally. Similarly, ISO 20022 has become the dominant financial messaging standard underpinning interbank payment infrastructure modernisation.

  - Participation in ISO is formally restricted to one national member body per country, though the actual standard-drafting work involves industrial consortia, academic institutions, and government agencies through their national body delegations. Observers including the WTO and UN agencies hold liaison status, embedding ISO standards within broader international trade and regulatory frameworks.
