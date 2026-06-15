- ### Definition
  - [[Data Exchange]] is the governed transfer of [[data format]]-compliant information between parties using [[API]]s, file protocols, or message queues, underpinned by technical and legal agreements that maintain [[data governance]].
  - It enables [[interoperability]] between heterogeneous systems without requiring shared internal architectures.
  - Modern data exchange extends to data spaces and data marketplaces where [[data sovereignty]] and consent are first-class concerns.

- ### Overview
  - EDI (Electronic Data Interchange) was the first formalised data exchange standard, enabling B2B transactions in manufacturing and retail from the 1960s.
  - REST and GraphQL APIs now dominate real-time data exchange in web and mobile contexts.
  - Data spaces (e.g. GAIA-X, International Data Spaces) extend exchange with trust frameworks, usage policies, and certified connector software.
  - FHIR (Fast Healthcare Interoperability Resources) exemplifies domain-specific data exchange standardisation.
  - Open Banking regulations (PSD2 in Europe) mandate data exchange between banks and licensed third parties.

- ### Key aspects
  - Schema agreement: sender and receiver must agree on data structure, field semantics, and encoding.
  - Transport security: TLS/mTLS encrypts data in transit; signatures verify data origin.
  - Consent and access control: OAuth 2.0 and data sharing agreements govern who receives what data.
  - Lineage and audit: provenance metadata enables downstream accountability.
  - Transformation: ETL/ELT pipelines bridge schema mismatches between exchanging parties.

- ### Mechanisms
  - REST APIs expose resources over HTTP with JSON/XML payloads; versioning manages schema evolution.
  - Message brokers (Kafka, RabbitMQ) decouple producers and consumers in asynchronous exchange.
  - GraphQL enables consumer-driven query composition, reducing over-fetching.
  - SFTP and batch file transfer remain relevant in regulated industries with legacy systems.
  - Blockchain-based data exchange adds immutable provenance and token-gated access control.

- ### Applications
  - [[Supply Chain]] visibility: sharing shipment, inventory, and demand data across trading partners.
  - [[Open Banking]]: account data and payment initiation APIs between banks and fintechs.
  - Healthcare: patient record portability between providers using FHIR APIs.
  - Smart city: sensor data exchange between municipalities and service operators.
  - Academic research: dataset sharing via repositories adhering to FAIR data principles.

- ### Relationships
  - enables:: [[Interoperability]]
  - enables:: [[Data Integration]]
  - enables:: [[Open Data]]
  - uses:: [[API]]
  - uses:: [[Data Format]]
  - uses:: [[Encryption]]
  - dependsOn:: [[Data Governance]]
  - relatedTo:: [[Data Pipeline]]
  - supports:: [[Supply Chain]]
  - supports:: [[Open Banking]]
  - standardizedBy:: [[Standards]]
  - bridgesTo:: [[Data Sovereignty]]

- ### Provenance
  - updated:: 2026-06-15