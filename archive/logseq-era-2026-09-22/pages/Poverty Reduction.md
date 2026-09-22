public:: true

# Poverty Reduction

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v1",
  "@id": "urn:visionflow:page:poverty-reduction",
  "@type": "Page",
  "title": "Poverty Reduction",
  "vc:slug": "poverty-reduction",
  "vc:public": true,
  "vc:schemaVersion": 2,
  "vc:outboundWikilinks": []
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:poverty-reduction",
  "@type": "Class",
  "label": "Poverty Reduction",
  "definition": "Poverty Reduction encompasses the policies, programmes, and structural changes aimed at decreasing the proportion of individuals living below nationally or internationally defined poverty thresholds, improving access to essential goods, services, and economic opportunities. Approaches span conditional cash transfer schemes, microfinance, labour market reforms, progressive taxation, and targeted public service delivery. It is central to the United Nations Sustainable Development Goals (SDGs), most directly SDG-1 (No Poverty) and SDG-10 (Reduced Inequalities). Successful poverty reduction typically requires complementary progress in health, education, infrastructure, and governance quality.",
  "domain": "finance",
  "maturity": "mature",
  "subClassOf": [{"@id": "urn:ngm:class:sustainable-development", "label": "Sustainable Development"}],
  "relations": {
    "supports": [
      {"@id": "urn:ngm:class:financial-inclusion", "label": "Financial Inclusion"},
      {"@id": "urn:ngm:class:sustainable-development-goals", "label": "Sustainable Development Goals"},
      {"@id": "urn:ngm:class:economic-growth", "label": "Economic Growth"}
    ],
    "enables": [
      {"@id": "urn:ngm:class:financial-inclusion", "label": "Financial Inclusion"},
      {"@id": "urn:ngm:class:economic-participation", "label": "Economic Participation"},
      {"@id": "urn:ngm:class:economic-exchange", "label": "Economic Exchange"}
    ],
    "dependsOn": [
      {"@id": "urn:ngm:class:economic-governance", "label": "Economic Governance"},
      {"@id": "urn:ngm:class:economic-model", "label": "Economic Model"}
    ],
    "relatedTo": [
      {"@id": "urn:ngm:class:microeconomics", "label": "Microeconomics"},
      {"@id": "urn:ngm:class:macroeconomics", "label": "Macroeconomics"},
      {"@id": "urn:ngm:class:institutional-economics", "label": "Institutional Economics"},
      {"@id": "urn:ngm:class:economics", "label": "Economics"}
    ],
    "requires": [
      {"@id": "urn:ngm:class:economic-mechanism", "label": "Economic Mechanism"},
      {"@id": "urn:ngm:class:policy", "label": "Policy"}
    ],
    "hasPart": [
      {"@id": "urn:ngm:class:economic-layer", "label": "Economic Layer"},
      {"@id": "urn:ngm:class:economic-parameters", "label": "Economic Parameters"}
    ],
    "bridgesTo": [
      {"@id": "urn:ngm:class:blockchain-economics", "label": "Blockchain Economics"},
      {"@id": "urn:ngm:class:social-impact", "label": "Social Impact"}
    ],
    "contrastsWith": [
      {"@id": "urn:ngm:class:economic-security", "label": "Economic Security"}
    ]
  },
  "sameAs": [],
  "quality": 0.62,
  "provenance": {
    "attributedTo": "did:nostr:ontology-mesh",
    "generatedAt": "2026-06-15T00:00:00Z",
    "inferenceRule": "GapMaterialisation"
  }
}
```

- ### Definition
  - [[Poverty Reduction]] is the overarching societal goal and associated suite of policy interventions that lower the incidence and severity of poverty within populations.
  - It is anchored institutionally within the [[Sustainable Development Goals]] framework and operationalised through [[Financial Inclusion]], labour market policies, and social protection systems.
  - Sustainable poverty reduction requires not only income increases but also improvements in human capital, [[Economic Participation]], and institutional quality.

- ### Overview
  - Global poverty (measured at the World Bank's international poverty line) has declined markedly since 1990, driven primarily by economic growth in East and South Asia.
  - Strategies include universal basic income pilots, conditional cash transfers, microfinance, land reform, and technology-enabled public service delivery.
  - [[Financial Inclusion]] is recognised as a key lever, enabling the unbanked to save, borrow, and insure against shocks.

- ### Key aspects
  - **Income dimension**: raising earnings through employment growth, wage floors, and skills development.
  - **Capability dimension**: Amartya Sen's capabilities approach emphasising health, education, and agency.
  - **Social protection**: safety nets such as food assistance, unemployment insurance, and disability support.
  - **Structural transformation**: shifting from subsistence agriculture to diversified industrial and service economies.
  - **Technology role**: mobile banking, digital IDs, and precision agriculture expand access at lower cost.

- ### Mechanisms
  - Conditional cash transfers link income support to schooling and health check attendance, building human capital simultaneously.
  - [[Microeconomics]] of poverty traps explains why asset redistribution or one-time large transfers can produce durable exits from poverty.
  - [[Institutional Economics]] identifies property rights, rule of law, and contract enforcement as foundational to sustained poverty reduction.

- ### Applications
  - National social protection programmes (BRAC, Bolsa Família, NREGA) targeting chronically poor households.
  - Multilateral development bank lending portfolios aligned with [[Sustainable Development Goals]].
  - Blockchain-enabled conditional aid distribution with transparent audit trails.
  - AI-driven targeting of social transfers to eligible beneficiaries.

- ### Relationships
  - supports:: [[Financial Inclusion]], [[Sustainable Development Goals]], [[Economic Growth]]
  - enables:: [[Financial Inclusion]], [[Economic Participation]], [[Economic Exchange]]
  - dependsOn:: [[Economic Governance]], [[Economic Model]]
  - relatedTo:: [[Microeconomics]], [[Macroeconomics]], [[Institutional Economics]], [[Economics]]
  - requires:: [[Economic Mechanism]], [[Policy]]
  - hasPart:: [[Economic Layer]], [[Economic Parameters]]
  - bridgesTo:: [[Blockchain Economics]], [[Social Impact]]
  - contrastsWith:: [[Economic Security]]

- ### Provenance
  - updated:: 2026-06-15
