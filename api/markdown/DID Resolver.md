A DID resolver is a component that takes a Decentralized Identifier (DID) and returns its associated DID document containing public keys, verification methods, and service endpoints. It implements the W3C DID Resolution specification, dispatching to method-specific drivers (e.g. did:web, did:ion, did:key) to locate and verify the document. Resolvers are the lookup layer that makes DIDs actionable for authentication and credential exchange.

### Content

- Resolution may hit a blockchain, web server, or peer protocol depending on the DID method, returning verification material and service endpoints. Universal resolvers aggregate many method drivers behind one interface; key concerns are caching, trust in the underlying verifiable data registry, and resistance to spoofed documents.

