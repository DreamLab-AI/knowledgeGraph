/**
 * domains.ts — the six-Domain descriptor table (DDD-NG-001 §2, FORMAT-NGG1 §6).
 *
 * Fixed order = domain id. Label comes from the scope contract; tint from the
 * theme token `--ng-domain-<id>`; glyph from the in-repo icon set. Kept separate
 * from icons.tsx (which stays component-only) so both play well with React Fast
 * Refresh. This is the single place doors, legends and chips read domain meta.
 */

import { DOMAIN_SLUGS, DOMAIN_LABELS, type DomainSlug } from '../types/scope';
import {
  AiIcon,
  BlockchainIcon,
  SpatialIcon,
  RoboticsIcon,
  CollaborationIcon,
  InfrastructureIcon,
  type IconProps,
} from './icons';

/** DomainSlug → glyph component, in fixed domain-id order. */
export const DOMAIN_ICONS: Readonly<Record<DomainSlug, (p: IconProps) => React.JSX.Element>> = {
  'artificial-intelligence': AiIcon,
  'blockchain': BlockchainIcon,
  'spatial-computing': SpatialIcon,
  'robotics': RoboticsIcon,
  'distributed-collaboration': CollaborationIcon,
  'infrastructure': InfrastructureIcon,
};

/** One-line orientation for each domain door (editorial, factual). */
export const DOMAIN_BLURBS: Readonly<Record<DomainSlug, string>> = {
  'artificial-intelligence': 'Learning systems, reasoning, agents and the models beneath them.',
  'blockchain': 'Distributed ledgers, tokens, identity and cryptographic trust.',
  'spatial-computing': 'Immersive interfaces, digital twins and the mixed-reality substrate.',
  'robotics': 'Embodied autonomy, sensing, actuation and human–robot interaction.',
  'distributed-collaboration': 'Sovereign coordination, protocols and the mesh of working peers.',
  'infrastructure': 'Compute, networks, standards and the ground the rest stands on.',
};

export interface DomainMeta {
  id: number;
  slug: DomainSlug;
  label: string;
  blurb: string;
  tintVar: string;
  Icon: (p: IconProps) => React.JSX.Element;
}

/** Ordered domain descriptors for door grids, chips and legends. */
export const DOMAIN_META: readonly DomainMeta[] = DOMAIN_SLUGS.map((slug, id) => ({
  id,
  slug,
  label: DOMAIN_LABELS[slug],
  blurb: DOMAIN_BLURBS[slug],
  tintVar: `var(--ng-domain-${id})`,
  Icon: DOMAIN_ICONS[slug],
}));
