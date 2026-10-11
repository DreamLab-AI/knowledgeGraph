Multisignature (multisig) is a cryptographic access-control scheme in which a transaction or operation requires a quorum of M independent signatures drawn from a declared set of N authorised keyholders before it can be validated and executed. Applied to cryptocurrency wallets, smart contracts, and DAO treasuries, the M-of-N threshold eliminates single points of failure in key custody by distributing signing authority across multiple parties, devices, or organisations. More advanced variants — threshold signature schemes (TSS) and multi-party computation (MPC) — achieve the same security guarantee without assembling the full key set on-chain, reducing transaction cost and improving privacy.

### Overview

- Multisignature predates blockchain, with roots in Shamir's Secret Sharing (1979) and threshold signature research throughout the 1980s and 1990s in academic cryptography.
- Bitcoin introduced native multisig support through OP_CHECKMULTISIG from early versions, with the P2SH address format (BIP 16, 2012) allowing multisig policies to be encoded in standard-looking addresses.
- The core value proposition is resilience: a 2-of-3 configuration can withstand the loss of any single key while an attacker must compromise any two of three keyholders to gain unauthorised access.
- Multisig is widely considered the baseline for institutional-grade [[Self-Custody]] and [[DAO Treasury Management]], underpinning billions of dollars in on-chain assets.
- The concept generalises beyond cryptocurrency to any context where a cryptographically enforced quorum is needed: code-signing, certificate issuance, and protocol upgrades.

### Key Components

- **M-of-N threshold**: the core parameter pair — M is the minimum number of signatures required, N is the total number of authorised signers. Common configurations include 2-of-3 (personal backup), 3-of-5 (team treasury), and 4-of-7 (DAO councils).
- **Signing keys**: each participant holds an independent [[Private Key]] generated and stored separately. Security relies on the independence and geographic or custodial distribution of these keys.
- **Locking script / redeem script**: in [[Bitcoin Script]], the multisig policy is encoded in a P2SH or P2WSH redeem script listing the N public keys and the threshold M. Spending requires providing M valid [[Digital Signatures]] over the transaction hash.
- **[[Smart Contract]] enforcement**: on EVM chains, multisig logic lives in contract code — exemplified by Gnosis Safe — where the contract checks collected approvals before executing any call.
- **[[Quorum Threshold]]**: the abstract formalisation of M-of-N as a discrete voting rule, shared with [[Decentralised Governance]] and consensus research.
- **[[Schnorr Signature]] aggregation (MuSig2)**: an interactive protocol allowing N participants to collaboratively produce a single Schnorr signature that appears identical to a single-signer signature on-chain, introduced with [[Bitcoin]] Taproot (BIP 340–342, 2021). This eliminates the on-chain overhead of classical multisig and enhances privacy.
- **[[Threshold Cryptography]] / TSS**: threshold signature schemes distribute key generation and signing such that the private key is never assembled in a single location. The resulting signature is standard and indistinguishable from a single-key signature.
- **[[Multi-Party Computation]] (MPC)**: a broader cryptographic framework enabling multiple parties to jointly compute a function (including signing) without revealing their inputs. MPC-based custody increasingly competes with on-chain multisig for institutional adoption.
- **[[Hardware Security Module]] (HSM)**: tamper-resistant hardware commonly used to store individual signing keys in enterprise multisig deployments, preventing key extraction.

### Mechanisms

- **Bitcoin OP_CHECKMULTISIG**: the canonical on-chain multisig. A scriptPubKey or P2SH redeem script encodes `M <pubkey1> ... <pubkeyN> N OP_CHECKMULTISIG`. The spending script must supply M valid signatures. Each signature adds roughly 72 bytes, scaling transaction size linearly with M.
- **P2SH and P2WSH**: Pay-to-Script-Hash and its SegWit counterpart wrap the redeem script in a hash, producing a standard-looking address. The redeem script (and hence the full public key list) is revealed only when spending, improving address privacy.
- **MuSig2 (BIP 327)**: a two-round interactive aggregated Schnorr protocol. Participants exchange nonces, aggregate public keys into a single key, and collaboratively produce a single signature. Compatible with Bitcoin Taproot key-path spending — the resulting signature is a standard 64-byte Schnorr signature.
- **Gnosis Safe (Safe{Wallet})**: the dominant Ethereum multisig smart contract. Owners submit off-chain signed approvals; the contract collects them and executes the bundled call when the threshold is reached. Supports arbitrary calldata, delegate calls, and module extensions.
- **ERC-4337 Account Abstraction**: Ethereum's account abstraction standard enables multisig (and more complex policies) at the account level without requiring changes to the consensus layer. [[Account Abstraction]] wallets can enforce M-of-N approval, social recovery, and spending limits natively.
- **Off-chain signing with on-chain settlement**: institutional platforms (Fireblocks, BitGo, Anchorage) collect signatures off-chain through policy engines and broadcast the completed transaction, reducing latency and enabling rich policy rules beyond raw M-of-N.

### Applications

- **Personal cryptocurrency custody**: 2-of-3 configurations where keys are distributed across a hardware wallet, a hot device, and an offline backup. Loss of any single key is non-fatal.
- **[[DAO Treasury Management]]**: DAOs such as Uniswap, Aave, and Gitcoin use Gnosis Safe 3-of-5 or 5-of-9 multisig treasuries to manage protocol funds, requiring council consensus for any expenditure.
- **[[Multi Sig Governance]]**: multisig is applied not just to fund custody but to protocol parameter upgrades, contract ownership transfers, and oracle configuration, enforcing collective consent as a governance primitive.
- **Exchange and custodian cold wallets**: cryptocurrency exchanges distribute cold-storage signing keys across geographically separated HSMs and staff, typically with 3-of-5 or higher thresholds, to prevent insider theft and external compromise.
- **Cross-chain bridge security**: bridge contracts on source and destination chains are often controlled by multisig councils. Weaknesses in bridge multisig configuration have resulted in major exploits (e.g., Ronin bridge, 2022), highlighting the operational security requirements.
- **[[Institutional Custody]]**: regulated custodians use on-chain multisig or MPC-backed custody with policy engines enforcing spending limits, destination whitelists, and time-locks for institutional clients including hedge funds and ETF issuers.
- **Code-signing and software release**: multisig principles apply to GPG-signed software releases where multiple maintainers must sign a release before it is published, preventing a single compromised maintainer from distributing malicious code.
- **Certificate authority operations**: HSM-backed M-of-N ceremony processes for root CA key generation and use in [[Public Key Infrastructure]] follow multisig-equivalent procedures enforced by policy and physical controls.
- **Smart contract upgrade governance**: proxy contract ownership is often delegated to a multisig, requiring collective approval before an implementation upgrade is authorised — a critical pattern for DeFi protocol security.

### Standards and Context

- **BIP 11** (M-of-N Standard Transactions, 2011): the original Bitcoin Improvement Proposal formalising OP_CHECKMULTISIG transaction patterns.
- **BIP 16** (Pay to Script Hash, 2012): introduced P2SH addresses encoding multisig policies behind a hash, enabling multisig without revealing the policy until spend time.
- **BIP 141/143** (Segregated Witness, 2017): P2WSH (Pay-to-Witness-Script-Hash) extended multisig into SegWit transactions, reducing fees for multisig inputs.
- **BIP 340** (Schnorr Signatures), **BIP 341** (Taproot), **BIP 342** (Tapscript): the 2021 Bitcoin Taproot upgrade introduced Schnorr signatures enabling [[Schnorr Signature]] aggregation. MuSig2 (BIP 327) formalised the interactive aggregation protocol.
- **ERC-4337** (Account Abstraction, Ethereum, 2021–2023): enables smart contract accounts with custom validation logic including multisig, without consensus-layer changes.
- **Gnosis Safe Smart Contract Audit Standards**: Safe{Wallet} contracts have undergone multiple formal security audits and are the reference implementation for EVM multisig.
- **NIST SP 800-57** (Key Management Guidelines): while not multisig-specific, NIST guidance on key management, lifecycle, and distribution informs enterprise multisig operational practice.
- **FIPS 140-2/3**: the standard governing cryptographic modules (HSMs) used to store multisig participant keys in regulated environments.
- Regulatory context: custodians regulated under frameworks such as the US OCC guidance on digital asset custody or EU MiCA requirements must demonstrate key management controls, for which multisig or MPC custody serves as evidence.

### Security Considerations

- Multisig does not eliminate risk — it redistributes it. Poor key distribution (all keys on the same device or cloud provider) negates the M-of-N guarantee.
- Social engineering attacks targeting multiple keyholders simultaneously (spear phishing, SIM swapping, insider threats) can circumvent multisig if the keyholder set is small or insufficiently distributed.
- The threshold must balance security (higher M) with operational availability (lower M to avoid loss of access if signers are unavailable). 2-of-3 and 3-of-5 are the most common practical configurations.
- On-chain multisig exposes the full public key set when funds are spent, creating linkability. MuSig2 Taproot and MPC approaches address this by producing single-key-indistinguishable signatures.
- Smart contract multisig introduces additional attack surface: contract bugs, signature replay, malicious calldata, and governance manipulation. Formal verification and audit are essential.
- Time-lock extensions (CLTV/CSV in Bitcoin, TimelockController in OpenZeppelin) are frequently combined with multisig to add a delay period during which a disputed transaction can be vetoed.

### Current Landscape (2026)

- The 21 February 2025 Bybit theft (~$1.46bn: 401,347 ETH plus stETH/mETH/cmETH) became the largest crypto heist on record and reframed multisig risk: attackers did not break the M-of-N cryptography but compromised a Safe{Wallet} developer machine and injected scoped JavaScript into app.safe.global, so all signers reviewed a benign transfer on a spoofed UI while their Ledger devices signed a malicious delegatecall that swapped the wallet's implementation contract. The FBI attributed it to North Korea's Lazarus/TraderTraitor cluster on 26 February 2025.
- The incident shifted the frontier from on-chain signing logic to signer-side integrity: blind-signing on hardware wallets, verified/clear-signing, transaction simulation and independent second-channel verification are now treated as mandatory, since a year on only ~3.5% of the stolen funds had been frozen despite ~89% initially being traceable.
- Safe (formerly Gnosis Safe) remains the dominant EVM smart-contract multisig for DAOs and treasuries, built on the Singleton-plus-Proxy pattern with Modules and Guards; its Safe{Core} 4337 Module lets a Safe act as an ERC-4337 account (EntryPoint v0.7 live mid-2024) while keeping native threshold logic, and Safe v1.5.0 shipped as the current core release.
- Account abstraction matured into the default account model: ERC-4337 passed 30 million-plus deployed smart accounts by June 2026 across Ethereum, Base, Arbitrum, Optimism and Polygon, and EIP-7702 (shipped in the Pectra upgrade on 7 May 2025) now lets existing EOAs temporarily act as programmable multi-signer accounts without migrating address. Coinbase Smart Wallet (passkey-based, launched 5 June 2024) and MetaMask's 2025 Smart Account/Delegation Toolkit broadened adoption.
- On Bitcoin, key-aggregation displaced script multisig for cost and privacy: MuSig2 was standardised as BIP-327, Ledger added MuSig2 in Bitcoin app v2.4.0 (April 2025), BitGo reported ~30% per-input fee savings, and Nunchuk launched a Taproot MuSig2 multisig in beta; a MuSig2 or FROST key-path spend is ~57.5 vB versus ~104 vB for a P2WSH 2-of-3.
- Threshold Schnorr (FROST) advanced toward true t-of-n with a single on-chain signature: RFC 9591 was published June 2024, BIP-445 specifying the FROST3/Taproot variant was assigned in January 2026, and Frostsnap devices plus the FROSTR/nostr tooling shipped in 2025 — though no production Bitcoin wallet had deployed FROST on mainnet as of mid-2026.
- Open challenges as of 2026: securing the human-in-the-loop signing surface against supply-chain and UI-spoofing attacks; fragmented, proprietary MPC threshold schemes with no cross-vendor key migration standard; EntryPoint/validation divergence across L2s where the same UserOperation can validate on one chain and revert on another; and audit depth for paymaster, aggregator and account-upgrade paths lagging behind DeFi-grade scrutiny.

### References

- 1. Cloudskope (2025). Bybit Hack 2025: $1.5B Stolen by North Korea. https://www.cloudskope.com/breaches/bybit-hack-2025
- 2. BleepingComputer (2025). Lazarus hacked Bybit via breached Safe{Wallet} developer machine. https://www.bleepingcomputer.com/news/security/lazarus-hacked-bybit-via-breached-safe-wallet-developer-machine/
- 3. BlockEden (2026). Bybit's $1.5B Hack One Year Later: 88% Traceable, Only 3% Frozen. https://blockeden.xyz/blog/2026/03/11/bybit-1-5b-hack-one-year-retrospective-lazarus-crypto-theft/
- 4. Eco (2026). Safe Wallet Deep Dive 2026: Multisig and Smart Accounts. https://eco.com/support/en/articles/15254042-safe-wallet-deep-dive-2026-multisig-and-smart-accounts
- 5. thirdweb (2026). ERC-4337 Account Abstraction in 2026: How Smart Wallets Are Reshaping Web3 UX. https://blog.thirdweb.com/erc-4337-account-abstraction-in-2026-how-smart-wallets-are-reshaping-web3-ux/
- 6. Spark (2026). MPC vs Multisig vs Threshold Signatures: Bitcoin Custody. https://www.spark.money/research/bitcoin-mpc-vs-multisig-custody

### Provenance

## Merged from Multi-Signature (needs reconciliation)
Multi-Signature (multisig) is a cryptographic access-control scheme requiring that a transaction or operation be authorised by a threshold number m out of a defined set of n independent private keys before it is considered valid. Commonly expressed as m-of-n (e.g. 2-of-3), multisig eliminates single points of failure in key custody and enforces shared governance over digital assets, smart contracts, or any access-controlled resource. It is foundational to institutional cryptocurrency custody, DAO treasury management, bridge security, and hardware-secure wallet architectures. Multisig schemes may be implemented at the protocol layer, at the script level (as in Bitcoin P2SH/P2WSH), or at the application layer via smart contracts such as Gnosis Safe.

### Overview

- Multi-signature is one of the most widely deployed cryptographic security mechanisms in blockchain infrastructure. It addresses the fundamental tension between availability (no single key should block access) and security (no single compromise should grant access). The m-of-n parameterisation allows operators to tune this trade-off: a 2-of-3 scheme tolerates one lost key and prevents a single compromised key from being exploited; a 3-of-5 scheme used in institutional custody tolerates two losses while requiring collusion among three parties to misappropriate funds.
- Why it matters:
  - Removes custodial single points of failure across key storage, geography, and personnel
  - Enforces separation of duties in treasury and asset management
  - Provides an auditable, on-chain record of approvals for compliance purposes
  - Is a foundational primitive for [[DAO Governance]], [[Cross-Chain Bridge]] security, and exchange cold storage
- How it works (protocol level):
  - In Bitcoin, the Pay-to-Script-Hash (P2SH) and Pay-to-Witness-Script-Hash (P2WSH) output types commit a hash of the redeem script to the chain; spending requires revealing the script and providing m valid signatures matching the n public keys encoded therein
  - Full nodes verify each signature independently against the corresponding public key using [[ECDSA]] or [[Schnorr Signature]] verification
  - On EVM-compatible chains, threshold logic is encoded in [[Smart Contract]] bytecode; Gnosis Safe (now Safe{Wallet}) is the dominant implementation, holding a significant share of total value locked in DeFi
  - At the cryptographic layer, newer protocols (MuSig2, FROST) use interactive signing rounds to aggregate n individual signatures into a single aggregated signature, making multisig indistinguishable from single-key signatures on-chain

### Key Components

- **m-of-n threshold**: the core parameter pair defining how many (m) of the total (n) key-holders must sign; selection of m and n determines the security-availability trade-off
- **[[Cryptographic Keys]]**: each participant holds a distinct private key; the corresponding public keys are registered in the redeem script or contract; key generation typically uses [[Elliptic Curve Cryptography]]
- **Redeem Script / Contract**: in Bitcoin, the redeem script encodes the public keys and threshold; in EVM chains, a [[Smart Contract]] enforces the logic and optionally additional conditions (time-locks, spending limits, role-based access)
- **[[Digital Signature]]**: each authorising party produces a signature over the transaction data using their private key; signatures are verified on-chain via [[ECDSA]] or [[Schnorr Signature]] algorithms
- **[[Hash Function]]**: in P2SH/P2WSH, the redeem script is hashed to form the output address, committing to the policy without revealing it until spend time
- **[[Hardware Security Module]]**: signing keys for institutional deployments are typically stored in HSMs or hardware wallets to prevent key extraction; each HSM holds one of the n shares
- **Key Ceremony**: the initial generation and distribution of the n private keys, often conducted as a formal [[Key Ceremony]] with multiple parties present to ensure no single party learns all keys
- **Coordinator / Aggregator**: software or service that collects partial signatures from m signers and assembles the final transaction; may be centralised (Gnosis relayer) or decentralised

### Mechanisms

- **Bitcoin Script Multisig (OP_CHECKMULTISIG)**: the original Bitcoin opcode; deprecated in favour of P2SH and P2WSH for privacy and fee efficiency reasons; still valid but produces larger, more expensive transactions
- **P2SH Multisig (BIP 16)**: standardised in 2012; allows arbitrary redeem scripts committed as a hash, enabling n-of-m schemes without revealing participant keys in the output address
- **P2WSH (Segregated Witness)**: moves redeem script to the witness field, reducing transaction weight and fee costs; enables more complex scripts
- **Taproot / MuSig2 (BIP 340/341/327)**: Schnorr-based key aggregation; n participants interactively produce a single aggregate public key and, during signing, a single aggregate signature; undetectable as multisig on-chain, improving privacy and reducing fees
- **FROST (Flexible Round-Optimised Schnorr Threshold)**: a threshold signature protocol that supports t-of-n signing with a single-round online phase; suitable for distributed signers with high latency
- **Smart Contract Multisig (EVM)**: Solidity contracts encode threshold, signer list, and ancillary policies; transactions are proposed on-chain, signers approve via contract calls, and execution is released once m approvals accumulate; supports meta-transactions via EIP-1271
- **MPC Wallet / TSS**: [[MPC Wallet]] (multi-party computation wallet) uses secret sharing rather than independent full keys; each party holds a share; shares are combined ephemerally during signing; contrasts with classical multisig where each party holds a full private key

### Applications and Use Cases

- **Institutional Cryptocurrency Custody**: exchanges and custodians (Coinbase Custody, BitGo) use 3-of-5 or higher schemes with HSMs distributed across geographic regions; mitigates both physical and cyber attacks
- **DAO Treasury Management**: [[DAO Governance]] bodies use multisig contracts (Safe{Wallet} deployed on Ethereum, Gnosis Chain, Polygon, and others) to control protocol treasuries; signers are elected council members or core team
- **Exchange Cold Storage**: exchange operators segregate cold wallets behind multisig requiring sign-off from multiple executives and security staff; prevents rogue employee theft
- **[[Cross-Chain Bridge]] Security**: bridge contracts controlling locked assets on source and destination chains typically use a multisig committee of validators; bridges with insufficient m-or-n thresholds have been exploited (Ronin, Harmony Horizon)
- **Escrow Services**: peer-to-peer escrow uses 2-of-3 multisig (buyer, seller, arbitrator) so that dispute resolution involves a neutral third party without ceding full control to either party
- **Payment Channels and Layer-2**: Lightning Network channel funding transactions use 2-of-2 multisig between channel participants; cooperative closes require both signatures
- **Corporate Accounts**: multi-signatory approvals for corporate blockchain accounts mirror traditional banking dual-control requirements; board resolutions encoded as multisig thresholds
- **Software Release Signing**: multi-signature schemes are applied beyond blockchain to code-signing workflows, where multiple developers must sign a release before it is published, preventing insider supply-chain attacks
- **[[Decentralised Identity]]**: multisig patterns appear in DID document key management, where recovery keys form an m-of-n quorum to rotate the primary signing key

### Standards and Context

- **BIP 11** (M-of-N Standard Transactions): the original Bitcoin Improvement Proposal defining OP_CHECKMULTISIG spending patterns
- **BIP 16** (Pay to Script Hash): standardised P2SH, enabling multisig addresses and arbitrary redeem scripts, merged 2012
- **BIP 141** (Segregated Witness): introduced P2WSH, placing redeem scripts in the witness field for reduced weight
- **BIP 327** (MuSig2): specifies a two-round Schnorr multi-signature scheme compatible with BIP 340 (Taproot)
- **BIP 340** (Schnorr Signatures for secp256k1): the underlying signature scheme enabling key aggregation
- **FROST** (RFC draft, IETF CFRG): Flexible Round-Optimised Schnorr Threshold signatures; under standardisation by the IETF Crypto Forum Research Group
- **EIP-1271**: standard for smart contract signature validation on EVM chains, enabling multisig wallets to sign arbitrary messages
- **FIPS 186-5**: NIST standard for digital signatures including ECDSA, underpinning the individual signatures within multisig schemes
- **MiCA (EU)**: Markets in Crypto-Assets Regulation explicitly addresses key management standards; proper multisig threshold custody is increasingly treated as a compliance expectation for VASPs
- **SOC 2 Type II / ISO 27001**: institutional custody providers routinely cite multisig architecture as a control mitigating unauthorised asset transfer risk in audit reports
- Relevant bodies: [[Bitcoin Core]] development community, [[Ethereum Foundation]], IETF CFRG, EU ESMA (MiCA implementation), US OFAC (sanctions compliance via on-chain transparency)

### Security Considerations

- **Collusion risk**: multisig reduces but does not eliminate insider threat; m signers acting in collusion can still authorise fraudulent transactions; organisational controls and geographic distribution of signers are complementary
- **Script/contract bugs**: smart contract multisig introduces additional attack surface; the Parity Multisig wallet bug (2017) froze hundreds of millions of dollars due to a self-destruct vulnerability in a shared library contract
- **Signer availability**: too-high an m value risks fund lockout if signers are unavailable; dead-man's-switch and time-locked recovery mechanisms address this
- **Key ceremony integrity**: compromise during the initial key generation (e.g., a malicious RNG in a ceremony participant's hardware) undermines the security model entirely
- **Aggregation protocol security**: MuSig2 and FROST require careful implementation; rogue-key attacks and nonce reuse are known attack vectors against naive implementations of Schnorr aggregation
- **On-chain visibility**: classic P2SH multisig reveals the number of signers and public keys at spend time, which can be used for correlation analysis; Taproot-keypath and MuSig2 mitigate this

### Provenance

