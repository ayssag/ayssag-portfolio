import { Box, Typography } from "@mui/material"
import { useTranslation } from "react-i18next"
import { useParams } from "react-router-dom"
import { getSectionId, type SupportedLang } from "@/i18n/routesMap"

function WorkSection() {
    const { t } = useTranslation();
    const { lang = 'pt' } = useParams<{ lang: SupportedLang }>();
    const sectionId = getSectionId('home.work', lang as SupportedLang);

    return (
        <Box id={sectionId} sx={{ height: "100vh" }}>
            <Typography variant="h1">{t('pages.home.work.title')}</Typography>
        </Box>
    )
}

export default WorkSection