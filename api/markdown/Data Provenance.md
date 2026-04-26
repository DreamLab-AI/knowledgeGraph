iri:: http://narrativegoldmine.com/infrastructure#DataProvenance
uri:: urn:visionclaw:concept:infrastructure:data-provenance
rdf-type:: owl:Class
same-as:: urn:visionclaw:concept:infrastructure:data-provenance
type:: owl:Class
context:: https://visionclaw.dreamlab-ai.systems/ns/v2
domain:: infrastructure
preferred-term:: Data Provenance
content-hash:: sha256-12-b1369e8a5203
legacy-term-id:: 20202
status:: draft
maturity:: mature
quality-score:: 0.35
authority-score:: 0.00
version:: 2.0.0
created:: 2026-04-26T00:00:00Z
modified:: 2026-04-26T13:00:00Z
public:: true

- ### Definition
  - A continuous process of recording and tracking the origin, lineage, and transformation history of data objects, enabling traceability, validation of data quality, and verification of authenticity throughout the data lifecycle.

- ### Semantic Classification
  - owl-class:: infrastructure:DataProvenance
  - owl-role:: Process
  - owl-inferred:: infrastructure:VirtualProcess
  - belongs-to-domain:: [[InfrastructureDomain]]
  - implemented-in-layer:: [[Data Layer]], [[Middleware Layer]]

- ### Relationships
  - has-part:: [[Provenance Recorder]], [[Lineage Tracker]], [[Audit Trail]], [[Timestamp Service]], [[Signature Validator]]
  - is-part-of:: [[Data Management]], [[Data Governance]], [[Trust Framework]]
  - requires:: [[Metadata]], [[Digital Signature]], [[Timestamp Authority]]
  - enables:: [[Provenance Verification]], [[Data Quality Assessment]], [[Compliance Audit]], [[Reproducibility]], [[Attribution]]
  - depends-on:: [[Identity Management]], [[Event Logging]], [[Blockchain]]

- ### Content
  Data Provenance — content pending enrichment.

- ### Provenance
  - bridges-to:: [[Blockchain]] (bc)
  - sources:: [[W3C PROV-O]], [[ETSI GR ARF 010]]
  - migration-date:: 2026-04-26T00:00:00Z
