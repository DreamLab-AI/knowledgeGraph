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
  "quality": 0.8,
  "provenance": {
    "attributedTo": "did:nostr:ontology-mesh",
    "generatedAt": "2026-08-07T00:00:00Z",
    "inferenceRule": "ResearchAugment"
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

  - **Omnibus I finalised**: Directive (EU) 2026/470, published in the Official Journal on 26 February 2026 and in force from 18 March 2026, retains double materiality as the methodological core of the CSRD while cutting the number of in-scope entities by more than 80%; Member States must transpose it by 19 March 2027.
  - **Narrowed scope**: mandatory CSRD reporting now applies only to companies with more than 1,000 employees *and* net turnover above €450 million (both thresholds cumulative), with reporting obligations beginning FY2027 (reports in 2028); listed SMEs are removed from scope, and the earlier "Stop-the-Clock" Directive (EU) 2025/794 had already postponed the second and third waves by two years.
  - **Simplified ESRS**: following EFRAG's technical advice of 3 December 2025, mandatory ESRS datapoints fall by roughly 61% (from about 1,073 to about 320); the Commission adopted the revised ESRS Delegated Act in July 2026, expected in force on 10 November 2026 and mandatory from FY2027. Reasonable assurance has been dropped — only limited assurance remains — and the sector-specific standards mandate was deleted. The four-step double materiality assessment process itself is unchanged.
  - **Practice**: assessments typically produce a materiality matrix or IRO register signed off at board level; common weaknesses flagged by regulators and auditors include thin value-chain coverage and unevidenced stakeholder engagement.
  - **UK position**: the UK Sustainability Reporting Standards are ISSB-based (single materiality), so UK groups with EU operations frequently run a double-materiality process to satisfy both regimes.
  - **Tooling**: ESG software platforms now embed double-materiality workflows, and XBRL tagging of ESRS disclosures makes assessment outcomes machine-readable.

  **Sources**:
  - https://generationimpact.global/blog/omnibus-i-double-materiality/
  - https://commonwealthclimatelaw.org/publication/csrd-reporting-post-omnibus-i-what-directors-need-to-know-in-2026/
  - https://www.ey.com/content/dam/ey-unified-site/ey-com/en-gl/technical/csrd-technical-resources/documents/ey-gl-eu-sustainability-developments-v2-07-2026.pdf
  - https://dart.deloitte.com/USDART/home/publications/deloitte/heads-up/2026/eu-sustainability-reporting-omnibus-esrs-updates
