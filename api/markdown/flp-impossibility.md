- ### Definition
  - The FLP Impossibility result, formally proved by Fischer, Lynch, and Paterson in their 1985 ACM JACM paper, establishes that no deterministic algorithm can guarantee [[Distributed Consensus]] in a fully [[Asynchronous Network]] where at least one process may experience a [[Crash Fault]]. The proof constructs an adversarial scenario exploiting the fact that a slow process is indistinguishable from a failed one, leading to a permanent bivalent configuration in which the protocol cannot safely decide. This impossibility does not apply in practice when systems use [[Partial Synchrony]], [[Timeout]] mechanisms, or [[Randomised Consensus]], all of which escape the theorem's assumptions. Together with the [[CAP Theorem]], FLP forms the bedrock theoretical constraint framework guiding the design of [[Fault Tolerant]] distributed systems.

- ### Overview
  - The result was named after Michael J. Fischer, Nancy Lynch, and Michael S. Paterson and published in the Journal of the ACM in 1985. It won the Dijkstra Prize in 2001 for its profound and lasting influence on distributed computing.
  - **Why it matters**: before FLP, practitioners hoped to build a deterministic, always-terminating consensus protocol resilient to any crash. FLP proved this impossible, forcing the field to articulate precisely which assumption to relax and spawning an entire discipline of principled [[Consensus Algorithm]] design.
  - **What the theorem says precisely**: in an asynchronous message-passing system with at least one process subject to crash failure, there is no deterministic protocol that guarantees both *safety* (no two processes decide differently) and *liveness* (every run eventually terminates with a decision).
  - **Key intuition**: the adversary delays messages just long enough that every protocol step which would resolve the ambiguity can be deferred indefinitely. The system is left in a state called a *bivalent configuration* — one that could still legally go either way — so a legitimate decision is never forced.

- ### Key Mechanisms
  - #### Valence and Bivalence
    - A configuration is *univalent* (0-valent or 1-valent) if all continuations must decide the same value. It is *bivalent* if both outcomes remain reachable.
    - The proof shows every protocol has an initial bivalent configuration (given sufficient uncertainty about process states), then constructs an execution that keeps the system bivalent forever by scheduling messages adversarially.
    - The [[Bivalent Configuration]] argument is the core technical lemma and is used widely beyond FLP in proofs about [[State Machine Replication]] and [[Leader Election]].
  - #### System Model Assumptions
    - **Asynchronous message passing**: messages are guaranteed to be delivered eventually but with no upper time bound — the defining feature of the [[Asynchronous Network]] model.
    - **Crash fault model**: processes may halt silently at any time. Byzantine (malicious) behaviour is not considered; that is the scope of [[Byzantine Fault Tolerance]] results.
    - **Deterministic protocol**: FLP applies to deterministic algorithms only. Introducing randomness at any step — even a single coin flip — escapes the proof, enabling [[Randomised Consensus]] protocols such as [[Ben-Or Algorithm]] and [[Bracha Randomised Consensus]].
    - **Single faulty process**: the impossibility holds even for f=1; tolerating more failures only makes things harder.
  - #### The Three FLP Properties
    - **Agreement**: no two correct processes decide different values.
    - **Validity**: if all processes propose the same value, that value must be decided.
    - **Termination**: all correct processes eventually decide.
    - The proof shows agreement + validity + termination cannot all hold simultaneously under the stated model. Practical systems drop or weaken termination under adversarial timing.

- ### Practical Implications and Workarounds
  - #### Partial Synchrony
    - Dwork, Lynch, and Stockmeyer (1988) introduced the [[Partial Synchrony]] model, which assumes message delays are bounded but the bound is unknown or intermittent. Under this model, deterministic consensus *is* achievable once the system enters a synchronous period.
    - [[Paxos]] and [[Raft Consensus]] are designed for partial synchrony: they guarantee safety always and liveness only when the network is "well-behaved", i.e., they sacrifice liveness rather than safety when timing assumptions break.
  - #### Randomisation
    - [[Randomised Consensus]] protocols use coin flips (local or shared) to break symmetry. They achieve consensus *with probability 1* but have no deterministic termination guarantee in any fixed number of steps, sidestepping FLP.
    - Examples include [[Ben-Or Algorithm]] (1983, predating FLP), [[Bracha Randomised Consensus]], and more recently [[Algorand]] and [[HotStuff BFT]] variants.
  - #### Failure Detectors
    - Chandra and Toueg (1996) introduced [[Failure Detector]] abstractions as a clean way to augment the async model just enough to solve consensus. The weakest failure detector sufficient for consensus is the *◇W* (eventually weak) detector, providing an oracle that eventually and accurately suspects crashed processes.
    - Failure detectors are implemented using [[Heartbeat]] timeouts over real networks and underpin industrial systems like [[Apache ZooKeeper]] and [[etcd]].
  - #### Practical Systems
    - [[Apache ZooKeeper]] uses ZAB (Zookeeper Atomic Broadcast), a partial-synchrony protocol that acknowledges FLP by relying on leader election with timeouts.
    - [[etcd]] and [[CockroachDB]] use [[Raft Consensus]], which similarly trades liveness for safety.
    - [[Apache Kafka]] (with KRaft mode) and [[Google Chubby]] employ related techniques.
    - Blockchain systems handle FLP by using probabilistic finality ([[Nakamoto Consensus]]) or BFT variants ([[Tendermint]], [[PBFT]]) that assume partial synchrony and bounded Byzantine faults.

- ### Applications and Use Cases
  - **Database replication**: understanding FLP drives design choices in [[Distributed Database]] replication — specifically why systems use leader-based replication with timeouts rather than fully asynchronous quorum protocols.
  - **Blockchain and [[Smart Contract Execution]]**: [[Blockchain Consensus]] protocols must navigate FLP. Proof-of-Work sidesteps it via probabilistic finality; BFT-based chains use partial-synchrony models explicitly.
  - **Cloud coordination services**: [[Apache ZooKeeper]], [[etcd]], and [[Consul]] are built on FLP-aware designs where correctness is prioritised over availability during network partitions.
  - **Multi-agent AI systems**: distributed AI agent coordination requires [[Distributed Consensus]] for shared state; FLP bounds are directly applicable to [[Multi-Agent System]] designs under unreliable communication.
  - **IoT and edge computing**: resource-constrained networks with unpredictable latency sit squarely in the FLP-relevant asynchronous regime, informing lightweight consensus protocols like [[Gossip Protocol]] and [[Epidemic Broadcast]].
  - **Financial clearing systems**: high-assurance [[Distributed Ledger]] systems for financial settlements must explicitly account for FLP when specifying commit guarantees.

- ### Relationships
  - partOf:: [[Computability Theory]], [[Distributed Systems Theory]]
  - requires:: [[Asynchronous Network]], [[Crash Fault Model]]
  - enables:: [[Partial Synchrony]], [[Randomised Consensus]], [[Failure Detector]]
  - contrastsWith:: [[CAP Theorem]]
  - relatedTo:: [[Byzantine Fault Tolerance]], [[Paxos]], [[Raft Consensus]], [[Two-Phase Commit]], [[Distributed Ledger]], [[State Machine Replication]], [[Safety-Liveness Tradeoff]], [[Leader Election]]
  - bridgesTo:: [[Blockchain Consensus]], [[Smart Contract Execution]]
  - uses:: [[Formal Proof]], [[Valence Argument]]
  - sameAs:: [[Fischer-Lynch-Paterson Theorem]], [[Consensus Impossibility]]

- ### Theoretical Context
  - FLP sits alongside other fundamental impossibility results in distributed computing:
    - [[CAP Theorem]] (Brewer 2000, formally Gilbert & Lynch 2002) — cannot have consistency, availability, and partition tolerance simultaneously.
    - [[PAXI Impossibility]] — impossibility of perfect partition-tolerant atomic registers.
    - [[Two Generals Problem]] — impossibility of guaranteed agreement over an unreliable link.
  - Together these results form the theoretical foundation of distributed systems, analogous to [[Church-Turing Thesis]] in computability or [[Arrow's Impossibility Theorem]] in social choice theory.
  - The [[Safety-Liveness Tradeoff]] is a generalisation: FLP can be understood as a special case of the impossibility of simultaneously achieving safety and liveness in fully asynchronous settings, a principle extended by Alpern and Schneider's liveness/safety decomposition.

- ### Standards and Context
  - No formal ISO or IETF standard directly encodes FLP, but several protocol specifications reference it:
    - IETF RFC 8555 and related consensus work acknowledges asynchrony assumptions.
    - The [[Raft Consensus]] specification (Ongaro & Ousterhout 2014) explicitly discusses FLP and justifies its partial-synchrony approach.
    - [[PBFT]] (Castro & Liskov 1999) and subsequent BFT protocol papers routinely cite FLP when justifying synchrony assumptions.
  - Academic home: the ACM SIGACT community and the Annual ACM Symposium on Principles of Distributed Computing ([[PODC]]) treats FLP as a canonical reference result in nearly every consensus paper.
  - The original paper: Fischer, M. J., Lynch, N. A., & Paterson, M. S. (1985). "Impossibility of Distributed Consensus with One Faulty Process." *Journal of the ACM*, 32(2), 374–382.

- ### Provenance
  - sources:: Fischer, Lynch & Paterson (JACM 1985); Dwork, Lynch & Stockmeyer (JACM 1988); Chandra & Toueg (JACM 1996); Ongaro & Ousterhout (USENIX ATC 2014)
  - updated:: 2026-06-13