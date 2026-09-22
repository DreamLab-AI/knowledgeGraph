public:: true

# Power Purchase Agreement

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v1",
  "@id": "urn:visionflow:page:power-purchase-agreement",
  "@type": "Page",
  "title": "Power Purchase Agreement",
  "vc:slug": "power-purchase-agreement",
  "vc:public": true,
  "vc:schemaVersion": 2,
  "vc:outboundWikilinks": []
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:power-purchase-agreement",
  "@type": "Class",
  "label": "Power Purchase Agreement",
  "definition": "A Power Purchase Agreement (PPA) is a long-term contract between an electricity generator and a buyer that fixes the price, volume and delivery terms for electrical energy over a defined period. PPAs underpin the financing of generation assets, particularly renewable plants, by guaranteeing a stable revenue stream that de-risks capital investment. They allocate market, volume and curtailment risk between producer and offtaker and may be physical or virtual (financial).",
  "domain": "infrastructure",
  "maturity": "established",
  "subClassOf": [
    {
      "@id": "urn:ngm:class:power-systems",
      "label": "Power Systems"
    }
  ],
  "relations": {
    "partOf": [
      {
        "@id": "urn:ngm:class:power-systems",
        "label": "Power Systems"
      }
    ],
    "uses": [
      {
        "@id": "urn:ngm:class:renewable-energy",
        "label": "Renewable Energy"
      },
      {
        "@id": "urn:ngm:class:smart-grid",
        "label": "Smart Grid"
      }
    ],
    "requires": [
      {
        "@id": "urn:ngm:class:risk-management",
        "label": "Risk Management"
      }
    ],
    "supports": [
      {
        "@id": "urn:ngm:class:sustainability",
        "label": "Sustainability"
      },
      {
        "@id": "urn:ngm:class:demand-response",
        "label": "Demand Response"
      }
    ],
    "enables": [
      {
        "@id": "urn:ngm:class:renewable-energy",
        "label": "Renewable Energy"
      }
    ],
    "dependsOn": [
      {
        "@id": "urn:ngm:class:power-systems",
        "label": "Power Systems"
      }
    ],
    "relatedTo": [
      {
        "@id": "urn:ngm:class:compliance",
        "label": "Compliance"
      },
      {
        "@id": "urn:ngm:class:governance",
        "label": "Governance"
      }
    ],
    "hasPart": [
      {
        "@id": "urn:ngm:class:risk-management",
        "label": "Risk Management"
      }
    ],
    "contrastsWith": [
      {
        "@id": "urn:ngm:class:demand-response",
        "label": "Demand Response"
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
  - A long-term contract fixing price, volume and delivery terms for electricity, underpinning the financing of generation assets and renewable deployment.
  - Related: [[Power Systems]] [[Renewable Energy]] [[Risk Management]] [[Sustainability]]
- ### Overview
  - A PPA defines price, term, delivered volume and settlement mechanics between a generator and an offtaker.
  - Physical PPAs deliver actual electrons to the buyer; virtual (synthetic) PPAs settle the difference against a market reference price.
  - Corporate PPAs let large energy consumers procure renewable power directly, often to meet decarbonisation targets.
  - The contract's bankability allows developers to secure non-recourse project finance against guaranteed cash flows.
- ### Key aspects
  - Contract tenor: typically 10-25 years to match asset depreciation and debt amortisation.
  - Pricing structures: fixed, escalating, indexed or floor-and-collar arrangements.
  - Risk allocation: covers volume, curtailment, balancing and credit risk between the parties.
  - Settlement: pay-as-produced, baseload or shaped delivery profiles.
  - Additionality and renewable energy certificates that evidence environmental attributes.
- ### Applications
  - Financing utility-scale solar and wind farms through guaranteed offtake.
  - Corporate renewable procurement to satisfy net-zero and ESG commitments.
  - Hedging wholesale electricity price exposure for both producers and consumers.
  - Enabling merchant generation to reach financial close in liberalised markets.
- ### Relationships
  - partOf:: [[Power Systems]]
  - uses:: [[Renewable Energy]]
  - requires:: [[Risk Management]]
  - supports:: [[Sustainability]]
  - enables:: [[Renewable Energy]]
  - relatedTo:: [[Governance]]
- ### Provenance
  - updated:: 2026-06-15
  - attributedTo:: did:nostr:ontology-mesh
  - inferenceRule:: GapMaterialisation
