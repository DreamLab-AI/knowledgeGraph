public:: true

# Private Set Intersection

```json-ld
{ "@context":"https://narrativegoldmine.com/ns/v1", "@id":"urn:visionflow:page:private-set-intersection", "@type":"Page", "title":"Private Set Intersection", "vc:slug":"private-set-intersection", "vc:public":true, "vc:schemaVersion":2, "vc:outboundWikilinks":[] }
```

```json-ld
{
  "@context":"https://narrativegoldmine.com/ns/v2.jsonld",
  "@id":"urn:ngm:class:private-set-intersection",
  "@type":"Class",
  "label":"Private Set Intersection",
  "definition":"Private set intersection (PSI) is a cryptographic protocol that allows two or more parties to compute the intersection of their private sets without revealing any element outside that intersection to one another. It is built from techniques such as oblivious transfer, homomorphic encryption, or Bloom filter-based hashing, and is a specialised instance of secure multi-party computation restricted to the set-intersection function. PSI is used in applications such as contact discovery, privacy-preserving advertising measurement, and cross-organisation fraud detection, where parties need to find common records without pooling raw data. Its efficiency has improved substantially with modern oblivious transfer extension protocols, making PSI practical at scale for sets with millions of elements.",
  "domain":"security",
  "maturity":"established",
  "subClassOf":[{"@id":"urn:ngm:class:multi-party-computation","label":"Multi-Party Computation"}],
  "relations":{}
}
```

- ### Definition
	- Private set intersection (PSI) is a cryptographic protocol that allows two or more parties to compute the intersection of their private sets without revealing any element outside that intersection to one another. It is built from techniques such as oblivious transfer, homomorphic encryption, or Bloom filter-based hashing, and is a specialised instance of secure multi-party computation restricted to the set-intersection function. PSI is used in applications such as contact discovery, privacy-preserving advertising measurement, and cross-organisation fraud detection, where parties need to find common records without pooling raw data. Its efficiency has improved substantially with modern oblivious transfer extension protocols, making PSI practical at scale for sets with millions of elements.
- ### Relationships
	- subClassOf:: [[Multi-Party Computation]]
