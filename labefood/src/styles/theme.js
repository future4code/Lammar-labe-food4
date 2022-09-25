import { extendTheme } from "@chakra-ui/react"

export const theme = extendTheme({
    components: {
        Button: {
            variants: {
                "form-main": {
                    width: "100%",
                    bg: "red.500",
                    color: "white",
                    _hover: {
                        bg: "white",
                        color: "red.500",
                        border: "3px solid red"
                    }
                },
                "form-secondary": {
                    width: "100%",
                    bg: "white",
                    color: "black.500",
                    _hover: {
                        fontWeight: "normal",
                        color: "black",
                        textDecoration: "underline",
                        border: "1px solid grey",
                    }
                },
                "add-recipe": {
                    borderRadius: '50%',
                    fontSize: "2rem",
                    width: "30px",
                    padding: "5px",
                    bg: "red.500",
                    position: "fixed",
                    bottom: "15px",
                    right: "15px",
                    transition: "0.5s",
                    _hover: {
                        transform: "scale(1.05)"
                    }
                }
            }
        }
    },
    colors: {
        laranja: {
            100: "#F8E1CC",
            500: "#FE7E02",
        },
        laranja2: {
            100: "#F8E3BF",
            500: "#f9b24e"
        }
    }
})

  
