import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './App.css';

// Definição da interface para os dados do usuário (exemplo)
interface UserData {
  userId: string;
  email: string;
  token: string;
}

export default function App() {
  const [username, setUsername] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [message, setMessage] = useState<string>('');
  const [data, setData] = useState<UserData | null>(null); // data pode ser UserData OU null

  const navigate = useNavigate();

  const logar = async () => {
    if (username === 'kat' && password === '123') {
      try {
        await new Promise(resolve => setTimeout(resolve, 500));
        const fakeToken = 'fake-jwt-token-111';
        localStorage.setItem('token', fakeToken);

        const loggedInUserData: UserData = {
          userId: 'kat_user_id',
          email: 'kat@example.com',
          token: fakeToken,
        };
        setData(loggedInUserData); // Agora 'data' é do tipo UserData

        setMessage('Login bem-sucedido!');
        console.log('Login bem-sucedido!');
        // Idealmente, você só navega após um pequeno atraso para o usuário ver a mensagem de sucesso
        setTimeout(() => {
          navigate('/home');
        }, 1000); // Redireciona após 1 segundo
      } catch (error) {
        console.error('Erro inesperado:', error);
        setMessage('Erro inesperado ao tentar fazer login.');
        alert('Erro inesperado.');
      }
    } else {
      setMessage('Usuário ou senha incorretos!');
      alert('Usuário ou senha incorretos!');
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#D0E6F0] p-6 lg:p-0">
      {/* Login Container */}
      <div className="flex flex-col lg:flex-row w-full max-w-6xl h-auto lg:h-[80vh] rounded-2xl shadow-xl overflow-hidden bg-white">
        {/* Login Card (Formulário) */}
        <div className="flex-1 flex flex-col justify-center items-center p-8 md:p-12 bg-white relative z-10">
          <h1 className="font-serif text-4xl lg:text-5xl font-bold text-[#1C3A5E] mb-3 text-center">
            {/* Exemplo de uso do 'data': Mudar o título se houver dados de usuário */}
            {data ? `Bem-vindo(a) de volta, ${data.email.split('@')[0]}!` : 'Bem-vindo(a) de volta'}
          </h1>
          <p className="font-sans text-lg text-[#3A6B9B] mb-8 text-center max-w-md">
            Faça login para continuar sua jornada.
          </p>

          <div className="w-full max-w-sm space-y-5">
            {/* ... (campos de usuário e senha) ... */}
            <div className="w-full">
              <label htmlFor="username" className="block text-sm font-sans text-[#1C3A5E] mb-2">
                Usuário
              </label>
              <input
                type="text"
                id="username"
                placeholder="seu_usuario"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className="w-full px-4 py-3 border border-[#A3B4C5] rounded-lg text-[#1C3A5E] placeholder-[#A3B4C5] focus:outline-none focus:ring-2 focus:ring-[#6CA0CC] transition-all duration-300 font-sans"
              />
            </div>

            {/* Campo Senha */}
            <div className="w-full">
              <label htmlFor="password" className="block text-sm font-sans text-[#1C3A5E] mb-2">
                Senha
              </label>
              <input
                type="password"
                id="password"
                placeholder="********"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-4 py-3 border border-[#A3B4C5] rounded-lg text-[#1C3A5E] placeholder-[#A3B4C5] focus:outline-none focus:ring-2 focus:ring-[#6CA0CC] transition-all duration-300 font-sans"
              />
            </div>

            {/* Mensagem de erro/sucesso */}
            {message && (
              <p className={`text-center font-sans ${message.includes('sucesso') ? 'text-green-600' : 'text-red-600'}`}>
                {message}
              </p>
            )}

            {/* Opções (Lembrar de mim / Esqueceu a senha) */}
            <div className="flex justify-between items-center text-sm font-sans">
              <label className="flex items-center text-[#3A6B9B]">
                <input type="checkbox" className="mr-2 accent-[#1C3A5E]" /> Lembrar de mim
              </label>
              <a href="#" className="text-[#6CA0CC] hover:underline transition-colors duration-300">
                Esqueceu a senha?
              </a>
            </div>

            {/* Botão Logar */}
            <button
              onClick={logar}
              className="w-full py-3 px-6 bg-[#1C3A5E] text-white font-semibold text-lg rounded-lg shadow-md hover:bg-[#3A6B9B] hover:scale-[1.01] transition-all duration-300 tracking-wide font-sans"
            >
              Entrar
            </button>
          </div>

          {/* Link para Cadastro */}
          <p className="mt-8 text-[#3A6B9B] text-md font-sans">
            Não tem uma conta?{' '}
            <a href="/cadastro" className="font-semibold text-[#1C3A5E] hover:underline transition-colors duration-300">
              Cadastre-se aqui
            </a>
          </p>

          {/* Exemplo de uso: exibir dados do usuário se data não for nulo (apenas para debug/teste) */}
          {data && (
            <div className="mt-4 p-4 border rounded-lg bg-gray-50 text-sm text-gray-700">
              <p>Usuário Logado: {data.email}</p>
              <p>ID: {data.userId}</p>
              {/* CUIDADO: Não exibir tokens de segurança diretamente na UI em produção */}
              <p>Token (dev only): {data.token.substring(0, 10)}...</p>
            </div>
          )}

        </div>

        {/* Imagem de Fundo Lateral (com tema azul e vintage) */}
        <div
          className="flex-1.2 relative bg-cover bg-center hidden lg:flex items-end justify-center p-8"
          style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1542475451-2292025178a9?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D")' }}
        >
          <div className="absolute inset-0 bg-gradient-to-t from-[#1C3A5E]/70 to-transparent flex flex-col justify-end items-center text-center p-10">
            <h2 className="font-serif text-3xl font-bold text-white mb-3 drop-shadow-md">
              Acesse seu universo
            </h2>
            <p className="font-sans text-lg text-white/90 leading-relaxed max-w-md drop-shadow-sm">
              Descubra novas possibilidades a cada login.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}