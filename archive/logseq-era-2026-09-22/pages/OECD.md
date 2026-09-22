public:: true

# OECD
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:035ec2e3e8e191ef7e131ae83c5b7e2df07ec9c2d6d907f8685305f8299d29d1",
  "@type": "Page",
  "vc:slug": "oecd",
  "title": "OECD",
  "vc:public": true,
  "vc:outboundWikilinks": [
    {
      "@id": "urn:visionflow:linked:mi-ca",
      "vc:label": "MiCA"
    },
    {
      "@id": "urn:visionflow:linked:infra-legal-and-regulatory",
      "vc:label": "Regulatory Domain"
    },
    {
      "@id": "urn:visionflow:linked:governance",
      "vc:label": "Governance Domain"
    }
  ],
  "vc:schemaVersion": 2,
  "vc:legacyProperties": [
    {
      "vc:key": "preferred-term",
      "vc:value": "OECD"
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
  "@id": "urn:ngm:class:oecd",
  "@type": "Class",
  "label": "OECD",
  "definition": "The OECD (Organisation for Economic Co-operation and Development) is an intergovernmental organisation founded in 1961, headquartered in Paris, comprising 38 member states committed to market economies and democratic governance. It produces comparative economic analysis, harmonised statistics, and binding and non-binding policy instruments spanning taxation, trade, education, digital policy, and emerging technology governance. Its AI Principles (2019) were the first intergovernmental standard for trustworthy artificial intelligence, and its Crypto-Asset Reporting Framework (CARF) extends automatic exchange of financial information to digital assets. OECD outputs exert normative influence through peer review, mutual recognition agreements, and adoption by broader multilateral bodies including the G20.",
  "domain": "governance",
  "maturity": "mature",
  "qualityScore": 0.7,
  "subClassOf": [
    {
      "@id": "urn:ngm:class:governance",
      "label": "Governance"
    }
  ],
  "relations": {
    "requires": [
      {
        "@id": "urn:ngm:class:international-cooperation",
        "label": "International Cooperation"
      },
      {
        "@id": "urn:ngm:class:data-sharing",
        "label": "Data Sharing"
      }
    ],
    "enables": [
      {
        "@id": "urn:ngm:class:corporate-tax-compliance-framework",
        "label": "International Tax Compliance"
      },
      {
        "@id": "urn:ngm:class:trustworthy-ai",
        "label": "Trustworthy AI"
      }
    ],
    "standardizedBy": [
      {
        "@id": "urn:ngm:class:g20",
        "label": "G20"
      }
    ],
    "uses": [
      {
        "@id": "urn:ngm:class:peer-review",
        "label": "Peer Review"
      },
      {
        "@id": "urn:ngm:class:statistics",
        "label": "Comparative Statistics"
      }
    ],
    "supports": [
      {
        "@id": "urn:ngm:class:infra-legal-and-regulatory",
        "label": "Legal and Regulatory"
      },
      {
        "@id": "urn:ngm:class:open-government",
        "label": "Open Government"
      },
      {
        "@id": "urn:ngm:class:digital-economy",
        "label": "Digital Economy"
      }
    ],
    "contrastsWith": [
      {
        "@id": "urn:ngm:class:world-trade-organization",
        "label": "World Trade Organization"
      },
      {
        "@id": "urn:ngm:class:international-monetary-fund",
        "label": "International Monetary Fund"
      }
    ],
    "bridgesTo": [
      {
        "@id": "urn:ngm:class:ai-governance",
        "label": "AI Governance"
      },
      {
        "@id": "urn:ngm:class:blockchain-regulation",
        "label": "Blockchain Regulation"
      },
      {
        "@id": "urn:ngm:class:mi-ca",
        "label": "MiCA"
      }
    ],
    "relatedTo": [
      {
        "@id": "urn:ngm:class:fatf",
        "label": "FATF"
      },
      {
        "@id": "urn:ngm:class:eu-ai-act-regulatory-instrument",
        "label": "EU AI Act"
      },
      {
        "@id": "urn:ngm:class:financial-stability-board",
        "label": "Financial Stability Board"
      }
    ]
  },
  "sameAs": [
    {
      "@id": "urn:ngm:class:organisation-for-economic-co-operation-and-development",
      "label": "Organisation for Economic Co-operation and Development"
    }
  ],
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
  "@id": "urn:visionflow:annotation:link-resolutions:oecd:6b1c64c81e67",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:035ec2e3e8e191ef7e131ae83c5b7e2df07ec9c2d6d907f8685305f8299d29d1"
  },
  "vc:resolutions": [
    {
      "raw": "[[MiCA]]",
      "resolved": "urn:visionflow:linked:mi-ca",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Regulatory Domain]]",
      "resolved": "urn:visionflow:linked:infra-legal-and-regulatory",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Governance Domain]]",
      "resolved": "urn:visionflow:linked:governance",
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
  - The OECD (Organisation for Economic Co-operation and Development) is an intergovernmental organisation founded in 1961 as the successor to the post-war Organisation for European Economic Co-operation (OEEC), headquartered in Paris and comprising 38 member states. It functions as a forum for governments to compare policy experience, set binding and non-binding international standards, and harmonise economic and regulatory frameworks. In digital policy it has produced the first intergovernmental [[AI Principles]], the [[Crypto-Asset Reporting Framework]] for tax information exchange on digital assets, and foundational work on the [[Digital Economy]]. Its influence extends well beyond formal membership through adoption by the [[G20]], endorsement of its frameworks by [[FATF]], and alignment with regional bodies such as the [[EU AI Act]].

- ### Overview
  - The OECD was reconstituted in 1961 from the OEEC (established 1948 to administer Marshall Plan aid) to address a broader global agenda. Its mandate covers economic policy, trade, investment, social policy, education, environment, and increasingly digital and data governance.
  - The organisation operates through a secretariat based in Paris, a Ministerial Council comprising member-country representatives, and more than 250 committees and working groups that draft instruments ranging from legally non-binding Recommendations to Decisions with binding force.
  - OECD outputs carry exceptional normative weight despite being mostly non-binding: member governments use peer review and public benchmarking to generate voluntary compliance, while the G20 routinely endorses OECD frameworks as the preferred multilateral solution.
  - It maintains close relationships with [[International Monetary Fund]], [[World Trade Organization]], [[Financial Stability Board]], and [[FATF]], often co-authoring frameworks at the intersection of their mandates.
  - The Digital Economy Ministerial and the Global Forum on Tax Transparency are two key OECD governance platforms driving policy in areas relevant to technology and finance.

- ### Key Components
  - #### AI Governance
    - The [[OECD AI Principles]] (May 2019) were adopted by the OECD Council and subsequently endorsed by G20 leaders as the first intergovernmental high-level standard for [[Trustworthy AI]].
    - The five principles cover: inclusive growth and sustainable development; human-centred values and fairness; transparency and explainability; robustness, security and safety; accountability.
    - The [[OECD AI Policy Observatory]] (OECD.AI) tracks national AI policies, strategies, and regulations, serving as a global clearinghouse for [[AI Governance]] information.
    - OECD AI work informs the [[EU AI Act]], the [[Blueprint for an AI Bill of Rights]] (US), and bilateral AI agreements among members.
  - #### Taxation and Digital Assets
    - The [[Base Erosion and Profit Shifting]] (BEPS) project (2013–2015) produced 15 Action Plans to combat aggressive tax planning by multinationals; BEPS 2.0 introduced a [[Global Minimum Tax]] (Pillar Two) at 15% for large multinationals.
    - The [[Common Reporting Standard]] (CRS), adopted 2014, requires automatic exchange of financial account information between tax authorities.
    - The [[Crypto-Asset Reporting Framework]] (CARF, 2022) extends CRS-style automatic exchange to crypto-assets, obliging exchanges and custodians to report users' holdings to their tax jurisdiction.
    - CARF is scheduled for adoption by numerous jurisdictions and provides the [[International Tax Compliance]] infrastructure underlying [[Blockchain Regulation]].
  - #### Data and Privacy
    - The OECD Privacy Guidelines (first issued 1980, revised 2013) established foundational principles — purpose limitation, data quality, security safeguards, openness, individual participation, accountability — that directly influenced the EU's [[GDPR]] and many national privacy laws.
    - The OECD Guidelines on the Security of Information Systems and Networks (2002) form an early reference for national [[Cybersecurity]] strategies.
    - The Going Digital initiative produces cross-cutting analysis of [[Digital Transformation]], [[Data Governance]], and [[Platform Economy]] dynamics.
  - #### Trade and Investment
    - The [[OECD Guidelines for Multinational Enterprises]] set out responsible business conduct expectations including in [[Supply Chain]] due diligence and environmental standards.
    - The Code of Liberalisation of Capital Movements and the Code of Liberalisation of Current Invisible Operations are binding OECD instruments governing cross-border capital flows.
  - #### Education and Skills
    - The [[Programme for International Student Assessment]] (PISA) benchmarks 15-year-old students across member and partner countries in reading, mathematics, and science.
    - The Skills Outlook series tracks workforce competency needs including digital literacy relevant to [[Distributed Collaboration]] and the future of work.

- ### Applications / Use Cases
  - **International tax information exchange**: CARF and CRS frameworks are implemented by tax authorities to detect undeclared income held via foreign financial accounts or crypto-asset platforms.
  - **National AI strategy benchmarking**: Governments use OECD.AI Observatory data to position their AI policies against global peers and adopt best-practice regulatory approaches aligned with [[Trustworthy AI]] norms.
  - **Regulatory convergence for digital assets**: CARF serves as the internationally endorsed template that jurisdictions like the EU (DAC8 directive), UK, US, and Australia use to extend tax transparency to [[Crypto-Asset Reporting Framework]] obligations, reducing arbitrage.
  - **Minimum corporate tax implementation**: Pillar Two rules from OECD/G20 Inclusive Framework are being transposed into national law globally, reshaping incentives for technology multinationals domiciled in low-tax jurisdictions.
  - **Open government and anti-corruption**: The OECD Anti-Bribery Convention (1997) is a binding instrument; the [[Open Government]] partnership frameworks promote transparency and civic participation.
  - **Competition policy for platform markets**: OECD competition committee work on big tech and digital markets informs national merger review and abuse-of-dominance enforcement relevant to [[Platform Economy]] actors.
  - **Climate and green finance taxonomy**: OECD work on green investment and blended finance intersects with emerging sustainable finance classification systems relevant to ESG data standards.

- ### Relationships
  - hasPart:: [[AI Principles]], [[Crypto-Asset Reporting Framework]], [[Base Erosion and Profit Shifting]], [[Programme for International Student Assessment]]
  - partOf:: [[International Governance Institutions]]
  - requires:: [[Multilateral Cooperation]], [[Data Sharing]]
  - enables:: [[Automatic Exchange of Information]], [[International Tax Compliance]], [[Policy Harmonisation]], [[Trustworthy AI]]
  - standardizedBy:: [[OECD Council]], [[G20]]
  - implements:: [[Common Reporting Standard]], [[Global Minimum Tax]]
  - uses:: [[Peer Review]], [[Comparative Statistics]]
  - supports:: [[Regulatory Domain]], [[Open Government]], [[Digital Economy]]
  - contrastsWith:: [[World Trade Organization]], [[International Monetary Fund]]
  - bridges-to:: [[AI Governance]], [[Blockchain Regulation]], [[MiCA]]
  - relatedTo:: [[FATF]], [[EU AI Act]], [[Financial Stability Board]]

- ### Standards & Context
  - The OECD is not a UN body but works closely with the UN system, particularly UNCTAD, UNDP, and the ITU on digital economy issues.
  - OECD Recommendations are the most common instrument: adopted by the Council, they are not legally binding but create a political expectation of implementation, subject to peer review under the OECD Follow-Up Mechanism.
  - OECD Decisions are binding on member states; Declarations and Ministerial Communiqués carry softer political commitments.
  - The [[Inclusive Framework on BEPS]] extends OECD tax norms to over 140 non-member countries, making it the de facto global standard-setter for corporate taxation.
  - The [[Global Forum on Transparency and Exchange of Information for Tax Purposes]] (co-led by OECD) peer-reviews over 160 jurisdictions on CRS and CARF implementation, using ratings that affect market access and reputation.
  - Key digital governance frameworks aligned to OECD: [[GDPR]] (privacy), [[EU AI Act]] (AI), [[DAC8]] (crypto reporting), [[MiCA]] (crypto-asset markets).
  - OECD membership requirements (market economy, rule of law, democratic governance, willingness to accept OECD norms) mean accession itself drives regulatory alignment in candidate countries.

- ### Provenance
  - sources:: OECD.org official documentation; OECD AI Principles (2019); CARF technical rules (2022); BEPS Action Plans (2015); OECD Privacy Guidelines (1980, 2013 revision)
  - updated:: 2026-06-13
