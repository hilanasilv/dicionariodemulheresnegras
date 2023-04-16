function carregaDicionario() {
    var biografias = {
        bio01: {
            nome: "Angela Davis",
            imagem: "https://i.postimg.cc/LJ6SF21r/angela-davis.png",
            descricao: "Angela Yvonne Davis é uma professora e filósofa socialista estado-unidense que alcançou notoriedade mundial na década de 1970 como integrante do Partido Comunista dos Estados Unidos, dos Panteras Negras, por sua militância pelos direitos das mulheres e contra a discriminação social e racial nos Estados Unidos e por ser personagem de um dos mais polêmicos e famosos julgamentos criminais da recente história dos Estados Unidos.",
            citacao: "Não aceito mais as coisas que não posso mudar, estou mudando as coisas que não posso aceitar."
        },

        bio02: {
            nome: "Audre Lorde",
            imagem: "https://hips.hearstapps.com/hmg-prod/images/gettyimages-694880169-copy.jpg?resize=1200:*",
            descricao: "Audre Lorde nasceu em Nova Iorque no ano de 1934, foi uma importante escritora, poeta, ativista e é referência para os estudos do feminismo negro e movimento LGBTQI+. Engajada com a luta das mulheres sul-africanas contra o apartheid, em 1985 criou a rede de apoio Sisterhood in Support of Sisters in South Africa. Audre Lorde recebeu diversos prêmios ao longo de sua carreira, entre os quais podem-se destacar as bolsas concedidas pelo National Endowment for the Arts (de 1968 e 1981) e pelo Creative Artists Public Service Program (de 1972 e 1976) e o prêmio de excelência literária de Manhattan, de 1987. Em 1991, foi nomeada poeta laureada pelo estado de Nova York.",
            citacao: "Meus silêncios não me protegeram. Seu silêncio não vai proteger você."
        },

        bio03: {
            nome: "bell hooks",
            imagem: "https://ea9vhhuzko5.exactdn.com/wp-content/uploads/2021/12/bell-hooks1.jpeg?strip=all&lossy=1&ssl=1",
            descricao: "Gloria Jean Watkins, mais conhecida pelo pseudônimo bell hooks, foi uma autora, professora e teórica feminista norte-americana engajada numa crítica anti-capitalista. No Brasil, a autora ficou conhecida a partir do seu primeiro livro “Ain’t no woman?” onde discute o racismo e o sexismo a partir do discurso da abolicionista Sojourner Truth. Bell Blair Hooks era o nome de sua bisavó materna, para bell hooks, a partir do pseudônimo ela pode reivindicar uma identidade que a garantia direito à fala e usá-lo com grafia minúscula não era uma forma de esconder sua identidade, mas de torná-la menos relevante que sua escrita. bell hooks faleceu em 2018 e deixou um legado de mais de trinta livros publicados.",
            citacao: "O amor é profundamente político. Nossa revolução mais profunda virá quando entendermos essa verdade."
        },

        bio04: {
            nome: "Carolina de Jesus",
            imagem: "https://www.otempo.com.br/image/contentid/policy:1.2467395:1617398387/167261581-484247406345943-7172818786748535039-n-jpg.jpg",
            descricao: "Carolina Maria de Jesus foi uma escritora brasileira, conhecida por seu livro Quarto de Despejo: Diário de uma Favelada publicado em 1960. Considerada uma das primeiras e mais importantes escritoras negras do Brasil. A autora viveu boa parte de sua vida na favela do Canindé, na zona norte de São Paulo, sustentando a si mesma e seus três filhos como catadora de papéis. Em 1958 tem seu diário publicado sob o nome Quarto de Despejo, com auxílio do jornalista Audálio Dantas. O livro fez um enorme sucesso e chegou a ser traduzido para quatorze línguas.",
            citacao: "Ah, comigo o mundo vai modificar-se. Não gosto do mundo como ele é."
        },

        bio05: {
            nome: "Conceição Evaristo",
            imagem: "https://www.p-o-e-s-i-a.org/wp-content/uploads/2020/07/concei%C3%A7%C3%A3o-scaled-e1595448754373.jpg",
            descricao: "Maria da Conceição Evaristo de Brito nasceu em Belo Horizonte, em 1946. De origem humilde, migrou para o Rio de Janeiro na década de 1970. Graduada em Letras pela UFRJ, trabalhou como professora da rede pública de ensino da capital fluminense. É Mestre em Literatura Brasileira pela PUC do Rio de Janeiro, com a dissertação Literatura Negra: uma poética de nossa afro-brasilidade (1996), e Doutora em Literatura Comparada na Universidade Federal Fluminense, com a tese Poemas malungos, cânticos irmãos (2011), na qual estuda as obras poéticas dos afro-brasileiros Nei Lopes e Edimilson de Almeida Pereira em confronto com a do angolano Agostinho Neto.",
            citacao: "O importante não é ser o primeiro ou primeira, o importante é abrir caminhos."
        },

        bio06: {
            nome: "Lélia Gonzalez",
            imagem: "https://i.postimg.cc/2q1f3GTG/lelia-gonzalez.png",
            descricao: "Lélia Gonzalez foi uma intelectual, política, professora e antropóloga brasileira. Ajudou a fundar instituições como o Movimento Negro Unificado (MNU), o Instituto de Pesquisas das Culturas Negras (IPCN), o Coletivo de Mulheres Negras N'Zinga e o Olodum. Sua militância em defesa da mulher negra levou-a ao Conselho Nacional dos Direitos da Mulher (CNDM), no qual atuou de 1985 a 1989. Foi candidata a deputada federal pelo PT, elegendo-se primeira suplente. Nas eleições seguintes, em 1986, candidatou-se a deputada estadual pelo PDT, novamente elegendo-se suplente.",
            citacao: "A gente não nasce negro, a gente se torna negro. É uma conquista dura, cruel e que se desenvolve pela vida da gente afora"
        },
        
        bio07: {
            nome: "Marielle Franco",
            imagem: "https://s2.glbimg.com/lFoEDrCXnDonjoG1AY4VO8he3sU=/top/e.glbimg.com/og/ed/f/original/2018/03/15/marielle5.jpg",
            descricao: "Marielle Francisco da Silva, conhecida como Marielle Franco, foi uma socióloga, feminista, militante dos direitos humanos e política brasileira. Filiada ao Partido Socialismo e Liberdade (PSOL), elegeu-se vereadora do Rio de Janeiro para a Legislatura 2017-2020, durante a eleição municipal de 2016, com a quinta maior votação. Crítica da intervenção federal no Rio de Janeiro e da Polícia Militar, denunciava constantemente abusos de autoridade por parte de policiais contra moradores de comunidades carentes. Em 14 de março de 2018, foi assassinada a tiros.",
            citacao: "Quantos mais vão precisar morrer para que essa guerra aos pobres acabe?"
        },

        bio08: {
            nome: "Rosa Parks",
            imagem: "https://i.postimg.cc/K1q2Zw74/rosa-parks.png",
            descricao: "Rosa Louise McCauley, mais conhecida por Rosa Parks, foi uma costureira negra norte-americana, símbolo do movimento dos direitos civis dos negros nos Estados Unidos. Ficou famosa, em 1º de dezembro de 1955, por ter-se recusado frontalmente a ceder o seu lugar no ônibus a um branco, tornando-se o estopim do movimento que foi denominado boicote aos ônibus de Montgomery e posteriormente viria a marcar o início da luta antissegregacionista.",
            citacao: "⁠Você nunca deve ter medo do que está fazendo quando está certo."
        },

        bio09: {
            nome: "Sueli Carneiro",
            imagem: "https://revistatrip.uol.com.br/upload/2018/11/5bec81b1ac0c5/trip-transformadores-sueli-corpo-1.png",
            descricao: "Aparecida Sueli Carneiro nasceu em 1950, na cidade de São Paulo. É filósofa, escritora e ativista do movimento social negro brasileiro. Sueli Carneiro é fundadora e atual diretora do Geledés - Instituto da Mulher Negra e considerada uma das principais autoras do feminismo negro no Brasil.",
            citacao: "Creio que os mitos, revelam potencialidade também presentes no real, então, um país que foi capaz de construir a mais bela fábula sobre democracia racial, deve ser talvez, capaz também de torná-la realidade."
        }
    };

    var content = document.getElementById("content");

    for (var bio in biografias) {
        content.innerHTML += 
        '<div class="card">' + 
        '<img src="'+ 
        biografias[bio].imagem +
        '"/>' +
        "<details>" + 
        "<summary>" + 
        biografias[bio].nome + 
        "</summary>" + 
        "<p>" + 
        biografias[bio].descricao + 
        "</p>" +
        "<blockquote><q>" +
        biografias[bio].citacao +
        "</q></blockquote>" +
        "</details></div>";
    }

        console.log((bio += " " + "Nome: " + biografias[bio].nome + " " + "Minibio: " + biografias[bio].descricao + " " + "Citação: " + biografias[bio].citacao));
    }

carregaDicionario();
