

<p align="center"><img src="https://i.imgur.com/FwIeNCM.gif" alt="Logo" width="225"/></p>

Desinforma.me is a computer and mobile game that seeks to teach people to distinguish fake news from genuine news.

Project used as submission for [Arquivo.pt Competition 2021](https://sobre.arquivo.pt/pt/colabore/premios-arquivo-pt/premio-arquivo-pt-2021/)

Presentation: [Youtube](https://www.youtube.com/watch?v=LBZ2CsDuhKg)

Project Link: [desinforma.me](https://www.desinforma.me/)

[<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/5c/Flag_of_Portugal.svg/320px-Flag_of_Portugal.svg.png" width="15px"/> Versão Portuguesa](README.md)

## Description

We live in the information age. We have a world just a click away but navigating it and distinguishing facts from falsehoods is not always an easy task. We prefer to believe that we are not easily deceived on the Internet. However, the recent phenomenon of fake news reveals the opposite trend. This type of news takes advantage of our prejudices to cause misinformation. They quickly spread, become viral on social media, and, as proven in recent years, can have a significant impact on public opinion. On the other hand, the population's credibility in newspapers and other traditional news sources has been declining, further aggravating the problem. Staying informed about political and social events has never been so complicated. 

Being informed is a right and a duty. It is imperative that we try to be educated citizens and ensure that we have an accurate view of reality. After all, the fight against misinformation is about each and every one of us. Ensuring a better future implies being aware of the present.
We introduce Desinforma.me, a tool to raise awareness about fake news in the form of a fun game. In this game, users have to distinguish genuine news from fake news.

All the genuine news were extracted from Arquivo.pt which allowed us to get a wide variety of themes, sources, and news from different years. The fake news were generated from the real ones, substituting the entities in them (for example, changing Cristiano Ronaldo to Marcelo Rebelo de Sousa).

<!-- For more information about the project: [submission document for the Arquivo.pt 2021 competition](https://drive.google.com/file/d/1-WiZT_NodREeGf3-rSSuxRoIO61uuKJQ/view?usp=sharing) -->

## Technology Stack

The real news were extracted from the [Arquivo.pt](https://arquivo.pt/) public API using (mainly) [Python](https://www.python.org/), [Jupyter Notebook](https://jupyter.org) and the [Newspaper](https://newspaper.readthedocs.io/en/latest/) library. Consequently, we proceeded to create fake news from the real one also in Python using the [spaCy](https://spacy.io/models/pt) library.

The web application was created using the [React](https://reactjs.org/) framework and is powered by the set of news created in the previous step.

## Authors
* Ana Sá Silva (up201604105@fe.up.pt)
* Fábio Oliveira (up201604796@fe.up.pt)
* Ricardo Moura (up201604912@fe.up.pt)
