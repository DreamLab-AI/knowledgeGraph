/**
 * App.tsx — the editorial site layout (PRD-NG-001 §4/§6).
 *
 * Renders the house chrome (SiteChrome: top nav + reading canvas + mesh footer)
 * around the routed view. Designed as a drop-in React Router layout element:
 * the router (owned by the explorer-ux builder) mounts this at path '/' with
 * child routes rendered through the <Outlet/>. It replaces the old standalone
 * graph-only App and the dark AppLayout chrome.
 *
 * Routing is NOT defined here (that stays in router.tsx). This file only owns
 * the shell.
 */

import { Outlet } from 'react-router-dom';
import { SiteChrome } from './site/SiteChrome';
import './App.css';

export default function App() {
  return (
    <SiteChrome>
      <Outlet />
    </SiteChrome>
  );
}
