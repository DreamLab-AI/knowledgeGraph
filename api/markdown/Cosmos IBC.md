Inter-Blockchain Communication protocol that enables sovereign blockchain networks to exchange data and tokens trustlessly, using light clients and Merkle proofs to verify state across chains without centralised intermediaries, providing the foundational interoperability layer of the Cosmos ecosystem.

### Semantic Classification

### Content

Inter-Blockchain Communication (IBC) protocol enables trustless communication between independent Cosmos SDK blockchains without centralised intermediaries. Each chain maintains light clients of counterparty chains, verifying state through Merkle proofs rather than trusting external validators. IBC establishes bidirectional "channels" enabling packet relay at the application layer.

The protocol operates in three layers: connection layer managing cryptographic proofs between chains, channel layer establishing virtual communication paths for specific applications, and packet layer transferring serialised data with timeout and acknowledgement mechanisms. Tokens transfer through fungible token transfers (ICS-20) creating wrapped representations on destination chains whilst burning originals.

IBC enables the Cosmos "Internet of Blockchains" vision—a network of independent chains maintaining sovereignty whilst achieving interoperability. Application-specific blockchains optimise for particular use cases (identity, payments, DeFi), then connect through IBC enabling users and value to flow seamlessly across the ecosystem.

### Provenance

