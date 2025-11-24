import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
    variable: "--font-geist-sans",
    subsets: ["latin"],
});

const geistMono = Geist_Mono({
    variable: "--font-geist-mono",
    subsets: ["latin"],
});

export const metadata: Metadata = {
    title: "Ethan Nguyen-Tu's Tic-Tac-Toe",
    description: "A tic-tac-toe game built with Next.js and TypeScript.",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <head>
                <meta charSet="UTF-8" />
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1.0"
                />
                <title>Tic-Tac-Toe</title>
            </head>

            <body
                className={`${geistSans.variable} ${geistMono.variable} center`}
            >
                <h1>
                    Welcome to{" "}
                    <a href="https://github.com/ethannguyen-tu">
                        Ethan Nguyen-Tu
                    </a>
                    's Tic-Tac-Toe!
                </h1>
                <div className="center instructions-box">
                    <b>Instructions:</b>
                    <ol>
                        <li>
                            There are a maximum of <b>2</b> players in this
                            game.
                        </li>
                        <li>
                            <b>Left-click</b> on one of the square tiles in the
                            left-side grid to start.
                        </li>
                        <li>
                            Above the grid, "Next Player:" specifies who's turn
                            it is to select a tile.
                        </li>
                        <li>
                            In order to win, a{" "}
                            <b>full row, column, or diagonal</b> of a player's
                            mark should be filled <b>without</b> another's
                            player mark interrupting it.
                        </li>
                    </ol>
                </div>
                {children}
            </body>
        </html>
    );
}

