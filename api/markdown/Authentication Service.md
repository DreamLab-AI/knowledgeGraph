An authentication service is a system component that verifies the identity of users, devices, or applications attempting to access protected resources. It validates credentials against stored identity information and issues tokens or assertions that enable authorised access across applications and services, forming the foundation of secure identity management in enterprise systems.

### Semantic Classification

### Content

## Components

### Core Authentication Protocols

#### SAML (Security Assertion Markup Language)
XML-based open standard for exchanging authentication and authorisation data between identity providers (IdP) and service providers (SP). Enables enterprise single sign-on where users authenticate once to access multiple applications.

#### OAuth 2.0
Authorisation framework that allows third-party applications to obtain limited access to user resources without sharing credentials. Uses access tokens for delegated authorisation.

#### OpenID Connect (OIDC)
Identity layer built on OAuth 2.0 that adds authentication capabilities. Provides user identity verification through ID tokens containing user claims.

#### LDAP (Lightweight Directory Access Protocol)
Protocol for accessing and maintaining distributed directory information services. Commonly used for centralised authentication against Active Directory.

### Authentication Factors

- **Knowledge Factors**: Passwords, PINs, security questions
- **Possession Factors**: Hardware tokens, smart cards, mobile devices
- **Inherence Factors**: Biometrics (fingerprint, facial recognition, voice)
- **Location Factors**: Geolocation, IP address verification
- **Behavioural Factors**: Typing patterns, device usage patterns

  ### Service Components

- **Identity Provider (IdP)**: Central authority that authenticates users and issues tokens
- **Service Provider (SP)**: Applications that rely on IdP for authentication
- **Token Service**: Issues and validates authentication tokens (JWT, SAML assertions)
- **Credential Store**: Secure storage for user credentials and identity data

  ## Implementation

  ### Single Sign-On (SSO) Architecture
  1. User requests access to application
  2. Application redirects to identity provider
  3. IdP authenticates user (if not already authenticated)
  4. IdP issues authentication token/assertion
  5. Application validates token and grants access

  ### Enterprise Deployment

- **Federated Identity**: Trust relationships between organisations for cross-domain authentication
- **Multi-Factor Authentication (MFA)**: Combining multiple authentication factors for stronger security
- **Passwordless Authentication**: Using biometrics, hardware keys, or magic links
- **Adaptive Authentication**: Risk-based authentication adjusting requirements dynamically

  ### Best Practices

- Use HTTPS for all authentication traffic
- Implement PKCE (Proof Key for Code Exchange) for OAuth flows
- Store credentials using secure hashing algorithms
- Enforce password complexity and rotation policies
- Monitor for credential stuffing and brute force attacks
- Regular token expiration and refresh cycles

  ### Technology Stack

- Identity providers: Okta, Azure AD, Auth0, Keycloak
- Protocols: SAML 2.0, OAuth 2.0, OIDC, FIDO2
- Token formats: JWT, SAML assertions
- Directory services: Active Directory, OpenLDAP

### Current Landscape (2026)

- NIST finalised SP 800-63-4 in July 2025, formally recognising cloud-synced passkeys (FIDO2/WebAuthn credentials) as AAL2-compliant and mandating phishing-resistant authenticators for AAL2 (SMS OTP no longer qualifies), while reserving AAL3 for hardware-bound, non-exportable keys under a new risk-based Digital Identity Risk Management framework.
- Passkeys reached mainstream scale in 2025-2026: the FIDO Alliance reports 15 billion-plus passkey-enabled accounts and over 1 billion activations, with its October 2025 Passkey Index showing 93% account eligibility, 36% enrolment and 26% of sign-ins passkey-completed; Microsoft made passkeys the default for new consumer accounts.
- The FIDO Alliance published the Credential Exchange Protocol and Format (CXP/CXF) as a Proposed Standard in August 2025, enabling secure passkey portability between password managers (Apple, Google, 1Password, Bitwarden) and directly attacking the vendor lock-in objection; Apple shipped CXF in iOS/macOS 26.
- Authentication services are being re-architected around AI agents as first-class principals: the Model Context Protocol authorisation spec finalised 2025-11-25 mandates OAuth 2.1 with PKCE and dynamic client registration, and NIST announced an AI Agent Standards Initiative in February 2026 covering agent identity and authorisation.
- A wave of 2025-2026 regulation is forcing OTP retirement worldwide: the UAE CBUAE requires banks to drop SMS/email OTP by 31 March 2026, India's RBI directions take effect 1 April 2026, the Philippines BSP Circular 1213 sets a mid-2026 deadline, and eIDAS 2.0 (Regulation (EU) 2024/1183) obliges Member States to provide EUDI Wallets by around late 2026.
- The vendor landscape consolidated around Microsoft Entra (largest installed base), Okta/Auth0, Ping Identity (post-ForgeRock), IBM and CyberArk, alongside surging open-source IdPs (Keycloak, Authentik, Ory); AWS added hardware-rooted passkey support to IAM Identity Center in November 2025 and the cloud IAM market is estimated at roughly USD 10.9 billion in 2026 (about 19.5% CAGR).
- The emerging frontier is post-quantum authentication: NIST's August 2024 PQC standards (ML-KEM/FIPS 203, ML-DSA/FIPS 204, SLH-DSA/FIPS 205) and 2025 additions of post-quantum algorithms to COSE lay groundwork for FIDO2 credentials signing with ML-DSA, with IBM Security Verify piloting quantum-safe FIDO2 passkeys from April 2025 ahead of US national-security migration deadlines (buy from 2027, full migration by 2033).

### References

- 1. Security Boulevard (2026). The Complete Guide to Passwordless Authentication in 2026: How It Works, Why It Matters, and How to Implement It. https://securityboulevard.com/2026/04/the-complete-guide-to-passwordless-authentication-in-2026-how-it-works-why-it-matters-and-how-to-implement-it/
- 2. Clerk (2026). Authentication Trends in 2026: Passkeys, AI Agents, and Edge. https://clerk.com/articles/authentication-trends-in-2026-passkeys-ai-agents-and-edge
- 3. Authsignal (2025). Passwordless Authentication in 2025: The Year Passkeys Went Mainstream. https://www.authsignal.com/blog/articles/passwordless-authentication-in-2025-the-year-passkeys-went-mainstream
- 4. FIDO Alliance (2025). Authenticate 2025: Day 1 Recap (CXP/CXF, CTAP2.2, WebAuthn updates). https://fidoalliance.org/authenticate-2025-day-1-recap/
- 5. Security Boulevard (2026). The Future of Authentication 2026-2030: How Five Converging Technologies Are Rebuilding Identity. https://securityboulevard.com/2026/07/the-future-of-authentication-2026-2030-how-five-converging-technologies-are-rebuilding-identity-from-the-ground-up/
- 6. Mordor Intelligence (2026). Cloud Identity & Access Management Software Market. https://www.mordorintelligence.com/industry-reports/global-cloud-identity-and-access-management-software-market-industry

### Provenance

