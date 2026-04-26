iri:: http://narrativegoldmine.com/blockchain#DecentralizedExchange
uri:: urn:visionclaw:concept:blockchain:decentralized-exchange
rdf-type:: owl:Class
same-as:: urn:visionclaw:concept:blockchain:decentralized-exchange
type:: owl:Class
context:: https://visionclaw.dreamlab-ai.systems/ns/v2
domain:: blockchain
preferred-term:: Decentralized Exchange
content-hash:: sha256-stub-003
status:: stub
maturity:: emerging
quality-score:: 0.35
authority-score:: 0.6
version:: 1.0.0
created:: 2026-04-26T00:00:00Z
modified:: 2026-04-26T00:00:00Z
public:: true

- ### Definition
  - A [[Decentralized Exchange]] (DEX) is a peer-to-peer trading platform built on blockchain that enables direct asset swaps between users through [[Smart Contracts]] and [[Liquidity Provision]] mechanisms, eliminating the need for a centralised custodian or order-matching intermediary.

- ### Semantic Classification
  - owl-class:: blockchain:DecentralizedExchange
  - owl-role:: Object
  - belongs-to-domain:: [[BlockchainDomain]]
  - implemented-in-layer:: [[ApplicationLayer]]

- ### Relationships
  - is-subclass-of:: [[Marketplace]], [[Financial Protocol]], [[Blockchain Application]]
  - requires:: [[Smart Contract]], [[Liquidity Pool]], [[Token Standard]]
  - enables:: [[Asset Tokenisation]], [[Token Swapping]], [[Financial Inclusion]]
  - bridges-to:: [[Traditional Exchange]], [[Financial Markets]]

- ### Content

  Decentralised exchanges represent a fundamental restructuring of asset trading infrastructure by removing the requirement for trusted intermediaries. Users maintain custody of their assets whilst trading directly from their self-hosted wallets, eliminating counterparty risk and exchange-level security vulnerabilities.

  DEX platforms utilise automated market maker (AMM) mechanisms where [[Liquidity Provision]] ensures continuous trading availability. Users deposit asset pairs into liquidity pools, earning trading fees proportional to their contribution. Prices are determined algorithmically rather than through traditional order books, enabling transparent, permissionless trading at any hour.

  Decentralised exchanges sacrifice immediate liquidity and trading speed compared to centralised platforms. Lower trading volumes on less-popular token pairs increase price slippage and reduce execution certainty. Smart contract vulnerabilities and incorrect mathematical implementations have historically resulted in significant user losses.

- ### Provenance
  - sources:: [[Uniswap]], [[Blockchain Finance]]
  - migration-date:: 2026-04-26T00:00:00Z
