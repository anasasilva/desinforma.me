

<p align="center">
  <img src="https://i.imgur.com/FwIeNCM.gif" alt="Logo" width="225"/> 
  <br>
  <a href="README.en.md">
    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/0b/English_language.svg/320px-English_language.svg.png" width="20px" height="13px"/> English Version
  </a>
  <br><br>
</p>

O Desinforma.me é um jogo para computador e telemóvel que procura ensinar as pessoas a distinguir notícias falsas de genuínas.

Projeto usado como submissão para a [Competição Arquivo.pt 2021](https://sobre.arquivo.pt/pt/colabore/premios-arquivo-pt/premio-arquivo-pt-2021/)

Apresentação: [Youtube](https://www.youtube.com/watch?v=LBZ2CsDuhKg)

Link do Projeto: [desinforma.me](https://www.desinforma.me/)


## Descrição

Vivemos na era da informação. Temos um mundo à distância de um clique, mas navegá-lo e distinguir factos de falsidades nem sempre é tarefa fácil. Preferimos acreditar que não somos facilmente enganados na internet. No entanto, o recente fenómeno de fake news revela a tendência contrária. Estas notícias tomam proveito dos nossos preconceitos para causar desinformação. Facilmente se espalham, tornando-se virais nas redes sociais e como provado nos últimos anos, podem ter um impacto significativo na opinião pública. Por outro lado, a credibilidade da população em jornais e outras fontes de notícias tradicionais tem vindo a diminuir, agravando ainda mais o problema. Estar a par dos acontecimentos políticos e sociais nunca foi tão complicado. 

Estar informado é um direito e um dever. É imperativo procurarmos ser cidadãos educados e garantirmos que temos uma visão fiel à realidade. Afinal de tudo, o combate à desinformação passa por cada um de nós. Assegurar um futuro melhor implica estar consciente do presente.
Introduzimos o Desinforma.me, uma ferramenta de sensibilização sobre as fake news no formato de um jogo divertido. Neste jogo, os utilizadores têm que distinguir notícias genuínas de notícias falsas.

Introduzimos o Desinforma.me, uma ferramente de sensibilização sobre as fake news no formato de um jogo divertido. Neste jogo, os utilizadores têm que distinguir notícias genuínas de notícias falsas.

Todas as notícias verdadeiras foram extraídas do Arquivo.pt o que permitiu obter uma grande variedade de temáticas, fontes e notícias de diferentes anos. As notícias falsas foram geradas a partir das verdadeiras, substituindo as entidades nelas presentes (por exemplo, alterar Cristiano Ronaldo para Marcelo Rebelo de Sousa).

Para mais informações sobre o projeto remetemos para o [documento de submissão para a competição Arquivo.pt 2021.](https://drive.google.com/file/d/1-WiZT_NodREeGf3-rSSuxRoIO61uuKJQ/view?usp=sharing)

## Stack Tecnológica

As notícias reais foram extraídas a partir da API pública do [Arquivo.pt](https://arquivo.pt/) usando (principalmente) [Python](https://www.python.org/), [Jupyter Notebook](https://jupyter.org) e a biblioteca [Newspaper](https://newspaper.readthedocs.io/en/latest/). Consequentemente procedeu-se à criação das notícias falsas a partir da verdadeiras também em Python utilizando a biblioteca [spaCy](https://spacy.io/models/pt).

A aplicação web foi criada usando a framework [React](https://reactjs.org/) e é alimentada pelo conjunto de notícias criado no passo anterior.

## Autores
* Ana Sá Silva (up201604105@fe.up.pt)
* Fábio Oliveira (up201604796@fe.up.pt)
* Ricardo Moura (up201604912@fe.up.pt)
