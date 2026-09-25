A namespace is a named scope that groups a set of identifiers so that names can be reused without collision across different contexts. By qualifying each name with its containing scope, a namespace lets the same local label denote distinct entities in different parts of a system. The concept appears across programming languages, XML and RDF vocabularies, file systems, DNS, and container orchestration as a fundamental mechanism for organising and disambiguating names.

- A namespace is a named scope that groups identifiers to prevent name collisions across contexts. It is a foundational [[Data]] organisation concept, expressed through [[URI]] qualification in [[XML]] and RDF, and mirrored in [[DNS]] and [[Database]] catalogues.
- By prefixing local names with a scope, identical labels can safely denote different entities.

### Overview

- Without namespaces, large systems suffer name clashes as independently developed components reuse common terms.
- A namespace provides a container — often identified by a URI, a prefix, or a path — under which names are unique.
- The same mechanism recurs across packages in programming languages, vocabularies in XML and RDF, schemas in databases, and tenants in container platforms.

### Key aspects

- Scoping: a name is interpreted relative to its enclosing namespace.
- Disambiguation: fully qualified names combine namespace and local name to be globally unique.
- Modularity: independent modules can define overlapping local names without conflict.
- Resolution: tooling maps a qualified name back to the entity it denotes.

### Mechanisms

- Prefix binding: a short prefix is bound to a namespace [[URI]] and prepended to local names.
- Hierarchical paths: nested scopes form dotted or slash-delimited qualified names.
- Default namespaces: a context can declare a fallback namespace for unprefixed names.
- Catalogues: databases and registries group objects under named schemas or namespaces.

### Applications

- XML and RDF vocabularies disambiguate element and property names via [[URI]] namespaces.
- Programming languages group symbols into packages or modules to enable [[Metadata]]-rich tooling.
- [[Database]] schemas partition tables and views into logical scopes.
- Container orchestration isolates resources per tenant namespace, supporting [[Data Governance]].

### Provenance

