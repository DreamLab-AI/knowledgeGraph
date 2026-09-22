public:: true

# B-Tree Index

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v1",
  "@id": "urn:visionflow:page:b-tree-index",
  "@type": "Page",
  "title": "B-Tree Index",
  "vc:slug": "b-tree-index",
  "vc:public": true,
  "vc:schemaVersion": 2,
  "vc:outboundWikilinks": []
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:b-tree-index",
  "@type": "Class",
  "label": "B-Tree Index",
  "definition": "A B-tree index is a self-balancing tree data structure used by database engines to maintain sorted data and support efficient logarithmic-time lookups, range scans, insertions, and deletions. Each node holds multiple sorted keys and child pointers, keeping the tree shallow and minimising disk reads relative to a binary tree. It is the default index structure in relational database systems such as PostgreSQL for primary keys and most secondary indexes.",
  "domain": "infrastructure",
  "maturity": "established",
  "subClassOf": [
    {
      "@id": "urn:ngm:class:data-structure",
      "label": "Data Structure"
    }
  ],
  "relations": {}
}
```
