import { useEffect, useState, useCallback } from 'react';

type RouteState = {
  path: string;
  params: Record<string, string>;
};

function getCurrentRoute(): RouteState {
  const hash = window.location.hash.replace(/^#/, '') || '/';
  const [path, queryString] = hash.split('?');
  const params: Record<string, string> = {};
  if (queryString) {
    new URLSearchParams(queryString).forEach((value, key) => {
      params[key] = value;
    });
  }
  return { path: path || '/', params };
}

export function useRouter() {
  const [route, setRoute] = useState<RouteState>(getCurrentRoute());

  useEffect(() => {
    const handler = () => {
      setRoute(getCurrentRoute());
      window.scrollTo({ top: 0, behavior: 'instant' as ScrollBehavior });
    };
    window.addEventListener('hashchange', handler);
    return () => window.removeEventListener('hashchange', handler);
  }, []);

  const navigate = useCallback((to: string) => {
    window.location.hash = to;
  }, []);

  return { path: route.path, params: route.params, navigate };
}
