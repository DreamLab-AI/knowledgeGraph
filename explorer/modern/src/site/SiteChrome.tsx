/**
 * SiteChrome.tsx — the editorial app shell (PRD-NG-001 §4/§6, DDD §5).
 *
 * Light chrome: a top nav (Home · Graph · Search · Data · About), the reading
 * canvas, and a footer carrying the seven-repo mesh + the VisionClaw bridge.
 * Landmarks + skip link + focus states are first-class (PRD §9 accessibility).
 *
 * Icons come from the in-repo SVG set (site/icons.tsx) — no icon fonts (D3).
 * This component owns no routing; it renders `children` (an <Outlet/> from the
 * router layout, which the explorer-ux builder wires).
 */

import { useEffect, useRef, useState, type ReactNode } from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';
import {
  MeshMarkIcon,
  GraphIcon,
  SearchIcon,
  ReadIcon,
  ExternalIcon,
  MenuIcon,
  CloseIcon,
} from './icons';
import { MESH_REPOS, VISIONCLAW } from './mesh';
import './site.css';

interface NavItem {
  to: string;
  label: string;
  end?: boolean;
}

const NAV: readonly NavItem[] = [
  { to: '/', label: 'Home', end: true },
  { to: '/graph', label: 'Graph' },
  { to: '/search', label: 'Search' },
  { to: '/data', label: 'Data' },
  { to: '/about', label: 'About' },
];

function TopNav() {
  const [open, setOpen] = useState(false);
  const location = useLocation();
  const firstMobileLink = useRef<HTMLAnchorElement>(null);

  // Close the mobile menu on any navigation.
  useEffect(() => setOpen(false), [location.pathname]);

  return (
    <header className="ng-header" role="banner">
      <div className="ng-header__inner">
        <Link to="/" className="ng-brand" aria-label="Narrative Goldmine — home">
          <MeshMarkIcon size={26} className="ng-brand__mark" />
          <span className="ng-brand__name">
            Narrative <span className="ng-brand__accent">Goldmine</span>
          </span>
        </Link>

        <nav className="ng-nav ng-nav--desktop" aria-label="Primary">
          <ul>
            {NAV.map((item) => (
              <li key={item.to}>
                <NavLink
                  to={item.to}
                  end={item.end}
                  className={({ isActive }) => 'ng-nav__link' + (isActive ? ' is-active' : '')}
                >
                  {item.label}
                </NavLink>
              </li>
            ))}
            {/* Research Notes lives outside the SPA router (a separate Logseq
                site preserved at /notes/), so it is a plain anchor. */}
            <li>
              <a className="ng-nav__link" href="/notes/">
                Research notes
              </a>
            </li>
          </ul>
        </nav>

        <button
          type="button"
          className="ng-nav__toggle"
          aria-expanded={open}
          aria-controls="ng-mobile-nav"
          aria-label={open ? 'Close menu' : 'Open menu'}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <CloseIcon size={22} /> : <MenuIcon size={22} />}
        </button>
      </div>

      {open && (
        <nav id="ng-mobile-nav" className="ng-nav ng-nav--mobile" aria-label="Primary (mobile)">
          <ul>
            {NAV.map((item, i) => (
              <li key={item.to}>
                <NavLink
                  ref={i === 0 ? firstMobileLink : undefined}
                  to={item.to}
                  end={item.end}
                  className={({ isActive }) => 'ng-nav__link' + (isActive ? ' is-active' : '')}
                >
                  {item.label}
                </NavLink>
              </li>
            ))}
            <li>
              <a className="ng-nav__link" href="/notes/">
                Research notes
              </a>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
}

function SiteFooter() {
  return (
    <footer className="ng-footer" role="contentinfo">
      <div className="ng-footer__inner">
        <div className="ng-footer__lead">
          <div className="ng-footer__brand">
            <MeshMarkIcon size={30} />
            <div>
              <p className="ng-footer__title">Narrative Goldmine</p>
              <p className="ng-footer__sub">The readable tier of the DreamLab knowledge mesh.</p>
            </div>
          </div>
          <p className="ng-footer__bridge">
            This corpus also renders live inside{' '}
            <a href={VISIONCLAW.repo} target="_blank" rel="noopener noreferrer">
              VisionClaw <ExternalIcon size={13} />
            </a>
            , an ontology-grounded 3D reasoning engine. This site is the Lexicon; VisionClaw is the
            Laboratory.
          </p>
        </div>

        <nav className="ng-footer__mesh" aria-label="DreamLab mesh repositories">
          <h2 className="ng-footer__heading">The mesh</h2>
          <ul>
            {MESH_REPOS.map((repo) => (
              <li key={repo.name}>
                <a href={repo.href} target="_blank" rel="noopener noreferrer">
                  <span className="ng-footer__repo">{repo.name}</span>
                  <span className="ng-footer__repo-blurb">{repo.blurb}</span>
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <nav className="ng-footer__links" aria-label="Site sections">
          <h2 className="ng-footer__heading">Read</h2>
          <ul>
            <li>
              <Link to="/search">
                <SearchIcon size={15} /> Search the corpus
              </Link>
            </li>
            <li>
              <Link to="/graph">
                <GraphIcon size={15} /> Explore the graph
              </Link>
            </li>
            <li>
              <Link to="/data">
                <ReadIcon size={15} /> The site is an API
              </Link>
            </li>
            <li>
              {/* Research Notes is a separate Logseq SPA preserved on deploy at
                  /notes/ — outside this app's router, so a plain anchor. */}
              <a href="/notes/">
                <ReadIcon size={15} /> Research notes
              </a>
            </li>
          </ul>
        </nav>
      </div>

      <div className="ng-footer__base">
        <p>
          Corpus curated by Dr John O&rsquo;Hare · DreamLab AI. Attributed{' '}
          <code>prov:wasAttributedTo did:nostr:jjohare</code>, reasoned under EL++.
        </p>
        <p className="ng-footer__rights">
          Source is the private <code>jjohare/logseq</code> graph. Published artifacts are open and
          documented on <Link to="/data">Data</Link>.
        </p>
      </div>
    </footer>
  );
}

export function SiteChrome({ children }: { children: ReactNode }) {
  return (
    <div className="ng-app">
      <a className="ng-skip-link" href="#ng-main">
        Skip to content
      </a>
      <TopNav />
      <main id="ng-main" className="ng-main" role="main" tabIndex={-1}>
        {children}
      </main>
      <SiteFooter />
    </div>
  );
}

export default SiteChrome;
