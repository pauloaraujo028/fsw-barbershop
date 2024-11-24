<div align="center"><h1 align="center" style="color: #8063f3; font-size: 50px; ">BarberBook</h1></div>
<p align="center">
	<em>Agendamento de barbearias com funcionalidades de login, dark mode, e mais.</em>
</p>
<p align="center">
	<img src="https://img.shields.io/github/last-commit/pauloaraujo028/fsw-barbershop?style=default&logo=git&logoColor=white&color=8063f3" alt="last-commit">
	<img src="https://img.shields.io/github/languages/top/pauloaraujo028/fsw-barbershop?style=default&color=8063f3" alt="repo-top-language">
	<img src="https://img.shields.io/github/languages/count/pauloaraujo028/fsw-barbershop?style=default&color=8063f3" alt="repo-language-count">
</p>
<div align="center">
  <h3 align="center" style="color: #8063f3;" >  
      <br />
      <a href="https://myagendify.vercel.app/" style="color: gray;" target="_blank">Ver Online</a>
      ·
      <a href="https://github.com/pauloaraujo028/fsw-barbershop/issues/new" style="color: gray;" target="_blank">Relatar Bug</a>
    </h3>
</div>

<br>

## Índice

- [Índice](#índice)
- [Sobre o Projeto](#sobre-o-projeto)
- [Stack Tecnológica](#stack-tecnológica)
- [Características](#características)
- [Construído com](#construído-com)
- [Começando](#começando)
  - [Pré-requisito](#pré-requisito)
  - [Instalação](#instalação)
  - [Uso](#uso)
- [Contribuição](#contribuição)
- [Contato](#contato)

## Sobre o Projeto

BarberBook é um sistema de agendamento para barbearias desenvolvido com Next.js, NextAuth.js, e Shadcn/UI, focado em facilitar o agendamento de horários para clientes e oferecer recursos como login via Google, pesquisa por nome e serviços, agendamentos pendentes e passados, e cancelamento de reservas. O projeto também inclui um suporte completo a Dark Mode para melhorar a experiência do usuário.

 <div style="border: 2px solid #8063f3; padding: 10px; border-radius: 10px;">
 <img width="100%" alt="nextjs-portfolio" src="https://github.com/user-attachments/assets/71fabcea-4547-474f-a855-673f863a0aa4" />
 </div>
 <!-- <img width="50%" alt="nextjs-portfolio" src="https://github.com/pauloaraujo028/icasei-frontend-test/assets/105018299/3efe141f-4d99-4dd4-a98b-12c3f6103ae9" /><img width="50%" alt="nextjs-portfolio" src="https://github.com/pauloaraujo028/icasei-frontend-test/assets/105018299/3efe141f-4d99-4dd4-a98b-12c3f6103ae9" /> -->

## Stack Tecnológica

- **[Next.js](https://nextjs.org/):** Framework React com suporte a SSR/SSG, otimizações avançadas de desempenho.
- **[NextAuth.js](https://next-auth.js.org/):** Autenticação simplificada para Next.js, incluindo login social (Google, etc.).
- **[Prisma](https://www.prisma.io/):** ORM (Object-Relational Mapping) de banco de dados robusto para consultas rápidas e intuitivas, suporte a bancos de dados relacionais e migrações fáceis.
- **[Tailwind CSS](https://tailwindcss.com/):** Framework CSS utilitário de estilos que permite construir layouts responsivos e altamente customizáveis.
- **[Shadcn/ui](https://ui.shadcn.com/):** Biblioteca de componentes pré-construídos e acessíveis baseados no Tailwind CSS, otimizados para consistência e experiência de usuário.

## Características

**Funcionalidades principais:**

1. **Autenticação com NextAuth.js:**

   - [x] Registro de usuário
   - [x] Login social (Google)
   - [x] Proteção de rotas com sessões seguras.

2. **Agendamento de Horários:**

   - [x] Agendamento de serviços em data e horário específico.
   - [x] Visualização de agendamentos passados e pendentes.
   - [x] Cancelamento de reservas.

3. **Pesquisa:**

   - [x] Pesquisa de barbearias por nome.
   - [x] Filtro de serviços oferecidos pelas barbearias.

4. **Banco de dados com Prisma:**

   - [x] Utilizado PostgreSQL para desenvolvimento local
   - [x] Suporte para migrações, seeders e queries simplificadas

5. **Estilização com Tailwind CSS e Shadcn/ui:**

   - [x] Estilos prontos e responsivos para desenvolvimento rápido
   - [x] Componentes aceessíveis e reutilizáveis, como botões, formulários, modais, etc.

6. **Dark Mode:**

   - [x] Suporte nativo para dark mode, proporcionando uma experiência de usuário mais confortável à noite

7. **Estrutura Modular:**

   - [x] Organização clara das pastas e arquivos, facilitando a manutenção e escalabilidade do projeto

8. **Extensibilidade:**
   - [x] Fácil de personalizar e estender com novas funcionalidades
   - [x] Pronto para integração com outras bibliotecas adicionais

## Construído com

**Principais tecnologias:**

- ![Next JS](https://img.shields.io/badge/Next-black?style=for-the-badge&logo=next.js&logoColor=white)
- ![TypeScript](https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white)
- ![TailwindCSS](https://img.shields.io/badge/tailwindcss-%2338B2AC.svg?style=for-the-badge&logo=tailwind-css&logoColor=white)
- ![Prisma](https://img.shields.io/badge/Prisma-3982CE?style=for-the-badge&logo=Prisma&logoColor=white)
- ![Shadcn](https://img.shields.io/badge/shadcn/ui-black?style=for-the-badge&logo=&logoColor=white)
- ![NextAuth.js](https://img.shields.io/badge/NextAuth.js-red?style=for-the-badge&logo=&logoColor=white)

## Começando

### Pré-requisito

Antes de começar a usar o projeto, certifique-se de que seu ambiente de execução atenda aos seguintes requisitos:

- **Node.js** (versão 18 ou superior)
  - Baixe e instale o Node.js em **[nodejs.org](https://nodejs.org/)**.
- **Git** (para clonar o repositório)
  - Baixe e instale o Git em **[git-scm.com](https://git-scm.com/)**.
- **Banco de Dados Relacional** (como PostgreSQL, MySQL ou SQLite)
  - Recomenda-se o uso do PostgreSQL.
  - Para SQLite, não é necessário configurar um servidor de banco de dados.
- **Gerenciador de Pacotes**
  - npm (já incluído no Node.js)
  - yarn (opcional, pode ser instalado com `npm install -g yarn`)

Com todos os pré-requisitos atendidos, você estará pronto para rodar o projeto e começar a desenvolvê-lo! 🚀

### Instalação

Instale o projeto seguindo estas etapas:

**Constua a partir do codigo fonte:**

1. Clone o repositório do projeto:

```sh
 git clone https://github.com/pauloaraujo028/fsw-barbershop
```

2. Navegue até o diretório do projeto:

```sh
 cd fsw-barbershop
```

3. Instale as dependências:

```sh
 npm install
  # ou
 yarn install
```

4. Configure as variáveis de ambiente:

   - Crie um arquivo `.env.local` na raiz do projeto.
   - Copie as variáveis de ambiente do arquivo `.env.example` para o arquivo `.env.local`.
   - Personalize as variáveis de acordo com suas necessidades.

5. Configure o Prisma:

```sh
 npx prisma generate
 npx prisma migrate dev
```

### Uso

Para iniciar o projeto, execute o seguinte comando:

```sh
 npm run dev
  # ou
 yarn dev
```

## Contribuição

- **💬 [Participe das discussões](https://github.com/pauloaraujo028/fsw-barbershop/discussions)**: Compartilhe suas ideias, forneça feedback ou faça perguntas.
- **🐛 [Relatar problemas](https://github.com/pauloaraujo028/fsw-barbershop/issues)**: Envie bugs encontrados ou registre solicitações de recursos para o projeto `fsw-barbershop`.
- **💡 [Enviar Pull Requests](https://github.com/pauloaraujo028/fsw-barbershop/blob/main/CONTRIBUTING.md)**: Revise os PRs abertos e envie seus próprios PRs.

<details open>
<summary>Diretrizes de contribuição</summary>

1. **Faça o Fork do Repositório**: Comece fazendo o fork do repositório do projeto para sua conta do github.
2. **Clonar Localmente**: Clone o repositório em sua máquina local usando um cliente git.
   ```sh
   git clone https://github.com/pauloaraujo028/fsw-barbershop
   ```
3. **Criar uma Nova Branch**: Sempre trabalhe em um novo branch, dando-lhe um nome descritivo.
   ```sh
   git checkout -b novo recurso-x
   ```
4. **Faça suas alterações**: desenvolva e teste suas alterações localmente.
5. **Faça commit de suas Alterações**: Confirme com uma mensagem clara descrevendo suas atualizações.
   ```sh
   git commit -m 'Novo recurso implementado x.'
   ```
6. **Envie para o Github**: Envie as alterações para seu repositório.
   ```sh
   git push origin novo recurso-x
   ```
7. **Enviar um Pull Request**: Crie um PR no repositório original do projeto. Descreva claramente as mudanças e suas motivações.
8. **Revisão**: Depois que seu PR for revisado e aprovado, ele será incorporado ao ramo principal. Parabéns pela sua contribuição!
</details>

<details open>
<summary>Gráfico do Contribuidor</summary>
<br>
<p align="left">
   <a href="https://github.com{/pauloaraujo028/fsw-barbershop/}graphs/contributors">
      <img src="https://contrib.rocks/image?repo=pauloaraujo028/fsw-barbershop">
   </a>
</p>
</details>

## Contato

**Paulo Araújo Dev**

[![Portfolio](https://img.shields.io/badge/Portfolio-%23000000.svg?style=for-the-badge&logo=firefox&logoColor=#FF7139)](https://pauloaraujo-portfolio.netlify.app/)
[![LinkedIn](https://img.shields.io/badge/linkedin-%230077B5.svg?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/pauloaraujo028/)
[![GitHub](https://img.shields.io/badge/github-%23121011.svg?style=for-the-badge&logo=github&logoColor=white)](https://github.com/pauloaraujo028)
[![Gmail](https://img.shields.io/badge/Gmail-D14836?style=for-the-badge&logo=gmail&logoColor=white)](mailto:pauloaraujo.phz@gmail.com)
