Destination chain execution is the phase of a cross-chain operation in which a message or transaction validated from a source chain is finally executed on the target blockchain. After relayers and verification prove the source event, the destination chain mints, releases, or calls a contract to complete the bridged action. Correct execution requires replay protection, message ordering guarantees, and trust in the verification layer.

### Content

- The destination contract checks proofs and a unique message identifier before executing, preventing replay and double-spend. Failure modes include stuck or unexecuted messages, reorg-induced inconsistency, and reliance on the bridge's validator or light-client security assumptions.

