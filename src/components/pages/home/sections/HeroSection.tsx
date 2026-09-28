import { Box, Typography } from "@mui/material"
import { useTranslation } from "react-i18next"

function HeroSection() {
    const { t } = useTranslation();
    return (
        <Box id="hero" sx={{ height: "100vh" }}>
            <Typography variant="h1">{t('pages.home.hero.title')}</Typography>
        </Box>
    )
}

export default HeroSection