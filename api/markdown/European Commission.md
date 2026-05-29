public:: true

# european commission
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:e5112895b62ebd62591ee4115b806dd0a07cef8e2fa8891bbe7fa9a595884abe",
  "@type": "Page",
  "vc:slug": "european-commission",
  "title": "european commission",
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
  "@id": "urn:ngm:class:european-commission",
  "@type": "Class",
  "label": "European Commission",
  "definition": "The European Commission is the politically independent executive body of the European Union responsible for proposing legislation, implementing Council decisions, managing the EU budget, and upholding EU treaties and law across all member states. In the technology domain, it has initiated and co-authored major regulatory frameworks including the AI Act, the Data Governance Act, the Digital Markets Act, and the Digital Services Act, collectively constituting a comprehensive digital regulatory agenda. It also funds research through programmes such as Horizon Europe and coordinates AI standardisation mandates issued to CEN-CENELEC and ETSI.",
  "domain": "blockchain",
  "subClassOf": [
    {
      "@id": "urn:ngm:class:bc-governance-and-regulation",
      "label": "Blockchain Governance and Regulation"
    }
  ],
  "relations": {
    "enables": [
      {"@id": "urn:ngm:class:ai-regulation", "label": "AI Regulation"},
      {"@id": "urn:ngm:class:data-governance", "label": "Data Governance"}
    ],
    "supports": [
      {"@id": "urn:ngm:class:governance", "label": "Governance"},
      {"@id": "urn:ngm:class:regulatory-compliance", "label": "Regulatory Compliance"}
    ],
    "relatedTo": [
      {"@id": "urn:ngm:class:artificial-intelligence", "label": "Artificial Intelligence"}
    ]
  },
  "qualityScore": 0.75,
  "maturity": "emerging"
}
```


- ### Definition
  - The European Commission is the politically independent executive body of the European Union responsible for proposing legislation, implementing Council decisions, managing the EU budget, and upholding EU treaties and law across all member states. In the technology domain, it has initiated and co-authored major regulatory frameworks including the AI Act, the Data Governance Act, the Digital Markets Act, and the Digital Services Act, collectively constituting a comprehensive digital regulatory agenda. It also funds research through programmes such as Horizon Europe and coordinates AI standardisation mandates issued to CEN-CENELEC and ETSI.

- ### Semantic Classification
  - owl-class:: european-commission:European Commission
  - owl-role:: Concept

- ### Relationships
  - enables [[AI Regulation]]
  - enables [[Data Governance]]
  - supports [[Governance]]
  - supports [[Regulatory Compliance]]
  - relatedTo [[Artificial Intelligence]]

- ### Content
  - The European Commission shapes the global technology regulatory landscape through its legislative initiative power within the EU's ordinary legislative procedure, working in conjunction with the European Parliament and Council of the European Union. Its Directorate-General for Communications Networks, Content and Technology (DG CONNECT) leads digital policy, while DG GROW oversees product safety and standardisation, and DG COMP enforces competition law in digital markets.
  - The Commission's AI regulatory strategy follows a risk-based approach: the EU AI Act classifies AI applications into unacceptable-risk (banned), high-risk (strictly regulated), limited-risk (transparency obligations), and minimal-risk categories. High-risk systems—covering critical infrastructure, education, employment, essential services, law enforcement, and migration—must satisfy requirements for data quality, documentation, transparency, human oversight, robustness, accuracy, and cybersecurity. The Commission issues standardisation mandates to CEN-CENELEC and ETSI to develop harmonised technical standards that provide presumption of conformity with these requirements.
  - Beyond AI, the Commission's digital agenda encompasses the European Data Strategy, which aims to create a single European data space enabling cross-sector data sharing under the Data Governance Act and Data Act. Blockchain and distributed ledger technology feature in the European Blockchain Services Infrastructure (EBSI), a Commission-funded initiative delivering cross-border digital public services—including verifiable educational credentials and regulatory reporting—using blockchain rails across EU member states.

- ### Provenance
  - sources::
  - migration-date:: 2026-05-19T00:00:00Z
