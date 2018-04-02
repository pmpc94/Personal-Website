$(function() {

  var t = {
    title: {
      pt: "O cantinho do Pedro",
	  en: "Pedro's corner"
    },
    job: {
      pt: "Engenheiro de Software @ Noesis",
	  en: "Software Engineer @ Noesis"
    },
    academic: {
      pt: "Estudante de Mestrado em TI @ FCT-UNL",
	  en: "IT Master Student @ FCT-UNL"
    },
    certification: {
      pt: "Certificado Profissional Microsoft",
	  en: "Microsoft Certified Professional"
    },
    noesis: {
      pt: "Em <b>2018</b>, concluí que tinha de mudar algo na minha carreira e procurar por objetivos mais ambiciosos. A <a href=https://noesis.pt>Noesis</a> foi uma <b>excelente</b> escolha. A empresa apresenta uma política que aposta em tecnologias emergentes e que têm tido um bom resultado no mercado da informática. Desde o meu primeiro dia que percebi que tinha entrado no sítio certo. Existe uma enorme entre-ajuda entre todos os elementos para levar o nome da empresa e de todos, a um patamar cada vez mais alto.",
	  en: "In <b>2018</b>, I decided to take a shift in my career to pursue for bigger goals. <a href=https://noesis.pt>Noesis</a> was a <b>great</b> choice. The company itself is ambitious and likes to bet on state-of-the-art technologies, which makes everything more interesting. From day zero I could see that these professionals knew what they were doing. They won't be satisfied by just being part of the game... unless they <b>win</b> it."
    },
    gmv_first: {
	  pt: "Foi no ano de <b>2015</b> que iniciei a minha carreira profissional, como estagiário na multinacional <a href=https://gmv.com>GMV</a>. As tarefas que me foram atribuídas consistiam em testar um sistema operativo de tempo real na indústria aviónica.",
      en: "In <b>2015</b>, as a Trainee, I joined <a href=https://gmv.com>GMV</a>, a multinational company. The task consisted in testing a real-time operating system concerning the avionics industry."
    },
	gmv_second: {
	  pt: "No início de <b>2016</b>, decidi começar um novo desafio, como <b>Engenheiro de Software</b>. Apesar de as minhas funções serem relacionadas com desenvolvimento web como <b>Full-Stack</b>, também tive alguma responsabilidade nalgumas reuniões com clientes na recolha, análise e teste de requisitos. <br> Em Junho de <b>2017</b>, decidi sair da empresa para ter uma última experiência Erasmus, sem nunca esquecer as a oportunidade e conhecimento que me foram proporcionados. Um grande <b>obrigado</b>.",
	  en: "In the beginning of <b>2016</b>, I decided to take a new challenge as a <b>Software Engineer</b>. Despite my main functions being related to <b>Full-Stack</b> web development, I also had my fair quote of responsibility in interacting with clients and being present in several meetings. <br> In July <b>2017</b>, I decided to leave the company to yet another Erasmus experience, however, never forgetting all the amazing things that this enterprise was able to provide me. To them, <b>thank you</b>."
	},
    fct_unl: {
      pt: "Neste momento, estou a terminar a minha tese de Mestrado na <a href=https://fct.unl.pt>Faculdade de Ciências e Universidade Nova de Lisboa</a>. A minha tese está relacionada com o domínio específico de linguagens de modelação. Durante o meu percurso académico estudei na República Checa e na Polónia na <b>Brno University Of Technology</b> e <b>Poznan University of Technology</b>, respetivamente. Pode também, se pretender, fazer o download da minha preparação de tese de mestrado.",
	  en: "I'm currently finishing my Master's degree @ <a href=https://fct.unl.pt>Faculdade de Ciências of Universidade Nova de Lisboa</a>. My Master Thesis is related to Domain Specific Modeling Languages in the Model Driven Development context. During my course, I studied both in Czechia and Poland in <b>Brno University Of Technology</b> and <b>Poznan University of Technology</b>, respectively."
    },
	game:{
	  pt: "Jogos",
	  en: "Gaming"
	},
    gaming: {
      pt: "Desde novo que ganhei o bichinho em jogos de computador. Permite-me desconstrair e libertar-me dos pensamentos do dia a dia.",
	  en: "For a long time that I enjoy spending a considerable amount of time playing video games. It makes me release from the everyday stress while having lots of fun with my friends."
    },
	read:{
	  pt: "Leitura",
	  en: "Reading"
	},
    reading: {
      pt: "Há sempre algo que não sabemos. Tenho uma enorme vontade em aprender coisas novas. Sempre que termino um livro, surge-me uma vontade inexplicável de comprar o próximo. Parece que vou estar preso neste ciclo enquanto o tempo e o dinheiro assim me permitirem :-)",
      en: "There's always something we don't know. I have a huge eagerness to learn new things. Each time I finish a book I have the urge to buy the next one and learn new things again. I seem to be stuck in this loop as long as I will have the money and time to afford it :-)"
    },
	travel: {
	  pt: "Viajar",
	  en: "Travelling"	
	},
    travelling: {
	  pt: "É impossível parar. É assim que me sinto em relação a viajar pelo mundo desde a minha primeira experiência Erasmus. A vida é demasiado preciosa para ficarmos parados por muito tempo.",
      en: "It's impossible to stop. That's how I feel about travelling around the world right after my first Erasmus experience. Life is way too precious for us to stay still for a longish time."
    },
	thesis_pre: {
	  pt: "Sinta-se livre também para fazer o ",
	  en: "Feel also free, to "
	},
	thesis_post: {
	  pt: " da <b>preparação</b> da minha tese de mestrado.",
	  en: " my Master Thesis's <b>preparation</b> paper."
	}
  };
  var _t = $('body').translate({lang: "en", t: t});
  var str = _t.g("translate");
  console.log(str);


  $(".lang_selector").click(function(ev) {
    var lang = $(this).attr("data-value");
    _t.lang(lang);

    console.log(lang);
    ev.preventDefault();
  });



});