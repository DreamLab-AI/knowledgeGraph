
Sigstore is an open-source project and set of services for signing, verifying, and proving the provenance of software artefacts using short-lived keys and a public transparency log. It removes the burden of long-term key management by issuing ephemeral signing certificates bound to OpenID Connect identities, recording signatures in an append-only log (Rekor) for auditability. Sigstore underpins software supply-chain security through tools such as Cosign for container and artefact signing.

- Sigstore is a toolchain and public infrastructure for signing and verifying software artefacts using ephemeral, identity-bound keys recorded in a transparency log. It implements keyless [[Code Signing]] on top of [[Public-Key Cryptography]], a [[Certificate Authority]] (Fulcio), and a [[Digital Signature]] workflow.
- It targets [[Supply Chain Security]] by making artefact provenance auditable without developers managing long-lived private keys.
- ### Overview
- Traditional code signing requires developers to safeguard private keys indefinitely, which is error-prone and a frequent source of compromise. Sigstore replaces this with short-lived certificates issued against a verified identity, signed material that is immediately logged, and verification that checks both the signature and the log entry.
- The core components are Fulcio, a certificate authority that issues ephemeral certificates bound to OIDC identities; Rekor, an append-only transparency log of signatures; and Cosign, the client tool for signing and verifying container images and other artefacts.
- Because every signature is publicly logged, verifiers can detect unexpected or malicious signing events, strengthening trust across the software supply chain.
- ### Mechanisms
- Keyless signing: ephemeral keys are generated per signing operation, avoiding long-term key storage.
- Identity binding: Fulcio issues certificates tied to OIDC identities such as email or workload identity.
- Transparency logging: Rekor records signatures in a tamper-evident, append-only ledger.
- Verification: clients check the signature, certificate chain, and inclusion proof in the log.
- ### Applications
- Signing container images, binaries, and SBOMs in CI/CD pipelines.
- Establishing provenance for open-source releases and package registries.
- Meeting software supply-chain framework requirements such as SLSA.
- Auditing signing activity through the public transparency log.
- ### Provenance

