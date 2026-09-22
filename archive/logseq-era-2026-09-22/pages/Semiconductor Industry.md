public:: true

# Semiconductor Industry
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:85ea3acaac2c738d3f0fa28535d9be65810678dc2864d9836d1aa7848f4d9de8",
  "@type": "Page",
  "vc:slug": "semiconductor-industry",
  "title": "Semiconductor Industry",
  "vc:public": true,
  "vc:outboundWikilinks": [
    {
      "@id": "urn:visionflow:linked:technology-ecosystem",
      "vc:label": "Technology Ecosystem"
    },
    {
      "@id": "urn:visionflow:linked:semiconductor",
      "vc:label": "Semiconductor"
    },
    {
      "@id": "urn:visionflow:linked:supply-chain",
      "vc:label": "Supply Chain"
    },
    {
      "@id": "urn:visionflow:linked:ai-hardware",
      "vc:label": "AI Hardware"
    },
    {
      "@id": "urn:visionflow:linked:asic",
      "vc:label": "ASIC"
    },
    {
      "@id": "urn:visionflow:linked:moore-s-law",
      "vc:label": "Moore's Law"
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
  "@id": "urn:ngm:class:semiconductor-industry",
  "@type": "Class",
  "label": "Semiconductor Industry",
  "definition": "The global economic sector that designs, fabricates, packages, tests, and supplies integrated circuits and related components. It spans fabless design houses, foundries, integrated device manufacturers, equipment and materials suppliers, and EDA vendors in a deeply specialised international supply chain whose output underpins computing, communications, automotive, and defence systems, and whose leading-edge capacity has become a strategic chokepoint amid the accelerating hardware demands of artificial intelligence.",
  "domain": "supply-chain",
  "maturity": "mature",
  "subClassOf": {
    "@id": "urn:ngm:class:technology-ecosystem",
    "label": "Technology Ecosystem"
  },
  "relations": {
    "hasPart": [
      {
        "@id": "urn:ngm:class:semiconductor",
        "label": "Semiconductor"
      },
      {
        "@id": "urn:ngm:class:asic",
        "label": "ASIC"
      }
    ],
    "partOf": [
      {
        "@id": "urn:ngm:class:supply-chain",
        "label": "Supply Chain"
      }
    ],
    "enables": [
      {
        "@id": "urn:ngm:class:ai-hardware",
        "label": "AI Hardware"
      },
      {
        "@id": "urn:ngm:class:gpu",
        "label": "GPU"
      }
    ],
    "relatedTo": [
      {
        "@id": "urn:ngm:class:moore-s-law",
        "label": "Moore's Law"
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
  - "The global economic sector that designs, fabricates, packages, tests, and supplies integrated circuits and related components. It spans fabless design houses, foundries, integrated device manufacturers, equipment and materials suppliers, and EDA vendors in a deeply specialised international supply chain whose output underpins computing, communications, automotive, and defence systems, and whose leading-edge capacity has become a strategic chokepoint amid the accelerating hardware demands of artificial intelligence."

- ### Semantic Classification
  - owl-class:: supply-chain:SemiconductorIndustry
  - owl-role:: Concept

- ### Relationships
  - is-subclass-of:: [[Technology Ecosystem]]
  - part-of:: [[Supply Chain]]
  - enables:: [[AI Hardware]]
  - related-to:: [[Moore's Law]]

- ### Content

  ## Definition

  The **semiconductor industry** is the sector that turns refined silicon into the integrated circuits on which the digital economy runs. Its value chain is unusually long and specialised: chip *design* (Nvidia, Qualcomm, Arm's architecture licensing) depends on electronic design automation software from an effective triopoly (Synopsys, Cadence, Siemens EDA); *fabrication* happens in wafer fabs owned either by integrated device manufacturers (Intel, Samsung, SK Hynix, Micron) or by pure-play foundries, of which TSMC alone holds a dominant share of leading-edge logic; fabs in turn depend on *equipment* makers (ASML's monopoly on EUV lithography, Applied Materials, Lam Research, Tokyo Electron) and ultra-pure *materials* (photoresists and wafers dominated by Japanese suppliers such as Shin-Etsu and JSR); finally *assembly, packaging, and test* concentrates in East and Southeast Asia. The fabless–foundry split, pioneered by TSMC's 1987 founding, is what allows a company to sell a cutting-edge [[ASIC]] or [[GPU]] without owning a fab.

  The industry's economics are defined by extreme capital intensity and cyclicality. A leading-edge fab now costs US$15–30 billion, and process development at 3 nm and below is affordable to only three firms — TSMC, Samsung, and Intel — a consolidation driven by the rising cost of sustaining [[Moore's Law]] as transistor scaling approaches physical limits. Boom-and-bust cycles follow the lag between demand signals and multi-year capacity build-outs, as the 2020–2022 chip shortage and subsequent memory glut demonstrated. Because every downstream [[Supply Chain]] — automotive, telecoms, medical devices, defence — inherits these dynamics, semiconductor capacity has become macroeconomically significant infrastructure rather than a mere component market.

  Geopolitics now shapes the sector as strongly as economics. Taiwan's concentration of advanced logic manufacture, US export controls on advanced chips and equipment bound for China, and subsidy programmes — the US CHIPS and Science Act (~US$52 billion), the EU Chips Act, and comparable schemes in Japan, Korea, and India — are redrawing the industry's geography in pursuit of supply-chain resilience, at the cost of duplicating some of the world's most efficient specialisation.

  ## Current Landscape

  Artificial intelligence has become the industry's principal demand engine. Data-centre accelerators — GPUs and custom [[AI Hardware]] such as TPUs and inference ASICs — pushed industry revenue beyond US$600 billion in 2024 with projections towards US$1 trillion by 2030, made Nvidia one of the most valuable companies in the world, and turned advanced packaging (TSMC's CoWoS) and high-bandwidth memory into the binding constraints on AI compute supply. Technologically, the leading edge is transitioning to gate-all-around transistors, backside power delivery, and chiplet-based heterogeneous integration, with High-NA EUV lithography entering production use — evidence that progress increasingly comes from architecture and packaging rather than classical planar scaling. Persistent structural issues include a global talent shortage, water and energy intensity of fabs, and the tension between export-control regimes and the industry's historically borderless research and supply networks.

  - **Record revenue on the AI cycle**: global semiconductor revenue reached about US$626 billion in 2024 (+18.1% year on year), with Gartner projecting roughly US$705 billion in 2025; data-centre AI chip sales jumped to US$112 billion in 2024 from US$64.8 billion in 2023.
  - **TSMC's AI-led surge**: TSMC closed 2025 with net revenue of about US$122.4 billion (+35.9%), high-performance computing supplying 58% of revenue; in March 2025 it announced an additional US$100 billion US investment (US$165 billion total, six Arizona fabs).
  - **Leading edge moves to 2 nm**: TSMC's N2 node (gate-all-around nanosheet transistors) entered high-volume manufacturing in late 2025, with Apple and NVIDIA among first adopters; Intel's 18A (RibbonFET plus PowerVia backside power) began ramping on its Panther Lake products.
  - **High-NA EUV reaches production**: ASML shipped its first production-grade High-NA tool (EXE:5200B) in Q2 2025, with Intel as inaugural customer targeting its 14A node (risk production 2027); TSMC is deferring High-NA, extending 0.33-NA EUV for its A14/1.4 nm generation.
  - **Subsidy geography**: government semiconductor subsidies exceeded US$250 billion by 2025 (US CHIPS Act ~US$52.7 billion, EU Chips Act ~€43 billion, Japan's ~US$69 billion framework to 2030), accelerating a "China+1" diversification.

  **Sources**:
  - https://www.manufacturingdive.com/news/tsmc-q4-full-year-2025-earnings-ai-taiwan/809775/
  - https://ts2.tech/en/global-semiconductor-industry-trends-and-2025-outlook-ai-boom-advanced-nodes-and-geopolitics-report-june-27th-2025/

- ### Provenance
  - sources::
  - migration-date:: 2026-08-06T00:00:00Z
