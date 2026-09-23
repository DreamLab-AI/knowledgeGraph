
An LSM Tree, or Log-Structured Merge Tree, is a write-optimised data structure that buffers writes in memory and periodically flushes them as sorted, immutable files on disk, later merging those files through background compaction. It trades read amplification for high write throughput, making it the storage engine of choice for databases with write-heavy workloads. It is used internally by many key-value stores, time-series databases, and graph databases.

- ### Provenance

