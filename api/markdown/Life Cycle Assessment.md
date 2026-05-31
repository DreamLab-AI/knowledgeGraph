public:: true
alias:: LifeCycleAssessment

# life cycle assessment
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:08d117741bd674b49c39ca899f83ee83fc11d49940246ec4e1e11a0da01d47a0",
  "@type": "Page",
  "vc:slug": "life-cycle-assessment",
  "title": "life cycle assessment",
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
  "@id": "urn:ngm:class:life-cycle-assessment",
  "@type": "Class",
  "label": "Life Cycle Assessment",
  "definition": "Life Cycle Assessment (LCA) is a standardised, systematic methodology (ISO 14040/14044) for compiling and evaluating the inputs, outputs, and potential environmental impacts of a product system across all stages of its life cycle—from raw material acquisition through production, use, and end-of-life treatment. LCA quantifies a range of environmental impact categories including global warming potential (greenhouse gas emissions), acidification, eutrophication, water depletion, and land use, providing a comprehensive evidence base for comparing product alternatives and informing design for environment decisions. The results of LCA studies increasingly feed into ESG reporting, green finance due diligence, and supply chain transparency requirements.",
  "domain": "infrastructure",
  "subClassOf": [
    {
      "@id": "urn:ngm:class:infra-legal-and-regulatory",
      "label": "Legal and Regulatory"
    }
  ],
  "relations": {
    "requires": [
      {"@id": "urn:ngm:class:environmental-assessment", "label": "Environmental Assessment"}
    ],
    "enables": [
      {"@id": "urn:ngm:class:carbon-footprint-assessment", "label": "Carbon Footprint Assessment"},
      {"@id": "urn:ngm:class:environmental-sustainability", "label": "Environmental Sustainability"}
    ],
    "relatedTo": [
      {"@id": "urn:ngm:class:esg-reporting", "label": "ESG Reporting"},
      {"@id": "urn:ngm:class:supply-chain-traceability", "label": "Supply Chain Traceability"},
      {"@id": "urn:ngm:class:circular-economy", "label": "Circular Economy"}
    ]
  },
  "qualityScore": 0.75,
  "maturity": "emerging"
}
```


- ### Definition
  - Life Cycle Assessment (LCA) is a standardised, systematic methodology (ISO 14040/14044) for compiling and evaluating the inputs, outputs, and potential environmental impacts of a product system across all stages of its life cycle—from raw material acquisition through production, use, and end-of-life treatment. LCA quantifies a range of environmental impact categories including global warming potential (greenhouse gas emissions), acidification, eutrophication, water depletion, and land use, providing a comprehensive evidence base for comparing product alternatives and informing design for environment decisions. The results of LCA studies increasingly feed into ESG reporting, green finance due diligence, and supply chain transparency requirements.

- ### Semantic Classification
  - owl-class:: life-cycle-assessment:Life Cycle Assessment
  - owl-role:: Concept

- ### Relationships
  - requires [[Environmental Assessment]]
  - enables [[Carbon Footprint Assessment]]
  - enables [[Environmental Sustainability]]
  - relatedTo [[ESG Reporting]]
  - relatedTo [[Supply Chain Traceability]]
  - relatedTo [[Circular Economy]]

- ### Content
  - LCA methodology is structured into four phases as defined by ISO 14040 and 14044. The goal and scope definition phase establishes the functional unit (the basis for comparison, e.g. one tonne of product delivered), the system boundary (which life cycle stages are included), and the intended audience and use of the study. The inventory analysis phase (LCI) compiles mass and energy flows across the system boundary using process data, background datasets (ecoinvent, GaBi, SimaPro), and input-output tables. The impact assessment phase (LCIA) translates inventory flows into midpoint indicators (global warming potential, cumulative energy demand) and optionally endpoint indicators (damage to human health, ecosystem quality, resource availability) using characterisation factors from methods such as ReCiPe and CML.
  - The interpretation phase analyses results for sensitivity, uncertainty, and dominant contributions, enabling hotspot identification—the life cycle stages or processes responsible for the majority of environmental impact. Attribution LCA assigns impacts to a specific product based on current supply chain conditions, whereas consequential LCA models the broader systemic changes that would result from a decision.
  - LCA is required under several EU regulatory instruments: the Product Environmental Footprint (PEF) framework, the Ecodesign for Sustainable Products Regulation (ESPR), and sustainability declarations under the Construction Products Regulation. Supply chain traceability tools and blockchain-based supply chain platforms are being integrated with LCA databases to automate primary data collection and improve the accuracy of carbon footprint calculations across complex multi-tier supply chains.

- ### Provenance
  - sources::
  - migration-date:: 2026-05-19T00:00:00Z

- ### Provenance
  - sources::
  - migration-date:: 2026-05-19T00:00:00Z
