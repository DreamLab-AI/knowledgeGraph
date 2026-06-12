public:: true

# Trustworthy AI Framework
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:0a72e22a562d00428534737f59f5293271490addbdfb21dd8820d9bff67d2f33",
  "@type": "Page",
  "vc:slug": "trustworthy-ai-framework",
  "title": "Trustworthy AI Framework",
  "vc:public": true,
  "vc:outboundWikilinks": [
    {
      "@id": "urn:visionflow:linked:eu-hleg-ai",
      "vc:label": "EU HLEG AI"
    },
    {
      "@id": "urn:visionflow:linked:iso-iec-42001-2023",
      "vc:label": "ISO/IEC 42001:2023"
    },
    {
      "@id": "urn:visionflow:owl:class:aiethics-domain",
      "vc:label": "AIEthicsDomain"
    },
    {
      "@id": "urn:visionflow:owl:class:conceptual-layer",
      "vc:label": "ConceptualLayer"
    },
    {
      "@id": "urn:visionflow:owl:class:eu-ai-act",
      "vc:label": "EU AI Act"
    }
  ],
  "vc:schemaVersion": 2,
  "vc:legacyProperties": [
    {
      "vc:key": "legacy-term-id",
      "vc:value": "AI-0407"
    },
    {
      "vc:key": "preferred-term",
      "vc:value": "Trustworthy AI Framework"
    }
  ],
  "prov:wasAttributedTo": {
    "@id": "did:nostr:jjohare"
  },
  "prov:generatedAtTime": {
    "@value": "2026-05-18T07:12:05Z",
    "@type": "xsd:dateTime"
  }
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:trustworthy-ai-framework",
  "@type": "Class",
  "label": "Trustworthy AI Framework",
  "definition": "Comprehensive governance and standards framework establishing principles, requirements, and assessment processes to ensure AI systems are lawful, ethical, and technically robust throughout their lifecycle. Defined by the EU High-Level Expert Group on AI and formalised in the EU AI Act, it implements a risk-based approach with seven trustworthiness dimensions covering human oversight, safety, privacy, transparency, fairness, societal wellbeing, and accountability.",
  "domain": "artificial-intelligence",
  "maturity": "established",
  "subClassOf": [
    {
      "@id": "urn:ngm:class:ai-governance-and-ethics",
      "label": "AI Governance and Ethics"
    }
  ],
  "relations": {
    "hasPart": [
      {"@id": "urn:ngm:class:ai-safety", "label": "AI Safety"},
      {"@id": "urn:ngm:class:explainability", "label": "Explainability"},
      {"@id": "urn:ngm:class:accountability", "label": "Accountability"},
      {"@id": "urn:ngm:class:conformity-assessment", "label": "Conformity Assessment"},
      {"@id": "urn:ngm:class:high-risk-ai-system", "label": "High Risk AI System"}
    ],
    "relatedTo": [
      {"@id": "urn:ngm:class:ai-governance", "label": "AI Governance"},
      {"@id": "urn:ngm:class:ai-governance-framework", "label": "AI Governance Framework"},
      {"@id": "urn:ngm:class:responsible-ai", "label": "Responsible AI"},
      {"@id": "urn:ngm:class:ai-ethics", "label": "AI Ethics"},
      {"@id": "urn:ngm:class:ai-regulation", "label": "AI Regulation"},
      {"@id": "urn:ngm:class:trustworthy-ai", "label": "Trustworthy AI"}
    ],
    "requires": [
      {"@id": "urn:ngm:class:ai-audit", "label": "AI Audit"},
      {"@id": "urn:ngm:class:risk-assessment", "label": "Risk Assessment"}
    ],
    "standardizedBy": [
      {"@id": "urn:ngm:class:ai-governance-principle", "label": "Ai Governance Principle"}
    ]
  },
  "quality": 0.8,
  "provenance": {
    "attributedTo": "did:nostr:lcr-swarm",
    "generatedAt": "2026-05-18T07:12:05Z",
    "inferenceRule": "R5DomainRootFallback"
  }
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:annotation:link-resolutions:trustworthy-ai-framework:776c802a9fc9",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:0a72e22a562d00428534737f59f5293271490addbdfb21dd8820d9bff67d2f33"
  },
  "vc:resolutions": [
    {
      "raw": "[[EU HLEG AI]]",
      "resolved": "urn:visionflow:linked:eu-hleg-ai",
      "kind": "StubLink"
    },
    {
      "raw": "[[ISO/IEC 42001:2023]]",
      "resolved": "urn:visionflow:linked:iso-iec-42001-2023",
      "kind": "StubLink"
    },
    {
      "raw": "[[AIEthicsDomain]]",
      "resolved": "urn:visionflow:owl:class:aiethics-domain",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[ConceptualLayer]]",
      "resolved": "urn:visionflow:owl:class:conceptual-layer",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[EU AI Act Regulatory Instrument]]",
      "resolved": "urn:visionflow:owl:class:eu-ai-act",
      "kind": "ResolvedLink"
    }
  ],
  "prov:wasAttributedTo": {
    "@id": "did:nostr:lcr-swarm"
  },
  "prov:generatedAtTime": {
    "@value": "2026-05-18T07:12:05Z",
    "@type": "xsd:dateTime"
  }
}
```


- ### Definition
  - Trustworthy AI Framework is a comprehensive governance and standards framework establishing principles, requirements, and assessment processes to ensure AI systems are lawful, ethical, and robust throughout their lifecycle, protecting fundamental rights while enabling beneficial innovation. Developed primarily by the EU High-Level Expert Group on AI (2019) and formalized in the EU AI Act (2024), this framework defines trustworthiness through seven key dimensions: human agency and oversight (preserving meaningful human control), technical robustness and safety (ensuring reliable and secure performance), privacy and data governance (protecting personal information and data rights), transparency and explainability (enabling understanding of system operation and decisions), diversity non-discrimination and fairness (ensuring equitable treatment across demographic groups), societal and environmental wellbeing (considering broader impacts on communities and sustainability), and accountability (establishing clear responsibility and redress mechanisms). The framework implements a risk-based approach categorizing AI systems by impact level (unacceptable risk, high risk, limited risk, minimal risk) with corresponding governance requirements, mandates conformity assessment and certification for high-risk applications, requires documented compliance evidence including technical documentation and impact assessments, and aligns with international standards including ISO/IEC 42001 AI management systems and IEEE ethically aligned design principles. Implementation establishes organizational structures spanning board-level oversight committees, management-level governance officers, and operational-level development teams, while addressing practical challenges including resource constraints for SMEs, framework fragmentation across jurisdictions, dynamic technology evolution, and measurement difficulties for abstract trustworthiness criteria.

- ### Semantic Classification
  - owl-class:: artificial-intelligence:TrustworthyAIFramework
  - owl-role:: Process
  - owl-inferred:: ai:VirtualProcess
  - belongs-to-domain:: [[AIEthicsDomain]]
  - implemented-in-layer:: [[ConceptualLayer]]

- ### Relationships
  - <!-- No relationships defined -->

- ### Content
  Trustworthy AI Framework — content pending enrichment.

- ### Provenance
  - sources:: [[EU HLEG AI]], [[EU AI Act Regulatory Instrument]], [[ISO/IEC 42001:2023]]
  - migration-date:: 2026-04-26T00:00:00Z
