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