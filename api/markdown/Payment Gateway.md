public:: true

# Payment Gateway
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:payment-gateway",
  "@type": "Page",
  "vc:slug": "payment-gateway",
  "title": "Payment Gateway",
  "vc:public": true,
  "vc:outboundWikilinks": [],
  "vc:schemaVersion": 2
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:payment-gateway",
  "@type": "Class",
  "label": "Payment Gateway",
  "definition": "A Payment Gateway is a technology service that authorises, processes, and routes financial transactions between buyers and merchants, acting as the intermediary between a merchant's point-of-sale or e-commerce system and the acquiring bank or payment network. It encrypts sensitive payment credentials, communicates with card networks and issuing banks to obtain authorisation, and returns the result to the merchant in real time. Modern payment gateways provide APIs, SDKs, fraud detection, currency conversion, and compliance tooling, and increasingly support cryptocurrency payments and programmable settlement rails alongside traditional card and bank transfer methods. Payment gateways are foundational infrastructure for e-commerce and digital commerce ecosystems.",
  "domain": "finance",
  "maturity": "established",
  "subClassOf": [{"@id": "urn:ngm:class:payment-system", "label": "Payment System"}],
  "relations": {
    "relatedTo": [
      {"@id": "urn:ngm:class:digital-payment-system", "label": "Digital Payment System"},
      {"@id": "urn:ngm:class:e-commerce", "label": "E-Commerce"},
      {"@id": "urn:ngm:class:fraud-detection", "label": "Fraud Detection"}
    ],
    "uses": [
      {"@id": "urn:ngm:class:api-gateway", "label": "API Gateway"},
      {"@id": "urn:ngm:class:encryption", "label": "Encryption"},
      {"@id": "urn:ngm:class:digital-wallet", "label": "Digital Wallet"}
    ],
    "enables": [
      {"@id": "urn:ngm:class:micropayment", "label": "Micropayment"},
      {"@id": "urn:ngm:class:payment-token", "label": "Payment Token"},
      {"@id": "urn:ngm:class:x402-and-l402-payment-protocols", "label": "x402 and l402 payment protocols"}
    ]
  },
  "quality": 0.8
}
```

- ### Definition
  - A Payment Gateway is the secure intermediary infrastructure that authorises and routes transactions between merchants and financial networks, forming the core of [[Digital Payment System]] ecosystems and increasingly enabling [[Micropayment]] and cryptocurrency settlement alongside traditional card rails.
- ### Relationships
  - Payment gateways depend on [[API Gateway]] infrastructure to expose developer-facing integration surfaces and connect to acquiring banks and card networks. [[Encryption]] is integral to PCI DSS compliance, securing card data in transit and at rest. [[Digital Wallet]] providers represent both partners and competitors to traditional payment gateways, particularly in mobile commerce. [[Fraud Detection]] capabilities are now a core differentiator among gateway providers. Emerging protocols such as [[x402 and l402 payment protocols]] represent the HTTP-native payment layer that could route AI agent micropayments through gateway infrastructure.
- ### Content
  - Payment gateways emerged in the late 1990s as internet commerce required a secure mechanism to accept card payments without the merchant directly handling card numbers. Early gateways like Authorize.Net and Verisign Payment Services provided hosted payment forms and settlement services. The introduction of the Payment Card Industry Data Security Standard (PCI DSS) in 2004 formalised the security obligations of any entity handling cardholder data, cementing the gateway as a compliance-isolation layer between merchants and raw payment credentials.

  - The architecture of a modern payment gateway involves multiple hops: the cardholder's browser or app submits payment data to the gateway's tokenisation endpoint; the gateway exchanges the raw card number for a payment token, forwards an authorisation request to the card network (Visa, Mastercard), which routes to the issuing bank for approval; the bank returns an authorisation code back through the network to the gateway, which relays the result to the merchant. This entire round-trip typically completes in under two seconds, with the gateway handling encryption, message formatting (ISO 8583, ISO 20022), and error recovery.

  - The competitive landscape for payment gateways has been transformed by Stripe, Adyen, and Braintree, which introduced developer-first API designs, globally unified settlement infrastructure, and sophisticated platform monetisation models. These providers moved gateway functionality from hardware terminals and proprietary protocols to web APIs, enabling rapid integration and significantly lowering the barrier to entry for e-commerce merchants. Stripe's revenue and merchant data network effects created strong market concentration in the developer-focused segment.

  - Cryptocurrency payment gateways—provided by BitPay, Coinbase Commerce, and Lightning Network-based providers—extend the concept to permissionless, programmable settlement. Rather than routing through card networks, these gateways accept on-chain or off-chain cryptocurrency payments, apply exchange rate conversion, and optionally settle to fiat for the merchant. The [[Lightning Network]] enables near-instant, near-zero-fee bitcoin micropayments, making gateway-mediated machine-to-machine payments for API calls, AI inference, and agentic tasks technically feasible through protocols like L402.
