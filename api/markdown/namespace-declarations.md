- ### Definition
  - XML and RDF syntax constructs that associate short prefix identifiers with full namespace URIs, enabling the use of qualified names (QNames) to abbreviate long IRIs into human-readable yet machine-processable references in semantic web documents.

- ### Semantic Classification
  - owl-class:: spatial-computing:NamespaceDeclarations
  - owl-role:: Concept
  - belongs-to-domain:: [[metaverse]]

- ### Relationships
  - is-subclass-of:: [[Semantic Web Standards]]
  - enables:: [[Ontology Interoperability]]

- ### Content

  - #### Technical Details
		- Declared using xmlns:prefix syntax in XML documents
		- RDF namespace IRI: http://www.w3.org/1999/02/22-rdf-syntax-ns#
		- QNames consist of namespace prefix and local name
		- Prefixed Names (PNames) extend QNames with more flexible abbreviation
		- INamespaceMapper interface manages prefix-to-URI mappings
  - #### Standard Namespaces
		- rdf: for RDF syntax elements
		- rdfs: for RDF Schema vocabulary
		- owl: for OWL ontology language
		- xsd: for XML Schema datatypes
		- Custom namespaces for domain-specific vocabularies

- ### Provenance
  - sources::
  - migration-date:: 2026-04-26T00:00:00Z