import NextLink from "next/link";
import { Box, Button } from "@skynexui/components";

export default function Header() {
    return (
        <Box
            styleSheet={{
                border: "1px solid #F9703E",
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
                minWidth: "100%",
                padding: "32px",
                boxShadow: "1px 1px 5px 0 rgba(255,69,0,0.2)",
                backgroundColor: "gray",
            }}
        >
            <NextLink href={`/`}>
                <Button iconName="arrowRight" label="SITE LUCAS"/>
            </NextLink>
            <NextLink href={`/login`}>
                <Button iconName="github" label="LOGIN"/>
            </NextLink>
            <NextLink href={`/postsApi/1`}>
                <Button label="POSTS API"/>
            </NextLink>
        </Box>
    );
}
