import {extendTheme, theme as base} from '@chakra-ui/react'

const theme = extendTheme({
    fonts:{
        heading: `'Baloo 2', ${base.fonts.heading}`,
        body: `'Baloo 2', Open Sans, ${base.fonts.body}`
    },
    styles: {
        global: {
            body: {
                bg: 'purple.50'
            }
        }
    },
    breakpoints: {
        sm: '320px',
        md: '550px',
        lg: '600px',
        xl: '900px'
    }
});

export default theme;