public:: true

# Ssl Termination
```json-ld
{ "@context":"https://narrativegoldmine.com/ns/v1", "@id":"urn:visionflow:page:ssl-termination", "@type":"Page", "title":"Ssl Termination", "vc:slug":"ssl-termination", "vc:public":true, "vc:schemaVersion":2, "vc:outboundWikilinks":[] }
```
```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:ssl-termination",
  "@type": "Class",
  "label": "Ssl Termination",
  "definition": "SSL termination is the practice of decrypting inbound TLS-encrypted traffic at a dedicated network endpoint, typically a reverse proxy or load balancer, before forwarding the now-plaintext requests to backend servers. By centralising the cryptographic handshake and certificate management at the edge, it offloads CPU-intensive encryption work from application servers and simplifies certificate lifecycle administration. The terminating node holds the private keys and performs the handshake, then routes traffic over the internal network. It is a foundational pattern in modern web infrastructure, often paired with re-encryption to backends for end-to-end security.",
  "domain": "infrastructure",
  "maturity": "established",
  "subClassOf": [
    {
      "@id": "urn:ngm:class:reverse-proxy",
      "label": "Reverse Proxy"
    }
  ],
  "relations": {
    "uses": [
      {
        "@id": "urn:ngm:class:transport-layer-security",
        "label": "Transport Layer Security"
      },
      {
        "@id": "urn:ngm:class:tls",
        "label": "TLS"
      },
      {
        "@id": "urn:ngm:class:cryptography",
        "label": "Cryptography"
      }
    ],
    "hasPart": [
      {
        "@id": "urn:ngm:class:tls",
        "label": "TLS"
      }
    ],
    "implements": [
      {
        "@id": "urn:ngm:class:network-security",
        "label": "Network Security"
      }
    ],
    "partOf": [
      {
        "@id": "urn:ngm:class:reverse-proxy",
        "label": "Reverse Proxy"
      },
      {
        "@id": "urn:ngm:class:load-balancer",
        "label": "Load Balancer"
      }
    ],
    "enables": [
      {
        "@id": "urn:ngm:class:http",
        "label": "HTTPS"
      }
    ],
    "relatedTo": [
      {
        "@id": "urn:ngm:class:load-balancer",
        "label": "Load Balancer"
      },
      {
        "@id": "urn:ngm:class:caching",
        "label": "Caching"
      },
      {
        "@id": "urn:ngm:class:content-delivery-network",
        "label": "Content Delivery Network"
      },
      {
        "@id": "urn:ngm:class:edge-computing",
        "label": "Edge Computing"
      },
      {
        "@id": "urn:ngm:class:http",
        "label": "HTTP"
      }
    ],
    "supports": [
      {
        "@id": "urn:ngm:class:infrastructure",
        "label": "Infrastructure"
      }
    ]
  },
  "sameAs": [],
  "quality": 0.62,
  "provenance": {
    "attributedTo": "did:nostr:ontology-mesh",
    "generatedAt": "2026-06-15T00:00:00Z",
    "inferenceRule": "GapMaterialisation"
  }
}
```
- ### Definition
- SSL termination decrypts inbound [[Transport Layer Security]] traffic at a [[Reverse Proxy]] or [[Load Balancer]] edge, offloading [[Cryptography]] from backends and centralising certificate management. It is the entry point that enables [[HTTPS]] while simplifying [[Network Security]] administration.
- ### Overview
- Performing the TLS handshake is computationally expensive; concentrating it at a single tier frees application servers to focus on business logic.
- The terminating node owns the certificates and private keys, presents them to clients, and decrypts the session, then proxies cleartext or re-encrypts to backends.
- This pattern is ubiquitous in load balancers, API gateways, and CDNs.
- ### Mechanisms
- The edge node completes the [[TLS]] handshake and session-key negotiation with the client.
- Decrypted requests are routed to backend pools, optionally over a re-encrypted internal channel.
- Certificate rotation, OCSP stapling, and cipher policy are managed centrally.
- ### Applications
- Web application delivery behind a [[Load Balancer]].
- API gateways performing authentication after decryption.
- Edge acceleration at a [[Content Delivery Network]] or [[Edge Computing]] tier.
- Combining decryption with [[Caching]] for cacheable responses.
- ### Relationships
- uses:: [[Transport Layer Security]]
- uses:: [[TLS]]
- uses:: [[Cryptography]]
- hasPart:: [[TLS]]
- implements:: [[Network Security]]
- partOf:: [[Reverse Proxy]]
- partOf:: [[Load Balancer]]
- enables:: [[HTTPS]]
- relatedTo:: [[Load Balancer]]
- relatedTo:: [[Caching]]
- relatedTo:: [[Content Delivery Network]]
- relatedTo:: [[Edge Computing]]
- relatedTo:: [[HTTP]]
- supports:: [[Infrastructure]]
- ### Provenance
- updated:: 2026-06-15
