public:: true

# Schema Evolution

```json-ld
{ "@context":"https://narrativegoldmine.com/ns/v1", "@id":"urn:visionflow:page:schema-evolution", "@type":"Page", "title":"Schema Evolution", "vc:slug":"schema-evolution", "vc:public":true, "vc:schemaVersion":2, "vc:outboundWikilinks":[] }
```

```json-ld
{
  "@context":"https://narrativegoldmine.com/ns/v2.jsonld",
  "@id":"urn:ngm:class:schema-evolution",
  "@type":"Class",
  "label":"Schema Evolution",
  "definition":"Schema evolution is the practice of modifying a data schema over time, such as adding, removing, or renaming fields, while preserving the ability to read data written under earlier versions. It is a core concern for serialisation formats such as Avro, Protobuf, and Parquet, which define explicit compatibility rules governing which changes are backward, forward, or fully compatible. Systems that manage schema evolution typically rely on a schema registry to version schemas centrally and validate that producers and consumers remain compatible before a change is deployed. Poorly managed schema evolution is a common source of pipeline breakage in streaming and data lake architectures.",
  "domain":"data",
  "maturity":"established",
  "subClassOf":[{"@id":"urn:ngm:class:data-schema","label":"Data Schema"}],
  "relations":{}
}
```

- ### Definition
	- Schema evolution is the practice of modifying a data schema over time, such as adding, removing, or renaming fields, while preserving the ability to read data written under earlier versions. It is a core concern for serialisation formats such as Avro, Protobuf, and Parquet, which define explicit compatibility rules governing which changes are backward, forward, or fully compatible. Systems that manage schema evolution typically rely on a schema registry to version schemas centrally and validate that producers and consumers remain compatible before a change is deployed. Poorly managed schema evolution is a common source of pipeline breakage in streaming and data lake architectures.
- ### Relationships
	- subClassOf:: [[Data Schema]]
