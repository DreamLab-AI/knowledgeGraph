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
  "definition": "Life Cycle Assessment (LCA) is a standardised, systematic methodology governed by ISO 14040 and ISO 14044 for compiling and evaluating the inputs, outputs, and potential environmental impacts of a product system across every stage of its life cycle — from raw material extraction through manufacturing, distribution, use, and end-of-life treatment. The methodology quantifies a broad range of environmental impact categories including global warming potential, acidification, eutrophication, water depletion, particulate matter formation, and land use, translating mass and energy inventory flows into midpoint and endpoint indicators via characterisation factor methods such as ReCiPe and CML. LCA provides a rigorous comparative evidence base for eco-design decisions, environmental product declarations, and regulatory compliance, and its scope has expanded to encompass social LCA (S-LCA) and life cycle costing (LCC) within a broader life cycle sustainability assessment framework.",
  "domain": "supply-chain",
  "maturity": "established",
  "subClassOf": [
    {
      "@id": "urn:ngm:class:environmental-assessment",
      "label": "Environmental Assessment"
    }
  ],
  "sameAs": [
    {
      "@id": "urn:ngm:class:lca",
      "label": "LCA"
    },
    {
      "@id": "urn:ngm:class:life-cycle-analysis",
      "label": "Life Cycle Analysis"
    },
    {
      "@id": "urn:ngm:class:cradle-to-grave-analysis",
      "label": "Cradle-to-Grave Analysis"
    }
  ],
  "relations": {
    "hasPart": [
      {
        "@id": "urn:ngm:class:scope-definition",
        "label": "Goal and Scope Definition"
      }
    ],
    "enables": [
      {
        "@id": "urn:ngm:class:carbon-footprint-assessment",
        "label": "Carbon Footprint Assessment"
      },
      {
        "@id": "urn:ngm:class:environmental-sustainability",
        "label": "Environmental Sustainability"
      }
    ],
    "uses": [
      {
        "@id": "urn:ngm:class:material-flow-analysis",
        "label": "Material Flow Analysis"
      }
    ],
    "standardizedBy": [
      {
        "@id": "urn:ngm:class:iso-14040",
        "label": "ISO 14040"
      },
      {
        "@id": "urn:ngm:class:iso-14044",
        "label": "ISO 14044"
      }
    ],
    "supports": [
      {
        "@id": "urn:ngm:class:esg-reporting",
        "label": "ESG Reporting"
      },
      {
        "@id": "urn:ngm:class:circular-economy",
        "label": "Circular Economy"
      },
      {
        "@id": "urn:ngm:class:scope-3-emissions",
        "label": "Scope 3 Emissions"
      }
    ],
    "relatedTo": [
      {
        "@id": "urn:ngm:class:supply-chain-traceability",
        "label": "Supply Chain Traceability"
      },
      {
        "@id": "urn:ngm:class:environmental-assessment",
        "label": "Environmental Impact Assessment"
      },
      {
        "@id": "urn:ngm:class:carbon-accounting",
        "label": "Carbon Accounting"
      }
    ],
    "bridgesTo": [
      {
        "@id": "urn:ngm:class:digital-product-passport",
        "label": "Digital Product Passport"
      },
      {
        "@id": "urn:ngm:class:blockchain-provenance",
        "label": "Blockchain Provenance"
      },
      {
        "@id": "urn:ngm:class:industrial-io-t",
        "label": "Industrial Internet of Things"
      }
    ],
    "contrastsWith": [
      {
        "@id": "urn:ngm:class:environmental-assessment",
        "label": "Environmental Impact Assessment"
      },
      {
        "@id": "urn:ngm:class:material-flow-analysis",
        "label": "Material Flow Analysis"
      }
    ]
  },
  "quality": 0.72,
  "provenance": {
    "attributedTo": "did:nostr:ontology-mesh",
    "generatedAt": "2026-06-13T00:00:00Z",
    "inferenceRule": "ManualEnrichment"
  }
}
```

- ### Definition
  - Life Cycle Assessment (LCA) is a standardised, systematic methodology governed by [[ISO 14040]] and [[ISO 14044]] for compiling and evaluating the inputs, outputs, and potential environmental impacts of a product system across its entire life cycle — from raw material extraction through manufacturing, distribution, use, and end-of-life treatment. The methodology translates mass and energy flows into quantified environmental impact indicators via characterisation factor methods, providing rigorous evidence for [[Eco-design]], [[Environmental Product Declaration]]s, and regulatory compliance. LCA is now integral to the [[Circular Economy]] transition, enabling the identification of environmental hotspots and supporting [[ESG Reporting]] and [[Green Finance]] due diligence across complex [[Supply Chain Traceability]] networks.

- ### Overview
  - LCA emerged in the 1960s from resource and energy analysis work at the Coca-Cola Company and the US Midwest Research Institute, was formalised into international standards through ISO during the 1990s and 2000s, and has since become a cornerstone of environmental management, product policy, and sustainability strategy worldwide.
  - The methodology is distinguished from project-level [[Environmental Impact Assessment]] by its product-system focus: rather than assessing the impact of a facility or development on its surroundings, LCA follows a unit of function (the [[Functional Unit]]) through every process in the supply network, capturing impacts regardless of geographic jurisdiction.
  - LCA is considered "established" in maturity: ISO standards are mature, large commercial software platforms (SimaPro, openLCA, GaBi) are widely deployed, the [[Ecoinvent Database]] background dataset underpins the majority of global studies, and LCA literacy is now a core competency in engineering, procurement, and sustainability functions across industry.
  - Two complementary variants address different decision contexts:
    - **Attributional LCA** — allocates environmental burdens to a product based on current, average supply chain conditions; used for [[Environmental Product Declaration]]s and benchmarking.
    - **Consequential LCA** — models marginal, system-wide changes that result from a decision; preferred for policy analysis and investment decisions where substitution effects matter.

- ### Key Components
  - #### Phase 1 — Goal and Scope Definition
    - Establishes the [[Functional Unit]] (e.g. "one tonne of structural steel delivered to gate"), [[System Boundary]] (cradle-to-gate, cradle-to-grave, cradle-to-cradle), intended audience, and comparative assertions.
    - Determines allocation procedures for multi-output processes (mass, economic value, system expansion).
    - Defines data quality requirements and cut-off criteria.
  - #### Phase 2 — Life Cycle Inventory (LCI)
    - Compiles all mass and energy flows crossing the [[System Boundary]]: raw material inputs, energy carriers, water, emissions to air/water/soil, and waste streams.
    - Primary (measured/modelled) data is collected from foreground processes; background data is sourced from databases such as the [[Ecoinvent Database]], GaBi, and US LCI.
    - Input-output LCA extends this phase using economic input-output tables to capture economy-wide indirect flows, trading accuracy for scope coverage.
    - [[Material Flow Analysis]] provides complementary mass-balance perspectives at the sector or economy level.
  - #### Phase 3 — Life Cycle Impact Assessment (LCIA)
    - Translates inventory flows into environmental impact category indicators using [[Characterisation Factors]] derived from environmental science models.
    - **Midpoint indicators** (problem-oriented): global warming potential (GWP100, kg CO₂-eq), ozone depletion, acidification, eutrophication, photochemical ozone creation, ionising radiation, water scarcity, land use, resource depletion.
    - **Endpoint indicators** (damage-oriented): damage to human health (DALYs), ecosystem quality (species loss), resource availability; aggregated in methods such as ReCiPe 2016 and EF (Environmental Footprint).
    - Normalisation and weighting steps allow further aggregation into single scores, though these steps involve value judgements and must be clearly reported.
  - #### Phase 4 — Interpretation
    - Identifies dominant contributions (hotspots) by life cycle stage, process, or impact category.
    - Conducts sensitivity and uncertainty analysis (Monte Carlo simulation) to assess the robustness of conclusions.
    - Draws conclusions, identifies limitations, and formulates recommendations in line with the goal and scope.

- ### Applications and Use Cases
  - **Eco-design and product development** — identifies environmental hotspots early in design cycles to guide material substitution, process optimisation, and end-of-life strategy, directly linking to [[Design for Environment]].
  - **Environmental Product Declarations (EPDs)** — third-party verified, standardised LCA-based disclosures (ISO 21930, EN 15804) enabling [[Green Public Procurement]] and building certifications such as LEED and BREEAM.
  - **Regulatory compliance** — mandatory under the EU [[Product Environmental Footprint]] (PEF) framework, the Ecodesign for Sustainable Products Regulation (ESPR), the Construction Products Regulation, and the EU Battery Regulation (carbon footprint declaration for EV batteries).
  - **[[Carbon Footprint Assessment]] and [[Scope 3 Emissions]] reporting** — LCA is the methodological backbone for Scope 3 GHG accounting under the GHG Protocol, underpinning corporate [[ESG Reporting]] and Science-Based Targets (SBTi) pathways.
  - **[[Circular Economy]] strategy** — LCA quantifies the environmental benefits of reuse, remanufacturing, repair, and recycling relative to virgin production, informing [[Extended Producer Responsibility]] schemes and policy incentives.
  - **Green finance and investment** — LCA data feeds EU Taxonomy technical screening criteria, sustainable bond frameworks, and lender due diligence for transition finance.
  - **[[Supply Chain Traceability]]** — integration with [[Digital Product Passport]]s (mandatory under the ESPR) enables continuous, granular environmental performance data throughout multi-tier supply networks.
  - **Digital and spatial infrastructure** — LCA of data centres, 5G networks, and cloud computing services quantifies the environmental cost of digital infrastructure and informs [[Digital Sustainability]] strategies.
  - **Built environment** — whole-life-carbon assessments of buildings use LCA to evaluate embodied carbon (construction materials) alongside operational carbon, informing net-zero building standards.

- ### Relationships
  - hasPart:: [[Life Cycle Inventory]]
  - hasPart:: [[Life Cycle Impact Assessment]]
  - hasPart:: [[Goal and Scope Definition]]
  - hasPart:: [[LCA Interpretation]]
  - requires:: [[Functional Unit]]
  - requires:: [[System Boundary]]
  - requires:: [[Inventory Data]]
  - enables:: [[Carbon Footprint Assessment]]
  - enables:: [[Environmental Sustainability]]
  - enables:: [[Environmental Product Declaration]]
  - enables:: [[Eco-design]]
  - enables:: [[Green Public Procurement]]
  - uses:: [[Ecoinvent Database]]
  - uses:: [[Characterisation Factors]]
  - uses:: [[Material Flow Analysis]]
  - standardizedBy:: [[ISO 14040]]
  - standardizedBy:: [[ISO 14044]]
  - standardizedBy:: [[Product Environmental Footprint]]
  - supports:: [[ESG Reporting]]
  - supports:: [[Circular Economy]]
  - supports:: [[Scope 3 Emissions]]
  - relatedTo:: [[Supply Chain Traceability]]
  - relatedTo:: [[Environmental Impact Assessment]]
  - relatedTo:: [[Carbon Accounting]]
  - bridges-to:: [[Digital Product Passport]]
  - bridges-to:: [[Blockchain Provenance]]
  - bridges-to:: [[Industrial Internet of Things]]
  - contrastsWith:: [[Environmental Impact Assessment]]
  - contrastsWith:: [[Material Flow Analysis]]

- ### Standards and Governance Context
  - **ISO 14040:2006** — principles and framework for LCA; defines the four-phase structure and requires transparency about goal, scope, and assumptions.
  - **ISO 14044:2006 (+ AMD1:2017, AMD2:2020)** — requirements and guidelines covering LCI, LCIA methods, sensitivity analysis, and critical review procedures.
  - **ISO 14067** — carbon footprint of products (cradle-to-gate and cradle-to-grave GHG accounting, consistent with LCA principles).
  - **ISO 14071, 14072** — critical review processes and organisational LCA.
  - **EN 15804 + A2:2019** — European product category rules for [[Environmental Product Declaration]]s in the construction sector; harmonised with PEF.
  - **[[Product Environmental Footprint]] (PEF/OEF)** — European Commission methodology harmonising LCA methods for product and organisation-level environmental footprints, forming the basis of the EU [[Green Claims Directive]].
  - **GHG Protocol — Scope 3 Standard** — uses LCA-based emission factors to account for upstream and downstream value chain emissions in corporate [[Carbon Accounting]].
  - **ILCD Handbook** — European Commission's International Reference Life Cycle Data System providing recommended LCIA methods and data quality guidance.
  - **[[Digital Product Passport]]** — emerging EU regulatory requirement (ESPR) that will embed LCA results as machine-readable product attributes, creating demand for automated, database-linked LCA workflows.
  - Key governance bodies: SETAC (Society of Environmental Toxicology and Chemistry), the Life Cycle Initiative (UNEP/SETAC), the European Platform on Life Cycle Assessment (EC JRC), and ISO TC207/SC5.

- ### Data Infrastructure and Tooling
  - **Background databases** — [[Ecoinvent Database]] (v3.x, leading global background dataset), GaBi (Sphera), US LCI (NREL), Agribalyse (ADEME), World Food LCA Database, and emerging sector-specific datasets.
  - **Software platforms** — SimaPro (PRé Sustainability), openLCA (GreenDelta, open-source), GaBi (Sphera), one-click LCA, Tally (Autodesk integration); increasingly API-driven for integration with PLM and ERP systems.
  - **Automation and digitalisation** — [[Industrial Internet of Things]] sensor data, [[Blockchain Provenance]] for primary data collection and chain-of-custody, and AI-assisted data gap-filling are transforming LCA from periodic consulting studies to continuous, embedded environmental intelligence.
  - Machine learning models are being trained on LCA databases to predict environmental impact factors for novel materials and to automate inventory data collection from invoices and supplier declarations, bridging LCA with [[Artificial Intelligence]] capabilities.

- ### Limitations and Emerging Developments
  - **Data quality and uncertainty** — LCA results are sensitive to background dataset vintages, geographic representativeness, and allocation assumptions; Monte Carlo uncertainty analysis is best practice but not universally applied.
  - **Temporal dynamics** — static, average-year inventory data does not capture marginal electricity grids or dynamic material markets; prospective LCA methods address this using energy system models.
  - **Social dimensions** — S-LCA (ISO 14075) extends the framework to social impact categories (labour rights, community health), but methodological maturity lags behind environmental LCA.
  - **Biodiversity** — integration of biodiversity impact indicators (land use, habitat fragmentation, species loss) is an active research frontier, gaining policy relevance under the EU Nature Restoration Law and TNFD frameworks.
  - **Scope expansion** — Life Cycle Sustainability Assessment (LCSA) integrates LCA, LCC, and S-LCA into a unified framework aligned with the UN SDGs, though multi-criteria weighting across pillars remains contested.

- ### Provenance
  - sources:: ISO 14040:2006; ISO 14044:2006; UNEP/SETAC Life Cycle Initiative; European Commission JRC — European Platform on LCA; Ecoinvent Centre; PRé Sustainability — SimaPro documentation; GHG Protocol Scope 3 Standard
  - updated:: 2026-06-13
  - migration-date:: 2026-05-19T00:00:00Z
