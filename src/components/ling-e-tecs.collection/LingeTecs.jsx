import { HtmlSvg, CssSvg, GitSvg, GitHSvg, JsSvg, RcSvg, TwSvg, VsSvg } from "./lingetecsSVGs/indexSvgs";

function LingeTecs() {
    return (
        <div className="bg-dark-color pb-6">
            {/* 
      Semanticamente, quando queremos delimitar um espaço para um conteúdo específico, não utilizamos "div" e sim "section"
      */}

            <div className="container w-auto ml-auto mr-auto flex justify-center flex-wrap mt-6">
                <h3 className="text-center text-light-color mb-5 border-b-2 w-56">Linguagens e Tecnológias</h3>

                {/* 
                ajustar tamanho da fonte e espaçamento entre o nome e a linha abaixo dele
                */}
            </div>
            
            {/* 
            ajustar o espaçamento entre cada ícone de linguagem, estão muito próximias 
            */}

            <div className="max-w-[767px] ml-auto mr-auto">
                <div className="flex flex-wrap justify-center gap-3">
                    <div className="bg-dark-color-second rounded-md w-36 h-36 flex items-center justify-center flex-col text-light-color hover:bg-[rgba(23,7,3,0.60)] duration-200 cursor-pointer">
                        <HtmlSvg />
                    </div>

                    <div className="bg-dark-color-second rounded-md w-36 h-36 flex items-center justify-center flex-col text-light-color hover:bg-[rgba(21,114,182,0.60)] duration-200 cursor-pointer">
                        <CssSvg />
                    </div>

                    <div className="bg-dark-color-second rounded-md w-36 h-36 flex items-center justify-center flex-col text-light-color hover:bg-[rgb(247,223,30,0.60)] duration-200 cursor-pointer">
                        <JsSvg />
                    </div>

                    <div className="bg-dark-color-second rounded-md w-36 h-36 flex items-center justify-center flex-col text-light-color hover:bg-[rgba(97,218,251,0.60)] duration-200 cursor-pointer">
                        <RcSvg />
                    </div>

                    <div className="bg-dark-color-second rounded-md w-36 h-36 flex items-center justify-center flex-col text-light-color hover:bg-[rgba(240,80,50,0.60)] duration-200 cursor-pointer">
                        <GitSvg />
                    </div>

                    <div className="bg-dark-color-second rounded-md w-36 h-36 flex items-center justify-center flex-col text-light-color hover:bg-[rgba(235,235,235,0.60)] duration-200 cursor-pointer">
                        <GitHSvg />
                    </div>

                    <div className="bg-dark-color-second rounded-md w-36 h-36 flex items-center justify-center flex-col text-light-color hover:bg-[rgba(0,122,204,0.60)] duration-200 cursor-pointer">
                        <VsSvg />
                    </div>

                    <div className="bg-dark-color-second rounded-md w-36 h-36 flex items-center justify-center flex-col text-light-color hover:bg-[rgba(56,178,172,0.60)] duration-200 cursor-pointer">
                        <TwSvg />
                    </div>
                </div>
            </div>

        </div>
    );
};

export default LingeTecs;