public:: true

# Double Materiality
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:999dcbdeca6fb59f0c55b1b802fd1d9f370475c7545f7be2400b0bf7aa0e033e",
  "@type": "Page",
  "vc:slug": "double-materiality",
  "title": "Double Materiality",
  "vc:public": true,
  "vc:outboundWikilinks": [
    {
      "@id": "urn:visionflow:linked:materiality-assessment",
      "vc:label": "Materiality Assessment"
    },
    {
      "@id": "urn:visionflow:linked:corporate-sustainability-reporting",
      "vc:label": "Corporate Sustainability Reporting"
    },
    {
      "@id": "urn:visionflow:linked:corporate-sustainability-reporting-directive",
      "vc:label": "Corporate Sustainability Reporting Directive"
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
  "@id": "urn:ngm:class:double-materiality",
  "@type": "Class",
  "label": "Double Materiality",
  "definition": "A principle of sustainability reporting under which a topic must be disclosed if it is material from either of two perspectives: financial materiality, where sustainability matters create risks or opportunities that affect the company's cash flows and enterprise value, and impact materiality, where the company's own activities and value chain materially affect people or the environment. Adopted as the mandatory lens of the EU Corporate Sustainability Reporting Directive and its ESRS standards, it determines the scope of every disclosure.",
  "domain": "governance",
  "maturity": "established",
  "subClassOf": {
    "@id": "urn:ngm:class:materiality-assessment",
    "label": "Materiality Assessment"
  },
  "relations": {
    "partOf": [
      {
        "@id": "urn:ngm:class:corporate-sustainability-reporting",
        "label": "Corporate Sustainability Reporting"
      }
    ],
    "relatedTo": [
      {
        "@id": "urn:ngm:class:corporate-sustainability-reporting-directive",
        "label": "Corporate Sustainability Reporting Directive"
      },
      {
        "@id": "urn:ngm:class:esg-reporting",
        "label": "ESG Reporting"
      }
    ]
  },
  "quality": 0.7,
  "provenance": {
    "attributedTo": "did:nostr:ontology-mesh",
    "generatedAt": "2026-08-06T00:00:00Z",
    "inferenceRule": "SwarmRepair"
  }
}
```

- ### Definition
  - "A principle of sustainability reporting under which a topic must be disclosed if it is material from either of two perspectives: financial materiality, where sustainability matters create risks or opportunities that affect the company's cash flows and enterprise value, and impact materiality, where the company's own activities and value chain materially affect people or the environment. Adopted as the mandatory lens of the EU Corporate Sustainability Reporting Directive and its ESRS standards, it determines the scope of every disclosure."

- ### Semantic Classification
  - owl-class:: governance:DoubleMateriality
  - owl-role:: Concept

- ### Relationships
  - is-subclass-of:: [[Materiality Assessment]]
  - part-of:: [[Corporate Sustainability Reporting]]
  - related-to:: [[Corporate Sustainability Reporting Directive]]
  - related-to:: [[ESG Reporting]]

- ### Content

  ## Definition

  **Double materiality** extends the accounting concept of materiality — information is material if omitting or misstating it could influence users' decisions — into two directions at once. **Financial materiality** (the "outside-in" view) asks how sustainability matters affect the undertaking: climate transition risk to asset values, water scarcity to operations, carbon pricing to margins. **Impact materiality** (the "inside-out" view) asks how the undertaking affects the world: emissions, biodiversity loss, labour conditions in the supply chain. A topic is reportable if it is material from *either* perspective; the two often interact, as an impact (emissions) can mature into a financial risk (regulation, litigation, stranded assets).

  The concept was coined in the European Commission's 2019 guidelines on climate reporting and became legally binding through the [[Corporate Sustainability Reporting Directive]] (CSRD): the European Sustainability Reporting Standards (ESRS) require every in-scope company to perform a double [[Materiality Assessment]] as the gateway exercise that determines which of the topical standards (E1 climate through G1 business conduct) it must report against. ESRS 1 specifies the process — mapping the value chain, identifying actual and potential impacts, risks and opportunities (IROs), scoring them for severity, scale, irremediability, and likelihood, and engaging affected stakeholders — with the assessment itself subject to assurance.

  Double materiality is the principal fault line in global standard setting. The ISSB's IFRS S1/S2, favoured in the UK and many other jurisdictions, adopt single (financial) materiality on the theory that investor-relevant information is the reporting objective; the GRI standards have long embodied impact materiality. The EU's choice to mandate both makes CSRD the broadest regime, and interoperability mappings between ESRS, ISSB, and GRI are an ongoing effort.

  ## Current Landscape

  - **Regulatory status**: CSRD reporting began for the first wave of large EU companies in FY2024 reports; the 2025 "Omnibus" simplification package has narrowed scope and delayed later waves, but double materiality remains the core methodology.
  - **Practice**: assessments typically produce a materiality matrix or IRO register signed off at board level; common weaknesses flagged by regulators and auditors include thin value-chain coverage and unevidenced stakeholder engagement.
  - **UK position**: the UK Sustainability Reporting Standards are ISSB-based (single materiality), so UK groups with EU operations frequently run a double-materiality process to satisfy both regimes.
  - **Tooling**: ESG software platforms now embed double-materiality workflows, and XBRL tagging of ESRS disclosures makes assessment outcomes machine-readable.
