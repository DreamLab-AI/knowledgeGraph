RocksDB is an embedded, high-performance key-value store built on a log-structured merge-tree and optimised for fast storage such as SSDs. It provides ordered keys, atomic batch writes, snapshots, and tunable compaction, and is embedded as a library rather than run as a server. It is widely used as the local state backend in databases and blockchain platforms.

### Content

- Its log-structured merge-tree design favours high write throughput, with background compaction maintaining read performance. As an embeddable library it gives applications durable, ordered local storage without operating a separate database server.

