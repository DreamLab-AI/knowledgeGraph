public:: true

# Device Identity

```json-ld
{ "@context":"https://narrativegoldmine.com/ns/v1", "@id":"urn:visionflow:page:device-identity", "@type":"Page", "title":"Device Identity", "vc:slug":"device-identity", "vc:public":true, "vc:schemaVersion":2, "vc:outboundWikilinks":[] }
```

```json-ld
{
  "@context":"https://narrativegoldmine.com/ns/v2.jsonld",
  "@id":"urn:ngm:class:device-identity",
  "@type":"Class",
  "label":"Device Identity",
  "definition":"Device identity is a unique, verifiable credential bound to a physical device that allows it to authenticate itself to a network, service, or other devices independently of any human user. It is typically established through a hardware root of trust, such as a TPM or secure element, that stores a cryptographic key pair generated or provisioned at manufacture. In IoT and sensor network deployments, device identity is foundational to zero-trust access control, allowing gateways and platforms to verify which physical device is sending data before admitting it to the network. Without it, spoofed or cloned devices can inject false data or gain unauthorised network access.",
  "domain":"security",
  "maturity":"established",
  "subClassOf":[{"@id":"urn:ngm:class:digital-identity","label":"Digital Identity"}],
  "relations":{}
}
```

- ### Definition
	- Device identity is a unique, verifiable credential bound to a physical device that allows it to authenticate itself to a network, service, or other devices independently of any human user. It is typically established through a hardware root of trust, such as a TPM or secure element, that stores a cryptographic key pair generated or provisioned at manufacture. In IoT and sensor network deployments, device identity is foundational to zero-trust access control, allowing gateways and platforms to verify which physical device is sending data before admitting it to the network. Without it, spoofed or cloned devices can inject false data or gain unauthorised network access.
- ### Relationships
	- subClassOf:: [[Digital Identity]]
