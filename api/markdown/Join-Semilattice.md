
A join-semilattice is a partially ordered set in which every pair of elements has a least upper bound (join), making the join operation associative, commutative and idempotent. These algebraic properties guarantee that repeated or reordered merges converge to a unique value. The structure is the mathematical foundation for state-based conflict-free replicated data types.

- ### Content
  - Because merges form a monotone lattice climb toward a least upper bound, state-based (convergent) replicated data types can exchange and combine states in any order without coordination and still reach the same result. This property makes join-semilattices central to eventually consistent and offline-first distributed systems.

