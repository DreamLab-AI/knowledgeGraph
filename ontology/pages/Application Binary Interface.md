public:: true

# Application Binary Interface
```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v1",
  "@id": "urn:visionflow:page:application-binary-interface",
  "@type": "Page",
  "title": "Application Binary Interface",
  "vc:slug": "application-binary-interface",
  "vc:public": true,
  "vc:schemaVersion": 2,
  "vc:outboundWikilinks": []
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:application-binary-interface",
  "@type": "Class",
  "label": "Application Binary Interface",
  "definition": "An application binary interface (ABI) is the specification of how software components interact at the binary level, defining calling conventions, data layout and, for smart contracts, the encoding used to invoke functions and pass arguments. On blockchains such as Ethereum, a contract's ABI describes its callable functions, events and parameter types in a machine-readable form that clients use to encode transactions and decode returned data. It is what allows external tools, wallets and other contracts to interact correctly with a deployed contract without access to its source code.",
  "domain": "blockchain",
  "maturity": "established",
  "subClassOf": [
    {
      "@id": "urn:ngm:class:interface",
      "label": "Interface"
    }
  ],
  "relations": {
    "relatedTo": [
      {
        "@id": "urn:ngm:class:token-standard",
        "label": "Token Standard"
      }
    ]
  },
  "quality": 0.65
}
```

- ### Definition
  - An application binary interface (ABI) is the specification of how software components interact at the binary level, defining calling conventions, data layout and, for smart contracts, the encoding used to invoke functions and pass arguments.
  - It is a subclass of [[Interface]].
- ### Content
  - An application binary interface (ABI) is the specification of how software components interact at the binary level, defining calling conventions, data layout and, for smart contracts, the encoding used to invoke functions and pass arguments. On blockchains such as Ethereum, a contract's ABI describes its callable functions, events and parameter types in a machine-readable form that clients use to encode transactions and decode returned data. It is what allows external tools, wallets and other contracts to interact correctly with a deployed contract without access to its source code.
