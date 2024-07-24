import { Box, Grid } from "@mui/material";
import Image from 'next/image'

const Player = () => {
    return (
        <Box>
            <Grid>
                <Image
                    src="/profile.png"
                    width={500}
                    height={500}
                    alt="Picture of the author" />
            </Grid>
        </Box>
    )
}

export default Player;