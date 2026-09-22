public:: true

# Reed-Solomon Erasure Coding
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:reed-solomon-erasure-coding",
  "@type": "Page",
  "vc:slug": "reed-solomon-erasure-coding",
  "title": "Reed-Solomon Erasure Coding",
  "vc:public": true,
  "vc:outboundWikilinks": [],
  "vc:schemaVersion": 2
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:reed-solomon-erasure-coding",
  "@type": "Class",
  "label": "Reed-Solomon Erasure Coding",
  "definition": "Reed-Solomon erasure coding is a family of error-correcting codes that transform k data symbols into n encoded symbols such that any k of the n suffice to reconstruct the original data, tolerating up to n minus k erasures. Operating over finite (Galois) fields, it provides maximum-distance-separable efficiency, meaning no scheme can recover from more erasures for the same redundancy. It is foundational to RAID storage, optical media, QR codes, satellite communication, and distributed-storage and blockchain data-availability systems.",
  "domain": "infrastructure",
  "maturity": "established",
  "subClassOf": [{"@id": "urn:ngm:class:erasure-coding", "label": "Erasure Coding"}],
  "relations": {
    "uses": [
      {"@id": "urn:ngm:class:error-correction", "label": "Error Correction"}
    ],
    "enables": [
      {"@id": "urn:ngm:class:data-availability", "label": "Data Availability"},
      {"@id": "urn:ngm:class:fault-tolerance", "label": "Fault Tolerance"}
    ],
    "relatedTo": [
      {"@id": "urn:ngm:class:distributed-storage", "label": "Distributed Storage"}
    ]
  },
  "quality": 0.8
}
```

- ### Definition
  - Reed-Solomon erasure coding encodes k data symbols into n symbols so that any k recover the original, providing optimal redundancy for tolerating data loss in storage and transmission.

- ### Relationships
  - Reed-Solomon Erasure Coding is a subclass of [[Erasure Coding]] and uses [[Error Correction]] theory over finite fields. It enables strong [[Data Availability]] and [[Fault Tolerance]] guarantees with modest storage overhead, and relates directly to [[Distributed Storage]] systems that spread encoded fragments across many nodes.

- ### Content
  - Reed-Solomon codes, introduced in 1960, treat data as coefficients of a polynomial over a finite field and evaluate that polynomial at additional points to generate redundant symbols. Because a polynomial of degree k minus one is uniquely determined by any k of its evaluations, the original data can be recovered from any k surviving symbols out of the n produced. This property makes the codes maximum-distance-separable: they achieve the theoretical optimum of erasure tolerance per unit of added redundancy.

  - The distinction between error correction and erasure coding matters in practice. An erasure is a known-missing symbol (a failed disk, a dropped packet whose absence is detected), whereas an error is a corrupted symbol at an unknown position. Reed-Solomon can correct up to n minus k erasures, but only half as many unlocated errors, because locating an error consumes redundancy that a known erasure does not. Distributed systems usually operate in the erasure regime, since failed nodes announce themselves.

  - Compared to simple replication, erasure coding dramatically reduces storage cost for the same durability. Storing three full copies of data tolerates two failures at 200% overhead; a Reed-Solomon scheme such as 10-of-14 tolerates four failures at only 40% overhead. This efficiency is why large-scale storage systems — from cloud object stores to RAID-6 arrays — rely on Reed-Solomon and related codes rather than naive replication for cold and warm data.

  - In decentralised systems the technique has acquired new prominence through data-availability sampling. Blockchain scaling designs erasure-code block data so that light clients can verify, by randomly sampling a few fragments, that the whole block is available for reconstruction without downloading it entirely. This turns Reed-Solomon coding from a durability mechanism into a trust-minimisation primitive, underpinning modular blockchain and rollup architectures where guaranteeing data availability is the central security concern.
