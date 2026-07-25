/**
 * GraphPage — the ontology explorer (PRD-NG-001 §4/§5, ADR-NG-001 §5).
 *
 * The URL is the state (PRD §4: "deep links are contracts"):
 *   /graph                         → overview  (T0, pre-baked, instant)
 *   /graph?scope=domain:<slug>     → domain    (T1, domain-<slug>.bin)
 *   /graph?focus=<iri>&r=1|2       → focus     (T2, ego-graph, client-derived)
 *
 * Division of labour with the renderer-owned `scopeStore` + `GraphCanvas`:
 *   - GraphPage OWNS the fetching (ADR §2 tiers): overview.json for T0, the
 *     domain-<slug>.bin binary for T1, then it asks the store to build the tier
 *     (`setOverview` / `loadDomain`); T2 is derived in-store (`focusByIri`).
 *   - The store owns the working set, selection (`selectedInstance`), hover, and
 *     the physics worker. GraphCanvas reads it directly — it takes no props.
 *   - Interaction crosses back through `registerHandlers`: node double-click
 *     descends a tier (GraphPage decides the target scope + pushes the URL);
 *     single-click selection is already recorded by the store.
 *
 * Node metadata for the chrome comes from the store's `RenderModel` (+ the
 * loaded NGG1 reader for category); no entity object crosses into the scene
 * graph (DDD INV-3).
 */

import { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { GraphCanvas } from '../components/Canvas/GraphCanvas';
import { useUiStore } from '../stores/uiStore';
import { useScopeStore, parseMetaIri, type NodeContext, type OverviewInput } from '../stores/scopeStore';
import {
  DOMAIN_LABELS,
  DOMAIN_SLUGS,
  decodeScopeParams,
  encodeScopeQuery,
  scopeKey,
  type DomainSlug,
  type FocusRadius,
  type ScopeRef,
  type Tier,
} from '../types/scope';
import { CATEGORY_NONE, FLAG_HAS_PAGE, parseNgg1, type Ngg1 } from '../lib/ngg1';
import { GraphBreadcrumb } from '../components/UI/GraphBreadcrumb';
import { NodeSidePanel } from '../components/UI/NodeSidePanel';
import { EdgeLegend, type ColourKeyEntry } from '../components/UI/EdgeLegend';
import { readPalette, domainColor, categoryTint } from '../components/Canvas/palette';
import { GraphSearchBox } from '../components/UI/GraphSearchBox';
import { NodeListFallback } from '../components/UI/NodeListFallback';
import { ScopeStatus, type ScopeLoadStatus } from '../components/UI/ScopeStatus';
import { GraphControls } from '../components/UI/GraphControls';
import type { Crumb, ProvenanceInfo, ScopeNode } from '../components/UI/types';
import '../site/theme.css';
import './GraphPage.css';

const SEARCH_RESULTS_MAX = 12;
const A11Y_LABELS_MAX = 150; // mirrors INVARIANTS.LABELS_VISIBLE_MAX

/* ───────────────────── overview.json contract (T0) ──────────────────── */
/* The pipeline's `emit_graph_tiers` overview artifact (ADR §2). Shape defined
 * here as the consumer contract; the emitter conforms. Positions are pre-baked
 * (no simulation on T0). `edges` index into `nodes` (scope-local). */
interface OverviewJsonNode {
  id: number;
  label: string;
  iri: string;
  domain: number;
  category?: number;
  degree: number;
  flags: number;
  x: number;
  y: number;
}
interface OverviewJsonEdge {
  source: number;
  target: number;
  type: number;
}
interface OverviewJson {
  taxonomy?: string[];
  generatedAt?: string;
  pipelineVersion?: string;
  attributedTo?: string;
  nodes: OverviewJsonNode[];
  edges?: OverviewJsonEdge[];
}

interface StatsJson {
  attributedTo?: string;
  generatedAt?: string;
  datasetDate?: string;
  pipelineVersion?: string;
}

interface Meta {
  taxonomy: string[];
  provenance: ProvenanceInfo;
}

/* The URL ⇄ ScopeRef codec is single-sourced in types/scope.ts (parse via
 * decodeScopeParams, serialise via encodeScopeQuery, identity via scopeKey). */

/* ───────────────────────────── helpers ──────────────────────────────── */

function slugify(s: string): string {
  return s
    .trim()
    .toLowerCase()
    .replace(/[^\w\s-]/g, '')
    .replace(/[\s_]+/g, '-')
    .replace(/-+/g, '-')
    .replace(/^-|-$/g, '');
}

function pageSlug(node: ScopeNode): string {
  const iri = node.iri || '';
  const cut = Math.max(iri.lastIndexOf('#'), iri.lastIndexOf('/'));
  const local = cut >= 0 ? iri.slice(cut + 1) : '';
  return slugify(local || node.label || iri);
}

function domainLabelFor(domain: number): string {
  const slug = DOMAIN_SLUGS[domain];
  return slug ? DOMAIN_LABELS[slug] : 'Unknown domain';
}

function findLocalByIri(ngg1: Ngg1, iri: string): number {
  for (let i = 0; i < ngg1.nodeCount; i++) if (ngg1.iri(i) === iri) return i;
  return -1;
}

function buildOverviewInput(json: OverviewJson): OverviewInput {
  const nodes = json.nodes ?? [];
  const n = nodes.length;
  const positions = new Float32Array(n * 2);
  const domainOf = new Uint16Array(n);
  const categoryOf = new Uint16Array(n);
  const degreeOf = new Float32Array(n);
  const flagsOf = new Uint8Array(n);
  const ids = new Uint32Array(n);
  const labels: string[] = new Array(n);
  const iris: string[] = new Array(n);
  for (let i = 0; i < n; i++) {
    const nd = nodes[i];
    positions[i * 2] = nd.x;
    positions[i * 2 + 1] = nd.y;
    domainOf[i] = nd.domain;
    categoryOf[i] = nd.category ?? CATEGORY_NONE;
    degreeOf[i] = nd.degree;
    flagsOf[i] = nd.flags;
    ids[i] = nd.id;
    labels[i] = nd.label;
    iris[i] = nd.iri;
  }
  const edges = json.edges ?? [];
  const m = edges.length;
  const edgePairs = new Uint32Array(m * 2);
  const edgeTypes = new Uint8Array(m);
  for (let e = 0; e < m; e++) {
    edgePairs[e * 2] = edges[e].source;
    edgePairs[e * 2 + 1] = edges[e].target;
    edgeTypes[e] = edges[e].type;
  }
  return { positions, domainOf, categoryOf, degreeOf, flagsOf, ids, labels, iris, edgePairs, edgeTypes };
}

/* ─────────────────────────────── page ───────────────────────────────── */

export default function GraphPage() {
  const [params] = useSearchParams();
  const navigate = useNavigate();
  const containerRef = useRef<HTMLDivElement>(null);
  const searchInputRef = useRef<HTMLInputElement>(null);

  // Renderer-owned store (working set, selection, hover, worker, scene).
  const scope = useScopeStore((s) => s.scope);
  const model = useScopeStore((s) => s.model);
  const selectedInstance = useScopeStore((s) => s.selectedInstance);
  const registerHandlers = useScopeStore((s) => s.registerHandlers);
  const clickNode = useScopeStore((s) => s.clickNode);
  const clickBackground = useScopeStore((s) => s.clickBackground);

  // Explorer chrome state (filters + search).
  const edgeToggles = useUiStore((s) => s.edgeToggles);
  const searchQuery = useUiStore((s) => s.searchQuery);
  const searchOpen = useUiStore((s) => s.searchOpen);
  const toggleBackbone = useUiStore((s) => s.toggleBackbone);
  const toggleRelations = useUiStore((s) => s.toggleRelations);
  const setSearchQuery = useUiStore((s) => s.setSearchQuery);
  const setSearchOpen = useUiStore((s) => s.setSearchOpen);
  const resetSearch = useUiStore((s) => s.resetSearch);

  // Load state (this page owns fetching).
  const [status, setStatus] = useState<ScopeLoadStatus>('idle');
  const [error, setError] = useState<string | null>(null);
  const [progressLabel, setProgressLabel] = useState<string | undefined>(undefined);
  const [meta, setMeta] = useState<Meta>({ taxonomy: [], provenance: {} });

  // Caches so back/forward and sibling focus navigations are instant.
  const ngg1Cache = useRef<Map<DomainSlug, Ngg1>>(new Map());
  const overviewJsonRef = useRef<OverviewJson | null>(null);
  const statsRef = useRef<StatsJson | null>(null);
  const loadToken = useRef(0);

  const urlRef = useMemo(() => decodeScopeParams(params), [params]);
  const urlKey = scopeKey(urlRef);

  /* ── fetchers ──────────────────────────────────────────────────────── */

  const ensureOverviewJson = useCallback(async (): Promise<OverviewJson> => {
    if (overviewJsonRef.current) return overviewJsonRef.current;
    const res = await fetch('/data/graph/overview.json');
    if (!res.ok) throw new Error(`Couldn’t fetch the overview (HTTP ${res.status}).`);
    const json = (await res.json()) as OverviewJson;
    overviewJsonRef.current = json;
    return json;
  }, []);

  const ensureDomain = useCallback(async (slug: DomainSlug): Promise<Ngg1> => {
    const cached = ngg1Cache.current.get(slug);
    if (cached) return cached;
    setProgressLabel(`Loading ${DOMAIN_LABELS[slug]}…`);
    const res = await fetch(`/data/graph/domain-${slug}.bin`);
    if (!res.ok) throw new Error(`Couldn’t fetch the ${DOMAIN_LABELS[slug]} tier (HTTP ${res.status}).`);
    const buf = await res.arrayBuffer();
    const parsed = parseNgg1(buf);
    ngg1Cache.current.set(slug, parsed);
    return parsed;
  }, []);

  /** Best-effort taxonomy + provenance (category labels + provenance line). */
  const ensureMeta = useCallback(async () => {
    try {
      const json = await ensureOverviewJson();
      let provenance: ProvenanceInfo = {
        attributedTo: json.attributedTo,
        generatedAt: json.generatedAt,
        pipelineVersion: json.pipelineVersion,
      };
      if (!statsRef.current) {
        const res = await fetch('/data/graph/stats.json');
        if (res.ok) statsRef.current = (await res.json()) as StatsJson;
      }
      const s = statsRef.current;
      if (s) {
        provenance = {
          attributedTo: s.attributedTo ?? provenance.attributedTo,
          generatedAt: s.generatedAt ?? s.datasetDate ?? provenance.generatedAt,
          pipelineVersion: s.pipelineVersion ?? provenance.pipelineVersion,
        };
      }
      setMeta({ taxonomy: json.taxonomy ?? [], provenance });
    } catch {
      /* meta is best-effort — category labels fall back to ids, provenance hides. */
    }
  }, [ensureOverviewJson]);

  /** Resolve a focus scope: use the loaded tier, else sweep domains for the IRI. */
  const ensureFocus = useCallback(
    async (iri: string, radius: FocusRadius, token: number): Promise<void> => {
      const store = useScopeStore.getState();
      if (store.ngg1 && store.focusByIri(iri, radius)) return;
      for (const slug of DOMAIN_SLUGS) {
        if (loadToken.current !== token) return;
        setProgressLabel(`Locating class in ${DOMAIN_LABELS[slug]}…`);
        const tier = await ensureDomain(slug);
        if (loadToken.current !== token) return;
        if (findLocalByIri(tier, iri) >= 0) {
          const taxonomy = (await ensureOverviewJson().catch(() => null))?.taxonomy ?? [];
          useScopeStore.getState().loadDomain({ tier: 'domain', slug }, tier, taxonomy);
          if (useScopeStore.getState().focusByIri(iri, radius)) return;
        }
      }
      throw new Error('That class isn’t present in any domain tier.');
    },
    [ensureDomain, ensureOverviewJson],
  );

  const load = useCallback(
    async (target: ScopeRef) => {
      const token = ++loadToken.current;
      setStatus('loading');
      setError(null);
      setProgressLabel(undefined);
      try {
        void ensureMeta(); // fire-and-forget; never blocks the scope
        if (target.tier === 'overview') {
          const json = await ensureOverviewJson();
          if (loadToken.current !== token) return;
          useScopeStore.getState().setOverview(buildOverviewInput(json));
        } else if (target.tier === 'domain') {
          // Taxonomy (category names) labels the collapsed metanodes — overview.json
          // is tiny and cached, so awaiting it here is effectively free.
          const [tier, overview] = await Promise.all([
            ensureDomain(target.slug),
            ensureOverviewJson().catch(() => null),
          ]);
          if (loadToken.current !== token) return;
          useScopeStore.getState().loadDomain(target, tier, overview?.taxonomy ?? []);
        } else {
          await ensureFocus(target.iri, target.radius, token);
          if (loadToken.current !== token) return;
        }
        setStatus('ready');
      } catch (e) {
        if (loadToken.current !== token) return;
        setError(e instanceof Error ? e.message : 'The scope could not be loaded.');
        setStatus('error');
      }
    },
    [ensureMeta, ensureOverviewJson, ensureDomain, ensureFocus],
  );

  /* URL → scope: the single driver. Runs on mount + every history change. */
  useEffect(() => {
    resetSearch();
    void load(urlRef);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [urlKey]);

  const tier: Tier = scope?.tier ?? urlRef.tier;

  /* Push a new scope by navigating — history drives the load effect above. */
  const goToScope = useCallback(
    (target: ScopeRef) => navigate(`/graph${encodeScopeQuery(target)}`),
    [navigate],
  );

  /* Descend a tier from a node (double-click, search "Focus", panel "View"). */
  const descend = useCallback(
    (node: { iri: string; domain: number }) => {
      if (tier === 'overview') {
        const slug = DOMAIN_SLUGS[node.domain];
        if (slug) goToScope({ tier: 'domain', slug });
      } else if (tier === 'domain') {
        // A collapsed category metanode expands in place (PRD §9a #1); a real
        // class descends to its T2 focus neighbourhood.
        const meta = parseMetaIri(node.iri);
        if (meta) {
          useScopeStore.getState().expandCategory(meta.catId);
          return;
        }
        goToScope({ tier: 'focus', iri: node.iri, radius: 1 });
      } else {
        const radius: FocusRadius = urlRef.tier === 'focus' ? urlRef.radius : 1;
        goToScope({ tier: 'focus', iri: node.iri, radius });
      }
    },
    [tier, urlRef, goToScope],
  );

  /* Wire the renderer→UX interaction contract once (reads live via refs). */
  const descendRef = useRef(descend);
  descendRef.current = descend;
  useEffect(() => {
    registerHandlers({
      onNodeClick: () => useUiStore.getState().setSearchOpen(false),
      onNodeDoubleClick: (ctx: NodeContext) =>
        descendRef.current({ iri: ctx.iri, domain: ctx.domain }),
      onBackgroundClick: () => {
        /* selection already cleared by the store; nothing else to do. */
      },
    });
  }, [registerHandlers]);

  /* Materialise the scope's nodes once per swap (indexed by instance index). */
  const allNodes = useMemo<ScopeNode[]>(() => {
    if (!scope || !model) return [];
    const out: ScopeNode[] = new Array(scope.nodeCount);
    for (let i = 0; i < scope.nodeCount; i++) {
      out[i] = {
        index: i,
        id: model.ids[i],
        label: model.labels[i],
        iri: model.iris[i],
        domain: model.domainOf[i],
        // Category is carried on the render model (works for real classes,
        // synthetic metanodes, and the ngg1-less overview alike).
        category: model.categoryOf[i] ?? CATEGORY_NONE,
        degree: model.degreeOf[i],
        flags: model.flagsOf[i],
      };
    }
    return out;
  }, [scope, model]);

  /* Shipped incident degree per node (edges actually present in this scope). */
  const shippedDegrees = useMemo<Uint32Array>(() => {
    const counts = new Uint32Array(scope?.nodeCount ?? 0);
    const pairs = scope?.edgePairs;
    if (pairs) {
      for (let e = 0; e < pairs.length; e += 2) {
        counts[pairs[e]]++;
        counts[pairs[e + 1]]++;
      }
    }
    return counts;
  }, [scope]);

  const topNodes = useMemo<ScopeNode[]>(
    () => [...allNodes].sort((a, b) => b.degree - a.degree).slice(0, A11Y_LABELS_MAX),
    [allNodes],
  );

  const searchResults = useMemo<ScopeNode[]>(() => {
    const q = searchQuery.trim().toLowerCase();
    if (!q) return [];
    const scored: Array<{ n: ScopeNode; rank: number }> = [];
    for (const n of allNodes) {
      const label = (n.label || '').toLowerCase();
      if (!label) continue;
      const pos = label.indexOf(q);
      if (pos < 0) continue;
      scored.push({ n, rank: label === q ? 0 : pos === 0 ? 1 : 2 });
    }
    scored.sort((a, b) => a.rank - b.rank || b.n.degree - a.n.degree);
    return scored.slice(0, SEARCH_RESULTS_MAX).map((x) => x.n);
  }, [allNodes, searchQuery]);

  const selectedNode = selectedInstance != null ? allNodes[selectedInstance] ?? null : null;

  const crumbs = useMemo<Crumb[]>(() => {
    const list: Crumb[] = [{ label: 'Overview', ref: { tier: 'overview' }, kind: 'overview' }];
    if (tier === 'overview') {
      list[0] = { ...list[0], ref: null };
      return list;
    }
    if (tier === 'domain' && urlRef.tier === 'domain') {
      list.push({ label: DOMAIN_LABELS[urlRef.slug], ref: null, kind: 'domain' });
      return list;
    }
    if (tier === 'focus') {
      const centre = allNodes[0];
      if (centre) {
        const slug = DOMAIN_SLUGS[centre.domain];
        if (slug) list.push({ label: DOMAIN_LABELS[slug], ref: { tier: 'domain', slug }, kind: 'domain' });
        list.push({ label: centre.label || centre.iri, ref: null, kind: 'focus' });
      } else if (urlRef.tier === 'focus') {
        list.push({ label: urlRef.iri, ref: null, kind: 'focus' });
      }
    }
    return list;
  }, [tier, urlRef, allNodes]);

  /* ── interactions ──────────────────────────────────────────────────── */

  const canRead = useCallback((node: ScopeNode) => (node.flags & FLAG_HAS_PAGE) !== 0, []);

  const focusHit = useCallback(
    (node: ScopeNode) => {
      clickNode(node.index); // select + highlight (renderer reads selectedInstance)
      setSearchOpen(false);
    },
    [clickNode, setSearchOpen],
  );

  const readNode = useCallback(
    (node: ScopeNode) => navigate(`/page/${pageSlug(node)}`),
    [navigate],
  );

  /* Camera bridge — the renderer owns the camera (wheel/drag/f). These emit the
   * DOM events it already listens for so pointer users get zoom + fit too. */
  const canvasEl = () => containerRef.current?.querySelector('canvas') ?? null;
  const zoomBy = useCallback((dir: 'in' | 'out') => {
    const canvas = canvasEl();
    if (!canvas) return;
    const rect = canvas.getBoundingClientRect();
    canvas.dispatchEvent(
      new WheelEvent('wheel', {
        deltaY: dir === 'in' ? -240 : 240,
        clientX: rect.left + rect.width / 2,
        clientY: rect.top + rect.height / 2,
        bubbles: true,
        cancelable: true,
      }),
    );
  }, []);
  const fit = useCallback(() => {
    window.dispatchEvent(new KeyboardEvent('keydown', { key: 'f' }));
  }, []);

  /* Keyboard: / focuses search, +/- zoom, Esc closes. (f fit is the renderer's
   * own global binding; pan is drag. Arrow-key pan needs a renderer camera
   * command it does not yet expose — see integration note.) */
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      const el = document.activeElement;
      const typing =
        el instanceof HTMLInputElement ||
        el instanceof HTMLTextAreaElement ||
        (el instanceof HTMLElement && el.isContentEditable);

      if (e.key === '/' && !typing) {
        e.preventDefault();
        setSearchOpen(true);
        searchInputRef.current?.focus();
        return;
      }
      if (e.key === 'Escape') {
        if (useUiStore.getState().searchOpen) setSearchOpen(false);
        else if (useScopeStore.getState().selectedInstance != null) clickBackground();
        return;
      }
      if (typing) return;
      if (e.key === '+' || e.key === '=') {
        e.preventDefault();
        zoomBy('in');
      } else if (e.key === '-' || e.key === '_') {
        e.preventDefault();
        zoomBy('out');
      }
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [setSearchOpen, clickBackground, zoomBy]);

  /* ── derived side-panel strings ────────────────────────────────────── */

  const selectedCategoryLabel = selectedNode
    ? selectedNode.category === CATEGORY_NONE
      ? 'Uncategorised'
      : meta.taxonomy[selectedNode.category] ?? `Category ${selectedNode.category}`
    : '';

  /**
   * Active node-colour key for a domain scope (PRD §6): the categories present,
   * ranked ascending and tinted off the domain's base hue exactly as
   * NodesInstanced tints them, so the swatch matches the disc. Capped, with an
   * "+N others" rung. Null on T0 (the six-domain key shows there instead).
   */
  const categoryKey = useMemo<ColourKeyEntry[] | undefined>(() => {
    if (tier !== 'domain' || !model || allNodes.length === 0) return undefined;
    const palette = readPalette();
    const domainId = model.domainOf[0] ?? 0;
    const base = domainColor(palette, domainId);
    const present = new Set<number>();
    for (const nd of allNodes) if (nd.category !== CATEGORY_NONE) present.add(nd.category);
    const ids = [...present].sort((a, b) => a - b);
    if (ids.length === 0) return undefined;
    const total = ids.length;
    const CAP = 8;
    const key: ColourKeyEntry[] = ids.slice(0, CAP).map((catId, rank) => ({
      label: meta.taxonomy[catId] ?? `Category ${catId}`,
      color: categoryTint(base, rank, total).getStyle(),
    }));
    if (ids.length > CAP) key.push({ label: `+${ids.length - CAP} others`, color: base.clone().getStyle() });
    return key;
  }, [tier, model, allNodes, meta.taxonomy]);

  return (
    <div className="ng-graph-page" ref={containerRef}>
      <GraphCanvas className="ng-graph-page__canvas" />

      <div className="ng-graph-page__topleft">
        <GraphBreadcrumb crumbs={crumbs} onNavigate={goToScope} />
      </div>

      <div className="ng-graph-page__topright">
        <GraphSearchBox
          ref={searchInputRef}
          query={searchQuery}
          results={searchResults}
          open={searchOpen}
          onQueryChange={setSearchQuery}
          onOpenChange={setSearchOpen}
          onFocusHit={focusHit}
          onRead={readNode}
          onFocusInGraph={descend}
          canRead={canRead}
        />
      </div>

      <div className="ng-graph-page__bottomleft">
        <EdgeLegend
          toggles={edgeToggles}
          onToggleBackbone={toggleBackbone}
          onToggleRelations={toggleRelations}
          showDomainKey={tier === 'overview'}
          categoryKey={categoryKey}
        />
      </div>

      <div className="ng-graph-page__bottomright">
        <GraphControls onZoomIn={() => zoomBy('in')} onZoomOut={() => zoomBy('out')} onFit={fit} />
      </div>

      <NodeSidePanel
        node={selectedNode}
        open={selectedNode != null}
        domainLabel={selectedNode ? domainLabelFor(selectedNode.domain) : ''}
        categoryLabel={selectedCategoryLabel}
        shippedDegree={selectedNode ? shippedDegrees[selectedNode.index] ?? 0 : 0}
        tier={tier}
        provenance={meta.provenance}
        canRead={selectedNode ? canRead(selectedNode) : false}
        pageHref={selectedNode && canRead(selectedNode) ? `/page/${pageSlug(selectedNode)}` : null}
        onClose={() => clickBackground()}
        onFocusInGraph={descend}
      />

      <NodeListFallback nodes={topNodes} onFocus={focusHit} totalNodes={allNodes.length} />

      <ScopeStatus
        status={status}
        progressLabel={progressLabel}
        error={error}
        tier={tier}
        onRetry={() => void load(urlRef)}
        onOverview={() => goToScope({ tier: 'overview' })}
      />
    </div>
  );
}
