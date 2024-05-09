export default function GlobalStyle(){
    return (
        <style global jsx>{`
        @tailwind base;
        @tailwind components;
        @tailwind utilities;
            * {
                box-sizing: border-box;
                padding: 0;
                margin: 0;
                font-family: sans-serif;
            }
        `}</style>
    )
}
