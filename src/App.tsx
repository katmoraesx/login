import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './App.css'; // Importe o CSS que contém as diretivas Tailwind e as fontes

export default function App() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const logar = async () => {
        if (username === 'kat' && password === '123') {
            try {
                await new Promise(resolve => setTimeout(resolve, 500));
                const fakeToken = 'fake-jwt-token-111';
                localStorage.setItem('token', fakeToken);
                console.log('Login bem-sucedido!');
                navigate('/home');
            } catch (error) {
                console.error('Erro inesperado:', error);
                alert('Erro inesperado.');
            }
        } else {
            alert('Usuário ou senha incorretos!');
        }
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-[#D0E6F0] p-6 lg:p-0"> {/* bg-blue-pastel */}
            {/* Login Container */}
            <div className="flex flex-col lg:flex-row w-full max-w-6xl h-auto lg:h-[80vh] rounded-2xl shadow-xl overflow-hidden bg-white">
                {/* Login Card (Formulário) */}
                <div className="flex-1 flex flex-col justify-center items-center p-8 md:p-12 bg-white relative z-10">
                    <h1 className="font-serif text-4xl lg:text-5xl font-bold text-[#1C3A5E] mb-3 text-center"> {/* font-vintage-title, text-blue-dark */}
                        Bem-vindo(a) de volta
                    </h1>
                    <p className="font-sans text-lg text-[#3A6B9B] mb-8 text-center max-w-md"> {/* font-modern-body, text-blue-medium */}
                        Faça login para continuar sua jornada.
                    </p>

                    <div className="w-full max-w-sm space-y-5">
                        {/* Campo Usuário */}
                        <div className="w-full">
                            <label htmlFor="username" className="block text-sm font-sans text-[#1C3A5E] mb-2"> {/* font-modern-body, text-blue-dark */}
                                Usuário
                            </label>
                            <input
                                type="text"
                                id="username"
                                placeholder="seu_usuario"
                                value={username}
                                onChange={(e) => setUsername(e.target.value)}
                                className="w-full px-4 py-3 border border-[#A3B4C5] rounded-lg text-[#1C3A5E] placeholder-[#A3B4C5] focus:outline-none focus:ring-2 focus:ring-[#6CA0CC] transition-all duration-300 font-sans" /* border-gray-blue, text-blue-dark, placeholder-gray-blue, ring-blue-light */
                            />
                        </div>

                        {/* Campo Senha */}
                        <div className="w-full">
                            <label htmlFor="password" className="block text-sm font-sans text-[#1C3A5E] mb-2"> {/* font-modern-body, text-blue-dark */}
                                Senha
                            </label>
                            <input
                                type="password"
                                id="password"
                                placeholder="********"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                className="w-full px-4 py-3 border border-[#A3B4C5] rounded-lg text-[#1C3A5E] placeholder-[#A3B4C5] focus:outline-none focus:ring-2 focus:ring-[#6CA0CC] transition-all duration-300 font-sans" /* border-gray-blue, text-blue-dark, placeholder-gray-blue, ring-blue-light */
                            />
                        </div>

                        {/* Opções (Lembrar de mim / Esqueceu a senha) */}
                        <div className="flex justify-between items-center text-sm font-sans"> {/* font-modern-body */}
                            <label className="flex items-center text-[#3A6B9B]"> {/* text-blue-medium */}
                                <input type="checkbox" className="mr-2 accent-[#1C3A5E]" /> Lembrar de mim {/* accent-blue-dark */}
                            </label>
                            <a href="#" className="text-[#6CA0CC] hover:underline transition-colors duration-300"> {/* text-blue-light */}
                                Esqueceu a senha?
                            </a>
                        </div>

                        {/* Botão Logar */}
                        <button
                            onClick={logar}
                            className="w-full py-3 px-6 bg-[#1C3A5E] text-white font-semibold text-lg rounded-lg shadow-md hover:bg-[#3A6B9B] hover:scale-[1.01] transition-all duration-300 tracking-wide font-sans" /* bg-blue-dark, hover:bg-blue-medium, font-modern-body */
                        >
                            Entrar
                        </button>
                    </div>

                    {/* Link para Cadastro */}
                    <p className="mt-8 text-[#3A6B9B] text-md font-sans"> {/* text-blue-medium, font-modern-body */}
                        Não tem uma conta?{' '}
                        <a href="/cadastro" className="font-semibold text-[#1C3A5E] hover:underline transition-colors duration-300"> {/* text-blue-dark */}
                            Cadastre-se aqui
                        </a>
                    </p>
                </div>

                {/* Imagem de Fundo Lateral (com tema azul e vintage) */}
                <div
                    className="flex-1.2 relative bg-cover bg-center hidden lg:flex items-end justify-center p-8"
                    // Imagem abstrata com tons de azul para um toque vintage-minimalista
                    style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1542475451-2292025178a9?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D")' }}
                >
                    <div className="absolute inset-0 bg-gradient-to-t from-[#1C3A5E]/70 to-transparent flex flex-col justify-end items-center text-center p-10"> {/* from-blue-dark/70 */}
                        <h2 className="font-serif text-3xl font-bold text-white mb-3 drop-shadow-md"> {/* font-vintage-title */}
                            Acesse seu universo
                        </h2>
                        <p className="font-sans text-lg text-white/90 leading-relaxed max-w-md drop-shadow-sm"> {/* font-modern-body */}
                            Descubra novas possibilidades a cada login.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}