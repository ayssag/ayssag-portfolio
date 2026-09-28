import { Box, Typography } from "@mui/material"
import { useTranslation } from "react-i18next"
import { useParams } from "react-router-dom"
import { getSectionId, type SupportedLang } from "@/i18n/routesMap"

function ContactSection() {
    const { t } = useTranslation();
    const { lang = 'pt' } = useParams<{ lang: SupportedLang }>();
    const sectionId = getSectionId('home.contact', lang as SupportedLang);

    return (
        <Box id={sectionId} sx={{ height: "100vh" }}>
            <Typography variant="h1">{t('pages.home.contact.title')}</Typography>
        </Box>
    )
}

export default ContactSection
