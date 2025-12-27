- ### OntologyBlock
  id:: namespace-declarations-ontology
  collapsed:: true
	- ontology:: true
	- public-access:: true
	- term-id:: MV-9977
	- source-domain:: mv
	- preferred-term:: Namespace Declarations
	- status:: active
	- definition:: XML and RDF syntax constructs that associate short prefix identifiers with full namespace URIs, enabling the use of qualified names (QNames) to abbreviate long IRIs into human-readable yet machine-processable references in semantic web documents.
	- owl:class:: mv:NamespaceDeclarations
	- belongsToDomain:: [[metaverse]]
	- #### Relationships
	  id:: namespace-declarations-relationships
	  collapsed:: true
		- is-subclass-of:: [[Semantic Web Standards]]
		- related-to:: [[RDF]]
		- related-to:: [[XML]]
		- related-to:: [[Semantic Web]]
		- enables:: [[Ontology Interoperability]]
	- #### Technical Details
	  collapsed:: true
		- Declared using xmlns:prefix syntax in XML documents
		- RDF namespace IRI: http://www.w3.org/1999/02/22-rdf-syntax-ns#
		- QNames consist of namespace prefix and local name
		- Prefixed Names (PNames) extend QNames with more flexible abbreviation
		- INamespaceMapper interface manages prefix-to-URI mappings
	- #### Standard Namespaces
	  collapsed:: true
		- rdf: for RDF syntax elements
		- rdfs: for RDF Schema vocabulary
		- owl: for OWL ontology language
		- xsd: for XML Schema datatypes
		- Custom namespaces for domain-specific vocabularies

