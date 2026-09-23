
A delegation registry is an on-chain contract that records mappings from a token holder's address to a delegate authorised to act or vote on their behalf. In DAO governance it lets holders assign their voting power to a representative without transferring assets, and the registry serves as the canonical source consulted when tallying votes. It enables liquid democracy patterns and separation of custody from voting authority.

- ### Content
  - Holders call the registry to set or revoke a delegate; vote-counting then walks these mappings to attribute power correctly. Standardised registries (e.g. ERC-5639-style designs) allow multiple governance front-ends to share one authoritative delegation graph, reducing fragmentation.

