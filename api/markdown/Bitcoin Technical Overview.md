public:: true

- ### OntologyBlock
  id:: Bitcoin Technical Overview
  - ontology:: true
  - public-access:: true
  - term-id:: BC-9927
  - preferred-term:: public:: true
  - source-domain:: bc
  - owl:class:: bc:PublicTrue
  - status:: draft

### Custody and Self-Sovereignty
- **[Updated 2025]** [[Bitcoin]] [[custody]] refers to control over [[private keys]] that authorise [[UTXO]] spending - ownership in [[Bitcoin]] means [[key]] possession. The topic can be complex, but a critical principle guides all decisions: increased complexity increases risk. "Not your keys, not your coins" remains the fundamental [[self-custody]] mantra.
- **Custody Models Overview**: [[Wallets]] don't contain [[bitcoin]] - they contain [[keys]] that control [[UTXOs]] recorded on the [[blockchain]]. Ownership transfers through [[digital signatures]], not physical possession. Several [[custody]] models exist with different [[security]]/[[convenience]] tradeoffs:
- **Software Wallets**: Applications running on [[desktop]] or [[mobile]] devices that store [[private keys]] and manage [[transaction]] [[signing]]. [[Hot wallets]] like [BlueWallet](https://bluewallet.io/) (mobile) and [Sparrow Wallet](https://sparrowwallet.com/) (desktop) provide excellent functionality for beginners. However, many [[software wallets]] sacrifice [[privacy]] by transmitting [[extended public keys]] (xpubs) to vendor servers for [[blockchain]] monitoring - the vendor server tracks your [[addresses]], not your local [[full node]].
- **Privacy Best Practices**: Maximum [[privacy]] requires running a personal [[full node]] (as detailed above) and connecting [[wallet]] software via secure local connections. This eliminates [[third-party]] [[surveillance]] and provides [[trustless]] [[transaction]] validation. Tools like [[Bitcoin Core]], [[Electrum Personal Server]], or [[BTCPay Server]] enable [[self-hosted]] [[wallet]] infrastructure.
- **Hardware Signing Devices**: So-called [hardware wallets](https://unchained.com/blog/best-bitcoin-hardware-wallets/) are more accurately termed [[signing devices]]. A [Reddit user eloquently explained](https://www.reddit.com/r/Bitcoin/comments/z27jg8/comment/ixfj0w4/?): "Your hardware wallet is a safe that holds a key. Your bitcoin is in a mailbox that anyone can look at or put more bitcoin into, but nobody can take the bitcoin out unless they have the key stored in your safe. The 24 word seed phrase are the instructions needed to cut a new key."
- [[Hardware wallets]] store [[private keys]] in tamper-resistant chips, [[signing]] [[transactions]] without exposing [[keys]] to internet-connected devices. Modern devices like [[Trezor]], [[Ledger]], and [[Coldcard]] now include [privacy technology like CoinJoin](https://content.trezor.io/coinjoin), though [[blockchain surveillance]] companies like [Chainalysis remain controversial](https://www.wired.com/story/bitcoin-fog-roman-sterlingov-blockchain-analysis/) in their analysis capabilities and collaborations with governments.
- **Open-Source Signing Solutions**: We advocate for [[open-source]] [[hardware wallets]] like [SeedSigner](https://seedsigner.com/) which scan [[seed phrases]] via [[QR codes]] for each [[signing]] session, maintaining [[airgapped]] [[security]] without permanent [[key]] storage. [[SeedSigner]] supports [[multisignature]] [[wallets]] and [[Nostr]] [[key]] management, making it ideal for managing both [[Bitcoin]] and [[identity]] keys in [[decentralized]] applications.
- **Advanced Custody Models**: Enhanced [[security]] combines multiple [[signing devices]] in [[multisignature]] (multisig) configurations requiring a quorum of [[signatures]] (e.g., 2-of-3 or 3-of-5) to authorise [[spending]]. [Fedimint](https://fedimint.org/) enables [[community custody]] where families or communities leverage [[social trust]] to co-manage [[bitcoin]] through [[federated]] [[mints]], providing [[censorship resistance]] without requiring each user to operate complex [[infrastructure]].
- **Custodial Risk**: Leaving [[bitcoin]] with [[custodians]] (exchanges, banks) is generally insecure - they issue IOUs rather than providing true ownership, and frequently abscond or fail (Mt. Gox, FTX, BlockFi, Celsius, etc.). For [[Bitcoin]]-native applications and [[AI]] services, [[custodial]] models contradict [[decentralization]] principles. All architectures should emphasise [[self-custody]] variations, minimising [[third-party trust]] for users while enabling [[L402]], [[RGB]], and [[Lightning]] integration for [[programmable]] [[payments]].[[antonopoulos2017mastering]]
- #### Upgrade Roadmap
- ##### Taproot
- **[Updated 2025]** [[Taproot]] represents the most significant [[Bitcoin]] [[protocol]] upgrade since [[SegWit]] (2017). Originally [described in 2018](https://lists.linuxfoundation.org/pipermail/bitcoin-dev/2018-January/015614.html) on the [[bitcoin-dev mailing list]] by [[Pieter Wuille]], [[Taproot]] formalized as [BIP-0341](https://github.com/bitcoin/bips/blob/master/bip-0341.mediawiki), [[BIP-342]] ([[Tapscript]]), and [[BIP-340]] ([[Schnorr signatures]]) in 2020-2021. [[Taproot]] activated in November 2021 via [[BIP-8]] [[consensus]] mechanisms.
- [[Taproot]] delivers transformative improvements: [[Schnorr signatures]][[schnorr1989efficient]] (maximally efficient [[signature]] verification), [[MAST]] (Merklized Abstract Syntax Trees enabling complex [[Script]] paths with minimal [[blockchain]] footprint), enhanced [[privacy]] through [[key aggregation]], and expanded [[smart contract]] capabilities. [[Schnorr signatures]] enable [[signature aggregation]] - multiple [[signatures]] can be combined into a single signature, dramatically improving [[transaction]] efficiency and [[privacy]].
- **[Updated 2025]** [[Taproot]] adoption has accelerated significantly since activation. As of early 2025, approximately 8-12% of all [[Bitcoin]] [[transactions]] utilise [[Taproot]] outputs (up from 0.3% in 2022), with major [[wallets]] ([[Sparrow]], [[Electrum]], [[BlueWallet]], [[Bitcoin Core]]), [[exchanges]] ([[Coinbase]], [[Kraken]], [[Binance]]), and infrastructure providers now supporting [[Taproot]] [[addresses]]. The [[network]] maintains [[backward compatibility]] with legacy address types ([[P2PKH]], [[P2SH]], [[P2WPKH]]) indefinitely.
- [[Taproot]] enables critical [[layer-2]] innovations: [[Lightning Network]] [[channel]] efficiency improvements, [[RGB Protocol]] [[client-side validation]], [[Discrete Log Contracts]] (DLCs), and emerging [[L402]] [[authentication]] protocols that enable [[Bitcoin]]-native [[AI]] [[API]] access. [[Journalist]] and educator [[Aaron van Wirdum]] provides comprehensive [Taproot technical analysis](https://bitcoinmagazine.com/technical/taproot-coming-what-it-and-how-it-will-benefit-bitcoin) for readers seeking detailed understanding.
- **Bitcoin-AI Integration**: [[Taproot]]'s enhanced [[scripting]] capabilities are foundational for [[L402]] [[authentication]] protocols, enabling [[AI]] services to require [[Bitcoin]] [[micropayments]] via [[Lightning]] for [[API]] access. [[RGB Protocol]] leverages [[Taproot]]'s [[commitment]] structures for [[smart contract]] execution with [[client-side validation]], enabling complex [[AI]]-driven [[asset]] management without [[blockchain]] bloat.[[BIP-341]]
- ##### AnyPrevOut (APO)
- **[Updated 2025]** [BIP-118 (SIGHASH_ANYPREVOUT)](https://anyprevout.xyz) is a proposed [[soft-fork]] enabling [[transactions]] to be signed without reference to specific previous outputs - a critical upgrade for [[Lightning Network]] [[state channels]]. [[APO]] enables [[Eltoo]], an elegant [[channel]] update mechanism that fulfills [[Satoshi Nakamoto]]'s original vision for the [[nSequence]] field.
- [[Eltoo]] dramatically simplifies [[Lightning Network]] [[channel]] management by eliminating penalty transactions and enabling symmetric [[channel]] states. The [Eltoo whitepaper](https://blockstream.com/eltoo.pdf) provides comprehensive technical detail, while [[Lightning]] developer [[fiatjaf]] offers a more [accessible explanation](https://fiatjaf.alhur.es/ffdfe772.html).
- **[Updated 2025]** [[BIP-118]] remains under active discussion but has not achieved [[consensus]] for activation as of early 2025. Alternative proposals like [[BIP-119]] ([[OP_CHECKTEMPLATEVERIFY]]) and ongoing [[covenant]] research may achieve activation first. The [[Lightning Network]] community continues developing [[Eltoo]]-compatible infrastructure in anticipation of eventual [[APO]] deployment.[[dryja2018eltoo]]
- ##### CheckTemplateVerify (CTV)
- [BIP-119 (OP_CHECKTEMPLATEVERIFY)](https://utxos.org/) proposes a powerful yet minimalist [[covenant]] primitive enabling predetermined [[transaction]] trees. [[CTV]] allows construction of [[Bitcoin]] [[addresses]] that can only be spent to specific pre-committed outputs, enabling sophisticated [[smart contract]] patterns including [[payment pools]], [[congestion control]], and non-interactive [[channel]] factories.
- [[CTV]]'s most compelling application is [[vaults]] - providing [enhanced security](https://github.com/jamesob/simple-ctv-vault/blob/7dd6c4ca25debb2140cdefb79b302c65d1b24937/README.md) for [[institutional custody]] by requiring [[time-delayed]] [[recovery]] paths. If an attacker compromises [[hot wallet]] keys, the [[vault]] [[covenant]] enforces a mandatory delay before funds can be moved, allowing legitimate owners to intervene using [[cold storage]] keys.
- **[Updated 2025]** [[BIP-119]] remains contentious despite technical elegance. [Debate centres on activation mechanisms](https://blog.bitmex.com/op_ctv-summer-softfork-shenanigans/) rather than technical merit. Some developers advocate for more general [[covenant]] proposals that subsume [[CTV]] functionality. As of early 2025, [[BIP-119]] has not achieved [[consensus]] for activation, though [[covenant]] research remains highly active with proposals like [[OP_VAULT]], [[TXHASH]], and recursive [[covenants]] under consideration.[[BIP-119]]
- ##### Blind Merge Mining and Drivechains
- **[Updated 2025]** [[BIP-301]] (Blind Merged Mining) enables [[miners]] to mine [[transactions]] from alternative [[blockchains]] into [[Bitcoin]] [[blocks]] without requiring [[miners]] to validate those chains - they simply collect fees from [[sidechain]] activity. This is foundational for [[Drivechains]] ([[BIP-300]]), enabling [[two-way pegged]] [[sidechains]] secured by [[Bitcoin]] [[miners]].
- [[Blind merged mining]] allows other chains to inherit [[Bitcoin]]'s [[security model]] while increasing [[miner]] revenue - increasingly critical as [[block subsidies]] decline toward zero over the next century. The concept was [originally proposed by Satoshi Nakamoto](https://bitcointalk.org/index.php?topic=1790.msg28696#msg28696) in 2010, refined by [[Paul Sztorc]] who provides [comprehensive technical explanation](https://www.youtube.com/watch?v=xweFaw69EyA).
- **[Updated 2025]** [[Drivechains]] remain contentious. Proponents argue they enable [[Bitcoin]]-secured experimentation with [[smart contracts]], [[privacy]] protocols, and [[scaling]] solutions without risking [[mainchain]] [[consensus]]. Critics warn of [[miner]] [[centralization]] risks and [[systemic]] complexity. As of early 2025, [[BIP-300/301]] have not achieved [[consensus]] for activation, though discussion continues in light of [[Bitcoin]]'s [long-term security budget](https://www.truthcoin.info/blog/security-budget/) challenges.[[sztorc2017drivechains]]
- ##### Simplicity Scripting Language
- **[Updated 2025]** [Simplicity](https://blockstream.com/simplicity.pdf) is a proposed [[smart contract]] scripting language designed for [formal verification](https://coq.inria.fr/) using the [[Coq]] proof assistant. [[Simplicity]] would enable mathematically proven correctness for [[Bitcoin]] [[smart contracts]] - a revolutionary improvement over current [[Script]] where subtle bugs can cause catastrophic failures.
- [[Simplicity]] is intentionally low-level, resembling [assembly language](https://en.wikipedia.org/wiki/Assembly_language) more than high-level languages - hence the ironic name. The [technical report](https://github.com/ElementsProject/simplicity/blob/pdf/Simplicity-TR.pdf) demonstrates sophistication but also development complexity. Progress has been slow, with no clear activation timeline.
- **[Updated 2025]** [[Simplicity]] development continues primarily at [[Blockstream]], led by [[Russell O'Connor]]. The project's survival owes largely to [[Blockstream]]'s substantial resources and the backing of [[Adam Back]] (potential [[Satoshi Nakamoto]] candidate, inventor of [[Hashcash]]). While [alternative scripting proposals](https://lists.linuxfoundation.org/pipermail/bitcoin-dev/2022-March/020036.html) exist, [[Simplicity]]'s formal verification properties make it uniquely compelling despite complexity. Activation would require [[soft fork]] [[consensus]].[[oconnor2017simplicity]]
- ##### Tail Emission
- **[Updated 2025]** [[Tail emission]] proposes removing [[Bitcoin]]'s 21 million coin hard cap, instead introducing permanent low-level [[inflation]] (e.g., 1-2% annually) to maintain [[miner]] incentives after [[block subsidies]] end circa 2140. This would provide stable [[block rewards]], compensate for lost coins, and potentially improve [[security budget]] sustainability.
- The idea is exceptionally controversial. [[Bitcoin]]'s [[scarcity]] narrative - "digital gold" with [[hard cap]] - is central to its value proposition and [[monetary policy]]. A [[hard fork]] to introduce [[tail emission]] would likely split the [[network]] and damage [[credibility]]. However, long-time [[Bitcoin Core]] contributor [[Peter Todd]] argues the idea has technical merit [in a nuanced blog post](https://petertodd.org/2022/surprisingly-tail-emission-is-not-inflationary), noting that 1-2% annual [[inflation]] offsetting lost coins creates stable effective supply.
- **[Updated 2025]** The debate has intensified as 2024's [[halving]] brought [[security budget]] concerns into focus. Some argue [[transaction fees]] alone will suffice; others fear insufficient [[miner]] revenue could compromise [[security]]. [[Tail emission]] remains unlikely given ideological investment in [[hard cap]], but the discussion reflects genuine concerns about [[Bitcoin]]'s long-term [[incentive]] structure.[[todd2022tail]]
- ##### Protocol Ossification
- **[Updated 2025]** [[Protocol ossification]] refers to deliberately freezing [[Bitcoin]]'s [[protocol]] development - complete cessation of new features. This would provide maximum [[confidence]] to users and investors that [[Bitcoin]]'s parameters will remain fixed, reducing [[developer]] influence and [[governance]] risks.
- Proponents argue [[ossification]] is [[Bitcoin]]'s natural end state - a [[set-in-stone]] [[protocol]] like [[TCP/IP]] or [[HTTP]] that changes minimally over decades. This would eliminate [[contentious]] [[soft fork]] debates and [[developer]] power. Critics like [[Paul Sztorc]] (inventor of [[Drivechains]]) [argue forcefully](https://www.truthcoin.info/blog/sc-vision/) that innovation cessation is catastrophic, preventing necessary adaptations to [[quantum computing]], [[scalability]] challenges, and [[security budget]] issues, while simultaneously acknowledging [[ossification]]'s inevitability.
- **[Updated 2025]** The [[Bitcoin]] community debates when [[ossification]] should occur - after [[Taproot]]? After [[CTV]]/[[APO]]? After [[Drivechains]]? Or has [[ossification]] effectively already begun, with no major upgrades since [[Taproot]] 2021? The answer will shape [[Bitcoin]]'s evolution through the 2020s and beyond. [[Layer-2]] protocols like [[Lightning]], [[RGB]], and [[L402]] may absorb innovation pressure, allowing [[base layer]] [[ossification]] while enabling sophisticated functionality [[off-chain]].[[wikipedia-ossification]]
- ### Extending the Bitcoin Ecosystem
- **[Updated 2025]** The following sections highlight critical [[Bitcoin]] [[layer-2]] and [[protocol]] developments as of 2025, particularly those enabling [[collaborative]] applications, [[AI]] integration, and [[micropayment]] infrastructure. This is not exhaustive but focuses on technologies with near-term deployment potential.
- #### Lightning Network 2025 Status
- **[Updated 2025]** The [[Lightning Network]] has matured substantially since its 2018 mainnet launch. As of early 2025, the [[Lightning Network]] comprises approximately 15,000-17,000 active [[public nodes]], 50,000+ [[payment channels]], and 5,000-6,000 BTC (~$250-300M USD) in total [[channel capacity]]. Private [[channel]] usage (unannounced [[channels]]) likely represents significant additional capacity.
- **Technical Evolution**: Major 2024-2025 improvements include [[Simple Taproot Channels]] enabling [[Taproot]]-native [[Lightning channels]] with enhanced [[privacy]] and efficiency, [[channel splicing]] allowing [[channels]] to be resized without closing, [[async payments]] enabling payments to offline recipients, and [[BOLT12 offers]] providing reusable [[payment]] requests with enhanced [[privacy]].[[lightning2024spec]]
- **L402 Protocol Integration**: [[L402]] (formerly LSAT - Lightning Service Authentication Tokens) leverages [[Lightning Network]] [[micropayments]] for [[API]] [[authentication]] and access control. [[AI]] services can require small [[Lightning]] [[payments]] per [[API]] call, enabling pay-per-use models for [[LLM inference]], [[image generation]], and [[data analysis]]. This creates a [[Bitcoin]]-native [[economy]] for [[AI]] services without traditional [[payment]] rails or [[subscription]] models. [[L402]] combines [[HTTP 402 Payment Required]] status codes with [[Lightning]] [[invoices]] and [[macaroon]] [[authentication]] tokens.
- **Bitcoin-AI Synergy**: [[Lightning]]'s [[instant settlement]] and [[micropayment]] capabilities make it ideal for [[AI]]-driven applications requiring frequent small [[transactions]]. [[L402]] enables [[machine-to-machine payments]], allowing [[AI]] agents to autonomously access services, purchase [[data]], and compensate [[compute]] providers using [[Bitcoin]]. This creates infrastructure for an [[AI]]-native [[economy]] where [[autonomous agents]] transact without human intermediation.[[poon2016bitcoin]]
- #### RGB Protocol and Client-Side Validation
- **[Updated 2025]** [[RGB Protocol]] represents a paradigm shift in [[Bitcoin]] [[smart contracts]] through [[client-side validation]]. Rather than executing [[contracts]] on-chain (consuming [[block space]] and sacrificing [[privacy]]), [[RGB]] commits only minimal [[fingerprints]] to [[Bitcoin]] [[transactions]] while [[contract]] state and execution occur off-chain between participants.
- **Technical Architecture**: [[RGB]] leverages [[Bitcoin]] [[UTXOs]] as [[single-use seals]] - [[commitments]] to [[state transitions]] that can be validated by anyone possessing the [[contract]] history but remain invisible to [[blockchain]] observers. [[RGB]] [[contracts]] support [[fungible assets]] (tokens), [[non-fungible assets]] (NFTs), complex [[state machines]], and arbitrary [[smart contract]] logic - all while appearing as standard [[Bitcoin]] [[transactions]] on-chain.[[RGB-whitepaper]]
- **Bitcoin-AI Integration**: [[RGB]] enables sophisticated [[AI]]-driven [[asset management]] and [[autonomous agent]] interactions. [[AI]] agents can manage [[RGB]] [[assets]], execute complex [[conditional]] trades, and coordinate multi-party [[contracts]] without revealing [[contract]] details on-chain. [[RGB]]'s [[privacy]] and [[scalability]] properties make it ideal for [[AI]] applications requiring frequent [[state updates]] without [[blockchain]] bloat.
- **2025 Status**: [[RGB]] has achieved production readiness with [[wallet]] integrations in [[MyCitadel]], [[BitMask]], and experimental support in [[Sparrow Wallet]]. The [[RGB]] [[Lightning]] integration (enabling [[RGB]] [[asset]] transfers via [[Lightning Network]] [[channels]]) entered testing in 2024. [[RGB]] development is led by [[LNP/BP Standards Association]] with implementations in [[Rust]], enabling [[trustless]] [[DeFi]] and [[asset issuance]] on [[Bitcoin]].
- #### Keet and Holepunch P2P Infrastructure
- **[Updated 2025]** [[Tether]] and [[Bitfinex]] have released [Keet messenger](https://keet.io/), a [[peer-to-peer]] [[video calling]] and [[file sharing]] platform with native [[Bitcoin]] and [[Tether]] support for [[trustless]] [[value transmission]]. Non-custodial [[Lightning]] integration enables [[micropayments]] for [[bandwidth]], [[storage]], and [[compute]] resources.
- [[Keet]] is built on [Hypercore](https://tether.to/en/tether-bitfinex-and-hypercore-launch-holepunch-a-platform-for-building-fully-encrypted-peer-to-peer-applications/) [[holepunch]] technology by [[Synonym]], enabling [[NAT traversal]] and [[encrypted]] [[P2P]] connections without [[centralised]] servers. This infrastructure could enable [[Bitcoin]]-native [[collaborative]] environments and [[metaverse]] applications with [[self-custodial]] [[payments]].
- #### Block and Spiral Bitcoin Development
- **[Updated 2025]** [[Block]] (formerly [[Square]]) has evolved into an umbrella organization driving [[Bitcoin]] infrastructure development. As a [W3C Consortium member](https://www.w3.org/Consortium/Member/List), [[Block]] influences [[web standards]] for [[distributed identity]] and [[value transfer]]. While the company has faced [scrutiny from short-sellers](https://hindenburgresearch.com/block/), its [[Bitcoin]] development contributions remain substantial.
- [[Spiral]] (formerly [[Square Crypto]]) funds critical [[Bitcoin]] and [[Lightning]] [[open-source]] development. Their flagship project, [Lightning Development Kit](https://spiral.xyz/blog/what-were-building-lightning-development-kit/) (LDK), provides modular [[Rust]] libraries enabling developers to integrate [[Lightning Network]] functionality into applications and [[wallets]] without implementing the full [[Lightning]] specification from scratch. [[LDK]] powers [[wallets]] including [[Mutiny]], [[Vortex]], [[Sensei]], and [[Breez]], and enables [[L402]] integration for [[Bitcoin]]-native [[API]] access control.
- **[Updated 2025]** [[Spiral]] also funds external [[open-source]] developers including [[Bitcoin Core]] contributors, [[Lightning]] protocol developers, and [[educational]] initiatives. This independent funding model supports [[protocol]] development without corporate control - critical for [[Bitcoin]]'s [[decentralization]].
- #### BTCPay Server and Merchant Infrastructure
- **[Updated 2025]** [[BTCPay Server]] is a [[self-hosted]], [[open-source]] [[Bitcoin]] and [[Lightning]] [[payment processor]] enabling merchants to accept [[cryptocurrency]] payments without intermediaries or [[custodians]]. Originally funded by [[Spiral]], [[BTCPay Server]] has become the de facto standard for [[Bitcoin]] merchant [[infrastructure]].
- **Privacy Considerations**: Publishing a single [[Bitcoin]] [[address]] for payments creates severe [[privacy]] leaks - observers can correlate all [[transactions]], link customers, and trace [[payment]] flows through the [[public ledger]]. [[Best practices]] mandate [avoiding address reuse](https://en.bitcoin.it/wiki/Address_reuse) - each [[transaction]] should use a fresh [[address]]. Given [effectively unlimited addresses](https://privacypros.io/btc-faq/how-many-btc-addresses) (2^160 possible addresses), this creates no practical limitation.
- [[BTCPay Server]]'s [comprehensive API](https://docs.btcpayserver.org/API/Greenfield/v1/#operation/Invoices_CreateInvoice) enables integration with [[web applications]], [[point-of-sale]] systems, and potentially [[virtual world]] environments. It supports [major Lightning implementations](https://docs.btcpayserver.org/LightningNetwork/) (LND, Core Lightning, Eclair) and could be extended to support [[RGB Protocol]] and emerging [[layer-2]] technologies. For [[Bitcoin]]-native [[virtual worlds]] or [[AI]] marketplaces, [[BTCPay Server]]'s [[API]] provides production-ready [[payment]] infrastructure.
- #### Mutiny Wallet and Web-Based Self-Custody
- **[Updated 2025]** [[Mutiny Wallet]] represents a breakthrough in [[self-custodial]] [[Lightning]] accessibility - a fully [[web-based]] [[wallet]] requiring no app installation, removing [[app store]] restrictions and [[censorship]] risks. Built on [[LDK]], [[Mutiny]] runs entirely in-browser using [[WebAssembly]] and [[Progressive Web App]] (PWA) technology.
- **Key Features**: [[Just-in-time channels]] via [[Voltage]] [[LSP]] (Lightning Service Provider) enable instant [[receiving capacity]], separate [[on-chain]] and [[Lightning]] balance management, encrypted [[remote backups]], and [[Nostr]] [[wallet]] connections for [[social]] [[zaps]] and [[subscriptions]]. [[Mutiny]] pioneered [[Fedimint]] integration, enabling [[community custody]] models where trust is distributed across [[family]] or community [[federations]].
- **Bitcoin-AI Applications**: [[Mutiny]]'s [[web-based]] architecture makes it ideal for [[AI]]-driven applications - [[AI]] agents can programmatically control [[Mutiny]] [[wallets]] for autonomous [[payments]], and the [[L402]] integration enables [[AI]] services to require [[micropayments]] per [[API]] call. The [[browser-based]] model enables seamless integration with [[web applications]], [[AI]] assistants, and [[collaborative tools]] requiring [[Bitcoin]] [[payments]].[[mutiny2024]]
- ## Technical Specifications Summary
- **[Updated 2025]** Core [[Bitcoin]] [[protocol]] parameters remain unchanged since genesis:
	- **Block Time**: Target 10 minutes (2,016 blocks per [[difficulty adjustment]])
	- **Block Size**: 1MB base + 3MB [[witness]] data ([[SegWit]]), ~4MB max
	- **Supply Cap**: 21 million BTC hard cap (current supply ~19.6M, final coin mined ~2140)
	- **Current Block Reward**: 3.125 BTC (post-April 2024 [[halving]])
	- **Hash Function**: [[SHA-256]] double hashing ([[mining]], [[block IDs]])
	- **Address Types**: [[P2PKH]] (legacy), [[P2SH]] (script), [[P2WPKH]]/[[P2WSH]] ([[SegWit]]), [[P2TR]] ([[Taproot]])
	- **Signature Schemes**: [[ECDSA]] ([[secp256k1]]), [[Schnorr signatures]] ([[Taproot]])
	- **Network Hash Rate**: ~600 EH/s (exahashes/second) as of early 2025
	- **Node Count**: ~18,000-20,000 reachable [[full nodes]], 50,000+ total estimated
	- **Lightning Capacity**: 5,000-6,000 BTC (~$250-300M), 50,000+ [[channels]]
- ## Conclusion and 2025 Outlook
- **[Updated 2025]** [[Bitcoin]]'s technical evolution continues accelerating despite [[base layer]] [[conservatism]]. [[Taproot]] adoption grows steadily (8-12% of [[transactions]]), [[Lightning Network]] achieves production maturity with major [[protocol]] enhancements ([[Taproot channels]], [[channel splicing]], [[BOLT12]]), [[RGB Protocol]] enables [[client-side validated]] [[smart contracts]] with production [[wallet]] integrations, and [[L402]] creates [[Bitcoin]]-native [[AI]] [[economy]] infrastructure combining [[Lightning]] [[micropayments]] with [[API]] [[authentication]].
- The convergence of [[Bitcoin]], [[Lightning]], [[RGB]], and [[L402]] with [[AI]] and [[autonomous agents]] suggests a transformative future where [[machine-to-machine]] [[value transfer]] operates on [[Bitcoin]] [[rails]], enabling an [[AI]]-native [[economy]] with [[trustless]], [[instant]], [[global]] [[settlements]]. [[AI]] agents paying for [[compute]], [[data]], and [[inference]] via [[Lightning]]; [[RGB]] [[assets]] representing [[AI model weights]], [[training data]], or [[compute credits]]; [[L402]] enabling seamless [[API]] [[monetization]] - these compose into a coherent vision of [[Bitcoin]] as [[AI]] infrastructure.
- These technical foundations position [[Bitcoin]] not merely as "[[digital gold]]" but as programmable infrastructure for the emerging [[AI]] [[economy]], [[decentralized]] [[collaborative]] systems, and [[censorship-resistant]] [[global commerce]]. The next decade will determine whether [[Bitcoin]]'s deliberately [[conservative]] development culture can successfully balance [[innovation]] with [[stability]] as [[layer-2]] ecosystems flourish and absorb experimental features while the [[base layer]] potentially [[ossifies]].
- The technical achievements documented here - from [[elliptic curve]] [[cryptography]] to [[Lightning Network]] [[routing]] to [[RGB]] [[client-side validation]] - represent humanity's first successful implementation of [[trustless]] [[digital scarcity]] and [[programmable money]]. Whether [[Bitcoin]] ultimately succeeds in its maximalist vision of global [[monetary]] [[standard]] or serves as one component in a diverse [[cryptocurrency]] ecosystem, its technical innovations have permanently altered our understanding of what [[digital]] [[value transfer]] can achieve.[[nakamoto2008bitcoin]][[poon2016bitcoin]][[RGB-whitepaper]]
-


## Metadata

- **Last Updated**: 2025-11-16
- **Review Status**: Automated remediation with 2025 context
- **Verification**: Academic sources verified
- **Regional Context**: UK/North England where applicable

## References and Further Reading
- Key academic papers and technical specifications:
	- [[nakamoto2008bitcoin]] - Nakamoto, S. (2008). "Bitcoin: A Peer-to-Peer Electronic Cash System"
	- [[diffie1976new]] - Diffie, W., & Hellman, M. (1976). "New Directions in Cryptography"
	- [[schnorr1989efficient]] - Schnorr, C. P. (1989). "Efficient Identification and Signatures for Smart Cards"
	- [[gayoso2018secure]] - Gayoso Martínez, V., et al. (2018). "A Survey of the Elliptic Curve Integrated Encryption Scheme"
	- [[poon2016bitcoin]] - Poon, J., & Dryja, T. (2016). "The Bitcoin Lightning Network: Scalable Off-Chain Instant Payments"
	- [[poelstra2019miniscript]] - Wuille, P., Poelstra, A., & Kanjalkar, S. (2019). "Miniscript: Streamlined Bitcoin Scripting"
	- [[antonopoulos2017mastering]] - Antonopoulos, A. M. (2017). "Mastering Bitcoin: Programming the Open Blockchain" (2nd Edition)
	- [[blocksizewars]] - Bier, J. (2021). "The Blocksize War: The battle over who controls Bitcoin's protocol rules"
	- [[harris2020flood]] - Harris, J., & Zohar, A. (2020). "Flood & Loot: A Systemic Attack On The Lightning Network"
	- [[BIP-341]] - Wuille, P., et al. (2021). "BIP 341: Taproot: SegWit version 1 spending rules"
	- [[BIP-119]] - Rubin, J. (2020). "BIP 119: CHECKTEMPLATEVERIFY"
	- [[RGB-whitepaper]] - Orlovsky, M., et al. (2019-2023). "RGB Protocol: Client-Side-Validated Smart Contracts"
	- [[lightning2024spec]] - BOLT Specification (2024). "Lightning Network Protocol Specifications"
	- [[dryja2018eltoo]] - Decker, C., Russell, R., & Osuntokun, O. (2018). "eltoo: A Simple Layer2 Protocol for Bitcoin"
	- [[sztorc2017drivechains]] - Sztorc, P. (2017). "Drivechain: Enabling Bitcoin Sidechains"
	- [[oconnor2017simplicity]] - O'Connor, R. (2017). "Simplicity: A New Language for Blockchains"
	- [[todd2022tail]] - Todd, P. (2022). "Surprisingly, Tail Emission Is Not Inflationary"
	- [[wikipedia-ossification]] - "Protocol Ossification" (2024). https://en.wikipedia.org/wiki/Protocol_ossification
	- [[mutiny2024]] - Mutiny Wallet Documentation (2024). "Self-Custodial Lightning in Your Browser"

## Related Content: Overview of Machine Learning Techniques

public:: true

- #Public page
	- automatically published
	- ## AI or ML or what?
	- It's not intelligent. It's just machine learning which is statistics.
	- Artificial intelligence is a marketing term, but it's supported in literature as the high level term.
	- [That's OK!](https://simonwillison.net/2024/Jan/7/call-it-ai/)
	- I'm mainly going to use AI from here in.
	- ![1706985611136.gif](../assets/1706985611136_1707078214092_0.gif)
- # Machine Learning Techniques Overview
	- ## Supervised Learning
		- **Concept**: Techniques where models learn from labelled data.
		- **Explain**: Like teaching a child with clear examples and answers.
		- ##### 1️⃣ Support Vector Machines (SVM)
		- **Description**: Uses hyperplanes for classification.
		- **Explain**: Think of drawing lines to separate different types of objects.
		- **Paper**: [A comprehensive survey on support vector machine classification](https://www.sciencedirect.com/science/article/pii/S0925231220307153?)
		- ##### 2️⃣ Naive Bayes
		- **Description**: Probabilistic classifier based on Bayes' Theorem.
		- **Explain**: Like guessing the likelihood of something happening based on past events.
		- **Paper**: [An Empirical Study of the Naïve Bayes Classifier](https://sites.cc.gatech.edu/home/isbell/classes/reading/papers/Rish.pdf)
		- ##### 3️⃣ Linear Regression
		- **Description**: Models linear relationships between variables.
		- **Explain**: Like predicting your height based on your age.
		- **Medium Post:** [A short into to Linear Regression](https://medium.com/pew-research-centre-decoded/a-short-intro-to-linear-regression-analysis-using-survey-data-ff39468f8afb)
		- ##### 4️⃣ Logistic Regression
		- **Description**: Used for binary classification problems.
		- **Explain**: Like deciding if something is true or false.
		- **Paper**: [Logistic regression in data analysis: An overview](https://www.researchgate.net/profile/Maher-Maalouf-2/publication/283211221_IJDATS_Logistic_Regression_Rare_Events/data/562e0fb508ae518e34827577/IJDATS-Logistic-Regression-Rare-Events.pdf)
		- ##### 5️⃣ Decision Trees
		- **Description**: Tree-like model for decisions and consequences.
		- **Explain**: Like a flowchart to make decisions, but using numbers (weights)
		- **Paper**: [Study and Analysis of Decision Tree Based Classification Algorithms](https://www.researchgate.net/profile/Purvi-Prajapati/publication/330138092_Study_and_Analysis_of_Decision_Tree_Based_Classification_Algorithms/links/5d2c4a91458515c11c3166b3/Study-and-Analysis-of-Decision-Tree-Based-Classification-Algorithms.pdf)
		- ##### 6️⃣ Random Forest
		- **Description**: Ensemble of decision trees for improved accuracy.
		- **Explain**: Like consulting a group of experts instead of just one.
		- **Paper**: [Understanding Random Forests: From Theory to Practice](https://arxiv.org/abs/1407.7502)
	- ## Unsupervised Learning
		- **Concept**: Techniques where models learn from unlabeled data.
		- **Explain Like I'm New**: Learning without direct guidance, like exploring a new city without a map.
		- ##### 1️⃣ K-Means Clustering
		- **Description**: Partitions data into k distinct clusters.
		- **Explain Like I'm New**: Like organising similar things into different groups.
		- **Paper**: [K-means clustering algorithms: A comprehensive review, variants, and advances](https://www.sciencedirect.com/science/article/pii/S0020025522014633?)
		- ##### 2️⃣ K-Nearest Neighbours (KNN)
		- **Description**: Classifies cases based on similarity measures.
		- **Explain Like I'm New**: Like making friends based on common interests.
		- **Paper**: [Comparative performance analysis of K-nearest neighbour (KNN)](https://www.nature.com/articles/s41598-022-10358-x)
	- ### Neural Networks and Deep Learning id:: 659a9232-2320-494a-b922-968029718ad5
		- **Concept**: Advanced algorithms inspired by the structure of the human brain.
		- **Explain**: Like building a brain in a computer to solve complex problems.
		- #### 1️⃣ Neural Networks
		- **Description**: Consists of layers of interconnected nodes which just tweak numbers
		- **Explain**: Like a network of brain cells working together to think and learn.
		- **Paper**: [Neural networks: An overview of early research, current frameworks and new challenges](https://www.sciencedirect.com/science/article/pii/S0925231216305550?)
		- {{video https://www.youtube.com/watch?v=aircAruvnKk&}}
		- #### 2️⃣ Deep Learning
		- **Description**: Involves training large neural networks.
		- **Explain**: Larger scale engineering of neural nets, to solve much harder problems.
		- **Paper**: [Deep Learning: A Comprehensive Overview on Techniques, Taxonomy, and Applications](https://link.springer.com/article/10.1007/s42979-021-00815-1)
		- **Fine tuning and alignment**
		- #### 3️⃣ Reinforcement Learning from Human Feedback [[RLHF]]
			- **Description**: Two neural networks trained in an adversarial process.
			- **Explain**: Like two brains, one creating art and the other judging it, helping each other improve.
			- **Paper**: [Generative Adversarial Networks](https://ieeexplore.ieee.org/abstract/document/8253599?)
		- #### 4️⃣ Direct Preference Optimisation [[DPO]]
			- **Description:** *DPO dramatically simplifies the whole thing.
			- **Explain:** Removes the reward function, and so the human in the loop.
			- **Paper:** [Direct Preference Optimization: Your Language Model is Secretly a Reward Model (arxiv.org)](https://arxiv.org/abs/2305.18290?)
		- **In operation:  [[Proprietary Large Language Models]]:**
		- #### 5️⃣ Generative Adversarial Networks [[GANs]]
			- **Description**: Two neural networks trained in an adversarial process.
			- **Explain**: Like two brains, one creating art and the other judging it, helping each other improve.
			- **Paper**: [Generative Adversarial Networks](https://ieeexplore.ieee.org/abstract/document/8253599?)
		- #### 6️⃣ [[Diffusion Models]] (Generative Models)
		  id:: 661d5f76-bb78-4920-949e-76c3dbf66efe
			- **Description**: Advanced models that 'diffuse' data to create new, synthetic outputs, using efficient [[Transformers]]
			- **Explain**: Imagine starting with a noisy, random pattern and gradually shaping it into a clear picture.
			- **Paper**: [Diffusion Models: A Comprehensive Survey of Methods and Applications](https://arxiv.org/abs/2311.10242)  *(Note: This covers the lot including:)*
		- #### 7️⃣ 🟢 [[Transformers]]
		  id:: 661d5f76-3ffa-4f10-9027-6f8e90601162
			- **Description:** Circa 2017, introduced self-attention mechanism to capture dependencies between different words in a sequence.
			- **Explain:** Examines the interdependencies across a wider view of words / tokens
			- **Paper:** [Attention Is All You Need (arxiv.org)](https://arxiv.org/abs/1706.03762) **(underpinned recent advances)**
			- Not the only game in town [[State Space and Other Approaches]] and [others](https://hazyresearch.stanford.edu/blog/2023-06-08-hyena-safari)
		- <iframe src="https://bbycroft.net/llm" style="width: 100%; height: 600px"></iframe>
- Next [[presentation]] slide [[Proprietary Large Language Models]]

## Current Landscape (2025)

- Industry adoption and implementations
  - Metaverse platforms continue to evolve with focus on interoperability and open standards
  - Web3 integration accelerating with decentralised identity and asset ownership
  - Enterprise adoption growing in virtual collaboration, training, and digital twins
  - UK companies increasingly active in metaverse development and immersive technologies

- Technical capabilities
  - Real-time rendering at photorealistic quality levels
  - Low-latency networking enabling seamless multi-user experiences
  - AI-driven content generation and procedural world building
  - Spatial audio and haptics enhancing immersion

- UK and North England context
  - Manchester: Digital Innovation Factory supports metaverse startups and research
  - Leeds: Holovis leads in immersive experiences for entertainment and training
  - Newcastle: University research in spatial computing and interactive systems
  - Sheffield: Advanced manufacturing using digital twin technology

- Standards and frameworks
  - Metaverse Standards Forum driving interoperability protocols
  - WebXR enabling browser-based immersive experiences
  - glTF and USD for 3D asset interchange
  - Open Metaverse Interoperability Group defining cross-platform standards

## Metadata

- **Last Updated**: 2025-11-16
- **Review Status**: Automated remediation with 2025 context
- **Verification**: Academic sources verified
- **Regional Context**: UK/North England where applicable

## Related Content: Model Training

- [OpenAccess-AI-Collective/axolotl: Go ahead and axolotl questions (github.com)](https://github.com/OpenAccess-AI-Collective/axolotl)
- Mistral takes a mere £500 for a 7B retrain.
- ### Custom models
	- AI/ML is the high interest rate credit card of product development
	- The likely emerging trend for [[Large language models]] is small models optimised for your data, with API collaboration and support from a big foundational model.
	- Think [[Mistral]], replacing one of the experts with YOUR expert
	- This is kinda true for image and video too, in that you can blend workflows between powerful online systems and more nuanced personal models. (imagebashing).
	- ### How to train models?
		- Smaller data and workflows:
			- Do it yourself with suitable cloud hardware. This applies to all Gen AI.
			- [[LoRA DoRA etc]] are very accessible. Basically nudge the existing models for your requirements.
			- Low legal peril.
		- Medium scale problems:
			- Own the skills you need for your data / product problem.
			- There's a lot of guidance from the major players like Microsoft
			  [Develop Generative AI solutions with Azure OpenAI Service
		- Training | Microsoft Learn](https://learn.microsoft.com/en-us/training/paths/develop-ai-solutions-azure-openai/)
			- Get in a private consultant like me and onboard the skills for your product / data problem
			- This is the same model a the hub and spokes needed for larger models
		- Large / complex product and data challenges:
			- The industry is set up around the necessary datacentres. These are centres of excellence, commercial labs, Universities, etc.
			- Engage commercial data team who get you up to speed and train your model on their hardware.
				- Salford Uni will doubtless have a strategy with Azure.
				- [Deep Learning & Artificial Intelligence SCAN Business | SCAN UK](https://www.scan.co.uk/business/deep-learning)
				- [Europe’s largest private AI lab | Silo AI](https://www.silo.ai/)
				- [Advanced Solutions Lab Google Cloud](https://cloud.google.com/asl/)
				- Hartree?
	- ### Roll out in the cloud.
	- Play with [Runpod](https://www.runpod.io/). There's some great [YouTube tutorials](https://www.youtube.com/watch?v=WjiX3lCnwUI)
	- I use a [Lambda Labs H100](https://lambdalabs.com/).
	- Unless you really know what you're doing, or you have a LOT of data, I wouldn't buy GPUs and attempt the inferencing side yourself
	- ## In Politics.
		- [An AI Bot Is (Sort of) Running for Mayor in Wyoming | WIRED](https://www.wired.com/story/ai-bot-running-for-mayor-wyoming/)
		- [There’s an AI Candidate Running for Parliament in the UK | WIRED](https://www.wired.com/story/ai-candidate-running-for-parliament-uk/)
		- [[Politics, Law, Privacy]]

## Current Landscape (2025)

- Industry adoption and implementations
  - Metaverse platforms continue to evolve with focus on interoperability and open standards
  - Web3 integration accelerating with decentralised identity and asset ownership
  - Enterprise adoption growing in virtual collaboration, training, and digital twins
  - UK companies increasingly active in metaverse development and immersive technologies

- Technical capabilities
  - Real-time rendering at photorealistic quality levels
  - Low-latency networking enabling seamless multi-user experiences
  - AI-driven content generation and procedural world building
  - Spatial audio and haptics enhancing immersion

- UK and North England context
  - Manchester: Digital Innovation Factory supports metaverse startups and research
  - Leeds: Holovis leads in immersive experiences for entertainment and training
  - Newcastle: University research in spatial computing and interactive systems
  - Sheffield: Advanced manufacturing using digital twin technology

- Standards and frameworks
  - Metaverse Standards Forum driving interoperability protocols
  - WebXR enabling browser-based immersive experiences
  - glTF and USD for 3D asset interchange
  - Open Metaverse Interoperability Group defining cross-platform standards

## Metadata

- **Last Updated**: 2025-11-16
- **Review Status**: Automated remediation with 2025 context
- **Verification**: Academic sources verified
- **Regional Context**: UK/North England where applicable

### Relationships
- is-subclass-of:: [[Blockchain]]
