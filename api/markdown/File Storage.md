
File storage is a storage model that organises data as named files within a hierarchical directory tree, accessed through file-system semantics such as open, read, write and seek. It presents a familiar path-based namespace and is typically shared over network protocols for concurrent access. File storage contrasts with block storage, which exposes raw volumes, and object storage, which uses a flat namespace of objects addressed by key.

- ### Overview
  - File storage is the most familiar storage model: data lives in files, files live in folders, and applications open, read and write them through standard file-system calls.
  - When shared over a network, file storage lets many clients access the same hierarchical namespace concurrently, with the storage system mediating locking and consistency.
  - It sits alongside block and object storage as one of three principal models. Block storage exposes raw volumes for a host to format; object storage offers a flat, scalable key-addressed namespace; file storage offers structured, path-based, POSIX-style access.
- ### Key aspects
  - Hierarchical namespace: files organised in nested directories.
  - File-system semantics: open, read, write, seek, lock and metadata operations.
  - Shared access: network file protocols allow concurrent multi-client use.
  - Metadata: permissions, timestamps and ownership travel with each file.
  - Consistency and locking: coordination for concurrent writers.
- ### Mechanisms
  - Local and networked file systems presenting a directory tree.
  - Network file protocols for shared, concurrent access.
  - Distributed and clustered file systems for scale and resilience.
  - Snapshots, replication and backup of the file namespace.
- ### Applications
  - Shared home directories and team file shares.
  - Application and content data requiring path-based access.
  - Media and document repositories.
  - Lift-and-shift of legacy applications expecting a file system.
- ### Provenance

