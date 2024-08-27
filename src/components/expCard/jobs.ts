export interface Job {
  title: string;
  institution: string;
  description?: string;
  time: string;
};

export const jobs : Job[] = [
    {
        title: "Desenvolvedor mobile freelancer",
        institution: "Novo Horizonte Transportes",
        description: "Como desenvolvedor React Native, desenvolvi um aplicativo para gerenciamento de filas de motoristas. \nResponsabilidades: \n- Implementar todo o processo de cadastro, remoção e exclusão de motoristas, veículos e clientes.\n- Gerenciar a fila de motoristas, incluindo remoção de motoristas da fila, mudança de posição, solicitação de viagem pelo cliente, aceitação ou rejeição de viagem pelo administrador, utilizando estado global com React Context API.\n- Implementar requisições assíncronas utilizando Axios.\n- Integrar geolocalização no React Native.\n- Implementar tema global com Styled-components.\n- Gerenciar e validar formulários com React Hook Form e Zup.",
        time: "Set 2023 - Fev 2024",
    },
    {
        title: "Desenvolvedor fullstack freelancer",
        institution: "Martins Imóveis",
        description: "Como desenvolvedor full stack desenvolvi um site eficiente e responsivo para exibir seus imóveis disponíveis (CRUD). com funcionalidades de filtragem como, filtro por região, valor etc. Também foi implementado toda a parte da gestão de imovéis pelo administrador (Criação, Remoção, Exclusão) e também toda a parte de captação de clientes interessados direcionando tanto como mensagem por e-mail ou diretamente pelo whatsapp. Tecnologias que utilizei: HTML, CSS, JavaScript, JQuery, PHP, MySQL.",
        time: "Jul 2021 - Agos 2021",
    },
        {
        title: "Estagiário de suporte de informática",
        institution: "Curso Praticar",
        description: "Como estágio de suporte de informática prestava suporte aos funcionários e também fazia manutenções e modificações no site da empresa no site da empresa.",
        time: "Dez 2020 - Jul 2021",
    }
    
]