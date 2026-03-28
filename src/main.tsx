import './index.css';

const rootEl = document.getElementById('root')!;

if (rootEl.innerHTML.trim()) {
  // Pre-rendered HTML exists — hydrate for SPA behavior
  import('./entry-client');
} else {
  // Dev mode or no pre-rendered content — full client render
  import('react-dom/client').then(({ createRoot }) => {
    import('./App').then(({ default: App }) => {
      createRoot(rootEl).render(<App />);
    });
  });
}
