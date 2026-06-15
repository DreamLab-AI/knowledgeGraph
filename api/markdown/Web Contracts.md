public:: true
alias:: webcontracts, Web Contract, WebContracts

# Web Contracts
```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v1",
  "@id": "urn:visionflow:page:web-contracts",
  "@type": "Page",
  "title": "Web Contracts",
  "vc:slug": "web-contracts",
  "vc:public": true,
  "vc:schemaVersion": 2,
  "vc:outboundWikilinks": []
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:web-contracts",
  "@type": "Class",
  "label": "Web Contracts",
  "definition": "Web Contracts is a transport-agnostic smart-contract system that runs verifiable agreements over plain web files instead of a global blockchain. It separates concerns into four layers: an immutable contract.json (rules in any language), a mutable state.json (a JCS-canonicalised, SHA-256 hash-chained sequence of states), a ledger.json (multi-currency balances), and a Trail that anchors the hash chain to Bitcoin via Block Trails for tamper evidence. Contracts declare effects (credit/debit/transfer) that an executor applies atomically; any verifier can replay the state chain from genesis, check the hashes, and confirm the Bitcoin anchoring, so cheating breaks the chain detectably. Identity is did:nostr and authentication is NIP-98 signed HTTP, which lets both humans (via NIP-07) and autonomous agents participate without global consensus or gas.",
  "domain": "blockchain",
  "maturity": "emerging",
  "subClassOf": [
    {
      "@id": "urn:ngm:class:smart-contract",
      "label": "Smart Contract"
    }
  ],
  "sameAs": [
    {
      "@id": "urn:ngm:class:webcontracts",
      "label": "WebContracts"
    }
  ],
  "relations": {
    "implements": [
      {
        "@id": "urn:ngm:class:client-side-validation",
        "label": "Client-Side Validation"
      }
    ],
    "uses": [
      {
        "@id": "urn:ngm:class:block-trails",
        "label": "Block Trails"
      },
      {
        "@id": "urn:ngm:class:did-nostr",
        "label": "did:nostr"
      },
      {
        "@id": "urn:ngm:class:json-data-interchange-format",
        "label": "JSON Data Interchange Format"
      },
      {
        "@id": "urn:ngm:class:sha-256",
        "label": "SHA-256"
      },
      {
        "@id": "urn:ngm:class:json-data-interchange-format-schema",
        "label": "JSON Schema"
      }
    ],
    "hasPart": [
      {
        "@id": "urn:ngm:class:state-machine-replication",
        "label": "State Machine Replication"
      },
      {
        "@id": "urn:ngm:class:ledger",
        "label": "Ledger"
      }
    ],
    "dependsOn": [
      {
        "@id": "urn:ngm:class:single-use-seals",
        "label": "Single Use Seals"
      },
      {
        "@id": "urn:ngm:class:proof-of-publication",
        "label": "Proof of Publication"
      }
    ],
    "enables": [
      {
        "@id": "urn:ngm:class:automated-market-maker",
        "label": "Automated Market Maker"
      },
      {
        "@id": "urn:ngm:class:escrow-system",
        "label": "Escrow"
      },
      {
        "@id": "urn:ngm:class:micropayment",
        "label": "Micropayment"
      }
    ],
    "bridgesTo": [
      {
        "@id": "urn:ngm:class:solid",
        "label": "Solid"
      },
      {
        "@id": "urn:ngm:class:nostr",
        "label": "Nostr"
      },
      {
        "@id": "urn:ngm:class:ai-agent",
        "label": "AI Agent"
      }
    ],
    "contrastsWith": [
      {
        "@id": "urn:ngm:class:ethereum",
        "label": "Ethereum"
      },
      {
        "@id": "urn:ngm:class:smart-contract-execution",
        "label": "Smart Contract Execution"
      }
    ],
    "relatedTo": [
      {
        "@id": "urn:ngm:class:web-assembly",
        "label": "WebAssembly"
      },
      {
        "@id": "urn:ngm:class:x402-and-l402-payment-protocols",
        "label": "L402 Protocol"
      }
    ]
  },
  "quality": 0.74,
  "provenance": {
    "attributedTo": "did:nostr:ontology-mesh",
    "generatedAt": "2026-06-14T00:00:00Z",
    "inferenceRule": "ResearchAuthored"
  }
}
```

- ### Definition
  - Web Contracts runs verifiable agreements over ordinary web files — no global blockchain, no gas. "The contract is the class. The state is the instance. The ledger tracks ownership. The [[Block Trails|trail]] proves it happened." Reference: [webcontracts.org](https://webcontracts.org/).

- ### Architecture (four layers)
  - **contract.json** — immutable rules; a transition function takes the current state and parameters and returns `{ state, effects }`. Logic may be written in any language.
  - **state.json** — the mutable current value; every transition increments `seq` and stores the SHA-256 hash of the prior state (JCS-canonicalised), forming an independently verifiable [[Cryptographic Hash|hash chain]].
  - **ledger.json** — balances across currencies and identities. The contract never edits the ledger directly; it declares effects (`credit` / `debit` / `transfer`) that the executor applies atomically.
  - **Trail** — a [[Block Trails]] log that anchors the hash chain to [[Bitcoin Network|Bitcoin]], giving tamper evidence without constant on-chain writes.

- ### Verification model ("trust but verify")
  - **Executor** runs the contract and updates state/ledger/trail atomically.
  - **Client** submits transitions and can *simulate* them locally first — this preview is [[Client-Side Validation]] in practice.
  - **Verifier** replays the whole chain from genesis, validates every hash, and checks the [[Block Trails|Bitcoin anchoring]]; if the executor cheated, the chain breaks.

- ### Validation — one schema, three gates
  - The JSON layers are guarded by a single [[JSON Schema]] enforced at three points by one tiny zero-dependency validator that runs identically in browser and Node: a **browser gate** (the editor validates before writes), a **deploy gate** (`npm test` pre-commit), and a **CI gate** (`validate-cli.js` in the pipeline). Keeping one schema and one validator across all three gates keeps `contract.json`/`state.json` provably well-formed everywhere they are written. (Pattern: melvincarvalho gist "One Schema, Three Gates".)

- ### Identity & access
  - Parties are `did:nostr:<pubkey>` (see [[did:nostr]]); requests authenticate with NIP-98 signed [[Nostr]] events in the `Authorization` header, usable by humans (NIP-07 extensions like [[PodKey]]) and by autonomous [[AI Agent|agents]].
  - HTTP conventions: `GET /contracts/{id}/state.json`, `POST /contracts/{id}/`, `GET /contracts/{id}/trail.json`. Files are transport-agnostic — they can live in [[Solid]] pods, web servers, Git repos, or local directories.

- ### Profiles
  - **amm.v1** — [[Automated Market Maker]] (constant product `x · y = k`).
  - **escrow.v1** — two-party escrow with arbiter.
  - **sale.v1** — fixed-price token sales; **subscription.v1** — recurring payments.

- ### Relationships
  - is-subclass-of:: [[Smart Contract]]
  - implements:: [[Client-Side Validation]]
  - uses:: [[Block Trails]]
  - uses:: [[did:nostr]]
  - uses:: [[JSON Schema]]
  - depends-on:: [[Single Use Seals]]
  - depends-on:: [[Proof of Publication]]
  - enables:: [[Automated Market Maker]]
  - bridges-to:: [[Solid]]
  - bridges-to:: [[AI Agent]]
  - contrasts-with:: [[Ethereum]]

- ### Provenance
  - sources:: https://webcontracts.org/ ; gist.github.com/melvincarvalho ("One Schema, Three Gates")
  - updated:: 2026-06-14
