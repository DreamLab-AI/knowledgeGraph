public:: true
alias:: Vote Escrow Model

# Vote-Escrow Model
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:vote-escrow-model",
  "@type": "Page",
  "vc:slug": "vote-escrow-model",
  "title": "Vote-Escrow Model",
  "vc:public": true,
  "vc:outboundWikilinks": [],
  "vc:schemaVersion": 2
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:vote-escrow-model",
  "@type": "Class",
  "label": "Vote-Escrow Model",
  "definition": "The vote-escrow model is a DeFi tokenomics mechanism in which holders of a governance token lock their tokens for a chosen duration — typically up to four years — in exchange for a non-transferable vote-escrow token (such as veCRV in Curve Finance) that grants proportional governance voting power and fee-sharing rights, with voting weight decaying linearly as the lock approaches expiry, aligning token holder incentives with long-term protocol health by penalising short-term speculation. The model was pioneered by Curve Finance and subsequently adopted across dozens of DeFi protocols, spawning meta-governance layers such as Convex Finance that aggregate and direct veToken voting power.",
  "domain": "blockchain",
  "maturity": "established",
  "subClassOf": [{"@id": "urn:ngm:class:tokenomics", "label": "Tokenomics"}],
  "relations": {
    "uses": [
      {"@id": "urn:ngm:class:governance-token", "label": "Governance Token"},
      {"@id": "urn:ngm:class:on-chain-governance", "label": "On-chain Governance"},
      {"@id": "urn:ngm:class:dao-governance", "label": "DAO Governance"}
    ],
    "enables": [
      {"@id": "urn:ngm:class:liquidity-mining", "label": "Liquidity Mining"},
      {"@id": "urn:ngm:class:yield-farming", "label": "Yield Farming"}
    ],
    "relatedTo": [
      {"@id": "urn:ngm:class:convex-finance", "label": "Convex Finance"},
      {"@id": "urn:ngm:class:token-economics", "label": "Token Economics"},
      {"@id": "urn:ngm:class:tokenomics-governance", "label": "Tokenomics Governance"}
    ]
  },
  "quality": 0.8
}
```

- ### Definition
  - The [[Vote-Escrow Model]] is a [[Tokenomics]] mechanism that grants time-weighted governance power to holders who commit their [[Governance Token]] into a time-locked escrow — creating non-transferable veTokens with voting weight proportional to lock duration — aligning long-term incentives through [[On-chain Governance]] and enabling [[Liquidity Mining]] emission direction to be controlled democratically by committed token holders.

- ### Relationships
  - The vote-escrow model is an application of [[Tokenomics]] and [[Token Economics]] principles to DeFi governance design, operating through [[On-chain Governance]] smart contracts that manage lock duration, voting weight decay, and gauge-weighted [[Liquidity Mining]] emission allocation. It uses [[Governance Token]] as its base asset and integrates with [[DAO Governance]] systems to make protocol decisions including fee parameters, collateral whitelisting, and treasury allocation. [[Yield Farming]] strategies frequently revolve around maximising veToken-directed emission rewards. [[Convex Finance]] exemplifies the meta-governance layer that emerged atop the model, aggregating veCRV voting power from many depositors. [[Tokenomics Governance]] analysis of veToken systems studies the resulting equilibria and bribe market dynamics.

- ### Content
  - The vote-escrow model was introduced by Curve Finance in August 2020 with the launch of the CRV governance token and the veCRV locking mechanism. Curve is a decentralised exchange specialised for low-slippage stablecoin and pegged-asset trading, generating substantial fees. Curve's innovation was to make CRV token emission rates across its liquidity pools — the "gauges" — controllable by veCRV holders through weekly on-chain votes, thereby turning governance voting into a direct economic lever: pools with more veCRV directed to their gauge receive higher CRV rewards, attracting more liquidity providers.

  - Mechanically, a holder locks CRV tokens for any duration from one week to four years. The locking smart contract mints veCRV in proportion to the amount locked times the remaining lock time as a fraction of four years, so one CRV locked for four years yields one veCRV, while one CRV locked for one year yields 0.25 veCRV. veCRV is non-transferable and non-tradeable — it can only be obtained by locking. As time passes, veCRV decays linearly to zero at lock expiry. Holders can extend their lock at any time to reset or increase their veCRV balance. In exchange for locking, holders receive: boosted CRV yields (up to 2.5×) on their own liquidity positions, a share of protocol trading fees, and gauge-weighting voting power.

  - The model created a "Curve Wars" dynamic: protocols whose stablecoins or tokens trade on Curve compete to accumulate veCRV voting power to direct gauge emissions to their pools, subsidising their own liquidity. This spawned the bribe market — protocols pay veCRV holders to vote in their favour via platforms like Votium and Hidden Hand. [[Convex Finance]] became the dominant aggregator by allowing CRV holders to deposit and receive cvxCRV (a liquid representation), with Convex's accumulated veCRV voting power governed by CVX holders, creating a two-layer governance architecture. Dozens of protocols — Frax, Balancer's veBAL, Yearn, Aura Finance — subsequently adopted or adapted the ve-model.

  - In 2024-2025 the vote-escrow model continues to evolve. Criticisms of pure ve-models include capital inefficiency (locked tokens earn no compounding yield) and plutocratic dynamics where large holders dominate gauge votes regardless of protocol alignment. New variants such as ve(3,3) (Solidly and forks like Velodrome on Optimism, Aerodrome on Base) introduce epoch-based vote-resetting and fee-to-voter mechanics to reduce mercenary voting. The liquid staking approach — wrapping locked veTokens into liquid receipt tokens while maintaining voting delegation — is gaining traction as a solution to the illiquidity problem, with several implementations attracting significant total value locked.