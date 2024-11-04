// Importa o React e o hook useState para gerenciar estados locais
import React, { useState } from "react";
// Importa o arquivo CSS específico para estilizar a página inicial
import "./homePage.css";
// Importa componentes reutilizáveis: Header, Menu e Dashboard
import Header from "../../components/header";
import Menu from "../../components/menu";
import Dashboard from "../../components/dashboard";

// Define o componente funcional HomePage
const HomePage = () => {
  // Define um estado "page" que armazena a página atual exibida, começando com "Pesquisas a Responder"
  const [page, setPage] = useState("Pesquisas a Responder");
  // Define um estado "isMenuOpen" que controla se o menu está aberto ou fechado, iniciando com `false`
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Função que retorna o conteúdo a ser exibido dependendo da página atual (valor de `page`)
  const renderContent = () => {
    switch (page) {
      case "Pesquisas a Responder":
      case "Pesquisas Respondidas":
      case "Cadastro de Colaborador":
      case "Criar Pesquisas":
        // Se o valor de `page` corresponder a um desses casos, renderiza o componente `Dashboard` com o título da página
        return <Dashboard title={page} />;
      default:
        // Caso não corresponda a nenhuma das páginas listadas, retorna `null`, ou seja, nada será renderizado
        return null;
    }
  };

  // Estrutura de renderização do componente HomePage
  return (
    <div className="home-container"> {/* Container principal da página */}
      {/* Renderiza o componente Header e passa uma função para alternar o menu como propriedade (prop) */}
      <Header onToggleMenu={() => setIsMenuOpen(!isMenuOpen)} />
      
      {/* Renderiza o Menu apenas se `isMenuOpen` for true (menu aberto) */}
      {isMenuOpen && <Menu page={page} set={setPage} />}
      
      <div className="home-content">
        {/* Chama a função renderContent para renderizar o conteúdo específico da página */}
        {renderContent()}
      </div>
    </div>
  );
};

// Exporta o componente HomePage para que possa ser importado e usado em outras partes do aplicativo
export default HomePage;
