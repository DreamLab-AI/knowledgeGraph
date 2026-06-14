public:: true

# Curve Wars
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:6c5e6b7f43599a31fce3ccbe4a4f557132c3e4b9419c427c4b8a67eb6b3239bc",
  "@type": "Page",
  "vc:slug": "curve-wars",
  "title": "Curve Wars",
  "vc:public": true,
  "vc:outboundWikilinks": [
    {
      "@id": "urn:visionflow:linked:vote-escrow-model",
      "vc:label": "Vote-Escrow Model"
    },
    {
      "@id": "urn:visionflow:linked:convex-finance",
      "vc:label": "Convex Finance"
    },
    {
      "@id": "urn:visionflow:linked:liquidity-pool",
      "vc:label": "Liquidity Pool"
    },
    {
      "@id": "urn:visionflow:linked:liquidity-provision",
      "vc:label": "Liquidity Provision"
    }
  ],
  "vc:schemaVersion": 2,
  "vc:legacyProperties": [
    {
      "vc:key": "preferred-term",
      "vc:value": "Curve Wars"
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
  "@id": "urn:ngm:class:curve-wars",
  "@type": "Class",
  "label": "Curve Wars",
  "definition": "The Curve Wars refers to the competitive dynamic among decentralised finance protocols to accumulate vote-escrowed CRV (veCRV) governance power over Curve Finance, thereby gaining the ability to direct CRV token emissions (gauges) toward liquidity pools in which the protocol has a stake. By controlling gauge weights, protocols attract liquidity providers to their pools by offering higher yields, creating a recursive incentive structure. The conflict intensified with the emergence of vote-aggregation intermediaries such as Convex Finance, which pooled user CRV into a dominant veCRV position and issued its own liquid derivative tokens (cvxCRV, vlCVX) to further abstract the underlying governance asset.",
  "domain": "blockchain",
  "maturity": "established",
  "subClassOf": [
    {
      "@id": "urn:ngm:class:decentralised-finance",
      "label": "Decentralised Finance"
    }
  ],
  "relations": {
    "requires": [
      {
        "@id": "urn:ngm:class:vote-escrow-model",
        "label": "Vote-Escrow Model"
      },
      {
        "@id": "urn:ngm:class:governance-token",
        "label": "Governance Token"
      }
    ],
    "hasPart": [
      {
        "@id": "urn:ngm:class:gauge-weight-voting",
        "label": "Gauge Weight Voting"
      },
      {
        "@id": "urn:ngm:class:bribery-market",
        "label": "Bribery Market"
      }
    ],
    "uses": [
      {
        "@id": "urn:ngm:class:liquidity-pool",
        "label": "Liquidity Pool"
      },
      {
        "@id": "urn:ngm:class:automated-market-maker",
        "label": "Automated Market Maker"
      },
      {
        "@id": "urn:ngm:class:smart-contract",
        "label": "Smart Contract"
      },
      {
        "@id": "urn:ngm:class:token-emission",
        "label": "Token Emission"
      }
    ],
    "enables": [
      {
        "@id": "urn:ngm:class:liquidity-provision",
        "label": "Liquidity Provision"
      },
      {
        "@id": "urn:ngm:class:yield-optimisation",
        "label": "Yield Optimisation"
      }
    ],
    "dependsOn": [
      {
        "@id": "urn:ngm:class:curve-finance",
        "label": "Curve Finance"
      },
      {
        "@id": "urn:ngm:class:ethereum",
        "label": "Ethereum"
      },
      {
        "@id": "urn:ngm:class:decentralised-autonomous-organisation",
        "label": "Decentralised Autonomous Organisation"
      }
    ],
    "contrastsWith": [
      {
        "@id": "urn:ngm:class:proof-of-work",
        "label": "Proof of Work"
      },
      {
        "@id": "urn:ngm:class:traditional-market-making",
        "label": "Traditional Market Making"
      }
    ],
    "relatedTo": [
      {
        "@id": "urn:ngm:class:convex-finance",
        "label": "Convex Finance"
      },
      {
        "@id": "urn:ngm:class:liquid-staking",
        "label": "Liquid Staking"
      },
      {
        "@id": "urn:ngm:class:tokenomics",
        "label": "Tokenomics"
      },
      {
        "@id": "urn:ngm:class:miner-extractable-value",
        "label": "Miner Extractable Value"
      },
      {
        "@id": "urn:ngm:class:protocol-owned-liquidity",
        "label": "Protocol-Owned Liquidity"
      }
    ],
    "bridgesTo": [
      {
        "@id": "urn:ngm:class:mechanism-design",
        "label": "Mechanism Design"
      },
      {
        "@id": "urn:ngm:class:game-theory",
        "label": "Game Theory"
      }
    ]
  },
  "sameAs": [
    {
      "@id": "urn:ngm:class:crv-gauge-wars",
      "label": "CRV Gauge Wars"
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
  "@id": "urn:visionflow:annotation:link-resolutions:curve-wars:f04f15390615",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:6c5e6b7f43599a31fce3ccbe4a4f557132c3e4b9419c427c4b8a67eb6b3239bc"
  },
  "vc:resolutions": [
    {
      "raw": "[[Vote-Escrow Model]]",
      "resolved": "urn:visionflow:linked:vote-escrow-model",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Convex Finance]]",
      "resolved": "urn:visionflow:linked:convex-finance",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Liquidity Pool]]",
      "resolved": "urn:visionflow:linked:liquidity-pool",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Liquidity Provision]]",
      "resolved": "urn:visionflow:linked:liquidity-provision",
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
  - The Curve Wars is the competitive dynamic in [[Decentralised Finance]] in which protocols race to accumulate vote-escrowed governance power over [[Curve Finance]] in order to redirect its [[Token Emission]] rewards (via [[Gauge Weight Voting]]) toward liquidity pools that benefit their own assets. The contest created a layered meta-economy of bribery, aggregated voting, and derivative tokens on top of the foundational [[Vote-Escrow Model]], illustrating how [[Tokenomics]] design choices can produce emergent, game-theoretic arms races among autonomous protocols.

- ### Overview
  - Curve Finance is an [[Automated Market Maker]] optimised for stablecoin and pegged-asset swaps, with low slippage and deep [[Liquidity Pool]] depth as core value propositions.
  - Its governance token, CRV, can be time-locked (up to four years) to receive veCRV — vote-escrowed CRV — under the [[Vote-Escrow Model]] pioneered by Curve's founder Michael Egorov.
  - Holders of veCRV vote on "gauge weights" — parameters that determine what fraction of new CRV emissions flow to each liquidity pool in a given epoch.
  - Protocols whose tokens depend on deep, stable liquidity (particularly [[Stablecoin]] issuers and wrapped-asset protocols) discovered that controlling gauge weights was equivalent to subsidising their own liquidity at the expense of other pools.
  - This created a rational incentive to acquire veCRV at scale, sparking competition — the Curve Wars — between late 2021 and 2022 and beyond.
  - The wars revealed that [[Governance Token]] design has direct economic consequences: votes are not merely political expressions but allocation mechanisms for real capital flows.

- ### Key Mechanisms
  - #### Vote-Escrow Locking
    - CRV holders lock tokens for 1 week to 4 years; longer locks yield proportionally more veCRV.
    - veCRV balance decays linearly toward zero as the lock period elapses, forcing continuous relocking to maintain power.
    - The design creates strong time-preference signals: long-term alignment is rewarded, short-term speculation discouraged.
    - See [[Vote-Escrow Model]] for the broader pattern this introduced across DeFi.
  - #### Gauge Weight Voting
    - Every epoch (typically one week), veCRV holders cast votes to distribute CRV emissions across registered pools.
    - Pools with higher gauge weight attract more emissions, which attract more [[Liquidity Provision]], which deepens the pool and reduces slippage for users.
    - The gauge system thus converts governance power directly into liquidity depth and yield for providers.
    - See [[Gauge Weight Voting]] for the technical mechanics.
  - #### Aggregator Protocols (Meta-Governance Layer)
    - [[Convex Finance]] (launched May 2021) became the dominant aggregator: users deposit CRV, which Convex locks permanently as veCRV, issuing cvxCRV as a liquid receipt.
    - CVX token holders can lock CVX as vlCVX to vote on how Convex directs its veCRV — a second-order governance layer atop Curve's first-order system.
    - Similar aggregators emerged: Yearn Finance, Stake DAO, and others competed with Convex for CRV deposits.
    - The aggregation dynamic produced a winner-take-most outcome, with Convex accumulating a dominant share of all circulating veCRV.
  - #### Bribery Markets
    - Once it became clear that veCRV votes had monetary value, explicit [[Bribery Market]] platforms emerged (Votium, Hidden Hand, Warden).
    - Protocols pay bribes denominated in their own tokens or stablecoins to veCRV/vlCVX holders in exchange for gauge-weight votes favouring their pools.
    - The bribe-per-vote ratio became a standardised metric: protocols compare the cost of bribing versus directly buying CRV and locking it themselves.
    - Bribery markets convert diffuse governance participation into a liquid, price-discovered market for influence — a form of [[Mechanism Design]] in practice.
  - #### Protocol-Owned Liquidity Strategies
    - Some protocols (e.g. Frax Finance, Alchemix) accumulated veCRV directly on their own treasuries rather than relying on bribes.
    - This [[Protocol-Owned Liquidity]] approach provides durable, non-mercenary liquidity not subject to the weekly bribe auction.
    - It requires significant upfront capital but reduces ongoing bribery costs over time.

- ### Applications and Use Cases
  - #### Stablecoin Bootstrapping
    - New stablecoin protocols — particularly those with algorithmic or partially-collateralised designs — use Curve gauge influence to bootstrap the initial liquidity that gives their peg credibility.
    - Deep pools on Curve lower slippage for arbitrageurs maintaining the peg, creating a self-reinforcing stability loop.
  - #### Wrapped and Synthetic Asset Markets
    - Protocols issuing wrapped tokens (e.g. stETH, cbETH, rETH in the context of [[Liquid Staking]]) compete for Curve gauge weight to ensure their assets trade near par with the underlying.
  - #### Yield Optimisation
    - [[Yield Optimisation]] vaults (Yearn, Convex strategies) direct deposited assets toward pools with the highest CRV emission boosts, which depend on the operator's veCRV balance.
    - The boost multiplier (up to 2.5×) rewards large veCRV holders disproportionately, creating an economy of scale advantage for aggregators.
  - #### Cross-Protocol Coordination
    - The Curve Wars prompted broader coordination patterns: protocols form coalitions, share bribery costs, and negotiate reciprocal gauge support.
    - This resembles legislative logrolling transposed onto on-chain [[Decentralised Autonomous Organisation]] governance.

- ### Relationships
  - subClassOf:: [[Decentralised Finance]]
  - requires:: [[Vote-Escrow Model]]
  - requires:: [[Governance Token]]
  - hasPart:: [[Gauge Weight Voting]]
  - hasPart:: [[Bribery Market]]
  - uses:: [[Liquidity Pool]]
  - uses:: [[Automated Market Maker]]
  - uses:: [[Smart Contract]]
  - uses:: [[Token Emission]]
  - enables:: [[Liquidity Provision]]
  - enables:: [[Yield Optimisation]]
  - dependsOn:: [[Curve Finance]]
  - dependsOn:: [[Ethereum]]
  - dependsOn:: [[Decentralised Autonomous Organisation]]
  - relatedTo:: [[Convex Finance]]
  - relatedTo:: [[Liquid Staking]]
  - relatedTo:: [[Tokenomics]]
  - relatedTo:: [[Miner Extractable Value]]
  - relatedTo:: [[Protocol-Owned Liquidity]]
  - contrastsWith:: [[Traditional Market Making]]
  - bridges-to:: [[Mechanism Design]]
  - bridges-to:: [[Game Theory]]

- ### Broader Context and Significance
  - #### DeFi Governance Design Lessons
    - The Curve Wars demonstrated that vote-escrow systems generate recursive meta-governance layers: tokens to vote on tokens to vote on emissions.
    - The pattern has been replicated widely (Balancer's veBAL, Frax's veFXS, Velodrome's veVELO on Optimism), confirming it as a foundational [[Tokenomics]] template.
    - Critics argue such systems concentrate power in well-capitalised actors and reduce governance to a purely financial exercise, undermining the democratic intent of [[Decentralised Autonomous Organisation]] models.
  - #### Game-Theoretic Dimensions
    - The wars exhibit characteristics of a Prisoner's Dilemma at the protocol level: individually rational accumulation leads to an arms race that raises the cost floor for all participants.
    - [[Game Theory]] analyses of the equilibrium suggest that bribing is often cheaper than direct CRV acquisition in the short run, but the equilibrium collapses if bribe demand exceeds protocol token budgets.
    - The emergence of a dominant aggregator ([[Convex Finance]]) reflects a coordination equilibrium where depositing with the largest aggregator maximises individual returns, concentrating power further.
  - #### Security and Risk Dimensions
    - Concentrated veCRV in a single aggregator creates systemic risk: a governance attack on Convex could cascade to Curve gauge weights and destabilise dependent pools.
    - Smart contract risks in [[Smart Contract]] aggregator code represent an additional attack surface; several Curve-adjacent protocols have suffered exploits.
    - The model underscores that [[Security]] in DeFi is not purely a code-auditing problem but also a governance-design problem.
  - #### Relationship to MEV
    - Gauge weight changes trigger liquidity rebalancing, which creates [[Miner Extractable Value]] opportunities for bots monitoring pending governance transactions.
    - The interplay between governance latency and block-level transaction ordering is an emerging research area.

- ### Standards and Context
  - Curve Finance operates under EIP-1820 (interface registry) and standard ERC-20 for its tokens; no formal standards govern the vote-escrow or gauge pattern itself, though it has become a de facto industry convention.
  - The gauge weight system is defined entirely in Curve's open-source Vyper contracts, which have been independently audited multiple times.
  - Bribery markets (Votium, Hidden Hand) operate without formal standards, relying on [[Smart Contract]] trust minimisation rather than regulatory frameworks.
  - DeFi governance broadly remains outside the perimeter of most financial regulation, though regulators in the EU ([[Markets in Crypto-Assets Regulation]]) and US are beginning to scrutinise governance token mechanisms.

- ### Provenance
  - sources:: Curve Finance documentation; Convex Finance documentation; Delphi Digital "Curve Wars" research series; Messari DeFi governance reports; academic literature on vote-escrow mechanisms and DeFi mechanism design.
  - updated:: 2026-06-13
