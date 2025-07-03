import { useNavigate } from 'react-router-dom';
import './App.css'; // Importe o CSS que contém as diretivas Tailwind e as fontes

export default function Home() {
    const navigate = useNavigate();

    const goBack = () => {
        navigate(-1); // Volta para a página anterior
    };

    return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-[#D0E6F0] p-6 text-center relative overflow-hidden"> {/* bg-blue-pastel */}
            {/* Detalhes de Imagem/Elementos (sutis no fundo, com tema azul/vintage) */}
            <div className="absolute inset-0 pointer-events-none z-0">
                {/* Imagem/detalhe 1: abstrato, vintage */}
                <div
                    className="absolute top-5 left-10 w-36 h-36 bg-cover bg-center rounded-full opacity-10 rotate-[-15deg] hidden md:block"
                    style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1549488344-2453664d5ed7?q=80&w=1780&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D")' }}
                ></div>
                {/* Imagem/detalhe 2: papel amassado/textura vintage */}
                <div
                    className="absolute bottom-10 right-20 w-44 h-44 bg-cover bg-center rounded-lg opacity-10 rotate-[5deg] hidden md:block"
                    style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1544026366-02d20739f565?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D")' }}
                ></div>
                {/* Imagem/detalhe 3: detalhe de câmera antiga ou lente */}
                <div
                    className="absolute top-20 right-10 w-32 h-32 bg-cover bg-center rounded-full opacity-10 rotate-[25deg] hidden md:block"
                    style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1510127271424-6997a44f2d01?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D")' }}
                ></div>
            </div>

            {/* Conteúdo principal da Home */}
            <div className="bg-white p-10 md:p-16 rounded-2xl shadow-lg max-w-3xl w-full z-10">
                <h1 className="font-serif text-5xl md:text-6xl font-bold text-[#1C3A5E] mb-4"> {/* font-vintage-title, text-blue-dark */}
                    Bem-vindo(a), KatKat!
                </h1>
                <p className="font-sans text-xl text-[#3A6B9B] mb-6"> {/* font-modern-body, text-blue-medium */}
                    Sua jornada começa agora.
                </p>
                <p className="font-sans text-lg text-[#1C3A5E] leading-relaxed mb-10 max-w-2xl mx-auto"> {/* font-modern-body, text-blue-dark */}
                    Agradecemos por sua presença. Explore nosso sistema com uma interface que combina a beleza atemporal do vintage com a clareza do minimalismo.
                </p>
                <div className="flex flex-col sm:flex-row justify-center gap-5">
                    {/* Botão para alguma próxima ação (pode ser "Ir para o Painel", "Continuar") */}
                    <button
                        onClick={() => alert('Próxima ação!')} // Altere para a rota desejada
                        className="py-3 px-8 bg-[#1C3A5E] text-white font-semibold text-lg rounded-lg shadow-md hover:bg-[#3A6B9B] hover:scale-[1.02] transition-all duration-300 font-sans" /* bg-blue-dark, hover:bg-blue-medium, font-modern-body */
                    >
                        Continuar
                    </button>
                    {/* Botão Voltar */}
                    <button
                        onClick={goBack}
                        className="py-3 px-8 bg-transparent text-[#1C3A5E] border border-[#1C3A5E] font-semibold text-lg rounded-lg hover:bg-[#1C3A5E]/5 hover:text-[#3A6B9B] hover:border-[#3A6B9B] transition-all duration-300 font-sans" /* text-blue-dark, border-blue-dark, hover:text-blue-medium, hover:border-blue-medium, font-modern-body */
                    >
                        Voltar
                    </button>
                </div>
            </div>
        </div>
    );
}