public:: true
alias:: Near-Field Communication

# Near Field Communication
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:near-field-communication",
  "@type": "Page",
  "vc:slug": "near-field-communication",
  "title": "Near Field Communication",
  "vc:public": true,
  "vc:outboundWikilinks": [],
  "vc:schemaVersion": 2
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:near-field-communication",
  "@type": "Class",
  "label": "Near Field Communication",
  "definition": "Near Field Communication (NFC) is a short-range wireless communication technology operating at 13.56 MHz that enables contactless data exchange between devices within approximately 4 centimetres. Based on inductive coupling and derived from RFID standards, NFC supports three operating modes: card emulation (device acts as a smart card), reader/writer (device reads or writes NFC tags), and peer-to-peer (two active devices exchange data). It underpins contactless payments, identity verification, and rapid device pairing.",
  "domain": "hardware",
  "maturity": "established",
  "subClassOf": [{"@id": "urn:ngm:class:communication-protocol", "label": "Communication Protocol"}],
  "relations": {
    "enables": [
      {"@id": "urn:ngm:class:digital-payments", "label": "Digital Payments"},
      {"@id": "urn:ngm:class:access-control-system", "label": "Access Control System"},
      {"@id": "urn:ngm:class:digital-payment-system", "label": "Digital Payment System"}
    ],
    "relatedTo": [
      {"@id": "urn:ngm:class:embedded-systems", "label": "Embedded Systems"},
      {"@id": "urn:ngm:class:io-t-sensor-network", "label": "IoT Sensor Network"},
      {"@id": "urn:ngm:class:communication-interface", "label": "Communication Interface"}
    ],
    "uses": [
      {"@id": "urn:ngm:class:hardware-security-module", "label": "Hardware Security Module"}
    ]
  },
  "quality": 0.8
}
```

- ### Definition
  - [[Near Field Communication]] is a short-range radio frequency technology that enables bidirectional contactless data exchange between two NFC-enabled devices or between a device and a passive tag, supporting [[Digital Payments]], [[Access Control System]] applications, and rapid [[Embedded Systems]] pairing across distances of a few centimetres.

- ### Relationships
  - [[Near Field Communication]] relies on inductive coupling through [[Communication Interface]] hardware integrated into [[Embedded Systems]] such as smartphones and payment terminals, enabling [[Digital Payment System]] use cases including Apple Pay and Google Pay. Security is provided by a [[Hardware Security Module]] (secure element) that stores cryptographic keys, and the technology integrates with [[IoT Sensor Network]] deployments through passive NFC tags that communicate without battery power.

- ### Content
  - NFC evolved from RFID technology with the first specification published by Philips and Sony in 2004, subsequently forming the NFC Forum standardisation body. The 13.56 MHz frequency was chosen for its ability to couple inductively through the human hand without being blocked by the body, and the ISO/IEC 18092 and ISO/IEC 14443 standards provided the physical and protocol layer definitions. By 2007 Nokia introduced the first NFC-capable handset, but mass adoption awaited the launch of Apple Pay in 2014, which triggered rapid merchant terminal upgrades globally.

  - The underlying mechanism of NFC uses magnetic field induction: the initiating device generates a 13.56 MHz alternating magnetic field that induces current in the target's antenna coil, powering passive tags and enabling data encoding via load modulation at data rates of 106, 212, or 424 kbit/s. In card emulation mode, the host device's secure element (either an embedded SE or an HCE software implementation) presents a virtual smart card credential to a payment terminal, replicating the ISO 7816 APDU command interface. The short range is both a feature and a security property, requiring deliberate proximity to initiate a transaction.

  - NFC is commercially significant in contactless payments, public transport ticketing (Oyster, Suica), electronic identity documents, and access control systems. The global contactless payment market exceeded 60 billion transactions annually by 2023. Beyond payments, NFC tags embedded in physical products enable anti-counterfeiting provenance chains, smart packaging that links to product information pages, and industrial asset tracking. Healthcare applications include patient identification wristbands and medication verification workflows.

  - In 2024-2025, NFC is being extended into digital credential contexts: ISO 18013-5 mobile driving licences use NFC for in-person identity verification. The NFC Forum released its 2.0 specification adding improved multi-device scenarios and enhanced security handshake requirements. Integration with ultra-wideband (UWB) for precise spatial positioning alongside NFC for authentication is emerging in automotive digital key use cases (CCC Digital Key 3.0), and Apple's opening of the iOS NFC secure element to third-party apps in the EU is reshaping the competitive landscape for mobile payments.

