- ### Definition
  - A token standard in which each unit is distinct and not interchangeable, used to represent ownership of a specific digital or referenced physical item on a ledger.

- ### Semantic Classification
  - owl-class:: blockchain:NonFungibleToken
  - owl-role:: Class

- ### Relationships
  - is-subclass-of:: [[Token]]
  - bridges-to:: [[NFT Standard]], [[NFT Marketplace]]
  - requires:: [[Smart Contract]], [[ERC-721]]

- ### Content
  - A non-fungible token records ownership of a uniquely identified item, so that no two tokens are equivalent. This contrasts with fungible tokens, where every unit is identical and interchangeable. Token standards such as ERC-721 and ERC-1155 define how uniqueness, ownership, and transfer are encoded in contracts.
  - Non-fungible tokens are used to represent collectibles, digital art, in-game items, membership rights, and claims on referenced assets. The token typically points to metadata describing the item, and the location and permanence of that metadata determine how durably the represented item is bound to the on-chain record.

- ### Provenance
  - sources::
  - migration-date:: 2026-05-29T00:00:00Z