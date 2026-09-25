Stripe is a financial technology company founded in 2010 that provides programmable payment infrastructure, APIs, and financial services software enabling businesses to accept online and in-person payments, manage subscriptions, issue cards, and access embedded financial tooling. It operates as a payment service provider and merchant acquirer, abstracting the complexity of card networks, banking rails, and compliance into developer-friendly interfaces. Stripe's platform spans payment processing, revenue management, fraud detection, tax computation, and banking-as-a-service, making it a foundational layer of the internet economy. Its products serve businesses ranging from independent developers to large enterprises across more than 135 countries.

### Overview

- Founded in 2010 by Patrick and John Collison, Stripe launched with the premise that accepting [[E-Commerce]] payments online was unnecessarily difficult and required reducing the integration work to a few lines of code.
- The company operates as both a [[Payment Gateway]] and a [[Merchant Acquiring]] entity in many markets, meaning it handles both the technical routing of transactions and the financial settlement from card networks to merchant bank accounts.
- Stripe's architecture is API-first: merchants integrate via a [[REST API]] or client-side SDKs, issuing requests that Stripe routes through its connections to card networks such as Visa and Mastercard, ACH rails, SEPA, and many local payment methods.
- It processes payments for businesses in more than 135 countries and supports dozens of currencies and local payment methods, including buy-now-pay-later options and [[Open Banking]] initiated transfers.
- The platform uses [[Machine Learning]] heavily for [[Fraud Detection]] via its Radar product, analysing signals across the transaction network to distinguish legitimate payments from fraudulent ones.
- Stripe has expanded beyond payments into a suite of financial products including Stripe Treasury (banking-as-a-service), Stripe Issuing ([[Card Issuing]]), Stripe Capital (lending), Stripe Tax, Stripe Billing ([[Subscription Billing]]), and Stripe Connect (marketplace payments).

### Key Components

- **Stripe Payments** — core [[Payment API]] for accepting card, wallet, and bank transfer payments; supports 3D Secure, [[Tokenisation]] of card data, and dynamic currency conversion.
- **Stripe Connect** — enables [[Marketplace Platform]] operators to route funds between buyers, sellers, and the platform itself; supports split payments, sub-merchant onboarding, and compliance delegation.
- **Stripe Billing** — automates [[Subscription Billing]] lifecycles including trial management, prorations, metered billing, and dunning for failed payment recovery.
- **Stripe Radar** — [[Fraud Detection]] engine powered by [[Machine Learning]] models trained on network-wide transaction signals; supports custom rules authored in a domain-specific rule language.
- **Stripe Issuing** — [[Card Issuing]] product allowing businesses to create virtual and physical payment cards with programmable spend controls.
- **Stripe Treasury** — banking-as-a-service layer providing FDIC-insured accounts, money movement, and balance management via partner banks; a key pillar of [[Embedded Finance]].
- **Stripe Capital** — merchant cash advance and lending product using Stripe-observed revenue data for underwriting, without requiring traditional credit application processes.
- **Stripe Tax** — automated tax calculation and reporting across jurisdictions, reducing compliance burden for cross-border [[E-Commerce]].
- **Stripe Identity** — identity verification product using document scanning and liveness checks, integrating with [[KYC/AML Compliance]] workflows.
- **Stripe Sigma** — in-product SQL analytics environment giving merchants queryable access to their transaction data.
- **Stripe Atlas** — company incorporation service assisting founders in incorporating in the US (typically Delaware) and accessing US banking and payments infrastructure.
- **Webhooks** — event-driven notification system using [[Webhook]] callbacks to inform merchant systems of payment lifecycle events asynchronously.

### Applications and Use Cases

- **SaaS and subscription products** — businesses use [[Subscription Billing]] via Stripe Billing to manage recurring revenue, offering monthly/annual plans, seat-based pricing, and usage-based metering.
- **Marketplace and platform businesses** — multi-sided platforms (Shopify, Lyft, Instacart) use Stripe Connect to onboard sub-merchants, route funds, and handle [[KYC/AML Compliance]] for sellers.
- **Enterprise payment processing** — large retailers and travel companies route card-present and card-not-present transactions through Stripe to benefit from network-level [[Fraud Detection]] and global acquiring reach.
- **Embedded finance products** — fintech startups and non-financial businesses use Stripe Treasury and [[Card Issuing]] to offer bank accounts and expense cards under their own brand without obtaining a banking licence.
- **Stablecoin and crypto-adjacent payments** — Stripe re-introduced support for [[Stablecoin]] payments (USDC on Ethereum, Solana, and Polygon) in 2024, allowing platforms to pay out to users in stablecoins and bridging towards [[Decentralised Finance]] use cases.
- **Cross-border payments** — international businesses use Stripe's multi-currency settlement and local payment methods to reduce friction and conversion loss in cross-border [[E-Commerce]].
- **Developer tooling and prototyping** — Stripe's test-mode sandbox, CLI, and SDKs for multiple programming languages make it a default choice for developers prototyping payment flows before going live.

### Standards and Regulatory Context

- **PCI DSS** — Stripe is certified as a PCI DSS Level 1 Service Provider, the highest tier. Merchants using Stripe's client-side SDKs and hosted fields can reduce their own [[PCI DSS]] scope significantly because card data never transits merchant servers.
- **SCA / 3DS2** — Stripe implements Strong Customer Authentication requirements under PSD2 in the European Economic Area, automatically triggering 3D Secure authentication flows where mandated.
- **PSD2 / Open Banking** — Stripe supports [[Open Banking]] payment initiation in the UK and EU, and connects to account information services where permissible.
- **KYC/AML** — Stripe performs [[KYC/AML Compliance]] checks on merchants and, via Stripe Connect, on sub-merchants and individual recipients of payouts. Stripe Identity extends this to end-user verification.
- **GDPR and data residency** — Stripe offers data processing agreements and supports merchants in meeting GDPR obligations; card data is stored in Stripe's vaulted environment with [[Tokenisation]] preventing raw PAN exposure.
- **Financial licences** — Stripe holds payment institution licences (EU, UK), money transmitter licences across US states, and local acquiring licences or banking partnerships in many markets, enabling direct settlement without intermediary acquiring banks.
- **Card Network Rules** — Stripe's operations are governed by Visa, Mastercard, American Express, and local scheme rules, shaping permissible merchant categories, dispute resolution timelines, and interchange economics.

### Provenance

