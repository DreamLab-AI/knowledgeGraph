public:: true

# OT Cybersecurity Framework
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:630845811d53dc40fbe2c97977123e585e46c1fb1848db48fd49cd86b795f043",
  "@type": "Page",
  "vc:slug": "ot-cybersecurity-framework",
  "title": "OT Cybersecurity Framework",
  "vc:public": true,
  "vc:outboundWikilinks": [
    {
      "@id": "urn:visionflow:linked:cybersecurity-framework",
      "vc:label": "Cybersecurity Framework"
    },
    {
      "@id": "urn:visionflow:linked:iec-62443",
      "vc:label": "IEC 62443"
    },
    {
      "@id": "urn:visionflow:linked:operational-technology",
      "vc:label": "Operational Technology"
    },
    {
      "@id": "urn:visionflow:linked:scada",
      "vc:label": "SCADA"
    }
  ],
  "vc:schemaVersion": 2,
  "prov:wasAttributedTo": {
    "@id": "did:nostr:ontology-mesh"
  },
  "prov:generatedAtTime": {
    "@value": "2026-08-06T00:00:00Z",
    "@type": "xsd:dateTime"
  }
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:ot-cybersecurity-framework",
  "@type": "Class",
  "label": "OT Cybersecurity Framework",
  "definition": "An OT cybersecurity framework is a structured body of security requirements, zone-and-conduit models, maturity levels, and assurance processes designed specifically for operational technology — the industrial control systems, SCADA platforms, PLCs, and safety systems that actuate physical processes. Unlike generic IT cybersecurity frameworks, it prioritises availability and safety over confidentiality, accommodates decades-long asset lifecycles and legacy protocols, and assigns duties across asset owners, integrators, and product suppliers, with the IEC 62443 series as its canonical instantiation.",
  "domain": "security",
  "maturity": "established",
  "subClassOf": {
    "@id": "urn:ngm:class:cybersecurity-framework",
    "label": "Cybersecurity Framework"
  },
  "relations": {
    "hasPart": [
      {
        "@id": "urn:ngm:class:iec-62443",
        "label": "IEC 62443"
      }
    ],
    "uses": [
      {
        "@id": "urn:ngm:class:defence-in-depth",
        "label": "Defence in Depth"
      }
    ],
    "relatedTo": [
      {
        "@id": "urn:ngm:class:operational-technology",
        "label": "Operational Technology"
      },
      {
        "@id": "urn:ngm:class:scada",
        "label": "SCADA"
      },
      {
        "@id": "urn:ngm:class:network-security",
        "label": "Network Security"
      }
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
  - "An OT cybersecurity framework is a structured body of security requirements, zone-and-conduit models, maturity levels, and assurance processes designed specifically for operational technology — the industrial control systems, SCADA platforms, PLCs, and safety systems that actuate physical processes. Unlike generic IT cybersecurity frameworks, it prioritises availability and safety over confidentiality, accommodates decades-long asset lifecycles and legacy protocols, and assigns duties across asset owners, integrators, and product suppliers, with the IEC 62443 series as its canonical instantiation."

- ### Semantic Classification
  - owl-class:: security:OtCybersecurityFramework
  - owl-role:: Concept

- ### Relationships
  - is-subclass-of:: [[Cybersecurity Framework]]
  - has-part:: [[IEC 62443]]
  - uses:: [[Defence In Depth]]
  - related-to:: [[Operational Technology]], [[SCADA]]

- ### Content

  ## Definition

  An **OT cybersecurity framework** organises the protection of systems whose compromise has physical consequences: power grids, water treatment, manufacturing lines, rail signalling, and building automation. Its distinguishing premise is that operational technology inverts IT security priorities. Where enterprise frameworks order goals confidentiality–integrity–availability, OT frameworks put safety and availability first — a control loop that halts, or a safety instrumented system that is spoofed, can injure people and destroy plant. Controls must therefore be applied without interrupting continuous processes, patching windows may arrive once a year, and components routinely remain in service for twenty to forty years running protocols that predate authentication.

  Structurally, such frameworks combine several instruments. A segmentation model — zones of equivalent criticality connected by controlled conduits, layered over the Purdue reference hierarchy — bounds blast radius and formalises [[Defence In Depth]]. Graded security levels (in [[IEC 62443]], SL 1–4) match countermeasure strength to the capability of the anticipated adversary, from casual misuse to state-sponsored attack. Role-specific requirement sets assign obligations to asset owners (programme and policies), system integrators (secure design and commissioning), and product suppliers (secure development lifecycle and component requirements), so that assurance can be certified along the supply chain rather than asserted only at the operating site.

  The category is distinct from generic frameworks such as the NIST Cybersecurity Framework or ISO/IEC 27001, which govern information systems in general and treat industrial control as one profile among many. OT frameworks are increasingly referenced by regulation — the EU NIS2 Directive, the UK NCSC Cyber Assessment Framework for operators of essential services, and sectoral regimes such as NERC CIP for North American power utilities — making conformance a licensing and procurement condition rather than a voluntary posture.

  ## Current Landscape

  IEC 62443 has consolidated as the international reference, with certification schemes (ISASecure, IECEE CB) covering products, development processes, and integrated systems, and NIST SP 800-82 providing widely used implementation guidance alongside it. Recent regulatory developments have sharpened the assessment layer:

  - The **NCSC published Cyber Assessment Framework v4.0 on 6 August 2025** — the most significant revision since the CAF's 2018 introduction — adding contributing outcomes on Understanding Threat (A2.b) and Secure Software Development and Support (A4.b, covering SBOMs and code provenance), rewriting Objective C around proactive threat hunting, and adding expectations for visibility into AI and automated decision-making systems that support essential functions. Competent authorities set their own transition timelines from v3.2.
  - The **UK Cyber Security and Resilience Bill** is converging UK regulation on NIS2-equivalent standards, bringing managed service providers into scope, adopting a 24/72-hour incident reporting framework, and moving the CAF towards a statutory footing as the assessment basis for regulated operators.
  - In the EU, **NIS2 transposition and sectoral enforcement continued through 2025–2026**, with CAF/IEC 62443 mappings used to demonstrate coverage of Article 21's ten security measure areas; gaps most often cited are incident-reporting timelines, supply-chain depth, and board-level accountability.
  - Adoption pressure still comes from three directions — regulators extending critical-infrastructure duties, insurers pricing OT exposure, and accelerating IT/OT convergence (remote access, cloud historians, industrial IoT) that dissolves the air gaps older postures assumed. Current practice emphasises continuous asset inventory, monitoring tuned to industrial protocols, and secure-by-design procurement over perimeter defence alone.

  **Sources**:
  - https://www.ncsc.gov.uk/collection/cyber-assessment-framework
  - https://www.nccgroup.com/introducing-the-cyber-assessment-framework-4-an-updated-tool-for-uk-cyber-resilience/
  - https://www.surecloud.com/blog-hub/nis2-caf-v4-mapping
  - https://www.darktrace.com/blog/cyber-assessment-framework-v4-0-raises-the-bar-5-questions-every-security-team-should-ask-about-their-security-posture
