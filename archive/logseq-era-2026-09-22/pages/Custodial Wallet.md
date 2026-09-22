public:: true

# Custodial Wallet
```json-ld
{ "@context":"https://narrativegoldmine.com/ns/v1", "@id":"urn:visionflow:page:custodial-wallet", "@type":"Page", "title":"Custodial Wallet", "vc:slug":"custodial-wallet", "vc:public":true, "vc:schemaVersion":2, "vc:outboundWikilinks":[] }
```
```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:custodial-wallet",
  "@type": "Class",
  "label": "Custodial Wallet",
  "definition": "A custodial wallet is a cryptocurrency wallet in which a third party — typically an exchange or custodian — holds and controls the private keys on behalf of the user, who accesses funds through an account rather than direct on-chain key ownership. This model trades the self-sovereignty of non-custodial wallets for convenience, account recovery, and integrated services, while introducing counterparty risk and reliance on the custodian's security and solvency. Custodial arrangements are common at centralised exchanges and increasingly subject to regulatory requirements for asset segregation and proof of reserves.",
  "domain": "blockchain",
  "maturity": "established",
  "subClassOf": [
    { "@id": "urn:ngm:class:digital-wallet", "label": "Digital Wallet" }
  ],
  "relations": {
    "hasPart": [
      { "@id": "urn:ngm:class:account-balance-ledger", "label": "Account Balance Ledger" },
      { "@id": "urn:ngm:class:omnibus-account", "label": "Omnibus Account" }
    ],
    "partOf": [
      { "@id": "urn:ngm:class:centralised-exchange", "label": "Centralised Exchange" }
    ],
    "uses": [
      { "@id": "urn:ngm:class:hot-wallet", "label": "Hot Wallet" },
      { "@id": "urn:ngm:class:cold-storage", "label": "Cold Storage" }
    ],
    "dependsOn": [
      { "@id": "urn:ngm:class:key-management", "label": "Key Management" },
      { "@id": "urn:ngm:class:trusted-third-party", "label": "Trusted Third Party" }
    ],
    "requires": [
      { "@id": "urn:ngm:class:know-your-customer", "label": "Know Your Customer" }
    ],
    "enables": [
      { "@id": "urn:ngm:class:account-recovery", "label": "Account Recovery" },
      { "@id": "urn:ngm:class:fiat-on-ramp", "label": "Fiat On-Ramp" }
    ],
    "supports": [
      { "@id": "urn:ngm:class:institutional-custody", "label": "Institutional Custody" },
      { "@id": "urn:ngm:class:exchange-custody", "label": "Exchange Custody" }
    ],
    "implements": [
      { "@id": "urn:ngm:class:proof-of-reserves", "label": "Proof of Reserves" }
    ],
    "contrastsWith": [
      { "@id": "urn:ngm:class:non-custodial-wallet", "label": "Non-Custodial Wallet" },
      { "@id": "urn:ngm:class:self-custody", "label": "Self-Custody" },
      { "@id": "urn:ngm:class:multi-signature-wallet", "label": "Multi-Signature Wallet" }
    ],
    "bridgesTo": [
      { "@id": "urn:ngm:class:mpc-wallet", "label": "MPC Wallet" }
    ],
    "relatedTo": [
      { "@id": "urn:ngm:class:counterparty-risk", "label": "Counterparty Risk" },
      { "@id": "urn:ngm:class:cryptocurrency-custody", "label": "Cryptocurrency Custody" }
    ]
  },
  "sameAs": [
    { "@id": "urn:ngm:class:hosted-wallet", "label": "Hosted Wallet" }
  ],
  "quality": 0.62,
  "provenance": { "attributedTo": "did:nostr:ontology-mesh", "generatedAt": "2026-06-15T00:00:00Z", "inferenceRule": "GapMaterialisation" }
}
```

- ### Definition
  - A [[Custodial Wallet]] is a [[Digital Wallet]] in which a [[Trusted Third Party]] holds the user's private keys, trading self-sovereignty for convenience and [[Account Recovery]]. It is common at a [[Centralised Exchange]] and contrasts with the [[Non-Custodial Wallet]].

- ### Overview
  - In a custodial arrangement the user interacts with an account abstraction — a balance recorded in the custodian's internal ledger — rather than signing transactions with keys they control. The custodian aggregates many users' assets, often in omnibus accounts spanning hot wallets for liquidity and cold storage for the bulk of reserves, and executes on-chain movements on the user's behalf.
  - This model lowers the barrier to entry: passwords can be reset, support can assist with mistakes, and integration with fiat on-ramps and trading is seamless. The cost is counterparty risk — captured by the maxim "not your keys, not your coins" — since users depend entirely on the custodian's security practices, solvency, and integrity.

- ### Key aspects
  - Private keys held and controlled by a third party.
  - Account-based access with recoverable credentials.
  - Pooled storage across hot and cold infrastructure.
  - Subject to KYC, asset-segregation, and proof-of-reserves expectations.

- ### Applications
  - Centralised exchange accounts holding user trading balances.
  - Institutional custody services for funds and corporations.
  - Consumer apps abstracting key management for mainstream users.

- ### Relationships
  - subClassOf:: [[Digital Wallet]]
  - hasPart:: [[Omnibus Account]]
  - partOf:: [[Centralised Exchange]]
  - uses:: [[Hot Wallet]]
  - uses:: [[Cold Storage]]
  - dependsOn:: [[Trusted Third Party]]
  - requires:: [[Know Your Customer]]
  - enables:: [[Account Recovery]]
  - supports:: [[Institutional Custody]]
  - implements:: [[Proof of Reserves]]
  - contrastsWith:: [[Non-Custodial Wallet]]
  - contrastsWith:: [[Multi-Signature Wallet]]
  - relatedTo:: [[Counterparty Risk]]

- ### Provenance
  - updated:: 2026-06-15
  - attributedTo:: did:nostr:ontology-mesh
  - inferenceRule:: GapMaterialisation
