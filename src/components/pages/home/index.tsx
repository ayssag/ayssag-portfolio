import { Box, Typography } from "@mui/material";
import { useTranslation } from "react-i18next";

export function Home() {
    const { t } = useTranslation();
    return (
        <Box sx={{ padding: 2 }}>
            <Typography variant="h1">{t('pages.home.title')}</Typography>
        </Box>
    );
}

export default Home;