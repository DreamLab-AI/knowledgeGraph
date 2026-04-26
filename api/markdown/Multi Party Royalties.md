iri:: http://narrativegoldmine.com/spatial-computing#MultiPartyRoyalties
uri:: urn:visionclaw:concept:spatial-computing:multi-party-royalties
rdf-type:: owl:Class
same-as:: urn:visionclaw:concept:spatial-computing:multi-party-royalties
type:: owl:Class
context:: https://visionclaw.dreamlab-ai.systems/ns/v2
domain:: spatial-computing
preferred-term:: Multi Party Royalties
content-hash:: sha256-12-2b92ae4ad4b4
legacy-term-id:: MV-9975
status:: active
maturity:: draft
quality-score:: 0.35
authority-score:: 0.00
version:: 2.0.0
created:: 2026-04-26T00:00:00Z
modified:: 2026-04-26T13:00:00Z
author-did::
signature::
contributors::
public:: true

- ### Definition
  - A blockchain-based revenue distribution mechanism that uses smart contracts to automatically split and distribute royalty payments among multiple stakeholders including creators, collaborators, developers, and brands based on predefined ownership percentages.

- ### Semantic Classification
  - owl-class:: spatial-computing:MultiPartyRoyalties
  - owl-role:: Concept
  - belongs-to-domain:: [[metaverse]]

- ### Relationships
  - is-subclass-of:: [[Revenue Sharing]]
  - enables:: [[Creator Economy]]

- ### Content

  - #### Technical Details
		- Implemented through split contracts that execute automatic distribution
		- Uses ERC-2981 royalty standard for marketplace compatibility
		- Supports platforms including Ethereum, Solana, and Polygon
		- Typical royalty rates range from 2.5% to 10% on secondary sales
		- Tracks sales figures, calculates fees, and monitors compliance
  - #### Challenges
		- Lack of universal royalty enforcement across marketplaces
		- Some platforms have moved to royalty-optional models
		- Cross-platform royalty parameter inconsistency
		- Interoperability issues when NFTs transfer between platforms

- ### Provenance
  - sources::
  - migration-date:: 2026-04-26T00:00:00Z
