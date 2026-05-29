- ### Definition
  Opcodes (operation codes) are the atomic instruction primitives of a blockchain scripting language that define permissible computations within transaction scripts, smart contracts, or virtual machine execution environments. Each opcode specifies an operation — such as hash computation, signature verification, stack manipulation, or conditional branching — and the set of valid opcodes for a given blockchain determines its scripting expressiveness and security surface. In Bitcoin, a deliberately restricted opcode set enforces non-Turing-completeness and predictable resource consumption, whereas Ethereum's EVM opcode set supports general computation within gas-metered bounds.

- ### Relationships
  - hasPart:: [[Script]], [[Scripting Language]]
  - partOf:: [[Blockchain Protocol]], [[Virtual Machine]]
  - requires:: [[Consensus Mechanism]], [[Blockchain Transaction]]
  - enables:: [[Smart Contract]], [[Smart Contract Execution]], [[Programmable Money]]
  - relatedTo:: [[Cryptography]], [[Blockchain Network]], [[Consensus Protocol]]

- ### Content
  Opcodes are the lowest-level building blocks of blockchain programmability, functioning as a bytecode instruction set that nodes execute when validating transactions. The Bitcoin scripting language includes opcodes for arithmetic, bitwise operations, stack manipulation (OP_DUP, OP_SWAP), cryptographic functions (OP_HASH160, OP_CHECKSIG), and flow control (OP_IF, OP_ELSE). Certain opcodes (notably OP_CAT and others) were disabled in Bitcoin after 2010 to reduce the attack surface; proposals such as Tapscript and various soft fork drafts seek to restore or extend the opcode set with stricter resource accounting.

  The Ethereum Virtual Machine defines a richer opcode set — over 140 instructions — covering arithmetic, memory access, storage reads/writes (SLOAD, SSTORE), contract invocation (CALL, DELEGATECALL), and environment queries (BLOCKHASH, CHAINID). Each EVM opcode has an associated gas cost that reflects its computational and storage demands, enabling the network to bound execution time and prevent denial-of-service through resource exhaustion. The gas metering model makes EVM opcodes cost-visible in a way that Bitcoin script opcodes are not, supporting general-purpose smart contract development.

  Opcode design is a critical security concern: ambiguous or underspecified opcode semantics create exploitable edge cases, as demonstrated by the 2016 Ethereum DAO re-entrancy vulnerability facilitated partly by DELEGATECALL's inherited storage context. Formal verification tools model opcode semantics as transition functions over an abstract machine state, enabling mechanised proofs of contract correctness.

  Blockchain protocol upgrades frequently involve adding, removing, or repricing opcodes. Soft forks (backward-compatible changes) can introduce new opcodes by repurposing previously disabled ones (NOP opcodes in Bitcoin), while hard forks may extend the opcode namespace without backward compatibility constraints.

- ### Provenance
  - sources:: [[ISO/IEC 23257:2021]], [[IEEE 2418.1]], [[NIST NISTIR]]
  - migration-date:: 2026-04-26T00:00:00Z