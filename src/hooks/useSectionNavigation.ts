import { useEffect } from 'react';
import { useParams } from 'react-router-dom';

export function useSectionNavigation(pagePath: string = 'home', heroId: string = 'hero') {
  const { lang = 'pt' } = useParams<{ lang: string }>();

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const id = entry.target.id;
            const hash = id && id !== heroId ? `#${id}` : '';
            if (window.location.hash !== hash) {
              window.history.replaceState(null, '', `/${lang}/${pagePath}${hash}`);
            }
          }
        });
      },
      { rootMargin: '-40% 0px -40% 0px' }
    );

    document.querySelectorAll('[id]').forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [lang, pagePath, heroId]);
}

export default useSectionNavigation;
