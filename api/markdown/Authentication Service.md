- ### OntologyBlock
  id:: authentication-service-ontology
  collapsed:: true
	- ontology:: true
	- term-id:: NGM-7010
	- preferred-term:: Authentication Service
	- source-domain:: ngm
	- status:: active
	- public-access:: true
	- definition:: An authentication service is a system component that verifies the identity of users, devices, or applications attempting to access protected resources. It validates credentials against stored identity information and issues tokens or assertions that enable authorised access across applications and services, forming the foundation of secure identity management in enterprise systems.
	- maturity:: reviewed
	- owl:class:: ngm:AuthenticationService
	- owl:role:: Concept
	- belongsToDomain:: [[Core Technology]]

### Relationships
- is-subclass-of:: [[Security Service]]
- related-to:: [[Access Control]], [[Cross-Platform Identity]], [[Identity Management]]
- enables:: [[Single Sign-On]], [[Authorisation]], [[Session Management]]
- implements:: [[Identity Verification]], [[Credential Validation]]

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

## Metadata

- **Last Updated**: 2025-12-29
- **Review Status**: Enriched from stub
- **References**: 8 pages reference this concept
