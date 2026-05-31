- ### Definition
  - The Domain Name System, a hierarchical and distributed naming system that resolves human-readable domain names into IP addresses and other resource records.

- ### Semantic Classification
  - owl-class:: general:DNS
  - owl-role:: Class

- ### Relationships
  - is-subclass-of:: [[Application Layer]]
  - bridges-to:: [[Communication Protocols]]
  - requires:: [[Network Protocol]]
  - enables:: [[HTTP]]

- ### Content
  - DNS is a globally distributed database that maps domain names to IP addresses and other records through a hierarchy of authoritative name servers rooted at the DNS root zone. Resolvers query this hierarchy, often using caching, to translate a name such as a website address into the numeric address needed to establish a connection.
  - The system underpins almost all internet usage because users and applications reference services by name rather than address. Extensions such as DNSSEC add cryptographic authentication of records to mitigate spoofing and cache poisoning.

- ### Provenance
  - sources::
  - migration-date:: 2026-05-29T00:00:00Z