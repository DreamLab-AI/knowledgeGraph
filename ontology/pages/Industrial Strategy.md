public:: true

# Industrial Strategy
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:82ff4bd9211832fc00c2bdba61e054531b840833ddbe596d4e731780eb061856",
  "@type": "Page",
  "vc:slug": "industrial-strategy",
  "title": "Industrial Strategy",
  "vc:public": true,
  "vc:outboundWikilinks": [
    {
      "@id": "urn:visionflow:linked:public-policy",
      "vc:label": "Public Policy"
    },
    {
      "@id": "urn:visionflow:linked:ai-investment",
      "vc:label": "AI Investment"
    },
    {
      "@id": "urn:visionflow:linked:national-ai-strategy",
      "vc:label": "National Ai Strategy"
    },
    {
      "@id": "urn:visionflow:linked:economic-growth",
      "vc:label": "Economic Growth"
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
  "@id": "urn:ngm:class:industrial-strategy",
  "@type": "Class",
  "label": "Industrial Strategy",
  "definition": "The UK government's long-term policy framework for shaping the structure of the national economy through targeted support for priority sectors, exemplified by the 2017 Industrial Strategy white paper and the 2025 Modern Industrial Strategy, which designate growth-driving sectors — including digital technologies and artificial intelligence — for coordinated investment, skills development, regulatory reform, and public procurement.",
  "domain": "governance",
  "maturity": "established",
  "subClassOf": {
    "@id": "urn:ngm:class:public-policy",
    "label": "Public Policy"
  },
  "relations": {
    "enables": [
      {
        "@id": "urn:ngm:class:ai-investment",
        "label": "AI Investment"
      },
      {
        "@id": "urn:ngm:class:economic-growth",
        "label": "Economic Growth"
      }
    ],
    "relatedTo": [
      {
        "@id": "urn:ngm:class:national-ai-strategy",
        "label": "National AI Strategy"
      },
      {
        "@id": "urn:ngm:class:uk-national-ai-strategy",
        "label": "UK National AI Strategy"
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
  - "The UK government's long-term policy framework for shaping the structure of the national economy through targeted support for priority sectors, exemplified by the 2017 Industrial Strategy white paper and the 2025 Modern Industrial Strategy, which designate growth-driving sectors — including digital technologies and artificial intelligence — for coordinated investment, skills development, regulatory reform, and public procurement."

- ### Semantic Classification
  - owl-class:: governance:IndustrialStrategy
  - owl-role:: Concept

- ### Relationships
  - is-subclass-of:: [[Public Policy]]
  - enables:: [[AI Investment]]
  - related-to:: [[National Ai Strategy]]
  - enables:: [[Economic Growth]]

- ### Content

  ## Definition

  **Industrial Strategy**, in the UK policy context, is the government's deliberate, sector-targeted approach to shaping the economy rather than leaving industrial structure entirely to market forces. It bundles public investment, skills programmes, regulatory reform, procurement, and place-based interventions behind a set of named priority sectors, on the theory that co-ordinated state action can crowd in private capital and lift productivity.

  The modern lineage runs from the 2017 *Industrial Strategy* white paper (with its "Grand Challenges", the first of which was artificial intelligence and the data-driven economy, and its AI Sector Deal committing roughly £1 billion of combined public and private funding), through its 2021 replacement by the "Plan for Growth", to the 2025 *Modern Industrial Strategy*, which names eight growth-driving sectors — including digital and technologies, advanced manufacturing, and clean energy — each with a dedicated sector plan.

  For the AI economy the Industrial Strategy is the umbrella under which much UK [[AI Investment]] is organised: compute infrastructure commitments, AI Growth Zones, research funding through UKRI, and skills pipelines all trace budget lines and political mandate back to it. It is distinct from, but interlocking with, the [[National Ai Strategy]]: the AI strategy sets AI-specific ambitions, while the Industrial Strategy positions AI as one lever among several for national [[Economic Growth]].

  ## Current Landscape

  The 2025 Modern Industrial Strategy marked a return to explicit sector targeting after a period in which the term had fallen out of official favour. Its Digital and Technologies Sector Plan aligns with the AI Opportunities Action Plan (January 2025), which committed to expanding sovereign compute capacity twenty-fold by 2030, establishing AI Growth Zones with accelerated planning for data centres, and embedding AI adoption across public services.

  Critics note the recurring UK pattern of strategy churn — each administration rebrands or restructures its predecessor's framework, weakening the long-term certainty that industrial policy is supposed to provide. Supporters point to genuine continuity in AI: sustained funding for the Alan Turing Institute, catapult centres, and compute programmes has survived successive relabellings. Internationally, the strategy competes with the US CHIPS and Science Act and the EU's Green Deal Industrial Plan in an era of renewed state intervention in technology supply chains.
