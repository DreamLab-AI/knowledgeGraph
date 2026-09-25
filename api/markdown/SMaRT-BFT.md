SMaRT-BFT is a Byzantine fault tolerant consensus approach built on the SMaRt (State Machine Replication) library, used to order transactions deterministically across a fixed set of validating nodes. It tolerates up to f faulty replicas out of 3f+1 total while guaranteeing safety and liveness under partial synchrony. It is commonly deployed in permissioned ledgers where validator identity is known and high throughput with finality is required.

### Content

- The protocol tolerates up to f Byzantine replicas given 3f+1 total nodes, maintaining safety and liveness under partial synchrony. Because validator identity is established in advance, it avoids the energy cost of open-membership consensus and is frequently offered within [[Blockchain as a Service]] platforms where predictable throughput and immediate finality matter more than permissionless participation.

