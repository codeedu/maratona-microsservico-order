<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="http://maratona.fullcycle.com.br/public/img/logo-maratona.png"/></a>
</p>

## Descrição

Microsserviço de pedidos construído com Nest.js Framework + React.js + RabbitMQ

## Rodar a aplicação

#### Antes de começar

O microsserviço de pedidos necessita que os microsserviços de Drivers e Simulador já estejam rodando antes de inicia-lo.
Se você não os tem, clone-os aqui: 

[Microsserviço Drivers](https://github.com/codeedu/maratona-microsservico-drivers)

[Microsserviço Simulador](https://github.com/codeedu/maratona-microsservico-simulador)


#### Rodar o RabbitMQ

Clone o projeto de configuração Docker do RabbitMQ neste [link](https://github.com/codeedu/maratona-microsservico-rabbitmq.git). Rode ```docker-compose up```. 

#### Crie o .env e configure as variáveis de ambiente

```bash
$ cp .env.example .env
```

#### Crie os containers com Docker

```bash
$ docker-compose up
```

#### Accesse no browser

```
http://localhost:3000
```
