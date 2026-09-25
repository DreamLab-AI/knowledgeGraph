An Endorsement Policy is a rule, used in permissioned blockchains such as Hyperledger Fabric, that specifies which organisations' peers must execute and cryptographically sign a transaction proposal before it is considered valid. It encodes the trust and approval requirements for a smart contract, for example requiring signatures from a majority or a named set of consortium members. Endorsement policies are central to multi-party governance of enterprise distributed ledgers.

### Content

- In Hyperledger Fabric, endorsement policies are attached to chaincode and expressed as logical combinations of organisation signatures, such as "AND", "OR", or "N-of-M". They let a consortium encode trust assumptions directly into transaction validation, ensuring no single party can unilaterally commit state changes.

