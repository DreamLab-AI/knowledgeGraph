- ### OntologyBlock
  id:: bc9007-ontology
  collapsed:: true
	- ontology:: true
	- term-id:: BC-9007
	- domain:: bc
	- owl:class:: bc:DataStructure
	- public-access:: true

## Definition

Data Structure in blockchain systems encompasses the specialized organizational frameworks optimizing cryptographic verification, state management, and distributed synchronization. Merkle trees form the foundational structure enabling efficient verification of large datasets through binary tree construction where leaf nodes contain data hashes and parent nodes hash concatenated child values, culminating in a single Merkle root providing compact dataset commitment. Patricia tries (Prefix trees) employed in Ethereum optimize key-value storage through path compression, while Merkle Patricia tries combine Merkle tree cryptographic guarantees with Patricia trie efficiency for authenticated state management. Bitcoin's UTXO set utilizes hash table indexing for rapid transaction validation, leveraging levelDB key-value storage with bloom filters for probabilistic set membership testing. Sparse Merkle trees enable efficient inclusion and non-inclusion proofs for large state spaces, supporting rollup constructions and lightweight client verification. Advanced structures include Verkle trees reducing witness sizes through vector commitments and polynomial commitment schemes, accumulators providing constant-size set membership proofs (RSA accumulators, Merkle mountain ranges), and authenticated data structures enabling verifiable query responses without full state access. Blockchain-specific optimizations include skiplist-based structures for ordered set management, Merkle-CRDT (Conflict-free Replicated Data Types) for eventual consistency guarantees, and sparse binary Merkle trees with perfect balance properties. In 2026, quantum-resistant authenticated data structures employ hash-based commitments immune to quantum attacks, while succinct data structures leverage polynomial commitments (KZG, FRI) for sub-linear verification complexity enabling zkRollup scalability and recursive proof composition.

## References

- Merkle, R. C. (1988). "A Digital Signature Based on a Conventional Encryption Function." CRYPTO '87.
- Wood, G. (2024). "Ethereum Yellow Paper: Merkle Patricia Tree Specification." https://ethereum.github.io/yellowpaper/paper.pdf
- Bonneau, J. et al. (2015). "Authenticated Data Structures, Generically." POPL '15.
- Buterin, V. (2021). "Verkle Trees." https://vitalik.ca/general/2021/06/18/verkle.html
- Reyzin, L. & Reyzin, N. (2002). "Better than BiBa: Short One-Time Signatures with Fast Signing and Verifying." ACISP 2002.
- Tomescu, A. et al. (2020). "Transparency Logs via Append-Only Authenticated Dictionaries." ACM CCS 2020.
