A URI (Uniform Resource Identifier) is a compact sequence of characters that uniquely identifies an abstract or physical resource on a network or within a namespace. It generalises both locators, which describe how to access a resource, and names, which identify a resource independently of access, under a single syntactic framework of scheme, authority, path, query and fragment. URIs are foundational to the architecture of the World Wide Web and the Semantic Web, where they serve as globally unique identifiers for documents, data and entities.

### Overview

- The URI provides the single, uniform way to refer to anything on the web, whether a document to be fetched, an abstract concept, or a real-world entity. By distinguishing scheme, authority, path, query and fragment, the URI syntax accommodates locators such as web addresses and pure names such as URNs within one framework.
- URIs are the connective tissue of the Semantic Web: every resource, property and class in linked data is named by a URI, allowing independently published datasets to interlink globally.

### Key aspects

- Generality: a URI may be a locator (URL), a name (URN), or both, depending on its scheme.
- Global uniqueness: hierarchical scheme and authority components prevent collisions across the network.
- Dereferenceability: many URIs can be resolved to a representation, while others serve purely as identifiers.
- Stability: persistent URIs are designed to remain valid over long timescales.

### Mechanisms

- The scheme selects an interpretation and, for locators, an access protocol.
- Authority, path and query components address the resource within the scheme's namespace.
- Fragment identifiers select a part of, or a secondary resource related to, the primary resource.

### Applications

- Web addressing, REST API resource design, linked data and RDF triples, decentralised identifiers and persistent scholarly identifiers.

### Provenance

