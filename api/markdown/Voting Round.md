A voting round is a discrete phase within a Byzantine fault-tolerant consensus protocol during which participating nodes exchange and tally votes on a proposed value or block. Multi-round protocols such as PBFT and Tendermint progress through prepare, pre-commit, and commit rounds to achieve agreement despite faulty or malicious participants. The round abstraction provides liveness via view changes and safety via supermajority thresholds.

### Content

- Rounds typically require a 2f+1 supermajority among 3f+1 nodes to tolerate f Byzantine faults, with a leader or proposer driving each round and view-change subprotocols handling leader failure. The number of message rounds and the quorum certificate design directly govern latency and communication complexity, motivating pipelined variants such as HotStuff.

