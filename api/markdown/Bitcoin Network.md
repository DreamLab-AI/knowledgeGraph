public:: true

# Bitcoin Network
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:bitcoin-network",
  "@type": "Page",
  "vc:slug": "bitcoin-network",
  "title": "Bitcoin Network",
  "vc:public": true,
  "vc:outboundWikilinks": [],
  "vc:schemaVersion": 2
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:bitcoin-proof-of-work-protocol-network",
  "@type": "Class",
  "label": "Bitcoin Network",
  "definition": "The Bitcoin Network is the global, permissionless peer-to-peer infrastructure underpinning the Bitcoin cryptocurrency, comprising full nodes, mining nodes, and the gossip protocol that propagates signed transactions and mined blocks across the internet without central coordination. It employs the Nakamoto consensus mechanism—proof-of-work mining on the SHA-256 hash function—to achieve Byzantine-fault-tolerant agreement on a single shared transaction ledger among mutually distrusting participants. The network enforces deterministic monetary policy through its protocol rules, automatically adjusting mining difficulty every 2,016 blocks to target a ten-minute inter-block interval and capping total issuance at 21 million BTC via a geometric halving schedule. Launched in January 2009, it is the longest-continuously-operated public blockchain and the foundational reference implementation for decentralised digital value transfer.",
  "domain": "blockchain",
  "maturity": "mature",
  "subClassOf": [
    {
      "@id": "urn:ngm:class:peer-to-peer-network",
      "label": "Peer-to-Peer Network"
    }
  ],
  "relations": {
    "hasPart": [
      {
        "@id": "urn:ngm:class:bitcoin-proof-of-work-protocol-mining",
        "label": "Bitcoin Mining"
      },
      {
        "@id": "urn:ngm:class:mempool",
        "label": "Mempool"
      },
      {
        "@id": "urn:ngm:class:utxo-model",
        "label": "UTXO Model"
      },
      {
        "@id": "urn:ngm:class:full-node",
        "label": "Full Node"
      },
      {
        "@id": "urn:ngm:class:bitcoin-script",
        "label": "Bitcoin Script"
      }
    ],
    "uses": [
      {
        "@id": "urn:ngm:class:proof-of-work",
        "label": "Proof Of Work"
      },
      {
        "@id": "urn:ngm:class:nakamoto-consensus",
        "label": "Nakamoto Consensus"
      },
      {
        "@id": "urn:ngm:class:bc-cryptographic-primitive",
        "label": "Cryptographic Primitive"
      },
      {
        "@id": "urn:ngm:class:sha-256",
        "label": "SHA-256"
      },
      {
        "@id": "urn:ngm:class:elliptic-curve-cryptography",
        "label": "Elliptic Curve Cryptography"
      },
      {
        "@id": "urn:ngm:class:gossip-protocol",
        "label": "Gossip Protocol"
      }
    ],
    "enables": [
      {
        "@id": "urn:ngm:class:lightning-network",
        "label": "Lightning Network"
      },
      {
        "@id": "urn:ngm:class:cryptocurrency",
        "label": "Cryptocurrency"
      },
      {
        "@id": "urn:ngm:class:digital-asset-custody",
        "label": "Digital Asset Custody"
      },
      {
        "@id": "urn:ngm:class:decentralised-finance",
        "label": "Decentralised Finance"
      }
    ],
    "requires": [
      {
        "@id": "urn:ngm:class:internet-protocol",
        "label": "Internet Protocol"
      },
      {
        "@id": "urn:ngm:class:distributed-ledger-technology",
        "label": "Distributed Ledger Technology"
      }
    ],
    "dependsOn": [
      {
        "@id": "urn:ngm:class:public-key-cryptography",
        "label": "Public Key Cryptography"
      },
      {
        "@id": "urn:ngm:class:merkle-tree",
        "label": "Merkle Tree"
      }
    ],
    "implements": [
      {
        "@id": "urn:ngm:class:bitcoin-proof-of-work-protocol-improvement-proposals",
        "label": "Bitcoin Improvement Proposal"
      },
      {
        "@id": "urn:ngm:class:segregated-witness",
        "label": "Segregated Witness"
      }
    ],
    "supports": [
      {
        "@id": "urn:ngm:class:multisignature",
        "label": "Multisignature"
      }
    ],
    "contrastsWith": [
      {
        "@id": "urn:ngm:class:ethereum",
        "label": "Ethereum Network"
      },
      {
        "@id": "urn:ngm:class:proof-of-stake",
        "label": "Proof of Stake"
      }
    ],
    "relatedTo": [
      {
        "@id": "urn:ngm:class:bitcoin-proof-of-work-protocol-technical-overview",
        "label": "Bitcoin Technical Overview"
      },
      {
        "@id": "urn:ngm:class:blockchain",
        "label": "Blockchain"
      },
      {
        "@id": "urn:ngm:class:digital-currency",
        "label": "Digital Currency"
      }
    ],
    "bridgesTo": [
      {
        "@id": "urn:ngm:class:financial-infrastructure",
        "label": "Financial Infrastructure"
      },
      {
        "@id": "urn:ngm:class:central-bank-digital-currency",
        "label": "Central Bank Digital Currency"
      }
    ]
  },
  "sameAs": [
    {
      "@id": "urn:ngm:class:bitcoin-p2p-network",
      "label": "Bitcoin P2P Network"
    }
  ],
  "quality": 0.75,
  "provenance": {
    "attributedTo": "did:nostr:ontology-mesh",
    "generatedAt": "2026-06-13T00:00:00Z",
    "inferenceRule": "ManualEnrichment"
  }
}
```

- ### Definition
  - The [[Bitcoin Network]] is the global, permissionless [[Peer-to-Peer Network]] of full nodes and mining nodes that collectively maintain the [[Bitcoin]] blockchain — a shared, append-only transaction ledger secured by [[Proof Of Work]] and [[Nakamoto Consensus]]. Participants communicate via a [[Gossip Protocol]], propagating signed transactions and validated blocks without any central coordinator. The network's consensus rules encode an immutable monetary policy: a hard supply cap of 21 million BTC, a difficulty-adjusting mining target, and a halving schedule that progressively reduces block rewards, making [[Bitcoin]] the first digitally scarce asset enforced by [[Cryptographic Primitive]] operations rather than institutional trust.

- ### Overview
  - The Bitcoin Network was first activated on 3 January 2009 when Satoshi Nakamoto mined the genesis block, embedding the headline "Chancellor on brink of second bailout for banks" as a timestamp and ideological statement. It operationalises the design described in the 2008 whitepaper "Bitcoin: A Peer-to-Peer Electronic Cash System", which proposed a trust-minimised solution to the double-spend problem for digital cash.
  - The network's core value proposition is censorship-resistant, permissionless value transfer. Any participant with internet access can join the network as a full node, independently verify every transaction ever made, and send transactions without seeking authorisation. Mining nodes extend this with the ability to collect transaction fees and block subsidies in exchange for expending computational work.
  - From a systems perspective, the Bitcoin Network is an adversarially robust distributed system. Byzantine fault tolerance is achieved via the longest-chain rule: honest nodes always build on the chain representing the most accumulated proof-of-work, making a rewrite attack economically prohibitive beyond a few blocks. This design tolerates arbitrary network partitions and up to 49% of hash-rate controlled by malicious actors.
  - The network has grown from a single node to tens of thousands of publicly reachable full nodes and millions of lightweight clients, demonstrating that decentralised consensus at scale is operationally viable without requiring identity, permission, or trust in any single party.

- ### Key Components
  - #### Full Nodes
    - [[Full Node]] operators download and independently validate every block and transaction against the complete set of consensus rules since the genesis block. They are the ultimate arbiter of validity; no miner can change consensus rules without node operators also upgrading.
    - Full nodes serve as the economic backbone: they enforce the 21 million BTC cap, reject invalid signatures, and prevent inflation, double-spends, or rule violations regardless of miner behaviour.
    - Software implementations include Bitcoin Core (reference), Bitcoin Knots, and libbitcoin. The [[UTXO Model|UTXO set]] (all unspent outputs) must be kept in fast storage for efficient validation.
  - #### Mining Nodes
    - [[Bitcoin Mining]] nodes aggregate valid transactions from the [[Mempool]] into candidate blocks and iteratively modify a nonce to find a block hash below the current difficulty target — a brute-force search that constitutes the proof-of-work puzzle.
    - The difficulty adjusts every 2,016 blocks (approximately two weeks) to keep average inter-block time at ten minutes regardless of total network hash-rate. This automatic calibration is a critical self-regulating property.
    - The block reward (subsidy + fees) is the only mechanism by which new BTC enters circulation. The subsidy halves every 210,000 blocks; as of 2024 it is 3.125 BTC per block. Long-term network security is expected to transition to a fee-only model.
  - #### Mempool
    - The [[Mempool]] (memory pool) is a node-local buffer of broadcast, validated but not-yet-confirmed transactions. Miners select from the mempool to construct candidate blocks, typically prioritising by fee-rate (satoshis per virtual byte).
    - The mempool is not globally synchronised; each node maintains its own view. Fee estimation services aggregate mempool data to help users set competitive fees during periods of high demand.
  - #### UTXO Model
    - The [[UTXO Model]] (Unspent Transaction Output) structures the ledger not as account balances but as a set of discrete, spendable coins. Each UTXO is locked by a locking script (scriptPubKey), spent only when a valid unlocking script (scriptSig or witness) is provided.
    - This design enables parallel validation, simplifies [[SPV Verification]] for lightweight clients, and avoids nonce-based replay issues inherent in account models. The UTXO set is the minimal state required to validate new transactions.
  - #### Bitcoin Script
    - [[Bitcoin Script]] is a stack-based, intentionally non-Turing-complete scripting language embedded in transactions to express spending conditions. Standard scripts include Pay-to-Public-Key-Hash (P2PKH), Pay-to-Script-Hash (P2SH), Pay-to-Witness-Public-Key-Hash (P2WPKH), and Pay-to-Taproot (P2TR).
    - Script's deliberate limitations (no loops, bounded execution) prevent denial-of-service vectors that affect more expressive smart-contract platforms.
  - #### Cryptographic Foundations
    - The network relies on [[SHA-256]] for proof-of-work and block header hashing (double SHA-256), RIPEMD-160 for address derivation, and [[Elliptic Curve Cryptography]] (secp256k1 curve) for transaction signing via ECDSA and Schnorr signatures (post-Taproot).
    - [[Public Key Cryptography]] underpins ownership: the holder of a private key can produce a signature that satisfies the locking script, transferring control of UTXOs without revealing the private key.
    - [[Merkle Tree]] structures within block headers allow efficient proof of transaction inclusion without downloading the full block, enabling [[SPV Verification]] for mobile wallets.
  - #### Network Communication
    - Peers connect over TCP, typically on port 8333. The [[Gossip Protocol]] floods new transactions and blocks across the network within seconds. Inv/getdata/headers messages form the peer-to-peer relay mechanism.
    - The network tolerates asynchrony and partial connectivity; nodes resync after disconnection by requesting missing headers and blocks from available peers.

- ### Mechanisms
  - #### Proof-of-Work Consensus
    - [[Proof Of Work]] ties block production to real-world energy expenditure, making history revision costly. An attacker wishing to rewrite k confirmed blocks must outpace the honest network for the duration of the rewrite, requiring more than 50% of total hash-rate sustained over that period — the "51% attack" threshold.
    - The [[Nakamoto Consensus]] longest-chain rule resolves forks deterministically: if two valid blocks are mined simultaneously, the network temporarily splits, but the next block tips the balance and the shorter branch is orphaned. Its transactions return to the mempool and may be re-confirmed in subsequent blocks.
  - #### Difficulty Adjustment Algorithm
    - Every 2,016 blocks the protocol compares actual elapsed time against the target of 20,160 minutes (two weeks). If blocks arrived faster, difficulty increases; if slower, it decreases. The adjustment is capped at a 4× factor per epoch to prevent runaway oscillation.
  - #### Halving Schedule
    - Block subsidies halve every 210,000 blocks (roughly four years). Starting at 50 BTC in 2009, the subsidy has halved to 25 (2012), 12.5 (2016), 6.25 (2020), and 3.125 BTC (2024). The final satoshi is projected to be mined around the year 2140, after which only transaction fees incentivise miners.
  - #### Segregated Witness (SegWit)
    - [[Segregated Witness]] (BIP141, activated August 2017) restructured transaction serialisation to move signature data ("witness") outside the traditional transaction format, fixing transaction malleability and enabling safer Layer 2 constructions. It introduced the concept of virtual bytes (vbytes) for fee calculation.
  - #### Taproot
    - Taproot (BIP340/341/342, activated November 2021) introduced Schnorr signatures and Merkelised Abstract Syntax Trees (MAST), improving privacy (cooperative spends look identical to simple payments), scripting flexibility, and efficiency. It is the most significant protocol upgrade since SegWit.

- ### Applications and Use Cases
  - #### Store of Value
    - Bitcoin's fixed supply and resistance to confiscation make it an attractive store-of-value asset, often compared to digital gold. Institutional adoption via exchange-traded products (ETPs) has brought significant capital under custody arrangements built on the Bitcoin Network's settlement guarantees.
  - #### Cross-Border Payments
    - Bitcoin enables direct value transfer between any two internet-connected parties without correspondent banking intermediaries, reducing settlement time and cost for international remittances. This is particularly impactful in regions with limited access to traditional banking infrastructure.
  - #### Layer 2 Payment Channels
    - The [[Lightning Network]] is the primary Layer 2 protocol enabling near-instant, high-throughput micropayments by routing payments through off-chain channels that are opened and settled on-chain. This extends the Bitcoin Network's throughput from approximately seven on-chain transactions per second to millions off-chain.
  - #### Programmable Financial Infrastructure
    - [[Multisignature]] schemes (m-of-n) enable shared custody, escrow, and multi-party approval workflows. Combined with time-locks (CLTV/CSV), more complex financial instruments can be expressed within Bitcoin Script's constraints.
  - #### Timestamping and Proof of Existence
    - The Bitcoin blockchain's immutability and global replication make it an effective timestamping service. Hash commitments embedded in OP_RETURN outputs create tamper-evident proofs of data existence at a specific block height.
  - #### Digital Asset Custody
    - Financial institutions and custodians build [[Digital Asset Custody]] solutions anchored to the Bitcoin Network's settlement finality, providing institutional-grade key management and proof-of-reserve auditing.
  - #### Decentralised Finance Primitives
    - Whilst less expressive than programmable blockchains, the Bitcoin Network supports atomic swaps and hash-time-locked contracts (HTLCs), enabling trustless cross-chain exchanges and contributing to the broader [[Decentralised Finance]] ecosystem.

- ### Relationships
  - hasPart:: [[Bitcoin Mining]]
  - hasPart:: [[Mempool]]
  - hasPart:: [[UTXO Model]]
  - hasPart:: [[Full Node]]
  - hasPart:: [[Bitcoin Script]]
  - uses:: [[Proof Of Work]]
  - uses:: [[Nakamoto Consensus]]
  - uses:: [[Cryptographic Primitive]]
  - uses:: [[SHA-256]]
  - uses:: [[Elliptic Curve Cryptography]]
  - uses:: [[Gossip Protocol]]
  - enables:: [[Lightning Network]]
  - enables:: [[Cryptocurrency]]
  - enables:: [[Digital Asset Custody]]
  - enables:: [[Decentralised Finance]]
  - requires:: [[Internet Protocol]]
  - requires:: [[Distributed Ledger Technology]]
  - dependsOn:: [[Public Key Cryptography]]
  - dependsOn:: [[Merkle Tree]]
  - implements:: [[Bitcoin Improvement Proposal]]
  - implements:: [[Segregated Witness]]
  - supports:: [[SPV Verification]]
  - supports:: [[Multisignature]]
  - contrastsWith:: [[Ethereum Network]]
  - contrastsWith:: [[Proof Of Stake]]
  - relatedTo:: [[Bitcoin Technical Overview]]
  - relatedTo:: [[Blockchain]]
  - relatedTo:: [[Digital Currency]]
  - bridges-to:: [[Financial Infrastructure]]
  - bridges-to:: [[Central Bank Digital Currency]]

- ### Standards and Context
  - The Bitcoin Network has no formal standards body. Protocol evolution proceeds through [[Bitcoin Improvement Proposal]] (BIP) documents, which are community-authored specifications following a rough-consensus process analogous to IETF RFCs. Major BIPs include:
    - BIP32 — Hierarchical Deterministic Wallets
    - BIP39 — Mnemonic seed phrases
    - BIP141 — [[Segregated Witness]]
    - BIP340/341/342 — Schnorr signatures, Taproot, Tapscript
    - BIP350 — Bech32m address encoding for Taproot outputs
  - The original specification is Satoshi Nakamoto's 2008 whitepaper "Bitcoin: A Peer-to-Peer Electronic Cash System". Bitcoin Core (maintained at github.com/bitcoin/bitcoin) serves as the de facto reference implementation. Changes require broad ecosystem consensus among miners, node operators, exchanges, and wallet developers, making protocol changes conservative and deliberately slow.
  - Regulatory treatment varies by jurisdiction. In many territories Bitcoin is treated as a commodity, property, or currency for different legal purposes. Financial regulators (e.g., the FCA in the UK, the SEC and CFTC in the US) apply different frameworks to Bitcoin-related services, custody, and exchange products.
  - Energy consumption from [[Proof Of Work]] mining is a subject of ongoing policy debate. The Bitcoin Network consumes significant electricity, with the mix of energy sources varying across mining regions. This creates regulatory surface at the intersection of climate policy and financial infrastructure.

- ### Current Landscape (2026)
  - The fourth halving fired at block 840,000 on 20 April 2024, cutting the block subsidy from 6.25 to 3.125 BTC; the same block launched Casey Rodarmor's Runes fungible-token protocol, spiking that block's fees to a record 37.6 BTC (~$2.4m) and briefly pushing median feerates above 1,800 sat/vByte.
  - On-chain fee demand then collapsed: after the Runes/Ordinals mania faded in late 2024, median daily fees fell more than 80% and by August 2025 roughly 15% of blocks were near-empty "free" blocks at ~1 sat/vByte, reviving concern about miners' long-term fee-only revenue.
  - US spot Bitcoin ETFs (approved January 2024) had drawn ~$54.4bn net inflows and accumulated over 1.29m BTC (~6% of supply) by end-August 2025, with BlackRock's IBIT alone holding ~52.6% share; in September 2025 the SEC approved generic listing standards streamlining future crypto ETFs.
  - Mining hashrate crossed 1 zettahash/s (1,000 EH/s) for the first time in early April 2025 and set an all-time high near 1.085 ZH/s on 4 August 2025, though a ~4% Nov–Dec 2025 drop and record-low ~$38.7k/EH/day revenue squeezed less efficient operators.
  - Protocol development remains effectively frozen with no agreed activation path: the contested BIP-110 "Reduced Data Temporary Softfork" faced a mandatory signalling window around block 961,632 (~August/September 2026) at under 1% miner support, and Paul Sztorc's eCash hard fork was scheduled for block 964,000 (~21 August 2026).
  - The covenant debate dominates: OP_CAT (BIP 347) reached "Complete" specification status on 1 March 2026 with no activation parameters, while OP_CTV (BIP 119) published an activation client starting 30 March 2026 (90% miner threshold, ~2027 minimum activation) sitting at ~0% signalling; consensus is edging toward a phased CTV+CSFS-first approach.
  - Bitcoin Core 30.0 (2025) made multiple OP_RETURN outputs standard, raised default datacarriersize to 100,000 bytes, added an experimental Stratum v2 IPC mining interface and removed legacy-wallet creation; post-quantum hardening via BIP-360 plus OP_CAT-based Winternitz signatures remains an unstarted multi-year programme.
  - On the policy front, President Trump's Executive Order 14233 (6 March 2025) established a Strategic Bitcoin Reserve capitalised with forfeited government BTC that will not be sold; by mid-2026 US government holdings were estimated at roughly 324,000–328,000 BTC, though trackers disagree by over 130,000 BTC.

- ### References
  - 1. CoinGecko (2025). Bitcoin Report 2025 (ETF inflows, 1 zettahash hashrate, IBIT dominance). https://www.coingecko.com/research/publications/bitcoin-report-2025
  - 2. CoinDesk (2024). The Bitcoin Halving Is Here, and With It a Giant Surge in Transaction Fees. https://www.coindesk.com/tech/2024/04/20/bitcoin-blockchain-has-fourth-halving-in-15-year-history-in-show-of-monetary-policy-set-by-code
  - 3. Amina Group (2026). Bitcoin Fork August 2026: BIP-110, eCash, Covenants and the Quantum Clock. https://aminagroup.com/research/bitcoin-fork-august-2026-bip-110-ecash-covenants-and-the-quantum-clock/
  - 4. Spark / Buffett Labs (2026). Bitcoin Covenant Proposals Compared: CTV, APO, OP_CAT. https://www.spark.money/tools/bitcoin-covenant-proposals-compared
  - 5. Bitcoin Optech (2025). Newsletter #385: 2025 Year-in-Review (Bitcoin Core 30.0, BIP-360, OP_CAT Winternitz). https://bitcoinops.org/en/newsletters/2025/12/19/
  - 6. The White House (2025). Fact Sheet: President Trump Establishes the Strategic Bitcoin Reserve and U.S. Digital Asset Stockpile (Executive Order 14233). https://www.whitehouse.gov/fact-sheets/2025/03/fact-sheet-president-donald-j-trump-establishes-the-strategic-bitcoin-reserve-and-u-s-digital-asset-stockpile/

- ### Provenance
  - sources:: Satoshi Nakamoto, "Bitcoin: A Peer-to-Peer Electronic Cash System" (2008); Bitcoin Core documentation; Bitcoin Improvement Proposals (BIPs); Andreas M. Antonopoulos, "Mastering Bitcoin" (O'Reilly, 3rd ed.); established protocol knowledge through training cutoff January 2026
  - updated:: 2026-06-13
