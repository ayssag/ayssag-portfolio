export type SupportedLang = 'pt' | 'en';

export interface RouteDefinition {
  key: string;
  paths: Record<SupportedLang, string>;
}

export const ROUTES: RouteDefinition[] = [
  {
    key: 'home',
    paths: {
      pt: '/pt/home',
      en: '/en/home',
    },
  },
  {
    key: 'home.about',
    paths: {
      pt: '/pt/home#sobre',
      en: '/en/home#about',
    },
  },
  {
    key: 'home.work',
    paths: {
      pt: '/pt/home#experiencia',
      en: '/en/home#work',
    },
  },
  {
    key: 'home.education',
    paths: {
      pt: '/pt/home#formacao',
      en: '/en/home#education',
    },
  },
  {
    key: 'home.projects',
    paths: {
      pt: '/pt/home#projetos',
      en: '/en/home#projects',
    },
  },
  {
    key: 'home.certificates',
    paths: {
      pt: '/pt/home#certificados',
      en: '/en/home#certificates',
    },
  },
  {
    key: 'home.contact',
    paths: {
      pt: '/pt/home#contato',
      en: '/en/home#contact',
    },
  },
];

export function getEquivalentPath(currentPath: string, targetLang: SupportedLang): string {
  const normalize = (p: string) => p.replace(/\/($|#)/, '$1');
  const normalizedCurrent = normalize(currentPath);

  const matchedRoute = ROUTES.find((route) => {
    return Object.values(route.paths).some((path) => {
      const normalizedPath = normalize(path);
      if (normalizedPath === normalizedCurrent) return true;
      if (path === currentPath) return true;
      if (path === '/pt/home' && (normalizedCurrent === '/pt' || normalizedCurrent === '/pt/home')) return true;
      if (path === '/en/home' && (normalizedCurrent === '/en' || normalizedCurrent === '/en/home')) return true;
      return false;
    });
  });

  if (matchedRoute) {
    return matchedRoute.paths[targetLang];
  }

  return `/${targetLang}/home`;
}

export function getRoutePath(key: string, lang: SupportedLang): string {
  const route = ROUTES.find((r) => r.key === key);
  if (!route) return `/${lang}/home`;
  return route.paths[lang];
}

export function getSectionId(key: string, lang: SupportedLang): string {
  const route = ROUTES.find((r) => r.key === key);
  if (!route) return '';
  const path = route.paths[lang];
  const hashIndex = path.indexOf('#');
  return hashIndex !== -1 ? path.substring(hashIndex + 1) : '';
}

export function getRouteKeyFromSectionId(sectionId: string, lang: SupportedLang): string | undefined {
  if (!sectionId) return 'home';
  const targetHash = `#${sectionId}`;
  const route = ROUTES.find((r) => r.paths[lang].endsWith(targetHash));
  return route?.key;
}


