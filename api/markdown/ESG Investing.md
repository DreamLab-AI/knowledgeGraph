public:: true

# esg investing
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:9ecd3ef636fbe45bb13f27ad65a5bdedc4ce3d6c7da0c8c106cf6d268b6d9547",
  "@type": "Page",
  "vc:slug": "esg-investing",
  "title": "esg investing",
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
  "@id": "urn:ngm:class:esg-investing",
  "@type": "Class",
  "label": "ESG Investing",
  "definition": "ESG Investing is an investment methodology that systematically integrates Environmental, Social, and Governance criteria into the analysis, selection, and management of portfolios, enabling investors to assess material sustainability risks and ethical impact alongside conventional financial returns. Environmental factors encompass carbon emissions, resource consumption, and climate transition exposure; social factors cover labour practices, supply-chain conditions, human rights, and community impact; governance factors evaluate board composition, executive remuneration, audit independence, and shareholder rights. ESG signals are incorporated through negative screening, positive best-in-class selection, engagement and proxy voting, or the construction of fully ESG-integrated thematic funds, each reflecting different theories of how non-financial data predicts long-run financial performance.",
  "domain": "finance",
  "maturity": "established",
  "subClassOf": [
    {
      "@id": "urn:ngm:class:sustainable-finance",
      "label": "Sustainable Finance"
    }
  ],
  "relations": {
    "hasPart": [
      {
        "@id": "urn:ngm:class:corporate-governance",
        "label": "Corporate Governance"
      }
    ],
    "partOf": [
      {
        "@id": "urn:ngm:class:sustainable-finance",
        "label": "Sustainable Finance"
      },
      {
        "@id": "urn:ngm:class:impact-investing",
        "label": "Impact Investing"
      }
    ],
    "requires": [
      {
        "@id": "urn:ngm:class:esg",
        "label": "ESG Data Disclosure"
      },
      {
        "@id": "urn:ngm:class:materiality-assessment",
        "label": "Materiality Assessment"
      }
    ],
    "enables": [
      {
        "@id": "urn:ngm:class:green-bond-market",
        "label": "Green Bond"
      },
      {
        "@id": "urn:ngm:class:impact-measurement",
        "label": "Impact Measurement"
      },
      {
        "@id": "urn:ngm:class:stewardship",
        "label": "Stewardship"
      }
    ],
    "dependsOn": [
      {
        "@id": "urn:ngm:class:esg",
        "label": "ESG Rating"
      }
    ],
    "uses": [
      {
        "@id": "urn:ngm:class:sanctions-screening",
        "label": "Portfolio Screening"
      },
      {
        "@id": "urn:ngm:class:on-chain-voting",
        "label": "Proxy Voting"
      },
      {
        "@id": "urn:ngm:class:stakeholder-engagement",
        "label": "Stakeholder Engagement"
      }
    ],
    "supports": [
      {
        "@id": "urn:ngm:class:governance",
        "label": "Governance"
      },
      {
        "@id": "urn:ngm:class:climate-risk-management",
        "label": "Climate Risk Management"
      },
      {
        "@id": "urn:ngm:class:sustainable-development-goals",
        "label": "Sustainable Development Goals"
      }
    ],
    "standardizedBy": [
      {
        "@id": "urn:ngm:class:sfdr",
        "label": "SFDR"
      },
      {
        "@id": "urn:ngm:class:gri-standards",
        "label": "GRI Standards"
      },
      {
        "@id": "urn:ngm:class:tcfd",
        "label": "TCFD"
      }
    ],
    "contrastsWith": [
      {
        "@id": "urn:ngm:class:conventional-investing",
        "label": "Conventional Investing"
      },
      {
        "@id": "urn:ngm:class:greenwashing",
        "label": "Greenwashing"
      }
    ],
    "bridgesTo": [
      {
        "@id": "urn:ngm:class:tokenization",
        "label": "Tokenization"
      },
      {
        "@id": "urn:ngm:class:decentralised-autonomous-organisation",
        "label": "Decentralised Autonomous Organisation"
      },
      {
        "@id": "urn:ngm:class:carbon-credits",
        "label": "Carbon Credit"
      }
    ],
    "relatedTo": [
      {
        "@id": "urn:ngm:class:green-finance",
        "label": "Green Finance"
      },
      {
        "@id": "urn:ngm:class:sustainability",
        "label": "Sustainability"
      }
    ]
  },
  "sameAs": [
    {
      "@id": "urn:ngm:class:socially-responsible-investing",
      "label": "Socially Responsible Investing"
    },
    {
      "@id": "urn:ngm:class:responsible-investment",
      "label": "Responsible Investment"
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

- ### Definition
  - ESG Investing is an investment methodology that integrates [[Environmental Criteria]], [[Social Criteria]], and [[Corporate Governance]] factors into portfolio analysis and asset selection, enabling investors to account for material sustainability risks alongside conventional return metrics. Unlike pure [[Ethical Investing]] based on exclusions, ESG analysis treats non-financial signals as financially relevant data that affects long-run value. It sits within the broader family of [[Sustainable Finance]], overlapping with [[Impact Investing]] and [[Socially Responsible Investing]], and provides the analytical substrate for instruments such as [[Green Bond]]s, sustainability-linked loans, and ESG-labelled funds.

- ### Overview
  - ESG Investing emerged from the socially responsible investing movement of the 1970s–1990s but was formalised conceptually in the 2004 United Nations "Who Cares Wins" initiative that coined the acronym.
  - It rests on the premise that environmental, social, and governance risks are financially material: a company with poor carbon management faces regulatory fines and stranded assets; weak labour practices generate reputational and legal liability; inadequate governance enables fraud and capital misallocation.
  - Three primary investment styles apply ESG data differently:
    - **Negative screening** — excluding companies or sectors failing minimum ESG thresholds (e.g., tobacco, weapons, high-emissions industries).
    - **Best-in-class positive selection** — holding companies that score highest on ESG metrics within each sector, even in controversial sectors.
    - **Full integration** — systematically adjusting valuation models, discount rates, and risk parameters based on ESG signals alongside financial fundamentals.
  - **Engagement and stewardship** represent a fourth approach in which investors retain holdings but use [[Proxy Voting]] and direct dialogue to drive corporate behaviour change, often coordinated through bodies such as Climate Action 100+ or the PRI.
  - The global scale of ESG assets under management reached multi-trillion-dollar levels by the early 2020s, making it a mainstream institutional consideration rather than a niche.

- ### Key Components
  - **Environmental (E)** pillar:
    - Carbon emissions (Scope 1, 2, and 3 under [[GHG Protocol]])
    - Energy efficiency and renewable energy transition
    - Water usage, waste, and land-use impact
    - Climate [[Physical Risk]] (flood, heat, drought exposure of physical assets)
    - [[Climate Risk Management]] and alignment with Paris Agreement pathways
  - **Social (S)** pillar:
    - Labour rights, health and safety, and living wages across [[Supply Chain]]s
    - Diversity, equity, and inclusion metrics at board and workforce levels
    - Community relations, indigenous peoples' rights, and local economic impact
    - Data privacy, product safety, and consumer protection
    - Human rights due diligence linked to [[Modern Slavery]] reporting
  - **Governance (G)** pillar:
    - Board independence, diversity, and separation of chair and CEO roles
    - Executive remuneration alignment with long-term performance
    - Anti-corruption policies, audit quality, and whistleblower protections
    - Shareholder rights, voting structures, and related-party transaction controls
    - Tax transparency and political lobbying disclosure
  - **ESG Ratings and Data**:
    - Provided by agencies including MSCI, Sustainalytics, ISS, and Bloomberg ESG
    - Ratings assess companies on a scored or letter-grade basis
    - Significant divergence exists across providers due to differing metric choices, weightings, and data sources — a known structural problem documented in academic literature
    - [[ESG Data Disclosure]] quality depends on voluntary and mandatory [[Non-Financial Reporting]] standards

- ### Mechanisms and Instruments
  - **[[Green Bond]]** — fixed-income instruments where proceeds are earmarked for environmental projects; governed by the [[ICMA Green Bond Principles]]
  - **Sustainability-Linked Bond (SLB)** — coupon tied to issuer achieving specified ESG KPIs, structurally distinct from use-of-proceeds green bonds
  - **ESG Exchange-Traded Fund (ETF)** — passive fund tracking an ESG-screened or ESG-weighted index
  - **Thematic fund** — concentrated exposure to specific ESG themes (clean energy, water, gender diversity)
  - **[[Carbon Credit]]** — tradeable permit representing one tonne of CO₂ equivalent reduced or avoided; links to [[Emissions Trading Scheme]] mechanisms
  - **Tokenised ESG assets** — blockchain-based tokens embedding verifiable sustainability data in smart contracts, enabling fractional ownership of [[Green Bond]]s or carbon credits and real-time impact reporting (see [[Tokenization]])

- ### Applications and Use Cases
  - **Institutional asset management** — pension funds, sovereign wealth funds, and insurance companies integrating ESG to manage long-horizon climate and regulatory risk in line with fiduciary duty redefinitions
  - **Retail investment products** — ESG-labelled mutual funds and ETFs sold to individual investors seeking alignment between portfolio and personal values
  - **Corporate borrowing** — sustainability-linked loans with interest rates tied to ESG performance targets (e.g., emissions reduction, gender pay parity)
  - **Index construction** — major index providers (MSCI, FTSE Russell, S&P) constructing ESG variants of flagship indices used as passive benchmarks
  - **Regulatory compliance** — fund managers in the EU classifying products under [[SFDR]] Article 6, 8, or 9 to disclose sustainability ambition to retail investors
  - **Stewardship campaigns** — coordinated [[Proxy Voting]] and shareholder resolutions on climate strategy, executive pay, and deforestation at annual general meetings
  - **Supply-chain ESG due diligence** — buyers requiring suppliers to meet ESG standards as a condition of contract, using [[Non-Financial Reporting]] data to verify performance
  - **Sovereign ESG bonds** — national governments issuing green or sustainability bonds to fund public infrastructure and meet climate commitments

- ### Relationships
  - partOf:: [[Sustainable Finance]]
  - partOf:: [[Impact Investing]]
  - hasPart:: [[Environmental Criteria]]
  - hasPart:: [[Social Criteria]]
  - hasPart:: [[Corporate Governance]]
  - requires:: [[ESG Data Disclosure]]
  - requires:: [[Materiality Assessment]]
  - enables:: [[Green Bond]]
  - enables:: [[Impact Measurement]]
  - enables:: [[Stewardship]]
  - dependsOn:: [[ESG Rating]]
  - dependsOn:: [[Non-Financial Reporting]]
  - uses:: [[Portfolio Screening]]
  - uses:: [[Proxy Voting]]
  - uses:: [[Stakeholder Engagement]]
  - supports:: [[Governance]]
  - supports:: [[Climate Risk Management]]
  - supports:: [[Sustainable Development Goals]]
  - standardizedBy:: [[SFDR]]
  - standardizedBy:: [[GRI Standards]]
  - standardizedBy:: [[TCFD]]
  - contrastsWith:: [[Greenwashing]]
  - contrastsWith:: [[Conventional Investing]]
  - bridges-to:: [[Tokenization]]
  - bridges-to:: [[Decentralised Autonomous Organisation]]
  - bridges-to:: [[Carbon Credit]]
  - relatedTo:: [[Green Finance]]
  - relatedTo:: [[Sustainability]]
  - relatedTo:: [[Socially Responsible Investing]]

- ### Standards and Regulatory Context
  - **[[SFDR]]** (EU Sustainable Finance Disclosure Regulation) — classifies funds as Article 6 (no ESG integration), Article 8 (environmental/social promotion), or Article 9 (sustainable investment objective); requires Principal Adverse Impact disclosures
  - **[[EU Taxonomy Regulation]]** — defines a classification system for environmentally sustainable economic activities against six environmental objectives, used to determine green bond and fund eligibility
  - **[[TCFD]]** (Task Force on Climate-related Financial Disclosures) — voluntary framework for disclosing climate-related risks and opportunities; adopted into law in several jurisdictions including the UK
  - **[[GRI Standards]]** (Global Reporting Initiative) — modular framework for corporate sustainability reporting across environmental, social, and governance topics, widely used for voluntary disclosure
  - **[[SASB Standards]]** (Sustainability Accounting Standards Board) — industry-specific materiality standards identifying financially relevant ESG disclosures by sector, now consolidated under the [[IFRS Foundation]] as ISSB standards
  - **[[ISSB]]** (International Sustainability Standards Board) — established 2021 under the IFRS Foundation; issued IFRS S1 (general sustainability disclosures) and IFRS S2 (climate disclosures) to create a global baseline
  - **[[PRI]]** (Principles for Responsible Investment) — UN-supported investor initiative providing a framework of six principles for incorporating ESG into investment practice and ownership policies
  - **[[ICMA Green Bond Principles]]** — voluntary process guidelines for green bond issuance covering use of proceeds, project evaluation, management of proceeds, and reporting

- ### Challenges and Criticisms
  - **Ratings divergence** — major ESG data providers show low correlation in their ratings for the same company, undermining comparability and enabling fund managers to select ratings that suit their products
  - **[[Greenwashing]]** — funds marketing themselves as ESG-compliant while holding significant exposure to high-carbon or harmful industries; regulatory action increasing (SEC, FCA enforcement)
  - **Materiality inconsistency** — lack of agreement on which ESG factors are financially material for which industries makes systematic comparison difficult
  - **Double materiality debate** — financial materiality (ESG risk to the company) vs. environmental/social materiality (company's impact on the world); EU approach requires both while ISSB focuses on financial materiality
  - **Data quality and availability** — smaller companies and emerging-market issuers have limited ESG disclosure, creating coverage gaps in ESG analysis
  - **Alpha versus impact tension** — debate over whether ESG integration genuinely improves risk-adjusted returns or primarily signals preferences; evidence is mixed across time periods and geographies

- ### Blockchain and Technology Intersections
  - Blockchain-based provenance systems create tamper-resistant shared records for supply-chain emissions and sustainability data, reducing the divergence problem (see [[Distributed Ledger]])
  - [[Tokenization]] of green bonds and carbon credits embeds real-time reporting obligations in smart-contract logic and enables fractional retail participation
  - [[Decentralised Autonomous Organisation]] (DAO) mechanisms applied to ESG funds allow token holders to vote on use-of-proceeds decisions, extending [[Stakeholder Engagement]] to retail investors
  - [[Smart Contract]] automation can enforce sustainability-linked coupon step-ups without manual verification, reducing counterparty risk in SLBs
  - Satellite data, IoT sensors, and [[Machine Learning]] increasingly used to generate independent ESG signals (deforestation detection, methane leak identification) that bypass company self-reporting biases

- ### Provenance
  - sources:: UNPRI "Who Cares Wins" (2004); EU SFDR Regulation (EU) 2019/2088; ISSB IFRS S1 and S2 (2023); GRI Standards; TCFD Recommendations; SASB Standards
  - updated:: 2026-06-13
  - migration-date:: 2026-05-19T00:00:00Z
