- ### Definition
  - ERC-20 is the Ethereum Request for Comment standard that defines a mandatory six-function interface — totalSupply, balanceOf, transfer, transferFrom, approve, and allowance — enabling any conformant fungible token to interoperate seamlessly with wallets, decentralised exchanges, and smart contract protocols without bespoke integration. Proposed by Fabian Vogelsteller and Vitalik Buterin in 2015 and formalised as an Ethereum Improvement Proposal, ERC-20 became the foundational primitive of the DeFi ecosystem and the predominant format for utility tokens, governance tokens, and stablecoins.

- ### Semantic Classification
  - owl-class:: erc-20:ERC-20
  - owl-role:: Concept

- ### Relationships
  - enables [[Decentralised Finance]]
  - enables [[Fungible Token]]
  - uses [[Smart Contract]]
  - contrastsWith [[ERC-721]]
  - contrastsWith [[ERC-1155]]

- ### Content
  - ERC-20 standardises the behaviour of fungible tokens on the Ethereum Virtual Machine by specifying a minimal Solidity interface that any compliant token contract must implement. The transfer function moves tokens between accounts; approve and transferFrom implement the delegated transfer pattern that allows smart contracts such as decentralised exchange routers and lending protocols to spend tokens on a user's behalf after explicit authorisation. The optional name, symbol, and decimals metadata functions are universally adopted in practice.
  - ERC-20 tokens power virtually every segment of DeFi: stablecoins such as USDC and DAI, governance tokens such as UNI and COMP, liquidity provider (LP) tokens representing shares in Uniswap or Curve pools, and wrapped assets such as WBTC (an ERC-20 representation of Bitcoin). The standard's simplicity — just six mandatory functions — means any developer can deploy a compliant token with minimal code, accelerating composability across protocols.
  - A known limitation is the double-spend approval vulnerability: if a user calls approve to change an allowance from a non-zero value to another non-zero value, an attacker monitoring the mempool can exploit the window between the two transactions. ERC-20 extension proposals such as ERC-2612 (permit, using EIP-712 signed approvals) and ERC-777 (hooks-based token transfers) address usability and security shortcomings of the base standard. ERC-20 contrasts with ERC-721 for non-fungible tokens and ERC-1155 for multi-token contracts supporting both fungible and non-fungible types.

- ### Provenance
  - sources::
  - migration-date:: 2026-05-19T00:00:00Z