/**
 * mesh.ts — the seven-repo ecosystem link contract (PRD-NG-001 §8, DDD §5
 * "Ecosystem context — shared kernel of identity"). Canon per the 2026-07-22
 * README campaign: github.com/DreamLab-AI/<name>.
 */

export interface MeshRepo {
  name: string;
  href: string;
  blurb: string;
}

const ORG = 'https://github.com/DreamLab-AI';

export const MESH_REPOS: readonly MeshRepo[] = [
  { name: 'VisionFlow', href: `${ORG}/VisionFlow`, blurb: 'GPU knowledge-graph engine & physics.' },
  { name: 'VisionClaw', href: `${ORG}/VisionClaw`, blurb: 'The immersive 3D reasoning laboratory.' },
  { name: 'agentbox', href: `${ORG}/agentbox`, blurb: 'Sovereign agent runtime & skills mesh.' },
  { name: 'solid-pod-rs', href: `${ORG}/solid-pod-rs`, blurb: 'Rust Solid pod — personal data sovereignty.' },
  { name: 'nostr-rust-forum', href: `${ORG}/nostr-rust-forum`, blurb: 'Nostr-native forum & relay in Rust.' },
  { name: 'dreamlab-ai-website', href: `${ORG}/dreamlab-ai-website`, blurb: 'The DreamLab AI studio front door.' },
  { name: 'knowledgeGraph', href: `${ORG}/knowledgeGraph`, blurb: 'Published corpus mirror & site source.' },
] as const;

/** The immersive sibling — the "Laboratory" to this site's "Lexicon" (PRD §9a.7). */
export const VISIONCLAW = {
  repo: `${ORG}/VisionClaw`,
  site: 'https://visionflow.info',
} as const;
