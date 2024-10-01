// Esse é um jeito novo pra mim de importar SVGs, mas caso você queira um jeito mais simples de importar, dá pra você colocar os SVGs na pasta
// assets e importar ele no arquivo que você precisa do mesmo jeito que foi importado no arquivo principal.
// ex: import {CssSvg} from "./assets/css.svg"
// Acredito que fique mais rápido o carregametno do projeto.

// PS: o efeito hover ficou bem legal

function HtmlSvg() {
    return (
        <>
            <svg width="65" height="64" viewBox="0 0 65 64" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g clip-path="url(#clip0_1_160)">
                    <path d="M53.8334 10.6667L48.5001 49.3334L32.5001 54.6667L16.5001 49.3334L11.1667 10.6667H53.8334Z" stroke="#E34F26" stroke-width="4" stroke-linecap="round" stroke-linejoin="round" />
                    <path d="M41.8334 21.3333H23.1667L24.5001 31.9999H40.5001L39.1667 41.3333L32.5001 43.3333L25.8334 41.3333L25.5667 39.9999" stroke="#E34F26" stroke-width="4" stroke-linecap="round" stroke-linejoin="round" />
                </g>
                <defs>
                    <clipPath id="clip0_1_160">
                        <rect width="64" height="64" fill="white" transform="translate(0.5)" />
                    </clipPath>
                </defs>
            </svg>
            <span>Html</span>
        </>

    );
};

function CssSvg() {
    return (
        <>
            <svg width="65" height="64" viewBox="0 0 65 64" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g clip-path="url(#clip0_1_167)">
                    <path d="M53.8334 10.6667L48.5001 49.3334L32.5001 54.6667L16.5001 49.3334L11.1667 10.6667H53.8334Z" stroke="#1572B6" stroke-width="4" stroke-linecap="round" stroke-linejoin="round" />
                    <path d="M23.1667 21.3333H41.8334L29.8334 31.9999H40.5001L39.1667 41.3333L32.5001 43.3333L25.8334 41.3333L25.5667 39.9999" stroke="#1572B6" stroke-width="4" stroke-linecap="round" stroke-linejoin="round" />
                </g>
                <defs>
                    <clipPath id="clip0_1_167">
                        <rect width="64" height="64" fill="white" transform="translate(0.5)" />
                    </clipPath>
                </defs>
            </svg>
            <span>Css</span>
        </>

    );
};

function GitSvg() {
    return (
        <>
            <svg width="65" height="64" viewBox="0 0 65 64" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g clip-path="url(#clip0_1_207)">
                    <path d="M40.5 32C40.5 32.7073 40.781 33.3856 41.281 33.8857C41.7811 34.3858 42.4594 34.6667 43.1667 34.6667C43.8739 34.6667 44.5522 34.3858 45.0523 33.8857C45.5524 33.3856 45.8333 32.7073 45.8333 32C45.8333 31.2928 45.5524 30.6145 45.0523 30.1144C44.5522 29.6143 43.8739 29.3334 43.1667 29.3334C42.4594 29.3334 41.7811 29.6143 41.281 30.1144C40.781 30.6145 40.5 31.2928 40.5 32Z" stroke="#F05032" stroke-width="4" stroke-linecap="round" stroke-linejoin="round" />
                    <path d="M29.8333 21.3333C29.8333 22.0405 30.1142 22.7188 30.6143 23.2189C31.1144 23.719 31.7927 24 32.4999 24C33.2072 24 33.8854 23.719 34.3855 23.2189C34.8856 22.7188 35.1666 22.0405 35.1666 21.3333C35.1666 20.626 34.8856 19.9478 34.3855 19.4477C33.8854 18.9476 33.2072 18.6666 32.4999 18.6666C31.7927 18.6666 31.1144 18.9476 30.6143 19.4477C30.1142 19.9478 29.8333 20.626 29.8333 21.3333Z" stroke="#F05032" stroke-width="4" stroke-linecap="round" stroke-linejoin="round" />
                    <path d="M29.8333 42.6667C29.8333 43.3739 30.1142 44.0522 30.6143 44.5523C31.1144 45.0524 31.7927 45.3333 32.4999 45.3333C33.2072 45.3333 33.8854 45.0524 34.3855 44.5523C34.8856 44.0522 35.1666 43.3739 35.1666 42.6667C35.1666 41.9594 34.8856 41.2811 34.3855 40.781C33.8854 40.281 33.2072 40 32.4999 40C31.7927 40 31.1144 40.281 30.6143 40.781C30.1142 41.2811 29.8333 41.9594 29.8333 42.6667Z" stroke="#F05032" stroke-width="4" stroke-linecap="round" stroke-linejoin="round" />
                    <path d="M32.5 40V24" stroke="#F05032" stroke-width="4" stroke-linecap="round" stroke-linejoin="round" />
                    <path d="M40.5001 29.3333L35.1667 24" stroke="#F05032" stroke-width="4" stroke-linecap="round" stroke-linejoin="round" />
                    <path d="M29.8333 18.6666L24.7666 13.6" stroke="#F05032" stroke-width="4" stroke-linecap="round" stroke-linejoin="round" />
                    <path d="M36.356 6.93332L57.5693 28.144C58.592 29.1667 59.1665 30.5537 59.1665 32C59.1665 33.4463 58.592 34.8333 57.5693 35.856L36.356 57.0693C35.3333 58.092 33.9463 58.6665 32.5 58.6665C31.0537 58.6665 29.6667 58.092 28.644 57.0693L7.43065 35.856C6.40801 34.8333 5.8335 33.4463 5.8335 32C5.8335 30.5537 6.40801 29.1667 7.43065 28.144L28.644 6.93065C29.6667 5.90801 31.0537 5.3335 32.5 5.3335C33.9463 5.3335 35.3333 5.91067 36.356 6.93332Z" stroke="#F05032" stroke-width="4" stroke-linecap="round" stroke-linejoin="round" />
                </g>
                <defs>
                    <clipPath id="clip0_1_207">
                        <rect width="64" height="64" fill="white" transform="translate(0.5)" />
                    </clipPath>
                </defs>
            </svg>
            <span>Git</span>
        </>

    );
};

function GitHSvg() {
    return (
        <>
            <svg width="65" height="64" viewBox="0 0 65 64" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M40.5 58.6667V48C40.871 44.6595 39.9132 41.307 37.8333 38.6667C45.8333 38.6667 53.8334 33.3334 53.8334 24C54.0467 20.6667 53.1133 17.3867 51.1667 14.6667C51.9133 11.6 51.9133 8.40004 51.1667 5.33337C51.1667 5.33337 48.5 5.33337 43.1667 9.33337C36.1267 8.00004 28.8734 8.00004 21.8334 9.33337C16.5 5.33337 13.8334 5.33337 13.8334 5.33337C13.0334 8.40004 13.0334 11.6 13.8334 14.6667C11.8917 17.3757 10.9493 20.6741 11.1667 24C11.1667 33.3334 19.1667 38.6667 27.1667 38.6667C26.1267 39.9734 25.3533 41.4667 24.9 43.0667C24.4467 44.6667 24.3134 46.3467 24.5 48V58.6667" stroke="#EBEBEB" stroke-width="4" stroke-linecap="round" stroke-linejoin="round" />
                <path d="M24.4999 48C12.4733 53.3333 11.1666 42.6666 5.83325 42.6666" stroke="#EBEBEB" stroke-width="4" stroke-linecap="round" stroke-linejoin="round" />
            </svg>
            <span>GitHub</span>
        </>
    );
};

function JsSvg() {
    return (
        <>
            <svg width="65" height="64" viewBox="0 0 65 64" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g clip-path="url(#clip0_1_173)">
                    <path d="M53.8334 10.6667L48.5001 49.3334L32.5001 54.6667L16.5001 49.3334L11.1667 10.6667H53.8334Z" stroke="#F7DF1E" stroke-width="4" stroke-linecap="round" stroke-linejoin="round" />
                    <path d="M20.5 21.3333H28.5V42.6666L23.1667 39.9999" stroke="#F7DF1E" stroke-width="4" stroke-linecap="round" stroke-linejoin="round" />
                    <path d="M44.5 21.3333H37.8333C37.4797 21.3333 37.1406 21.4737 36.8905 21.7238C36.6405 21.9738 36.5 22.313 36.5 22.6666V30.6666C36.5 31.0202 36.6405 31.3593 36.8905 31.6094C37.1406 31.8594 37.4797 31.9999 37.8333 31.9999H41.628C41.8189 31.9999 42.0075 32.0409 42.1811 32.1201C42.3548 32.1993 42.5094 32.3149 42.6345 32.459C42.7596 32.6031 42.8524 32.7724 42.9065 32.9554C42.9606 33.1384 42.9747 33.3309 42.948 33.5199L41.8333 41.3333L36.5 42.6666" stroke="#F7DF1E" stroke-width="4" stroke-linecap="round" stroke-linejoin="round" />
                </g>
                <defs>
                    <clipPath id="clip0_1_173">
                        <rect width="64" height="64" fill="white" transform="translate(0.5)" />
                    </clipPath>
                </defs>
            </svg>
            <span>JavaScript</span>
        </>
    );
};

function RcSvg() {
    return (
        <>
            <svg width="65" height="64" viewBox="0 0 65 64" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g clip-path="url(#clip0_1_181)">
                    <path d="M17.3159 23.2292C10.3773 25.1572 5.83325 28.3652 5.83325 31.9999C5.83325 37.8932 17.7719 42.6666 32.4999 42.6666C34.5613 42.6666 36.5693 42.5732 38.4946 42.3946" stroke="#61DAFB" stroke-width="4" stroke-linecap="round" stroke-linejoin="round" />
                    <path d="M47.6787 40.7706C54.62 38.8453 59.1667 35.6346 59.1667 31.9999C59.1667 26.1066 47.228 21.3333 32.5 21.3333C30.4387 21.3333 28.4307 21.4266 26.5 21.6053" stroke="#61DAFB" stroke-width="4" stroke-linecap="round" stroke-linejoin="round" />
                    <path d="M17.3132 40.7653C15.5106 47.7387 16.0199 53.28 19.1666 55.0933C24.2679 58.04 34.3746 50.088 41.7372 37.3333C42.7692 35.5467 43.6919 33.7627 44.4999 32" stroke="#61DAFB" stroke-width="4" stroke-linecap="round" stroke-linejoin="round" />
                    <path d="M47.684 23.2427C49.4893 16.2667 48.9826 10.72 45.8333 8.90671C40.732 5.96005 30.6253 13.912 23.2626 26.6667C22.2306 28.4534 21.308 30.24 20.4973 32" stroke="#61DAFB" stroke-width="4" stroke-linecap="round" stroke-linejoin="round" />
                    <path d="M32.4999 14.4639C27.3665 9.4186 22.3132 7.08793 19.1665 8.9066C14.0652 11.8506 15.8972 24.5786 23.2625 37.3333C24.2919 39.1199 25.3772 40.8106 26.4945 42.3893" stroke="#61DAFB" stroke-width="4" stroke-linecap="round" stroke-linejoin="round" />
                    <path d="M32.5 49.5306C37.636 54.5786 42.6893 56.9119 45.8333 55.0932C50.9347 52.1492 49.1027 39.4212 41.7373 26.6666C40.7373 24.9332 39.6573 23.2452 38.5053 21.6079" stroke="#61DAFB" stroke-width="4" stroke-linecap="round" stroke-linejoin="round" />
                    <path d="M31.1667 34.3094C31.47 34.4873 31.8056 34.6034 32.1541 34.651C32.5025 34.6987 32.8569 34.6769 33.1969 34.587C33.5369 34.4972 33.8558 34.3409 34.1351 34.1273C34.4145 33.9137 34.6488 33.6469 34.8247 33.3423C35.0005 33.0378 35.1144 32.7014 35.1597 32.3527C35.2051 32.0039 35.181 31.6497 35.0888 31.3103C34.9967 30.9709 34.8383 30.6531 34.6228 30.3751C34.4074 30.0972 34.139 29.8646 33.8333 29.6908C33.2212 29.3427 32.4962 29.2509 31.8166 29.4355C31.137 29.62 30.558 30.0658 30.2059 30.6756C29.8538 31.2854 29.7572 32.0098 29.9372 32.6906C30.1172 33.3714 30.5592 33.9533 31.1667 34.3094Z" stroke="#61DAFB" stroke-width="4" stroke-linecap="round" stroke-linejoin="round" />
                </g>
                <defs>
                    <clipPath id="clip0_1_181">
                        <rect width="64" height="64" fill="white" transform="translate(0.5)" />
                    </clipPath>
                </defs>
            </svg>
            <span>React</span>
        </>
    );
};

function TwSvg() {
    return (
        <>
            <svg width="65" height="64" viewBox="0 0 65 64" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g clip-path="url(#clip0_1_194)">
                    <path d="M31.612 16C24.972 16 20.828 19.2587 19.1667 25.7787C21.6547 22.5173 24.5613 21.2987 27.8787 22.112C29.772 22.576 31.124 23.9253 32.62 25.4187C35.0627 27.8507 37.9533 30.6667 44.0547 30.6667C50.6947 30.6667 54.8387 27.408 56.5 20.888C54.012 24.1493 51.1053 25.368 47.788 24.5547C45.8947 24.0907 44.5427 22.7413 43.0467 21.248C40.604 18.816 37.78 16 31.612 16ZM20.9453 33.3333C14.3053 33.3333 10.1613 36.592 8.5 43.112C10.988 39.8507 13.8947 38.632 17.212 39.4453C19.1053 39.9093 20.4573 41.2587 21.9533 42.752C24.396 45.184 27.22 48 33.388 48C40.028 48 44.172 44.7413 45.8333 38.2213C43.3453 41.4827 40.4387 42.7013 37.1213 41.888C35.228 41.424 33.876 40.0747 32.38 38.5813C29.9373 36.1493 27.1133 33.3333 20.9453 33.3333Z" stroke="#38B2AC" stroke-width="4" stroke-linecap="round" stroke-linejoin="round" />
                </g>
                <defs>
                    <clipPath id="clip0_1_194">
                        <rect width="64" height="64" fill="white" transform="translate(0.5)" />
                    </clipPath>
                </defs>
            </svg>
            <span>TailWind Css</span>
        </>

    );
};

function VsSvg() {
    return (
        <>
            <svg width="65" height="64" viewBox="0 0 65 64" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g clip-path="url(#clip0_1_219)">
                    <path d="M43.1667 8V56L53.8334 49.3333V14.6667L43.1667 8Z" stroke="#007ACC" stroke-width="4" stroke-linecap="round" stroke-linejoin="round" />
                    <path d="M24.94 37.0747L13.8333 46.6667L8.5 44L20.0547 32M24.6813 27.1947L43.1667 8V21.3333L30.38 32.376" stroke="#007ACC" stroke-width="4" stroke-linecap="round" stroke-linejoin="round" />
                    <path d="M43.1667 44L13.8333 17.3334L8.5 20L43.1667 56" stroke="#007ACC" stroke-width="4" stroke-linecap="round" stroke-linejoin="round" />
                </g>
                <defs>
                    <clipPath id="clip0_1_219">
                        <rect width="64" height="64" fill="white" transform="translate(0.5)" />
                    </clipPath>
                </defs>
            </svg>
            <span>VsCode</span>
        </>

    );
};
export { HtmlSvg, CssSvg, GitSvg, GitHSvg, JsSvg, RcSvg, TwSvg, VsSvg };