
N-Triples is a line-based, plain-text serialization format for RDF in which each line encodes a single subject-predicate-object triple terminated by a period. It is deliberately minimal and unambiguous, using full IRIs rather than prefixes, which makes it easy to parse, stream, and compare line by line. The format is a W3C standard and serves as a canonical interchange and testing representation for RDF graphs.

- ### Content
  - Because each statement is independent and uses absolute IRIs, N-Triples is ideal for streaming large graphs, line-oriented diffing, and deterministic canonicalisation. The trade-off is verbosity: there is no prefixing, abbreviation, or nesting, so files are larger than equivalent Turtle or JSON-LD documents.

