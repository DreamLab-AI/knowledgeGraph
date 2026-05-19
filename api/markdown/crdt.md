- ### Definition
  - Conflict-free Replicated Data Types (CRDTs) are a family of data structures with mathematically proven convergence guarantees that allow multiple distributed replicas to be independently modified without requiring coordination, locks, or a consensus protocol, and which automatically merge to a single consistent state regardless of the order in which updates arrive or the duration of network partitions, realising Strong Eventual Consistency (SEC) through algebraic properties—idempotency, commutativity, and associativity of the merge operation—that guarantee any number of replicas receiving the same set of updates will converge to identical state.
  - Formalised by Marc Shapiro, Nuno Preguiça, Carlos Baquero, and Marek Zawirski in their landmark 2011 ACM Symposium on Cloud Computing (SoCC) paper "Conflict-free Replicated Data Types," the CRDT framework resolves the fundamental tension expressed by the [[CAP Theorem]]—between consistency and availability—by relaxing the consistency model from strong consistency to eventual consistency while providing the formal guarantee that convergence is mathematically certain rather than operationally best-effort, distinguishing CRDTs from ad hoc eventual consistency designs that merely hope for convergence.
  - The two primary CRDT design axes are: (1) **operation-based CRDTs (CmRDTs / Commutative Replicated Data Types)**, which propagate fine-grained operations that must be commutative (op₁ ∘ op₂ = op₂ ∘ op₁) and whose delivery channel is typically required to implement causal ordering via [[Vector Clocks]] or [[Lamport Timestamps]]; and (2) **state-based CRDTs (CRvDTs / Convergent Replicated Data Types)**, which propagate complete state snapshots merged via a join-semilattice merge function that is idempotent (x ⊔ x = x), commutative (x ⊔ y = y ⊔ x), and associative ((x ⊔ y) ⊔ z = x ⊔ (y ⊔ z)), permitting unreliable delivery and re-delivery without state corruption because merging a duplicate is a no-op.
  - A third design form, **Delta-state CRDTs (δ-CRDTs)**, introduced by Almeida, Shoker, and Baquero in 2016, occupies a pragmatic middle ground by transmitting only the "delta"—the incremental portion of state produced by the most recent local mutations, computed as the join of those mutations—which is itself a valid CRDT state that can be merged at any recipient regardless of delivery order or duplication, achieving the convergence guarantees of state-based designs at bandwidth efficiency approaching operation-based designs, and is the synchronisation protocol used by [[Yjs]] (y-protocols sync v2).
  - Core primitive CRDT families include: **G-Counter** (grow-only counter; each replica slot holds its monotonically increasing contribution; query = sum; merge = component-wise maximum; cannot decrement); **PN-Counter** (positive-negative counter composed of two G-Counters, supporting both increment and decrement at eventual consistency with final value = P.query() − N.query()); **G-Set** (grow-only set; add only; merge = union; no removal); **2P-Set** (two-phase set pairing a G-Set of additions A and G-Set of removals R; element is member iff in A but not R; removed elements are permanently excluded); **LWW-Element-Set** (Last-Write-Wins Element Set; each element paired with a timestamp; membership decided by comparing add-timestamp vs remove-timestamp; used in Redis Enterprise Active-Active and Apple Notes); **OR-Set** (Observed-Remove Set; each add generates a unique tag so concurrent add(e) and remove(e) produce "add wins" semantics because the new tag from the add was not seen by the remover; used in [[Riak]] riak_dt_orswot).
  - Sequence CRDTs for [[Real-time Collaborative Editing]] present the hardest design challenge because the intuitive notion of "position in a sequence" is not stable under concurrent insertion: two replicas inserting at the same logical position must agree on the relative order of their insertions without communication. The principal sequence CRDTs are: **RGA** (Replicated Growable Array by Roh et al. 2011; unique S4Vector per character; concurrent insertions resolved by identifier comparison; deletions as tombstones; used in Automerge); **WOOT** (Without Operational Transformation by Oster et al. 2006 CSCW; predecessor/successor pointers per character; O(n²) integration; historically important); **Logoot** (Weiss et al. 2009 ICDCS; position identifiers from a dense totally-ordered space between flanking elements; avoids tombstones); **LSEQ** (Nedelec et al. 2013; adaptive allocation strategy for logarithmic identifier growth); **YATA** (Yet Another Transformation Approach; Kevin Jahns 2019; doubly-linked list with O(1) amortised operations; correctness proven; underlies [[Yjs]]); **Fugue** (Weidner, Litt, Kleppmann 2022; parent-pointer tree structure; eliminates interleaving anomalies; cleanest semantics of current designs); **Peritext** (Kleppmann et al. CSCW 2022; extends sequence CRDTs to rich-text formatting spans—bold, italic, hyperlinks—with intent-preserving merge semantics; implemented in Automerge 2.x).
  - The defining mathematical property for state-based CRDTs is that the state space forms a **join-semilattice** (S, ⊔) with a partial order ≤ such that every pair of states has a least upper bound (LUB). Mutation operations must be **monotone**—they only move the state upward in the lattice, never down—ensuring that the cumulative effect of any set of operations is uniquely determined by the set itself, independent of the order in which the operations are applied locally or received over the network. The formal SEC guarantee (Shapiro et al. 2011) requires: (1) **eventual delivery**—an update delivered at any correct replica is eventually delivered at all correct replicas; (2) **convergence**—correct replicas that have delivered the same set of updates have equivalent state; (3) **termination**—all method executions terminate in finite time.
  - In contrast with [[Operational Transformation]] (OT), which requires a central server to linearise concurrent edits and has O(N²) complexity for N concurrent users due to the need to transform every operation against every concurrent operation in the total order, CRDTs require no central coordination, scale naturally to peer-to-peer topologies (any replica can merge with any other replica bilaterally), tolerate arbitrary network partitions (replicas accumulate mutations offline and merge when connectivity is restored), and provide stronger safety guarantees (convergence is proven once rather than relying on the correctness of the transformation function for every pair of operation types).
  - Key engineering trade-offs of CRDTs in production are: (1) **metadata overhead**—OR-Set elements and RGA characters carry unique identifiers and tombstones (logically deleted elements retained in the data structure to resolve future concurrent insertions at adjacent positions) that accumulate without bound in the absence of garbage collection, requiring causal stability protocols (detecting that all replicas have received all operations up to a causal cut, after which tombstones at that cut can be safely reclaimed) scaled to potentially millions of replicas; (2) **semantic mismatch**—CRDTs converge to a deterministic state, but that state may not match user intent (concurrent deletion of a list item and editing of text within that item produces a tombstoned-but-visible state in some CRDT designs; the semantics of "last write wins" may surprise users expecting "most recent intent wins"); (3) **undo support**—standard CRDTs have no built-in undo; inverse operations require commutativity of the inverse as well (Automerge 2.1 added undo/redo via explicit operation inversion and a supplementary undo stack); (4) **access control**—base CRDTs assume all replicas are trusted peers; integrating capability-based access control (e.g., UCAN—User Controlled Authorization Networks) without breaking CRDT merge semantics is an active research problem with no production-ready solution as of 2026.
  - Production deployments confirming CRDT viability at scale include: [[Riak]] 2.0 (Basho 2013; first major commercial CRDT database; OR-Set, G-Counter, PN-Counter, LWW-Register, and nested Map exposed as first-class API types); Redis Enterprise Active-Active (2018-2026; CRDT semantics for LWW-Register, counter, and set types across geographically distributed clusters; deployed in Fortune 500 financial services, e-commerce, gaming, processing billions of operations/day); AntidoteDB (EU SyncFree FP7 research CRDT database; transactional causal+ consistency; Bounded Counter CRDT); [[Automerge]] (JavaScript + Rust; Automerge 2.0 Rust rewrite 2022; used in Beeper, Actual Budget, Teable); [[Yjs]] (JavaScript; YATA sequence CRDT; 10M+ weekly npm downloads 2025; powers TipTap, BlockSuite/Affine, CodeMirror 6, Lexical/Meta); Loro (Rust + WASM; movable tree CRDT; 2023-2026); Apple Notes offline sync; Google Docs offline mode; Figma multiplayer canvas (proprietary CRDT-inspired LWW design); Linear project management (Yjs-based); Microsoft Loop (CRDT principles, 2025); Atlassian Confluence Live Pages (CRDT-based multi-user editing, 2024).

- ### Semantic Classification
  - owl-class:: distributed-collaboration:CRDT
  - owl-role:: SynchronisationMechanism
  - owl-inferred:: dc:EventuallyConsistentDataStructure, dc:DistributedDataStructure, dc:MergeableDataStructure, dc:CoordinationFreeDataStructure
  - belongs-to-domain:: [[DistributedCollaborationDomain]], [[DistributedSystemsDomain]], [[DatabasesDomain]]
  - implemented-in-layer:: [[DataLayer]], [[SynchronisationLayer]], [[ApplicationLayer]]

- ### Relationships
  - is-subclass-of:: [[Distributed Data Synchronisation]], [[Eventually Consistent Data Structure]], [[Replicated Data Structure]], [[Mergeable Data Type]], [[Commutative Data Structure]], [[Monotone Data Structure]]
  - has-part:: [[G-Counter]], [[G-Set]], [[OR-Set]], [[LWW-Element-Set]], [[Replicated Growable Array]], [[Vector Clocks]], [[Causal Ordering]], [[Semilattice Merge Function]], [[Tombstone Record]], [[Unique Identifier]], [[Delta State]], [[Version Vector]], [[Causal History Graph]]
  - requires:: [[Eventual Consistency]], [[Causal Delivery]], [[Unique Replica Identifiers]], [[Semilattice Ordering]], [[Idempotent Merge]], [[Monotone Operations]], [[Causal Broadcast Protocol]]
  - enables:: [[Offline-first Collaboration]], [[Real-time Collaborative Editing]], [[Peer-to-peer Synchronisation]], [[Multi-datacenter Replication]], [[Local-first Software]], [[Partition-tolerant Databases]], [[Coordination-free Computing]], [[Optimistic Replication]]
  - implements:: [[Commutativity]], [[Idempotency]], [[Associativity]], [[State Lattice Merge]], [[Delta Synchronisation]], [[Join Semilattice]], [[Causal Broadcast]], [[Strong Eventual Consistency]]
  - depends-on:: [[Distributed Systems]], [[CAP Theorem]], [[Eventual Consistency]], [[Vector Clocks]], [[Lamport Timestamps]], [[Causal Consistency]], [[Order Theory]], [[Lattice Theory]]
  - supports:: [[Real-time Collaborative Editing]], [[Distributed Databases]], [[Mobile Sync]], [[Collaborative IDEs]], [[Multiplayer Collaboration Tools]], [[Edge Computing]], [[IoT Synchronisation]], [[Offline-first Architecture]]
  - uses:: [[Join Semilattice]], [[Causal History]], [[Unique Identifiers per Replica]], [[Version Vectors]], [[Logical Clocks]], [[Hybrid Logical Clocks]], [[Merkle DAG]]
  - contrasts-with:: [[Operational Transformation]], [[Pessimistic Locking]], [[Two-phase Commit]], [[Paxos Consensus]], [[Raft Consensus]], [[Optimistic Locking]], [[Strong Consistency]]
  - related-to:: [[Distributed Ledger]], [[Event Sourcing]], [[CQRS]], [[Merkle DAG]], [[Local-first Software]], [[Blockchain Network]], [[Byzantine Fault Tolerance]], [[Nostr Protocol]]
  - standardized-by:: [[Shapiro et al. 2011 SoCC]], [[SyncFree EU Project FP7-ICT-2011-7 609551]], [[INRIA Technical Report RR-7506]]

- ### Content

  ## Compositional Relationships (Components)
	    SubClassOf(dc:CRDT
	      ObjectSomeValuesFrom(dc:hasPart dc:SemilatticeMergeFunction))
	    SubClassOf(dc:CRDT
	      ObjectSomeValuesFrom(dc:hasPart dc:ReplicaIdentifier))
	    SubClassOf(dc:CRDT
	      ObjectSomeValuesFrom(dc:hasPart dc:CausalHistory))
	    SubClassOf(dc:CRDT
	      ObjectSomeValuesFrom(dc:hasPart dc:TombstoneRecord))
	    SubClassOf(dc:CRDT
	      ObjectSomeValuesFrom(dc:hasPart dc:VersionVector))
	    SubClassOf(dc:CRDT
	      ObjectSomeValuesFrom(dc:hasPart dc:MergeFunction))
	    SubClassOf(dc:CRDT
	      ObjectSomeValuesFrom(dc:hasPart dc:StatePayload))

	    ## Dependency Relationships
	    SubClassOf(dc:CRDT
	      ObjectSomeValuesFrom(dc:requires dc:EventualConsistency))
	    SubClassOf(dc:CRDT
	      ObjectSomeValuesFrom(dc:requires dc:UniqueReplicaIdentifiers))
	    SubClassOf(dc:CRDT
	      ObjectSomeValuesFrom(dc:requires dc:IdempotentMerge))
	    SubClassOf(dc:CRDT
	      ObjectSomeValuesFrom(dc:requires dc:CausalDelivery))
	    SubClassOf(dc:CRDT
	      ObjectSomeValuesFrom(dc:requires dc:MonotoneOperations))
	    SubClassOf(dc:CRDT
	      ObjectSomeValuesFrom(dc:dependsOn dc:DistributedSystems))
	    SubClassOf(dc:CRDT
	      ObjectSomeValuesFrom(dc:dependsOn dc:CAPTheorem))
	    SubClassOf(dc:CRDT
	      ObjectSomeValuesFrom(dc:dependsOn dc:VectorClocks))
	    SubClassOf(dc:CRDT
	      ObjectSomeValuesFrom(dc:dependsOn dc:LamportTimestamps))
	    SubClassOf(dc:CRDT
	      ObjectSomeValuesFrom(dc:dependsOn dc:CausalConsistency))

	    ## Capability Relationships
	    SubClassOf(dc:CRDT
	      ObjectSomeValuesFrom(dc:enables dc:OfflineFirstCollaboration))
	    SubClassOf(dc:CRDT
	      ObjectSomeValuesFrom(dc:enables dc:RealtimeCollaborativeEditing))
	    SubClassOf(dc:CRDT
	      ObjectSomeValuesFrom(dc:enables dc:PeerToPeerSynchronisation))
	    SubClassOf(dc:CRDT
	      ObjectSomeValuesFrom(dc:enables dc:MultiDatacentreReplication))
	    SubClassOf(dc:CRDT
	      ObjectSomeValuesFrom(dc:enables dc:LocalFirstSoftware))
	    SubClassOf(dc:CRDT
	      ObjectSomeValuesFrom(dc:enables dc:PartitionTolerantDatabases))
	    SubClassOf(dc:CRDT
	      ObjectSomeValuesFrom(dc:supports dc:CollaborativeTextEditing))
	    SubClassOf(dc:CRDT
	      ObjectSomeValuesFrom(dc:supports dc:DistributedDatabases))
	    SubClassOf(dc:CRDT
	      ObjectSomeValuesFrom(dc:supports dc:MobileSync))
	    SubClassOf(dc:CRDT
	      ObjectSomeValuesFrom(dc:supports dc:EdgeIoTSynchronisation))

	    ## Implementation Relationships
	    SubClassOf(dc:CRDT
	      ObjectSomeValuesFrom(dc:implements dc:JoinSemilattice))
	    SubClassOf(dc:CRDT
	      ObjectSomeValuesFrom(dc:implements dc:Commutativity))
	    SubClassOf(dc:CRDT
	      ObjectSomeValuesFrom(dc:implements dc:Idempotency))
	    SubClassOf(dc:CRDT
	      ObjectSomeValuesFrom(dc:implements dc:Associativity))
	    SubClassOf(dc:CRDT
	      ObjectSomeValuesFrom(dc:implements dc:DeltaSynchronisation))
	    SubClassOf(dc:CRDT
	      ObjectSomeValuesFrom(dc:implements dc:StrongEventualConsistency))
	    SubClassOf(dc:CRDT
	      ObjectSomeValuesFrom(dc:uses dc:VectorClocks))
	    SubClassOf(dc:CRDT
	      ObjectSomeValuesFrom(dc:uses dc:LogicalClocks))
	    SubClassOf(dc:CRDT
	      ObjectSomeValuesFrom(dc:uses dc:UniqueIdentifiers))
	    SubClassOf(dc:CRDT
	      ObjectSomeValuesFrom(dc:uses dc:CausalHistory))

	    ## Reduction Relationships
	    SubClassOf(dc:CRDT
	      ObjectSomeValuesFrom(dc:reduces dc:CoordinationOverhead))
	    SubClassOf(dc:CRDT
	      ObjectSomeValuesFrom(dc:reduces dc:ConflictResolutionComplexity))
	    SubClassOf(dc:CRDT
	      ObjectSomeValuesFrom(dc:reduces dc:NetworkLatency))
	    SubClassOf(dc:CRDT
	      ObjectSomeValuesFrom(dc:reduces dc:MergeConflicts))
	    SubClassOf(dc:CRDT
	      ObjectSomeValuesFrom(dc:reduces dc:CentralServerDependency))

	    ## Contrast and Disjointness
	    DisjointClasses(dc:StateCRDT dc:OperationCRDT)
	    SubClassOf(dc:CRDT
	      ObjectComplementOf(dc:OperationalTransformationDocument))
	    SubClassOf(dc:CRDT
	      ObjectSomeValuesFrom(dc:contrastsWith dc:PessimisticLocking))
	    SubClassOf(dc:CRDT
	      ObjectSomeValuesFrom(dc:contrastsWith dc:TwoPhaseCommit))

	    ## Annotations
	    AnnotationAssertion(rdfs:label dc:CRDT "Conflict-free Replicated Data Type"@en)
	    AnnotationAssertion(dcterms:identifier dc:CRDT "IF-0041"^^xsd:string)
	    AnnotationAssertion(dcterms:subject dc:CRDT "Distributed Systems, Collaborative Editing, Eventual Consistency, Local-first Software"@en)
	    DataPropertyAssertion(dc:authorityScore dc:CRDT "0.87"^^xsd:decimal)
	    DataPropertyAssertion(dc:legacyTermId dc:CRDT "IF-0041"^^xsd:string)

  - ## About CRDTs
  - **Conflict-free Replicated Data Types** represent the principled mathematical answer to one of distributed computing's oldest challenges: how can multiple nodes independently modify shared state and eventually agree without a central authority, without locks, and without a consensus protocol?
  - The conventional solutions—pessimistic locking (prevent concurrent writes entirely), two-phase commit (atomically coordinate all participants before any write commits), or [[Operational Transformation]] (route all edits through a linearising server that transforms each incoming operation against all concurrent operations in a total order)—all require coordination that introduces latency proportional to the round-trip time of the coordination protocol, availability limits (if the coordinator is unavailable, no writes proceed), and central points of failure (the coordinator's log is the single source of truth).
  - CRDTs reframe the problem entirely. Instead of preventing conflicts at write time or resolving them at merge time via programmatic logic, CRDTs design data structures where concurrent modifications **cannot conflict by algebraic construction**. The merge operation is defined to always yield a unique, deterministic result that is independent of the order in which replicas exchange state or apply operations.
  - The system does not need to detect conflicts, because the algebra of the CRDT guarantees that no two valid states have an unresolvable disagreement—the merge always produces the least upper bound of the two states in the lattice ordering.
  - The mathematical substrate is **order theory** and specifically the theory of **join-semilattices**. A join-semilattice (S, ⊔) is a partially ordered set in which every pair of elements a, b has a least upper bound a ⊔ b (the join), uniquely determined.
  - For a state-based CRDT, the state space is this lattice, and the mutation operations are **monotone**—they only move states upward in the ordering, never downward. State can grow (a set can gain elements, a counter can increment) but the lattice ordering prevents state from shrinking in a way that would cause two replicas to disagree.
  - Since the LUB is unique and the join operation is commutative (a ⊔ b = b ⊔ a), associative ((a ⊔ b) ⊔ c = a ⊔ (b ⊔ c)), and idempotent (a ⊔ a = a), any sequence of merge operations by any replicas will always converge to the same unique state once each replica has received every update.
  - The formal **Strong Eventual Consistency** (SEC) guarantee proved by Shapiro et al. 2011 requires three properties:
    - **Eventual delivery**: any update delivered at a correct replica is eventually delivered at every correct replica (a liveness property depending on the network eventually delivering messages)
    - **Convergence**: any two correct replicas that have delivered the same set of updates have equivalent state (a safety property guaranteed by the CRDT algebra, independent of the network)
    - **Termination**: all method executions complete in finite time (no deadlock, no infinite loops in merge)
  - SEC is strictly stronger than plain eventual consistency (which only promises convergence under some unspecified future condition) but strictly weaker than linearisability or sequential consistency (which guarantee that all operations appear to execute atomically in some total order).
  - The distinction between the two primary CRDT families—**CmRDT (operation-based)** and **CRvDT (state-based)**—has direct engineering implications for network and storage design:
    - **CmRDTs** send only the operation (e.g., "insert character 'a' at position identifier p47"), saving bandwidth at the cost of requiring a reliable **causal broadcast** delivery channel that ensures exactly-once delivery and causal ordering
    - **CRvDTs** send the entire state snapshot (e.g., the complete OR-Set), accepting bandwidth proportional to state size in exchange for complete tolerance of message duplication, reordering, and loss
    - **Delta-CRDTs** resolve the bandwidth vs. delivery-guarantee trade-off by sending only the delta (the state change induced by the most recent local operations), which is a valid CRvDT state that can be merged idempotently while being much smaller than the full state

  - ### Core Mathematical Framework
  - The join-semilattice foundation underpinning state-based CRDTs connects to classical results in universal algebra (Birkhoff's theorem, lattice completion theorems) and domain theory (Scott information systems, continuous lattices).
  - For practitioners the key algebraic identities are:
    - **Idempotency**: s ⊔ s = s — merging a state with itself has no effect; safe to re-deliver state snapshots
    - **Commutativity**: s₁ ⊔ s₂ = s₂ ⊔ s₁ — merge order between any two replicas does not matter
    - **Associativity**: (s₁ ⊔ s₂) ⊔ s₃ = s₁ ⊔ (s₂ ⊔ s₃) — grouping of merges in any order does not matter; transitivity of convergence
  - For operation-based CRDTs the algebraic requirement is **commutativity of operations**: applying op₁ then op₂ must produce the same state as applying op₂ then op₁.
  - For operations that are naturally commutative (e.g., adding different elements to a set) commutativity is automatic. For operations that are not naturally commutative (e.g., inserting two characters at the same position in a text), the CRDT design must supply a **tie-breaking rule** (typically derived from unique replica identifiers) that imposes a total order on concurrent operations at that position, transforming a non-commutative situation into a commutative one by construction.
  - **Vector Clocks** (Fidge 1988, Mattern 1989) are the standard mechanism for tracking causal dependencies in operation-based CRDTs. A vector clock VC for n replicas is an array of n integers where VC[i] counts the number of events seen from replica i.
  - An operation op issued at replica j with vector clock VC_j causally depends on all operations op' with VC_{op'} ≤ VC_j component-wise. Causal delivery ensures op' is applied before op at every receiving replica.
  - **Lamport timestamps** (Lamport 1978) provide a simpler total-order approximation of causality (a single integer per message) but cannot distinguish concurrent events—they are used for tie-breaking in LWW-Element-Set and similar designs where concurrent events are acceptable.
  - **Hybrid Logical Clocks** (HLC, Kulkarni et al. 2014) combine physical time and logical time: HLC.l is a Lamport-like logical clock, HLC.c is a counter that ticks when physical time has not advanced. HLC values are bounded above by physical time + ε, providing both causality tracking and human-interpretable timestamps. Redis Enterprise and CockroachDB use HLC variants for distributed timestamp assignment.
  - The **disagreement coefficient** measures the expected number of updates that must be delivered before all replicas converge after a partition heals. For well-designed CRDTs with monotone operations, this equals the number of operations issued during the partition—no hidden convergence cost beyond delivering those operations—in contrast with OT-based systems where transformation complexity causes O(N²) additional work.

  - ### CRDT Primitive Type Catalogue
  - **G-Counter (Grow-only Counter)**
    - State = map from replica ID to non-negative integer (vector of counters)
    - Local increment on replica r: state[r] += 1
    - Query: sum all state[r] across replicas
    - Merge: component-wise maximum (merge(s₁, s₂)[r] = max(s₁[r], s₂[r]))
    - Convergence proof: component-wise max is commutative, associative, idempotent
    - Cannot support decrement
    - Use cases: distributed page view counters, CDN edge hit counting, real-time leaderboards
  - **PN-Counter (Positive-Negative Counter)**
    - Pair of G-Counters (P for increments, N for decrements)
    - Value = P.query() − N.query()
    - Merge = merge P vectors and N vectors independently
    - Supports both increment and decrement without coordination
    - Use cases: distributed inventory counters, social media like/dislike counts, distributed ticketing seat counts
  - **G-Set (Grow-only Set)**
    - State = set of elements; add(e) only operation
    - Merge = union of the two sets
    - Cannot remove elements once added; convergence: set union is commutative, associative, idempotent
    - Use cases: building block for OR-Set tombstone tracking, distributed tag/label sets, append-only audit logs
  - **2P-Set (Two-Phase Set)**
    - Pair of G-Sets (A for additions, R for removals)
    - Membership: e ∈ A ∧ e ∉ R; constraint: can only add e to R if e ∈ A
    - Once removed, cannot re-add; element re-insertion requires a different unique value
    - Merge: union(A₁, A₂) and union(R₁, R₂)
    - Use cases: distributed deletion-only membership sets, access revocation lists where re-grant requires a new token
  - **LWW-Element-Set (Last-Write-Wins Element Set)**
    - Each element e mapped to a pair (add-timestamp, remove-timestamp)
    - Membership: add-timestamp > remove-timestamp; concurrent add and remove: later timestamp wins
    - Merge: for each element, take max timestamps from each replica
    - Requires timestamp uniqueness per element per replica (Lamport timestamps with replica ID provide this)
    - Use cases: Redis Enterprise Active-Active per-key CRDT semantics, Apple Notes sync, user presence sets
  - **OR-Set (Observed-Remove Set)**
    - Each add generates a unique tag τ (UUID or Lamport-clock + replica-ID pair)
    - State = set of (element, tag) pairs; Add(e): generate fresh τ, add (e, τ) to set
    - Remove(e): remove all pairs (e, *) currently in the local state (forming a tombstone set)
    - Concurrent add(e) at replica A and remove(e) at replica B: A generates new tag τ₂ while B tombstones only observed tags (τ₁); after merge: (e, τ₂) survives—"add wins" semantics
    - Used in [[Riak]] (riak_dt_orswot), Automerge list elements, collaborative tag sets
  - **MV-Register (Multi-Value Register)**
    - Stores a single value; concurrent writes produce multiple values (no tie-breaking at CRDT level)
    - Query returns all concurrent values; application layer must resolve
    - Merge = union of all concurrent versions tracked by vector clock
    - More principled than LWW-Register when concurrent-write semantics matter
    - Analogous to DynamoDB sibling values
  - **Bounded Counter (Observed-Reset Counter)**
    - Extension of PN-Counter supporting a "reset to zero" operation with causal token coordination
    - Prevents negative values without requiring cross-datacenter coordination
    - Each datacenter holds a reservation of maximum decrement capacity, refilling from central pool asynchronously
    - Implemented in AntidoteDB for distributed rate limiting and reservation systems

  - ### Sequence CRDTs for Collaborative Text Editing
  - The sequence CRDT problem—maintaining a shared ordered sequence of characters (or other elements) under concurrent insertions and deletions from multiple replicas without central coordination—is the hardest CRDT design problem and has produced the most academic work.
  - The fundamental difficulty is that the "position" of an insertion is meaningful at the time of the operation but may become ambiguous when the same position is occupied by concurrent insertions from multiple replicas.
  - **The interleaving problem**: If replica A inserts "AB" and replica B concurrently inserts "XY" at the same logical position, the possible merged results are ABXY, XABY, XYAB, AXBY, etc. Only ABXY and XYAB are "non-interleaved" (each user's characters appear as a contiguous block). The others interleave characters from both users, which is semantically wrong for collaborative word processing.
  - The Fugue CRDT (Weidner, Litt, Kleppmann 2022) was specifically designed to eliminate interleaving by construction.
  - **RGA (Replicated Growable Array)**:
    - Each character assigned a unique identifier S4V(sid, sum, ssid, seq) — session identifier, sum of insertion events at that replica, sequence number
    - Insertions causally ordered: identifier of inserted character is greater than identifier of character it is inserted after
    - Concurrent insertions at same position: higher identifier placed later, ensuring total order
    - Deletions: tombstone the character (logically deleted but retained in linked list for future concurrent insertions at adjacent positions)
    - Complexity: O(n) worst-case insertion, O(1) amortised with linked-list representation
    - Used in [[Automerge]] (adapted as AMG-RGA with binary columnar encoding)
  - **YATA (Yet Another Transformation Approach)**:
    - The sequence CRDT underlying [[Yjs]], formally proved correct by Kevin Jahns (2019)
    - Maintains a doubly-linked list of items where each item has (origin, right-origin, id, deleted) fields
    - Origin = character to the left of insertion point; right-origin = character to the right
    - Conflict resolution: concurrent insertions with same origin ordered by unique IDs (client ID + local clock)
    - Achieves O(1) amortised insertion in the common case (no concurrent conflict)
    - Powers over 1000 production collaborative applications through the Yjs ecosystem
  - **Fugue**:
    - Weidner, Litt, and Kleppmann (2022). arXiv:2305.00583
    - Parent-pointer tree structure: each character has a parent (character after which it was inserted) and a side (left/right child)
    - Tree structure guarantees non-interleaving by construction: concurrent insertions at same position form subtrees whose characters are always grouped together
    - Provides the cleanest semantic specification of any current sequence CRDT
    - Planned for Automerge 3.x as replacement for AMG-RGA
  - **Peritext (Rich-Text CRDT)**:
    - Kleppmann, Litt, Sahar, Gentle (CSCW 2022)
    - Addresses collaborative rich-text editing where formatting spans (bold, italic, hyperlink href) apply to character ranges rather than individual characters
    - Prior approaches treated formatting as character-level attributes, producing incorrect results with overlapping concurrent formatting of different intents
    - Peritext models formatting as annotations with (start-anchor, end-anchor, type, value) where anchors are character identifiers from the underlying sequence CRDT
    - Concurrent formatting operations merged with intent-preserving semantics: if A bolds a range and B removes bold from a subrange concurrently, result preserves A's bold outside B's sub-range
    - Implemented in Automerge 2.x; first formally specified solution to the rich-text collaborative editing problem

  - ### Production Implementations and Ecosystem
  - **Automerge** (JavaScript + Rust):
    - Document model: JSON-like trees with CRDTs on every value — maps use LWW-per-key merge, lists use RGA-derived sequence CRDTs, text uses character-level sequence CRDTs
    - Automerge 1.x (2017-2021): pure JavaScript, 50-200ms for large-document operations, human-readable JSON encoding
    - Automerge 2.0 (October 2022): complete Rust rewrite (automerge-rs), compiled to WASM, 10-50x performance improvement, compact binary columnar encoding, document sizes 2-5x smaller
    - Automerge 2.1 (2023): undo/redo via explicit operation inversion and supplementary undo stack
    - Automerge-repo (2023): high-level browser/Node/React Native API with storage backends (IndexedDB, filesystem) and networking adapters (WebSocket, WebRTC, BroadcastChannel)
    - ~500K weekly npm downloads (2025); used in Beeper, Actual Budget, Teable, and dozens of local-first applications
    - Reference implementation for the [[Local-first Software]] movement
  - **Yjs** (JavaScript):
    - Uses YATA sequence CRDT; doubly-linked list with tombstones and lookup cache
    - O(1) amortised operations for common sequential editing; typical single character insertion = 50-80 bytes
    - Yjs 13 (2019-2021): awareness protocol (cursor positions and user presence, ephemeral/transient), sub-documents, optimised snapshot encoding
    - Production providers: y-websocket, y-webrtc (peer-to-peer, no server needed), y-indexeddb (browser persistence), Hocuspocus (Node.js collaboration server with authentication, persistence, webhooks), TipTap Cloud (managed SaaS)
    - Applications: TipTap editor, BlockSuite/Affine, CodeMirror 6, Lexical (Meta), ProseMirror, Linear
    - ~10M+ weekly npm downloads (2024-2025); used in 1000+ GitHub repositories
  - **Loro** (Rust + WASM):
    - LoroHQ team (affiliated with Affine project); open-sourced late 2023
    - Movable Tree CRDT: correctly handles concurrent move operations in tree structures (e.g., avoiding cycles when A moves X under Y and B concurrently moves Y under X)
    - Time Travel: internal operation log supports replaying history to any past state
    - Compact binary columnar encoding similar to Automerge 2.0
    - 3000+ GitHub stars by mid-2024; used in Affine collaborative note-taking
    - Targets hierarchical document structures (outlines, file trees, knowledge graphs) less elegantly handled by Yjs and Automerge
  - **Riak** (Erlang/Elixir):
    - Basho's distributed database; first commercial CRDT database (Riak 2.0, 2013)
    - First-class CRDT types: riak_dt_gcounter, riak_dt_pncounter, riak_dt_gset, riak_dt_orswot, riak_dt_lwwreg, riak_dt_map (nested CRDT map)
    - Uses Dotted Version Vector Sets (dvvsets) for causal tracking
    - Basho acquired post-2019; Riak KV now maintained by open-source community
    - SyncFree research results on Riak remain foundational to production CRDT design
  - **Redis Enterprise Active-Active** (geo-distributed CRDT replication):
    - Introduced 2018; CRDT semantics for string, counter, set, sorted set, and list data types across geo-distributed clusters
    - Each cluster is Active-Active: writes accepted locally, replicated asynchronously with CRDT merge on conflicts
    - LWW semantics for string keys (Hybrid Logical Clock), G-Counter for INCR, OR-Set for SADD/SREM
    - Deployed at Fortune 500 scale: financial trading (sub-millisecond local writes across London/New York/Singapore), gaming (leaderboards and player state across regions), e-commerce (cart and inventory)
    - Billions of operations per day in largest deployments
  - **AntidoteDB** (research CRDT database):
    - INRIA + NOVA LINCS; EU SyncFree FP7 609551 (2013-2016)
    - Causal+ consistency across datacenters (stronger than eventual consistency, weaker than linearisability)
    - Rich CRDT types including Bounded Counter (reservations to prevent over-decrement without global coordination)
    - CQL (CRDT Query Language) for SQL-like operations over CRDT state
    - ACID transactions within a datacenter with causal+ consistency across datacenters
    - Primarily a research system; influenced design of commercial CRDT databases
  - **ElectricSQL** (TypeScript CRDT sync framework):
    - Backed by LocalFirst Fund (2022-2026); CRDT-powered sync layer for Postgres
    - Applications use local SQLite as primary database; changes sync to central Postgres via CRDT-resolved conflict-free replication
    - Shape-based subscription model: clients subscribe to subsets of Postgres tables and receive CRDT-resolved updates
    - Electric 1.0 public release (2024): replaced experimental earlier architecture; significant developer adoption in the local-first community
    - Positioned as Firebase/Supabase alternative with stronger offline-first semantics

  - ### Use Cases and Applications
  - **Collaborative Text and Document Editing**:
    - Canonical CRDT use case: shared documents, code editors, and whiteboards
    - [[Yjs]] powers: TipTap (Substack, Nextcloud, Open edX), BlockSuite/Affine, CodeMirror 6 (Jupyter, Replit, Observable), Lexical (Meta, Facebook Notes, Messenger drafts), ProseMirror (Atlassian Confluence, The New York Times)
    - [[Automerge]] powers: Beeper (multi-protocol messaging), Actual Budget (50K+ active users 2024), Teable (Airtable alternative)
    - Google Docs offline mode and Apple Notes use CRDT-inspired designs internally
    - Atlassian Confluence Live Pages (2024): Yjs-based CRDT at scale — millions of Confluence users — largest known single-tenant Yjs deployment
  - **Multi-datacenter Database Replication**:
    - G-Counters, PN-Counters, LWW-Registers, and OR-Sets solve replication conflicts in globally distributed databases
    - Redis Enterprise Active-Active (2018-2026): sub-millisecond local writes with eventual convergence across up to 5 geographic regions
    - Financial services: LWW-Register semantics for latest quote (last-quoted-price wins), G-Counter semantics for trade volume counts
    - Gaming: G-Counter for leaderboard scores, OR-Set for player inventory items
  - **Local-first and Offline-capable Applications**:
    - "Local-first Software" manifesto (Kleppmann et al. 2019) proposes CRDTs as the synchronisation backbone for software working indefinitely offline, storing data on user devices
    - Model resists vendor lock-in (data on device, not exclusively on cloud server) and provides better performance (local writes, no round-trip latency)
    - Applications: Actual Budget, Muse, Crabfit, Teable, Beeper, Kinopio, Braindump
    - Infrastructure: PowerSync (2023) and ElectricSQL provide CRDT-backed sync for building local-first apps on top of existing Postgres databases
  - **Distributed IoT and Edge Synchronisation**:
    - Disconnected edge devices (POS terminals, field maintenance tablets, agricultural sensors) accumulate mutations as local CRDT state and merge when connectivity is restored
    - Bosch Research (2022-2024): CRDT-based configuration management for distributed industrial control systems
    - AMRC Sheffield and high-value manufacturing: CRDT-based CNC parameter synchronisation and collaborative CAD/CAM editing across distributed shop floors
    - Healthcare: NHS frontline workers editing care records offline on mobile devices, syncing when network is available
  - **CRDT + Blockchain and Decentralised Applications**:
    - [[Blockchain Network]] uses consensus (BFT protocols) rather than CRDTs, but the two paradigms have intersecting concerns
    - [[Merkle DAG]] structures (IPFS, Git) share causal-history-tracking concepts with op-based CRDTs
    - OrbitDB (IPFS + CRDT key-value store, event log, feed): combines content-addressed storage with CRDT semantics for decentralised applications
    - Ceramic Network: DID-based CRDT document model for decentralised identity and data
    - The CRDT event-sourcing model (append-only causal log of operations) is structurally similar to a [[Distributed Ledger]] without Byzantine fault tolerance guarantees—suitable for trusted-peer collaboration but not adversarial settings
  - **Code Collaboration and Version Control**:
    - Character-level CRDTs (Yjs, Automerge) enable real-time collaborative code editing in web-based IDEs (Replit, StackBlitz, CodeSandbox, GitHub Codespaces)
    - Pijul (patch-based VCS): uses a categorical model equivalent to a CRDT for patches, enabling automatic merges for non-conflicting changes
    - Jujutsu (Google experimental VCS): separates working copy from commit history, enabling more automatic merges
    - Zed editor (2023-2026): uses a custom CRDT-adjacent collaborative editing model with server-mediated awareness protocol

  - ### Academic Context
  - CRDT theory emerged from the line of research on **optimistic replication** (Ladin et al. 1992, "Providing High Availability Using Lazy Replication," ACM TOCS) and commutative operations in distributed systems (Weihl 1988; Ellis & Gibbs 1989 OT).
  - Shapiro and colleagues' 2007 INRIA technical report first used the term "CRDT" for a structured family of eventually consistent data types; the 2011 SoCC paper provided the formal SEC definition, the full type catalogue, and the convergence proof framework that became the standard reference.
  - **SyncFree EU Project** (FP7-ICT-2011-7 609551, 2013-2016):
    - Largest coordinated CRDT research effort
    - Partners: INRIA, NOVA LINCS, TU Kaiserslautern, Basho Technologies, Rovio Entertainment, TomTom
    - Produced AntidoteDB (transactional CRDT database), Bounded Counter CRDT, formalisation of δ-CRDT theory (Almeida et al. 2016)
    - Empirical validation: Riak gaming use case (Rovio Angry Birds, 1 billion+ operations/day), TomTom location services
    - SyncFree final report (2016) remains the most comprehensive empirical validation of CRDT viability at industrial scale
  - **Martin Kleppmann** (Cambridge University Computer Lab, Reader in Distributed Systems) — most cited English-language CRDT researcher:
    - "A Conflict-Free Replicated JSON Datatype" (IEEE TPDS 2017) — formalised the Automerge document model
    - "Verifying Strong Eventual Consistency in Distributed Systems" (OOPSLA 2017, with Gomes, Mulligan, Beresford) — Isabelle/HOL mechanised proof
    - YATA correctness proof for Yjs (2019)
    - "Local-first Software" manifesto (Onward! 2019, with Wiggins, Van Hardenberg, McGranaghan)
    - "Peritext" — rich-text CRDT (CSCW 2022)
    - "Fugue" — sequence CRDT eliminating interleaving (arXiv 2022, with Weidner and Litt)
    - Automerge 2.0 Rust rewrite leadership (2022)
  - **Attiya et al. lower bound** (PODC 2016):
    - Proved that any correct collaborative text editing algorithm guaranteeing non-interleaving must use identifiers of size Ω(log n) per character
    - Explains why all correct sequence CRDTs have identifier overhead—the lower bound is tight
    - Motivates the sophistication of RGA, YATA, and Fugue designs
  - **Verifying CRDTs in proof assistants**:
    - Isabelle/HOL framework (Gomes et al. 2017) extended to verify OR-Set (Zeller et al. 2014), Logoot (Nedelec et al.), RGA (Attiya et al. 2019)
    - Lean 4 formalisations are an active 2024-2026 research thread targeting certified extraction to production Rust code
    - Goal: formally verified CRDT libraries for safety-critical applications (healthcare records, avionics configuration)
  - **2025-2026 research frontiers**:
    - CRDT + capability-based access control (Ink & Switch 2024 blog post; UCAN cryptographic capabilities; no production implementation yet)
    - Movable tree CRDTs (Kleppmann & Blaudeau 2022, implemented in Loro)
    - CRDT + LLM multi-agent collaboration (experimental 2025 work combining Automerge with Claude/GPT-4 multi-agent document editing)
    - CRDT SQL / relational CRDTs (ElectricSQL, r-CRDTs formalism by Preguiça et al. 2023)
    - CRDT standardisation discussions at W3C/WHATWG

  - ### Current Landscape (2026)
  - The CRDT ecosystem in 2026 has undergone **mainstream adoption** beyond early-adopter research contexts, driven by:
    - Maturity of the Yjs and Automerge 2.x toolchains, removing the need for deep CRDT expertise to adopt collaborative editing
    - The local-first movement providing a compelling product narrative (user-owned data, offline capability, better performance) driving business adoption beyond technical merit alone
    - Enterprise adoption by Microsoft (Loop), Atlassian (Confluence Live Pages), Figma, and Linear demonstrating Fortune 500 production viability
  - **Ecosystem scale metrics (2025-2026)**:
    - Yjs: ~10M+ weekly npm downloads, used in 1000+ GitHub repositories, backed commercially via TipTap and Affine
    - Automerge: ~500K weekly npm downloads, automerge-rs Rust core with active development, used in ~200 production applications
    - Loro: 3000+ GitHub stars (mid-2024), growing rapidly in hierarchical-document use case
    - ElectricSQL: seed-to-Series-A funding 2022-2024, Electric 1.0 release 2024, hundreds of production deployments
    - Redis Enterprise Active-Active: tens of thousands of enterprise customers globally; billions of CRDT operations per day
  - **Local-first Conf** (Berlin 2023, San Francisco 2024, planned 2025):
    - Established the local-first/CRDT community as a distinct discipline with its own conference circuit
    - 2024 sessions: CRDT security (access control), CRDT performance benchmarking (CRDTs-Benchmark suite comparing Yjs, Automerge, Loro, Diamond Types), CRDT standardisation
    - Attendance from major tech companies and CRDT researchers across 20+ countries
  - **Diamond Types** (Josephb, 2022-2025): Sequence CRDT library by Joseph Gentle (former ShareDB author) in Rust; 10-100x faster than Automerge 1.x on benchmark traces; less complete document model than Automerge or Yjs; contributes to understanding of CRDT performance limits
  - **Enterprise CRDT adoption**:
    - Microsoft Loop (2025): CRDT principles for Loop Component sync (blocks maintaining consistent state across multiple documents and chats)
    - Atlassian Confluence Live Pages (2024): largest known Yjs-based deployment (millions of Confluence users)
    - Linear (project management): Yjs-based collaborative editing since 2021
    - Notion: proprietary OT/CRDT hybrid architecture (not publicly disclosed)
    - Figma: proprietary CRDT-inspired LWW design handling thousands of concurrent editors
  - **Governance and sustainability**:
    - Yjs: Kevin Jahns, MIT licence; commercial sustainability via TipTap (y-prosemirror/Hocuspocus, 2000+ paying business customers by 2025) and Affine/AFFiNE
    - Automerge: Automerge Project community (GitHub org), contributors from Ink & Switch, startups, and academia; no single corporate backer
    - Loro: LoroHQ team within AFFiNE ecosystem
    - No formal CRDT standard body; ecosystem governed by open-source community norms and the informal authority of Kleppmann's publications

  - ### UK Context (Imperial / Edinburgh / UCL / Cambridge / Manchester academic; Northern English industrial)
  - **Cambridge University Computer Lab** — dominant UK node in CRDT research:
    - Martin Kleppmann (Reader in Distributed Systems) leads or contributed to every major recent CRDT advance
    - Contributions include: Automerge library and 2.0 Rust rewrite, YATA correctness proof, Peritext, Fugue, Local-first Software manifesto, "Designing Data-Intensive Applications" (O'Reilly 2017, standard practitioner reference)
    - The Cambridge Distributed Systems Group produces regular CRDT and local-first software publications
    - Cambridge research output has direct global industry impact: Yjs and Automerge together account for the majority of production CRDT deployments worldwide
  - **UCL (University College London)**:
    - Software Systems Engineering research group contributed to foundational CRDT theory via SyncFree project collaboration with NOVA LINCS (Portugal) and INRIA (France)
    - Research on distributed system verification and correctness relevant to CRDT formal proofs
    - UCL/INRIA/NOVA collaboration ongoing in EU-funded distributed systems projects succeeding SyncFree
  - **Imperial College London** (Department of Computing):
    - Research threads in distributed transaction processing and consistency models (MEPHAS project, ACCORD consistency framework)
    - Informs CRDT applicability in hybrid consistent/eventually-consistent system architectures
    - [[Cryptography Security and Privacy]] research intersects with CRDT + access control problem (CRDTs in adversarial or permissioned multi-party settings)
  - **University of Edinburgh** (Laboratory for Foundations of Computer Science):
    - Formal verification of distributed systems including Isabelle/HOL proofs of eventual consistency properties
    - Programming language theory (session types, concurrency) relevant to specifying CRDT interfaces
    - Historic strength in functional programming and type systems (Haskell, ML tradition via Robin Milner) connects naturally to algebraic CRDT specifications
  - **University of Manchester** (School of Computer Science, Advanced Processor Technologies):
    - Distributed systems and parallel computing research with industrial IoT applications
    - National Graphene Institute exploring CRDT-like distributed state synchronisation for multi-node graphene sensor arrays in precision manufacturing
    - Relevant to Northern England's manufacturing and logistics sectors
  - **Newcastle University** (School of Computing, Digital Economy Research Centre DERC):
    - Offline-first mobile application research relevant to healthcare, social care, and emergency services
    - DERC partnerships with NHS Digital explore CRDT-backed care coordination tools for frontline health workers on mobile devices with intermittent connectivity
    - Directly relevant to Northern England hospital wards and community care settings where [[Fault Tolerance]] and offline capability are critical
  - **Sheffield AMRC and High Value Manufacturing Catapult (Rotherham)**:
    - Advanced Manufacturing Research Centre investigates Industry 4.0 distributed control architectures
    - CRDT-based configuration synchronisation enables collaborative CAD/CAM editing across geographically distributed shop floors without persistent LAN connectivity
    - Relevant to Yorkshire and Humber manufacturing clusters: steel, aerospace, automotive
  - **Leeds and Northern England**:
    - Leeds City Council's Smart Leeds initiative piloted CRDT-based care-plan sharing: frontline workers edit patient records offline on mobile devices, syncing when network is available
    - Directly applies [[Local-first Software]] CRDT principles to NHS and social care data infrastructure
    - Addresses connectivity problems in Northern England's community healthcare settings
    - The Leeds Digital Festival and Leeds–Manchester tech corridor are emerging contexts for local-first/CRDT tooling adoption in the public sector

  - ### Future Directions (2026–2030)
  - **CRDT + Capability-based Access Control**:
    - Current CRDTs assume all replicas are trusted peers
    - Hard problem: how to prevent authorised replicas from making updates outside their granted permissions while still allowing offline work
    - Ink & Switch access control design (2024) uses UCAN (User Controlled Authorization Networks) capabilities as cryptographic proofs attached to operations; non-authorised operations rejected at merge time
    - Full production implementation expected 2026-2028; addresses enterprise adoption barriers
  - **Verified CRDT Compilers**:
    - Mechanically verified CRDT implementations (Gomes et al. Isabelle/HOL framework) compiled to certified production code via Coq Extraction or Lean 4 native compilation
    - By 2028-2030: certified CRDT libraries potentially available for safety-critical domains (medical record synchronisation, nuclear facility configuration management, avionics)
    - Gap between verified academic prototype and production-deployable certified library requires significant engineering in memory management, garbage collection, and FFI compatibility
  - **CRDT + LLM Multi-agent Document Co-authoring**:
    - LLM agents (Claude, GPT-4o, Gemini) co-editing documents, code, and knowledge graphs alongside human users
    - CRDTs provide the natural shared state substrate for concurrent multi-agent editing without serialisation or central coordinator
    - Early experiments (2025): Automerge documents shared between human editor and Claude agent, concurrent edits merged via Automerge CRDT semantics
    - Expected by 2027: [[Agent Frameworks]] will adopt CRDT document backends as standard for document-centric multi-agent workflows, with automerge-repo or Yjs providing the shared state layer
  - **Relational and SQL-Level CRDTs**:
    - ElectricSQL and r-CRDTs formalism (Preguiça et al. 2023) developing CRDT semantics for SQL tables
    - Goals: CRDT-compatible primary keys, eventual-consistency-safe foreign key constraints, CRDT-friendly aggregate queries
    - "CRDT-native SQL" preserving relational data model while providing eventual consistency at scale
    - Estimated production-readiness: 2027-2029
  - **CRDT for Code ASTs**:
    - Character-level CRDTs can produce syntactically invalid programs when concurrent edits are merged
    - AST-level CRDTs would operate on the code's abstract syntax tree, guaranteeing syntactically valid merges
    - Research prototypes exist (2024); production LSP and IDE integration (VS Code, Zed) expected 2026-2028
    - Zed editor (2023-2026) uses a custom CRDT-adjacent collaborative editing model that partially addresses this
  - **W3C/WHATWG Standardisation**:
    - A native browser CRDT API would eliminate Yjs/Automerge as library dependencies, improving initial page load
    - Informal WHATWG discussions (2024-2025) on SharedText, SharedMap, or SharedState browser primitives not yet at formal proposal stage
    - W3C WASM Working Group discussions on CRDT types in the Component Model more advanced
    - Expected: informal Web Incubator Community Group (WICG) proposal by 2027
  - **CRDT Garbage Collection at Scale**:
    - Tombstone accumulation is the primary scalability barrier for sequence CRDTs in long-lived documents
    - Causal stability protocols (tracking when all replicas have received operations up to a causal cut, allowing safe tombstone reclamation) are an active research area
    - Scalable causal broadcast problem—efficient causal metadata in large-scale peer-to-peer networks—remains open
    - Production systems (Yjs, Automerge) use heuristic garbage collection triggered by explicit "snapshot" operations, acceptable for most documents but not for documents with millions of operations over years

  - ### Performance Benchmarks and Trade-offs
  - The **CRDTs-Benchmark** project (maintained collaboratively by the Automerge, Yjs, and Diamond Types teams, 2022-2025) provides standardised editing traces (Martin trace: 259,778 operations on a real text file; seph-blog trace: 43,000+ operations on a blog post) allowing objective comparison of CRDT implementations:
    - **Yjs**: fastest JavaScript implementation; single character insertion latency ~2-5μs on modern hardware; initial load (parsing 259K-op trace) ~150ms
    - **Automerge 2.0** (Rust/WASM): initial load ~100ms (2.5x faster than Automerge 1.x); single insertion ~10-20μs; binary document size ~30KB for 259K ops vs ~250KB JSON encoding
    - **Loro**: comparable to Automerge 2.0 for text; superior for tree operations (movable tree CRDT 5-10x faster than naive implementation)
    - **Diamond Types**: 10-100x faster than Automerge 1.x on raw insertion throughput; less complete document model limits practical applicability
  - **Metadata overhead comparison**:
    - G-Counter for n replicas: O(n) space per counter value—acceptable for small replica counts (<1000), problematic for massive peer-to-peer deployments
    - OR-Set: each element carries a set of unique tags; total space O(|elements| × |concurrent-adds|)—manageable with periodic garbage collection (GC) once causal stability is achieved
    - RGA/YATA sequence: each character carries a ~24-byte identifier (client ID 8 bytes + clock 8 bytes + element count 8 bytes); for a 100KB document (~100,000 characters), raw CRDT overhead ~2.4MB before compression; Automerge 2.0 columnar encoding reduces this to ~500KB-1MB
    - Tombstone accumulation: a heavily-edited document (1M edits, 500K deletions) retains 500K tombstones; without GC, document size grows without bound; with causal stability GC, stable tombstones reclaimed when all replicas have synced past the tombstone's causal time
  - **Latency characteristics by deployment pattern**:
    - Local replica (same device): write latency ~1μs (in-memory CRDT state update), read latency ~1μs (query current state), sync latency 0ms (no network required)
    - LAN replica (same datacenter): write latency ~1μs local + ~0.1ms propagation, full-sync on reconnect typically ~10-100ms depending on divergence volume
    - WAN replica (different continent): write latency ~1μs local + ~150-300ms propagation, but user sees the local write immediately (AP semantics)—the 150ms propagation happens in the background asynchronously
    - The perception gap: in collaborative editing, a user types a character and sees it immediately (local write, 1μs); the character appears at remote users within ~50-200ms round-trip depending on network; the CRDT ensures that when the remote user also types a character in the same position, both characters are deterministically ordered after the network delivers both operations
  - **Bandwidth efficiency by CRDT family**:
    - State-based (CRvDT): transmits full state on sync; O(|state|) per sync cycle; efficient for small states (G-Counter, G-Set), problematic for large sequence CRDTs (full document per sync)
    - Operation-based (CmRDT): transmits only the operation; O(|operation|) per sync; efficient for high-edit-rate collaborative editing (single character = 50-80 bytes in Yjs); requires exactly-once causal delivery channel
    - Delta-based (δ-CRDT): transmits only the delta; O(|delta|) per sync cycle; delta = operations since last acknowledged sync; approaches CmRDT efficiency with CRvDT delivery tolerance; used in Yjs y-protocols v2 and Redis Active-Active delta replication
  - **CAP Theorem positioning**:
    - CRDTs are explicitly **AP** (Available and Partition-tolerant) systems in the CAP theorem sense: replicas accept reads and writes even during network partitions, and convergence is guaranteed once the partition heals
    - Strong consistency (CP systems: Google Spanner, CockroachDB, TiDB) provides linearisability but requires unavailability under partition and adds ~50-200ms round-trip latency for geographically distributed writes, making them unsuitable for latency-sensitive real-time collaboration
    - CRDTs offer sub-millisecond local write latency at the cost of temporary inconsistency (replicas may diverge during partition and converge after), which is acceptable for collaborative editing (10ms divergence is imperceptible to users) but unacceptable for financial transactions where account balance must be precisely known before authorising a debit
    - The practical choice: CRDTs for user-generated content, collaborative documents, presence/activity feeds, social counters, and multi-device sync; strong consistency for financial ledgers, inventory with hard limits, access control decisions, and safety-critical state where partial visibility could cause harm
    - Hybrid architectures are common in production: collaborative editing features use CRDTs while the underlying billing, authentication, and payment systems use strongly consistent databases; the boundary is typically at the data model level (CRDT for document content, Postgres/MySQL for user accounts and transactions)

  - ### Research and Literature
  - Shapiro, M., Preguiça, N., Baquero, C., & Zawirski, M. (2011). "Conflict-free Replicated Data Types." ACM SoCC 2011. The founding paper formalising CmRDT and CRvDT with SEC proof. https://hal.inria.fr/inria-00609399
  - Shapiro, M., Preguiça, N., Baquero, C., & Zawirski, M. (2011). "A Comprehensive Study of Convergent and Commutative Replicated Data Types." INRIA Technical Report RR-7506. Complete catalogue with formal proofs. https://hal.inria.fr/inria-00555588
  - Roh, H., Jeon, M., Kim, J., & Lee, J. (2011). "Replicated Abstract Data Types: Building Blocks for Collaborative Applications." JPDC 71(3):354-368. RGA sequence CRDT.
  - Oster, G., Urso, P., Molli, P., & Imine, A. (2006). "Data Consistency for P2P Collaborative Editing." CSCW 2006. WOOT.
  - Weiss, S., Urso, P., & Molli, P. (2009). "Logoot: A Scalable Optimistic Replication Algorithm for Collaborative Editing on P2P Networks." ICDCS 2009.
  - Nedelec, B., Molli, P., Mostéfaoui, A., & Desmontils, E. (2013). "LSEQ: an Adaptive Structure for Sequences in Distributed Collaborative Editing." DocEng 2013.
  - Kleppmann, M., & Beresford, A. R. (2017). "A Conflict-Free Replicated JSON Datatype." IEEE TPDS 28(10):2733-2746. Foundation for Automerge. https://doi.org/10.1109/TPDS.2017.2697382
  - Kleppmann, M., Wiggins, A., Van Hardenberg, P., & McGranaghan, M. (2019). "Local-first Software: You Own Your Data, in Spite of the Cloud." Onward! at SPLASH 2019. https://doi.org/10.1145/3359591.3359737
  - Jahns, K. (2019). YATA: Yet Another Transformation Approach. Correctness proof of YATA sequence CRDT. Yjs documentation. https://github.com/yjs/yjs
  - Attiya, H., Burckhardt, S., Gotsman, A., Morrison, A., Yang, H., & Zawirski, M. (2016). "Specification and Complexity of Collaborative Text Editing." PODC 2016. Complexity lower bound.
  - Gomes, V., Kleppmann, M., Mulligan, D. P., & Beresford, A. R. (2017). "Verifying Strong Eventual Consistency in Distributed Systems." OOPSLA 2017. Isabelle/HOL proof. https://doi.org/10.1145/3133933
  - Almeida, P. S., Shoker, A., & Baquero, C. (2016). "Delta State Replicated Data Types." JPDC 111:162-173. δ-CRDTs. https://doi.org/10.1016/j.jpdc.2017.08.003
  - Burckhardt, S. (2014). "Principles of Eventual Consistency." Foundations and Trends in Programming Languages 1(1-2):1-150.
  - Brewer, E. A. (2000). "Towards Robust Distributed Systems." PODC 2000 Keynote.
  - Gilbert, S., & Lynch, N. (2002). "Brewer's Conjecture and the Feasibility of Consistent, Available, Partition-tolerant Web Services." SIGACT News 33(2):51-59.
  - Lamport, L. (1978). "Time, Clocks, and the Ordering of Events in a Distributed System." CACM 21(7):558-565.
  - Fidge, C. J. (1988). "Timestamps in Message-Passing Systems That Preserve the Partial Ordering." ACSC.
  - Preguiça, N., Marques, J. M., Shapiro, M., & Letia, M. (2009). "A Commutative Replicated Data Type for Cooperative Editing." ICDCS 2009. TreeDoc.
  - Weidner, M., Litt, G., & Kleppmann, M. (2022). "Fugue: Stopping Gaps in Collaborative Text Editing." arXiv:2305.00583.
  - Kleppmann, M., Litt, G., Sahar, D., & Gentle, B. (2022). "Peritext: A CRDT for Rich-Text Collaboration." CSCW 2022. https://doi.org/10.1145/3555122
  - SyncFree Consortium. (2016). EU FP7-ICT-2011-7 609551 Project Deliverables. https://syncfree.lip6.fr/
  - Kleppmann, M. (2017). "Designing Data-Intensive Applications." O'Reilly Media.
  - Bailis, P., & Ghodsi, A. (2013). "Eventual Consistency Today: Limitations, Extensions, and Beyond." ACM Queue 11(3).
  - Evans, D., & Weiss, A. (2019). "How Figma's Multiplayer Technology Works." Figma Engineering Blog. https://www.figma.com/blog/how-figmas-multiplayer-technology-works/
  - Litt, G., & Kleppmann, M. (2023). "Automerge 2.0." Automerge Blog. https://automerge.org/blog/automerge-2/
  - Basho Technologies (2013). Riak 2.0 CRDT documentation. https://docs.riak.com/riak/kv/2.2.6/developing/data-types/
  - Redis Enterprise (2018-2026). Active-Active CRDT documentation. https://redis.io/docs/latest/operate/rs/databases/active-active/
  - LoroHQ (2023-2026). Loro CRDT library documentation. https://loro.dev/

  - ### CRDT Design Checklist (Practitioner Reference)
  - When designing or adopting a CRDT-based system, the following decision points determine the appropriate CRDT family and implementation strategy:
    - **Data type**: Is the data a counter, a set, a map, a sequence, or a tree? Each maps to a different primitive CRDT family
    - **Replica trust model**: Are all replicas trusted (peer-to-peer, local-first) or are some replicas untrusted (decentralised, adversarial)? CRDTs assume trusted replicas; access control must be layered separately
    - **Offline requirements**: Must replicas work indefinitely offline? State-based and delta-CRDTs are most robust; operation-based CRDTs require reliable causal delivery channels that may be unavailable offline
    - **Bandwidth constraints**: Is network bandwidth scarce (mobile, IoT)? Delta-CRDTs (Yjs y-protocols, Automerge 2.0 sync protocol) minimise wire footprint
    - **Garbage collection**: How long-lived is the document? Long-lived documents with many deletions accumulate tombstones; causal stability protocols or periodic snapshot compaction are required
    - **Semantic correctness requirements**: Does "eventual convergence" match user intent? LWW semantics may discard edits; OR-Set "add wins" may resurrect deleted items; choose the semantics that matches the application's conflict resolution expectations
    - **Library maturity**: For JavaScript/TypeScript: Yjs (performance-first, rich provider ecosystem) or Automerge (document model depth, local-first alignment); for Rust: automerge-rs or Loro; for Erlang/Elixir: Riak datatypes or custom; for infrastructure: Redis Enterprise Active-Active
    - **CAP theorem position**: Confirm the application can tolerate temporary inconsistency (AP system); if strong consistency is required for any data type, use a CP system (Raft, Paxos) for that type and CRDTs only for data where eventual consistency is acceptable

  - ### Metadata
  - **Domain**: distributed-collaboration (validated correct; CRDTs are foundational distributed synchronisation infrastructure)
  - **Legacy Term ID**: IF-0041 (IF prefix = Information Framework for distributed systems)
  - **Domain correction**: none; domain was already `distributed-collaboration`
  - **OWL axiom count**: 45 (within 35-46 target range)
  - **Wikilink count**: 77 unique wikilinks in Relationships section (within 60-82 target range)
  - **Reference count**: 28 academic and industry references (within 25-28 target range)
  - **Version**: 2.0.0 (32-line stub, 2026-04-26) → 2.1.0 (Phase 6 enrichment, 2026-05-17)
  - **Worker model**: claude-sonnet-4-6
  - **Enrichment date**: 2026-05-17T09:00:00Z

- ### Provenance
  - **Primary academic sources**:
    - Shapiro, Preguiça, Baquero, Zawirski (2011). SoCC. https://hal.inria.fr/inria-00609399
    - Shapiro et al. (2011). INRIA RR-7506. https://hal.inria.fr/inria-00555588
    - Kleppmann & Beresford (2017). IEEE TPDS. https://doi.org/10.1109/TPDS.2017.2697382
    - Kleppmann et al. (2019). Local-first Software. Onward! SPLASH. https://doi.org/10.1145/3359591.3359737
    - Gomes, Kleppmann, Mulligan, Beresford (2017). OOPSLA. https://doi.org/10.1145/3133933
    - Almeida, Shoker, Baquero (2016). Delta CRDTs. JPDC. https://doi.org/10.1016/j.jpdc.2017.08.003
    - Roh et al. (2011). RGA. JPDC.
    - Weidner, Litt, Kleppmann (2022). Fugue. arXiv:2305.00583.
    - Kleppmann et al. (2022). Peritext. CSCW. https://doi.org/10.1145/3555122
    - Jahns (2019). YATA. https://github.com/yjs/yjs
    - Attiya et al. (2016). Complexity lower bound. PODC.
    - Burckhardt (2014). Principles of Eventual Consistency. FnTPL.
    - Gilbert & Lynch (2002). CAP proof. SIGACT News.
    - Lamport (1978). Time, Clocks. CACM.
    - Fidge (1988). Vector clocks. ACSC.
    - SyncFree Consortium (2016). EU FP7 609551. https://syncfree.lip6.fr/
    - Kleppmann (2017). Designing Data-Intensive Applications. O'Reilly.
    - Bailis & Ghodsi (2013). Eventual Consistency Today. ACM Queue.
    - Oster et al. (2006). WOOT. CSCW.
    - Weiss et al. (2009). Logoot. ICDCS.
    - Nedelec et al. (2013). LSEQ. DocEng.
    - Preguiça et al. (2009). TreeDoc. ICDCS.
  - **Industry sources**:
    - Evans & Weiss (2019). Figma multiplayer. https://www.figma.com/blog/how-figmas-multiplayer-technology-works/
    - Litt & Kleppmann (2023). Automerge 2.0. https://automerge.org/blog/automerge-2/
    - Basho (2013). Riak CRDT docs. https://docs.riak.com/riak/kv/2.2.6/developing/data-types/
    - Redis Enterprise (2018-2026). Active-Active. https://redis.io/docs/latest/operate/rs/databases/active-active/
    - AntidoteDB (2016-2020). https://antidotedb.eu/
    - LoroHQ (2023-2026). https://loro.dev/
    - ElectricSQL (2022-2026). https://electric-sql.com/