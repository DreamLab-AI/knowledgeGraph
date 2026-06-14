public:: true

# Sustainable Development Goals
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:sustainable-development-goals",
  "@type": "Page",
  "vc:slug": "sustainable-development-goals",
  "title": "Sustainable Development Goals",
  "vc:public": true,
  "vc:outboundWikilinks": [],
  "vc:schemaVersion": 2
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:sustainable-development-goals",
  "@type": "Class",
  "label": "Sustainable Development Goals",
  "definition": "The Sustainable Development Goals (SDGs) are a set of 17 interlinked global goals adopted by all United Nations member states in 2015 as part of the 2030 Agenda for Sustainable Development, spanning the elimination of poverty, zero hunger, quality education, gender equality, clean energy, decent work, reduced inequalities, climate action, and partnerships for implementation. Each goal is operationalised through targets and indicators that define measurable progress benchmarks, providing a shared framework for national governments, international organisations, civil society, and the private sector to align strategies and report progress. The SDGs extend and deepen the Millennium Development Goals, recognising that sustainable development requires integrated action across social, economic, and environmental dimensions simultaneously.",
  "domain": "governance",
  "maturity": "established",
  "subClassOf": [{"@id": "urn:ngm:class:sustainable-development", "label": "Sustainable Development"}],
  "relations": {
    "hasPart": [
      {"@id": "urn:ngm:class:sdg-targets-and-indicators", "label": "SDG Targets and Indicators"},
      {"@id": "urn:ngm:class:voluntary-national-reviews", "label": "Voluntary National Reviews"},
      {"@id": "urn:ngm:class:high-level-political-forum", "label": "High-Level Political Forum"}
    ],
    "partOf": [
      {"@id": "urn:ngm:class:2030-agenda-for-sustainable-development", "label": "2030 Agenda for Sustainable Development"},
      {"@id": "urn:ngm:class:un-global-governance-framework", "label": "UN Global Governance Framework"}
    ],
    "requires": [
      {"@id": "urn:ngm:class:sustainability-reporting", "label": "Sustainability Reporting"},
      {"@id": "urn:ngm:class:environmental-sustainability", "label": "Environmental Sustainability"},
      {"@id": "urn:ngm:class:multilateral-cooperation", "label": "Multilateral Cooperation"},
      {"@id": "urn:ngm:class:official-development-assistance", "label": "Official Development Assistance"}
    ],
    "enables": [
      {"@id": "urn:ngm:class:esg-reporting", "label": "ESG Reporting"},
      {"@id": "urn:ngm:class:carbon-accounting", "label": "Carbon Accounting"},
      {"@id": "urn:ngm:class:impact-investing", "label": "Impact Investing"},
      {"@id": "urn:ngm:class:green-finance", "label": "Green Finance"}
    ],
    "dependsOn": [
      {"@id": "urn:ngm:class:national-statistical-systems", "label": "National Statistical Systems"},
      {"@id": "urn:ngm:class:technology-facilitation-mechanism", "label": "Technology Facilitation Mechanism"}
    ],
    "implements": [
      {"@id": "urn:ngm:class:paris-agreement", "label": "Paris Agreement"},
      {"@id": "urn:ngm:class:addis-ababa-action-agenda", "label": "Addis Ababa Action Agenda"}
    ],
    "supports": [
      {"@id": "urn:ngm:class:climate-action", "label": "Climate Action"},
      {"@id": "urn:ngm:class:poverty-reduction", "label": "Poverty Reduction"}
    ],
    "standardizedBy": [
      {"@id": "urn:ngm:class:united-nations", "label": "United Nations"},
      {"@id": "urn:ngm:class:un-statistical-commission", "label": "UN Statistical Commission"}
    ],
    "contrastsWith": [
      {"@id": "urn:ngm:class:millennium-development-goals", "label": "Millennium Development Goals"}
    ],
    "bridgesTo": [
      {"@id": "urn:ngm:class:artificial-intelligence-for-development", "label": "Artificial Intelligence for Development"},
      {"@id": "urn:ngm:class:blockchain-governance", "label": "Blockchain Governance"}
    ],
    "relatedTo": [
      {"@id": "urn:ngm:class:esg-investing", "label": "ESG Investing"},
      {"@id": "urn:ngm:class:global-inequality", "label": "Global Inequality"},
      {"@id": "urn:ngm:class:environmental-standards", "label": "Environmental Standards"},
      {"@id": "urn:ngm:class:societal-and-environmental-wellbeing", "label": "Societal and Environmental Wellbeing"}
    ]
  },
  "sameAs": [
    {"@id": "urn:ngm:class:sdgs", "label": "SDGs"},
    {"@id": "urn:ngm:class:global-goals", "label": "Global Goals"}
  ],
  "quality": 0.75,
  "provenance": {
    "attributedTo": "did:nostr:ontology-mesh",
    "generatedAt": "2026-06-14T00:00:00Z",
    "inferenceRule": "RelationEnrichment"
  }
}
```

- ### Definition
  - The Sustainable Development Goals are the UN's 17 integrated global objectives for the 2030 Agenda, requiring [[Sustainability Reporting]] and [[Environmental Sustainability]] commitments from all member states, and enabling alignment of [[ESG Reporting]] and [[Carbon Accounting]] frameworks with a shared normative reference.

- ### Relationships
  - The SDGs require [[Sustainability Reporting]] to track progress and [[Environmental Sustainability]] commitments as their environmental pillar. They enable [[ESG Reporting]] frameworks by providing the normative goals against which corporate environmental and social performance is assessed, and align with [[Carbon Accounting]] methodologies for measuring progress toward SDG 13 (Climate Action). They relate to [[ESG Investing]] markets that use SDG alignment as an investment screening criterion, to [[Global Inequality]] challenges addressed by SDGs 1 and 10, to [[Environmental Standards]] that operationalise SDG 15, and to the overarching concept of [[Societal and Environmental Wellbeing]].

- ### Content
  - The Sustainable Development Goals were adopted in September 2015 by 193 UN member states as the centrepiece of the 2030 Agenda for Sustainable Development. They replaced the Millennium Development Goals, which ran from 2000 to 2015 and focused primarily on reducing extreme poverty in developing countries. The SDGs broadened the scope dramatically: all countries—not just developing ones—have responsibilities, and the goals address structural drivers of unsustainability including consumption patterns, institutional quality, and inequality, not merely outcomes such as poverty headcounts.

  - The 17 goals are supported by 169 targets and 231 unique indicators, creating a detailed monitoring framework. The UN Statistical Commission oversees indicator methodology, and countries report progress through Voluntary National Reviews submitted to the High-Level Political Forum. The indicator framework has driven substantial investment in national statistical capacity, particularly in data systems that can disaggregate outcomes by sex, age, income, geography, and other equity dimensions to ensure that progress averages do not mask persistent gaps for marginalised populations.

  - Technology has become central to SDG implementation strategies. Digital infrastructure, AI applications, blockchain-based governance tools, and clean energy technologies are enablers across multiple goals simultaneously. SDG 9 (Industry, Innovation and Infrastructure) explicitly recognises the role of technology, and the Technology Facilitation Mechanism coordinates international technology transfer and capacity building. However, the digital divide risks exacerbating rather than closing inequalities if technology deployment is not accompanied by equity-focused access policies.

  - Corporate reporting has been significantly shaped by the SDGs. [[ESG Reporting]] frameworks—the GRI, SASB, and the TCFD—have aligned their disclosure requirements to SDG targets, allowing investors to assess which SDGs a company's activities support or undermine. [[ESG Investing]] strategies increasingly screen portfolios for SDG alignment, directing capital toward enterprises whose business models contribute to the goals. This alignment creates incentives for companies to measure and reduce their negative externalities and to develop products and services that generate positive SDG outcomes.
