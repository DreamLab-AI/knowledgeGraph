public:: true

# Code Signing
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:code-signing",
  "@type": "Page",
  "vc:slug": "code-signing",
  "title": "Code Signing",
  "vc:public": true,
  "vc:outboundWikilinks": [],
  "vc:schemaVersion": 2
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:code-signing",
  "@type": "Class",
  "label": "Code Signing",
  "definition": "Code Signing is a cryptographic practice in which software publishers digitally sign executables, scripts, container images, and other software artefacts using a private key, enabling recipients to verify the artefact's authenticity and integrity through the corresponding public key certificate. Implemented via asymmetric cryptography and X.509 certificate chains anchored to trusted Certificate Authorities or transparency logs, code signing is a fundamental control in software supply chain security, preventing the distribution of tampered or malicious software. Modern approaches include keyless signing via short-lived certificates and cryptographic transparency logs.",
  "domain": "security",
  "maturity": "established",
  "subClassOf": [
    {
      "@id": "urn:ngm:class:cryptographic-signing",
      "label": "Cryptographic Signing"
    }
  ],
  "relations": {
    "uses": [
      {
        "@id": "urn:ngm:class:digital-signature",
        "label": "Digital Signature"
      },
      {
        "@id": "urn:ngm:class:public-key-infrastructure",
        "label": "Public Key Infrastructure"
      },
      {
        "@id": "urn:ngm:class:certificate-authority",
        "label": "Certificate Authority"
      },
      {
        "@id": "urn:ngm:class:asymmetric-cryptography",
        "label": "Asymmetric Cryptography"
      },
      {
        "@id": "urn:ngm:class:x-509-certificate",
        "label": "X.509 Certificate"
      },
      {
        "@id": "urn:ngm:class:cryptographic-hash-function",
        "label": "Cryptographic Hash Function"
      }
    ],
    "enables": [
      {
        "@id": "urn:ngm:class:supply-chain-traceability",
        "label": "Supply Chain Traceability"
      },
      {
        "@id": "urn:ngm:class:provenance-tracking",
        "label": "Provenance Tracking"
      },
      {
        "@id": "urn:ngm:class:trusted-execution-environment",
        "label": "Trusted Execution Environment"
      },
      {
        "@id": "urn:ngm:class:secure-boot",
        "label": "Secure Boot"
      }
    ],
    "requires": [
      {
        "@id": "urn:ngm:class:key-management",
        "label": "Private Key Management"
      },
      {
        "@id": "urn:ngm:class:certificate-revocation",
        "label": "Certificate Revocation"
      }
    ],
    "implements": [
      {
        "@id": "urn:ngm:class:supply-chain-security",
        "label": "Software Supply Chain Security"
      },
      {
        "@id": "urn:ngm:class:non-repudiation",
        "label": "Non-Repudiation"
      }
    ],
    "supports": [
      {
        "@id": "urn:ngm:class:software-bill-of-materials",
        "label": "Software Bill of Materials"
      },
      {
        "@id": "urn:ngm:class:slsa-framework",
        "label": "SLSA Framework"
      }
    ],
    "relatedTo": [
      {
        "@id": "urn:ngm:class:notary-service",
        "label": "Notary Service"
      },
      {
        "@id": "urn:ngm:class:supply-chain",
        "label": "Supply Chain"
      },
      {
        "@id": "urn:ngm:class:sigstore",
        "label": "Sigstore"
      }
    ],
    "bridgesTo": [
      {
        "@id": "urn:ngm:class:infrastructure",
        "label": "Infrastructure"
      },
      {
        "@id": "urn:ngm:class:supply-chain",
        "label": "Supply Chain"
      }
    ]
  },
  "sameAs": [
    {
      "@id": "urn:ngm:class:software-signing",
      "label": "Software Signing"
    },
    {
      "@id": "urn:ngm:class:authenticode",
      "label": "Authenticode"
    }
  ],
  "provenance": {
    "attributedTo": "did:nostr:ontology-mesh",
    "generatedAt": "2026-06-14T00:00:00Z",
    "inferenceRule": "RelationEnrichment"
  },
  "quality": 0.72
}
```

- ### Definition
  - Code Signing is the application of [[Digital Signature]] cryptography to software artefacts — executables, libraries, container images, firmware, scripts — to provide recipients with verifiable proof of publisher identity and content integrity. A publisher computes a [[Cryptographic Hash Function]] over the artefact and signs the hash with their private key; the recipient decrypts the signature with the publisher's public key certificate (chained to a trusted [[Certificate Authority]] or transparency log) and recomputes the hash to confirm it matches. Modern systems extend this to keyless signing via OIDC-authenticated short-lived certificates and Sigstore's Rekor transparency log.

- ### Relationships
  - Code Signing is grounded in [[Public Key Infrastructure]] for traditional certificate issuance and revocation. It directly enables [[Supply Chain Traceability]] by cryptographically binding each software artefact to its publisher and build environment. [[Provenance Tracking]] frameworks such as SLSA (Supply-chain Levels for Software Artefacts) require code signing as part of their build integrity attestation requirements. Signed artefacts are a prerequisite for loading software into [[Trusted Execution Environment]] enclaves and secure boot chains.

- ### Content
  - Code signing emerged in the mid-1990s alongside the commercial internet, as Microsoft's Authenticode (1996) and Netscape's Object Signing enabled browser-downloaded executables to carry publisher certificates. Apple adopted code signing requirements for macOS applications in 2011 (Gatekeeper) and enforced it for all Mac App Store submissions. iOS mandated code signing from launch (2007), making every installed app cryptographically traceable to a registered Apple Developer account. These platform-level enforcements established code signing as an operational baseline.

  - Technically, code signing for modern software artefacts extends beyond simple binary signing. Container image signing (Notary v1 with TUF, Notary v2/OCI, Cosign) signs OCI manifests stored in container registries. The Sigstore project (2021, supported by Google, Red Hat, Purdue University) introduced keyless signing using ephemeral keys bound to OIDC identity tokens (GitHub Actions, GitLab CI identities), with all signatures published to the Rekor append-only transparency log. This removes the burden of long-lived key management whilst providing transparency log-based non-repudiation.

  - Enterprise software supply chains typically require code signing at multiple stages: source code commits (GPG/SSH-signed Git commits), build artefacts (signed JARs, signed npm packages, signed Python wheels), container images (Cosign or Notary), and Helm charts. The SLSA framework (now at SLSA v1.0) defines provenance levels from L1 (scripted build) to L3 (verified, non-falsifiable build) where L2+ requires signed provenance attestations. Tools such as in-toto (attestation framework), SPDX (software bill of materials), and CycloneDX integrate with code signing to provide comprehensive artefact provenance.

  - By 2024–2025, code signing has become a regulatory expectation in sectors subject to the EU Cyber Resilience Act, US Executive Order 14028 on Improving the Nation's Cybersecurity, and CISA guidance on software supply chain security. Sigstore has achieved broad adoption with over 1 million container image signatures and integration into major package registries (npm, PyPI, Maven Central, crates.io). The convergence of software bills of materials, [[Provenance Tracking]], and code signing is creating an end-to-end [[Supply Chain Traceability]] capability for software that mirrors what physical supply chains have achieved through barcode and RFID traceability systems.

