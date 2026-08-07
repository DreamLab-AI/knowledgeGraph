public:: true

# Resolver
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:439c3635079b57a69aff22860369462fb9330c300fa4dbc70426f087192e369d",
  "@type": "Page",
  "vc:slug": "resolver",
  "title": "Resolver",
  "vc:public": true,
  "vc:outboundWikilinks": [
    {"@id": "urn:visionflow:linked:middleware", "vc:label": "Middleware"},
    {"@id": "urn:visionflow:linked:gs1-digital-link", "vc:label": "Gs1 Digital Link"},
    {"@id": "urn:visionflow:linked:proprioceptive-sensor", "vc:label": "Proprioceptive Sensor"},
    {"@id": "urn:visionflow:linked:domain-name-system", "vc:label": "Domain Name System"},
    {"@id": "urn:visionflow:linked:interoperability", "vc:label": "Interoperability"},
    {"@id": "urn:visionflow:linked:rotary-encoder", "vc:label": "Rotary Encoder"}
  ],
  "vc:schemaVersion": 2,
  "prov:wasAttributedTo": {"@id": "did:nostr:ontology-mesh"},
  "prov:generatedAtTime": {"@value": "2026-08-06T00:00:00Z", "@type": "xsd:dateTime"}
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:resolver",
  "@type": "Class",
  "label": "Resolver",
  "definition": "A resolver is a component that takes an identifier and returns the resource, address, or value it stands for. In identification infrastructure such as GS1 Digital Link and the Domain Name System, a resolver service receives a request containing a structured identifier and redirects the requester to one of potentially many linked resources — product information, traceability records, or network addresses — chosen by link type and context. The term also names the electromechanical rotary transformer used in robotics and motor control to resolve a shaft's absolute angular position from induced analogue signals.",
  "domain": "standards",
  "maturity": "mature",
  "subClassOf": {
    "@id": "urn:ngm:class:middleware",
    "label": "Middleware"
  },
  "relations": {
    "partOf": [
      {"@id": "urn:ngm:class:gs1-digital-link", "label": "Gs1 Digital Link"},
      {"@id": "urn:ngm:class:proprioceptive-sensor", "label": "Proprioceptive Sensor"}
    ],
    "uses": [
      {"@id": "urn:ngm:class:unique-identifier", "label": "Unique Identifier"}
    ],
    "enables": [
      {"@id": "urn:ngm:class:interoperability", "label": "Interoperability"}
    ],
    "relatedTo": [
      {"@id": "urn:ngm:class:domain-name-system", "label": "Domain Name System"},
      {"@id": "urn:ngm:class:rotary-encoder", "label": "Rotary Encoder"}
    ]
  },
  "quality": 0.7,
  "provenance": {
    "attributedTo": "did:nostr:ontology-mesh",
    "generatedAt": "2026-08-06T00:00:00Z",
    "inferenceRule": "SwarmRepair"
  }
}
```

- ### Definition
  - "A resolver is a component that takes an identifier and returns the resource, address, or value it stands for. In identification infrastructure such as GS1 Digital Link and the Domain Name System, a resolver service receives a request containing a structured identifier and redirects the requester to one of potentially many linked resources — product information, traceability records, or network addresses — chosen by link type and context. The term also names the electromechanical rotary transformer used in robotics and motor control to resolve a shaft's absolute angular position from induced analogue signals."

- ### Semantic Classification
  - owl-class:: standards:Resolver
  - owl-role:: Artifact

- ### Relationships
  - is-subclass-of:: [[Middleware]]
  - part-of:: [[Gs1 Digital Link]]
  - enables:: [[Interoperability]]
  - related-to:: [[Domain Name System]]

- ### Content

  ## Definition

  A **resolver** performs indirection: given an identifier, it answers the question "what does this stand for, right now, for this requester?" The pattern recurs wherever identification is separated from location. The [[Domain Name System]] resolver maps a host name to an IP address; a DID resolver maps a decentralised identifier to its DID document; and in the GS1 ecosystem a [[Gs1 Digital Link]] resolver maps a product identifier embedded in a web URI to the set of online resources associated with that product.

  In the GS1 Digital Link architecture (ISO/IEC 18975 covers the resolution mechanism), scanning a QR code on a product yields a URI such as `https://id.example.com/01/09506000134352`, where `01` introduces the Global Trade Item Number. The resolver hosted at that domain inspects the identifier and any qualifiers (batch, serial number) together with requested *link types* — `gs1:pip` for product information, `gs1:traceability` for provenance, `gs1:recallStatus`, and so on — and issues an HTTP redirect to the appropriate destination. One physical data carrier can therefore serve consumers, regulators, recyclers, and supply-chain partners with different resources, and brand owners can change destinations without reprinting packaging. This late binding is what makes resolvers the linchpin of [[Interoperability]] between physical products and the web, including EU Digital Product Passport architectures.

  The same word names an unrelated but equally established device: the **electromechanical resolver**, a rotary transformer used as an absolute angle sensor. A reference winding excited with an AC signal induces voltages in two stator windings arranged at 90°, proportional to the sine and cosine of the shaft angle; a resolver-to-digital converter recovers the angle from the ratio. Because the device is brushless, contactless, and contains no electronics at the point of measurement, it tolerates heat, vibration, and radiation that would destroy optical encoders, which is why it appears as a component of the [[Proprioceptive Sensor]] suite in industrial robots, servo drives, and aerospace actuators, alongside the [[Rotary Encoder]] it competes with.

  ## Technical Details

  Identifier resolvers share a common design vocabulary: a well-known entry point (DNS roots, `/.well-known/gs1resolver` description files), a syntax for decomposing the identifier, a link registry mapping identifiers and link types to destinations, and content negotiation so that humans receive web pages while machines receive structured data (JSON-LD linksets per RFC 9264). Operational concerns mirror DNS: caching and TTLs, redundancy and anycast deployment for availability, and governance over who may write entries for a given identifier range. GS1 operates a global resolver at `id.gs1.org`, with brand owners able to delegate resolution for their own prefixes to private resolvers — a federated model deliberately analogous to DNS zone delegation.
