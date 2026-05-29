public:: true

# legal compliance
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:6bf5ce8e077d1c9c815316dc352b51673785d7d0e424939ec224f7b6fd141b54",
  "@type": "Page",
  "vc:slug": "legal-compliance",
  "title": "legal compliance",
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
  "@id": "urn:ngm:class:legal-compliance",
  "@type": "Class",
  "label": "Legal Compliance",
  "definition": "Legal compliance in the context of AI systems encompasses the organisational processes, controls, and evidence required to demonstrate adherence to applicable legislation, regulatory requirements, technical standards, and contractual obligations across the full lifecycle of AI development, deployment, and operation. Key legal instruments include the EU AI Act (risk-based product safety regulation), the GDPR (lawful processing and data subject rights for personal data used in training and inference), sector-specific financial regulations, and product liability laws. Compliance obligations are operationalised through risk assessments, technical documentation, conformity procedures, and ongoing monitoring.",
  "domain": "artificial-intelligence",
  "subClassOf": [
    {
      "@id": "urn:ngm:class:ai-governance-and-ethics",
      "label": "AI Governance and Ethics"
    }
  ],
  "relations": {
    "requires": [
      {"@id": "urn:ngm:class:compliance-framework", "label": "Compliance Framework"},
      {"@id": "urn:ngm:class:risk-management", "label": "Risk Management"}
    ],
    "relatedTo": [
      {"@id": "urn:ngm:class:regulatory-compliance", "label": "Regulatory Compliance"},
      {"@id": "urn:ngm:class:ai-regulation", "label": "AI Regulation"},
      {"@id": "urn:ngm:class:data-protection", "label": "Data Protection"}
    ],
    "supports": [
      {"@id": "urn:ngm:class:responsible-ai", "label": "Responsible AI"}
    ]
  },
  "qualityScore": 0.75,
  "maturity": "emerging"
}
```


- ### Definition
  - Legal compliance in the context of AI systems encompasses the organisational processes, controls, and evidence required to demonstrate adherence to applicable legislation, regulatory requirements, technical standards, and contractual obligations across the full lifecycle of AI development, deployment, and operation. Key legal instruments include the EU AI Act (risk-based product safety regulation), the GDPR (lawful processing and data subject rights for personal data used in training and inference), sector-specific financial regulations, and product liability laws. Compliance obligations are operationalised through risk assessments, technical documentation, conformity procedures, and ongoing monitoring.

- ### Semantic Classification
  - owl-class:: legal-compliance:Legal Compliance
  - owl-role:: Concept

- ### Relationships
  - requires [[Compliance Framework]]
  - requires [[Risk Management]]
  - relatedTo [[Regulatory Compliance]]
  - relatedTo [[AI Regulation]]
  - relatedTo [[Data Protection]]
  - supports [[Responsible AI]]

- ### Content
  - Legal compliance for AI organisations operates across multiple overlapping regulatory layers. At the EU level, the AI Act classifies AI systems into prohibited, high-risk, limited-risk, and minimal-risk categories, imposing mandatory conformity assessments, technical documentation, and CE marking for high-risk systems before market placement. Simultaneously, the GDPR imposes data subject rights (access, erasure, portability), lawful basis requirements, and data protection impact assessment (DPIA) obligations when AI systems process personal data — which includes training datasets derived from web scraping or user interactions.
  - In financial services, AI-driven credit scoring, algorithmic trading, and fraud detection tools are subject to sector-specific obligations under MiFID II, the Consumer Credit Directive, and national banking prudential regulations, which require explainability, model documentation, and bias testing. In healthcare and medical devices, AI software may qualify as a medical device under the EU MDR or US FDA regulations, triggering clinical evaluation and post-market surveillance requirements.
  - Operational compliance programmes typically combine a legal framework mapping (identifying all applicable obligations by jurisdiction and product type), a technical controls library (data lineage, model cards, audit logs, bias metrics), and a governance structure with named roles (Data Protection Officer, AI Risk Officer). ISO/IEC 42001 and NIST AI RMF provide management system frameworks that structure these activities. Compliance monitoring tools and RegTech platforms automate evidence collection for ongoing demonstration of adherence.

- ### Provenance
  - sources::
  - migration-date:: 2026-05-19T00:00:00Z
