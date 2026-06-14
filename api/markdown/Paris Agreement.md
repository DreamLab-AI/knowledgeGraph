public:: true

# Paris Agreement
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:9087fa5930e92627dfd061ea7d585ae73f25c0011e39428b8472293726517ff7",
  "@type": "Page",
  "vc:slug": "paris-agreement",
  "title": "Paris Agreement",
  "vc:public": true,
  "vc:outboundWikilinks": [
    {
      "@id": "urn:visionflow:linked:sustainability",
      "vc:label": "Sustainability"
    },
    {
      "@id": "urn:visionflow:linked:carbon-accounting",
      "vc:label": "Carbon Accounting"
    },
    {
      "@id": "urn:visionflow:linked:voluntary-carbon-market",
      "vc:label": "Voluntary Carbon Market"
    },
    {
      "@id": "urn:visionflow:linked:carbon-credits",
      "vc:label": "Carbon Credits"
    }
  ],
  "vc:schemaVersion": 2,
  "vc:legacyProperties": [
    {
      "vc:key": "preferred-term",
      "vc:value": "Paris Agreement"
    }
  ],
  "prov:wasAttributedTo": {
    "@id": "did:nostr:jjohare"
  },
  "prov:generatedAtTime": {
    "@value": "2026-05-29T00:00:00Z",
    "@type": "xsd:dateTime"
  }
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:paris-agreement",
  "@type": "Class",
  "label": "Paris Agreement",
  "definition": "The Paris Agreement is a legally binding international treaty on climate change, adopted under the United Nations Framework Convention on Climate Change (UNFCCC) at COP21 in December 2015 and entering into force in November 2016. It establishes a long-term global temperature goal, requiring parties to limit the increase in global average temperature to well below 2 degrees Celsius above pre-industrial levels while pursuing efforts to limit warming to 1.5 degrees Celsius. Each signatory submits Nationally Determined Contributions (NDCs) — self-defined emissions-reduction pledges — subject to a five-year review and ratchet mechanism designed to progressively strengthen ambition. The treaty also creates a transparency framework for monitoring, reporting, and verification, and provisions for climate finance, technology transfer, and capacity building to support developing nations.",
  "domain": "governance",
  "maturity": "established",
  "subClassOf": [
    {
      "@id": "urn:ngm:class:infra-legal-and-regulatory",
      "label": "Infra Legal And Regulatory"
    }
  ],
  "relations": {
    "partOf": [
      {
        "@id": "urn:ngm:class:unfccc",
        "label": "UNFCCC"
      },
      {
        "@id": "urn:ngm:class:multilateral-environmental-agreement",
        "label": "Multilateral Environmental Agreement"
      }
    ],
    "hasPart": [
      {
        "@id": "urn:ngm:class:nationally-determined-contribution",
        "label": "Nationally Determined Contribution"
      },
      {
        "@id": "urn:ngm:class:transparency-framework",
        "label": "Transparency Framework"
      },
      {
        "@id": "urn:ngm:class:global-stocktake",
        "label": "Global Stocktake"
      }
    ],
    "requires": [
      {
        "@id": "urn:ngm:class:carbon-accounting",
        "label": "Carbon Accounting"
      },
      {
        "@id": "urn:ngm:class:emissions-monitoring",
        "label": "Emissions Monitoring"
      },
      {
        "@id": "urn:ngm:class:climate-finance",
        "label": "Climate Finance"
      }
    ],
    "enables": [
      {
        "@id": "urn:ngm:class:voluntary-carbon-market",
        "label": "Voluntary Carbon Market"
      },
      {
        "@id": "urn:ngm:class:carbon-credits",
        "label": "Carbon Credits"
      },
      {
        "@id": "urn:ngm:class:net-zero-target",
        "label": "Net-Zero Target"
      },
      {
        "@id": "urn:ngm:class:carbon-offsetting",
        "label": "Carbon Offsetting"
      }
    ],
    "implements": [
      {
        "@id": "urn:ngm:class:sustainability",
        "label": "Sustainability"
      },
      {
        "@id": "urn:ngm:class:climate-governance",
        "label": "Climate Governance"
      }
    ],
    "standardizedBy": [
      {
        "@id": "urn:ngm:class:unfccc",
        "label": "UNFCCC"
      },
      {
        "@id": "urn:ngm:class:conference-of-parties",
        "label": "Conference of Parties"
      }
    ],
    "contrastsWith": [
      {
        "@id": "urn:ngm:class:kyoto-protocol",
        "label": "Kyoto Protocol"
      }
    ],
    "relatedTo": [
      {
        "@id": "urn:ngm:class:cop26",
        "label": "COP26"
      },
      {
        "@id": "urn:ngm:class:ipcc",
        "label": "IPCC"
      },
      {
        "@id": "urn:ngm:class:sustainable-development-goals",
        "label": "Sustainable Development Goals"
      },
      {
        "@id": "urn:ngm:class:just-transition",
        "label": "Just Transition"
      },
      {
        "@id": "urn:ngm:class:loss-and-damage",
        "label": "Loss and Damage"
      }
    ],
    "bridgesTo": [
      {
        "@id": "urn:ngm:class:esg-reporting",
        "label": "ESG Reporting"
      },
      {
        "@id": "urn:ngm:class:supply-chain-decarbonisation",
        "label": "Supply Chain Decarbonisation"
      },
      {
        "@id": "urn:ngm:class:digital-mrv",
        "label": "Digital MRV"
      }
    ]
  },
  "sameAs": [
    {
      "@id": "urn:ngm:class:cop21-agreement",
      "label": "COP21 Agreement"
    }
  ],
  "quality": 0.75,
  "provenance": {
    "attributedTo": "did:nostr:ontology-mesh",
    "generatedAt": "2026-06-13T00:00:00Z",
    "inferenceRule": "ManualEnrichment"
  }
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:annotation:link-resolutions:paris-agreement:745e49065a1d",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:9087fa5930e92627dfd061ea7d585ae73f25c0011e39428b8472293726517ff7"
  },
  "vc:resolutions": [
    {
      "raw": "[[Sustainability]]",
      "resolved": "urn:visionflow:linked:sustainability",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Carbon Accounting]]",
      "resolved": "urn:visionflow:linked:carbon-accounting",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Voluntary Carbon Market]]",
      "resolved": "urn:visionflow:linked:voluntary-carbon-market",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Carbon Credits]]",
      "resolved": "urn:visionflow:linked:carbon-credits",
      "kind": "ResolvedLink"
    }
  ],
  "prov:wasAttributedTo": {
    "@id": "did:nostr:lcr-swarm"
  },
  "prov:generatedAtTime": {
    "@value": "2026-05-29T00:00:00Z",
    "@type": "xsd:dateTime"
  }
}
```

- ### Definition
  - The Paris Agreement is a legally binding international treaty on [[Climate Change]], adopted under the [[UNFCCC]] framework at COP21 (Paris, December 2015) and entering into force in November 2016. It commits signatory parties to holding the increase in global average temperature to well below 2°C above pre-industrial levels, while pursuing efforts to limit warming to 1.5°C. Each party submits a [[Nationally Determined Contribution]] (NDC) — a self-defined emissions-reduction plan — subject to a five-year review and progressive-ambition ratchet. The agreement also establishes a [[Transparency Framework]] for measurement, reporting, and verification (MRV), and mobilises [[Climate Finance]] and technology transfer to support developing countries in both mitigation and adaptation.

- ### Overview
  - The Paris Agreement replaced the top-down, Annex-I differentiation of the [[Kyoto Protocol]] with a bottom-up, nationally determined architecture, enabling near-universal participation (196 parties as of 2025).
  - Its three pillars are:
    - **Mitigation** — reducing [[Greenhouse Gas Emissions]] through NDCs and a ratchet mechanism.
    - **Adaptation** — building resilience to unavoidable climate impacts, including support for [[Loss and Damage]] provisions formalised at COP27 and COP28.
    - **Finance & Technology** — mobilising resources from developed to developing nations to support low-carbon and climate-resilient development.
  - The [[Global Stocktake]] mechanism (first formal exercise completed at COP28, Dubai 2023) assesses collective progress and informs the next round of NDC submissions.
  - Article 6 of the agreement provides the legal basis for international [[Carbon Markets]] and cooperative approaches, underpinning both voluntary and compliance carbon trading.

- ### Key Mechanisms
  - **Nationally Determined Contributions (NDCs)**
    - Each party self-determines its emissions targets and communicates them every five years.
    - NDCs must represent a progression — parties cannot submit weaker targets than the previous cycle.
    - NDCs cover mitigation, and increasingly adaptation and finance.
  - **Enhanced Transparency Framework (ETF)**
    - Common modalities for biennial transparency reporting replace the previous bifurcated system for developed and developing countries.
    - Underpins [[Emissions Monitoring]] and [[Carbon Accounting]] at national level.
    - Third-party technical expert review strengthens accountability without binding enforcement.
  - **Global Stocktake**
    - Conducted every five years to assess collective progress against the long-term goals.
    - Informs future NDC ambition and cooperation.
    - The first GST (COP28, 2023) called for a transition away from fossil fuels.
  - **Article 6 — Carbon Markets**
    - Article 6.2 enables bilateral cooperative approaches using [[Internationally Transferred Mitigation Outcomes]] (ITMOs).
    - Article 6.4 establishes a centralised [[Carbon Crediting Mechanism]] under UNFCCC authority, successor to the Kyoto Clean Development Mechanism.
    - Article 6.8 covers non-market approaches such as policy transfer and capacity building.
    - Article 6 operationalisation has underpinned growth in the [[Voluntary Carbon Market]] and [[Carbon Credits]] ecosystem.
  - **Climate Finance**
    - Developed countries committed to mobilising climate finance for developing nations, with a new collective quantified goal (NCQG) under negotiation since COP26.
    - Finance flows link the Paris Agreement to instruments such as [[Green Bonds]], [[Blended Finance]], and multilateral development bank (MDB) lending frameworks.

- ### Applications and Use Cases
  - **National Policy** — governments use NDC commitments to design domestic legislation, carbon pricing schemes, renewable energy targets, and [[Just Transition]] programmes.
  - **Corporate Climate Strategy** — companies align with the Science Based Targets initiative (SBTi) and set [[Net-Zero Target]] commitments consistent with 1.5°C pathways under the Paris framework.
  - **[[ESG Reporting]]** — institutional investors and regulators (e.g. TCFD, ISSB) require disclosure of Paris-alignment metrics, driving demand for [[Carbon Accounting]] standards.
  - **Carbon Markets** — Article 6 rules govern cross-border trading of emissions reductions, affecting [[Voluntary Carbon Market]] integrity, [[Carbon Credits]] issuance, and avoidance of double-counting through [[Corresponding Adjustments]].
  - **[[Supply Chain Decarbonisation]]** — multinational supply chains face Scope 3 requirements linked to Paris-aligned national policies and customer NDC commitments.
  - **[[Digital MRV]]** — satellite remote sensing, IoT sensor networks, and AI-based analytics are deployed to improve measurement, reporting, and verification accuracy required by the Transparency Framework.
  - **[[Sustainable Development Goals]]** alignment — Paris Agreement mitigation and adaptation objectives intersect with SDGs 7 (Affordable and Clean Energy), 11 (Sustainable Cities), 13 (Climate Action), and 17 (Partnerships).

- ### Relationships
  - partOf:: [[UNFCCC]], [[Multilateral Environmental Agreement]]
  - hasPart:: [[Nationally Determined Contribution]], [[Transparency Framework]], [[Global Stocktake]]
  - requires:: [[Carbon Accounting]], [[Emissions Monitoring]], [[Climate Finance]]
  - enables:: [[Voluntary Carbon Market]], [[Carbon Credits]], [[Net-Zero Target]], [[Carbon Offsetting]]
  - implements:: [[Sustainability]], [[Climate Governance]]
  - standardizedBy:: [[UNFCCC]], [[Conference of Parties]]
  - contrastsWith:: [[Kyoto Protocol]]
  - relatedTo:: [[COP26]], [[IPCC]], [[Sustainable Development Goals]], [[Just Transition]], [[Loss and Damage]]
  - bridges-to:: [[ESG Reporting]], [[Supply Chain Decarbonisation]], [[Digital MRV]]

- ### Standards and Governance Context
  - **Adoption instrument** — Decision 1/CP.21, FCCC/CP/2015/10/Add.1; treaty deposited with UN Secretary-General.
  - **UNFCCC** — the parent convention provides the institutional framework; the [[Conference of Parties]] serving as the Meeting of Parties (CMA) is the governing body for the Paris Agreement.
  - **IPCC** — the [[IPCC]] Special Report on 1.5°C (SR1.5, 2018) provides the scientific basis for the 1.5°C goal and informs NDC ambition cycles.
  - **Article 13 — Enhanced Transparency Framework (ETF)** — detailed modalities, procedures, and guidelines (MPGs) were agreed at COP24 (Katowice, 2018) under the Katowice Climate Package.
  - **Article 6 rules** — substantially resolved at COP26 (Glasgow, 2021) and refined at subsequent COPs; governing [[Carbon Crediting Mechanism]] oversight and ITMO accounting.
  - **Related frameworks** — TCFD (Task Force on Climate-related Financial Disclosures), ISSB IFRS S2 climate standard, EU CBAM (Carbon Border Adjustment Mechanism), and SBTi all operationalise Paris-alignment in finance and corporate sectors.
  - **Technology Mechanism** — the Technology Executive Committee (TEC) and Climate Technology Centre and Network (CTCN) facilitate technology transfer obligations under the agreement.

- ### Provenance
  - sources:: UNFCCC Paris Agreement Treaty Text (2015); IPCC SR1.5 (2018); COP26 Glasgow Climate Pact (2021); COP28 UAE Consensus (2023)
  - updated:: 2026-06-13
