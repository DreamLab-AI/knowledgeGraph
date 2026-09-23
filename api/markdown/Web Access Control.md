
Web Access Control (WAC) is a decentralised authorisation system for web resources that uses RDF-based access control lists to specify which agents may read, write, append, or control linked-data resources identified by URIs. It is a core mechanism in the Solid ecosystem, letting individuals govern access to their personal data pods using WebID-based identity. WAC decouples authorisation from any central server, aligning with self-sovereign data principles.

- ### Content
  - Each protected resource references an ACL document whose authorizations grant Read, Write, Append, or Control modes to specific agents, groups, or the public. Because rules are themselves linked data, access policies are portable across servers; the model's trade-offs include the complexity of managing fine-grained ACLs at scale and reliance on robust WebID authentication.

