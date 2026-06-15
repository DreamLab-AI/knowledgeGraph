public:: true

# Economic Growth
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:economic-growth",
  "@type": "Page",
  "vc:slug": "economic-growth",
  "title": "Economic Growth",
  "vc:public": true,
  "vc:outboundWikilinks": [],
  "vc:schemaVersion": 2
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:economic-growth",
  "@type": "Class",
  "label": "Economic Growth",
  "definition": "Economic Growth is the increase over time in the value of goods and services produced by an economy, typically measured as the rise in real gross domestic product. It is driven by accumulation of capital, growth in the labour force, and improvements in productivity from technology and innovation. Sustained growth is a primary objective of economic policy and a frequently cited benefit of technology adoption.",
  "domain": "finance",
  "maturity": "established",
  "subClassOf": [{"@id": "urn:ngm:class:economics", "label": "Economics"}],
  "relations": {
    "hasPart": [
      {"@id": "urn:ngm:class:productivity-growth", "label": "Productivity Growth"},
      {"@id": "urn:ngm:class:capital-accumulation", "label": "Capital Accumulation"},
      {"@id": "urn:ngm:class:labour-force-growth", "label": "Labour Force Growth"}
    ],
    "requires": [
      {"@id": "urn:ngm:class:investment", "label": "Investment"},
      {"@id": "urn:ngm:class:institutional-framework", "label": "Institutional Framework"},
      {"@id": "urn:ngm:class:innovation", "label": "Innovation"}
    ],
    "enables": [
      {"@id": "urn:ngm:class:poverty-reduction", "label": "Poverty Reduction"},
      {"@id": "urn:ngm:class:fiscal-capacity", "label": "Fiscal Capacity"},
      {"@id": "urn:ngm:class:technological-diffusion", "label": "Technological Diffusion"}
    ],
    "dependsOn": [
      {"@id": "urn:ngm:class:total-factor-productivity", "label": "Total Factor Productivity"},
      {"@id": "urn:ngm:class:human-capital", "label": "Human Capital"},
      {"@id": "urn:ngm:class:infrastructure", "label": "Infrastructure"}
    ],
    "contrastsWith": [
      {"@id": "urn:ngm:class:economic-recession", "label": "Economic Recession"},
      {"@id": "urn:ngm:class:stagflation", "label": "Stagflation"}
    ],
    "bridgesTo": [
      {"@id": "urn:ngm:class:artificial-intelligence", "label": "Artificial Intelligence"},
      {"@id": "urn:ngm:class:automation", "label": "Automation"}
    ],
    "relatedTo": [
      {"@id": "urn:ngm:class:ai-adoption", "label": "AI Adoption"},
      {"@id": "urn:ngm:class:adoption-of-convergent-technologies", "label": "Adoption of Convergent Technologies"},
      {"@id": "urn:ngm:class:gross-domestic-product", "label": "Gross Domestic Product"},
      {"@id": "urn:ngm:class:monetary-policy", "label": "Monetary Policy"},
      {"@id": "urn:ngm:class:fiscal-policy", "label": "Fiscal Policy"},
      {"@id": "urn:ngm:class:trade-openness", "label": "Trade Openness"}
    ]
  },
  "sameAs": [
    {"@id": "urn:ngm:class:gdp-growth", "label": "GDP Growth"},
    {"@id": "urn:ngm:class:output-growth", "label": "Output Growth"}
  ],
  "quality": 0.72,
  "provenance": {
    "attributedTo": "did:nostr:ontology-mesh",
    "generatedAt": "2026-06-14T00:00:00Z",
    "inferenceRule": "RelationEnrichment"
  }
}
```

- ### Definition
  - Economic Growth is the sustained increase in an economy's real output, usually measured by real GDP. It is a key outcome to which [[AI Adoption]] and the [[Adoption of Convergent Technologies]] are expected to contribute through productivity gains.
- ### Content
  - Growth theory attributes long-run increases in output to capital deepening, labour-force expansion, and total-factor productivity driven by innovation. General-purpose technologies such as AI can raise productivity across sectors, though realised growth depends on diffusion, complementary investment, and institutional factors.
