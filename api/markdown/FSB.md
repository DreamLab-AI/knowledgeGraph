public:: true

# FSB
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:98acc22b2ea55e298badb3ffeaaef0d015a70a3cb82e23a7c0d7c6c35444c13d",
  "@type": "Page",
  "vc:slug": "fsb",
  "title": "FSB",
  "vc:public": true,
  "vc:outboundWikilinks": [
    {
      "@id": "urn:visionflow:linked:financial-regulation",
      "vc:label": "Financial Regulation"
    },
    {
      "@id": "urn:visionflow:linked:financial-stability",
      "vc:label": "Financial Stability"
    },
    {
      "@id": "urn:visionflow:linked:systemic-risk",
      "vc:label": "Systemic Risk"
    },
    {
      "@id": "urn:visionflow:linked:financial-system",
      "vc:label": "Financial System"
    }
  ],
  "vc:schemaVersion": 2,
  "vc:legacyProperties": [
    {
      "vc:key": "preferred-term",
      "vc:value": "FSB"
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
  "@id": "urn:ngm:class:fsb",
  "@type": "Class",
  "label": "FSB",
  "definition": "The Financial Stability Board (FSB) is an international body established in 2009 by the G20 that monitors and makes recommendations about the global financial system. It coordinates the work of national financial authorities and international standard-setting bodies to develop and promote effective regulatory, supervisory, and other financial sector policies. The FSB addresses vulnerabilities in financial markets, oversees the implementation of agreed reforms, and assesses systemic risks arising from entities, activities, and instruments across the global financial system, including emerging risks from crypto-assets, non-bank financial intermediation, and climate-related financial exposures.",
  "domain": "finance",
  "maturity": "established",
  "qualityScore": 0.74,
  "subClassOf": [
    {
      "@id": "urn:ngm:class:financial-regulation",
      "label": "Financial Regulation"
    }
  ],
  "sameAs": [
    {
      "@id": "urn:ngm:class:financial-stability-board",
      "label": "Financial Stability Board"
    }
  ],
  "relations": {
    "requires": [
      {
        "@id": "urn:ngm:class:financial-regulation",
        "label": "Financial Regulation"
      },
      {
        "@id": "urn:ngm:class:g20",
        "label": "G20"
      }
    ],
    "enables": [
      {
        "@id": "urn:ngm:class:financial-stability",
        "label": "Financial Stability"
      },
      {
        "@id": "urn:ngm:class:systemic-risk-management",
        "label": "Systemic Risk Management"
      },
      {
        "@id": "urn:ngm:class:cross-border-regulatory-cooperation",
        "label": "Cross-Border Regulatory Cooperation"
      }
    ],
    "standardizedBy": [
      {
        "@id": "urn:ngm:class:basel-committee",
        "label": "Basel Committee"
      },
      {
        "@id": "urn:ngm:class:iosco",
        "label": "IOSCO"
      }
    ],
    "uses": [
      {
        "@id": "urn:ngm:class:peer-review",
        "label": "Peer Review"
      },
      {
        "@id": "urn:ngm:class:stress-testing",
        "label": "Stress Testing"
      },
      {
        "@id": "urn:ngm:class:data-reporting",
        "label": "Data Reporting"
      }
    ],
    "supports": [
      {
        "@id": "urn:ngm:class:macroprudential-policy",
        "label": "Macroprudential Policy"
      }
    ],
    "contrastsWith": [
      {
        "@id": "urn:ngm:class:imf",
        "label": "IMF"
      },
      {
        "@id": "urn:ngm:class:bis",
        "label": "BIS"
      }
    ],
    "relatedTo": [
      {
        "@id": "urn:ngm:class:systemic-risk",
        "label": "Systemic Risk"
      },
      {
        "@id": "urn:ngm:class:financial-system",
        "label": "Financial System"
      },
      {
        "@id": "urn:ngm:class:crypto-regulation",
        "label": "Crypto-Asset Regulation"
      },
      {
        "@id": "urn:ngm:class:climate-related-financial-risk",
        "label": "Climate-Related Financial Risk"
      }
    ],
    "bridgesTo": [
      {
        "@id": "urn:ngm:class:decentralised-finance",
        "label": "Decentralised Finance"
      },
      {
        "@id": "urn:ngm:class:ai-in-finance",
        "label": "AI in Finance"
      }
    ]
  },
  "quality": 0.74,
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
  "@id": "urn:visionflow:annotation:link-resolutions:fsb:53072cc488a1",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:98acc22b2ea55e298badb3ffeaaef0d015a70a3cb82e23a7c0d7c6c35444c13d"
  },
  "vc:resolutions": [
    {
      "raw": "[[Financial Regulation]]",
      "resolved": "urn:visionflow:linked:financial-regulation",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Financial Stability]]",
      "resolved": "urn:visionflow:linked:financial-stability",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Systemic Risk]]",
      "resolved": "urn:visionflow:linked:systemic-risk",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Financial System]]",
      "resolved": "urn:visionflow:linked:financial-system",
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
  - The **Financial Stability Board** (FSB) is an international body established in April 2009 by the [[G20]] Leaders' Summit in London, succeeding the Financial Stability Forum. It monitors the global [[Financial System]], identifies vulnerabilities, and develops and promotes the implementation of regulatory, supervisory, and other policies in the interest of [[Financial Stability]]. The FSB operates as a quasi-regulatory coordinating body with a secretariat hosted at the [[Bank for International Settlements]] (BIS) in Basel, Switzerland, bringing together national authorities, international standard-setting bodies, and international financial institutions to ensure coherent and consistent approaches to [[Financial Regulation]] worldwide.

- ### Overview
  - The FSB emerged from the 2008–2009 global [[Financial Crisis]] as policymakers recognised that the existing architecture of international financial oversight — centred on the Financial Stability Forum (est. 1999) — lacked the mandate, membership, and tools to address cross-border [[Systemic Risk]] at the scale revealed by the crisis.
  - The FSB was endowed with a broader mandate: to promote [[Macroprudential Policy]], coordinate reforms across the banking, insurance, and securities sectors, and monitor shadow banking (now termed [[Non-Bank Financial Intermediation]]).
  - Membership encompasses G20 jurisdictions, key financial centres, and major international institutions, covering approximately 90% of global GDP. Members include central banks, ministries of finance, and supervisory authorities from 24 national jurisdictions plus the EU, alongside institutions such as the [[IMF]], [[World Bank]], [[BIS]], [[OECD]], [[Basel Committee]], [[IOSCO]], and [[IAIS]].
  - The FSB does not issue legally binding rules; rather, it publishes recommendations, policy frameworks, and peer review findings that carry significant normative weight and shape the domestic regulatory agendas of member jurisdictions.

- ### Key Components
  - **Plenary** — the FSB's decision-making body, which meets twice per year and comprises senior officials from member jurisdictions and organisations.
  - **Steering Committee** — manages the ongoing work programme and coordinates between meetings of the Plenary.
  - **Standing Committees** — three permanent technical committees:
    - *Standing Committee on Assessment of Vulnerabilities* (SCAV) — monitors the global [[Financial System]] for emerging fragilities.
    - *Standing Committee on Supervisory and Regulatory Cooperation* (SRC) — promotes convergence in regulatory and supervisory approaches.
    - *Standing Committee on Standards Implementation* (SCSI) — conducts [[Peer Review]] of members' implementation of agreed standards.
  - **Regional Consultative Groups** (RCGs) — six groups covering the Americas, Asia, CIS/MENA/Sub-Saharan Africa, Europe, Middle East and North Africa, and Sub-Saharan Africa, extending FSB outreach beyond core membership.
  - **Secretariat** — a small permanent staff hosted at the [[BIS]] in Basel, providing analytical and administrative support.

- ### Mechanisms
  - **Vulnerability Assessments** — the SCAV produces regular assessments of [[Systemic Risk]], shared with the [[IMF]]/[[World Bank]] and presented at G20 finance ministers' meetings.
  - **Policy Development** — the FSB leads multi-stakeholder workstreams to develop global policy frameworks (e.g., [[Total Loss-Absorbing Capacity]] (TLAC), [[Crypto-Asset Regulation]] frameworks, [[Climate-Related Financial Risk]] disclosures).
  - **Peer Reviews** — thematic and country-level [[Peer Review]] processes assess members' implementation of FSB recommendations and [[Basel Committee]] standards, reporting publicly.
  - **Data Collection** — the FSB's Data Gaps Initiative (coordinated with the [[IMF]]) drives improvements in the availability and comparability of global financial data, supporting [[Data Reporting]] standards.
  - **Coordination with SSBs** — the FSB acts as an umbrella body for standard-setting bodies (SSBs) including the [[Basel Committee]], [[IOSCO]], [[IAIS]], IASB, and CPMI, aligning their work programmes.
  - **Monitoring Implementation** — annual reports track the status of post-crisis reform implementation across [[G20]] jurisdictions, covering capital requirements, [[Resolution Framework]] regimes, [[OTC Derivatives]] reform, and [[Stress Testing]] practices.

- ### Applications and Use Cases
  - **Post-Crisis Regulatory Reform** — the FSB coordinated and monitored the post-2008 reform package, including [[Basel III]], central clearing mandates for [[OTC Derivatives]], and [[Resolution Framework]] regimes for systemically important financial institutions (SIFIs).
  - **Global Systemically Important Banks (G-SIBs)** — the FSB annually publishes the list of G-SIBs (in coordination with the [[Basel Committee]]), setting higher loss-absorbency requirements and informing [[Too Big To Fail]] reform.
  - **Shadow Banking / NBFI Monitoring** — through the Global Monitoring Report on [[Non-Bank Financial Intermediation]], the FSB tracks assets and risk in money market funds, hedge funds, and other entities outside the banking system.
  - **Crypto-Asset Regulation** — the FSB developed high-level recommendations for the regulation, supervision, and oversight of [[Crypto-Asset]] markets and activities (2022–2023), as well as for global stablecoin arrangements, directly shaping jurisdictional legislation.
  - **Climate-Related Financial Disclosures** — the FSB established and continues to support the [[Task Force on Climate-related Financial Disclosures]] (TCFD), whose voluntary disclosure framework has been widely adopted and incorporated into mandatory regimes, addressing [[Climate-Related Financial Risk]].
  - **Cross-Border Payments** — the FSB, in partnership with the [[BIS]] Committee on Payments and Market Infrastructures (CPMI), leads the G20 Roadmap to enhance [[Cross-Border Payments]], targeting cheaper, faster, more transparent international transfers.
  - **AI and Technology in Finance** — the FSB monitors financial stability implications of [[AI in Finance]] and [[Decentralised Finance]], publishing thematic reports and early-warning analyses on [[Algorithmic Trading]], cloud concentration, and [[Fintech]] risks.
  - **Compensation Practices** — the FSB's Principles for Sound Compensation Practices and Implementation Standards (2009) established global norms on financial sector remuneration to reduce excessive risk-taking.

- ### Relationships
  - subClassOf:: [[Financial Regulation]]
  - requires:: [[International Coordination]]
  - requires:: [[G20]]
  - enables:: [[Financial Stability]]
  - enables:: [[Systemic Risk Management]]
  - enables:: [[Cross-Border Regulatory Cooperation]]
  - hasPart:: [[Standing Committee]]
  - hasPart:: [[Regional Consultative Group]]
  - standardizedBy:: [[Basel Committee]]
  - standardizedBy:: [[IOSCO]]
  - standardizedBy:: [[IAIS]]
  - uses:: [[Peer Review]]
  - uses:: [[Stress Testing]]
  - uses:: [[Data Reporting]]
  - supports:: [[Macroprudential Policy]]
  - supports:: [[Resolution Framework]]
  - supports:: [[Too Big To Fail]]
  - contrastsWith:: [[IMF]]
  - contrastsWith:: [[BIS]]
  - relatedTo:: [[Systemic Risk]]
  - relatedTo:: [[Financial System]]
  - relatedTo:: [[Non-Bank Financial Intermediation]]
  - relatedTo:: [[Crypto-Asset Regulation]]
  - relatedTo:: [[Climate-Related Financial Risk]]
  - bridges-to:: [[Decentralised Finance]]
  - bridges-to:: [[AI in Finance]]

- ### Standards and Context
  - The FSB operates under a **Charter** adopted in 2012, which formalised its institutional status, governance, and mandate following the G20 Leaders' commitment in 2009.
  - Key deliverables are coordinated with the G20 Finance Ministers and Central Bank Governors meetings, and the FSB Chair reports to the G20 Leaders' Summit.
  - Core reform areas monitored by the FSB align with the post-2008 Basel agreements:
    - [[Basel III]] / [[Basel IV]] — risk-based capital, leverage, liquidity (Liquidity Coverage Ratio, Net Stable Funding Ratio).
    - [[TLAC]] — Total Loss-Absorbing Capacity standard for G-SIBs, enabling orderly [[Resolution Framework]] without taxpayer bail-outs.
    - [[OTC Derivatives]] reform — central clearing, trade reporting, margin requirements.
  - The FSB's **Key Attributes of Effective Resolution Regimes** (2011, updated 2014) established the global template for bank resolution planning and bail-in tools, widely enacted through national legislation.
  - On crypto-assets: FSB recommendations (July 2023) established that same-activity, same-risk, same-regulation principles should apply, informing the EU's [[MiCA]] regulation and other jurisdictional frameworks.
  - On climate: the [[TCFD]] framework (2017 recommendations) is now embedded in mandatory disclosure requirements in the UK, EU (via [[CSRD]]), Japan, Canada, and other jurisdictions.
  - The FSB engages with the [[IMF]] through joint Early Warning Exercise (EWE) processes and coordinates data standards via the Data Gaps Initiative.

- ### Governance and Membership
  - The FSB Chair is a senior central bank governor or finance ministry official from a member jurisdiction, appointed by the Plenary.
  - Decisions in the Plenary are reached by consensus; the FSB has no supranational legislative powers.
  - Full members (as of 2025) include G20 countries, Hong Kong SAR, Netherlands, Singapore, Spain, and Switzerland, alongside the EU, ECB, and six major international organisations.
  - Non-member jurisdictions participate through the six [[Regional Consultative Groups]], ensuring geographic representation across approximately 70 countries.

- ### Provenance
  - sources:: FSB Charter (2012); G20 London Summit Communiqué (April 2009); FSB Annual Report; FSB Crypto-Asset Recommendations (July 2023); TCFD Recommendations (2017)
  - updated:: 2026-06-13
