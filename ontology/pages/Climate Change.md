public:: true

# Climate Change

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v1",
  "@id": "urn:visionflow:page:climate-change",
  "@type": "Page",
  "title": "Climate Change",
  "vc:slug": "climate-change",
  "vc:public": true,
  "vc:schemaVersion": 2,
  "vc:outboundWikilinks": []
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:climate-change",
  "@type": "Class",
  "label": "Climate Change",
  "definition": "Climate change refers to long-term shifts in temperatures and weather patterns, driven predominantly since the industrial era by human emissions of greenhouse gases that trap heat in the atmosphere. Its impacts include rising sea levels, more frequent extreme weather, ecosystem disruption and threats to food, water and economic systems. Responses span mitigation (reducing emissions) and adaptation (managing unavoidable impacts), coordinated through policy frameworks such as the Paris Agreement.",
  "domain": "governance",
  "maturity": "mature",
  "subClassOf": [
    {
      "@id": "urn:ngm:class:sustainability",
      "label": "Sustainability"
    }
  ],
  "relations": {
    "subClassOf": [
      {
        "@id": "urn:ngm:class:sustainability",
        "label": "Sustainability"
      }
    ],
    "relatedTo": [
      {
        "@id": "urn:ngm:class:environmental-sustainability",
        "label": "Environmental Sustainability"
      },
      {
        "@id": "urn:ngm:class:climate-risk",
        "label": "Climate Risk"
      },
      {
        "@id": "urn:ngm:class:esg",
        "label": "ESG"
      }
    ],
    "dependsOn": [
      {
        "@id": "urn:ngm:class:greenhouse-gas-emissions",
        "label": "Greenhouse Gas Emissions"
      }
    ],
    "requires": [
      {
        "@id": "urn:ngm:class:climate-action",
        "label": "Climate Action"
      },
      {
        "@id": "urn:ngm:class:decarbonisation",
        "label": "Decarbonisation"
      }
    ],
    "enables": [
      {
        "@id": "urn:ngm:class:climate-risk",
        "label": "Climate Risk"
      }
    ],
    "supports": [
      {
        "@id": "urn:ngm:class:renewable-energy",
        "label": "Renewable Energy"
      }
    ],
    "standardizedBy": [
      {
        "@id": "urn:ngm:class:paris-agreement",
        "label": "Paris Agreement"
      }
    ],
    "bridgesTo": [
      {
        "@id": "urn:ngm:class:net-zero",
        "label": "Net Zero"
      },
      {
        "@id": "urn:ngm:class:carbon-offsetting",
        "label": "Carbon Offsetting"
      }
    ],
    "partOf": [
      {
        "@id": "urn:ngm:class:sustainability",
        "label": "Sustainability"
      }
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
  - Climate Change is a key concept in the governance domain.
  - Related foundational concepts: [[Sustainability]] [[Greenhouse Gas Emissions]] [[Climate Action]] [[Renewable Energy]] [[Climate Risk]].
  - Climate change refers to long-term shifts in temperatures and weather patterns, driven predominantly since the industrial era by human emissions of greenhouse gases that trap heat in the atmosphere. Its impacts include rising sea levels, more frequent extreme weather, ecosystem disruption and threats to food, water and economic systems. Responses span mitigation (reducing emissions) and adaptation (managing unavoidable impacts), coordinated through policy frameworks such as the Paris Agreement.
- ### Overview
  - The scientific consensus attributes observed warming to anthropogenic greenhouse gas concentrations, principally carbon dioxide from fossil fuels. Mitigation seeks to cut emissions toward net zero, while adaptation addresses impacts already in train. International coordination through the Paris Agreement frames national commitments and review cycles.
- ### Key aspects
  - Greenhouse gas accumulation and the enhanced greenhouse effect.
  - Physical impacts: warming, sea-level rise and extreme weather.
  - Mitigation through decarbonisation and renewable energy.
  - Adaptation and resilience to unavoidable impacts.
  - Policy frameworks, carbon markets and net-zero targets.
- ### Applications
  - Climate-risk assessment for finance and infrastructure.
  - Corporate ESG reporting and net-zero transition planning.
  - Energy-system decarbonisation and carbon offsetting.
  - Public policy and international climate negotiation.
- ### Relationships
  - subClassOf:: [[Sustainability]]
  - relatedTo:: [[Environmental Sustainability]]
  - relatedTo:: [[Climate Risk]]
  - relatedTo:: [[ESG]]
  - dependsOn:: [[Greenhouse Gas Emissions]]
  - requires:: [[Climate Action]]
  - requires:: [[Decarbonisation]]
  - enables:: [[Climate Risk]]
  - supports:: [[Renewable Energy]]
  - standardizedBy:: [[Paris Agreement]]
  - bridgesTo:: [[Net Zero]]
  - bridgesTo:: [[Carbon Offsetting]]
  - partOf:: [[Sustainability]]
- ### Provenance
  - attributedTo:: did:nostr:ontology-mesh
  - inferenceRule:: GapMaterialisation
  - quality:: 0.62
  - updated:: 2026-06-15
