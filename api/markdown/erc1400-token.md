- ### Definition
  An ERC1400 Token is an Ethereum-based security token standard that extends the ERC20 interface with partitioned token tranches, forced transfer capabilities, controller-initiated operations, and on-chain document management, enabling issuers to represent regulated financial securities on a public or permissioned blockchain. The standard enforces transfer restrictions through a canTransfer validation hook that integrates with off-chain compliance logic — such as AML/KYC whitelists and jurisdictional eligibility rules — returning standardised EIP-1066 status codes rather than simple booleans. ERC1400 is positioned as an umbrella framework composing interoperability sub-standards (ERC1410 for partitions, ERC1594 for transfers, ERC1643 for documents, ERC1644 for controller operations), making it suitable for tokenising equities, bonds, real estate, and fund units subject to securities law.

- ### Relationships
  - hasPart:: [[ERC1400 Standard]], [[Smart Contract]]
  - requires:: [[Regulatory Compliance]], [[AML KYC Compliance]], [[Blockchain Compliance]]
  - enables:: [[Asset Tokenization]], [[Security Token Offering]], [[Digital Asset Trading]]
  - uses:: [[ERC20 Token]], [[Compliance Framework]]
  - relatedTo:: [[ERC3643 Token]], [[Digital Asset]], [[Securities Regulation]], [[Financial Regulation]], [[Token Standard]]

- ### Content
  ERC1400 was proposed by Polymath in 2018 as a response to the limitations of ERC20 for securities applications — specifically its lack of transfer restrictions, forced-transfer mechanisms required for court orders or error corrections, and document attachment for prospectuses and shareholder agreements. The standard introduces the concept of token partitions (tranches) that allow a single contract to represent multiple classes of the same security (e.g., ordinary shares, preference shares, locked shares) with distinct transfer rules per tranche.

  The canTransfer(address from, address to, bytes32 partition, uint256 value, bytes calldata data) function is the compliance gateway: it returns an EIP-1066 status byte and an application-specific reason bytes32, enabling on-chain representation of why a transfer was blocked (insufficient balance, receiver not whitelisted, partition locked) without requiring callers to decode revert strings. This design supports clean integration with compliance oracles that enforce jurisdiction-specific rules, holding period restrictions, and investor accreditation thresholds.

  Controller operations (isControllable, controllerTransfer, controllerRedeem) give designated controller addresses — typically the token issuer or a regulatory authority — the ability to override transfer restrictions and forcibly move or redeem tokens. This design is intentional for regulated securities where corporate actions, court orders, and unclaimed property statutes may require issuer-initiated transfers. The trade-off is that ERC1400 tokens are not censorship-resistant in the way that ERC20 tokens may be.

  ERC1400 competes with ERC3643 (T-REX), which also targets regulated securities but takes a different architectural approach with an on-chain identity registry and modular compliance modules. Both standards have been adopted by real-world security token issuance platforms; the choice between them depends on the existing infrastructure of the compliance layer and the issuer's preference for on-chain versus off-chain identity management.

- ### Provenance
  - sources:: Chimera Prime Research
  - migration-date:: 2026-04-26T00:00:00Z