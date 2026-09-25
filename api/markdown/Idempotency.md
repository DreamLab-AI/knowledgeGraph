Idempotency is the property of an operation whereby applying it multiple times produces the same result as applying it once. In distributed systems and APIs it is essential for safe retries, ensuring that duplicated requests caused by network failures do not corrupt state or cause unintended side effects. Idempotency is commonly enforced via idempotency keys, deterministic merge functions, or naturally commutative state updates.

### Content

- Systems achieve idempotency by deduplicating on client-supplied keys, by designing state transitions to be commutative and associative, or by recording applied operations. Conflict-free replicated data types exploit these algebraic properties so that the same update can be delivered any number of times and in any order without diverging.

