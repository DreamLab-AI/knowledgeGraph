
A transaction manager is a software component that coordinates the atomic execution of operations against a database or distributed system, enforcing the ACID properties of atomicity, consistency, isolation, and durability. It governs commit and rollback, manages concurrency control and locking, and in distributed settings orchestrates multi-resource protocols such as two-phase commit.

- ### Content
  - Transaction managers use techniques like write-ahead logging, multiversion concurrency control, and lock managers to preserve correctness under concurrent access. In distributed databases they extend these guarantees across nodes via coordination protocols, balancing strict consistency against availability and latency.

