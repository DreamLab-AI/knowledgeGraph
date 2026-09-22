public:: true

# DeepDAO
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:deep-dao",
  "@type": "Page",
  "vc:slug": "deep-dao",
  "title": "DeepDAO",
  "vc:public": true,
  "vc:outboundWikilinks": [],
  "vc:schemaVersion": 2
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:deep-dao",
  "@type": "Class",
  "label": "DeepDAO",
  "definition": "DeepDAO is a leading analytics and data aggregation platform dedicated to tracking and measuring the organisational health, financial activity, governance participation, and membership dynamics of decentralised autonomous organisations across multiple blockchain networks. It provides standardised metrics — total assets under management, number of token holders, proposal counts, voter participation rates, and delegate rankings — that enable comparative analysis of DAO ecosystems and inform investment, research, and governance design decisions.",
  "domain": "blockchain",
  "maturity": "established",
  "subClassOf": [{"@id": "urn:ngm:class:dao-analytics", "label": "DAO Analytics"}],
  "relations": {
    "uses": [
      {"@id": "urn:ngm:class:blockchain-analytics", "label": "Blockchain Analytics"},
      {"@id": "urn:ngm:class:on-chain-governance", "label": "On-chain Governance"},
      {"@id": "urn:ngm:class:governance-token", "label": "Governance Token"}
    ],
    "enables": [
      {"@id": "urn:ngm:class:dao-governance", "label": "DAO Governance"},
      {"@id": "urn:ngm:class:decentralized-governance", "label": "Decentralized Governance"},
      {"@id": "urn:ngm:class:decision-transparency", "label": "Decision Transparency"}
    ],
    "relatedTo": [
      {"@id": "urn:ngm:class:dao", "label": "DAO"},
      {"@id": "urn:ngm:class:dao-tooling", "label": "DAO Tooling"}
    ]
  },
  "quality": 0.8
}
```

- ### Definition
  - [[DeepDAO]] is the primary analytics platform for the [[DAO]] ecosystem, aggregating on-chain and off-chain governance data to produce standardised metrics that enable comparative assessment of [[DAO Analytics]], supporting researchers, investors, and practitioners engaged in [[Decentralized Governance]] design and evaluation.

- ### Relationships
  - DeepDAO is a specialised instance of [[DAO Analytics]] infrastructure that ingests data from [[Blockchain Analytics]] pipelines across Ethereum, Polygon, Arbitrum, and other chains. It tracks [[On-chain Governance]] activity at the proposal and vote level, linking voter addresses to [[Governance Token]] holdings to compute delegate influence rankings and participation ratios. By making these metrics publicly accessible, it supports [[DAO Governance]] design research and enables [[Decision Transparency]] for communities evaluating their governance health. It operates within the broader [[DAO Tooling]] ecosystem alongside snapshot voting, tally, and forum platforms that together constitute the operational infrastructure of [[Decentralized Governance]] at scale.

- ### Content
  - DeepDAO was founded in 2019 by Eyal Eithcowich with the mission of bringing empirical rigour to the emerging DAO sector, which was rapidly growing in both number and aggregate assets under management but lacked standardised measurement frameworks. The platform's initial focus on Ethereum-based governance contracts expanded over time to cover multi-chain DAOs operating on Polygon, Arbitrum, Optimism, Solana, and other networks. By 2023, DeepDAO tracked thousands of DAOs managing billions of dollars in treasury assets, making it the de facto census of organised decentralised governance.

  - The platform's core data model aggregates multiple dimensions of DAO health. Financial metrics track treasury size, asset composition, runway, and revenue streams. Governance metrics measure proposal frequency, average voter turnout, delegate concentration (Gini coefficient of voting power), and the ratio of token holders who have ever voted. People metrics identify active contributors, core delegates, and membership growth trajectories. These dimensions are combined into composite health scores and radar charts that allow stakeholders to quickly assess a DAO's operational maturity, decentralisation degree, and engagement quality relative to peers.

  - DeepDAO's significance extends beyond its role as a data provider. Its metrics have become reference points in governance research, academic papers studying DAO efficiency and decentralisation, and due diligence frameworks used by Web3 venture funds. The platform popularised the concept of "governance participation rate" as an analogue to electoral turnout in traditional political science, highlighting that many DAOs suffer from plutocratic concentration and voter apathy — insights that have directly motivated the development of delegation mechanisms, quadratic voting experiments, and participation incentive designs within the DAO tooling ecosystem.

  - Through 2024-2025, DeepDAO expanded its intelligence layer to include delegate profiles, project cross-participation graphs, and AI-assisted governance trend analysis. The platform launched an API enabling third-party applications and researchers to embed DAO health metrics into dashboards, investment theses, and governance automation tools. Growing institutional interest in DAOs — both from traditional finance seeking yield through protocol participation and from Web3-native projects professionalising their governance — has driven demand for DeepDAO's structured data as a foundation for informed participation. The platform also began tracking DAO legal wrappers, connecting on-chain governance data to the emerging body of DAO legislation in jurisdictions including Wyoming, Marshall Islands, and Switzerland.

