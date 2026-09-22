public:: true

# Passkey

```json-ld
{ "@context":"https://narrativegoldmine.com/ns/v1", "@id":"urn:visionflow:page:passkey", "@type":"Page", "title":"Passkey", "vc:slug":"passkey", "vc:public":true, "vc:schemaVersion":2, "vc:outboundWikilinks":[] }
```

```json-ld
{
  "@context":"https://narrativegoldmine.com/ns/v2.jsonld",
  "@id":"urn:ngm:class:passkey",
  "@type":"Class",
  "label":"Passkey",
  "definition":"A passkey is a phishing-resistant, passwordless credential built on WebAuthn and FIDO2 public-key cryptography, stored on a device or synced across a user's devices via a platform cloud account. Authentication proceeds by the device signing a server-issued challenge with a private key that never leaves secure hardware, eliminating shared secrets that can be phished, leaked, or reused. Passkeys are backed by biometric or PIN unlock at the device level and are promoted jointly by Apple, Google, and Microsoft as a replacement for passwords. They require a compatible authenticator and relying-party support to function.",
  "domain":"security",
  "maturity":"established",
  "subClassOf":[{"@id":"urn:ngm:class:authentication-mechanism","label":"Authentication Mechanism"}],
  "relations":{}
}
```

- ### Definition
	- A passkey is a phishing-resistant, passwordless credential built on WebAuthn and FIDO2 public-key cryptography, stored on a device or synced across a user's devices via a platform cloud account. Authentication proceeds by the device signing a server-issued challenge with a private key that never leaves secure hardware, eliminating shared secrets that can be phished, leaked, or reused. Passkeys are backed by biometric or PIN unlock at the device level and are promoted jointly by Apple, Google, and Microsoft as a replacement for passwords. They require a compatible authenticator and relying-party support to function.
- ### Relationships
	- subClassOf:: [[Authentication Mechanism]]
