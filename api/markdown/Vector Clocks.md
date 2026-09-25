A mechanism for ordering events in a distributed system by assigning each process a vector of counters. Comparing vectors determines whether one event causally precedes another or whether they are concurrent.

### Semantic Classification

### Content

- A vector clock maintains, for each process, a vector with one entry per process. Each process increments its own entry on local events and merges vectors on message receipt, capturing causal relationships between events.
- By comparing two vectors, a system can tell whether one event happened before another or whether they are concurrent, which supports conflict detection in replicated stores and eventually consistent systems.

### Provenance

