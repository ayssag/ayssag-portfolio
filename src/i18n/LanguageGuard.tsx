import { useEffect } from 'react';
import { useParams, useNavigate, useLocation, Outlet } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { getEquivalentPath, type SupportedLang } from './routesMap';

const VALID_LANGS: SupportedLang[] = ['pt', 'en'];

export function LanguageGuard() {
  const { lang } = useParams<{ lang?: string }>();
  const { i18n } = useTranslation();
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    if (!lang || !VALID_LANGS.includes(lang as SupportedLang)) {
      navigate('/pt/home', { replace: true });
      return;
    }

    if (i18n.language !== lang) {
      i18n.changeLanguage(lang);
    }

    const currentFullPath = location.pathname + location.hash;
    const equivalentPath = getEquivalentPath(currentFullPath, lang as SupportedLang);

    if (currentFullPath !== equivalentPath && currentFullPath + '/' !== equivalentPath) {
      navigate(equivalentPath, { replace: true });
    }
  }, [lang, i18n, navigate, location]);

  return <Outlet />;
}

export default LanguageGuard;
