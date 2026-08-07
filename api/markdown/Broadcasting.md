public:: true

# Broadcasting
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:8b7241e84c4e3481a49886318835dbd43170fe7102364251ff70aaeaf52fb55d",
  "@type": "Page",
  "vc:slug": "broadcasting",
  "title": "Broadcasting",
  "vc:public": true,
  "vc:outboundWikilinks": [
    {"@id": "urn:visionflow:linked:telecommunications", "vc:label": "Telecommunications"},
    {"@id": "urn:visionflow:linked:spectrum-allocation", "vc:label": "Spectrum Allocation"},
    {"@id": "urn:visionflow:linked:satellite-communication", "vc:label": "Satellite Communication"},
    {"@id": "urn:visionflow:linked:numpy", "vc:label": "NumPy"}
  ],
  "vc:schemaVersion": 2,
  "prov:wasAttributedTo": {"@id": "did:nostr:ontology-mesh"},
  "prov:generatedAtTime": {"@value": "2026-08-06T00:00:00Z", "@type": "xsd:dateTime"}
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:broadcasting",
  "@type": "Class",
  "label": "Broadcasting",
  "definition": "The one-to-many distribution of a signal or message from a single source to all receivers within reach, in contrast to unicast (one-to-one) and multicast (one-to-selected-group) delivery. In telecommunications it denotes terrestrial and satellite radio and television transmission over allocated spectrum, and by extension the broadcast primitives of computer networks, where a frame or packet is addressed to every node on a segment. The same word names a distinct but analogous mechanism in array computing, where NumPy-style broadcasting stretches arrays of differing shapes to a common shape so that element-wise operations apply one value across many without copying data.",
  "domain": "infrastructure",
  "maturity": "mature",
  "subClassOf": {"@id": "urn:ngm:class:telecommunications", "label": "Telecommunications"},
  "relations": {
    "dependsOn": [
      {"@id": "urn:ngm:class:spectrum-allocation", "label": "Spectrum Allocation"}
    ],
    "uses": [
      {"@id": "urn:ngm:class:wireless-communication", "label": "Wireless Communication"}
    ],
    "relatedTo": [
      {"@id": "urn:ngm:class:satellite-communication", "label": "Satellite Communication"},
      {"@id": "urn:ngm:class:numpy", "label": "NumPy"}
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
  - "The one-to-many distribution of a signal or message from a single source to all receivers within reach, in contrast to unicast (one-to-one) and multicast (one-to-selected-group) delivery. In telecommunications it denotes terrestrial and satellite radio and television transmission over allocated spectrum, and by extension the broadcast primitives of computer networks, where a frame or packet is addressed to every node on a segment. The same word names a distinct but analogous mechanism in array computing, where NumPy-style broadcasting stretches arrays of differing shapes to a common shape so that element-wise operations apply one value across many without copying data."

- ### Semantic Classification
  - owl-class:: infrastructure:Broadcasting
  - owl-role:: Process

- ### Relationships
  - is-subclass-of:: [[Telecommunications]]
  - depends-on:: [[Spectrum Allocation]]
  - related-to:: [[Satellite Communication]]
  - related-to:: [[NumPy]]

- ### Content

  ## Definition

  **Broadcasting** is the pattern of sending once and receiving many times. In its original telecommunications sense, a single transmitter radiates a programme over a licensed frequency band and every receiver in the coverage area picks it up simultaneously — the model of AM/FM radio, digital terrestrial television (DVB-T2, ATSC 3.0), and direct-to-home satellite services. Because a broadcast channel is consumed by everyone in range, its economics differ fundamentally from point-to-point links: the marginal cost of an additional listener is zero, but the spectrum it occupies must be exclusively reserved, making [[Spectrum Allocation]] the governing constraint on who may broadcast, where, and at what power. [[Satellite Communication]] extends the model to continental footprints, a single geostationary transponder reaching millions of dishes.

  Computer networking borrowed the term for its delivery taxonomy: a broadcast frame (Ethernet `FF:FF:FF:FF:FF:FF`) or packet (IPv4 subnet broadcast address) is processed by every host on the segment, sitting alongside unicast and multicast as one of the fundamental addressing modes. Protocols such as ARP and DHCP bootstrap themselves through broadcast precisely because they must reach nodes whose addresses are not yet known. The pattern recurs at higher levels wherever one sender fans out to all participants — gossip dissemination, pub/sub fan-out, and the broadcast collectives of parallel computing (for example `MPI_Bcast`).

  Numerical computing reuses the word for a third, precise meaning. In [[NumPy]] and the array frameworks that inherited its semantics (TensorFlow, PyTorch, JAX), *broadcasting* is the rule set by which arrays of different shapes combine in element-wise operations: dimensions are compared trailing-first, and any dimension of size one is virtually stretched to match its counterpart, so a scalar or row vector applies across a whole matrix without materialising copies. The metaphor is the same — one value transmitted to many positions — implemented with zero-stride views rather than radio waves.

  ## Technical Details

  - **Transmission broadcasting**: characterised by a shared downlink with no return channel; conditional access (encryption) rather than addressing controls who can decode. Digital standards (DVB, DAB+, ATSC) multiplex many programmes into one transport stream per channel.
  - **Network broadcast**: bounded by the broadcast domain — routers do not forward broadcasts, which is why large flat networks suffer broadcast storms and why IPv6 replaced broadcast entirely with well-known multicast groups.
  - **Array broadcasting rules (NumPy)**: two dimensions are compatible when they are equal or one of them is 1; the result shape takes the maximum along each axis. Misaligned shapes raise an error rather than silently recycling values, a deliberate contrast with R's vector recycling.

- ### Provenance
  - sources::
  - migration-date:: 2026-08-06T00:00:00Z
