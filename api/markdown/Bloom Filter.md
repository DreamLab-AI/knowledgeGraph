public:: true

# Bloom Filter
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:bloom-filter",
  "@type": "Page",
  "vc:slug": "bloom-filter",
  "title": "Bloom Filter",
  "vc:public": true,
  "vc:outboundWikilinks": [],
  "vc:schemaVersion": 2
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:bloom-filter",
  "@type": "Class",
  "label": "Bloom Filter",
  "definition": "A Bloom Filter is a space-efficient probabilistic data structure that tests whether an element is a member of a set, accepting a controllable false-positive rate while guaranteeing zero false negatives. Invented by Burton Howard Bloom in 1970, the structure uses multiple hash functions to map elements to bit positions within a fixed-size bit array. Membership queries are answered in constant time regardless of set size, making Bloom Filters indispensable in high-throughput systems where exact lookup is prohibitively expensive. They are widely deployed in databases, networking, distributed caches, and blockchain nodes.",
  "domain": "infrastructure",
  "maturity": "established",
  "subClassOf": [{"@id": "urn:ngm:class:data-structure", "label": "Data Structure"}],
  "relations": {
    "relatedTo": [
      {"@id": "urn:ngm:class:hash-function", "label": "Hash Function"},
      {"@id": "urn:ngm:class:probabilistic-model", "label": "Probabilistic Model"},
      {"@id": "urn:ngm:class:distributed-data-structure", "label": "Distributed Data Structure"}
    ],
    "uses": [
      {"@id": "urn:ngm:class:cryptographic-hash-function", "label": "Cryptographic Hash Function"},
      {"@id": "urn:ngm:class:hash-collision", "label": "Hash Collision"}
    ],
    "enables": [
      {"@id": "urn:ngm:class:latency", "label": "Latency"},
      {"@id": "urn:ngm:class:membership-inference", "label": "Membership Inference"},
      {"@id": "urn:ngm:class:privacy-filter", "label": "Privacy Filter"}
    ],
    "contrastsWith": [
      {"@id": "urn:ngm:class:spatial-data-structure", "label": "Spatial Data Structure"}
    ]
  },
  "quality": 0.8
}
```

- ### Definition
  - A [[Bloom Filter]] is a space-efficient probabilistic [[Data Structure]] that uses multiple [[Hash Function]] mappings to a bit array, enabling constant-time set membership queries with a tunable false-positive rate and zero false-negative guarantee.
- ### Relationships
  - Bloom Filters depend on the quality of their underlying [[Cryptographic Hash Function]] selections to minimise [[Hash Collision]] clustering and control error rates. They are a foundational component in [[Distributed Data Structure]] systems where network round-trips for exact lookups are prohibitively expensive, and they contribute to [[Latency]] reduction in caching layers. Their [[Membership Inference]] characteristic intersects with [[Privacy Filter]] use cases, where the structure can check presence in block-lists without exposing the full list contents.
- ### Content
  - A Bloom Filter is initialised as a bit array of m bits, all set to zero, paired with k independent hash functions. To insert an element, each hash function maps the element to a bit position, which is set to one. To query membership, the same k hash functions are applied; if all k positions are set, the element is probably present — if any bit is zero, the element is definitely absent. The probability of a false positive decreases as m grows and increases with the number of elements inserted.

  - The principal trade-off is between memory footprint, false-positive rate, and throughput. An optimal Bloom Filter for n expected elements with a desired false-positive probability p requires approximately -n·ln(p) / (ln 2)² bits. This is dramatically smaller than any exact hash set representation, enabling billions of membership checks within a few megabytes of RAM — a critical advantage for kernel-level network packet filtering, DNS cache poisoning prevention, and cryptocurrency UTXO set lookups.

  - Variants extend the basic structure: counting Bloom Filters replace single bits with small integer counters to support deletions; Cuckoo Filters improve lookup performance and deletion at the cost of slightly more complex insertion logic; Scalable Bloom Filters grow dynamically to maintain a target false-positive rate as the set expands beyond initial capacity estimates. Each variant introduces different space-accuracy-mutability trade-offs suited to different deployment contexts.

  - In blockchain systems, Bloom Filters appear in the Bitcoin SPV (Simplified Payment Verification) protocol, where lightweight nodes download block headers and use Bloom Filters to request only transactions relevant to their wallet without revealing their full address set to peers. Ethereum similarly encodes a 2048-bit Bloom Filter in each block header to accelerate log event lookups without scanning all transaction receipts.
